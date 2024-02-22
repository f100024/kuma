var se=Object.defineProperty;var ie=(n,l,e)=>l in n?se(n,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[l]=e;var N=(n,l,e)=>(ie(n,typeof l!="symbol"?l+"":l,e),e);import{d as K,l as le,a as q,o,b as w,a5 as oe,w as m,r as O,t as d,f as r,e as S,q as c,F as x,W as re,c as g,H as Q,p as I,m as _,T as ue,K as L,U as ce,_ as R,ad as de,C as T,M as A,a7 as E,ap as fe,aq as pe,ar as me,n as j,as as ge,at as ye,au as ve,av as he,x as be,y as ke}from"./index-mgI1s4j-.js";import{A as _e}from"./AppCollection-5Bf33TLd.js";import{S as Se}from"./StatusBadge-giYU4rYl.js";const xe={key:0},Ce={key:1},Te=K({__name:"DataPlaneList",props:{total:{default:0},pageNumber:{},pageSize:{},items:{},error:{},isSelectedRow:{type:[Function,null],default:null},summaryRouteName:{},isGlobalMode:{type:Boolean}},emits:["change"],setup(n,{emit:l}){const{t:e}=le(),p=n,v=l;return(i,s)=>{const b=q("RouterLink"),h=q("KTruncate"),k=q("KTooltip");return o(),w(_e,{class:"data-plane-collection","empty-state-message":c(e)("common.emptyState.message",{type:"Data Plane Proxies"}),"empty-state-cta-to":c(e)("data-planes.href.docs.data_plane_proxy"),"empty-state-cta-text":c(e)("common.documentation"),headers:[{label:"Name",key:"name"},{label:"Type",key:"type"},{label:"Services",key:"services"},...p.isGlobalMode?[{label:"Zone",key:"zone"}]:[],{label:"Certificate Info",key:"certificate"},{label:"Status",key:"status"},{label:"Warnings",key:"warnings",hideLabel:!0},{label:"Details",key:"details",hideLabel:!0}],"page-number":p.pageNumber,"page-size":p.pageSize,total:p.total,items:p.items,error:p.error,"is-selected-row":p.isSelectedRow,onChange:s[0]||(s[0]=t=>v("change",t))},oe({name:m(({row:t})=>[S(b,{class:"name-link",title:t.name,to:{name:p.summaryRouteName,params:{mesh:t.mesh,dataPlane:t.name},query:{page:p.pageNumber,size:p.pageSize}}},{default:m(()=>[r(d(t.name),1)]),_:2},1032,["title","to"])]),type:m(({row:t})=>[r(d(c(e)(`data-planes.type.${t.dataplaneType}`)),1)]),services:m(({row:t})=>[t.services.length>0?(o(),w(h,{key:0,width:"auto"},{default:m(()=>[(o(!0),g(x,null,Q(t.services,(f,C)=>(o(),g("div",{key:C},[S(re,{text:f},{default:m(()=>[t.dataplaneType==="standard"?(o(),w(b,{key:0,to:{name:"service-detail-view",params:{service:f}}},{default:m(()=>[r(d(f),1)]),_:2},1032,["to"])):t.dataplaneType==="delegated"?(o(),w(b,{key:1,to:{name:"delegated-gateway-detail-view",params:{service:f}}},{default:m(()=>[r(d(f),1)]),_:2},1032,["to"])):(o(),g(x,{key:2},[r(d(f),1)],64))]),_:2},1032,["text"])]))),128))]),_:2},1024)):(o(),g(x,{key:1},[r(d(c(e)("common.collection.none")),1)],64))]),zone:m(({row:t})=>[t.zone?(o(),w(b,{key:0,to:{name:"zone-cp-detail-view",params:{zone:t.zone}}},{default:m(()=>[r(d(t.zone),1)]),_:2},1032,["to"])):(o(),g(x,{key:1},[r(d(c(e)("common.collection.none")),1)],64))]),certificate:m(({row:t})=>{var f;return[(f=t.dataplaneInsight.mTLS)!=null&&f.certificateExpirationTime?(o(),g(x,{key:0},[r(d(c(e)("common.formats.datetime",{value:Date.parse(t.dataplaneInsight.mTLS.certificateExpirationTime)})),1)],64)):(o(),g(x,{key:1},[r(d(c(e)("data-planes.components.data-plane-list.certificate.none")),1)],64))]}),status:m(({row:t})=>[S(Se,{status:t.status},null,8,["status"])]),warnings:m(({row:t})=>[t.isCertExpired||t.warnings.length>0?(o(),w(k,{key:0},{content:m(()=>[_("ul",null,[t.warnings.length>0?(o(),g("li",xe,d(c(e)("data-planes.components.data-plane-list.version_mismatch")),1)):I("",!0),r(),t.isCertExpired?(o(),g("li",Ce,d(c(e)("data-planes.components.data-plane-list.cert_expired")),1)):I("",!0)])]),default:m(()=>[r(),S(ue,{class:"mr-1",size:c(L),"hide-title":""},null,8,["size"])]),_:2},1024)):(o(),g(x,{key:1},[r(d(c(e)("common.collection.none")),1)],64))]),details:m(({row:t})=>[S(b,{class:"details-link","data-testid":"details-link",to:{name:"data-plane-detail-view",params:{dataPlane:t.name}}},{default:m(()=>[r(d(c(e)("common.collection.details_link"))+" ",1),S(c(ce),{display:"inline-block",decorative:"",size:c(L)},null,8,["size"])]),_:2},1032,["to"])]),_:2},[i.$slots.toolbar?{name:"toolbar",fn:m(()=>[O(i.$slots,"toolbar",{},void 0,!0)]),key:"0"}:void 0]),1032,["empty-state-message","empty-state-cta-to","empty-state-cta-text","headers","page-number","page-size","total","items","error","is-selected-row"])}}}),Ge=R(Te,[["__scopeId","data-v-329d2d70"]]);function we(n,l,e){return Math.max(l,Math.min(n,e))}const ze=["ControlLeft","ControlRight","ShiftLeft","ShiftRight","AltLeft"];class Ie{constructor(l,e){N(this,"commands");N(this,"keyMap");N(this,"boundTriggerShortcuts");this.commands=e,this.keyMap=Object.fromEntries(Object.entries(l).map(([p,v])=>[p.toLowerCase(),v])),this.boundTriggerShortcuts=this.triggerShortcuts.bind(this)}registerListener(){document.addEventListener("keydown",this.boundTriggerShortcuts)}unRegisterListener(){document.removeEventListener("keydown",this.boundTriggerShortcuts)}triggerShortcuts(l){Le(l,this.keyMap,this.commands)}}function Le(n,l,e){const p=Fe(n.code),v=[n.ctrlKey?"ctrl":"",n.shiftKey?"shift":"",n.altKey?"alt":"",p].filter(b=>b!=="").join("+"),i=l[v];if(!i)return;const s=e[i];s.isAllowedContext&&!s.isAllowedContext(n)||(s.shouldPreventDefaultAction&&n.preventDefault(),!(s.isDisabled&&s.isDisabled())&&s.trigger(n))}function Fe(n){return ze.includes(n)?"":n.replace(/^Key/,"").toLowerCase()}function Ne(n,l){const e=" "+n,p=e.matchAll(/ ([-\s\w]+):\s*/g),v=[];for(const i of Array.from(p)){if(i.index===void 0)continue;const s=Ae(i[1]);if(l.length>0&&!l.includes(s))throw new Error(`Unknown field “${s}”. Known fields: ${l.join(", ")}`);const b=i.index+i[0].length,h=e.substring(b);let k;if(/^\s*["']/.test(h)){const f=h.match(/['"](.*?)['"]/);if(f!==null)k=f[1];else throw new Error(`Quote mismatch for field “${s}”.`)}else{const f=h.indexOf(" "),C=f===-1?h.length:f;k=h.substring(0,C)}k!==""&&v.push([s,k])}return v}function Ae(n){return n.trim().replace(/\s+/g,"-").replace(/-[a-z]/g,(l,e)=>e===0?l:l.substring(1).toUpperCase())}const V=n=>(be("data-v-f8c4e95f"),n=n(),ke(),n),Pe=V(()=>_("span",{class:"visually-hidden"},"Focus filter",-1)),qe={class:"k-filter-icon"},Ee=["for"],Me=["id","placeholder"],Be={key:0,class:"k-suggestion-box","data-testid":"k-filter-bar-suggestion-box"},De={class:"k-suggestion-list"},$e={key:0,class:"k-filter-bar-error"},je={key:0},Ke=["title","data-filter-field"],Oe={class:"visually-hidden"},Qe=V(()=>_("span",{class:"visually-hidden"},"Clear query",-1)),Re=K({__name:"FilterBar",props:{id:{type:String,required:!1,default:()=>de("k-filter-bar")},fields:{type:Object,required:!0},placeholder:{type:String,required:!1,default:null},query:{type:String,required:!1,default:""}},emits:["fields-change"],setup(n,{emit:l}){const e=n,p=l,v=T(null),i=T(null),s=T(e.query),b=T([]),h=T(null),k=T(!1),t=T(-1),f=A(()=>Object.keys(e.fields)),C=A(()=>Object.entries(e.fields).slice(0,5).map(([a,u])=>({fieldName:a,...u}))),M=A(()=>f.value.length>0?`Filter by ${f.value.join(", ")}`:"Filter"),U=A(()=>e.placeholder??M.value);E(()=>b.value,function(a,u){ne(a,u)||(h.value=null,p("fields-change",{fields:a,query:s.value}))}),E(()=>e.query,()=>{s.value=e.query,z(s.value)},{immediate:!0}),E(()=>s.value,function(){s.value===""&&(h.value=null)});const H={Enter:"submitQuery",Escape:"closeSuggestionBox",ArrowDown:"jumpToNextSuggestion",ArrowUp:"jumpToPreviousSuggestion"},W={submitQuery:{trigger:B,isAllowedContext(a){return i.value!==null&&a.composedPath().includes(i.value)},shouldPreventDefaultAction:!0},jumpToNextSuggestion:{trigger:Z,isAllowedContext(a){return i.value!==null&&a.composedPath().includes(i.value)},shouldPreventDefaultAction:!0},jumpToPreviousSuggestion:{trigger:Y,isAllowedContext(a){return i.value!==null&&a.composedPath().includes(i.value)},shouldPreventDefaultAction:!0},closeSuggestionBox:{trigger:P,isAllowedContext(a){return v.value!==null&&a.composedPath().includes(v.value)}}};function G(){const a=new Ie(H,W);ve(function(){a.registerListener()}),he(function(){a.unRegisterListener()}),z(s.value)}G();function J(a){const u=a.target;z(u.value)}function B(){if(i.value instanceof HTMLInputElement)if(t.value===-1)z(i.value.value),k.value=!1;else{const a=C.value[t.value].fieldName;a&&$(i.value,a)}}function Z(){D(1)}function Y(){D(-1)}function D(a){t.value=we(t.value+a,-1,C.value.length-1)}function X(){i.value instanceof HTMLInputElement&&i.value.focus()}function ee(a){const y=a.currentTarget.getAttribute("data-filter-field");y&&i.value instanceof HTMLInputElement&&$(i.value,y)}function $(a,u){const y=s.value===""||s.value.endsWith(" ")?"":" ";s.value+=y+u+":",a.focus(),t.value=-1}function te(){s.value="",i.value instanceof HTMLInputElement&&(i.value.value="",i.value.focus(),z(""))}function ae(a){a.relatedTarget===null&&P(),v.value instanceof HTMLElement&&a.relatedTarget instanceof Node&&!v.value.contains(a.relatedTarget)&&P()}function P(){k.value=!1}function z(a){h.value=null;try{const u=Ne(a,f.value);u.sort((y,F)=>y[0].localeCompare(F[0])),b.value=u}catch(u){if(u instanceof Error)h.value=u,k.value=!0;else throw u}}function ne(a,u){return JSON.stringify(a)===JSON.stringify(u)}return(a,u)=>(o(),g("div",{ref_key:"filterBar",ref:v,class:"k-filter-bar","data-testid":"k-filter-bar"},[_("button",{class:"k-focus-filter-input-button",title:"Focus filter",type:"button","data-testid":"k-filter-bar-focus-filter-input-button",onClick:X},[Pe,r(),_("span",qe,[S(c(fe),{decorative:"","data-testid":"k-filter-bar-filter-icon","hide-title":"",size:c(L)},null,8,["size"])])]),r(),_("label",{for:`${e.id}-filter-bar-input`,class:"visually-hidden"},[O(a.$slots,"default",{},()=>[r(d(M.value),1)],!0)],8,Ee),r(),pe(_("input",{id:`${e.id}-filter-bar-input`,ref_key:"filterInput",ref:i,"onUpdate:modelValue":u[0]||(u[0]=y=>s.value=y),class:"k-filter-bar-input",type:"text",placeholder:U.value,"data-testid":"k-filter-bar-filter-input",onFocus:u[1]||(u[1]=y=>k.value=!0),onBlur:ae,onChange:J},null,40,Me),[[me,s.value]]),r(),k.value?(o(),g("div",Be,[_("div",De,[h.value!==null?(o(),g("p",$e,d(h.value.message),1)):(o(),g("button",{key:1,class:j(["k-submit-query-button",{"k-submit-query-button-is-selected":t.value===-1}]),title:"Submit query",type:"button","data-testid":"k-filter-bar-submit-query-button",onClick:B},`
          Submit `+d(s.value),3)),r(),(o(!0),g(x,null,Q(C.value,(y,F)=>(o(),g("div",{key:`${e.id}-${F}`,class:j(["k-suggestion-list-item",{"k-suggestion-list-item-is-selected":t.value===F}])},[_("b",null,d(y.fieldName),1),y.description!==""?(o(),g("span",je,": "+d(y.description),1)):I("",!0),r(),_("button",{class:"k-apply-suggestion-button",title:`Add ${y.fieldName}:`,type:"button","data-filter-field":y.fieldName,"data-testid":"k-filter-bar-apply-suggestion-button",onClick:ee},[_("span",Oe,"Add "+d(y.fieldName)+":",1),r(),S(c(ge),{decorative:"","hide-title":"",size:c(L)},null,8,["size"])],8,Ke)],2))),128))])])):I("",!0),r(),s.value!==""?(o(),g("button",{key:1,class:"k-clear-query-button",title:"Clear query",type:"button","data-testid":"k-filter-bar-clear-query-button",onClick:te},[Qe,r(),S(c(ye),{decorative:"","hide-title":"",size:c(L)},null,8,["size"])])):I("",!0)],512))}}),Je=R(Re,[["__scopeId","data-v-f8c4e95f"]]);export{Ge as D,Je as F};
