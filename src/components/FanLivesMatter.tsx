import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* Detect touch/mobile to skip parallax — avoids jank on low-end devices */
const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

const FanLivesMatter = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  /* Parallax only on desktop */
  const yDesktop = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const yMobile = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
  const y = isMobile ? yMobile : yDesktop;

  const grainOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.05, 0.09, 0.05]);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ height: "85vh", minHeight: "520px" }}
    >
      {/* ── IMAGE ── */}
      <motion.div className="absolute inset-0 w-full h-full" style={{ y }}>
        <img
          src="/fanliveimage1.webp"
          alt="Fans around the world — Fan Lives Matter"
          loading="lazy"
          className="w-full h-full object-cover object-center"
          style={{ transform: "scale(1.12)" }}
        />
      </motion.div>

      {/* ── FILM GRAIN ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: grainOpacity,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
          mixBlendMode: "overlay",
        }}
      />

      {/* ── CINEMATIC OVERLAY ── */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to right, rgba(0,0,0,0.93) 0%, rgba(0,0,0,0.52) 55%, rgba(0,0,0,0.72) 100%),
            linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.5) 100%)
          `,
        }}
      />

      {/* ── GRADIENT LINE TOP ── */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, #a855f7, #3b82f6, #06b6d4, #10b981)" }}
      />

      {/* ── CONTENT ── */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-6 md:px-16 max-w-5xl">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div
                className="h-px w-10"
                style={{ background: "linear-gradient(to right, #a855f7, #3b82f6)" }}
              />
              <span
                className="text-xs font-semibold tracking-[0.3em] uppercase"
                style={{
                  background: "linear-gradient(to right, #a855f7, #3b82f6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Our Truth
              </span>
            </div>

            {/* Main headline — fluid clamp() */}
            <h2
              className="font-bold leading-none mb-8 tracking-tight"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(3rem, 9vw, 8rem)",
                color: "#f8f4f0",
                textShadow: "0 2px 40px rgba(0,0,0,0.5)",
              }}
            >
              Fan Lives
              <br />
              <span
                style={{
                  background: "linear-gradient(to right, #a855f7, #3b82f6, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Matter.
              </span>
            </h2>
          </motion.div>

          {/* Supporting lines — staggered */}
          <div className="max-w-lg">
            {[
              { text: "Not as a slogan. As a product.", delay: 0.25, italic: false, gradient: false },
              { text: "The streams you sent at 2am.",        delay: 0.38, italic: true,  gradient: false },
              { text: "The shares that broke an algorithm.", delay: 0.48, italic: true,  gradient: false },
              { text: "The love that never got counted.",    delay: 0.58, italic: true,  gradient: false },
              { text: "CelestiFan is the receipt.",          delay: 0.72, italic: false, gradient: true  },
            ].map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: line.delay, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                style={{
                  fontFamily: "'Crimson Pro', Georgia, serif",
                  fontSize: "clamp(1rem, 2vw, 1.35rem)",
                  lineHeight: 1.75,
                  display: "block",
                  ...(line.gradient
                    ? {
                        background: "linear-gradient(to right, #06b6d4, #10b981)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        fontWeight: 600,
                        marginTop: "14px",
                      }
                    : {
                        color: i === 0 ? "rgba(248,244,240,0.72)" : "rgba(248,244,240,0.52)",
                        fontStyle: line.italic ? "italic" : "normal",
                      }),
                }}
              >
                {line.text}
              </motion.p>
            ))}
          </div>
        </div>
      </div>

      {/* ── GRADIENT LINE BOTTOM ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, #10b981, #a855f7)" }}
      />

      {/* ── LEFT VIGNETTE ── */}
      <div
        className="absolute inset-y-0 left-0 w-24 pointer-events-none"
        style={{ background: "linear-gradient(to right, rgba(0,0,0,0.35), transparent)" }}
      />
    </section>
  );
};

export default FanLivesMatter;