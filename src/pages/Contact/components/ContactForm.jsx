export default function ContactForm() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-16">

      <div className="max-w-6xl w-full grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl">

        {/* LEFT SIDE — PREMIUM INFO PANEL */}
        <div
          className="relative p-12 text-white flex flex-col justify-between overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #3730a3 0%, #4f46e5 50%, #6366f1 80%, #818cf8 100%)",
          }}
        >

          {/* Glow Background Effects */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-300/20 rounded-full blur-3xl"></div>

          {/* CONTENT */}
          <div className="relative z-10">

            <p className="uppercase tracking-widest text-white/70 text-xs font-bold mb-4">
              CONTACT US
            </p>

            <h2 className="text-4xl font-black leading-tight mb-6">
              Let's Build Better
              <br />
              Communication Together
            </h2>

            <p className="text-white/80 leading-relaxed max-w-md">
              Our VoIP experts help businesses deploy scalable,
              secure, and crystal-clear communication systems
              worldwide.
            </p>

            {/* FEATURE POINTS */}
            <div className="mt-10 space-y-4">

              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-xl px-4 py-3">
                <span className="text-xl">⚡</span>
                <p className="text-sm">99.9% Network Uptime</p>
              </div>

              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-xl px-4 py-3">
                <span className="text-xl">🔒</span>
                <p className="text-sm">Enterprise-Grade Security</p>
              </div>

              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-xl px-4 py-3">
                <span className="text-xl">🌍</span>
                <p className="text-sm">Global Coverage & Support</p>
              </div>

            </div>
          </div>

          {/* GET STARTED ADVERTISEMENT */}
          <div className="relative z-10 mt-12">
            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Badge */}
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                style={{
                  background: "rgba(255,255,255,0.2)",
                  color: "#e0e7ff",
                }}
              >
                🎉 Limited Time Offer
              </span>

              <h4 className="text-xl font-extrabold text-white leading-snug mb-2">
                Start Free for 30 Days
              </h4>

              <p className="text-white/75 text-sm leading-relaxed mb-5">
                No credit card required. Get full access to all features —
                HD calling, analytics, and 24/7 support.
              </p>

              {/* Stats Row */}
              <div className="flex gap-4 mb-5">
                <div className="text-center">
                  <p className="text-2xl font-black text-white">5K+</p>
                  <p className="text-white/60 text-xs">Businesses</p>
                </div>
                <div
                  className="w-px"
                  style={{ background: "rgba(255,255,255,0.2)" }}
                ></div>
                <div className="text-center">
                  <p className="text-2xl font-black text-white">50+</p>
                  <p className="text-white/60 text-xs">Countries</p>
                </div>
                <div
                  className="w-px"
                  style={{ background: "rgba(255,255,255,0.2)" }}
                ></div>
                <div className="text-center">
                  <p className="text-2xl font-black text-white">4.9★</p>
                  <p className="text-white/60 text-xs">Rated</p>
                </div>
              </div>

              {/* CTA Button */}
              <button
                className="w-full py-3 rounded-xl font-bold text-indigo-700 transition-all hover:scale-[1.02]"
                style={{ background: "#ffffff" }}
              >
                Get Started for Free →
              </button>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE — FORM */}
        <div className="bg-white p-12">

          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Send a Message
          </h3>

          <form className="space-y-6">

            {/* Name */}
            <div>
              <label className="text-sm font-semibold text-gray-600">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-semibold text-gray-600">
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="text-sm font-semibold text-gray-600">
                Subject
              </label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-semibold text-gray-600">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm font-semibold text-gray-600">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl font-bold text-white transition-all shadow-lg hover:scale-[1.02]"
              style={{
                background:
                  "linear-gradient(135deg, #3730a3 0%, #4f46e5 60%, #818cf8 100%)",
              }}
            >
              Send Message 🚀
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}