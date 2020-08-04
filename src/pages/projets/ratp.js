import React from "react"
import Details from "../../components/details"

export default function Ratp() {
  return (
    <div>
      <Details
        title="Application de visualisation pour la RATP"
        author="Alexandre LAM"
        date="Juillet 2020"
        github="https://github.com/alexandrelam/30joursvigicrues"
        hosted_website="https://alexandrelam.github.io/30joursvigicrues/"
        tech_stack={["React", "Gatsby", "Graphql", "Github", "Github Pages"]}
        description="30joursvigicrues est une application avec React et Gatsby de recueil des données de Vigicrues. Chaque mois, la RATP relève et enregistre la hauteur quotidienne de l’eau de la Seine et de la Marne. Cette tâche est fastidieuse car elle consiste en le report des données d’un graphique dans un tableau Excel. Mon application récupère les données et les affiche directement dans un tableau, ce qui permet d'économiser du temps."
        functionality={["Page hostée sur Github Pages", "Utilisation de l’api de Vigicrues", "Sélection de la station de mesure Vigicrues", "Ajout d’une station de mesure Vigicrues", "Sélection de l’heure à laquelle la mesure a été enregistrée","Optimisation d’images avec gatsby-image"]}
        next_project_link="/projets/labellisation"
      />
    </div>
  )
}
