import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for fans exploring their favorite artists",
      features: [
        "Basic fan rankings",
        "Stream tracking",
        "Leaderboard access",
        "Community features",
        "1 campaign participation",
      ],
      limitations: [
        "No custom campaigns",
        "Limited analytics",
        "No direct artist chat",
      ],
      cta: "Start Free",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$12",
      period: "per month",
      description: "For artists and superfans ready to level up",
      features: [
        "Everything in Free",
        "Unlimited custom campaigns",
        "Advanced fan insights",
        "Direct artist messaging",
        "Priority leaderboard placement",
        "Export analytics reports",
        "Custom badges",
        "Early access to new features",
      ],
      limitations: [],
      cta: "Go Pro",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For labels, agencies, and large-scale operations",
      features: [
        "Everything in Pro",
        "API access",
        "White-label options",
        "Dedicated account manager",
        "Custom integrations",
        "Multi-artist management",
        "Advanced security",
        "SLA guarantees",
      ],
      limitations: [],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  const featureComparison = [
    { feature: "Fan Rankings", free: true, pro: true, enterprise: true },
    { feature: "Stream Tracking", free: true, pro: true, enterprise: true },
    { feature: "Leaderboards", free: true, pro: true, enterprise: true },
    { feature: "Campaign Participation", free: "1", pro: "Unlimited", enterprise: "Unlimited" },
    { feature: "Create Campaigns", free: false, pro: true, enterprise: true },
    { feature: "Fan Insights", free: "Basic", pro: "Advanced", enterprise: "Advanced" },
    { feature: "Direct Messaging", free: false, pro: true, enterprise: true },
    { feature: "Custom Badges", free: false, pro: true, enterprise: true },
    { feature: "API Access", free: false, pro: false, enterprise: true },
    { feature: "White-Label", free: false, pro: false, enterprise: true },
  ];

  const faqs = [
    {
      question: "What's included in the Free plan?",
      answer: "The Free plan includes basic rankings, stream tracking, leaderboard access, and participation in one campaign at a time. It's perfect for fans who want to support their favorite artists without any commitment.",
    },
    {
      question: "Can I upgrade or downgrade anytime?",
      answer: "Absolutely! You can upgrade to Pro or Enterprise at any time. If you downgrade, you'll maintain Pro features until the end of your billing period.",
    },
    {
      question: "How does campaign creation work?",
      answer: "With Pro or Enterprise, artists can create unlimited campaigns with custom goals (streams, shares, etc.), rewards, and timelines. Fans participate by completing actions and submitting proof.",
    },
    {
      question: "Is there a discount for annual billing?",
      answer: "Yes! Annual Pro subscribers get 2 months free (save 17%). Enterprise plans are customized based on your needs.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, and PayPal. Enterprise customers can also pay via invoice.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-display mb-6 text-gradient animate-slide-up">
            Choose Your Path
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            From free fan engagement to enterprise-scale artist management
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`p-8 bg-card border-2 transition-all ${
                plan.highlighted
                  ? "border-primary scale-105 shadow-2xl shadow-primary/20"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {plan.highlighted && (
                <div className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-3xl font-display mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-5xl font-bold text-gradient">{plan.price}</span>
                <span className="text-muted-foreground ml-2">/{plan.period}</span>
              </div>
              <p className="text-muted-foreground mb-6">{plan.description}</p>
              
              <Button
                size="lg"
                className={`w-full mb-8 ${
                  plan.highlighted
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                    : "border-primary text-primary hover:bg-primary/10"
                }`}
                variant={plan.highlighted ? "default" : "outline"}
              >
                {plan.cta}
              </Button>

              <div className="space-y-3">
                <p className="font-semibold text-sm text-muted-foreground uppercase">Includes:</p>
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
                {plan.limitations.map((limitation) => (
                  <div key={limitation} className="flex items-start gap-3 opacity-50">
                    <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{limitation}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Feature Breakdown */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display text-center mb-12 text-gradient">
            Feature Breakdown
          </h2>
          
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4">Feature</th>
                  <th className="text-center py-4 px-4">Free</th>
                  <th className="text-center py-4 px-4">Pro</th>
                  <th className="text-center py-4 px-4">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {featureComparison.map((row) => (
                  <tr key={row.feature} className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">{row.feature}</td>
                    <td className="text-center py-4 px-4">
                      {typeof row.free === "boolean" ? (
                        row.free ? (
                          <Check className="h-5 w-5 text-primary mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground mx-auto" />
                        )
                      ) : (
                        <span className="text-muted-foreground">{row.free}</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {typeof row.pro === "boolean" ? (
                        row.pro ? (
                          <Check className="h-5 w-5 text-primary mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground mx-auto" />
                        )
                      ) : (
                        <span className="text-primary font-semibold">{row.pro}</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {typeof row.enterprise === "boolean" ? (
                        row.enterprise ? (
                          <Check className="h-5 w-5 text-primary mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground mx-auto" />
                        )
                      ) : (
                        <span className="text-primary font-semibold">{row.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-display text-center mb-12 text-gradient">
          Frequently Asked Questions
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
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
      </section>
    </div>
  );
};

export default Pricing;
