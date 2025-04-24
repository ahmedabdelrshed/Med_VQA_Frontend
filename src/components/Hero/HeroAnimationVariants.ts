const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const buttonVariants = {
    hover: { scale: 1.03, transition: { yoyo: Infinity, duration: 0.4 } },
  };
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 100 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 },
    },
};
  
export { containerVariants, buttonVariants, imageVariants };