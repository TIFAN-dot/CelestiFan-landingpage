import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Zap, BarChart3, MessageCircle, Trophy, Upload, Crown } from "lucide-react";

/* ─────────────────────────────────────────
   Feature data
───────────────────────────────────────── */
const artistFeatures = [
  {
    id: "campaigns",
    icon: Zap,
    number: "01",
    title: "Campaigns\nThat Pop",
    body: "Set a goal. Watch your fans move. Real-time tracking, auto rewards, and viral mechanics that turn passive listeners into active believers.",
    gradient: "linear-gradient(135deg, #a855f7, #3b82f6)",
    glowColor: "168,85,247",
    accentColor: "#a855f7",
    span: "col-span-2 row-span-2", // big card
  },
  {
    id: "insights",
    icon: BarChart3,
    number: "02",
    title: "Fan Insights",
    body: "Finally know who's actually showing up for you. Top listeners, geographic reach — your superfans, visible at last.",
    gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)",
    glowColor: "59,130,246",
    accentColor: "#3b82f6",
    span: "col-span-2 row-span-1",
  },
  {
    id: "chats",
    icon: MessageCircle,
    number: "03",
    title: "Direct Fan Chats",
    body: "Message the fans who matter most. Build relationships that outlast any single release.",
    gradient: "linear-gradient(135deg, #06b6d4, #10b981)",
    glowColor: "6,182,212",
    accentColor: "#06b6d4",
    span: "col-span-2 row-span-1",
  },
];

const fanFeatures = [
  {
    id: "rank",
    icon: Trophy,
    number: "04",
    title: "Rank Up",
    body: "Every stream, share, and proof submission earns Celeste. Climb the leaderboard. Get seen.",
    gradient: "linear-gradient(135deg, #10b981, #a855f7)",
    glowColor: "16,185,129",
    accentColor: "#10b981",
    span: "col-span-2 row-span-1",
  },
  {
    id: "proof",
    icon: Upload,
    number: "05",
    title: "Proof\nSubmission",
    body: "You showed up. Now prove it. Upload receipts — streams, shares, concerts — and turn dedication into recognition instantly.",
    gradient: "linear-gradient(135deg, #a855f7, #06b6d4)",
    glowColor: "168,85,247",
    accentColor: "#a855f7",
    span: "col-span-2 row-span-2", // big card
  },
  {
    id: "leaderboard",
    icon: Crown,
    number: "06",
    title: "Leaderboard Glory",
    body: "Your name. Your rank. Your moment. Top fans get shoutouts and direct access no money can buy.",
    gradient: "linear-gradient(135deg, #3b82f6, #10b981)",
    glowColor: "59,130,246",
    accentColor: "#3b82f6",
    span: "col-span-2 row-span-1",
  },
];

const integrations = ["Spotify", "Apple Music", "TikTok", "Instagram", "YouTube", "Twitter/X"];

/* ─────────────────────────────────────────
   Bento Card
───────────────────────────────────────── */
const BentoCard = ({
  icon: Icon, number, title, body, gradient, glowColor, accentColor, span, side
}: {
  icon: React.ElementType; number: string; title: string; body: string;
  gradient: string; glowColor: string; accentColor: string; span: string; side: "artist" | "fan";
}) => {
  const [hovered, setHovered] = useState(false);
  const isBig = span.includes("row-span-2");

  return (
    <motion.div
      className={`relative rounded-2xl overflow-hidden cursor-pointer ${span}`}
      style={{
        background: hovered
          ? `linear-gradient(135deg, rgba(${glowColor},0.08) 0%, rgba(0,0,0,0) 100%)`
          : 'rgba(255,255,255,0.02)',
        border: `1px solid rgba(${glowColor},${hovered ? '0.3' : '0.08'})`,
        transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 rounded-2xl"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 20% 20%, rgba(${glowColor},0.12) 0%, transparent 70%)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: gradient, opacity: hovered ? 1 : 0.3, transition: 'opacity 0.4s' }} />

      <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-between">
        <div>
          {/* Number + Icon */}
          <div className="flex items-center justify-between mb-6">
            <span
              className="text-xs font-bold tracking-[0.3em]"
              style={{ color: `rgba(${glowColor},0.5)` }}
            >
              /{number}
            </span>
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300"
              style={{
                background: hovered ? `rgba(${glowColor},0.2)` : `rgba(${glowColor},0.08)`,
                border: `1px solid rgba(${glowColor},0.2)`,
              }}
            >
              <Icon className="h-4 w-4" style={{ color: accentColor }} />
            </div>
          </div>

          {/* Title */}
          <h3
            className="font-bold leading-[1.0] mb-0"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: isBig ? 'clamp(2.2rem, 4vw, 3.5rem)' : 'clamp(1.6rem, 2.5vw, 2.2rem)',
              color: hovered ? '#fff' : 'rgba(255,255,255,0.7)',
              whiteSpace: 'pre-line',
              transition: 'color 0.3s',
            }}
          >
            {title}
          </h3>
        </div>

        {/* Body — always visible on mobile, slides in on hover on desktop */}
        <div
          style={{
            maxHeight: hovered ? '200px' : '0px',
            overflow: 'hidden',
            transition: 'max-height 0.4s cubic-bezier(0.16,1,0.3,1)',
          }}
          className="hidden md:block"
        >
          <p
            className="mt-4"
            style={{
              fontFamily: "'Crimson Pro', Georgia, serif",
              fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.7,
            }}
          >
            {body}
          </p>
        </div>
        {/* Mobile — body always visible */}
        <p
          className="md:hidden mt-3"
          style={{
            fontFamily: "'Crimson Pro', Georgia, serif",
            fontSize: '0.95rem',
            color: 'rgba(255,255,255,0.45)',
            lineHeight: 1.7,
          }}
        >
          {body}
        </p>

        {/* Bottom tag */}
        <div className="mt-6">
          <span
            className="text-[0.55rem] font-bold tracking-[0.25em] uppercase transition-opacity duration-300"
            style={{ color: `rgba(${glowColor},${hovered ? 0.7 : 0.3})` }}
          >
            {side === "artist" ? "For Artists" : "For Fans"} ✦
          </span>
        </div>
      </div>
    </motion.div>
  );
};

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
const Features = () => (
  <div className="min-h-screen bg-slate-950 text-slate-50">
    <Helmet>
      <title>Features — CelestiFan</title>
      <meta name="description" content="CelestiFan features for artists and fans. Campaigns, fan insights, leaderboards, Celeste rewards and more." />
    </Helmet>

    {/* ── HERO ── */}
    <section className="relative overflow-hidden pt-32 pb-16 px-5">
      <div className="absolute inset-0 pointer-events-none hidden md:block opacity-15">
        <div className="absolute top-0 right-[10%] w-[40%] h-[60%] bg-primary rounded-full blur-[100px]" />
      </div>
      <div className="absolute inset-0 pointer-events-none md:hidden" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(168,85,247,0.1) 0%, transparent 70%)' }} />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px w-10" style={{ background: 'linear-gradient(to right, #a855f7, #3b82f6)' }} />
          <span className="text-[0.65rem] font-semibold tracking-[0.3em] uppercase" style={{ color: 'rgba(168,85,247,0.8)' }}>
            The Platform
          </span>
          <div className="h-px w-10" style={{ background: 'linear-gradient(to right, #3b82f6, #06b6d4)' }} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-bold leading-tight mb-6"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            background: 'linear-gradient(135deg, #ffffff 30%, rgba(168,85,247,0.95) 65%, rgba(59,130,246,0.9) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Features That Fuel.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            fontFamily: "'Crimson Pro', Georgia, serif",
            fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
            color: 'rgba(255,255,255,0.35)',
          }}
        >
          Hover a card to discover what's inside.
        </motion.p>
      </div>
    </section>

    {/* ── BENTO GRID ── */}
    <div className="max-w-6xl mx-auto px-5 pb-28">

      {/* Split label row — desktop only */}
      <div className="hidden md:grid grid-cols-2 gap-4 mb-3">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-[0.6rem] font-bold tracking-[0.3em] uppercase"
          style={{ color: 'rgba(168,85,247,0.6)' }}
        >
          For Artists
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          viewport={{ once: true }}
          className="text-[0.6rem] font-bold tracking-[0.3em] uppercase"
          style={{ color: 'rgba(6,182,212,0.6)' }}
        >
          For Fans
        </motion.p>
      </div>

      {/* Main bento grid — desktop only */}
      <div className="hidden md:grid grid-cols-4 grid-rows-3 gap-4 auto-rows-[160px]">

        {/* Artist big card — col 1-2, row 1-2 */}
        <div className="col-span-2 row-span-2">
          <BentoCard {...artistFeatures[0]} span="col-span-2 row-span-2" side="artist" />
        </div>

        {/* Fan big card — col 3-4, row 2-3 */}
        <div className="col-span-2 row-span-2 col-start-3 row-start-2">
          <BentoCard {...fanFeatures[1]} span="col-span-2 row-span-2" side="fan" />
        </div>

        {/* Artist small — col 1, row 3 */}
        <div className="col-span-1 row-span-1 col-start-1 row-start-3">
          <BentoCard {...artistFeatures[1]} span="h-full" side="artist" />
        </div>

        {/* Artist small — col 2, row 3 */}
        <div className="col-span-1 row-span-1 col-start-2 row-start-3">
          <BentoCard {...artistFeatures[2]} span="h-full" side="artist" />
        </div>

        {/* Fan small — col 3, row 1 */}
        <div className="col-span-1 row-span-1 col-start-3 row-start-1">
          <BentoCard {...fanFeatures[0]} span="h-full" side="fan" />
        </div>

        {/* Fan small — col 4, row 1 */}
        <div className="col-span-1 row-span-1 col-start-4 row-start-1">
          <BentoCard {...fanFeatures[2]} span="h-full" side="fan" />
        </div>
      </div>

      {/* Mobile fallback — simple stack */}
      <div className="md:hidden space-y-4 mt-4">
        {[...artistFeatures, ...fanFeatures].map((f, i) => (
          <BentoCard
            key={f.id}
            {...f}
            span="w-full"
            side={i < 3 ? "artist" : "fan"}
          />
        ))}
      </div>

      {/* ── INTEGRATIONS ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <div className="h-px w-full mb-14 opacity-10" style={{ background: 'linear-gradient(to right, #a855f7, #3b82f6, #06b6d4, #10b981)' }} />

        <p
          className="mb-2"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#fff' }}
        >
          Connect Once. Track Everywhere.
        </p>
        <p
          className="mb-8"
          style={{ fontFamily: "'Crimson Pro', Georgia, serif", fontSize: '1rem', color: 'rgba(255,255,255,0.28)' }}
        >
          Sync with the platforms your fans already use.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {integrations.map((name) => (
            <span
              key={name}
              className="px-5 py-2.5 rounded-full text-sm font-semibold"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.45)' }}
            >
              {name}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);

export default Features;