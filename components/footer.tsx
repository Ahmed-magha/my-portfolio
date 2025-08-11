"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Linkedin, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[#020202]/50 backdrop-blur-sm border-t border-[#1a4d3a]/50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#2d6b4f] to-[#4a8b6b] bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to collaborate on your next AI project? Let's discuss how we can leverage cutting-edge technologies to
            solve your business challenges.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-[#2d6b4f] mb-6">Contact Information</h3>

            <div className="space-y-4">
              <motion.div
                className="flex items-center gap-4 p-4 bg-[#0d2818]/50 rounded-lg border border-[#1a4d3a]/50 hover:border-[#2d6b4f]/50 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <Mail className="h-6 w-6 text-[#2d6b4f]" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-medium">ahmed.magha@example.com</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 p-4 bg-[#0d2818]/50 rounded-lg border border-[#1a4d3a]/50 hover:border-[#2d6b4f]/50 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <Phone className="h-6 w-6 text-[#2d6b4f]" />
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white font-medium">+212 XXX XXX XXX</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 p-4 bg-[#0d2818]/50 rounded-lg border border-[#1a4d3a]/50 hover:border-[#2d6b4f]/50 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <MapPin className="h-6 w-6 text-[#2d6b4f]" />
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white font-medium">Morocco</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold text-[#2d6b4f] mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#0d2818] hover:bg-[#1a4d3a] rounded-lg border border-[#1a4d3a] hover:border-[#2d6b4f]/50 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="h-6 w-6 text-[#2d6b4f]" />
                </motion.a>

                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#0d2818] hover:bg-[#1a4d3a] rounded-lg border border-[#1a4d3a] hover:border-[#2d6b4f]/50 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="h-6 w-6 text-[#2d6b4f]" />
                </motion.a>

                <motion.a
                  href="mailto:ahmed.magha@example.com"
                  className="p-3 bg-[#0d2818] hover:bg-[#1a4d3a] rounded-lg border border-[#1a4d3a] hover:border-[#2d6b4f]/50 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="h-6 w-6 text-[#2d6b4f]" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Resume Actions */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-[#2d6b4f] mb-6">Resume & Portfolio</h3>

            <div className="space-y-4">
              <motion.div
                className="p-6 bg-[#0d2818]/50 rounded-lg border border-[#1a4d3a]/50"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-lg font-semibold text-white mb-2">Download Resume</h4>
                <p className="text-gray-400 mb-4">
                  Get a comprehensive overview of my experience, skills, and achievements in AI and data engineering.
                </p>
                <Button
                  className="w-full bg-gradient-to-r from-[#1a4d3a] to-[#2d6b4f] hover:from-[#2d6b4f] hover:to-[#4a8b6b] text-white"
                  onClick={() => {
                    // Create a dummy PDF download
                    const link = document.createElement("a")
                    link.href = "/ahmed-magha-resume.pdf"
                    link.download = "Ahmed_Magha_Resume.pdf"
                    link.click()
                  }}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download PDF Resume
                </Button>
              </motion.div>

              <motion.div
                className="p-6 bg-[#0d2818]/50 rounded-lg border border-[#1a4d3a]/50"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-lg font-semibold text-white mb-2">View Online Resume</h4>
                <p className="text-gray-400 mb-4">
                  Browse my interactive online resume with detailed project descriptions and live links.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-[#2d6b4f]/50 text-[#2d6b4f] hover:bg-[#2d6b4f]/10 bg-transparent"
                  onClick={() => window.open("/resume", "_blank")}
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View Online Resume
                </Button>
              </motion.div>

              <motion.div
                className="p-6 bg-gradient-to-r from-[#0d2818]/50 to-[#1a4d3a]/50 rounded-lg border border-[#2d6b4f]/20"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-lg font-semibold text-[#2d6b4f] mb-2">Let's Work Together</h4>
                <p className="text-gray-300 mb-4">
                  Interested in collaborating? I'm always open to discussing new opportunities and innovative projects.
                </p>
                <Button
                  className="w-full bg-[#2d6b4f] hover:bg-[#4a8b6b] text-white"
                  onClick={() =>
                    (window.location.href = "mailto:ahmed.magha@example.com?subject=Collaboration Opportunity")
                  }
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className="pt-8 border-t border-[#1a4d3a]/50 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400">© 2024 Ahmed Magha. Built with Next.js, Three.js, and passion for AI.</p>
          <p className="text-gray-500 text-sm mt-2">
            Designed to showcase the intersection of technology and creativity.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
