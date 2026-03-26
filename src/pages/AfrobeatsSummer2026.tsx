import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const CANONICAL = "https://celestifan.com/blog/afrobeats-summer-2026";
const OG_IMAGE = "https://celestifan.com/fanliveimage1.webp";
const DESCRIPTION =
  "Your complete Afrobeats Summer 2026 guide. Afro Nation Portugal, Davido & Friends Fest, Burna Boy at Milton Keynes, Wizkid at Dreamland, and more. Confirmed dates, ticket prices, and lineups.";

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Afrobeats Summer 2026 — Complete Event Guide",
  description: DESCRIPTION,
  url: CANONICAL,
  datePublished: "2026-03-24",
  image: OG_IMAGE,
  author: {
    "@type": "Organization",
    name: "CelestiFan",
  },
  publisher: {
    "@type": "Organization",
    name: "CelestiFan",
    url: "https://celestifan.com/",
  },
};

const AfrobeatsSummer2026 = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-slate-950 text-slate-50">
      <Helmet>
        <title>Afrobeats Summer 2026 — Complete Event Guide | CelestiFan</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={CANONICAL} />
        <meta
          property="og:title"
          content="Afrobeats Summer 2026 — Complete Event Guide | CelestiFan"
        />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Afrobeats Summer 2026 — Complete Event Guide | CelestiFan"
        />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
        />
      </Helmet>

      <article className="max-w-3xl mx-auto space-y-6 text-slate-300">
        <Link
          to="/blog"
          className="text-primary text-sm font-medium inline-block hover:underline"
        >
          ← Back to Blog
        </Link>
        <h1 className="font-display text-4xl md:text-5xl text-gradient">
          Afrobeats Summer 2026 — Complete Event Guide
        </h1>
        <p className="text-muted-foreground text-sm">Published March 24, 2026 · Culture</p>
        <p className="leading-relaxed">{DESCRIPTION}</p>
        <p className="text-slate-400 text-sm leading-relaxed">
          Always confirm dates, prices, and lineups on official promoter and venue pages before you
          travel or buy tickets.
        </p>
        <h2 className="text-2xl font-semibold text-slate-100 pt-4">
          Featured festivals &amp; shows
        </h2>
        <ul className="list-disc pl-6 space-y-2 pb-8">
          <li>Afro Nation Portugal</li>
          <li>Davido &amp; Friends Fest</li>
          <li>Burna Boy at Milton Keynes</li>
          <li>Wizkid at Dreamland</li>
        </ul>
      </article>
    </div>
  );
};

export default AfrobeatsSummer2026;
