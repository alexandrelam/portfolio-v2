import React from "react"
import ProfileImage from "../components/profile_image"
import ScrollIcon from "../components/scroll_icon"
import Wave from "../images/waving_hand.png"
import Pointing from "../images/pointing_finger.png"
import "./styles/hero.css"

export default function HeroSection() {
  return (
    <section>
      <div className="hero">
        <div className="content">
          <div className="left-content">
            <p className="top">
              SALUT! <span><img src={Wave}/></span>
            </p>
            <p className="line1">
              Je suis <strong>Alexandre LAM</strong>, un étudiant passionné
            </p>
            <p className="line2">par l'ingénieurie et la programmation</p>
            <p className="line1">J'adore résoudre des problèmes</p>
            <p className="line2">
              par l'intermédiaire de <strong className="highlight">mes projets</strong> !
            </p>
            <p className="bottom">
              Contacte moi <span><img src={Pointing}/></span> <strong>alexandrelam@outlook.com</strong>
            </p>
          </div>
        </div>
        <div className="image-container">
          <ProfileImage />
          <div className="image-border-1"></div>
          <div className="image-border-2"></div>
        </div>
      </div>
      <div className="icon-container">
        <ScrollIcon />
      </div>
    </section>
  )
}
