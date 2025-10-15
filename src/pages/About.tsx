import { Target, Heart, Zap, Users, Music } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  const team = [
    {
      name: "Tometi Koffi Romeo",
      role: "CEO & Founder",
      bio: "Music nerd turned tech disruptor. Built CelestiFan to bridge the gap between artists and their biggest supporters.",
    },
    {
      name: "Mustapha Sakyi",
      role: "Technical Lead",
      bio: "Architecting the robust infrastructure that powers real-time fan engagement.",
    },
    {
      name: "Mubarak Abdulrafiu",
      role: "Head of Product & Design",
      bio: "Leading our product vision and user experience, crafting the CelestiFan platform.",
    },
  ];

  const impactStories = [
    {
      title: "From Bedroom to Billboard",
      artist: "Kai Morrison",
      fan: "Jordan Blake",
      story: "Jordan's relentless sharing and streaming helped Kai's single 'Neon Nights' gain 500K streams in two weeks, catching the attention of a major label. Today, Kai has a record deal and Jordan is recognized as a top supporter.",
      image: "placeholder",
    },
    {
      title: "Building a Movement",
      artist: "Luna & The Waves",
      fan: "Community",
      story: "Through targeted campaigns, Luna mobilized 2,000 fans to stream their album on release day, pushing it to #3 on indie charts. The band now uses CelestiFan to reward their most dedicated listeners with exclusive content.",
      image: "placeholder",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Fan-First",
      description: "Every feature is designed to celebrate and empower the fans who fuel music culture.",
    },
    {
      icon: Target,
      title: "Artist-Driven",
      description: "We give artists the tools and insights to understand and connect with their audience.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Constantly pushing boundaries to create new ways for music communities to thrive.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive ecosystem where everyone wins—artists, fans, and music itself.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-display mb-6 text-gradient animate-slide-up">
            Our Mission
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            We're rewriting music's future by putting fans at the heart of every
            artist's rise. CelestiFan turns passion into power, streams into
            careers, and supporters into legends. In a world where algorithms
            decide success, we believe the real influence lies with the people who
            truly care—the fans who discover, share, and champion music before
            anyone else.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display text-center mb-12 text-gradient">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="p-8 bg-background border-border text-center hover:border-primary/50 transition-all">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-display text-center mb-6 text-gradient">
          Who We Are
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          We're a team of music lovers, tech builders, and community creators
          backed by industry innovators who believe in democratizing music success.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member) => (
            <Card key={member.name} className="p-8 bg-card border-border hover:border-primary/50 transition-all text-center">
              <div className="w-24 h-24 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center text-4xl font-bold text-primary-foreground">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-primary font-semibold mb-3">{member.role}</p>
              <p className="text-muted-foreground">{member.bio}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display text-center mb-12 text-gradient">
            Impact Stories
          </h2>

          <div className="space-y-12 max-w-5xl mx-auto">
            {impactStories.map((story, index) => (
              <Card key={index} className="overflow-hidden bg-background border-border hover:border-primary/50 transition-all">
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  <div>
                    <h3 className="text-3xl font-display mb-2 text-gradient">
                      {story.title}
                    </h3>
                    <p className="text-primary font-semibold mb-4">
                      Artist: {story.artist} • Fan: {story.fan}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {story.story}
                    </p>
                  </div>
                  <div className="bg-muted rounded-lg flex items-center justify-center min-h-[200px]">
                    <div className="text-center text-muted-foreground">
                      <Music className="h-16 w-16 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">Image: {story.artist} on stage</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Movement */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-display mb-6 text-gradient">
            Join the Movement
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            We're building CelestiFan with artists, fans, and innovators who
            believe in something bigger. The next wave of music power is in your
            hands.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
