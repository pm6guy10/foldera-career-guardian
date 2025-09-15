import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-guardian.jpg";

const Hero = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const [sequenceIndex, setSequenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const sequences = [
    '⚠ One bad number detected…',
    '⚠ Clause flagged by compliance…',
    '⚠ Badge access denied…'
  ];

  useEffect(() => {
    const type = () => {
      const currentSequence = sequences[sequenceIndex % sequences.length];
      let displayString = '';
      
      if (isDeleting) {
        displayString = currentSequence.substring(0, charIndex - 1);
      } else {
        displayString = currentSequence.substring(0, charIndex + 1);
      }

      setTypewriterText(displayString);

      if (!isDeleting && charIndex === currentSequence.length) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setSequenceIndex(prev => prev + 1);
        setTypewriterText('');
        return;
      }
      
      if (isDeleting) {
        setCharIndex(prev => prev - 1);
      } else {
        setCharIndex(prev => prev + 1);
      }
    };

    const typingSpeed = isDeleting ? 50 : 100;
    const timeoutId = setTimeout(type, typingSpeed);
    
    return () => clearTimeout(timeoutId);
  }, [charIndex, isDeleting, sequenceIndex]);

  const scrollToCTA = () => {
    const ctaSection = document.getElementById('cta-section');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="AI Guardian protecting enterprise data"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter hero-gradient-text mb-6">
          Three years into the 'future of work,'<br />
          AI is still a ghost.
        </h1>
        
        <p className="text-xl sm:text-2xl text-ghost-white font-semibold mb-4 max-w-4xl mx-auto">
          99 productivity apps later and your neck is still on the line when it screws up.
        </p>
        
        <div className="mb-8 h-8 flex items-center justify-center">
          <span className="text-electric-blue font-mono text-lg">
            {typewriterText}
            <span className="animate-typewriter-blink">|</span>
          </span>
        </div>
        
        <div className="flex justify-center relative">
          <span className="absolute inset-0 rounded-lg bg-electric-blue animate-radar-pulse opacity-30"></span>
          <Button 
            onClick={scrollToCTA}
            size="lg"
            className="relative bg-electric-blue hover:bg-electric-blue/80 text-white font-semibold px-8 py-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
          >
            Book a Security-Cleared Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;