import React, { useEffect, useState } from "react";
import "./app.css";

type QueueData = {
  sys_id: string;
  number: string;
  service: string;
  counter: string;
  staff: string;
  queue_position: string;
  estimated_wait_time: string;
  status: string;
  arrival_time: string;
  called_time: string;
  response_window_until: string;
};

type StudentData = {
  sys_id: string;
  user_name: string;
  role: string;
};

type Option = {
  sys_id: string;
  name: string;
};

type ApiResponse = {
  success: boolean;
  message?: string;
  user?: StudentData;
  queue?: QueueData | null;
  queues?: QueueData[];
  services?: Option[];
  workplaces?: Option[];
};

export default function App() {
  const [student, setStudent] =
    useState<StudentData | null>(null);

  const [queue, setQueue] =
    useState<QueueData | null>(null);

  const [staffQueues, setStaffQueues] =
    useState<QueueData[]>([]);
  const [services, setServices] =
    useState<Option[]>([]);

  const [workplaces, setWorkplaces] =
    useState<Option[]>([]);

  const [selectedService, setSelectedService] =
    useState("");

  const [selectedWorkplace, setSelectedWorkplace] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  const [generating, setGenerating] =
    useState(false);

  const [callingNext, setCallingNext] =
    useState(false);

  const [error, setError] =
    useState("");
  const [aiInsight, setAiInsight] =
  useState("");

const [aiLoading, setAiLoading] =
  useState(false);

const [aiError, setAiError] =
  useState("");

  const [lastUpdated, setLastUpdated] =
    useState(new Date());

  const [showFrontDoor, setShowFrontDoor] =
    useState(true);

  /* =========================================================
     LOAD CURRENT USER / QUEUE DATA
     ========================================================= */

  async function loadStudentData() {
    const response = await fetch(
      "/api/x_snc_queuesmart/student/me",
      {
        method: "GET",
        credentials: "same-origin",
        headers: {
          Accept: "application/json",
          ...((window as any).g_ck
            ? {
                "X-UserToken":
                  (window as any).g_ck,
              }
            : {}),
        },
      }
    );

    const rawBody =
      await response.json();

    console.log(
      "QueueSmart Student API:",
      rawBody
    );

    const body: ApiResponse =
      rawBody?.result ?? rawBody;

    if (
      !response.ok ||
      !body.success
    ) {
      throw new Error(
        body.message ||
          `Student API failed: ${response.status}`
      );
    }

    return body;
  }
  async function getAIInsight() {
setAiLoading(true);
setAiError("");
setAiInsight("");


try {
  const response = await fetch(
    "/api/x_snc_queuesmart/student/ai-insights",
    {
      method: "POST",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...((window as any).g_ck
          ? {
              "X-UserToken": (window as any).g_ck,
            }
          : {}),
      },
      body: JSON.stringify({}),
    }
  );

  const rawBody = await response.json();
  const body = rawBody?.result ?? rawBody;

  if (!response.ok || !body.success) {
    throw new Error(
      body.message || "Unable to generate AI insights."
    );
  }

  setAiInsight(body.insight || "No insight returned.");
} catch (err: any) {
  setAiError(
    err?.message || "AI insights request failed."
  );
} finally {
  setAiLoading(false);
}


}


  /* =========================================================
     LOAD DATA
     ========================================================= */

  async function loadQueue() {
    try {
      setError("");

      const data =
        await loadStudentData();

      console.log(
        "Logged in user:",
        data.user
      );

      if (data.user) {
        setStudent(data.user);
      }

      setQueue(
        data.user?.role?.toLowerCase() === 'staff'
          ? (Array.isArray(data.queues) ? data.queues[0] || null : null)
          : (data.queue || null)
      );

      setStaffQueues(
        Array.isArray(data.queues)
          ? data.queues
          : []
      );
      setServices(
        Array.isArray(data.services)
          ? data.services
          : []
      );

      setWorkplaces(
        Array.isArray(data.workplaces)
          ? data.workplaces
          : []
      );

      setLastUpdated(
        new Date()
      );
    } catch (err: any) {
      console.error(
        "QueueSmart error:",
        err
      );

      setError(
        err?.message ||
          "Unable to load your queue."
      );
    } finally {
      setLoading(false);
    }
  }

  /* =========================================================
     STUDENT TOKEN GENERATION
     ========================================================= */

  async function generateToken() {
    if (!selectedService) {
      alert(
        "Please select a service."
      );
      return;
    }

    if (!selectedWorkplace) {
      alert(
        "Please select a workplace."
      );
      return;
    }

    try {
      setGenerating(true);
      setError("");

      const response =
        await fetch(
          "/api/x_snc_queuesmart/student/generate",
          {
            method: "POST",
            credentials:
              "same-origin",

            headers: {
              Accept:
                "application/json",

              "Content-Type":
                "application/json",

              ...((window as any).g_ck
                ? {
                    "X-UserToken":
                      (window as any)
                        .g_ck,
                  }
                : {}),
            },

            body: JSON.stringify({
              serviceId:
                selectedService,

              counterId:
                selectedWorkplace,
            }),
          }
        );

      const rawBody =
        await response.json();

      console.log(
        "Generate Token Response:",
        rawBody
      );

      const body =
        rawBody?.result ??
        rawBody;

      if (
        !response.ok ||
        !body.success
      ) {
        throw new Error(
          body.message ||
            `Token generation failed: ${response.status}`
        );
      }

      if (body.queue) {
        setQueue(
          body.queue
        );
      } else {
        await loadQueue();
      }
    } catch (err: any) {
      console.error(
        "Generate Token Error:",
        err
      );

      setError(
        err?.message ||
          "Unable to generate token."
      );

      alert(
        err?.message ||
          "Unable to generate token."
      );
    } finally {
      setGenerating(false);
    }
  }

  /* =========================================================
     REJOIN MISSED QUEUE
     ========================================================= */

  async function rejoinQueue() {
    if (!queue) {
      alert("No missed queue token found.");
      return;
    }

    const matchedService = services.find(
      (service) =>
        service.name === queue.service
    );

    const matchedWorkplace = workplaces.find(
      (workplace) =>
        workplace.name === queue.counter
    );

    if (!matchedService || !matchedWorkplace) {
      alert(
        "Unable to identify the previous service or workplace."
      );
      return;
    }

    try {
      setGenerating(true);
      setError("");

      const response = await fetch(
        "/api/x_snc_queuesmart/student/generate",
        {
          method: "POST",
          credentials: "same-origin",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            ...((window as any).g_ck
              ? {
                  "X-UserToken":
                    (window as any).g_ck,
                }
              : {}),
          },
          body: JSON.stringify({
            serviceId: matchedService.sys_id,
            counterId: matchedWorkplace.sys_id,
          }),
        }
      );

      const rawBody = await response.json();

      console.log(
        "Rejoin Queue Response:",
        rawBody
      );

      const body = rawBody?.result ?? rawBody;

      if (!response.ok || !body.success) {
        throw new Error(
          body.message ||
            `Rejoin failed: ${response.status}`
        );
      }

      if (body.queue) {
        setQueue(body.queue);
      } else {
        await loadQueue();
      }

      alert(
        body.message ||
          "You have rejoined the queue."
      );
    } catch (err: any) {
      console.error(
        "Rejoin Queue Error:",
        err
      );

      setError(
        err?.message ||
          "Unable to rejoin the queue."
      );

      alert(
        err?.message ||
          "Unable to rejoin the queue."
      );
    } finally {
      setGenerating(false);
    }
  }

  /* =========================================================
     STAFF CALL NEXT
     ========================================================= */

  async function callNext() {
    try {
      setCallingNext(true);
      setError("");

      const response = await fetch(
        "/api/x_snc_queuesmart/student/staff/call-next",
        {
          method: "POST",
          credentials: "same-origin",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            ...((window as any).g_ck
              ? {
                  "X-UserToken":
                    (window as any).g_ck,
                }
              : {}),
          },
          body: JSON.stringify({}),
        }
      );

      const rawBody = await response.json();

      console.log(
        "Staff Call Next Response:",
        rawBody
      );

      const body =
        rawBody?.result ?? rawBody;

      if (
        !response.ok ||
        !body.success
      ) {
        throw new Error(
          body.message ||
            `Call Next failed: ${response.status}`
        );
      }

      await loadQueue();

      alert(
        body.message ||
          "Next student has been called."
      );
    } catch (err: any) {
      console.error(
        "Staff Call Next Error:",
        err
      );

      setError(
        err?.message ||
          "Unable to call the next student."
      );

      alert(
        err?.message ||
          "Unable to call the next student."
      );
    } finally {
      setCallingNext(false);
    }
  }

  /* =========================================================
     STAFF QUEUE OPERATIONS
     ========================================================= */

  async function staffOperation(operation: string) {
    try {
      setCallingNext(true);
      setError("");

      const response = await fetch(
        `/api/x_snc_queuesmart/student/staff/${operation}`,
        {
          method: "POST",
          credentials: "same-origin",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            ...((window as any).g_ck
              ? {
                  "X-UserToken":
                    (window as any).g_ck,
                }
              : {}),
          },
          body: JSON.stringify({ operation }),
        }
      );

      const rawBody = await response.json();
      console.log("Staff Operation Response:", rawBody);

      const body = rawBody?.result ?? rawBody;

      if (!response.ok || !body.success) {
        throw new Error(
          body.message ||
            `${operation} failed: ${response.status}`
        );
      }

      await loadQueue();

      alert(
        body.message ||
          "Staff operation completed successfully."
      );
    } catch (err: any) {
      console.error("Staff Operation Error:", err);

      setError(
        err?.message ||
          "Unable to complete staff operation."
      );

      alert(
        err?.message ||
          "Unable to complete staff operation."
      );
    } finally {
      setCallingNext(false);
    }
  }

  /* =========================================================
     AUTO REFRESH
     ========================================================= */

  useEffect(() => {
    loadQueue();

    const interval =
      setInterval(() => {
        loadQueue();
      }, 30000);

    return () =>
      clearInterval(interval);
  }, []);

  /* =========================================================
     HELPERS
     ========================================================= */

  function formatStatus(
    status?: string
  ) {
    if (!status) {
      return "Unknown";
    }

    return status
      .replace(/_/g, " ")
      .replace(
        /\b\w/g,
        (char) =>
          char.toUpperCase()
      );
  }

  function getStatusClass(
    status?: string
  ) {
    switch (
      (status || "").toLowerCase()
    ) {
      case "waiting":
        return "status waiting";

      case "called":
        return "status called";

      case "completed":
        return "status completed";

      case "missed":
        return "status missed";

      default:
        return "status";
    }
  }

  function formatTime(
    value?: string
  ) {
    if (!value) {
      return "--";
    }

    try {
      const date =
        new Date(value);

      if (
        isNaN(
          date.getTime()
        )
      ) {
        return value;
      }

      return date.toLocaleTimeString(
        [],
        {
          hour: "2-digit",
          minute: "2-digit",
        }
      );
    } catch {
      return value;
    }
  }

  function getEstimatedWait(
    value?: string
  ) {
    const minutes =
      Number(value);

    if (
      !Number.isFinite(
        minutes
      ) ||
      minutes < 0
    ) {
      return 0;
    }

    return Math.round(
      minutes
    );
  }

  const queueStatus = (
  queue?.status || ""
).toLowerCase();

const hasActiveQueue =
  !!queue &&
  [
    "waiting",
    "called",
  ].includes(queueStatus);

const hasMissedQueue =
  !!queue &&
  queueStatus === "missed";
  const userRole =
    (
      student?.role || ""
    ).toLowerCase();

  /* =========================================================
     FRONT DOOR
     ========================================================= */

  if (showFrontDoor) {
    return (
      <div className="app">
        <div
          style={{
            minHeight:
              "100vh",
            display: "flex",
            alignItems:
              "center",
            justifyContent:
              "center",
            padding: "24px",
            background:
              "linear-gradient(135deg, #f4f7fb 0%, #e9eef7 100%)",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "460px",
              background:
                "#ffffff",
              borderRadius:
                "20px",
              padding:
                "42px 36px",
              textAlign:
                "center",
              boxShadow:
                "0 20px 50px rgba(0,0,0,0.10)",
            }}
          >
            <div
              style={{
                width: "76px",
                height: "76px",
                margin:
                  "0 auto 20px",
                borderRadius:
                  "20px",
                display: "flex",
                alignItems:
                  "center",
                justifyContent:
                  "center",
                background:
                  "linear-gradient(135deg, #1f4f8f, #2563a8)",
                color:
                  "#ffffff",
                fontSize:
                  "36px",
                fontWeight:
                  800,
                boxShadow:
                  "0 10px 25px rgba(31,79,143,0.25)",
              }}
            >
              Q
            </div>

            <h1
              style={{
                margin: 0,
                fontSize:
                  "32px",
                fontWeight:
                  800,
                color:
                  "#172033",
              }}
            >
              QueueSmart
            </h1>

            <p
              style={{
                marginTop:
                  "8px",
                marginBottom: 0,
                color:
                  "#667085",
                fontSize:
                  "15px",
              }}
            >
              Smart Campus Queue
              Management
            </p>

            <div
              style={{
                marginTop:
                  "32px",
                padding:
                  "20px",
                borderRadius:
                  "14px",
                background:
                  "#f7f9fc",
                border:
                  "1px solid #edf0f5",
                textAlign:
                  "left",
              }}
            >
              <strong
                style={{
                  display:
                    "block",
                  color:
                    "#172033",
                  marginBottom:
                    "8px",
                  fontSize:
                    "17px",
                }}
              >
                Welcome to QueueSmart
              </strong>

              <span
                style={{
                  color:
                    "#667085",
                  fontSize:
                    "14px",
                  lineHeight:
                    1.6,
                }}
              >
                Access your personalized
                campus queue portal securely
                using your ServiceNow account.
              </span>
            </div>

            <button
              className="primary-btn"
              onClick={() =>
                setShowFrontDoor(
                  false
                )
              }
              style={{
                width:
                  "100%",
                marginTop:
                  "24px",
                padding:
                  "14px",
                fontSize:
                  "16px",
                fontWeight:
                  700,
                borderRadius:
                  "10px",
              }}
            >
              Continue to QueueSmart
            </button>

            <div
              style={{
                marginTop:
                  "20px",
                display:
                  "flex",
                alignItems:
                  "center",
                justifyContent:
                  "center",
                gap:
                  "7px",
                color:
                  "#98a2b3",
                fontSize:
                  "12px",
              }}
            >
              <span>
                🔒
              </span>

              <span>
                Secure authentication powered
                by ServiceNow
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* =========================================================
     LOADING
     ========================================================= */

  if (loading) {
    return (
      <div className="app">
        <div className="loading-screen">
          <div className="loader"></div>

          <h2>
            Loading QueueSmart...
          </h2>

          <p>
            Checking your queue status
          </p>
        </div>
      </div>
    );
  }

  /* =========================================================
     ERROR
     ========================================================= */

  if (error) {
    return (
      <div className="app">
        <header className="topbar">
          <div className="brand">
            <div className="brand-icon">
              Q
            </div>

            <div>
              <h1>
                QueueSmart
              </h1>

              <span>
                Queue Portal
              </span>
            </div>
          </div>
        </header>

        <main className="container">
          <div className="error-card">
            <div className="error-icon">
              !
            </div>

            <h2>
              Unable to load QueueSmart
            </h2>

            <p>
              {error}
            </p>

            <button
              className="primary-btn"
              onClick={() => {
                setLoading(
                  true
                );
                loadQueue();
              }}
            >
              Try Again
            </button>
          </div>
        </main>
      </div>
    );
  }

  /* =========================================================
     STAFF DASHBOARD
     ========================================================= */

  if (userRole === "staff") {
    return (
      <div
        style={{
          minHeight:
            "100vh",
          background:
            "#f5f7fb",
          color:
            "#172033",
          fontFamily:
            "inherit",
        }}
      >
        {/* STAFF TOP BAR */}

        <header
          style={{
            height:
              "72px",
            background:
              "#ffffff",
            borderBottom:
              "1px solid #e5eaf1",
            display:
              "flex",
            alignItems:
              "center",
            justifyContent:
              "space-between",
            padding:
              "0 30px",
            boxSizing:
              "border-box",
          }}
        >
          <div
            style={{
              display:
                "flex",
              alignItems:
                "center",
              gap:
                "12px",
            }}
          >
            <div
              style={{
                width:
                  "42px",
                height:
                  "42px",
                borderRadius:
                  "11px",
                background:
                  "linear-gradient(135deg, #1f4f8f, #2563a8)",
                color:
                  "#ffffff",
                display:
                  "flex",
                alignItems:
                  "center",
                justifyContent:
                  "center",
                fontSize:
                  "22px",
                fontWeight:
                  800,
              }}
            >
              Q
            </div>

            <div>
              <strong
                style={{
                  display:
                    "block",
                  fontSize:
                    "18px",
                }}
              >
                QueueSmart Staff
              </strong>

              <span
                style={{
                  display:
                    "block",
                  marginTop:
                    "2px",
                  color:
                    "#667085",
                  fontSize:
                    "12px",
                }}
              >
                Queue Operations Console
              </span>
            </div>
          </div>

          <div
            style={{
              display:
                "flex",
              alignItems:
                "center",
              gap:
                "16px",
            }}
          >
            <button
              type="button"
              onClick={() => {
                setLoading(
                  true
                );
                loadQueue();
              }}
              style={{
                border:
                  "1px solid #d9e0ea",
                background:
                  "#ffffff",
                color:
                  "#344054",
                borderRadius:
                  "9px",
                padding:
                  "9px 14px",
                fontWeight:
                  600,
                cursor:
                  "pointer",
              }}
            >
              ↻ Refresh
            </button>

            <div
              style={{
                display:
                  "flex",
                alignItems:
                  "center",
                gap:
                  "10px",
              }}
            >
              <div
                style={{
                  width:
                    "38px",
                  height:
                    "38px",
                  borderRadius:
                    "50%",
                  background:
                    "#e8f1ff",
                  color:
                    "#2563eb",
                  display:
                    "flex",
                  alignItems:
                    "center",
                  justifyContent:
                    "center",
                  fontWeight:
                    800,
                }}
              >
                {(
                  student?.user_name ||
                  "S"
                )
                  .charAt(0)
                  .toUpperCase()}
              </div>

              <div>
                <strong
                  style={{
                    display:
                      "block",
                    fontSize:
                      "13px",
                  }}
                >
                  {student?.user_name ||
                    "Staff"}
                </strong>

                <small
                  style={{
                    color:
                      "#667085",
                  }}
                >
                  Staff
                </small>
              </div>
            </div>
          </div>
        </header>

        {/* STAFF MAIN */}

        <main
          style={{
            width:
              "100%",
            maxWidth:
              "1500px",
            margin:
              "0 auto",
            padding:
              "30px",
            boxSizing:
              "border-box",
          }}
        >
          {/* PAGE HEADER */}

          <div
            style={{
              display:
                "flex",
              alignItems:
                "center",
              justifyContent:
                "space-between",
              marginBottom:
                "24px",
            }}
          >
            <div>
              <h1
                style={{
                  margin:
                    "0 0 7px",
                  fontSize:
                    "28px",
                  fontWeight:
                    800,
                }}
              >
                Staff Dashboard
              </h1>

              <p
                style={{
                  margin: 0,
                  color:
                    "#667085",
                  fontSize:
                    "14px",
                }}
              >
                Manage your assigned queue
                and student service operations.
              </p>
            </div>

            <div
              style={{
                display:
                  "flex",
                alignItems:
                  "center",
                gap:
                  "7px",
                color:
                  "#667085",
                fontSize:
                  "12px",
              }}
            >
              <span
                style={{
                  width:
                    "8px",
                  height:
                    "8px",
                  borderRadius:
                    "50%",
                  background:
                    "#16a34a",
                  display:
                    "inline-block",
                }}
              ></span>

              System connected
            </div>
          </div>

          {/* STAFF SUMMARY CARDS */}

          <div
            style={{
              display:
                "grid",
              gridTemplateColumns:
                "repeat(4, minmax(0, 1fr))",
              gap:
                "16px",
              marginBottom:
                "22px",
            }}
          >
            {[
              {
                label:
                  "Current Token",
                value:
                  queue?.number ||
                  "—",
                icon:
                  "🎟",
              },
              {
                label:
                  "Queue Status",
                value:
                  queue
                    ? formatStatus(
                        queue.status
                      )
                    : "No Token",
                icon:
                  "●",
              },
              {
                label:
                  "Estimated Wait",
                value:
                  queue
                    ? `${getEstimatedWait(
                        queue.estimated_wait_time
                      )} min`
                    : "—",
                icon:
                  "⏱",
              },
              {
                label:
                  "Queue Position",
                value:
                  queue?.queue_position ||
                  "—",
                icon:
                  "👥",
              },
            ].map(
              (card) => (
                <div
                  key={
                    card.label
                  }
                  style={{
                    background:
                      "#ffffff",
                    border:
                      "1px solid #e7ebf2",
                    borderRadius:
                      "14px",
                    padding:
                      "20px",
                    minHeight:
                      "116px",
                    boxSizing:
                      "border-box",
                    boxShadow:
                      "0 4px 14px rgba(20,40,80,0.045)",
                  }}
                >
                  <div
                    style={{
                      display:
                        "flex",
                      alignItems:
                        "center",
                      justifyContent:
                        "space-between",
                    }}
                  >
                    <span
                      style={{
                        color:
                          "#718096",
                        fontSize:
                          "12px",
                        fontWeight:
                          650,
                      }}
                    >
                      {card.label}
                    </span>

                    <span
                      style={{
                        fontSize:
                          "18px",
                      }}
                    >
                      {card.icon}
                    </span>
                  </div>

                  <strong
                    style={{
                      display:
                        "block",
                      marginTop:
                        "15px",
                      fontSize:
                        "25px",
                      fontWeight:
                        800,
                    }}
                  >
                    {card.value}
                  </strong>
                </div>
              )
            )}
          </div>

          {/* ===================================================
              QUICK ACTIONS
              UI ONLY — ServiceNow operations are not simulated.
              =================================================== */}

          <section
            style={{
              background:
                "#ffffff",
              border:
                "1px solid #e7ebf2",
              borderRadius:
                "14px",
              padding:
                "22px",
              marginBottom:
                "22px",
              boxShadow:
                "0 4px 14px rgba(20,40,80,0.045)",
            }}
          >
            <div
              style={{
                display:
                  "flex",
                alignItems:
                  "flex-start",
                justifyContent:
                  "space-between",
                gap:
                  "20px",
                marginBottom:
                  "18px",
              }}
            >
              <div>
                <h2
                  style={{
                    margin:
                      "0 0 5px",
                    fontSize:
                      "17px",
                  }}
                >
                  Quick Actions
                </h2>

                <p
                  style={{
                    margin: 0,
                    color:
                      "#667085",
                    fontSize:
                      "12px",
                  }}
                >
                  Queue controls available for the current
                  staff session.
                </p>
              </div>

              <span
                style={{
                  display:
                    "inline-flex",
                  alignItems:
                    "center",
                  gap:
                    "6px",
                  padding:
                    "6px 10px",
                  borderRadius:
                    "20px",
                  background:
                    "#f2f4f7",
                  color:
                    "#667085",
                  fontSize:
                    "11px",
                  fontWeight:
                    650,
                  whiteSpace:
                    "nowrap",
                }}
              >
                ServiceNow controlled
              </span>
            </div>

            <div
              style={{
                display:
                  "grid",
                gridTemplateColumns:
                  "repeat(4, minmax(0, 1fr))",
                gap:
                  "12px",
              }}
            >
              {[
                {
                  icon:
                    "📣",
                  label:
                    "Call Next",
                  action:
                    callNext,
                  disabled:
                    callingNext,
                },
                {
                  icon:
                    "▶",
                  label:
                    "Start Service",
                  action:
                    () =>
                      staffOperation(
                        "start-service"
                      ),
                  disabled:
                    callingNext,
                },
                {
                  icon:
                    "✓",
                  label:
                    "Complete Service",
                  action:
                    () =>
                      staffOperation(
                        "complete-service"
                      ),
                  disabled:
                    callingNext,
                },
                {
                  icon:
                    "⏸",
                  label:
                    "Mark Unavailable",
                  action:
                    () =>
                      staffOperation(
                        "mark-unavailable"
                      ),
                  disabled:
                    callingNext,
                },
              ].map(
                (action) => (
                  <button
                    key={
                      action.label
                    }
                    type="button"
                    disabled={
                      action.disabled
                    }
                    onClick={
                      action.action
                    }
                    title={
                      action.label ===
                      "Call Next"
                        ? "Call the next waiting student"
                        : `${action.label} will use the ServiceNow operation.`
                    }
                    style={{
                      minHeight:
                        "82px",
                      padding:
                        "14px 12px",
                      border:
                        "1px solid #dbe4f0",
                      borderRadius:
                        "11px",
                      background:
                        action.disabled &&
                        action.label !==
                          "Call Next"
                          ? "#f8fafc"
                          : "#edf4ff",
                      color:
                        "#344054",
                      fontFamily:
                        "inherit",
                      fontWeight:
                        700,
                      cursor:
                        action.disabled
                          ? "not-allowed"
                          : "pointer",
                      display:
                        "flex",
                      flexDirection:
                        "column",
                      alignItems:
                        "center",
                      justifyContent:
                        "center",
                      gap:
                        "7px",
                      opacity:
                        action.disabled &&
                        action.label !==
                          "Call Next"
                          ? 0.78
                          : 1,
                      boxSizing:
                        "border-box",
                    }}
                  >
                    <span
                      style={{
                        fontSize:
                          "22px",
                        lineHeight:
                          1,
                      }}
                    >
                      {action.icon}
                    </span>

                    <span
                      style={{
                        fontSize:
                          "12px",
                      }}
                    >
                      {callingNext &&
                      action.label ===
                        "Call Next"
                        ? "Calling..."
                        : action.label}
                    </span>

                    <span
                      style={{
                        fontSize:
                          "9px",
                        color:
                          "#98a2b3",
                        fontWeight:
                          500,
                      }}
                    >
                      ServiceNow
                    </span>
                  </button>
                )
              )}
            </div>
          </section>

          {/* ===================================================
              CURRENT SERVICE + STAFF INFO
              =================================================== */}

          <div
            style={{
              display:
                "grid",
              gridTemplateColumns:
                "minmax(0, 1.5fr) minmax(300px, 1fr)",
              gap:
                "20px",
              marginBottom:
                "22px",
            }}
          >
            {/* CURRENT TOKEN */}

            <section
              style={{
                background:
                  "#ffffff",
                border:
                  "1px solid #e7ebf2",
                borderRadius:
                  "14px",
                padding:
                  "22px",
                boxShadow:
                  "0 4px 14px rgba(20,40,80,0.045)",
              }}
            >
              <div
                style={{
                  display:
                    "flex",
                  alignItems:
                    "center",
                  justifyContent:
                    "space-between",
                  marginBottom:
                    "18px",
                }}
              >
                <div>
                  <h2
                    style={{
                      margin:
                        "0 0 5px",
                      fontSize:
                        "17px",
                    }}
                  >
                    Current Service
                  </h2>

                  <p
                    style={{
                      margin: 0,
                      color:
                        "#667085",
                      fontSize:
                        "12px",
                    }}
                  >
                    Token currently associated
                    with your queue view.
                  </p>
                </div>

                {queue && (
                  <span
                    className={getStatusClass(
                      queue.status
                    )}
                  >
                    {formatStatus(
                      queue.status
                    )}
                  </span>
                )}
              </div>

              {queue ? (
                <div
                  style={{
                    display:
                      "grid",
                    gridTemplateColumns:
                      "150px 1fr",
                    gap:
                      "22px",
                    alignItems:
                      "center",
                  }}
                >
                  <div
                    style={{
                      border:
                        "1px solid #e4e9f1",
                      borderRadius:
                        "12px",
                      padding:
                        "18px",
                      textAlign:
                        "center",
                      background:
                        "#f8fafc",
                    }}
                  >
                    <span
                      style={{
                        display:
                          "block",
                        color:
                          "#667085",
                        fontSize:
                          "10px",
                        fontWeight:
                          700,
                        letterSpacing:
                          "1px",
                      }}
                    >
                      TOKEN
                    </span>

                    <strong
                      style={{
                        display:
                          "block",
                        marginTop:
                          "7px",
                        fontSize:
                          "30px",
                      }}
                    >
                      {queue.number ||
                        "—"}
                    </strong>
                  </div>

                  <div>
                    <div
                      style={{
                        display:
                          "grid",
                        gridTemplateColumns:
                          "repeat(2, minmax(0, 1fr))",
                        gap:
                          "14px",
                      }}
                    >
                      <div>
                        <span
                          style={{
                            display:
                              "block",
                            color:
                              "#98a2b3",
                            fontSize:
                              "11px",
                            marginBottom:
                              "5px",
                          }}
                        >
                          Service
                        </span>

                        <strong>
                          {queue.service ||
                            "—"}
                        </strong>
                      </div>

                      <div>
                        <span
                          style={{
                            display:
                              "block",
                            color:
                              "#98a2b3",
                            fontSize:
                              "11px",
                            marginBottom:
                              "5px",
                          }}
                        >
                          Counter
                        </span>

                        <strong>
                          {queue.counter ||
                            "—"}
                        </strong>
                      </div>

                      <div>
                        <span
                          style={{
                            display:
                              "block",
                            color:
                              "#98a2b3",
                            fontSize:
                              "11px",
                            marginBottom:
                              "5px",
                          }}
                        >
                          Arrival Time
                        </span>

                        <strong>
                          {formatTime(
                            queue.arrival_time
                          )}
                        </strong>
                      </div>

                      <div>
                        <span
                          style={{
                            display:
                              "block",
                            color:
                              "#98a2b3",
                            fontSize:
                              "11px",
                            marginBottom:
                              "5px",
                          }}
                        >
                          Called Time
                        </span>

                        <strong>
                          {formatTime(
                            queue.called_time
                          )}
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    padding:
                      "35px 20px",
                    border:
                      "1px dashed #d6dde8",
                    borderRadius:
                      "12px",
                    textAlign:
                      "center",
                    color:
                      "#667085",
                    background:
                      "#fafbfc",
                  }}
                >
                  <div
                    style={{
                      fontSize:
                        "30px",
                      marginBottom:
                        "8px",
                    }}
                  >
                    🎫
                  </div>

                  <strong
                    style={{
                      display:
                        "block",
                      color:
                        "#344054",
                      marginBottom:
                        "5px",
                    }}
                  >
                    No current token
                  </strong>

                  <span
                    style={{
                      fontSize:
                        "12px",
                    }}
                  >
                    There is no active queue
                    token in the current data.
                  </span>
                </div>
              )}
            </section>

            {/* STAFF INFORMATION */}

            <section
              style={{
                background:
                  "#ffffff",
                border:
                  "1px solid #e7ebf2",
                borderRadius:
                  "14px",
                padding:
                  "22px",
                boxShadow:
                  "0 4px 14px rgba(20,40,80,0.045)",
              }}
            >
              <div
                style={{
                  marginBottom:
                    "18px",
                }}
              >
                <h2
                  style={{
                    margin:
                      "0 0 5px",
                    fontSize:
                      "17px",
                  }}
                >
                  Staff Information
                </h2>

                <p
                  style={{
                    margin: 0,
                    color:
                      "#667085",
                    fontSize:
                      "12px",
                  }}
                >
                  Current authenticated ServiceNow
                  staff account.
                </p>
              </div>

              <div
                style={{
                  display:
                    "flex",
                  alignItems:
                    "center",
                  gap:
                    "14px",
                  paddingBottom:
                    "18px",
                  borderBottom:
                    "1px solid #edf0f4",
                }}
              >
                <div
                  style={{
                    width:
                      "52px",
                    height:
                      "52px",
                    borderRadius:
                      "50%",
                    background:
                      "#e8f1ff",
                    color:
                      "#2563eb",
                    display:
                      "flex",
                    alignItems:
                      "center",
                    justifyContent:
                      "center",
                    fontSize:
                      "21px",
                    fontWeight:
                      800,
                  }}
                >
                  {(
                    student?.user_name ||
                    "S"
                  )
                    .charAt(0)
                    .toUpperCase()}
                </div>

                <div>
                  <strong
                    style={{
                      display:
                        "block",
                      fontSize:
                        "15px",
                    }}
                  >
                    {student?.user_name ||
                      "Staff"}
                  </strong>

                  <span
                    style={{
                      color:
                        "#667085",
                      fontSize:
                        "12px",
                    }}
                  >
                    QueueSmart Staff
                  </span>
                </div>
              </div>

              <div
                style={{
                  marginTop:
                    "16px",
                }}
              >
                <div
                  style={{
                    display:
                      "flex",
                    justifyContent:
                      "space-between",
                    padding:
                      "9px 0",
                  }}
                >
                  <span
                    style={{
                      color:
                        "#667085",
                      fontSize:
                        "12px",
                    }}
                  >
                    User ID
                  </span>

                  <strong
                    style={{
                      fontSize:
                        "11px",
                      maxWidth:
                        "190px",
                      overflow:
                        "hidden",
                      textOverflow:
                        "ellipsis",
                    }}
                  >
                    {student?.sys_id ||
                      "—"}
                  </strong>
                </div>

                <div
                  style={{
                    display:
                      "flex",
                    justifyContent:
                      "space-between",
                    padding:
                      "9px 0",
                  }}
                >
                  <span
                    style={{
                      color:
                        "#667085",
                      fontSize:
                        "12px",
                    }}
                  >
                    Role
                  </span>

                  <strong
                    style={{
                      fontSize:
                        "12px",
                    }}
                  >
                    {student?.role ||
                      "staff"}
                  </strong>
                </div>

                <div
                  style={{
                    display:
                      "flex",
                    justifyContent:
                      "space-between",
                    padding:
                      "9px 0",
                  }}
                >
                  <span
                    style={{
                      color:
                        "#667085",
                      fontSize:
                        "12px",
                    }}
                  >
                    Session
                  </span>

                  <strong
                    style={{
                      color:
                        "#16a34a",
                      fontSize:
                        "12px",
                    }}
                  >
                    Active
                  </strong>
                </div>
              </div>
            </section>
          </div>

          {/* UPCOMING QUEUE */}

          <section
            style={{
              background:
                "#ffffff",
              border:
                "1px solid #e7ebf2",
              borderRadius:
                "14px",
              padding:
                "22px",
              marginBottom:
                "22px",
              boxShadow:
                "0 4px 14px rgba(20,40,80,0.045)",
            }}
          >
            <div
              style={{
                display:
                  "flex",
                justifyContent:
                  "space-between",
                alignItems:
                  "center",
                marginBottom:
                  "16px",
              }}
            >
              <div>
                <h2
                  style={{
                    margin:
                      "0 0 5px",
                    fontSize:
                      "17px",
                  }}
                >
                  Upcoming Queue
                </h2>

                <p
                  style={{
                    margin: 0,
                    color:
                      "#667085",
                    fontSize:
                      "12px",
                  }}
                >
                  Queue information available
                  from the current QueueSmart data.
                </p>
              </div>

              <span
                style={{
                  padding:
                    "6px 10px",
                  borderRadius:
                    "20px",
                  background:
                    "#f2f4f7",
                  color:
                    "#667085",
                  fontSize:
                    "11px",
                  fontWeight:
                    650,
                }}
              >
                Live data
              </span>
            </div>

            {queue ? (
              <div
                style={{
                  overflowX:
                    "auto",
                }}
              >
                <table
                  style={{
                    width:
                      "100%",
                    borderCollapse:
                      "collapse",
                  }}
                >
                  <thead>
                    <tr>
                      {[
                        "Token",
                        "Service",
                        "Counter",
                        "Position",
                        "Wait",
                        "Status",
                      ].map(
                        (heading) => (
                          <th
                            key={
                              heading
                            }
                            style={{
                              textAlign:
                                "left",
                              padding:
                                "11px 12px",
                              borderBottom:
                                "1px solid #edf0f4",
                              color:
                                "#98a2b3",
                              fontSize:
                                "10px",
                              textTransform:
                                "uppercase",
                              letterSpacing:
                                "0.6px",
                            }}
                          >
                            {heading}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td
                        style={{
                          padding:
                            "14px 12px",
                          fontWeight:
                            800,
                        }}
                      >
                        {queue.number ||
                          "—"}
                      </td>

                      <td
                        style={{
                          padding:
                            "14px 12px",
                        }}
                      >
                        {queue.service ||
                          "—"}
                      </td>

                      <td
                        style={{
                          padding:
                            "14px 12px",
                        }}
                      >
                        {queue.counter ||
                          "—"}
                      </td>

                      <td
                        style={{
                          padding:
                            "14px 12px",
                        }}
                      >
                        {queue.queue_position ||
                          "—"}
                      </td>

                      <td
                        style={{
                          padding:
                            "14px 12px",
                        }}
                      >
                        {getEstimatedWait(
                          queue.estimated_wait_time
                        )}{" "}
                        min
                      </td>

                      <td
                        style={{
                          padding:
                            "14px 12px",
                        }}
                      >
                        <span
                          className={getStatusClass(
                            queue.status
                          )}
                        >
                          {formatStatus(
                            queue.status
                          )}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : (
              <div
                style={{
                  padding:
                    "30px",
                  textAlign:
                    "center",
                  border:
                    "1px dashed #d6dde8",
                  borderRadius:
                    "10px",
                  color:
                    "#667085",
                  fontSize:
                    "13px",
                }}
              >
                No queue token is currently
                available in the loaded data.
              </div>
            )}
          </section>

          {/* WORKLOAD / ASSIGNMENT */}

          <section
            style={{
              background:
                "#ffffff",
              border:
                "1px solid #e7ebf2",
              borderRadius:
                "14px",
              padding:
                "22px",
              marginBottom:
                "22px",
              boxShadow:
                "0 4px 14px rgba(20,40,80,0.045)",
            }}
          >
            <div
              style={{
                marginBottom:
                  "18px",
              }}
            >
              <h2
                style={{
                  margin:
                    "0 0 5px",
                  fontSize:
                    "17px",
                }}
              >
                Workload & Assignment
              </h2>

              <p
                style={{
                  margin: 0,
                  color:
                    "#667085",
                  fontSize:
                    "12px",
                }}
              >
                Current service and workplace
                configuration available to this
                QueueSmart session.
              </p>
            </div>

            <div
              style={{
                display:
                  "grid",
                gridTemplateColumns:
                  "repeat(3, minmax(0, 1fr))",
                gap:
                  "14px",
              }}
            >
              <div
                style={{
                  padding:
                    "18px",
                  border:
                    "1px solid #edf0f4",
                  borderRadius:
                    "11px",
                  background:
                    "#fafbfc",
                }}
              >
                <span
                  style={{
                    display:
                      "block",
                    color:
                      "#98a2b3",
                    fontSize:
                      "11px",
                    marginBottom:
                      "8px",
                  }}
                >
                  Available Services
                </span>

                <strong
                  style={{
                    fontSize:
                      "24px",
                  }}
                >
                  {services.length}
                </strong>
              </div>

              <div
                style={{
                  padding:
                    "18px",
                  border:
                    "1px solid #edf0f4",
                  borderRadius:
                    "11px",
                  background:
                    "#fafbfc",
                }}
              >
                <span
                  style={{
                    display:
                      "block",
                    color:
                      "#98a2b3",
                    fontSize:
                      "11px",
                    marginBottom:
                      "8px",
                  }}
                >
                  Workplaces
                </span>

                <strong
                  style={{
                    fontSize:
                      "24px",
                  }}
                >
                  {workplaces.length}
                </strong>
              </div>

              <div
                style={{
                  padding:
                    "18px",
                  border:
                    "1px solid #edf0f4",
                  borderRadius:
                    "11px",
                  background:
                    "#fafbfc",
                }}
              >
                <span
                  style={{
                    display:
                      "block",
                    color:
                      "#98a2b3",
                    fontSize:
                      "11px",
                    marginBottom:
                      "8px",
                  }}
                >
                  Current Queue
                </span>

                <strong
                  style={{
                    fontSize:
                      "24px",
                  }}
                >
                  {hasActiveQueue
                    ? "Active"
                    : "Idle"}
                </strong>
              </div>
            </div>
          </section>

          {/* ACTION STATUS NOTE */}

          <div
            style={{
              padding:
                "14px 16px",
              border:
                "1px solid #dbe7f8",
              background:
                "#f5f9ff",
              borderRadius:
                "10px",
              color:
                "#475467",
              fontSize:
                "12px",
              lineHeight:
                1.6,
              marginBottom:
                "22px",
            }}
          >
            <strong
              style={{
                color:
                  "#1f4f8f",
              }}
            >
              Staff controls:
            </strong>{" "}
            The Staff dashboard is connected to the
            authenticated ServiceNow user. Queue
            operations update the Queue records through
            the ServiceNow-side QueueSmart API.
          </div>

          {/* FOOTER */}

          <footer
            style={{
              display:
                "flex",
              justifyContent:
                "space-between",
              padding:
                "8px 2px 20px",
              color:
                "#98a2b3",
              fontSize:
                "11px",
            }}
          >
            <span>
              QueueSmart • Staff Operations
            </span>

            <span>
              Last updated{" "}
              {lastUpdated.toLocaleTimeString(
                [],
                {
                  hour:
                    "2-digit",
                  minute:
                    "2-digit",
                }
              )}
            </span>
          </footer>
        </main>
      </div>
    );
  }

  /* =========================================================
     ADMIN DASHBOARD
     ========================================================= */

  if (userRole === "admin") {
    return (
      <div
        className="admin-shell"
        style={{
          position:
            "fixed",
          inset: 0,
          width:
            "100vw",
          height:
            "100vh",
          display:
            "flex",
          flexDirection:
            "column",
          background:
            "#f5f7fb",
          zIndex:
            999999,
          overflow:
            "hidden",
        }}
      >
        <header className="admin-topbar">
          <div className="admin-top-brand">
            <div className="admin-logo">
              Q
            </div>

            <div>
              <strong>
                QueueSmart Admin
              </strong>

              <span>
                Administration Console
              </span>
            </div>
          </div>

          <div className="admin-top-right">
            <span className="admin-refresh-text">
              Last refreshed:{" "}
              {lastUpdated.toLocaleTimeString()}
            </span>

            <button
              className="admin-refresh"
              onClick={
                loadStudentData
              }
              disabled={
                loading
              }
            >
              ↻ Refresh
            </button>

            <div className="admin-user">
              <div className="admin-user-avatar">
                {(
                  student?.user_name ||
                  "admin"
                )
                  .charAt(0)
                  .toUpperCase()}
              </div>

              <div>
                <strong>
                  {student?.user_name ||
                    "admin"}
                </strong>

                <small>
                  Administrator
                </small>
              </div>
            </div>
          </div>
        </header>

        <div
          className="admin-layout"
          style={{
            flex: 1,
            minHeight:
              0,
            display:
              "grid",
            gridTemplateColumns:
              "245px minmax(0, 1fr)",
            overflow:
              "hidden",
          }}
        >
          <aside
            className="admin-sidebar"
            style={{
              width:
                "245px",
              minWidth:
                "245px",
              padding:
                "22px 14px",
              background:
                "#ffffff",
              borderRight:
                "1px solid #e5eaf1",
              display:
                "flex",
              flexDirection:
                "column",
              boxSizing:
                "border-box",
            }}
          >
            <div
              style={{
                padding:
                  "0 12px 18px",
                color:
                  "#98a2b3",
                fontSize:
                  "10px",
                fontWeight:
                  700,
                letterSpacing:
                  "1.2px",
                textTransform:
                  "uppercase",
              }}
            >
              QueueSmart
            </div>

            <nav
              style={{
                display:
                  "flex",
                flexDirection:
                  "column",
                gap:
                  "5px",
              }}
            >
              {[
                ["⌂", "Overview"],
                ["◉", "Live Queues"],
                ["▣", "Tokens"],
                ["▤", "Counters"],
                ["◫", "Services"],
                ["⌖", "Locations"],
                ["◒", "Analytics"],
                ["▥", "Reports"],
                ["♢", "Notifications"],
                ["★", "Feedback"],
                ["⚙", "Configuration"],
              ].map(
                (
                  [icon, label],
                  index
                ) => (
                  <button
                    key={
                      label
                    }
                    type="button"
                    className="admin-nav"
                    style={{
                      width:
                        "100%",
                      height:
                        "42px",
                      minHeight:
                        "42px",
                      padding:
                        "0 13px",
                      display:
                        "flex",
                      alignItems:
                        "center",
                      gap:
                        "12px",
                      border:
                        "0",
                      borderRadius:
                        "9px",
                      background:
                        index ===
                        0
                          ? "#edf4ff"
                          : "transparent",
                      color:
                        index ===
                        0
                          ? "#2563eb"
                          : "#667085",
                      fontFamily:
                        "inherit",
                      fontSize:
                        "13px",
                      fontWeight:
                        index ===
                        0
                          ? 700
                          : 550,
                      textAlign:
                        "left",
                      cursor:
                        "pointer",
                      boxSizing:
                        "border-box",
                    }}
                  >
                    <span
                      style={{
                        width:
                          "22px",
                        minWidth:
                          "22px",
                        height:
                          "22px",
                        display:
                          "flex",
                        alignItems:
                          "center",
                        justifyContent:
                          "center",
                        fontSize:
                          "14px",
                        color:
                          index ===
                          0
                            ? "#2563eb"
                            : "#7b8798",
                      }}
                    >
                      {icon}
                    </span>

                    <span>
                      {label}
                    </span>
                  </button>
                )
              )}
            </nav>

            <div
              style={{
                marginTop:
                  "auto",
                padding:
                  "18px 12px 4px",
                borderTop:
                  "1px solid #f0f2f6",
                color:
                  "#98a2b3",
                fontSize:
                  "10px",
              }}
            >
              QueueSmart v1.0
            </div>
          </aside>

          <main
            className="admin-main"
            style={{
              minWidth:
                0,
              minHeight:
                0,
              overflowY:
                "auto",
              overflowX:
                "hidden",
            }}
          >
            <div className="admin-heading">
              <div>
                <h1>
                  QueueSmart Admin Dashboard
                </h1>

                <p>
                  Real-time overview of queues and
                  operations
                </p>
              </div>

              <div className="admin-heading-time">
                <span className="live-dot"></span>
                Live system
              </div>
            </div>

            <div
              className="admin-kpis"
              style={{
                display:
                  "grid",
                gridTemplateColumns:
                  "repeat(5, minmax(0, 1fr))",
                gap:
                  "16px",
                marginBottom:
                  "22px",
              }}
            >
              {[
                {
                  title:
                    "Total Active Tokens",
                  value:
                    queue
                      ? "1"
                      : "0",
                  subtitle:
                    "Currently active",
                },
               
{
  title: "Total Active Tokens",
  value: "8",
  subtitle: "Currently waiting",
},
{
  title: "Average Wait Time",
  value: "12 min",
  subtitle: "Estimated queue wait",
},                {
                  title:
                    "Active Counters",
                  value:
                    "2",
                  subtitle:
                    "Configured workplaces",
                },
                {
                  title:
                    "Available Services",
                  value:
                    services.length,
                  subtitle:
                    "Active QueueSmart services",
                },
              ].map(
                (card) => (
                  <div
                    key={
                      card.title
                    }
                    style={{
                      minHeight:
                        "118px",
                      padding:
                        "20px 21px",
                      display:
                        "flex",
                      flexDirection:
                        "column",
                      justifyContent:
                        "center",
                      background:
                        "#ffffff",
                      border:
                        "1px solid #e7ebf2",
                      borderRadius:
                        "14px",
                      boxShadow:
                        "0 4px 14px rgba(20,40,80,0.045)",
                      boxSizing:
                        "border-box",
                    }}
                  >
                    <span
                      style={{
                        display:
                          "block",
                        marginBottom:
                          "8px",
                        color:
                          "#718096",
                        fontSize:
                          "11px",
                        lineHeight:
                          "1.35",
                        fontWeight:
                          650,
                      }}
                    >
                      {card.title}
                    </span>

                    <strong
                      style={{
                        display:
                          "block",
                        marginBottom:
                          "6px",
                        color:
                          "#172033",
                        fontSize:
                          "25px",
                        lineHeight:
                          "1.1",
                        fontWeight:
                          800,
                      }}
                    >
                      {card.value}
                    </strong>

                    <small
                      style={{
                        display:
                          "block",
                        color:
                          "#98a2b3",
                        fontSize:
                          "10px",
                        lineHeight:
                          "1.35",
                      }}
                    >
                      {card.subtitle}
                    </small>
                  </div>
                )
              )}
            </div>

            <div className="admin-grid-top">
              <section className="admin-panel">
                <div className="admin-panel-header">
                  <div>
                    <h2>
                      Live Queue Status
                    </h2>

                    <p>
                      Currently active queue tokens
                    </p>
                  </div>

                  <button className="admin-link-btn">
                    View All
                  </button>
                </div>

                <div className="admin-table-wrap">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>
                          Workplace
                        </th>

                        <th>
                          Service
                        </th>

                        <th>
                          Token
                        </th>

                        <th>
                          Position
                        </th>

                        <th>
                          Wait
                        </th>

                        <th>
                          Status
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {queue ? (
                        <tr>
                          <td>
                            {selectedWorkplace ||
                              "—"}
                          </td>

                          <td>
                            {queue.service ||
                              "—"}
                          </td>

                          <td className="token-cell">
                            {queue.number ||
                              "—"}
                          </td>

                          <td>
                            {queue.queue_position ||
                              "—"}
                          </td>

                          <td>
                            {queue.estimated_wait_time
                              ? `${queue.estimated_wait_time} min`
                              : "—"}
                          </td>

                          <td>
                            <span
                              className={`admin-status ${
                                queue.status ===
                                "called"
                                  ? "called"
                                  : ""
                              }`}
                            >
                              {queue.status ||
                                "Waiting"}
                            </span>
                          </td>
                        </tr>
                      ) : (
                        <tr>
                          <td
                            colSpan={
                              6
                            }
                            className="admin-empty-row"
                          >
                            No active queues
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="admin-panel">
                <div className="admin-panel-header">
                  <div>
                    <h2>
                      Queue Trend (Today)
                    </h2>

                    <p>
                      Queue activity throughout the day
                    </p>
                  </div>

                  <select className="admin-select">
                    <option>
                      Today
                    </option>
                  </select>
                </div>

                <div className="fake-chart">
                  <div className="chart-y">
                    <span>
                      20
                    </span>

                    <span>
                      15
                    </span>

                    <span>
                      10
                    </span>

                    <span>
                      5
                    </span>

                    <span>
                      0
                    </span>
                  </div>

                  <div className="chart-area">
                    <div className="chart-grid-line l1"></div>
                    <div className="chart-grid-line l2"></div>
                    <div className="chart-grid-line l3"></div>
                    <div className="chart-grid-line l4"></div>

                    <div className="chart-line">
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>

                    <div className="chart-x">
                      <span>
                        9 AM
                      </span>

                      <span>
                        11 AM
                      </span>

                      <span>
                        1 PM
                      </span>

                      <span>
                        3 PM
                      </span>

                      <span>
                        5 PM
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="admin-grid-bottom">
              <section className="admin-panel">
                <div className="admin-panel-header">
                  <div>
                    <h2>
                      Top Services by Volume
                    </h2>

                    <p>
                      Today's service activity
                    </p>
                  </div>
                </div>

                <div className="service-bars">
                  {[
                    [
                      "Book Issue",
                      5,
                    ],
                    [
                      "Book Return",
                      4,
                    ],
                    [
                      "Membership",
                      3,
                    ],
                    [
                      "Bonafide Certificate",
                      2,
                    ],
                    [
                      "ID Card Service",
                      1,
                    ],
                  ].map(
                    ([
                      name,
                      value,
                    ]) => (
                      <div
                        className="service-bar-row"
                        key={
                          String(
                            name
                          )
                        }
                      >
                        <span>
                          {name}
                        </span>

                        <div className="bar-track">
                          <div
                            className="bar-fill"
                            style={{
                              width: `${
                                Number(
                                  value
                                ) *
                                20
                              }%`,
                            }}
                          />
                        </div>

                        <strong>
                          {value}
                        </strong>
                      </div>
                    )
                  )}
                </div>
              </section>

              <section className="admin-panel utilization-panel">
                <div className="admin-panel-header">
                  <div>
                    <h2>
                      Counter Utilization
                    </h2>

                    <p>
                      Current counter workload
                    </p>
                  </div>
                </div>

                <div className="utilization-body">
                  <div className="utilization-ring">
                    <div>
                      <strong>
                        50%
                      </strong>

                      <span>
                        Utilized
                      </span>
                    </div>
                  </div>

                  <div className="utilization-legend">
                    <div>
                      <span className="legend-dot in-use"></span>

                      <span>
                        In Use
                      </span>

                      <strong>
                        1
                      </strong>
                    </div>

                    <div>
                      <span className="legend-dot idle"></span>

                      <span>
                        Idle
                      </span>

                      <strong>
                        1
                      </strong>
                    </div>

                    <div>
                      <span className="legend-dot offline"></span>

                      <span>
                        Offline
                      </span>

                      <strong>
                        0
                      </strong>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <section className="admin-panel">
              <div className="admin-panel-header">
                <div>
                  <h2>
                    Recent Notifications
                  </h2>

                  <p>
                    Latest QueueSmart system activity
                  </p>
                </div>

                <button className="admin-link-btn">
                  View All
                </button>
              </div>

              <div className="notification-list">
                <div className="notification-row">
                  <div className="notification-icon">
                    ✓
                  </div>

                  <div>
                    <strong>
                      Token{" "}
                      {queue?.number ||
                        "Q00030"}{" "}
                      Waiting
                    </strong>

                    <small>
                      Queue is currently active
                    </small>
                  </div>

                  <time>
                    Now
                  </time>
                </div>

                <div className="notification-row">
                  <div className="notification-icon">
                    ✓
                  </div>

                  <div>
                    <strong>
                      QueueSmart system
                    </strong>

                    <small>
                      Dashboard is live
                    </small>
                  </div>

                  <time>
                    Now
                  </time>
                </div>

                <div className="notification-row">
                  <div className="notification-icon">
                    ✓
                  </div>

                  <div>
                    <strong>
                      {
                        services.length
                      }{" "}
                      services
                    </strong>

                    <small>
                      Currently available
                    </small>
                  </div>

                  <time>
                    Today
                  </time>
                </div>
              </div>
            </section>

            <section className="admin-panel admin-feedback-panel">
              <div className="admin-panel-header">
                <div>
                  <h2>
                    Recent Feedback
                  </h2>

                  <p>
                    Student service feedback
                  </p>
                </div>

                <button className="admin-link-btn">
                  View All
                </button>
              </div>

              <div className="feedback-placeholder">
                <div className="feedback-stars">
                  ★★★★★
                </div>

                <div>
                  <strong>
                    Student feedback will appear here
                  </strong>

                  <span>
                    Feedback is collected after service
                    completion.
                  </span>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    );
  }

  /* =========================================================
     ACCESS CONTROL
     ========================================================= */

  if (
    userRole !==
    "student"
  ) {
    return (
      <div className="app">
        <main className="container">
          <div className="error-card">
            <div className="error-icon">
              !
            </div>

            <h2>
              Access Restricted
            </h2>

            <p>
              You do not have a QueueSmart
              role assigned.
            </p>
          </div>
        </main>
      </div>
    );
  }

  /* =========================================================
     STUDENT PORTAL
     ========================================================= */

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <div className="brand-icon">
            Q
          </div>

          <div>
            <h1>
              QueueSmart
            </h1>

            <span>
              Student Queue Portal
            </span>
          </div>
        </div>

        <div className="user-area">
          <div className="user-avatar">
            {(
              student?.user_name ||
              "S"
            )
              .charAt(0)
              .toUpperCase()}
          </div>

          <div>
            <strong>
              {student?.user_name ||
                "Student"}
            </strong>

            <small>
              Student
            </small>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="welcome">
          <div>
            <h2>
              Welcome,{" "}
              {student?.user_name ||
                "Student"}{" "}
              👋
            </h2>

            <p>
              Track your queue status
              in real time.
            </p>
          </div>

          <button
            className="refresh-btn"
            onClick={() => {
              setLoading(
                true
              );
              loadQueue();
            }}
          >
            ↻ Refresh
          </button>
        </section>

        {hasMissedQueue ? (
          <div className="empty-card">
            <div className="empty-icon">
              ⚠️
            </div>

            <h2>
              Queue Missed
            </h2>

            <p>
              Your previous token was missed.
              You can rejoin the queue.
            </p>

            <button
              className="primary-btn"
              type="button"
              onClick={rejoinQueue}
              disabled={generating}
              style={{
                marginTop: "20px",
              }}
            >
              {generating
                ? "Rejoining..."
                : "Rejoin Queue"}
            </button>
          </div>
        ) : !hasActiveQueue ? (
          <div className="empty-card">
            <div className="empty-icon">
              🎟
            </div>

            <h2>
              Join Queue
            </h2>

            <p>
              Select your service and
              workplace before generating
              your token.
            </p>

            <div
              style={{
                width:
                  "100%",
                maxWidth:
                  "420px",
                margin:
                  "20px auto 0",
                textAlign:
                  "left",
              }}
            >
              <label
                style={{
                  display:
                    "block",
                  fontWeight:
                    600,
                  marginBottom:
                    "8px",
                }}
              >
                Service
              </label>

              <select
                value={
                  selectedService
                }
                onChange={(e) =>
                  setSelectedService(
                    e.target.value
                  )
                }
                disabled={
                  generating
                }
                style={{
                  width:
                    "100%",
                  padding:
                    "12px",
                  borderRadius:
                    "8px",
                  border:
                    "1px solid #d1d5db",
                  marginBottom:
                    "16px",
                  fontSize:
                    "15px",
                  background:
                    "#fff",
                }}
              >
                <option value="">
                  Select Service
                </option>

                {services.map(
                  (service) => (
                    <option
                      key={
                        service.sys_id
                      }
                      value={
                        service.sys_id
                      }
                    >
                      {
                        service.name
                      }
                    </option>
                  )
                )}
              </select>

              <label
                style={{
                  display:
                    "block",
                  fontWeight:
                    600,
                  marginBottom:
                    "8px",
                }}
              >
                Workplace / Counter
              </label>

              <select
                value={
                  selectedWorkplace
                }
                onChange={(e) =>
                  setSelectedWorkplace(
                    e.target.value
                  )
                }
                disabled={
                  generating
                }
                style={{
                  width:
                    "100%",
                  padding:
                    "12px",
                  borderRadius:
                    "8px",
                  border:
                    "1px solid #d1d5db",
                  marginBottom:
                    "20px",
                  fontSize:
                    "15px",
                  background:
                    "#fff",
                }}
              >
                <option value="">
                  Select Workplace
                </option>

                {workplaces.map(
                  (workplace) => (
                    <option
                      key={
                        workplace.sys_id
                      }
                      value={
                        workplace.sys_id
                      }
                    >
                      {
                        workplace.name
                      }
                    </option>
                  )
                )}
              </select>

              <button
                className="primary-btn"
                onClick={
                  generateToken
                }
                disabled={
                  generating ||
                  !selectedService ||
                  !selectedWorkplace
                }
                style={{
                  width:
                    "100%",
                }}
              >
                {generating
                  ? "Generating..."
                  : "Generate Token"}
              </button>

              {services.length ===
                0 && (
                <p
                  style={{
                    marginTop:
                      "12px",
                    fontSize:
                      "13px",
                    color:
                      "#777",
                  }}
                >
                  No services are
                  currently available.
                </p>
              )}

              {workplaces.length ===
                0 && (
                <p
                  style={{
                    marginTop:
                      "4px",
                    fontSize:
                      "13px",
                    color:
                      "#777",
                  }}
                >
                  No workplaces are
                  currently available.
                </p>
              )}
            </div>
          </div>
        ) : (
          <>
            <section className="token-card">
              <div className="token-left">
                <span className="label">
                  YOUR TOKEN
                </span>

                <h1>
                  {queue?.number ||
                    "--"}
                </h1>

                <span
                  className={getStatusClass(
                    queue?.status
                  )}
                >
                  {formatStatus(
                    queue?.status
                  )}
                </span>
              </div>

              <div className="token-right">
                <div className="service-name">
                  {queue?.service ||
                    "Service"}
                </div>

                <div className="counter">
                  <span>
                    Counter
                  </span>

                  <strong>
                    {queue?.counter ||
                      "--"}
                  </strong>
                </div>
              </div>
            </section>

            <section className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">
                  👥
                </div>

                <div>
                  <span>
                    People Ahead
                  </span>

                  <strong>
                    {queue?.queue_position
                      ? Math.max(
                          Number(
                            queue.queue_position
                          ) - 1,
                          0
                        )
                      : 0}
                  </strong>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  ⏱
                </div>

                <div>
                  <span>
                    Estimated Wait
                  </span>

                  <strong>
                    {getEstimatedWait(
                      queue?.estimated_wait_time
                    )}{" "}
                    min
                  </strong>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  🎫
                </div>

                <div>
                  <span>
                    Queue Position
                  </span>

                  <strong>
                    {queue?.queue_position ||
                      "--"}
                  </strong>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  👨‍💼
                </div>

                <div>
                  <span>
                    Staff
                  </span>

                  <strong>
                    {queue?.staff ||
                      "--"}
                  </strong>
                </div>
              </div>
            </section>

            <section className="details-grid">
              <div className="info-card">
                <div className="card-header">
                  <h3>
                    Queue Details
                  </h3>
                </div>

                <div className="detail-row">
                  <span>
                    Service
                  </span>

                  <strong>
                    {queue?.service ||
                      "--"}
                  </strong>
                </div>

                <div className="detail-row">
                  <span>
                    Assigned Counter
                  </span>

                  <strong>
                    {queue?.counter ||
                      "--"}
                  </strong>
                </div>

                <div className="detail-row">
                  <span>
                    Assigned Staff
                  </span>

                  <strong>
                    {queue?.staff ||
                      "--"}
                  </strong>
                </div>

                <div className="detail-row">
                  <span>
                    Arrival Time
                  </span>

                  <strong>
                    {formatTime(
                      queue?.arrival_time
                    )}
                  </strong>
                </div>

                <div className="detail-row">
                  <span>
                    Called Time
                  </span>

                  <strong>
                    {formatTime(
                      queue?.called_time
                    )}
                  </strong>
                </div>
              </div>

              <div className="info-card">
                <div className="card-header">
                  <h3>
                    Queue Status
                  </h3>
                </div>

                <div className="timeline">
                  <div className="timeline-item active">
                    <div className="dot"></div>

                    <div>
                      <strong>
                        Token Generated
                      </strong>

                      <p>
                        Your token has
                        been successfully
                        created.
                      </p>
                    </div>
                  </div>

                  <div
                    className={`timeline-item ${
                      queue?.status
                        ?.toLowerCase() ===
                        "waiting" ||
                      queue?.status
                        ?.toLowerCase() ===
                        "called"
                        ? "active"
                        : ""
                    }`}
                  >
                    <div className="dot"></div>

                    <div>
                      <strong>
                        Waiting in Queue
                      </strong>

                      <p>
                        Position:{" "}
                        {queue?.queue_position ||
                          "--"}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`timeline-item ${
                      queue?.status
                        ?.toLowerCase() ===
                      "called"
                        ? "active"
                        : ""
                    }`}
                  >
                    <div className="dot"></div>

                    <div>
                      <strong>
                        Counter Call
                      </strong>

                      <p>
                        {queue?.status
                          ?.toLowerCase() ===
                        "called"
                          ? `Please proceed to ${
                              queue?.counter ||
                              "your counter"
                            }.`
                          : "You will be notified when called."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
	
        <section
          className="info-card"
          style={{ marginBottom: "24px", padding: "24px" }}
        >
          <div className="card-header">
            <h3>✨ AI Queue Insights</h3>
          </div>

          <p>
            Get an AI-generated recommendation based on
            your current queue information.
          </p>

          <button
            type="button"
            onClick={getAIInsight}
            disabled={aiLoading}
            style={{
              padding: "12px 20px",
              borderRadius: "8px",
              border: "none",
              cursor: aiLoading ? "wait" : "pointer",
              fontWeight: 600,
            }}
          >
            {aiLoading ? "Analyzing Queue..." : "Analyze Queue with AI"}
          </button>

          {aiError && (
            <p role="alert" style={{ color: "#c62828" }}>
              {aiError}
            </p>
          )}

          {aiInsight && (
            <div
              style={{
                marginTop: "16px",
                padding: "16px",
                borderRadius: "8px",
                background: "#f0f7ff",
                lineHeight: 1.6,
              }}
            >
              <strong>AI Recommendation</strong>
              <p>{aiInsight}</p>
            </div>
          )}
        </section>


            <section className="notification-card">
              <div className="notification-icon">
                🔔
              </div>

              <div>
                <h3>
                  Queue Notifications
                </h3>

                <p>
                  Stay nearby and watch
                  your queue status.
                  QueueSmart will notify
                  you when your turn is
                  approaching.
                </p>
              </div>
            </section>
          </>
        )}

        <footer>
          <span>
            QueueSmart • Smart Campus
            Queue Management
          </span>

          <span>
            Last updated{" "}
            {lastUpdated.toLocaleTimeString(
              [],
              {
                hour:
                  "2-digit",
                minute:
                  "2-digit",
              }
            )}
          </span>
        </footer>
      </main>
    </div>
  );
}







