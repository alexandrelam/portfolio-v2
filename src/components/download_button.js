import React from "react"
import "./styles/download_button.css"

import { motion } from "framer-motion"

export default function DownloadButton({ link }) {
  return (
    <motion.button
      whileHover={{
        scale: 1.1,
        rotate: 0.3,
        boxShadow: "3px 3px 5px 0 rgba(0, 0, 0, 0.5)",
      }}
    >
      <a href={link} download>
        Télécharger mon CV
      </a>
    </motion.button>
  )
}
