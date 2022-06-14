import{_ as n}from"../index.5bb40e89.js";import{j as a,q as t,K as l,v as e,l as i}from"../@vue/@vue.3037e913.js";import"../shaonq/shaonq.754e411d.js";import"../vue-router/vue-router.80e3d4ff.js";import"../pinia/pinia.03fbb748.js";import"../vue-demi/vue-demi.784001c0.js";import"../quill/quill.3362dfa5.js";import"../nprogress/nprogress.18cafdd9.js";import"../echarts/echarts.22f0db08.js";import"../tslib/tslib.b9ce9c9f.js";import"../zrender/zrender.31b37330.js";const r={data:()=>({list:[],holiday:[]}),methods:{dataInit(n,a,t){this.getHoliday(t.slice(0,7)),this.list=[{FBillNo:"QC01-0710-APQP-01",EntryName:"1.1协议或合同",PlanStartTime:"2019/09/21 00:00:00",PlanEndTime:"2019/09/30 00:00:00"},{FBillNo:"QC01-0710-APQP-01",EntryName:"1.2顾客特殊要求传递清单及工作任务单123",PlanStartTime:"2019/09/21 00:00:00",PlanEndTime:"2019/09/22 00:00:00"},{FBillNo:"QC01-0710-APQP-01",EntryName:"1.3新项目信息输入输出检查表",PlanStartTime:"2019/09/21 00:00:00",PlanEndTime:"2019/09/23 00:00:00"},{FBillNo:"QC01-0710-APQP-01",EntryName:"1.4新开发产品市场分析报告",PlanStartTime:"2019/09/24 00:00:00",PlanEndTime:"2019/09/24 00:00:00"},{FBillNo:"QC01-0710-APQP-01",EntryName:"1.5工程工作申请单",PlanStartTime:"2019/09/25 00:00:00",PlanEndTime:"2019/09/25 00:00:00"},{FBillNo:"QC01-0710-APQP-01",EntryName:"1.6产品成本核算表",PlanStartTime:"2019/09/26 00:00:00",PlanEndTime:"2019/09/26 00:00:00"},{FBillNo:"QC01-0710-APQP-01",EntryName:"1.7项目经验-以往缺陷清单",PlanStartTime:"2019/09/21 00:00:00",PlanEndTime:"2019/09/27 00:00:00"},{FBillNo:"QC01-0710-APQP-01",EntryName:"1.8产品设计方案评估报告",PlanStartTime:"2019/09/28 00:00:00",PlanEndTime:"2019/09/28 00:00:00"},{FBillNo:"QC01-0710-APQP-01",EntryName:"1.9注塑模具设计制造方案评估报告",PlanStartTime:"2019/09/29 00:00:00",PlanEndTime:"2019/09/29 00:00:00"},{FBillNo:"QC01-0710-APQP-01",EntryName:"1.10冲压模具设计制造方案评估报告",PlanStartTime:"2019/09/30 00:00:00",PlanEndTime:"2019/09/30 00:00:00"},{FBillNo:"QC01-0619-APQP-01",EntryName:"1.1协议或合同",PlanStartTime:"2019/09/21 00:00:00",PlanEndTime:"2019/09/21 00:00:00"},{FBillNo:"QC01-0619-APQP-01",EntryName:"1.2顾客特殊要求传递清单及工作任务单123",PlanStartTime:"2019/09/22 00:00:00",PlanEndTime:"2019/09/22 00:00:00"},{FBillNo:"QC01-0619-APQP-01",EntryName:"1.3新项目信息输入输出检查表",PlanStartTime:"2019/09/23 00:00:00",PlanEndTime:"2019/09/23 00:00:00"},{FBillNo:"QC01-0619-APQP-01",EntryName:"1.4新开发产品市场分析报告",PlanStartTime:"2019/09/24 00:00:00",PlanEndTime:"2019/09/24 00:00:00"},{FBillNo:"QC01-0619-APQP-01",EntryName:"1.5工程工作申请单",PlanStartTime:"2019/09/25 00:00:00",PlanEndTime:"2019/09/25 00:00:00"},{FBillNo:"QC01-0619-APQP-01",EntryName:"1.6产品成本核算表",PlanStartTime:"2019/09/26 00:00:00",PlanEndTime:"2019/09/26 00:00:00"}].map((function(n,a){let t={};return t.title=n.EntryName,t.content=` 订单编号：${n.FBillNo} `,t.startDate=n.PlanStartTime,t.endDate=(new Date).toJSON().slice(0,7).replace("-","/")+n.PlanEndTime.slice(7),t.className="a"+Math.random().toString(16).slice(-6),t}))},getHoliday(n){"function"==typeof fetch&&fetch("https://timor.tech/api/holiday/year/"+n).then((n=>n.json())).then((n=>{n&&0===n.code&&(this.holiday=Object.values(n.holiday))}))},onDay(n){},onItem(n,a){}},mounted(){}},m=e("div",{class:"u-quill-body"},[e("h1",null,"日程表"),e("h1",null,"日程表含义"),e("p",null,"日程表，根据日期安排活动顺序及内容的表格。可以用日程表来规划时间，安排办事的流程。"),e("h1",null,"每日数据"),e("pre",null,[e("code",{class:"language-javascript"},'\r\n// @param {Object[]}  list :porp list Array\r\n  [{\r\n    content: "QC01-0710-APQP-01",\r\n    title: "1.1协议或合同",\r\n    startDate: "2019/11/21 00:00:00",\r\n    endDate: "2019/11/30 00:00:00",\r\n    className:""\r\n  }]\r\n\r\n// @param {Object[]}  holiday :porp holiday Array\r\n  [{\r\n    "holiday":false,\r\n    "name":"国庆节前调休",\r\n    "target":"国庆节",\r\n    "date":"2019-09-29"\r\n  }]\r\n')]),e("h1",null,"例子")],-1);var o=n(r,[["render",function(n,e,r,o,P,s){const d=a("u-full-calendar");return i(),t("div",null,[m,l(d,{onOnInit:s.dataInit,list:P.list,holiday:P.holiday,onOnDay:s.onDay,onOnItem:s.onItem},null,8,["onOnInit","list","holiday","onOnDay","onOnItem"])])}]]);export{o as default};
