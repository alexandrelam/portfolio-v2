import React from "react"
import "./styles/card.css"
import Tag from "./tag"
import { Link } from "gatsby"

import { motion } from "framer-motion"

export default function Card({
  title,
  role,
  date,
  content,
  tags,
  children,
  hover,
  nopadding,
  link,
}) {
  return (
    <Link to={link}>
      <motion.div className={`card ${hover ? "toggle-hover" : ""}`}>
        <div className="header">
          <motion.h2 magic magicId="headline">{title}</motion.h2>
          <p>{date}</p>
        </div>
        {role && <p className="role">{role}</p>}
        <p className={`content-paragraph ${nopadding ? "no-padding" : ""}`}>
          {content}
        </p>
        <div className="tag-container">
          {tags && tags.map(tag => <Tag title={tag} />)}
        </div>
        {children && <ul>{children}</ul>}
      </motion.div>
    </Link>
  )
}
