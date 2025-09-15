const TrustBar = () => {
  const companies = [
    "Microsoft",
    "McKesson", 
    "Glean",
    "Notion"
  ];

  return (
    <section className="py-16 bg-enterprise-gray/30 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-muted-foreground mb-8 text-lg">
          Built for teams inside companies like
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {companies.map((company, index) => (
            <div 
              key={index}
              className="text-2xl md:text-3xl font-bold text-ghost-white/80 hover:text-electric-blue transition-colors duration-300"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;