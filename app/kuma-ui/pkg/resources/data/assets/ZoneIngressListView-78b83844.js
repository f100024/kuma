import{d as V,u as O,q as r,s as z,O as $,o as i,a as I,w as x,h as l,b as u,g as N,k as T,e as D,P as E,f as B}from"./index-4672b3cc.js";import{_ as L}from"./MultizoneInfo.vue_vue_type_script_setup_true_lang-7e265ce6.js";import{_ as P}from"./ZoneIngressDetails.vue_vue_type_script_setup_true_lang-547c84aa.js";import{j as q,k as C,f as M,g as F,_ as Q}from"./RouteView.vue_vue_type_script_setup_true_lang-0617b678.js";import{_ as R}from"./RouteTitle.vue_vue_type_script_setup_true_lang-48f7c0e4.js";import{D as U}from"./DataOverview-d68c5fbf.js";import{Q as g}from"./QueryParameter-70743f73.js";import"./kongponents.es-368c74ae.js";import"./DefinitionListItem-6343d44b.js";import"./EnvoyData-c75f6ca8.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-30e15146.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-1f8ffcc3.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-0a8ec83e.js";import"./ErrorBlock-81d6b3f0.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-0166a250.js";import"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-f2a39afc.js";import"./TabsWidget-9094ab16.js";import"./TextWithCopyButton-05d34ae9.js";import"./TagList-83ae6b4a.js";import"./StatusBadge-6c83fda8.js";const j={class:"zoneingresses"},G={key:1,class:"kcard-stack"},K={class:"kcard-border"},Y={key:0,class:"kcard-border"},ve=V({__name:"ZoneIngressListView",props:{selectedZoneIngressName:{type:[String,null],required:!1,default:null},offset:{type:Number,required:!1,default:0}},setup(S){const c=S,v=q(),{t:_}=C(),A={title:"No Data",message:"There are no Zone Ingresses present."},y=O(),b=M(),m=r(!0),d=r(null),o=r({headers:[{label:"Status",key:"status"},{label:"Name",key:"entity"}],data:[]}),n=r(null),h=r(null),w=r(c.offset);z(()=>y.params.mesh,function(){y.name==="zone-ingress-list-view"&&f(0)}),z(()=>b.getters["config/getMulticlusterStatus"],function(e){e&&f(c.offset)},{immediate:!0});async function f(e){var s;w.value=e,g.set("offset",e>0?e:null),m.value=!0,d.value=null;const t=E;try{const{items:a,next:p}=await v.getAllZoneIngressOverviews({size:t,offset:e});h.value=p,o.value.data=Z(a??[]),await k({name:c.selectedZoneIngressName??((s=o.value.data[0])==null?void 0:s.entity.name)})}catch(a){o.value.data=[],n.value=null,a instanceof Error?d.value=a:console.error(a)}finally{m.value=!1}}function Z(e){return e.map(t=>{const{name:s}=t,a={name:"zone-ingress-detail-view",params:{zoneIngress:s}},p=$(t.zoneIngressInsight??{});return{entity:t,detailViewRoute:a,status:p}})}async function k({name:e}){if(e===void 0){n.value=null,g.set("zoneIngress",null);return}try{n.value=await v.getZoneIngressOverview({name:e}),g.set("zoneIngress",e)}catch(t){console.error(t)}}return(e,t)=>(i(),I(Q,null,{default:x(()=>[l(R,{title:u(_)("zone-ingresses.routes.items.title")},null,8,["title"]),N(),l(F,{breadcrumbs:[{to:{name:"zone-ingress-list-view"},text:u(_)("zone-ingresses.routes.items.breadcrumbs")}]},{default:x(()=>{var s;return[T("div",j,[u(b).getters["config/getMulticlusterStatus"]===!1?(i(),I(L,{key:0})):(i(),D("div",G,[T("div",K,[l(U,{"selected-entity-name":(s=n.value)==null?void 0:s.name,"page-size":u(E),"is-loading":m.value,error:d.value,"empty-state":A,"table-data":o.value,"table-data-is-empty":o.value.data.length===0,next:h.value,"page-offset":w.value,onTableAction:k,onLoadData:f},null,8,["selected-entity-name","page-size","is-loading","error","table-data","table-data-is-empty","next","page-offset"])]),N(),n.value!==null?(i(),D("div",Y,[l(P,{"zone-ingress-overview":n.value},null,8,["zone-ingress-overview"])])):B("",!0)]))])]}),_:1},8,["breadcrumbs"])]),_:1}))}});export{ve as default};
