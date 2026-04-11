import { useState, useEffect, useRef } from "react";


/* ── tiny SVG icons ── */

const ShieldIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const GlobeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
  </svg>
);
const ZapIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const SignalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="2" y1="20" x2="2" y2="14" /><line x1="8" y1="20" x2="8" y2="10" />
    <line x1="14" y1="20" x2="14" y2="4" /><line x1="20" y1="20" x2="20" y2="2" />
  </svg>
);
const ArrowUpIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/>
  </svg>
);
const ArrowDownIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>
  </svg>
);

/* ── Animated Waveform ── */
function Waveform({ bars = 28, color = "#3b82f6", active = true }) {
  return (
    <svg viewBox={`0 0 ${bars * 9} 40`} fill="none" className="w-full h-8">
      {Array.from({ length: bars }).map((_, i) => {
        const h = active ? 10 + Math.sin(i * 0.7) * 9 + Math.sin(i * 1.5) * 6 : 4;
        const y = (40 - h) / 2;
        return (
          <rect
            key={i} x={i * 9 + 2} y={y} width={5} height={h} rx={2.5}
            fill={color} opacity={active ? 0.7 + (i % 3) * 0.1 : 0.25}
            style={active ? {
              transformOrigin: "center center",
              animation: `wavePulse ${1.0 + (i % 4) * 0.22}s ${(i * 0.08) % 1.5}s ease-in-out infinite`,
            } : {}}
          />
        );
      })}
    </svg>
  );
}

/* ── Live Call Ticker ── */
function useLiveCalls(base, variance, interval = 900) {
  const [val, setVal] = useState(base);
  useEffect(() => {
    const t = setInterval(() => {
      setVal(v => {
        const delta = Math.floor(Math.random() * variance * 2) - variance;
        return Math.max(base - variance * 3, Math.min(base + variance * 3, v + delta));
      });
    }, interval);
    return () => clearInterval(t);
  }, [base, variance, interval]);
  return val;
}

/* ── Continent data ── */
const CONTINENTS = [
  {
    id: "australia",
    label: "Australia",
    flag: "🌎",
    base: 3420,
    variance: 35,
    latency: "18ms",
    uptime: "99.98%",
    servers: 42,
    color: "#3b82f6",
    bg: "from-blue-50 to-blue-100/60",
    border: "border-blue-200",
    activeBorder: "border-blue-500",
    pill: "bg-blue-100 text-blue-700",
    dot: "bg-blue-500",
    ring: "ring-blue-300",
    waveColor: "#3b82f6",
  },
  {
    id: "europe",
    label: "Europe",
    flag: "🌍",
    base: 2810,
    variance: 28,
    latency: "12ms",
    uptime: "99.99%",
    servers: 38,
    color: "#8b5cf6",
    bg: "from-violet-50 to-violet-100/60",
    border: "border-violet-200",
    activeBorder: "border-violet-500",
    pill: "bg-violet-100 text-violet-700",
    dot: "bg-violet-500",
    ring: "ring-violet-300",
    waveColor: "#8b5cf6",
  },
  {
    id: "asia",
    label: "Asia",
    flag: "🌏",
    base: 4150,
    variance: 45,
    latency: "22ms",
    uptime: "99.97%",
    servers: 55,
    color: "#f59e0b",
    bg: "from-amber-50 to-amber-100/60",
    border: "border-amber-200",
    activeBorder: "border-amber-500",
    pill: "bg-amber-100 text-amber-700",
    dot: "bg-amber-500",
    ring: "ring-amber-300",
    waveColor: "#f59e0b",
  },
  {
    id: "america",
    label: "North America",
    flag: "🌍",
    base: 980,
    variance: 18,
    latency: "34ms",
    uptime: "99.94%",
    servers: 16,
    color: "#10b981",
    bg: "from-emerald-50 to-emerald-100/60",
    border: "border-emerald-200",
    activeBorder: "border-emerald-500",
    pill: "bg-emerald-100 text-emerald-700",
    dot: "bg-emerald-500",
    ring: "ring-emerald-300",
    waveColor: "#10b981",
  },
];

/* ── Live Call count per continent ── */


/* ── Main live call visualizer (top card) ── */
function LiveCallVisualizer({ continent }) {
  const totalCalls = useLiveCalls(continent.base, continent.variance, 700);
  const prevTotal = useRef(continent.base);
  const trending = totalCalls >= prevTotal.current;
  useEffect(() => { prevTotal.current = totalCalls; }, [totalCalls]);

  const [sparkData, setSparkData] = useState(() => Array.from({ length: 20 }, () => continent.base + Math.random() * 200 - 100));
  useEffect(() => {
    const t = setInterval(() => {
      setSparkData(d => [...d.slice(1), totalCalls]);
    }, 900);
    return () => clearInterval(t);
  }, [totalCalls]);

  const minS = Math.min(...sparkData);
  const maxS = Math.max(...sparkData) || minS + 1;
  const points = sparkData.map((v, i) => {
    const x = (i / (sparkData.length - 1)) * 220;
    const y = 44 - ((v - minS) / (maxS - minS)) * 36;
    return `${x},${y}`;
  }).join(" ");

  return (
    <div
      className="relative rounded-2xl overflow-hidden border p-5 transition-all duration-500"
      style={{ background: "linear-gradient(135deg, #f8faff 0%, #eef4ff 100%)", borderColor: continent.color + "55" }}
    >
      {/* Glow blob */}
      <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full opacity-20 blur-2xl pointer-events-none"
        style={{ background: continent.color }} />

      {/* Header row */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl">{continent.flag}</span>
            <span className="font-['Syne',sans-serif] font-bold text-slate-800 text-base">{continent.label}</span>
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[0.6rem] font-semibold bg-green-100 text-green-600 border border-green-200">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" style={{ animation: "blink 1.4s ease-in-out infinite" }} />
              LIVE
            </span>
          </div>
          <p className="text-[0.68rem] text-slate-400 ml-7">Real-time call activity</p>
        </div>
        <div className="text-right">
          <div className="flex items-center justify-end gap-1.5">
            <span className="font-['Syne',sans-serif] font-extrabold text-2xl" style={{ color: continent.color }}>
              {totalCalls.toLocaleString()}
            </span>
            <span className={`flex items-center gap-0.5 text-[0.65rem] font-semibold px-1.5 py-0.5 rounded-full ${trending ? "bg-green-100 text-green-600" : "bg-red-100 text-red-500"}`}>
              {trending ? <ArrowUpIcon /> : <ArrowDownIcon />}
            </span>
          </div>
          <p className="text-[0.65rem] text-slate-400">active calls</p>
        </div>
      </div>

      {/* Waveform */}
      <div className="mb-3">
        <Waveform bars={32} color={continent.color} active={true} />
      </div>

      {/* Sparkline */}
      <div className="mb-4 px-1">
        <svg viewBox="0 0 220 48" className="w-full h-10" style={{ overflow: "visible" }}>
          <defs>
            <linearGradient id={`spark-${continent.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={continent.color} stopOpacity="0.25" />
              <stop offset="100%" stopColor={continent.color} stopOpacity="0" />
            </linearGradient>
          </defs>
          <polyline points={points} fill="none" stroke={continent.color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" opacity="0.9" />
          <polygon points={`0,44 ${points} 220,44`} fill={`url(#spark-${continent.id})`} />
          {/* Last point dot */}
          {sparkData.length > 0 && (() => {
            const lastX = 220;
            const lastY = 44 - ((sparkData[sparkData.length - 1] - minS) / (maxS - minS || 1)) * 36;
            return <circle cx={lastX} cy={lastY} r="3.5" fill={continent.color} />;
          })()}
        </svg>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Latency", value: continent.latency },
          { label: "Uptime", value: continent.uptime },
          { label: "Servers", value: continent.servers },
        ].map(s => (
          <div key={s.label} className="bg-white/70 rounded-xl px-3 py-2 border border-slate-100 text-center">
            <div className="font-semibold text-slate-800 text-[0.78rem]">{s.value}</div>
            <div className="text-[0.6rem] text-slate-400 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Continent mini card ── */
function ContinentCard({ continent, selected, onSelect }) {
  return (
    <button
      onClick={() => onSelect(continent.id)}
      className={`flex-1 relative rounded-xl border-2 p-3 text-left transition-all duration-300 cursor-pointer group overflow-hidden
        ${selected
          ? `${continent.activeBorder} shadow-md ring-2 ${continent.ring}`
          : `${continent.border} hover:shadow-sm hover:border-opacity-60`}
        bg-gradient-to-br ${continent.bg}`}
    >
      {/* Glow on selected */}
      {selected && (
        <div className="absolute inset-0 opacity-10 pointer-events-none rounded-xl"
          style={{ background: continent.color }} />
      )}

      <div className="flex items-center justify-between mb-2">
        <span className="text-base">{continent.flag}</span>
        <span className={`w-2 h-2 rounded-full ${continent.dot} ${selected ? "" : "opacity-60"}`}
          style={selected ? { animation: "blink 1.2s ease-in-out infinite" } : {}} />
      </div>

      <div className="text-[0.68rem] font-semibold text-slate-700 leading-tight mb-1.5">{continent.label}</div>

   
    </button>
  );
}

/* ══════════════ MAIN COMPONENT ══════════════ */
export default function VoipHeader() {
  const [selected, setSelected] = useState("australia");
  const activeCont = CONTINENTS.find(c => c.id === selected);
  const totalLive = useLiveCalls(11360, 80, 1100);

  return (
    <div className="relative min-h-[81vh] w-full bg-white overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; }
        @keyframes wavePulse { 0%,100%{transform:scaleY(0.2)} 50%{transform:scaleY(1)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.2} }
        @keyframes shimmer { to{background-position:200% center} }
        @keyframes countUp { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:translateY(0)} }
        .shimmer-text {
          background: linear-gradient(110deg,#0077ff 0%,#00aaff 45%,#0055dd 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3.5s linear infinite;
        }
      `}</style>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[81vh] px-6 py-14 sm:px-10 sm:py-16
                      [@media(min-width:1300px)]:flex-row [@media(min-width:1300px)]:items-center
                      [@media(min-width:1300px)]:justify-between [@media(min-width:1300px)]:px-16 gap-10">

        {/* ══ LEFT ══ */}
        <div className="flex flex-col items-center text-center gap-6 w-full max-w-2xl
                        [@media(min-width:1300px)]:items-start [@media(min-width:1300px)]:text-left
                        [@media(min-width:1300px)]:ml-[25px] [@media(min-width:1300px)]:-mt-[60px]
                        [@media(min-width:1300px)]:max-w-none [@media(min-width:1300px)]:w-auto">

          {/* Live badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200">
            <span className="w-2 h-2 rounded-full bg-green-500" style={{ animation: "blink 1.4s ease-in-out infinite" }} />
            <span className="text-green-700 text-xs font-semibold tabular-nums">
              {totalLive.toLocaleString()} calls active worldwide
            </span>
          </div>

          <h1 className="font-['Syne',sans-serif] font-bold text-3xl sm:text-4xl leading-[1.08] tracking-tight text-gray-700">
            Connecting Through<br />
            <span className="shimmer-text">Smart VoIP</span>
          </h1>

          <p className="font-['DM_Sans',sans-serif] text-gray-500 text-sm md:text-[16px] leading-7 tracking-normal
              text-justify max-w-[600px] [@media(min-width:1300px)]:max-w-[560px]">
            Transform the way your business connects with intelligent, cloud-powered
            communication solutions. Crystal-clear voice, smart call routing, and
            reliable global connectivity — built for speed, scale, and seamless collaboration.
          </p>

          <div className="flex items-center gap-3 flex-wrap justify-center [@media(min-width:1300px)]:justify-start pt-1">
            <button className="inline-flex items-center gap-2 px-6 py-3 text-white text-sm font-semibold
              bg-blue-500 hover:bg-blue-600 transition-all duration-200 rounded-lg shadow-md shadow-blue-100 cursor-pointer">
              Get Started
            </button>
            <button className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium
              text-gray-700 border border-gray-300 bg-gray-50
              hover:bg-gray-100 hover:border-gray-400 transition-all duration-200 rounded-lg cursor-pointer">
              Learn More
            </button>
          </div>

          {/* Feature chips — mobile */}
          <div className="flex flex-wrap gap-2 justify-center [@media(min-width:1300px)]:justify-start
                          [@media(min-width:1300px)]:hidden">
            {[
              { Icon: ShieldIcon, label: "E2E Encrypted" },
              { Icon: ZapIcon, label: "AI Noise Cancel" },
              { Icon: GlobeIcon, label: "Global PoPs" },
              { Icon: SignalIcon, label: "HD Voice" },
            ].map(({ Icon, label }) => (
              <div key={label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-blue-100 text-[0.72rem] font-medium text-blue-700/80">
                <span className="text-blue-500"><Icon /></span>
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* ══ RIGHT — hidden below 1300px ══ */}
        <div className="hidden [@media(min-width:1300px)]:flex flex-col gap-3 mr-[25px] w-[560px] -mt-4">

          {/* ── TOP: Live Call Visualizer ── */}
          <LiveCallVisualizer continent={activeCont} key={selected} />

          {/* ── BOTTOM: 4 Continent Cards ── */}
          <div className="flex gap-2.5">
            {CONTINENTS.map(c => (
              <ContinentCard
                key={c.id}
                continent={c}
                selected={selected === c.id}
                onSelect={setSelected}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}