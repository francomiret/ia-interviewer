"use client";

import { TypeAnimation } from "react-type-animation";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export function HeroBlock() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-center flex gap-2 flex-col items-center">
          Practice interviews
          <span className="inline-block bg-indigo-500 text-white shadow-[0_0_20px_#6366f1] px-6 py-2 rounded-xl">
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
        <p className="text-indigo-100 text-lg md:text-xl font-light mb-12 max-w-xl mx-auto leading-reload text-center">
          Prepare for your next job with realistic interview simulations and
          actionable feedback.
        </p>
        <div className="flex items-center justify-center pb-5">
          <Button
            asChild
            className="bg-purple-600 text-white rounded-lg px-20 py-6 text-lg font-semibold shadow-lg transition duration-300 ease-in-out"
          >
            <Link href="/dashboard">
              <Sparkles className=" group-hover:rotate-12 transition-transform" />
              Start Practice Now
            </Link>
          </Button>
        </div>
        <div className="flex items-center gap-8 text-sm text-slate-200 justify-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            +5 interview types
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full" />
            No credit card required
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            Instant feedback
          </div>
        </div>
      </div>
    </section>
  );
}
