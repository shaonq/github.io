import{s as e}from"../shaonq/shaonq.754e411d.js";import{_ as t}from"../index.9b5e614d.js";import{q as a,v as s,D as i,l}from"../@vue/@vue.206ece97.js";import"../vue-router/vue-router.f52d84b4.js";import"../pinia/pinia.589cd647.js";import"../vue-demi/vue-demi.784001c0.js";import"../quill/quill.3362dfa5.js";import"../nprogress/nprogress.18cafdd9.js";import"../echarts/echarts.22f0db08.js";import"../tslib/tslib.b9ce9c9f.js";import"../zrender/zrender.31b37330.js";import"../vite-plugin-mock/vite-plugin-mock.b4540423.js";import"../mockjs/mockjs.56624cf4.js";import"../path-to-regexp/path-to-regexp.dea237f3.js";const n={setup:()=>({captureCanvas({el:t,success:a}){let s=e.dom,{loadJs:i}=e;!async function(){"undefined"==typeof html2canvas&&await i("https://unpkg.com/html2canvas@1.0.0-rc.7/dist/html2canvas.min.js");let e=s.position(t);window.scrollTo(e.pageXOffset,e.top);let l=document.createElement("canvas"),n=window.devicePixelRatio||1,o=e.width*n,d=e.height*n;l.width=2*o,l.height=2*d,l.style.width=o+"px",l.style.height=d+"px",l.getContext("2d").scale(2,2),html2canvas(t,{canvas:l,background:"#FFFFFF",scrollY:0,scrollX:0,width:o,height:d,useCORS:!0}).then(a)}()},createPDF({canvas:t,pdfName:a}){let{loadJs:s}=e;!async function(){"undefined"==typeof jsPDF&&await s("https://unpkg.com/jspdf@1.3.1/dist/jspdf.min.js");let e=594.3,i=840.51,l=t.height*(e/t.width),n=e,o=i,d=t.toDataURL("image/jpeg",.83),c=Math.ceil(l/o),p=new jsPDF("","pt","a4");for(let t=1;t<=c;t++){let e=-(t-1)*o;if(o-(t*o-l)<5)return;p.addImage(d,"JPEG",0,e,n,l),t!==c&&p.addPage()}p.save(a+".pdf"),p=t=null}()},appendCanvas(){let t=e.dom,a=t.el("#qq");t.position(a),this.captureCanvas({el:a,success:e=>{let a=e.toDataURL("image/jpeg",.83),s=new Image;s.src=a,s.onload=()=>t.append(s,t.el("#qq")),t.on(s,"click",this.imageView)}})},downloadPDF(){let t=e.dom.el("#qq");this.captureCanvas({el:t,success:t=>{this.createPDF({canvas:t,pdfName:e.date.today()})}})},imageView(t){e.showImageView(t.target)}})},o={class:"u-quill-body"},d={id:"qq"},c=s("h1",null,"网页截图",-1),p=s("ol",null,[s("li",null,[s("code",null,"html2canvas.js"),i(" 网页转换为图片")]),s("li",null,[s("code",null,"jspdf.js"),i(" 图片转换为pdf文件")])],-1),r=s("hr",null,null,-1),m=s("hr",null,null,-1),u={class:"u-btn__group u-mb u-ml"};var h=t(n,[["render",function(e,t,i,n,h,g){return l(),a("div",null,[s("div",o,[s("div",d,[c,p,r,s("img",{onClick:t[0]||(t[0]=(...e)=>n.imageView&&n.imageView(...e)),src:"https://imgs.aixifan.com/jy9Gvt7hIk-iYn2Qf-iyUvai-zMf2ya-qeeeea.jpg"}),m,s("p",{onClick:t[1]||(t[1]=t=>e.$util.toast("123"))},"点击测试↓")])]),s("div",u,[s("a",{class:"u-btn",onClick:t[2]||(t[2]=e=>n.appendCanvas())},"生成截图"),s("a",{class:"u-btn",onClick:t[3]||(t[3]=e=>n.downloadPDF())},"下载PDF")])])}]]);export{h as default};
