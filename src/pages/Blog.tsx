import { Calendar, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  const posts = [
    {
      title: "Celesti Energy – Fan Reactions",
      excerpt: "See what fans around the world are saying about their quiz results. Real ratings, real reactions, real vibes. Join hundreds who've discovered their cosmic energy.",
      date: "Live Now",
      readTime: "Ongoing",
      category: "Community",
      type: "live",
      link: "/blog/reactions",
    },
    {
      title: "The Music Industry Got the Exchange Backwards",
      excerpt: "For decades, we've measured fandom by what it spends. What if the real currency was always something else entirely? Artists sell us escape. We sell them return.",
      date: "March 11, 2025",
      readTime: "8 min read",
      category: "Culture",
      type: "editorial",
      link: "/blog/exchange-backwards",
    },
    {
      title: "The Biggest Afrobeats Summer 2026",
      excerpt: "Afro Nation Portugal, Davido & Friends Fest, Burna Boy, Wizkid and more — your complete guide to every confirmed Afrobeats event this summer. Real dates, real prices.",
      date: "March 24, 2026",
      readTime: "Event Guide",
      category: "Events",
      type: "guide",
      link: "/blog/afrobeats-summer-2026",
    },
  ];

  const categories = ["All", "Community", "Culture", "Events"];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Helmet>
        <title>CelestiFan Blog — Fan Engagement, Fan Lives Matter & Music Culture</title>
        <meta name="description" content="Stories, essays, and guides from the CelestiFan community on fan engagement, fan campaigns, Afrobeats culture, and building artist careers with real fans." />
        <link rel="canonical" href="https://celestifan.com/blog" />
        <meta property="og:title" content="CelestiFan Blog — Fan Engagement & Music Culture" />
        <meta property="og:description" content="Dive into fan engagement strategies, culture essays, and success stories from the CelestiFan community." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://celestifan.com/blog" />
        <meta property="og:image" content="https://celestifan.com/fanliveimage1.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CelestiFan Blog — Fan Engagement & Music Culture" />
        <meta name="twitter:description" content="Fan-first essays and resources on campaigns, rankings, Afrobeats, and why fan engagement beats follower counts." />
        <meta name="twitter:image" content="https://celestifan.com/fanliveimage1.webp" />
      </Helmet>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-32 pb-20 px-5">
        <div className="absolute inset-0 pointer-events-none hidden md:block opacity-20">
          <div className="absolute top-0 right-[10%] w-[40%] h-[60%] bg-primary rounded-full blur-[100px]" style={{ willChange: 'transform' }} />
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
              CelestiFan Journal
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
            Music Matters.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontFamily: "'Crimson Pro', Georgia, serif",
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              color: 'rgba(255,255,255,0.45)',
            }}
          >
            Insights, stories, and guides from the CelestiFan community.
          </motion.p>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="container mx-auto px-5 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap gap-2 justify-center"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              style={{
                background: cat === "All" ? 'linear-gradient(to right, #a855f7, #3b82f6)' : 'rgba(255,255,255,0.04)',
                color: cat === "All" ? '#fff' : 'rgba(255,255,255,0.45)',
                border: cat === "All" ? 'none' : '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </section>

      {/* ── POSTS ── */}
      <section className="container mx-auto px-5 pb-24 max-w-5xl">
        <div className="space-y-4">

          {/* ── LIVE REACTIONS — Featured ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link to={posts[0].link}>
              <div
                className="relative rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(168,85,247,0.2)',
                  borderLeft: '3px solid #a855f7',
                }}
              >
                <div className="grid md:grid-cols-[1fr_auto] gap-0">
                  <div className="p-8 md:p-10">
                    <div className="flex flex-wrap items-center gap-2 mb-5">
                      <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full" style={{ background: 'rgba(168,85,247,0.15)', color: '#a855f7', border: '1px solid rgba(168,85,247,0.3)' }}>Featured</span>
                      <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full flex items-center gap-1.5" style={{ background: 'rgba(34,197,94,0.12)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.25)' }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
                        Live
                      </span>
                      <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.4)' }}>Community</span>
                    </div>
                    <h2
                      className="font-bold leading-tight mb-4 group-hover:opacity-80 transition-opacity"
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#fff' }}
                    >
                      Celesti Energy – Fan Reactions
                    </h2>
                    <p className="mb-6" style={{ fontFamily: "'Crimson Pro', Georgia, serif", fontSize: 'clamp(1rem, 1.6vw, 1.1rem)', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
                      See what fans around the world are saying about their quiz results. Real ratings, real reactions, real vibes.
                    </p>
                    <div className="flex items-center gap-6 mb-6">
                      <div className="flex items-center gap-2 text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
                        <Calendar className="h-3.5 w-3.5" />Live Now
                      </div>
                      <div className="flex items-center gap-2 text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
                        <Clock className="h-3.5 w-3.5" />Ongoing
                      </div>
                    </div>
                    <div
                      className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200"
                      style={{ background: 'linear-gradient(to right, #a855f7, #3b82f6)', color: '#fff' }}
                    >
                      View Reactions <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center px-10 min-w-[160px]">
                    <div className="text-center">
                      <div className="text-7xl mb-2">⭐</div>
                      <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(168,85,247,0.6)' }}>Live Feed</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* ── EDITORIAL — Exchange ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            viewport={{ once: true }}
          >
            <Link to={posts[1].link}>
              <div
                className="relative rounded-2xl overflow-hidden group cursor-pointer min-h-[280px] flex items-end transition-all duration-300"
                style={{ border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <img
                  src="/images/image1.jpg"
                  alt="Artist on stage"
                  className="absolute inset-0 w-full h-full object-cover brightness-40 group-hover:brightness-50 transition-all duration-500"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.92) 50%, transparent 100%)' }} />
                <div className="relative z-10 p-8 md:p-10 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full" style={{ background: 'rgba(245,158,11,0.2)', color: '#fbbf24', border: '1px solid rgba(245,158,11,0.3)' }}>✦ Editorial</span>
                    <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full" style={{ background: 'rgba(168,85,247,0.15)', color: '#a855f7', border: '1px solid rgba(168,85,247,0.25)' }}>Culture</span>
                  </div>
                  <h2
                    className="font-bold leading-tight mb-3 text-white group-hover:opacity-80 transition-opacity"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.6rem, 3vw, 2.5rem)' }}
                  >
                    The Music Industry Got the Exchange Backwards
                  </h2>
                  <p className="mb-5" style={{ fontFamily: "'Crimson Pro', Georgia, serif", fontSize: '1rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
                    For decades, we've measured fandom by what it spends. What if the real currency was always something else?
                  </p>
                  <div className="flex items-center gap-5 mb-5 text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
                    <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />March 11, 2025</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />8 min read</span>
                    <span>By Romeo · CelestiFan</span>
                  </div>
                  <div
                    className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full"
                    style={{ background: '#f59e0b', color: '#000' }}
                  >
                    Read the Essay <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* ── EVENT GUIDE — Afrobeats Summer ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Link to={posts[2].link}>
              <div
                className="relative rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300"
                style={{
                  background: 'rgba(255,77,0,0.03)',
                  border: '1px solid rgba(255,77,0,0.2)',
                  borderLeft: '3px solid #FF4D00',
                }}
              >
                <div className="p-8 md:p-10">
                  <div className="flex flex-wrap items-center gap-2 mb-5">
                    <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full" style={{ background: '#FF4D00', color: '#fff' }}>★ New</span>
                    <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full" style={{ background: 'rgba(255,217,61,0.12)', color: '#FFD93D', border: '1px solid rgba(255,217,61,0.25)' }}>Event Guide</span>
                    <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.4)' }}>7 Events</span>
                  </div>
                  <h2
                    className="font-bold leading-tight mb-4 group-hover:opacity-80 transition-opacity"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#fff' }}
                  >
                    The Biggest Afrobeats Summer 2026
                  </h2>
                  <p className="mb-6" style={{ fontFamily: "'Crimson Pro', Georgia, serif", fontSize: 'clamp(1rem, 1.6vw, 1.1rem)', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
                    Afro Nation Portugal, Davido & Friends Fest, Burna Boy, Wizkid and more — your complete guide to every confirmed Afrobeats event this summer. Real dates, real prices, updated as events are announced.
                  </p>
                  <div className="flex flex-wrap items-center gap-6 mb-6">
                    <div className="flex items-center gap-2 text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
                      <Calendar className="h-3.5 w-3.5" />March 24, 2026
                    </div>
                    <div className="flex items-center gap-2 text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
                      <Clock className="h-3.5 w-3.5" />Event Guide
                    </div>
                    <span className="text-xs font-medium" style={{ color: 'rgba(255,77,0,0.7)' }}>🇵🇹 🏴󠁧󠁢󠁥󠁮󠁧󠁿 🇫🇷 🇲🇹 Europe</span>
                  </div>
                  <div
                    className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200"
                    style={{ background: '#FF4D00', color: '#fff' }}
                  >
                    View the Guide <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

        </div>

        {/* Coming soon note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-14 text-xs"
          style={{ color: 'rgba(255,255,255,0.15)', letterSpacing: '0.05em' }}
        >
          More essays, guides, and stories dropping soon. Follow{" "}
          <a href="https://x.com/celestifan_off" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'rgba(168,85,247,0.5)' }}>
            @celestifan_off
          </a>{" "}
          to stay ahead.
        </motion.p>
      </section>
    </div>
  );
};

export default Blog;