import{U as e}from"./chunks/index.3225fbe9.js";import{m as c}from"./chunks/useConfigInject.715f65cb.js";import{d as u,C as r,o as i,c as y,H as a,l,a as o,k as s,Q as m}from"./chunks/framework.f103d8d8.js";import"./chunks/default-locale.877e1ebb.js";import"./chunks/identity.30270b2f.js";import"./chunks/getAllKeysIn.e24176cb.js";import"./chunks/AntdIcon.1840c7a2.js";import"./chunks/CloseOutlined.3a502516.js";const d=s("br",null,null,-1),B=s("br",null,null,-1),C=u({__name:"UrButtonListDemo",setup(E){const t=()=>{c.success("提交成功")},n=()=>{c.success("发布成功")};return(p,T)=>{const F=r("UrButton");return i(),y("div",null,[a(F,{options:{text:"发布2",confirm:"确认发布该条数据吗？123123123123123啊发顺丰发送到发 阿斯顿发斯蒂芬发萨法阿斯蒂方法",onAction:()=>n()}},null,8,["options"]),a(l(e),{"more-placement":"bottomRight","buttons-default-type":"link","max-display-count":2,"buttons-props":[{text:"提交",onAction:()=>t()},{text:"发布2",confirm:{title:"确认发布该条数据吗？",placement:"bottom"},onAction:()=>n()},{text:"发布",confirm:"确认发布该条数据吗？",onAction:()=>n()}]},null,8,["buttons-props"]),d,o(" 设置弹框提示方向placement, 与官网Tooltip Placement一致 "),a(l(e),{"more-placement":"bottomRight","buttons-default-type":"link","max-display-count":2,"buttons-props":[{text:"发布",confirm:{title:"确认发布该条数据吗？",placement:"bottom"},onAction:()=>n()}]},null,8,["buttons-props"]),B,o(" 最大数量5显示 "),a(l(e),{"more-placement":"bottomRight","buttons-default-type":"link","max-display-count":5,"buttons-props":[{text:"提交",onAction:()=>t()},{text:"发布",confirm:"确认发布该条数据吗？",type:"ghost",onAction:()=>n()},{text:"发布",confirm:"确认发布该条数据吗？",type:"dashed",onAction:()=>n()},{text:"发布",confirm:"确认发布该条数据吗？",type:"danger",onAction:()=>n()},{text:"发布",confirm:"确认发布该条数据吗？",type:"primary",onAction:()=>n()},{text:"发布",confirm:"确认发布该条数据吗？",type:"link",onAction:()=>n()}]},null,8,["buttons-props"])])}}}),g=[{name:"buttonsDefaultType",description:"所有按钮的默认类型",type:"string",option:"primary | ghost |  dashed |  link |  text |  default",default:"string"},{name:"buttonsProps",description:"该属性应用到button中，设置参考UrButtonProps",type:"object",option:"-",default:"-"},{name:"morePlacement",description:"气泡框位置",type:"string",option:"-",default:"top"},{name:"maxDisplayCount",description:"最大显示数量",type:"number",option:"-",default:"2"},{name:"ellipsisText",description:"省略号文本，默认为...",type:"string",option:"-",default:"..."}],b=[{name:"permission",description:"权限属性,传入接口名称以及请求方法",type:"string",option:"-",default:"-"},{name:"visible",description:"是否显示",type:"boolean",option:"false | true",default:"true"},{name:"text",description:"按钮文本",type:"string",option:"-",default:"-"},{name:"confirm",description:"气泡确认框参数，设置参考UrButtonConfirmProps",type:"UrButtonConfirmProps",option:"-",default:"-"},{name:"onAction",description:"按钮click事件",type:"Function",option:"-",default:"-"}],A=[{name:"onAction",description:"提示标题",type:"string",option:"-",default:"-"},{name:"okText",description:"确认按钮文本",type:"string",option:"-",default:"确认"},{name:"cancelText",description:"取消按钮文本",type:"string",option:"-",default:"取消"},{name:"placement",description:"气泡框弹出方向-与官网Tooltip Placement一致",type:"string",option:"-",default:"top"}],f=s("h1",{id:"button按钮",tabindex:"-1"},"Button按钮",-1),h=s("h2",{id:"基本用法",tabindex:"-1"},"基本用法",-1),q=s("h4",{id:"type类型、最大显示数量",tabindex:"-1"},"type类型、最大显示数量",-1),_=m(`<details><summary>展开查看</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">UrButton</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:options</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{</span></span>
<span class="line"><span style="color:#9ECBFF;">        text: &#39;发布2&#39;,</span></span>
<span class="line"><span style="color:#9ECBFF;">        confirm: &#39;确认发布该条数据吗？123123123123123啊发顺丰发送到发 阿斯顿发斯蒂芬发萨法阿斯蒂方法&#39;,</span></span>
<span class="line"><span style="color:#9ECBFF;">        onAction: () =&gt; handleAudit(),</span></span>
<span class="line"><span style="color:#9ECBFF;">      }&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">ur-button-list</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">more-placement</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;bottomRight&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">buttons-default-type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;link&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:max-display-count</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;2&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:buttons-props</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;[</span></span>
<span class="line"><span style="color:#9ECBFF;">        {</span></span>
<span class="line"><span style="color:#9ECBFF;">          text: &#39;提交&#39;,</span></span>
<span class="line"><span style="color:#9ECBFF;">          onAction: () =&gt; handleSubmit(),</span></span>
<span class="line"><span style="color:#9ECBFF;">        },</span></span>
<span class="line"><span style="color:#9ECBFF;">        {</span></span>
<span class="line"><span style="color:#9ECBFF;">          text: &#39;发布2&#39;,</span></span>
<span class="line"><span style="color:#9ECBFF;">          confirm: { title: &#39;确认发布该条数据吗？&#39;, placement: &#39;bottom&#39; },</span></span>
<span class="line"><span style="color:#9ECBFF;">          onAction: () =&gt; handleAudit(),</span></span>
<span class="line"><span style="color:#9ECBFF;">        },</span></span>
<span class="line"><span style="color:#9ECBFF;">        {</span></span>
<span class="line"><span style="color:#9ECBFF;">          text: &#39;发布&#39;,</span></span>
<span class="line"><span style="color:#9ECBFF;">          confirm: &#39;确认发布该条数据吗？&#39;,</span></span>
<span class="line"><span style="color:#9ECBFF;">          onAction: () =&gt; handleAudit(),</span></span>
<span class="line"><span style="color:#9ECBFF;">        },</span></span>
<span class="line"><span style="color:#9ECBFF;">      ]&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">br</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    设置弹框提示方向placement, 与官网Tooltip Placement一致</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">ur-button-list</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">more-placement</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;bottomRight&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">buttons-default-type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;link&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:max-display-count</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;2&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:buttons-props</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;[</span></span>
<span class="line"><span style="color:#9ECBFF;">        {</span></span>
<span class="line"><span style="color:#9ECBFF;">          text: &#39;发布&#39;,</span></span>
<span class="line"><span style="color:#9ECBFF;">          confirm: { title: &#39;确认发布该条数据吗？&#39;, placement: &#39;bottom&#39; },</span></span>
<span class="line"><span style="color:#9ECBFF;">          onAction: () =&gt; handleAudit(),</span></span>
<span class="line"><span style="color:#9ECBFF;">        },</span></span>
<span class="line"><span style="color:#9ECBFF;">      ]&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">br</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    最大数量5显示</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">ur-button-list</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">more-placement</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;bottomRight&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">buttons-default-type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;link&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:max-display-count</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;5&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:buttons-props</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;[</span></span>
<span class="line"><span style="color:#9ECBFF;">        {</span></span>
<span class="line"><span style="color:#9ECBFF;">          text: &#39;提交&#39;,</span></span>
<span class="line"><span style="color:#9ECBFF;">          onAction: () =&gt; handleSubmit(),</span></span>
<span class="line"><span style="color:#9ECBFF;">        },</span></span>
<span class="line"><span style="color:#9ECBFF;">        {</span></span>
<span class="line"><span style="color:#9ECBFF;">          text: &#39;发布&#39;,</span></span>
<span class="line"><span style="color:#9ECBFF;">          confirm: &#39;确认发布该条数据吗？&#39;,</span></span>
<span class="line"><span style="color:#9ECBFF;">          type: &#39;ghost&#39;,</span></span>
<span class="line"><span style="color:#9ECBFF;">          onAction: () =&gt; handleAudit(),</span></span>
<span class="line"><span style="color:#9ECBFF;">        },</span></span>
<span class="line"><span style="color:#9ECBFF;">        {</span></span>
<span class="line"><span style="color:#9ECBFF;">          text: &#39;发布&#39;,</span></span>
<span class="line"><span style="color:#9ECBFF;">          confirm: &#39;确认发布该条数据吗？&#39;,</span></span>
<span class="line"><span style="color:#9ECBFF;">          type: &#39;dashed&#39;,</span></span>
<span class="line"><span style="color:#9ECBFF;">          onAction: () =&gt; handleAudit(),</span></span>
<span class="line"><span style="color:#9ECBFF;">        },</span></span>
<span class="line"><span style="color:#9ECBFF;">        {</span></span>
<span class="line"><span style="color:#9ECBFF;">          text: &#39;发布&#39;,</span></span>
<span class="line"><span style="color:#9ECBFF;">          confirm: &#39;确认发布该条数据吗？&#39;,</span></span>
<span class="line"><span style="color:#9ECBFF;">          type: &#39;danger&#39;,</span></span>
<span class="line"><span style="color:#9ECBFF;">          onAction: () =&gt; handleAudit(),</span></span>
<span class="line"><span style="color:#9ECBFF;">        },</span></span>
<span class="line"><span style="color:#9ECBFF;">        {</span></span>
<span class="line"><span style="color:#9ECBFF;">          text: &#39;发布&#39;,</span></span>
<span class="line"><span style="color:#9ECBFF;">          confirm: &#39;确认发布该条数据吗？&#39;,</span></span>
<span class="line"><span style="color:#9ECBFF;">          type: &#39;primary&#39;,</span></span>
<span class="line"><span style="color:#9ECBFF;">          onAction: () =&gt; handleAudit(),</span></span>
<span class="line"><span style="color:#9ECBFF;">        },</span></span>
<span class="line"><span style="color:#9ECBFF;">        {</span></span>
<span class="line"><span style="color:#9ECBFF;">          text: &#39;发布&#39;,</span></span>
<span class="line"><span style="color:#9ECBFF;">          confirm: &#39;确认发布该条数据吗？&#39;,</span></span>
<span class="line"><span style="color:#9ECBFF;">          type: &#39;link&#39;,</span></span>
<span class="line"><span style="color:#9ECBFF;">          onAction: () =&gt; handleAudit(),</span></span>
<span class="line"><span style="color:#9ECBFF;">        },</span></span>
<span class="line"><span style="color:#9ECBFF;">      ]&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { message } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;ant-design-vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { UrButtonList } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/components/button&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleSubmit</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  message.</span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;提交成功&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleAudit</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  message.</span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;发布成功&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;less&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">UrButton</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:options</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{</span></span>
<span class="line"><span style="color:#032F62;">        text: &#39;发布2&#39;,</span></span>
<span class="line"><span style="color:#032F62;">        confirm: &#39;确认发布该条数据吗？123123123123123啊发顺丰发送到发 阿斯顿发斯蒂芬发萨法阿斯蒂方法&#39;,</span></span>
<span class="line"><span style="color:#032F62;">        onAction: () =&gt; handleAudit(),</span></span>
<span class="line"><span style="color:#032F62;">      }&quot;</span></span>
<span class="line"><span style="color:#24292E;">    /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">ur-button-list</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">more-placement</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;bottomRight&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">buttons-default-type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;link&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:max-display-count</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;2&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:buttons-props</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;[</span></span>
<span class="line"><span style="color:#032F62;">        {</span></span>
<span class="line"><span style="color:#032F62;">          text: &#39;提交&#39;,</span></span>
<span class="line"><span style="color:#032F62;">          onAction: () =&gt; handleSubmit(),</span></span>
<span class="line"><span style="color:#032F62;">        },</span></span>
<span class="line"><span style="color:#032F62;">        {</span></span>
<span class="line"><span style="color:#032F62;">          text: &#39;发布2&#39;,</span></span>
<span class="line"><span style="color:#032F62;">          confirm: { title: &#39;确认发布该条数据吗？&#39;, placement: &#39;bottom&#39; },</span></span>
<span class="line"><span style="color:#032F62;">          onAction: () =&gt; handleAudit(),</span></span>
<span class="line"><span style="color:#032F62;">        },</span></span>
<span class="line"><span style="color:#032F62;">        {</span></span>
<span class="line"><span style="color:#032F62;">          text: &#39;发布&#39;,</span></span>
<span class="line"><span style="color:#032F62;">          confirm: &#39;确认发布该条数据吗？&#39;,</span></span>
<span class="line"><span style="color:#032F62;">          onAction: () =&gt; handleAudit(),</span></span>
<span class="line"><span style="color:#032F62;">        },</span></span>
<span class="line"><span style="color:#032F62;">      ]&quot;</span></span>
<span class="line"><span style="color:#24292E;">    /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">br</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    设置弹框提示方向placement, 与官网Tooltip Placement一致</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">ur-button-list</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">more-placement</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;bottomRight&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">buttons-default-type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;link&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:max-display-count</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;2&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:buttons-props</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;[</span></span>
<span class="line"><span style="color:#032F62;">        {</span></span>
<span class="line"><span style="color:#032F62;">          text: &#39;发布&#39;,</span></span>
<span class="line"><span style="color:#032F62;">          confirm: { title: &#39;确认发布该条数据吗？&#39;, placement: &#39;bottom&#39; },</span></span>
<span class="line"><span style="color:#032F62;">          onAction: () =&gt; handleAudit(),</span></span>
<span class="line"><span style="color:#032F62;">        },</span></span>
<span class="line"><span style="color:#032F62;">      ]&quot;</span></span>
<span class="line"><span style="color:#24292E;">    /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">br</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    最大数量5显示</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">ur-button-list</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">more-placement</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;bottomRight&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">buttons-default-type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;link&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:max-display-count</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;5&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:buttons-props</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;[</span></span>
<span class="line"><span style="color:#032F62;">        {</span></span>
<span class="line"><span style="color:#032F62;">          text: &#39;提交&#39;,</span></span>
<span class="line"><span style="color:#032F62;">          onAction: () =&gt; handleSubmit(),</span></span>
<span class="line"><span style="color:#032F62;">        },</span></span>
<span class="line"><span style="color:#032F62;">        {</span></span>
<span class="line"><span style="color:#032F62;">          text: &#39;发布&#39;,</span></span>
<span class="line"><span style="color:#032F62;">          confirm: &#39;确认发布该条数据吗？&#39;,</span></span>
<span class="line"><span style="color:#032F62;">          type: &#39;ghost&#39;,</span></span>
<span class="line"><span style="color:#032F62;">          onAction: () =&gt; handleAudit(),</span></span>
<span class="line"><span style="color:#032F62;">        },</span></span>
<span class="line"><span style="color:#032F62;">        {</span></span>
<span class="line"><span style="color:#032F62;">          text: &#39;发布&#39;,</span></span>
<span class="line"><span style="color:#032F62;">          confirm: &#39;确认发布该条数据吗？&#39;,</span></span>
<span class="line"><span style="color:#032F62;">          type: &#39;dashed&#39;,</span></span>
<span class="line"><span style="color:#032F62;">          onAction: () =&gt; handleAudit(),</span></span>
<span class="line"><span style="color:#032F62;">        },</span></span>
<span class="line"><span style="color:#032F62;">        {</span></span>
<span class="line"><span style="color:#032F62;">          text: &#39;发布&#39;,</span></span>
<span class="line"><span style="color:#032F62;">          confirm: &#39;确认发布该条数据吗？&#39;,</span></span>
<span class="line"><span style="color:#032F62;">          type: &#39;danger&#39;,</span></span>
<span class="line"><span style="color:#032F62;">          onAction: () =&gt; handleAudit(),</span></span>
<span class="line"><span style="color:#032F62;">        },</span></span>
<span class="line"><span style="color:#032F62;">        {</span></span>
<span class="line"><span style="color:#032F62;">          text: &#39;发布&#39;,</span></span>
<span class="line"><span style="color:#032F62;">          confirm: &#39;确认发布该条数据吗？&#39;,</span></span>
<span class="line"><span style="color:#032F62;">          type: &#39;primary&#39;,</span></span>
<span class="line"><span style="color:#032F62;">          onAction: () =&gt; handleAudit(),</span></span>
<span class="line"><span style="color:#032F62;">        },</span></span>
<span class="line"><span style="color:#032F62;">        {</span></span>
<span class="line"><span style="color:#032F62;">          text: &#39;发布&#39;,</span></span>
<span class="line"><span style="color:#032F62;">          confirm: &#39;确认发布该条数据吗？&#39;,</span></span>
<span class="line"><span style="color:#032F62;">          type: &#39;link&#39;,</span></span>
<span class="line"><span style="color:#032F62;">          onAction: () =&gt; handleAudit(),</span></span>
<span class="line"><span style="color:#032F62;">        },</span></span>
<span class="line"><span style="color:#032F62;">      ]&quot;</span></span>
<span class="line"><span style="color:#24292E;">    /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { message } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;ant-design-vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { UrButtonList } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/components/button&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleSubmit</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  message.</span><span style="color:#6F42C1;">success</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;提交成功&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleAudit</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  message.</span><span style="color:#6F42C1;">success</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;发布成功&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;less&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="api" tabindex="-1">API</h2>`,2),x=s("h2",{id:"urbuttonprops",tabindex:"-1"},"UrButtonProps",-1),D=s("p",null,[o("更多属性请参考"),s("a",{href:"https://www.antdv.com/components/button-cn#API",target:"_blank"},"antd Button 按钮")],-1),k=s("h2",{id:"urbuttonconfirmprops",tabindex:"-1"},"UrButtonConfirmProps",-1),v=s("p",null,[o("更多属性请参考"),s("a",{href:"https://www.antdv.com/components/popconfirm-cn",target:"_blank"},"Popconfirm 气泡确认框")],-1),$=JSON.parse('{"title":"Button按钮","description":"","frontmatter":{},"headers":[],"relativePath":"components/button.md","filePath":"components/button.md","lastUpdated":1696944114000}'),P={name:"components/button.md"},j=Object.assign(P,{setup(E){return(t,n)=>{const p=r("ur-api-table");return i(),y("div",null,[f,h,q,a(C),_,a(p,{"data-source":l(g)},null,8,["data-source"]),x,a(p,{"data-source":l(b)},null,8,["data-source"]),D,k,a(p,{"data-source":l(A)},null,8,["data-source"]),v])}}});export{$ as __pageData,j as default};
