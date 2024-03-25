/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";

import { TSvgIcon } from "./SvgIcon";

type TBtn = {
  title: string;
  className?: string;
};

type TOutLateButton = {
  title: string;
  className?: string;
  icon?: TSvgIcon;
  children?: any;
  position?: "left" | "right" | "top" | "bottom";
  action?: any;
};

type TSolidBtn = {
  title: string;
  className?: string;
};

type TOutLineButton = {
  title: string;
  className?: string;
  iconPath?: string | undefined;
};

export const Button = ({ title, className }: TBtn) => {
  return (
    <button
      className={` text-black bg-orange-500 rounded-2xl w-40 h-10 flex justify-center items-center ${className}`}
    >
      {title}
    </button>
  );
};

export const SolidButton = ({ title, className }: TSolidBtn) => {
  return (
    <button
      className={` text-black bg-orange-500 rounded-2xl w-40 h-10 flex justify-center items-center ${className}`}
    >
      {title}
    </button>
  );
};

export const AnimationOutletBtn = ({
  title,
  className,
  iconPath,
}: TOutLineButton) => {
  return (
    <button
      className={`rounded-none py-1  flex justify-center items-center ${className} ${
        iconPath ? "pl-2" : "px-2"
      } `}
    >
      {iconPath ? (
        <motion.div
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 2, opacity: 1 }}
          whileHover={{ paddingRight: "10px" }}
          className="flex "
        >
          {title}
          {/* {iconPath && <SvgIcon path={iconPath} />}{" "} */}
        </motion.div>
      ) : (
        <>{title}</>
      )}
    </button>
  );
};

export const OutLateButton: React.FC<TOutLateButton> = ({
  className,
  children,
  title,
  position,
  action,
}) => {
  return (
    <>
      <button
        onClick={action}
        className={`flex justify-center items-center bg-red-100 hover:bg-red-50 gap-4 border  border-red-500 text-xl text-red-500 px-4  py-2 text-center ${className}`}
      >
        <div
          className={`${
            position === "left"
              ? "flex flex-row-reverse ml-1"
              : position === "right"
              ? "flex flex-row-reverse"
              : "flex flex-cols"
          } items-center`}
        >
          {children}
          <span className="text-nowrap">{title}</span>
        </div>
      </button>
    </>
  );
};
