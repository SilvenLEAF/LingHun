export const containerVariant = {
  hidden: { 
    opacity: 0, 
    x: '100vw',
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      type: 'spring',
      duration: 1.5,
      // mass: 0.4,
      // damping: 8,     
      when: "beforeChildren",
    }
  },
  exit: {
    x: "-100vh",
    transition: { ease: 'easeInOut' }
  }
};