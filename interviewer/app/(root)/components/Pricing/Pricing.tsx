"use client";

import { Check } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for getting started",
      features: [
        "1 practice interviews",
        "Basic coding questions",
        "General feedback",
        "Community support",
      ],
      buttonText: "Start Free",
      buttonVariant: "outline" as const,
      popular: false,
    },
    {
      name: "Pro",
      price: "$29",
      description: "For serious interview preparation",
      features: [
        "Unlimited practice interviews",
        "All question types & difficulties",
        "Detailed AI feedback & analysis",
        "Company-specific questions",
        "Progress tracking & analytics",
        "Priority support",
      ],
      buttonText: "Start Pro Trial",
      buttonVariant: "default" as const,
      popular: true,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-24 px-6 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 min-h-screen flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose your plan
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Start free, upgrade when you are ready to ace every interview
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-blue-800/50 border-2 rounded-3xl p-8 ${
                plan.popular
                  ? "border-blue-400 transform scale-105"
                  : "border-blue-600"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-500 text-blue-900 px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <span className="text-xs">⭐</span>
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="text-5xl font-bold text-white mb-2">
                  {plan.price}
                </div>
                <p className="text-blue-200">{plan.description}</p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-blue-100">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 ${
                  plan.buttonVariant === "default"
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transform hover:scale-105"
                    : "border-2 border-blue-400 text-blue-200 hover:bg-blue-400 hover:text-blue-900"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
