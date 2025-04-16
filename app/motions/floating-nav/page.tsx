"use client"

import { motion } from "framer-motion"

const navMenus = [
  { value: "home", label: "Home" },
  { value: "about", label: "About" },
  { value: "pricing", label: "Pricing" },
]

const textVariants = {
  initial: { y: 0 },
  hover: { y: -30 },
}

const floatingTextVariants = {
  initial: { y: 30 },
  hover: { y: 0 },
}

const buttonVariants = {
  hover: {
    scale: 1.05,
    color: "black"
  }
}

export default function FloatingNav() {
  return (
    <div className="absolute inset-0 bg-neutral-950 rounded-md p-3">
      <div className="flex items-center gap-4 bg-neutral-900 border border-neutral-700 w-fit p-2 rounded-lg">
        <div className="size-4 bg-neutral-200 mx-2" />
        {navMenus.map((menu, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden cursor-pointer"
            initial="initial"
            whileHover="hover"
            animate="initial"
          >
            <motion.span
              className="block text-neutral-300 absolute left-0 top-0"
              variants={floatingTextVariants}
            >
              {menu.label}
            </motion.span>
            <motion.span
              className="block text-neutral-600"
              variants={textVariants}
            >
              {menu.label}
            </motion.span>
          </motion.div>
        ))}
        <motion.button
          className="px-4 border border-neutral-700 py-1 rounded-lg text-neutral-300 cursor-pointer relative overflow-hidden"
          variants={buttonVariants}
          whileHover="hover"
        >
          Join waitlist

          <motion.div
            className="absolute inset-0 z-[-1] size-[200px] -translate-x-6 translate-y-[50px] rounded-full bg-neutral-300"
            variants={{
              hover: {
                y: -100,
                transition: {
                  duration: 0.5,
                  ease: "easeInOut"
                }
              }
            }}
          />
        </motion.button>
      </div>
    </div>
  )
}
