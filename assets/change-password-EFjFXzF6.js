import{_ as r,I as g,a as k,h as _,D as x,E as z,r as t,o as u,d as w,v as e,w as o,f as c,F as B,z as v,g as I,k as C,n as V,l as $,m as y,p as O,q as P,s as T,b as F}from"./index-uZ0D_XPg.js";const N={name:"ChangePassword",components:{IonList:g,IonItem:k,IonLabel:_,IonInput:x,IonButton:z},setup(){}},q=v("h3",{style:{"text-align":"center"}}," Vous êtes sur le point de changer votre mot de passe. ",-1);function E(d,p,m,s,f,h){const n=t("ion-item"),a=t("ion-input"),i=t("ion-list"),l=t("ion-button");return u(),w(B,null,[q,e(i,null,{default:o(()=>[e(n),e(n,null,{default:o(()=>[e(a,{label:"Tapez",placeholder:"Votre ancien mot de passe"})]),_:1}),e(n,null,{default:o(()=>[e(a,{label:"Tapez",placeholder:"Votre nouveau mot de passe"})]),_:1}),e(n,null,{default:o(()=>[e(a,{label:"Retapez",placeholder:"Votre nouveau mot de passe"})]),_:1})]),_:1}),e(l,{id:"confirmButton",expand:"block"},{default:o(()=>[c("Confirmer")]),_:1})],64)}const L=r(N,[["render",E]]),M={components:{"base-menu":I,"ch-pw":L,IonLabel:_},setup(){return{exitOutline:C,notificationsOutline:V,home:$,layers:y,wallet:O,personCircle:P,chevronBack:T}}};function A(d,p,m,s,f,h){const n=t("ion-icon"),a=t("router-link"),i=t("ch-pw"),l=t("ion-label"),b=t("base-menu");return u(),F(b,{pageTitle:"Changer votre Mot de passe"},{"back-left":o(()=>[e(n,{icon:s.chevronBack,slot:"end",size:"large"},{default:o(()=>[c("Back")]),_:1},8,["icon"])]),"finish-right":o(()=>[e(n,{icon:s.notificationsOutline,slot:"end",size:"large"},null,8,["icon"]),e(a,{to:"/"},{default:o(()=>[e(n,{icon:s.exitOutline,slot:"end",size:"large"},null,8,["icon"])]),_:1})]),"body-content":o(()=>[e(i)]),"Footer-menu":o(()=>[e(a,{to:"/hope"},{default:o(()=>[e(n,{id:"ico1",icon:s.home,size:"large"},null,8,["icon"])]),_:1}),e(a,{to:"/histo"},{default:o(()=>[e(n,{id:"ico2",icon:s.layers,size:"large"},null,8,["icon"])]),_:1}),e(a,{to:"/profile"},{default:o(()=>[e(n,{id:"ico4",icon:s.personCircle,size:"large"},null,8,["icon"])]),_:1}),e(l,{id:"lab1"},{default:o(()=>[c("Accueil")]),_:1}),e(l,{id:"lab2"},{default:o(()=>[c("Historique")]),_:1}),e(l,{id:"lab4"},{default:o(()=>[c("Profile")]),_:1})]),_:1})}const H=r(M,[["render",A]]);export{H as default};
