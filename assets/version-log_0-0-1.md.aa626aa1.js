import{_ as e,c as a,o as r,Q as d}from"./chunks/framework.f103d8d8.js";const x=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"version-log/0-0-1.md","filePath":"version-log/0-0-1.md","lastUpdated":1691738903000}'),t={name:"version-log/0-0-1.md"},h=d(`<h2 id="_0-0-1-alpha-16-20" tabindex="-1">0.0.1-alpha-16 ~ 20</h2><h4 id="一、ursearch组件调整" tabindex="-1">一、UrSearch组件调整</h4><h5 id="_1、ursearch-组件" tabindex="-1">1、UrSearch 组件</h5><pre><code>   + 添加emit onResetChange事件，（query,searchItemsMap)=&gt; 有两个参数
</code></pre><h5 id="_2、urselect-下拉选择框" tabindex="-1">2、UrSelect 下拉选择框</h5><pre><code>   + fix 修复v-model绑定&#39;&#39;空字符串，placeholder不显示问题
</code></pre><h2 id="_0-0-1-alpha-15-16" tabindex="-1">0.0.1-alpha-15 ~ 16</h2><h4 id="一、ursearch组件调整-1" tabindex="-1">一、UrSearch组件调整</h4><h5 id="_1、selectsearchitem-下拉选择框" tabindex="-1">1、SelectSearchItem 下拉选择框</h5><pre><code>   fix：修复多选框mode=&#39;tags&#39;时，选择两个后类型变为字符串无法渲染及无法清空问题。
</code></pre><h5 id="_2、ursearch-组件" tabindex="-1">2、UrSearch 组件</h5><pre><code>   + 优化重置功能：如果初始化组件时value有默认值，点击重置为恢复默认值，否则为清空值。
</code></pre><h2 id="_0-0-1-alpha-13-14" tabindex="-1">0.0.1-alpha-13 ~ 14</h2><h4 id="一、ursearch组件调整-2" tabindex="-1">一、UrSearch组件调整</h4><h5 id="_1、selectsearchitem-下拉选择框-1" tabindex="-1">1、SelectSearchItem 下拉选择框</h5><pre><code>   fix：修复多选框，选择两个后类型变为字符串无法渲染及无法清空问题。
</code></pre><h5 id="_2、ursearch-组件-1" tabindex="-1">2、UrSearch 组件</h5><pre><code>   + defineExpose函数，添加values向外暴露。用于外部组件change事件清空value值
</code></pre><h2 id="_0-0-1-alpha-12" tabindex="-1">0.0.1-alpha-12</h2><h4 id="一、ursearch组件调整-3" tabindex="-1">一、UrSearch组件调整</h4><h5 id="_1、datetimesearchitem-时间选择" tabindex="-1">1、dateTimeSearchItem 时间选择</h5><pre><code>   + disabled 禁止选择属性
   + disabledDate 不可选择日期字段配置
   + onChange 日期发生变化的回调
</code></pre><h5 id="_2、daterangesearchitem-日期范围选择" tabindex="-1">2、dateRangeSearchItem 日期范围选择</h5><pre><code>   + disabled 禁止选择属性
   + disabledDate 不可选择日期字段配置、
   + onCalendarChange 待选日期发生变化的回调
   + onChange 日期范围发生变化的回调
</code></pre><h5 id="_3、selectsearchitem-下拉选择框" tabindex="-1">3、selectSearchItem 下拉选择框</h5><pre><code>   + mode  设置多选功能
</code></pre><h4 id="二、urformgroup组件调整" tabindex="-1">二、UrFormGroup组件调整</h4><pre><code>   fix: 修复title设置伪元素后，没有title标题名称时，会出现伪元素样式
</code></pre>`,28),c=[h];function i(n,o,s,p,l,_){return r(),a("div",null,c)}const b=e(t,[["render",i]]);export{x as __pageData,b as default};
