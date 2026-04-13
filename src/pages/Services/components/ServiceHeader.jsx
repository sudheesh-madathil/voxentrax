import React, { useState } from "react";
import {
  Phone,
  Globe,
  Shield,
  Zap,
  BarChart,
  Server,
  Wifi,
  Mic,
  Volume2,
  Settings,
  Users,
  ArrowRight,
} from "lucide-react";

const VoipEnterpriseHero = () => {
  const [hoveredTab, setHoveredTab] = useState(null);
const quadrants = [
  {
    id: 'top-left',
    position: 'top-10 left-6',
    color: 'bg-blue-600',
    title: 'Global Network',
    desc: 'Tier-1 connectivity with 99.9% uptime.',
    icon: <Globe size={16} />
  },
  {
    id: 'top-right',
    position: 'top-10 right-6',
    color: 'bg-purple-600',
    title: 'Smart Analytics',
    desc: 'Real-time CDR and QoS monitoring.',
    icon: <BarChart size={16} />
  },
  {
    id: 'bottom-left',
    position: 'bottom-20 left-6',
    color: 'bg-emerald-600',
    title: 'Security Shield',
    desc: 'End-to-end SRTP/TLS encryption.',
    icon: <Shield size={16} />
  },
  {
    id: 'bottom-right',
    position: 'bottom-20 right-6',
    color: 'bg-orange-600',
    title: 'Auto Scaling',
    desc: 'Handle 10k+ concurrent calls easily.',
    icon: <Zap size={16} />
  }
];

  const circlingIcons = [
    { Icon: Server, bg: "bg-indigo-500" },
    { Icon: Wifi, bg: "bg-pink-500" },
    { Icon: Mic, bg: "bg-cyan-500" },
    { Icon: Volume2, bg: "bg-amber-500" },
    { Icon: Settings, bg: "bg-slate-700" },
    { Icon: Users, bg: "bg-rose-500" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans overflow-hidden flex items-center justify-center p-6">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE: HEADER CONTENT */}
        <div className="z-10 space-y-8">
          <h1 className="text-4xl text-gray-600  tracking-tighter leading-none">
            VOIP  {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-indigo-600">
              INFRASTRUCTURE
            </span>
          </h1>
          <p className="text-xl text-slate-500 max-w-md leading-relaxed">
            A high-performance softswitch design built for massive scale,
            featuring real-time analytics and enterprise security.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all flex items-center gap-2 group">
              Get Started{" "}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: THE EXPANDED ORBIT SYSTEM */}
        <div className="relative flex items-center justify-center h-[750px] w-full">
          {/* THE INCREASED RADIUS ORBIT */}
          <div className="relative w-[600px] h-[600px] flex items-center justify-center">
            {/* Background Decorative Circles */}
            <div className="absolute inset-0 rounded-full border border-slate-100 border-dashed animate-spin-slow" />
            <div className="absolute w-[450px] h-[450px] rounded-full border border-slate-50" />

            {/* QUADRANT TABS (Top Left, Top Right, Bottom Left, Bottom Right) */}
            {quadrants.map((tab) => (
              <div
                key={tab.id}
                onMouseEnter={() => setHoveredTab(tab.id)}
                onMouseLeave={() => setHoveredTab(null)}
                className={`absolute ${tab.position} z-30 
      w-40 p-3 rounded-2xl 
      transition-all duration-300 transform cursor-pointer
      ${
        hoveredTab === tab.id
          ? `${tab.color} scale-105 shadow-xl translate-y-[-6px]`
          : "bg-white/80 backdrop-blur-md shadow-lg border border-slate-100"
      }`}

              >
                {/* ICON */}
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 transition-colors
      ${
        hoveredTab === tab.id
          ? "bg-white/20 text-white"
          : `${tab.color} text-white`
      }`}
                >
                  {tab.icon}
                </div>

                {/* TITLE */}
                <h3
                  className={`font-semibold text-xs mb-1
      ${hoveredTab === tab.id ? "text-white" : "text-slate-900"}`}
                >
                  {tab.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className={`text-[10px] leading-tight
      ${hoveredTab === tab.id ? "text-white/80" : "text-slate-500"}`}
                >
                  {tab.desc}
                </p>
              </div>
            ))}

            {/* CIRCLING ICONS (Increased Radius) */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              {circlingIcons.map(({ Icon, bg }, index) => (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2 animate-orbit"
                  style={{
                    "--orbit-radius": "250px",
                    animationDelay: `${index * -4}s`,
                    animationDuration: "24s",
                  }}
                >
                  <div
                    className={`w-12 h-12 ${bg} text-white rounded-xl flex items-center justify-center shadow-lg transform -rotate-orbit animate-counter-spin`}
                    style={{
                      animationDelay: `${index * -4}s`,
                      animationDuration: "24s",
                    }}
                  >
                    <Icon size={20} strokeWidth={2.5} />
                  </div>
                </div>
              ))}
            </div>

            {/* CENTRAL COMPACT PHONE PANEL */}
            <div className="relative z-40 bg-white p-3 rounded-[3rem] shadow-2xl border-slate-50 w-[190px] h-[380px]">
              <div className="h-full w-full bg-slate-950 rounded-[2.2rem] overflow-hidden flex flex-col p-5">
                {/* Internal UI */}
                <div className="flex justify-between items-center opacity-50 mb-8">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-white" />
                    <div className="w-1 h-1 rounded-full bg-white" />
                  </div>
                  <span className="text-[7px] text-white font-mono tracking-widest">
                    ENCRYPTED
                  </span>
                </div>

                <div className="flex-grow flex flex-col items-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-30 animate-pulse" />
                    <div className="relative w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                      <Phone className="text-white fill-white" size={24} />
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <p className="text-blue-400 text-[8px] font-black tracking-widest uppercase mb-1">
                      Inbound Stream
                    </p>
                    <h4 className="text-white text-lg font-light tracking-tight">
                      +1 800 2344
                    </h4>
                  </div>

                  {/* Dialer Grid */}
                  <div className="grid grid-cols-3 gap-2 w-full">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                      <div
                        key={n}
                        className="h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-xs text-slate-500 font-bold hover:text-white transition-colors"
                      >
                        {n}
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto w-full h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center rotate-[135deg]">
                      <Phone size={14} className="text-white fill-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(var(--orbit-radius))
              rotate(-360deg);
          }
        }
        @keyframes counter-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
        .animate-orbit {
          animation: orbit linear infinite;
        }
        .animate-counter-spin {
          animation: counter-spin linear infinite;
        }
        .animate-spin-slow {
          animation: spin 60s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default VoipEnterpriseHero;
