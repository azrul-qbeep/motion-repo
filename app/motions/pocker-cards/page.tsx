"use client"

import { motion, useAnimationControls } from "motion/react";

export default function PockerCards() {
  return (
    <div className="flex p-4 mt-96">
      {[...Array(8)].map((_, i) => (
        <Card key={i} i={i} />
      ))}
    </div>
  );
};

const Card = ({ i }: { i: number }) => {
  const hue = 210; 
  const saturation = 0; 
  const lightness = Math.floor((70 / 9) * i) + 10; 
  const bgColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

  const controls = useAnimationControls();

  const handleClick = () => {
    controls.start({
      y: -100,
      transition: { duration: 0.3 },
    }).then(() => {
      controls.start({
        rotateY: 180,
        transition: { duration: 0.5 },
      });
    });
  };

  return (
    <motion.div
      onClick={handleClick}
      animate={controls}
      className={`rounded-3xl cursor-pointer z-[10] ${i !== 0 ? 'ml-[-30px]' : ''}`}
      style={{ backgroundColor: bgColor, width: '160px', height: '180px' }}
      whileHover={{
        y: -20,
      }}
    >
    </motion.div>
  );
};