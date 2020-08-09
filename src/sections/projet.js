import React from "react"
import Layout from "../components/layout"
import Card from "../components/card"

export default function ProjetSection() {
  return (
    <div id="projet">
      <Layout title="PROJETS" color>
        <Card
          title="Portfolio V2"
          date="Juillet - Août 2020"
          content="Le site sur lequel vous êtes en ce moment !"
          tags={[
            "Gatsby",
            "React",
            "Framer Motion",
            "Graphql",
            "Git",
            "Github Pages",
          ]}
          hover
          link="/projets/portfoliov2"
        />
        <Card
          title="Application de visualisation pour la RATP"
          date="Juillet 2020"
          content="Création d'un outil de visualisation qui trie et formate les données de l'api de Vigicrues pour faciliter son utilisation par la RATP"
          tags={["Gatsby", "React", "Graphql", "Git", "Github Pages"]}
          hover
          link="/projets/ratp"
        />
        <Card
          title="Application fullstack de labellisation d'images"
          date="Avril - Juin 2020"
          content="Création d'une application fullstack qui permet de labelliser des images en vue de l'entraînement d'un algorithme de machine learning de vision"
          tags={["Python", "Django", "Django-rest-framework", "React", "Git"]}
          hover
          link="projets/labellisation"
        />
        <Card
          title="Grapheur de fonctions mathématiques"
          date="Janvier - Février 2020"
          content="Création d'une application similaire à Geogebra qui permet de visualiser la courbe d'une fonction"
          tags={["Programmation en C", "OpenGL"]}
          hover
          link="/projets/grapheur"
        />
        <Card
          title="Visualiseur d'algorithmes de tri"
          date="Novembre 2019"
          content="Outil de visualisation des algorithmes de tri : Quicksort, Bubblesort, Mergesort"
          tags={["Programmation en C", "SDL2"]}
          hover
          link="/projets/algotri"
        />
        <Card
          title="Machine learning et algorithme génétique"
          date="Février - Avril 2019"
          content="Création d'un algorithme de machine learning sans supervision basé sur le jeu Flappy Bird"
          tags={["Python", "Pygame", "Numpy"]}
          hover
          link="/projets/machinelearning"
        />
      </Layout>
    </div>
  )
}
