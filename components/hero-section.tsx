"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [text, setText] = useState("")
  const fullText = "Ahmed Magha"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 150)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#2d6b4f] via-[#4a8b6b] to-[#66a582] bg-clip-text text-transparent">
              {text}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                className="text-[#2d6b4f]"
              >
                |
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            Data & AI Engineer | Machine Learning Enthusiast
          </motion.p>

          <motion.p
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            Transforming data into intelligent solutions with cutting-edge AI technologies. Passionate about building
            the future through machine learning and innovation.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#1a4d3a] to-[#2d6b4f] hover:from-[#2d6b4f] hover:to-[#4a8b6b] text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            onClick={() => {
              const link = document.createElement("a")
              link.href = "/CV_ENG.pdf"
              link.download = "Ahmed_Magha_CV.pdf"
              link.click()
            }}
          >
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>

          <div className="flex gap-4">
            <motion.a
              href="https://github.com/Ahmed-magha"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#0d2818] hover:bg-[#1a4d3a] transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="h-6 w-6 text-[#2d6b4f]" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BgW4arJxwRuaTK03OQ16m%2Bg%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#0d2818] hover:bg-[#1a4d3a] transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="h-6 w-6 text-[#2d6b4f]" />
            </motion.a>

            <motion.a
              href="mailto:ahmedmagha0@gmail.com"
              className="p-3 rounded-full bg-[#0d2818] hover:bg-[#1a4d3a] transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="h-6 w-6 text-[#2d6b4f]" />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="h-8 w-8 text-[#2d6b4f]" />
        </motion.div>
      </div>

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-20 w-20 h-20 border-2 border-[#2d6b4f]/30 rounded-lg"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      <motion.div
        className="absolute top-40 right-32 w-16 h-16 border-2 border-[#4a8b6b]/30 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-32 left-32 w-12 h-12 border-2 border-[#1a4d3a]/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
    </section>
  )
}
