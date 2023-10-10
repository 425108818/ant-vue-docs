import{m as e}from"./chunks/useConfigInject.ba5027d3.js";import{d as F,C as c,o as r,c as i,H as a,k as s,l as o,Q as u,a as y}from"./chunks/framework.e2fd31e4.js";import"./chunks/AntdIcon.6532393f.js";import"./chunks/CloseOutlined.1e8451e8.js";const d=s("br",null,null,-1),m=F({__name:"UrButtonListDemo",setup(E){const l=()=>{e.success("提交成功")},n=()=>{e.success("发布成功")};return(p,v)=>{const t=c("ur-button-list");return r(),i("div",null,[a(t,{"more-placement":"bottomRight","buttons-default-type":"link","max-display-count":2,"buttons-props":[{text:"提交",onAction:()=>l()},{text:"发布",confirm:"确认发布该条数据吗？",onAction:()=>n()},{text:"发布",confirm:"确认发布该条数据吗？",onAction:()=>n()}]},null,8,["buttons-props"]),d,a(t,{"more-placement":"bottomRight","buttons-default-type":"link","max-display-count":5,"buttons-props":[{text:"提交",onAction:()=>l()},{text:"发布",confirm:"确认发布该条数据吗？",type:"ghost",onAction:()=>n()},{text:"发布",confirm:"确认发布该条数据吗？",type:"dashed",onAction:()=>n()},{text:"发布",confirm:"确认发布该条数据吗？",type:"danger",onAction:()=>n()},{text:"发布",confirm:"确认发布该条数据吗？",type:"primary",onAction:()=>n()},{text:"发布",confirm:"确认发布该条数据吗？",type:"link",onAction:()=>n()}]},null,8,["buttons-props"])])}}}),g=[{name:"buttonsDefaultType",description:"所有按钮的默认类型",type:"string",option:"primary | ghost |  dashed |  link |  text |  default",default:"string"},{name:"buttonsProps",description:"该属性应用到button中，设置参考UrButtonProps",type:"object",option:"-",default:"-"},{name:"morePlacement",description:"气泡框位置",type:"string",option:"-",default:"top"},{name:"maxDisplayCount",description:"最大显示数量",type:"number",option:"-",default:"2"},{name:"ellipsisText",description:"省略号文本，默认为...",type:"string",option:"-",default:"..."}],B=[{name:"permission",description:"权限属性,传入接口名称以及请求方法",type:"string",option:"-",default:"-"},{name:"visible",description:"是否显示",type:"boolean",option:"false | true",default:"true"},{name:"text",description:"按钮文本",type:"string",option:"-",default:"-"},{name:"confirm",description:"气泡确认框参数，设置参考UrButtonConfirmProps",type:"UrButtonConfirmProps",option:"-",default:"-"},{name:"onAction",description:"按钮click事件",type:"Function",option:"-",default:"-"}],C=[{name:"onAction",description:"提示标题",type:"string",option:"-",default:"-"},{name:"okText",description:"确认按钮文本",type:"string",option:"-",default:"确认"},{name:"cancelText",description:"取消按钮文本",type:"string",option:"-",default:"取消"}],A=s("h1",{id:"button按钮",tabindex:"-1"},"Button按钮",-1),h=s("h2",{id:"基本用法",tabindex:"-1"},"基本用法",-1),f=s("h4",{id:"type类型、最大显示数量",tabindex:"-1"},"type类型、最大显示数量",-1),b=u(`<details><summary>展开查看</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!-- &lt;UrButton :options=&quot;{ text: &#39;发布2&#39;, confirm: &#39;确认发布该条数据吗？&#39;, onAction: () =&gt; handleAudit() }&quot; /&gt; --&gt;</span></span>
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
<span class="line"><span style="color:#9ECBFF;">          text: &#39;发布&#39;,</span></span>
<span class="line"><span style="color:#9ECBFF;">          confirm: &#39;确认发布该条数据吗？&#39;,</span></span>
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
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!-- &lt;UrButton :options=&quot;{ text: &#39;发布2&#39;, confirm: &#39;确认发布该条数据吗？&#39;, onAction: () =&gt; handleAudit() }&quot; /&gt; --&gt;</span></span>
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
<span class="line"><span style="color:#032F62;">          text: &#39;发布&#39;,</span></span>
<span class="line"><span style="color:#032F62;">          confirm: &#39;确认发布该条数据吗？&#39;,</span></span>
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
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleSubmit</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  message.</span><span style="color:#6F42C1;">success</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;提交成功&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleAudit</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  message.</span><span style="color:#6F42C1;">success</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;发布成功&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;less&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="api" tabindex="-1">API</h2>`,2),_=s("h2",{id:"urbuttonprops",tabindex:"-1"},"UrButtonProps",-1),x=s("p",null,[y("更多属性请参考"),s("a",{href:"https://www.antdv.com/components/button-cn#API",target:"_blank"},"antd Button 按钮")],-1),q=s("h2",{id:"urbuttonconfirmprops",tabindex:"-1"},"UrButtonConfirmProps",-1),D=s("p",null,[y("更多属性请参考"),s("a",{href:"https://www.antdv.com/components/popconfirm-cn",target:"_blank"},"Popconfirm 气泡确认框")],-1),R=JSON.parse('{"title":"Button按钮","description":"","frontmatter":{},"headers":[],"relativePath":"components/button.md","filePath":"components/button.md","lastUpdated":1677133518000}'),k={name:"components/button.md"},w=Object.assign(k,{setup(E){return(l,n)=>{const p=c("ur-api-table");return r(),i("div",null,[A,h,f,a(m),b,a(p,{"data-source":o(g)},null,8,["data-source"]),_,a(p,{"data-source":o(B)},null,8,["data-source"]),x,q,a(p,{"data-source":o(C)},null,8,["data-source"]),D])}}});export{R as __pageData,w as default};
