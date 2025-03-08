"use client";

import { motion, AnimatePresence, MotionConfig } from "motion/react";
import { useState } from "react";
import ExampleLayout from "../layouts/example-layout";
import BaseButton from "../ui/button";

const gestureButtonVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.965, rotate: '2.5deg' }
}

export default function BasicMotion() {
  const [showBox, setShowBox] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <ExampleLayout
      menu={
        <div className="flex gap-2 mr-4">
          <BaseButton onClick={() => setShowBox(!showBox)}>
            Show Box
          </BaseButton>
          <BaseButton onClick={() => setShowMenu(!showMenu)}>
            Show Menu
          </BaseButton>
          <MotionConfig
            transition={{
              duration: 0.125,
              ease: 'easeInOut'
            }}
          >
            <motion.button
              variants={gestureButtonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-indigo-500 text-white rounded-lg px-3 py-1 cursor-pointer"
            >
              Gesture
            </motion.button>
            <motion.button
              variants={gestureButtonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-pink-400 text-white rounded-lg px-3 py-1 cursor-pointer"
            >
              Gesture
            </motion.button>
          </MotionConfig>
        </div>
      }
    >
      <AnimatePresence>
        {showBox && (
          <motion.div
            initial={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            animate={{
              rotate: "180deg",
              scale: 1,
              y: [0, 150, -150, -150, 0],
            }}
            exit={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
              times: [0, 0.25, 0.5, 0.85, 1],
            }}
            className="w-24 h-24 rounded-xl bg-gradient-to-tr from-emerald-500 to-emerald-300"
          ></motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showMenu && (
          <motion.div
            className="p-4 bg-slate-700 w-80 h-96 text-white rounded-lg"
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            exit={{
              scale: [1, 1.2, 0],
            }}
            transition={{
              times: [0, 0.5, 1],
            }}
            layout
          >
            Hello
          </motion.div>
        )}
      </AnimatePresence>
    </ExampleLayout>
  );
}
