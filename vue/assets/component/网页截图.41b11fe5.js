import{s as e}from"../shaonq/shaonq.b69e9063.js";import{_ as s}from"../index.4765df57.js";import{q as t,v as a,D as i,l as n}from"../@vue/@vue.89516255.js";import"../vue-router/vue-router.c621da18.js";import"../pinia/pinia.5150f487.js";import"../vue-demi/vue-demi.784001c0.js";import"../nprogress/nprogress.18cafdd9.js";import"../quill/quill.3362dfa5.js";import"../echarts/echarts.22f0db08.js";import"../tslib/tslib.b9ce9c9f.js";import"../zrender/zrender.31b37330.js";import"../vite-plugin-mock/vite-plugin-mock.b4540423.js";import"../mockjs/mockjs.56624cf4.js";import"../path-to-regexp/path-to-regexp.dea237f3.js";const o={setup:()=>({captureCanvas({el:s,success:t}){const a=e.dom,{loadJs:i}=e;!async function(){"undefined"==typeof html2canvas&&await i("https://unpkg.com/html2canvas@1.0.0-rc.7/dist/html2canvas.min.js");const e=a.position(s);window.scrollTo(e.pageXOffset,e.top);const n=document.createElement("canvas"),o=window.devicePixelRatio||1,l=e.width*o,c=e.height*o;n.width=2*l,n.height=2*c,n.style.width=l+"px",n.style.height=c+"px";n.getContext("2d").scale(2,2),window.html2canvas(s,{canvas:n,background:"#FFFFFF",scrollY:0,scrollX:0,width:l,height:c,useCORS:!0}).then(t)}()},createPDF({canvas:s,pdfName:t}){const{loadJs:a}=e;!async function(){"undefined"==typeof jsPDF&&await a("https://unpkg.com/jspdf@1.3.1/dist/jspdf.min.js");const e=594.3,i=840.51,n=s.height*(e/s.width),o=e,l=i,c=s.toDataURL("image/jpeg",.83),d=Math.ceil(n/l);let p=new window.jsPDF("","pt","a4");for(let s=1;s<=d;s++){const e=-(s-1)*l;if(l-(s*l-n)<5)return;p.addImage(c,"JPEG",0,e,o,n),s!==d&&p.addPage()}p.save(t+".pdf"),p=s=null}()},appendCanvas(){const s=e.dom,t=s.el("#qq");s.position(t),this.captureCanvas({el:t,success:e=>{const t=e.toDataURL("image/jpeg",.83),a=new Image;a.src=t,a.onload=()=>s.append(a,s.el("#qq")),s.on(a,"click",this.imageView)}})},downloadPDF(){const s=e.dom.el("#qq");this.captureCanvas({el:s,success:s=>{this.createPDF({canvas:s,pdfName:e.date.today()})}})},imageView(s){e.showImageView(s.target)}})},l={class:"u-quill-body"},c={id:"qq"},d=a("h1",null,"网页截图",-1),p=a("ol",null,[a("li",null,[a("code",null,"html2canvas.js"),i(" 网页转换为图片")]),a("li",null,[a("code",null,"jspdf.js"),i(" 图片转换为pdf文件")])],-1),r=a("hr",null,null,-1),m=a("hr",null,null,-1),u={class:"u-btn__group u-mb u-ml"};var h=s(o,[["render",function(e,s,i,o,h,f){return n(),t("div",null,[a("div",l,[a("div",c,[d,p,r,a("img",{src:"https://imgs.aixifan.com/jy9Gvt7hIk-iYn2Qf-iyUvai-zMf2ya-qeeeea.jpg",onClick:s[0]||(s[0]=(...e)=>o.imageView&&o.imageView(...e))}),m,a("p",{onClick:s[1]||(s[1]=s=>e.$util.toast("123"))},"点击测试↓")])]),a("div",u,[a("a",{class:"u-btn",onClick:s[2]||(s[2]=e=>o.appendCanvas())},"生成截图"),a("a",{class:"u-btn",onClick:s[3]||(s[3]=e=>o.downloadPDF())},"下载PDF")])])}]]);export{h as default};
