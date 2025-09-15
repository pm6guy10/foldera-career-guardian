import { useEffect, useState } from "react";
import { Lock, Users, Mail, FileCheck } from "lucide-react";

const PainCarousel = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const scenarios = [
    {
      icon: Lock,
      quote: "The system doesn't care you pulled all-nighters. One bad number, and your badge just stops working.",
      solution: "Foldera stands between you and the badge swipe that won't work, verifying every critical number.",
      delay: 0
    },
    {
      icon: Users,
      quote: "The slide deck looks fine—until the CFO asks one question you can't answer. Suddenly it's your reputation on the line.",
      solution: "Foldera has your six, surfacing the conflicting data and drafting the explanation before you enter the room.",
      delay: 0.2
    },
    {
      icon: Mail,
      quote: "One clause slips through, and suddenly your inbox is full of red flags from Legal. The blast radius is your entire weekend.",
      solution: "Foldera neutralizes the bomb before it's sent, flagging risky language against your compliance library.",
      delay: 0.4
    },
    {
      icon: FileCheck,
      quote: "Auditors don't ask if you worked hard. They ask for receipts. The 'I don't recall' defense doesn't work.",
      solution: "Foldera hands you the binder before they knock, with a verifiable log of every decision and data point.",
      delay: 0.6
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const itemIndex = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, itemIndex]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.pain-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Interstitial */}
      <section className="py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-ghost-white">
            Ghost Apps Vanish. The Consequences Don't.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Productivity tools disappear when it matters most. Foldera stays in the fight.
          </p>
        </div>
      </section>

      {/* Pain Scenarios */}
      <section className="py-20 md:py-28 bg-card/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {scenarios.map((scenario, index) => (
            <div 
              key={index}
              className={`pain-item flex flex-col md:flex-row items-center gap-6 transition-all duration-800 ${
                visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              data-index={index}
              style={{ transitionDelay: `${scenario.delay}s` }}
            >
              <div className="flex-shrink-0 bg-card/50 backdrop-blur-sm rounded-full p-4 border border-destructive/20">
                <scenario.icon className="w-10 h-10 text-destructive" />
              </div>
              <div className="text-center md:text-left">
                <p className="text-xl md:text-2xl text-ghost-white leading-snug mb-4">
                  "{scenario.quote}"
                </p>
                <p className="text-lg text-electric-blue font-semibold">
                  <span className="font-bold text-electric-glow">Foldera in the Trench:</span> {scenario.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Interstitial */}
      <section className="py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-ghost-white">
            Your badge doesn't stop working because you weren't productive enough.
          </h2>
          <p className="mt-4 text-muted-foreground">
            It stops when you miss the one risk everyone else overlooked.
          </p>
        </div>
      </section>
    </>
  );
};

export default PainCarousel;