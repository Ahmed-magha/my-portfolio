"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, User, Code, Briefcase, FolderOpen, Mail } from "lucide-react"

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Projects", href: "#projects", icon: FolderOpen },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Contact", href: "#contact", icon: Mail },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [navVisible, setNavVisible] = useState(true)
  const [activeSection, setActiveSection] = useState("home")
  const [showVerticalNav, setShowVerticalNav] = useState(false)
  const [isNavigating, setIsNavigating] = useState(false)
  const navigationTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Set scrolled state
      setScrolled(currentScrollY > 50)

      // Don't change nav visibility if we're currently navigating
      if (!isNavigating) {
        // Determine nav visibility based on scroll direction and position
        if (currentScrollY < 100) {
          // Always show horizontal nav when near top
          setNavVisible(true)
          setShowVerticalNav(false)
        } else {
          // When scrolled down, determine based on scroll direction
          if (currentScrollY > lastScrollY && currentScrollY > 200) {
            // Scrolling down - hide horizontal nav and show vertical nav
            setNavVisible(false)
            setShowVerticalNav(true)
          } else if (currentScrollY < lastScrollY) {
            // Scrolling up - show horizontal nav and hide vertical nav
            setNavVisible(true)
            setShowVerticalNav(false)
          }
        }
      }

      setLastScrollY(currentScrollY)

      // Determine active section
      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = currentScrollY + 100 // Offset for navbar

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY, isNavigating])

  const scrollToSection = (href: string) => {
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      // Set navigation state to prevent nav visibility changes during scroll
      setIsNavigating(true)

      // Clear any existing timeout
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current)
      }

      const offsetTop = targetElement.offsetTop - 80 // Account for fixed navbar
      const currentScrollY = window.scrollY

      // Determine if we should keep vertical nav visible after navigation
      const shouldShowVerticalNav = offsetTop > 200

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })

      // Set navigation timeout based on scroll distance
      const scrollDistance = Math.abs(offsetTop - currentScrollY)
      const scrollDuration = Math.min(Math.max(scrollDistance / 3, 500), 2000) // Dynamic duration

      navigationTimeoutRef.current = setTimeout(() => {
        setIsNavigating(false)

        // Set nav visibility based on final position
        if (offsetTop < 100) {
          setNavVisible(true)
          setShowVerticalNav(false)
        } else if (shouldShowVerticalNav) {
          setNavVisible(false)
          setShowVerticalNav(true)
        }
      }, scrollDuration)
    }

    setIsOpen(false) // Close mobile menu
  }

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current)
      }
    }
  }, [])

  return (
    <>
      {/* Main Horizontal Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: navVisible ? 0 : -100,
          opacity: navVisible ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-6 relative">
            {/* Centered Desktop Navigation */}
            <motion.div
              className="hidden md:flex space-x-12 bg-[#0d2818]/30 backdrop-blur-sm rounded-full px-8 py-3 border border-[#2d6b4f]/20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.href.substring(1) ? "text-[#2d6b4f]" : "text-gray-300 hover:text-[#2d6b4f]"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2d6b4f] rounded-full"
                      layoutId="horizontalActiveSection"
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      exit={{ opacity: 0, scaleX: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>

            {/* Mobile Menu Button - positioned absolutely */}
            <motion.button
              className="md:hidden absolute right-0 text-white bg-[#0d2818]/50 backdrop-blur-sm rounded-full p-3 border border-[#2d6b4f]/20"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden bg-[#020202]/95 backdrop-blur-md border-t border-[#2d6b4f]/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-4 space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`flex items-center gap-3 w-full text-left py-2 px-4 rounded-lg transition-colors duration-200 ${
                      activeSection === item.href.substring(1)
                        ? "text-[#2d6b4f] bg-[#2d6b4f]/10"
                        : "text-gray-300 hover:text-[#2d6b4f] hover:bg-[#2d6b4f]/5"
                    }`}
                    whileHover={{ x: 10 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <item.icon size={18} />
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Vertical Side Navigation */}
      <AnimatePresence>
        {showVerticalNav && (
          <motion.div
            className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden md:block"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <motion.div
              className="bg-[#0d2818]/40 backdrop-blur-sm rounded-2xl p-3 border border-[#2d6b4f]/20 shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="flex flex-col space-y-3">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`group relative p-3 rounded-xl transition-all duration-300 ${
                      activeSection === item.href.substring(1)
                        ? "bg-[#2d6b4f]/20 text-[#2d6b4f]"
                        : "text-gray-400 hover:text-[#2d6b4f] hover:bg-[#2d6b4f]/10"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <item.icon size={20} />

                    {/* Tooltip */}
                    <motion.div
                      className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-[#020202] text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none border border-[#2d6b4f]/20"
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.name}
                      <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-[#020202]" />
                    </motion.div>

                    {/* Active indicator */}
                    {activeSection === item.href.substring(1) && (
                      <motion.div
                        className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-[#2d6b4f] rounded-full"
                        initial={{ opacity: 0, scaleY: 0 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        exit={{ opacity: 0, scaleY: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-2 -left-2 w-4 h-4 border-2 border-[#2d6b4f]/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-2 -right-2 w-3 h-3 border-2 border-[#4a8b6b]/30 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Vertical Navigation (appears when scrolling on mobile) */}
      <AnimatePresence>
        {showVerticalNav && (
          <motion.div
            className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 md:hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <motion.div
              className="bg-[#0d2818]/40 backdrop-blur-sm rounded-2xl p-2 border border-[#2d6b4f]/20 shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      activeSection === item.href.substring(1)
                        ? "bg-[#2d6b4f]/20 text-[#2d6b4f]"
                        : "text-gray-400 hover:text-[#2d6b4f] hover:bg-[#2d6b4f]/10"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <item.icon size={18} />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
