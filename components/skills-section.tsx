"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Database, Brain, Cloud } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Python", logo: "/logos/python_1822921.png" },
      { name: "Java", logo: "/logos/java.png" },
      { name: "C++", logo: "/logos/cpp.png" },
      { name: "JavaScript", logo: "/logos/javascript.png" },
      { name: "TypeScript", logo: "/logos/typescript_5968381.png" },
      { name: "R", logo: "/logos/R_logo.svg.png" },
    ],
  },
  {
    title: "ML/AI Frameworks",
    icon: Brain,
    skills: [
      { name: "TensorFlow", logo: "/logos/Tensorflow_logo.svg.png" },
      { name: "PyTorch", logo: "/logos/pytorch.png" },
      { name: "Scikit-learn", logo: "/logos/scikit learn.png" },
      { name: "Keras", logo: "/logos/keras.png" },
      { name: "OpenCV", logo: "/logos/opencv.png" },
      { name: "Hugging Face", logo: "/logos/huggingface.png" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MySQL", logo: "/logos/mysql.png" },
      { name: "PostgreSQL", logo: "/logos/postgres.png" },
      { name: "MongoDB", logo: "/logos/mongodb.png" },
      { name: "Redis", logo: "/logos/redis.png" },
      { name: "SQLite", logo: "/logos/sqlite.png" },
      { name: "Elasticsearch", logo: "/logos/elasticsearch.png" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "Azure", logo: "/logos/azure.png" },
      { name: "AWS", logo: "/logos/aws.png" },
      { name: "Docker", logo: "/logos/docker.png" },
      { name: "Kubernetes", logo: "/logos/kubernetes.png" },
      { name: "Git", logo: "/logos/GIT.png" },
      { name: "Jenkins", logo: "/logos/jenkins.png" },
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

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="group flex flex-col items-center p-3 rounded-xl bg-[#0a1f14]/50 border border-[#1a4d3a]/30 hover:border-[#2d6b4f]/50 hover:bg-[#2d6b4f]/5 transition-all duration-300"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <div className="w-10 h-10 mb-2 rounded-lg bg-white/10 p-2 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                      <img
                        src={skill.logo || "/placeholder.svg"}
                        alt={`${skill.name} logo`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          // Fallback to first letter if image fails to load
                          const target = e.target as HTMLImageElement
                          target.style.display = "none"
                          const parent = target.parentElement
                          if (parent && !parent.querySelector(".fallback-text")) {
                            const fallback = document.createElement("div")
                            fallback.className = "fallback-text text-[#2d6b4f] font-bold text-lg"
                            fallback.textContent = skill.name.charAt(0)
                            parent.appendChild(fallback)
                          }
                        }}
                      />
                    </div>
                    <span className="text-gray-300 text-sm font-medium text-center group-hover:text-[#2d6b4f] transition-colors duration-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-[#0d2818]/30 backdrop-blur-sm rounded-2xl p-8 border border-[#1a4d3a]/50">
            <h3 className="text-2xl font-semibold text-[#2d6b4f] mb-4">Expertise Highlights</h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
              Specialized in building end-to-end AI solutions with expertise spanning from data preprocessing and model
              development to cloud deployment and production optimization. Experienced in both traditional machine
              learning and cutting-edge deep learning frameworks, with a strong foundation in scalable cloud
              architectures.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
