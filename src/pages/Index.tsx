import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import PainCarousel from "@/components/PainCarousel";
import ReliefSection from "@/components/ReliefSection";
import AuditVisualization from "@/components/AuditVisualization";
import PricingSection from "@/components/PricingSection";
import DemoForm from "@/components/DemoForm";
import SecuritySection from "@/components/SecuritySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/70 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📁</span>
              <h1 className="text-2xl font-bold text-ghost-white">Foldera</h1>
            </div>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <TrustBar />
        <PainCarousel />
        <ReliefSection />
        <AuditVisualization />
        <PricingSection />
        <DemoForm />
        <SecuritySection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
