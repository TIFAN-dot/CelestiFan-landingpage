import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    number: "/01",
    gradient: "linear-gradient(to right, #a855f7, #3b82f6)",
    gradientFrom: "#a855f7",
    gradientTo: "#3b82f6",
    tab: "Campaigns",
    headline: "Your Support Has a Progress Bar.",
    sub: "Join active campaigns. Stream, share, show up. Watch your contribution move the needle — and let the artist see exactly who's driving their momentum in real time.",
    image: "/mvp-screen-1.webp",
    alt: "Active Campaigns — CelestiFan MVP",
  },
  {
    number: "/02",
    gradient: "linear-gradient(to right, #3b82f6, #06b6d4)",
    gradientFrom: "#3b82f6",
    gradientTo: "#06b6d4",
    tab: "Leaderboard",
    headline: "Your Devotion. Finally Ranked.",
    sub: "The top fans rise to the top. Your Celeste score places you on a public podium — and gives artists a real-time view of who their most dedicated community actually is.",
    image: "/mvp-screen-2.webp",
    alt: "Top Fan Leaderboard — CelestiFan MVP",
  },
  {
    number: "/03",
    gradient: "linear-gradient(to right, #06b6d4, #10b981)",
    gradientFrom: "#06b6d4",
    gradientTo: "#10b981",
    tab: "Rewards",
    headline: "Earn More Than Memories.",
    sub: "Every action earns Celeste. Level up your fan badge, stack your XP, and redeem coins for real rewards — because showing up this hard should never go uncompensated.",
    image: "/mvp-screen-3.webp",
    alt: "SuperFan Rewards & Celeste — CelestiFan MVP",
  },
  {
    number: "/04",
    gradient: "linear-gradient(to right, #10b981, #a855f7)",
    gradientFrom: "#10b981",
    gradientTo: "#a855f7",
    tab: "Artists",
    headline: "Every Artist. All Your Proof.",
    sub: "Pin the artists you support. Your rank, your Celeste, your full campaign history — a living record of everything that proves you were there before the world caught on.",
    image: "/mvp-screen-4.webp",
    alt: "Pinned Artists Dashboard — CelestiFan MVP",
  },
];

const FeaturesShowcase = () => {
  const [active, setActive] = useState(0);
  const current = features[active];

  return (
    <section className="py-14 md:py-20 relative overflow-hidden">

      {/* Subtle background glow matching active gradient */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[120px] transition-all duration-700"
          style={{ background: current.gradient }}
        />
      </div>

      <div className="container mx-auto px-5 max-w-6xl relative z-10">

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <div
              className="h-px w-10 transition-all duration-500"
              style={{ background: current.gradient }}
            />
            <span
              className="text-xs font-semibold tracking-[0.3em] uppercase transition-all duration-500"
              style={{
                background: current.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              The Platform
            </span>
            <div
              className="h-px w-10 transition-all duration-500"
              style={{ background: current.gradient }}
            />
          </div>

          <h2
            className="font-bold text-white mb-3"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
            }}
          >
            Built for the Ones Who Show Up.
          </h2>
          <p className="text-sm md:text-base text-slate-400 max-w-lg mx-auto">
            For fans whose dedication never got credited. For artists who never knew who was really there. These are the tools that change that.
          </p>
        </motion.div>

        {/* ── TABS ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {features.map((f, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
              style={{
                background: active === i ? f.gradient : "rgba(255,255,255,0.04)",
                color: active === i ? "#fff" : "rgba(255,255,255,0.45)",
                border: active === i ? "none" : "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span
                className="mr-2 text-xs font-bold"
                style={
                  active !== i
                    ? {
                        background: f.gradient,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }
                    : {}
                }
              >
                {f.number}
              </span>
              {f.tab}
            </button>
          ))}
        </motion.div>

        {/* ── MAIN CONTENT ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          >
            {/* Left — copy */}
            <div>
              {/* Number */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-10" style={{ background: current.gradient }} />
                <span
                  className="text-xs font-bold tracking-[0.3em] uppercase"
                  style={{
                    background: current.gradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {current.number}
                </span>
              </div>

              {/* Headline */}
              <h3
                className="font-bold text-white mb-5 leading-tight"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  textWrap: "balance",
                }}
              >
                {current.headline}
              </h3>

              {/* Sub */}
              <p
                className="text-slate-400 leading-relaxed mb-8"
                style={{
                  fontFamily: "'Crimson Pro', Georgia, serif",
                  fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
                }}
              >
                {current.sub}
              </p>

              {/* Tab dots — mobile nav */}
              <div className="flex gap-2">
                {features.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="h-1.5 rounded-full transition-all duration-300"
                    style={{
                      width: active === i ? "28px" : "8px",
                      background:
                        active === i ? current.gradient : "rgba(255,255,255,0.15)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Right — screen */}
            <div
              className="rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center p-4"
              style={{
                background: "rgba(255,255,255,0.02)",
                backdropFilter: "blur(8px)",
                boxShadow: `0 0 60px rgba(${
                  active === 0
                    ? "168,85,247"
                    : active === 1
                    ? "59,130,246"
                    : active === 2
                    ? "6,182,212"
                    : "16,185,129"
                },0.12)`,
              }}
            >
              <img
                src={current.image}
                alt={current.alt}
                loading="lazy"
                className="w-full h-auto rounded-xl"
                style={{ maxHeight: "340px", objectFit: "contain" }}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── BOTTOM GRADIENT LINE ── */}
        <div
          className="mt-10 h-px w-full opacity-20"
          style={{
            background: "linear-gradient(to right, #a855f7, #3b82f6, #06b6d4, #10b981)",
          }}
        />
      </div>
    </section>
  );
};

export default FeaturesShowcase;