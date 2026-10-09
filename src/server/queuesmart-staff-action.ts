import { gs, GlideRecord } from "@servicenow/glide";

export function process(
  request: any,
  response: any,
  forcedOperation?: string
) {
  try {
    const userId = gs.getUserID();

    if (!userId) {
      response.setStatus(401);
      response.setBody({
        success: false,
        message: "Unable to identify the current ServiceNow user.",
        queue_record: null,
      });
      return;
    }

    if (!gs.hasRole("x_snc_queuesmart.staff")) {
      response.setStatus(403);
      response.setBody({
        success: false,
        message: "Staff access is required.",
        queue_record: null,
      });
      return;
    }

    let operation = forcedOperation || "";

    if (!operation) {
      try {
        const body = request?.body;
        operation =
          typeof body === "string"
            ? JSON.parse(body)?.operation || ""
            : body?.operation || "";
      } catch (_) {
        operation = "";
      }
    }

    if (!operation) {
      operation = "call-next";
    }

    /*
     * Resolve:
     * logged-in sys_user -> user name -> QueueSmart Staff.staff_name
     *
     * We intentionally do not use QueueSmart Staff.user because
     * that field is currently not populated/exposed on the Staff records.
     */
    const userGR = new GlideRecord("sys_user");
    userGR.addQuery("sys_id", userId);
    userGR.setLimit(1);
    userGR.query();

    if (!userGR.next()) {
      response.setStatus(200);
      response.setBody({
        success: false,
        message: "Current ServiceNow user could not be found.",
        queue_record: null,
      });
      return;
    }

    const staffName = userGR.getValue("name");

    if (!staffName) {
      response.setStatus(200);
      response.setBody({
        success: false,
        message: "Current ServiceNow user has no display name.",
        queue_record: null,
      });
      return;
    }

    const staffGR = new GlideRecord(
      "x_snc_queuesmart_staff"
    );

    staffGR.addQuery("staff_name", staffName);
    staffGR.addQuery("active", true);
    staffGR.setLimit(1);
    staffGR.query();

    if (!staffGR.next()) {
      response.setStatus(200);
      response.setBody({
        success: false,
        message:
          "No active QueueSmart Staff record matches the current user.",
        queue_record: null,
      });
      return;
    }

    const staffId = staffGR.getUniqueValue();

    const queue = new GlideRecord(
      "x_snc_queuesmart_queue"
    );

    if (operation === "call-next") {
      queue.addQuery("staff", staffId);
      queue.addQuery("status", "waiting");
      queue.orderBy("queue_position");
      queue.orderBy("sys_created_on");
    } else if (operation === "start-service") {
      queue.addQuery("staff", staffId);
      queue.addQuery("status", "called");
      queue.orderBy("called_time");
      queue.orderBy("sys_created_on");
    } else if (operation === "complete-service") {
      queue.addQuery("staff", staffId);
      queue.addQuery("status", "serving");
      queue.orderBy("sys_created_on");
    } else if (operation === "mark-unavailable") {
      queue.addQuery("staff", staffId);
      queue.addQuery("status", "called");
      queue.orderBy("called_time");
      queue.orderBy("sys_created_on");
    } else {
      response.setStatus(400);
      response.setBody({
        success: false,
        message: "Unknown staff operation.",
        queue_record: null,
      });
      return;
    }

    queue.setLimit(1);
    queue.query();

    if (!queue.next()) {
      response.setStatus(200);
      response.setBody({
        success: false,
        message:
          operation === "call-next"
            ? "No waiting student is available for this staff member."
            : operation === "start-service"
            ? "No called queue token is available for this staff member."
            : operation === "complete-service"
            ? "No serving queue token is available for this staff member."
            : "No called queue token is available for this operation.",
        queue_record: null,
      });
      return;
    }

    let newStatus = "";

    if (operation === "call-next") {
      newStatus = "called";
    } else if (operation === "start-service") {
      newStatus = "serving";
    } else if (operation === "complete-service") {
      newStatus = "completed";
    } else if (operation === "mark-unavailable") {
      newStatus = "waiting";
    }

    queue.setValue("status", newStatus);

    const updatedId = queue.update();

    if (!updatedId) {
      response.setStatus(500);
      response.setBody({
        success: false,
        message: "Queue status update was not persisted.",
        queue_record: null,
      });
      return;
    }

    const verifyGR = new GlideRecord(
      "x_snc_queuesmart_queue"
    );

    verifyGR.addQuery(
      "sys_id",
      queue.getUniqueValue()
    );
    verifyGR.setLimit(1);
    verifyGR.query();

    if (!verifyGR.next()) {
      response.setStatus(500);
      response.setBody({
        success: false,
        message:
          "Queue record could not be verified after update.",
        queue_record: null,
      });
      return;
    }

    const persistedStatus =
      verifyGR.getValue("status");

    if (
      String(persistedStatus) !==
      String(newStatus)
    ) {
      response.setStatus(500);
      response.setBody({
        success: false,
        message:
          "Queue status update could not be verified.",
        queue_record: {
          sys_id:
            verifyGR.getUniqueValue(),
          number:
            verifyGR.getValue("number"),
          status:
            verifyGR.getDisplayValue("status"),
        },
      });
      return;
    }

    response.setStatus(200);
    response.setBody({
      success: true,
      message:
        operation === "call-next"
          ? "Next student has been called."
          : operation === "start-service"
          ? "Service has been started."
          : operation === "complete-service"
          ? "Service has been completed."
          : "Student has been returned to the waiting queue.",
      queue_record: {
        sys_id:
          verifyGR.getUniqueValue(),
        number:
          verifyGR.getValue("number"),
        status:
          verifyGR.getDisplayValue("status"),
        student:
          verifyGR.getDisplayValue("student"),
        service:
          verifyGR.getDisplayValue("service"),
        counter:
          verifyGR.getDisplayValue("counter"),
        staff:
          verifyGR.getDisplayValue("staff"),
      },
    });
  } catch (error: any) {
    response.setStatus(500);
    response.setBody({
      success: false,
      message:
        error?.message ||
        "Unable to execute QueueSmart staff operation.",
      queue_record: null,
    });
  }
}

export function callNext(
  request: any,
  response: any
) {
  return process(
    request,
    response,
    "call-next"
  );
}

export function startService(
  request: any,
  response: any
) {
  return process(
    request,
    response,
    "start-service"
  );
}

export function completeService(
  request: any,
  response: any
) {
  return process(
    request,
    response,
    "complete-service"
  );
}

export function markUnavailable(
  request: any,
  response: any
) {
  return process(
    request,
    response,
    "mark-unavailable"
  );
}