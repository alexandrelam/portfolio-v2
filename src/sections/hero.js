import React from "react"
import "./styles/hero.css"

export default function HeroSection() {
  return (
    <section className="wrapper">
      <div className="content">
        <div className="left-content">
          <p className="top">SALUT! 👋</p>
          <p className="line1">
            Je suis <strong>Alexandre LAM</strong>, un étudiant passionné
          </p>
          <p className="line2">par l'ingénieurie et la programmation</p>
          <p className="line1">J'adore résoudre des problèmes</p>
          <p className="line2">par l'intermédiaire de <strong className="highlight">mes projets</strong> !</p>
          <p className="bottom">
            Contacte moi 👉 <strong>alexandrelam@outlook.com</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
