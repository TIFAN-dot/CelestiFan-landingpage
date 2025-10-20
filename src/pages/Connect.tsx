import { Twitter, Instagram, Facebook, Send, Music2, Rss, Mic, User, Mail, Youtube, Disc } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Connect = () => {
  const socialLinks = [
    { 
      icon: Twitter, 
      label: "Twitter", 
      handle: "@celestifan_off", 
      url: "https://x.com/celestifan_off" 
    },
    { 
      icon: Instagram, 
      label: "Instagram", 
      handle: "@celestifan_official", 
      url: "https://www.instagram.com/celestifan_official" 
    },
    { 
      icon: Facebook, 
      label: "Facebook", 
      handle: "/celestifan", 
      url: "https://www.facebook.com/celestifan" 
    },
  ];

  const contactCards = [
    { 
      icon: Mail,
      title: "General Inquiries",
      description: "Have a question or feedback? We'd love to hear from you.",
      buttonText: "Email Us",
      email: "hello@celestifan.com"
    },
    { 
      icon: User,
      title: "Artist & Fan Support",
      description: "Need help with your account or a campaign? Our team is here to assist.",
      buttonText: "Contact Support",
      email: "support@celestifan.com"
    },
    { 
      icon: Mic,
      title: "Press & Media",
      description: "For all media inquiries, please get in touch with our communications team.",
      buttonText: "Media Inquiries",
      email: "press@celestifan.com"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-[100px] animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-[120px] animate-float" style={{ animationDelay: "1s" }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-display mb-4 text-gradient">
            Connect With Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're building a community and we want you to be a part of it. Follow us, join the conversation, or reach out directly.
          </p>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl font-display text-center mb-12 text-gradient">
          Follow Our Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {socialLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <a 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                key={link.label}
                className="block"
              >
                <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all text-center hover:scale-105 cursor-pointer h-full">
                  <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold">{link.label}</h3>
                  <p className="text-muted-foreground">{link.handle}</p>
                </Card>
              </a>
            );
          })}
        </div>
      </section>

      {/* Community & Blog Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="p-8 bg-background border-border hover:border-primary/50 transition-all">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold mb-3">Community</h3>
              <p className="text-muted-foreground mb-4">
                Join our Discord for fan discussions, artist Q&As, and platform updates
              </p>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Join Discord
                </Button>
              </a>
            </Card>
          </div>
          <div>
            <Card className="p-8 bg-background border-border hover:border-primary/50 transition-all">
              <div className="text-4xl mb-4">📰</div>
              <h3 className="text-2xl font-bold mb-3">Our Blog</h3>
              <p className="text-muted-foreground mb-4">
                Read about the latest trends in music, fan engagement, and platform news
              </p>
              <a href="/blog" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Read Now
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl font-display text-center mb-12 text-gradient">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <Card key={card.title} className="p-8 bg-card border-border text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                <p className="text-muted-foreground mb-6">{card.description}</p>
                <a href={`mailto:${card.email}`}>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    {card.buttonText}
                  </Button>
                </a>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Connect;