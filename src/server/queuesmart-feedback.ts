import { gs, GlideRecord } from "@servicenow/glide";

export function process(request: any, response: any) {
  try {
    const userId = gs.getUserID();

    if (!userId) {
      response.setStatus(401);
      response.setBody({
        success: false,
        message: "Unable to identify the current user.",
      });
      return;
    }

    if (!gs.hasRole("x_snc_queuesmart.student")) {
      response.setStatus(403);
      response.setBody({
        success: false,
        message: "Student role required.",
      });
      return;
    }

    const data = request.body?.data ?? request.body ?? {};

    const rating = Number(data.rating);
    const comment = String(data.comment || "");
    const queueId = String(data.queueId || "");

    if (
      !Number.isInteger(rating) ||
      rating < 1 ||
      rating > 5
    ) {
      response.setStatus(400);
      response.setBody({
        success: false,
        message: "Rating must be between 1 and 5.",
      });
      return;
    }

    if (!queueId) {
      response.setStatus(400);
      response.setBody({
        success: false,
        message: "Queue is required.",
      });
      return;
    }

    const queue = new GlideRecord(
      "x_snc_queuesmart_queue"
    );

    queue.addQuery("sys_id", queueId);
    queue.addQuery("student", userId);
    queue.addQuery("status", "completed");
    queue.setLimit(1);
    queue.query();

    if (!queue.next()) {
      response.setStatus(400);
      response.setBody({
        success: false,
        message:
          "Completed queue record could not be verified.",
      });
      return;
    }

    const feedback = new GlideRecord(
      "x_snc_queuesmart_queuesmart_feedback"
    );

    feedback.initialize();
    feedback.setValue("rating", rating);
    feedback.setValue("comment", comment);
    feedback.setValue("queue", queue.getUniqueValue());
    feedback.setValue("student", userId);
    feedback.setValue(
      "service",
      queue.getValue("service")
    );

    const feedbackId = feedback.insert();

    if (!feedbackId) {
      response.setStatus(500);
      response.setBody({
        success: false,
        message: "Unable to save feedback.",
      });
      return;
    }

    response.setStatus(200);
    response.setBody({
      success: true,
      message: "Feedback submitted successfully.",
      feedback_id: feedbackId,
    });
  } catch (error: any) {
    response.setStatus(500);
    response.setBody({
      success: false,
      message:
        error?.message ||
        "Unable to submit feedback.",
    });
  }
}