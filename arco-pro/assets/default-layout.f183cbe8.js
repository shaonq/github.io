var Fe=Object.defineProperty,ze=Object.defineProperties;var Pe=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var ne=(t,n,a)=>n in t?Fe(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,K=(t,n)=>{for(var a in n||(n={}))ee.call(n,a)&&ne(t,a,n[a]);if(q)for(var a of q(n))te.call(n,a)&&ne(t,a,n[a]);return t},oe=(t,n)=>ze(t,Pe(n));var se=(t,n)=>{var a={};for(var c in t)ee.call(t,c)&&n.indexOf(c)<0&&(a[c]=t[c]);if(t!=null&&q)for(var c of q(t))n.indexOf(c)<0&&te.call(t,c)&&(a[c]=t[c]);return a};import{a as Q,_ as A,u as ae,c as V,d as Ae,L as Ve,e as Ne,f as Oe,g as ce,l as re,h as le}from"./index.1ccc45ac.js";import{F as Ue}from"./index.e720e02e.js";import{aS as ie,d as E,aJ as B,A as i,aC as $,aF as e,aG as s,E as d,aL as D,aM as M,C as X,B as I,aH as W,D as H,aD as j,bT as Ke,aI as J,bs as qe,bf as ue,bt as We,b4 as de,bo as He,bP as Je,bQ as Ge,b3 as Qe,bR as Xe,e as F,r as Ye,t as Ze,c as S,u as y,bb as et,by as tt,aT as _e,bz as nt,bk as ot,i as st,b8 as pe,b9 as fe,bc as at,bU as ct,bV as rt,bW as lt,bX as it,bY as ut,bZ as dt,b_ as _t,h as ge,bx as ve,b$ as pt,c0 as ft,w as he,c1 as gt,c2 as vt,o as ht,c3 as yt,c4 as mt,bq as ye,bD as bt,c5 as kt,p as $t,bH as xt,c6 as Ct,c7 as wt,aV as Lt,c8 as St,c9 as Mt}from"./arco.820dc93e.js";import{f as G,i as Tt,j as Bt,h as Dt,k as me,l as It}from"./vue.d8391d64.js";/* empty css                *//* empty css              *//* empty css              *//* empty css               *//* empty css               *//* empty css                *//* empty css                *//* empty css               */import{a as jt,s as Rt}from"./message.b2a3d3f9.js";import{u as Et}from"./loading.31c807e3.js";/* empty css               *//* empty css               *//* empty css                *//* empty css               */import"./chart.70830779.js";function Ft(){const t=G(),n=Q();return{logout:async c=>{await n.logout();const p=t.currentRoute.value;ie.success("\u767B\u51FA\u6210\u529F"),t.push({name:c&&typeof c=="string"?c:"login",query:oe(K({},t.currentRoute.value.query),{redirect:p.name})})}}}const zt=D("\u672A\u5F00\u59CB"),Pt=D("\u5DF2\u5F00\u901A"),At=D("\u8FDB\u884C\u4E2D"),Vt=D("\u5373\u5C06\u5230\u671F"),Nt=["onClick"],Ot=["src"],Ut={class:"footer-wrap"},Kt={class:"footer-wrap"},qt=E({props:{renderList:{type:Array,required:!0},unreadCount:{type:Number,default:0}},emits:["itemClick"],setup(t,{emit:n}){const a=t,c=()=>{n("itemClick",[...a.renderList])},p=g=>{g.status||n("itemClick",[g])},u=3;return(g,h)=>{const C=qe,r=B("icon-desktop"),x=ue,w=We,l=de,f=He,b=Je,o=Ge,_=Qe,k=Xe;return i(),$(k,{bordered:!1},{footer:e(()=>[s(l,{fill:"",size:0,class:X({"add-border-top":t.renderList.length<u})},{default:e(()=>[d("div",Ut,[s(_,{onClick:c},{default:e(()=>[D(M(g.$t("messageBox.allRead")),1)]),_:1})]),d("div",Kt,[s(_,null,{default:e(()=>[D(M(g.$t("messageBox.viewMore")),1)]),_:1})])]),_:1},8,["class"])]),default:e(()=>[(i(!0),I(J,null,W(t.renderList,v=>(i(),$(o,{key:v.id,"action-layout":"vertical",style:H({opacity:v.status?.5:1})},{extra:e(()=>[v.messageType===0?(i(),$(C,{key:0,color:"gray"},{default:e(()=>[zt]),_:1})):v.messageType===1?(i(),$(C,{key:1,color:"green"},{default:e(()=>[Pt]),_:1})):v.messageType===2?(i(),$(C,{key:2,color:"blue"},{default:e(()=>[At]),_:1})):v.messageType===3?(i(),$(C,{key:3,color:"red"},{default:e(()=>[Vt]),_:1})):j("",!0)]),default:e(()=>[d("div",{class:"item-wrap",onClick:L=>p(v)},[s(b,null,Ke({title:e(()=>[s(l,{size:4},{default:e(()=>[d("span",null,M(v.title),1),s(w,{type:"secondary"},{default:e(()=>[D(M(v.subTitle),1)]),_:2},1024)]),_:2},1024)]),description:e(()=>[d("div",null,[s(f,{ellipsis:{rows:1}},{default:e(()=>[D(M(v.content),1)]),_:2},1024),v.type==="message"?(i(),$(w,{key:0,class:"time-text"},{default:e(()=>[D(M(v.time),1)]),_:2},1024)):j("",!0)])]),_:2},[v.avatar?{name:"avatar",fn:e(()=>[s(x,{shape:"circle"},{default:e(()=>[v.avatar?(i(),I("img",{key:0,src:v.avatar},null,8,Ot)):(i(),$(r,{key:1}))]),_:2},1024)])}:void 0]),1024)],8,Nt)]),_:2},1032,["style"]))),128)),t.renderList.length&&t.renderList.length<3?(i(),I("div",{key:0,style:H({height:(u-t.renderList.length)*86+"px"})},null,4)):j("",!0)]),_:1})}}});var Wt=A(qt,[["__scopeId","data-v-da998396"]]);const Ht=E({setup(t){const{loading:n,setLoading:a}=Et(!0),c=F("message"),{t:p}=ae(),u=Ye({renderList:[],messageList:[]});Ze(u);const g=[{key:"message",title:p("messageBox.tab.title.message")},{key:"notice",title:p("messageBox.tab.title.notice")},{key:"todo",title:p("messageBox.tab.title.todo")}];async function h(){a(!0);try{const{data:o}=await jt();u.messageList=o}catch{}finally{a(!1)}}async function C(o){const _=o.map(k=>k.id);await Rt({ids:_}),h()}const r=S(()=>u.messageList.filter(o=>c.value===o.type)),x=S(()=>r.value.filter(o=>!o.status).length),w=o=>u.messageList.filter(k=>k.type===o&&!k.status),l=o=>{const _=w(o);return _.length?`(${_.length})`:""},f=o=>{r.value.length&&C([...o])},b=()=>{u.messageList=[]};return h(),(o,_)=>{const k=et,v=tt,L=_e,R=nt,m=ot;return i(),$(m,{style:{display:"block"},loading:y(n)},{default:e(()=>[s(R,{activeKey:c.value,"onUpdate:activeKey":_[0]||(_[0]=T=>c.value=T),type:"rounded","destroy-on-hide":""},{extra:e(()=>[s(L,{type:"text",onClick:b},{default:e(()=>[D(M(o.$t("messageBox.tab.button")),1)]),_:1})]),default:e(()=>[(i(),I(J,null,W(g,T=>s(v,{key:T.key},{title:e(()=>[d("span",null,M(T.title)+M(l(T.key)),1)]),default:e(()=>[y(r).length?j("",!0):(i(),$(k,{key:0,status:"404"},{subtitle:e(()=>[D(M(o.$t("messageBox.noContent")),1)]),_:1})),s(Wt,{"render-list":y(r),"unread-count":y(x),onItemClick:f},null,8,["render-list","unread-count"])]),_:2},1024)),64))]),_:1},8,["activeKey"])]),_:1},8,["loading"])}}});var Jt=A(Ht,[["__scopeId","data-v-cfab683a"]]);const Gt=t=>(pe("data-v-f52cc24a"),t=t(),fe(),t),Qt={class:"navbar"},Xt={class:"left-side"},Yt=Gt(()=>d("img",{alt:"logo",src:"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image"},null,-1)),Zt=D(" Arco Pro "),en={class:"right-side"},tn={class:"message-box-trigger"},nn=["src"],on=E({setup(t){const n=V(),a=Q(),{logout:c}=Ft(),{changeLocale:p}=Ae(),{isFullscreen:u,toggle:g}=Tt(),h=[...Ve],C=S(()=>a.avatar),r=S(()=>n.theme),x=Bt({selector:"body",attribute:"arco-theme",valueDark:"dark",valueLight:"light",storageKey:"arco-theme",onChanged(m){n.toggleTheme(m)}}),w=Dt(x),l=()=>{w()},f=()=>{n.updateSettings({globalSettings:!0})},b=F(),o=F(),_=()=>{const m=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0});b.value.dispatchEvent(m)},k=()=>{c()},v=()=>{const m=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0});o.value.dispatchEvent(m)},L=async()=>{const m=await a.switchRoles();ie.success(m)},R=st("toggleDrawerMenu");return(m,T)=>{const ke=at,$e=B("icon-menu-fold"),N=de,xe=B("icon-search"),z=_e,P=ct,Ce=B("icon-language"),O=rt,Y=lt,we=B("icon-moon-fill"),Le=B("icon-sun-fill"),Se=B("icon-notification"),Me=it,Te=ut,Be=B("icon-fullscreen-exit"),De=B("icon-fullscreen"),Z=B("icon-settings"),Ie=ue,je=B("icon-tag"),Re=B("icon-user"),Ee=B("icon-export");return i(),I("div",Qt,[d("div",Xt,[s(N,null,{default:e(()=>[Yt,s(ke,{style:{margin:0,fontSize:"18px"},heading:5},{default:e(()=>[Zt]),_:1}),y(n).device==="mobile"?(i(),$($e,{key:0,style:{"font-size":"22px",cursor:"pointer"},onClick:y(R)},null,8,["onClick"])):j("",!0)]),_:1})]),d("ul",en,[d("li",null,[s(P,{content:m.$t("settings.search")},{default:e(()=>[s(z,{class:"nav-btn",type:"outline",shape:"circle"},{icon:e(()=>[s(xe)]),_:1})]),_:1},8,["content"])]),d("li",null,[s(P,{content:m.$t("settings.language")},{default:e(()=>[s(z,{class:"nav-btn",type:"outline",shape:"circle",onClick:v},{icon:e(()=>[s(Ce)]),_:1})]),_:1},8,["content"]),s(Y,{trigger:"click",onSelect:y(p)},{content:e(()=>[(i(),I(J,null,W(h,U=>s(O,{key:U.value,value:U.value},{default:e(()=>[D(M(U.label),1)]),_:2},1032,["value"])),64))]),default:e(()=>[d("div",{ref_key:"triggerBtn",ref:o,class:"trigger-btn"},null,512)]),_:1},8,["onSelect"])]),d("li",null,[s(P,{content:y(r)==="light"?m.$t("settings.navbar.theme.toDark"):m.$t("settings.navbar.theme.toLight")},{default:e(()=>[s(z,{class:"nav-btn",type:"outline",shape:"circle",onClick:l},{icon:e(()=>[y(r)==="dark"?(i(),$(we,{key:0})):(i(),$(Le,{key:1}))]),_:1})]),_:1},8,["content"])]),d("li",null,[s(P,{content:m.$t("settings.navbar.alerts")},{default:e(()=>[d("div",tn,[s(Me,{count:9,dot:""},{default:e(()=>[s(z,{class:"nav-btn",type:"outline",shape:"circle",onClick:_},{default:e(()=>[s(Se)]),_:1})]),_:1})])]),_:1},8,["content"]),s(Te,{trigger:"click","arrow-style":{display:"none"},"content-style":{padding:0,minWidth:"400px"},"content-class":"message-popover"},{content:e(()=>[s(Jt)]),default:e(()=>[d("div",{ref_key:"refBtn",ref:b,class:"ref-btn"},null,512)]),_:1})]),d("li",null,[s(P,{content:y(u)?m.$t("settings.navbar.screen.toExit"):m.$t("settings.navbar.screen.toFull")},{default:e(()=>[s(z,{class:"nav-btn",type:"outline",shape:"circle",onClick:y(g)},{icon:e(()=>[y(u)?(i(),$(Be,{key:0})):(i(),$(De,{key:1}))]),_:1},8,["onClick"])]),_:1},8,["content"])]),d("li",null,[s(P,{content:m.$t("settings.title")},{default:e(()=>[s(z,{class:"nav-btn",type:"outline",shape:"circle",onClick:f},{icon:e(()=>[s(Z)]),_:1})]),_:1},8,["content"])]),d("li",null,[s(Y,{trigger:"click"},{content:e(()=>[s(O,null,{default:e(()=>[s(N,{onClick:L},{default:e(()=>[s(je),d("span",null,M(m.$t("messageBox.switchRoles")),1)]),_:1})]),_:1}),s(O,null,{default:e(()=>[s(N,{onClick:T[0]||(T[0]=U=>m.$router.push({name:"Info"}))},{default:e(()=>[s(Re),d("span",null,M(m.$t("messageBox.userCenter")),1)]),_:1})]),_:1}),s(O,null,{default:e(()=>[s(N,{onClick:T[1]||(T[1]=U=>m.$router.push({name:"Setting"}))},{default:e(()=>[s(Z),d("span",null,M(m.$t("messageBox.userSettings")),1)]),_:1})]),_:1}),s(O,null,{default:e(()=>[s(N,{onClick:k},{default:e(()=>[s(Ee),d("span",null,M(m.$t("messageBox.logout")),1)]),_:1})]),_:1})]),default:e(()=>[s(Ie,{size:32,style:{marginRight:"8px",cursor:"pointer"}},{default:e(()=>[d("img",{alt:"avatar",src:y(C)},null,8,nn)]),_:1})]),_:1})])])])}}});var sn=A(on,[["__scopeId","data-v-f52cc24a"]]);const an=(t,n)=>{const p=n||{},{target:a="_blank"}=p,c=se(p,["target"]);window.open(t,a,Object.entries(c).reduce((u,g)=>{const[h,C]=g;return[...u,`${h}=${C}`]},[]).join(","))},cn=new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i"),rn=[...Ne,...Oe],ln=rn.map(t=>{const{name:n,path:a,meta:c,redirect:p,children:u}=t;return{name:n,path:a,meta:c,redirect:p,children:u}});function un(){const t=ce(),n=V(),a=S(()=>n.menuFromServer?n.appAsyncMenus:ln);return{menuTree:S(()=>{const p=JSON.parse(JSON.stringify(a.value));p.sort((g,h)=>(g.meta.order||0)-(h.meta.order||0));function u(g,h){return g?g.map(r=>{var w,l;if(!t.accessRouter(r))return null;if(((w=r.meta)==null?void 0:w.hideChildrenInMenu)||!r.children)return r.children=[],r;r.children=r.children.filter(f=>{var b;return((b=f.meta)==null?void 0:b.hideInMenu)!==!0});const x=u(r.children,h+1);return x.length||h>1?(r.children=x,r):((l=r.meta)==null?void 0:l.hideInMenu)===!1?r:null}).filter(Boolean):null}return u(p,0)})}}function dn(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!dt(t)}var _n=E({emit:["collapse"],setup(){const{t}=ae(),n=V(),a=G(),c=me(),{menuTree:p}=un(),u=S({get(){return n.device==="desktop"?n.menuCollapse:!1},set(l){n.updateSettings({menuCollapse:l})}}),g=F([]),h=F([]),C=l=>{if(cn.test(l.path)){an(l.path),h.value=[l.name];return}const{hideInMenu:f,activeMenu:b}=l.meta;if(c.name===l.name&&!f&&!b){h.value=[l.name];return}a.push({name:l.name})},r=l=>{const f=[];let b=!1;const o=(_,k,v)=>{var L;if(_.name===v){b=!0,f.push(...k,_.name);return}((L=_.children)==null?void 0:L.length)&&_.children.forEach(R=>{o(R,[...k],v)})};return p.value.forEach(_=>{b||o(_,[_.name],l)}),f};re(l=>{const{requiresAuth:f,activeMenu:b,hideInMenu:o}=l.meta;if(f&&(!o||b)){const _=r(b||l.name),k=new Set([..._,...g.value]);g.value=[...k],h.value=[b||_[_.length-1]]}},!0);const x=l=>{n.device==="desktop"&&n.updateSettings({menuCollapse:l})},w=()=>{function l(f,b=[]){return f&&f.forEach(o=>{var v;const _=((v=o==null?void 0:o.meta)==null?void 0:v.icon)?()=>{var L;return ge(ve(`<${(L=o==null?void 0:o.meta)==null?void 0:L.icon}/>`))}:null,k=(o==null?void 0:o.children)&&(o==null?void 0:o.children.length)!==0?s(pt,{key:o==null?void 0:o.name},{default:()=>[l(o==null?void 0:o.children)],icon:_,title:()=>{var L;return ge(ve(t(((L=o==null?void 0:o.meta)==null?void 0:L.locale)||"")))}}):s(ft,{key:o==null?void 0:o.name,onClick:()=>C(o)},{default:()=>{var L;return[t(((L=o==null?void 0:o.meta)==null?void 0:L.locale)||"")]},icon:_});b.push(k)}),b}return l(p.value)};return()=>{let l;return s(_t,{collapsed:u.value,"onUpdate:collapsed":f=>u.value=f,"open-keys":g.value,"onUpdate:open-keys":f=>g.value=f,"show-collapse-button":n.device!=="mobile","auto-open":!1,"selected-keys":h.value,"auto-open-selected":!0,"level-indent":34,style:"height: 100%",onCollapse:x},dn(l=w())?l:{default:()=>[l]})}}});var be=A(_n,[["__scopeId","data-v-7532b26c"]]);const pn=t=>(pe("data-v-23971f0e"),t=t(),fe(),t),fn={class:"tab-bar-container"},gn={class:"tab-bar-box"},vn={class:"tab-bar-scroll"},hn={class:"tags-wrap"},yn=["onClick"],mn={class:"tag-link"},bn=["onClick"],kn=pn(()=>d("div",{class:"tag-bar-operation"},null,-1)),$n=E({setup(t){const n=V(),a=le(),c=G(),p=F(),u=S(()=>a.getTabList),g=S(()=>n.navbar?60:0);he(()=>n.navbar,()=>{p.value.updatePosition()}),re(r=>{!r.meta.noAffix&&!u.value.some(x=>x.fullPath===r.fullPath)&&a.updateTabList(r)},!0);const h=(r,x)=>{if(a.deleteTag(x,r),x===u.value.length){const w=u.value[u.value.length-1];c.push({name:w.name})}},C=r=>{c.push(K({},r))};return(r,x)=>{const w=B("icon-close"),l=vt;return i(),I("div",fn,[s(l,{ref_key:"affixRef",ref:p,"offset-top":y(g)},{default:e(()=>[d("div",gn,[d("div",vn,[d("div",hn,[(i(!0),I(J,null,W(y(u),(f,b)=>(i(),I("span",{key:f.fullPath,class:X(["arco-tag arco-tag-size-medium arco-tag-checked",{"link-activated":f.fullPath===r.$route.fullPath}]),onClick:o=>C(f)},[d("span",mn,M(r.$t(f.title)),1),d("span",{class:"arco-icon-hover arco-tag-icon-hover arco-icon-hover-size-medium arco-tag-close-btn",onClick:gt(o=>h(f,b),["stop"])},[s(w)],8,bn)],10,yn))),128))])]),kn])]),_:1},8,["offset-top"])])}}});var xn=A($n,[["__scopeId","data-v-23971f0e"]]);function Cn(t,n,a,c=!1){t.addEventListener&&typeof t.addEventListener=="function"&&t.addEventListener(n,a,c)}function wn(t,n,a,c=!1){t.removeEventListener&&typeof t.removeEventListener=="function"&&t.removeEventListener(n,a,c)}const Ln=992;function Sn(){return document.body.getBoundingClientRect().width-1<Ln}function Mn(t){const n=V();function a(){if(!document.hidden){const p=Sn();n.toggleDevice(p?"mobile":"desktop"),n.toggleMenu(p)}}const c=It(a,100);ht(()=>{t&&c()}),yt(()=>{Cn(window,"resize",c)}),mt(()=>{wn(window,"resize",c)})}const Tn=E({setup(t){const n=le(),a=S(()=>n.getCacheList);return(c,p)=>{const u=B("router-view");return i(),$(u,null,{default:e(({Component:g,route:h})=>[s(kt,{name:"fade",mode:"out-in",appear:""},{default:e(()=>[h.meta.ignoreCache?(i(),$(ye(g),{key:h.fullPath})):(i(),$(bt,{key:1,include:y(a)},[(i(),$(ye(g),{key:h.fullPath}))],1032,["include"]))]),_:2},1024)]),_:1})}}});const Bn={key:0,class:"layout-navbar"},Dn={class:"menu-wrapper"},In=E({setup(t){const n=V(),a=Q(),c=G(),p=me(),u=ce();Mn(!0);const g="60px",h=S(()=>n.navbar),C=S(()=>n.menu),r=S(()=>n.hideMenu),x=S(()=>n.footer),w=S(()=>n.menuCollapse?48:n.menuWidth),l=S(()=>n.menuCollapse),f=S(()=>{const k=C.value&&!r.value?{paddingLeft:`${w.value}px`}:{},v=h.value?{paddingTop:g}:{};return K(K({},k),v)}),b=k=>{n.updateSettings({menuCollapse:k})};he(()=>a.role,k=>{k&&!u.accessRouter(p)&&c.push({name:"notFound"})});const o=F(!1),_=()=>{o.value=!1};return $t("toggleDrawerMenu",()=>{o.value=!o.value}),(k,v)=>{const L=wt,R=Lt,m=St,T=Mt;return i(),$(T,{class:X(["layout",{mobile:y(n).hideMenu}])},{default:e(()=>[y(h)?(i(),I("div",Bn,[s(sn)])):j("",!0),s(T,null,{default:e(()=>[s(T,null,{default:e(()=>[y(C)?xt((i(),$(L,{key:0,class:"layout-sider",breakpoint:"xl",collapsed:y(l),collapsible:!0,width:y(w),style:H({paddingTop:y(h)?"60px":""}),"hide-trigger":!0,onCollapse:b},{default:e(()=>[d("div",Dn,[s(be)])]),_:1},8,["collapsed","width","style"])),[[Ct,!y(r)]]):j("",!0),y(r)?(i(),$(R,{key:1,visible:o.value,placement:"left",footer:!1,"mask-closable":"",closable:!1,onCancel:_},{default:e(()=>[s(be)]),_:1},8,["visible"])):j("",!0),s(T,{class:"layout-content",style:H(y(f))},{default:e(()=>[y(n).tabBar?(i(),$(xn,{key:0})):j("",!0),s(m,null,{default:e(()=>[s(Tn)]),_:1}),y(x)?(i(),$(Ue,{key:1})):j("",!0)]),_:1},8,["style"])]),_:1})]),_:1})]),_:1},8,["class"])}}});var Zn=A(In,[["__scopeId","data-v-5424861c"]]);export{Zn as default};
