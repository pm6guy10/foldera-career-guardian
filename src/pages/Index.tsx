import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import PainSection from "@/components/PainSection";
import ReliefSection from "@/components/ReliefSection";
import AuditVisualization from "@/components/AuditVisualization";
import PricingSection from "@/components/PricingSection";
import DemoForm from "@/components/DemoForm";
import SecuritySection from "@/components/SecuritySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <TrustBar />
      <PainSection />
      <ReliefSection />
      <AuditVisualization />
      <PricingSection />
      <DemoForm />
      <SecuritySection />
      <Footer />
    </div>
  );
};

export default Index;
