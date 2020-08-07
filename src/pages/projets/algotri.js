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
        youtube="https://www.youtube.com/embed/sntehVdfs-o"
        timestamps={[
          { time: "0:00", description: "Quicksort" },
          { time: "0:12", description: "Mergesort" },
          { time: "0:28", description: "Bubblesort" },
        ]}
        next_project_link="/projets/machinelearning"
      />
    </div>
  )
}
