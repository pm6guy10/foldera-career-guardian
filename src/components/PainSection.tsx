import { AlertTriangle, Shield, Zap } from "lucide-react";

const PainSection = () => {
  const painPoints = [
    {
      icon: AlertTriangle,
      title: "The CFO Moment",
      description: "\"This document conflicts with what we told investors last quarter.\"",
      impact: "Career-ending revelations in boardrooms"
    },
    {
      icon: Shield,
      title: "The Badge Disabled",
      description: "\"We need to revoke your access while we investigate.\"", 
      impact: "Compliance failures that destroy trust"
    },
    {
      icon: Zap,
      title: "The Ghost Zone",
      description: "\"Your AI can't help with this sensitive document.\"",
      impact: "Critical work stalls when you need help most"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-ghost-white mb-6">
            When AI <span className="text-destructive">Ghosts</span> You
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The most critical moments are when other AIs vanish. 
            Leaving you exposed, unprotected, and alone.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-card border border-destructive/20 rounded-2xl p-8 hover:border-destructive/40 transition-all duration-300 hover:shadow-lg hover:shadow-destructive/10"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-destructive/10 rounded-xl mb-6 mx-auto">
                <point.icon className="w-8 h-8 text-destructive" />
              </div>
              
              <h3 className="text-2xl font-bold text-ghost-white text-center mb-4">
                {point.title}
              </h3>
              
              <blockquote className="text-lg text-destructive/90 italic text-center mb-4 border-l-4 border-destructive pl-4">
                {point.description}
              </blockquote>
              
              <p className="text-muted-foreground text-center">
                {point.impact}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainSection;