import{_ as s,c as n,o as a,Q as l}from"./chunks/framework.a87c977f.js";const d=JSON.parse('{"title":"定制主题","description":"","frontmatter":{},"headers":[],"relativePath":"guide/theme.md","filePath":"guide/theme.md","lastUpdated":1697191842000}'),p={name:"guide/theme.md"},o=l(`<h1 id="定制主题" tabindex="-1">定制主题</h1><h2 id="_1、修改组件变量" tabindex="-1">1、修改组件变量</h2><p>在<code>styles</code>项目中新建<code>theme.less</code>文件，再到<code>main.ts</code>引入该文件即可修改，内容如下。<br><code>--ur-color-1</code>变量为保持与前端内部规范而命名，在此赋值引入项目内的<code>default.less</code>文件变量进行覆盖即可。</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">:root</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 颜色</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--ur-color-1</span><span style="color:#E1E4E8;">: @ur-color-1 ; // 主色</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--ur-color-2</span><span style="color:#E1E4E8;">: @ur-color-2; // 用于文字按钮等</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--ur-color-3</span><span style="color:#E1E4E8;">: @ur-color-3; // 用于删除按钮，未读信息提示，重要金额、错误提示等</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--ur-color-4</span><span style="color:#E1E4E8;">: @ur-color-4; // 用于完成状态、标签等</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--ur-color-5</span><span style="color:#E1E4E8;">: @ur-color-5; // 标题文字颜色，如板块标题文字、表格列名、导航栏当前页文字，弹窗标题文字等</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--ur-color-6</span><span style="color:#E1E4E8;">: @ur-color-6; // 主要使用颜色，如：正文文字颜色，表格内容字段，次要按钮文字等</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--ur-color-7</span><span style="color:#E1E4E8;">: @ur-color-7; // 次要文字颜色，如卡片次要信息，时间，</span><span style="color:#79B8FF;">tab</span><span style="color:#E1E4E8;">未选中状态等</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--ur-color-8</span><span style="color:#E1E4E8;">: @ur-color-8; // 提示颜色，如输入框输入前提示文字的颜色</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--ur-color-9</span><span style="color:#E1E4E8;">: @ur-color-9; // 整体背景色</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--ur-color-10</span><span style="color:#E1E4E8;">: @ur-color-10; // 表格</span><span style="color:#79B8FF;">-</span><span style="color:#E1E4E8;">间隔</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--ur-color-11</span><span style="color:#E1E4E8;">: @ur-color-11; // 列表鼠标选中/触发行背景色</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--ur-color-12</span><span style="color:#E1E4E8;">: @ur-color-12; // 分割线，如列表分割线，对话框标题栏下划线等</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--ur-color-13</span><span style="color:#E1E4E8;">: @ur-color-13; // 输入框描边色，次要按钮描边色，导航栏描边色</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--ur-color-14</span><span style="color:#E1E4E8;">: @ur-color-14; // 列表特殊栏背景色、标签背景色</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--ur-color-15</span><span style="color:#E1E4E8;">: @ur-color-15; // 列表特殊栏背景色、标签背景色</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--ur-color-16</span><span style="color:#E1E4E8;">: @ur-color-16; // 列表特殊栏背景色、标签背景色</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--ur-color-17</span><span style="color:#E1E4E8;">: @ur-color-17; // 列表合计栏背景色</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--ur-color-white</span><span style="color:#E1E4E8;">: @ur-color-white;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 字体大小</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--ur-font-size-1</span><span style="color:#E1E4E8;">: @ur-font-size-1;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--ur-font-size-2</span><span style="color:#E1E4E8;">: @ur-font-size-2;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--ur-font-size-3</span><span style="color:#E1E4E8;">: @ur-font-size-3;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--ur-font-size-4</span><span style="color:#E1E4E8;">: @ur-font-size-4;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--ur-font-size-5</span><span style="color:#E1E4E8;">: @ur-font-size-5;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--ur-font-size-6</span><span style="color:#E1E4E8;">: @ur-font-size-6;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--ur-font-size-7</span><span style="color:#E1E4E8;">: @ur-font-size-7;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 间距</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--ur-spacing-1</span><span style="color:#E1E4E8;">: @ur-spacing-1;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--ur-spacing-2</span><span style="color:#E1E4E8;">: @ur-spacing-2;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--ur-spacing-3</span><span style="color:#E1E4E8;">: @ur-spacing-3;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--ur-spacing-4</span><span style="color:#E1E4E8;">: @ur-spacing-4;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--ur-spacing-5</span><span style="color:#E1E4E8;">: @ur-spacing-5;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--ur-spacing-6</span><span style="color:#E1E4E8;">: @ur-spacing-6;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--ur-spacing-7</span><span style="color:#E1E4E8;">: @ur-spacing-7;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 移动端设备宽度</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--maxMobileWidth</span><span style="color:#E1E4E8;">: @maxMobileWidth;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">:root</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 颜色</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--ur-color-1</span><span style="color:#24292E;">: @ur-color-1 ; // 主色</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--ur-color-2</span><span style="color:#24292E;">: @ur-color-2; // 用于文字按钮等</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--ur-color-3</span><span style="color:#24292E;">: @ur-color-3; // 用于删除按钮，未读信息提示，重要金额、错误提示等</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--ur-color-4</span><span style="color:#24292E;">: @ur-color-4; // 用于完成状态、标签等</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--ur-color-5</span><span style="color:#24292E;">: @ur-color-5; // 标题文字颜色，如板块标题文字、表格列名、导航栏当前页文字，弹窗标题文字等</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--ur-color-6</span><span style="color:#24292E;">: @ur-color-6; // 主要使用颜色，如：正文文字颜色，表格内容字段，次要按钮文字等</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--ur-color-7</span><span style="color:#24292E;">: @ur-color-7; // 次要文字颜色，如卡片次要信息，时间，</span><span style="color:#005CC5;">tab</span><span style="color:#24292E;">未选中状态等</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--ur-color-8</span><span style="color:#24292E;">: @ur-color-8; // 提示颜色，如输入框输入前提示文字的颜色</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--ur-color-9</span><span style="color:#24292E;">: @ur-color-9; // 整体背景色</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--ur-color-10</span><span style="color:#24292E;">: @ur-color-10; // 表格</span><span style="color:#005CC5;">-</span><span style="color:#24292E;">间隔</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--ur-color-11</span><span style="color:#24292E;">: @ur-color-11; // 列表鼠标选中/触发行背景色</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--ur-color-12</span><span style="color:#24292E;">: @ur-color-12; // 分割线，如列表分割线，对话框标题栏下划线等</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--ur-color-13</span><span style="color:#24292E;">: @ur-color-13; // 输入框描边色，次要按钮描边色，导航栏描边色</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--ur-color-14</span><span style="color:#24292E;">: @ur-color-14; // 列表特殊栏背景色、标签背景色</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--ur-color-15</span><span style="color:#24292E;">: @ur-color-15; // 列表特殊栏背景色、标签背景色</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--ur-color-16</span><span style="color:#24292E;">: @ur-color-16; // 列表特殊栏背景色、标签背景色</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--ur-color-17</span><span style="color:#24292E;">: @ur-color-17; // 列表合计栏背景色</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--ur-color-white</span><span style="color:#24292E;">: @ur-color-white;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 字体大小</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--ur-font-size-1</span><span style="color:#24292E;">: @ur-font-size-1;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--ur-font-size-2</span><span style="color:#24292E;">: @ur-font-size-2;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--ur-font-size-3</span><span style="color:#24292E;">: @ur-font-size-3;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--ur-font-size-4</span><span style="color:#24292E;">: @ur-font-size-4;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--ur-font-size-5</span><span style="color:#24292E;">: @ur-font-size-5;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--ur-font-size-6</span><span style="color:#24292E;">: @ur-font-size-6;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--ur-font-size-7</span><span style="color:#24292E;">: @ur-font-size-7;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 间距</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--ur-spacing-1</span><span style="color:#24292E;">: @ur-spacing-1;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--ur-spacing-2</span><span style="color:#24292E;">: @ur-spacing-2;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--ur-spacing-3</span><span style="color:#24292E;">: @ur-spacing-3;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--ur-spacing-4</span><span style="color:#24292E;">: @ur-spacing-4;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--ur-spacing-5</span><span style="color:#24292E;">: @ur-spacing-5;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--ur-spacing-6</span><span style="color:#24292E;">: @ur-spacing-6;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--ur-spacing-7</span><span style="color:#24292E;">: @ur-spacing-7;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 移动端设备宽度</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--maxMobileWidth</span><span style="color:#24292E;">: @maxMobileWidth;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="_2、全局定制化组件样式修改" tabindex="-1">2、全局定制化组件样式修改</h2><p>可在项目<code>styles</code>文件夹内，新建<code>vue-andt-components.less</code>文件进行对组件样式修改。<br> 例如：根据对应组件属性名进行样式修改，再到<code>main.ts</code>中引入该<code>less</code>文件即可。</p><div class="language-less vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">.ur-form-group</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">.title</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">font-family</span><span style="color:#E1E4E8;">: Microsoft YaHei;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">font-weight</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">600</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">line-height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">21</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: @ur-color-5;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">padding-left</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">14</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">position</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">relative</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">.title:before</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">content</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39; &#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">3</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">14</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">background</span><span style="color:#E1E4E8;">: @ur-color-1;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">position</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">absolute</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">top</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">50</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">transform</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">translate</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">-50</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">left</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">border-radius</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">.ur-form-group</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">.title</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">font-family</span><span style="color:#24292E;">: Microsoft YaHei;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">font-weight</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">600</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">line-height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">21</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: @ur-color-5;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">padding-left</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">14</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">position</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">relative</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">.title:before</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">content</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39; &#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">3</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">14</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">background</span><span style="color:#24292E;">: @ur-color-1;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">position</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">absolute</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">top</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">50</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">transform</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">translate</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">-50</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">left</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">border-radius</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,7),e=[o];function c(r,t,E,y,i,u){return a(),n("div",null,e)}const A=s(p,[["render",c]]);export{d as __pageData,A as default};
