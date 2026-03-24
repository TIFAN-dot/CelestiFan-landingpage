import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Star, Zap, Gift } from "lucide-react";

/* ── Mini Celeste Card Mockup ── */
const CelesteCardMockup = () => (
  <div
    className="relative rounded-2xl overflow-hidden w-full max-w-xs mx-auto"
    style={{
      background: 'linear-gradient(135deg, #1a1025 0%, #0d0a1a 100%)',
      border: '1px solid rgba(255,217,61,0.2)',
      boxShadow: '0 0 40px rgba(255,217,61,0.08)',
    }}
  >
    {/* Card top bar */}
    <div className="px-5 pt-5 pb-4 flex items-center justify-between" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,217,61,0.15)', border: '1px solid rgba(255,217,61,0.3)' }}>
          <span style={{ fontSize: '0.75rem' }}>✦</span>
        </div>
        <span className="text-xs font-bold tracking-widest uppercase" style={{ color: 'rgba(255,217,61,0.7)' }}>CelestiFan</span>
      </div>
      <span className="text-[0.55rem] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full" style={{ background: 'rgba(168,85,247,0.15)', color: '#a855f7', border: '1px solid rgba(168,85,247,0.25)' }}>SuperFan</span>
    </div>

    {/* Fan info */}
    <div className="px-5 py-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm" style={{ background: 'linear-gradient(to right, #a855f7, #3b82f6)', color: '#fff' }}>AK</div>
        <div>
          <p className="text-xs font-semibold text-white">Adaeze Kalu</p>
          <p className="text-[0.6rem]" style={{ color: 'rgba(255,255,255,0.35)' }}>Fan · Lagos, Nigeria</p>
        </div>
      </div>

      {/* Celeste balance */}
      <div className="rounded-xl p-4 mb-4" style={{ background: 'rgba(255,217,61,0.06)', border: '1px solid rgba(255,217,61,0.12)' }}>
        <p className="text-[0.6rem] font-bold tracking-[0.2em] uppercase mb-1" style={{ color: 'rgba(255,217,61,0.5)' }}>Celeste Balance</p>
        <div className="flex items-end gap-2">
          <span className="font-bold" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '2.2rem', color: '#FFD93D', lineHeight: 1 }}>2,480</span>
          <span className="text-xs mb-1" style={{ color: 'rgba(255,217,61,0.5)' }}>✦ celeste</span>
        </div>
      </div>

      {/* XP bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-[0.6rem] font-bold tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.25)' }}>XP Progress</span>
          <span className="text-[0.6rem] font-bold" style={{ color: 'rgba(168,85,247,0.7)' }}>Level 4 → 5</span>
        </div>
        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
          <div className="h-full rounded-full" style={{ width: '68%', background: 'linear-gradient(to right, #a855f7, #3b82f6)' }} />
        </div>
        <p className="text-[0.55rem] mt-1" style={{ color: 'rgba(255,255,255,0.2)' }}>680 / 1,000 XP to next level</p>
      </div>

      {/* Recent actions */}
      <div>
        <p className="text-[0.6rem] font-bold tracking-[0.2em] uppercase mb-2" style={{ color: 'rgba(255,255,255,0.2)' }}>Recent Earnings</p>
        <div className="space-y-1.5">
          {[
            { action: "Streamed Burna Boy · 12 plays", celeste: "+24 ✦", color: "#FFD93D" },
            { action: "Shared campaign on X", celeste: "+50 ✦", color: "#FFD93D" },
            { action: "Rank #3 this week", celeste: "+100 ✦", color: "#a855f7" },
          ].map((item) => (
            <div key={item.action} className="flex items-center justify-between">
              <span className="text-[0.6rem]" style={{ color: 'rgba(255,255,255,0.35)' }}>{item.action}</span>
              <span className="text-[0.6rem] font-bold" style={{ color: item.color }}>{item.celeste}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Bottom CTA */}
    <div className="px-5 pb-5">
      <div className="rounded-xl px-4 py-2.5 text-center text-xs font-bold tracking-wide" style={{ background: 'linear-gradient(to right, #a855f7, #3b82f6)', color: '#fff' }}>
        Redeem Celeste →
      </div>
    </div>
  </div>
);

/* ── Earn Action Row ── */
const EarnRow = ({ action, celeste, color }: { action: string; celeste: string; color: string }) => (
  <div
    className="flex items-center justify-between px-5 py-3.5 rounded-xl"
    style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
  >
    <span style={{ fontFamily: "'Crimson Pro', Georgia, serif", fontSize: '1rem', color: 'rgba(255,255,255,0.6)' }}>{action}</span>
    <span className="text-sm font-bold" style={{ color }}>{celeste}</span>
  </div>
);

/* ── Unlock Card ── */
const UnlockCard = ({ icon, title, desc, gradient, glowColor }: {
  icon: string; title: string; desc: string; gradient: string; glowColor: string;
}) => (
  <div
    className="rounded-2xl p-6"
    style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderTop: `2px solid transparent`, backgroundClip: 'padding-box' }}
  >
    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-lg" style={{ background: `rgba(${glowColor},0.12)`, border: `1px solid rgba(${glowColor},0.2)` }}>
      {icon}
    </div>
    <h4 className="font-bold text-white mb-2" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.3rem' }}>{title}</h4>
    <p style={{ fontFamily: "'Crimson Pro', Georgia, serif", fontSize: '0.95rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>{desc}</p>
  </div>
);

const Celeste = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Helmet>
        <title>Celeste — The Heart of CelestiFan</title>
        <meta name="description" content="Celeste is the fan reward currency of CelestiFan. Earn it by supporting artists. Spend it on exclusive experiences, early access, and real rewards." />
      </Helmet>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-32 pb-16 px-5">
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-15" style={{ background: 'radial-gradient(ellipse, #FFD93D 0%, transparent 70%)' }} />
        </div>
        <div className="absolute inset-0 pointer-events-none md:hidden" style={{ background: 'radial-gradient(ellipse 80% 40% at 50% 0%, rgba(255,217,61,0.08) 0%, transparent 70%)' }} />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-px w-10" style={{ background: 'linear-gradient(to right, #FFD93D, #a855f7)' }} />
            <span className="text-[0.65rem] font-semibold tracking-[0.3em] uppercase" style={{ color: 'rgba(255,217,61,0.7)' }}>
              CelestiFan Currency
            </span>
            <div className="h-px w-10" style={{ background: 'linear-gradient(to right, #a855f7, #FFD93D)' }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
            style={{ background: 'rgba(255,217,61,0.1)', border: '1px solid rgba(255,217,61,0.25)' }}
          >
            <span style={{ fontSize: '2.5rem' }}>✦</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold leading-tight mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(3.5rem, 10vw, 7rem)',
              background: 'linear-gradient(135deg, #FFD93D 0%, #ffffff 40%, #FFD93D 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Celeste
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontFamily: "'Crimson Pro', Georgia, serif",
              fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.7,
            }}
          >
            The heart of the CelestiFan universe.<br />
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>Not points. Not tokens. Proof that you were there.</span>
          </motion.p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-5 pb-28 space-y-24">

        {/* ── SECTION 1 — What is Celeste ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-10" style={{ background: 'linear-gradient(to right, #FFD93D, #a855f7)' }} />
              <span className="text-[0.6rem] font-bold tracking-[0.3em] uppercase" style={{ color: 'rgba(255,217,61,0.6)' }}>/01 · What is Celeste</span>
            </div>
            <h2
              className="font-bold leading-tight mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                color: '#fff',
              }}
            >
              Energy that flows between fans and artists.
            </h2>
            <p
              style={{
                fontFamily: "'Crimson Pro', Georgia, serif",
                fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.8,
              }}
            >
              Celeste a symbol of real connection. Every time a fan supports an artist or simply showing up — they earn Celeste.
            </p>
            <p
              className="mt-4"
              style={{
                fontFamily: "'Crimson Pro', Georgia, serif",
                fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
                color: 'rgba(255,255,255,0.28)',
                lineHeight: 1.8,
              }}
            >
              It's The Energy that flows through the CelestiFan universe. The more genuine support you give, the more Celeste you collect.
            </p>
          </div>

          {/* Celeste card mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <CelesteCardMockup />
          </motion.div>
        </motion.div>

        {/* ── SECTION 2 — How you earn it ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-10" style={{ background: 'linear-gradient(to right, #FFD93D, #a855f7)' }} />
            <span className="text-[0.6rem] font-bold tracking-[0.3em] uppercase" style={{ color: 'rgba(255,217,61,0.6)' }}>/02 · How You Earn It</span>
          </div>
          <h2
            className="font-bold leading-tight mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              color: '#fff',
            }}
          >
            Every act of support earns.
          </h2>
          <p
            className="mb-10 max-w-2xl"
            style={{
              fontFamily: "'Crimson Pro', Georgia, serif",
              fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
              color: 'rgba(255,255,255,0.4)',
              lineHeight: 1.8,
            }}
          >
            Celeste is earned through real actions. Not luck. Not spending. Just showing up for the artists you believe in.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          </div>

          <p
            className="mt-5"
            style={{ color: 'rgba(255,255,255,0.28)', fontFamily: "'Crimson Pro', Georgia, serif", fontSize: '1rem' }}
          >
            Your dedication has a value. Find out yours at launch.
          </p>
        </motion.div>

        {/* ── SECTION 3 — What it unlocks ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-10" style={{ background: 'linear-gradient(to right, #FFD93D, #a855f7)' }} />
            <span className="text-[0.6rem] font-bold tracking-[0.3em] uppercase" style={{ color: 'rgba(168,85,247,0.7)' }}>/03 · What It Unlocks</span>
          </div>
          <h2
            className="font-bold leading-tight mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              color: '#fff',
            }}
          >
            Celeste gives fans access — not just rewards.
          </h2>
          <p
            className="mb-10 max-w-2xl"
            style={{
              fontFamily: "'Crimson Pro', Georgia, serif",
              fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
              color: 'rgba(255,255,255,0.4)',
              lineHeight: 1.8,
            }}
          >
            The more Celeste you earn, the deeper your bond with your favorite artists becomes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: "🎵", title: "Early Releases", desc: "Get access to new music, drops, and exclusives before anyone else.", gradient: "linear-gradient(to right, #FFD93D, #a855f7)", glowColor: "255,217,61" },
              { icon: "🎤", title: "Artist Shoutouts", desc: "Top fans get noticed. Artists can reward their biggest supporters directly.", gradient: "linear-gradient(to right, #a855f7, #3b82f6)", glowColor: "168,85,247" },
              { icon: "🏆", title: "Leaderboard Status", desc: "Your Celeste score places you on a public podium. Your dedication ranked.", gradient: "linear-gradient(to right, #3b82f6, #06b6d4)", glowColor: "59,130,246" },
              { icon: "🎁", title: "Real-World Rewards", desc: "Exchange Celeste for merch, tickets, digital gifts, and real experiences.", gradient: "linear-gradient(to right, #06b6d4, #10b981)", glowColor: "6,182,212" },
              { icon: "🔐", title: "Exclusive Moments", desc: "Private drops, fan Q&As, and community challenges only Celeste holders can enter.", gradient: "linear-gradient(to right, #10b981, #a855f7)", glowColor: "16,185,129" },
              { icon: "✦", title: "Founder Status", desc: "Early members who earn the most Celeste before launch get permanent Founding badges.", gradient: "linear-gradient(to right, #FFD93D, #FF4D00)", glowColor: "255,217,61" },
            ].map((card) => (
              <UnlockCard key={card.title} {...card} />
            ))}
          </div>
        </motion.div>

        {/* ── SECTION 4 — Why it matters ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden p-10 md:p-14 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(255,217,61,0.05) 0%, rgba(168,85,247,0.05) 100%)',
            border: '1px solid rgba(255,217,61,0.12)',
          }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,217,61,0.04) 0%, transparent 70%)' }} />
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-10" style={{ background: 'linear-gradient(to right, #FFD93D, #a855f7)' }} />
              <span className="text-[0.6rem] font-bold tracking-[0.3em] uppercase" style={{ color: 'rgba(168,85,247,0.7)' }}>/04 · Why It Matters</span>
              <div className="h-px w-10" style={{ background: 'linear-gradient(to right, #a855f7, #3b82f6)' }} />
            </div>
            <h2
              className="font-bold leading-tight mb-6 mx-auto"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                color: '#fff',
                maxWidth: '700px',
              }}
            >
              Celeste brings meaning back to music engagement.
            </h2>
            <p
              className="mx-auto mb-4"
              style={{
                fontFamily: "'Crimson Pro', Georgia, serif",
                fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.8,
                maxWidth: '560px',
              }}
            >
              It transforms every play, comment, or share into something valuable both emotionally and digitally.
            </p>
            <p
              className="mx-auto mb-10"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
                color: 'rgba(255,255,255,0.3)',
                fontStyle: 'italic',
                maxWidth: '500px',
              }}
            >
              "Fans don't just listen anymore — they belong."
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Celeste;