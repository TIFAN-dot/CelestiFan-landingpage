import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  const posts = [
    {
      title: "Celesti Energy – Fan Reactions",
      excerpt: "See what fans around the world are saying about their quiz results! Real ratings, real reactions, real vibes. Join hundreds who've discovered their cosmic energy.",
      date: "Live Now",
      readTime: "Ongoing",
      category: "Community",
      image: "reactions",
      link: "/blog/reactions",
      featured: true
    },
    // ── NEW POST ──────────────────────────────────────────────────────────────
    {
      title: "The Music Industry Got the Exchange Backwards",
      excerpt: "For decades, we've measured fandom by what it spends. What if the real currency was always something else entirely? Artists sell us escape. We sell them return.",
      date: "March 11, 2025",
      readTime: "8 min read",
      category: "Culture",
      image: "exchange",
      link: "/blog/exchange-backwards",
      featured: false,
      isEditorial: true, // flag for special card styling
    },
    // ─────────────────────────────────────────────────────────────────────────
    {
      title: "How to Skyrocket Your Music with Fan Campaigns",
      excerpt: "Learn how independent artists are using CelestiFan campaigns to turn loyal listeners into viral marketing engines. Discover the strategies that helped Kai Morrison gain 500K streams in two weeks.",
      date: "March 15, 2025",
      readTime: "5 min read",
      category: "Artist Tips",
      image: "campaign-guide",
      link: "#"
    },
    {
      title: "The Ultimate Fan Guide: Ranking Up Fast",
      excerpt: "Want to become a top-ranked fan for your favorite artist? This comprehensive guide covers every celeste-earning action, leaderboard strategy, and proof submission tip you need to climb to #1.",
      date: "March 10, 2025",
      readTime: "7 min read",
      category: "Fan Strategy",
      image: "fan-guide",
      link: "#"
    },
    {
      title: "Why Fan Engagement Beats Follower Counts",
      excerpt: "Social media followers are vanity metrics. What really matters? Active, passionate fans who stream, share, and show up. Here's how CelestiFan measures what truly drives music careers.",
      date: "March 5, 2025",
      readTime: "4 min read",
      category: "Industry Insights",
      image: "engagement",
      link: "#"
    },
    {
      title: "Success Story: From Bedroom Producer to Charting Artist",
      excerpt: "How Luna & The Waves mobilized 2,000 fans to push their album to #3 on indie charts. A deep dive into the campaign strategy, fan rewards, and momentum-building tactics that worked.",
      date: "February 28, 2025",
      readTime: "6 min read",
      category: "Success Stories",
      image: "success-story",
      link: "#"
    },
    {
      title: "5 Creative Campaign Ideas for Emerging Artists",
      excerpt: "Stuck on what kind of campaign to launch? Here are five battle-tested ideas: The 'Stream Sprint,' 'Share Showdown,' 'TikTok Takeover,' 'Merch Madness,' and the 'Fan Collab Challenge.'",
      date: "February 20, 2025",
      readTime: "5 min read",
      category: "Artist Tips",
      image: "campaign-ideas",
      link: "#"
    },
    {
      title: "Understanding CelestiFan's Celeste System",
      excerpt: "Not all fan actions are created equal. Breaking down how streams, shares, screenshots, and engagement are weighted in our ranking algorithm—plus pro tips to maximize your celeste.",
      date: "February 15, 2025",
      readTime: "4 min read",
      category: "Platform Guide",
      image: "celeste-system",
      link: "#"
    },
  ];

  const categories = ["All", "Culture", "Artist Tips", "Fan Strategy", "Industry Insights", "Success Stories", "Platform Guide", "Community"];

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>CelestiFan Blog — Fan Engagement, Fan Lives Matter & Music Culture</title>
        <meta
          name="description"
          content="Stories, essays, and guides from the CelestiFan community on fan engagement, fan campaigns, fan lives matter, Afrobeats culture, and building artist careers with real fans."
        />
        <link rel="canonical" href="https://celestifan.com/blog" />
        <meta property="og:title" content="CelestiFan Blog — Fan Engagement & Music Culture" />
        <meta
          property="og:description"
          content="Dive into fan engagement strategies, culture essays, and success stories from the CelestiFan community."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://celestifan.com/blog" />
        <meta property="og:image" content="https://celestifan.com/fanliveimage1.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CelestiFan Blog — Fan Engagement & Music Culture" />
        <meta
          name="twitter:description"
          content="Fan-first essays and resources on campaigns, rankings, Afrobeats, and why fan engagement beats follower counts."
        />
        <meta name="twitter:image" content="https://celestifan.com/fanliveimage1.webp" />
      </Helmet>
      {/* Hero */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-display mb-6 text-gradient animate-slide-up">
            Music Matters
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Insights, strategies, and stories from the CelestiFan community
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className={
                category === "All"
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                  : "border-border hover:border-primary/50"
              }
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Featured Post - FAN REACTIONS */}
      <section className="container mx-auto px-4 mb-12">
        <Link to={posts[0].link}>
          <Card className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all cursor-pointer group">
            <div className="grid md:grid-cols-2">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center min-h-[300px] relative overflow-hidden">
                <div className="text-center relative z-10">
                  <div className="text-8xl mb-4 animate-pulse">⭐</div>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                    Live Community Feed
                  </p>
                </div>
                <div className="absolute top-10 left-10 text-4xl opacity-20">✨</div>
                <div className="absolute bottom-10 right-10 text-4xl opacity-20">✨</div>
                <div className="absolute top-1/2 right-20 text-3xl opacity-10">⭐</div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                    Featured
                  </span>
                  <span className="inline-block px-3 py-1 bg-green-500/20 text-green-600 dark:text-green-400 rounded-full text-sm font-semibold animate-pulse">
                    🔴 Live
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {posts[0].title}
                </h2>
                <p className="text-muted-foreground mb-6">{posts[0].excerpt}</p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {posts[0].date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {posts[0].readTime}
                  </div>
                </div>
                <Button className="w-fit bg-primary hover:bg-primary/90 text-primary-foreground">
                  View Reactions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </Link>
      </section>

      {/* ── EDITORIAL SPOTLIGHT — The Exchange Article ── */}
      <section className="container mx-auto px-4 mb-12">
        <Link to={posts[1].link}>
          <Card className="overflow-hidden border-border hover:border-primary/50 transition-all cursor-pointer group relative">
            {/* Background image with overlay */}
            <div className="relative min-h-[340px] flex items-end">
              <img
                src="/images/image1.jpg"
                alt="Artist on stage after a concert"
                className="absolute inset-0 w-full h-full object-cover brightness-40 group-hover:brightness-50 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

              <div className="relative z-10 p-8 md:p-12 max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-xs font-semibold uppercase tracking-wider">
                    ✦ Editorial
                  </span>
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold">
                    Culture
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white group-hover:text-primary transition-colors leading-tight">
                  The Music Industry Got the Exchange Backwards
                </h2>

                <p className="text-gray-300 mb-6 text-base leading-relaxed">
                  For decades, we've measured fandom by what it spends. What if the real currency was always something else entirely?
                </p>

                <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    March 11, 2025
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    8 min read
                  </div>
                  <span className="text-gray-500">By Romeo · CelestiFan</span>
                </div>

                <Button className="w-fit bg-amber-500 hover:bg-amber-400 text-black font-semibold">
                  Read the Essay
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </Link>
      </section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(2).map((post) => (
            <Link
              key={post.title}
              to={post.link}
              className="block"
            >
              <Card className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all group cursor-pointer h-full">
                <div className="bg-muted h-48 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="text-4xl mb-2">📝</div>
                    <p className="text-xs">{post.category}</p>
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display text-center mb-12 text-gradient">
            Free Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 bg-background border-border hover:border-primary/50 transition-all text-center">
              <div className="text-5xl mb-4">📖</div>
              <h3 className="text-xl font-bold mb-3">Ultimate Fan Guide</h3>
              <p className="text-muted-foreground mb-6">
                Everything you need to become a top-ranked fan
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Download PDF
              </Button>
            </Card>
            <Card className="p-8 bg-background border-border hover:border-primary/50 transition-all text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Artist Playbook</h3>
              <p className="text-muted-foreground mb-6">
                Campaign strategies that actually work
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Download PDF
              </Button>
            </Card>
            <Card className="p-8 bg-background border-border hover:border-primary/50 transition-all text-center">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-3">Case Studies</h3>
              <p className="text-muted-foreground mb-6">
                Real success stories from CelestiFan users
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Download PDF
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display mb-6 text-gradient">
            Stay in the Loop
          </h2>
          <p className="text-muted-foreground mb-8">
            Get weekly music insights, platform updates, and exclusive tips delivered
            to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg bg-background border border-border focus:border-primary outline-none"
            />
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;