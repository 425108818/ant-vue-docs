import{a as B}from"./chunks/data.229d733f.js";import{d as k,h as l,C as t,a2 as w,o as p,c as d,a3 as q,b as y,w as i,e as x,H as e,l as m,k as s,Q as I,a as u}from"./chunks/framework.f103d8d8.js";import"./chunks/keyBy.1045d386.js";import"./chunks/identity.30270b2f.js";const v={class:"layout-content"},T=k({__name:"UrPageTableDemo",setup(F){const c=[{title:"序号",key:"index",customRender:({index:n})=>n+1},{title:"车牌号码",dataIndex:"tm_front_plate",width:120},{title:"联系人",dataIndex:"tm_contact",width:130},{title:"联系电话",dataIndex:"tm_phone",width:180},{title:"车辆类型",dataIndex:"tm_trucktype",width:150},{title:"出发地",dataIndex:"tm_start_name",width:150},{title:"目的地",dataIndex:"tm_desti_name",width:150},{title:"运费（元）",dataIndex:"tm_bid",width:150},{title:"发车时间",dataIndex:"create_time",width:200},{title:"有效日期",dataIndex:"om_valid_at_time",width:200},B({width:140})],r=l([{tm_front_plate:1},{tm_front_plate:2},{tm_front_plate:3}]),a=l({}),D=l(),A=n=>{},E=l([]),_=(n,g)=>{console.log(n,"rowKeys"),E.value=n};return(n,g)=>{const C=t("ur-button-list"),h=t("ur-page-table"),b=w("loading");return p(),d("div",v,[q((p(),y(h,{columns:c,"columns-key":"truckMarketKey","data-source":r.value,paginator:a.value,"row-selection":{selectedRowKeys:E.value,onChange:_},"row-key":o=>o.tm_front_plate},{header:i(()=>[]),bodyCell:i(({column:o,record:f})=>[o.key==="action"?(p(),y(C,{key:0,"more-placement":"bottomRight","buttons-default-type":"link","max-display-count":3,"buttons-props":[{text:"下单",onAction:()=>A(f)}]},null,8,["buttons-props"])):x("",!0)]),_:1},8,["data-source","paginator","row-selection","row-key"])),[[b,D.value]])])}}}),R=[{name:"pageable",description:"是否显示分页",type:"boolean",option:"-",default:"true"},{name:"paginator",description:"与后台交互分页参数字段",type:"UrApiPaginator",option:"-",default:"true"},{name:"paginatorSizes",description:"分页选择器展示选择值",type:"string[]",option:"-",default:"['15', '30', '50', '100']"},{name:"switchLayout",description:"是否显示切换上下布局按钮",type:"boolean",option:"-",default:"false"},{name:"rowClassName",description:"表格行的类名",type:"Function(record, index):string",option:"-",default:"已设置默认背景颜色"},{name:"useCurrentChangeFunc",description:"是否使用内置的分页函数处理",type:"boolean",option:"-",default:"true"},{name:"columnsKey",description:"列设置的列展示缓存key（全局不可以重复，避免在缓存中出现重复key缓存冲突问题。）",type:"string",option:"-",default:"-"},{name:"maxColumnWidth",description:"自定义整个表格，最大列宽显示。（添加宽度自适应后，列宽有200px最大显示限制。）",type:"string",option:"-",default:"-"},{name:"scrollX",description:"自定义scrollX",type:"string | boolean",option:"-",default:"max-content"}],P=[{name:"tabs",description:"标签显示",type:"{name,value}[]",option:"",default:"[]"},{name:"field",description:"搜索的字段,绑定在路由地址上的字段名",type:"string",option:"",default:"-"}],S=s("h1",{id:"table-表格",tabindex:"-1"},"Table 表格",-1),K=s("h2",{id:"基本用法",tabindex:"-1"},"基本用法",-1),M=I(`<details><summary>展开查看</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
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
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">tableData</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">[]&gt;([{ tm_front_plate: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> }, { tm_front_plate: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> }, { tm_front_plate: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;"> }]);</span></span>
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
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;less&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
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
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">tableData</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">any</span><span style="color:#24292E;">[]&gt;([{ tm_front_plate: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> }, { tm_front_plate: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> }, { tm_front_plate: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;"> }]);</span></span>
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
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;less&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="api" tabindex="-1">API</h2><h3 id="urpagetable" tabindex="-1">UrPageTable</h3>`,3),U=s("p",null,[u("更多属性请参考"),s("a",{href:"https://www.antdv.com/components/table-cn#API",target:"_blank"},"antd Table 表格。")],-1),L=s("h3",{id:"urtabletabs",tabindex:"-1"},"UrTableTabs",-1),O=s("p",null,[u("更多属性请参考"),s("a",{href:"https://www.antdv.com/components/tabs-cn#API",target:"_blank"},"antd Tabs 标签页。")],-1),z=JSON.parse('{"title":"Table 表格","description":"","frontmatter":{},"headers":[],"relativePath":"components/table.md","filePath":"components/table.md","lastUpdated":1696944114000}'),N={name:"components/table.md"},H=Object.assign(N,{setup(F){return(c,r)=>{const a=t("ur-api-table");return p(),d("div",null,[S,K,e(T),M,e(a,{"data-source":m(R)},null,8,["data-source"]),U,L,e(a,{"data-source":m(P)},null,8,["data-source"]),O])}}});export{z as __pageData,H as default};
