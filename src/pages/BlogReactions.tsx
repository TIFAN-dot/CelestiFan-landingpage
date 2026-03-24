import { Star, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

interface Reaction {
  timestamp: string;
  name: string;
  energyType: string;
  rating: number;
  comment: string;
  country?: string;
  flag?: string;
}

const energyGradients: Record<string, { gradient: string; glow: string }> = {
  "Soul Voyager":      { gradient: "linear-gradient(to right, #3b82f6, #a855f7)", glow: "59,130,246" },
  "Vibe Alchemist":    { gradient: "linear-gradient(to right, #f97316, #eab308)", glow: "249,115,22" },
  "Dream Architect":   { gradient: "linear-gradient(to right, #06b6d4, #3b82f6)", glow: "6,182,212" },
  "Fire Spirit":       { gradient: "linear-gradient(to right, #ef4444, #ec4899)", glow: "239,68,68" },
  "Emotional Healer":  { gradient: "linear-gradient(to right, #a855f7, #ec4899)", glow: "168,85,247" },
  "Flow Seeker":       { gradient: "linear-gradient(to right, #14b8a6, #10b981)", glow: "20,184,166" },
  "Story Collector":   { gradient: "linear-gradient(to right, #6366f1, #a855f7)", glow: "99,102,241" },
  "Cosmic Connector":  { gradient: "linear-gradient(to right, #8b5cf6, #d946ef)", glow: "139,92,246" },
};

const getEnergy = (type: string) =>
  energyGradients[type] || { gradient: "linear-gradient(to right, #a855f7, #3b82f6)", glow: "168,85,247" };

const BlogReactions = () => {
  const [reactions, setReactions] = useState<Reaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReactions = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzHtjBUTZrE0ML9SV0XvyOzAYFIOF3YXyXX3v0fJizvK0IgikyqF2dGrRUbw1nFNSyB/exec';
        const response = await fetch(`${SCRIPT_URL}?action=get_feedback`);
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        if (data.status === 'success' && Array.isArray(data.data)) {
          setReactions(data.data);
        } else throw new Error('Invalid data');
      } catch (err) {
        setError('Unable to load reactions right now.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchReactions();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Helmet>
        <title>Celesti Energy Fan Reactions — CelestiFan</title>
        <meta name="description" content="Live fan reactions to the Celesti Energy quiz from music lovers around the world." />
        <link rel="canonical" href="https://celestifan.com/blog/reactions" />
        <meta property="og:image" content="https://celestifan.com/quiz-archetype-mosaic.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://celestifan.com/quiz-archetype-mosaic.webp" />
      </Helmet>

      <style>{`.flag-emoji { font-family: 'Apple Color Emoji','Segoe UI Emoji','Noto Color Emoji',sans-serif; font-size: 1.2rem; line-height: 1; display: inline-block; }`}</style>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-32 pb-16 px-5">
        <div className="absolute inset-0 pointer-events-none hidden md:block opacity-15">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full blur-[100px]" style={{ background: 'radial-gradient(ellipse, rgba(168,85,247,0.4) 0%, transparent 70%)' }} />
        </div>
        <div className="absolute inset-0 pointer-events-none md:hidden" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(168,85,247,0.1) 0%, transparent 70%)' }} />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-px w-10" style={{ background: 'linear-gradient(to right, #a855f7, #3b82f6)' }} />
            <span className="text-[0.65rem] font-semibold tracking-[0.3em] uppercase" style={{ color: 'rgba(168,85,247,0.8)' }}>
              Live Community Feed
            </span>
            <div className="h-px w-10" style={{ background: 'linear-gradient(to right, #3b82f6, #06b6d4)' }} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold leading-tight mb-5"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
              background: 'linear-gradient(135deg, #ffffff 30%, rgba(168,85,247,0.95) 65%, rgba(59,130,246,0.9) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Community Vibes.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontFamily: "'Crimson Pro', Georgia, serif",
              fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
              color: 'rgba(255,255,255,0.38)',
              lineHeight: 1.7,
            }}
          >
            Music lovers around the world discovering who they really are. Real people. Real results.
          </motion.p>

          {/* Live count */}
          {!isLoading && reactions.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-center gap-2 mt-6"
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#10b981' }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'rgba(16,185,129,0.7)' }}>
                {reactions.length} reactions live
              </span>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── CONTENT ── */}
      <div className="max-w-6xl mx-auto px-5 pb-28">

        {/* Loading */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-24">
            <Loader2 className="w-10 h-10 animate-spin mb-4" style={{ color: 'rgba(168,85,247,0.6)' }} />
            <p style={{ fontFamily: "'Crimson Pro', Georgia, serif", fontSize: '1rem', color: 'rgba(255,255,255,0.25)' }}>
              Loading community vibes...
            </p>
          </div>
        )}

        {/* Error */}
        {error && !isLoading && (
          <div className="text-center py-24">
            <p className="mb-6" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: "'Crimson Pro', Georgia, serif", fontSize: '1rem' }}>{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-200"
              style={{ background: 'rgba(168,85,247,0.12)', color: 'rgba(168,85,247,0.8)', border: '1px solid rgba(168,85,247,0.2)' }}
            >
              Try Again
            </button>
          </div>
        )}

        {/* Reactions grid */}
        {!isLoading && !error && reactions.length > 0 && (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {reactions.map((reaction, i) => {
              const energy = getEnergy(reaction.energyType);
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: Math.min(i * 0.06, 0.8) }}
                  className="break-inside-avoid rounded-2xl overflow-hidden mb-4"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: `1px solid rgba(${energy.glow},0.12)`,
                  }}
                >
                  {/* Top gradient line */}
                  <div className="h-px w-full" style={{ background: energy.gradient }} />

                  <div className="p-6">
                    {/* Energy badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="text-[0.58rem] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full"
                        style={{
                          background: `rgba(${energy.glow},0.12)`,
                          border: `1px solid rgba(${energy.glow},0.2)`,
                          color: `rgba(${energy.glow},1)`,
                          // fallback for color mixing
                        }}
                      >
                        {reaction.energyType}
                      </span>

                      {/* Stars */}
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, s) => (
                          <Star
                            key={s}
                            className="w-3.5 h-3.5"
                            style={{
                              fill: s < reaction.rating ? '#eab308' : 'transparent',
                              color: s < reaction.rating ? '#eab308' : 'rgba(255,255,255,0.12)',
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Comment */}
                    <p
                      className="mb-5 leading-relaxed"
                      style={{
                        fontFamily: "'Crimson Pro', Georgia, serif",
                        fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
                        color: 'rgba(255,255,255,0.55)',
                        lineHeight: 1.7,
                      }}
                    >
                      "{reaction.comment}"
                    </p>

                    {/* User + meta */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {/* Avatar */}
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                          style={{ background: energy.gradient }}
                        >
                          {reaction.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-white leading-none">{reaction.name}</p>
                          {reaction.country && (
                            <p className="text-[0.6rem] mt-0.5" style={{ color: 'rgba(255,255,255,0.25)' }}>
                              {reaction.flag && <span className="flag-emoji mr-1">{reaction.flag}</span>}
                              {reaction.country}
                            </p>
                          )}
                        </div>
                      </div>
                      <p className="text-[0.58rem]" style={{ color: 'rgba(255,255,255,0.18)' }}>
                        {new Date(reaction.timestamp).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Empty state */}
        {!isLoading && !error && reactions.length === 0 && (
          <div className="text-center py-24">
            <p
              className="mb-6"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.5rem', color: 'rgba(255,255,255,0.3)' }}
            >
              No reactions yet. Be the first.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full"
              style={{ background: 'linear-gradient(to right, #a855f7, #3b82f6)', color: '#fff' }}
            >
              Take the Quiz ✦
            </a>
          </div>
        )}

        {/* CTA */}
        {!isLoading && reactions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 rounded-2xl overflow-hidden relative"
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(168,85,247,0.12)' }}
          >
            <div className="h-px w-full" style={{ background: 'linear-gradient(to right, #a855f7, #3b82f6, #06b6d4)' }} />
            <div className="p-10 md:p-14 text-center">
              <p
                className="mb-3"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', color: '#fff', fontWeight: 700 }}
              >
                What's your Celesti Energy?
              </p>
              <p
                className="mb-8 max-w-md mx-auto"
                style={{ fontFamily: "'Crimson Pro', Georgia, serif", fontSize: '1.05rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.7 }}
              >
                60 seconds. 8 archetypes. One truth about how you move in music.
              </p>
              <a
                href="/"
                className="inline-flex items-center gap-2 text-sm font-semibold px-7 py-3 rounded-full transition-all duration-200 hover:scale-105"
                style={{ background: 'linear-gradient(to right, #a855f7, #3b82f6)', color: '#fff', boxShadow: '0 0 24px rgba(168,85,247,0.2)' }}
              >
                Take the Quiz ✦
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BlogReactions;