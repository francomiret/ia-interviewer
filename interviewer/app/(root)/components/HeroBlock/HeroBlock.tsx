"use client";

import { TypeAnimation } from "react-type-animation";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export function HeroBlock() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-center flex gap-2 flex-col items-center text-white">
          Practice interviews
          <span className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-[0_0_20px_#3b82f6] px-6 py-2 rounded-xl">
            <TypeAnimation
              sequence={[
                1000,
                "Frontend",
                1000,
                "Backend",
                1000,
                "FullStack",
                1000,
                "Data Science",
                1000,
                "DevOps",
                1000,
                "Data",
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="text-5xl md:text-6xl font-extrabold tracking-tight text-white"
              repeat={Infinity}
            />
          </span>
        </h1>
        <p className="text-blue-200 text-lg md:text-xl font-light mb-12 max-w-xl mx-auto leading-relaxed text-center">
          Prepare for your next job with realistic interview simulations and
          actionable feedback.
        </p>
        <div className="flex items-center justify-center pb-5">
          <Button
            asChild
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-2xl px-20 py-6 text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <Link href="/dashboard" className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              Start Practice Now
            </Link>
          </Button>
        </div>
        <div className="flex items-center gap-8 text-sm text-blue-200 justify-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            +5 interview types
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full" />
            No credit card required
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full" />
            Instant feedback
          </div>
        </div>
      </div>
    </section>
  );
}
