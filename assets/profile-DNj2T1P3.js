import{J as I,Q as F,o as w,b as C,_ as T,I as U,a as M,u as O,R as N,q as j,S as R,r as h,d as V,z as a,v as s,t as $,f as v,w as d,F as W,x as D,y as X,g as H,h as J,k as Q,n as G,l as K,m as Y,p as Z,s as ee}from"./index-BBojdJwG.js";function te(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var L={exports:{}};(function(r,g){(function(c,i){r.exports=i()})(window,function(){return function(c){var i={};function n(t){if(i[t])return i[t].exports;var o=i[t]={i:t,l:!1,exports:{}};return c[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=c,n.c=i,n.d=function(t,o,l){n.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:l})},n.r=function(t){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,o){if(1&o&&(t=n(t)),8&o||4&o&&typeof t=="object"&&t&&t.__esModule)return t;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:t}),2&o&&typeof t!="string")for(var m in t)n.d(l,m,(function(e){return t[e]}).bind(null,m));return l},n.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(o,"a",o),o},n.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},n.p="",n(n.s=0)}([function(c,i,n){n.r(i);var t={name:"vue-telegram-login",props:{mode:{type:String,required:!0,validator:function(e){return["callback","redirect"].includes(e)}},telegramLogin:{type:String,required:!0,validator:function(e){return e.endsWith("bot")||e.endsWith("Bot")}},redirectUrl:{type:String,default:""},requestAccess:{type:String,default:"read",validator:function(e){return["read","write"].includes(e)}},size:{type:String,default:"large",validator:function(e){return["small","medium","large"].includes(e)}},userpic:{type:Boolean,default:!0},radius:{type:String}},methods:{onTelegramAuth:function(e){this.$emit("callback",e)}},mounted:function(){var e=document.createElement("script");e.async=!0,e.src="https://telegram.org/js/telegram-widget.js?3",e.setAttribute("data-size",this.size),e.setAttribute("data-userpic",this.userpic),e.setAttribute("data-telegram-login",this.telegramLogin),e.setAttribute("data-request-access",this.requestAccess),this.radius&&e.setAttribute("data-radius",this.radius),this.mode==="callback"?(window.onTelegramAuth=this.onTelegramAuth,e.setAttribute("data-onauth","window.onTelegramAuth(user)")):e.setAttribute("data-auth-url",this.redirectUrl),this.$refs.telegram.appendChild(e)}},o=function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"telegram"})};o._withStripped=!0;var l=function(e,y,q,P,b,S,x,B){var A=typeof(e=e||{}).default;A!=="object"&&A!=="function"||(e=e.default);var _,u=typeof e=="function"?e.options:e;if(y&&(u.render=y,u.staticRenderFns=q,u._compiled=!0),P&&(u.functional=!0),S&&(u._scopeId=S),x?(_=function(f){(f=f||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||typeof __VUE_SSR_CONTEXT__>"u"||(f=__VUE_SSR_CONTEXT__),b&&b.call(this,f),f&&f._registeredComponents&&f._registeredComponents.add(x)},u._ssrRegister=_):b&&(_=B?function(){b.call(this,this.$root.$options.shadowRoot)}:b),_)if(u.functional){u._injectStyles=_;var E=u.render;u.render=function(f,z){return _.call(z),E(f,z)}}else{var k=u.beforeCreate;u.beforeCreate=k?[].concat(k,_):[_]}return{exports:e,options:u}}(t,o,[],!1,null,null,null);l.options.__file="src/vue-telegram-login.vue";var m=l.exports;n.d(i,"vueTelegramLogin",function(){return m})}])})})(L);var oe=L.exports;const ne=te(oe),re={expose:[],props:{mode:{type:String,required:!0,validator:r=>["callback","redirect"].includes(r)},telegramLogin:{type:String,required:!0,validator:r=>r.endsWith("bot")||r.endsWith("Bot")},redirectUrl:{type:String,default:""},requestAccess:{type:String,default:"read",validator:r=>["read","write"].includes(r)},size:{type:String,default:"large",validator:r=>["small","medium","large"].includes(r)},userpic:{type:Boolean,default:!0},radius:{type:String}},emits:["callback","loaded"],setup(r,{emit:g}){const c=r,i=I(null),n=document.createElement("script");return n.async=!0,n.src="https://telegram.org/js/telegram-widget.js?3",n.setAttribute("data-size",c.size),n.setAttribute("data-userpic",c.userpic),n.setAttribute("data-telegram-login",c.telegramLogin),n.setAttribute("data-request-access",c.requestAccess),n.onload=()=>{g("loaded")},c.radius&&n.setAttribute("data-radius",c.radius),c.mode==="callback"?(window.onTelegramAuth=function(t){g("callback",t)},n.setAttribute("data-onauth","window.onTelegramAuth(user)")):n.setAttribute("data-auth-url",c.redirectUrl),F(()=>{i.value.appendChild(n)}),(t,o)=>(w(),C("div",{ref:i},null,512))}},ie={components:{IonList:U,IonItem:M,VueTelegramLogin:ne,telegramLoginTemp:re},setup(){const r=O();return{fingerPrint:N,personCircle:j,chevronForward:R,telegramLogo:"/resources/logo/logo_home/telegrame.svg",store:r}}},p=r=>(D("data-v-f7da7bb0"),r=r(),X(),r),se={style:{"margin-left":"10vw","margin-right":"10vw"}},ae=p(()=>a("span",{style:{"margin-right":".2rem"}}," ",-1)),le={style:{"margin-top":"7vh",display:"inline-flex",position:"relative",width:"60vw",height:"8vh",top:"-4.8vh","font-weight":"bold"}},ce={style:{"font-size":"2.8vh"}},ue=p(()=>a("br",null,null,-1)),de=p(()=>a("span",{style:{position:"absolute","margin-top":"3.8vh","font-size":"2.8vh"}},"+257 61 233 532",-1)),pe=p(()=>a("br",null,null,-1)),fe=p(()=>a("br",null,null,-1)),ge=p(()=>a("br",null,null,-1)),_e={style:{"background-color":"black",height:"7.5vh",width:"80vw","padding-top":"1vh","border-radius":"12px","padding-left":"6vw","margin-left":"6vw"}},he=p(()=>a("span",{style:{"margin-right":".2rem"}}," ",-1)),me=p(()=>a("span",{class:"textProfile"},"Changer le mot de passe",-1)),ve=p(()=>a("br",null,null,-1)),be=p(()=>a("br",null,null,-1)),ye={href:"https://t.me/adas40",previewlistener:"true",style:{"text-decoration":"none"}},we={style:{"background-color":"black",height:"7.5vh",width:"80vw","padding-top":"1vh","border-radius":"12px","padding-left":"6vw","margin-left":"6vw",color:"white"}},Se=p(()=>a("span",{style:{"margin-right":".2rem"}}," ",-1)),xe=p(()=>a("span",{class:"textProfile"}," Nous contacter",-1));function Ae(r,g,c,i,n,t){const o=h("ion-icon"),l=h("router-link");return w(),V(W,null,[a("div",se,[s(o,{icon:i.personCircle,style:{"font-size":"8vh","margin-top":"4vh"}},null,8,["icon"]),ae,a("div",le,[a("span",ce,$(i.store.getters.getUsername),1),v(),ue,de]),v(),pe]),fe,ge,s(l,{to:"/chpa",style:{"text-decoration":"none"}},{default:d(()=>[a("div",_e,[s(o,{icon:i.fingerPrint,style:{color:"orange","font-size":"5vh"}},null,8,["icon"]),he,me,s(o,{icon:i.chevronForward,style:{position:"absolute",left:"77vw","font-size":"5vh",color:"orange"}},null,8,["icon"])])]),_:1}),ve,be,a("a",ye,[a("div",we,[s(o,{src:i.telegramLogo,style:{color:"orange","font-size":"5vh"}},null,8,["src"]),Se,xe,s(o,{icon:i.chevronForward,style:{position:"absolute",left:"77vw","font-size":"5vh",color:"orange"}},null,8,["icon"])])])],64)}const ke=T(ie,[["render",Ae],["__scopeId","data-v-f7da7bb0"]]),ze={components:{"base-menu":H,"prof-content":ke,IonLabel:J},setup(){const r=O();function g(){r.commit("resetActiveUser")}return{exitOutline:Q,notificationsOutline:G,home:K,layers:Y,wallet:Z,personCircle:j,chevronBack:ee,logOut:g}}};function Ce(r,g,c,i,n,t){const o=h("ion-icon"),l=h("router-link"),m=h("prof-content"),e=h("ion-label"),y=h("base-menu");return w(),C(y,{pageTitle:"Profile"},{"back-left":d(()=>[s(o,{icon:i.chevronBack,slot:"end",size:"large"},{default:d(()=>[v("Back")]),_:1},8,["icon"])]),"finish-right":d(()=>[s(o,{icon:i.notificationsOutline,slot:"end",size:"large"},null,8,["icon"]),s(l,{to:"/"},{default:d(()=>[s(o,{icon:i.exitOutline,slot:"end",size:"large",onClick:i.logOut},null,8,["icon","onClick"])]),_:1})]),"body-content":d(()=>[s(m)]),"Footer-menu":d(()=>[s(l,{to:"/hope"},{default:d(()=>[s(o,{id:"ico1",icon:i.home,size:"large"},null,8,["icon"])]),_:1}),s(l,{to:"/histo"},{default:d(()=>[s(o,{id:"ico2",icon:i.layers,size:"large"},null,8,["icon"])]),_:1}),s(l,{to:"/profile"},{default:d(()=>[s(o,{id:"ico4",icon:i.personCircle,size:"large"},null,8,["icon"])]),_:1}),s(e,{id:"lab1"},{default:d(()=>[v("Accueil")]),_:1}),s(e,{id:"lab2"},{default:d(()=>[v("Historique")]),_:1}),s(e,{id:"lab4"},{default:d(()=>[v("Profile")]),_:1})]),_:1})}const Oe=T(ze,[["render",Ce]]);export{Oe as default};
