
import { Star, Heart, Zap, Gift } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Celeste = () => {
  const sections = [
    {
      icon: Star,
      title: "What is Celeste?",
      content:
        "Celeste isn’t just a digital reward — it’s a symbol of connection between artists and fans. Every time a fan supports an artist — by streaming, sharing, joining their events, or simply showing love — they earn Celeste. Think of it like energy that flows through the CelestiFan universe. The more genuine love and activity someone gives, the more Celeste they collect.",
    },
    {
      icon: Heart,
      title: "What does earning Celeste mean?",
      content:
        "When someone earns Celeste, it means they’ve done something real — they’ve contributed to an artist’s growth, helped their music travel further, or been part of a shared moment that matters. Celeste is proof of involvement. It’s not about luck; it’s about connection and consistency. Each Celeste earned tells a story — “I was here, I helped, I believed.”",
    },
    {
      icon: Gift,
      title: "What can Celeste be used for?",
      content:
        "Celeste gives fans access — not just rewards. It can be used to: unlock exclusive fan moments (private drops, shoutouts, early releases), join artist experiences or giveaways, access fan rankings and community challenges, and in the long term, exchange for digital or real-world benefits within CelestiFan. So it’s not just a number. It’s a proof of care — the more you earn, the deeper your bond with your favorite artists becomes.",
    },
    {
      icon: Zap,
      title: "Why it matters",
      content:
        "Celeste brings meaning back to music engagement. It transforms every play, comment, or share into something valuable — both emotionally and digitally. Fans don’t just listen anymore… they belong.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-display mb-6 text-gradient animate-slide-up">
            Celeste
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            The heart of the CelestiFan universe.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section) => (
              <Card
                key={section.title}
                className="p-8 bg-background border-border hover:border-primary/50 transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                  <section.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center">
                  {section.title}
                </h3>
                <p className="text-muted-foreground text-center">
                  {section.content}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Movement */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-display mb-6 text-gradient">
            Start Earning Celeste
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join CelestiFan today and turn your passion for music into
            meaningful rewards and experiences.
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Celeste;
