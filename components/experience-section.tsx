"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin, Award } from "lucide-react"

const experiences = [
  {
    id: 1,
    title: "AI Research Intern",
    company: "OCP Group",
    location: "Morocco",
    period: "2024 - Present",
    description:
      "Developed machine learning solutions for agricultural optimization and decision support systems. Led a team of 5 engineers in creating predictive models for crop yield optimization.",
    achievements: [
      "Improved crop yield predictions by 25% using ensemble learning methods",
      "Reduced agricultural decision-making time by 40% through automated insights",
      "Published research on sustainable agriculture AI applications",
    ],
    logo: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    title: "Machine Learning Developer",
    company: "TechStart Solutions",
    location: "Remote",
    period: "2023 - 2024",
    description:
      "Built end-to-end machine learning pipelines for various client projects including computer vision, NLP, and predictive analytics solutions.",
    achievements: [
      "Delivered 8+ ML projects with 95% client satisfaction rate",
      "Implemented real-time inference systems handling 10k+ requests/day",
      "Mentored junior developers in ML best practices",
    ],
    logo: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    title: "Data Science Trainee",
    company: "DataCorp Analytics",
    location: "Morocco",
    period: "2023",
    description:
      "Gained hands-on experience in data preprocessing, statistical analysis, and machine learning model development across various industry domains.",
    achievements: [
      "Completed 15+ data science projects across different domains",
      "Achieved 90% accuracy in customer churn prediction model",
      "Presented findings to C-level executives",
    ],
    logo: "/placeholder.svg?height=60&width=60",
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
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <motion.div
                    className="bg-[#0d2818]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#1a4d3a]/50 hover:border-[#2d6b4f]/50 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div
                      className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} flex-row`}
                    >
                      <div className="w-12 h-12 rounded-lg bg-[#0a1f14] p-2 flex items-center justify-center">
                        <div className="text-[#2d6b4f] font-bold text-lg">{experience.company.charAt(0)}</div>
                      </div>
                      <div className={index % 2 === 0 ? "md:text-right" : "md:text-left"}>
                        <h3 className="text-xl font-semibold text-white">{experience.title}</h3>
                        <p className="text-[#2d6b4f] font-medium">{experience.company}</p>
                      </div>
                    </div>

                    <div
                      className={`flex flex-wrap gap-4 mb-4 text-sm text-gray-400 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"} justify-start`}
                    >
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {experience.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {experience.location}
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">{experience.description}</p>

                    <div className="space-y-2">
                      <div
                        className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"} justify-start`}
                      >
                        <Award className="h-4 w-4 text-[#2d6b4f]" />
                        <span className="text-[#2d6b4f] font-medium">Key Achievements</span>
                      </div>
                      <ul
                        className={`space-y-1 text-sm text-gray-300 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} text-left`}
                      >
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <motion.li
                            key={achievementIndex}
                            className="flex items-start gap-2"
                            initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                            transition={{ duration: 0.4, delay: index * 0.2 + achievementIndex * 0.1 }}
                          >
                            <span className="text-[#2d6b4f] mt-1">•</span>
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
