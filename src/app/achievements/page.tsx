"use client";

import { motion } from "framer-motion";
import { FaCrown, FaTrophy, FaMedal, FaUsers, FaAward, FaCode } from "react-icons/fa";
import { PageWrapper, SectionHeading } from "@/components/layout";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import type { IconType } from "react-icons";

interface Achievement {
  icon: IconType;
  title: string;
  description: string;
  color: string;
}

const achievements: Achievement[] = [
  {
    icon: FaCode,
    title: "Consolation Prize — 36-hour Hackathon",
    description:
      "Recognized for an innovative solution developed during an intense 36-hour hackathon, demonstrating perseverance, creativity, and technical prowess.",
    color: "#ef4444",
  },
  {
    icon: FaCrown,
    title: "President of DataScience AI Dynamos Club",
    description:
      "Led the university's premier AI/Data Science club, organizing workshops, hackathons, and knowledge-sharing sessions to foster a community of aspiring data scientists.",
    color: "#f59e0b",
  },
  {
    icon: FaMedal,
    title: "International-level Hackathon Organizer",
    description:
      "Organized and managed an international-level hackathon, bringing together participants from across the globe to innovate and collaborate on cutting-edge solutions.",
    color: "#8b5cf6",
  },
  {
    icon: FaTrophy,
    title: "National-level Hackathon Organizer",
    description:
      "Organized and managed a national-level hackathon, coordinating logistics, mentorship, and judging to deliver a seamless competitive programming experience.",
    color: "#3b82f6",
  },
  {
    icon: FaUsers,
    title: "Student Mentor",
    description:
      "Mentored junior students in programming and AI concepts, providing guidance on projects, career development, and technical skill-building.",
    color: "#06b6d4",
  },
  {
    icon: FaAward,
    title: "HDFC Parivartan Scholarship",
    description:
      "Received the prestigious HDFC Parivartan Scholarship for academic excellence and demonstrated commitment to personal and professional growth.",
    color: "#10b981",
  },
];

export default function AchievementsPage() {
  return (
    <PageWrapper>
      <SectionHeading title="Leadership & Achievements" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative"
      >
        {/* Vertical timeline line */}
        <div className="absolute left-6 top-0 bottom-0 hidden w-px bg-gradient-to-b from-cyan-400/60 via-blue-500/40 to-transparent md:left-1/2 md:block" />

        <div className="space-y-12 md:space-y-16">
          {achievements.map((item, index) => {
            const isLeft = index % 2 === 0;
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="relative flex flex-col md:flex-row md:items-center"
              >
                {/* Timeline dot — center on desktop */}
                <motion.div
                  variants={fadeInUp}
                  className="absolute left-6 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-white md:left-1/2 md:block"
                  style={{ backgroundColor: item.color }}
                />

                {/* Spacer for alternating layout */}
                {isLeft ? (
                  <>
                    <div className="hidden w-1/2 pr-12 md:block" />
                    <div className="w-full md:w-1/2 md:pl-12">
                      <AchievementCard item={item} Icon={Icon} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-full md:w-1/2 md:pr-12 md:text-right">
                      <AchievementCard item={item} Icon={Icon} align="right" />
                    </div>
                    <div className="hidden w-1/2 pl-12 md:block" />
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </PageWrapper>
  );
}

function AchievementCard({
  item,
  Icon,
  align = "left",
}: {
  item: Achievement;
  Icon: IconType;
  align?: "left" | "right";
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
    >
      {/* Subtle glow border on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          boxShadow: `inset 0 0 0 1.5px ${item.color}30, 0 0 20px ${item.color}15`,
        }}
      />

      <div
        className={`flex items-start gap-4 ${
          align === "right" ? "md:flex-row-reverse md:text-left" : ""
        }`}
      >
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
          style={{ backgroundColor: `${item.color}12` }}
        >
          <Icon className="text-xl" style={{ color: item.color }} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-500">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
