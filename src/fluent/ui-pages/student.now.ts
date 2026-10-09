import "@servicenow/sdk/global";
import { UiPage } from "@servicenow/sdk/core";
import page from "../../client/index.html";

export const queuesmart_student = UiPage({
  $id: Now.ID["queuesmart-student-page"],
  endpoint: "x_snc_queuesmart_student.do",
  description: "QueueSmart Student Portal",
  html: page,
  direct: true,
});