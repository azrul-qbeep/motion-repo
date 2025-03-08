'use client'

import { motion, useInView, useScroll, useSpring, useTransform } from 'motion/react'
import { useRef } from 'react'
import { ArrowDown } from 'lucide-react'
import Reveal from '../components/motion/reveal'

export default function WhilInView() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  const background = useTransform(
    scrollYProgress, 
    [0, 1], 
    ["rgb(86, 1, 245)", "rgb(1, 245, 13)"]
  )

  return (
    <>
            <motion.div
          style={{
            scaleX: scaleX,
            background: background,
            transformOrigin: 'left',
            position: 'sticky',
            top: 0,
            width: '100%',
            height: '20px'
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
        className={`h-screen ${isInView ? "bg-red-500" : "bg-green-500"} transition-all duration-1000`}
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
    </>
  )
}