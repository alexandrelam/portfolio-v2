import React from "react"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { AiFillGithub } from "react-icons/ai"
import { GrLanguage } from "react-icons/gr"
import { Link } from "gatsby"
import { motion } from "framer-motion"

import "./styles/details.css"

export default function Details({
  title,
  author,
  date,
  github,
  hosted_website,
  tech_stack,
  description,
  youtube,
  timestamps,
  next_project_link,
}) {
  return (
    <div className="details container">
      <Link to="/#projet">
        <div className="nav">
          <BsArrowLeft size="2em" /> Retour
        </div>
      </Link>
      <motion.h2 magic magicId="headline" className="project-title">
        {title}
      </motion.h2>
      <div className="info">
        <div className="item">
          <div className="title">Autheur</div>
          <div>{author}</div>
        </div>
        <div className="item">
          <div className="title">Date</div>
          <div>{date}</div>
        </div>
        {github && (
          <div className="item">
            <div className="title">
              <AiFillGithub size="1.4em" />
            </div>
            <a href={github}>{github}</a>
          </div>
        )}
        {hosted_website && (
          <div className="item">
            <div className="title">
              <GrLanguage size="1.3em" />
            </div>
            <a href={hosted_website}>{hosted_website}</a>
          </div>
        )}
      </div>
      <h2>La Stack</h2>
      <div className="stack-items">
        <ul>
          {tech_stack.map(tech => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
      <h2>Description</h2>
      <p>{description}</p>
      {youtube && (
        <div className="player">
          <iframe
            id="ytplayer"
            type="text/html"
            width="640"
            height="360"
            src={youtube}
            frameborder="0"
          />
        </div>
      )}

      {timestamps && (
        <div>
          <h2>Timestamps</h2>
          {timestamps.map(item => (
            <div className="item">
              <div className="title">{item.time}</div>
              <div>{item.description}</div>
            </div>
          ))}
        </div>
      )}
      <Link to={next_project_link}>
        <div className="nav float-right">
          Projet suivant <BsArrowRight size="2em" />
        </div>
      </Link>
    </div>
  )
}
