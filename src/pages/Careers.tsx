import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Clock, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const Careers = () => {
  const jobs = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      salary: "$180k - $220k",
      description: "Build and optimize our AI models for document analysis and risk detection. Work with cutting-edge NLP and machine learning technologies.",
      requirements: ["5+ years ML/AI experience", "Python, TensorFlow/PyTorch", "NLP expertise", "Enterprise software background"]
    },
    {
      title: "Enterprise Security Engineer", 
      department: "Security",
      location: "Remote / New York",
      type: "Full-time",
      salary: "$160k - $200k",
      description: "Lead our security initiatives, ensure SOC 2 compliance, and build security-first features for enterprise clients.",
      requirements: ["Security certifications (CISSP, CISM)", "Zero-trust architecture", "Compliance frameworks", "Incident response"]
    },
    {
      title: "Product Manager - Enterprise",
      department: "Product",
      location: "Remote",
      type: "Full-time", 
      salary: "$140k - $180k",
      description: "Drive product strategy for enterprise features, work closely with Fortune 500 clients, and shape our roadmap.",
      requirements: ["Enterprise B2B experience", "Technical background", "Customer research skills", "Data-driven decisions"]
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote / Chicago", 
      type: "Full-time",
      salary: "$90k - $120k",
      description: "Help enterprise clients maximize value from Foldera, drive adoption, and ensure successful implementations.",
      requirements: ["Enterprise customer success", "Technical aptitude", "Relationship building", "SaaS experience"]
    }
  ];

  const benefits = [
    "Competitive equity package",
    "Comprehensive health, dental, vision",
    "Unlimited PTO policy", 
    "$5,000 learning & development budget",
    "Top-tier equipment and home office setup",
    "Quarterly team retreats"
  ];

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

      <main>
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-ghost-white mb-6">
              Join the team building the AI that <span className="text-electric-blue">never ghosts</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're preventing career-ending mistakes for teams at Microsoft, McKesson, and beyond. 
              Help us protect what matters most in enterprise environments.
            </p>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-16 bg-gradient-glow">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-electric-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-ghost-white mb-2">Mission-Critical Impact</h3>
                <p className="text-muted-foreground">Your code protects careers and prevents disasters at Fortune 500 companies.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-electric-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-ghost-white mb-2">Cutting-Edge Technology</h3>
                <p className="text-muted-foreground">Work with the latest AI/ML technologies in a high-stakes environment.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-electric-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-ghost-white mb-2">Security-First Culture</h3>
                <p className="text-muted-foreground">Enterprise-grade security isn't an afterthought—it's in our DNA.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-ghost-white mb-12 text-center">Open Positions</h2>
            
            <div className="space-y-6">
              {jobs.map((job, index) => (
                <Card key={index} className="bg-card/50 border-border hover:border-electric-blue/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl text-ghost-white">{job.title}</CardTitle>
                        <CardDescription className="text-electric-blue font-semibold">{job.department}</CardDescription>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="gap-1">
                          <MapPin className="w-3 h-3" />
                          {job.location}
                        </Badge>
                        <Badge variant="outline" className="gap-1">
                          <Clock className="w-3 h-3" />
                          {job.type}
                        </Badge>
                        <Badge variant="outline" className="gap-1">
                          <DollarSign className="w-3 h-3" />
                          {job.salary}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    <div>
                      <h4 className="font-semibold text-ghost-white mb-2">Key Requirements:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6">
                      <Button className="bg-gradient-primary hover:shadow-electric transition-all duration-300">
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-card/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-ghost-white mb-12">Benefits & Perks</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 text-left">
                  <div className="w-6 h-6 bg-success/20 rounded-full flex items-center justify-center">
                    <span className="text-success text-sm">✓</span>
                  </div>
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-ghost-white mb-4">
              Don't see the right role?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always looking for exceptional talent. Send us your resume and tell us how you'd help build the AI that never ghosts.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-electric transition-all duration-300 px-8 py-6 text-lg">
              Send General Application
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Careers;