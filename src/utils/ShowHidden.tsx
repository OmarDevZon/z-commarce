/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useRef, useEffect, useImperativeHandle } from "react";
import { motion } from "framer-motion";
import { FaCaretDown, FaUser } from "react-icons/fa";

export const ShowHiddenMouseEnter = ({
  children,
  isHidden = true,
  onHide,
  onShow,
}) => {
  const [isVisible, setIsVisible] = useState(!isHidden);
  const userInfoRef = useRef(null);

  const handleMouseEnter = () => {
    if (!isVisible) {
      setIsVisible(true);
      onShow && onShow();
    }
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      if (isVisible) {
        setIsVisible(false);
        onHide && onHide();
      }
    }, 1); // 1 second delay
  };

  useEffect(() => {
    setIsVisible(!isHidden);
  }, [isHidden]);

  const animationVariants = {
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    hidden: { y: 30, opacity: 0, display : "hidden", transition: { duration: 0.5 } },
  };

  const hideAnimationVariants = {
    hidden: { y: 30, opacity: 0, display : "hidden", transition: { duration: 0.5 } },
  };

  return (
    <div onMouseLeave={handleMouseLeave} onClick={handleMouseEnter} >
      <button  className="z-50">
        <div className="flex">
          <FaUser />
          <FaCaretDown />
        </div>
      </button>
      <div className="border">

     <div className="absolute top-0 right-10 z-50 w-44 text-[#767676] h-auto  pt-8">
     <motion.div
        variants={isVisible ? animationVariants : hideAnimationVariants}
        animate={isVisible ? "visible" : "hidden"}
        className="bg-black p-4 pb-6"
      >
        {children}
      </motion.div>
     </div>
      </div>
    </div>
  );
};
