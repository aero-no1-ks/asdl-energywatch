(function(t){function e(e){for(var r,s,c=e[0],i=e[1],l=e[2],f=0,p=[];f<c.length;f++)s=c[f],n[s]&&p.push(n[s][0]),n[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,c=1;c<a.length;c++){var i=a[c];0!==n[i]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},o=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=i;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"18fc":function(t,e,a){t.exports=a.p+"img/img_feature2.ef6b1d94.jpg"},"203b":function(t,e,a){t.exports=a.p+"img/img_feature3.3d957aa6.jpg"},"2d6c":function(t,e,a){t.exports=a.p+"img/img_feature6.1fb6a3e4.jpg"},"43fe":function(t,e,a){t.exports=a.p+"img/img_feature0.1096a432.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=a("ce5b"),o=a.n(n),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-toolbar",{attrs:{app:"",color:"primary",dark:""}},[r("v-toolbar-items",[r("v-tooltip",{attrs:{bottom:"",color:"primary amber--text"}},[r("v-btn",{staticClass:"px-3",attrs:{slot:"activator",flat:"",large:""},nativeOn:{click:function(e){return t.onComeback(e)}},slot:"activator"},[r("img",{attrs:{src:a("b551")}})]),r("strong",[t._v("Go to the main page")])],1)],1),r("v-spacer"),r("v-toolbar-items",[t._l(t.btns,function(e,a){return r("v-tooltip",{key:a,attrs:{bottom:"",color:"primary amber--text"}},[r("v-btn",{attrs:{slot:"activator",flat:"",color:"amber--text"},slot:"activator"},[r("v-icon",{staticClass:"mr-2 amber--text",attrs:{small:""}},[t._v("fa-"+t._s(e.icon))]),r("strong",{staticClass:"subheading amber--text"},[t._v(t._s(e.title))])],1),r("strong",[t._v(t._s(e.desc))])],1)}),r("v-tooltip",{attrs:{bottom:"",color:"primary amber--text"}},[r("v-btn",{attrs:{slot:"activator",flat:"",color:"amber--text"},on:{click:t.onKendeda},slot:"activator"},[r("v-icon",{staticClass:"mr-2 amber--text",attrs:{small:""}},[t._v("open_in_browser")]),r("strong",{staticClass:"subheading amber--text"},[t._v("Kendeda")])],1),r("strong",[t._v("Go to KENDEDA Project")])],1)],2)],1),r("v-content",{nativeOn:{mousemove:function(e){return t.onMousemove(e)}}},[r("v-layout",{attrs:{id:"bgContainer"}},[r("div",{staticClass:"elevation-5",style:t.getBackgroundStyle,attrs:{id:"background"}}),r("v-layout",{attrs:{row:"","justify-center":"","align-center":"",id:"jumbotron"}},[r("v-flex",{staticClass:"text-xs-center",staticStyle:{"min-width":"800px"},attrs:{xs5:""}},[r("v-card",{staticClass:"px-5 py-3",staticStyle:{background:"rgba(40, 53, 147, 0.55)",cursor:"default"},attrs:{hover:""}},[r("h1",{staticClass:"jumbotronText display-4 amber--text mb-4"},[t._v("EnergyWatch")]),r("h2",{staticClass:"jumbotronText title amber--text"},[r("i",[t._v("for")])]),r("h2",{staticClass:"jumbotronText display-2 amber--text"},[t._v("Georgia Institute of Technology")]),r("v-divider",{staticClass:"my-3"}),r("h2",{staticClass:"jumbotronText title amber--text my-2"},[t._v("Powered by")]),r("h2",{staticClass:"jumbotronText display-1 amber--text"},[t._v("Aerospace Systems Design Laboratory")])],1)],1)],1)],1),r("v-layout",{staticClass:"pt-3 pb-5",attrs:{"justify-center":""}},[r("v-flex",{attrs:{xs12:"",md11:"",lg10:"",xl9:""}},[r("v-layout",{staticClass:"pa-2",attrs:{row:"",wrap:""}},t._l(t.items,function(e,a){return r("v-flex",{key:a,staticClass:"cardServiceWrapper pa-3",attrs:{xs12:"",sm6:"",md4:"",lg3:"","d-flex":""}},[r("v-card",{staticClass:"cardService elevation-20"},[r("img",{staticClass:"cardImage elevation-2",attrs:{src:e.src}}),r("div",{staticClass:"px-3 pt-1"},[r("h3",{staticClass:"headline mb-0"},[t._v(t._s(e.desc))])]),r("div",{staticClass:"cardButton text-xs-center"},[r("v-btn",{attrs:{flat:"",color:"primary"},nativeOn:{click:function(e){return t.onClick(a)}}},[r("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v("fa-sign-in")]),r("strong",[t._v("Explore")])],1)],1)])],1)}),1)],1)],1)],1),r("v-footer",{staticClass:"pa-4",attrs:{color:"primary",dark:""}},[r("v-layout",{staticClass:"text-xs-center",attrs:{"justigfy-center":"","align-center":""}},[r("v-flex",[r("span",{staticClass:"title amber--text"},[t._v("©2018 Georgia Institute of Technology")])])],1)],1),r("v-snackbar",{attrs:{color:"primary amber--text",bottom:"",left:"",timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[r("strong",[t._v(t._s(t.snackText))])])],1)},c=[],i=(a("b54a"),{data:function(){return{x:0,y:0,center:{x:window.innerWidth/2,y:window.innerHeight/2},btns:[{icon:"users",title:"Intro",desc:"Introduction of our project"},{icon:"table",title:"The Loop",desc:"Table for reported issues"},{icon:"thumbs-up",title:"Success Stories",desc:"Hall of conspicuous improvements"}],items:[{desc:"Plant Efficiency Monitoring",src:a("43fe"),link:"http://fin02:8080/proj/demo/builder"},{desc:"Chilled Water Network Analysis",src:"".concat(a("b93c")),link:"http://energywatch.fac.gatech.edu:5000"},{desc:"Building Fleet Monitoring",src:"".concat(a("18fc")),link:"http://energywatch.fac.gatech.edu"},{desc:"Temporal Energy Analysis",src:"".concat(a("203b")),link:"http://energywatch.fac.gatech.edu:3000/heatmap"},{desc:"Energy Pattern Analysis",src:"".concat(a("81f6")),link:"http://energywatch.fac.gatech.edu:3000/fingerprint"},{desc:"ION Data Grabber",src:"".concat(a("79df")),link:"http://energywatch.fac.gatech.edu:9000"},{desc:"Utilities Tracker",src:"".concat(a("2d6c")),link:"http://energywatch.fac.gatech.edu:3000/webtools/billtracker"},{desc:" Rollcalls for ION Data points",src:"".concat(a("fd42")),link:"http://energywatch.fac.gatech.edu:3000/webtools/rollcallall"}],snackbar:!1,snackText:"Sorry, this app is under maintenance.",timeout:3e3}},computed:{getBackgroundStyle:function(){return{"background-position":"calc(50% + ".concat(this.x,"px) calc(50% + ").concat(this.y,"px) !important")}}},methods:{onKendeda:function(){window.open("https://energywatch.gatech.edu/asdl-kendeda")},onMousemove:function(t){this.x=(this.center.x-t.clientX)/5,this.y=(this.center.y-t.clientY)/5},onClick:function(t){if(1===t)return this.snackbar=!0;window.open(this.items[t].link)},onComeback:function(){}}}),l=i,u=(a("7faf"),a("2877")),f=Object(u["a"])(l,s,c,!1,null,null,null),p=f.exports;a("bf40"),a("b56c");r["default"].config.productionTip=!1,r["default"].use(o.a,{theme:{primary:"#283593",secondary:"#FFB300"}}),new r["default"]({render:function(t){return t(p)}}).$mount("#app")},"79df":function(t,e,a){t.exports=a.p+"img/img_feature5.1fac3b54.jpg"},"7faf":function(t,e,a){"use strict";var r=a("8fba"),n=a.n(r);n.a},"81f6":function(t,e,a){t.exports=a.p+"img/img_feature4.1f0a54a9.jpg"},"8fba":function(t,e,a){},b551:function(t,e,a){t.exports=a.p+"img/bg-asdl.3623f8bd.png"},b56c:function(t,e,a){},b93c:function(t,e,a){t.exports=a.p+"img/img_feature1.f66eec3a.jpg"},fd42:function(t,e,a){t.exports=a.p+"img/img_feature7.28ab1e20.jpg"}});
//# sourceMappingURL=app.339b0c7d.js.map