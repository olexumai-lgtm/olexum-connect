"use client";

const OLEXUM_LOGO = "/logo.png";

export default function ConfirmedPage() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.logoWrap}>
          <img src={OLEXUM_LOGO} alt="Olexum" style={styles.logo} />
        </div>

        <div style={styles.card}>
          <div style={styles.successIcon}>
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
              <circle cx="28" cy="28" r="28" fill="#0f6e56" opacity="0.15" />
              <circle cx="28" cy="28" r="19" fill="#0f6e56" opacity="0.25" />
              <path d="M19 28l6 6 12-12" stroke="#5DCAA5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <h1 style={styles.title}>Setup confirmed.</h1>
          <p style={styles.subtitle}>
            We have everything we need. Our team is now building your MedFlow System — you&apos;ll be notified as soon as it&apos;s live.
          </p>

          <div style={styles.divider} />

          <div style={styles.stepsWrap}>
            <div style={styles.stepRow}>
              <div style={styles.checkCircle}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5DCAA5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <span style={styles.stepText}>Call forwarding confirmed</span>
            </div>
            <div style={styles.stepRow}>
              <div style={styles.checkCircle}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5DCAA5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <span style={styles.stepText}>Calendar integration received</span>
            </div>
          </div>

          <div style={styles.divider} />

          <p style={styles.footerNote}>
            Questions? Email us at{" "}
            <a href="mailto:support@olexum.solutions" style={styles.footerLink}>support@olexum.solutions</a>
          </p>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&display=swap');
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
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
    padding: "2.5rem 2rem",
    textAlign: "center" as const,
  },
  successIcon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 500,
    color: "#f0f0f0",
    margin: "0 0 10px 0",
    letterSpacing: "-0.02em",
  },
  subtitle: {
    fontSize: 14,
    color: "#777",
    margin: 0,
    lineHeight: 1.7,
  },
  divider: {
    height: 1,
    background: "#1e1e1e",
    margin: "1.5rem 0",
  },
  stepsWrap: {
    display: "flex",
    flexDirection: "column" as const,
    gap: 12,
  },
  stepRow: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    justifyContent: "center",
  },
  checkCircle: {
    width: 24,
    height: 24,
    borderRadius: "50%",
    background: "rgba(93, 202, 165, 0.08)",
    border: "1px solid rgba(93, 202, 165, 0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  stepText: {
    fontSize: 14,
    color: "#aaa",
  },
  footerNote: {
    fontSize: 13,
    color: "#555",
    margin: 0,
  },
  footerLink: {
    color: "#5DCAA5",
    textDecoration: "none",
  },
};
