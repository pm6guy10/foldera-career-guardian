import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
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
            <Link to="/">
              <Button variant="outline" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-ghost-white mb-8">Terms of Service</h1>
          <div className="prose prose-invert max-w-none">
            <div className="bg-card/50 border border-border rounded-xl p-8 space-y-6">
              
              <section>
                <h2 className="text-2xl font-bold text-ghost-white mb-4">1. Agreement to Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using Foldera, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-ghost-white mb-4">2. Description of Service</h2>
                <p className="text-muted-foreground">
                  Foldera is an AI-powered document analysis and risk detection platform designed for enterprise teams. 
                  Our service scans documents for conflicts, compliance issues, and potential risks to help prevent critical mistakes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-ghost-white mb-4">3. Data Security and Privacy</h2>
                <p className="text-muted-foreground">
                  We implement enterprise-grade security measures including SOC 2 Type II compliance, end-to-end encryption, 
                  and zero-trust architecture. Your data remains confidential and is processed according to our Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-ghost-white mb-4">4. Acceptable Use</h2>
                <p className="text-muted-foreground">
                  You agree to use Foldera only for lawful purposes and in accordance with enterprise policies. 
                  Prohibited uses include attempting to breach security, reverse engineer our algorithms, 
                  or use the service for illegal activities.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-ghost-white mb-4">5. Subscription and Billing</h2>
                <p className="text-muted-foreground">
                  Subscription fees are billed in advance on a monthly or annual basis. All payments are non-refundable 
                  except as required by law or as specified in your enterprise agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-ghost-white mb-4">6. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  While Foldera helps identify risks, users remain responsible for final decisions and document approval. 
                  Our service provides assistance but does not replace human judgment or professional advice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-ghost-white mb-4">7. Termination</h2>
                <p className="text-muted-foreground">
                  Either party may terminate this agreement with 30 days notice. Upon termination, 
                  access to the service will be discontinued and data will be securely deleted according to our retention policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-ghost-white mb-4">8. Contact Information</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms of Service, please contact us at legal@foldera.com or 
                  through our support portal.
                </p>
              </section>

              <div className="border-t border-border pt-6 mt-8">
                <p className="text-sm text-muted-foreground">
                  Last updated: January 2025<br />
                  Effective date: January 2025
                </p>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Terms;