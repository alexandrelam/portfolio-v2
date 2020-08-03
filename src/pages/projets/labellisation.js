import React from "react"
import Details from "../../components/details"

export default function Labellisation() {
  return (
    <div>
      <Details
        title="Application fullstack de labellisation d’image"
        author="Alexandre LAM"
        date="Juillet 2020"
        github="https://github.com/alexandrelam/ml-labeling"
        tech_stack={[
          "Python",
          "Django",
          "Django-rest-framework",
          "SQLite",
          "ReactJs",
          "Antd",
          "Konva",
          "Figma",
          "Github"
        ]}
        description="Les algorithmes de machine learning de détection d’objets sont de plus en plus répandu aujourd'hui et requiert une grande quantité de données pour être entraînées. Cette application permet de labelliser les objets d’une image en ajoutant des “boundary box” autour d’eux. "
        next_project_link="/projets/portfoliov2"
      />
    </div>
  )
}
