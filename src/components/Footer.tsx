import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Security", href: "#security" },
      { name: "Enterprise", href: "#enterprise" }
    ],
    Company: [
      { name: "About", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
      { name: "Blog", href: "/blog" }
    ],
    Legal: [
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Security", href: "/security" },
      { name: "Compliance", href: "/compliance" }
    ],
    Support: [
      { name: "Documentation", href: "/docs" },
      { name: "Help Center", href: "/help" },
      { name: "Status", href: "/status" },
      { name: "API", href: "/api" }
    ]
  };

  const handleStripeSignup = () => {
    // Placeholder for Stripe Checkout integration
    console.log("Redirecting to Stripe Checkout...");
  };

  return (
    <footer className="bg-shadow-dark border-t border-border">
      {/* CTA Section */}
      <div className="py-16 bg-gradient-glow">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-ghost-white mb-6">
            Never Get <span className="text-destructive">Ghosted</span> Again
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who trust Foldera to protect 
            their most critical moments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={handleStripeSignup}
              className="bg-gradient-primary hover:shadow-electric transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6 rounded-xl font-semibold"
            >
              Start Your Trial
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-shadow-dark transition-all duration-300 text-lg px-8 py-6 rounded-xl font-semibold"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold text-ghost-white mb-4">
                Foldera
              </h3>
              <p className="text-muted-foreground mb-6">
                The AI that never ghosts you when it matters most.
              </p>
              <div className="text-sm text-muted-foreground">
                Built for enterprise teams who can't afford mistakes.
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-lg font-semibold text-ghost-white mb-4">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href}
                        className="text-muted-foreground hover:text-electric-blue transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Separator className="bg-border" />

      {/* Bottom Bar */}
      <div className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Foldera. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>SOC 2 Certified</span>
              <span>HIPAA Compliant</span>
              <span>GDPR Ready</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;