"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin, Award } from "lucide-react"

const experiences = [
  {
    id: 1,
    title: "OCR & Multimodal AI Engineer Intern",
    company: "Attijariwafa Bank",
    location: "Morocco",
    period: "2025",
    description:
      "Developed and optimized an in-house system for automatic extraction of sensitive data from complex cheque layouts, leveraging OCR models and multimodal large language models (LLMs).",
    achievements: [
      "Fine-tuned state-of-the-art OCR and multimodal models for bank-specific documents",
      "Applied quantization techniques to reduce inference time on mid-resource devices",
      "Achieved high accuracy in extracting structured data from noisy cheque images",
    ],
    logo: "/logos/attijari logo.png",
  },
  {
    id: 2,
    title: "Agricultural AI & Computer Vision Intern",
    company: "OCP Group",
    location: "Morocco",
    period: "2024",
    description:
      "Applied data science and computer vision techniques to analyze soil data and plant images, providing personalized recommendations to optimize fertilization strategies and improve crop disease management.",
    achievements: [
      "Processed and analyzed multi-source agricultural datasets for actionable insights",
      "Developed an ML model to detect plant diseases from images with high accuracy",
      "Delivered a decision support tool enabling real-time recommendations for farmers",
    ],
    logo: "/logos/OCP_Group.png",
  },
  {
    id: 3,
    title: "BC-Skills NLP Chatbot Developer Intern",
    company: "BC-Skills Company",
    location: "Morocco",
    period: "2024",
    description:
      "Gained hands-on experience in conversational AI by designing and developing an intelligent chatbot from scratch, integrating deep learning models to enhance interaction quality and user engagement.",
    achievements: [
      "Designed and implemented the chatbot architecture, integrating NLP models for context-aware responses",
      "Improved conversation flow and engagement through continuous model fine-tuning",
      "Delivered a fully functional virtual assistant deployed for internal use",
    ],
    logo: "/logos/BCskills logo.png",
  },
]

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 px-4 max-w-7xl mx-auto">
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
          Professional Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2d6b4f] via-[#4a8b6b] to-[#66a582]"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:gap-8`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-[#2d6b4f] rounded-full border-4 border-[#020202] z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0`}>
                  <motion.div
                    className="bg-[#0d2818]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#1a4d3a]/50 hover:border-[#2d6b4f]/50 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-white/10 p-2 flex items-center justify-center">
                        <img
                          src={experience.logo || "/placeholder.svg"}
                          alt={`${experience.company} logo`}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            // Fallback to first letter if image fails to load
                            const target = e.target as HTMLImageElement
                            target.style.display = "none"
                            const parent = target.parentElement
                            if (parent && !parent.querySelector(".fallback-text")) {
                              const fallback = document.createElement("div")
                              fallback.className = "fallback-text text-[#2d6b4f] font-bold text-lg"
                              fallback.textContent = experience.company.charAt(0)
                              parent.appendChild(fallback)
                            }
                          }}
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{experience.title}</h3>
                        <p className="text-[#2d6b4f] font-medium">{experience.company}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {experience.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {experience.location}
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed text-left">{experience.description}</p>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="h-4 w-4 text-[#2d6b4f]" />
                        <span className="text-[#2d6b4f] font-medium">Key Achievements</span>
                      </div>
                      <ul className="space-y-1 text-sm text-gray-300 text-left">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <motion.li
                            key={achievementIndex}
                            className="flex items-start gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.4, delay: index * 0.2 + achievementIndex * 0.1 }}
                          >
                            <span className="text-[#2d6b4f] mt-1 flex-shrink-0">•</span>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
