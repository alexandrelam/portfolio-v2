import React from "react"
import Layout from "../components/layout"
import Card from "../components/card"
import DownloadButton from "../components/download_button"
import CV from "../static/Alexandre_CV.pdf"

export default function ExperienceSection() {
  return (
    <Layout title="EXPERIENCE">
      <Card
        title="Institut Mines-Télécom"
        date="2018 - Maintenant"
        content="Sciences de l'ingénieur, algorithmique, base de donnée, etc"
      />
      <Card
        title="Energie Formation, GRDF"
        date="Février - Avril 2019"
        role="Technicien de maintenance "
        content="Stage ouvrier dans le domaine de la maintenance"
      >
        <li>Acquisition de nombreuses connaissances techniques liées au gaz</li>
        <li>Participation aux activités de maintenance du campus</li>
        <li>Prise d'initiatives pour la mise en place du projet "showroom"</li>
      </Card>
      <Card
        title="RATP"
        date="Mai - Août 2020"
        role="Chargé d'étude et de travaux"
        content="La cellule Plan Prévention des Risque Inondation a exprimé le souhait d’acquérir un nouvel outil de gestion de crise"
      >
        <li>
          Collecte des besoins auprès de différents acteurs pour le futur outil
          de gestion de crise
        </li>
        <li>
          Rédaction d'un cahier des charges fonctionnels regroupant l'ensemble
          des besoins collectés
        </li>
        <li>Création de plusieurs maquettes à l'aide de Figma</li>
      </Card>
      <DownloadButton link={CV}/>
    </Layout>
  )
}
