import{_ as B}from"./index.ebd9b1da.js";import{e as y,f as r,F as z,g as T,B as S,C as A,o as I,n as W,h as j}from"./vendor.c8610fdc.js";/*!https://github.com/dulnan/lazy-brush is licensed under the MIT License */class M{constructor(t,e){this.x=t,this.y=e}}class C extends M{update(t){this.x=t.x,this.y=t.y}moveByAngle(t,e){const s=t+Math.PI/2;this.x=this.x+Math.sin(s)*e,this.y=this.y-Math.cos(s)*e}equalsTo(t){return this.x===t.x&&this.y===t.y}getDifferenceTo(t){return new M(this.x-t.x,this.y-t.y)}getDistanceTo(t){const e=this.getDifferenceTo(t);return Math.sqrt(Math.pow(e.x,2)+Math.pow(e.y,2))}getAngleTo(t){const e=this.getDifferenceTo(t);return Math.atan2(e.y,e.x)}toObject(){return{x:this.x,y:this.y}}}class O{constructor({radius:t=30,enabled:e=!0,initialPoint:s={x:0,y:0}}={}){this.radius=t,this._isEnabled=e,this.pointer=new C(s.x,s.y),this.brush=new C(s.x,s.y),this.angle=0,this.distance=0,this._hasMoved=!1}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}isEnabled(){return this._isEnabled}setRadius(t){this.radius=t}getRadius(){return this.radius}getBrushCoordinates(){return this.brush.toObject()}getPointerCoordinates(){return this.pointer.toObject()}getBrush(){return this.brush}getPointer(){return this.pointer}getAngle(){return this.angle}getDistance(){return this.distance}brushHasMoved(){return this._hasMoved}update(t,{both:e=!1}={}){return this._hasMoved=!1,this.pointer.equalsTo(t)&&!e?!1:(this.pointer.update(t),e?(this._hasMoved=!0,this.brush.update(t),!0):(this._isEnabled?(this.distance=this.pointer.getDistanceTo(this.brush),this.angle=this.pointer.getAngleTo(this.brush),this.distance>this.radius&&(this.brush.moveByAngle(this.angle,this.distance-this.radius),this._hasMoved=!0)):(this.distance=0,this.angle=0,this.brush.update(t),this._hasMoved=!0),!0))}}class R{constructor({canvas:t,width:e=t.scrollWidth,height:s=t.scrollHeight,color:g="#fc4639",backgroundImage:v,lineWidth:c}){this.isStart=!1,this.canvas=t,this.setColor(g);const i=this.ctx=t.getContext("2d");this.backgroundImage=v,this.setArea({width:e,height:s}),this.setLineWidth(c),this.clearCanvas();const w=(h,o)=>({x:h.x+(o.x-h.x)/2,y:h.y+(o.y-h.y)/2});let n=[],u=new O({radius:5,enabled:!0,initialPoint:{x:0,y:0}});const k=(h,o)=>{h=this.dpiSize(h),o=this.dpiSize(o);let f=u.update({x:h,y:o});const _=!u.isEnabled();if((f||_)&&n.push(u.brush.toObject()),u.brushHasMoved()||_){this.clearCanvas(),this.putImgData(this.tempImgData),n.push(u.brush.toObject());let l=n[0],m=n[1];i.moveTo(m.x,m.y),i.beginPath();for(var d=1,x=n.length;d<x;d++){var b=w(l,m);i.quadraticCurveTo(l.x,l.y,b.x,b.y),l=n[d],m=n[d+1]}i.lineTo(l.x,l.y),i.stroke()}};let p=this.isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),[F,E,L]=[p?"touchmove":"mousemove",p?"touchstart":"mousedown",p?"touchend":"mouseup"];t.addEventListener(F,h=>{let{offsetX:o,offsetY:f}=h;if(p){let{clientX:_,clientY:d}=h.changedTouches[0],{top:x,left:b}=h.target.getBoundingClientRect();o=_-b,f=d-x}this.isStart&&(k(o,f),h.preventDefault())},!1),document.addEventListener(E,h=>{this.isStart=!0,i.beginPath(),i.strokeStyle=this.color,i.lineCap="round",i.lineJoin="round",i.lineWidth=Number((this.lineWidth/this.dpi).toFixed(2))},!1),document.addEventListener(L,()=>{this.isStart=!1,n.length=0,this.tempImgData=i.getImageData(0,0,t.width,t.height)},!1)}dpiSize(t){return t/this.dpi*this.ratio}setColor(t){this.color=t}setArea({width:t,height:e}){this.dpi=window.innerWidth>1024?1:window.devicePixelRatio;const s=this.canvas;s.width=t,s.height=e,this.ratio=Number(t/s.offsetWidth),s.style.width=s.offsetWidth+"px",s.style.height=s.offsetHeight+"px",this.ctx.scale(this.dpi,this.dpi)}setLineWidth(t=3){this.lineWidth=t}clearCanvas(t){if(t&&(this.tempImgData=null),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.backgroundImage){let e=this.canvas.width/this.backgroundImage.width;this.backgroundImage&&this.ctx.drawImage(this.backgroundImage,0,0,this.backgroundImage.width*e,this.backgroundImage.height*e)}}putImgData(t){t&&this.ctx.putImageData(t,0,0)}exportPNG(t=.91){return canvas.toDataURL("image/png",t)}}const q={data(){return{colors:["#212121","#2463fe","#57c860","#f5cb37","#fc4639"],colorsIndex:0}},methods:{dataInit(){let a=this.$refs.canvas;this.hb=new R({canvas:a}),this.setColorIndex(this.colors.length-1)},setColorIndex(a=0){this.colorsIndex=a,this.hb.setColor(this.colors[a])}},mounted(){this.dataInit()}},D=a=>(S("data-v-4df24a2c"),a=a(),A(),a),H={class:"u-card"},N={class:"u-card__hd"},P=D(()=>r("cite",{class:"u-card__title u-flex__item"},"\u753B\u7B14\u5DE5\u5177",-1)),$=D(()=>r("svg",{t:"1633922835611",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5534",width:"32",height:"32"},[r("path",{d:"M584.7 768.3L246.2 429.8 577.6 98.5c3.9-3.9 10.2-3.9 14.1 0L916 422.8c3.9 3.9 3.9 10.2 0 14.1L584.7 768.3z",fill:"#51B5ED","p-id":"5535"}),r("path",{d:"M880.8 387.5L821 327.7c23.4 23.4 23.4 61.2 0 84.6L524.9 708.5l59.8 59.8 296.1-296.1c23.4-23.4 23.4-61.3 0-84.7z",fill:"#2996D3","p-id":"5536"}),r("path",{d:"M408.4 896.6L117.9 606.1c-3.9-3.9-3.9-10.2 0-14.1l145.2-145.2 304.6 304.6-145.2 145.2c-3.9 3.9-10.2 3.9-14.1 0z",fill:"#E4EFF4","p-id":"5537"}),r("path",{d:"M263.2 446.8L508 691.6l-110 110c-23.4 23.4-61.2 23.4-84.6 0l59.8 59.8c23.4 23.4 61.2 23.4 84.6 0l110-110-304.6-304.6z",fill:"#C1DFEA","p-id":"5538"}),r("path",{d:"M674.3 263.5m-12 0a12 12 0 1 0 24 0 12 12 0 1 0-24 0Z",fill:"#FFFFFF","p-id":"5539"}),r("path",{d:"M449.3 321.3c-3.1 0-6.1-1.2-8.5-3.5-4.7-4.7-4.7-12.2 0-16.9l135.4-135.4c4.5-4.5 12.4-4.5 16.9 0l50.8 50.8c4.7 4.7 4.7 12.2 0 16.9-4.7 4.7-12.2 4.7-16.9 0l-42.3-42.3-126.9 126.9c-2.4 2.3-5.4 3.5-8.5 3.5z",fill:"#FFFFFF","p-id":"5540"})],-1)),X=[$],Y=["onClick"],G={class:"u-card__bd",style:{padding:"0",background:"rgba(0, 0, 0, 0.01)"}},J={style:{height:"600px",width:"100%"},ref:"canvas"};function U(a,t,e,s,g,v){return I(),y("div",null,[r("div",H,[r("div",N,[P,r("div",{title:"\u6E05\u9664\u753B\u677F",onClick:t[0]||(t[0]=c=>a.hb.clearCanvas(!0)),class:"rubber"},X),(I(!0),y(z,null,T(g.colors,(c,i)=>(I(),y("div",{style:W({background:c,color:c}),class:j([{active:g.colorsIndex===i},"u-ml dot"]),key:i,onClick:w=>v.setColorIndex(i)},null,14,Y))),128))]),r("div",G,[r("canvas",J,null,512)])])])}var K=B(q,[["render",U],["__scopeId","data-v-4df24a2c"]]);export{K as default};
