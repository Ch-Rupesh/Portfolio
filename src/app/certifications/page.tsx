"use client";

import { motion } from "framer-motion";
import { PiCertificateBold } from "react-icons/pi";
import { HiCheckBadge } from "react-icons/hi2";
import { PageWrapper, SectionHeading } from "@/components/layout";
import { fadeInUp } from "@/lib/animations";

export default function CertificationsPage() {
  return (
    <PageWrapper>
      <SectionHeading title="Certifications" />

      <div className="mx-auto max-w-2xl">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl sm:p-10"
        >
          {/* Hover glow overlay */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              boxShadow:
                "inset 0 0 0 1.5px rgba(59,130,246,0.2), 0 0 30px rgba(59,130,246,0.08)",
            }}
          />

          {/* Gradient accent top border */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500" />

          <div className="flex flex-col items-center text-center">
            {/* Icon container */}
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50">
              <PiCertificateBold className="text-4xl text-blue-500" />
            </div>

            {/* Certificate title */}
            <h2 className="mt-6 text-2xl font-bold text-gray-900">
              Linguaskill General
            </h2>

            {/* Issuer */}
            <p className="mt-2 text-sm font-medium text-gray-400">
              Issued by Cambridge Assessment English
            </p>

            {/* Verified badge and Link */}
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5">
                <HiCheckBadge className="text-lg text-emerald-500" />
                <span className="text-sm font-semibold text-emerald-700">
                  Verified
                </span>
              </div>
              
              <a
                href="https://drive.google.com/file/d/15uQkvAHt4hFDzaOrzu0WtA0hdnYabHyc/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-sm font-semibold text-cyan-700 transition-colors hover:bg-cyan-100"
              >
                View Certificate
              </a>
            </div>

            {/* Description */}
            <p className="mt-6 max-w-md text-sm leading-relaxed text-gray-500">
              Successfully completed the Linguaskill General
              examination, demonstrating proficiency in professional English
              writing and communication skills recognized internationally.
            </p>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
