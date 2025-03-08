"use client"

import { useState } from "react";
import { motion } from "motion/react";
import ImageOne from "../../assets/image-card-1.jpeg";
import ImageTwo from "../../assets/image-card-2.jpeg";
import ImageThree from "../../assets/image-card-3.jpg";
import type { StaticImageData } from "next/image";

const images = [
  {
    src: ImageTwo,
    variants: {
      initial: { x: -10, rotate: "-3deg" },
      hover: { x: -100, y: -220, rotate: "-12deg" },
      fullscreen: {
        x: 0,
        y: 0,
        rotate: 0,
        width: "100vw",
        height: "100vh",
      },
    },
  },
  {
    src: ImageOne,
    variants: {
      hover: { y: -120 },
      fullscreen: {
        x: 0,
        y: 0,
        rotate: 0,
        width: "100vw",
        height: "100vh",
      },
    },
  },
  {
    src: ImageThree,
    variants: {
      initial: { x: 10, rotate: "3deg" },
      hover: { x: 80, y: 100, rotate: "12deg" },
      fullscreen: {
        x: 0,
        y: 0,
        rotate: 0,
        width: "100vw",
        height: "100vh",
      },
    },
  },
];

export default function ImageCards() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <div className="flex h-screen justify-center items-center">
      <motion.div
        className="relative w-fit h-fit flex items-center justify-center"
        style={{ position: "relative" }}
        whileHover="hover"
      >
        {images.map((image, index) => (
          <ImageCard
            key={index}
            src={image.src}
            variants={image.variants}
            isSelected={selectedIndex === index}
            onClick={() => {
              if (selectedIndex === index) {
                setSelectedIndex(null);
              } else {
                setSelectedIndex(index);
              }
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

const ImageCard = ({ src, variants, isSelected, onClick }: {
  src: StaticImageData;
  variants: any;
  isSelected: boolean;
  onClick: () => void;
}) => {
  const fullscreen = isSelected ? "fullscreen" : undefined;

  // Create a new variants object, excluding hover if fullscreen
  const currentVariants = isSelected
    ? { fullscreen: variants.fullscreen }
    : variants;

  return (
    <motion.div
      onClick={onClick}
      style={{
        transformOrigin: "bottom center",
        zIndex: isSelected ? 100 : 1,
      }}
      initial={variants.initial}
      animate={fullscreen}
      variants={currentVariants}
      className={`absolute w-[300px] h-[400px] bg-white rounded-3xl cursor-pointer overflow-hidden ${
        isSelected ? "shadow-lg scale-105" : ""
      }`}
    >
      <img src={src.src} className="h-full w-full object-cover" />
    </motion.div>
  );
};

