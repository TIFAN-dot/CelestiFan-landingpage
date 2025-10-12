import { Zap, BarChart3, MessageCircle, Trophy, Upload, Crown, Music, Smartphone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Features = () => {
  const artistFeatures = [
    {
      icon: Zap,
      title: "Campaigns That Pop",
      description: "Create viral challenges like '1000 streams in a week' or 'Share to unlock'. Set goals, track progress in real-time, and watch your momentum explode.",
      benefits: ["Custom challenge creation", "Real-time tracking", "Auto rewards", "Viral mechanics"],
    },
    {
      icon: BarChart3,
      title: "Fan Insights Dashboard",
      description: "See who your superfans are with detailed analytics on top listeners, shares, and engagement. Know exactly who's driving your growth.",
      benefits: ["Top listener rankings", "Geographic insights", "Engagement trends", "Export reports"],
    },
    {
      icon: MessageCircle,
      title: "Direct Fan Chats",
      description: "Message your most loyal supporters directly. Build relationships that go beyond the music and turn fans into lifelong advocates.",
      benefits: ["Private messaging", "Group chats", "Exclusive announcements", "Fan appreciation"],
    },
  ];

  const fanFeatures = [
    {
      icon: Trophy,
      title: "Rank Up System",
      description: "Every stream, share, and shoutout earns you points. Climb the leaderboard to become a top fan and unlock exclusive perks.",
      benefits: ["Points for all actions", "Weekly/monthly rankings", "Level progression", "Special badges"],
    },
    {
      icon: Upload,
      title: "Proof Submission",
      description: "Upload screenshots of your streams, shares, and support to verify your fandom. Turn receipts into rewards and recognition.",
      benefits: ["Screenshot verification", "Multiple platform support", "Instant point awards", "Activity history"],
    },
    {
      icon: Crown,
      title: "Leaderboard Glory",
      description: "See your name in lights on artist leaderboards. Top fans get recognition, exclusive content, and direct artist access.",
      benefits: ["Public recognition", "Exclusive rewards", "Artist shoutouts", "VIP access"],
    },
  ];

  const integrations = [
    { name: "Spotify", icon: Music },
    { name: "Apple Music", icon: Music },
    { name: "TikTok", icon: Smartphone },
    { name: "Instagram", icon: Smartphone },
    { name: "YouTube", icon: Smartphone },
    { name: "Twitter/X", icon: Smartphone },
  ];

  const sampleLeaderboard = [
    { rank: 1, name: "Jordan Blake", points: 15420, badge: "🥇" },
    { rank: 2, name: "Taylor Swift", points: 14890, badge: "🥈" },
    { rank: 3, name: "Alex Rivera", points: 13760, badge: "🥉" },
    { rank: 4, name: "Sam Chen", points: 12350, badge: "⭐" },
    { rank: 5, name: "Casey Mills", points: 11920, badge: "⭐" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-display mb-6 text-gradient animate-slide-up">
            Features That Fuel
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Everything you need to amplify artists and ignite fandom
          </p>
        </div>
      </section>

      {/* For Artists */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-display mb-4 text-gradient">
          For Artists
        </h2>
        <p className="text-muted-foreground mb-12 text-lg">
          Tools to understand, engage, and reward your biggest supporters
        </p>
        
        <div className="space-y-8">
          {artistFeatures.map((feature) => (
            <Card key={feature.title} className="p-8 bg-card border-border hover:border-primary/50 transition-all">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-neon flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Dashboard Mockup */}
        <Card className="mt-12 p-8 bg-muted/30 border-border">
          <div className="text-center mb-4">
            <BarChart3 className="h-16 w-16 mx-auto mb-2 text-primary opacity-50" />
            <p className="text-muted-foreground">Artist Dashboard Mockup</p>
            <p className="text-sm text-muted-foreground">View fan insights, campaign performance, and more</p>
          </div>
        </Card>
      </section>

      {/* For Fans */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display mb-4 text-gradient">
            For Fans
          </h2>
          <p className="text-muted-foreground mb-12 text-lg">
            Show your support, earn recognition, and connect with your favorite artists
          </p>
          
          <div className="space-y-8">
            {fanFeatures.map((feature) => (
              <Card key={feature.title} className="p-8 bg-background border-border hover:border-primary/50 transition-all">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-neon flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">What You Get:</h4>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Sample Leaderboard */}
          <Card className="mt-12 p-8 bg-background border-border">
            <h3 className="text-2xl font-bold mb-6 text-center">Sample Leaderboard</h3>
            <div className="max-w-2xl mx-auto">
              <div className="space-y-3">
                {sampleLeaderboard.map((entry) => (
                  <div
                    key={entry.rank}
                    className={`flex items-center justify-between p-4 rounded-lg ${
                      entry.rank <= 3 ? "bg-gradient-neon/10 border border-primary/30" : "bg-muted"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{entry.badge}</span>
                      <div>
                        <div className="font-semibold">{entry.name}</div>
                        <div className="text-sm text-muted-foreground">Rank #{entry.rank}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg text-primary">{entry.points.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">points</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-display text-center mb-6 text-gradient">
          Seamless Integrations
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
          Sync with your favorite platforms for automatic tracking and verification
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
          {integrations.map((integration) => (
            <Card key={integration.name} className="p-6 bg-card border-border hover:border-primary/50 transition-all text-center group cursor-pointer">
              <integration.icon className="h-12 w-12 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
              <p className="font-semibold text-sm">{integration.name}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">Connect once, track everywhere</p>
          <Button size="lg" className="bg-gradient-neon hover:opacity-90 text-white font-semibold">
            Unlock All Features with Pro
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Features;
