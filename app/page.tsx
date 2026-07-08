"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Building2,
  CalendarDays,
  CheckCircle2,
  Compass,
  HandHeart,
  HeartPulse,
  Leaf,
  LineChart,
  Menu,
  Moon,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
  Utensils,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function OrinWithinWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { label: "About", href: "#about" },
    { label: "Offerings", href: "#offerings" },
    { label: "Programs", href: "#programs" },
    { label: "Clients", href: "#clients" },
    { label: "Contact", href: "#contact" },
  ];

  const pillars = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Coaching",
      text: "Clarity, direction, accountability and personal growth.",
    },
    {
      icon: <Utensils className="h-6 w-6" />,
      title: "Nutrition",
      text: "Healthy habits, family wellness and practical lifestyle support.",
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Behaviour Change",
      text: "Simple systems that help people create lasting change.",
    },
    {
      icon: <Moon className="h-6 w-6" />,
      title: "Hypnotherapy",
      text: "Mindset reset and subconscious support for deeper change.",
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Corporate Wellness",
      text: "Healthier teams, stronger leadership and better culture.",
    },
  ];

  const offerings = [
    {
      icon: <Building2 className="h-7 w-7" />,
      title: "Corporate Wellness",
      intro:
        "Helping organisations build healthier teams, better leaders, reduced burnout, stronger engagement and a better workplace culture.",
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
      icon: <Utensils className="h-7 w-7" />,
      title: "Nutrition & Lifestyle Transformation",
      intro:
        "Helping individuals and families create healthier lifestyles through nutrition, cooking education, meal planning and behaviour change.",
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
      icon: <Target className="h-7 w-7" />,
      title: "Life Coaching & Performance Coaching",
      intro:
        "Helping people move from where they are to where they want to be with clarity, goals, purpose, direction and accountability.",
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
      icon: <Brain className="h-7 w-7" />,
      title: "Hypnotherapy & Mindset Reset",
      intro:
        "Helping people create change at the subconscious level so confidence, habits, calm and personal transformation can grow.",
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

  const outcomes = [
    {
      icon: <HeartPulse className="h-6 w-6" />,
      title: "Better Health",
      text: "Support people to build healthier routines, habits and lifestyle choices.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Better Habits",
      text: "Create practical systems that make positive change easier to sustain.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Better Relationships",
      text: "Improve self-awareness, communication, emotional balance and connection.",
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Better Performance",
      text: "Help individuals and teams perform with clarity, energy and purpose.",
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

  const process = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Illuminate",
      text: "We help you see what is happening within — your habits, patterns, strengths and potential.",
    },
    {
      icon: <Compass className="h-6 w-6" />,
      title: "Transform",
      text: "We create practical steps, supportive systems and accountability to help you move forward.",
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Thrive",
      text: "We help you build lasting change in health, mindset, relationships, leadership and performance.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f3ea] text-stone-950">
      <header className="sticky top-0 z-50 border-b border-white/60 bg-[#f8f3ea]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="rounded-full bg-white p-1 shadow-sm ring-1 ring-stone-200">
              <img
                src="/Logo.jpg"
                alt="Orin Within Logo"
                className="h-11 w-11 rounded-full object-cover"
              />
            </div>
            <div>
              <p className="text-lg font-bold uppercase tracking-[0.18em]">
                Orin Within
              </p>
              <p className="text-xs font-medium text-stone-600">
                Illuminate The Potential Within
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-stone-700 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition hover:text-stone-950"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button className="rounded-full bg-stone-950 px-6 text-white hover:bg-stone-800">
              Book a Discovery Call
            </Button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-full bg-white p-3 shadow-sm ring-1 ring-stone-200 lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-stone-200 bg-[#f8f3ea] px-5 py-5 lg:hidden">
            <nav className="grid gap-4 text-sm font-semibold text-stone-700">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-2xl bg-white px-4 py-3 shadow-sm"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute left-1/2 top-0 -z-10 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-amber-200/40 blur-3xl" />
          <div className="absolute right-0 top-20 -z-10 h-[420px] w-[420px] rounded-full bg-emerald-200/30 blur-3xl" />
          <div className="absolute bottom-0 left-0 -z-10 h-[360px] w-[360px] rounded-full bg-orange-200/30 blur-3xl" />

          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-stone-700 shadow-sm ring-1 ring-stone-200">
                <Sparkles className="h-4 w-4 text-amber-700" />
                Lifestyle Transformation & Human Potential
              </div>

              <h1 className="mt-7 max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight text-stone-950 md:text-7xl">
                Illuminate The Potential Within
              </h1>

              <p className="mt-7 max-w-2xl text-xl leading-9 text-stone-700">
                Helping individuals, families and organisations create lasting
                transformation from within through coaching, nutrition,
                behaviour change, hypnotherapy and corporate wellness.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button className="rounded-full bg-stone-950 px-8 py-6 text-base text-white hover:bg-stone-800">
                  Start Your Transformation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <Button
                  variant="outline"
                  className="rounded-full border-stone-300 bg-white/70 px-8 py-6 text-base"
                >
                  Explore Our Programs
                </Button>
              </div>

              <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
                <div className="rounded-3xl bg-white/80 p-4 shadow-sm ring-1 ring-stone-200">
                  <p className="text-2xl font-black">5</p>
                  <p className="mt-1 text-xs font-medium text-stone-600">
                    Core Transformation Areas
                  </p>
                </div>
                <div className="rounded-3xl bg-white/80 p-4 shadow-sm ring-1 ring-stone-200">
                  <p className="text-2xl font-black">6–12</p>
                  <p className="mt-1 text-xs font-medium text-stone-600">
                    Week Change Programs
                  </p>
                </div>
                <div className="rounded-3xl bg-white/80 p-4 shadow-sm ring-1 ring-stone-200">
                  <p className="text-2xl font-black">360°</p>
                  <p className="mt-1 text-xs font-medium text-stone-600">
                    Mind, Body & Lifestyle
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="relative"
            >
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-stone-950/10 blur-2xl" />
              <div className="rounded-[2.5rem] bg-stone-950 p-4 shadow-2xl shadow-stone-400/40">
                <div className="rounded-[2rem] bg-gradient-to-br from-amber-100 via-white to-emerald-50 p-7">
                  <div className="rounded-[1.5rem] border border-white/80 bg-white/75 p-7 shadow-inner backdrop-blur">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-stone-500">
                          Orin Within
                        </p>
                        <h2 className="mt-3 text-3xl font-black tracking-tight">
                          Transformation Begins Within
                        </h2>
                      </div>
                      <div className="rounded-full bg-stone-950 p-4 text-white">
                        <HandHeart className="h-8 w-8" />
                      </div>
                    </div>

                    <div className="mt-8 grid gap-4">
                      {[
                        "Better Health",
                        "Better Habits",
                        "Better Relationships",
                        "Better Leadership",
                        "Greater Purpose",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm ring-1 ring-stone-100"
                        >
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className="h-5 w-5 text-emerald-700" />
                            <span className="font-semibold">{item}</span>
                          </div>
                          <ArrowRight className="h-4 w-4 text-stone-400" />
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 rounded-3xl bg-stone-950 p-6 text-white">
                      <p className="text-sm font-medium text-stone-300">
                        Our Promise
                      </p>
                      <p className="mt-3 text-2xl font-bold leading-snug">
                        We do not just offer information. We create lasting
                        transformation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-stone-200 bg-white/70 py-6">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-5 text-sm font-bold uppercase tracking-[0.18em] text-stone-600 lg:px-8">
            <span>Coaching</span>
            <span className="text-stone-300">•</span>
            <span>Nutrition</span>
            <span className="text-stone-300">•</span>
            <span>Behaviour Change</span>
            <span className="text-stone-300">•</span>
            <span>Hypnotherapy</span>
            <span className="text-stone-300">•</span>
            <span>Corporate Wellness</span>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-amber-800">
                What is Orin Within?
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                A lifestyle transformation and human potential company.
              </h2>
              <p className="mt-6 text-lg leading-8 text-stone-700">
                We combine practical coaching, wellbeing systems and inner
                transformation to help people become the best version of
                themselves.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {pillars.map((pillar) => (
                <Card
                  key={pillar.title}
                  className="rounded-3xl border-stone-200 bg-white/80 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <CardContent className="p-6">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-950 text-white">
                      {pillar.icon}
                    </div>
                    <h3 className="text-xl font-bold">{pillar.title}</h3>
                    <p className="mt-3 leading-7 text-stone-700">
                      {pillar.text}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="offerings" className="bg-stone-950 py-24 text-white">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-amber-300">
                Our Core Offerings
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Transformation programs for life, family and work.
              </h2>
              <p className="mt-5 text-lg leading-8 text-stone-300">
                Orin Within supports individuals, families, professionals,
                leaders, teams and organisations through practical,
                human-centred programs.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {offerings.map((offering) => (
                <Card
                  key={offering.title}
                  className="overflow-hidden rounded-[2rem] border-white/10 bg-white/[0.06] text-white shadow-xl"
                >
                  <CardContent className="p-0">
                    <div className="border-b border-white/10 bg-white/[0.05] p-8">
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-stone-950">
                        {offering.icon}
                      </div>
                      <h3 className="text-2xl font-black">{offering.title}</h3>
                      <p className="mt-4 leading-7 text-stone-300">
                        {offering.intro}
                      </p>
                    </div>

                    <div className="grid gap-8 p-8 md:grid-cols-2">
                      <div>
                        <h4 className="font-bold text-amber-200">Services</h4>
                        <div className="mt-4 grid gap-3">
                          {offering.services.map((service) => (
                            <div
                              key={service}
                              className="flex items-start gap-3 text-sm text-stone-200"
                            >
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                              <span>{service}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-amber-200">
                          Ideal Clients
                        </h4>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {offering.clients.map((client) => (
                            <span
                              key={client}
                              className="rounded-full bg-white/10 px-3 py-2 text-xs font-semibold text-stone-100"
                            >
                              {client}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-stone-300/30 ring-1 ring-stone-200">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-amber-800">
                What We Sell
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight">
                Better health. Better habits. Better leadership. Lasting
                transformation.
              </h2>
              <p className="mt-5 text-lg leading-8 text-stone-700">
                Our work helps people create real internal change that produces
                visible external results.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {outcomes.map((outcome) => (
                <div
                  key={outcome.title}
                  className="rounded-3xl bg-white/80 p-6 shadow-sm ring-1 ring-stone-200"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-900">
                    {outcome.icon}
                  </div>
                  <h3 className="text-xl font-bold">{outcome.title}</h3>
                  <p className="mt-3 leading-7 text-stone-700">
                    {outcome.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="programs" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-amber-800">
                Program Structure
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Choose the level of support that fits your transformation.
              </h2>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              <div className="rounded-[2rem] bg-[#f8f3ea] p-8 ring-1 ring-stone-200">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-950 text-white">
                  <Users className="h-7 w-7" />
                </div>
                <h3 className="text-3xl font-black">Individual Programs</h3>
                <p className="mt-4 leading-8 text-stone-700">
                  Designed for people who want personal growth, lifestyle
                  improvement, mindset change and accountability.
                </p>

                <div className="mt-8 grid gap-4">
                  {individualPrograms.map((program) => (
                    <div
                      key={program}
                      className="flex items-center justify-between rounded-2xl bg-white p-5 shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <CalendarDays className="h-5 w-5 text-amber-800" />
                        <span className="font-bold">{program}</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-stone-400" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] bg-stone-950 p-8 text-white">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-stone-950">
                  <Building2 className="h-7 w-7" />
                </div>
                <h3 className="text-3xl font-black">Corporate Programs</h3>
                <p className="mt-4 leading-8 text-stone-300">
                  Designed for organisations that want healthier teams, stronger
                  leadership, reduced burnout and better engagement.
                </p>

                <div className="mt-8 grid gap-4">
                  {corporatePrograms.map((program) => (
                    <div
                      key={program}
                      className="flex items-center justify-between rounded-2xl bg-white/10 p-5"
                    >
                      <div className="flex items-center gap-3">
                        <CalendarDays className="h-5 w-5 text-amber-200" />
                        <span className="font-bold">{program}</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-stone-400" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="clients" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-amber-800">
              Who We Serve
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Built for families, professionals, organisations and communities.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {idealClients.map((client) => (
              <Card
                key={client.title}
                className="rounded-[2rem] border-stone-200 bg-white/80 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-black">{client.title}</h3>
                  <p className="mt-5 text-xl italic leading-9 text-stone-700">
                    “{client.quote}”
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-stone-950 py-24 text-white">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-amber-300">
                  What Makes Us Different?
                </p>
                <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                  Most businesses offer information. We create transformation.
                </h2>
              </div>

              <div className="rounded-[2rem] bg-white/10 p-8">
                <p className="text-lg leading-9 text-stone-200">
                  Most businesses focus on external solutions. We focus on
                  internal change that creates external results. The answers
                  people seek are often already within them. Our role is to help
                  illuminate that potential and create the systems, support and
                  accountability that allow it to grow.
                </p>
              </div>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {process.map((step) => (
                <div
                  key={step.title}
                  className="rounded-[2rem] bg-white/[0.06] p-8 ring-1 ring-white/10"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-stone-950">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-black">{step.title}</h3>
                  <p className="mt-4 leading-8 text-stone-300">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="overflow-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-stone-300/30 ring-1 ring-stone-200">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="bg-gradient-to-br from-stone-950 to-stone-800 p-8 text-white md:p-12">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-amber-300">
                  Contact Orin Within
                </p>
                <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                  Ready to begin your transformation?
                </h2>
                <p className="mt-6 text-lg leading-9 text-stone-300">
                  Take the first step towards clarity, better health, stronger
                  habits, improved leadership and lasting transformation.
                </p>

                <div className="mt-10 grid gap-4">
                  {[
                    "Book an introductory session",
                    "Ask about corporate wellness programs",
                    "Discuss family lifestyle transformation",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 md:p-12">
                <div className="grid gap-5">
                  <input
                    className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4 outline-none transition focus:border-stone-500 focus:bg-white"
                    placeholder="Your name"
                  />
                  <input
                    type="email"
                    className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4 outline-none transition focus:border-stone-500 focus:bg-white"
                    placeholder="Email address"
                  />
                  <select className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4 outline-none transition focus:border-stone-500 focus:bg-white">
                    <option>What are you interested in?</option>
                    <option>Corporate Wellness</option>
                    <option>Nutrition & Lifestyle Transformation</option>
                    <option>Life Coaching & Performance Coaching</option>
                    <option>Hypnotherapy & Mindset Reset</option>
                  </select>
                  <textarea
                    className="min-h-36 rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4 outline-none transition focus:border-stone-500 focus:bg-white"
                    placeholder="Tell us what you would like support with"
                  />
                  <Button className="rounded-full bg-stone-950 py-6 text-base text-white hover:bg-stone-800">
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-center text-sm text-stone-500">
                    Transformation Begins Within
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f8f3ea] px-5 py-16 text-center">
          <img
            src="/Logo.jpg"
            alt="Orin Within Logo"
            className="mx-auto h-20 w-20 rounded-full object-cover shadow-lg ring-4 ring-white"
          />
          <h2 className="mt-6 text-4xl font-black uppercase tracking-tight">
            Orin Within
          </h2>
          <p className="mt-3 text-2xl font-semibold text-stone-700">
            “Transformation Begins Within”
          </p>
          <p className="mt-4 text-lg font-bold uppercase tracking-[0.22em] text-amber-800">
            Illuminate • Transform • Thrive
          </p>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-sm text-stone-600 md:flex-row lg:px-8">
          <p>© 2026 Orin Within. All rights reserved.</p>
          <p>Helping people create lasting transformation from within.</p>
        </div>
      </footer>
    </div>
  );
}
