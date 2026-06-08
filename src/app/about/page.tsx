"use client";

import { motion } from "framer-motion";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionHeading from "@/components/layout/SectionHeading";
import { personalInfo } from "@/lib/constants";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";

/* ── Data ────────────────────────────────────────────── */

const quickFacts = [
  { emoji: "🎓", label: "Education", value: "B.Tech in CSE" },
  { emoji: "🎯", label: "Current Focus", value: "AI Engineering" },
  { emoji: "📍", label: "Location", value: "India" },
  { emoji: "🤖", label: "Interests", value: "AI/ML, Open Source" },
];

const educationTimeline = [
  {
    period: "2023 – Present",
    title: "B.Tech in Computer Science & Engineering",
    subtitle: "KL University",
    description:
      "Pursuing a Bachelor's degree with focus on AI, machine learning, and software engineering. Active participant in coding competitions and technical clubs.",
  },
  {
    period: "2021 – 2023",
    title: "Higher Secondary Education",
    subtitle: "Intermediate (MPC)",
    description:
      "Completed higher secondary education with a strong foundation in mathematics, physics, and computer science.",
  },
  {
    period: "2020 – 2021",
    title: "Secondary School Certificate (SSC)",
    subtitle: "Sri Chaitanya High School",
    description:
      "Completed 10th grade with a strong academic record, building a solid foundation in core subjects including mathematics and science.",
  },
];

const learningFocus = [
  "AI Engineering",
  "Multi-Agent Systems",
  "LangGraph",
  "Advanced Backend Systems",
  "Scalable AI Applications",
];

/* ── About Page ──────────────────────────────────────── */

export default function AboutPage() {
  return (
    <PageWrapper>
      <SectionHeading
        title="About Me"
        subtitle="Aspiring AI Engineer · Full-Stack Developer · Community Leader"
      />

      {/* Introduction + Quick Facts */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-12 grid gap-12 lg:grid-cols-5"
      >
        {/* Left column – description */}
        <motion.div variants={fadeInLeft} className="space-y-6 lg:col-span-3">
          <p className="text-lg leading-relaxed text-gray-600">
            I&apos;m{" "}
            <span className="font-semibold text-gray-900">
              {personalInfo.name}
            </span>
            , an aspiring AI Engineer and full-stack developer with a deep
            passion for building intelligent, scalable systems that make a real
            impact. My journey started with a curiosity for how things work under
            the hood and has grown into an obsession with multi-agent systems,
            large language model orchestration, and production-grade software
            architecture.
          </p>

          <p className="text-lg leading-relaxed text-gray-600">
            Beyond code, I lead developer communities, mentor peers, and
            actively contribute to technical initiatives. I believe technology is
            most powerful when it solves real-world problems — and I&apos;m
            committed to pushing the boundaries of what&apos;s possible with AI
            while keeping software clean, maintainable, and human-centered.
          </p>

          <p className="text-lg leading-relaxed text-gray-600">
            Currently pursuing my B.Tech in Computer Science &amp; Engineering, I
            spend my time diving deep into AI engineering, building scalable
            backend systems, and exploring the frontiers of autonomous agents.
            Every project is a chance to learn something new and ship something
            meaningful.
          </p>
        </motion.div>

        {/* Right column – quick facts */}
        <motion.div
          variants={fadeInRight}
          className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1"
        >
          {quickFacts.map((fact) => (
            <motion.div
              key={fact.label}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-lg"
            >
              <span className="text-2xl">{fact.emoji}</span>
              <p className="mt-2 text-xs font-medium tracking-wider text-gray-400 uppercase">
                {fact.label}
              </p>
              <p className="mt-1 text-base font-semibold text-gray-800">
                {fact.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Education Timeline */}
      <section className="mt-28">
        <motion.h3
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-12 text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
        >
          Education Timeline
        </motion.h3>

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical line */}
          <div className="absolute top-0 left-4 h-full w-0.5 bg-gradient-to-b from-cyan-400 via-blue-400 to-transparent md:left-1/2 md:-translate-x-1/2" />

          {educationTimeline.map((item, index) => (
            <motion.div
              key={item.title}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className={`relative mb-12 flex items-start gap-6 md:gap-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <motion.div
                variants={fadeInUp}
                className="relative z-10 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-cyan-400 to-blue-500 shadow-md md:absolute md:left-1/2 md:-translate-x-1/2"
              >
                <div className="h-2 w-2 rounded-full bg-white" />
              </motion.div>

              {/* Card */}
              <motion.div
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                className={`w-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg md:w-[calc(50%-2rem)] ${
                  index % 2 === 0
                    ? "md:mr-auto md:pr-8"
                    : "md:ml-auto md:pl-8"
                }`}
              >
                <span className="inline-block rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-600">
                  {item.period}
                </span>
                <h4 className="mt-3 text-lg font-bold text-gray-900">
                  {item.title}
                </h4>
                <p className="mt-1 text-sm font-medium text-gray-400">
                  {item.subtitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Current Learning Focus */}
      <section className="mt-28">
        <motion.h3
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-10 text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
        >
          Current Learning Focus
        </motion.h3>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {learningFocus.map((topic) => (
            <motion.span
              key={topic}
              variants={fadeInUp}
              whileHover={{ scale: 1.08, y: -3 }}
              className="cursor-default rounded-full border border-cyan-100 bg-gradient-to-r from-cyan-50 to-blue-50 px-6 py-2.5 text-sm font-semibold text-cyan-700 shadow-sm transition-shadow hover:shadow-md"
            >
              {topic}
            </motion.span>
          ))}
        </motion.div>
      </section>

      {/* Career Goals */}
      <section className="mt-28">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto max-w-3xl rounded-3xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-10 text-center shadow-sm"
        >
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Career Goals
          </h3>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            My long-term vision is to become a leading AI Engineer who designs
            and deploys autonomous, multi-agent systems at scale. I aspire to
            work at the intersection of cutting-edge AI research and
            production-grade engineering — building tools and platforms that
            amplify human potential and solve problems that matter. I&apos;m
            driven by a relentless curiosity and a commitment to continuous
            growth, both as an engineer and as a leader in the tech community.
          </p>
        </motion.div>
      </section>
    </PageWrapper>
  );
}
