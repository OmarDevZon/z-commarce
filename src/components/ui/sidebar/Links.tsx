/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { navbar } from "../../../utils/navbar";
import { Link } from "react-router-dom";

export const Links = ({ open }: { open: any }) => {
  return (
    <motion.div
      className={`${
        open
          ? "block bg-white text-red-500 fixed w-[200px] top-0 bottom-0 left-0 z-0"
          : "hidden"
      } `}
    >
      {navbar.map((item, i) => (
        <Link key={i} to={item.slug} className=" flex px-2 justify-center items-center border py-1 ">
          {item.name}
        </Link>
      ))}
    </motion.div>
  );
};
