import { ArrowRight, TrendingUp, Trophy, Music, Zap, Users, BarChart3, MessageCircle, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Home = () => {
  const [formData, setFormData] = useState({ name: '', email: '', userType: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

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
      description: "Earn celeste for streams, shares, and engagement activities",
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
      imageUrl: "/mockups/campaign.png",
    },
    {
      icon: Trophy,
      title: "Prove Your Fandom",
      description: "Your support is more than just a number. With CelestiFan, you can prove your dedication by uploading screenshots of your streams, shares, and purchases. This tangible proof of your fandom earns you celeste, unlocks exclusive content, and gets you noticed by your favorite artists. It's a direct way to show your impact and be rewarded for your loyalty in a way that truly matters.",
      imageUrl: "/mockups/proof.png",
    },
    {
      icon: BarChart3,
      title: "Shine Bright",
      description: "Rise through the ranks and make your mark. Our dynamic leaderboards track real-time fan engagement, showcasing the most dedicated supporters for each artist. Compete with other fans, climb to the top, and gain recognition for your unwavering passion. This is your chance to shine bright, get noticed by artists, and become a legendary supporter in your favorite music community.",
      imageUrl: "/mockups/fan.png",
    },
    {
      icon: MessageCircle,
      title: "Connect Directly",
      description: "Break down the barriers between artist and fan. CelestiFan offers exclusive chat rooms and communities where you can connect directly with the artists you admire. Get a behind-the-scenes look at their creative process, ask questions in intimate Q&A sessions, and join a community of like-minded fans. This is more than just a platform; it's a place to build genuine connections.",
      imageUrl: "/mockups/contact.png",
    },
  ];

  // Dynamic waitlist handler with user type
  const handleWaitlistClick = (type: 'artist' | 'fan') => {
    setFormData(prev => ({ ...prev, userType: type }));
    const section = document.getElementById('waitlist-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all fields' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({ type: 'error', message: 'Please enter a valid email address' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzHtjBUTZrE0ML9SV0XvyOzAYFIOF3YXyXX3v0fJizvK0IgikyqF2dGrRUbw1nFNSyB/exec';

      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          userType: formData.userType || 'general'
        })
      });

      setIsSuccessModalOpen(true);
      setFormData({ name: '', email: '', userType: '' });

    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Dynamic form labels based on user type
  const getNamePlaceholder = () => {
    if (formData.userType === 'artist') return 'Enter your artist name';
    if (formData.userType === 'fan') return 'Enter your name';
    return 'Enter your name';
  };

  const getButtonText = () => {
    if (formData.userType === 'artist') return isSubmitting ? 'Joining...' : 'Join as Artist';
    if (formData.userType === 'fan') return isSubmitting ? 'Joining...' : 'Join as Fan';
    return isSubmitting ? 'Joining...' : 'Join the Waitlist';
  };

  const getWaitlistTitle = () => {
    if (formData.userType === 'artist') return 'Join as an Artist';
    if (formData.userType === 'fan') return 'Join as a Fan';
    return 'Join the Waitlist';
  };

  const getWaitlistDescription = () => {
    if (formData.userType === 'artist') {
      return 'Get early access to CelestiFan and start building meaningful connections with your fans. Launch campaigns, track engagement, and amplify your music career.';
    }
    if (formData.userType === 'fan') {
      return 'Be among the first fans to join CelestiFan. Prove your dedication, earn rewards, and connect directly with your favorite artists.';
    }
    return 'Be the first to know when CelestiFan launches. Join thousands of artists and fans building the future of music together.';
  };

  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Dialog open={isSuccessModalOpen} onOpenChange={setIsSuccessModalOpen}>
        <DialogContent className="sm:max-w-md bg-background border-primary shadow-2xl shadow-primary/20">
          <DialogHeader className="text-center items-center pt-8">
            <PartyPopper className="h-16 w-16 text-primary animate-bounce" />
            <DialogTitle className="text-3xl font-display mt-4 text-gradient">Welcome to the Movement!</DialogTitle>
            <DialogDescription asChild>
              <div className="text-lg text-muted-foreground mt-4 space-y-4">
                <p>Welcome to CelestiFan, where every moment of support matters.</p>
                <p>You've officially joined the movement that connects artists and fans through real actions, creativity, and rewards.</p>
                <div className="!mt-6">
                  <p className="font-bold text-gradient">Your journey starts now</p>
                  <p>Earn Celeste. Empower artists. Elevate fandom.</p>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center py-4">
            <Button onClick={() => setIsSuccessModalOpen(false)} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Awesome!
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex items-center justify-center text-center overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-[100px] animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-[120px] animate-float" style={{ animationDelay: "1s" }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl mb-6"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display mb-6 animate-slide-up">
              <span className="text-gradient">Amplify Artists.</span>
              <br />
              <span className="text-gradient">Ignite Fandom.</span>
            </h1>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            The ultimate platform where fans fuel music breakthroughs
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg px-8" 
              onClick={() => handleWaitlistClick('artist')}
            >
              Start as an Artist
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 text-lg px-8" 
              onClick={() => handleWaitlistClick('fan')}
            >
              Join as a Fan
            </Button>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-xl md:text-4xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="py-20 container mx-auto px-4"
      >
        <h2 className="text-4xl md:text-5xl font-display text-center mb-4 text-gradient">
          How It Works
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Three simple steps to revolutionize your music journey
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {howItWorks.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all hover:scale-105 h-full">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6">
                  <item.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why CelestiFan Section with Properly Sized Mockups */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="py-20 bg-card"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display mb-6 text-gradient mx-auto text-center">
            Why CelestiFan?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            CelestiFan is more than just a platform; it's a movement. We're dedicated to empowering artists and giving fans a voice. Here's how we're changing the game.
          </p>
          <div className="space-y-20">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center"
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className={`flex justify-center ${index % 2 === 0 ? 'lg:order-last lg:justify-end' : 'lg:order-first lg:justify-start'}`}>
                  <img 
                    src={feature.imageUrl} 
                    alt={feature.title}
                    className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className={`${index % 2 === 0 ? 'lg:order-first' : 'lg:order-last'}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-3xl font-bold">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-lg">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section - Dynamic Waitlist */}
      <motion.section
        id="waitlist-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl mb-6">
            {getWaitlistTitle()}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {getWaitlistDescription()}
          </p>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            onSubmit={handleSubmit}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 max-w-md mx-auto"
          >
            <input
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              name="name"
              disabled={isSubmitting}
              placeholder={getNamePlaceholder()}
              className="px-6 py-3 rounded-lg bg-background border border-border focus:border-primary outline-none transition-all"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              disabled={isSubmitting}
              className="px-6 py-3 rounded-lg bg-background border border-border focus:border-primary outline-none transition-all"
              required
            />
            <Button 
              disabled={isSubmitting} 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
              type="submit"
            >
              {getButtonText()}
            </Button>
            {submitStatus.type === 'error' && submitStatus.message && (
              <div className="p-4 mt-4 rounded-lg bg-red-100 text-red-800 border border-red-200">
                {submitStatus.message}
              </div>
            )}
          </motion.form>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Home;