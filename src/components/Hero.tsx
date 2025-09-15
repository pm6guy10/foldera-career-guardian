import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-guardian.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-40">
        <img 
          src={heroImage} 
          alt="AI Guardian protecting enterprise data"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Glow Effects */}
      <div className="absolute inset-0 bg-gradient-glow animate-glow-pulse"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-7xl md:text-8xl font-bold mb-8 tracking-tight">
          <span className="block text-ghost-white">The AI That</span>
          <span className="block bg-gradient-primary bg-clip-text text-transparent animate-electric-flow bg-[length:200%_200%]">
            Never Ghosts
          </span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
          When other AIs disappear, <span className="text-electric-blue font-semibold">Foldera stands guard</span>. 
          Preventing career-ending mistakes, flagging conflicts before boardrooms, 
          and protecting what matters most.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-electric transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6 rounded-xl font-semibold"
          >
            Start Your Trial
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-shadow-dark transition-all duration-300 text-lg px-8 py-6 rounded-xl font-semibold"
          >
            Book Enterprise Demo
          </Button>
        </div>
        
        <p className="text-sm text-muted-foreground mt-8">
          Trusted by teams inside Microsoft, McKesson, Glean, and Notion
        </p>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;