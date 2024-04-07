import{_ as e,c as d,o as a,Q as i}from"./chunks/framework.3ad8d30d.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"version-log/1-0-0.md","filePath":"version-log/1-0-0.md","lastUpdated":1712461848000}'),t={name:"version-log/1-0-0.md"},o=i(`<h2 id="_1-0-0-beta-7" tabindex="-1">1.0.0-beta-7</h2><h4 id="一、upload组件调整" tabindex="-1">一、upload组件调整</h4><h5 id="_1、urfileupload-vue-多文件上传功能" tabindex="-1">1、UrFileUpload.vue 多文件上传功能</h5><pre><code>    1: 添加fileCodeUrl 单文件字段，支持新版OSS回显。取消内部code拼接功能。
    2: 添加fileListUrl 多文件字段，支持新版OSS回显。取消内部code拼接功能。
    3: 优化图片上传、文件上传组件，图片预览功能，支持旋转、缩放、拖拽。
    4: 添加previewImage 自定义预览函数，案例请查看demo
    5: fileList 字段，调整为string[] 类型。取消[{file_code:xxx,file_name:xxx}]
    6: success事件回调添加，files 所有上传成功文件的参数
    7: 组件内部调整根据上传文件类型，请求相应的token文件接口
</code></pre><h2 id="_1-0-0-beta-5" tabindex="-1">1.0.0-beta-5</h2><h4 id="一、upload组件调整-1" tabindex="-1">一、upload组件调整</h4><h5 id="_1、urimageupload-vue-图片上传功能" tabindex="-1">1、UrImageUpload.vue 图片上传功能</h5><pre><code>    feat: 添加fileUrl字段，支持新版OSS回显。取消内部code拼接功能。
    feat: 添加 defaultImage 组件默认背景图片
</code></pre><h5 id="_2、urcascader-vue-级联选择器" tabindex="-1">2、UrCascader.vue 级联选择器</h5><pre><code>    fix：修复change事件无法使用问题
</code></pre><h2 id="_1-0-0-beta-3" tabindex="-1">1.0.0-beta-3</h2><h4 id="一、upload组件调整-2" tabindex="-1">一、upload组件调整</h4><h5 id="_1、urfileupload-vue-多文件上传功能-1" tabindex="-1">1、UrFileUpload.vue 多文件上传功能</h5><pre><code>    fix: 取消文件上传默认过期时间字段
</code></pre><h2 id="_1-0-0-beta-2" tabindex="-1">1.0.0-beta-2</h2><h4 id="一、upload组件调整-3" tabindex="-1">一、upload组件调整</h4><h5 id="_1、urfileupload-vue-多文件上传功能-2" tabindex="-1">1、UrFileUpload.vue 多文件上传功能</h5><pre><code>    fix: 修复组件无法预览功能
</code></pre><h2 id="_1-0-0-beta-1" tabindex="-1">1.0.0-beta-1</h2><h4 id="一、upload组件调整-4" tabindex="-1">一、upload组件调整</h4><h5 id="_1、支持oss图片、文件上传v2版本" tabindex="-1">1、支持OSS图片、文件上传V2版本</h5><pre><code>   + 调整OSS接口上传参数，将files[] =&gt; file 、 access_token =&gt; token
   +  OSS文件上传接口返回字段变更，UrFileUpload.vue 、UrImageUpload.vue 
      调整变更字段 file_code =&gt; code 、file_name=&gt; name
</code></pre>`,22),n=[o];function l(r,c,p,_,h,s){return a(),d("div",null,n)}const x=e(t,[["render",l]]);export{f as __pageData,x as default};
