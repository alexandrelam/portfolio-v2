import React from "react"
import Details from "../../components/details"

export default function Portfolio() {
  return (
    <div>
      <Details
        title="PortfolioV2"
        author="Alexandre LAM"
        date="Juillet 2020"
        github="https://github.com/alexandrelam/portfolio"
        hosted_website="https://alexandrelam.github.io/portfolio/"
        tech_stack={[
          "React",
          "Gatsby",
          "Framer Motion",
          "Graphql",
          "Github",
          "Github Pages",
        ]}
        description="Voici la seconde itération de mon portfolio construit avec Gatsby, React et Framer Motion 🔥 👨‍💻"
        next_project_link="/projets/ratp"
      />
    </div>
  )
}
