"use client"

import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import ReactCurvedText from "react-curved-text";

export default function SpringCards() {
  return (
    <div className="p-6 grid grid-cols-2 gap-y-8 max-w-3xl">
      {cardData.map((card, index) => (
        <SpringCard key={index} title={card.title} bgColor={card.bgColor}>
          {card.content}
        </SpringCard>
      ))}
    </div>
  );
};

const cardData = [
  {
    title: "DYNAMIC",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem doloremque vitae minima.",
    bgColor: "bg-emerald-200",
  },
  {
    title: "DATA DRIVEN",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem doloremque vitae minima.",
    bgColor: "bg-indigo-300",
  },
  {
    title: "DUTIFUL",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem doloremque vitae minima.",
    bgColor: "bg-red-300",
  },
  {
    title: "DEMURE",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem doloremque vitae minima.",
    bgColor: "bg-yellow-300",
  },
];

const motionConfigs = {
  card: { hover: { y: -16, x: -16 } },
  backgroundCard: { hover: { y: -8, x: -8 } },
  arrow: { hover: { x: 0, opacity: 1, marginRight: "6px" } },
  button: { initial: { y: 50, opacity: 0 }, hover: { y: -35, opacity: 1 } },
  children: { initial: { y: 0 }, hover: { y: -35, opacity: 1 } },
};

const SpringCard = (
  { children, title, bgColor 

  }: {
    children: React.ReactNode,
    title: string,
    bgColor: string
  }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="w-fit relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div whileHover="hover">
        <motion.div
          variants={motionConfigs.card}
          className={`w-[310px] h-[240px] ${bgColor} border-2 border-black p-2 overflow-hidden relative z-[3]`}
        >
          <div className="p-3 flex flex-col justify-between h-full">
            <motion.span className="font-semibold flex items-center text-lg">
              <motion.div
                variants={motionConfigs.arrow}
                initial={{ x: -10, opacity: 0 }}
              >
                {hovered && <ArrowRight />}
              </motion.div>
              <motion.span layout>{title}</motion.span>
              {hovered && <RotatingText text="LEARN HERE・WEB DEV・LEARN HERE・WEB DEV" />}
            </motion.span>

            <motion.div
              initial={motionConfigs.children.initial}
              variants={motionConfigs.children}
              className="text-sm"
            >
              <span className="block mb-2">{children}</span>
            </motion.div>
          </div>

          <motion.button
            initial={motionConfigs.button.initial}
            variants={motionConfigs.button}
            className="bg-white w-full py-1 border-2 border-black"
          >
            LET'S GO
          </motion.button>
        </motion.div>

        {/* background layers */}
        <motion.div
          variants={motionConfigs.backgroundCard}
          className={`${bgColor} absolute inset-0 border-2 border-black z-[2]`}
        ></motion.div>
        <motion.div
          className={`${bgColor} absolute inset-0 border-2 border-black z-[1]`}
        ></motion.div>
      </motion.div>
    </div>
  );
};

const RotatingText = ({ text }: { text: string}) => {
  return (
    <motion.div
      className="absolute font-bold text-lg"
      style={{ width: "300px", height: "300px", transformOrigin: "center" }}
      initial={{ x: 140, y: -60 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    >
      <ReactCurvedText
        width={300}
        height={300}
        cx={150}
        cy={150}
        rx={100}
        ry={100}
        startOffset={50}
        reversed={false}
        text={text}
        textProps={{ style: { fontSize: 24, opacity: 0.4 } }}
      />
    </motion.div>
  );
};
