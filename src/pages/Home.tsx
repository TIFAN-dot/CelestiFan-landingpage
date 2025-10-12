import { ArrowRight, TrendingUp, Trophy, Music, Zap, Users, BarChart3, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Mockup from "@/components/ui/mockup";

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
      description: "As an artist, you're in control. Design and launch dynamic campaigns that mobilize your fanbase. Create exciting challenges, set streaming goals, and offer unique rewards to build unstoppable momentum for your new releases. Watch in real-time as your fans rally to support your music, driving streams and expanding your reach organically. It's your vision, your music, your movement.",
      imageUrl: "https://cdn.dribbble.com/userupload/4022879/file/original-27a92213d629009183355b38f8312065.png?resize=1024x768",
    },
    {
      icon: Trophy,
      title: "Prove Your Fandom",
      description: "Your support is more than just a number. With CelestiFan, you can prove your dedication by uploading screenshots of your streams, shares, and purchases. This tangible proof of your fandom earns you points, unlocks exclusive content, and gets you noticed by your favorite artists. It's a direct way to show your impact and be rewarded for your loyalty in a way that truly matters.",
      imageUrl: "https://i.pinimg.com/originals/1b/27/6f/1b276f923b37d45748f70d519b736239.png",
    },
    {
      icon: BarChart3,
      title: "Shine Bright",
      description: "Rise through the ranks and make your mark. Our dynamic leaderboards track real-time fan engagement, showcasing the most dedicated supporters for each artist. Compete with other fans, climb to the top, and gain recognition for your unwavering passion. This is your chance to shine bright, get noticed by artists, and become a legendary supporter in your favorite music community.",
      imageUrl: "https://cdn.dribbble.com/users/38553/screenshots/1969240/01-leaderboard_2x.png",
    },
    {
      icon: MessageCircle,
      title: "Connect Directly",
      description: "Break down the barriers between artist and fan. CelestiFan offers exclusive chat rooms and communities where you can connect directly with the artists you admire. Get a behind-the-scenes look at their creative process, ask questions in intimate Q&A sessions, and join a community of like-minded fans. This is more than just a platform; it's a place to build genuine connections.",
      imageUrl: "https://i.pinimg.com/originals/a4/43/61/a4436153965f335b2b2d13149c4d9b62.png",
    },
  ];
  
  const handleWaitlistClick = () => {
    const section = document.getElementById('waitlist-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
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
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg px-8" onClick={handleWaitlistClick}>
              Start as an Artist
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8" onClick={handleWaitlistClick}>
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
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6 animate-float">
                <item.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Why CelestiFan Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display text-center mb-12 text-gradient">
            Why CelestiFan?
          </h2>
          <div className="space-y-20">
            {features.map((feature, index) => (
              <div key={feature.title} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`flex justify-center ${index % 2 === 0 ? 'lg:order-last lg:justify-end' : 'lg:order-first lg:justify-start'}`}>
                  <Mockup imageUrl={feature.imageUrl} />
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-3xl font-bold">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-lg">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="waitlist-section" className="py-20">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display mb-6 text-gradient">
            Join the Waitlist
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be the first to know when CelestiFan launches. Join thousands of artists and fans building the future of music together.
          </p>
          <div className="flex flex-col gap-4 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Enter your name"
              className="px-6 py-3 rounded-lg bg-background border border-border focus:border-primary outline-none"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-lg bg-background border border-border focus:border-primary outline-none"
            />
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              Join the Waitlist
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
