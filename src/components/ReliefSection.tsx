import { CheckCircle, Shield, Zap, AlertTriangle } from "lucide-react";

const ReliefSection = () => {
  const solutions = [
    {
      icon: Shield,
      title: "Intercepts Before Impact",
      description: "Scans every document for conflicts, contradictions, and compliance risks",
      benefit: "Prevents boardroom disasters"
    },
    {
      icon: CheckCircle,
      title: "Never Ghosts Critical Moments",
      description: "Available 24/7 for your most sensitive, high-stakes documents",
      benefit: "Always there when you need it most"
    },
    {
      icon: Zap,
      title: "Protects What Matters",
      description: "Flags career-threatening mistakes before they reach executives",
      benefit: "Safeguards your reputation"
    }
  ];

  return (
    <section className="py-24 bg-gradient-glow">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-ghost-white mb-6">
            Your <span className="text-success">Guardian</span> Angel
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            While others abandon you in critical moments, 
            Foldera stands guard — preventing problems before they explode.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-success/20 rounded-2xl p-8 hover:border-success/40 transition-all duration-300 hover:shadow-lg hover:shadow-success/10"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-success/10 rounded-xl mb-6 mx-auto">
                <solution.icon className="w-8 h-8 text-success" />
              </div>
              
              <h3 className="text-2xl font-bold text-ghost-white text-center mb-4">
                {solution.title}
              </h3>
              
              <p className="text-lg text-muted-foreground text-center mb-4">
                {solution.description}
              </p>
              
              <div className="text-center">
                <span className="inline-flex items-center gap-2 text-success font-semibold">
                  <CheckCircle className="w-4 h-4" />
                  {solution.benefit}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-success/10 border border-success/20 rounded-xl px-6 py-4">
            <AlertTriangle className="w-6 h-6 text-success" />
            <span className="text-lg font-semibold text-success">
              Prevention beats panic. Every time.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReliefSection;