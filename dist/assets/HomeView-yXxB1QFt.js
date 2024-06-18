import{_ as S,r as j,c as s,a as e,F as a,b as r,d as y,w as x,n as p,u as h,e as _,f as L,o as n,g as b,t as o,p as T,h as B}from"./index-CyFPPhNG.js";const D="/assets/images/main-logo.png",I="/assets/images/face.jpg",U=[{title:"Développement web",names:["HTML","CSS","JavaScript","Vue.JS","React","Next.JS","PHP","Symfony","Node.JS"]},{title:"Développement logiciel",names:["Python","Java","JUnit 5","C","Kotlin","LaTeX"]},{title:"Gestion de projet",names:["Scrum","Git","GitHub","GitLab","Trello","SourceTree","UML"]},{title:"Systèmes d'exploitation",names:["Windows","Linux","Docker"]},{title:"Bases de données",names:["Oracle","MySQL","MongoDB"]}],M={technos:U},w=[{name:"Stagiaire développeur web",entreprise:"Centre d'Études des Tunnels (CETU)",date:"2024",explanation:["Réalisation d'un volet ''Conduite en tunnel pour les conducteurs professionnels'' sur le site du CETU","Analyse de l'existant et conception d'une application en conséquence","Développement front-end","Rédaction d'une documentation technique claire et complète"]},{name:"Tuteur étudiant",entreprise:"IUT Lyon 1",date:"2023 - 2024",explanation:["Dispensation de cours de support sur toutes matières","Aide aux étudiants dans leur apprentissage"]},{name:"Président",entreprise:"Student Club",date:"2024 - 2025",explanation:["Maintien de la cohésion entre les différents BDE de l'IUT Lyon 1 site Doua","Mise à disposition de services en collaboration avec l'IUT Lyon 1 (prévention, formation...)","Organisation d'événements divers et variés","Entretien de l'image de la fédération et de l'IUT"]},{name:"Chargé de communication",entreprise:"BDE Info",date:"2023 - 2024",explanation:["Mise en avant des activités de l'association","Développement de sa notoriété","Entretien et renforcement du réseau associatif"]}],J={experiences:w},E=[{name:"Monde associatif",explanation:["J'ai découvert le monde associatif en arrivant à l'IUT, au travers de mon BDE.","Puisque l'objectif d'une association étudiante est d'apporter des éléments à ces derniers pour qu'ils profitent au mieux de leurs études, j'ai décidé de mettre la main à la pâte.","L'associatif m'aura permis de vivre de fantastiques moments que je n'oublierai jamais, mais également des belles rencontres, et des compétences que je peux transposer sur mon parcours professionnel."],images:[]},{name:"Photographie",explanation:["Il y a peu, j'ai commencé à prendre des photos avec un véritable appareil photo, et pas seulement avec mon téléphone.","Je suis débutant, mais je suis plutôt fier du résultat !"],images:[]},{name:"Étude des transports",explanation:["C'est un intérêt assez compliqué à définir.","Les transports en commun ont toute leur place dans la ville : ils sont le fruit de recherches et de discussions à la fois politiques, scientifiques et sociales, et comprendre comment ils fonctionnent et pourquoi ils sont faits ainsi est selon moi très intéressant."],images:[]}],P={interests:E},l=m=>(T("data-v-005bc467"),m=m(),B(),m),N={id:"main-home"},R=l(()=>e("section",{id:"overlay"},null,-1)),V={class:"main-title waviy"},H={class:"main-title waviy"},z=l(()=>e("img",{src:D},null,-1)),G={class:"big-section"},O=l(()=>e("div",{id:"titles"},[e("h1",null,"Qui suis-je ?")],-1)),$={id:"intro"},A=l(()=>e("img",{id:"face-img",src:I,alt:"Photo de moi-même"},null,-1)),F=l(()=>e("p",null,"Je m'appelle Mehdi Bourbon (c'est bien évidemment moi sur la photo). Je suis un étudiant en BUT informatique à Lyon, toujours en quête de connaissances, notamment sur le développement : la quantité de technologies et de moyens différents d'arriver à un même résultat est fascinant !",-1)),Q=l(()=>e("p",null,"Ce portfolio a pour but de vous présenter mon cheminement dans le monde du développement, en vous présentant mes projets ainsi que leurs liens avec mes études.",-1)),K=l(()=>e("p",null,"Cependant, je ne fais pas que coder, même si je suis un gros bosseur :) En-dehors de mes heures de cours, je fais quand même des choses, comme vous pourrez le voir au-dessous.",-1)),W=l(()=>e("button",null,"Mes projets",-1)),X=l(()=>e("button",null,"Compétences développées à l'IUT",-1)),Y={id:"choose"},Z={key:0,id:"technos"},ee={class:"tech-list"},te=["src"],se={key:1,class:"explain-section path"},ne={class:"explain-title"},ie={key:2,class:"explain-section path"},oe={__name:"HomeView",setup(m){const k=M.technos,C=J.experiences,q=P.interests,u=j(0);function v(f){u.value=f}return(f,d)=>{const g=L("RouterLink");return n(),s(a,null,[e("section",N,[R,e("div",null,[e("h1",V,[(n(!0),s(a,null,r("Mehdi".split(""),(t,i)=>(n(),s("span",{style:b({"--i":i+1}),key:t.id},o(t),5))),128))]),e("h1",H,[(n(!0),s(a,null,r("BOURBON".split(""),(t,i)=>(n(),s("span",{style:b({"--i":i+6}),key:t.id},o(t),5))),128))])]),z]),e("section",G,[O,e("section",$,[A,e("div",null,[F,Q,K,e("div",null,[y(g,{to:{name:"projs"}},{default:x(()=>[W]),_:1}),y(g,{to:{name:"skills"}},{default:x(()=>[X]),_:1})])])]),e("section",Y,[e("h2",{onClick:d[0]||(d[0]=t=>v(0)),class:p(u.value==0?"selected":"")},"Compétences techniques",2),e("h2",{onClick:d[1]||(d[1]=t=>v(1)),class:p(u.value==1?"selected":"")},"Parcours professionnel",2),e("h2",{onClick:d[2]||(d[2]=t=>v(2)),class:p(u.value==2?"selected":"")},"Passe-temps",2)]),u.value==0?(n(),s("section",Z,[(n(!0),s(a,null,r(h(k),t=>(n(),s("div",{key:t.id},[e("h2",null,o(t.title),1),e("div",ee,[(n(!0),s(a,null,r(t.names,i=>(n(),s("div",{key:i.id,class:"tech-div"},[e("img",{src:`/assets/images/${i}.png`},null,8,te),e("p",null,o(i),1)]))),128))])]))),128))])):_("",!0),u.value==1?(n(),s("section",se,[(n(!0),s(a,null,r(h(C),(t,i)=>(n(),s("div",{key:t.id,class:p(i%2==0?"explain-div":"explain-div explain-div-right")},[e("div",ne,[e("h2",null,o(t.name)+" - "+o(t.entreprise),1),e("h3",null,o(t.date),1)]),e("div",null,[e("ul",null,[(n(!0),s(a,null,r(t.explanation,c=>(n(),s("li",{key:c.id},[e("p",null,o(c),1)]))),128))])])],2))),128))])):_("",!0),u.value==2?(n(),s("section",ie,[(n(!0),s(a,null,r(h(q),(t,i)=>(n(),s("div",{key:t.id,class:p(i%2==0?"explain-div":"explain-div explain-div-right")},[e("h2",null,o(t.name),1),e("div",null,[(n(!0),s(a,null,r(t.explanation,c=>(n(),s("p",{key:c.id},o(c),1))),128))])],2))),128))])):_("",!0)])],64)}}},le=S(oe,[["__scopeId","data-v-005bc467"]]);export{le as default};
