"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setHasScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-shadow duration-300",
        hasScrolled ? "shadow-[0_1px_12px_rgba(0,0,0,0.06)]" : "shadow-none"
      )}
    >
      <nav
        className={cn(
          "mx-auto max-w-7xl rounded-none px-6 py-3 transition-all duration-300 md:mx-4 md:mt-3 md:rounded-2xl md:px-8 lg:mx-auto",
          "border border-white/40 bg-white/70 backdrop-blur-xl backdrop-saturate-150",
          hasScrolled && "bg-white/80"
        )}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="group relative flex items-center gap-1">
            <span className="text-xl font-bold tracking-tight text-gray-900 transition-colors group-hover:text-cyan-600">
              RSM
            </span>
            <span className="hidden text-sm font-medium text-gray-400 sm:inline">
              / Rupesh
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200",
                      isActive ? "text-cyan-600" : "text-gray-600 hover:text-gray-900"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="navbar-indicator"
                        className="absolute inset-x-1 -bottom-0.5 h-0.5 rounded-full bg-cyan-500"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative z-50 rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiX className="h-6 w-6" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiMenuAlt3 className="h-6 w-6" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 z-40 flex h-full w-72 flex-col bg-white/95 px-6 pt-24 shadow-2xl backdrop-blur-xl lg:hidden"
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.04 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "block rounded-xl px-4 py-3 text-base font-medium transition-all duration-200",
                          isActive
                            ? "bg-cyan-50 text-cyan-600"
                            : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
