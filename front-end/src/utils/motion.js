export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: 'spring',
      stiffness: 300, //by Default stiffness is 100.
      damping: 140,   //by Default damping is 10.
    },
  },

  // Only Remember this : {initial="hidden" whileInView="show"}.
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 0.5,
    },
  },
};

// export const slideIn = (direction, type, delay, duration) => ({ //Set props like this: variants={slideIn('right','tween',0.2,1)}
//   hidden: {
//     x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
//     y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
//   },
//   show: {
//     x: 0,
//     y: 0,
//     transition: {
//       type,
//       delay,
//       duration,
//       ease: 'easeOut',
//     },
//   },
// });

export const slideIn = (direction, type, delay, duration, stiffness) => ({ //Set props like this: variants={slideIn('right','tween',0.2,1)}
  hidden: {
    x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
    y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      stiffness,
      ease: 'easeOut',
    },
  },
});

export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textVariant = (delay) => ({ //Only set a delay like: variants={textVariant(1.1) }
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay,
    },
  },
});

export const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};

export const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeIn',
    },
  },
};

export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
  },
  show: { //It can be set as:   varients={fadeIn("", "", 0.1, 1)}
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const planetVariants = (direction) => ({ //Set props like this: variants={planetVariants('left')}
  hidden: {
    x: direction === 'left' ? '-100%' : '100%',
    rotate: 120,
    transition: {
      type: 'spring',
      duration: 1,
      // delay: 1.8,
    },
  },
  show: {
    x: 0,
    rotate: 0,
    transition: {
      type: 'spring',
      duration: 1.8,
      delay: 1,
    },
  },
});

export const zoomIn = (delay, duration) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'tween',
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const footerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 0.5,
    },
  },
};
