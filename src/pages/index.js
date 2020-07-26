import React from 'react'
import SEO from "../components/seo"
import HeroSection from '../sections/hero'
import About from '../sections/about'
import './style.css'

export default function IndexPage() {
  return (
    <div>
      <SEO title="Portfolio" />
      <HeroSection />
      <About />
    </div>
  )
}
