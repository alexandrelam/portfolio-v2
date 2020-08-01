import React from "react"
import "./styles/layout.css"

export default function Layout(props) {
  return (
    <div className={props.color && "color"}>
      <div className="layout container">
        <h1>{props.title}</h1>
        <div className="content">
          {props.children}
        </div>
      </div>
    </div>
  )
}
