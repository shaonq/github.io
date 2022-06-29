var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,t=(a,l,s)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[l]=s,i=(e,a)=>{for(var l in a||(a={}))r.call(a,l)&&t(e,l,a[l]);if(s)for(var l of s(a))o.call(a,l)&&t(e,l,a[l]);return e};import{u as n}from"../vue-router/vue-router.9ede2605.js";import{o as u,r as d,f as c,A as p,C as m,B as v,Q as f,D as g,k as h,E as b,G as y,M as k,I as w,u as j,K as V,J as C}from"../@vue/@vue.fdb1e404.js";import{u as _}from"../index.63797a4a.js";import{M as x}from"../tdesign-vue-next/tdesign-vue-next.d0b261c7.js";import"../shaonq/shaonq.b69e9063.js";import"../pinia/pinia.b403ddbc.js";import"../vue-demi/vue-demi.784001c0.js";import"../nprogress/nprogress.18cafdd9.js";import"../quill/quill.3362dfa5.js";import"../echarts/echarts.22f0db08.js";import"../tslib/tslib.b9ce9c9f.js";import"../zrender/zrender.31b37330.js";import"../vite-plugin-mock/vite-plugin-mock.b4540423.js";import"../mockjs/mockjs.56624cf4.js";import"../path-to-regexp/path-to-regexp.dea237f3.js";import"../tdesign-icons-vue-next/tdesign-icons-vue-next.b8d224dd.js";const q=(e=60)=>{let a;u((()=>{clearInterval(a)}));const l=d(0);return[l,()=>{l.value=e,a=setInterval((()=>{l.value>0?l.value-=1:(clearInterval(a),l.value=0)}),1e3)}]},z={class:"check-container remember-pwd"},O=k("记住账号"),U=b("span",{class:"tip"},"忘记账号？",-1),D={class:"tip-container"},S=b("span",{class:"tip"},"请使用微信扫一扫登录",-1),I={class:"refresh"},T=k("刷新 "),P=k(" 登录 "),R={class:"switch-container"},$=c({setup(e){const a=_(),l={phone:[{required:!0,message:"手机号必填",type:"error"}],account:[{required:!0,message:"账号必填",type:"error"}],password:[{required:!0,message:"密码必填",type:"error"}],verifyCode:[{required:!0,message:"验证码必填",type:"error"}]},s=d("password"),r=d(i({},{phone:"",account:"admin",password:"admin",verifyCode:"",checked:!1})),o=d(!1),[t,u]=q(),c=e=>{s.value=e},$=n(),A=async({validateResult:e})=>{if(!0===e)try{await a.login(r.value),x.success("登陆成功"),$.push({path:"/dashboard/base"})}catch(l){x.error(l.message)}};return(e,a)=>{const i=p("t-icon"),n=p("t-input"),d=p("t-form-item"),_=p("t-checkbox"),x=p("qrcode-vue"),q=p("t-button"),$=p("t-form");return m(),v($,{ref:(e,a)=>{a.form=e},class:C(["item-container",`login-${s.value}`]),data:r.value,rules:l,"label-width":"0",onSubmit:A},{default:f((()=>["password"==s.value?(m(),g(y,{key:0},[h(d,{name:"account"},{default:f((()=>[h(n,{modelValue:r.value.account,"onUpdate:modelValue":a[0]||(a[0]=e=>r.value.account=e),size:"large",placeholder:"请输入账号：admin"},{"prefix-icon":f((()=>[h(i,{name:"user"})])),_:1},8,["modelValue"])])),_:1}),h(d,{name:"password"},{default:f((()=>[h(n,{modelValue:r.value.password,"onUpdate:modelValue":a[2]||(a[2]=e=>r.value.password=e),size:"large",type:o.value?"text":"password",clearable:"",placeholder:"请输入登录密码：admin"},{"prefix-icon":f((()=>[h(i,{name:"lock-on"})])),"suffix-icon":f((()=>[h(i,{name:o.value?"browse":"browse-off",onClick:a[1]||(a[1]=e=>o.value=!o.value)},null,8,["name"])])),_:1},8,["modelValue","type"])])),_:1}),b("div",z,[h(_,null,{default:f((()=>[O])),_:1}),U])],64)):"qrcode"==s.value?(m(),g(y,{key:1},[b("div",D,[S,b("span",I,[T,h(i,{name:"refresh"})])]),h(x,{value:"",size:192,level:"H"})],64)):(m(),v(d,{key:2,class:"verification-code",name:"verifyCode"},{default:f((()=>[h(n,{modelValue:r.value.verifyCode,"onUpdate:modelValue":a[3]||(a[3]=e=>r.value.verifyCode=e),size:"large",placeholder:"请输入验证码"},null,8,["modelValue"]),h(q,{variant:"outline",disabled:j(t)>0,onClick:j(u)},{default:f((()=>[k(w(0==j(t)?"发送验证码":`${j(t)}秒后可重发`),1)])),_:1},8,["disabled","onClick"])])),_:1})),"qrcode"!==s.value?(m(),v(d,{key:3,class:"btn-container"},{default:f((()=>[h(q,{block:"",size:"large",type:"submit"},{default:f((()=>[P])),_:1})])),_:1})):V("",!0),b("div",R,["password"!==s.value?(m(),g("span",{key:0,class:"tip",onClick:a[4]||(a[4]=e=>c("password"))},"使用账号密码登录")):V("",!0),"qrcode"!==s.value?(m(),g("span",{key:1,class:"tip",onClick:a[5]||(a[5]=e=>c("qrcode"))},"使用微信扫码登录")):V("",!0),"phone"!==s.value?(m(),g("span",{key:2,class:"tip",onClick:a[6]||(a[6]=e=>c("phone"))},"使用手机号登录")):V("",!0)])])),_:1},8,["class","data"])}}}),A=k("我已阅读并同意 "),E=k(),M=b("span",null,"TDesign服务协议",-1),B=k(" 和 "),G=b("span",null,"TDesign 隐私声明",-1),H=k(" 注册 "),J={class:"switch-container"},K=c({emits:["registerSuccess"],setup(e,{emit:a}){const l={phone:[{required:!0,message:"手机号必填",type:"error"}],email:[{required:!0,message:"邮箱必填",type:"error"},{email:!0,message:"请输入正确的邮箱",type:"warning"}],password:[{required:!0,message:"密码必填",type:"error"}],verifyCode:[{required:!0,message:"验证码必填",type:"error"}]},s=d("phone"),r=d(),o=d(i({},{phone:"",email:"",password:"",verifyCode:"",checked:!1})),t=d(!1),[n,u]=q(),c=({validateResult:e})=>{if(!0===e){if(!o.value.checked)return void x.error("请同意TDesign服务协议和TDesign 隐私声明");x.success("注册成功"),a("registerSuccess")}};return(e,a)=>{const i=p("t-icon"),d=p("t-input"),g=p("t-form-item"),y=p("t-button"),_=p("t-checkbox"),x=p("t-form");return m(),v(x,{ref:(e,a)=>{a.form=e,r.value=e},class:C(["item-container",`register-${s.value}`]),data:o.value,rules:l,"label-width":"0",onSubmit:c},{default:f((()=>["phone"==s.value?(m(),v(g,{key:0,name:"phone"},{default:f((()=>[h(d,{modelValue:o.value.phone,"onUpdate:modelValue":a[0]||(a[0]=e=>o.value.phone=e),maxlength:11,size:"large",placeholder:"请输入您的手机号"},{"prefix-icon":f((()=>[h(i,{name:"user"})])),_:1},8,["modelValue"])])),_:1})):V("",!0),"email"==s.value?(m(),v(g,{key:1,name:"email"},{default:f((()=>[h(d,{modelValue:o.value.email,"onUpdate:modelValue":a[1]||(a[1]=e=>o.value.email=e),type:"text",size:"large",placeholder:"请输入您的邮箱"},{"prefix-icon":f((()=>[h(i,{name:"mail"})])),_:1},8,["modelValue"])])),_:1})):V("",!0),h(g,{name:"password"},{default:f((()=>[h(d,{modelValue:o.value.password,"onUpdate:modelValue":a[3]||(a[3]=e=>o.value.password=e),size:"large",type:t.value?"text":"password",clearable:"",placeholder:"请输入登录密码"},{"prefix-icon":f((()=>[h(i,{name:"lock-on"})])),"suffix-icon":f((()=>[h(i,{name:t.value?"browse":"browse-off",onClick:a[2]||(a[2]=e=>t.value=!t.value)},null,8,["name"])])),_:1},8,["modelValue","type"])])),_:1}),"phone"==s.value?(m(),v(g,{key:2,class:"verification-code",name:"verifyCode"},{default:f((()=>[h(d,{modelValue:o.value.verifyCode,"onUpdate:modelValue":a[4]||(a[4]=e=>o.value.verifyCode=e),size:"large",placeholder:"请输入验证码"},null,8,["modelValue"]),h(y,{variant:"outline",disabled:j(n)>0,onClick:j(u)},{default:f((()=>[k(w(0==j(n)?"发送验证码":`${j(n)}秒后可重发`),1)])),_:1},8,["disabled","onClick"])])),_:1})):V("",!0),h(g,{class:"check-container",name:"checked"},{default:f((()=>[h(_,{modelValue:o.value.checked,"onUpdate:modelValue":a[5]||(a[5]=e=>o.value.checked=e)},{default:f((()=>[A])),_:1},8,["modelValue"]),E,M,B,G])),_:1}),h(g,null,{default:f((()=>[h(y,{block:"",size:"large",type:"submit"},{default:f((()=>[H])),_:1})])),_:1}),b("div",J,[b("span",{class:"tip",onClick:a[6]||(a[6]=e=>{return a="phone"==s.value?"email":"phone",r.value.reset(),void(s.value=a);var a})},w("phone"==s.value?"使用邮箱注册":"使用手机号注册"),1)])])),_:1},8,["class","data"])}}}),L={class:"login-wrapper"},Q={class:"login-container"},F={class:"title-container"},N=b("h1",{class:"title margin-no"},"登录到",-1),W=b("h1",{class:"title"},"TDesign Starter",-1),X={class:"sub-title"},Y={class:"tip"},Z=b("footer",{class:"copyright"},"Copyright @ 2021-2022 Tencent. All Rights Reserved",-1);const ee=c((ae=i({},{name:"LoginIndex"}),a(ae,l({setup:function(e){const a=d("login"),l=e=>{a.value=e};return(e,s)=>{const r=p("login-header"),o=p("tdesign-setting");return m(),g("div",L,[h(r),b("div",Q,[b("div",F,[N,W,b("div",X,[b("p",Y,w("register"==a.value?"已有账号?":"没有账号吗?"),1),b("p",{class:"tip",onClick:s[0]||(s[0]=e=>l("register"==a.value?"login":"register"))},w("register"==a.value?"登录":"注册新账号"),1)])]),"login"===a.value?(m(),v($,{key:0})):(m(),v(K,{key:1,onRegisterSuccess:s[1]||(s[1]=e=>l("login"))})),h(o)]),Z])}}}))));var ae;export{ee as default};
