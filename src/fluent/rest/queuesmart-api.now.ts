import "@servicenow/sdk/global";
import { RestApi } from "@servicenow/sdk/core";

import { process } from "../../server/queuesmart-user";
import { generateToken } from "../../server/queuesmart-generate";
import { process as submitFeedback } from "../../server/queuesmart-feedback";
import { getAIInsights } from "../../server/queuesmart-ai-insights";
import {
  callNext,
  startService,
  completeService,
  markUnavailable,
} from "../../server/queuesmart-staff-action";

export const queuesmart_api = RestApi({
  $id: Now.ID["queuesmart-student-api"],

  name: "QueueSmart Student API",

  serviceId: "student",

  active: true,

  routes: [
    {
      $id: Now.ID["queuesmart-student-me"],

      name: "Current Student",

      method: "GET",

      path: "/me",

      script: process,
    },

    {
      $id: Now.ID["queuesmart-generate-token"],

      name: "Generate Token",

      method: "POST",

      path: "/generate",

      script: generateToken,
    },

    {
      $id: Now.ID["queuesmart-submit-feedback"],

      name: "Submit Feedback",

      method: "POST",

      path: "/feedback",

      script: submitFeedback,
    },

    {
      $id: Now.ID["queuesmart-staff-call-next"],

      name: "Staff Call Next",

      method: "POST",

      path: "/staff/call-next",

      script: callNext,
    },

    {
      $id: Now.ID["queuesmart-staff-start-service"],

      name: "Staff Start Service",

      method: "POST",

      path: "/staff/start-service",

      script: startService,
    },

    {
      $id: Now.ID["queuesmart-staff-complete-service"],

      name: "Staff Complete Service",

      method: "POST",

      path: "/staff/complete-service",

      script: completeService,
    },

    {
      $id: Now.ID["queuesmart-staff-mark-unavailable"],

      name: "Staff Mark Unavailable",

      method: "POST",

      path: "/staff/mark-unavailable",

      script: markUnavailable,
    },
	{
  $id: Now.ID["queuesmart-ai-insights"],
  name: "QueueSmart AI Insights",
  method: "POST",
  path: "/ai-insights",
  script: getAIInsights,
},
  ],
});