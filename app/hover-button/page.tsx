"use client"

import { motion, MotionConfig } from "motion/react";
import { ArrowRight } from "lucide-react";

const buttonMotion = {
  hover: {
    x: 10,
    y: -10,
  }
}

const textMotion = {
  hover: {
    y: -75,
    opacity: 0
  }
}

const newTextMotion = {
  hover: {
    opacity: 1,
    y: 0
  }
}

const arrowRightMotion = {
  hover: {
    x: 75,
    opacity: 0
  }
}

const newArrowMotion = {
  hover: {
    x: 0,
    opacity: 1
  }
}

export default function HoverButton() {
  return (
    <div className="p-6">
      <div className="w-fit relative">
        <MotionConfig transition={{
          duration: 0.35,
          ease: 'easeInOut'
        }}>
          <motion.div whileHover="hover">
            <motion.button
              className="bg-white cursor-pointer relative z-[2] font-bold px-6 py-3 border border-black flex items-center gap-12"
              variants={buttonMotion}
            >
              <div className="overflow-hidden relative">
                <motion.div className="absolute" variants={textMotion}>
                  HOVER ME!
                </motion.div>
                <motion.div initial={{ y: 75, opacity: 0 }} variants={newTextMotion}>
                  HOVER ME!
                </motion.div>
              </div>
              <div className="overflow-hidden relative">
                <motion.div className="absolute" variants={arrowRightMotion}>
                  <ArrowRight />
                </motion.div>
                <motion.div className="text-red-500" initial={{ x: -75, opacity: 0 }} variants={newArrowMotion}>
                  <ArrowRight />
                </motion.div>
              </div>
          
            </motion.button>
          </motion.div>
        </MotionConfig>
        <div className="bg-black absolute inset-0 z-[1]"></div>
      </div>
    </div>
  );
};
