import { Shield, Lock, Eye, FileCheck } from "lucide-react";

const SecuritySection = () => {
  const certifications = [
    {
      icon: Shield,
      title: "SOC 2 Type II",
      description: "Audited security controls and processes",
      status: "Certified"
    },
    {
      icon: Lock,
      title: "HIPAA Compliant",
      description: "Healthcare data protection standards",
      status: "Compliant"
    },
    {
      icon: Eye,
      title: "GDPR Ready",
      description: "European privacy regulation compliance",
      status: "Compliant"
    },
    {
      icon: FileCheck,
      title: "Audit Ready",
      description: "Complete documentation and logging",
      status: "Always"
    }
  ];

  const securityFeatures = [
    "End-to-end encryption in transit and at rest",
    "Zero-trust architecture with role-based access",
    "Continuous security monitoring and alerting",
    "Regular penetration testing and vulnerability assessments",
    "Data residency options for global compliance",
    "Incident response and disaster recovery plans"
  ];

  return (
    <section className="py-24 bg-enterprise-gray/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-ghost-white mb-6">
            <span className="text-electric-blue">Enterprise</span> Security
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built for the most demanding security requirements. 
            Your data stays protected, compliant, and audit-ready.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-success/20 rounded-xl p-6 text-center hover:border-success/40 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-success/10 rounded-xl mb-4 mx-auto">
                <cert.icon className="w-8 h-8 text-success" />
              </div>
              
              <h3 className="text-lg font-bold text-ghost-white mb-2">
                {cert.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-3">
                {cert.description}
              </p>
              
              <div className="inline-flex items-center gap-1 bg-success/20 text-success text-xs font-semibold px-3 py-1 rounded-full">
                <Shield className="w-3 h-3" />
                {cert.status}
              </div>
            </div>
          ))}
        </div>

        {/* Security Features */}
        <div className="bg-gradient-glow rounded-2xl border border-electric-blue/20 p-8 md:p-12">
          <h3 className="text-3xl font-bold text-ghost-white text-center mb-8">
            Security by Design
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex items-center justify-center w-6 h-6 bg-electric-blue/20 rounded-full mt-1">
                  <Shield className="w-3 h-3 text-electric-blue" />
                </div>
                <span className="text-ghost-white">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Statement */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-card/50 backdrop-blur-sm border border-border rounded-xl px-8 py-4">
            <Lock className="w-6 h-6 text-electric-blue" />
            <span className="text-lg font-semibold text-ghost-white">
              Your secrets stay secret. Always.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;