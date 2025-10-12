import { ArrowRight, TrendingUp, Trophy, Music, Zap, Users, BarChart3, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Home = () => {
  const stats = [
    { label: "Active Fans", value: "50K+", icon: Users },
    { label: "Artists", value: "1.2K+", icon: Music },
    { label: "Campaigns", value: "500+", icon: Zap },
    { label: "Total Streams", value: "10M+", icon: TrendingUp },
  ];

  const howItWorks = [
    {
      icon: BarChart3,
      title: "Track Fan Power",
      description: "Real-time insights on your most loyal listeners and supporters",
    },
    {
      icon: Trophy,
      title: "Climb Leaderboards",
      description: "Earn points for streams, shares, and engagement activities",
    },
    {
      icon: Music,
      title: "Unlock Epic Moments",
      description: "Access exclusive content and direct artist interactions",
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "Launch Campaigns",
      description: "Create challenges that drive streams and build momentum",
    },
    {
      icon: Trophy,
      title: "Prove Your Fandom",
      description: "Upload screenshots to verify support and earn rewards",
    },
    {
      icon: BarChart3,
      title: "Shine Bright",
      description: "Top the leaderboards and get recognized by artists",
    },
    {
      icon: MessageCircle,
      title: "Connect Directly",
      description: "Chat with artists and join exclusive communities",
    },
  ];

  const testimonials = [
    {
      quote: "CelestiFan got my song trending! My fans are incredible.",
      author: "Mia Chen",
      role: "Independent Artist",
    },
    {
      quote: "Finally, my streams matter! I'm #3 for my favorite artist.",
      author: "Jordan Blake",
      role: "Top Fan",
    },
    {
      quote: "This platform changed how I connect with my audience.",
      author: "DJ Pulse",
      role: "Electronic Producer",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-[100px] animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-[120px] animate-float" style={{ animationDelay: "1s" }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display mb-6 animate-slide-up">
            <span className="text-gradient">Amplify Artists.</span>
            <br />
            <span className="text-gradient">Ignite Fandom.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            The ultimate platform where fans fuel music breakthroughs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button size="lg" className="bg-gradient-neon hover:opacity-90 text-white font-semibold animate-glow text-lg px-8">
              Start as an Artist
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8">
              Join as a Fan
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={stat.label} className="animate-slide-up" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-display text-center mb-4 text-gradient">
          How It Works
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Three simple steps to revolutionize your music journey
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {howItWorks.map((item, index) => (
            <Card key={item.title} className="p-8 bg-card border-border hover:border-primary/50 transition-all hover:scale-105">
              <div className="w-16 h-16 rounded-2xl bg-gradient-neon flex items-center justify-center mb-6 animate-float">
                <item.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Why CelestiFan */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display mb-6 text-gradient">
              Why CelestiFan?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Your streams spark careers. Your shares build legends. Join a music
              revolution where every action counts.
            </p>
            
            {/* Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 bg-background border-border hover:border-primary/50 transition-all">
                  <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-display text-center mb-12 text-gradient">
          Quick Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6 bg-card border-border hover:border-primary/50 transition-all group cursor-pointer">
              <feature.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display mb-6 text-gradient">
            Ready to Change Music?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of artists and fans building the future of music together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg bg-background border border-border focus:border-primary outline-none"
            />
            <Button size="lg" className="bg-gradient-neon hover:opacity-90 text-white font-semibold">
              Join Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
