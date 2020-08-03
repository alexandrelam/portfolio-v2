import React from "react"
import "./styles/card.css"
import Tag from "./tag"

import { motion } from "framer-motion"

export default function Card({
  title,
  role,
  date,
  content,
  tags,
  children,
  hover,
  nopadding
}) {
  return (
    <motion.div
      className={`card ${hover ? "toggle-hover" : ""}`}
    >
      <div className="header">
        <h2>{title}</h2>
        <p>{date}</p>
      </div>
      {role && <p className="role">{role}</p>}
      <p className={`content-paragraph ${nopadding ? "no-padding" : ""}`}>{content}</p>
      <div className="tag-container">
        {tags && tags.map(tag => <Tag title={tag} />)}
      </div>
      {children && <ul>{children}</ul>}
    </motion.div>
  )
}
