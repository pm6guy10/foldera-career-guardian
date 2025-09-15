import { Button } from "@/components/ui/button";
import { Check, Star, Zap } from "lucide-react";

const PricingSection = () => {
  const tiers = [
    {
      name: "Self-Serve",
      price: "$99",
      period: "/month",
      description: "Perfect for small teams getting started",
      features: [
        "Up to 5 team members",
        "Document conflict detection", 
        "Basic audit logging",
        "Email support",
        "Standard security"
      ],
      cta: "Start Trial",
      highlight: false
    },
    {
      name: "Pro", 
      price: "$399",
      period: "/month",
      description: "Growing organizations need growing protection",
      features: [
        "Up to 50 team members",
        "Advanced AI scanning",
        "Real-time collaboration alerts",
        "Priority support",
        "Advanced security + SOC 2",
        "Custom integrations"
      ],
      cta: "Start Trial",
      highlight: true
    },
    {
      name: "Pilot",
      price: "$5,000",
      period: "entry point",
      description: "Enterprise-grade protection for critical operations",
      features: [
        "Unlimited team members",
        "White-glove onboarding",
        "Dedicated success manager",
        "Custom AI training",
        "Full compliance suite",
        "24/7 phone support"
      ],
      cta: "Book Enterprise Demo",
      highlight: false
    }
  ];

  return (
    <section className="py-24 bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-ghost-white mb-6">
            Choose Your <span className="text-electric-blue">Guardian</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every plan includes our promise: we never ghost you when it matters most.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                tier.highlight 
                  ? 'bg-gradient-glow border-2 border-electric-blue shadow-electric scale-105' 
                  : 'bg-card border border-border hover:border-electric-blue/30'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center gap-1 bg-electric-blue text-shadow-dark px-4 py-2 rounded-full text-sm font-semibold">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-ghost-white mb-2">
                  {tier.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1 mb-4">
                  <span className="text-5xl font-bold text-ghost-white">
                    {tier.price}
                  </span>
                  <span className="text-lg text-muted-foreground">
                    {tier.period}
                  </span>
                </div>
                <p className="text-muted-foreground">
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-ghost-white">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full py-6 text-lg font-semibold rounded-xl transition-all duration-300 ${
                  tier.highlight
                    ? 'bg-electric-blue hover:bg-electric-glow text-shadow-dark hover:shadow-intense transform hover:scale-105'
                    : 'bg-gradient-primary hover:shadow-electric transform hover:scale-105'
                }`}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-card/50 backdrop-blur-sm border border-border rounded-xl px-6 py-4">
            <Zap className="w-6 h-6 text-electric-blue" />
            <span className="text-lg font-semibold text-ghost-white">
              All plans include our Never Ghost guarantee
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;