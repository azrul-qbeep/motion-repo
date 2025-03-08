"use client"

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function HoverLink() {
  return (
    <div className="p-6 bg-teal-500 rounded-md">
      <CustomLink>Hover this link</CustomLink>
    </div>
  );
};

const arrowMotion = {
  initial: {
    background: "black",
  },
  hover: {
    background: "white",
    width: "22px",
    height: "22px",
  },
};

const arrowIconMotion = {
  initial: {
    x: -10,
    opacity: 0,
  },
  hover: {
    x: 0,
    opacity: 1,
    color: "black",
    transition: { duration: 0.3 },
  },
};

const CustomLink = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.a
      className="bg-stone-100 hover:bg-black transition-colors duration-500 hover:text-white py-2 pl-2 pr-4 rounded-full cursor-pointer flex items-center w-fit gap-2"
      whileHover="hover"
    >
      <div className="overflow-hidden relative flex items-center">
        <motion.div
          className="absolute inset-0 flex justify-center items-center"
          initial={arrowIconMotion.initial}
          variants={arrowIconMotion}
        >
          <ArrowRight size={16} />
        </motion.div>
        <motion.div
          className="w-2 h-2 rounded-full"
          initial={arrowMotion.initial}
          variants={arrowMotion}
        ></motion.div>
      </div>
      <motion.span>{children}</motion.span>
    </motion.a>
  );
};
