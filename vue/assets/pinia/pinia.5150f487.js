var t=Object.defineProperty,e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(e,n,o)=>n in e?t(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o;import{i as r}from"../vue-demi/vue-demi.784001c0.js";import{e as c,r as a,m as i,i as u,w as f,a as p,b as l,c as d,g as h,o as v,t as b,d as y}from"../@vue/@vue.89516255.js";
/*!
  * pinia v2.0.0-rc.10
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */let j;const m=t=>j=t,O=Symbol();function _(t){return t&&"object"==typeof t&&"[object Object]"===Object.prototype.toString.call(t)&&"function"!=typeof t.toJSON}var g,$;function P(){const t=c(!0),e=t.run((()=>a({})));let n=[];const o=[],s=i({install(t){m(s),s._a=t,t.provide(O,s),t.config.globalProperties.$pinia=s,o.forEach((t=>n.push(t)))},use(t){return this._a||r?n.push(t):o.push(t),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}function w(t,e,n){t.push(e);const o=()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)};return!n&&h()&&v(o),o}function E(t,...e){t.forEach((t=>{t(...e)}))}function I(t,e){for(const n in e){const o=e[n],s=t[n];_(s)&&_(o)&&!l(o)&&!d(o)?t[n]=I(s,o):t[n]=o}return t}($=g||(g={})).direct="direct",$.patchObject="patch object",$.patchFunction="patch function";const{assign:S}=Object;const x=()=>{};function A(t,r,u={},h,v){let b;const y=u.state,j=((t,r)=>{for(var c in r||(r={}))n.call(r,c)&&s(t,c,r[c]);if(e)for(var c of e(r))o.call(r,c)&&s(t,c,r[c]);return t})({actions:{}},u),O={deep:!0};let _,$,P=i([]),A=i([]);const F=h.state.value[t];function k(e){let n;_=!1,"function"==typeof e?(e(h.state.value[t]),n={type:g.patchFunction,storeId:t,events:$}):(I(h.state.value[t],e),n={type:g.patchObject,payload:e,storeId:t,events:$}),_=!0,E(P,n,h.state.value[t])}F||(h.state.value[t]={}),a({});const J=x;function M(e,n){return function(){m(h);const o=Array.from(arguments);let s,r=x,c=x;function a(t){r=t}function i(t){c=t}E(A,{args:o,name:e,store:q,after:a,onError:i});try{s=n.apply(this&&this.$id===t?this:q,o)}catch(f){if(!1!==c(f))throw f}if(s instanceof Promise)return s.then((t=>{const e=r(t);return void 0===e?t:e})).catch((t=>{if(!1!==c(t))return Promise.reject(t)}));const u=r(s);return void 0===u?s:u}}const N={_p:h,$id:t,$onAction:w.bind(null,A),$patch:k,$reset:J,$subscribe(e,n={}){const o=w(P,e,n.detached),s=b.run((()=>f((()=>h.state.value[t]),((n,o)=>{_&&e({storeId:t,type:g.direct,events:$},n)}),S({},O,n))));return()=>{s(),o()}},$dispose:function(){b.stop(),P=[],A=[],h._s.delete(t)}},q=p(S({},N));h._s.set(t,q);const z=h._e.run((()=>(b=c(),b.run((()=>r())))));for(const e in z){const n=z[e];if(l(n)&&(!(B=n)||!B.effect)||d(n))y||(F&&(l(n)?n.value=F[e]:I(n,F[e])),h.state.value[t][e]=n);else if("function"==typeof n){const t=M(e,n);z[e]=t,j.actions[e]=n}}var B;return S(q,z),Object.defineProperty(q,"$state",{get:()=>h.state.value[t],set:t=>{k((e=>{S(e,t)}))}}),h._p.forEach((t=>{S(q,b.run((()=>t({store:q,app:h._a,pinia:h,options:j}))))})),F&&y&&(u.hydrate||I)(q,F),_=!0,q}function F(t,e,n){let o,s;const r="function"==typeof e;function c(t,n){const c=h();(t=t||c&&u(O))&&m(t),(t=j)._s.has(o)||(r?A(o,e,s,t):function(t,e,n,o){const{state:s,actions:r,getters:c}=e,a=n.state.value[t];let u;u=A(t,(function(){a||(n.state.value[t]=s?s():{});const e=b(n.state.value[t]);return S(e,r,Object.keys(c||{}).reduce(((e,o)=>(e[o]=i(y((()=>{m(n);const e=n._s.get(t);return c[o].call(e,e)}))),e)),{}))}),e,n),u.$reset=function(){const t=s?s():{};this.$patch((e=>{S(e,t)}))}}(o,s,t));return t._s.get(o)}return"string"==typeof t?(o=t,s=r?n:e):(s=t,o=t.id),c.$id=o,c}export{P as c,F as d};
