import React from "react"
import SEO from "../components/seo"
import HeroSection from "../sections/hero"
import AboutSection from "../sections/about"
import ExperienceSection from "../sections/experience"
import ProjetSection from "../sections/projet"

import { motion } from "framer-motion"

import "./style.css"

export default function IndexPage() {
  return (
    <div>
      <SEO title="Portfolio" />
      <HeroSection />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 2 }}
      >
        <AboutSection />
        <ExperienceSection />
        <ProjetSection/>
      </motion.div>
    </div>
  )
}
