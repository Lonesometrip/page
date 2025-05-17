export const textVariant = (delay) => ({
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5, // Further reduced from 0.75
      delay: delay ? delay * 0.4 : 0, // Further reduced delay
      stiffness: 150, // Increased stiffness for faster spring
      damping: 9, // Added damping for better control
    },
  },
});

export const fadeIn = (direction, type, delay, duration) => {
  const x = direction === "left" ? 100 : direction === "right" ? -100 : 0;
  const y = direction === "up" ? 100 : direction === "down" ? -100 : 0;

  return {
    hidden: { x, y, opacity: 0 },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay: delay ? delay * 0.4 : 0, // Further reduced delay
        duration: duration ? duration * 0.5 : 0.3, // Further reduced duration
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay, duration) => ({
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      delay: delay ? delay * 0.4 : 0, // Further reduced delay
      duration: duration ? duration * 0.5 : 0.3, // Further reduced duration
      ease: "easeOut",
    },
  },
});

export const slideIn = (direction, type, delay, duration) => {
  const x = direction === "left" ? "-100%" : direction === "right" ? "100%" : 0;
  const y = direction === "up" ? "100%" : direction === "down" ? "100%" : 0;

  return {
    hidden: { x, y },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay: delay ? delay * 0.4 : 0, // Further reduced delay
        duration: duration ? duration * 0.5 : 0.3, // Further reduced duration
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: staggerChildren ? staggerChildren * 0.2 : 0.03, // Even further reduced stagger time
      delayChildren: delayChildren ? delayChildren * 0.2 : 0, // Even further reduced delay
    },
  },
});
