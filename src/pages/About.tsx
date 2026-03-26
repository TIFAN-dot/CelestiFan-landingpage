import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Helmet } from "react-helmet-async";

/* ── Staggered word animation ── */
const AnimatedWords = ({ text, className, style, delay = 0 }: {
  text: string; className?: string; style?: React.CSSProperties; delay?: number;
}) => {
  const words = text.split(" ");
  return (
    <span className={className} style={style}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, y: 40, rotateX: -20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.6, delay: delay + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

/* ── Parallax section ── */
const ParallaxLine = ({ children, speed = 0.3 }: { children: React.ReactNode; speed?: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60 * speed, -60 * speed]);
  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
};

const About = () => (
  <div className="min-h-screen bg-slate-950 text-slate-50 overflow-x-hidden">
    <Helmet>
      <title>About CelestiFan — Fan Engagement Platform Where Fan Lives Matter</title>
      <meta name="description" content="CelestiFan puts fans at the heart of every artist's rise. Fan-first, artist-driven music engagement." />
      <link rel="canonical" href="https://celestifan.com/about" />
      <meta property="og:title" content="About CelestiFan" />
      <meta property="og:image" content="https://celestifan.com/fanliveimage1.webp" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://celestifan.com/fanliveimage1.webp" />
    </Helmet>

    {/* ── ACT I — MISSION ── */}
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 pt-28 pb-20 overflow-hidden">

      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] rounded-full hidden md:block"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] rounded-full hidden md:block"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-14"
      >
        <div className="h-px w-10" style={{ background: 'linear-gradient(to right, #a855f7, #3b82f6)' }} />
        <span className="text-[0.6rem] font-bold tracking-[0.35em] uppercase" style={{ color: 'rgba(168,85,247,0.7)' }}>
          Our Mission
        </span>
      </motion.div>

      {/* Giant headline — perspective animation */}
      <div className="max-w-5xl" style={{ perspective: '1000px' }}>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(3rem, 8vw, 7rem)', lineHeight: 1.0, fontWeight: 700 }}>
          <AnimatedWords
            text="Music's most powerful force"
            style={{ color: '#fff', display: 'block' }}
            delay={0.1}
          />
          <AnimatedWords
            text="has always been"
            style={{ color: 'rgba(255,255,255,0.35)', display: 'block' }}
            delay={0.4}
          />
          <AnimatedWords
            text="the fan."
            style={{
              display: 'block',
              background: 'linear-gradient(135deg, #a855f7, #3b82f6, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            delay={0.65}
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mt-10 max-w-2xl"
          style={{ fontFamily: "'Crimson Pro', Georgia, serif", fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', color: 'rgba(255,255,255,0.35)', lineHeight: 1.8 }}
        >
          CelestiFan is built to finally prove it — turning passion into recognition, streams into careers, and supporters into legends.
        </motion.p>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-10 left-6 md:left-16 flex items-center gap-3"
      >
        <motion.div
          className="w-px h-12"
          style={{ background: 'linear-gradient(to bottom, rgba(168,85,247,0.6), transparent)' }}
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="text-[0.55rem] tracking-[0.3em] uppercase" style={{ color: 'rgba(255,255,255,0.2)' }}>Scroll</span>
      </motion.div>
    </section>

    {/* ── ACT II — VALUES ── */}
    <section className="relative px-6 md:px-16 py-28 overflow-hidden">

      {/* Huge ghost text background */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <motion.span
          className="font-bold whitespace-nowrap"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(8rem, 20vw, 18rem)',
            color: 'rgba(168,85,247,0.03)',
            letterSpacing: '-0.02em',
          }}
          animate={{ x: [-20, 20, -20] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          VALUES
        </motion.span>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="h-px w-10" style={{ background: 'linear-gradient(to right, #a855f7, #3b82f6)' }} />
          <span className="text-[0.6rem] font-bold tracking-[0.35em] uppercase" style={{ color: 'rgba(168,85,247,0.7)' }}>
            What We Stand For
          </span>
        </motion.div>

        {[
          { label: "Fan-First", sub: "Every feature exists to celebrate the fans who fuel music culture before anyone else does.", color: "#a855f7" },
          { label: "Artist-Driven", sub: "We give artists the tools to see, understand, and connect with the people actually moving their career.", color: "#3b82f6" },
          { label: "Community", sub: "When fans win and artists win — music wins. That's the only outcome we're building toward.", color: "#06b6d4" },
        ].map((v, i) => (
          <ParallaxLine key={v.label} speed={0.2 + i * 0.1}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:items-baseline gap-3 md:gap-8 py-8 border-t"
              style={{ borderColor: 'rgba(255,255,255,0.05)' }}
            >
              <h3
                className="flex-shrink-0"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                  fontWeight: 700,
                  lineHeight: 1,
                  color: v.color,
                  minWidth: '280px',
                }}
              >
                {v.label}
              </h3>
              <p style={{ fontFamily: "'Crimson Pro', Georgia, serif", fontSize: 'clamp(1rem, 1.6vw, 1.15rem)', color: 'rgba(255,255,255,0.35)', lineHeight: 1.7 }}>
                {v.sub}
              </p>
            </motion.div>
          </ParallaxLine>
        ))}
        <div className="border-t h-px" style={{ borderColor: 'rgba(255,255,255,0.05)' }} />
      </div>
    </section>

    {/* ── ACT III — QUOTE ── */}
    <section className="relative px-6 md:px-16 py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(168,85,247,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Giant quote mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-[6rem] leading-none mb-4 select-none"
          style={{ color: 'rgba(168,85,247,0.15)', fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          "
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)',
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.7)',
            lineHeight: 1.4,
          }}
        >
          Somewhere between the stream and the silence was a fan nobody ever thanked.
          <br />
          <span style={{ color: 'rgba(255,255,255,0.35)' }}>CelestiFan was built for that moment.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mt-10"
        >
          <div className="h-px w-8" style={{ background: 'linear-gradient(to right, transparent, rgba(168,85,247,0.5))' }} />
          <div>
            <p className="text-sm font-semibold text-white">Tometi Koffi Romeo</p>
            <p className="text-xs" style={{ color: 'rgba(168,85,247,0.6)' }}>CEO & Founder, CelestiFan</p>
          </div>
          <div className="h-px w-8" style={{ background: 'linear-gradient(to right, rgba(168,85,247,0.5), transparent)' }} />
        </motion.div>
      </div>
    </section>

    {/* ── ACT IV — TEAM ── */}
    <section className="px-6 md:px-16 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-14"
        >
          <div className="h-px w-10" style={{ background: 'linear-gradient(to right, #a855f7, #3b82f6)' }} />
          <span className="text-[0.6rem] font-bold tracking-[0.35em] uppercase" style={{ color: 'rgba(168,85,247,0.7)' }}>
            Who We Are
          </span>
        </motion.div>

        <div className="space-y-10">
          {[
            { initials: "TR", name: "Tometi Koffi Romeo", role: "CEO & Founder", bio: "Independent artist. Music obsessive. Built CelestiFan because he felt the gap between artists and their fans personally — and decided to close it.", gradient: "linear-gradient(135deg, #a855f7, #3b82f6)", accent: "#a855f7" },
            { initials: "MA", name: "Mubarak Abdulrafiu", role: "Head of Product & Design", bio: "Crafting the experience that makes CelestiFan feel like it was built for fans, by people who actually care about them.", gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)", accent: "#3b82f6" },
          ].map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-6"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold text-white flex-shrink-0" style={{ background: m.gradient }}>
                {m.initials}
              </div>
              <div>
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', color: '#fff', fontWeight: 700, lineHeight: 1 }}>
                    {m.name}
                  </h3>
                  <span className="text-[0.6rem] font-bold tracking-[0.15em] uppercase" style={{ color: m.accent }}>
                    {m.role}
                  </span>
                </div>
                <p style={{ fontFamily: "'Crimson Pro', Georgia, serif", fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)', color: 'rgba(255,255,255,0.38)', lineHeight: 1.7 }}>
                  {m.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── ACT V — CLOSING ── */}
    <section className="relative px-6 md:px-16 py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <motion.div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 50% 60% at 50% 100%, rgba(168,85,247,0.06) 0%, transparent 70%)' }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ fontFamily: "'Crimson Pro', Georgia, serif", fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', color: 'rgba(255,255,255,0.25)', marginBottom: '1rem', letterSpacing: '0.02em' }}
        >
          We're building with artists, fans, and people who believe in something bigger.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
            fontWeight: 700,
            lineHeight: 1.05,
            background: 'linear-gradient(135deg, #ffffff 20%, rgba(168,85,247,0.95) 55%, rgba(59,130,246,0.9) 85%, rgba(6,182,212,0.8) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          The next wave of music power is in your hands.
        </motion.p>
      </div>
    </section>
  </div>
);

export default About;