import{_,I as h,a as f,r as a,o,c as r,b as c,w as d,d as n,t as l,F as v,e as b,f as m}from"./index-Crxr8vgO.js";const x={props:["title","image","description"],components:{IonImg:h,IonThumbnail:f}},P={class:"ion-text-center"},w={class:"ion-text-center"};function I(u,g,t,p,y,e){const i=a("ion-img"),s=a("ion-thumbnail");return o(),r(v,null,[c(s,null,{default:d(()=>[c(i,{src:t.image,alt:t.title},null,8,["src","alt"])]),_:1}),n("h2",P,l(t.title),1),n("p",w,l(t.description),1)],64)}const k=_(x,[["render",I]]),B={components:{MemoryOverview:k},data(){return{memoryId:this.$route.params.id}},computed:{memoryPage(){return this.$store.getters.memory(this.memoryId)}}},$=n("br",null,null,-1),C={key:0},D={key:1};function M(u,g,t,p,y,e){const i=a("memory-overview"),s=a("base-layout");return o(),b(s,{"page-title":e.memoryPage?e.memoryPage.title:"Still loading..."},{default:d(()=>[n("h2",null,[m(" The Details page "),$,e.memoryPage?(o(),r("div",D,[m(" Memory loaded well "),c(i,{title:e.memoryPage.title,image:e.memoryPage.image,description:e.memoryPage.description},null,8,["title","image","description"])])):(o(),r("div",C,"Could not loadit, since it is not available"))])]),_:1},8,["page-title"])}const T=_(B,[["render",M]]);export{T as default};
