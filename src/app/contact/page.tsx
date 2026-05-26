"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaFileDownload,
  FaPaperPlane,
} from "react-icons/fa";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionHeading from "@/components/layout/SectionHeading";
import { personalInfo } from "@/lib/constants";
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";

const contactLinks = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "#ef4444",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: personalInfo.linkedin,
    color: "#0a66c2",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "Ch-Rupesh",
    href: personalInfo.github,
    color: "#333333",
  },
];

export default function ContactPage() {
  return (
    <PageWrapper>
      <SectionHeading
        title="Get In Touch"
        subtitle="Let's build something amazing together"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2"
      >
        {/* Left — Contact Form */}
        <motion.div variants={fadeInLeft}>
          <div className="rounded-3xl border border-white/20 bg-white/60 p-8 shadow-lg backdrop-blur-xl sm:p-10">
            <h2 className="mb-6 text-xl font-semibold text-gray-900">
              Send a Message
            </h2>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-gray-600"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-gray-200 bg-white/80 px-4 py-3 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-gray-200 bg-white/80 px-4 py-3 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-1.5 block text-sm font-medium text-gray-600"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="What's this about?"
                  className="w-full rounded-xl border border-gray-200 bg-white/80 px-4 py-3 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-gray-200 bg-white/80 px-4 py-3 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-shadow duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Send Message
                <FaPaperPlane className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Right — Contact Info */}
        <motion.div
          variants={fadeInRight}
          className="flex flex-col gap-5"
        >
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group flex items-center gap-5 rounded-2xl border border-white/20 bg-white/60 p-5 shadow-sm backdrop-blur-xl transition-shadow duration-300 hover:shadow-md"
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${link.color}12` }}
                >
                  <Icon
                    className="text-xl"
                    style={{ color: link.color }}
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400">
                    {link.label}
                  </p>
                  <p className="text-base font-semibold text-gray-900">
                    {link.value}
                  </p>
                </div>
              </motion.a>
            );
          })}

          {/* Resume download */}
          <motion.a
            href={personalInfo.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group flex items-center gap-5 rounded-2xl border border-white/20 bg-white/60 p-5 shadow-sm backdrop-blur-xl transition-shadow duration-300 hover:shadow-md"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-50">
              <FaFileDownload className="text-xl text-violet-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-400">Resume</p>
              <p className="text-base font-semibold text-gray-900">
                Download Resume
              </p>
            </div>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Social links row */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto mt-20 flex justify-center gap-6"
      >
        {[
          { icon: FaEnvelope, href: `mailto:${personalInfo.email}`, label: "Email" },
          { icon: FaLinkedin, href: personalInfo.linkedin, label: "LinkedIn" },
          { icon: FaGithub, href: personalInfo.github, label: "GitHub" },
        ].map(({ icon: Icon, href, label }) => (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            whileHover={{ y: -3, scale: 1.1 }}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-100 bg-white text-gray-400 shadow-sm transition-colors duration-300 hover:text-gray-900"
          >
            <Icon className="text-lg" />
          </motion.a>
        ))}
      </motion.div>
    </PageWrapper>
  );
}
