import React from "react"
import Details from "../../components/details"

export default function MachineLearning() {
  return (
    <div>
      <Details
        title="Machine learning et algorithme génétique"
        author="Alexandre LAM"
        date="Février - Avril 2019"
        github="https://github.com/alexandrelam/basic-NEAT-Flappy-Bird"
        tech_stack={[
          "Python",
          "Numpy",
          "Pygame",
        ]}
        description="Cet algorithme de génétique est basé sur le jeu Flappy Bird. Il imite la “sélection naturelle” pour générer des oiseaux de plus en plus doués à ce jeu. Chaque oiseau généré possède un réseau de neurones qui lui est propre. Les individus les plus performants de chaque génération sont sélectionnés pour se reproduire. A terme, seuls les meilleurs oiseaux existent."

        youtube="https://www.youtube.com/embed/qzc0z3aYRk0?rel=0"
        timestamps={[
          { time: "0:00", description: "Création du jeu Flappy Bird" },
          { time: "1:23", description: "Ajout de l'algorithme de machine learning" },
          { time: "1:41", description: "Meilleur record" },
        ]}
        next_project_link="/projets/portfoliov2"
      />
    </div>
  )
}
