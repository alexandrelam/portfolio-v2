import React from "react"
import Details from "../../components/details"

export default function Grapheur() {
  return (
    <div>
      <Details
        title="Grapheur de fonctions mathématiques"
        author="Alexandre LAM"
        date="Janvier - Février 2020"
        github="https://github.com/alexandrelam/ml-labeling"
        tech_stack={[
          "C Programming",
          "OpenGL",
          "Gitlab",
        ]}
        description="Cette application permet de visualiser une fonction mathématique sur un graphique. L’intérêt de ce projet a été d’approfondir mes connaissances en algorithmique : arbre binaire, stack, linked-list"
        role={["une partie de l'analyse lexicale", "le moteur d'évaluation","une partie de l'affichage graphique"]}
        functionality={[
          "API RESTful avec Python et Django",
          "Frontend avec React",
          "Système d’authentification basé sur les tokens",
          "HTML Canvas pour afficher l’image et gérer les rectangles",
        ]}
        next_project_link="/projets/algotri"
      />
    </div>
  )
}