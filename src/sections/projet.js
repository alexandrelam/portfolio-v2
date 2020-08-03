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
        />
        <Card
          title="Application de visualisation pour la RATP"
          date="Juillet 2020"
          content="Création d'un outil de visualisation qui trie et formate les données de l'api de Vigicrues pour faciliter son utilisatoin par la RATP"
          tags={["Gatsby", "React", "Graphql", "Git", "Github Pages"]}
          hover
          link="/testpage/"
        />
        <Card
          title="Application fullstack de labellisation d'image"
          date="Avril - Juin 2020"
          content="Création d'une application fullstack qui permet de labelliser des images en vue de l'entraînement d'un algorithme de machine learning de vision"
          tags={["Python", "Django", "Django-rest-framework", "React", "Git"]}
          hover
        />
        <Card
          title="Grapheur de fonctions mathématiques"
          date="Janvier - Février 2020"
          content="Création d'une application similaire à geogebra qui permet de visualiser la courbe d'une fonction entrée"
          tags={["Programmation en C", "OpenGL"]}
          hover
        />
        <Card
          title="Visualiseur d'algorithmes de tri"
          date="Novembre 2019"
          content="Outil de visualisation des algorithmes de tri : Quicksort, Bubblesort, Mergesort"
          tags={["Programmation en C", "SDL2"]}
          hover
        />
        <Card
          title="Machine learning et algorithme génétique"
          date="Février - Avril 2019"
          content="Création d'un algorithme de machine learning sans supervision basé sur le jeu Flappy Bird"
          tags={["Python", "Pygame", "Numpy"]}
          hover
        />
      </Layout>
    </div>
  )
}
