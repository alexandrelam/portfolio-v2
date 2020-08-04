import React from "react"
import Details from "../../components/details"

export default function Labellisation() {
  return (
    <div>
      <Details
        title="Application fullstack de labellisation d’image"
        author="Alexandre LAM"
        date="Avril - Juin 2020"
        github="https://github.com/alexandrelam/ml-labeling"
        tech_stack={[
          "Python",
          "Django",
          "Django-rest-framework",
          "Postman",
          "SQLite",
          "ReactJs",
          "Antd",
          "Konva",
          "Figma",
          "Github",
        ]}
        description="Les algorithmes de machine learning de détection d’objets sont de plus en plus répandus aujourd'hui et requièrent une grande quantité de données pour être entraînés. Cette application permet de labelliser les objets d’une image en ajoutant des “boundary box” autour de ces images."
        functionality={[
          "API RESTful avec Python et Django",
          "Frontend avec React",
          "Système d’authentification basé sur les tokens",
          "HTML Canvas pour afficher l’image et gérer les rectangles",
        ]}
        next_project_link="/projets/grapheur"
      />
    </div>
  )
}
