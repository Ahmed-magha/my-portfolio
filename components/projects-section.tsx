"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef } from "react"
import { X, ChevronLeft, ChevronRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    id: 1,
    title: "Virtual Assistant (BC-Skills BOT)",
    description: "AI-powered chatbot with deep learning capabilities for skill assessment and career guidance.",
    shortDesc: "AI chatbot for skill assessment",
    image: "/projects images/bcskills1.png",
    images: ["/projects images/bcskills1.png", "/projects images/bcskills2.png"],
    tech: ["Python", "pytorch", "NLP", "Flask", "React"],
    github: "https://github.com",
    demo: "https://demo.com",
    details:
      "Developed an intelligent virtual assistant that helps users assess their skills and provides personalized career guidance. The system uses advanced NLP techniques and machine learning algorithms to understand user queries and provide relevant responses.",
    timeline: "1 months",
    team: "2 members",
  },
  {
    id: 2,
    title: "Agricultural Decision Support Tool",
    description: "Machine learning system for OCP Group to optimize agricultural decisions and crop management.",
    shortDesc: "ML system for crop optimization",
    image: "/projects images/agro1.png",
    images: [
      "/projects images/agro1.png",
      "/projects images/agro2.png",
      "/projects images/agro3.png",
      "/projects images/agro4.png",
      "/projects images/agro5.png",
      "/projects images/agro6.png",
    ],
    tech: ["Python", "Scikit-learn", "Pandas", "Flask", "react", "Neural Networks"],
    github: "https://github.com",
    demo: "https://demo.com",
    details:
      "Built a comprehensive decision support system for agricultural optimization, incorporating weather data, soil conditions, and historical crop performance to provide actionable insights for farmers and agricultural companies.",
    timeline: "2 months",
    team: "2 members",
  },
  {
    id: 3,
    title: "COVID Detection Tool",
    description: "Medical AI application for COVID-19 detection using chest X-ray analysis with computer vision.",
    shortDesc: "AI-powered COVID detection",
    image: "/projects images/covid1.png",
    images: [
      "/projects images/covid1.png",
      "/projects images/covid2.png",
      "/projects images/covid3.png",
      "/projects images/covid4.png",
      "/projects images/covid5.png",
      "/projects images/covid6.png",
    ],
    tech: ["Python", "PyTorch", "OpenCV", "Flask", "Deep Learning"],
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
    image: "/projects images/cardio-desk 6.png",
    images: [
      "/projects images/cardio-desk 1.png",
      "/projects images/cardio-desk 2.png",
      "/projects images/cardio-desk 3.png",
      "/projects images/cardio-desk 4.png",
      "/projects images/cardio-desk 5.png",
      "/projects images/cardio-desk 6.png",
      "/projects images/cardio-desk 7.png",
      "/projects images/cardio-mob 1.png",
      "/projects images/cardio-mob 2.png",
      "/projects images/cardio-mob 3.png",
    ],
    tech: ["Python", "IoT", "Machine learning", "React", "AWS services"],
    github: "https://github.com",
    demo: "https://demo.com",
    details:
      "Created an IoT-based medical monitoring system that tracks patient vital signs in real-time, with predictive analytics to alert healthcare providers of potential health issues before they become critical.",
    timeline: "2 months",
    team: "3 members",
  },
  {
    id: 5,
    title: "QuantCompass",
    description: "AI-powered portfolio optimization dashboard for algorithmic trading and investment strategies.",
    shortDesc: "AI portfolio optimization",
    image: "/projects images/quant1.png",
    images: [
      "/projects images/quant1.png",
      "/projects images/quant2.png",
      "/projects images/quant3.png",
      "/projects images/quant4.png",
      "/projects images/quant5.png",
      "/projects images/quant6.png",
    ],
    tech: ["Python", "TensorFlow", "Pandas", "React", "D3.js", "Machine learning"],
    github: "https://github.com",
    demo: "https://demo.com",
    details:
      "Built an intelligent portfolio optimization system that uses machine learning algorithms to analyze market trends and optimize investment strategies for maximum returns while minimizing risk.",
    timeline: "3 months",
    team: "1 member",
  },
  {
    id: 6,
    title: "Check Data Extraction System",
    description: "OCR and LLM-powered banking solution for automated check processing and data extraction.",
    shortDesc: "OCR banking solution",
    image: "/projects images/cheque1.png",
    images: [
      "/projects images/cheque1.png",
      "/projects images/cheque2.png",
      "/projects images/cheque3.png",
      "/projects images/cheque4.png",
      "/projects images/cheque5.png",
      "/projects images/cheque6.png",
      "/projects images/cheque7.png",
    ],
    tech: ["Python", "OCR", "OpenAI", "FastAPI", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
    details:
      "Developed an automated check processing system that uses OCR technology and large language models to extract and validate banking information from check images, significantly reducing manual processing time.",
    timeline: "2 months",
    team: "1 member",
  },
]

// Animated Project Card Component
function AnimatedProjectCard({ project, index, isInView, onClick }: any) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Auto-cycle through images for all projects that have multiple images
  useEffect(() => {
    if (project.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
      }, 3000) // Change image every 3 seconds

      return () => clearInterval(interval)
    }
  }, [project.images.length])

  return (
    <motion.div
      className="bg-[#0d2818]/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#1a4d3a]/50 hover:border-[#2d6b4f]/50 transition-all duration-300 cursor-pointer group"
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        {project.images.length > 1 ? (
          // Animated slideshow for projects with multiple images
          <div className="relative w-full h-48 bg-[#0d2818]">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={project.images[currentImageIndex] || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-contain absolute inset-0"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </AnimatePresence>

            {/* Image indicators */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1 z-10">
              {project.images.map((_: any, idx: number) => (
                <motion.div
                  key={idx}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex ? "bg-[#2d6b4f] scale-125" : "bg-white/40"
                  }`}
                  animate={{
                    scale: idx === currentImageIndex ? 1.25 : 1,
                    opacity: idx === currentImageIndex ? 1 : 0.6,
                  }}
                />
              ))}
            </div>

            {/* Hover overlay with navigation hints */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-[#020202]/90 via-transparent to-transparent flex items-end justify-center pb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-white text-sm font-medium bg-[#2d6b4f]/80 px-3 py-1 rounded-full backdrop-blur-sm"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                Click to view gallery
              </motion.div>
            </motion.div>
          </div>
        ) : (
          // Static image for projects with single image
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-48 object-contain bg-[#0d2818] group-hover:scale-105 transition-transform duration-300"
          />
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020202]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#2d6b4f] transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.shortDesc}</p>

        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((tech: string) => (
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
      </div>
    </motion.div>
  )
}

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
            <AnimatedProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
              onClick={() => {
                setSelectedProject(project)
                setCurrentImageIndex(0)
              }}
            />
          ))}
        </div>

        {/* Single Contact for Code button at the end of the section */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#1a4d3a] to-[#2d6b4f] hover:from-[#2d6b4f] hover:to-[#4a8b6b] text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <Mail className="h-5 w-5 mr-2" />
            Contact for Code
          </Button>
        </motion.div>
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
                <img
                  src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain bg-[#0d2818]"
                />

                {selectedProject.images.length > 1 && (
                  <>
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
                  </>
                )}
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
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
