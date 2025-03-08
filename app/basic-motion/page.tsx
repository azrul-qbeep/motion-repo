"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import ExampleLayout from "../layouts/example-layout";
import BaseButton from "../ui/button";

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
