import{u as w,o as v,c as r,d,a as u,b as F,e as S}from"./chunks/index.367adddd.js";import{j as R,d as T,h as y,C as E,a2 as P,o as i,c as D,a3 as K,b as h,w as _,H as l,e as U,_ as M,l as o,k as s,Q as O,a as p}from"./chunks/framework.a87c977f.js";import{m as g}from"./chunks/useConfigInject.022f1a10.js";import"./chunks/keyBy.6c80b526.js";import"./chunks/AntdIcon.f68e35b8.js";import"./chunks/CloseOutlined.655ada46.js";function L(t,e){const c=e||w(),n=()=>t(c);return R(n),v(m=>t(m)),n}const V={class:"layout-content"},N=T({__name:"UrSearchDemo",setup(t){const e=y(),c=[{...r,fromDate:"form_create_time",toDate:"to_create_time",label:"发布时间",fromDateValue:d(),toDateValue:d()},{...r,fromDate:"form_create_time2",toDate:"to_create_time2",label:"禁止时间",disabled:!0},{...r,fromDate:"form_create_time3",toDate:"to_create_time4",label:"change事件",onChange:a=>{g.success("onChange事件，控制台查看输出内容"),console.log(a,"onChange")},onCalendarChange:a=>{g.success("onCalendarChange事件，控制台查看输出内容"),console.log(a,"onCalendarChange")}},{...r,fromDate:"form_create_time3",toDate:"to_create_time4",label:"disabledDate禁用",disabledDate:a=>!0},{...u,key:"start_code",label:"出发地",level:3},{...u,key:"desti_code",label:"目的地",level:3},{...F,key:"trucktype_code",label:"车辆类型",placeholder:"请选择",mode:"tags",onChange:a=>{console.log(a),e.value.values.trucktype_code_multiple=[]}},{...F,key:"trucktype_code_multiple",label:"车辆类型多选",placeholder:"请选择",mode:"multiple",value:["1"],selectOptions:[{key:"await",value:1,name:"待处理"},{key:"fail",value:88,name:"失效"},{key:"success",value:99,name:"已生效"}]},{...S,key:"cargoCategoryUid",label:"商品类别",placeholder:"请选择",selectOptions:[]}],n=[{title:"序号",key:"index",customRender:({index:a})=>a+1},{title:"车牌号码",dataIndex:"tm_front_plate",width:120},{title:"联系人",dataIndex:"tm_contact",width:130},{title:"联系电话",dataIndex:"tm_phone",width:180},{title:"车辆类型",dataIndex:"tm_trucktype",width:150},{title:"出发地",dataIndex:"tm_start_name",width:150},{title:"目的地",dataIndex:"tm_desti_name",width:150},{title:"运费（元）",dataIndex:"tm_bid",width:150},{title:"发车时间",dataIndex:"create_time",width:200},{title:"有效日期",dataIndex:"om_valid_at_time",width:200}],m=y([{},{}]),C=y({}),A=y();L(a=>{console.log(a.query,"query")});const f=a=>{};return(a,Fs)=>{const b=E("ur-search"),B=E("ur-button-list"),k=E("ur-page-table"),x=P("loading");return i(),D("div",V,[K((i(),h(k,{columns:n,"columns-key":"truckMarketKey","data-source":m.value,paginator:C.value,"row-key":"tm_sid"},{header:_(()=>[l(b,{ref_key:"UrSearchElement",ref:e,items:c},null,512)]),bodyCell:_(({column:q,record:I})=>[q.key==="action"?(i(),h(B,{key:0,"more-placement":"bottomRight","buttons-default-type":"link","max-display-count":3,"buttons-props":[{text:"下单",onAction:()=>f(I)}]},null,8,["buttons-props"])):U("",!0)]),_:1},8,["data-source","paginator"])),[[x,A.value]])])}}});const j=M(N,[["__scopeId","data-v-4ac8861f"]]),z=[{name:"items",description:"搜索表单列表",type:"MixedSearchItem[]",option:"-",default:"[]"},{name:"useCurrentChangeFunc",description:"是否使用内置的搜索函数处理",type:"boolean",option:"-",default:"true"},{name:"onSearchCurrentChange",description:"取消内置搜索函数处理时,点击搜索时触发的事件",type:"function",option:"-",default:"-"},{name:"onResetChange",description:"点击重置时完成的回调函数",type:"function",option:"-",default:"(query,searchItems) =>"}],$=[{name:"key",description:"搜索字段名称",type:"string",option:"-",default:""},{name:"label",description:"表单标签名称",type:"string",option:"-",default:"-"},{name:"value",description:"默认值",type:"string",option:"-",default:""},{name:"valueType",description:"默认值类型",type:"string",option:"string | number",default:"string"},{name:"placeholder",description:"占位符",type:"string",option:"-",default:"-"},{name:"rsql",description:"reql search字段搜素模式，可以传处理函数，设置为false不开启reql搜索",type:"((...values: string[]) => ExpressionNode) | boolean",option:"-",default:"默认为eq === 搜索"},{name:"onChange",description:"输入或选择值改变时事件",type:" (event: any) => void",option:"-",default:"-"}],H=[{name:"type",description:"输入框类型",type:"string",option:"-",default:"input"}],J=[{name:"type",description:"表单类型",type:"string",option:"-",default:"inputInt"},{name:"valueType",description:"值类型",type:"string",option:"-",default:"Number"},{name:"rate",description:"倍率",type:"number",option:"-",default:"1"},{name:"precision",description:"保留几位小数点",type:"number",option:"-",default:"-"},{name:"max",description:"最大值",type:"number",option:"-",default:"-"},{name:"min",description:"最小值",type:"number",option:"-",default:"-"},{name:"step",description:"步进器",type:"number",option:"-",default:"0.01"}],Q=[{name:"type",description:"表单类型",type:"string",option:"-",default:"select"},{name:"selectOptions",description:"选择框数据",type:"{value, name,key}[]",option:"-",default:"[]"},{name:"onSearch",description:"远程搜索",type:"function",option:"-",default:"[]"},{name:"filterOption",description:"是否开启本地数据搜索",type:"boolean",option:"-",default:"false"},{name:"searchDebounceWait",description:"远程搜索节流",type:"number",option:"-",default:"-"},{name:"mode",description:"设置 Select 的模式为多选或标签",type:"number",option:"'multiple' | 'tags' | 'combobox'",default:"-"}],W=[{name:"type",description:"表单类型",type:"string",option:"-",default:"cascader"},{name:"selectOptions",description:"选择框数据",type:"CascaderOption 与UrCascader组件的数据相同",option:"-",default:"[]"}],G=[{name:"type",description:"表单类型",type:"string",option:"-",default:"checkbox"}],X=[{name:"type",description:"表单类型",type:"string",option:"-",default:"date"},{name:"picker",description:"日期选择框模式",type:"string",option:"time | date | week | month | quarter | year | decade",default:"date"},{name:"disabledDate",description:"不可选择的日期",type:"(currentDate: dayjs) => boolean",option:"-",default:"-"}],Y=[{name:"type",description:"表单类型",type:"string",option:"-",default:"date-range"},{name:"picker",description:"日期选择框模式",type:"string",option:"time | date | week | month | quarter | year | decade",default:"date"},{name:"fromDate",description:"开始时间字段",type:"string",option:"-",default:"-"},{name:"toDate",description:"结束时间字段",type:"string",option:"-",default:"-"},{name:"fromDateValue",description:"开始时间默认值",type:"string",option:"-",default:"-"},{name:"fromDateValue",description:"结束时间默认值",type:"string",option:"-",default:"-"},{name:"disabledDate",description:"不可选择的日期",type:"(currentDate: dayjs) => boolean",option:"-",default:"-"},{name:"onCalendarChange",description:"待选日期发生变化的回调",type:"function(dates: [dayjs, dayjs] | [string, string], dateStrings: [string, string], info: { range:start|end })",option:"-",default:"-"}],Z=[{name:"type",description:"表单类型",type:"string",option:"-",default:"area"},{name:"level",description:"地址库级别，默认省市区",type:"string",option:"2~5",default:"4"}],ss=s("h1",{id:"search-搜索",tabindex:"-1"},"Search 搜索",-1),ns=s("h2",{id:"基本用法",tabindex:"-1"},"基本用法",-1),as=O(`<details><summary>展开查看</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;layout-content&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">ur-page-table</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">v-loading</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;tableLoading&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:columns</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;tableColumns&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">columns-key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;truckMarketKey&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:data-source</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;tableData&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:paginator</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;tablePaginator&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:row-selection</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{ selectedRowKeys: tableSelectedRowKeys, onChange: handleTableSelectChanged }&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:row-key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;(record) =&gt; record.tm_front_plate&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">&lt;!-- row-key=&quot;tm_front_plate&quot; --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">header</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">&lt;!-- &lt;ur-search :items=&quot;searchItems&quot; /&gt; --&gt;</span></span>
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
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { actionColumn } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;../data&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { UrPageTableColumn } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;../typing&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// import { defaultApiPaginator } from &#39;@/api/typing&#39;;</span></span>
<span class="line"><span style="color:#6A737D;">// import { TruckMarket } from &#39;@/api/types/response/transport/truck-market&#39;;</span></span>
<span class="line"><span style="color:#6A737D;">// import { api, companyURL } from &#39;@/api&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// import { onRefreshData } from &#39;@/utils/router&#39;;</span></span>
<span class="line"><span style="color:#6A737D;">// import { dateTime, money } from &#39;@/utils/filter&#39;;</span></span>
<span class="line"><span style="color:#6A737D;">// import { truck as truckRaw } from &#39;@/config/constant/raw&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// import { commonSearchItem, MixedSearchItem } from &#39;@/components/search&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// const searchItems: Array&lt;MixedSearchItem&gt; = [</span></span>
<span class="line"><span style="color:#6A737D;">//   {</span></span>
<span class="line"><span style="color:#6A737D;">//     ...commonSearchItem.commonDateRangeTime,</span></span>
<span class="line"><span style="color:#6A737D;">//     fromDate: &#39;form_create_time&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//     toDate: &#39;to_create_time&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//     label: &#39;发布时间&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//   },</span></span>
<span class="line"><span style="color:#6A737D;">//   {</span></span>
<span class="line"><span style="color:#6A737D;">//     ...commonSearchItem.commonArea,</span></span>
<span class="line"><span style="color:#6A737D;">//     key: &#39;start_code&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//     label: &#39;出发地&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//     level: 3,</span></span>
<span class="line"><span style="color:#6A737D;">//   },</span></span>
<span class="line"><span style="color:#6A737D;">//   {</span></span>
<span class="line"><span style="color:#6A737D;">//     ...commonSearchItem.commonArea,</span></span>
<span class="line"><span style="color:#6A737D;">//     key: &#39;desti_code&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//     label: &#39;目的地&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//     level: 3,</span></span>
<span class="line"><span style="color:#6A737D;">//   },</span></span>
<span class="line"><span style="color:#6A737D;">//   {</span></span>
<span class="line"><span style="color:#6A737D;">//     ...commonSearchItem.commonSelect,</span></span>
<span class="line"><span style="color:#6A737D;">//     key: &#39;trucktype_code&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//     label: &#39;车辆类型&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//     placeholder: &#39;请选择&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//     selectOptions: truckRaw.truck_type,</span></span>
<span class="line"><span style="color:#6A737D;">//   },</span></span>
<span class="line"><span style="color:#6A737D;">// ];</span></span>
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
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">actionColumn</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    width: </span><span style="color:#79B8FF;">140</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  }),</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// const tableData = ref&lt;TruckMarket[]&gt;([]);</span></span>
<span class="line"><span style="color:#6A737D;">// const tablePaginator = ref(defaultApiPaginator);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">tableData</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">[]&gt;([{ tm_front_plate: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> }, { tm_front_plate: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> }]);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">tablePaginator</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">({});</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">tableLoading</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">Promise</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">unknown</span><span style="color:#E1E4E8;">&gt;&gt;();</span></span>
<span class="line"><span style="color:#6A737D;">// const refreshData = onRefreshData((route) =&gt; {</span></span>
<span class="line"><span style="color:#6A737D;">//   tableLoading.value = api.get&lt;TruckMarket[]&gt;(companyURL.truck_market_list, route.query).then((response) =&gt; {</span></span>
<span class="line"><span style="color:#6A737D;">//     tableData.value = response.data;</span></span>
<span class="line"><span style="color:#6A737D;">//     tablePaginator.value = response.paginator;</span></span>
<span class="line"><span style="color:#6A737D;">//   });</span></span>
<span class="line"><span style="color:#6A737D;">// });</span></span>
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
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">tableSelectedRowKeys</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">([]);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleTableSelectChanged</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">rowKeys</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">records</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">never</span><span style="color:#E1E4E8;">[]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(rowKeys, </span><span style="color:#9ECBFF;">&#39;rowKeys&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  tableSelectedRowKeys.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> rowKeys;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;less&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.layout-content</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   height: 100%;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">600</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">overflow</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">hidden</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">padding</span><span style="color:#E1E4E8;">: @ur-spacing-3;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">font-size</span><span style="color:#E1E4E8;">: @ur-font-size-2;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#E1E4E8;">: @ur-color-8;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">flex-direction</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">column</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">position</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">relative</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;layout-content&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">ur-page-table</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">v-loading</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tableLoading&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:columns</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tableColumns&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">columns-key</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;truckMarketKey&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:data-source</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tableData&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:paginator</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tablePaginator&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:row-selection</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{ selectedRowKeys: tableSelectedRowKeys, onChange: handleTableSelectChanged }&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:row-key</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;(record) =&gt; record.tm_front_plate&quot;</span></span>
<span class="line"><span style="color:#24292E;">    &gt;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">&lt;!-- row-key=&quot;tm_front_plate&quot; --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> #</span><span style="color:#6F42C1;">header</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">&lt;!-- &lt;ur-search :items=&quot;searchItems&quot; /&gt; --&gt;</span></span>
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
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { actionColumn } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;../data&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { UrPageTableColumn } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;../typing&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// import { defaultApiPaginator } from &#39;@/api/typing&#39;;</span></span>
<span class="line"><span style="color:#6A737D;">// import { TruckMarket } from &#39;@/api/types/response/transport/truck-market&#39;;</span></span>
<span class="line"><span style="color:#6A737D;">// import { api, companyURL } from &#39;@/api&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// import { onRefreshData } from &#39;@/utils/router&#39;;</span></span>
<span class="line"><span style="color:#6A737D;">// import { dateTime, money } from &#39;@/utils/filter&#39;;</span></span>
<span class="line"><span style="color:#6A737D;">// import { truck as truckRaw } from &#39;@/config/constant/raw&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// import { commonSearchItem, MixedSearchItem } from &#39;@/components/search&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// const searchItems: Array&lt;MixedSearchItem&gt; = [</span></span>
<span class="line"><span style="color:#6A737D;">//   {</span></span>
<span class="line"><span style="color:#6A737D;">//     ...commonSearchItem.commonDateRangeTime,</span></span>
<span class="line"><span style="color:#6A737D;">//     fromDate: &#39;form_create_time&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//     toDate: &#39;to_create_time&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//     label: &#39;发布时间&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//   },</span></span>
<span class="line"><span style="color:#6A737D;">//   {</span></span>
<span class="line"><span style="color:#6A737D;">//     ...commonSearchItem.commonArea,</span></span>
<span class="line"><span style="color:#6A737D;">//     key: &#39;start_code&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//     label: &#39;出发地&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//     level: 3,</span></span>
<span class="line"><span style="color:#6A737D;">//   },</span></span>
<span class="line"><span style="color:#6A737D;">//   {</span></span>
<span class="line"><span style="color:#6A737D;">//     ...commonSearchItem.commonArea,</span></span>
<span class="line"><span style="color:#6A737D;">//     key: &#39;desti_code&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//     label: &#39;目的地&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//     level: 3,</span></span>
<span class="line"><span style="color:#6A737D;">//   },</span></span>
<span class="line"><span style="color:#6A737D;">//   {</span></span>
<span class="line"><span style="color:#6A737D;">//     ...commonSearchItem.commonSelect,</span></span>
<span class="line"><span style="color:#6A737D;">//     key: &#39;trucktype_code&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//     label: &#39;车辆类型&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//     placeholder: &#39;请选择&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//     selectOptions: truckRaw.truck_type,</span></span>
<span class="line"><span style="color:#6A737D;">//   },</span></span>
<span class="line"><span style="color:#6A737D;">// ];</span></span>
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
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">actionColumn</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    width: </span><span style="color:#005CC5;">140</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  }),</span></span>
<span class="line"><span style="color:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// const tableData = ref&lt;TruckMarket[]&gt;([]);</span></span>
<span class="line"><span style="color:#6A737D;">// const tablePaginator = ref(defaultApiPaginator);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">tableData</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">any</span><span style="color:#24292E;">[]&gt;([{ tm_front_plate: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> }, { tm_front_plate: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> }]);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">tablePaginator</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">({});</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">tableLoading</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">Promise</span><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">unknown</span><span style="color:#24292E;">&gt;&gt;();</span></span>
<span class="line"><span style="color:#6A737D;">// const refreshData = onRefreshData((route) =&gt; {</span></span>
<span class="line"><span style="color:#6A737D;">//   tableLoading.value = api.get&lt;TruckMarket[]&gt;(companyURL.truck_market_list, route.query).then((response) =&gt; {</span></span>
<span class="line"><span style="color:#6A737D;">//     tableData.value = response.data;</span></span>
<span class="line"><span style="color:#6A737D;">//     tablePaginator.value = response.paginator;</span></span>
<span class="line"><span style="color:#6A737D;">//   });</span></span>
<span class="line"><span style="color:#6A737D;">// });</span></span>
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
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">tableSelectedRowKeys</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">([]);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleTableSelectChanged</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">rowKeys</span><span style="color:#24292E;">, </span><span style="color:#E36209;">records</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">never</span><span style="color:#24292E;">[]) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(rowKeys, </span><span style="color:#032F62;">&#39;rowKeys&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  tableSelectedRowKeys.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> rowKeys;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;less&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">.layout-content</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   height: 100%;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">600</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">overflow</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">hidden</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">padding</span><span style="color:#24292E;">: @ur-spacing-3;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">font-size</span><span style="color:#24292E;">: @ur-font-size-2;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">background-color</span><span style="color:#24292E;">: @ur-color-8;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">flex</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">flex-direction</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">column</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">position</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">relative</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="api" tabindex="-1">API</h2><h3 id="urpagetable" tabindex="-1">UrPageTable</h3>`,3),ls=s("p",null,[p("更多属性请参考"),s("a",{href:"https://www.antdv.com/components/table-cn#API",target:"_blank"},"antd Table 表格。")],-1),ps=s("h3",{id:"mixedsearchitem-searchitem",tabindex:"-1"},[s("code",null,"MixedSearchItem"),p(),s("code",null,"SearchItem")],-1),os=s("p",null,[p("更多属性请参考"),s("a",{href:"https://www.antdv.com/components/tabs-cn#API",target:"_blank"},"antd Tabs 标签页。")],-1),es=s("h3",{id:"以下属性都继承searchitem",tabindex:"-1"},[p("以下属性都继承"),s("code",null,"SearchItem")],-1),ts=s("h3",{id:"commonsearchitem-commoninput-输入框",tabindex:"-1"},[s("code",null,"commonSearchItem.commonInput"),p(" 输入框")],-1),cs=s("h3",{id:"commonsearchitem-commoninputint-数字输入框",tabindex:"-1"},[s("code",null,"commonSearchItem.commonInputInt"),p(" 数字输入框")],-1),rs=s("h3",{id:"commonsearchitem-commonselect-选择框",tabindex:"-1"},[s("code",null,"commonSearchItem.commonSelect"),p(" 选择框")],-1),ys=s("h3",{id:"commonsearchitem-commoncheckbox-复选框",tabindex:"-1"},[s("code",null,"commonSearchItem.commonCheckbox"),p(" 复选框")],-1),Es=s("h3",{id:"commonsearchitem-commondatetime-日期选择",tabindex:"-1"},[s("code",null,"commonSearchItem.commonDateTime"),p(" 日期选择")],-1),is=s("h3",{id:"commonsearchitem-commondaterangetime-日期范围选择",tabindex:"-1"},[s("code",null,"commonSearchItem.commonDateRangeTime"),p(" 日期范围选择")],-1),ms=s("h3",{id:"commonsearchitem-commoncascader-级联",tabindex:"-1"},[s("code",null,"commonSearchItem.commonCascader"),p(" 级联")],-1),ds=s("h3",{id:"commonsearchitem-commonarea-地址库选择",tabindex:"-1"},[s("code",null,"commonSearchItem.commonArea"),p(" 地址库选择")],-1),fs=JSON.parse('{"title":"Search 搜索","description":"","frontmatter":{},"headers":[],"relativePath":"components/search.md","filePath":"components/search.md","lastUpdated":1677676630000}'),us={name:"components/search.md"},bs=Object.assign(us,{setup(t){return(e,c)=>{const n=E("ur-api-table");return i(),D("div",null,[ss,ns,l(j),as,l(n,{"data-source":o(z)},null,8,["data-source"]),ls,ps,l(n,{"data-source":o($)},null,8,["data-source"]),os,es,ts,l(n,{"data-source":o(H)},null,8,["data-source"]),cs,l(n,{"data-source":o(J)},null,8,["data-source"]),rs,l(n,{"data-source":o(Q)},null,8,["data-source"]),ys,l(n,{"data-source":o(G)},null,8,["data-source"]),Es,l(n,{"data-source":o(X)},null,8,["data-source"]),is,l(n,{"data-source":o(Y)},null,8,["data-source"]),ms,l(n,{"data-source":o(W)},null,8,["data-source"]),ds,l(n,{"data-source":o(Z)},null,8,["data-source"])])}}});export{fs as __pageData,bs as default};
