import{_ as t,c as n}from"../index.47cd64e4.js";import{h as a}from"../request/request.7bd88e11.js";import{s as e}from"../shaonq/shaonq.b69e9063.js";import{f as o,r as i,q as s,M as r,v as l,l as c}from"../@vue/@vue.89516255.js";import"../vue-router/vue-router.c621da18.js";import"../pinia/pinia.5150f487.js";import"../vue-demi/vue-demi.784001c0.js";import"../quill/quill.13eb9602.js";import"../mockjs/mockjs.69e5819b.js";import"../echarts/echarts.22f0db08.js";import"../tslib/tslib.b9ce9c9f.js";import"../zrender/zrender.31b37330.js";import"../vite-plugin-mock/vite-plugin-mock.5f58db78.js";import"../path-to-regexp/path-to-regexp.dea237f3.js";import"../axios/axios.e13dbd1c.js";const p=o({setup(){const t=i([]),n=i([]);return{list:t,holiday:n,dataInit:async function(e,o,i){const s=i.slice(0,7);var r;r=s,"function"==typeof fetch&&fetch("https://timor.tech/api/holiday/year/"+r).then((t=>t.json())).then((t=>{t&&0===t.code&&(n.value=Object.values(t.holiday))}));const l=await a.get("/api/get-calendar-list");t.value=l.list},onDay:function(t){e.toast(t+"=> on-day")},onItem:function(t,n){e.toast(t+"=> on-item => "+JSON.stringify(n))}}}}),u=l("div",{class:"u-quill-body"},[l("h1",null,"日程表"),l("h1",null,"日程表含义"),l("p",null,"日程表，根据日期安排活动顺序及内容的表格。可以用日程表来规划时间，安排办事的流程。"),l("h1",null,"每日数据"),l("pre",null,[l("code",{class:"language-javascript"},'\n// @param {Object[]}  list :porp list Array\n  [{\n    content: "QC01-0710-APQP-01",\n    title: "1.1协议或合同",\n    startDate: "2019/11/21 00:00:00",\n    endDate: "2019/11/30 00:00:00",\n    className:""\n  }]\n\n// @param {Object[]}  holiday :porp holiday Array\n  [{\n    "holiday":false,\n    "name":"国庆节前调休",\n    "target":"国庆节",\n    "date":"2019-09-29"\n  }]\n')]),l("h1",null,"例子")],-1);var d=t(p,[["render",function(t,a,e,o,i,l){const p=n;return c(),s("div",null,[u,r(p,{list:t.list,holiday:t.holiday,onOnInit:t.dataInit,onOnDay:t.onDay,onOnItem:t.onItem},null,8,["list","holiday","onOnInit","onOnDay","onOnItem"])])}]]);export{d as default};
