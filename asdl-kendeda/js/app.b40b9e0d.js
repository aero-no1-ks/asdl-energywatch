(function(e){function t(t){for(var r,n,l=t[0],s=t[1],c=t[2],d=0,u=[];d<l.length;d++)n=l[d],o[n]&&u.push(o[n][0]),o[n]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(u.length)u.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,n=1;n<a.length;n++){var l=a[n];0!==o[l]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},n={app:0},o={app:0},i=[];function l(e){return s.p+"js/"+({"dashboard~energy":"dashboard~energy",dashboard:"dashboard",energy:"energy",explorer:"explorer"}[e]||e)+"."+{"dashboard~energy":"3ffa806d",dashboard:"d79b4980",energy:"e22de277",explorer:"9f8c15c3"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a={"dashboard~energy":1,dashboard:1,energy:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise(function(t,a){for(var r="css/"+({"dashboard~energy":"dashboard~energy",dashboard:"dashboard",energy:"energy",explorer:"explorer"}[e]||e)+"."+{"dashboard~energy":"cd11cf64",dashboard:"081a029d",energy:"c177886d",explorer:"31d6cfe0"}[e]+".css",o=s.p+r,i=document.getElementsByTagName("link"),l=0;l<i.length;l++){var c=i[l],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===r||d===o))return t()}var u=document.getElementsByTagName("style");for(l=0;l<u.length;l++){c=u[l],d=c.getAttribute("data-href");if(d===r||d===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete n[e],p.parentNode.removeChild(p),a(i)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){n[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,a){r=o[e]=[t,a]});t.push(r[2]=i);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=l(e),c=function(t){d.onerror=d.onload=null,clearTimeout(u);var a=o[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+n+")");i.type=r,i.request=n,a[1](i)}o[e]=void 0}};var u=setTimeout(function(){c({type:"timeout",target:d})},12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/asdl-kendeda/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var p=d;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"20d9":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var r=a("75fc"),n=(a("cadf"),a("551c"),a("f751"),a("097d"),a("2b0e")),o=a("bb71");a("da64");n["a"].use(o["a"],{iconfont:"md"});var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("VuePerfectScrollbar",{staticClass:"scroll-area",attrs:{settings:e.settings}},[a("AppNavigationDrawer"),a("AppToolbar"),a("v-content",[a("v-layout",{attrs:{"justify-center":""}},[a("v-flex",{staticClass:"pa-2",attrs:{xs12:"",lg11:"",xl10:""}},[a("v-slide-y-reverse-transition",{attrs:{mode:"out-in"}},[a("router-view")],1)],1)],1)],1),a("AppFooter")],1)],1)},l=[],s=a("9d63"),c=a.n(s),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-navigation-drawer",{attrs:{app:"",fixed:"",clipped:"",width:e.width},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{color:"primary"}},[e._l(e.menuItems,function(t,r){return[t.group?e._e():a("v-list-tile",{key:t.to,attrs:{to:t.to}},[a("v-list-tile-content",[a("v-list-tile-title",{domProps:{textContent:e._s(t.title)}})],1)],1)]})],2)],1)},u=[],p=a("cebc"),f=a("2f62"),h={data:function(){return{drawer:!1}},computed:Object(p["a"])({},Object(f["b"])(["menuItems"]),{width:function(){return _.max([.15*window.innerWidth,300])}}),beforeMount:function(){var e=this;this.$root.$on("onDrawer",function(){e.drawer=!e.drawer,e.$root.$emit("updateWaterStyle",e.drawer)})}},m=h,g=a("2877"),v=a("6544"),b=a.n(v),y=a("8860"),w=a("ba95"),x=a("5d23"),S=a("f774"),C=Object(g["a"])(m,d,u,!1,null,null,null),D=C.exports;b()(C,{VList:y["a"],VListTile:w["a"],VListTileContent:x["a"],VListTileTitle:x["b"],VNavigationDrawer:S["a"]});var T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-toolbar",{attrs:{app:"",fixed:"","clipped-left":"",color:"primary",dark:""}},[a("v-toolbar-title",{staticClass:"headline text-uppercase"},[a("v-toolbar-side-icon",{staticClass:"hidden-lg-and-up",on:{click:e.onDrawer}}),a("span",[e._v("Kendeda Living Building Portal")]),a("span",{staticClass:"ml-2 subheading font-weight-light"},[e._v("by ASDL")])],1),a("v-spacer"),a("v-toolbar-items",{staticClass:"hidden-md-and-down"},[e._l(e.menuItems,function(t,r){return[a("v-tooltip",{attrs:{bottom:"",color:"primary"},scopedSlots:e._u([{key:"activator",fn:function(r){var n=r.on;return[a("v-btn",e._g({attrs:{flat:"",primary:"",to:t.to}},n),[e._v("\n              "+e._s(t.title)+"\n            ")])]}}],null,!0)},[a("span",[e._v(e._s(t.tooltip))])])]})],2)],1)],1)},k=[],V={data:function(){return{}},computed:Object(p["a"])({},Object(f["b"])(["menuItems"])),methods:{onDrawer:function(){this.$root.$emit("onDrawer")}}},z=V,A=a("8336"),E=a("9910"),j=a("71d9"),L=a("2a7f"),O=a("706c"),P=a("3a2f"),$=Object(g["a"])(z,T,k,!1,null,null,null),N=$.exports;b()($,{VBtn:A["a"],VSpacer:E["a"],VToolbar:j["a"],VToolbarItems:L["a"],VToolbarSideIcon:O["a"],VToolbarTitle:L["b"],VTooltip:P["a"]});var F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-footer",{attrs:{dark:"",height:"auto"}},[a("v-layout",{attrs:{row:"","justify-cenet":""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card",{staticClass:"primary white--text text-xs-center",attrs:{flat:"",tile:""}},[a("v-card-text",{staticClass:"white--text"},[a("strong",[e._v("KENDEDA: KENdeda living building challenge via Digital Engineering & Data Analytics")]),a("br"),e._v("\n          ©2019 "),a("strong",[e._v("Aerospace Systems Design Laboratory")])])],1)],1)],1)],1)},I=[],M={data:function(){return{icons:["fab fa-facebook","fab fa-twitter","fab fa-google-plus","fab fa-linkedin","fab fa-instagram"]}}},R=M,K=a("b0af"),B=a("99d9"),H=a("0e8f"),W=a("553a"),G=a("a722"),q=Object(g["a"])(R,F,I,!1,null,null,null),J=q.exports;b()(q,{VCard:K["a"],VCardText:B["a"],VFlex:H["a"],VFooter:W["a"],VLayout:G["a"]});var Y={data:function(){return{settings:{minScrollbarLength:300,maxScrollbarLength:500,suppressScrollX:!0}}},created:function(){this.$vuetify.theme.primary="#C7A754",this.$vuetify.theme.techgold="#C7A754",this.$vuetify.theme.buzzgold="#EAAA00"},watch:{"$vuetify.breakpoint":function(e){var t=this;e.mdAndDown&&_.debounce(function(){return t.drawer=!1},100)()}},components:{VuePerfectScrollbar:c.a,AppToolbar:N,AppNavigationDrawer:D,AppFooter:J}},Z=Y,U=(a("f221"),a("7496")),X=a("549c"),Q=a("0789"),ee=Object(g["a"])(Z,i,l,!1,null,"30599835",null),te=ee.exports;b()(ee,{VApp:U["a"],VContent:X["a"],VFlex:H["a"],VLayout:G["a"],VSlideYReverseTransition:Q["e"]});var ae=a("8c4f"),re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[a("div",{staticStyle:{position:"relative",height:"480px"}},[a("v-card",[a("v-carousel",{attrs:{height:"480","hide-controls":"","hide-delimiters":""}},e._l(e.items,function(e,t){return a("v-carousel-item",{key:t,attrs:{src:e.src}})}),1)],1),a("div",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}},[a("v-layout",{attrs:{row:"","align-center":"","justify-center":"","fill-height":""}},[a("div",{attrs:{id:"explorerTitle"}},[a("span",{staticClass:"title buzzgold--text"},[e._v("KEN")]),e._v("deda building"),a("br"),a("span",{staticClass:"title buzzgold--text"},[e._v("D")]),e._v("igital\n              "),a("span",{staticClass:"title buzzgold--text"},[e._v("E")]),e._v("ngineering &\n              "),a("span",{staticClass:"title buzzgold--text"},[e._v("D")]),e._v("ata\n              "),a("span",{staticClass:"title buzzgold--text"},[e._v("A")]),e._v("nalytics\n\n              "),a("div",{staticClass:"affiliation buzzgold--text"},[a("i",{staticStyle:{"font-size":"1.2rem"}},[e._v("for")]),a("br"),a("span",{staticClass:"buzzgold--text",staticStyle:{"font-size":"2.2rem","line-height":"1.6"}},[e._v("Georgia Institute of Technology")]),a("br"),a("i",{staticStyle:{"font-size":"1.2rem"}},[e._v("powered by")]),a("br"),a("span",{staticClass:"buzzgold--text",staticStyle:{"font-size":"1.7rem","line-height":"1.6"}},[e._v("Aerospace Systems Design Laboratory")])])])])],1)],1)]),a("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[a("v-divider")],1),a("v-flex",{staticClass:"pa-2",attrs:{id:"elem",xs6:""}},[a("v-card",{staticStyle:{overflow:"hidden"}},[a("iframe",{attrs:{width:e.vw,height:e.vh,src:"https://www.youtube.com/embed/4YDdoUPV5fk",frameborder:"0",allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])],1),a("v-flex",{staticClass:"pa-2",attrs:{xs6:""}},[a("v-card",{staticStyle:{overflow:"hidden"}},[a("iframe",{attrs:{width:e.vw,height:e.vh,src:"https://www.youtube.com/embed/Oh5dhJwM1h8",frameborder:"0",allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])],1),a("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[a("v-divider")],1),e._l(e.keyDesc,function(t,r){return a("v-flex",{key:r,staticClass:"pa-2",attrs:{xs4:"","d-flex":""}},[a("v-card",{staticClass:"pa-3 keyCard",attrs:{hover:""}},[a("div",{staticClass:"text-xs-center"},[a("v-btn",{attrs:{fab:"",outline:"",large:"",color:"primary"}},[a("v-icon",{attrs:{dark:""}},[e._v(e._s(t.icon))])],1)],1),a("div",{staticClass:"pa-2 bold headline",domProps:{textContent:e._s(t.title)}}),a("div",{staticClass:"pa-2",staticStyle:{"text-align":"justify"},domProps:{innerHTML:e._s(t.desc)}})])],1)})],2)],1)},ne=[],oe={data:function(){return{offsetTop:0,items:[{src:a("5733")},{src:a("da59")},{src:a("d16a")}],vw:560,wh:0,ww:0,keyDesc:[{icon:"description",title:"Kendeda living building challenge meets digital engineering",desc:"Digital engineering is one of trending engineering paradigms incorporating conventional physics-based approach with data-driven study.<br /> ASDL's digital enginering technology is finely elaborated to fully optimize the sustainability and net-neutrality of the Kendeda living building."},{icon:"bar_chart",title:"Enhanced Visualization by ASDL's Technology",desc:"For the maximum articulation of data information retrieved from kendeda building, various innovative big-data visualization tools are used by the power of Echarts, a performant and feature-rich javascript library for rapid data visualization and analytics.<br /> Echarts provides not only conventional charts but also lots of advanced visualizations such as sankey diagram, etc."},{icon:"build",title:"Flexible & Customizable Data Exploration",desc:"KENdeda building Digital Engineeg & Data Analytics is featured with a highly customizable data analysis and exploration framework.<br /> In this framework, a huge amount of complex dataset can be easily analyzed and simulated in various multi-dimensional and simultaneous graphic interface."}]}},computed:{vh:function(){return 315*this.vw/560}},methods:{onScroll:function(e){this.offsetTop=e.target.scrollTop}},mounted:function(){var e=this,t=document.querySelector("#elem").getBoundingClientRect();this.vw=t.width-16,this.wh=window.innerHeight,this.ww=window.innerWidth,window.addEventListener("scroll",function(t){e.offsetTop=window.scrollY})}},ie=oe,le=(a("db88"),a("5e66")),se=a("3e35"),ce=a("ce7e6"),de=a("132d"),ue=Object(g["a"])(ie,re,ne,!1,null,"7ae74048",null),pe=ue.exports;b()(ue,{VBtn:A["a"],VCard:K["a"],VCarousel:le["a"],VCarouselItem:se["a"],VDivider:ce["a"],VFlex:H["a"],VIcon:de["a"],VLayout:G["a"]}),n["a"].use(ae["a"]);var fe=new ae["a"]({base:"/asdl-kendeda/",routes:[{path:"/",name:"main",component:pe},{path:"/water-energy",name:"water-energy",component:function(){return Promise.all([a.e("dashboard~energy"),a.e("energy")]).then(a.bind(null,"1bd7"))}},{path:"/dashboard",name:"dashboard",component:function(){return Promise.all([a.e("dashboard~energy"),a.e("dashboard")]).then(a.bind(null,"0c7c"))}},{path:"/explorer",name:"explorer",component:function(){return a.e("explorer").then(a.bind(null,"0c4f"))}}]});n["a"].use(f["a"]);var he=new f["a"].Store({state:{menuItems:[{title:"Home",to:"/",tooltip:"KENDEDA main page"},{title:"Dashboard",to:"/dashboard",tooltip:"Interactive data analytics"},{title:"Water/Energy",to:"/water-energy",tooltip:"Time-wise vis. by sankey diagram"}],startDate:0,endDate:364,selectedTimes:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],water:{cisternCapacity:5e4,currentLevel:5e4,historicalLevel:[],collectionRate:0,consumptionRate:200,meters:[{id:"WM-105",name:"Total Domestic",currentReading:0,pastData:[]},{id:"WM-101",name:"GT Station",currentReading:0,pastData:[]}]},energy:{collectionRate:0,consumptionRate:0,meters:[{id:"EM-107",name:"Demand",currentReading:0,pastData:[]},{id:"EM-102",name:"PV",currentReading:0,pastData:[]}]},weather:{},events:[{title:"Company Event",details:"Recruitment event for internships",date:"2019-03-30",people:"50",open:!1},{title:"Student Club Fundraiser",details:"Student hosted event to raise money for club",date:"2019-03-31",people:"80",open:!1},{title:"Award Ceremony",details:"Department teaching and research award reception",date:"2019-04-01",people:"100",open:!1},{title:"Georgia Tech Foundation Gala",details:"Fundraising event for the GT Foundation",date:"2019-03-07",people:"150",open:!1},{title:"Research Meetings with Sponsors",details:"Organizations who sponsor research receive presentations on projects",date:"2019-03-03",people:"25",open:!1},{title:"Grad Student Appreciation",details:"Reception for grad students and their advisors",date:"2019-03-01",people:"75",open:!1},{title:"Conference",details:"Small conference for undergraduate research",date:"2019-03-21",people:"250",open:!1},{title:"Hackathon",details:"Code like there is no tommorrow",date:"2019-03-01",people:"100",open:!1},{title:"Hackathon",details:"Code like there is no tomorrow",date:"2019-03-02",people:"100",open:!1}],technology:{toilet:{type:"High Efficiency",efficiency:.01},sink:{type:"High Efficiency",efficiency:.01}}},mutations:{changeDates:function(e,t){e.startDate=t.dataZoom[0].startValue,e.endDate=t.dataZoom[0].endValue},changeTimes:function(e,t){e.selectedTimes=t}},actions:{},getters:{}}),me=a("2ef0"),ge=a.n(me),ve=a("313e"),be=a.n(ve),ye=["#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80","#8d98b3","#e5cf0d","#97b552","#95706d","#dc69aa","#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"],we={color:ye,title:{textStyle:{fontWeight:"normal",color:"#008acd"}},visualMap:{itemWidth:15,color:["#5ab1ef","#e0ffff"]},toolbox:{iconStyle:{normal:{borderColor:ye[0]}}},tooltip:{backgroundColor:"rgba(50,50,50,0.5)",axisPointer:{type:"line",lineStyle:{color:"#008acd"},crossStyle:{color:"#008acd"},shadowStyle:{color:"rgba(200,200,200,0.2)"}}},dataZoom:{dataBackgroundColor:"#efefff",fillerColor:"rgba(182,162,222,0.2)",handleColor:"#008acd"},grid:{borderColor:"#eee"},categoryAxis:{axisLine:{lineStyle:{color:"#008acd"}},splitLine:{lineStyle:{color:["#eee"]}}},valueAxis:{axisLine:{lineStyle:{color:"#008acd"}},splitArea:{show:!0,areaStyle:{color:["rgba(250,250,250,0.1)","rgba(200,200,200,0.1)"]}},splitLine:{lineStyle:{color:["#eee"]}}},timeline:{lineStyle:{color:"#008acd"},controlStyle:{normal:{color:"#008acd"},emphasis:{color:"#008acd"}},symbol:"emptyCircle",symbolSize:3},line:{smooth:!0,symbol:"emptyCircle",symbolSize:3},candlestick:{itemStyle:{normal:{color:"#d87a80",color0:"#2ec7c9",lineStyle:{color:"#d87a80",color0:"#2ec7c9"}}}},scatter:{symbol:"circle",symbolSize:4},map:{label:{normal:{textStyle:{color:"#d87a80"}}},itemStyle:{normal:{borderColor:"#eee",areaColor:"#ddd"},emphasis:{areaColor:"#fe994e"}}},graph:{color:ye},gauge:{axisLine:{lineStyle:{color:[[.2,"#2ec7c9"],[.8,"#5ab1ef"],[1,"#d87a80"]],width:10}},axisTick:{splitNumber:10,length:15,lineStyle:{color:"auto"}},splitLine:{length:22,lineStyle:{color:"auto"}},pointer:{width:5}}};a("d015");n["a"].config.productionTip=!1,window.echarts=be.a,be.a.registerTheme("shine",we),window.$=function(e){var t=Object(r["a"])(document.querySelectorAll(e));return 1===ge.a.size(t)?t[0]:t},new n["a"]({router:fe,store:he,render:function(e){return e(te)}}).$mount("#app")},5733:function(e,t,a){e.exports=a.p+"img/bldgOverview.9ac4b82e.jpg"},d16a:function(e,t,a){e.exports=a.p+"img/bldgOverview3.9b144b34.jpg"},da59:function(e,t,a){e.exports=a.p+"img/bldgOverview2.04fd7b40.jpg"},db88:function(e,t,a){"use strict";var r=a("dc3e"),n=a.n(r);n.a},dc3e:function(e,t,a){},f221:function(e,t,a){"use strict";var r=a("20d9"),n=a.n(r);n.a}});
//# sourceMappingURL=app.b40b9e0d.js.map