import{_ as j,r as h,c as l,a as e,n as C,F as c,b as d,u as I,t as a,g as S,e as k,i as b,o,p as B,h as T}from"./index-Bxj9b5Hv.js";import{s as q}from"./dataSAE-BBOiLOcA.js";const $=p=>(B("data-v-cf3799e5"),p=p(),T(),p),w={class:"big-section"},x=$(()=>e("div",{id:"titles"},[e("h1",null,"Projets universitaires"),e("h2",null,"développés dans le cadre des SAÉ du BUT Informatique"),e("p",null,"Le BUT Informatique, orienté sur la pratique, propose de nombreux projets à réaliser au cours de la formation."),e("p",null,"Voici les projets que j'ai réalisés et qui me tiennent le plus à coeur :")],-1)),M={id:"saes"},V=["onClick"],D=["src"],L=["src"],P={key:0,id:"card"},z={id:"close-button"},F={id:"card-titles"},K=["src","onMouseover"],N={id:"card-desc"},U=["src"],A=$(()=>e("h3",null,"Situations professionnelles",-1)),E={__name:"ProjectsView",setup(p){const g=q.sae,r=h(-1),i=h(null),u=h(null);function _(n){r.value===n?(r.value=-1,i.value=null):(r.value=n,i.value=g[n])}function v(n,t){if(t===null)u.value=null;else{const s=n.target.getBoundingClientRect();u.value={name:t,left:`${n.target.offsetLeft-s.width/4}px`,top:`${n.target.offsetTop+16}px`}}}return(n,t)=>(o(),l("section",w,[e("section",{class:C(r.value!==-1?"overlay":"")},null,2),e("section",{tabindex:"0",onKeyup:t[4]||(t[4]=b(s=>_(-1),["esc"]))},[x,e("section",M,[(o(!0),l(c,null,d(I(g),(s,m)=>(o(),l("div",{key:s.id,onClick:f=>_(m)},[e("h3",null,a(s.code),1),e("img",{src:`/assets/images/sae/${s.image}`},null,8,D),e("div",null,[(o(!0),l(c,null,d(s.technos,f=>(o(),l("img",{key:f.id,src:`../assets/images/${f}.png`,class:"project-techno",onMouseover:t[0]||(t[0]=y=>v(y,n.t)),onMouseout:t[1]||(t[1]=y=>v(n.evt,null))},null,40,L))),128))])],8,V))),128))]),r.value!==-1?(o(),l("section",P,[e("div",z,[e("button",{onClick:t[2]||(t[2]=s=>_(-1))},"X")]),e("div",F,[e("h2",null,a(i.value.code),1),e("h3",null,a(i.value.title),1),e("div",null,[(o(!0),l(c,null,d(i.value.technos,s=>(o(),l("img",{key:s.id,src:`../assets/images/${s}.png`,class:"project-techno",onMouseover:m=>v(m,s),onMouseout:t[3]||(t[3]=m=>v(n.evt,null))},null,40,K))),128))]),u.value!==null?(o(),l("p",{key:0,id:"tech-name",style:S({top:u.value.top,left:u.value.left})},a(u.value.name),5)):k("",!0)]),e("div",N,[e("img",{src:`/assets/images/${i.value.image}`},null,8,U),e("div",null,[(o(!0),l(c,null,d(i.value.description,s=>(o(),l("p",{key:s.id},a(s),1))),128)),A,e("ul",null,[(o(!0),l(c,null,d(i.value.skills,s=>(o(),l("li",{key:s.id},[e("p",null,a(s),1)]))),128))])])])])):k("",!0)],32)]))}},X=j(E,[["__scopeId","data-v-cf3799e5"]]);export{X as default};