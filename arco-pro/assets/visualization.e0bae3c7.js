import{c as r}from"./arco.820dc93e.js";import{c as a,b as t}from"./index.dcc93f30.js";function s(){const n=a();return{isDark:r(()=>n.theme==="dark")}}function u(n){return t.post("/api/data-chain-growth",n)}function p(){return t.get("/api/popular-author/list")}function c(){return t.get("/api/content-publish")}function l(){return t.post("/api/content-period-analysis")}function d(n){return t.post("/api/public-opinion-analysis",n)}function f(){return t.post("/api/data-overview")}export{l as a,c as b,p as c,f as d,u as e,d as q,s as u};
