const TrustBar = () => {
  return (
    <>
      {/* Interstitial */}
      <section className="py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-ghost-white">
            This isn't about saving time. It's about saving face.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Nobody gets fired for wasting 9 hours a week searching folders. 
            Careers end when the wrong number slips through. Foldera is the guardrail.
          </p>
        </div>
      </section>

      {/* Credibility Grid */}
      <section className="pb-20 md:pb-24 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card/50 border border-border backdrop-blur-sm rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <p className="text-sm font-semibold text-success flex items-center justify-center gap-2">
              <span>✅</span>
              SOC 2 Type II Compliant
            </p>
            <p className="text-sm font-semibold text-success flex items-center justify-center gap-2">
              <span>✅</span>
              GDPR & HIPAA Ready
            </p>
            <p className="text-sm font-semibold text-success flex items-center justify-center gap-2">
              <span>✅</span>
              Integrates with Teams, Slack, GDrive
            </p>
            <p className="text-sm font-semibold text-success flex items-center justify-center gap-2">
              <span>✅</span>
              Proven ROI: Saved $2.3M for a F100 Client
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustBar;