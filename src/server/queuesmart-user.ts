import { gs, GlideRecord } from "@servicenow/glide";

export function process(request: any, response: any) {
  try {
    const userId = gs.getUserID();
    const userName = gs.getUserName();

    if (!userId) {
      response.setStatus(401);
      response.setBody({
        success: false,
        message: "Unable to identify the current ServiceNow user.",
      });
      return;
    }

    let role = "none";

    if (gs.hasRole("admin")) {
      role = "admin";
    } else if (gs.hasRole("x_snc_queuesmart.staff")) {
      role = "staff";
    } else if (gs.hasRole("x_snc_queuesmart.student")) {
      role = "student";
    }

    const result: any = {
      success: true,
      user: {
        sys_id: userId,
        user_name: userName || "",
        role,
      },
      queue: null,
      queues: [],
      staff_stats: {
        waiting: 0,
        called: 0,
        serving: 0,
        completed: 0,
        total_active: 0,
      },
      services: [],
      workplaces: [],
    };

    if (role === "staff") {
      // Get the actual logged-in ServiceNow user's display name.
      const userGR = new GlideRecord("sys_user");
      userGR.addQuery("sys_id", userId);
      userGR.setLimit(1);
      userGR.query();

      if (!userGR.next()) {
        response.setStatus(200);
        response.setBody(result);
        return;
      }

      const userDisplayName = userGR.getValue("name");

      // Find active queue records by the Staff display name.
      // This avoids relying on the Staff -> User reference lookup.
      const staffQueue = new GlideRecord(
        "x_snc_queuesmart_queue"
      );

      const activeQuery = staffQueue.addQuery(
        "status",
        "waiting"
      );

      activeQuery.addOrCondition(
        "status",
        "called"
      );

      activeQuery.addOrCondition(
        "status",
        "serving"
      );

      staffQueue.orderBy("queue_position");
      staffQueue.query();

      while (staffQueue.next()) {
        const staffDisplayName =
          staffQueue.getDisplayValue("staff");

        if (
          String(staffDisplayName).toLowerCase() !==
          String(userDisplayName).toLowerCase()
        ) {
          continue;
        }

        const item = {
          sys_id: staffQueue.getUniqueValue(),
          number: staffQueue.getValue("number"),
          service: staffQueue.getDisplayValue("service"),
          counter: staffQueue.getDisplayValue("counter"),
          staff: staffQueue.getDisplayValue("staff"),
          queue_position:
            staffQueue.getValue("queue_position"),
          estimated_wait_time:
            staffQueue.getValue(
              "estimated_wait_time"
            ),
          status: staffQueue.getDisplayValue("status"),
          arrival_time:
            staffQueue.getValue("arrival_time"),
          called_time:
            staffQueue.getValue("called_time"),
          response_window_until:
            staffQueue.getValue(
              "response_window_until"
            ),
        };

        result.queues.push(item);

        const status = String(
          item.status || ""
        ).toLowerCase();

        if (status === "waiting") {
          result.staff_stats.waiting++;
        }

        if (status === "called") {
          result.staff_stats.called++;
        }

        if (status === "serving") {
          result.staff_stats.serving++;
        }
      }

      result.staff_stats.total_active =
        result.queues.length;

      // Select the most relevant current token.
      if (result.queues.length > 0) {
        const serving = result.queues.find(
          (item: any) =>
            String(item.status).toLowerCase() ===
            "serving"
        );

        const called = result.queues.find(
          (item: any) =>
            String(item.status).toLowerCase() ===
            "called"
        );

        result.queue =
          serving ||
          called ||
          result.queues[0];
      }

      // Count completed queues for this staff member.
      const completedGR = new GlideRecord(
        "x_snc_queuesmart_queue"
      );

      completedGR.addQuery(
        "status",
        "completed"
      );

      completedGR.query();

      while (completedGR.next()) {
        const staffDisplayName =
          completedGR.getDisplayValue("staff");

        if (
          String(staffDisplayName).toLowerCase() ===
          String(userDisplayName).toLowerCase()
        ) {
          result.staff_stats.completed++;
        }
      }
    } else {
      // Student / Admin queue lookup.
      const queue = new GlideRecord(
        "x_snc_queuesmart_queue"
      );

      queue.addQuery(
        "student",
        userId
      );

      const activeQuery = queue.addQuery(
        "status",
        "waiting"
      );

      activeQuery.addOrCondition(
        "status",
        "called"
      );

      activeQuery.addOrCondition(
        "status",
        "serving"
      );
	activeQuery.addOrCondition(
  	"status",
  	"missed"
	);

      queue.orderByDesc(
        "sys_created_on"
      );

      queue.setLimit(1);
      queue.query();

      if (queue.next()) {
        result.queue = {
          sys_id: queue.getUniqueValue(),
          number: queue.getValue("number"),
          service: queue.getDisplayValue("service"),
          counter: queue.getDisplayValue("counter"),
          staff: queue.getDisplayValue("staff"),
          queue_position:
            queue.getValue("queue_position"),
          estimated_wait_time:
            queue.getValue(
              "estimated_wait_time"
            ),
          status: queue.getDisplayValue("status"),
          arrival_time:
            queue.getValue("arrival_time"),
          called_time:
            queue.getValue("called_time"),
          response_window_until:
            queue.getValue(
              "response_window_until"
            ),
        };
      }
    }

    // Load active services and workplaces.
    const serviceGR = new GlideRecord(
      "x_snc_queuesmart_service"
    );

    serviceGR.addQuery(
      "active",
      true
    );

    serviceGR.query();

    const serviceMap: any = {};
    const workplaceMap: any = {};

    while (serviceGR.next()) {
      const serviceId =
        serviceGR.getUniqueValue();

      const serviceName =
        serviceGR.getValue(
          "service_name"
        );

      const workplaceId =
        serviceGR.getValue(
          "workplace"
        );

      const workplaceName =
        serviceGR.getDisplayValue(
          "workplace"
        );

      if (
        serviceId &&
        serviceName
      ) {
        serviceMap[serviceId] = {
          sys_id: serviceId,
          name: serviceName,
        };
      }

      if (
        workplaceId &&
        workplaceName
      ) {
        workplaceMap[workplaceId] = {
          sys_id: workplaceId,
          name: workplaceName,
        };
      }
    }

    result.services =
      Object.keys(serviceMap).map(
        (key) =>
          serviceMap[key]
      );

    result.workplaces =
      Object.keys(workplaceMap).map(
        (key) =>
          workplaceMap[key]
      );

    response.setStatus(200);
    response.setBody(result);
  } catch (error: any) {
    response.setStatus(500);
    response.setBody({
      success: false,
      message:
        error?.message ||
        "Unable to load QueueSmart data.",
    });
  }
}