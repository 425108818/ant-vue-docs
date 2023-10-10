import{d as C,h as v,C as E,o as u,c as i,H as s,w as a,k as o,F as d,D as f,b as _,t as A,l as q,a as F,Q as B}from"./chunks/framework.e2fd31e4.js";const h={style:{height:"300px"}},T=C({__name:"UrCardDemo",setup(g){const n=v({isNeedTransport:null,originalOrderSerialNumber:null,exceptDeliveryTime:null,value:null});return(m,l)=>{const t=E("a-input"),e=E("a-form-item"),r=E("a-col"),y=E("ur-form-group"),c=E("ur-card"),D=E("ur-form");return u(),i(d,null,[s(D,{layout:"horizontal","label-align":"right","label-col":{span:10},"wrapper-col":{span:20}},{default:a(()=>[s(c,{title:"库存预警设置"},{default:a(()=>[s(y,null,{default:a(()=>[s(r,{span:8},{default:a(()=>[s(e,{label:"最低库存"},{default:a(()=>[s(t,{value:n.value.isNeedTransport,"onUpdate:value":l[0]||(l[0]=p=>n.value.isNeedTransport=p),placeholder:"请填写最低库存"},null,8,["value"])]),_:1})]),_:1}),s(r,{span:8},{default:a(()=>[s(e,{label:"最高库存"},{default:a(()=>[s(t,{value:n.value.originalOrderSerialNumber,"onUpdate:value":l[1]||(l[1]=p=>n.value.originalOrderSerialNumber=p),placeholder:"请填写最高库存"},null,8,["value"])]),_:1})]),_:1}),s(r,{span:8},{default:a(()=>[s(e,{label:"最高库存"},{default:a(()=>[s(t,{value:n.value.originalOrderSerialNumber,"onUpdate:value":l[2]||(l[2]=p=>n.value.originalOrderSerialNumber=p),placeholder:"请填写最高库存"},null,8,["value"])]),_:1})]),_:1}),s(r,{span:8},{default:a(()=>[s(e,{label:"最高库存"},{default:a(()=>[s(t,{value:n.value.originalOrderSerialNumber,"onUpdate:value":l[3]||(l[3]=p=>n.value.originalOrderSerialNumber=p),placeholder:"请填写最高库存"},null,8,["value"])]),_:1})]),_:1})]),_:1})]),_:1}),s(c,{title:"基础信息"},{default:a(()=>[s(y,null,{default:a(()=>[s(r,{span:12},{default:a(()=>[s(e,{label:"供应商"},{default:a(()=>[s(t,{value:n.value.exceptDeliveryTime,"onUpdate:value":l[4]||(l[4]=p=>n.value.exceptDeliveryTime=p),placeholder:"请填写最低库存"},null,8,["value"])]),_:1})]),_:1}),s(r,{span:12},{default:a(()=>[s(e,{label:"供应商商品编码"},{default:a(()=>[s(t,{value:n.value.value,"onUpdate:value":l[5]||(l[5]=p=>n.value.value=p),placeholder:"请填写最高库存"},null,8,["value"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),o("div",h,[s(c,{title:"高度自适应","height-full":""},{default:a(()=>[s(y,null,{default:a(()=>[(u(),i(d,null,f(30,p=>s(r,{key:p,span:12},{default:a(()=>[s(e,{label:"供应商"},{default:a(()=>[s(t,{value:n.value.exceptDeliveryTime,"onUpdate:value":l[6]||(l[6]=b=>n.value.exceptDeliveryTime=b),placeholder:"请填写最低库存"},null,8,["value"])]),_:1})]),_:2},1024)),64))]),_:1})]),_:1})])],64)}}}),k=C({__name:"UrCardTabsDemo",setup(g){const n=v(1),m=[{name:"司机",value:1},{name:"车辆",value:2},{name:"客户",value:3}],l=t=>{console.log(t,n.value,"key")};return(t,e)=>{const r=E("a-tab-pane"),y=E("ur-card-tabs");return u(),_(y,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=c=>n.value=c),onChange:l},{default:a(()=>[(u(),i(d,null,f(m,c=>s(r,{key:c.value,tab:c.name},{default:a(()=>[o("div",null,"内容----"+A(c.name),1)]),_:2},1032,["tab"])),64))]),_:1},8,["modelValue"])}}}),N=[{name:"size",description:"card 的尺寸",type:"string",option:"default | small",default:"small"},{name:"heightFull",description:"body高度是否自适应",type:"boolean",option:"-",default:"false"}],x=[{name:"modelValue (v-model)",description:"当前激活 tab 面板的 key",type:"string",option:"-",default:"-"},{name:"tabs",description:"标签数",type:"{name:string, value:string}",option:"-",default:"[]"}],S=o("h1",{id:"form-表单",tabindex:"-1"},"Form 表单",-1),O=o("div",{class:"tip custom-block"},[o("p",{class:"custom-block-title"},"提示"),o("p",null,[F("该组件只通过"),o("code",null,"ur-card 和 "),F("ur-card-tabs` 只是做了统一的样式优化。")])],-1),V=o("h2",{id:"ur-card基本用法",tabindex:"-1"},"ur-card基本用法",-1),U=B("",2),w=B("",3),P=o("p",null,[F("更多属性请参考"),o("a",{href:"https://www.antdv.com/components/card-cn",target:"_blank"},"antd Card 卡片。")],-1),I=o("h3",{id:"urcardtabs",tabindex:"-1"},"UrCardTabs",-1),z=o("p",null,[F("更多属性请参考"),o("a",{href:"https://www.antdv.com/components/tabs-cn",target:"_blank"},"antd Tabs 标签页。")],-1),j=JSON.parse('{"title":"Form 表单","description":"","frontmatter":{},"headers":[],"relativePath":"components/card.md","filePath":"components/card.md","lastUpdated":1679480978000}'),$={name:"components/card.md"},H=Object.assign($,{setup(g){return(n,m)=>{const l=E("ur-api-table");return u(),i("div",null,[S,O,V,s(T),U,s(k),w,s(l,{"data-source":q(N)},null,8,["data-source"]),P,I,s(l,{"data-source":q(x)},null,8,["data-source"]),z])}}});export{j as __pageData,H as default};
