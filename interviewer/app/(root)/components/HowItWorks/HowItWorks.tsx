"use client";

import { howItWorksData } from "./HowItWorksData";

export function HowItWorks() {
  return (
    <section
      className="py-24 px-6 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 min-h-screen flex flex-col justify-center"
      id="how-it-works"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Get interview ready in just a few simple steps
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {howItWorksData.map((item, index) => (
            <div key={item.title} className="relative group">
              <div className="bg-blue-800/50 border-2 border-blue-600 rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-400 hover:-translate-y-2">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-400/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-white bg-blue-600 absolute -top-4 -left-4 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
