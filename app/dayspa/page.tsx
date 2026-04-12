"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Phone, Calendar, Settings, Rocket, BarChart3, MessageSquare,
  Mail, CreditCard, RefreshCw, CheckCircle, XCircle, Star, Bell,
  ClipboardList, PhoneForwarded, Handshake, Link, Shield,
} from "lucide-react";

const GOLD = "#C4A265";
const CHARCOAL = "#1E1E1E";
const BODY_GRAY = "#6B6B6B";
const LIGHT_GRAY = "#9A9A9A";
const BG_WHITE = "#FAFAF8";
const BG_WARM = "#F5F2ED";
const CARD_BORDER = "#E5E2DC";
const GREEN = "#5A8F6E";
const RED = "#B85450";

const H = "var(--font-playfair), Georgia, serif";
const B = "var(--font-dm-sans), Calibri, sans-serif";

type IconType = React.ComponentType<{ size?: number; color?: string; strokeWidth?: number; style?: React.CSSProperties }>;

const GoldBar = ({ width = 80, centered = false }: { width?: number; centered?: boolean }) => (
  <div style={{ width, height: 2.5, background: GOLD, borderRadius: 2, margin: centered ? "0 auto" : 0 }} />
);

const I = ({ icon: Icon, size = 22, color = GOLD, style = {} }: { icon: IconType; size?: number; color?: string; style?: React.CSSProperties }) => (
  <Icon size={size} color={color} strokeWidth={1.8} style={{ flexShrink: 0, ...style }} />
);

interface Slide {
  bg: string;
  render: () => React.ReactNode;
}

const slides: Slide[] = [
  // 0 — TITLE
  {
    bg: CHARCOAL,
    render: () => (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: 16 }}>
        <h1 style={{ fontFamily: H, fontSize: 72, color: "#fff", fontStyle: "italic", fontWeight: 400, margin: 0 }}>SpaFlow</h1>
        <GoldBar width={100} centered />
        <p style={{ fontFamily: B, color: GOLD, fontSize: 20, letterSpacing: 5, margin: "12px 0 0" }}>Client Onboarding</p>
        <p style={{ fontFamily: B, color: LIGHT_GRAY, fontSize: 15, fontStyle: "italic", marginTop: 16 }}>Your complete guide to getting started.</p>
        <Image src="/olexum-logo.png" alt="olexum" width={140} height={40} style={{ marginTop: 20, opacity: 0.85 }} />
      </div>
    ),
  },
  // 1 — WELCOME
  {
    bg: BG_WHITE,
    render: () => {
      const items: [IconType, string][] = [[Settings,"How the SpaFlow AI system works"],[Phone,"What happens when a client calls your spa"],[Calendar,"Automated follow-ups, reminders & recovery"],[CreditCard,"How billing works — $0 upfront, pay per booking"],[BarChart3,"Your own reporting dashboard"],[Rocket,"Your onboarding timeline"]];
      return (
        <div style={{ padding: "48px 64px" }}>
          <h2 style={{ fontFamily: H, fontSize: 40, color: CHARCOAL, fontStyle: "italic", fontWeight: 400, margin: 0 }}>Welcome to SpaFlow</h2>
          <GoldBar width={80} />
          <p style={{ fontFamily: B, color: BODY_GRAY, fontSize: 16, margin: "16px 0 28px" }}>Here&apos;s what this onboarding covers:</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {items.map(([IconComp, text], i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, background: BG_WARM, borderRadius: 6, padding: "12px 18px" }}>
                <I icon={IconComp} />
                <span style={{ fontFamily: B, color: CHARCOAL, fontSize: 16 }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      );
    },
  },
  // 2 — WHAT IS SPAFLOW
  {
    bg: BG_WHITE,
    render: () => {
      const pillars = [{icon:Phone,title:"Every Lead Captured",desc:"SpaFlow answers every call instantly — during treatments, after hours, weekends. No voicemail. No missed opportunities."},{icon:Calendar,title:"Booked, Confirmed & Followed Up",desc:"Qualified leads are booked directly into your calendar, confirmed via text, and automatically followed up if they don't show."},{icon:Settings,title:"Built Around Your Spa",desc:"We build it around your services, pricing, availability, and workflow — then handle ongoing nurture and review collection."}];
      return (
        <div style={{ padding: "48px 40px", textAlign: "center" }}>
          <h2 style={{ fontFamily: H, fontSize: 36, color: CHARCOAL, fontStyle: "italic", fontWeight: 400, margin: 0 }}>Your Spa, Fully Covered — In 48 Hours</h2>
          <GoldBar width={100} centered />
          <div style={{ display: "flex", gap: 24, marginTop: 36, justifyContent: "center" }}>
            {pillars.map((p, i) => (
              <div key={i} style={{ flex: 1, maxWidth: 300, background: "#fff", border: `1px solid ${CARD_BORDER}`, borderRadius: 8, padding: "28px 24px", textAlign: "left", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                <I icon={p.icon} size={32} />
                <h3 style={{ fontFamily: H, color: CHARCOAL, fontSize: 18, fontWeight: 700, margin: "14px 0 10px" }}>{p.title}</h3>
                <p style={{ fontFamily: B, color: BODY_GRAY, fontSize: 14, lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      );
    },
  },
  // 3 — CALL FLOW
  {
    bg: BG_WHITE,
    render: () => {
      const steps = [{icon:Phone,t:"Client calls your spa number"},{icon:PhoneForwarded,t:"Call forwards to your SpaFlow AI agent"},{icon:MessageSquare,t:"AI answers naturally — knows your services & pricing"},{icon:Calendar,t:"AI books the appointment directly on your calendar"},{icon:CheckCircle,t:"Client gets instant confirmation via text"},{icon:Bell,t:"You get notified of every new booking"}];
      return (
        <div style={{ padding: "48px 64px" }}>
          <h2 style={{ fontFamily: H, fontSize: 36, color: CHARCOAL, fontStyle: "italic", fontWeight: 400, margin: 0 }}>How the AI Voice Agent Works</h2>
          <GoldBar width={80} />
          <div style={{ marginTop: 28 }}>
            {steps.map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: GOLD, display: "flex", alignItems: "center", justifyContent: "center" }}><span style={{ color: "#fff", fontFamily: H, fontSize: 15, fontWeight: 700 }}>{i+1}</span></div>
                  {i < steps.length-1 && <div style={{ width: 1.5, height: 20, background: CARD_BORDER }} />}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0" }}>
                  <I icon={s.icon} size={18} />
                  <span style={{ fontFamily: B, color: CHARCOAL, fontSize: 17 }}>{s.t}</span>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: B, color: GOLD, fontSize: 14, fontStyle: "italic", marginTop: 24 }}>Your phone rings → AI picks up → appointment booked. That simple.</p>
        </div>
      );
    },
  },
  // 4 — LEAD NURTURE
  {
    bg: BG_WHITE,
    render: () => {
      const items = [{icon:MessageSquare,title:"Automatic SMS Follow-Up",desc:"New leads who don't book receive a personalized text sequence nudging them to schedule."},{icon:Mail,title:"Multi-Touch Outreach",desc:"We follow up over days — not just once — so leads don't slip through the cracks."},{icon:Calendar,title:"Easy Booking Link",desc:"Every message includes a direct link to book, making it effortless for the client."},{icon:BarChart3,title:"Hands-Off for You",desc:"The entire sequence runs automatically. You focus on delivering great service."}];
      return (
        <div style={{ padding: "48px 64px" }}>
          <h2 style={{ fontFamily: H, fontSize: 36, color: CHARCOAL, fontStyle: "italic", fontWeight: 400, margin: 0 }}>Lead Nurture & Follow-Up</h2>
          <GoldBar width={80} />
          <p style={{ fontFamily: B, color: BODY_GRAY, fontSize: 15, fontStyle: "italic", margin: "12px 0 24px" }}>What happens when a new lead doesn&apos;t book on the first call?</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {items.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 16, background: BG_WARM, border: `0.5px solid ${CARD_BORDER}`, borderRadius: 6, padding: "14px 20px" }}>
                <I icon={item.icon} style={{ marginTop: 2 }} />
                <div><div style={{ fontFamily: H, color: CHARCOAL, fontSize: 15, fontWeight: 700 }}>{item.title}</div><div style={{ fontFamily: B, color: BODY_GRAY, fontSize: 13, marginTop: 2 }}>{item.desc}</div></div>
              </div>
            ))}
          </div>
        </div>
      );
    },
  },
  // 5 — CONFIRMATIONS & REMINDERS
  {
    bg: BG_WHITE,
    render: () => (
      <div style={{ padding: "48px 40px", textAlign: "center" }}>
        <h2 style={{ fontFamily: H, fontSize: 36, color: CHARCOAL, fontStyle: "italic", fontWeight: 400, margin: 0 }}>Confirmations & Reminders</h2>
        <GoldBar width={100} centered />
        <div style={{ display: "flex", gap: 28, marginTop: 32, justifyContent: "center" }}>
          {[{Icon:CheckCircle,title:"Instant Confirmation",items:["Client books an appointment","Immediately gets a confirmation text","Includes date, time & service details","Professional, branded messaging"]},{Icon:Bell,title:"Smart Reminders",items:["24-hour reminder sent automatically","Reduces no-shows significantly","Client can confirm or reschedule via text","Your chair stays full"]}].map((card, ci) => (
            <div key={ci} style={{ flex: 1, maxWidth: 380, background: "#fff", border: `1px solid ${CARD_BORDER}`, borderRadius: 8, padding: "28px 28px", textAlign: "left", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <I icon={card.Icon} size={28} />
              <h3 style={{ fontFamily: H, color: CHARCOAL, fontSize: 20, fontWeight: 700, margin: "12px 0 16px" }}>{card.title}</h3>
              {card.items.map((item, ii) => (<p key={ii} style={{ fontFamily: B, color: BODY_GRAY, fontSize: 14, margin: "8px 0", lineHeight: 1.5 }}>·  {item}</p>))}
            </div>
          ))}
        </div>
        <p style={{ fontFamily: B, color: GOLD, fontSize: 13, fontStyle: "italic", marginTop: 24 }}>No manual texting. No phone tag. Everything is automated.</p>
      </div>
    ),
  },
  // 6 — REVIEW BOOSTER
  {
    bg: BG_WHITE,
    render: () => (
      <div style={{ padding: "48px 64px" }}>
        <h2 style={{ fontFamily: H, fontSize: 36, color: CHARCOAL, fontStyle: "italic", fontWeight: 400, margin: 0 }}>Automated Review Booster</h2>
        <GoldBar width={80} />
        <div style={{ display: "flex", gap: 36, marginTop: 24 }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontFamily: B, color: BODY_GRAY, fontSize: 15, margin: "0 0 20px" }}>After every completed appointment, SpaFlow sends your client a text asking for a Google review.</p>
            {["Timed perfectly — right after their visit","Direct link to your Google review page","Friendly, non-pushy message","Builds your online reputation on autopilot","More reviews = more new clients finding you"].map((pt, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}><CheckCircle size={18} color={GREEN} strokeWidth={2} /><span style={{ fontFamily: B, color: CHARCOAL, fontSize: 14 }}>{pt}</span></div>
            ))}
          </div>
          <div style={{ width: 220, background: BG_WARM, border: `1px solid ${CARD_BORDER}`, borderRadius: 8, padding: "28px 24px", textAlign: "center", flexShrink: 0 }}>
            <I icon={Star} size={48} />
            <div style={{ fontFamily: H, color: GOLD, fontSize: 36, fontWeight: 700, marginTop: 8 }}>5-Star</div>
            <div style={{ fontFamily: H, color: CHARCOAL, fontSize: 18, fontWeight: 700, lineHeight: 1.3, marginTop: 4 }}>Reputation<br/>On Autopilot</div>
            <div style={{ fontFamily: B, color: BODY_GRAY, fontSize: 12, marginTop: 10 }}>No awkward asks.<br/>No manual follow-up.</div>
          </div>
        </div>
      </div>
    ),
  },
  // 7 — VISIBILITY & REPORTING
  {
    bg: BG_WHITE,
    render: () => (
      <div style={{ padding: "48px 64px" }}>
        <h2 style={{ fontFamily: H, fontSize: 36, color: CHARCOAL, fontStyle: "italic", fontWeight: 400, margin: 0 }}>Visibility & Reporting</h2>
        <GoldBar width={80} />
        <p style={{ fontFamily: B, color: BODY_GRAY, fontSize: 15, fontStyle: "italic", margin: "12px 0 24px" }}>You always stay in the loop — without being on the phone.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ background: BG_WARM, border: `0.5px solid ${CARD_BORDER}`, borderRadius: 8, padding: "20px 24px", display: "flex", alignItems: "flex-start", gap: 16 }}>
            <I icon={Phone} size={26} style={{ marginTop: 2 }} />
            <div><div style={{ fontFamily: H, color: CHARCOAL, fontSize: 17, fontWeight: 700 }}>Voicemail Summary</div><div style={{ fontFamily: B, color: BODY_GRAY, fontSize: 14, marginTop: 4 }}>If a caller leaves a voicemail, you get a text with the summary — no need to listen to it.</div></div>
          </div>
          <div style={{ background: CHARCOAL, borderRadius: 8, padding: "28px 28px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}><I icon={BarChart3} size={26} color="#fff" /><div style={{ fontFamily: H, color: "#fff", fontSize: 19, fontWeight: 700 }}>Your Own Reporting Dashboard</div></div>
            <p style={{ fontFamily: B, color: LIGHT_GRAY, fontSize: 14, lineHeight: 1.7, margin: "0 0 16px" }}>You&apos;ll have access to a dedicated reporting page where you can see every booking, call, and lead in real time. Full transparency into exactly what SpaFlow is doing for your spa.</p>
            <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 6, padding: "14px 20px", display: "flex", alignItems: "center", gap: 10 }}>
              <I icon={Link} size={16} />
              <span style={{ fontFamily: B, color: GOLD, fontSize: 15 }}>reporting.olexum.solutions/<span style={{ color: "#fff", fontStyle: "italic" }}>yourbusinessname</span></span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  // 8 — BILLING
  {
    bg: BG_WHITE,
    render: () => {
      const steps = [{icon:Rocket,title:"Go Live — No Payment Upfront",desc:"You start using SpaFlow immediately. No card required, no deposits, no commitments."},{icon:ClipboardList,title:"First Invoice at 2 Weeks",desc:"After your first two weeks live, we send you an invoice for all qualifying bookings."},{icon:CreditCard,title:"Payment on File Going Forward",desc:"Once you pay your first invoice, we have your payment details for automatic billing from there."},{icon:RefreshCw,title:"Billed Every 2 Weeks",desc:"Simple, predictable billing cycle. You always know what you're paying for."}];
      return (
        <div style={{ padding: "48px 64px" }}>
          <h2 style={{ fontFamily: H, fontSize: 36, color: CHARCOAL, fontStyle: "italic", fontWeight: 400, margin: 0 }}>How Billing Works</h2>
          <GoldBar width={80} />
          <div style={{ background: CHARCOAL, borderRadius: 8, padding: "28px 32px", marginTop: 20 }}>
            <div style={{ fontFamily: H, color: GOLD, fontSize: 42, fontStyle: "italic" }}>$0 Upfront</div>
            <div style={{ fontFamily: B, color: LIGHT_GRAY, fontSize: 14, marginTop: 6 }}>No contracts. No retainers. No payment details collected upfront. You only pay after we book you clients.</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 20 }}>
            {steps.map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, background: BG_WARM, borderRadius: 6, padding: "14px 20px" }}>
                <I icon={s.icon} />
                <div style={{ fontFamily: H, color: CHARCOAL, fontSize: 14, fontWeight: 700, width: 240, flexShrink: 0 }}>{s.title}</div>
                <div style={{ fontFamily: B, color: BODY_GRAY, fontSize: 13 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      );
    },
  },
  // 9 — QUALIFYING BOOKINGS
  {
    bg: BG_WHITE,
    render: () => (
      <div style={{ padding: "48px 40px", textAlign: "center" }}>
        <h2 style={{ fontFamily: H, fontSize: 32, color: CHARCOAL, fontStyle: "italic", fontWeight: 400, margin: 0 }}>What Counts as a Qualifying Booking?</h2>
        <GoldBar width={100} centered />
        <p style={{ fontFamily: B, color: BODY_GRAY, fontSize: 14, margin: "12px 0 24px" }}>You only pay for real, legitimate appointments.</p>
        <div style={{ display: "flex", gap: 24, justifyContent: "center" }}>
          {[{title:"Counts",color:GREEN,items:["Appointment booked and kept (after 48 hours)","Appointment within 48 hours — auto-counts","No-shows count as a qualifying booking","Lead nurture converts to a booked appointment"],IconComp:CheckCircle},{title:"Does Not Count",color:RED,items:["Cancellations within 30 minutes of booking","Spam or wrong-number calls","Calls that didn't result in a booking","Rescheduled existing bookings"],IconComp:XCircle}].map((col, ci) => (
            <div key={ci} style={{ flex: 1, maxWidth: 380, background: "#fff", border: `1px solid ${CARD_BORDER}`, borderRadius: 8, padding: "24px 28px", textAlign: "left", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <h3 style={{ fontFamily: H, color: col.color, fontSize: 20, fontWeight: 700, textAlign: "center", margin: "0 0 20px" }}>{col.title}</h3>
              {col.items.map((item, ii) => (<div key={ii} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}><col.IconComp size={18} color={col.color} strokeWidth={2} /><span style={{ fontFamily: B, color: CHARCOAL, fontSize: 13 }}>{item}</span></div>))}
            </div>
          ))}
        </div>
        <p style={{ fontFamily: B, color: GOLD, fontSize: 12, fontStyle: "italic", marginTop: 24 }}>Full transparency — you&apos;ll have access to your reporting dashboard to see every booking.</p>
      </div>
    ),
  },
  // 10 — ONBOARDING TIMELINE
  {
    bg: BG_WHITE,
    render: () => {
      const timeline = [{icon:Handshake,title:"Verbal Agreement",desc:"We agree to work together"},{icon:ClipboardList,title:"Onboarding Form",desc:"We send you a form — you fill out your spa details & services"},{icon:Settings,title:"We Build Everything",desc:"Your custom AI agent + all automations configured"},{icon:PhoneForwarded,title:"Call Forwarding",desc:"We assign your bot a number — you set up forwarding"},{icon:Rocket,title:"Go Live",desc:"You're live. Bookings start coming in."},{icon:Star,title:"Ongoing Support",desc:"We monitor performance & optimize continuously"}];
      return (
        <div style={{ padding: "48px 64px" }}>
          <h2 style={{ fontFamily: H, fontSize: 36, color: CHARCOAL, fontStyle: "italic", fontWeight: 400, margin: 0 }}>Your Onboarding Timeline</h2>
          <GoldBar width={80} />
          <div style={{ marginTop: 24 }}>
            {timeline.map((t, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ width: 34, height: 34, borderRadius: "50%", background: GOLD, display: "flex", alignItems: "center", justifyContent: "center" }}><span style={{ color: "#fff", fontFamily: H, fontSize: 14, fontWeight: 700 }}>{i+1}</span></div>
                  {i < timeline.length-1 && <div style={{ width: 1.5, height: 16, background: CARD_BORDER }} />}
                </div>
                <I icon={t.icon} size={18} />
                <div style={{ fontFamily: H, color: CHARCOAL, fontSize: 15, fontWeight: 700, width: 190, flexShrink: 0 }}>{t.title}</div>
                <div style={{ fontFamily: B, color: BODY_GRAY, fontSize: 13 }}>{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      );
    },
  },
  // 11 — CLOSING
  {
    bg: CHARCOAL,
    render: () => (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: 12 }}>
        <h1 style={{ fontFamily: H, fontSize: 52, color: "#fff", fontStyle: "italic", fontWeight: 400, margin: 0 }}>Let&apos;s Get You Live.</h1>
        <GoldBar width={100} centered />
        <p style={{ fontFamily: B, color: LIGHT_GRAY, fontSize: 16, marginTop: 12, textAlign: "center", maxWidth: 480 }}>Click below to start your onboarding.</p>
        <a href="https://onboarding.olexum.solutions" target="_blank" rel="noopener noreferrer" style={{ background: GOLD, color: "#fff", fontFamily: B, fontSize: 17, fontWeight: 700, padding: "18px 52px", borderRadius: 6, textDecoration: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 10, marginTop: 28 }}><ClipboardList size={20} /> Start Onboarding</a>
        <p style={{ fontFamily: B, color: LIGHT_GRAY, fontSize: 13, marginTop: 44 }}>Questions? Reach out to us at{" "}<a href="mailto:support@olexum.solutions" style={{ color: GOLD, textDecoration: "none" }}>support@olexum.solutions</a></p>
        <Image src="/olexum-logo.png" alt="olexum" width={100} height={30} style={{ marginTop: 16, opacity: 0.7 }} />
      </div>
    ),
  },
];

export default function DaySpaOnboarding() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;
  const next = useCallback(() => setCurrent((c) => Math.min(c + 1, total - 1)), [total]);
  const prev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).tagName === "A") return;
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  const slide = slides[current];

  return (
    <div style={{ width: "100%", height: "100vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <div style={{ flex: 1, background: slide.bg, position: "relative", overflow: "auto", transition: "background 0.3s ease" }}>
        {slide.render()}
      </div>
      <div style={{ height: 52, background: "#fff", borderTop: `1px solid ${CARD_BORDER}`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px", flexShrink: 0 }}>
        <button onClick={prev} disabled={current === 0} style={{ background: "none", border: "none", fontFamily: H, fontSize: 15, color: current === 0 ? CARD_BORDER : CHARCOAL, cursor: current === 0 ? "default" : "pointer", padding: "8px 16px" }}>← Previous</button>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {slides.map((_, i) => (
            <div key={i} onClick={() => setCurrent(i)} style={{ width: i === current ? 24 : 8, height: 8, borderRadius: 4, background: i === current ? GOLD : CARD_BORDER, cursor: "pointer", transition: "all 0.2s" }} />
          ))}
        </div>
        <button onClick={next} disabled={current === total - 1} style={{ background: "none", border: "none", fontFamily: H, fontSize: 15, color: current === total - 1 ? CARD_BORDER : CHARCOAL, cursor: current === total - 1 ? "default" : "pointer", padding: "8px 16px" }}>Next →</button>
      </div>
    </div>
  );
}
