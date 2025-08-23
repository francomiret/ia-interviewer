"use client";

import { ArrowRight, Sparkles } from "lucide-react";

export function Contacts() {
  const stats = [
    {
      number: "10K+",
      label: "Developers Trained",
    },
    {
      number: "94%+",
      label: "Success Rate",
    },
    {
      number: "500+",
      label: "Companies Hiring",
    },
  ];

  return (
    <section
      id="contacts"
      className="py-24 px-6 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 min-h-screen flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Hero Content */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Ace
            <br />
            Your Next Interview?
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-12 leading-relaxed">
            Join thousands of developers who've transformed their interview
            skills and landed their dream jobs. Start practicing today.
          </p>

          {/* CTA Button */}
          <button className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold text-lg px-12 py-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 mx-auto">
            <Sparkles className="w-6 h-6" />
            Start Free Trial
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-20"></div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-blue-400 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-xl text-blue-200 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-20 pt-12 border-t border-blue-600/30">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-blue-200">support@iainterviewer.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Community
              </h3>
              <p className="text-blue-200">Join our Discord server</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Support</h3>
              <p className="text-blue-200">24/7 Help Center</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
