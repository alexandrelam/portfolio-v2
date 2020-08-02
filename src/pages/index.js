import React from 'react'
import SEO from "../components/seo"
import HeroSection from '../sections/hero'
import AboutSection from '../sections/about'
import ExperienceSection from '../sections/experience'
import ProjetSection from '../sections/projet'

import './style.css'

export default function IndexPage() {
  return (
    <div>
      <SEO title="Portfolio" />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjetSection />
    </div>
  )
}
