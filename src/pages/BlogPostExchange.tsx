import { useEffect } from "react";
import { Link } from "react-router-dom";

// ── GRADIENT PALETTE (exact match to ServicesSection) ──────────────────────
// /01  purple-500 → blue-500    #a855f7 → #3b82f6
// /02  blue-500   → cyan-500    #3b82f6 → #06b6d4
// /03  cyan-500   → emerald-500 #06b6d4 → #10b981
// /04  emerald-500→ purple-500  #10b981 → #a855f7
// ───────────────────────────────────────────────────────────────────────────

const BlogPostExchange = () => {

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Josefin+Sans:wght@300;400;600;700&display=swap";
    document.head.appendChild(link);

    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.opacity = "1";
          (e.target as HTMLElement).style.transform = "translateY(0)";
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".rs-fade").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        /* ── BASE ── */
        .rs-wrap {
          background: #080808;
          min-height: 100vh;
          color: #c8c2b8;
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 20px;
          line-height: 1.8;
        }

        /* ── GRADIENT DEFINITIONS ── */
        .g01 { background: linear-gradient(to right, #a855f7, #3b82f6); }
        .g02 { background: linear-gradient(to right, #3b82f6, #06b6d4); }
        .g03 { background: linear-gradient(to right, #06b6d4, #10b981); }
        .g04 { background: linear-gradient(to right, #10b981, #a855f7); }
        .g-full { background: linear-gradient(to right, #a855f7, #3b82f6, #06b6d4, #10b981); }

        /* gradient text helper */
        .gt01 { background: linear-gradient(to right, #a855f7, #3b82f6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .gt02 { background: linear-gradient(to right, #3b82f6, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .gt03 { background: linear-gradient(to right, #06b6d4, #10b981); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .gt04 { background: linear-gradient(to right, #10b981, #a855f7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .gt-full { background: linear-gradient(to right, #a855f7, #3b82f6, #06b6d4, #10b981); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

        /* gradient border helper — wrap element in .gb-XX then put content inside .gb-inner */
        .gb01 { background: linear-gradient(to right, #a855f7, #3b82f6); padding: 2px 0 0 0; }
        .gb02 { background: linear-gradient(to right, #3b82f6, #06b6d4); padding: 2px 0 0 0; }
        .gb03 { background: linear-gradient(to right, #06b6d4, #10b981); padding: 2px 0 0 0; }
        .gb04 { background: linear-gradient(to right, #10b981, #a855f7); padding: 2px 0 0 0; }
        .gb-inner { background: #080808; }

        /* ── BACK BAR ── */
        .rs-back { padding: 20px 40px; border-bottom: 1px solid #1a1a1a; }
        .rs-back a {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: #666; text-decoration: none;
          display: inline-flex; align-items: center; gap: 8px;
          transition: color 0.2s;
        }
        .rs-back a:hover { color: #a855f7; }

        /* ── HERO ── */
        .rs-hero {
          position: relative; width: 100%;
          height: 92vh; min-height: 560px; overflow: hidden;
        }
        .rs-hero img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          filter: brightness(0.35);
        }
        .rs-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 15%, rgba(8,8,8,0.6) 65%, #080808 100%);
        }
        .rs-hero-content {
          position: absolute; bottom: 0; left: 0; right: 0;
          padding: 0 6vw 80px; max-width: 960px;
        }
        .rs-category {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.3em; text-transform: uppercase;
          margin-bottom: 20px;
          display: flex; align-items: center; gap: 12px;
        }
        .rs-category-line {
          display: inline-block; width: 32px; height: 1px;
          background: linear-gradient(to right, #a855f7, #3b82f6);
        }
        .rs-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(40px, 6vw, 80px);
          font-weight: 600; line-height: 1.06;
          color: #f0ece6; margin: 0 0 24px;
          letter-spacing: -0.01em;
        }
        .rs-hero-sub {
          font-family: 'Crimson Pro', serif;
          font-size: clamp(17px, 2vw, 22px);
          font-weight: 300; font-style: italic;
          color: #c8c2b8; max-width: 640px;
          line-height: 1.55; margin: 0;
        }

        /* ── META ── */
        .rs-meta {
          max-width: 760px; margin: 0 auto;
          padding: 44px 24px 0;
          display: flex; align-items: center;
          justify-content: space-between;
          border-top: 1px solid #1e1e1e;
          flex-wrap: wrap; gap: 16px;
        }
        .rs-meta-left { display: flex; align-items: center; gap: 16px; }
        .rs-avatar {
          width: 48px; height: 48px; border-radius: 50%;
          overflow: hidden; border: 1px solid #2a2a2a; flex-shrink: 0;
        }
        .rs-avatar img { width: 100%; height: 100%; object-fit: cover; }
        .rs-author-name {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 12px; font-weight: 700;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: #f0ece6; margin-bottom: 3px;
        }
        .rs-author-detail {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 11px; letter-spacing: 0.1em; color: #555;
        }
        .rs-share-btn {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: #a855f7; background: transparent;
          border: 1px solid #a855f7;
          padding: 8px 20px; cursor: pointer; transition: all 0.2s;
        }
        .rs-share-btn:hover { background: #a855f7; color: #080808; }

        /* ── BODY ── */
        .rs-body { max-width: 760px; margin: 0 auto; padding: 56px 24px 100px; }
        .rs-body p { margin-bottom: 1.65em; color: #c8c2b8; }
        .rs-body em { font-style: italic; color: #f0ece6; }
        .rs-body strong { font-weight: 600; color: #f0ece6; }

        /* dropcap — /01 purple→blue */
        .rs-dropcap::first-letter {
          font-family: 'Cormorant Garamond', serif;
          font-size: 5.4em; font-weight: 600;
          float: left; line-height: 0.78;
          margin: 0.06em 0.1em 0 0;
          background: linear-gradient(to bottom, #a855f7, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ── SECTION HEADINGS with gradient number ── */
        .rs-h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 600; color: #f0ece6;
          line-height: 1.12; margin: 72px 0 28px;
          padding-top: 48px; letter-spacing: -0.01em;
          border-top: 1px solid #1e1e1e;
          display: flex; align-items: baseline; gap: 16px;
        }
        .rs-h2-num {
          font-family: 'Josefin Sans', sans-serif;
          font-size: clamp(16px, 2vw, 22px);
          font-weight: 300; flex-shrink: 0;
          letter-spacing: 0.05em;
        }
        .rs-h2-text { flex: 1; }

        /* ── PULL QUOTES — gradient top border ── */
        .rs-pull {
          margin: 56px -40px;
          padding: 48px 40px;
          border-bottom: 1px solid #1e1e1e;
        }
        .rs-pull-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(26px, 3.5vw, 38px);
          font-weight: 400; font-style: italic;
          color: #f0ece6; line-height: 1.28;
          margin: 0 0 16px;
        }
        .rs-pull-cite {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.22em; text-transform: uppercase;
        }

        /* ── FAN VOICE CARDS ── */
        .rs-voice {
          margin: 12px 0; padding: 24px 28px; background: #0e0e0e;
          border-left: 3px solid transparent;
        }
        .rs-voice-text {
          font-family: 'Crimson Pro', serif;
          font-style: italic; font-size: 20px;
          color: #f0ece6; margin: 0 0 8px;
        }
        .rs-voice-attr {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 10px; letter-spacing: 0.15em;
          text-transform: uppercase; color: #555;
        }

        /* ── BLOCKQUOTE ── */
        .rs-blockquote { margin: 36px 0; padding: 0 0 0 28px; border-left: 2px solid #2a2a2a; }
        .rs-blockquote p { font-style: italic; color: #f0ece6 !important; margin: 0 !important; }

        /* ── IMAGES ── */
        .rs-img { margin: 60px -60px; }
        .rs-img img { width: 100%; display: block; filter: brightness(0.88); }
        .rs-img figcaption {
          padding: 12px 0 0;
          font-family: 'Josefin Sans', sans-serif;
          font-size: 10px; font-weight: 400;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #555; display: flex; align-items: flex-start; gap: 8px;
        }
        .rs-img-portrait { margin: 60px auto; max-width: 460px; }
        .rs-img-quote { margin: 60px -60px; }
        .rs-img-quote img { width: 100%; display: block; }

        /* ── CTA — full brand gradient ── */
        .rs-cta {
          margin: 72px 0; padding: 56px 48px;
          background: #0e0e0e; text-align: center;
          position: relative;
        }
        .rs-cta::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(to right, #a855f7, #3b82f6, #06b6d4, #10b981);
        }
        .rs-cta-quote {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px; font-style: italic;
          color: #f0ece6; margin: 0 0 12px; line-height: 1.45;
        }
        .rs-cta-sub {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 13px; letter-spacing: 0.05em;
          color: #666; margin: 0 0 32px;
        }
        .rs-cta-btn {
          display: inline-block;
          font-family: 'Josefin Sans', sans-serif;
          font-size: 12px; font-weight: 700;
          letter-spacing: 0.22em; text-transform: uppercase;
          color: #fff;
          background: linear-gradient(to right, #a855f7, #3b82f6, #06b6d4);
          padding: 16px 44px; text-decoration: none;
          transition: opacity 0.2s, transform 0.15s;
          border: none; cursor: pointer;
        }
        .rs-cta-btn:hover { opacity: 0.85; transform: translateY(-2px); }

        /* ── CODA ── */
        .rs-coda { margin-top: 80px; padding-top: 48px; border-top: 1px solid #1e1e1e; }
        .rs-coda-rule {
          width: 40px; height: 2px; margin-bottom: 36px;
          background: linear-gradient(to right, #10b981, #a855f7);
        }
        .rs-coda p { font-style: italic; color: #666; margin-bottom: 1.4em; }
        .rs-coda-highlight { color: #f0ece6 !important; font-style: normal !important; font-weight: 600; }

        /* ── AUTHOR BIO ── */
        .rs-author-bio {
          margin-top: 64px; display: flex; align-items: center;
          gap: 24px; padding: 32px 0;
          border-top: 1px solid #1e1e1e; border-bottom: 1px solid #1e1e1e;
        }
        .rs-bio-photo {
          width: 72px; height: 72px; border-radius: 50%;
          overflow: hidden; flex-shrink: 0; border: 1px solid #2a2a2a;
        }
        .rs-bio-photo img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(20%); }
        .rs-bio-name {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 12px; font-weight: 700;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: #f0ece6; margin-bottom: 6px;
        }
        .rs-bio-desc { font-style: italic; font-size: 17px; color: #555; margin: 0; }

        /* ── FOOTER ── */
        .rs-footer { text-align: center; padding: 48px 24px 80px; border-top: 1px solid #141414; }
        .rs-footer-label {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 10px; letter-spacing: 0.28em;
          text-transform: uppercase; color: #444; margin-bottom: 20px;
        }
        .rs-socials { display: flex; justify-content: center; gap: 28px; }
        .rs-socials a {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          text-decoration: none; transition: opacity 0.2s;
        }
        .rs-socials a:hover { opacity: 0.7; }

        /* ── FADE IN ── */
        .rs-fade {
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 860px) {
          .rs-img, .rs-img-quote { margin-left: -24px; margin-right: -24px; }
          .rs-pull { margin-left: 0; margin-right: 0; }
          .rs-back { padding: 16px 24px; }
        }
        @media (max-width: 600px) {
          .rs-hero-content { padding: 0 20px 52px; }
          .rs-body { padding: 40px 20px 72px; }
          .rs-cta { padding: 36px 20px; }
        }
      `}</style>

      <div className="rs-wrap">

        {/* BACK */}
        <div className="rs-back">
          <Link to="/blog">← Back to Blog</Link>
        </div>

        {/* ── HERO ── */}
        <section className="rs-hero">
          <img src="/image1.png" alt="Lone artist at the edge of a concert stage, single spotlight, empty arena after the show" />
          <div className="rs-hero-overlay" />
          <div className="rs-hero-content">
            {/* /01 purple→blue */}
            <div className="rs-category">
              <span className="rs-category-line" />
              <span className="gt01">Culture &nbsp;·&nbsp; Fan Economy &nbsp;·&nbsp; 8 min read</span>
            </div>
            <h1 className="rs-hero-title">The Music Industry Got the Exchange Backwards</h1>
            <p className="rs-hero-sub">For decades, we've measured fandom by what it spends. What if the real currency was always something else entirely?</p>
          </div>
        </section>

        {/* META */}
        <div className="rs-meta">
          <div className="rs-meta-left">
            <div className="rs-avatar">
              <img src="/image6.png" alt="Romeo, Founder CelestiFan" />
            </div>
            <div>
              <div className="rs-author-name">Romeo · CelestiFan</div>
              <div className="rs-author-detail">Music Culture &nbsp;·&nbsp; March 2025 &nbsp;·&nbsp; 8 min read</div>
            </div>
          </div>
          <button className="rs-share-btn">Share ↗</button>
        </div>

        {/* ── ARTICLE ── */}
        <article className="rs-body">

          {/* OPENING — /01 purple→blue dropcap */}
          <p className="rs-dropcap rs-fade">
            There is a moment — if you've ever been close enough to live music to feel it — that no one talks about. Not the drop. Not the crowd surge. Not the encore.
          </p>
          <p className="rs-fade">
            The moment <em>after</em> the encore, when the lights come up ugly and fluorescent, and the artist is still standing at the edge of the stage. The crowd is filing out. The adrenaline is already metabolizing into something emptier. And for one suspended second, the artist just… stands there. Looking at the space where 20,000 people used to be.
          </p>
          <p className="rs-fade">What are they looking for?</p>
          <p className="rs-fade">
            Ask any tour manager, any road crew veteran, any artist who has sold out arenas and still can't sleep before 4am — and if they're honest, they'll tell you the same thing. The artist isn't looking for validation. They already got that. They're looking for <strong>proof that it landed</strong>. Proof that the thing they made in a studio at midnight actually traveled through a speaker into someone's chest and rearranged something permanent.
          </p>
          <p className="rs-fade">
            Streams don't tell you that. Sales don't tell you that. A sold-out show doesn't tell you that. And the music industry — for all its disruption and reinvention — has never once built a system to tell them that.
          </p>

          {/* IMAGE 2 */}
          <figure className="rs-img rs-fade">
            <img src="/image2.png" alt="Music streaming analytics dashboard on a dark screen — cold data representing the hollow metrics of the modern music industry" />
            <figcaption>
              <span style={{ background: "linear-gradient(to right,#a855f7,#3b82f6)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>▲</span>
              &nbsp;The industry built the most sophisticated measurement apparatus in music history. And measured the wrong thing entirely.
            </figcaption>
          </figure>

          {/* SECTION /01 — purple→blue */}
          <h2 className="rs-h2 rs-fade">
            <span className="rs-h2-num gt01">/01</span>
            <span className="rs-h2-text">The Billion-Dollar Miscalculation</span>
          </h2>
          <p className="rs-fade">When the streaming era rewrote the music business, it promised artists a new kind of connection. Direct. Frictionless. Global. No gatekeepers between a 19-year-old in Lagos and a 19-year-old in London, both discovering the same record on the same night.</p>
          <p className="rs-fade">That promise was real. But it came with a cost that took years to fully surface.</p>
          <p className="rs-fade">By reducing the fan relationship to a data point — streams, saves, monthly listeners — the industry built the most sophisticated measurement apparatus in the history of music. And in doing so, it accidentally quantified the wrong thing entirely.</p>
          <p className="rs-fade">It measured <em>consumption</em>. It had no language for <em>devotion</em>.</p>
          <p className="rs-fade">Devotion is the girl in Abuja who played a Burna Boy record on loop for six hours the night her father died, and now can't hear that song without feeling like she's being held. Devotion is the kid in London who learned to play guitar because he heard Fela Kuti for the first time at 14 and understood that music was a moral argument.</p>
          <p className="rs-fade">No algorithm captures that. No stream count reflects it. And the artist will very likely never know it happened.</p>
          <p className="rs-fade">This is the miscalculation. Not financial. <strong>Spiritual.</strong></p>

          {/* /01 pull quote — purple→blue */}
          <div className="gb01 rs-pull rs-fade">
            <div className="gb-inner" style={{ padding: "48px 40px" }}>
              <p className="rs-pull-text">"The industry measured consumption. It had no language for devotion."</p>
              <span className="rs-pull-cite gt01">Romeo &nbsp;·&nbsp; CelestiFan</span>
            </div>
          </div>

          {/* SECTION /02 — blue→cyan */}
          <h2 className="rs-h2 rs-fade">
            <span className="rs-h2-num gt02">/02</span>
            <span className="rs-h2-text">What Fans Actually Carry</span>
          </h2>
          <p className="rs-fade">In 2003, a young Kanye West superfan in Chicago named Marcus drove four hours to a record signing, waited six hours in line, and when he finally reached the table, couldn't think of a single word to say. He handed over his album. Kanye signed it. And Marcus drove four hours home in silence, the signed record on the passenger seat, feeling something he still can't fully name.</p>
          <p className="rs-fade">That story isn't unique. Every serious music fan has a version of it.</p>
          <p className="rs-fade">The point isn't the autograph. The point is what Marcus was trying to hand over and had no vessel for. He wanted to make the exchange <em>visible</em>. He wanted the artist to know: <em>this didn't just enter my ears. It entered my life.</em></p>
          <p className="rs-fade">This is what fans carry. Not money — though they spend that too. They carry <strong>memory</strong>. They carry <strong>transformation</strong>. They carry the specific coordinates of the moment a song found them and the person they were before it and the person they became after.</p>
          <p className="rs-fade">And they have nowhere to put it.</p>

          {/* IMAGE 3 */}
          <figure className="rs-img-quote rs-fade">
            <img src="/image3.png" alt="Pull quote — The artist makes the sound. The fan makes it mean something." />
          </figure>

          {/* SECTION /02 pull quote — blue→cyan */}
          <div className="gb02 rs-pull rs-fade">
            <div className="gb-inner" style={{ padding: "48px 40px" }}>
              <p className="rs-pull-text">"If your favorite artist walked up to you tomorrow — backstage, no cameras — and asked what you'd sell them, what would you say?"</p>
              <span className="rs-pull-cite gt02">Romeo &nbsp;·&nbsp; CelestiFan</span>
            </div>
          </div>

          <p className="rs-fade">Not what you'd buy. Not what you'd ask for. What you'd <em>give</em>.</p>
          <p className="rs-fade">I put this question to people who love music the way other people love oxygen. The answers were not what I expected.</p>

          {/* Fan voices — /02 blue→cyan left border */}
          <div className="rs-voice rs-fade" style={{ borderLeftColor: "#3b82f6" }}>
            <p className="rs-voice-text">"He deserves to hear the thing his music created. That beat exists because of him."</p>
            <span className="rs-voice-attr">Producer, Lagos · would sell Wizkid the first beat he ever made</span>
          </div>
          <div className="rs-voice rs-fade" style={{ borderLeftColor: "#06b6d4" }}>
            <p className="rs-voice-text">"She should know she was there. She just didn't know she was invited."</p>
            <span className="rs-voice-attr">Student, Accra · would sell Amaarae a graduation night photograph</span>
          </div>
          <div className="rs-voice rs-fade" style={{ borderLeftColor: "#10b981" }}>
            <p className="rs-voice-text">"You were right."</p>
            <span className="rs-voice-attr">Man, London (late 40s) · would sell Fela Kuti a single sentence</span>
          </div>

          <p className="rs-fade" style={{ marginTop: "2em" }}>Every answer had the same architecture underneath it: <em>you gave me something, and I want you to know what it became.</em></p>

          {/* IMAGE 4 */}
          <figure className="rs-img rs-fade">
            <img src="/image4.png" alt="Concert crowd from behind at an Afrobeats show — thousands of hands raised toward stage lights" />
            <figcaption>
              <span style={{ background: "linear-gradient(to right,#3b82f6,#06b6d4)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>▲</span>
              &nbsp;Afrobeats built one of the most passionate global fan communities in contemporary music. Their role in the story remains invisible in the data.
            </figcaption>
          </figure>

          {/* SECTION /03 — cyan→emerald */}
          <h2 className="rs-h2 rs-fade">
            <span className="rs-h2-num gt03">/03</span>
            <span className="rs-h2-text">The Industry Built the Stage. Nobody Built the Bridge.</span>
          </h2>
          <p className="rs-fade">The music business is very good at building stages. It is less good — historically, structurally, almost proudly — at building the thing that runs in the other direction.</p>
          <p className="rs-fade">Streaming platforms are consumption engines. Social media is asymmetric by design — artists talk, fans react. Merch stores monetize loyalty without registering it. Concert ticketing treats fans as a revenue category.</p>
          <p className="rs-fade">None of it asks: <em>what has this music meant to you?</em> None of it creates a space where that answer becomes something the artist can actually receive.</p>
          <p className="rs-fade">The stage is magnificent. <strong>The bridge doesn't exist.</strong></p>

          {/* /03 pull quote — cyan→emerald */}
          <div className="gb03 rs-pull rs-fade">
            <div className="gb-inner" style={{ padding: "48px 40px" }}>
              <p className="rs-pull-text">"Artists sell us escape. We sell them return."</p>
              <span className="rs-pull-cite gt03">Romeo &nbsp;·&nbsp; CelestiFan</span>
            </div>
          </div>

          {/* SECTION /03 cont — Afrobeats */}
          <h2 className="rs-h2 rs-fade">
            <span className="rs-h2-num gt03">/03</span>
            <span className="rs-h2-text">Afrobeats and the Economy of Proof</span>
          </h2>
          <p className="rs-fade">When Wizkid sold out Madison Square Garden, when Burna Boy headlined Wembley, when Rema's "Calm Down" became one of the most-streamed songs on the planet — those weren't just commercial milestones. They were proof-of-culture moments. Something born in Lagos moved the entire world.</p>
          <p className="rs-fade">But the fans who built that? The ones in Surulere who had the records before anyone else, the diaspora kids in London and Toronto and Atlanta who pushed those songs into playlists and group chats and car speakers? They don't appear anywhere in the data. Their role in the story is <strong>invisible</strong>.</p>
          <p className="rs-fade">The music traveled. The devotion that carried it went unrecorded. That is both a cultural injustice and an enormous missed opportunity.</p>

          {/* SECTION /04 — emerald→purple */}
          <h2 className="rs-h2 rs-fade">
            <span className="rs-h2-num gt04">/04</span>
            <span className="rs-h2-text">I'd Sell Them Silence.</span>
          </h2>
          <p className="rs-fade">Not the absence of sound. The specific quality of quiet that exists in a room right after extraordinary music stops. The kind that proves the music was real — because something in the air is still vibrating, even when the notes are gone.</p>

          {/* IMAGE 5 */}
          <figure className="rs-img rs-img-portrait rs-fade">
            <img src="/image5.png" alt="Small matte black box on a dark surface with a handwritten note — the silence concept" />
            <figcaption>
              <span style={{ background: "linear-gradient(to right,#10b981,#a855f7)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>▲</span>
              &nbsp;A matte black box. A USB drive. Three minutes of engineered quiet. And a handwritten note.
            </figcaption>
          </figure>

          <p className="rs-fade">I'd put it in a small matte black box. A USB drive with nothing on it — just three minutes of engineered quiet, captured and preserved. And a handwritten note on the lid:</p>

          <div className="rs-blockquote rs-fade">
            <p>"Play this after the encore. When everyone's gone. When the adrenaline crashes. Let it remind you why you started — not for the streams, not for the metrics. For this."</p>
          </div>

          <p className="rs-fade">Because that is what fans have always been offering, in the dark, without a mechanism to deliver it.</p>

          {/* /04 pull quote — emerald→purple */}
          <div className="gb04 rs-pull rs-fade">
            <div className="gb-inner" style={{ padding: "48px 40px" }}>
              <p className="rs-pull-text">"The artist makes the sound. The fan makes it mean something."</p>
              <span className="rs-pull-cite gt04">Romeo &nbsp;·&nbsp; CelestiFan</span>
            </div>
          </div>

          <p className="rs-fade">That is the exchange. It has always been the exchange. The industry just built infrastructure for only one direction of it.</p>

          {/* CTA — full brand gradient */}
          <div className="rs-cta rs-fade">
            <p className="rs-cta-quote">"What if fans had somewhere real to put what they carry?"</p>
            <p className="rs-cta-sub">CelestiFan is building the bridge the industry forgot. Not passive fandom — active, reciprocal proof that the music landed.</p>
            <Link to="/#waitlist" className="rs-cta-btn">Join the CelestiFan Waitlist →</Link>
          </div>

          {/* CODA */}
          <div className="rs-coda rs-fade">
            <div className="rs-coda-rule" />
            <p>There's a reason music fans drive four hours, wait six hours, lose sleep, spend money they can't fully afford.</p>
            <p>It's not the artist. Not exactly.</p>
            <p>It's the version of themselves that the music found — the one that existed in the specific moment a song arrived and changed the frequency of the room. They're trying to return to that person. Or simply say: <span style={{ color: "#f0ece6" }}>this happened. I was there. You were there. Let's acknowledge what passed between us.</span></p>
            <p>That ghost — the one we're all chasing through playlists and concert tickets and late-night replays — is the truest thing about the relationship between music and the people who love it.</p>
            <p className="rs-coda-highlight" style={{
              background: "linear-gradient(to right, #a855f7, #3b82f6, #06b6d4, #10b981)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>It deserves a better home than a stream count.</p>
            <p><span style={{ color: "#f0ece6" }}>And if you're reading this at 2am on your phone — yeah, me too. Let's not pretend we're not both chasing the same ghost.</span></p>
          </div>

          {/* AUTHOR BIO */}
          <div className="rs-author-bio rs-fade">
            <div className="rs-bio-photo">
              <img src="/image6.png" alt="Romeo, Founder of CelestiFan" />
            </div>
            <div>
              <div className="rs-bio-name">Romeo · Founder, CelestiFan</div>
              <p className="rs-bio-desc">Building the space where fans and artists finally meet in the middle.</p>
            </div>
          </div>

        </article>

        {/* FOOTER */}
        <div className="rs-footer">
          <p className="rs-footer-label">Share this story</p>
          <div className="rs-socials">
            <a href="#" className="gt01">Instagram</a>
            <a href="#" className="gt02">Twitter / X</a>
            <a href="#" className="gt03">TikTok</a>
            <a href="https://celestifan.com" className="gt04">celestifan.com</a>
          </div>
        </div>

      </div>
    </>
  );
};

export default BlogPostExchange;