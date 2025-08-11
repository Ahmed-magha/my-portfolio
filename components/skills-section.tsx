"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Database, Brain, Globe } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Python", level: 95, icon: "🐍" },
      { name: "Java", level: 85, icon: "☕" },
      { name: "C++", level: 80, icon: "⚡" },
      { name: "JavaScript", level: 90, icon: "🟨" },
      { name: "TypeScript", level: 85, icon: "🔷" },
      { name: "PHP", level: 75, icon: "🐘" },
    ],
  },
  {
    title: "ML/AI Frameworks",
    icon: Brain,
    skills: [
      { name: "TensorFlow", level: 90, icon: "🧠" },
      { name: "PyTorch", level: 88, icon: "🔥" },
      { name: "Scikit-learn", level: 92, icon: "📊" },
      { name: "Keras", level: 85, icon: "🎯" },
      { name: "OpenCV", level: 80, icon: "👁️" },
      { name: "Hugging Face", level: 85, icon: "🤗" },
    ],
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: [
      { name: "React", level: 88, icon: "⚛️" },
      { name: "Next.js", level: 85, icon: "▲" },
      { name: "Node.js", level: 82, icon: "🟢" },
      { name: "HTML/CSS", level: 95, icon: "🎨" },
      { name: "Tailwind CSS", level: 90, icon: "💨" },
      { name: "FastAPI", level: 85, icon: "⚡" },
    ],
  },
  {
    title: "Databases & Cloud",
    icon: Database,
    skills: [
      { name: "MySQL", level: 85, icon: "🐬" },
      { name: "PostgreSQL", level: 80, icon: "🐘" },
      { name: "MongoDB", level: 75, icon: "🍃" },
      { name: "Azure", level: 82, icon: "☁️" },
      { name: "AWS", level: 78, icon: "📦" },
      { name: "Docker", level: 85, icon: "🐳" },
    ],
  },
]

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#2d6b4f] to-[#4a8b6b] bg-clip-text text-transparent"
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-[#0d2818]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#1a4d3a]/50"
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center mb-6">
                <category.icon className="h-8 w-8 text-[#2d6b4f] mr-3" />
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="relative"
                    initial={{ x: -20, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex items-center">
                      <span className="text-lg mr-3">{skill.icon}</span>
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Skills Animation */}
        <motion.div
          className="mt-16 relative h-32 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="absolute inset-0 flex items-center">
            <motion.div
              className="flex space-x-8 whitespace-nowrap"
              animate={{ x: [0, -1000] }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              {[...skillCategories.flatMap((cat) => cat.skills), ...skillCategories.flatMap((cat) => cat.skills)].map(
                (skill, index) => (
                  <motion.div
                    key={`${skill.name}-${index}`}
                    className="flex items-center bg-[#0d2818]/30 backdrop-blur-sm rounded-full px-4 py-2 border border-[#2d6b4f]/20"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(45, 107, 79, 0.1)" }}
                  >
                    <span className="text-2xl mr-2">{skill.icon}</span>
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                  </motion.div>
                ),
              )}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
