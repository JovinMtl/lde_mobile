import{_ as p,I as b,a as k,c as z,r as i,o as _,b as d,w as o,d as B,e as V,F as q,f as l,t as m,g as x,h as C,i as I,j as L,u as O,k as y,n as N,l as w,m as F,p as R,q as A,s as E,v as e}from"./index-BBojdJwG.js";const H={components:{IonList:b,IonItem:k},setup(){const c=[{id:0,content:"Vous avez recharger votre compte avec Lumicash",time:"2024 03 02 15:20"},{id:1,content:"Vous avez recharger votre compte avec Ecocash",time:"2024 03 02 17:20"},{id:2,content:"Vous avez recharger votre compte avec KCB",time:"2024 03 02 18:10"},{id:3,content:"Vous avez Retirer 5000 votre compte sur Lumicash",time:"2024 03 03 08:20"},{id:4,content:"Vous avez recharger votre compte avec KCB",time:"2024 03 03 08:30"},{id:5,content:"Vous avez Retirer 15000 votre compte sur eNoti",time:"2024 03 03 08:35"},{id:6,content:"Vous avez recharger 8000 sur votre compte avec eNoti",time:"2024 03 03 09:10"}],r=z(()=>c.reverse().splice(0,5));return{logs:c,reversedLogs:r}}};function K(c,r,f,t,v,h){const n=i("ion-item"),s=i("ion-list");return _(),d(s,null,{default:o(()=>[(_(!0),B(q,null,V(t.reversedLogs,(u,a)=>(_(),d(n,null,{default:o(()=>[l(m(a+1)+': "'+m(u.content)+'":'+m(u.time),1)]),_:2},1024))),256))]),_:1})}const S=p(H,[["render",K]]),T={components:{"base-menu":x,"histo-rique":S,IonLabel:C,IonButtons:I,IonBackButton:L},setup(){const c=O();function r(){c.commit("resetActiveUser")}return{exitOutline:y,notificationsOutline:N,home:w,layers:F,wallet:R,personCircle:A,chevronBack:E,logOut:r}}};function $(c,r,f,t,v,h){const n=i("ion-icon"),s=i("router-link"),u=i("histo-rique"),a=i("ion-label"),g=i("base-menu");return _(),d(g,{pageTitle:"Historique"},{"back-left":o(()=>[e(n,{icon:t.chevronBack,slot:"end",size:"large"},{default:o(()=>[l("Back")]),_:1},8,["icon"])]),"finish-right":o(()=>[e(n,{icon:t.notificationsOutline,slot:"end",size:"large"},null,8,["icon"]),e(s,{to:"/"},{default:o(()=>[e(n,{icon:t.exitOutline,slot:"end",size:"large",onClick:t.logOut},null,8,["icon","onClick"])]),_:1})]),"body-content":o(()=>[e(u)]),"Footer-menu":o(()=>[e(s,{to:"/hope"},{default:o(()=>[e(n,{id:"ico1",icon:t.home,size:"large"},null,8,["icon"])]),_:1}),e(s,{to:"/histo"},{default:o(()=>[e(n,{id:"ico2",icon:t.layers,size:"large"},null,8,["icon"])]),_:1}),e(s,{to:"/profile"},{default:o(()=>[e(n,{id:"ico4",icon:t.personCircle,size:"large"},null,8,["icon"])]),_:1}),e(a,{id:"lab1"},{default:o(()=>[l("Accueil")]),_:1}),e(a,{id:"lab2"},{default:o(()=>[l("Historique")]),_:1}),e(a,{id:"lab4"},{default:o(()=>[l("Profile")]),_:1})]),_:1})}const D=p(T,[["render",$]]);export{D as default};
