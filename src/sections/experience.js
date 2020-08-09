import React from "react"
import Layout from "../components/layout"
import Card from "../components/card"
import DownloadButton from "../components/download_button"
import CV from "../static/Alexandre_CV.pdf"

export default function ExperienceSection() {
  return (
    <Layout title="EXPÉRIENCE">
      <Card
        title="Institut Mines-Télécom"
        date="2018 - Maintenant"
        content="Sciences de l'ingénieur, algorithmique, base de données, etc"
        nopadding
      />
      <Card
        title="Energie Formation, GRDF"
        date="Février - Avril 2019"
        role="Technicien de maintenance "
        content="Stage ouvrier dans le domaine de la maintenance"
      >
        <li>Activités de maintenance des installations pédagogiques</li>
        <li>Aménagement du showroom sur le campus</li>
        <li>Participation à différentes formations sur les métiers du gaz</li>
      </Card>
      <Card
        title="RATP"
        date="Mai - Août 2020"
        role="Chargé d'étude et de travaux"
        content="La cellule Plan Prévention des Risques Inondation a exprimé le souhait d’acquérir un nouvel logiciel de gestion de crise"
      >
        <li>
          Recueil des besoins auprès des différents acteurs pour le futur
          logiciel
        </li>
        <li>
          Rédaction d'un cahier des charges fonctionnels regroupant l'ensemble
          des besoins collectés
        </li>
        <li>Création de plusieurs maquettes à l'aide de Figma</li>
      </Card>
      <DownloadButton link={CV} />
    </Layout>
  )
}
