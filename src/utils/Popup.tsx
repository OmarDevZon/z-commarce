/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";

type TPopup = {
  isOpen: boolean;
  onClose?: any;
  children: any;
};

export const Popup: React.FC<TPopup> = ({ isOpen, children }) => {
  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0, }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed z-10 inset-0 overflow-y-auto"
        >
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              {children}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};
