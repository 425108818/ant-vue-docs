import{_ as t,c as o,o as a,k as e}from"./chunks/framework.a87c977f.js";const S=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"version-log/1-0-0.md","filePath":"version-log/1-0-0.md","lastUpdated":null}'),n={name:"version-log/1-0-0.md"},s=e("h2",{id:"_1-0-0-beta-1",tabindex:"-1"},"1.0.0-beta-1",-1),d=e("h4",{id:"一、upload组件调整",tabindex:"-1"},"一、upload组件调整",-1),i=e("h5",{id:"_1、支持oss图片、文件上传v2版本",tabindex:"-1"},"1、支持OSS图片、文件上传V2版本",-1),l=e("pre",null,[e("code",null,`   + 调整OSS接口上传参数，将files[] => file 、 access_token => token
   +  OSS文件上传接口返回字段变更，UrFileUpload.vue 、UrImageUpload.vue 
      调整变更字段 file_code => code 、file_name=> name
`)],-1),_=[s,d,i,l];function c(r,p,f,h,m,u){return a(),o("div",null,_)}const x=t(n,[["render",c]]);export{S as __pageData,x as default};