import {
  gs,
  GlideRecord,
  GlideDateTime,
} from "@servicenow/glide";

/**
 * QueueSmart stores ETA as MINUTES.
 *
 * average_service_time may be either:
 *   - a normal numeric field containing minutes, OR
 *   - a ServiceNow Duration field whose display value can look like:
 *       00:10:00
 *       00:15:00
 *       01:00:00
 *
 * Always convert it to a clean integer number of minutes.
 */
function getServiceMinutes(
  service: GlideRecord
): number {
  const displayValue =
    service.getDisplayValue(
      "average_service_time"
    ) || "";

  const rawValue =
    service.getValue(
      "average_service_time"
    ) || "";

  /*
   * Case 1:
   * ServiceNow Duration display value.
   *
   * Examples:
   *   00:05:00
   *   00:10:00
   *   00:15:00
   *   01:00:00
   */
  if (displayValue.indexOf(":") !== -1) {
    const parts = displayValue.split(":");

    if (parts.length === 3) {
      const hours = Number(parts[0]);
      const minutes = Number(parts[1]);
      const seconds = Number(parts[2]);

      if (
        Number.isFinite(hours) &&
        Number.isFinite(minutes) &&
        Number.isFinite(seconds)
      ) {
        const totalMinutes =
          (hours * 60) +
          minutes +
          (seconds >= 30 ? 1 : 0);

        if (
          Number.isFinite(totalMinutes) &&
          totalMinutes > 0 &&
          totalMinutes <= 120
        ) {
          return totalMinutes;
        }
      }
    }
  }

  /*
   * Case 2:
   * Display value is already a normal number.
   *
   * Example:
   *   "10"
   *   "15"
   *   "20"
   */
  const displayNumber =
    Number(displayValue);

  if (
    Number.isFinite(displayNumber) &&
    displayNumber > 0 &&
    displayNumber <= 120
  ) {
    return Math.round(displayNumber);
  }

  /*
   * Case 3:
   * Fallback for a raw numeric value.
   *
   * If ServiceNow returned a duration internally as
   * milliseconds, convert it to minutes.
   */
  const rawNumber =
    Number(rawValue);

  if (
    Number.isFinite(rawNumber) &&
    rawNumber > 0
  ) {
    const minutesFromMilliseconds =
      rawNumber / 60000;

    if (
      Number.isFinite(
        minutesFromMilliseconds
      ) &&
      minutesFromMilliseconds > 0 &&
      minutesFromMilliseconds <= 120
    ) {
      return Math.max(
        1,
        Math.round(
          minutesFromMilliseconds
        )
      );
    }

    /*
     * If the raw number itself is a reasonable
     * minute value, use it.
     */
    if (rawNumber <= 120) {
      return Math.max(
        1,
        Math.round(rawNumber)
      );
    }
  }

  /*
   * Safe QueueSmart default.
   *
   * A bad service configuration must NEVER
   * create a gigantic ETA.
   */
  return 10;
}


export function generateToken(
  request: any,
  response: any
) {
  try {

    /*
     * ====================================================
     * 1. CURRENT LOGGED-IN USER
     * ====================================================
     */

    const userId =
      gs.getUserID();

    if (!userId) {
      response.setStatus(401);

      response.setBody({
        success: false,
        message:
          "Unable to identify logged-in student.",
      });

      return;
    }


    /*
     * ====================================================
     * 2. READ REQUEST BODY
     * ====================================================
     */

    let payload: any = {};

    try {
      const body =
        request?.body?.data ??
        request?.body ??
        {};

      payload =
        typeof body === "string"
          ? JSON.parse(body)
          : body;
    } catch {
      payload = {};
    }


    const serviceId =
      payload?.serviceId ||
      payload?.service ||
      "";

    const selectedId =
      payload?.counterId ||
      payload?.workplaceId ||
      payload?.counter ||
      "";


    if (!serviceId) {
      response.setStatus(400);

      response.setBody({
        success: false,
        message:
          "Please select a service.",
      });

      return;
    }


    if (!selectedId) {
      response.setStatus(400);

      response.setBody({
        success: false,
        message:
          "Please select a workplace.",
      });

      return;
    }


    /*
     * ====================================================
     * 3. PREVENT DUPLICATE WAITING TOKEN
     * ====================================================
     */

    const existing =
      new GlideRecord(
        "x_snc_queuesmart_queue"
      );

    existing.addQuery(
      "student",
      userId
    );

    existing.addQuery(
      "status",
      "waiting"
    );

    existing.setLimit(1);
    existing.query();

    if (existing.next()) {
      response.setStatus(400);

      response.setBody({
        success: false,
        message:
          "You already have an active queue token.",
      });

      return;
    }


    /*
     * ====================================================
     * 4. LOAD SERVICE
     * ====================================================
     */

    const service =
      new GlideRecord(
        "x_snc_queuesmart_service"
      );

    if (!service.get(serviceId)) {
      response.setStatus(400);

      response.setBody({
        success: false,
        message:
          "Selected service was not found.",
      });

      return;
    }


    const serviceName =
      service.getDisplayValue(
        "service_name"
      ) ||
      service.getValue(
        "service_name"
      ) ||
      "";


    /*
     * ====================================================
     * 5. GET CORRECT SERVICE TIME
     * ====================================================
     *
     * IMPORTANT:
     *
     * We do NOT blindly do:
     *
     *   Number(service.getValue(...))
     *
     * because a Duration field can return an
     * internal numeric representation rather than
     * human-readable minutes.
     */

    const averageServiceTime =
      getServiceMinutes(
        service
      );


    /*
     * ====================================================
     * 6. RESOLVE COUNTER
     * ====================================================
     *
     * Frontend sends the selected workplace.
     *
     * Queue record expects:
     *
     *   counter
     *
     * So resolve workplace -> active counter.
     */

    let counterId = "";


    /*
     * First:
     * Check whether selectedId itself is a counter.
     */

    const directCounter =
      new GlideRecord(
        "x_snc_queuesmart_counter"
      );

    if (
      directCounter.get(
        selectedId
      )
    ) {

      const active =
        directCounter.getValue(
          "active"
        );

      if (
        active === "true" ||
        active === "1"
      ) {
        counterId =
          directCounter.getUniqueValue();
      }
    }


    /*
     * Second:
     * Treat selectedId as workplace.
     */

    if (!counterId) {

      const counter =
        new GlideRecord(
          "x_snc_queuesmart_counter"
        );

      counter.addQuery(
        "workplace",
        selectedId
      );

      counter.addQuery(
        "active",
        true
      );

      counter.orderBy(
        "name"
      );

      counter.setLimit(1);

      counter.query();

      if (counter.next()) {
        counterId =
          counter.getUniqueValue();
      }
    }


    /*
     * Third:
     * Fallback to service workplace.
     */

    if (!counterId) {

      const serviceWorkplace =
        service.getValue(
          "workplace"
        ) || "";

      if (serviceWorkplace) {

        const counter =
          new GlideRecord(
            "x_snc_queuesmart_counter"
          );

        counter.addQuery(
          "workplace",
          serviceWorkplace
        );

        counter.addQuery(
          "active",
          true
        );

        counter.orderBy(
          "name"
        );

        counter.setLimit(1);

        counter.query();

        if (counter.next()) {
          counterId =
            counter.getUniqueValue();
        }
      }
    }


    if (!counterId) {

      response.setStatus(400);

      response.setBody({
        success: false,
        message:
          "No active counter is available for the selected workplace.",
      });

      return;
    }


    /*
     * ====================================================
     * 7. COUNT PEOPLE AHEAD
     * ====================================================
     */

    const waitingQueue =
      new GlideRecord(
        "x_snc_queuesmart_queue"
      );

    waitingQueue.addQuery(
      "counter",
      counterId
    );

    waitingQueue.addQuery(
      "status",
      "waiting"
    );

    waitingQueue.query();


    let peopleAhead = 0;

    while (
      waitingQueue.next()
    ) {
      peopleAhead++;
    }


    /*
     * ====================================================
     * 8. CALCULATE POSITION
     * ====================================================
     */

    const queuePosition =
      peopleAhead + 1;


    /*
     * ====================================================
     * 9. CALCULATE ETA
     * ====================================================
     *
     * Example:
     *
     * peopleAhead = 0
     * service time = 10
     * ETA = 0
     *
     * peopleAhead = 1
     * service time = 10
     * ETA = 10
     *
     * peopleAhead = 2
     * service time = 10
     * ETA = 20
     */

    const estimatedWaitTime =
      peopleAhead *
      averageServiceTime;


    /*
     * ====================================================
     * 10. DYNAMIC STAFF ASSIGNMENT
     * ====================================================
     */

    let staffId = "";

    const staffRecords =
      new GlideRecord(
        "x_snc_queuesmart_staff"
      );

    staffRecords.addQuery(
      "counter",
      counterId
    );

    staffRecords.addQuery(
      "active",
      true
    );

    staffRecords.query();


    let bestStaffId = "";

    let lowestWaitingCount =
      Number.MAX_SAFE_INTEGER;


    while (
      staffRecords.next()
    ) {

      const candidateStaffId =
        staffRecords.getUniqueValue();


      const staffQueue =
        new GlideRecord(
          "x_snc_queuesmart_queue"
        );

      staffQueue.addQuery(
        "staff",
        candidateStaffId
      );

      staffQueue.addQuery(
        "status",
        "waiting"
      );

      staffQueue.query();


      let staffWaitingCount =
        0;


      while (
        staffQueue.next()
      ) {
        staffWaitingCount++;
      }


      if (
        staffWaitingCount <
        lowestWaitingCount
      ) {

        lowestWaitingCount =
          staffWaitingCount;

        bestStaffId =
          candidateStaffId;
      }
    }


    if (bestStaffId) {
      staffId =
        bestStaffId;
    }


    /*
     * ====================================================
     * 11. ARRIVAL TIME
     * ====================================================
     */

    const now =
      new GlideDateTime();

    const arrivalTime =
      now.getDisplayValue();


    /*
     * ====================================================
     * 12. CREATE QUEUE RECORD
     * ====================================================
     */

    const queue =
      new GlideRecord(
        "x_snc_queuesmart_queue"
      );

    queue.initialize();


    queue.setValue(
      "student",
      userId
    );


    queue.setValue(
      "service",
      serviceId
    );


    queue.setValue(
      "counter",
      counterId
    );


    if (staffId) {
      queue.setValue(
        "staff",
        staffId
      );
    }


    queue.setValue(
      "queue_position",
      queuePosition
    );


    /*
     * IMPORTANT:
     *
     * estimated_wait_time is being written
     * as a clean number of MINUTES.
     */

    queue.setValue(
      "estimated_wait_time",
      estimatedWaitTime
    );


    queue.setValue(
      "arrival_time",
      arrivalTime
    );


    queue.setValue(
      "status",
      "waiting"
    );


    const newId =
      queue.insert();


    if (!newId) {

      response.setStatus(500);

      response.setBody({
        success: false,
        message:
          "Queue record could not be created.",
      });

      return;
    }


    /*
     * ====================================================
     * 13. LOAD CREATED RECORD
     * ====================================================
     */

    const created =
      new GlideRecord(
        "x_snc_queuesmart_queue"
      );


    if (
      !created.get(newId)
    ) {

      response.setStatus(500);

      response.setBody({
        success: false,
        message:
          "Token was created but could not be loaded.",
      });

      return;
    }


    /*
     * ====================================================
     * 14. RETURN RESPONSE
     * ====================================================
     */

    response.setStatus(201);


    response.setBody({

      success: true,

      message:
        "Token generated successfully.",

      queue: {

        sys_id:
          created.getUniqueValue(),

        number:
          created.getValue(
            "number"
          ),

        service:
          created.getDisplayValue(
            "service"
          ) ||
          serviceName,

        counter:
          created.getDisplayValue(
            "counter"
          ) ||
          "",

        staff:
          created.getDisplayValue(
            "staff"
          ) ||
          "",

        queue_position:
          parseInt(
            created.getValue(
              "queue_position"
            ) || "1",
            10
          ),

        people_ahead:
          peopleAhead,

        estimated_wait_time:
          estimatedWaitTime,

        average_service_time:
          averageServiceTime,

        status:
          created.getDisplayValue(
            "status"
          ),

        arrival_time:
          created.getValue(
            "arrival_time"
          ),
      },
    });

  } catch (error: any) {

    response.setStatus(500);

    response.setBody({
      success: false,
      message:
        error?.message ||
        "Unable to generate token.",
    });
  }
}