"use client";

import { motion } from "framer-motion";
import { FaGithub, FaHackerrank, FaExternalLinkAlt } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { PageWrapper, SectionHeading } from "@/components/layout";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import type { IconType } from "react-icons";

interface CodingProfile {
  name: string;
  username: string;
  url: string;
  icon: IconType;
  color: string;
}

const profiles: CodingProfile[] = [
  {
    name: "GitHub",
    username: "Ch-Rupesh",
    url: "https://github.com/Ch-Rupesh",
    icon: FaGithub,
    color: "#333333",
  },
  {
    name: "LeetCode",
    username: "klu2300031153",
    url: "https://leetcode.com/u/klu2300031153/",
    icon: SiLeetcode,
    color: "#FFA116",
  },
  {
    name: "CodeChef",
    username: "klu2300031153",
    url: "https://www.codechef.com/users/klu2300031153",
    icon: SiCodechef,
    color: "#5B4638",
  },
  {
    name: "HackerRank",
    username: "h2300031153",
    url: "https://www.hackerrank.com/profile/h2300031153",
    icon: FaHackerrank,
    color: "#00EA64",
  },
];

export default function CodingProfilesPage() {
  return (
    <PageWrapper>
      <SectionHeading title="Coding Profiles" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2"
      >
        {profiles.map((profile) => {
          const Icon = profile.icon;

          return (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative flex flex-col items-center gap-4 overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              {/* Glow border on hover */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  boxShadow: `inset 0 0 0 1.5px ${profile.color}35, 0 0 24px ${profile.color}15`,
                }}
              />

              {/* Large icon */}
              <div
                className="flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${profile.color}10` }}
              >
                <Icon
                  className="text-3xl"
                  style={{ color: profile.color }}
                />
              </div>

              {/* Platform name */}
              <h3 className="text-xl font-semibold text-gray-900">
                {profile.name}
              </h3>

              {/* Username */}
              <p className="text-sm text-gray-400">@{profile.username}</p>

              {/* Visit button */}
              <span
                className="mt-2 inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-white transition-opacity duration-300 group-hover:opacity-90"
                style={{ backgroundColor: profile.color }}
              >
                Visit Profile
                <FaExternalLinkAlt className="text-xs" />
              </span>
            </motion.a>
          );
        })}
      </motion.div>
    </PageWrapper>
  );
}
