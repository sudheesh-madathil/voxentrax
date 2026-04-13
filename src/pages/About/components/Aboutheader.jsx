import React from "react";

const stats = [
  { label: "Calls", val: "247", color: "#7c3aed", bg: "#f3e8ff" },
  { label: "Queued", val: "3", color: "#ea580c", bg: "#fff7ed" },
  { label: "Avg Wait", val: "0:18", color: "#2563eb", bg: "#eff6ff" },
  { label: "CSAT", val: "98%", color: "#059669", bg: "#ecfdf5" },
];

const agents = [
  { initials: "A", color: "#7c3aed" },
  { initials: "B", color: "#059669" },
  { initials: "C", color: "#2563eb" },
  { initials: "D", color: "#ea580c" },
];

const waveBars = [4, 8, 14, 10, 18, 12, 20, 16, 10, 14];
const encBars = Array.from({ length: 12 }, (_, i) => i);
const countries = ["US", "UK", "IN", "AU", "JP", "SG", "DE", "AE"];

export default function VoIPHero() {
  return (
<div className="min-h-screen bg-white flex items-center justify-between px-1">
      
      <style>{`
        @keyframes waveBar {
          from { transform: scaleY(0.5); }
          to { transform: scaleY(1.5); }
        }
        @keyframes signalFlow {
          to { stroke-dashoffset: -100; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-spin-slow { animation: spin 8s linear infinite; }
        .animate-spin-reverse { animation: spin 6s linear infinite reverse; }
        .animate-float-b { animation: float 4s ease-in-out infinite; }
        .animate-pop-in { animation: popIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) both; }
      `}</style>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2  justify-center gap-20 p-1 items-center">
        
        {/* ── Left Side: Content ── */}
        <div className="space-y-8 animate-pop-in">
          <div className="space-y-4">
          
            <h1 className="text-4xl lg:text-4xl  text-gray-600 leading-tight mb-6">
               
              Cloud VoIP Built for
              <span className="text-orange-600">  Modern Teams.</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              Experience crystal-clear voice quality and enterprise-grade 
              security. Connect your global workforce with sub-80ms latency 
              and real-time analytics.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button className="px-8 py-4 bg-blue-400 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-200 active:scale-95">
              Get Started Free
            </button>
            <button className="px-8 py-4 bg-white border border-blue-400 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all flex items-center gap-2">
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>

          <div className="flex items-center gap-6 pt-4 border-t border-slate-200">
            <div>
              <div className="text-2xl font-bold text-slate-900">99.9%</div>
              <div className="text-sm text-slate-500">Uptime SLA</div>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div>
              <div className="text-2xl font-bold text-slate-900">256-bit</div>
              <div className="text-sm text-slate-500">AES Encryption</div>
            </div>
          </div>
        </div>

        {/* ── Right Side: Your Original Design ── */}
        <div className="p-8 font-sans relative overflow-hidden rounded-3xl ">
          {/* Decorative blobs */}
          {/* <div className="absolute -top-14 -right-14 w-52 h-52 rounded-full bg-white opacity-50 pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg- opacity-60 pointer-events-none" /> */}

          <div className="relative grid grid-cols-2 gap-4 max-w-xl mx-auto">
            {/* Center Phone Hub */}
            <div className="col-span-2 flex justify-center mb-2">
              <div className="relative w-28 h-28 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-indigo-200 animate-spin-slow">
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-indigo-500 rounded-full" />
                </div>
                <div className="absolute w-20 h-20 rounded-full border border-dashed border-indigo-300 animate-spin-reverse" />
                <div className="absolute inset-0 rounded-full bg-indigo-100 opacity-30 animate-ping" />
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center z-10 shadow-md">
                  <PhoneIcon className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>

            <SignalWaveSVG />

            {/* Feature Cards */}
            <FeatureCard
              bg="bg-purple-50" border="border-purple-200"
              iconBg="bg-violet-700" titleColor="text-violet-900" subColor="text-violet-600"
              icon={<GridIcon />} title="SIP Server" sub={<><Dot color="#7c3aed" /> Online</>}
              animDelay="delay-100"
            >
              <div className="flex gap-0.5 items-end h-6">
                {waveBars.map((h, i) => (
                  <div
                    key={i}
                    className="w-1.5 bg-purple-400 rounded-sm origin-bottom"
                    style={{ height: h, animation: `waveBar ${0.6 + i * 0.08}s ease-in-out ${i * 0.05}s infinite alternate` }}
                  />
                ))}
              </div>
            </FeatureCard>

            <FeatureCard
              bg="bg-emerald-50" border="border-emerald-200"
              iconBg="bg-emerald-600" titleColor="text-emerald-900" subColor="text-emerald-600"
              icon={<GlobeIcon />} title="Global Reach" sub="150+ Countries"
              animDelay="delay-150"
            >
              <div className="flex gap-1 flex-wrap">
                {countries.map((c) => (
                  <span key={c} className="text-[10px] bg-emerald-100 text-emerald-800 font-medium rounded px-1.5 py-0.5">{c}</span>
                ))}
              </div>
            </FeatureCard>

            <FeatureCard
              bg="bg-orange-50" border="border-orange-200"
              iconBg="bg-orange-600" titleColor="text-orange-900" subColor="text-orange-500"
              icon={<BoltIcon />} title="Instant Connect" sub="<80ms latency"
              animDelay="delay-200"
            >
              <div className="bg-orange-100 rounded-lg p-2">
                <div className="flex justify-between mb-1">
                  <span className="text-[10px] text-orange-800">Latency</span>
                  <span className="text-[11px] font-bold text-orange-800">78ms</span>
                </div>
                <div className="h-1 bg-orange-200 rounded-full">
                  <div className="w-1/5 h-full bg-orange-500 rounded-full" />
                </div>
              </div>
            </FeatureCard>

            <FeatureCard
              bg="bg-blue-50" border="border-blue-200"
              iconBg="bg-blue-600" titleColor="text-blue-900" subColor="text-blue-500"
              icon={<LockIcon />} title="E2E Encryption" sub="256-bit AES"
              animDelay="delay-300"
            >
              <div className="flex gap-0.5 mt-1 items-center">
                {encBars.map((i) => (
                  <div key={i} className={`w-1.5 h-4 rounded-sm ${i < 9 ? "bg-blue-200" : "bg-blue-600"}`} />
                ))}
                <span className="text-[10px] text-blue-700 font-medium ml-1">Secure</span>
              </div>
            </FeatureCard>

            {/* Live Team Hub */}
            <div className="col-span-2 bg-pink-50 border border-pink-200 rounded-2xl p-4 animate-float-b">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 bg-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TeamIcon />
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-pink-900">Live Team Hub</div>
                    <div className="text-[11px] text-pink-600">8 agents online now</div>
                  </div>
                </div>
                <div className="flex">
                  {agents.map(({ initials, color }, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[10px] text-white font-bold"
                      style={{ background: color, marginLeft: i > 0 ? -6 : 0 }}
                    >
                      {initials}
                    </div>
                  ))}
                  <div className="w-7 h-7 rounded-full border-2 border-white bg-pink-100 flex items-center justify-center text-[10px] text-pink-700 font-bold" style={{ marginLeft: -6 }}>+4</div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-lg p-2 text-center" style={{ background: s.bg }}>
                    <div className="text-sm font-bold" style={{ color: s.color }}>{s.val}</div>
                    <div className="text-[10px] opacity-70" style={{ color: s.color }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

 

          {/* Legend */}
          {/* <div className="flex justify-center gap-4 mt-2 flex-wrap">
            {[
              { label: "Voice", color: "#6366f1" },
              { label: "Data", color: "#06b6d4" },
              { label: "Status", color: "#10b981" },
              { label: "Routing", color: "#f59e0b" },
            ].map((l) => (
              <span key={l.label} className="flex items-center gap-1.5 text-[11px]" style={{ color: l.color }}>
                <span className="w-2 h-2 rounded-full inline-block" style={{ background: l.color }} />
                {l.label}
              </span>
            ))}
          </div> */}
        </div>

      </div>
    </div>
  );
}

/* ── Helper Components ── */

function FeatureCard({ bg, border, iconBg, titleColor, subColor, icon, title, sub, animDelay, children }) {
  return (
    <div className={`${bg} ${border} border rounded-2xl p-3.5 ${animDelay} animate-pop-in`}>
      <div className="flex items-center gap-2 mb-2.5">
        <div className={`w-8 h-8 ${iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
          {icon}
        </div>
        <div>
          <div className={`text-[13px] font-semibold ${titleColor}`}>{title}</div>
          <div className={`text-[11px] ${subColor} flex items-center gap-1`}>{sub}</div>
        </div>
      </div>
      {children}
    </div>
  );
}

function Dot({ color }) {
  return <span className="w-1.5 h-1.5 rounded-full inline-block animate-pulse" style={{ background: color }} />;
}

function SignalWaveSVG() {
  return (
    <svg width="100%" height="60" viewBox="0 0 520 60" xmlns="http://www.w3.org/2000/svg" className="col-span-2 -mt-4 -mb-2">
      <path d="M60 30 Q130 10 200 30 Q270 50 340 30 Q410 10 480 30" fill="none" stroke="#c7d2fe" strokeWidth="1.5" strokeDasharray="8 5" style={{ animation: "signalFlow 2s linear infinite" }} />
      <path d="M60 30 Q130 50 200 30 Q270 10 340 30 Q410 50 480 30" fill="none" stroke="#a5f3fc" strokeWidth="1.5" strokeDasharray="6 4" style={{ animation: "signalFlow 1.2s linear infinite" }} />
      <circle r="5" fill="#6366f1" opacity="0.8">
        <animateMotion dur="2.5s" repeatCount="indefinite" path="M60 30 Q130 10 200 30 Q270 50 340 30 Q410 10 480 30" />
      </circle>
      <circle r="4" fill="#06b6d4" opacity="0.7">
        <animateMotion dur="1.8s" repeatCount="indefinite" begin="0.9s" path="M60 30 Q130 50 200 30 Q270 10 340 30 Q410 50 480 30" />
      </circle>
    </svg>
  );
}



const PhoneIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M3 5.5A1.5 1.5 0 014.5 4h2.764a.5.5 0 01.474.342l1.2 3.6a.5.5 0 01-.116.524l-1.078 1.078a9.021 9.021 0 004.812 4.812l1.078-1.078a.5.5 0 01.524-.116l3.6 1.2a.5.5 0 01.342.474V17.5A1.5 1.5 0 0116.5 19C9.596 19 4 13.404 4 6.5A1.5 1.5 0 015.5 5z" />
  </svg>
);
const GridIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/></svg>;
const GlobeIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>;
const BoltIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>;
const LockIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>;
const TeamIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>;