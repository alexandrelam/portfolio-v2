import React from "react"
import "./styles/card.css"
import Tag from "./tag"

export default function Card({ title, role, date, content, tags, children }) {
  return (
    <div className="card">
      <div className="header">
        <h2>{title}</h2>
        <p>{date}</p>
      </div>
      {role && <p className="role">{role}</p>}
      <p className="content-paragraph">{content}</p>
      <div className="tag-container">
        {tags && tags.map(tag => <Tag title={tag} />)}
      </div>
      {children && <ul>{children}</ul>}
    </div>
  )
}
