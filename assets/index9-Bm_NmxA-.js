import{d as c,n as p,p as k}from"./index-BdlyNQrq.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const B=o=>{if(c===void 0)return;let i=-E*10,r=0,e,l,s;const C=o.getBoolean("animated",!0)&&o.getBoolean("rippleEffect",!0),f=new WeakMap,I=t=>{i=p(t),T(t)},m=t=>{i=p(t),h(t)},_=t=>{if(t.button===2)return;const n=p(t)-E;i<n&&T(t)},M=t=>{const n=p(t)-E;i<n&&h(t)},v=()=>{s&&clearTimeout(s),s=void 0,e&&(D(!1),e=void 0)},T=t=>{e||L(y(t),t)},h=t=>{L(void 0,t)},L=(t,n)=>{if(t&&t===e)return;s&&clearTimeout(s),s=void 0;const{x:d,y:a}=k(n);if(e){if(f.has(e))throw new Error("internal error");e.classList.contains(u)||A(e,d,a),D(!0)}if(t){const R=f.get(t);R&&(clearTimeout(R),f.delete(t)),t.classList.remove(u);const S=()=>{A(t,d,a),s=void 0};b(t)?S():s=setTimeout(S,q)}e=t},A=(t,n,d)=>{if(r=Date.now(),t.classList.add(u),!C)return;const a=U(t);a!==null&&(w(),l=a.addRipple(n,d))},w=()=>{l!==void 0&&(l.then(t=>t()),l=void 0)},D=t=>{w();const n=e;if(!n)return;const d=g-Date.now()+r;if(t&&d>0&&!b(n)){const a=setTimeout(()=>{n.classList.remove(u),f.delete(n)},g);f.set(n,a)}else n.classList.remove(u)};c.addEventListener("ionGestureCaptured",v),c.addEventListener("touchstart",I,!0),c.addEventListener("touchcancel",m,!0),c.addEventListener("touchend",m,!0),c.addEventListener("pointercancel",v,!0),c.addEventListener("mousedown",_,!0),c.addEventListener("mouseup",M,!0)},y=o=>{if(o.composedPath!==void 0){const i=o.composedPath();for(let r=0;r<i.length-2;r++){const e=i[r];if(!(e instanceof ShadowRoot)&&e.classList.contains("ion-activatable"))return e}}else return o.target.closest(".ion-activatable")},b=o=>o.classList.contains("ion-activatable-instant"),U=o=>{if(o.shadowRoot){const i=o.shadowRoot.querySelector("ion-ripple-effect");if(i)return i}return o.querySelector("ion-ripple-effect")},u="ion-activated",q=100,g=150,E=2500;export{B as startTapClick};
