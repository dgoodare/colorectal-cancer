(function(){var e={696:function(e){function i(e){return Promise.resolve().then((function(){var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}))}i.keys=function(){return[]},i.resolve=i,i.id=696,e.exports=i},607:function(e,i,t){"use strict";var n=t(963),s=t(252);function u(e,i,t,n,u,o){const a=(0,s.up)("SideBar"),l=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(a),(0,s.Wm)(l)],64)}function o(e,i,t,n,u,o){const a=(0,s.up)("Button"),l=(0,s.up)("router-link"),r=(0,s.up)("Sidebar");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(a,{class:"open-sidebar",icon:"pi pi-bars",onClick:o.showSidebar},null,8,["onClick"]),(0,s.Wm)(r,{visible:u.visibleLeft,"onUpdate:visible":i[0]||(i[0]=e=>u.visibleLeft=e),position:"left",dismissable:"true"},{default:(0,s.w5)((()=>[(0,s.Wm)(l,{to:"/"},{default:(0,s.w5)((()=>[(0,s.Wm)(a,{class:"sidebar-item",label:"Home",icon:"pi pi-home",onClick:o.hideSidebar},null,8,["onClick"])])),_:1}),(0,s.Wm)(l,{to:"/what-is-crc"},{default:(0,s.w5)((()=>[(0,s.Wm)(a,{class:"sidebar-item",label:"What is CRC?",icon:"pi pi-question",onClick:o.hideSidebar},null,8,["onClick"])])),_:1}),(0,s.Wm)(l,{to:"/stages-of-crc"},{default:(0,s.w5)((()=>[(0,s.Wm)(a,{class:"sidebar-item",label:"Stages of CRC",icon:"pi pi-arrows-h",onClick:o.hideSidebar},null,8,["onClick"])])),_:1}),(0,s.Wm)(l,{to:"/case-studies"},{default:(0,s.w5)((()=>[(0,s.Wm)(a,{class:"sidebar-item",label:"Case Studies",icon:"pi pi-book",onClick:o.hideSidebar},null,8,["onClick"])])),_:1}),(0,s.Wm)(l,{to:"/how-to-use"},{default:(0,s.w5)((()=>[(0,s.Wm)(a,{class:"sidebar-item",label:"How to use this app",icon:"pi pi-info-circle",onClick:o.hideSidebar},null,8,["onClick"])])),_:1}),(0,s.Wm)(l,{to:"/references"},{default:(0,s.w5)((()=>[(0,s.Wm)(a,{class:"sidebar-item",label:"References",icon:"pi pi-pencil",onClick:o.hideSidebar},null,8,["onClick"])])),_:1})])),_:1},8,["visible"])],64)}var a=t(325),l=t(60),r={name:"MySidebar",components:{Button:a.Z,Sidebar:l.Z},data(){return{visibleLeft:!1}},methods:{showSidebar(){this.visibleLeft=!0},hideSidebar(){this.visibleLeft=!1}}},c=t(744);const m=(0,c.Z)(r,[["render",o]]);var d=m,p={name:"App",components:{SideBar:d}};const f=(0,c.Z)(p,[["render",u]]);var b=f,g=t(119);const v=(0,s._)("title",null,"Home",-1),h=(0,s._)("h1",{id:"sticky-header"},"Home",-1),w=(0,s._)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in leo at dui malesuada facilisis aliquam eu purus. Quisque interdum sagittis metus a dapibus. Duis a ex lacus. Vestibulum fermentum at dolor eu ornare. Nam aliquet dolor ut lacus faucibus, id finibus erat scelerisque.",-1),S=(0,s._)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in leo at dui malesuada facilisis aliquam eu purus. Quisque interdum sagittis metus a dapibus. Duis a ex lacus. Vestibulum fermentum at dolor eu ornare. Nam aliquet dolor ut lacus faucibus, id finibus erat scelerisque.",-1);function q(e,i,t,n,u,o){const a=(0,s.up)("ModelView");return(0,s.wg)(),(0,s.iD)(s.HY,null,[v,h,w,(0,s.Wm)(a),S],64)}function C(e,i,t,n,u,o){const a=(0,s.up)("model-viewer");return u.isMounted?((0,s.wg)(),(0,s.j4)(a,{key:0,src:u.src,"camera-controls":""},null,8,["src"])):(0,s.kq)("",!0)}var _={name:"ModelView",data(){return{isMounted:!1,src:"models/healthyColon-v1.glb"}},mounted(){this.isMounted=!0,this.loadComponent()},computed:{loadComponent(){return()=>Promise.resolve().then(t.bind(t,603))}}};const k=(0,c.Z)(_,[["render",C]]);var y=k,W={components:{ModelView:y}};const M=(0,c.Z)(W,[["render",q]]);var D=M;const P=(0,s._)("title",null,"What is CRC?",-1),O=(0,s._)("h1",{id:"sticky-header"},"What is Colorectal Cancer?",-1);function V(e,i){return(0,s.wg)(),(0,s.iD)(s.HY,null,[P,O],64)}const Z={},H=(0,c.Z)(Z,[["render",V]]);var x=H;const E=(0,s._)("title",null,"Stages of CRC",-1),L=(0,s._)("h1",{id:"sticky-header"},"Stages of Colorectal Cancer",-1),R=(0,s._)("p",null,"placeholder text",-1);function T(e,i,t,n,u,o){const a=(0,s.up)("Stages");return(0,s.wg)(),(0,s.iD)(s.HY,null,[E,L,R,(0,s.Wm)(a)],64)}const j={class:"stage-container"},I={class:"btn-container"};function B(e,i,t,n,u,o){const a=(0,s.up)("model-viewer"),l=(0,s.up)("Button"),r=(0,s.up)("Toolbar");return(0,s.wg)(),(0,s.iD)("div",j,[u.isMounted?((0,s.wg)(),(0,s.j4)(a,{key:0,id:"toggle-model",src:u.src,"camera-controls":""},null,8,["src"])):(0,s.kq)("",!0),(0,s._)("div",I,[(0,s.Wm)(r,null,{start:(0,s.w5)((()=>[(0,s.Wm)(l,{class:"stage-btn",label:"Stage 1",onClick:i[0]||(i[0]=e=>o.setStage(0))})])),center:(0,s.w5)((()=>[(0,s.Wm)(l,{class:"stage-btn",label:"Stage 2",onClick:i[1]||(i[1]=e=>o.setStage(1))})])),end:(0,s.w5)((()=>[(0,s.Wm)(l,{class:"stage-btn",label:"Stage 3",onClick:i[2]||(i[2]=e=>o.setStage(2))})])),_:1})])])}var U=t(471),Y={name:"StagesComponent",components:{Button:a.Z,Toolbar:U.Z},data(){return{isMounted:!1,src:"models/Astronaut.glb"}},mounted(){this.isMounted=!0,this.loadComponent()},computed:{loadComponent(){return()=>Promise.resolve().then(t.bind(t,603))}},methods:{setStage(e){const i=document.querySelector("#toggle-model"),t=["https://colorectal-cancer.s3.eu-west-1.amazonaws.com/models/Astronaut.glb","https://colorectal-cancer.s3.eu-west-1.amazonaws.com/models/alpha-blend-litmus.glb","https://colorectal-cancer.s3.eu-west-1.amazonaws.com/models/BoomBox.glb"];i.setAttribute("src",t[e]),console.log(this.model[e])}}};const N=(0,c.Z)(Y,[["render",B]]);var A=N,z={name:"StagesOfCRC",components:{Stages:A}};const F=(0,c.Z)(z,[["render",T]]);var Q=F;const G=(0,s._)("h1",{id:"sticky-header"},"Case Studies",-1),J=(0,s._)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque ligula, lacinia luctus dapibus a, fringilla ac felis. Vivamus sit amet venenatis est. Ut at purus a diam hendrerit tristique. Sed laoreet lacus id dignissim molestie. Vivamus iaculis, erat sit amet rhoncus suscipit, eros lorem hendrerit ligula, nec ornare felis neque in est. Vivamus fermentum sed ipsum quis tempor. Integer viverra nulla quam, eu aliquam ligula molestie lobortis. Etiam consectetur congue lectus nec lobortis. Mauris pretium, ipsum in pretium dapibus, magna leo fermentum nunc, in varius mauris ex eu mi. Sed eleifend metus eget dui sollicitudin dictum. Vestibulum suscipit consequat neque vel posuere.",-1),K=(0,s._)("h3",null,"Subtitle",-1),X=(0,s._)("p",null,"Donec in pretium risus. Etiam condimentum fermentum turpis vel dignissim. Sed tempor consequat urna, ac dapibus purus sollicitudin non. Nulla condimentum tortor elit, at tincidunt dui suscipit eget. Maecenas a orci ac urna lobortis tincidunt nec ut elit. Integer a dictum tortor, et commodo nisl. Phasellus commodo tincidunt egestas. Mauris commodo facilisis felis, quis scelerisque enim ullamcorper vestibulum. Praesent a maximus nunc. Pellentesque pretium augue ac pulvinar dapibus. Etiam nec nulla eu nunc dapibus semper et non ligula. Sed id risus eu velit vulputate iaculis sit amet vel nibh. In congue sit amet odio vel convallis.",-1);function $(e,i){return(0,s.wg)(),(0,s.iD)(s.HY,null,[G,J,K,X],64)}const ee={},ie=(0,c.Z)(ee,[["render",$]]);var te=ie;const ne=(0,s._)("title",null,"How to use",-1),se=(0,s._)("h1",{id:"sticky-header"},"How To Use This App",-1),ue=(0,s._)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque ligula, lacinia luctus dapibus a, fringilla ac felis. Vivamus sit amet venenatis est. Ut at purus a diam hendrerit tristique. Sed laoreet lacus id dignissim molestie. Vivamus iaculis, erat sit amet rhoncus suscipit, eros lorem hendrerit ligula, nec ornare felis neque in est. Vivamus fermentum sed ipsum quis tempor. Integer viverra nulla quam, eu aliquam ligula molestie lobortis. Etiam consectetur congue lectus nec lobortis. Mauris pretium, ipsum in pretium dapibus, magna leo fermentum nunc, in varius mauris ex eu mi. Sed eleifend metus eget dui sollicitudin dictum. Vestibulum suscipit consequat neque vel posuere.",-1),oe=(0,s._)("p",null,"Donec in pretium risus. Etiam condimentum fermentum turpis vel dignissim. Sed tempor consequat urna, ac dapibus purus sollicitudin non. Nulla condimentum tortor elit, at tincidunt dui suscipit eget. Maecenas a orci ac urna lobortis tincidunt nec ut elit. Integer a dictum tortor, et commodo nisl. Phasellus commodo tincidunt egestas. Mauris commodo facilisis felis, quis scelerisque enim ullamcorper vestibulum. Praesent a maximus nunc. Pellentesque pretium augue ac pulvinar dapibus. Etiam nec nulla eu nunc dapibus semper et non ligula. Sed id risus eu velit vulputate iaculis sit amet vel nibh. In congue sit amet odio vel convallis.",-1);function ae(e,i){return(0,s.wg)(),(0,s.iD)(s.HY,null,[ne,se,ue,oe],64)}const le={},re=(0,c.Z)(le,[["render",ae]]);var ce=re;const me=(0,s._)("title",null,"References",-1),de=(0,s._)("h1",{id:"sticky-header"},"References",-1),pe=(0,s._)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque ligula, lacinia luctus dapibus a, fringilla ac felis. Vivamus sit amet venenatis est. Ut at purus a diam hendrerit tristique. Sed laoreet lacus id dignissim molestie. Vivamus iaculis, erat sit amet rhoncus suscipit, eros lorem hendrerit ligula, nec ornare felis neque in est. Vivamus fermentum sed ipsum quis tempor. Integer viverra nulla quam, eu aliquam ligula molestie lobortis. Etiam consectetur congue lectus nec lobortis. Mauris pretium, ipsum in pretium dapibus, magna leo fermentum nunc, in varius mauris ex eu mi. Sed eleifend metus eget dui sollicitudin dictum. Vestibulum suscipit consequat neque vel posuere.",-1),fe=(0,s._)("p",null,"Donec in pretium risus. Etiam condimentum fermentum turpis vel dignissim. Sed tempor consequat urna, ac dapibus purus sollicitudin non. Nulla condimentum tortor elit, at tincidunt dui suscipit eget. Maecenas a orci ac urna lobortis tincidunt nec ut elit. Integer a dictum tortor, et commodo nisl. Phasellus commodo tincidunt egestas. Mauris commodo facilisis felis, quis scelerisque enim ullamcorper vestibulum. Praesent a maximus nunc. Pellentesque pretium augue ac pulvinar dapibus. Etiam nec nulla eu nunc dapibus semper et non ligula. Sed id risus eu velit vulputate iaculis sit amet vel nibh. In congue sit amet odio vel convallis.",-1);function be(e,i){return(0,s.wg)(),(0,s.iD)(s.HY,null,[me,de,pe,fe],64)}const ge={},ve=(0,c.Z)(ge,[["render",be]]);var he=ve;const we=[{path:"",name:"Home",component:D},{path:"/what-is-crc",name:"WhatIsCRC",component:x},{path:"/stages-of-crc",name:"StagesOfCRC",component:Q},{path:"/case-studies",name:"CaseStudies",component:te},{path:"/how-to-use",name:"HowToUse",component:ce},{path:"/references",name:"ReferencesView",component:he}],Se=(0,g.p7)({history:(0,g.PO)(/'colorectal-cancer'/),routes:we});var qe=Se,Ce=t(823),_e=t(609),ke=t(603);const ye=(0,n.ri)(b);ye.use(Ce.Z),ye.use(qe),ye.component("PrimeButton",a.Z),ye.component("PrimeSidebar",l.Z),ye.component("PrimeDialog",_e.Z),ye.component("PrimeToolbar",U.Z),ye.component("ModelViewer",ke["default"]),ye.mount("#app")}},i={};function t(n){var s=i[n];if(void 0!==s)return s.exports;var u=i[n]={exports:{}};return e[n](u,u.exports,t),u.exports}t.m=e,function(){var e=[];t.O=function(i,n,s,u){if(!n){var o=1/0;for(c=0;c<e.length;c++){n=e[c][0],s=e[c][1],u=e[c][2];for(var a=!0,l=0;l<n.length;l++)(!1&u||o>=u)&&Object.keys(t.O).every((function(e){return t.O[e](n[l])}))?n.splice(l--,1):(a=!1,u<o&&(o=u));if(a){e.splice(c--,1);var r=s();void 0!==r&&(i=r)}}return i}u=u||0;for(var c=e.length;c>0&&e[c-1][2]>u;c--)e[c]=e[c-1];e[c]=[n,s,u]}}(),function(){t.d=function(e,i){for(var n in i)t.o(i,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:i[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};t.O.j=function(i){return 0===e[i]};var i=function(i,n){var s,u,o=n[0],a=n[1],l=n[2],r=0;if(o.some((function(i){return 0!==e[i]}))){for(s in a)t.o(a,s)&&(t.m[s]=a[s]);if(l)var c=l(t)}for(i&&i(n);r<o.length;r++)u=o[r],t.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return t.O(c)},n=self["webpackChunkcolorectal_cancer"]=self["webpackChunkcolorectal_cancer"]||[];n.forEach(i.bind(null,0)),n.push=i.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(607)}));n=t.O(n)})();
//# sourceMappingURL=app.0fe632d7.js.map