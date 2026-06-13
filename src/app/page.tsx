"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiChevronDown, HiOutlineMail } from "react-icons/hi";
import { FaLinkedin, FaGithub, FaHackerrank } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { personalInfo, roles } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

/* ─── Typing animation hook ──────────────────────────── */

function useTypingAnimation(words: string[]) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // If words array is empty or undefined, do nothing
    if (!words || words.length === 0) return;

    const currentWord = words[wordIndex];
    let speed = isDeleting ? 40 : 80;

    const tick = () => {
      if (!isDeleting) {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
        if (displayText.length === currentWord.length) {
          setIsDeleting(true);
        }
      } else {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    // Pause before starting to delete
    if (!isDeleting && displayText === currentWord) {
      speed = 1800;
    } 
    // Pause before starting to type the next word
    else if (isDeleting && displayText === "") {
      speed = 400;
    }

    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex, words]);

  return displayText;
}

/* ─── Social Links ───────────────────────────────────── */

const socialLinks = [
  { label: "LinkedIn", href: personalInfo.linkedin, icon: FaLinkedin },
  { label: "GitHub", href: personalInfo.github, icon: FaGithub },
  { label: "LeetCode", href: personalInfo.leetcode, icon: SiLeetcode },
  { label: "CodeChef", href: personalInfo.codechef, icon: SiCodechef },
  { label: "HackerRank", href: personalInfo.hackerrank, icon: FaHackerrank },
  { label: "Email", href: `mailto:${personalInfo.email}`, icon: HiOutlineMail },
];

/* ─── Home Page ──────────────────────────────────────── */

export default function HomePage() {
  const typedRole = useTypingAnimation([...roles]);

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Hero section */}
      <section className="relative z-10 flex flex-1 items-center justify-center px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-12 lg:flex-row lg:gap-20">
          {/* Left: Text content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left"
          >
            {/* Greeting */}
            <motion.p
              variants={fadeInUp}
              className="text-sm font-medium tracking-widest text-gray-400 uppercase"
            >
              Hi, I&apos;m
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={fadeInUp}
              className="mt-3 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
            >
              {personalInfo.name}
            </motion.h1>

            {/* Typing role */}
            <motion.div
              variants={fadeInUp}
              className="mt-5 flex h-9 items-center text-lg font-medium text-cyan-600 sm:text-xl"
            >
              <span>{typedRole}</span>
              <span className="ml-0.5 inline-block h-6 w-0.5 animate-pulse bg-cyan-500" />
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-lg text-base leading-relaxed text-gray-500 sm:text-lg"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href={personalInfo.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:brightness-110"
              >
                Download Resume
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-3 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-cyan-300 hover:text-cyan-600"
              >
                Get In Touch
              </Link>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={fadeInUp}
              className="mt-10 flex items-center gap-3"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="rounded-full border border-gray-100 bg-white p-2.5 text-gray-400 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:text-cyan-500 hover:shadow-md"
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex-shrink-0"
          >
            {/* Glow ring */}
            <div className="absolute -inset-3 animate-pulse rounded-full bg-gradient-to-tr from-cyan-400/20 to-blue-500/20 blur-xl" />

            <div className="relative h-64 w-64 overflow-hidden rounded-full ring-4 ring-cyan-400/20 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
              <Image
                src="/images/profile.jpg"
                alt={personalInfo.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-xs font-medium tracking-wider text-gray-400 uppercase">
            Scroll
          </span>
          <HiChevronDown className="h-5 w-5 animate-bounce text-gray-400" />
        </motion.div>
      </div>
    </main>
  );
}
