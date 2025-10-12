import { Mail, MessageCircle, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Connect = () => {
  const faqs = [
    {
      question: "How do I prove my streams and earn points?",
      answer: "Upload a screenshot from your streaming platform (Spotify, Apple Music, etc.) showing your play history. Make sure the artist name and your username are visible. Screenshots are verified within 24 hours, and points are awarded automatically.",
    },
    {
      question: "Can I support multiple artists?",
      answer: "Absolutely! You can follow and support as many artists as you like. Your points and rankings are tracked separately for each artist, so you can be a top fan for multiple creators.",
    },
    {
      question: "What happens if I miss a campaign deadline?",
      answer: "Campaign points won't be awarded after the deadline, but you can still participate in future campaigns. Artists often run multiple campaigns, so there's always another chance to climb the leaderboard.",
    },
    {
      question: "How do artists contact their top fans?",
      answer: "Artists with Pro or Enterprise plans can send direct messages to their top-ranked fans through the CelestiFan platform. You'll receive notifications when an artist reaches out.",
    },
    {
      question: "Is my data secure?",
      answer: "Yes! We use industry-standard encryption and never share your personal information without consent. You control what data is visible on your profile and can opt out of public leaderboards anytime.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-display mb-6 text-gradient animate-slide-up">
            Let's Connect
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Have questions? Want to chat? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <Card className="p-8 bg-card border-border">
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <Input placeholder="Your name" className="bg-background border-border" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <Input type="email" placeholder="your@email.com" className="bg-background border-border" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Subject</label>
                <Input placeholder="What's this about?" className="bg-background border-border" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <Textarea
                  placeholder="Tell us what's on your mind..."
                  rows={6}
                  className="bg-background border-border"
                />
              </div>
              <Button size="lg" className="w-full bg-gradient-neon hover:opacity-90 text-white font-semibold">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all">
              <Mail className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Email Us</h3>
              <p className="text-muted-foreground mb-4">
                For general inquiries, support, or partnership opportunities
              </p>
              <a href="mailto:hello@celestifan.com" className="text-primary hover:underline font-semibold">
                hello@celestifan.com
              </a>
            </Card>

            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all">
              <MessageCircle className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Live Chat</h3>
              <p className="text-muted-foreground mb-4">
                Need instant help? Our support team is online 9am-6pm PT
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Start Chat
              </Button>
            </Card>

            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold mb-3">Community</h3>
              <p className="text-muted-foreground mb-4">
                Join our Discord for fan discussions, artist Q&As, and platform updates
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Join Discord
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display text-center mb-6 text-gradient">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Quick answers to common questions about CelestiFan
          </p>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6 bg-background">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Button size="lg" className="bg-gradient-neon hover:opacity-90 text-white font-semibold">
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      {/* Social Vibes */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-display text-center mb-12 text-gradient">
          Social Vibes
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 bg-card border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-neon rounded-full flex items-center justify-center text-2xl">
                𝕏
              </div>
              <div>
                <h3 className="text-xl font-bold">Latest from X</h3>
                <p className="text-sm text-muted-foreground">@celestifan</p>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-6 min-h-[200px] flex items-center justify-center">
              <p className="text-muted-foreground text-center">
                Live feed placeholder<br />
                Follow us for updates, fan shoutouts, and music news
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-card border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-neon rounded-full flex items-center justify-center text-2xl">
                📹
              </div>
              <div>
                <h3 className="text-xl font-bold">TikTok Highlights</h3>
                <p className="text-sm text-muted-foreground">@celestifan</p>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-6 min-h-[200px] flex items-center justify-center">
              <p className="text-muted-foreground text-center">
                Video feed placeholder<br />
                Check out fan success stories and campaign highlights
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Connect;
