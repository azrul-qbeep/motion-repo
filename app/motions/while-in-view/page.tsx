"use client";

import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent
} from "motion/react";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import Reveal from "../../components/motion/reveal";

export default function WhilInView() {
  const ref = useRef(null);
  const secondRef = useRef(null)
  const isInView = useInView(ref, { once: true })
  const isSecondInView = useInView(secondRef, { amount: "all" });

  const targetRef = useRef(null)
  const { scrollYProgress: targetScrollYProgress } = useScroll({ 
    target: targetRef,
    // offset: ["start end", "end start"]
    // offset: ["start start", "end start"]
    offset: ["center", "end start"]
  })
  const rotate = useTransform(targetScrollYProgress,
    [0, 1],
    ["0deg", "180deg"]
  )

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgb(86, 1, 245)", "rgb(1, 245, 13)"]
  );

  const containerRef = useRef(null)
  const secondTargetRef = useRef(null)

  const { scrollXProgress } = useScroll({
    container: containerRef,
    target: secondTargetRef,
    axis: "x",
    offset: ["end start", "start start"]
  })

  useMotionValueEvent(scrollXProgress, "change", (latest) => console.log('latest'))
  return (
    <>
      <motion.div
        style={{
          scaleX: scaleX,
          background: background,
          transformOrigin: "left",
          position: "sticky",
          top: 0,
          width: "100%",
          height: "20px",
        }}
      ></motion.div>
      <div className="h-[150vh] flex gap-1 text-slate-500">
        Scroll down
        <ArrowDown />
      </div>
      <motion.div
        className="h-screen bg-teal-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>
      <div
        ref={ref}
        className={`h-screen relative ${
          isInView ? "bg-red-500" : "bg-green-500"
        } transition-all duration-1000`}
      ></div>
      <div>
        <div className="p-3 flex flex-col gap-3">
          {Array.from({ length: 10 }).map((_, index) => (
            <Reveal key={index}>
              <div className="bg-teal-200 rounded-lg p-4">
                <p>This is a reveal component {index + 1}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="mx-auto h-32 w-96 relative grid place-content-center">
        <h1 className="relative z-0 uppercase text-3xl">SHOW ME ON SCROLL</h1>
        <motion.div
          whileInView={{ opacity: 0 }}
          viewport={{ amount: 'all' }}
          onViewportEnter={() => console.log('Enter!')}
          onViewportLeave={() => console.log('Exit!')}
          className="absolute inset-0 z-10 bg-indigo-500"
        ></motion.div>
      </div>
      <div className="h-[150vh] flex gap-1 text-slate-500">
      </div>
      <div ref={secondRef} className="mx-auto h-32 w-96 relative grid place-content-center">
        <h1 className="uppercase">SHOW ME ON SCROLL</h1>
        <motion.div
          animate={{ y: isSecondInView ? "-100%" : "0%" }}
          className="absolute bottom-0 left-0 top-0 z-10 w-1/3 bg-indigo-500"
        ></motion.div>
        <motion.div
          animate={{ y: isSecondInView ? "100%" : "0%" }}
          className="absolute bottom-0 left-1/3 top-0 z-10 w-1/3 bg-indigo-500"
        ></motion.div>
        <motion.div
          animate={{ y: isSecondInView ? "-100%" : "0%" }}
          className="absolute bottom-0 left-2/3 top-0 z-10 w-1/3 bg-indigo-500"
        ></motion.div>
      </div>
      <div className="h-[150vh] flex gap-1 text-slate-500">
      </div>
      <motion.div
        ref={targetRef}
        style={{ rotate }}
        className="mx-auto size-48 bg-indigo-500"
      ></motion.div>
      <div className="h-[150vh] flex gap-1 text-slate-500">
      </div>
      <div
        ref={containerRef}
        className="flex w-full relative overflow-x-scroll bg-indigo-500/50 py-8"
      >
        <div className="w-full shrink-0"></div>
        <motion.div
          ref={secondTargetRef}
          style={{ opacity: scrollXProgress }}
          className="mx-auto size-48 shrink-0 bg-zinc-50"
        >
        </motion.div>
        <div className="w-full shrink-0"></div>
      </div>
    </>
  );
}
