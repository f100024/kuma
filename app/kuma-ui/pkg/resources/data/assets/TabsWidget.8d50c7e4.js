import{d as g,r as y,f as v,o as s,j as n,c,F as h,I as u,z as B,l as d,a as f,J as T,n as k,w as _,u as l,K as E,R as S,E as w,G as q,B as C,C as I,D as V}from"./index.3a3d021f.js";import{E as L}from"./ErrorBlock.e950a812.js";import{_ as W}from"./LoadingBlock.vue_vue_type_script_setup_true_lang.fa633f42.js";const $=e=>(C("data-v-63d131fa"),e=e(),I(),e),x={class:"tab-container","data-testid":"tab-container"},A={key:0,class:"tab__header"},N={class:"tab__content-container"},H={class:"flex items-center with-warnings"},K=$(()=>d("span",null,"Warnings",-1)),O=g({__name:"TabsWidget",props:{tabs:{type:Array,required:!0},isLoading:{type:Boolean,required:!1,default:!1},isEmpty:{type:Boolean,required:!1,default:!1},hasError:{type:Boolean,required:!1,default:!1},error:{type:[Error,null],required:!1,default:null},hasBorder:{type:Boolean,required:!1,default:!1},initialTabOverride:{type:String,required:!1,default:null}},emits:["on-tab-change"],setup(e,{emit:p}){const o=e,i=y(o.initialTabOverride&&`#${o.initialTabOverride}`),m=v(()=>o.tabs.map(a=>a.hash.replace("#","")));function b(a){w.logger.info(q.TABS_TAB_CHANGE,{data:{newTab:a}}),p("on-tab-change",a)}return(a,r)=>(s(),n("div",x,[e.isLoading?(s(),c(W,{key:0})):e.error!==null?(s(),c(L,{key:1,error:e.error},null,8,["error"])):(s(),n(h,{key:2},[a.$slots.tabHeader?(s(),n("header",A,[u(a.$slots,"tabHeader",{},void 0,!0)])):B("",!0),d("div",N,[f(l(S),{modelValue:i.value,"onUpdate:modelValue":r[0]||(r[0]=t=>i.value=t),tabs:e.tabs,onChanged:r[1]||(r[1]=t=>b(t))},T({"warnings-anchor":_(()=>[d("span",H,[f(l(E),{class:"mr-1",icon:"warning",color:"var(--black-75)","secondary-color":"var(--yellow-300)",size:"16"}),K])]),_:2},[k(l(m),t=>({name:t,fn:_(()=>[u(a.$slots,t,{},void 0,!0)])}))]),1032,["modelValue","tabs"])])],64))]))}});const j=V(O,[["__scopeId","data-v-63d131fa"]]);export{j as T};
