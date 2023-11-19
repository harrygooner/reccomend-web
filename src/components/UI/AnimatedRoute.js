import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const AnimatedRoute = (props) => {
  return (
    <motion.div
      className="flex flex-col min-h-screen"
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 0.5,
        ease: "easeIn",
      }}
    >
      {props.children}
    </motion.div>
  );
};

export default AnimatedRoute;
