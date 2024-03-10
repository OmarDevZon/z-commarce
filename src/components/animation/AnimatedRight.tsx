/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";

const AnimatedRight = ({ children }: { children: any }) => {
  return (
    <motion.div
      initial={{ scale: 1, opacity: 1 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 2, opacity: 1 }}
      whileHover={{ paddingLeft: "10px" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedRight;

// export const DrownAnimated = {
//   initial: {},
//   animate: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 1,
//       staggerChildren: 0.2,
//     },
//   },
// };
