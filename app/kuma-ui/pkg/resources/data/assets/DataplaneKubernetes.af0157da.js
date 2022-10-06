import{_ as E,a5 as F,i as M,cS as B,K,e as c,f as e,a as i,w as a,r as p,o as r,t as h,g as d,cI as V,F as T,h as U,b,cT as _,c as f,v as S,k as v,p as P,l as q}from"./index.59498396.js";import{C as z}from"./CodeBlock.76d75c2c.js";import{F as W}from"./FormatForCLI.72422f2d.js";import{F as j,S as A,E as O}from"./EntityScanner.04a44437.js";import{E as G}from"./EnvironmentSwitcher.173285b2.js";import"./_commonjsHelpers.712cc82f.js";import"./index.58caa11d.js";const L={apiVersion:"v1",kind:"Namespace",metadata:{name:null,namespace:null,annotations:{"kuma.io/sidecar-injection":"enabled","kuma.io/mesh":null}}};const Y={name:"DataplaneWizardKubernetes",components:{CodeBlock:z,FormFragment:j,StepSkeleton:A,EnvironmentSwitcher:G,EntityScanner:O},mixins:[W],data(){return{productName:F,schema:L,steps:[{label:"General",slug:"general"},{label:"Scope Settings",slug:"scope-settings"},{label:"Install",slug:"complete"}],tabs:[{hash:"#kubernetes",title:"Kubernetes"}],sidebarContent:[{name:"dataplane"},{name:"example"},{name:"switch"}],startScanner:!1,scanFound:!1,hideScannerSiblings:!1,scanError:!1,isComplete:!1,validate:{meshName:"",k8sDataplaneType:"dataplane-type-service",k8sServices:"all-services",k8sNamespace:"",k8sNamespaceSelection:"",k8sServiceDeployment:"",k8sServiceDeploymentSelection:"",k8sIngressDeployment:"",k8sIngressDeploymentSelection:"",k8sIngressType:"",k8sIngressBrand:"kong-ingress",k8sIngressSelection:""}}},computed:{...M({title:"config/getTagline",version:"config/getVersion",environment:"config/getEnvironment",meshes:"getMeshList"}),codeOutput(){const o=Object.assign({},this.schema),s=this.validate.k8sNamespaceSelection;if(!s)return;o.metadata.name=s,o.metadata.namespace=s,o.metadata.annotations["kuma.io/mesh"]=this.validate.meshName;const y=`" | kubectl apply -f - && kubectl delete pod --all -n ${s}`;return this.formatForCLI(o,y)},nextDisabled(){const{k8sNamespaceSelection:o,meshName:s}=this.validate;return s.length?this.$route.query.step==="1"?!o:!1:!0}},watch:{"validate.k8sNamespaceSelection"(o){this.validate.k8sNamespaceSelection=B(o)},$route(){this.$route.query.step===1&&(this.validate.k8sNamespaceSelection?this.nextDisabled=!1:this.nextDisabled=!0)}},methods:{hideSiblings(){this.hideScannerSiblings=!0},scanForEntity(){const s=this.validate.meshName,y=this.validate.k8sNamespaceSelection;this.scanComplete=!1,this.scanError=!1,!(!s||!y)&&K.getDataplaneFromMesh({mesh:s,name:y}).then(k=>{k&&k.name.length>0?(this.isRunning=!0,this.scanFound=!0):this.scanError=!0}).catch(k=>{this.scanError=!0,console.error(k)}).finally(()=>{this.scanComplete=!0})},compeleteDataPlaneSetup(){this.$store.dispatch("updateSelectedMesh",this.validate.meshName),this.$router.push({name:"data-plane-list-view",params:{mesh:this.validate.meshName}})}}},n=o=>(P("data-v-7258437a"),o=o(),q(),o),R={class:"wizard"},H={class:"wizard__content"},J=n(()=>e("h3",null," Create Kubernetes Dataplane ",-1)),Q=n(()=>e("h3",null," To get started, please select on what Mesh you would like to add the Dataplane: ",-1)),X=n(()=>e("p",null," If you've got an existing Mesh that you would like to associate with your Dataplane, you can select it below, or create a new one using our Mesh Wizard. ",-1)),Z=n(()=>e("small",null,"Would you like to see instructions for Universal? Use sidebar to change wizard!",-1)),$=n(()=>e("option",{disabled:"",value:""}," Select an existing Mesh\u2026 ",-1)),ee=["value"],te=n(()=>e("label",{class:"k-input-label mr-4"}," or ",-1)),se=n(()=>e("h3",null," Setup Dataplane Mode ",-1)),ae=n(()=>e("p",null," You can create a data plane for a service or a data plane for a Gateway. ",-1)),ne={for:"service-dataplane"},le=n(()=>e("span",null," Service Dataplane ",-1)),oe={for:"ingress-dataplane"},ie=n(()=>e("span",null," Ingress Dataplane ",-1)),re={key:0},de=n(()=>e("p",null," Should the data plane be added for an entire Namespace and all of its services, or for specific individual services in any namespace? ",-1)),ce={for:"k8s-services-all"},pe=n(()=>e("span",null," All Services in Namespace ",-1)),ue={for:"k8s-services-individual"},me=n(()=>e("span",null," Individual Services ",-1)),he={key:1},ke={for:"k8s-ingress-kong"},_e=n(()=>e("span",null," Kong Ingress ",-1)),ve={for:"k8s-ingress-other"},ye=n(()=>e("span",null," Other Ingress ",-1)),ge=n(()=>e("p",null,' Please go ahead and deploy the Ingress first, then restart this wizard and select "Existing Ingress". ',-1)),be={key:0},fe={key:0},Se=n(()=>e("h3",null," Auto-Inject DPP ",-1)),we=n(()=>e("p",null," You can now execute the following commands to automatically inject the sidecar proxy in every Pod, and by doing so creating the Dataplane. ",-1)),De=n(()=>e("h4",null,"Kubernetes",-1)),Ie=n(()=>e("h3",null,"Searching\u2026",-1)),Ne=n(()=>e("p",null,"We are looking for your dataplane.",-1)),xe=n(()=>e("h3",null,"Done!",-1)),Ce={key:0},Ee=n(()=>e("p",null," Proceed to the next step where we will show you your new Dataplane. ",-1)),Fe=n(()=>e("h3",null,"Mesh not found",-1)),Me=n(()=>e("p",null,"We were unable to find your mesh.",-1)),Be=n(()=>e("p",null," Please return to the first step and make sure to select an existing Mesh, or create a new one. ",-1)),Ke=n(()=>e("h3",null,"Dataplane",-1)),Ve=n(()=>e("h3",null,"Example",-1)),Te=n(()=>e("p",null," Below is an example of a Dataplane resource output: ",-1)),Ue=n(()=>e("code",{class:"block"},[e("pre",null,`apiVersion: 'kuma.io/v1alpha1'
kind: Dataplane
mesh: default
metadata:
  name: dp-echo-1
  annotations:
    kuma.io/sidecar-injection: enabled
    kuma.io/mesh: default
networking:
  address: 10.0.0.1
  inbound:
  - port: 10000
    servicePort: 9000
    tags:
      kuma.io/service: echo`)],-1));function Pe(o,s,y,k,t,g){const w=p("KButton"),u=p("FormFragment"),m=p("KCard"),D=p("KAlert"),I=p("CodeBlock"),N=p("EntityScanner"),x=p("EnvironmentSwitcher"),C=p("StepSkeleton");return r(),c("div",R,[e("div",H,[i(C,{steps:t.steps,"sidebar-content":t.sidebarContent,"footer-enabled":t.hideScannerSiblings===!1,"next-disabled":g.nextDisabled},{general:a(()=>[J,e("p",null," Welcome to the wizard to create a new Dataplane resource in "+h(o.title)+". We will be providing you with a few steps that will get you started. ",1),e("p",null," As you know, the "+h(t.productName)+" GUI is read-only. ",1),Q,X,Z,i(m,{class:"my-6","has-shadow":""},{body:a(()=>[i(u,{title:"Choose a Mesh","for-attr":"dp-mesh","all-inline":""},{default:a(()=>[e("div",null,[d(e("select",{id:"dp-mesh","onUpdate:modelValue":s[0]||(s[0]=l=>t.validate.meshName=l),class:"k-input w-100"},[$,(r(!0),c(T,null,U(o.meshes.items,l=>(r(),c("option",{key:l.name,value:l.name},h(l.name),9,ee))),128))],512),[[V,t.validate.meshName]])]),e("div",null,[te,i(w,{to:{name:"create-mesh"},appearance:"outline"},{default:a(()=>[b(" Create a new Mesh ")]),_:1})])]),_:1})]),_:1})]),"scope-settings":a(()=>[se,ae,i(m,{class:"my-6","has-shadow":""},{body:a(()=>[i(u,{"all-inline":"","equal-cols":"","hide-label-col":""},{default:a(()=>[e("label",ne,[d(e("input",{id:"service-dataplane","onUpdate:modelValue":s[1]||(s[1]=l=>t.validate.k8sDataplaneType=l),class:"k-input",type:"radio",name:"dataplane-type",value:"dataplane-type-service",checked:""},null,512),[[_,t.validate.k8sDataplaneType]]),le]),e("label",oe,[d(e("input",{id:"ingress-dataplane","onUpdate:modelValue":s[2]||(s[2]=l=>t.validate.k8sDataplaneType=l),class:"k-input",type:"radio",name:"dataplane-type",value:"dataplane-type-ingress",disabled:""},null,512),[[_,t.validate.k8sDataplaneType]]),ie])]),_:1})]),_:1}),t.validate.k8sDataplaneType==="dataplane-type-service"?(r(),c("div",re,[de,i(m,{class:"my-6","has-shadow":""},{body:a(()=>[i(u,{"all-inline":"","equal-cols":"","hide-label-col":""},{default:a(()=>[e("label",ce,[d(e("input",{id:"k8s-services-all","onUpdate:modelValue":s[3]||(s[3]=l=>t.validate.k8sServices=l),class:"k-input",type:"radio",name:"k8s-services",value:"all-services",checked:""},null,512),[[_,t.validate.k8sServices]]),pe]),e("label",ue,[d(e("input",{id:"k8s-services-individual","onUpdate:modelValue":s[4]||(s[4]=l=>t.validate.k8sServices=l),class:"k-input",type:"radio",name:"k8s-services",value:"individual-services",disabled:""},null,512),[[_,t.validate.k8sServices]]),me])]),_:1})]),_:1}),t.validate.k8sServices==="individual-services"?(r(),f(m,{key:0,class:"my-6","has-shadow":""},{body:a(()=>[i(u,{title:"Deployments","for-attr":"k8s-deployment-selection"},{default:a(()=>[d(e("input",{id:"k8s-service-deployment-new","onUpdate:modelValue":s[5]||(s[5]=l=>t.validate.k8sServiceDeploymentSelection=l),type:"text",class:"k-input w-100",placeholder:"your-new-deployment",required:""},null,512),[[S,t.validate.k8sServiceDeploymentSelection]])]),_:1})]),_:1})):v("",!0),i(m,{class:"my-6","has-shadow":""},{body:a(()=>[i(u,{title:"Namespace","for-attr":"k8s-namespace-selection"},{default:a(()=>[d(e("input",{id:"k8s-namespace-new","onUpdate:modelValue":s[6]||(s[6]=l=>t.validate.k8sNamespaceSelection=l),type:"text",class:"k-input w-100",placeholder:"your-namespace",required:""},null,512),[[S,t.validate.k8sNamespaceSelection]])]),_:1})]),_:1})])):v("",!0),t.validate.k8sDataplaneType==="dataplane-type-ingress"?(r(),c("div",he,[e("p",null,h(o.title)+" natively supports the Kong Ingress. Do you want to deploy Kong or another Ingress? ",1),i(m,{class:"my-6","has-shadow":""},{body:a(()=>[i(u,{"all-inline":"","equal-cols":"","hide-label-col":""},{default:a(()=>[e("label",ke,[d(e("input",{id:"k8s-ingress-kong","onUpdate:modelValue":s[7]||(s[7]=l=>t.validate.k8sIngressBrand=l),class:"k-input",type:"radio",name:"k8s-ingress-brand",value:"kong-ingress",checked:""},null,512),[[_,t.validate.k8sIngressBrand]]),_e]),e("label",ve,[d(e("input",{id:"k8s-ingress-other","onUpdate:modelValue":s[8]||(s[8]=l=>t.validate.k8sIngressBrand=l),class:"k-input",type:"radio",name:"k8s-ingress-brand",value:"other-ingress"},null,512),[[_,t.validate.k8sIngressBrand]]),ye])]),_:1})]),_:1}),i(m,{class:"my-6","has-shadow":""},{body:a(()=>[i(u,{title:"Deployments","for-attr":"k8s-deployment-selection"},{default:a(()=>[d(e("input",{id:"k8s-ingress-deployment-new","onUpdate:modelValue":s[9]||(s[9]=l=>t.validate.k8sIngressDeployment=l),type:"text",class:"k-input w-100",placeholder:"your-deployment",required:""},null,512),[[S,t.validate.k8sIngressDeployment]])]),_:1})]),_:1}),t.validate.k8sIngressBrand==="other-ingress"?(r(),f(D,{key:0,appearance:"info"},{alertMessage:a(()=>[ge]),_:1})):v("",!0)])):v("",!0)]),complete:a(()=>[t.validate.meshName?(r(),c("div",be,[t.hideScannerSiblings===!1?(r(),c("div",fe,[Se,we,De,i(I,{id:"code-block-kubernetes-command",language:"bash",code:g.codeOutput},null,8,["code"])])):v("",!0),i(N,{"loader-function":g.scanForEntity,"should-start":!0,"has-error":t.scanError,"can-complete":t.scanFound,onHideSiblings:g.hideSiblings},{"loading-title":a(()=>[Ie]),"loading-content":a(()=>[Ne]),"complete-title":a(()=>[xe]),"complete-content":a(()=>[e("p",null,[b(" Your Dataplane "),t.validate.k8sNamespaceSelection?(r(),c("strong",Ce,h(t.validate.k8sNamespaceSelection),1)):v("",!0),b(" was found! ")]),Ee,e("p",null,[i(w,{appearance:"primary",onClick:g.compeleteDataPlaneSetup},{default:a(()=>[b(" View Your Dataplane ")]),_:1},8,["onClick"])])]),"error-title":a(()=>[Fe]),"error-content":a(()=>[Me]),_:1},8,["loader-function","has-error","can-complete","onHideSiblings"])])):(r(),f(D,{key:1,appearance:"danger"},{alertMessage:a(()=>[Be]),_:1}))]),dataplane:a(()=>[Ke,e("p",null," In "+h(o.title)+", a Dataplane resource represents a data plane proxy running alongside one of your services. Data plane proxies can be added in any Mesh that you may have created, and in Kubernetes, they will be auto-injected by "+h(o.title)+". ",1)]),example:a(()=>[Ve,Te,Ue]),switch:a(()=>[i(x)]),_:1},8,["steps","sidebar-content","footer-enabled","next-disabled"])])])}const Le=E(Y,[["render",Pe],["__scopeId","data-v-7258437a"]]);export{Le as default};
