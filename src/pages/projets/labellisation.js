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
        youtube="https://www.youtube.com/embed/er_ivHNstcg"
        timestamps={[
          { time: "0:00", description: "Lancement de Django et React" },
          { time: "0:36", description: "Déplacement et ajout de rectangles" },
          { time: "0:54", description: "Enregistrement des modifications" },
          { time: "1:31", description: "Requêtes HTTP et base de données" },
          { time: "1:58", description: "Ajout d'une nouvelle image" },
          { time: "2:35", description: "Nouvelle image sur l'application" },
          { time: "3:49", description: "Système de connexion avec Token" },
          { time: "4:28", description: "Signalement d'une image" },
        ]}
        next_project_link="/projets/grapheur"
      />
    </div>
  )
}
