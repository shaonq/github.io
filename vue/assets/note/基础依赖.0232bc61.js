import{s as a}from"../shaonq/shaonq.b69e9063.js";import{D as l,E as e,J as s,N as t,G as i,H as o,P as n,M as u,C as c,F as d}from"../@vue/@vue.7bfd4ab2.js";import{_ as r}from"../index.cea254c7.js";import"../vue-router/vue-router.24db3005.js";import"../pinia/pinia.5670f9ca.js";import"../vue-demi/vue-demi.784001c0.js";import"../nprogress/nprogress.18cafdd9.js";import"../quill/quill.3362dfa5.js";import"../echarts/echarts.22f0db08.js";import"../tslib/tslib.b9ce9c9f.js";import"../zrender/zrender.31b37330.js";import"../vite-plugin-mock/vite-plugin-mock.b4540423.js";import"../mockjs/mockjs.56624cf4.js";import"../path-to-regexp/path-to-regexp.dea237f3.js";const b={setup:()=>({shaonq:a}),data:()=>({tabName:"a"}),methods:{showLoading(){a.showLoading("0%");const l=+new Date,e=setInterval((()=>{const s=Math.ceil((new Date-l)/1e3*100);s>=100?(clearInterval(e),a.showSuccess("加载成功")):a.showLoading(`加载${s}%`)}),66)},uploadAvatar(){a.uploadAvatar({success:(l,e)=>{a.showModal({content:`<p>${e}</p><img style="margin-top:8px;" src="${l}"/>`,width:"auto",height:"auto"})}})},showContextMenu(l){const e=a.dom.position(l.target);a.showContextMenu({offset:[e.top+e.height+"px",l.pageX+"px"],list:[{label:"发现",value:"remove"},{label:"删除",value:"remove"},{label:"不可选",value:"remove",disabled:!0,border:!0}],success:({label:l,value:e})=>{if("remove"===e)a.toast("点击了选项")}})},showDropdown(l){const e=a.dom.position(l.target);a.showDropdown({offset:[e.top+e.height+"px",e.left+"px"],list:[{label:"发现",value:"remove"},{label:"删除",value:"remove2"},{label:"不可选",value:"remove3",disabled:!0,border:!0}],success:({label:l,value:e})=>{if("remove"===e)a.toast("点击了选项")},value:"remove"})},confirmInfo(){a.alert({title:"确认信息",content:"检测到未保存的内容，是否在离开页面前保存修改？"},{confirmText:"放弃修改",confirm:l=>a.toast("放弃修改")})},deleteInfo(){a.alert("此操作将永久删除该文件, 是否继续?",{confirmText:"确定",confirmSkin:"u-btn--red",confirm:l=>a.toast("删除成功")})}}},p={class:"u-tabs"},m={class:"u-tabs__item"},v={class:"u-tabs__item"},h={class:"u-card__bd"},f={key:0},x={key:1},_={class:"u-quill-body"},k=e("h1",null,"Button",-1),g={style:{padding:"20px 0"}},w=n('<div><p class="u-mt">普通</p><div class="u-mt"><button class="u-btn">默认按钮</button><button class="u-btn u-btn--blue">u-btn--blue</button><button class="u-btn u-btn--primary">u-btn--primary</button><button class="u-btn u-btn--red u-btn--small u-btn--primary">u-btn--small</button></div></div>',1),C={class:"u-mt"},y=e("p",{class:"u-mt"},"普通组",-1),j={class:"u-btn__group u-mt"},M=e("button",{class:"u-btn u-btn--blue u-btn--primary"},"我被选中",-1),D=e("button",{class:"u-btn"},"普通弹窗",-1),T=n('<h2 class="u-mt">u-field</h2><div class="u-field u-mt"><h3 class="u-field__label">昵称</h3><div class="u-field__content"><span class="u-mr">鼠标划过试试</span><button class="u-btn u-field__hover u-btn--link u-btn--blue">修改</button></div></div>',2),A={class:"u-field"},N=e("h3",{class:"u-field__label"},"修改图片",-1),q={class:"u-field__content"},I=e("button",{class:"u-btn u-field__hover u-btn--link u-btn--blue"},"修改",-1),S={class:"u-field u-mt"},z=e("h3",{class:"u-field__label"},"长图片",-1),L={class:"u-field__content"},Y={style:{"max-height":"300px"},class:"u-scroll"},B=e("h2",{class:"u-mt"},"u-field-small",-1),O=e("div",{class:"u-field u-field--small"},[e("label",{class:"u-field__label"},"自动下载"),e("div",{class:"u-field__content"},[e("label",{class:"u-checkbox"},[e("input",{type:"checkbox"}),e("i",{class:"u-checkbox__icon"}),u(" 开启文件自动下载 ")]),e("div",{class:"u-inline","aria-label":"开启后自动下载",tooltip:"top"},"?")])],-1),V=n('<div class="u-field u-field--small"><label class="u-field__label">多选框</label><div class="u-field__content"><label class="u-checkbox"><input type="checkbox" name="checkbox"><div class="u-checkbox__icon"></div> 选项A </label><label class="u-checkbox u-ml"><input type="checkbox" name="checkbox"><i class="u-checkbox__icon"></i> 选项B </label><label class="u-checkbox u-ml"><input type="checkbox" name="checkbox" disabled><i class="u-checkbox__icon"></i> 选项C </label><label class="u-checkbox u-ml"><input type="checkbox" name="checkbox" checked disabled><i class="u-checkbox__icon"></i> 选项D </label></div></div><div class="u-field u-field--small"><label class="u-field__label">单选框</label><div class="u-field__content"><label class="u-radio"><input type="radio" name="radio"><div class="u-radio__icon"></div> 选项A </label><label class="u-radio u-ml"><input type="radio" name="radio"><i class="u-radio__icon"></i> 选项B </label><label class="u-radio u-ml"><input type="radio" name="radio" disabled><i class="u-radio__icon"></i> 选项C </label><label class="u-radio u-ml"><input type="radio" name="radio" checked disabled><i class="u-radio__icon"></i> 选项D </label></div></div><div class="u-field u-field--small"><label class="u-field__label">文件管理</label><div class="u-field__content"><div><p class="u-inline"><input class="u-input u-input--small" value="C:\\Users\\user\\Documents"></p></div><div class="u-color-light">微信文件默认保存位置</div><div><a class="u-btn u-btn--small">更改</a><a class="u-btn u-btn--small">打开文件夹</a></div></div></div>',3),F=e("h1",null,"弹窗使用和演示",-1),U={class:"u-mt"},E=n('<pre class="line-numbers"><code class="language-javascript">\r\n        \r\n/**\r\n * @namespace util\r\n * @param {String} content : html 内容\r\n * @param {String} title : title 标题\r\n * @param {String} width : 容器 width \r\n * @param {String} height : 容器 height \r\n * @param {String} className : 自写样式 className \r\n * @param {Boolean} shadow : 背景透明度 \r\n * @param {Boolean} shadowClose : 点击背景关闭 默认：false\r\n * @param {Boolean} showClose : 显示close小图标 \r\n * @param {Boolean} extend : 只能手动关闭 大部分默认：false\r\n * @returns {String} index : 窗口索引，用于关闭\r\n */\r\n\r\nutil.toast(content,time)\r\nutil.hideToast(index) // 对所有适用 不穿参数会关闭所有 extend = false 的窗体\r\nutil.showloading(content)\r\nutil.showModal(options)\r\n\r\n/**\r\n * @callback Callback\r\n * @param {Function} success =&gt;(src,index): image src \r\n * @param {Callback} option\r\n */\r\n\r\nutil.uploadAvatar(option)\r\n\r\n/**\r\n * util.alert(option,extend)\r\n * @param extend.confirmText: &#39;确定&#39;,\r\n * @param extend.confirmSkin:&#39;u-btn--blue&#39;,\r\n * @param extend.confirm: {Function},\r\n * @param extend.cancelText: &#39;取消&#39;,\r\n * @param extend.cancelSkin: &#39;&#39;,\r\n * @param extend.cancel: {Function},\r\n */\r\n</code>\r\n</pre><h1>栅格（24）</h1><div class="u-flex u-flex--row xx-shadow"><div class="u-flex-1">1</div><div class="u-flex-2">2</div><div class="u-flex-3">3</div><div class="u-flex-6">6</div><div class="u-flex-4">4</div><div class="u-flex-5">5</div><div class="u-flex-3">3</div><div class="u-flex-12">12</div><div class="u-flex-12">12</div></div><pre>.u-flex--row [.u-flex-1 ... .u-flex-24] </pre><h1>其他</h1><div><span class="u-unread">未读消息 <code>u-unread</code></span><span class="u-ml u-unread" data-unread="99+">显示数字<code>data-unread</code></span></div><hr><p>骨架 <code>u-skeleton</code></p>',8),G={class:"u-skeleton is-loading"},$=n('<p class="u-mt">过渡动画</p><code class="u-mr">u-loading</code><span class="u-loading"><i></i><i></i><i></i></span><code class="u-ml u-mr">u-looping</code><span class="u-looping"><i></i><i></i><i></i><i></i></span><p class="u-mb">加载条 <code>u-progress</code></p><div class="u-progress is-loading" style="width:320px;"><div class="u-progress-bar" style="width:50%;"></div></div>',7);var Q=r(b,[["render",function(a,n,u,r,b,Q){return c(),l("div",null,[e("ul",p,[e("li",m,[e("a",{class:s(["u-tabs__link",{"is-active":"a"===b.tabName}]),onClick:n[0]||(n[0]=a=>b.tabName="a")},"菜单说明",2)]),e("li",v,[e("a",{class:s(["u-tabs__link",{"is-active":"b"===b.tabName}]),onClick:n[1]||(n[1]=a=>b.tabName="b")},"菜单样式",2)])]),e("div",h,["b"===b.tabName?(c(),l("pre",f," .u-tabs .u-tabs__item\r\n .u-tabs .u-tabs__item.is-active\r\n        ")):(c(),l("pre",x," Tab\r\n 需要需要使用vm.data 配合 v-if 来使用\r\n        "))]),e("div",_,[k,e("div",g,[w,e("div",C,[y,e("div",j,[e("button",{class:"u-btn",onClick:n[2]||(n[2]=(...a)=>Q.uploadAvatar&&Q.uploadAvatar(...a))},"上传头像"),M,D])]),e("div",null,[T,e("div",A,[N,e("div",q,[e("img",{src:"https://imgs.aixifan.com/jy9Gvt7hIk-iYn2Qf-iyUvai-zMf2ya-qeeeea.jpg",style:{margin:"0",width:"100%"},onClick:n[3]||(n[3]=a=>r.shaonq.showImageView(a.target))}),I])]),e("div",S,[z,e("div",L,[e("div",Y,[e("img",{src:"https://nim-nosdn.netease.im/MTY3OTkxNjk=/bmltYV8xODI1MjY3MzQ5NV8xNjI4ODIxMzAxNDU2XzVmMDc4OWRlLTAzMzAtNGRmMi1iYzY2LTU2OWEwYTZiYTExMA==?createTime=1628821301390",onClick:n[4]||(n[4]=a=>r.shaonq.showImageView(a.target))})])])]),B,O,V])]),F,e("div",null,[e("button",{class:"u-btn","aria-label":"toast",tooltip:"top",onClick:n[5]||(n[5]=a=>r.shaonq.toast("提示"))},"提示"),e("button",{class:"u-btn","aria-label":"showLoading",tooltip:"top",onClick:n[6]||(n[6]=(...a)=>Q.showLoading&&Q.showLoading(...a))},"加载中"),e("button",{class:"u-btn","aria-label":"hideToast",tooltip:"top",onClick:n[7]||(n[7]=a=>r.shaonq.hideToast())},"关闭其他"),e("button",{class:"u-btn","aria-label":"uploadAvatar",tooltip:"top",onClick:n[8]||(n[8]=(...a)=>Q.uploadAvatar&&Q.uploadAvatar(...a))},"上传头像"),e("button",{class:"u-btn","aria-label":"showContextMenu",tooltip:"top",onClick:n[9]||(n[9]=a=>r.shaonq.toast("右键点击看效果")),onContextmenu:n[10]||(n[10]=t(((...a)=>Q.showContextMenu&&Q.showContextMenu(...a)),["prevent"]))},"右键菜单",32),e("button",{class:"u-btn","aria-label":"showDropdown",tooltip:"top",onClick:n[11]||(n[11]=(...a)=>Q.showDropdown&&Q.showDropdown(...a))},"下拉菜单")]),e("div",U,[e("button",{class:"u-btn","aria-label":"toast",tooltip:"top",onClick:n[12]||(n[12]=a=>r.shaonq.alert("十步杀一人，千里不留行。<br> 事了拂衣去，深藏身与名。"))},"侠客行"),e("button",{class:"u-btn","aria-label":"toast",tooltip:"top",onClick:n[13]||(n[13]=a=>Q.confirmInfo())},"确认信息"),e("button",{class:"u-btn","aria-label":"toast",tooltip:"top",onClick:n[14]||(n[14]=a=>Q.deleteInfo())},"删除提示")]),E,e("div",G,[(c(),l(i,null,o(4,(a=>e("li",{key:a,class:"u-skeleton__item",style:d({width:a>1?"100%":"60%"})},null,4))),64))]),$])])}]]);export{Q as default};
