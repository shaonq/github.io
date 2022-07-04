import{d as e}from"../pinia/pinia.5150f487.js";import{s as t}from"../shaonq/shaonq.b69e9063.js";import{_ as n}from"../index.47cd64e4.js";import{f as o,r,L as s,d as i,I as a,q as u,v as c,z as l,D as m,l as p}from"../@vue/@vue.89516255.js";import"../vue-demi/vue-demi.784001c0.js";import"../vue-router/vue-router.c621da18.js";import"../quill/quill.13eb9602.js";import"../mockjs/mockjs.69e5819b.js";import"../echarts/echarts.22f0db08.js";import"../tslib/tslib.b9ce9c9f.js";import"../zrender/zrender.31b37330.js";import"../vite-plugin-mock/vite-plugin-mock.5f58db78.js";import"../path-to-regexp/path-to-regexp.dea237f3.js";const d=e("counter",{state:()=>({count:0}),actions:{increment(){this.count++}},getters:{doubleCount:e=>2*e.counter}}),h=o({setup(){const e=d(),n=r(t.date.today("yyyy-MM-dd HH:mm:ss")),o=setInterval((()=>{n.value=t.date.today("yyyy-MM-dd HH:mm:ss")}),1e3);return s((()=>{o&&clearInterval(o)})),{time:n,count:i((()=>e.count)),actionClick:()=>{e.increment()}}}}),v={class:"u-quill-body"},y=a('<h1> vue3.x <br></h1><ul style><li style><a href="https://v3.cn.vuejs.org/api/instance-methods.html#watch">模板文档</a></li><li style><a href="https://v3.cn.vuejs.org/api/composition-api.html#setup">API文档</a></li></ul><pre>import { defineComponent, ref, computed, onDeactivated } from &#39;vue&#39;\nimport shaonq from &#39;shaonq&#39;\nexport default defineComponent({\n  setup() {\n    const time = ref(shaonq.date.today(&#39;yyyy-MM-dd HH:mm:ss&#39;))\n    const timer = setInterval(() =&gt; {\n      time.value = shaonq.date.today(&#39;yyyy-MM-dd HH:mm:ss&#39;)\n    }, 1000)\n    onDeactivated(() =&gt; {\n      timer &amp;&amp; clearInterval(timer)\n    })\n    return {\n      time,\n    }\n  },\n})\n</pre>',3),f=a('<h1 style>vue-route@4 路由配置</h1><ul style><li style="line-height:24px;"><a href="https://router.vuejs.org/zh/guide/migration/index.html">官方文档</a></li></ul><pre><code class="language-javascript">\nimport { createRouter, createWebHashHistory } from &#39;vue-router&#39;\nconst router = createRouter({\n  history: createWebHashHistory('/vue/'),\n  routes:[\n    { path: &#39;/:pathMatch(.*)*&#39;, name: &#39;not-found&#39;, component: import( /**NotFound.vue*/ ) },\n  ],\n  linkActiveClass: &#39;is-active&#39;,\n  linkExactActiveClass: &#39;is-exact-active&#39;,\n  scrollBehavior() {\n    return {\n      el: &#39;#app&#39;,\n      top: 0,\n      behavior: &#39;smooth&#39;,\n    }\n  },\n})\n   </code> </pre><h1 style>pinia 状态管理</h1><ul style><li style="line-height:24px;"><a href="https://pinia.web3doc.top/">中文文档</a></li></ul><pre><code class="language-javascript">\n// stores/counter.js\nimport { defineStore } from &#39;pinia&#39;\n\nexport const useCounterStore = defineStore(&#39;counter&#39;, {\n  state: () =&gt; {\n    return { count: 0 }\n  },\n  actions: {    \n    increment() {\n      <i style="color:#ff4e20;">// 支持 async</i>\n      this.count++\n    },\n  },\n  getters: {\n    // 自动将返回类型推断为数字\n    doubleCount(state) {\n      return state.counter * 2\n    },\n    // 返回类型必须明确设置\n    doublePlusOne(): number {\n      return this.counter * 2 + 1\n    },\n  }  \n})\n\n// page.vue\nimport { useCounterStore } from &#39;@/stores/counter&#39;\nexport default {\n  setup() {\n    <i style="color:#ff4e20;">// useCounterStore 必须在 function 内部使用</i>\n    const counter = useCounterStore()\n\n    counter.count++\n    // 带自动补全 ✨\n    counter.$patch({ count: counter.count + 1 })\n    // 或使用 action 代替\n    counter.increment()\n  },\n}\n\n   </code> </pre>',6),b=c("h1",null,"END",-1);var g=n(h,[["render",function(e,t,n,o,r,s){return p(),u("div",v,[y,c("blockquote",null,"demo => "+l(e.time),1),f,c("blockquote",null,[m("demo => "+l(e.count)+" ",1),c("code",{class:"u-btn u-ml",onClick:t[0]||(t[0]=(...t)=>e.actionClick&&e.actionClick(...t))},"counter.increment()")]),b])}]]);export{g as default};
