import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const events = {
  flagship: {
    pill: "★ Must-Go",
    pillType: "hot",
    badge: "Beach Festival",
    badgeType: "beach",
    name: "Afro Nation Portugal 2026",
    artists: ["Wizkid", "Burna Boy", "Asake", "Tyla", "Gunna", "Olamide"],
    artistsExtra: "Madumane · Focalistic · Uncle Waffles · Kehlani · Darkoo · Young Jonn + more",
    date: "3 – 5 July 2026",
    venue: "Praia da Rocha Beach, Portimão",
    country: "🇵🇹 Portugal",
    age: "18+",
    priceFrom: "£314",
    priceVIP: "VIP £359 · Golden £584",
    priceNote: "3-Day Festival Pass",
    url: "https://www.afronation.com",
    gradient: "linear-gradient(to right, #FF4D00, #FF8C00)",
    accentColor: "#FF4D00",
    glowColor: "255,77,0",
  }
};

const gridEvents = [
  {
    pill: "Island Edition",
    pillType: "purple",
    name: "Afro Nation Malta",
    artists: "Lineup TBA · Multi-stage · Mediterranean",
    date: "4 – 7 June 2026",
    location: "🇲🇹 St Paul's Bay, Malta",
    price: "On Sale",
    url: "https://www.afronation.com",
    accentColor: "#A259FF",
    glowColor: "162,89,255",
  },
  {
    pill: "UK Edition",
    pillType: "green",
    name: "Afro Nation Liverpool",
    artists: "Lineup TBA · 2-Day · Northern England",
    date: "20 – 21 June 2026",
    location: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Liverpool, England",
    price: "On Sale",
    url: "https://www.afronation.com",
    accentColor: "#00C878",
    glowColor: "0,200,120",
  },
];

const soloEvents = [
  {
    pill: "★ Just Announced",
    pillType: "hot",
    name: "Davido & Friends Fest",
    desc: "His first ever self-produced UK festival — curated lineup, cultural experience, full diaspora moment",
    date: "14 August 2026",
    venue: "Crystal Palace Bowl, South London",
    extra: "Capacity: 15,000",
    country: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 UK",
    priceLabel: "Pre-sale Live",
    price: "Book Now",
    url: "https://www.iamdavido.com/events/",
    accentColor: "#FF4D00",
    glowColor: "255,77,0",
  },
  {
    pill: "Headline Show",
    pillType: "yellow",
    name: "Burna Boy Live",
    desc: "The African Giant — open-air headline show at the National Bowl, Milton Keynes",
    date: "31 July 2026",
    venue: "National Bowl, Milton Keynes",
    extra: "Doors 4:00 PM",
    country: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 UK",
    priceLabel: "Via Ticketmaster",
    price: "Book Now",
    url: "https://www.ticketmaster.com",
    accentColor: "#FFD93D",
    glowColor: "255,217,61",
  },
  {
    pill: "Outdoor Show",
    pillType: "teal",
    name: "Wizkid at Dreamland",
    desc: "Big Wiz on the coast — seaside open-air festival show, Margate",
    date: "27 June 2026",
    venue: "Dreamland, Margate",
    extra: "Outdoor · All ages",
    country: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 UK",
    priceLabel: "Tickets",
    price: "On Sale",
    url: "https://www.bandsintown.com",
    accentColor: "#00B8D4",
    glowColor: "0,184,212",
  },
  {
    pill: "Season Finale",
    pillType: "green",
    name: "Afro Nation France",
    desc: "Close out the summer the only way Afrobeats knows how — loud, three days, Le Plessis-Pâté",
    date: "11 – 13 September 2026",
    venue: "Le Plessis-Pâté, France",
    extra: "3 Days · Multi-stage",
    country: "🇫🇷 France",
    priceLabel: "Tickets",
    price: "On Sale",
    url: "https://www.afronation.com",
    accentColor: "#00C878",
    glowColor: "0,200,120",
  },
];

const pillColors: Record<string, { bg: string; color: string; border?: string }> = {
  hot: { bg: "#FF4D00", color: "#fff" },
  beach: { bg: "rgba(0,184,212,0.15)", color: "#00B8D4", border: "1px solid rgba(0,184,212,0.3)" },
  yellow: { bg: "rgba(255,217,61,0.12)", color: "#FFD93D", border: "1px solid rgba(255,217,61,0.25)" },
  purple: { bg: "rgba(162,89,255,0.15)", color: "#A259FF", border: "1px solid rgba(162,89,255,0.3)" },
  green: { bg: "rgba(0,200,120,0.15)", color: "#00C878", border: "1px solid rgba(0,200,120,0.3)" },
  teal: { bg: "rgba(0,184,212,0.15)", color: "#00B8D4", border: "1px solid rgba(0,184,212,0.3)" },
};

const Pill = ({ type, label }: { type: string; label: string }) => {
  const s = pillColors[type] || pillColors.teal;
  return (
    <span
      className="inline-block text-[0.6rem] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full"
      style={{ background: s.bg, color: s.color, border: s.border }}
    >
      {label}
    </span>
  );
};

const AfrobeatsSummer2026 = () => {
  return (
    <>
      <Helmet>
        <title>Afrobeats Summer 2026 Event Guide — CelestiFan</title>
        <meta name="description" content="Your complete Afrobeats Summer 2026 guide — Afro Nation Portugal, Davido & Friends Fest, Burna Boy, Wizkid, and more. Dates, prices, tickets." />
        <link rel="canonical" href="https://celestifan.com/blog/afrobeats-summer-2026" />
      </Helmet>

      <div className="min-h-screen bg-slate-950 text-slate-50">

        {/* ── HERO ── */}
        <section className="relative overflow-hidden pt-28 pb-20 px-5">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,77,0,0.08) 0%, transparent 70%)' }} />
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(255,77,0,0.4), rgba(255,140,0,0.4), transparent)' }} />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-4 mb-8"
            >
              <div className="h-px w-10" style={{ background: 'linear-gradient(to right, #FF4D00, #FFD93D)' }} />
              <span className="text-[0.65rem] font-bold tracking-[0.3em] uppercase" style={{ color: '#FF4D00' }}>
                CelestiFan Event Guide · Updated March 2026
              </span>
              <div className="h-px w-10" style={{ background: 'linear-gradient(to right, #FFD93D, #FF4D00)' }} />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-bold leading-tight mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(2.8rem, 7vw, 6rem)',
                background: 'linear-gradient(135deg, #ffffff 30%, #FF4D00 65%, #FFD93D 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              The Biggest<br />Afrobeats Summer.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-xl mx-auto mb-4"
              style={{
                fontFamily: "'Crimson Pro', Georgia, serif",
                fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
                color: 'rgba(255,255,255,0.5)',
              }}
            >
              June — September · Europe &amp; Beyond
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xs font-medium tracking-wide"
              style={{ color: 'rgba(255,77,0,0.7)' }}
            >
              7 confirmed events · Real dates · Real prices · Verified by CelestiFan
            </motion.p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-5 pb-24 space-y-3">

          {/* ── FLAGSHIP ── */}
          <div className="text-[0.6rem] font-bold tracking-[0.3em] uppercase text-slate-600 pt-2 pb-3">
            Flagship Event
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,77,0,0.25)',
              borderLeft: '3px solid #FF4D00',
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 p-7 md:p-8">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Pill type="hot" label="★ Must-Go" />
                  <Pill type="beach" label="Beach Festival" />
                </div>
                <h2
                  className="font-bold leading-tight mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#fff' }}
                >
                  Afro Nation Portugal 2026
                </h2>
                <p className="text-sm mb-1" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  <strong style={{ color: '#fff' }}>Wizkid · Burna Boy · Asake · Tyla · Gunna · Olamide</strong>
                </p>
                <p className="text-xs mb-6" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: "'Crimson Pro', Georgia, serif", fontSize: '1rem' }}>
                  Madumane · Focalistic · Uncle Waffles · Kehlani · Darkoo · Young Jonn + more
                </p>
                <div className="flex flex-wrap gap-x-8 gap-y-3">
                  {[
                    { k: "Dates", v: "3 – 5 July 2026" },
                    { k: "Venue", v: "Praia da Rocha Beach, Portimão" },
                    { k: "Country", v: "🇵🇹 Portugal" },
                    { k: "Age", v: "18+" },
                  ].map(({ k, v }) => (
                    <div key={k} className="flex flex-col gap-0.5">
                      <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase" style={{ color: 'rgba(255,255,255,0.22)' }}>{k}</span>
                      <span className="text-sm font-medium text-white">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-start lg:items-end justify-between gap-4">
                <div className="lg:text-right">
                  <p className="text-[0.6rem] font-bold tracking-[0.2em] uppercase mb-1" style={{ color: 'rgba(255,255,255,0.22)' }}>General Access from</p>
                  <div className="font-bold" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '3rem', color: '#FFD93D', lineHeight: 1 }}>£314</div>
                  <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.3)' }}>VIP £359 · Golden £584</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>3-Day Festival Pass</p>
                </div>
                <a
                  href="https://www.afronation.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold tracking-widest uppercase px-4 py-2 rounded transition-all duration-200"
                  style={{ border: '1px solid #FF4D00', color: '#FF4D00' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#FF4D00'; (e.currentTarget as HTMLElement).style.color = '#fff'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = '#FF4D00'; }}
                >
                  Get Tickets ↗
                </a>
              </div>
            </div>
          </motion.div>

          {/* ── MORE THIS SUMMER ── */}
          <div className="text-[0.6rem] font-bold tracking-[0.3em] uppercase text-slate-600 pt-6 pb-3">
            More This Summer
          </div>

          {/* Grid — Malta + Liverpool */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {gridEvents.map((ev, i) => (
              <motion.div
                key={ev.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="rounded-2xl p-6"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: `1px solid rgba(255,255,255,0.07)`,
                  borderLeft: `3px solid ${ev.accentColor}`,
                }}
              >
                <Pill type={ev.pillType} label={ev.pill} />
                <h3
                  className="font-bold leading-tight mt-3 mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#fff' }}
                >
                  {ev.name}
                </h3>
                <p className="text-xs mb-5" style={{ color: 'rgba(255,255,255,0.38)', fontFamily: "'Crimson Pro', Georgia, serif", fontSize: '0.95rem' }}>
                  {ev.artists}
                </p>
                <div className="flex justify-between items-end">
                  <div className="flex flex-col gap-2">
                    <div>
                      <p className="text-[0.55rem] font-bold tracking-[0.2em] uppercase" style={{ color: 'rgba(255,255,255,0.22)' }}>Date</p>
                      <p className="text-sm font-medium text-white">{ev.date}</p>
                    </div>
                    <div>
                      <p className="text-[0.55rem] font-bold tracking-[0.2em] uppercase" style={{ color: 'rgba(255,255,255,0.22)' }}>Location</p>
                      <p className="text-sm font-medium text-white">{ev.location}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[0.55rem] font-bold tracking-[0.2em] uppercase mb-1" style={{ color: 'rgba(255,255,255,0.22)' }}>Tickets</p>
                    <p className="font-bold text-lg" style={{ color: ev.accentColor, fontFamily: "'Cormorant Garamond', Georgia, serif" }}>{ev.price}</p>
                    <a href={ev.url} target="_blank" rel="noopener noreferrer" className="text-[0.55rem] uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.25)' }}>
                      afronation.com ↗
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Solo events */}
          <div className="space-y-3 pt-1">
            {soloEvents.map((ev, i) => (
              <motion.div
                key={ev.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                viewport={{ once: true }}
                className="rounded-2xl p-6"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: `1px solid rgba(255,255,255,0.07)`,
                  borderLeft: `3px solid ${ev.accentColor}`,
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                  <div className="flex-1">
                    <Pill type={ev.pillType} label={ev.pill} />
                    <h3
                      className="font-bold leading-tight mt-3 mb-1"
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: '#fff' }}
                    >
                      {ev.name}
                    </h3>
                    <p className="mb-4 text-sm" style={{ color: 'rgba(255,255,255,0.38)', fontFamily: "'Crimson Pro', Georgia, serif", fontSize: '1rem' }}>
                      {ev.desc}
                    </p>
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                      {[
                        { k: "Date", v: ev.date },
                        { k: "Venue", v: ev.venue },
                        { k: ev.extra.includes(":") ? ev.extra.split(":")[0] : "Info", v: ev.extra.includes(":") ? ev.extra.split(":")[1].trim() : ev.extra },
                        { k: "Country", v: ev.country },
                      ].map(({ k, v }) => (
                        <div key={k}>
                          <p className="text-[0.55rem] font-bold tracking-[0.2em] uppercase" style={{ color: 'rgba(255,255,255,0.22)' }}>{k}</p>
                          <p className="text-sm font-medium text-white">{v}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-3 sm:flex-shrink-0">
                    <div className="sm:text-right">
                      <p className="text-[0.55rem] font-bold tracking-[0.2em] uppercase mb-1" style={{ color: 'rgba(255,255,255,0.22)' }}>{ev.priceLabel}</p>
                      <p className="font-bold text-2xl" style={{ color: ev.accentColor, fontFamily: "'Cormorant Garamond', Georgia, serif", lineHeight: 1 }}>{ev.price}</p>
                    </div>
                    <a
                      href={ev.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold tracking-widest uppercase px-4 py-2 rounded transition-all duration-200"
                      style={{ border: `1px solid ${ev.accentColor}`, color: ev.accentColor }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = `rgba(${ev.glowColor},0.15)`; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                    >
                      Get Tickets ↗
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── LIVE UPDATES NOTICE ── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl p-6 mt-6"
            style={{
              background: 'rgba(168,85,247,0.04)',
              border: '1px solid rgba(168,85,247,0.15)',
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: 'rgba(168,85,247,0.7)' }}>
                  🔔 More Events Coming
                </p>
                <p style={{ fontFamily: "'Crimson Pro', Georgia, serif", fontSize: '1.05rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>
                  This guide is updated as new events are announced. Detty December Nigeria, Ghana, and South Africa dates are being tracked — they'll be added the moment they're confirmed. Check back or follow{" "}
                  <a href="https://x.com/celestifan_off" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'rgba(168,85,247,0.8)' }}>
                    @celestifan_off
                  </a>{" "}
                  for live updates.
                </p>
              </div>
              <div className="text-xs text-slate-600 sm:text-right sm:flex-shrink-0">
                Last updated<br />
                <span className="text-slate-400 font-medium">March 24, 2026</span>
              </div>
            </div>
          </motion.div>

          {/* ── CELESTIFAN CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl p-7 mt-3"
            style={{ background: '#FF4D00' }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
              <div>
                <p className="text-[0.6rem] font-bold tracking-[0.3em] uppercase mb-2" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  CelestiFan · Fan Rewards
                </p>
                <h3
                  className="font-bold mb-2 text-white"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}
                >
                  Earn Celeste At Every Event This Summer
                </h3>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '440px', lineHeight: 1.6 }}>
                  Stream, share, and support Afrobeats artists — every action earns real rewards on the only leaderboard that counts.
                </p>
              </div>
              <div className="sm:text-right sm:flex-shrink-0">
                <a
                  href="/"
                  className="inline-block font-bold text-xl tracking-wide"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#FFD93D' }}
                >
                  celestifan.com
                </a>
                <p className="text-[0.6rem] uppercase tracking-[0.2em] mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Take the Celesti Energy Quiz ↗
                </p>
              </div>
            </div>
          </motion.div>

          {/* Footer note */}
          <p className="text-center text-xs pt-4" style={{ color: 'rgba(255,255,255,0.15)' }}>
            Verify all dates &amp; prices at official sources before booking · #CelestiFan #Afrobeats #Summer2026
          </p>
        </div>
      </div>
    </>
  );
};

export default AfrobeatsSummer2026;