import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
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
          <h1 className="text-4xl font-bold text-ghost-white mb-8">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none">
            <div className="bg-card/50 border border-border rounded-xl p-8 space-y-6">
              
              <section>
                <h2 className="text-2xl font-bold text-ghost-white mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  We collect information you provide directly to us, such as when you create an account, 
                  upload documents for analysis, or contact our support team.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Account information (name, email, company details)</li>
                  <li>Document content for analysis and risk detection</li>
                  <li>Usage data and analytics to improve our service</li>
                  <li>Communication records for support purposes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-ghost-white mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide document analysis and risk detection services</li>
                  <li>Maintain and improve our AI algorithms</li>
                  <li>Send service updates and security notifications</li>
                  <li>Comply with legal obligations and enterprise requirements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-ghost-white mb-4">3. Data Security</h2>
                <p className="text-muted-foreground">
                  We implement industry-leading security measures to protect your data:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                  <li>SOC 2 Type II certified security controls</li>
                  <li>End-to-end encryption for data in transit and at rest</li>
                  <li>Zero-trust architecture with multi-factor authentication</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>GDPR and HIPAA compliance frameworks</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-ghost-white mb-4">4. Data Sharing</h2>
                <p className="text-muted-foreground">
                  We do not sell, trade, or rent your personal information to third parties. 
                  We may share information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements or court orders</li>
                  <li>To protect our rights and prevent fraud</li>
                  <li>With service providers under strict confidentiality agreements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-ghost-white mb-4">5. Data Retention</h2>
                <p className="text-muted-foreground">
                  We retain your data only as long as necessary to provide our services and comply with legal obligations. 
                  Document content is typically processed in real-time and not permanently stored unless required for 
                  audit trails or compliance purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-ghost-white mb-4">6. Your Rights</h2>
                <p className="text-muted-foreground">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                  <li>Access and review your personal data</li>
                  <li>Request corrections to inaccurate information</li>
                  <li>Delete your account and associated data</li>
                  <li>Export your data in a portable format</li>
                  <li>Opt out of non-essential communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-ghost-white mb-4">7. International Transfers</h2>
                <p className="text-muted-foreground">
                  We operate globally and may transfer your data to secure facilities in different countries. 
                  All transfers comply with applicable data protection laws and include appropriate safeguards.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-ghost-white mb-4">8. Contact Us</h2>
                <p className="text-muted-foreground">
                  For privacy-related questions or to exercise your rights, contact our Data Protection Officer at 
                  privacy@foldera.com or through our secure support portal.
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

export default Privacy;