import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What is VoIP?",
    answer:
      "VoIP (Voice over Internet Protocol) is a cloud-based communication platform that lets you make crystal-clear voice and video calls over the internet. It replaces traditional phone lines — enabling calls, conferencing, messaging, and workflow automation — all from one smart dashboard.",
    color: "from-violet-500 to-purple-600",
    accent: "#8B5CF6",
    light: "#EDE9FE",
    icon: "📞",
  },
  {
    id: 2,
    question: "How does it work?",
    answer:
      "Simply create an account, configure your virtual phone numbers, and connect your devices — desktop, mobile, or desk phone. Your voice is converted into digital packets, transmitted over the internet, and reassembled at the other end in real time. No hardware needed. Sign in and start calling.",
    color: "from-sky-500 to-blue-600",
    accent: "#0EA5E9",
    light: "#E0F2FE",
    icon: "⚡",
  },
  {
    id: 3,
    question: "Is my data safe?",
    answer:
      "Absolutely. We use enterprise-grade end-to-end encryption (TLS + SRTP) and ISO 27001-certified secure cloud infrastructure. Your calls, recordings, and data belong solely to you — always. We never sell or share your information with third parties.",
    color: "from-emerald-500 to-green-600",
    accent: "#10B981",
    light: "#D1FAE5",
    icon: "🔒",
  },
  {
    id: 4,
    question: "Can I port my existing number?",
    answer:
      "Yes! Number porting is fully supported. Bring your current business or personal phone number to our platform at no extra charge. The process typically takes 3–7 business days, and your existing number stays active throughout the transition so you never miss a call.",
    color: "from-orange-500 to-amber-500",
    accent: "#F59E0B",
    light: "#FEF3C7",
    icon: "🔄",
  },
  {
    id: 5,
    question: "What features are included?",
    answer:
      "Every plan includes HD voice & video calls, virtual phone numbers, IVR / auto-attendant, call recording, voicemail-to-email, SMS/MMS, call analytics, CRM integrations (Salesforce, HubSpot, Zoho), and 24/7 uptime monitoring — with advanced features like call queues and AI transcription on higher tiers.",
    color: "from-rose-500 to-pink-600",
    accent: "#F43F5E",
    light: "#FFE4E6",
    icon: "✨",
  },
  {
    id: 6,
    question: "Can I cancel anytime?",
    answer:
      "Absolutely. There are no long-term contracts or cancellation fees. Upgrade, downgrade, or cancel your subscription at any time directly from your account dashboard. If you cancel, you keep access until the end of your billing period.",
    color: "from-fuchsia-500 to-violet-600",
    accent: "#A855F7",
    light: "#F5F3FF",
    icon: "✅",
  },
];

function FAQCard({ faq, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="group relative bg-white rounded-3xl overflow-hidden cursor-pointer transition-all duration-500"
      style={{
        boxShadow: open
          ? `0 20px 60px -10px ${faq.accent}33`
          : "0 2px 20px rgba(0,0,0,0.07)",
        transform: open ? "translateY(-2px)" : "none",
        border: `1.5px solid ${open ? faq.accent + "44" : "#f1f1f1"}`,
      }}
      onClick={() => setOpen(!open)}
    >
      {/* Top color bar */}
      <div
        className={`h-1 w-full bg-gradient-to-r ${faq.color} transition-all duration-500`}
        style={{ opacity: open ? 1 : 0.4 }}
      />

      <div className="p-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* Icon bubble */}
            <div
              className="w-11 h-11 rounded-2xl flex items-center justify-center text-xl flex-shrink-0 transition-all duration-300"
              style={{
                background: open ? faq.light : "#f8f8fa",
              }}
            >
              {faq.icon}
            </div>
            <h3
              className="font-bold text-gray-800 text-[15px] leading-snug tracking-tight"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              {faq.question}
            </h3>
          </div>

          {/* Toggle button */}
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
            style={{
              background: open ? faq.accent : "#f3f3f7",
              transform: open ? "rotate(45deg)" : "rotate(0deg)",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M7 2v10M2 7h10"
                stroke={open ? "white" : "#888"}
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Answer */}
        <div
          className="overflow-hidden transition-all duration-500"
          style={{ maxHeight: open ? "200px" : "0px", opacity: open ? 1 : 0 }}
        >
          <p
            className="mt-4 text-sm text-gray-500 leading-relaxed pl-[60px]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function VoipFAQ() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        body { background: #fff; }

        .hero-badge {
          background: linear-gradient(135deg, #ede9fe, #dbeafe);
          color: #6d28d9;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 100px;
        }

        .gradient-title span {
          background: linear-gradient(135deg, #8B5CF6, #0EA5E9, #10B981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .demo-btn {
          background: linear-gradient(135deg, #8B5CF6, #6366F1);
          color: white;
          border: none;
          border-radius: 14px;
          padding: 14px 28px;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 8px 30px rgba(139,92,246,0.35);
          letter-spacing: 0.01em;
        }
        .demo-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 40px rgba(139,92,246,0.45);
        }

        .support-card {
          background: linear-gradient(135deg, #faf5ff 0%, #eff6ff 100%);
          border: 1.5px solid #e9d5ff;
          border-radius: 28px;
          padding: 36px 32px;
        }

        .dot-pattern {
          background-image: radial-gradient(circle, #d1d5db 1px, transparent 1px);
          background-size: 24px 24px;
        }
      `}</style>

      <div
        className="min-h-screen bg-white py-16 px-4 relative"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* Subtle dot bg */}
        <div className="dot-pattern absolute inset-0 opacity-30 pointer-events-none" />

        <div className="max-w-6xl mx-auto relative">

          {/* Header */}
          <div className="text-center mb-16">
            <span className="hero-badge inline-block mb-5">
              ✦ Your Questions, Answered
            </span>
            <h1
              className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-5 leading-tight gradient-title"
              style={{ fontFamily: "'Sora', sans-serif", letterSpacing: "-0.03em" }}
            >
              Frequently Asked{" "}
              <span>Questions</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
              Everything you need to know about our VoIP platform — from setup to
              security, features to flexibility.
            </p>
          </div>

          {/* Main grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

            {/* Left: Support card */}
            <div className="support-card flex flex-col gap-5 sticky top-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-2xl shadow-lg">
                🎧
              </div>
              <div>
                <h2
                  className="text-2xl font-bold text-gray-900 mb-2 leading-tight"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  Still Have Questions?
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We understand every business has unique needs. If
                  there&rsquo;s anything you&rsquo;d like to know about
                  pricing, onboarding, or how VoIP fits into your workflow,
                  our support team is here to help.
                </p>
              </div>
              <p className="text-gray-400 text-sm">
                Reach out anytime — we&rsquo;ll guide you through every
                detail to make sure you get the most out of our platform.
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-2 gap-3 mt-2">
                {[
                  { label: "Uptime SLA", val: "99.99%", color: "#10B981" },
                  { label: "Avg Response", val: "< 2 min", color: "#0EA5E9" },
                  { label: "Countries", val: "160+", color: "#F59E0B" },
                  { label: "Support", val: "24 / 7", color: "#8B5CF6" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-white rounded-2xl p-3 text-center"
                    style={{ border: `1.5px solid ${s.color}22` }}
                  >
                    <div
                      className="font-extrabold text-lg"
                      style={{ color: s.color, fontFamily: "'Sora', sans-serif" }}
                    >
                      {s.val}
                    </div>
                    <div className="text-gray-400 text-xs mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              <button className="demo-btn w-full mt-2">
                Book a Free Demo
              </button>
            </div>

            {/* Right: FAQ cards */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {faqs.map((faq, i) => (
                <FAQCard key={faq.id} faq={faq} index={i} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}