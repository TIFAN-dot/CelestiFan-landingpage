import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const posts = [
    {
      title: "How to Skyrocket Your Music with Fan Campaigns",
      excerpt: "Learn how independent artists are using CelestiFan campaigns to turn loyal listeners into viral marketing engines. Discover the strategies that helped Kai Morrison gain 500K streams in two weeks.",
      date: "March 15, 2025",
      readTime: "5 min read",
      category: "Artist Tips",
      image: "campaign-guide",
    },
    {
      title: "The Ultimate Fan Guide: Ranking Up Fast",
      excerpt: "Want to become a top-ranked fan for your favorite artist? This comprehensive guide covers every celeste-earning action, leaderboard strategy, and proof submission tip you need to climb to #1.",
      date: "March 10, 2025",
      readTime: "7 min read",
      category: "Fan Strategy",
      image: "fan-guide",
    },
    {
      title: "Why Fan Engagement Beats Follower Counts",
      excerpt: "Social media followers are vanity metrics. What really matters? Active, passionate fans who stream, share, and show up. Here's how CelestiFan measures what truly drives music careers.",
      date: "March 5, 2025",
      readTime: "4 min read",
      category: "Industry Insights",
      image: "engagement",
    },
    {
      title: "Success Story: From Bedroom Producer to Charting Artist",
      excerpt: "How Luna & The Waves mobilized 2,000 fans to push their album to #3 on indie charts. A deep dive into the campaign strategy, fan rewards, and momentum-building tactics that worked.",
      date: "February 28, 2025",
      readTime: "6 min read",
      category: "Success Stories",
      image: "success-story",
    },
    {
      title: "5 Creative Campaign Ideas for Emerging Artists",
      excerpt: "Stuck on what kind of campaign to launch? Here are five battle-tested ideas: The 'Stream Sprint,' 'Share Showdown,' 'TikTok Takeover,' 'Merch Madness,' and the 'Fan Collab Challenge.'",
      date: "February 20, 2025",
      readTime: "5 min read",
      category: "Artist Tips",
      image: "campaign-ideas",
    },
    {
      title: "Understanding CelestiFan's Celeste System",
      excerpt: "Not all fan actions are created equal. Breaking down how streams, shares, screenshots, and engagement are weighted in our ranking algorithm—plus pro tips to maximize your celeste.",
      date: "February 15, 2025",
      readTime: "4 min read",
      category: "Platform Guide",
      image: "celeste-system",
    },
  ];

  const categories = ["All", "Artist Tips", "Fan Strategy", "Industry Insights", "Success Stories", "Platform Guide"];

  return (
    <div className="min-h-screen pt-20">
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

      {/* Featured Post */}
      <section className="container mx-auto px-4 mb-20">
        <Card className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all">
          <div className="grid md:grid-cols-2">
            <div className="bg-muted flex items-center justify-center min-h-[300px]">
              <div className="text-center text-muted-foreground">
                <div className="text-6xl mb-2">🎵</div>
                <p className="text-sm">Featured: Campaign Strategy</p>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-4 w-fit">
                Featured
              </span>
              <h2 className="text-3xl font-bold mb-4">{posts[0].title}</h2>
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
                Read More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post) => (
            <Card key={post.title} className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all group cursor-pointer">
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
