import{d as x,cD as w,I as h,e as y,f as e,a as f,w as E,J as n,c as u,k as S,t as c,F as R,h as j,r as $,p as D,l as T,s as C,o as i,b as B,_ as q,n as O,cB as A,H as g,Q as I,K as b}from"./index.59498396.js";import{E as F}from"./EntityTag.193d2f42.js";import{E as L}from"./EntityURLControl.04b162ee.js";import{Y as V}from"./YamlView.53bad28b.js";import{_ as K}from"./EmptyBlock.vue_vue_type_script_setup_true_lang.ca9e3849.js";import{E as M}from"./ErrorBlock.9fdf1c69.js";import{_ as U}from"./LoadingBlock.vue_vue_type_script_setup_true_lang.49103b8d.js";const p=s=>(D("data-v-4b293ec8"),s=s(),T(),s),Y={class:"entity-summary entity-section-list"},z={class:"entity-title"},H=p(()=>e("span",{class:"kutil-sr-only"},"Service:",-1)),J={class:"definition"},Q=p(()=>e("span",null,"Mesh:",-1)),G={class:"definition"},P=p(()=>e("span",null,"Address:",-1)),W={class:"definition"},X=p(()=>e("span",null,"TLD:",-1)),Z={key:0},ee=p(()=>e("h4",null,"Tags",-1)),te={class:"tag-list"},se=x({__name:"ExternalServiceDetails",props:{externalService:{type:Object,required:!0}},setup(s){const t=s,o=w(),a=h(()=>({name:"external-service-detail-view",params:{service:t.externalService.name,mesh:t.externalService.mesh}})),r=h(()=>Object.entries(t.externalService.tags).map(([_,d])=>({label:_,value:d}))),l=h(()=>C(t.externalService));return(_,d)=>{const v=$("router-link");return i(),y("div",Y,[e("h3",z,[H,f(v,{to:n(a)},{default:E(()=>[B(c(s.externalService.name),1)]),_:1},8,["to"]),n(o).name!==n(a).name?(i(),u(L,{key:0,route:n(a)},null,8,["route"])):S("",!0)]),e("section",null,[e("div",J,[Q,e("span",null,c(s.externalService.mesh),1)]),e("div",G,[P,e("span",null,c(t.externalService.networking.address),1)]),e("div",W,[X,e("span",null,c(t.externalService.networking.tls.enabled?"Enabled":"Disabled"),1)])]),n(r).length>0?(i(),y("section",Z,[ee,e("div",te,[(i(!0),y(R,null,j(n(r),(m,N)=>(i(),u(F,{key:N,tag:m},null,8,["tag"]))),128))])])):S("",!0),f(V,{id:"code-block-external-service",content:n(l),"is-searchable":""},null,8,["content"])])}}});const ne=q(se,[["__scopeId","data-v-4b293ec8"]]),k=s=>(D("data-v-7f3dca86"),s=s(),T(),s),ae={class:"entity-summary entity-section-list"},ie={class:"entity-title"},re=k(()=>e("span",{class:"kutil-sr-only"},"Service:",-1)),ce={class:"definition"},oe=k(()=>e("span",null,"Mesh:",-1)),le={class:"definition"},ue=k(()=>e("span",null,"Data planes:",-1)),_e=x({__name:"ServiceInsightDetails",props:{serviceInsight:{type:Object,required:!0}},setup(s){const t=s,o=w(),a=h(()=>({name:"service-insight-detail-view",params:{service:t.serviceInsight.name,mesh:t.serviceInsight.mesh}})),r=h(()=>A[t.serviceInsight.status]),l=h(()=>C(t.serviceInsight));return(_,d)=>{const v=$("router-link");return i(),y("div",ae,[e("h3",ie,[re,f(v,{to:n(a)},{default:E(()=>[B(c(s.serviceInsight.name),1)]),_:1},8,["to"]),e("div",{class:O(`status status--${n(r).appearance}`),"data-testid":"data-plane-status-badge"},c(n(r).title.toLowerCase()),3),n(o).name!==n(a).name?(i(),u(L,{key:0,route:n(a)},null,8,["route"])):S("",!0)]),e("section",null,[e("div",ce,[oe,e("span",null,c(s.serviceInsight.mesh),1)]),e("div",le,[ue,e("span",null,"Total: "+c(t.serviceInsight.dataplanes.total)+" (online: "+c(t.serviceInsight.dataplanes.online)+")",1)])]),f(V,{id:"code-block-service-insight",content:n(l),"is-searchable":""},null,8,["content"])])}}});const de=q(_e,[["__scopeId","data-v-7f3dca86"]]),Se=x({__name:"ServiceDetails",props:{type:{type:String,required:!0},name:{type:String,required:!0},mesh:{type:String,required:!0}},setup(s){const t=s,o=g(null),a=g(null),r=g(!0),l=g(null);I(()=>t.mesh,function(){_()}),I(()=>t.name,function(){_()}),_();async function _(){r.value=!0,l.value=null,o.value=null,a.value=null;const d=t.mesh,v=t.name;try{t.type==="ServiceInsight"?o.value=await b.getServiceInsight({mesh:d,name:v}):a.value=await b.getExternalService({mesh:d,name:v})}catch(m){m instanceof Error?l.value=m:console.error(m)}finally{r.value=!1}}return(d,v)=>r.value?(i(),u(U,{key:0})):l.value!==null?(i(),u(M,{key:1,error:l.value},null,8,["error"])):o.value!==null?(i(),u(de,{key:2,"service-insight":o.value},null,8,["service-insight"])):a.value!==null?(i(),u(ne,{key:3,"external-service":a.value},null,8,["external-service"])):(i(),u(K,{key:4}))}});export{Se as _};
