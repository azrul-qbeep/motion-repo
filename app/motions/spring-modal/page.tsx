"use client"

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { CircleAlert } from "lucide-react";
import ExampleLayout from "@/app/layouts/example-layout";

export default function SpringModal() {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <ExampleLayout
      menu={
        <button
          onClick={() => setShowDialog(!showDialog)}
          className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-1 rounded-lg font-semibold"
        >
          Open Modal
        </button>
      }
    >
      <div className="p-6">
        <AnimatePresence>
          {showDialog && (
            <div className="fixed inset-0 bg-black/70 z-[10] flex items-center justify-center">
              <motion.div
                style={{
                  transformOrigin: "center"
                }}
                initial={{
                  scale: 0,
                  rotate: "10deg"
                }}
                animate={{
                  scale: 1,
                  rotate: "0deg"
                }}
                // transition={{
                //   duration: 0.5,
                //   type: "spring"
                // }}
                exit={{
                  scale: 0
                }}
                className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white max-w-md p-4 rounded-lg text-center overflow-hidden relative"
              >
                <CircleAlert className="w-56 h-56 absolute left-[-90px] top-[-95px] text-purple-100/20 rotate-12" />
                <div className="w-16 h-16 flex items-center justify-center text-indigo-500 bg-white rounded-full mx-auto">
                  <CircleAlert className="w-12 h-12" />
                </div>
                <h2 className="text-3xl font-bold">One more thing!</h2>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore enim voluptatem vitae.</span>
                <div className="flex justify-between gap-2 mt-4">
                  <button
                    onClick={() => setShowDialog(false)}
                    className="px-3 py-1 w-full rounded-md font-semibold text-white hover:bg-purple-50/20"
                  >
                    Nah, go back
                  </button>
                  <button
                    onClick={() => setShowDialog(false)}
                    className="bg-white w-full rounded-md px-3 py-1 font-semibold text-indigo-600"
                  >
                    Understood!
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </ExampleLayout>
  );
};
