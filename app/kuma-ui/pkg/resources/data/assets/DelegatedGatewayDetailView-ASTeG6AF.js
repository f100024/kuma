import{d as I,a as r,o as i,b as p,w as a,e as l,m as u,a7 as z,f as s,t as m,T as E,c,F as y,aF as L,q as _,p as b,O as $,K as B,E as N,_ as R}from"./index-iznqiN1v.js";import{A as T}from"./AppCollection-RhcSUZfw.js";import{F as q}from"./FilterBar-DiDpUBVu.js";import{S as v}from"./StatusBadge-rUrFsLJH.js";import{S as F}from"./SummaryView-D12uak41.js";const A={class:"stack"},K={class:"columns"},D={key:0},O={key:1},G=I({__name:"DelegatedGatewayDetailView",setup(W){return(X,Z)=>{const f=r("KCard"),h=r("DataLoader"),g=r("RouterLink"),x=r("XIcon"),C=r("RouterView"),S=r("AppView"),V=r("RouteView"),P=r("DataSource");return i(),p(P,{src:"/me"},{default:a(({data:k})=>[k?(i(),p(V,{key:0,name:"delegated-gateway-detail-view",params:{mesh:"",service:"",page:1,size:k.pageSize,s:"",dataPlane:""}},{default:a(({can:w,route:t,t:n})=>[l(S,null,{default:a(()=>[u("div",A,[l(h,{src:`/meshes/${t.params.mesh}/service-insights/${t.params.service}`},{default:a(({data:o})=>[o?(i(),p(f,{key:0},{default:a(()=>{var e,d;return[u("div",K,[l(z,null,{title:a(()=>[s(m(n("http.api.property.status")),1)]),body:a(()=>[l(v,{status:o.status},null,8,["status"])]),_:2},1024),s(),l(z,null,{title:a(()=>[s(m(n("http.api.property.address")),1)]),body:a(()=>[o.addressPort?(i(),p(E,{key:0,text:o.addressPort},null,8,["text"])):(i(),c(y,{key:1},[s(m(n("common.detail.none")),1)],64))]),_:2},1024),s(),l(L,{online:((e=o.dataplanes)==null?void 0:e.online)??0,total:((d=o.dataplanes)==null?void 0:d.total)??0},{title:a(()=>[s(m(n("http.api.property.dataPlaneProxies")),1)]),_:2},1032,["online","total"])])]}),_:2},1024)):_("",!0)]),_:2},1032,["src"]),s(),u("div",null,[u("h3",null,m(n("delegated-gateways.detail.data_plane_proxies")),1),s(),l(f,{class:"mt-4"},{default:a(()=>[l(h,{src:`/meshes/${t.params.mesh}/dataplanes/for/${t.params.service}?page=${t.params.page}&size=${t.params.size}&search=${t.params.s}`,loader:!1},{default:a(({data:o})=>[l(T,{class:"data-plane-collection","data-testid":"data-plane-collection","page-number":t.params.page,"page-size":t.params.size,headers:[{label:"Name",key:"name"},{label:"Namespace",key:"namespace"},...w("use zones")?[{label:"Zone",key:"zone"}]:[],{label:"Certificate Info",key:"certificate"},{label:"Status",key:"status"},{label:"Warnings",key:"warnings",hideLabel:!0},{label:"Details",key:"details",hideLabel:!0}],items:o==null?void 0:o.items,total:o==null?void 0:o.total,"is-selected-row":e=>e.name===t.params.dataPlane,"summary-route-name":"delegated-gateway-data-plane-summary-view","empty-state-message":n("common.emptyState.message",{type:"Data Plane Proxies"}),"empty-state-cta-to":n("data-planes.href.docs.data_plane_proxy"),"empty-state-cta-text":n("common.documentation"),onChange:t.update},{toolbar:a(()=>[l(q,{class:"data-plane-proxy-filter",placeholder:"tag: 'kuma.io/protocol: http'",query:t.params.s,fields:{name:{description:"filter by name or parts of a name"},protocol:{description:"filter by “kuma.io/protocol” value"},tag:{description:"filter by tags (e.g. “tag: version:2”)"},...w("use zones")&&{zone:{description:"filter by “kuma.io/zone” value"}}},onChange:e=>t.update({...Object.fromEntries(e.entries())})},null,8,["placeholder","query","fields","onChange"])]),name:a(({row:e})=>[l(g,{class:"name-link",to:{name:"delegated-gateway-data-plane-summary-view",params:{mesh:e.mesh,dataPlane:e.id},query:{page:t.params.page,size:t.params.size,s:t.params.s}}},{default:a(()=>[s(m(e.name),1)]),_:2},1032,["to"])]),namespace:a(({row:e})=>[s(m(e.namespace),1)]),zone:a(({row:e})=>[e.zone?(i(),p(g,{key:0,to:{name:"zone-cp-detail-view",params:{zone:e.zone}}},{default:a(()=>[s(m(e.zone),1)]),_:2},1032,["to"])):(i(),c(y,{key:1},[s(m(n("common.collection.none")),1)],64))]),certificate:a(({row:e})=>{var d;return[(d=e.dataplaneInsight.mTLS)!=null&&d.certificateExpirationTime?(i(),c(y,{key:0},[s(m(n("common.formats.datetime",{value:Date.parse(e.dataplaneInsight.mTLS.certificateExpirationTime)})),1)],64)):(i(),c(y,{key:1},[s(m(n("data-planes.components.data-plane-list.certificate.none")),1)],64))]}),status:a(({row:e})=>[l(v,{status:e.status},null,8,["status"])]),warnings:a(({row:e})=>[e.isCertExpired||e.warnings.length>0?(i(),p(x,{key:0,class:"mr-1",name:"warning"},{default:a(()=>[u("ul",null,[e.warnings.length>0?(i(),c("li",D,m(n("data-planes.components.data-plane-list.version_mismatch")),1)):_("",!0),s(),e.isCertExpired?(i(),c("li",O,m(n("data-planes.components.data-plane-list.cert_expired")),1)):_("",!0)])]),_:2},1024)):(i(),c(y,{key:1},[s(m(n("common.collection.none")),1)],64))]),details:a(({row:e})=>[l(g,{class:"details-link","data-testid":"details-link",to:{name:"data-plane-detail-view",params:{dataPlane:e.id}}},{default:a(()=>[s(m(n("common.collection.details_link"))+" ",1),l(b($),{decorative:"",size:b(B)},null,8,["size"])]),_:2},1032,["to"])]),_:2},1032,["page-number","page-size","headers","items","total","is-selected-row","empty-state-message","empty-state-cta-to","empty-state-cta-text","onChange"]),s(),t.params.dataPlane?(i(),p(C,{key:0},{default:a(e=>[l(F,{onClose:d=>t.replace({name:t.name,params:{mesh:t.params.mesh},query:{page:t.params.page,size:t.params.size,s:t.params.s}})},{default:a(()=>[typeof o<"u"?(i(),p(N(e.Component),{key:0,items:o.items},null,8,["items"])):_("",!0)]),_:2},1032,["onClose"])]),_:2},1024)):_("",!0)]),_:2},1032,["src"])]),_:2},1024)])])]),_:2},1024)]),_:2},1032,["params"])):_("",!0)]),_:1})}}}),Q=R(G,[["__scopeId","data-v-a47db0db"]]);export{Q as default};
