"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="text-center py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4">
        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
          Stop Babysitting the AI Productivity Ghost.
        </h1>

        {/* Subcopy */}
        <p className="text-xl text-slate-300 mb-8">
          You don’t prompt it. You don’t pray it remembers. Foldera works while
          you sleep — fixing chaos before it explodes.
        </p>

        {/* CTA */}
        <div className="flex justify-center gap-4 mb-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition">
            Show Me My First Briefing
          </button>
          <button className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition">
            Book a Security-Cleared Demo
          </button>
        </div>

        {/* Audit Log Simulation */}
        <div className="bg-black text-green-400 font-mono text-left p-6 rounded-xl shadow-lg max-w-2xl mx-auto">
          <p>[07:18:42] Scanning /clients/contracts/proposal.docx</p>
          <p>[07:18:44] Conflict detected → Drafting counter-offer</p>
          <p>[07:19:10] Risk neutralized ✅</p>
          <p>[07:19:16] Reviewing /boarddecks/Q4_financials.pptx</p>
          <p>[07:19:31] Data inconsistency flagged → Cross-referencing sources</p>
          <p>[07:19:42] Correction applied ✅</p>
        </div>
      </div>
    </section>
  );
}
