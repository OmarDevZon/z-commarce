/* eslint-disable @typescript-eslint/no-explicit-any */

import { motion } from "framer-motion";
import { ReactElement } from "react";

type TCard = {
  children: ReactElement;
  className?: string;
};

const Card = ({ children, className }: TCard) => {
  return (
    <motion.div
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.6, opacity: 0 }}
      whileHover={{ scale: 1.04 }}
      className={`w-full p-4 rounded-md shadow-md hover:shadow-lg transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
