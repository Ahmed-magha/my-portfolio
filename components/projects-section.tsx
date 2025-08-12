"use client"

import type React from "react"

import { useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    id: 1,
    title: "Virtual Assistant (BC-Skills BOT)",
    description: "AI-powered chatbot with deep learning capabilities for skill assessment and career guidance.",
    shortDesc: "AI chatbot for skill assessment",
    image: "/ai-chatbot-interface.png",
    images: ["/ai-chatbot-dashboard.png", "/chatbot-conversation-flow.png", "/placeholder-tlmlz.png"],
    tech: ["Python", "TensorFlow", "NLP", "Flask", "React"],
    github: "https://github.com",
    demo: "https://demo.com",
    details:
      "Developed an intelligent virtual assistant that helps users assess their skills and provides personalized career guidance. The system uses advanced NLP techniques and machine learning algorithms to understand user queries and provide relevant responses.",
    timeline: "3 months",
    team: "4 members",
  },
  {
    id: 2,
    title: "Agricultural Decision Support Tool",
    description: "Machine learning system for OCP Group to optimize agricultural decisions and crop management.",
    shortDesc: "ML system for crop optimization",
    image: "/agricultural-dashboard.png",
    images: ["/agricultural-dashboard-interface.png", "/crop-prediction-analytics.png", "/placeholder-bufvo.png"],
    tech: ["Python", "Scikit-learn", "Pandas", "Django", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
    details:
      "Built a comprehensive decision support system for agricultural optimization, incorporating weather data, soil conditions, and historical crop performance to provide actionable insights for farmers and agricultural companies.",
    timeline: "4 months",
    team: "5 members",
  },
  {
    id: 3,
    title: "COVID Detection Tool",
    description: "Medical AI application for COVID-19 detection using chest X-ray analysis with computer vision.",
    shortDesc: "AI-powered COVID detection",
    image: "/medical-ai-covid-interface.png",
    images: ["/covid-detection-dashboard.png", "/placeholder-bkv68.png", "/detection-results-visualization.png"],
    tech: ["Python", "PyTorch", "OpenCV", "FastAPI", "Docker"],
    github: "https://github.com",
    demo: "https://demo.com",
    details:
      "Developed a deep learning model for COVID-19 detection from chest X-rays, achieving high accuracy in medical image classification. The system includes a user-friendly interface for healthcare professionals.",
    timeline: "2 months",
    team: "3 members",
  },
  {
    id: 4,
    title: "IoT Medical Monitoring",
    description: "Real-time health tracking system with IoT sensors and predictive analytics for patient monitoring.",
    shortDesc: "IoT health monitoring system",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    tech: ["Python", "IoT", "MongoDB", "React", "Node.js"],
    github: "https://github.com",
    demo: "https://demo.com",
    details:
      "Created an IoT-based medical monitoring system that tracks patient vital signs in real-time, with predictive analytics to alert healthcare providers of potential health issues before they become critical.",
    timeline: "5 months",
    team: "6 members",
  },
  {
    id: 5,
    title: "QuantCompass",
    description: "AI-powered portfolio optimization dashboard for algorithmic trading and investment strategies.",
    shortDesc: "AI portfolio optimization",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    tech: ["Python", "TensorFlow", "Pandas", "React", "D3.js"],
    github: "https://github.com",
    demo: "https://demo.com",
    details:
      "Built an intelligent portfolio optimization system that uses machine learning algorithms to analyze market trends and optimize investment strategies for maximum returns while minimizing risk.",
    timeline: "4 months",
    team: "4 members",
  },
  {
    id: 6,
    title: "Check Data Extraction System",
    description: "OCR and LLM-powered banking solution for automated check processing and data extraction.",
    shortDesc: "OCR banking solution",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    tech: ["Python", "OCR", "OpenAI", "FastAPI", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
    details:
      "Developed an automated check processing system that uses OCR technology and large language models to extract and validate banking information from check images, significantly reducing manual processing time.",
    timeline: "3 months",
    team: "3 members",
  },
]

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1))
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1))
    }
  }

  const closeModal = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
  }

  const handleModalClick = (e: React.MouseEvent) => {
    // Close modal if clicking on the backdrop
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  const handleContentClick = (e: React.MouseEvent) => {
    // Prevent modal from closing when clicking on content
    e.stopPropagation()
  }

  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
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
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-[#0d2818]/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#1a4d3a]/50 hover:border-[#2d6b4f]/50 transition-all duration-300 cursor-pointer group"
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              onClick={() => {
                setSelectedProject(project)
                setCurrentImageIndex(0)
              }}
            >
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-[#0d2818] to-[#1a4d3a] flex items-center justify-center group-hover:from-[#1a4d3a] group-hover:to-[#2d6b4f] transition-all duration-300">
                  <div className="text-4xl text-[#2d6b4f] group-hover:text-white transition-colors duration-300">
                    {project.tech[0].charAt(0)}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#020202]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#2d6b4f] transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.shortDesc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-[#0a1f14] text-[#2d6b4f] border border-[#2d6b4f]/30 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="secondary" className="bg-[#0a1f14] text-gray-400 border border-gray-400/30 text-xs">
                      +{project.tech.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-[#2d6b4f]/50 text-[#2d6b4f] hover:bg-[#2d6b4f]/10 flex-1 bg-transparent"
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(project.github, "_blank")
                    }}
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="bg-[#2d6b4f] hover:bg-[#4a8b6b] flex-1"
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(project.demo, "_blank")
                    }}
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleModalClick}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            <motion.div
              className="relative bg-[#020202] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#1a4d3a]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={handleContentClick}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 z-20 p-2 bg-[#0d2818] rounded-full hover:bg-[#1a4d3a] transition-colors border border-[#2d6b4f]/30 hover:border-[#2d6b4f]/50"
                onClick={closeModal}
                type="button"
              >
                <X className="h-6 w-6 text-white hover:text-[#2d6b4f] transition-colors" />
              </button>

              {/* Image Slider */}
              <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
                <div className="w-full h-full bg-gradient-to-br from-[#0d2818] to-[#1a4d3a] flex items-center justify-center">
                  <div className="text-6xl text-[#2d6b4f]">{selectedProject.tech[0].charAt(0)}</div>
                </div>

                <button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                  onClick={prevImage}
                  type="button"
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </button>

                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                  onClick={nextImage}
                  type="button"
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </button>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {selectedProject.images.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? "bg-[#2d6b4f]" : "bg-white/50"
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                      type="button"
                    />
                  ))}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>

                <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.details}</p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-[#2d6b4f] mb-2">Timeline</h4>
                    <p className="text-gray-300">{selectedProject.timeline}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#2d6b4f] mb-2">Team Size</h4>
                    <p className="text-gray-300">{selectedProject.team}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-[#2d6b4f] mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-[#0d2818] text-[#2d6b4f] border border-[#2d6b4f]/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    className="bg-[#0d2818] hover:bg-[#1a4d3a] text-white border border-[#1a4d3a]"
                    onClick={() => window.open(selectedProject.github, "_blank")}
                  >
                    <Github className="h-5 w-5 mr-2" />
                    View Code
                  </Button>
                  <Button
                    className="bg-[#2d6b4f] hover:bg-[#4a8b6b] text-white"
                    onClick={() => window.open(selectedProject.demo, "_blank")}
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
