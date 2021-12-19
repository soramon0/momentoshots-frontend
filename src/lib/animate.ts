import type { Variants } from "framer-motion";

export const easing = [0.6, -0.05, 0.01, 0.99];
export const fadeInUp: Variants = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};
export const fadeInDown: Variants = {
  initial: {
    y: -60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};
export const stagger: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggerLonger: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};
