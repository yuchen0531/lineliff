(function(){"use strict";var e={7544:function(e,t,n){var r=n(9242),o=n(3396);function i(e,t,n,r,i,a){const u=(0,o.up)("Header"),l=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(u),(0,o.Wm)(l)],64)}var a=n(5420),u=n.n(a);const l={class:"hello"},f={id:"header",class:"m-2 d-flex align-items-center justify-content-around"};function c(e,t,n,r,i,a){const u=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("div",f,[(0,o.Wm)(u,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Home")])),_:1}),(0,o.Wm)(u,{to:"/about"},{default:(0,o.w5)((()=>[(0,o.Uk)("test")])),_:1})])])}var s={name:"HelloWorld",props:{msg:String}},d=n(89);const p=(0,d.Z)(s,[["render",c],["__scopeId","data-v-3e10f8d3"]]);var m=p,v={name:"App",components:{Header:m},data(){return{profile:{},email:""}},beforeCreate(){u().init({liffId:"1657816678-d6o85QZa",withLoginOnExternalBrowser:!1}).then((()=>{this.getprofile(),this.email=u().getDecodedIDToken().email,console.log(this.email)}))},methods:{subscribe(){alert("恭喜你，訂閱成功")},confirm(e){0===e?alert("錯了吧"):alert("不錯喔~")},getprofile(){u().getProfile().then((e=>{this.profile=e}))}}};const h=(0,d.Z)(v,[["render",i]]);var g=h,b=n(2483);const w=e=>((0,o.dD)("data-v-cd301ff6"),e=e(),(0,o.Cn)(),e),O=w((()=>(0,o._)("p",null,"fgbdbd",-1))),y=[O];function _(e,t,n,r,i,a){return(0,o.wg)(),(0,o.iD)("div",null,y)}var k={name:"HOME",data(){return{profile:{}}},created(){this.getprofile()},methods:{getprofile(){u().getProfile().then((e=>{this.profile=e}))}}};const j=(0,d.Z)(k,[["render",_],["__scopeId","data-v-cd301ff6"]]);var D=j,x=n(7139);const H={class:"about"};function P(e,t,n,r,i,a){return(0,o.wg)(),(0,o.iD)("div",H,[(0,o._)("p",null,"email: "+(0,x.zw)(i.email),1)])}var S={name:"ABOUT",props:{msg:String},data(){return{email:""}},created(){this.email=u().getDecodedIDToken().email,console.log(this.email)}};const T=(0,d.Z)(S,[["render",P]]);var I=T;const W=[{path:"/",name:"Home",component:D},{path:"/about",name:"About",component:I}],Z=(0,b.p7)({history:(0,b.PO)(),routes:W});var C=Z;const M=(0,r.ri)(g).use(C);M.mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],i=e[c][2];for(var u=!0,l=0;l<r.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(u=!1,i<a&&(a=i));if(u){e.splice(c--,1);var f=o();void 0!==f&&(t=f)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],u=r[1],l=r[2],f=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(l)var c=l(n)}for(t&&t(r);f<a.length;f++)i=a[f],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},r=self["webpackChunkliff0215"]=self["webpackChunkliff0215"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(7544)}));r=n.O(r)})();
//# sourceMappingURL=app.29b700a2.js.map