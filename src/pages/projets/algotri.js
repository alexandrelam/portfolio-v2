import React from "react"
import Details from "../../components/details"

export default function AlgoTri() {
  return (
    <div>
      <Details
        title="Visualiseur d’algorithmes de tri"
        author="Alexandre LAM"
        date="Novembre 2019"
        tech_stack={[
          "C Programming",
          "SDL2",
        ]}
        description="Cette application permet de visualiser les algorithmes de tri suivants  : Quicksort, Mergesort et Bubblesort."
        youtube="https://www.youtube.com/embed/9iRyrO6_7qg"
        timestamps={[
          { time: "0:02", description: "Quicksort" },
          { time: "0:12", description: "Mergesort" },
          { time: "0:38", description: "Bubblesort" },
        ]}
        next_project_link="/projets/machinelearning"
      />
    </div>
  )
}
