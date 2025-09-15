import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const DemoForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
  };

  return (
    <section id="cta-section" className="py-20 md:py-32 relative">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-ghost-white mb-4">
          Banish the Ghost. Deploy the Guardian.
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Schedule a demo to see how Foldera can protect your team from the risks everyone else overlooks.
        </p>
        
        <div className="min-h-[60px]">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                className="flex-grow bg-card border-border py-3 px-4 text-ghost-white focus:ring-2 focus:ring-electric-blue"
                required
              />
              <Button 
                type="submit" 
                className="bg-success hover:bg-success/80 text-white font-semibold px-6 py-3 rounded-lg whitespace-nowrap"
              >
                Request Enterprise Demo
              </Button>
            </form>
          ) : (
            <p className="text-lg text-success font-semibold">
              ✅ Request received! We'll be in touch shortly.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default DemoForm;