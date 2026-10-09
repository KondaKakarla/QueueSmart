import "@servicenow/sdk/global";

export function getAIInsights(request: any, response: any) {
try {
const userId = gs.getUserID();
const apiKey = gs.getProperty(
"x_snc_queuesmart.gemini_api_key",
""
);

```
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

// Read the signed-in student's waiting token.
const token = new GlideRecord(
  "x_snc_queuesmart_queue"
);
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
  position = parseInt(
    token.getValue("queue_position") || "0",
    10
  );
  waitMinutes = parseInt(
    token.getValue("estimated_wait_time") || "0",
    10
  );
  serviceName =
    token.getDisplayValue("service") || serviceName;
  counterName =
    token.getDisplayValue("counter") || counterName;
}

// Count currently waiting tokens.
const waiting = new GlideRecord(
  "x_snc_queuesmart_queue"
);
waiting.addQuery("status", "waiting");
waiting.query();

let waitingCount = 0;
while (waiting.next()) {
  waitingCount++;
}

const prompt =
  "You are QueueSmart's queue analysis assistant. " +
  "Analyze only these current system metrics and provide " +
  "a concise, helpful recommendation in 2-4 sentences. " +
  "Do not invent data or promise exact waiting times. " +
  "If the queue is busy, suggest monitoring staff and " +
  "counter capacity. Metrics: " +
  "waitingTokens=" + waitingCount +
  ", studentPosition=" + position +
  ", estimatedWaitMinutes=" + waitMinutes +
  ", service=" + serviceName +
  ", counter=" + counterName + ".";

const outbound = new sn_ws.RESTMessageV2();
outbound.setHttpMethod("POST");
outbound.setEndpoint(
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent"
);
outbound.setRequestHeader(
  "x-goog-api-key",
  apiKey
);
outbound.setRequestHeader(
  "Content-Type",
  "application/json"
);
outbound.setHttpTimeout(20000);
outbound.setRequestBody(
  JSON.stringify({
    contents: [
      {
        parts: [{ text: prompt }],
      },
    ],
    generationConfig: {
      temperature: 0.3,
      maxOutputTokens: 180,
    },
  })
);

const apiResponse = outbound.execute();
const status = apiResponse.getStatusCode();

if (status < 200 || status >= 300) {
  gs.error(
    "QueueSmart Gemini request failed. HTTP status: " +
    status
  );
  response.setStatus(502);
  response.setBody({
    success: false,
    message:
      "Gemini could not generate insights. Check API access and model availability.",
  });
  return;
}

const result = JSON.parse(apiResponse.getBody());
const parts =
  result?.candidates?.[0]?.content?.parts || [];

const insight = parts
  .map((part: any) => part.text || "")
  .join(" ")
  .trim();

if (!insight) {
  response.setStatus(502);
  response.setBody({
    success: false,
    message: "Gemini returned an empty response.",
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
```

} catch (error: any) {
gs.error(
"QueueSmart AI insights error: " +
(error?.message || "Unknown error")
);
response.setStatus(500);
response.setBody({
success: false,
message: "Unable to generate AI insights.",
});
}
}
