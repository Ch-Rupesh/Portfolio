"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaStar } from "react-icons/fa";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionHeading from "@/components/layout/SectionHeading";
import { projectsData } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

/* ── Tech-badge colour map ─────────────────────────── */
const techColors: Record<string, string> = {
  Python: "bg-blue-50 text-blue-700 border-blue-200",
  LangGraph: "bg-purple-50 text-purple-700 border-purple-200",
  Ollama: "bg-emerald-50 text-emerald-700 border-emerald-200",
  PostgreSQL: "bg-indigo-50 text-indigo-700 border-indigo-200",
  PostGIS: "bg-teal-50 text-teal-700 border-teal-200",
  FastAPI: "bg-green-50 text-green-700 border-green-200",
  "React.js": "bg-cyan-50 text-cyan-700 border-cyan-200",
  "Spring Boot": "bg-lime-50 text-lime-700 border-lime-200",
  MySQL: "bg-orange-50 text-orange-700 border-orange-200",
  CSS: "bg-pink-50 text-pink-700 border-pink-200",
};

function getTechColor(tech: string) {
  return techColors[tech] ?? "bg-gray-50 text-gray-700 border-gray-200";
}

/* ── Page ───────────────────────────────────────────── */
export default function ProjectsPage() {
  return (
    <PageWrapper>
      <SectionHeading
        title="Projects"
        subtitle="Building solutions that matter"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2"
      >
        {projectsData.map((project) => (
          <motion.article
            key={project.id}
            variants={fadeInUp}
            className="group relative rounded-2xl border border-gray-200/60 bg-white/70 p-8 backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:border-cyan-300/50 hover:shadow-[0_8px_40px_rgba(0,200,255,0.10)]"
          >
            {/* Featured badge */}
            {project.featured && (
              <div className="absolute -top-3 right-6 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-1 text-xs font-semibold text-white shadow-lg shadow-cyan-500/25">
                <FaStar className="h-3 w-3" />
                Featured
              </div>
            )}

            {/* Header */}
            <div className="mb-6">
              <p className="mb-1 text-xs font-medium uppercase tracking-widest text-cyan-600">
                {project.tagline}
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                {project.title}
              </h2>
            </div>

            {/* Description */}
            <p className="mb-6 leading-relaxed text-gray-600">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="mb-6">
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className={`rounded-full border px-3 py-1 text-xs font-medium transition-transform duration-200 hover:scale-105 ${getTechColor(tech)}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Key Features
              </h3>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <FaCheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-gray-800 hover:shadow-lg"
                >
                  <FaGithub className="h-4 w-4" />
                  GitHub
                </a>
              )}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:border-cyan-300 hover:text-cyan-600 hover:shadow-lg"
                >
                  <FaExternalLinkAlt className="h-3.5 w-3.5" />
                  Live Demo
                </a>
              )}
            </div>

            {/* Decorative gradient line */}
            {project.featured && (
              <div className="absolute inset-x-0 bottom-0 h-0.5 rounded-b-2xl bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            )}
          </motion.article>
        ))}
      </motion.div>
    </PageWrapper>
  );
}
