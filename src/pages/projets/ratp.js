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
        description="Tous les mois, la RATP récupère des informations à partir du graphique du site Vigicrues. Le problème, c’est le temps que cette action prend !  Cette application nommée “30joursvigicrues” affiche les informations que récupère la RATP et les formatent dans un tableau. Cela permet de récupérer directement ces informations et de les transvaser dans un fichier excel."
        youtube="http://www.youtube.com/embed/F1kYBnY6mwg"
        timestamps={[
          { time: "1:00", description: "Début" },
          { time: "3:21", description: "Fin" },
        ]}
        next_project_link="/projets/labellisation"
      />
    </div>
  )
}
