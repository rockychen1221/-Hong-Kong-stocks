(function(e){function t(t){for(var r,a,u=t[0],s=t[1],c=t[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function u(e){return s.p+"js/"+({404:"404",about:"about","index~list":"index~list",index:"index",list:"list"}[e]||e)+"."+{404:"ef1497c4",about:"c8860e53","index~list":"d65cbb3e",index:"de2a69f1",list:"1f3bac05"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={404:1,about:1,index:1,list:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({404:"404",about:"about","index~list":"index~list",index:"index",list:"list"}[e]||e)+"."+{404:"c14a9929",about:"2b55fe5f","index~list":"31d6cfe0",index:"67c67cb5",list:"f8c33eca"}[e]+".css",o=s.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var c=i[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){c=d[u],l=c.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/-Hong-Kong-stocks/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2464:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("myHead"),n("router-view")],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.activeIndex,mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{select:e.handleSelect}},[n("el-menu-item",{attrs:{index:"首页"}},[e._v("首页")]),n("el-menu-item",{attrs:{index:"申购记录"}},[e._v("申购记录")]),n("el-menu-item",{attrs:{index:"券商"}},[e._v("券商")]),n("el-menu-item",{attrs:{index:"文章"}},[e._v("文章")]),n("el-menu-item",{attrs:{index:"工具"}},[e._v("工具")])],1)},u=[],s={data:function(){return{activeIndex:""}},methods:{handleSelect:function(e,t){switch(e){case"首页":this.$router.push("/");break;case"申购记录":this.$router.push("/list");break;case"券商":this.$router.push("/");break;case"文章":this.$router.push("/");break;case"工具":this.$router.push("/");break}console.log(e,t)}},mounted:function(){var e=window.location.pathname;switch(e){case"/":this.activeIndex="首页";break;case"/list":this.activeIndex="申购记录";break;case"券商":this.activeIndex="券商";break;case"文章":this.activeIndex="文章";break;case"工具":this.activeIndex="工具";break}}},c=s,l=n("2877"),d=Object(l["a"])(c,i,u,!1,null,null,null),f=d.exports,p={name:"app",components:{myHead:f}},h=p,m=(n("7c55"),Object(l["a"])(h,a,o,!1,null,null,null)),b=m.exports,v=n("8c4f");r["default"].use(v["a"]);var g=new v["a"]({mode:"history",base:"/-Hong-Kong-stocks/",routes:[{path:"*",component:function(){return n.e("404").then(n.bind(null,"8cdb"))}},{path:"/",name:"index",component:function(){return Promise.all([n.e("index~list"),n.e("index")]).then(n.bind(null,"1e4b"))}},{path:"/list",name:"list",component:function(){return Promise.all([n.e("index~list"),n.e("list")]).then(n.bind(null,"6be2"))}},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),x=n("2f62");r["default"].use(x["a"]);var y=new x["a"].Store({state:{test:"test-mapState"},mutations:{},actions:{}}),w=n("bc3a"),k=n.n(w),_=n("a7fe"),j=n.n(_),O=n("caf9"),P=n("323e"),S=n.n(P),E=n("5c96"),I=n.n(E);n("f5df"),n("77ed"),n("a5d8"),n("0fae");r["default"].config.productionTip=!1,k.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",r["default"].use(j.a,k.a),k.a.interceptors.request.use((function(e){var t=localStorage.getItem("token");return t&&(e.headers.token=t),e}),(function(e){return Promise.reject(e)})),k.a.interceptors.response.use((function(e){if("OK"!==e.statusText)throw Object(E["Message"])(e.data.data&&e.data.data.message||"请求失败请稍后重试！"),e;return e.data}),(function(e){return Object(E["Message"])("请求失败请稍后重试！"),Promise.reject(e)})),g.beforeEach((function(e,t,n){S.a.start(),n()})),g.afterEach((function(){S.a.done()})),r["default"].use(I.a),r["default"].use(O["a"],{preLoad:1,error:"/lazyloadImg/404.png",loading:"/lazyloadImg/loading.gif",try:1});var T=new r["default"],C=new r["default"]({data:{Bus:T},router:g,store:y,render:function(e){return e(b)}}).$mount("#app");window.$vue=C},"7c55":function(e,t,n){"use strict";var r=n("2464"),a=n.n(r);a.a}});
//# sourceMappingURL=app.90b532b1.js.map