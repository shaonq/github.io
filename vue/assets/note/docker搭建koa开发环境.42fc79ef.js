import{_ as r}from"../index.cea254c7.js";import{D as o,C as t,P as n}from"../@vue/@vue.7bfd4ab2.js";import"../shaonq/shaonq.b69e9063.js";import"../vue-router/vue-router.24db3005.js";import"../pinia/pinia.5670f9ca.js";import"../vue-demi/vue-demi.784001c0.js";import"../nprogress/nprogress.18cafdd9.js";import"../quill/quill.3362dfa5.js";import"../echarts/echarts.22f0db08.js";import"../tslib/tslib.b9ce9c9f.js";import"../zrender/zrender.31b37330.js";import"../vite-plugin-mock/vite-plugin-mock.b4540423.js";import"../mockjs/mockjs.56624cf4.js";import"../path-to-regexp/path-to-regexp.dea237f3.js";const e={mounted(){}},s={class:"u-quill-body"},a=[n('<h1>docker搭建koa开发环境</h1><h1>工具安装</h1><ul><li>docker windows<a href="https://www.docker.com/products/docker-desktop" target="_blank">下载地址</a></li></ul><hr><ol><li><code>images: node:10.16.0 + nginx +mysql:5.6 </code></li><li><code>koa: koa + koa-router + mysql + promise-mysql</code></li><li><code>docker-compose</code></li></ol><figure contenteditable="false" tabindex="-1"><hr></figure><h1>根目录文件</h1><ul><li>server.js</li></ul><pre>const Koa = require(&#39;koa&#39;)\r\nconst Router = require(&#39;koa-router&#39;)\r\nconst mysql = require(&#39;promise-mysql&#39;)\r\nconst app = new Koa()\r\nconst router = new Router()\r\n\r\n// 根路由\r\nrouter.get(&#39;/&#39;, async ctx=&gt;{ctx.body = &#39;hello word&#39;});\r\n\r\n// 测试mysql连接路由\r\nrouter.get(&#39;/db&#39;, async ctx=&gt;{\r\nlet db = await mysql.createPool({\r\n\thost: &#39;mysql&#39;,\r\n\tport: 3306,\r\n\tuser: &#39;root&#39;,\r\n\tpassword: &#39;123456&#39;\r\n})\r\nlet res = await db.query(&#39;SHOW DATABASES&#39;)\r\nctx.body = res\r\n})\r\n\r\napp.use(router.routes())\r\napp.listen(3000)\r\n</pre><ul><li>package.json</li></ul><pre>{\r\n  &quot;name&quot;: &quot;docker-koa&quot;,\r\n  &quot;version&quot;: &quot;1.0.0&quot;,\r\n  &quot;description&quot;: &quot;&quot;,\r\n  &quot;main&quot;: &quot;index.js&quot;,\r\n  &quot;scripts&quot;: {\r\n    &quot;start&quot;: &quot;nodemon server.js&quot;\r\n  },\r\n  &quot;keywords&quot;: [],\r\n  &quot;author&quot;: &quot;shaonq&quot;,\r\n  &quot;license&quot;: &quot;MIT&quot;,\r\n  &quot;dependencies&quot;: {\r\n    &quot;koa&quot;: &quot;^2.13.1&quot;,\r\n    &quot;koa-router&quot;: &quot;^10.0.0&quot;,\r\n    &quot;nodemon&quot;: &quot;^2.0.12&quot;,\r\n    &quot;promise-mysql&quot;: &quot;^5.0.3&quot;\r\n  }\r\n}\r\n</pre><ul><li>.dockerignore</li></ul><pre>*.log\r\n.idea\r\n.node_modules\r\nnode_modules\r\n.vscode\r\n</pre><ul><li>docker-compose.yml</li></ul><pre>version: &quot;3&quot;\r\nservices:\r\n        koa:\r\n                image: node:10.16.0                          #node镜像名称\r\n                working_dir: /koa                            #工作目录的路径\r\n                build:                                       #构建镜像\r\n                     context: ./                            #上下文环境\r\n                     dockerfile: ./compose/koa.Dockerfile            #Dockerfile路径\r\n                volumes:                                     #挂载点 [格式] 本地文件:映射路径\r\n                        - .:/koa                             # \r\n                ports:                                       #端口映射\r\n                        - &quot;3000:3000&quot;                        #本地端口:容器端口\r\n                command: npm start #这条命令会在工作目录下执行\r\n        mysql:\r\n                image: mysql:5.6\r\n                volumes:\r\n                        - ./mysql:/var/lib/mysql\r\n                command: --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci\r\n                restart: always\r\n                environment:\r\n                        - MYSQL_ROOT_PASSWORD=123456         #root password \r\n                        - MYSQL_DATABASE=db_database\r\n                ports:\r\n                        - &quot;3306:3306&quot;\r\n        nginx:\r\n                image: nginx:latest\r\n                volumes:\r\n                        - ./static:/code/static\r\n                        - ./compose/nginx.conf:/etc/nginx/conf.d/default.conf\r\n                ports:\r\n                        - &quot;80:80&quot;\r\n</pre><ul><li>compose/nginx.conf</li></ul><pre>server {\r\n    listen       80;\r\n    server_name  localhost;\r\n\r\n    location /static {\r\n        alias /koa/static;             # 代理访问/koa/下的static\r\n    }\r\n\r\n    location / {\r\n        proxy_pass http://koa:3000;    #  docker-compose.yml koa\r\n    }\r\n}\r\n\t\t\t</pre><ul><li>compose/koa.Dockerfile</li></ul><pre>FROM node:10.16.0                       # 使用的基础镜像文件\r\nWORKDIR /koa                            # 工作目录的路径\r\nCOPY ./package.json ./server.js /koa/   # 拷贝文件到/koa\r\nCOPY ./static /koa/static               # 拷贝文件到/koa/static\r\nRUN sed -i &#39;s/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g&#39; /etc/apk/repositories \\\r\n\t&amp;&amp; apk update &amp;&amp; apk add yarn \\\r\n\t&amp;&amp; yarn config set registry https://registry.npm.taobao.org/ \\\r\n\t&amp;&amp; yarn       # 设置镜像源到国内, 更新; 安装yarn,yarn设置国内镜像源，安装依赖\r\nCMD [&quot;npm&quot;, &quot;start&quot;]  # 容器启动时运行\r\n\t\t\t</pre>',19)];var u=r(e,[["render",function(r,n,e,u,i,l){return t(),o("div",s,a)}]]);export{u as default};
