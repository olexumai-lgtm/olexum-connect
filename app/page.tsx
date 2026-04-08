"use client";
import { useState } from "react";

const OLEXUM_LOGO = "/logo.png";

export default function ConnectPage() {
  const [apiKey, setApiKey] = useState("");
  const [forwarding, setForwarding] = useState<boolean | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [masked, setMasked] = useState(true);

  const canSubmit = forwarding === true && apiKey.trim().length > 0;

  const handleSubmit = async () => {
    if (!canSubmit) return;
    setLoading(true);
    const params = new URLSearchParams(window.location.search);
    const email = params.get("email");
    const callback = params.get("callback");
    try {
      await fetch("https://services.leadconnectorhq.com/hooks/izlvqiZqnG5l78hl9hlb/webhook-trigger/cc3409d2-819f-40f8-97b6-14fa52e08498", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ api_key: apiKey, call_forwarding_confirmed: true, email })
      });
    } catch (e) {}
    if (callback) {
      window.location.href = callback;
      return;
    }
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={styles.page}>
        <div style={styles.successContainer}>
          <div style={styles.successIcon}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="24" fill="#0f6e56" opacity="0.15" />
              <circle cx="24" cy="24" r="16" fill="#0f6e56" opacity="0.25" />
              <path d="M16 24l5 5 11-11" stroke="#5DCAA5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h2 style={styles.successTitle}>You&apos;re all set.</h2>
          <p style={styles.successText}>
            We&apos;ve received your information. Our team is finalizing your setup — you&apos;ll be notified as soon as your MedFlow System is live.
          </p>
          <div style={styles.successBadge}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5DCAA5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span>Securely received</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.logoWrap}>
          <img src={OLEXUM_LOGO} alt="Olexum" style={styles.logo} />
        </div>

        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h1 style={styles.title}>Last steps before launch</h1>
            <p style={styles.subtitle}>Confirm both steps below — that&apos;s everything we need from you to go live.</p>
          </div>

          <div style={styles.divider} />

          {/* Step 1 */}
          <div>
            <div style={styles.stepLabel}>
              <span style={styles.stepNumber}>1</span>
              <span style={styles.stepTitle}>Call forwarding</span>
            </div>
            <p style={styles.stepDesc}>
              Have you set up call forwarding by dialing <span style={styles.code}>*71</span> + your assigned AI number?
            </p>
            <div style={styles.toggleGroup}>
              <button
                onClick={() => setForwarding(true)}
                style={{
                  ...styles.toggleBtn,
                  ...(forwarding === true ? styles.toggleActive : {}),
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Yes, it&apos;s done
              </button>
              <button
                onClick={() => setForwarding(false)}
                style={{
                  ...styles.toggleBtn,
                  ...(forwarding === false ? styles.toggleNotYet : {}),
                }}
              >
                Not yet
              </button>
            </div>
            {forwarding === false && (
              <div style={styles.helpBox}>
                <p style={styles.helpText}>
                  Dial <span style={styles.code}>*71</span> followed by the number we sent via SMS, press call, wait for the confirmation tone, then hang up. That&apos;s it.
                </p>
              </div>
            )}
          </div>

          <div style={styles.divider} />

          {/* Step 2 */}
          <div>
            <div style={styles.stepLabel}>
              <span style={styles.stepNumber}>2</span>
              <span style={styles.stepTitle}>Calendar integration</span>
            </div>
            <p style={styles.stepDesc}>
              Paste your API key or access token from your CRM / booking system so we can schedule appointments directly.
            </p>
            <div style={styles.instructions}>
              <div style={styles.instructionStep}>
                <span style={styles.instrNum}>a</span>
                <span style={styles.instrText}>Log in to your CRM or booking system and open <strong>Settings</strong></span>
              </div>
              <div style={styles.instructionStep}>
                <span style={styles.instrNum}>b</span>
                <span style={styles.instrText}>Find <strong>Integrations</strong>, <strong>API</strong>, or <strong>Developer</strong></span>
              </div>
              <div style={styles.instructionStep}>
                <span style={styles.instrNum}>c</span>
                <span style={styles.instrText}>Copy your API key or access token and paste it below</span>
              </div>
            </div>
            <div style={styles.inputWrap}>
              <div style={styles.inputContainer}>
                <svg style={styles.inputIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5a5a5a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <input
                  type={masked ? "password" : "text"}
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="Paste your API key or access token here"
                  style={styles.input}
                  spellCheck={false}
                  autoComplete="off"
                />
                {apiKey && (
                  <button
                    onClick={() => setMasked(!masked)}
                    style={styles.eyeBtn}
                    title={masked ? "Show" : "Hide"}
                  >
                    {masked ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    )}
                  </button>
                )}
              </div>
              <div style={styles.securityNote}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#5DCAA5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span>Your key is transmitted securely and only used to connect your calendar.</span>
              </div>
            </div>
          </div>

          <div style={styles.divider} />

          <button
            onClick={handleSubmit}
            disabled={!canSubmit || loading}
            style={{
              ...styles.submitBtn,
              ...(!canSubmit ? styles.submitDisabled : {}),
              ...(loading ? styles.submitLoading : {}),
            }}
          >
            {loading ? (
              <div style={styles.spinner} />
            ) : (
              "Confirm & finish setup"
            )}
          </button>

          {!canSubmit && (forwarding !== null || apiKey.length > 0) && (
            <p style={styles.hint}>
              {forwarding !== true && apiKey.trim().length === 0
                ? "Complete both steps above to continue"
                : forwarding !== true
                ? "Confirm call forwarding to continue"
                : "Paste your API key to continue"}
            </p>
          )}
        </div>

        <p style={styles.footer}>
          Questions? Email us at <a href="mailto:support@olexum.solutions" style={styles.footerLink}>support@olexum.solutions</a>
        </p>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&display=swap');
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        input::placeholder {
          color: #4a4a4a;
          font-family: 'Outfit', sans-serif;
        }
        input:focus {
          outline: none;
          border-color: #5DCAA5 !important;
          box-shadow: 0 0 0 1px rgba(93, 202, 165, 0.2);
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    minHeight: "100vh",
    background: "#0a0a0a",
    fontFamily: "'Outfit', sans-serif",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem 1rem",
  },
  container: {
    width: "100%",
    maxWidth: 520,
    animation: "fadeIn 0.6s ease-out",
  },
  logoWrap: {
    textAlign: "center" as const,
    marginBottom: "2rem",
  },
  logo: {
    height: 52,
    opacity: 0.9,
  },
  card: {
    background: "#111111",
    border: "1px solid #1e1e1e",
    borderRadius: 16,
    padding: "2rem",
  },
  cardHeader: {
    marginBottom: 0,
  },
  title: {
    fontSize: 22,
    fontWeight: 500,
    color: "#f0f0f0",
    margin: "0 0 6px 0",
    letterSpacing: "-0.02em",
  },
  subtitle: {
    fontSize: 14,
    color: "#777",
    margin: 0,
    lineHeight: 1.5,
  },
  divider: {
    height: 1,
    background: "#1e1e1e",
    margin: "1.5rem 0",
  },
  stepLabel: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 8,
  },
  stepNumber: {
    width: 24,
    height: 24,
    borderRadius: "50%",
    background: "#1a1a1a",
    border: "1px solid #2a2a2a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    fontWeight: 500,
    color: "#888",
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: 500,
    color: "#e0e0e0",
  },
  stepDesc: {
    fontSize: 13,
    color: "#888",
    margin: "0 0 12px 0",
    lineHeight: 1.6,
    paddingLeft: 34,
  },
  code: {
    background: "#1a1a1a",
    border: "1px solid #2a2a2a",
    borderRadius: 4,
    padding: "1px 6px",
    fontSize: 12,
    fontFamily: "monospace",
    color: "#ccc",
  },
  toggleGroup: {
    display: "flex",
    gap: 8,
    paddingLeft: 34,
  },
  toggleBtn: {
    padding: "8px 16px",
    borderRadius: 8,
    border: "1px solid #2a2a2a",
    background: "#141414",
    color: "#888",
    fontSize: 13,
    fontWeight: 400,
    fontFamily: "'Outfit', sans-serif",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 6,
    transition: "all 0.2s ease",
  },
  toggleActive: {
    background: "rgba(93, 202, 165, 0.08)",
    borderColor: "rgba(93, 202, 165, 0.3)",
    color: "#5DCAA5",
  },
  toggleNotYet: {
    background: "rgba(255, 180, 120, 0.06)",
    borderColor: "rgba(255, 180, 120, 0.2)",
    color: "#ffb478",
  },
  helpBox: {
    marginTop: 10,
    marginLeft: 34,
    padding: "10px 14px",
    background: "rgba(255, 180, 120, 0.04)",
    border: "1px solid rgba(255, 180, 120, 0.1)",
    borderRadius: 8,
  },
  helpText: {
    fontSize: 13,
    color: "#999",
    margin: 0,
    lineHeight: 1.6,
  },
  instructions: {
    display: "flex",
    flexDirection: "column" as const,
    gap: 6,
    paddingLeft: 34,
    marginBottom: 14,
  },
  instructionStep: {
    display: "flex",
    alignItems: "flex-start",
    gap: 10,
  },
  instrNum: {
    width: 20,
    height: 20,
    borderRadius: "50%",
    background: "#161616",
    border: "1px solid #222",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 11,
    fontWeight: 400,
    color: "#666",
    flexShrink: 0,
    marginTop: 1,
  },
  instrText: {
    fontSize: 13,
    color: "#888",
    lineHeight: 1.5,
  },
  inputWrap: {
    paddingLeft: 34,
  },
  inputContainer: {
    position: "relative" as const,
    display: "flex",
    alignItems: "center",
  },
  inputIcon: {
    position: "absolute" as const,
    left: 12,
    pointerEvents: "none" as const,
  },
  input: {
    width: "100%",
    padding: "12px 40px 12px 36px",
    background: "#0e0e0e",
    border: "1px solid #2a2a2a",
    borderRadius: 10,
    color: "#e0e0e0",
    fontSize: 14,
    fontFamily: "'Outfit', monospace",
    letterSpacing: "0.02em",
    transition: "border-color 0.2s ease",
  },
  eyeBtn: {
    position: "absolute" as const,
    right: 10,
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  securityNote: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    marginTop: 8,
    fontSize: 11,
    color: "#555",
  },
  submitBtn: {
    width: "100%",
    padding: "14px",
    borderRadius: 10,
    border: "none",
    background: "#5DCAA5",
    color: "#0a0a0a",
    fontSize: 15,
    fontWeight: 500,
    fontFamily: "'Outfit', sans-serif",
    cursor: "pointer",
    transition: "all 0.2s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 48,
  },
  submitDisabled: {
    background: "#1e1e1e",
    color: "#555",
    cursor: "not-allowed",
  },
  submitLoading: {
    background: "#4ab892",
    cursor: "wait",
  },
  spinner: {
    width: 20,
    height: 20,
    border: "2px solid rgba(10, 10, 10, 0.2)",
    borderTopColor: "#0a0a0a",
    borderRadius: "50%",
    animation: "spin 0.6s linear infinite",
  },
  hint: {
    textAlign: "center" as const,
    fontSize: 12,
    color: "#555",
    marginTop: 10,
    marginBottom: 0,
  },
  footer: {
    textAlign: "center" as const,
    fontSize: 13,
    color: "#444",
    marginTop: "1.5rem",
  },
  footerLink: {
    color: "#5DCAA5",
    textDecoration: "none",
  },
  successContainer: {
    textAlign: "center" as const,
    maxWidth: 420,
    animation: "fadeIn 0.6s ease-out",
  },
  successIcon: {
    marginBottom: 20,
  },
  successTitle: {
    fontSize: 24,
    fontWeight: 500,
    color: "#f0f0f0",
    margin: "0 0 10px 0",
    letterSpacing: "-0.02em",
  },
  successText: {
    fontSize: 14,
    color: "#777",
    lineHeight: 1.7,
    margin: "0 0 20px 0",
  },
  successBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "6px 14px",
    background: "rgba(93, 202, 165, 0.08)",
    border: "1px solid rgba(93, 202, 165, 0.15)",
    borderRadius: 20,
    fontSize: 12,
    color: "#5DCAA5",
  },
};
