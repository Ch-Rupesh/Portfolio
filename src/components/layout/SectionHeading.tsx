"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn("mb-16 text-center", className)}
    >
      <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
    </motion.div>
  );
}
