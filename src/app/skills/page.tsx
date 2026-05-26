"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaReact,
  FaServer,
  FaBrain,
  FaDatabase,
  FaTools,
  FaBook,
} from "react-icons/fa";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionHeading from "@/components/layout/SectionHeading";
import { skillsData } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

/* ── Icon map ──────────────────────────────────────── */
const ICON_MAP: Record<string, ReactNode> = {
  FaCode: <FaCode className="h-5 w-5" />,
  FaReact: <FaReact className="h-5 w-5" />,
  FaServer: <FaServer className="h-5 w-5" />,
  FaBrain: <FaBrain className="h-5 w-5" />,
  FaDatabase: <FaDatabase className="h-5 w-5" />,
  FaTools: <FaTools className="h-5 w-5" />,
  FaBook: <FaBook className="h-5 w-5" />,
};

/* ── Category colour accents ───────────────────────── */
const ACCENT_COLORS = [
  {
    card: "hover:border-blue-300/60 hover:shadow-[0_4px_30px_rgba(59,130,246,0.10)]",
    badge: "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100",
    icon: "text-blue-500",
  },
  {
    card: "hover:border-cyan-300/60 hover:shadow-[0_4px_30px_rgba(6,182,212,0.10)]",
    badge: "bg-cyan-50 text-cyan-700 border-cyan-200 hover:bg-cyan-100",
    icon: "text-cyan-500",
  },
  {
    card: "hover:border-emerald-300/60 hover:shadow-[0_4px_30px_rgba(16,185,129,0.10)]",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100",
    icon: "text-emerald-500",
  },
  {
    card: "hover:border-purple-300/60 hover:shadow-[0_4px_30px_rgba(168,85,247,0.10)]",
    badge: "bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100",
    icon: "text-purple-500",
  },
  {
    card: "hover:border-orange-300/60 hover:shadow-[0_4px_30px_rgba(249,115,22,0.10)]",
    badge: "bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100",
    icon: "text-orange-500",
  },
  {
    card: "hover:border-pink-300/60 hover:shadow-[0_4px_30px_rgba(236,72,153,0.10)]",
    badge: "bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100",
    icon: "text-pink-500",
  },
  {
    card: "hover:border-amber-300/60 hover:shadow-[0_4px_30px_rgba(245,158,11,0.10)]",
    badge: "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100",
    icon: "text-amber-500",
  },
];

/* ── Page ───────────────────────────────────────────── */
export default function SkillsPage() {
  return (
    <PageWrapper>
      <SectionHeading title="Skills & Technologies" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skillsData.map((category, index) => {
          const accent = ACCENT_COLORS[index % ACCENT_COLORS.length];
          return (
            <motion.div
              key={category.category}
              variants={fadeInUp}
              className={`group rounded-2xl border border-gray-200/60 bg-white/70 p-6 backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] ${accent.card}`}
            >
              {/* Category header */}
              <div className="mb-5 flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 transition-colors duration-300 group-hover:bg-white ${accent.icon}`}
                >
                  {ICON_MAP[category.icon] ?? <FaCode className="h-5 w-5" />}
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-gray-900">
                  {category.category}
                </h3>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all duration-200 hover:scale-105 ${accent.badge}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </PageWrapper>
  );
}
