var G=Object.defineProperty,Q=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var z=(o,a,s)=>a in o?G(o,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[a]=s,L=(o,a)=>{for(var s in a||(a={}))J.call(a,s)&&z(o,s,a[s]);if(D)for(var s of D(a))K.call(a,s)&&z(o,s,a[s]);return o},M=(o,a)=>Q(o,H(a));import{_ as h,a as U,u as q}from"./index.1ccc45ac.js";/* empty css               */import{d as v,aJ as f,A as u,B as b,aG as t,aF as e,aL as r,aM as c,E as _,C as W,bt as w,b4 as I,aI as X,aH as Y,aC as y,aD as B,bb as Z,e as tt,u as g,bu as et,bv as at,bw as F,aT as x,bk as ot,b1 as P,bj as S,b8 as nt,b9 as st,bf as it,c as k,h as R,bx as A,bp as ct,by as lt,bz as rt,bl as _t,bm as dt,bs as ut,bA as pt,bc as mt,b6 as ft,bB as ht,b5 as vt}from"./arco.820dc93e.js";/* empty css                *//* empty css                *//* empty css              *//* empty css               */import{q as bt}from"./message.b2a3d3f9.js";import{u as yt}from"./loading.31c807e3.js";/* empty css               *//* empty css               *//* empty css                *//* empty css              *//* empty css                *//* empty css              *//* empty css                *//* empty css               *//* empty css               *//* empty css                */import"./chart.70830779.js";import"./vue.d8391d64.js";const gt={class:"chat-item-footer"},$t={class:"chat-item-time"},St={class:"chat-item-actions"},It={class:"chat-item-actions-item"},wt={class:"chat-item-actions-item chat-item-actions-collect"},xt=v({props:{itemData:{type:Object,default(){return{}}}},setup(o){return(a,s)=>{const i=w,l=f("icon-command"),n=f("icon-star"),d=I;return u(),b("div",{class:W(["chat-item",o.itemData.isCollect?"chat-item-collected":""])},[t(d,{size:4,direction:"vertical",fill:""},{default:e(()=>[t(i,{type:"warning"},{default:e(()=>[r(c(o.itemData.username),1)]),_:1}),t(i,null,{default:e(()=>[r(c(o.itemData.content),1)]),_:1}),_("div",gt,[_("div",$t,[t(i,{type:"secondary"},{default:e(()=>[r(c(o.itemData.time),1)]),_:1})]),_("div",St,[_("div",It,[t(l)]),_("div",wt,[t(n)])])])]),_:1})],2)}}});var Ct=h(xt,[["__scopeId","data-v-079ca87c"]]);const jt={class:"chat-list"},kt=v({props:{renderList:{type:Array,default(){return[]}}},setup(o){return(a,s)=>{const i=Z;return u(),b("div",jt,[(u(!0),b(X,null,Y(o.renderList,l=>(u(),y(Ct,{key:l.id,"item-data":l},null,8,["item-data"]))),128)),o.renderList.length?B("",!0):(u(),y(i,{key:0,status:"404"}))])}}});var Tt=h(kt,[["__scopeId","data-v-627daec6"]]);const Dt={class:"chat-panel-content"},zt={class:"chat-panel-footer"},Lt=v({setup(o){const{loading:a,setLoading:s}=yt(!0),i=tt([]);return(async()=>{try{const{data:n}=await bt();i.value=n}catch{}finally{s(!1)}})(),(n,d)=>{const p=et,m=at,C=F,j=f("icon-download"),$=x,T=I,O=ot,N=f("icon-face-smile-fill"),V=P,E=S;return u(),y(E,{class:"general-card chat-panel",title:n.$t("monitor.title.chatPanel"),bordered:!1,"header-style":{paddingBottom:"0"},"body-style":{height:"100%",paddingTop:"16px",display:"flex",flexFlow:"column"}},{default:e(()=>[t(T,{size:8},{default:e(()=>[t(m,{style:{width:"86px"},"default-value":"all"},{default:e(()=>[t(p,{value:"all"},{default:e(()=>[r(c(n.$t("monitor.chat.options.all")),1)]),_:1})]),_:1}),t(C,{placeholder:n.$t("monitor.chat.placeholder.searchCategory")},null,8,["placeholder"]),t($,{type:"text"},{default:e(()=>[t(j)]),_:1})]),_:1}),_("div",Dt,[t(O,{loading:g(a),style:{width:"100%"}},{default:e(()=>[t(Tt,{"render-list":i.value},null,8,["render-list"])]),_:1},8,["loading"])]),_("div",zt,[t(T,{size:8},{default:e(()=>[t(V,null,{suffix:e(()=>[t(N)]),_:1}),t($,{type:"primary"},{default:e(()=>[r(c(n.$t("monitor.chat.update")),1)]),_:1})]),_:1})])]),_:1},8,["title"])}}});var Mt=h(Lt,[["__scopeId","data-v-0f5a8ccc"]]);const qt=o=>(nt("data-v-02c26609"),o=o(),st(),o),Bt={class:"studio-wrapper"},Ft=qt(()=>_("img",{src:"http://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/c788fc704d32cf3b1136c7d45afc2669.png~tplv-uwbnlip3yd-webp.webp",class:"studio-preview"},null,-1)),Pt={class:"studio-bar"},Rt={key:0},At=["src"],Ot=v({setup(o){const a=U();return(s,i)=>{const l=f("icon-more"),n=it,d=w,p=I,m=S;return u(),y(m,{class:"general-card",title:s.$t("monitor.title.studioPreview")},{extra:e(()=>[t(l)]),default:e(()=>[_("div",Bt,[Ft,_("div",Pt,[g(a)?(u(),b("div",Rt,[t(p,{size:12},{default:e(()=>[t(n,{size:24},{default:e(()=>[_("img",{src:g(a).avatar},null,8,At)]),_:1}),t(d,null,{default:e(()=>[r(c(g(a).name)+" "+c(s.$t("monitor.studioPreview.studio")),1)]),_:1})]),_:1})])):B("",!0),t(d,{type:"secondary"},{default:e(()=>[r(" 36,000 "+c(s.$t("monitor.studioPreview.watching")),1)]),_:1})])])]),_:1},8,["title"])}}});var Nt=h(Ot,[["__scopeId","data-v-02c26609"]]);const Vt=v({setup(o){const{t:a}=q(),s=[{cover:"http://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/c788fc704d32cf3b1136c7d45afc2669.png~tplv-uwbnlip3yd-webp.webp",name:"\u89C6\u9891\u76F4\u64AD",duration:"00:05:19",id:"54e23ade",status:-1}],i=n=>n===-1?`<a-tag  color="red" class='data-statistic-list-cover-tag'>
            ${a("monitor.list.tag.auditFailed")}
        </a-tag>`:"",l=k(()=>[{title:a("monitor.list.title.order"),render({rowIndex:n}){const d=`<span>${n+1}</span>`;return R(A(d))}},{title:a("monitor.list.title.cover"),render({record:n}){const d=`<div class='data-statistic-list-cover-wrapper'>
              <img src=${n.cover} />
              ${i(n.status)}
            </div>`;return R(A(d))}},{title:a("monitor.list.title.name"),dataIndex:"name"},{dataIndex:"duration",title:a("monitor.list.title.duration")},{dataIndex:"id",title:a("monitor.list.title.id")}]);return(n,d)=>{const p=ct,m=w;return u(),b("div",null,[t(p,{columns:g(l),data:s,"row-key":"id","row-selection":{type:"checkbox",showCheckedAll:!0},border:!1,pagination:!1},null,8,["columns"]),t(m,{type:"secondary",class:"data-statistic-list-tip"},{default:e(()=>[r(c(n.$t("monitor.list.tip.rotations"))+" "+c(s.length)+" "+c(n.$t("monitor.list.tip.rest")),1)]),_:1})])}}});const Et={class:"data-statistic-content"},Gt={class:"data-statistic-list-wrapper"},Qt={class:"data-statistic-list-header"},Ht={class:"data-statistic-list-content"},Jt=v({setup(o){return(a,s)=>{const i=lt,l=rt,n=_t,d=dt,p=x,m=S;return u(),y(m,{bordered:!1,"body-style":{padding:"20px"}},{default:e(()=>[t(l,{"default-active-tab":"liveMethod"},{default:e(()=>[t(i,{key:"liveMethod",title:a.$t("monitor.tab.title.liveMethod")},null,8,["title"]),t(i,{key:"onlinePopulation",title:a.$t("monitor.tab.title.onlinePopulation")},null,8,["title"])]),_:1}),_("div",Et,[t(d,{"default-value":3,type:"button"},{default:e(()=>[t(n,{value:1},{default:e(()=>[r(c(a.$t("monitor.liveMethod.normal")),1)]),_:1}),t(n,{value:2},{default:e(()=>[r(c(a.$t("monitor.liveMethod.flowControl")),1)]),_:1}),t(n,{value:3},{default:e(()=>[r(c(a.$t("monitor.liveMethod.video")),1)]),_:1}),t(n,{value:4},{default:e(()=>[r(c(a.$t("monitor.liveMethod.web")),1)]),_:1})]),_:1}),_("div",Gt,[_("div",Qt,[t(p,{type:"text"},{default:e(()=>[r(c(a.$t("monitor.editCarousel")),1)]),_:1}),t(p,{disabled:""},{default:e(()=>[r(c(a.$t("monitor.startCarousel")),1)]),_:1})]),_("div",Ht,[t(Vt)])])])]),_:1})}}});var Kt=h(Jt,[["__scopeId","data-v-14d6a0c4"]]);const Ut={key:0},Wt={key:1},Xt=v({setup(o){const{t:a}=q(),s=k(()=>[{label:"mainstream",value:"6 Mbps"},{label:a("monitor.studioStatus.frameRate"),value:"60"},{label:"hotStandby",value:"6 Mbps"},{label:a("monitor.studioStatus.frameRate"),value:"60"},{label:"coldStandby",value:"6 Mbps"},{label:a("monitor.studioStatus.frameRate"),value:"60"}]),i=k(()=>[{label:a("monitor.studioStatus.line"),value:"\u70ED\u5907"},{label:"CDN",value:"KS"},{label:a("monitor.studioStatus.play"),value:"FLV"},{label:a("monitor.studioStatus.pictureQuality"),value:"\u539F\u753B"}]);return(l,n)=>{const d=ut,p=w,m=pt,C=mt,j=S;return u(),y(j,{class:"general-card",title:l.$t("monitor.studioStatus.title.studioStatus")},{extra:e(()=>[t(d,{color:"green"},{default:e(()=>[r(c(l.$t("monitor.studioStatus.smooth")),1)]),_:1})]),default:e(()=>[t(m,{layout:"horizontal",data:g(s),column:2},{label:e(({label:$})=>[["mainstream","hotStandby","coldStandby"].includes($)?(u(),b("span",Ut,[t(p,{style:{"padding-right":"8px"}},{default:e(()=>[r(c(l.$t(`monitor.studioStatus.${$}`)),1)]),_:2},1024),r(" "+c(l.$t("monitor.studioStatus.bitRate")),1)])):(u(),b("span",Wt,c($),1))]),_:1},8,["data"]),t(C,{style:{"margin-bottom":"16px"},heading:6},{default:e(()=>[r(c(l.$t("monitor.studioStatus.title.pictureInfo")),1)]),_:1}),t(m,{layout:"horizontal",data:g(i),column:2},null,8,["data"])]),_:1},8,["title"])}}});var Yt=h(Xt,[["__scopeId","data-v-1b554c18"]]);const Zt={};function te(o,a){const s=f("IconTags"),i=x,l=f("IconSwap"),n=f("IconStop"),d=f("IconArrowRight"),p=I,m=S;return u(),y(m,{class:"general-card",title:o.$t("monitor.title.quickOperation")},{default:e(()=>[t(p,{direction:"vertical",fill:"",size:10},{default:e(()=>[t(i,{long:""},{icon:e(()=>[t(s)]),default:e(()=>[r(c(o.$t("monitor.quickOperation.changeClarity"))+" ",1)]),_:1}),t(i,{long:""},{icon:e(()=>[t(l)]),default:e(()=>[r(c(o.$t("monitor.quickOperation.switchStream"))+" ",1)]),_:1}),t(i,{long:""},{icon:e(()=>[t(n)]),default:e(()=>[r(c(o.$t("monitor.quickOperation.removeClarity"))+" ",1)]),_:1}),t(i,{long:""},{icon:e(()=>[t(d)]),default:e(()=>[r(c(o.$t("monitor.quickOperation.pushFlowGasket"))+" ",1)]),_:1})]),_:1})]),_:1},8,["title"])}var ee=h(Zt,[["render",te]]);const ae={};function oe(o,a){const s=P,i=ft,l=ht,n=F,d=vt,p=x,m=S;return u(),y(m,{class:"general-card",title:o.$t("monitor.title.studioInfo")},{default:e(()=>[t(d,{model:{},layout:"vertical"},{default:e(()=>[t(i,{label:o.$t("monitor.studioInfo.label.studioTitle"),required:""},{default:e(()=>[t(s,{placeholder:`\u738B\u7ACB\u7FA4${o.$t("monitor.studioInfo.placeholder.studioTitle")}`},null,8,["placeholder"])]),_:1},8,["label"]),t(i,{label:o.$t("monitor.studioInfo.label.onlineNotification"),required:""},{default:e(()=>[t(l)]),_:1},8,["label"]),t(i,{label:o.$t("monitor.studioInfo.label.studioCategory"),required:""},{default:e(()=>[t(n)]),_:1},8,["label"]),t(i,{label:o.$t("monitor.studioInfo.label.studioCategory"),required:""},{default:e(()=>[t(n)]),_:1},8,["label"])]),_:1}),t(p,{type:"primary"},{default:e(()=>[r(c(o.$t("monitor.studioInfo.btn.fresh")),1)]),_:1})]),_:1},8,["title"])}var ne=h(ae,[["render",oe]]);const se={class:"container"},ie={class:"layout"},ce={class:"layout-left-side"},le={class:"layout-content"},re={class:"layout-right-side"},_e={name:"Monitor"},de=v(M(L({},_e),{setup(o){return(a,s)=>{const i=f("Breadcrumb"),l=I;return u(),b("div",se,[t(i,{items:["menu.dashboard","menu.dashboard.monitor"]},null,8,["items"]),_("div",ie,[_("div",ce,[t(Mt)]),_("div",le,[t(l,{size:16,direction:"vertical",fill:""},{default:e(()=>[t(Nt),t(Kt)]),_:1})]),_("div",re,[t(l,{size:16,direction:"vertical",fill:""},{default:e(()=>[t(Yt),t(ee),t(ne)]),_:1})])])])}}}));var qe=h(de,[["__scopeId","data-v-d7f1a6a2"]]);export{qe as default};
