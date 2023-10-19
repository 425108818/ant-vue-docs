import{_ as s,c as n,o as a,Q as p}from"./chunks/framework.a87c977f.js";const F=JSON.parse('{"title":"快速开始","description":"","frontmatter":{},"headers":[],"relativePath":"guide/index.md","filePath":"guide/index.md","lastUpdated":1697191842000}'),l={name:"guide/index.md"},o=p(`<h1 id="快速开始" tabindex="-1">快速开始</h1><h2 id="_1、安装" tabindex="-1">1、安装</h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">yarn add @urland/vue-antd-components -D</span></span>
<span class="line"><span style="color:#e1e4e8;">或</span></span>
<span class="line"><span style="color:#e1e4e8;">npm i @urland/vue-antd-components -D</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">yarn add @urland/vue-antd-components -D</span></span>
<span class="line"><span style="color:#24292e;">或</span></span>
<span class="line"><span style="color:#24292e;">npm i @urland/vue-antd-components -D</span></span></code></pre></div><h2 id="_2、注册" tabindex="-1">2、注册</h2><p>在<code>App.vue</code>中使用<code>setConfig</code>，初始化<code>vue-antd-components</code>组件库配置。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { setConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@urland/vue-antd-components&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { api, commonApi, commonURL } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/api&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { AxiosRequestConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;axios&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> config </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./config&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">setConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  area: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    API_AREA_BASE_URI: config.</span><span style="color:#79B8FF;">API_AREA_BASE_URI</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  upload: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">fetchImageToken</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> commonApi.</span><span style="color:#B392F0;">post</span><span style="color:#E1E4E8;">(commonURL.image_token),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">fetchFileToken</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> commonApi.</span><span style="color:#B392F0;">post</span><span style="color:#E1E4E8;">(commonURL.file_token),</span></span>
<span class="line"><span style="color:#E1E4E8;">    ossFileUploadUrl: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    ossImgUploadUrl: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  select: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">fetchOptionData</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">url</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">params</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">AxiosRequestConfig</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> api.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(url, params),</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { setConfig } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@urland/vue-antd-components&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { api, commonApi, commonURL } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/api&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { AxiosRequestConfig } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;axios&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> config </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./config&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">setConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  area: {</span></span>
<span class="line"><span style="color:#24292E;">    API_AREA_BASE_URI: config.</span><span style="color:#005CC5;">API_AREA_BASE_URI</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  upload: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">fetchImageToken</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> commonApi.</span><span style="color:#6F42C1;">post</span><span style="color:#24292E;">(commonURL.image_token),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">fetchFileToken</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> commonApi.</span><span style="color:#6F42C1;">post</span><span style="color:#24292E;">(commonURL.file_token),</span></span>
<span class="line"><span style="color:#24292E;">    ossFileUploadUrl: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    ossImgUploadUrl: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  select: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">fetchOptionData</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">url</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">, </span><span style="color:#E36209;">params</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">AxiosRequestConfig</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> api.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(url, params),</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><h5 id="在mian-t文件中引入css" tabindex="-1">在mian.t文件中引入css</h5><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@urland/vue-antd-components/dist/style.css&#39;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@urland/vue-antd-components/dist/style.css&#39;</span><span style="color:#24292E;">;</span></span></code></pre></div><h5 id="全局按需引入组件" tabindex="-1">全局按需引入组件</h5><p>在<code>vite.config.ts</code>添加<code>VueAntdComponentsResolver</code>按需加载组件配置</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Components </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;unplugin-vue-components/vite&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { VueAntdComponentsResolver } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@urland/vue-antd-components/resolvers&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">Components</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      resolvers: [</span><span style="color:#B392F0;">VueAntdComponentsResolver</span><span style="color:#E1E4E8;">()],</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Components </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;unplugin-vue-components/vite&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { VueAntdComponentsResolver } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@urland/vue-antd-components/resolvers&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  plugins: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">Components</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      resolvers: [</span><span style="color:#6F42C1;">VueAntdComponentsResolver</span><span style="color:#24292E;">()],</span></span>
<span class="line"><span style="color:#24292E;">    }),</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div>`,11),e=[o];function t(c,r,E,y,i,d){return a(),n("div",null,e)}const u=s(l,[["render",t]]);export{F as __pageData,u as default};