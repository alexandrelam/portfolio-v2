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
        description="Cet algorithme de génétique est basé sur le jeu Flappy Bird. Chaque oiseau généré possède un réseau de neurones qui lui est propre. A chaque génération, les oiseaux gardés par la sélection naturelle se reproduisent pour créer les oiseaux de la génération suivante. A terme, seuls les oiseaux les plus performants pour jouer au jeu Flappy Bird existent.
        Cet algorithme imite la “sélection naturelle” pour générer des oiseaux de plus en plus doués au jeu Flappy Birds. Chaque oiseau généré possède un réseau de neurones qui lui est propre. Les individus les plus performants de chaque génération sont sélectionnés pour se reproduire,  A terme, seuls les oiseaux les plus performants OU les meilleurs oiseaux au jeu Flappy Bird existent."
        functionality={["Algorithme de machine learning sans supervision from scratch avec Numpy", "Affichage graphique avec pygame"]}
        youtube="https://www.youtube.com/embed/ldNZmqJjHmg"
        timestamps={[
          { time: "0:00", description: "Création de l'algorithme" },
          { time: "1:24", description: "Algorithme en marche" },
        ]}
        next_project_link="/projets/portfoliov2"
      />
    </div>
  )
}
