import React from "react"
import './styles/download_button.css'

export default function DownloadButton({link}) {
  return (
    <button>
      <a href={link} download>
        Télécharger mon CV
      </a>
    </button>
  )
}
