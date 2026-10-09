
import { gs, GlideRecord } from "@servicenow/glide";
import { RESTMessageV2 } from "@servicenow/glide/sn_ws";

export function getAIInsights(request: any, response: any) {
  try {
    const userId = gs.getUserID();
    const apiKey = gs.getProperty(
      "x_snc_queuesmart.gemini_api_key",
      ""
    );

    if (!userId) {
      response.setStatus(401);
      response.setBody({
        success: false,
        message: "Please sign in first.",
      });
      return;
    }

    if (!apiKey) {
      response.setStatus(500);
      response.setBody({
        success: false,
        message: "Gemini API key is not configured.",
      });
      return;
    }

    const token = new GlideRecord("x_snc_queuesmart_queue");
    token.addQuery("student", userId);
    token.addQuery("status", "waiting");
    token.orderByDesc("sys_created_on");
    token.setLimit(1);
    token.query();

    let position = 0;
    let waitMinutes = 0;
    let serviceName = "Not assigned";
    let counterName = "Not assigned";

    if (token.next()) {
      position = parseInt(token.getValue("queue_position") || "0", 10);
      waitMinutes = parseInt(
        token.getValue("estimated_wait_time") || "0",
        10
      );
      serviceName = token.getDisplayValue("service") || serviceName;
      counterName = token.getDisplayValue("counter") || counterName;
    }

    const waiting = new GlideRecord("x_snc_queuesmart_queue");
    waiting.addQuery("status", "waiting");
    waiting.query();

    let waitingCount = 0;
    while (waiting.next()) {
      waitingCount++;
    }

    const prompt =
      "You are QueueSmart's queue analysis assistant. " +
      "Use only these live queue metrics. Give 2 to 4 concise " +
      "sentences with a useful recommendation. Do not invent data. " +
      "Waiting tokens: " + waitingCount +
      ". Student position: " + position +
      ". Estimated wait in minutes: " + waitMinutes +
      ". Service: " + serviceName +
      ". Counter: " + counterName + ".";

    const outbound = new RESTMessageV2();
    outbound.setHttpMethod("POST");
    outbound.setEndpoint(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent"
    );
    outbound.setRequestHeader("x-goog-api-key", apiKey);
    outbound.setRequestHeader("Content-Type", "application/json");
    outbound.setHttpTimeout(15000);
    outbound.setRequestBody(
      JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 180,
        },
      })
    );

    let apiResponse: any;
try {
 try {
  apiResponse = outbound.execute();
} catch (e: any) {
  throw new Error(
    "Outbound REST failed: " + String(e?.message || e)
  );
}} catch (e: any) {
  throw new Error("Outbound REST execute failed: " + String(e?.message || e));
}
    const status = apiResponse.getStatusCode();

    if (status < 200 || status >= 300) {
      const errorBody = String(apiResponse.getBody() || "");
      gs.error(
        "QueueSmart Gemini HTTP status: " +
          status + " response: " + errorBody
      );

      response.setStatus(502);
      response.setBody({
        success: false,
        message: "Gemini HTTP " + status + ": " +
          errorBody.slice(0, 400),
      });
      return;
    }

    const result = JSON.parse(apiResponse.getBody());
    const parts = result?.candidates?.[0]?.content?.parts || [];
    const insight = parts
      .map((part: any) => part.text || "")
      .join(" ")
      .trim();

    if (!insight) {
      response.setStatus(502);
      response.setBody({
        success: false,
        message: "Gemini returned no insight.",
      });
      return;
    }

    response.setStatus(200);
    response.setBody({
      success: true,
      insight: insight,
      source: "Gemini API",
      metrics: {
        waitingTokens: waitingCount,
        position: position,
        estimatedWaitMinutes: waitMinutes,
      },
    });
  } catch (error: any) {
    const errorMessage = String(
      error?.message || error || "Unknown error"
    );

    gs.error("QueueSmart AI insights error: " + errorMessage);
    response.setStatus(500);
    response.setBody({
      success: false,
      message: "Gemini connection error: " +
        errorMessage.slice(0, 400),
    });
  }
}