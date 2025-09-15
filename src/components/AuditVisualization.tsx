import { Button } from "@/components/ui/button";
import { CheckCircle, AlertTriangle, Eye, Zap } from "lucide-react";
import auditImage from "@/assets/audit-visualization.jpg";

const AuditVisualization = () => {
  const auditSteps = [
    {
      icon: Eye,
      title: "Continuous Scanning",
      description: "Monitors all documents in real-time",
      status: "active"
    },
    {
      icon: AlertTriangle,
      title: "Conflict Detection", 
      description: "Identifies contradictions and risks",
      status: "warning"
    },
    {
      icon: Zap,
      title: "Instant Fixes",
      description: "Applies corrections automatically",
      status: "success"
    },
    {
      icon: CheckCircle,
      title: "Audit Ready",
      description: "Documents certified and protected",
      status: "complete"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-ghost-white mb-6">
            Watch <span className="text-electric-blue">Foldera</span> Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how our AI guardian intercepts problems in real-time, 
            preventing disasters before they reach the boardroom.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Audit Steps */}
          <div className="space-y-6">
            {auditSteps.map((step, index) => (
              <div 
                key={index}
                className={`flex items-start gap-4 p-6 rounded-xl transition-all duration-300 ${
                  step.status === 'active' ? 'bg-electric-blue/10 border border-electric-blue/20' :
                  step.status === 'warning' ? 'bg-warning/10 border border-warning/20' :
                  step.status === 'success' ? 'bg-success/10 border border-success/20' :
                  'bg-card border border-border'
                }`}
              >
                <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${
                  step.status === 'active' ? 'bg-electric-blue/20' :
                  step.status === 'warning' ? 'bg-warning/20' :
                  step.status === 'success' ? 'bg-success/20' :
                  'bg-muted'
                }`}>
                  <step.icon className={`w-6 h-6 ${
                    step.status === 'active' ? 'text-electric-blue' :
                    step.status === 'warning' ? 'text-warning' :
                    step.status === 'success' ? 'text-success' :
                    'text-muted-foreground'
                  }`} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-ghost-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                
                {step.status === 'active' && (
                  <div className="w-3 h-3 bg-electric-blue rounded-full animate-glow-pulse"></div>
                )}
              </div>
            ))}
          </div>

          {/* Visualization */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-card-custom">
              <img 
                src={auditImage}
                alt="Foldera audit visualization showing document scanning"
                className="w-full h-auto"
              />
              
              {/* Scan line animation overlay */}
              <div className="absolute inset-0">
                <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-electric-blue to-transparent animate-scan-line"></div>
              </div>
              
              {/* Status indicators */}
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="flex items-center gap-1 bg-success/20 backdrop-blur-sm border border-success/30 rounded-lg px-3 py-1">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-sm text-success font-medium">Protected</span>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full blur-xl opacity-50 animate-glow-pulse"></div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-gradient-primary hover:shadow-electric transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6 rounded-xl font-semibold"
          >
            See It In Action
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AuditVisualization;