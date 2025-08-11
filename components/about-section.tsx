"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"

const skills = [
  "Machine Learning",
  "Deep Learning",
  "Python",
  "TensorFlow",
  "PyTorch",
  "Data Science",
  "AI Engineering",
  "Computer Vision",
  "NLP",
  "Cloud Computing",
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#2d6b4f] to-[#4a8b6b] bg-clip-text text-transparent"
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="space-y-4 text-gray-300 text-lg leading-relaxed mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>
            I'm a passionate <span className="text-[#2d6b4f] font-semibold">Data & AI Engineer</span> with a fresh
            perspective on solving complex problems through innovative machine learning solutions. My journey in
            artificial intelligence began with a fascination for how data can tell stories and drive intelligent
            decision-making.
          </p>

          <p>
            With expertise spanning from <span className="text-[#4a8b6b] font-semibold">deep learning frameworks</span>{" "}
            to <span className="text-[#66a582] font-semibold"> cloud deployment</span>, I specialize in building
            end-to-end AI systems that bridge the gap between research and real-world applications.
          </p>

          <p>
            I thrive on challenges that push the boundaries of what's possible with AI, whether it's developing
            intelligent chatbots, creating computer vision solutions, or optimizing financial portfolios through
            algorithmic trading.
          </p>
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-[#2d6b4f]">Key Expertise</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
              >
                <Badge
                  variant="secondary"
                  className="bg-[#0d2818] text-[#2d6b4f] border border-[#2d6b4f]/30 hover:bg-[#2d6b4f]/10 transition-colors duration-200"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
