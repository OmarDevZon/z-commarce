import AnimatedRight from "../components/animation/AnimatedRight";
import { motion } from "framer-motion";

import { SvgIcon } from "./SvgIcon";

export const Button = ({ title }: { title: string }) => {
  return (
    <button className=" text-black bg-orange-500 rounded-2xl w-40 h-10 flex justify-center items-center">
      {title}
    </button>
  );
};

type TOutLineButton = {
  title: string;
  className?: string;
  iconPath?: string | undefined;
};
export const OutLineButton = ({
  title,
  className,
  iconPath,
}: TOutLineButton) => {
  return (
    <button
      className={` text-black border rounded-md py-1  flex justify-center items-center ${className} ${
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
          {iconPath && <SvgIcon path={iconPath} />}{" "}
        </motion.div>
      ) : (
        <>{title}</>
      )}
    </button>
  );
};
