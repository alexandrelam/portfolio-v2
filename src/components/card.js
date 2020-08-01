import React from "react"
import "./styles/card.css"

export default function Card({ title, role, date, content, children }) {
  return (
    <div className="card">
      <div className="header">
        <h2>{title}</h2>
        <p>{date}</p>
      </div>
      {role && <p className="role">{role}</p>}
      <p className="content-paragraph">{content}</p>
      {children && <ul>{children}</ul>}
    </div>
  )
}
