import React, { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../utils/SessionStorage";

function Login() {
  const userData = useSelector((store) => store.employees);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 800));

    const foundUser = userData.find(
      (item) => item.email === email && password === "123"
    );

    if (foundUser) {
      loginUser(foundUser);
      toast.success("Login Successful");
      setEmail("");
      setPassword("");
      setLoading(false);
      navigate(`/employee/${foundUser.id}`);
      return;
    }

    if (email === "admin@example.com" && password === "123") {
      loginUser({
        name: "Admin",
        email: "admin@example.com",
        role: "Admin",
      });

      toast.success("Login Successful");
      setEmail("");
      setPassword("");
      setLoading(false);
      navigate("/admin");
      return;
    }

    toast.error("Wrong Credentials");
    setEmail("");
    setPassword("");
    setLoading(false);
  };

  return (
    <div
      style={{
        height: "100dvh",
        backgroundColor: "#F5F6FA",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        overflow: "hidden",
        boxSizing: "border-box",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1050px",
          height: "min(620px, calc(100dvh - 40px))",
          backgroundColor: "#FFFFFF",
          display: "grid",
          gridTemplateColumns: "1fr 330px",
          borderRadius: "16px",
          overflow: "hidden",
          border: "1px solid #DDE3EA",
          boxShadow: "0 18px 50px rgba(15, 23, 42, 0.12)",
          animation: "pageFromBottom 0.6s ease-out",
        }}
      >
        {/* Left Side */}
        <div
          style={{
            padding: "34px 60px",
            backgroundColor: "#FFFFFF",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              fontWeight: "800",
              color: "#0D0B61",
            }}
          >
            Task
            <span style={{ color: "#478B8D" }}>Flow</span>
          </div>

          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "360px",
                textAlign: "center",
                animation: "slideUp 0.7s ease-out",
              }}
            >
              <div
                style={{
                  width: "68px",
                  height: "68px",
                  margin: "0 auto 14px",
                  borderRadius: "18px",
                  backgroundColor: "#F7F8FF",
                  border: "1px solid #DDE3EA",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#0D0B61",
                  fontSize: "23px",
                  fontWeight: "800",
                  boxShadow: "0 10px 25px rgba(13, 11, 97, 0.08)",
                }}
              >
                TF
              </div>

              <h1
                style={{
                  fontSize: "34px",
                  color: "#1F2937",
                  marginBottom: "8px",
                  fontWeight: "800",
                }}
              >
                Welcome back!
              </h1>

              <p
                style={{
                  color: "#6B7280",
                  fontSize: "14px",
                  marginBottom: "28px",
                }}
              >
                Login to manage your team tasks
              </p>

              <form onSubmit={submitHandler}>
                <div
                  style={{
                    marginBottom: "17px",
                    textAlign: "left",
                  }}
                >
                  <label
                    style={{
                      display: "block",
                      color: "#6B7280",
                      fontSize: "13px",
                      fontWeight: "600",
                      marginBottom: "7px",
                    }}
                  >
                    Email
                  </label>

                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    type="email"
                    placeholder="Enter your email"
                    style={{
                      width: "100%",
                      padding: "13px 14px",
                      borderRadius: "6px",
                      border: "1px solid #DDE3EA",
                      outline: "none",
                      fontSize: "14px",
                      color: "#1F2937",
                      backgroundColor: "#FFFFFF",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <div
                  style={{
                    marginBottom: "17px",
                    textAlign: "left",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "7px",
                    }}
                  >
                    <label
                      style={{
                        color: "#6B7280",
                        fontSize: "13px",
                        fontWeight: "600",
                      }}
                    >
                      Password
                    </label>

                    <span
                      style={{
                        color: "#478B8D",
                        fontSize: "12px",
                        fontWeight: "600",
                        cursor: "pointer",
                      }}
                    >
                      Forgot password?
                    </span>
                  </div>

                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    type="password"
                    placeholder="Enter your password"
                    style={{
                      width: "100%",
                      padding: "13px 14px",
                      borderRadius: "6px",
                      border: "1px solid #DDE3EA",
                      outline: "none",
                      fontSize: "14px",
                      color: "#1F2937",
                      backgroundColor: "#FFFFFF",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <button
                  disabled={loading}
                  style={{
                    width: "100%",
                    padding: "13px",
                    borderRadius: "6px",
                    border: "none",
                    backgroundColor: "#0D0B61",
                    color: "#FFFFFF",
                    fontSize: "14px",
                    fontWeight: "700",
                    cursor: loading ? "not-allowed" : "pointer",
                    opacity: loading ? 0.75 : 1,
                    marginTop: "6px",
                  }}
                >
                  {loading ? (
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "9px",
                      }}
                    >
                      <span
                        style={{
                          width: "17px",
                          height: "17px",
                          border: "2px solid white",
                          borderTopColor: "transparent",
                          borderRadius: "50%",
                          animation: "spin 0.8s linear infinite",
                        }}
                      ></span>
                      Logging in...
                    </span>
                  ) : (
                    "Log in"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div
          style={{
            position: "relative",
            backgroundColor: "#0D0B61",
            overflow: "hidden",
            padding: "50px 38px",
            color: "#FFFFFF",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              backgroundColor: "rgba(41, 70, 105, 0.65)",
              top: "-120px",
              right: "-150px",
            }}
          ></div>

          <div
            style={{
              position: "absolute",
              width: "360px",
              height: "360px",
              borderRadius: "50%",
              backgroundColor: "rgba(41, 70, 105, 0.45)",
              bottom: "-170px",
              left: "-190px",
            }}
          ></div>

          <div
            style={{
              position: "relative",
              zIndex: 2,
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "8px 14px",
                borderRadius: "999px",
                backgroundColor: "rgba(255,255,255,0.12)",
                color: "#E4D329",
                fontSize: "13px",
                fontWeight: "700",
                marginBottom: "24px",
              }}
            >
              TaskFlow
            </span>

            <h2
              style={{
                fontSize: "34px",
                lineHeight: "1.15",
                fontWeight: "800",
                marginBottom: "16px",
              }}
            >
              Organize your team work in one place.
            </h2>

            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "15px",
                lineHeight: "1.7",
                marginBottom: "28px",
              }}
            >
              Create tasks, assign work to employees, and track daily progress
              using one clean dashboard.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {["Assign employee tasks", "Track task progress", "Manage daily workflow"].map(
                (text, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      color: "rgba(255,255,255,0.88)",
                      fontSize: "14px",
                    }}
                  >
                    <span
                      style={{
                        width: "9px",
                        height: "9px",
                        borderRadius: "50%",
                        backgroundColor: "#E4D329",
                        flexShrink: 0,
                      }}
                    ></span>
                    {text}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          html,
          body,
          #root {
            margin: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }

          @keyframes pageFromBottom {
            from {
              opacity: 0;
              transform: translateY(35px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(22px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
}

export default Login;