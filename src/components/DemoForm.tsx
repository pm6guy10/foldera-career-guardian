import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mail, Calendar, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const DemoForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitted(true);
    toast({
      title: "Demo requested!",
      description: "We'll be in touch within 24 hours to schedule your demo.",
    });
  };

  if (isSubmitted) {
    return (
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <Card className="bg-gradient-glow border-electric-blue/30 p-12 text-center">
            <div className="flex items-center justify-center w-20 h-20 bg-success/20 rounded-full mx-auto mb-6">
              <Calendar className="w-10 h-10 text-success" />
            </div>
            
            <h2 className="text-4xl font-bold text-ghost-white mb-6">
              Demo Requested!
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              We'll reach out within 24 hours to schedule your personalized demo.
            </p>
            
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-ghost-white mb-4">
                Schedule directly with Calendly:
              </h3>
              <div className="bg-electric-blue/10 border border-electric-blue/20 rounded-lg p-4">
                <p className="text-electric-blue font-mono">
                  calendly.com/foldera/enterprise-demo
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-ghost-white mb-6">
            See Foldera In <span className="text-electric-blue">Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch how we prevent disasters in real-time. 
            Get your personalized demo in under 24 hours.
          </p>
        </div>

        <Card className="bg-gradient-glow border-electric-blue/30 p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-electric-blue/20 rounded-lg">
                <Mail className="w-6 h-6 text-electric-blue" />
              </div>
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-card/50 border-electric-blue/30 text-ghost-white placeholder:text-muted-foreground text-lg py-6"
                />
              </div>
            </div>

            <Button 
              type="submit"
              size="lg"
              className="w-full bg-gradient-primary hover:shadow-electric transition-all duration-300 transform hover:scale-105 text-lg py-6 rounded-xl font-semibold group"
            >
              Request Demo Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>Or schedule directly: calendly.com/foldera/enterprise-demo</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DemoForm;