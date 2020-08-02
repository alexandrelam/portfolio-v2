import React from "react"
import Tag from "../components/tag"
import Layout from "../components/layout"

import "./styles/about.css"

export default function AboutSection() {
  return (
    <Layout title="ABOUT" color={true}>
      <p id="rm-margintop">
        Actuellement, je suis en 2ème année à{" "}
        <strong>l’école d’ingénieurs</strong> à l’Institut des{" "}
        <strong>Mines-Télécom</strong> Lille Douai. Mon projet est de mener des
        études dans le domaine de <strong>l'ingénierie informatique</strong> et
        plus précisément dans le développement.
      </p>
      <p>
        Depuis que j’ai découvert la programmation à mes 17 ans, je n’arrête
        plus ! L’ingénierie logicielle est, pour moi, le meilleur moyen pour
        <strong> résoudre des problèmes</strong> à travers le monde.
      </p>
      <p>
        <strong>Quand je ne suis pas devant mon ordinateur</strong> , j’aime
        voyager et passer du temps avec mes amis. Je suis aussi un enthousiaste
        de hardware et de clavier mécanique custom.
      </p>
      <p>
        Voici quelques{" "}
        <strong>technologies avec lesquelles j’ai travaillé</strong> récemment:
      </p>
      <div className="tag-container">
        <Tag title="Python" />
        <Tag title="Django" />
        <Tag title="Django-rest-framework" />
      </div>
      <div className="tag-container">
        <Tag title="Programmation en C" />
      </div>
      <div className="tag-container">
        <Tag title="HTML" />
        <Tag title="CSS" />
        <Tag title="Javascript" />
      </div>
      <div className="tag-container">
        <Tag title="ReactJS" />
        <Tag title="GatsbyJS" />
        <Tag title="ECMA Script" />
      </div>
      <div className="tag-container">
        <Tag title="Linux Kubuntu" />
        <Tag title="Git" />
        <Tag title="Github" />
        <Tag title="Github Pages" />
        <Tag title="Gitlab" />
        <Tag title="Gitflow" />
      </div>
    </Layout>
  )
}
