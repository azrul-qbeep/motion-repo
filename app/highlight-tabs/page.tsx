"use client"

import { motion } from "motion/react"; 
import { MouseEventHandler, useState } from "react";

const buttons = [
  { label: "Issues", value: "issues" },
  { label: "Kanban", value: "kanban" },
  { label: "Gantt", value: "gantt" },
  { label: "Documentation", value: "documentation" },
];

export default function HighlightTabs() {
  const [isActive, setIsActive] = useState<string>('');

  const handleClick = (value: string) => {
    setIsActive(value);
  };

  return (
    <div className="flex gap-3 p-6">
      {buttons.map((button) => (
        <CustomButton
          key={button.value}
          onClick={() => handleClick(button.value)}
          isActive={isActive === button.value}
        >
          {button.label}
        </CustomButton>
      ))}
    </div>
  );
};

const CustomButton = ({ 
  children, 
  onClick, 
  isActive 
}: {
  children: React.ReactNode,
  onClick: MouseEventHandler<HTMLDivElement> | undefined
  isActive: boolean
}) => {
  return (
    <div className="relative w-fit" onClick={onClick}>
      <motion.div
        className={`relative z-[2] border cursor-pointer bg-white inset-0 ${isActive ? "border-violet-500 text-violet-500" : "border-black" } w-fit px-12 py-4 rounded-xl`}
        style={{ transformOrigin: "top left" }}
        whileHover={!isActive ? { y: -5, rotate: -2 } : {}}
        animate={isActive ? { translateY: -10 } : { translateY: 0 }}
      >
        {children}
      </motion.div>
      <div
        className={`absolute inset-0 rounded-xl z-[1] transition-all duration-300 ${
          isActive ? "bg-violet-500" : "bg-black"
        }`}
      ></div>
    </div>
  );
};

