"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function OrinWithinWebsite() {
  const pillars = [
    "🧠 Coaching",
    "🥗 Nutrition",
    "🌱 Behaviour Change",
    "🌀 Hypnotherapy",
    "🏢 Corporate Wellness",
  ];

  const offerings = [
    {
      number: "1",
      title: "Corporate Wellness",
      intro:
        "We help organisations build healthier teams, better leaders, reduced burnout, higher engagement, and stronger workplace culture.",
      services: [
        "Corporate Wellness Workshops",
        "Leadership Development",
        "Stress & Burnout Programs",
        "Team Coaching",
        "Behaviour Change Programs",
      ],
      clients: [
        "Corporate Teams",
        "Childcare Organisations",
        "Small Businesses",
        "Leadership Teams",
      ],
    },
    {
      number: "2",
      title: "Nutrition & Lifestyle Transformation",
      intro:
        "We help individuals and families create healthier lifestyles through practical education, support, and habit change.",
      services: [
        "Nutrition Coaching",
        "Meal Planning",
        "Family Wellness Programs",
        "Cooking Education",
        "Healthy Lifestyle Workshops",
        "Behaviour Change Support",
      ],
      clients: [
        "Parents",
        "Families",
        "Busy Professionals",
        "Childcare Communities",
      ],
    },
    {
      number: "3",
      title: "Life Coaching & Performance Coaching",
      intro:
        "Helping people move from where they are to where they want to be with clarity, direction, and accountability.",
      services: [
        "Goal Setting",
        "Accountability Coaching",
        "Leadership Coaching",
        "Career Transition Coaching",
        "Purpose & Direction Coaching",
        "Personal Growth Programs",
      ],
      clients: [
        "Professionals",
        "Business Owners",
        "Parents",
        "Emerging Leaders",
      ],
    },
    {
      number: "4",
      title: "Hypnotherapy & Mindset Reset",
      intro:
        "Helping people create change at the subconscious level so new habits and behaviours can take root.",
      services: [
        "Smoking Cessation",
        "Stress Management",
        "Confidence Building",
        "Habit Change",
        "Sleep Support",
        "Anxiety Reduction",
      ],
      clients: [
        "Individuals seeking behavioural change",
        "Coaching clients wanting faster results",
      ],
    },
  ];

  const individualPrograms = [
    "6 Week Accelerator",
    "8 Week Transformation",
    "12 Week Deep Change Program",
  ];

  const corporatePrograms = [
    "Half Day Workshops",
    "Full Day Wellness Programs",
    "6 Week Team Programs",
    "12 Week Leadership Programs",
  ];

  const whoWeServe = [
    "👨‍👩‍👧 Families",
    "👩‍💼 Professionals",
    "🏢 Organisations",
    "🌏 Communities",
  ];

  const idealClients = [
    {
      title: "The Overwhelmed Parent",
      quote: "I don’t know how to create healthier habits for my family.",
    },
    {
      title: "The Burnt-Out Professional",
      quote: "I have success but no balance.",
    },
    {
      title: "The Corporate Leader",
      quote: "My team is stressed and disengaged.",
    },
    {
      title: "The Individual Seeking Change",
      quote: "I know I need to change but I don’t know where to start.",
    },
  ];

  const whatWeSell = [
    "Better Health",
    "Better Habits",
    "Better Relationships",
    "Better Leadership",
    "Better Performance",
    "Greater Purpose",
    "Lasting Transformation",
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
            <a href="#offerings" className="hover:text-stone-950">
              Offerings
            </a>
            <a href="#programs" className="hover:text-stone-950">
              Programs
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
                Illuminate The Potential Within
              </p>

              <h1 className="text-5xl font-bold uppercase leading-tight tracking-tight md:text-6xl">
                Orin Within
              </h1>

              <p className="mt-6 max-w-xl text-xl leading-8 text-stone-700">
                Helping individuals, families and organisations create lasting
                transformation from within.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button className="rounded-full bg-stone-900 px-7 py-6 text-base text-white hover:bg-stone-800">
                  Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <Button
                  variant="outline"
                  className="rounded-full border-stone-300 px-7 py-6 text-base"
                >
                  Explore Programs
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
                        Transformation Begins Within
                      </h2>
                      <p className="mt-4 text-stone-700">
                        Illuminate • Transform • Thrive
                      </p>
                    </div>

                    <div className="grid gap-3">
                      {whatWeSell.slice(0, 5).map((item) => (
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
                What is Orin Within?
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight">
                A lifestyle transformation and human potential company.
              </h2>
            </div>

            <div className="text-lg leading-8 text-stone-700">
              <p>
                Orin Within combines coaching, nutrition, behaviour change,
                hypnotherapy and corporate wellness to help people become the
                best version of themselves.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {pillars.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white px-5 py-4 text-base font-medium shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="offerings" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
                Our Core Offerings
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight">
                Support for individuals, families and organisations
              </h2>
              <p className="mt-4 text-lg text-stone-700">
                We create practical transformation programs across wellness,
                mindset, leadership, nutrition and behaviour change.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {offerings.map((offering) => (
                <Card
                  key={offering.title}
                  className="rounded-3xl border-stone-200 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <CardContent className="p-8">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-900 text-2xl font-bold text-white">
                      {offering.number}
                    </div>

                    <h3 className="text-2xl font-semibold">
                      {offering.title}
                    </h3>

                    <p className="mt-4 leading-7 text-stone-700">
                      {offering.intro}
                    </p>

                    <div className="mt-6">
                      <h4 className="font-semibold text-stone-900">
                        Services
                      </h4>
                      <div className="mt-3 grid gap-2">
                        {offering.services.map((service) => (
                          <div
                            key={service}
                            className="flex items-start gap-2 text-sm text-stone-700"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-stone-700" />
                            <span>{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="font-semibold text-stone-900">
                        Ideal Clients
                      </h4>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {offering.clients.map((client) => (
                          <span
                            key={client}
                            className="rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-700"
                          >
                            {client}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="programs" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[2rem] bg-stone-900 p-8 text-white md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-300">
                Individual Programs
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight">
                Personal transformation programs
              </h2>

              <div className="mt-8 grid gap-4">
                {individualPrograms.map((program) => (
                  <div
                    key={program}
                    className="flex items-center gap-3 rounded-2xl bg-white/10 p-4"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-white" />
                    <span>{program}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-stone-200 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
                Corporate Programs
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight">
                Workplace wellness and leadership programs
              </h2>

              <div className="mt-8 grid gap-4">
                {corporatePrograms.map((program) => (
                  <div
                    key={program}
                    className="flex items-center gap-3 rounded-2xl bg-stone-100 p-4"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-stone-700" />
                    <span>{program}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-stone-100 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
                Who We Serve
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight">
                Built for real people, real families and real workplaces
              </h2>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {whoWeServe.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl bg-white p-6 text-center text-lg font-semibold shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
              Our Ideal Clients
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              We support people who are ready for change
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {idealClients.map((client) => (
              <Card
                key={client.title}
                className="rounded-3xl border-stone-200 shadow-sm"
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold">{client.title}</h3>
                  <p className="mt-4 text-lg italic leading-8 text-stone-700">
                    “{client.quote}”
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
            <div className="rounded-[2rem] bg-stone-900 p-8 text-white md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-300">
                What Makes Us Different?
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight">
                Most businesses offer information. We create transformation.
              </h2>
              <p className="mt-6 text-lg leading-8 text-stone-300">
                Most businesses focus on external solutions. We focus on
                internal change that creates external results.
              </p>
            </div>

            <div className="rounded-[2rem] bg-stone-50 p-8 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
                Our Philosophy
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight">
                The answers people seek are often already within them.
              </h2>
              <p className="mt-6 text-lg leading-8 text-stone-700">
                Our role is to help illuminate that potential and create the
                systems, support and accountability that allow it to grow.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-[2rem] bg-stone-900 p-8 text-white md:p-12">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-300">
                  Our Simple Explanation
                </p>
                <h2 className="mt-4 text-4xl font-bold tracking-tight">
                  What do we sell?
                </h2>
                <p className="mt-5 text-lg leading-8 text-stone-300">
                  We sell transformation that helps people improve their health,
                  habits, relationships, leadership, performance and purpose.
                </p>
              </div>

              <div className="grid gap-4">
                {whatWeSell.map((item) => (
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
                  Take the first step towards clarity, health, growth and
                  transformation. Reach out to book an introductory session.
                </p>
              </div>

              <div className="rounded-3xl bg-stone-50 p-6">
                <div className="grid gap-4">
                  <input
                    className="rounded-2xl border border-stone-200 px-4 py-4 outline-none focus:border-stone-500"
                    placeholder="Your name"
                  />
                  <input
                    type="email"
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

        <section className="bg-stone-100 py-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-4xl font-bold uppercase tracking-tight">
              Orin Within
            </h2>
            <p className="mt-4 text-2xl font-medium">
              “Transformation Begins Within”
            </p>
            <p className="mt-4 text-lg text-stone-700">
              Illuminate • Transform • Thrive
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-stone-600 md:flex-row">
          <p>© 2026 Orin Within. All rights reserved.</p>
          <p>Illuminate • Transform • Thrive</p>
        </div>
      </footer>
    </div>
  );
}
