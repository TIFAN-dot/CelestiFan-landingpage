import { ArrowRight, TrendingUp, Trophy, Music, Zap, Users, BarChart3, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Mockup from "@/components/ui/mockup";
import { motion } from "framer-motion";
import { useState } from "react";

const Home = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

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
      imageUrl: "/mockups/celeste.png",
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

  // const handleWaitlistClick = () => {
  //   const section = document.getElementById('waitlist-section');
  //   if (section) {
  //     section.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  const handleWaitlistClick = () => {
    const section = document.getElementById('waitlist-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!formData.name.trim() || !formData.email.trim()) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all fields' });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({ type: 'error', message: 'Please enter a valid email address' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // Replace this URL with your Google Apps Script Web App URL
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzHtjBUTZrE0ML9SV0XvyOzAYFIOF3YXyXX3v0fJizvK0IgikyqF2dGrRUbw1nFNSyB/exec';

      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      // Since we're using no-cors mode, we won't get a readable response
      // We'll assume success if no error was thrown
      setSubmitStatus({
        type: 'success',
        message: 'Successfully joined the waitlist! Check your email for updates.'
      });
      setFormData({ name: '', email: '' });

    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
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
            {/* Amplify Artists.<br />Ignite Fandom. */}
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
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg px-8" onClick={handleWaitlistClick}>
              Start as an Artist
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8" onClick={handleWaitlistClick}>
              Join as a Fan
            </Button> 
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
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

      {/* Why CelestiFan Section */}
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
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className={`flex justify-center ${index % 2 === 0 ? 'lg:order-last lg:justify-end' : 'lg:order-first lg:justify-start'}`}>
                  {/* <Mockup imageUrl={feature.imageUrl} /> */}
                  <img src={feature.imageUrl} alt={feature.title} />
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

      {/* CTA Section */}
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
            Join the Waitlist
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be the first to know when CelestiFan launches. Join thousands of artists and fans building the future of music together.
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
              placeholder="Enter your name"
              className="px-6 py-3 rounded-lg bg-background border border-border focus:border-primary outline-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              disabled={isSubmitting}
              className="px-6 py-3 rounded-lg bg-background border border-border focus:border-primary outline-none"
            />
            <Button disabled={isSubmitting} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              {isSubmitting ? 'Joining...' : 'Join the Waitlist'}
            </Button>
            {submitStatus.message && (
              <div className={`p-4 rounded-lg ${submitStatus.type === 'success'
                ? 'bg-green-100 text-green-800 border border-green-200'
                : 'bg-red-100 text-red-800 border border-red-200'
                }`}>
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
