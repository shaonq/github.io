import{_ as t}from"../index.9b5e614d.js";import{j as e,q as n,K as s,v as r,z as l,l as i}from"../@vue/@vue.206ece97.js";import"../shaonq/shaonq.754e411d.js";import"../vue-router/vue-router.f52d84b4.js";import"../pinia/pinia.589cd647.js";import"../vue-demi/vue-demi.784001c0.js";import"../quill/quill.3362dfa5.js";import"../nprogress/nprogress.18cafdd9.js";import"../echarts/echarts.22f0db08.js";import"../tslib/tslib.b9ce9c9f.js";import"../zrender/zrender.31b37330.js";import"../vite-plugin-mock/vite-plugin-mock.b4540423.js";import"../mockjs/mockjs.56624cf4.js";import"../path-to-regexp/path-to-regexp.dea237f3.js";const o=JSON.stringify({ops:[{insert:"佳人"},{attributes:{header:1},insert:"\n"},{attributes:{color:"#999999"},insert:" "},{attributes:{newLink:"#",color:"#999999"},insert:"【作者】"},{attributes:{newLink:"#",color:"#2673db"},insert:"杜甫 "},{attributes:{color:"#999999"},insert:"【朝代】"},{insert:"唐\n绝代有佳人，幽居在空谷。\n自云良家子，零落依草木。\n关中昔丧乱，兄弟遭杀戮。\n官高何足论，不得收骨肉。\n世情恶衰歇，万事随转烛。\n夫婿轻薄儿，新人美如玉。\n合昏尚知时，鸳鸯不独宿。\n"},{attributes:{color:"#cc0000"},insert:"但见新人笑，那闻旧人哭"},{insert:"。\n在山泉水清，出山泉水浊。\n侍婢卖珠回，牵萝补茅屋。\n摘花不插发，采柏动盈掬。\n天寒翠袖薄，日暮倚修竹。\n"}]}),a={data(){return{defaultJsonString:o,html:o,handlers:{link:t=>{const e=this.$util;e.alert({extend:!0,title:"添加链接",content:'<input class="u-input" placeholder="http(s)://"/>',success:(t,n)=>{e.dom.el("input",n).focus()},ok:{label:"确认",onclick:(n,s)=>{let r=e.dom.el("input",s.parentNode.parentNode).value;e.regexp.url.test(r)?(t(r),e.hideToast(n)):e.toast("请输入一个有效地址")}}})},image:t=>{const e=this.$util;e.alert({extend:!0,title:"添加图片",content:'<input class="u-input" placeholder="http(s)://"/>',success:(t,n)=>{e.dom.el("input",n).focus()},ok:{label:"确认",onclick:(n,s)=>{let r=e.dom.el("input",s.parentNode.parentNode).value;e.regexp.image.test(r)?(t(r),e.hideToast(n)):e.toast("请输入一个有效图片地址")}}})}}}},methods:{onChange(t){this.html=t}}},u=r("div",{class:"u-quill-body"},[r("h1",null,"富文本"),r("p",null,"轻量级基础富文本编辑器")],-1),d={class:"u-quill-body"},p=r("h1",null,"数据",-1);var c=t(a,[["render",function(t,o,a,c,h,m){const b=e("u-quill");return i(),n("div",null,[u,s(b,{handlers:h.handlers,style:{"min-height":"282px","border-right-width":"0","border-left-width":"0"},type:"json",html:h.defaultJsonString,onChange:m.onChange},null,8,["handlers","html","onChange"]),s(b,{handlers:h.handlers,html:h.html,style:{border:"0"},type:"json",readonly:"readonly"},null,8,["handlers","html"]),r("div",d,[p,r("pre",null,l(h.html),1)])])}]]);export{c as default};
