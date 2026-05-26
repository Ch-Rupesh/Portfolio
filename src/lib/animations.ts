import type { Variants, Transition } from "framer-motion";

// ============================================
// REUSABLE FRAMER MOTION ANIMATION VARIANTS
// ============================================

const smoothTransition: Transition = {
  duration: 0.4,
  ease: [0.4, 0, 0.2, 1],
};

const springTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 15,
};

// ── Fade In Variants ───────────────────────────

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: smoothTransition,
  },
};

export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: smoothTransition,
  },
};

export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: smoothTransition,
  },
};

export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: smoothTransition,
  },
};

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ── Stagger Container ──────────────────────────

export const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.02,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.15,
    },
  },
};

// ── Scale on Hover ─────────────────────────────

export const scaleOnHover = {
  whileHover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  },
  whileTap: {
    scale: 0.97,
    transition: { duration: 0.15 },
  },
};

// ── Page Transition ────────────────────────────

export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 16,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
    },
  },
};

// ── Slide In Variants ──────────────────────────

export const slideInFromLeft: Variants = {
  hidden: {
    x: "-100%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    x: "-100%",
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export const slideInFromRight: Variants = {
  hidden: {
    x: "100%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export const slideInFromBottom: Variants = {
  hidden: {
    y: "100%",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const slideInFromTop: Variants = {
  hidden: {
    y: "-100%",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// ── Card Hover ─────────────────────────────────

export const cardHover: Variants = {
  rest: {
    scale: 1,
    boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04)",
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },
  hover: {
    scale: 1.02,
    boxShadow:
      "0 4px 8px rgba(0,0,0,0.06), 0 12px 32px rgba(0,0,0,0.08), 0 0 20px rgba(14,165,233,0.1)",
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.15 },
  },
};

// ── Scale Up ───────────────────────────────────

export const scaleUp: Variants = {
  hidden: {
    scale: 0.85,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: springTransition,
  },
};

// ── Reveal (for scroll-triggered) ──────────────

export const revealOnScroll: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// ── Navbar Variants ────────────────────────────

export const navbarVariants: Variants = {
  hidden: {
    y: -80,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

// ── Text Reveal ────────────────────────────────

export const textReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// ── Icon Bounce ────────────────────────────────

export const iconBounce = {
  whileHover: {
    y: -4,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 10,
    },
  },
};

// ── Progress Bar Fill ──────────────────────────

export const progressFill = (width: number): Variants => ({
  hidden: {
    width: 0,
    opacity: 0,
  },
  visible: {
    width: `${width}%`,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.2,
    },
  },
});

// ── Viewport default for scroll animations ─────

export const defaultViewport = {
  once: true,
  amount: 0.2 as const,
  margin: "-50px" as const,
};
