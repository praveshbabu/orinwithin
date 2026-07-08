"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Heart,
  Leaf,
  Sparkles,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function OrinWithinWebsite() {
  const services = [
    {
      icon: <Heart className="h-7 w-7" />,
      title: "Life Coaching",
      text: "Personal guidance to help you gain clarity, confidence, and direction in life.",
    },
    {
      icon: <Leaf className="h-7 w-7" />,
      title: "Mindset & Wellbeing",
      text: "Build calm, balance, and resilience through simple practical tools.",
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: "Personal Growth Sessions",
      text: "One-on-one support to help you create meaningful change and move forward.",
    },
  ];

  const benefits = [
    "Find clarity when life feels confusing",
    "Build confidence in your decisions",
    "Create healthier routines and habits",
    "Improve emotional balance and self-awareness",
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-stone-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src="/Logo.jpg"
              alt="Orin Within Logo"
              className="h-12 w-12 rounded-full object-cover"
            />
            <span className="text-xl font-semibold tracking-tight">
              Orin Within
            </span>
          </div>

          <nav className="hidden gap-8 text-sm font-medium text-stone-700 md:flex">
            <a href="#about" className="hover:text-stone-950">
              About
            </a>
            <a href="#services" className="hover:text-stone-950">
              Services
            </a>
            <a href="#contact" className="hover:text-stone-950">
              Contact
            </a>
          </nav>

          <Button className="rounded-full bg-stone-900 px-5 text-white hover:bg-stone-800">
            Book a Session
          </Button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(120,113,108,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(41,37,36,0.10),transparent_30%)]" />

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-medium text-stone-700 shadow-sm">
                Coaching for clarity, calm, and personal growth
              </p>

              <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl">
                Discover the strength already within you.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-stone-700">
                Orin Within helps you reconnect with your purpose, shift your
                mindset, and take confident steps towards a more balanced and
                meaningful life.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button className="rounded-full bg-stone-900 px-7 py-6 text-base text-white hover:bg-stone-800">
                  Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <Button
                  variant="outline"
                  className="rounded-full border-stone-300 px-7 py-6 text-base"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="rounded-[2rem] bg-white p-4 shadow-2xl shadow-stone-300/50">
                <div className="rounded-[1.5rem] bg-gradient-to-br from-stone-200 via-stone-100 to-white p-8">
                  <div className="flex min-h-[420px] flex-col justify-between rounded-[1.25rem] border border-white/70 bg-white/70 p-8 backdrop-blur">
                    <div>
                      <Sparkles className="h-10 w-10 text-stone-700" />
                      <h2 className="mt-8 text-3xl font-semibold">
                        Pause. Reflect. Grow.
                      </h2>
                      <p className="mt-4 text-stone-700">
                        A safe space to explore who you are, where you are
                        going, and what you need to move forward.
                      </p>
                    </div>

                    <div className="grid gap-3">
                      {benefits.slice(0, 3).map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 rounded-full bg-white px-4 py-3 text-sm shadow-sm"
                        >
                          <CheckCircle2 className="h-5 w-5 text-stone-700" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
                About Orin Within
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight">
                A gentle coaching space for real life change.
              </h2>
            </div>

            <div className="text-lg leading-8 text-stone-700">
              <p>
                Orin Within is built on the belief that transformation starts
                from within. Through calm conversation, thoughtful reflection,
                and practical action steps, we help you reconnect with your
                inner clarity and create meaningful progress.
              </p>

              <p className="mt-5">
                Whether you are feeling stuck, seeking direction, or ready to
                grow into your next chapter, our sessions are designed to
                support you with warmth, honesty, and encouragement.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
                Services
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight">
                Support for your personal journey
              </h2>
              <p className="mt-4 text-lg text-stone-700">
                Practical coaching sessions designed to help you slow down,
                understand yourself, and move forward with purpose.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <Card
                  key={service.title}
                  className="rounded-3xl border-stone-200 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <CardContent className="p-8">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-100 text-stone-800">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-semibold">
                      {service.title}
                    </h3>
                    <p className="mt-4 leading-7 text-stone-700">
                      {service.text}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 rounded-[2rem] bg-stone-900 p-8 text-white md:grid-cols-2 md:p-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-300">
                Why choose us
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight">
                Small steps. Deep clarity. Lasting change.
              </h2>
              <p className="mt-5 text-lg leading-8 text-stone-300">
                We focus on simple, honest, and practical guidance. No pressure.
                No judgement. Just a grounded space to help you move forward.
              </p>
            </div>

            <div className="grid gap-4">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-white/10 p-4"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-white" />
                  <span className="text-stone-100">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-stone-100 py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
              Client words
            </p>
            <blockquote className="mt-6 text-3xl font-medium leading-snug text-stone-900">
              “The sessions helped me feel calmer, clearer, and more confident
              about the direction I wanted to take.”
            </blockquote>
            <p className="mt-6 text-stone-600">— Coaching client</p>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-stone-200 md:p-12">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
                  Contact
                </p>
                <h2 className="mt-4 text-4xl font-bold tracking-tight">
                  Ready to begin?
                </h2>
                <p className="mt-5 text-lg leading-8 text-stone-700">
                  Take the first step towards clarity and growth. Reach out to
                  book an introductory session.
                </p>
              </div>

              <div className="rounded-3xl bg-stone-50 p-6">
                <div className="grid gap-4">
                  <input
                    className="rounded-2xl border border-stone-200 px-4 py-4 outline-none focus:border-stone-500"
                    placeholder="Your name"
                  />
                  <input
                    className="rounded-2xl border border-stone-200 px-4 py-4 outline-none focus:border-stone-500"
                    placeholder="Email address"
                  />
                  <textarea
                    className="min-h-32 rounded-2xl border border-stone-200 px-4 py-4 outline-none focus:border-stone-500"
                    placeholder="How can we help?"
                  />
                  <Button className="rounded-full bg-stone-900 py-6 text-base text-white hover:bg-stone-800">
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-stone-600 md:flex-row">
          <p>© 2026 Orin Within. All rights reserved.</p>
          <p>Clarity • Calm • Growth</p>
        </div>
      </footer>
    </div>
  );
}
