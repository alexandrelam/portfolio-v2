(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"7ANm":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return i}));var n=a("q1tI"),r=a.n(n),l=a("Jszp");function i(){return r.a.createElement("div",null,r.a.createElement(l.a,{title:"Machine learning et algorithme génétique",author:"Alexandre LAM",date:"Février - Avril 2019",github:"https://github.com/alexandrelam/basic-NEAT-Flappy-Bird",tech_stack:["Python","Numpy","Pygame"],description:"Cet algorithme de génétique est basé sur le jeu Flappy Bird. Chaque oiseau généré possède un réseau de neurones qui lui est propre. A chaque génération, les oiseaux gardés par la sélection naturelle se reproduisent pour créer les oiseaux de la génération suivante. A terme, seuls les oiseaux les plus performants pour jouer au jeu Flappy Bird existent. Cet algorithme imite la “sélection naturelle” pour générer des oiseaux de plus en plus doués au jeu Flappy Birds. Chaque oiseau généré possède un réseau de neurones qui lui est propre. Les individus les plus performants de chaque génération sont sélectionnés pour se reproduire,  A terme, seuls les oiseaux les plus performants OU les meilleurs oiseaux au jeu Flappy Bird existent.",functionality:["Algorithme de machine learning sans supervision from scratch avec Numpy","Affichage graphique avec pygame"],youtube:"https://www.youtube.com/embed/ldNZmqJjHmg",timestamps:[{time:"0:00",description:"Création de l'algorithme"},{time:"1:24",description:"Algorithme en marche"}],next_project_link:"/projets/portfoliov2"}))}},FTy6:function(e,t,a){},Jszp:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("q1tI"),r=a.n(n),l=a("X13+"),i=a("33Fu"),s=a("iNdW"),c=a("Wbzz"),o=a("ZMKu");a("FTy6");function u(e){var t=e.title,a=e.author,n=e.date,u=e.github,m=e.hosted_website,d=e.tech_stack,p=e.description,v=e.role,h=e.functionality,E=e.youtube,f=e.timestamps,y=e.next_project_link;return r.a.createElement("div",{className:"details container"},r.a.createElement(c.Link,{to:"/#projet"},r.a.createElement(o.a.div,{className:"nav",initial:{opacity:0},animate:{opacity:1},transition:{delay:1.3,duration:.6}},r.a.createElement(l.a,{size:"2em"})," Retour")),r.a.createElement("div",{className:"project-title"},r.a.createElement(o.a.h2,{initial:{y:200},animate:{y:0},transition:{delay:.6,ease:"easeOut",duration:.6}},t)),r.a.createElement(o.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1.3,duration:.6}},r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"title"},"Auteur"),r.a.createElement("div",null,a)),r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"title"},"Date"),r.a.createElement("div",null,n)),u&&r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"title"},r.a.createElement(i.a,{size:"1.4em"})),r.a.createElement("a",{href:u},u)),m&&r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"title"},r.a.createElement(s.a,{size:"1.3em"})),r.a.createElement("a",{href:m},m))),r.a.createElement("h2",null,"La Stack"),r.a.createElement("div",{className:"stack-items"},r.a.createElement("ul",null,d.map((function(e){return r.a.createElement("li",{key:e},e)})))),r.a.createElement("h2",null,"Description"),r.a.createElement("p",null,p),v&&r.a.createElement("div",null,r.a.createElement("h2",null,"Mon rôle dans ce projet de groupe"),r.a.createElement("ul",null,v.map((function(e){return r.a.createElement("li",null,e)})))),h&&r.a.createElement("div",null,r.a.createElement("h2",null,"Fonctionnalités"),r.a.createElement("ul",null,h.map((function(e){return r.a.createElement("li",null,e)})))),E&&r.a.createElement("div",{className:"player"},r.a.createElement("iframe",{id:"ytplayer",type:"text/html",width:"640",height:"360",src:E,frameborder:"0"})),f&&r.a.createElement("div",null,r.a.createElement("h2",null,"Timestamps"),f.map((function(e){return r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"title"},e.time),r.a.createElement("div",null,e.description))}))),r.a.createElement(c.Link,{to:y},r.a.createElement("div",{className:"nav float-right"},"Projet suivant ",r.a.createElement(l.b,{size:"2em"})))))}},Lnxd:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));a("bWfx"),a("ioFf"),a("V+eJ"),a("91GP");var n=a("q1tI"),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(r),i=function(){return(i=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},s=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&(a[n[r]]=e[n[r]])}return a};function c(e){return function(t){return n.createElement(o,i({attr:i({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return n.createElement(t.tag,i({key:a},t.attr),e(t.child))}))}(e.child))}}function o(e){var t=function(t){var a,r=e.size||t.size||"1em";t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className);var l=e.attr,c=e.title,o=s(e,["attr","title"]);return n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,o,{className:a,style:i({color:e.color||t.color},t.style,e.style),height:r,width:r,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==l?n.createElement(l.Consumer,null,(function(e){return t(e)})):t(r)}}}]);
//# sourceMappingURL=component---src-pages-projets-machinelearning-js-ab225ee1fbca66cf12c0.js.map