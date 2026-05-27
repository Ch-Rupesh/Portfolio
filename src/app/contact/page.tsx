"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaFileDownload,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
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

type Status = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

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

            {/* Success state */}
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center gap-4 rounded-2xl bg-emerald-50 px-6 py-12 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                    <FaCheckCircle className="h-8 w-8 text-emerald-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-emerald-800">
                    Message Sent!
                  </h3>
                  <p className="text-sm text-emerald-600">
                    Thanks for reaching out. I&apos;ll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-2 rounded-full border border-emerald-300 px-5 py-2 text-sm font-medium text-emerald-700 transition-colors hover:bg-emerald-100"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  /* Netlify Forms attributes */
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  ref={formRef}
                >
                  {/* Required hidden inputs for Netlify Forms */}
                  <input type="hidden" name="form-name" value="contact" />
                  {/* Honeypot anti-spam field */}
                  <p className="hidden">
                    <label>
                      Don&apos;t fill this out if you&apos;re human:{" "}
                      <input name="bot-field" />
                    </label>
                  </p>

                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-1.5 block text-sm font-medium text-gray-600"
                    >
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border border-gray-200 bg-white/80 px-4 py-3 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-1.5 block text-sm font-medium text-gray-600"
                    >
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full rounded-xl border border-gray-200 bg-white/80 px-4 py-3 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="mb-1.5 block text-sm font-medium text-gray-600"
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      className="w-full rounded-xl border border-gray-200 bg-white/80 px-4 py-3 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-1.5 block text-sm font-medium text-gray-600"
                    >
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell me about your project..."
                      className="w-full resize-none rounded-xl border border-gray-200 bg-white/80 px-4 py-3 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    />
                  </div>

                  {/* Error banner */}
                  <AnimatePresence>
                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600"
                      >
                        <FaExclamationCircle className="shrink-0" />
                        Something went wrong. Please try again or email me directly.
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    whileHover={status !== "loading" ? { scale: 1.02 } : {}}
                    whileTap={status !== "loading" ? { scale: 0.98 } : {}}
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "loading" ? (
                      <>
                        <svg
                          className="h-4 w-4 animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <FaPaperPlane className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Right — Contact Info */}
        <motion.div variants={fadeInRight} className="flex flex-col gap-5">
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
                  <Icon className="text-xl" style={{ color: link.color }} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400">{link.label}</p>
                  <p className="text-base font-semibold text-gray-900">{link.value}</p>
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
              <p className="text-base font-semibold text-gray-900">Download Resume</p>
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
            aria-label={label}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-100 bg-white text-gray-400 shadow-sm transition-colors duration-300 hover:text-gray-900"
          >
            <Icon className="text-lg" />
          </motion.a>
        ))}
      </motion.div>
    </PageWrapper>
  );
}
