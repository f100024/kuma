import{d as h,u as _,c as f,o as i,a as m,w as p,h as r,b as c,g as y,f as d}from"./index-4672b3cc.js";import{_ as P}from"./PolicyDetails.vue_vue_type_script_setup_true_lang-b3366fb9.js";import{f as b,k as x,g as N,_ as k}from"./RouteView.vue_vue_type_script_setup_true_lang-0617b678.js";import{_ as w}from"./RouteTitle.vue_vue_type_script_setup_true_lang-48f7c0e4.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-1f8ffcc3.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-0a8ec83e.js";import"./kongponents.es-368c74ae.js";import"./ErrorBlock-81d6b3f0.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-0166a250.js";import"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-6c514337.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-30e15146.js";import"./TextWithCopyButton-05d34ae9.js";import"./toYaml-4e00099e.js";import"./TabsWidget-9094ab16.js";import"./QueryParameter-70743f73.js";const G=h({__name:"PolicyDetailView",props:{mesh:{},policyPath:{},policyName:{}},setup(l){const e=l,n=_(),t=b(),{t:a}=x(),o=f(()=>t.state.policyTypesByPath[e.policyPath]);u();function u(){t.dispatch("updatePageTitle",n.params.policy)}return(T,V)=>(i(),m(k,{module:"policies"},{default:p(({route:s})=>[r(w,{title:c(a)("policies.routes.item.title")},null,8,["title"]),y(),r(N,{breadcrumbs:[{to:{name:"policies-list-view",params:{mesh:s.params.mesh,policyPath:s.params.policyPath}},text:c(a)("policies.routes.item.breadcrumbs")}]},{default:p(()=>[o.value?(i(),m(P,{key:0,name:e.policyName,mesh:e.mesh,path:e.policyPath,type:o.value.name},null,8,["name","mesh","path","type"])):d("",!0)]),_:2},1032,["breadcrumbs"])]),_:1}))}});export{G as default};
