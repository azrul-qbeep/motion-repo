"use client"

import { motion, useAnimationControls } from "framer-motion";
import ExampleLayout from "../layouts/example-layout";
import BaseButton from "../ui/button";
import { useState } from 'react';

const variants = {
  initial: { rotate: '0deg', backgroundColor: '#008080' },
  flip: { rotate: '360deg', backgroundColor: '#00bfff' }
};

export default function AnimationControls() {
  const controls = useAnimationControls();
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
    controls.start(isFlipped ? 'initial' : 'flip');
  };

  return (
    <ExampleLayout
      menu={
        <BaseButton onClick={handleClick}>
          Flip it!
        </BaseButton>
      }
    >
      <motion.div
        className="size-46 rounded-lg"
        variants={variants}
        initial="initial"
        animate={isFlipped ? 'flip' : 'initial'}
      />
    </ExampleLayout>
  );
}