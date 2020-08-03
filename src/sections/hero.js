import React from "react"
import ProfileImage from "../components/profile_image"
import ScrollIcon from "../components/scroll_icon"
import Wave from "../images/waving_hand.png"
import Pointing from "../images/pointing_finger.png"
import "./styles/hero.css"

import { motion } from "framer-motion"

const variants = {
  hidden: { y: 26 * 3 },
  visible: {
    y: 0,
  },
}

export default function HeroSection() {
  return (
    <section>
      <div className="hero">
        <div className="content">
          <div className="left-content">
            <div className="txt-animation top">
              <motion.p
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ delay: 0.3, ease: "easeOut", duration: 0.4 }}
              >
                SALUT!{" "}
                <span>
                  <motion.img
                    src={Wave}
                    animate={{
                      rotate: [0, 15, -15, 15, 0],
                      x: [0, 4, -4, 4, 0],
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.6,
                      ease: "easeInOut",
                    }}
                  />
                </span>
              </motion.p>
            </div>
            <div className="txt-animation line1">
              <motion.p
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ delay: 0.5, ease: "easeOut", duration: 0.4 }}
              >
                Je suis <strong>Alexandre LAM</strong>, un étudiant passionné
              </motion.p>
            </div>
            <div className="txt-animation line2">
              <motion.p
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ delay: 0.5, ease: "easeOut", duration: 0.4 }}
              >
                par l'ingénieurie et la programmation
              </motion.p>
            </div>
            <div className="txt-animation line1">
              {" "}
              <motion.p
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ delay: 0.7, ease: "easeOut", duration: 0.4 }}
              >
                J'adore résoudre des problèmes
              </motion.p>
            </div>

            <div className="txt-animation line2">
              {" "}
              <motion.p
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ delay: 0.7, ease: "easeOut", duration: 0.4 }}
              >
                par l'intermédiaire de{" "}
                <strong className="highlight"><a href="#projet">mes projets</a></strong> !
              </motion.p>
            </div>
            <div className="txt-animation bottom">
              {" "}
              <motion.p
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ delay: 0.8, ease: "easeOut", duration: 0.4 }}
              >
                Contacte moi{" "}
                <span>
                  <img src={Pointing} />
                </span>{" "}
                <strong>alexandrelam@outlook.com</strong>
              </motion.p>
            </div>
          </div>
        </div>
        <motion.div
          className="image-container"
          initial={{ scale: 0.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <ProfileImage />
          <div className="image-border-1"></div>
          <div className="image-border-2"></div>
        </motion.div>
      </div>
      <motion.div
        className="icon-container"
        initial={{ y: "30vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, type:'spring', velocity:3 }}
      >
        <ScrollIcon />
      </motion.div>
    </section>
  )
}
