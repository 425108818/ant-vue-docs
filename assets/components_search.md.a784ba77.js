import{u as q,o as S,c as r,d as F,a as u,b as d,e as w}from"./chunks/index.0fea237d.js";import{j as R,d as T,h as E,C as y,a2 as P,o as i,c as D,a3 as O,b as C,w as h,H as l,e as U,l as o,k as s,Q as M,a as p}from"./chunks/framework.a87c977f.js";import{m as g}from"./chunks/useConfigInject.022f1a10.js";import"./chunks/keyBy.6c80b526.js";import"./chunks/AntdIcon.f68e35b8.js";import"./chunks/CloseOutlined.655ada46.js";function j(t,e){const c=e||q(),n=()=>t(c);return R(n),S(m=>t(m)),n}const V={class:"layout-content"},L=T({__name:"UrSearchDemo",setup(t){const e=E(),c=[{...r,fromDate:"form_create_time",toDate:"to_create_time",label:"发布时间",fromDateValue:F(),toDateValue:F()},{...r,fromDate:"form_create_time2",toDate:"to_create_time2",label:"禁止时间",disabled:!0},{...r,fromDate:"form_create_time3",toDate:"to_create_time4",label:"change事件",onChange:a=>{g.success("onChange事件，控制台查看输出内容"),console.log(a,"onChange")},onCalendarChange:a=>{g.success("onCalendarChange事件，控制台查看输出内容"),console.log(a,"onCalendarChange")}},{...r,fromDate:"form_create_time3",toDate:"to_create_time4",label:"disabledDate禁用",disabledDate:a=>!0},{...u,key:"start_code",label:"出发地",level:3},{...u,key:"desti_code",label:"目的地",level:3},{...d,key:"trucktype_code",label:"车辆类型",placeholder:"请选择",mode:"tags",onChange:a=>{console.log(a),e.value.values.trucktype_code_multiple=[]}},{...d,key:"trucktype_code_multiple",label:"车辆类型多选",placeholder:"请选择",mode:"multiple",value:["1"],selectOptions:[{key:"await",value:1,name:"待处理"},{key:"fail",value:88,name:"失效"},{key:"success",value:99,name:"已生效"}]},{...d,key:"trucktype_code_value",label:"车辆类型(本地过滤)",placeholder:"请选择",value:["1"],filterOption:!0,selectOptions:[{key:"await",value:1,name:"待处理"},{key:"fail",value:88,name:"失效"},{key:"success",value:99,name:"已生效"}]},{...w,key:"cargoCategoryUid",label:"商品类别",placeholder:"请选择",selectOptions:[]}],n=[{title:"序号",key:"index",customRender:({index:a})=>a+1},{title:"车牌号码",dataIndex:"tm_front_plate",width:120},{title:"联系人",dataIndex:"tm_contact",width:130},{title:"联系电话",dataIndex:"tm_phone",width:180},{title:"车辆类型",dataIndex:"tm_trucktype",width:150},{title:"出发地",dataIndex:"tm_start_name",width:150},{title:"目的地",dataIndex:"tm_desti_name",width:150},{title:"运费（元）",dataIndex:"tm_bid",width:150},{title:"发车时间",dataIndex:"create_time",width:200},{title:"有效日期",dataIndex:"om_valid_at_time",width:200}],m=E([{},{}]),_=E({}),A=E();j(a=>{console.log(a.query,"query")});const B=a=>{};return(a,ds)=>{const f=y("ur-search"),b=y("ur-button-list"),k=y("ur-page-table"),v=P("loading");return i(),D("div",V,[O((i(),C(k,{columns:n,"columns-key":"truckMarketKey","data-source":m.value,paginator:_.value,"row-key":"tm_sid"},{header:h(()=>[l(f,{ref_key:"UrSearchElement",ref:e,items:c},null,512)]),bodyCell:h(({column:I,record:x})=>[I.key==="action"?(i(),C(b,{key:0,"more-placement":"bottomRight","buttons-default-type":"link","max-display-count":3,"buttons-props":[{text:"下单",onAction:()=>B(x)}]},null,8,["buttons-props"])):U("",!0)]),_:1},8,["data-source","paginator"])),[[v,A.value]])])}}}),N=[{name:"items",description:"搜索表单列表",type:"MixedSearchItem[]",option:"-",default:"[]"},{name:"useCurrentChangeFunc",description:"是否使用内置的搜索函数处理",type:"boolean",option:"-",default:"true"},{name:"onSearchCurrentChange",description:"取消内置搜索函数处理时,点击搜索时触发的事件",type:"function",option:"-",default:"-"},{name:"onResetChange",description:"点击重置时完成的回调函数",type:"function",option:"-",default:"(query,searchItems) =>"}],K=[{name:"key",description:"搜索字段名称",type:"string",option:"-",default:""},{name:"label",description:"表单标签名称",type:"string",option:"-",default:"-"},{name:"value",description:"默认值",type:"string",option:"-",default:""},{name:"valueType",description:"默认值类型",type:"string",option:"string | number",default:"string"},{name:"placeholder",description:"占位符",type:"string",option:"-",default:"-"},{name:"rsql",description:"reql search字段搜素模式，可以传处理函数，设置为false不开启reql搜索",type:"((...values: string[]) => ExpressionNode) | boolean",option:"-",default:"默认为eq === 搜索"},{name:"onChange",description:"输入或选择值改变时事件",type:" (event: any) => void",option:"-",default:"-"}],$=[{name:"type",description:"输入框类型",type:"string",option:"-",default:"input"}],H=[{name:"type",description:"表单类型",type:"string",option:"-",default:"inputInt"},{name:"valueType",description:"值类型",type:"string",option:"-",default:"Number"},{name:"rate",description:"倍率",type:"number",option:"-",default:"1"},{name:"precision",description:"保留几位小数点",type:"number",option:"-",default:"-"},{name:"max",description:"最大值",type:"number",option:"-",default:"-"},{name:"min",description:"最小值",type:"number",option:"-",default:"-"},{name:"step",description:"步进器",type:"number",option:"-",default:"0.01"}],J=[{name:"type",description:"表单类型",type:"string",option:"-",default:"select"},{name:"selectOptions",description:"选择框数据",type:"{value, name,key}[]",option:"-",default:"[]"},{name:"onSearch",description:"远程搜索",type:"function",option:"-",default:"[]"},{name:"filterOption",description:"是否开启本地数据搜索",type:"boolean",option:"-",default:"false"},{name:"searchDebounceWait",description:"远程搜索节流",type:"number",option:"-",default:"-"},{name:"mode",description:"设置 Select 的模式为多选或标签",type:"number",option:"'multiple' | 'tags' | 'combobox'",default:"-"}],Q=[{name:"type",description:"表单类型",type:"string",option:"-",default:"cascader"},{name:"selectOptions",description:"选择框数据",type:"CascaderOption 与UrCascader组件的数据相同",option:"-",default:"[]"}],W=[{name:"type",description:"表单类型",type:"string",option:"-",default:"checkbox"}],z=[{name:"type",description:"表单类型",type:"string",option:"-",default:"date"},{name:"picker",description:"日期选择框模式",type:"string",option:"time | date | week | month | quarter | year | decade",default:"date"},{name:"disabledDate",description:"不可选择的日期",type:"(currentDate: dayjs) => boolean",option:"-",default:"-"}],G=[{name:"type",description:"表单类型",type:"string",option:"-",default:"date-range"},{name:"picker",description:"日期选择框模式",type:"string",option:"time | date | week | month | quarter | year | decade",default:"date"},{name:"fromDate",description:"开始时间字段",type:"string",option:"-",default:"-"},{name:"toDate",description:"结束时间字段",type:"string",option:"-",default:"-"},{name:"fromDateValue",description:"开始时间默认值",type:"string",option:"-",default:"-"},{name:"fromDateValue",description:"结束时间默认值",type:"string",option:"-",default:"-"},{name:"disabledDate",description:"不可选择的日期",type:"(currentDate: dayjs) => boolean",option:"-",default:"-"},{name:"onCalendarChange",description:"待选日期发生变化的回调",type:"function(dates: [dayjs, dayjs] | [string, string], dateStrings: [string, string], info: { range:start|end })",option:"-",default:"-"}],X=[{name:"type",description:"表单类型",type:"string",option:"-",default:"area"},{name:"level",description:"地址库级别，默认省市区",type:"string",option:"2~5",default:"4"}],Y=s("h1",{id:"search-搜索",tabindex:"-1"},"Search 搜索",-1),Z=s("h2",{id:"基本用法",tabindex:"-1"},"基本用法",-1),ss=M(`<details><summary>展开查看</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;layout-content&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">ur-page-table</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">v-loading</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;tableLoading&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:columns</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;tableColumns&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">columns-key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;truckMarketKey&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:data-source</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;tableData&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:paginator</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;tablePaginator&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">row-key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;tm_sid&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">header</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">ur-search</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;UrSearchElement&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:items</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;searchItems&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">bodyCell</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">{ column, record }</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">v-if</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">column.key </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;action&#39;&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#85E89D;">ur-button-list</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">more-placement</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;bottomRight&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">buttons-default-type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;link&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">:max-display-count</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;3&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">:buttons-props</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;[{ text: &#39;下单&#39;, onAction: () =&gt; handlePlaceOrder(record) }]&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">          /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">ur-page-table</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { commonSearchItem, MixedSearchItem } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/components/search&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { onRefreshData } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/utils/router&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { message } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;ant-design-vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> dayjs </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;dayjs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { UrPageTableColumn } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;../../table/typing&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// import { defaultApiPaginator } from &#39;@/api/typing&#39;;</span></span>
<span class="line"><span style="color:#6A737D;">// import { TruckMarket } from &#39;@/api/types/response/transport/truck-market&#39;;</span></span>
<span class="line"><span style="color:#6A737D;">// import { api, companyURL } from &#39;@/api&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// import { dateTime, money } from &#39;@/utils/filter&#39;;</span></span>
<span class="line"><span style="color:#6A737D;">// import { truck as truckRaw } from &#39;@/config/constant/raw&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">UrSearchElement</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">isDisabled</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">searchItems</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Array</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">MixedSearchItem</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">commonSearchItem.commonDateRangeTime,</span></span>
<span class="line"><span style="color:#E1E4E8;">    fromDate: </span><span style="color:#9ECBFF;">&#39;form_create_time&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    toDate: </span><span style="color:#9ECBFF;">&#39;to_create_time&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    label: </span><span style="color:#9ECBFF;">&#39;发布时间&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    fromDateValue: </span><span style="color:#B392F0;">dayjs</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">    toDateValue: </span><span style="color:#B392F0;">dayjs</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">commonSearchItem.commonDateRangeTime,</span></span>
<span class="line"><span style="color:#E1E4E8;">    fromDate: </span><span style="color:#9ECBFF;">&#39;form_create_time2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    toDate: </span><span style="color:#9ECBFF;">&#39;to_create_time2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    label: </span><span style="color:#9ECBFF;">&#39;禁止时间&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    disabled: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">commonSearchItem.commonDateRangeTime,</span></span>
<span class="line"><span style="color:#E1E4E8;">    fromDate: </span><span style="color:#9ECBFF;">&#39;form_create_time3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    toDate: </span><span style="color:#9ECBFF;">&#39;to_create_time4&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    label: </span><span style="color:#9ECBFF;">&#39;change事件&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">onChange</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      message.</span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`onChange事件，控制台查看输出内容\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(event, </span><span style="color:#9ECBFF;">&#39;onChange&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">onCalendarChange</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      message.</span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`onCalendarChange事件，控制台查看输出内容\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(event, </span><span style="color:#9ECBFF;">&#39;onCalendarChange&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">commonSearchItem.commonDateRangeTime,</span></span>
<span class="line"><span style="color:#E1E4E8;">    fromDate: </span><span style="color:#9ECBFF;">&#39;form_create_time3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    toDate: </span><span style="color:#9ECBFF;">&#39;to_create_time4&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    label: </span><span style="color:#9ECBFF;">&#39;disabledDate禁用&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">disabledDate</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">commonSearchItem.commonArea,</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;start_code&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    label: </span><span style="color:#9ECBFF;">&#39;出发地&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    level: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">commonSearchItem.commonArea,</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;desti_code&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    label: </span><span style="color:#9ECBFF;">&#39;目的地&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    level: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">commonSearchItem.commonSelect,</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;trucktype_code&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    label: </span><span style="color:#9ECBFF;">&#39;车辆类型&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    placeholder: </span><span style="color:#9ECBFF;">&#39;请选择&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    mode: </span><span style="color:#9ECBFF;">&#39;tags&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// selectOptions: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//   {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//     key: &#39;await&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//     value: 1,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//     name: &#39;待处理&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//   },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//   {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//     key: &#39;fail&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//     value: 88,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//     name: &#39;失效&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//   },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//   {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//     key: &#39;success&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//     value: 99,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//     name: &#39;已生效&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//   },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">onChange</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(event);</span></span>
<span class="line"><span style="color:#E1E4E8;">      UrSearchElement.value.values.trucktype_code_multiple </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">commonSearchItem.commonSelect,</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;trucktype_code_multiple&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    label: </span><span style="color:#9ECBFF;">&#39;车辆类型多选&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    placeholder: </span><span style="color:#9ECBFF;">&#39;请选择&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    mode: </span><span style="color:#9ECBFF;">&#39;multiple&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    value: [</span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    selectOptions: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        key: </span><span style="color:#9ECBFF;">&#39;await&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        value: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;待处理&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        key: </span><span style="color:#9ECBFF;">&#39;fail&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        value: </span><span style="color:#79B8FF;">88</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;失效&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        key: </span><span style="color:#9ECBFF;">&#39;success&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        value: </span><span style="color:#79B8FF;">99</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;已生效&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">commonSearchItem.commonSelect,</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;trucktype_code_value&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    label: </span><span style="color:#9ECBFF;">&#39;车辆类型(本地过滤)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    placeholder: </span><span style="color:#9ECBFF;">&#39;请选择&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    value: [</span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    filterOption: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    selectOptions: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        key: </span><span style="color:#9ECBFF;">&#39;await&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        value: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;待处理&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        key: </span><span style="color:#9ECBFF;">&#39;fail&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        value: </span><span style="color:#79B8FF;">88</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;失效&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        key: </span><span style="color:#9ECBFF;">&#39;success&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        value: </span><span style="color:#79B8FF;">99</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;已生效&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">commonSearchItem.commonCascader,</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;cargoCategoryUid&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    label: </span><span style="color:#9ECBFF;">&#39;商品类别&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    placeholder: </span><span style="color:#9ECBFF;">&#39;请选择&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    selectOptions: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">tableColumns</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">UrPageTableColumn</span><span style="color:#E1E4E8;">[] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&#39;序号&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;index&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">customRender</span><span style="color:#E1E4E8;">: ({ </span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> index </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&#39;车牌号码&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    dataIndex: </span><span style="color:#9ECBFF;">&#39;tm_front_plate&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    width: </span><span style="color:#79B8FF;">120</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&#39;联系人&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    dataIndex: </span><span style="color:#9ECBFF;">&#39;tm_contact&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    width: </span><span style="color:#79B8FF;">130</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&#39;联系电话&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    dataIndex: </span><span style="color:#9ECBFF;">&#39;tm_phone&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    width: </span><span style="color:#79B8FF;">180</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&#39;车辆类型&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    dataIndex: </span><span style="color:#9ECBFF;">&#39;tm_trucktype&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    width: </span><span style="color:#79B8FF;">150</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&#39;出发地&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    dataIndex: </span><span style="color:#9ECBFF;">&#39;tm_start_name&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    width: </span><span style="color:#79B8FF;">150</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&#39;目的地&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    dataIndex: </span><span style="color:#9ECBFF;">&#39;tm_desti_name&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    width: </span><span style="color:#79B8FF;">150</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&#39;运费（元）&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    dataIndex: </span><span style="color:#9ECBFF;">&#39;tm_bid&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// customRender: ({ text }: { text: number }) =&gt; (text === -1 ? &#39;面议&#39; : money(text)),</span></span>
<span class="line"><span style="color:#E1E4E8;">    width: </span><span style="color:#79B8FF;">150</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&#39;发车时间&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    dataIndex: </span><span style="color:#9ECBFF;">&#39;create_time&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// customRender: ({ text }: TableColumnCustomRenderParam) =&gt; dateTime(text),</span></span>
<span class="line"><span style="color:#E1E4E8;">    width: </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&#39;有效日期&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    dataIndex: </span><span style="color:#9ECBFF;">&#39;om_valid_at_time&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// customRender: ({ text }: TableColumnCustomRenderParam) =&gt; dateTime(text),</span></span>
<span class="line"><span style="color:#E1E4E8;">    width: </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// const tableData = ref&lt;TruckMarket[]&gt;([]);</span></span>
<span class="line"><span style="color:#6A737D;">// const tablePaginator = ref(defaultApiPaginator);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">tableData</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">[]&gt;([{}, {}]);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">tablePaginator</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">({});</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">tableLoading</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">Promise</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">unknown</span><span style="color:#E1E4E8;">&gt;&gt;();</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">refreshData</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">onRefreshData</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">route</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(route.query, </span><span style="color:#9ECBFF;">&#39;query&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   tableLoading.value = api.get&lt;TruckMarket[]&gt;(companyURL.truck_market_list, route.query).then((response) =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     tableData.value = response.data;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     tablePaginator.value = response.paginator;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// const router = useRouter();</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handlePlaceOrder</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">record</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   router.push({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     name: &#39;truck-order-add&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     query: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       truckId: record.tm_sid,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       tm_phone: record.tm_phone,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       tm_front_plate: record.tm_front_plate,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       tm_contact: record.tm_contact,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   });</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;less&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;layout-content&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">ur-page-table</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">v-loading</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tableLoading&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:columns</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tableColumns&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">columns-key</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;truckMarketKey&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:data-source</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tableData&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:paginator</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tablePaginator&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">row-key</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tm_sid&quot;</span></span>
<span class="line"><span style="color:#24292E;">    &gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> #</span><span style="color:#6F42C1;">header</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">ur-search</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;UrSearchElement&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:items</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;searchItems&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> #</span><span style="color:#6F42C1;">bodyCell</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">{ column, record }</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">v-if</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">column.key </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;action&#39;&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">          &lt;</span><span style="color:#22863A;">ur-button-list</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">more-placement</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;bottomRight&quot;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">buttons-default-type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;link&quot;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">:max-display-count</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;3&quot;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">:buttons-props</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;[{ text: &#39;下单&#39;, onAction: () =&gt; handlePlaceOrder(record) }]&quot;</span></span>
<span class="line"><span style="color:#24292E;">          /&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">ur-page-table</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { commonSearchItem, MixedSearchItem } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/components/search&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { onRefreshData } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/utils/router&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { message } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;ant-design-vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> dayjs </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;dayjs&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { UrPageTableColumn } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;../../table/typing&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// import { defaultApiPaginator } from &#39;@/api/typing&#39;;</span></span>
<span class="line"><span style="color:#6A737D;">// import { TruckMarket } from &#39;@/api/types/response/transport/truck-market&#39;;</span></span>
<span class="line"><span style="color:#6A737D;">// import { api, companyURL } from &#39;@/api&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// import { dateTime, money } from &#39;@/utils/filter&#39;;</span></span>
<span class="line"><span style="color:#6A737D;">// import { truck as truckRaw } from &#39;@/config/constant/raw&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">UrSearchElement</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">isDisabled</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">searchItems</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Array</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">MixedSearchItem</span><span style="color:#24292E;">&gt; </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">commonSearchItem.commonDateRangeTime,</span></span>
<span class="line"><span style="color:#24292E;">    fromDate: </span><span style="color:#032F62;">&#39;form_create_time&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    toDate: </span><span style="color:#032F62;">&#39;to_create_time&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    label: </span><span style="color:#032F62;">&#39;发布时间&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    fromDateValue: </span><span style="color:#6F42C1;">dayjs</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">    toDateValue: </span><span style="color:#6F42C1;">dayjs</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">commonSearchItem.commonDateRangeTime,</span></span>
<span class="line"><span style="color:#24292E;">    fromDate: </span><span style="color:#032F62;">&#39;form_create_time2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    toDate: </span><span style="color:#032F62;">&#39;to_create_time2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    label: </span><span style="color:#032F62;">&#39;禁止时间&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    disabled: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">commonSearchItem.commonDateRangeTime,</span></span>
<span class="line"><span style="color:#24292E;">    fromDate: </span><span style="color:#032F62;">&#39;form_create_time3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    toDate: </span><span style="color:#032F62;">&#39;to_create_time4&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    label: </span><span style="color:#032F62;">&#39;change事件&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">onChange</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">event</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      message.</span><span style="color:#6F42C1;">success</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`onChange事件，控制台查看输出内容\`</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(event, </span><span style="color:#032F62;">&#39;onChange&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">onCalendarChange</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">event</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      message.</span><span style="color:#6F42C1;">success</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`onCalendarChange事件，控制台查看输出内容\`</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(event, </span><span style="color:#032F62;">&#39;onCalendarChange&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">commonSearchItem.commonDateRangeTime,</span></span>
<span class="line"><span style="color:#24292E;">    fromDate: </span><span style="color:#032F62;">&#39;form_create_time3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    toDate: </span><span style="color:#032F62;">&#39;to_create_time4&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    label: </span><span style="color:#032F62;">&#39;disabledDate禁用&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">disabledDate</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">e</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">commonSearchItem.commonArea,</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;start_code&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    label: </span><span style="color:#032F62;">&#39;出发地&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    level: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">commonSearchItem.commonArea,</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;desti_code&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    label: </span><span style="color:#032F62;">&#39;目的地&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    level: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">commonSearchItem.commonSelect,</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;trucktype_code&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    label: </span><span style="color:#032F62;">&#39;车辆类型&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    placeholder: </span><span style="color:#032F62;">&#39;请选择&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    mode: </span><span style="color:#032F62;">&#39;tags&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// selectOptions: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//   {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//     key: &#39;await&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//     value: 1,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//     name: &#39;待处理&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//   },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//   {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//     key: &#39;fail&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//     value: 88,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//     name: &#39;失效&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//   },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//   {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//     key: &#39;success&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//     value: 99,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//     name: &#39;已生效&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//   },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">onChange</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">event</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(event);</span></span>
<span class="line"><span style="color:#24292E;">      UrSearchElement.value.values.trucktype_code_multiple </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">commonSearchItem.commonSelect,</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;trucktype_code_multiple&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    label: </span><span style="color:#032F62;">&#39;车辆类型多选&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    placeholder: </span><span style="color:#032F62;">&#39;请选择&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    mode: </span><span style="color:#032F62;">&#39;multiple&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    value: [</span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    selectOptions: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        key: </span><span style="color:#032F62;">&#39;await&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        value: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;待处理&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        key: </span><span style="color:#032F62;">&#39;fail&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        value: </span><span style="color:#005CC5;">88</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;失效&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        key: </span><span style="color:#032F62;">&#39;success&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        value: </span><span style="color:#005CC5;">99</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;已生效&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">commonSearchItem.commonSelect,</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;trucktype_code_value&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    label: </span><span style="color:#032F62;">&#39;车辆类型(本地过滤)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    placeholder: </span><span style="color:#032F62;">&#39;请选择&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    value: [</span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    filterOption: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    selectOptions: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        key: </span><span style="color:#032F62;">&#39;await&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        value: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;待处理&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        key: </span><span style="color:#032F62;">&#39;fail&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        value: </span><span style="color:#005CC5;">88</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;失效&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        key: </span><span style="color:#032F62;">&#39;success&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        value: </span><span style="color:#005CC5;">99</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;已生效&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">commonSearchItem.commonCascader,</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;cargoCategoryUid&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    label: </span><span style="color:#032F62;">&#39;商品类别&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    placeholder: </span><span style="color:#032F62;">&#39;请选择&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    selectOptions: [],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">tableColumns</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">UrPageTableColumn</span><span style="color:#24292E;">[] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&#39;序号&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;index&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">customRender</span><span style="color:#24292E;">: ({ </span><span style="color:#E36209;">index</span><span style="color:#24292E;"> }) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> index </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&#39;车牌号码&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    dataIndex: </span><span style="color:#032F62;">&#39;tm_front_plate&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    width: </span><span style="color:#005CC5;">120</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&#39;联系人&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    dataIndex: </span><span style="color:#032F62;">&#39;tm_contact&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    width: </span><span style="color:#005CC5;">130</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&#39;联系电话&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    dataIndex: </span><span style="color:#032F62;">&#39;tm_phone&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    width: </span><span style="color:#005CC5;">180</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&#39;车辆类型&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    dataIndex: </span><span style="color:#032F62;">&#39;tm_trucktype&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    width: </span><span style="color:#005CC5;">150</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&#39;出发地&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    dataIndex: </span><span style="color:#032F62;">&#39;tm_start_name&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    width: </span><span style="color:#005CC5;">150</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&#39;目的地&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    dataIndex: </span><span style="color:#032F62;">&#39;tm_desti_name&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    width: </span><span style="color:#005CC5;">150</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&#39;运费（元）&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    dataIndex: </span><span style="color:#032F62;">&#39;tm_bid&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// customRender: ({ text }: { text: number }) =&gt; (text === -1 ? &#39;面议&#39; : money(text)),</span></span>
<span class="line"><span style="color:#24292E;">    width: </span><span style="color:#005CC5;">150</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&#39;发车时间&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    dataIndex: </span><span style="color:#032F62;">&#39;create_time&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// customRender: ({ text }: TableColumnCustomRenderParam) =&gt; dateTime(text),</span></span>
<span class="line"><span style="color:#24292E;">    width: </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&#39;有效日期&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    dataIndex: </span><span style="color:#032F62;">&#39;om_valid_at_time&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// customRender: ({ text }: TableColumnCustomRenderParam) =&gt; dateTime(text),</span></span>
<span class="line"><span style="color:#24292E;">    width: </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// const tableData = ref&lt;TruckMarket[]&gt;([]);</span></span>
<span class="line"><span style="color:#6A737D;">// const tablePaginator = ref(defaultApiPaginator);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">tableData</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">any</span><span style="color:#24292E;">[]&gt;([{}, {}]);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">tablePaginator</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">({});</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">tableLoading</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">Promise</span><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">unknown</span><span style="color:#24292E;">&gt;&gt;();</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">refreshData</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">onRefreshData</span><span style="color:#24292E;">((</span><span style="color:#E36209;">route</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(route.query, </span><span style="color:#032F62;">&#39;query&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   tableLoading.value = api.get&lt;TruckMarket[]&gt;(companyURL.truck_market_list, route.query).then((response) =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     tableData.value = response.data;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     tablePaginator.value = response.paginator;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   });</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// const router = useRouter();</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handlePlaceOrder</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">record</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   router.push({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     name: &#39;truck-order-add&#39;,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     query: {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       truckId: record.tm_sid,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       tm_phone: record.tm_phone,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       tm_front_plate: record.tm_front_plate,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       tm_contact: record.tm_contact,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   });</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;less&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="api" tabindex="-1">API</h2><h3 id="urpagetable" tabindex="-1">UrPageTable</h3>`,3),ns=s("p",null,[p("更多属性请参考"),s("a",{href:"https://www.antdv.com/components/table-cn#API",target:"_blank"},"antd Table 表格。")],-1),as=s("h3",{id:"mixedsearchitem-searchitem",tabindex:"-1"},[s("code",null,"MixedSearchItem"),p(),s("code",null,"SearchItem")],-1),ls=s("p",null,[p("更多属性请参考"),s("a",{href:"https://www.antdv.com/components/tabs-cn#API",target:"_blank"},"antd Tabs 标签页。")],-1),ps=s("h3",{id:"以下属性都继承searchitem",tabindex:"-1"},[p("以下属性都继承"),s("code",null,"SearchItem")],-1),os=s("h3",{id:"commonsearchitem-commoninput-输入框",tabindex:"-1"},[s("code",null,"commonSearchItem.commonInput"),p(" 输入框")],-1),es=s("h3",{id:"commonsearchitem-commoninputint-数字输入框",tabindex:"-1"},[s("code",null,"commonSearchItem.commonInputInt"),p(" 数字输入框")],-1),ts=s("h3",{id:"commonsearchitem-commonselect-选择框",tabindex:"-1"},[s("code",null,"commonSearchItem.commonSelect"),p(" 选择框")],-1),cs=s("h3",{id:"commonsearchitem-commoncheckbox-复选框",tabindex:"-1"},[s("code",null,"commonSearchItem.commonCheckbox"),p(" 复选框")],-1),rs=s("h3",{id:"commonsearchitem-commondatetime-日期选择",tabindex:"-1"},[s("code",null,"commonSearchItem.commonDateTime"),p(" 日期选择")],-1),Es=s("h3",{id:"commonsearchitem-commondaterangetime-日期范围选择",tabindex:"-1"},[s("code",null,"commonSearchItem.commonDateRangeTime"),p(" 日期范围选择")],-1),ys=s("h3",{id:"commonsearchitem-commoncascader-级联",tabindex:"-1"},[s("code",null,"commonSearchItem.commonCascader"),p(" 级联")],-1),is=s("h3",{id:"commonsearchitem-commonarea-地址库选择",tabindex:"-1"},[s("code",null,"commonSearchItem.commonArea"),p(" 地址库选择")],-1),_s=JSON.parse('{"title":"Search 搜索","description":"","frontmatter":{},"headers":[],"relativePath":"components/search.md","filePath":"components/search.md","lastUpdated":1696944114000}'),ms={name:"components/search.md"},As=Object.assign(ms,{setup(t){return(e,c)=>{const n=y("ur-api-table");return i(),D("div",null,[Y,Z,l(L),ss,l(n,{"data-source":o(N)},null,8,["data-source"]),ns,as,l(n,{"data-source":o(K)},null,8,["data-source"]),ls,ps,os,l(n,{"data-source":o($)},null,8,["data-source"]),es,l(n,{"data-source":o(H)},null,8,["data-source"]),ts,l(n,{"data-source":o(J)},null,8,["data-source"]),cs,l(n,{"data-source":o(W)},null,8,["data-source"]),rs,l(n,{"data-source":o(z)},null,8,["data-source"]),Es,l(n,{"data-source":o(G)},null,8,["data-source"]),ys,l(n,{"data-source":o(Q)},null,8,["data-source"]),is,l(n,{"data-source":o(X)},null,8,["data-source"])])}}});export{_s as __pageData,As as default};
