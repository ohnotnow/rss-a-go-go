(function(e){function t(t){for(var a,i,l=t[0],o=t[1],c=t[2],u=0,f=[];u<l.length;u++)i=l[u],r[i]&&f.push(r[i][0]),r[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);d&&d(t);while(f.length)f.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],a=!0,l=1;l<s.length;l++){var o=s[l];0!==r[o]&&(a=!1)}a&&(n.splice(t--,1),e=i(i.s=s[0]))}return e}var a={},r={app:0},n=[];function i(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=a,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(s,a,function(t){return e[t]}.bind(null,a));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=o;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},1:function(e,t){},2:function(e,t){},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("097d");var a=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"bg-black font-sans",attrs:{id:"app"}},[s("div",{staticClass:"px-4"},[s("form",{staticClass:"w-full max-w-sm mx-auto"},[s("div",{staticClass:"flex items-center border-b border-b-2 border-grey-darkest py-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.newFeedUrl,expression:"newFeedUrl"}],staticClass:"appearance-none bg-transparent border-none w-full text-grey mr-3 py-1 px-2 leading-tight focus:outline-none focus:bg-grey-darkest",attrs:{type:"text",placeholder:"https://www.example.com/rss","aria-label":"New Feed URL"},domProps:{value:e.newFeedUrl},on:{input:function(t){t.target.composing||(e.newFeedUrl=t.target.value)}}}),s("button",{staticClass:"flex-no-shrink bg-grey-darkest hover:bg-grey-darkest-dark border-grey-darkest hover:border-black hover:text-grey-light text-sm border-2 text-grey py-1 px-2 rounded",attrs:{type:"button"},on:{click:e.addFeed}},[e._v("Add")])])])]),s("sortable-list",{scopedSlots:e._u([{key:"default",fn:function(t){var a=t.items;return s("div",{staticClass:"container mx-auto grid pt-8"},e._l(a,function(t){return s("sortable-item",{key:t},[s("feed-item",{attrs:{feed:t},on:{remove:e.deleteFeed}})],1)}),1)}}]),model:{value:e.feeds,callback:function(t){e.feeds=t},expression:"feeds"}})],1)},n=[],i=s("b6d0"),l=s.n(i),o=s("75fc"),c=s("f499"),d=s.n(c),u=s("4663");function f(e,t,s){var a=[].concat(Object(o["a"])(e.slice(0,t)),Object(o["a"])(e.slice(t+1,e.length)));return[].concat(Object(o["a"])(a.slice(0,s)),[e[t]],Object(o["a"])(a.slice(s,a.length)))}var h,p,m,v,b,g,w={props:{value:{required:!0},itemClass:{default:"sortable-item"},handleClass:{default:"sortable-handle"}},provide:function(){return{itemClass:this.itemClass,handleClass:this.handleClass}},render:function(){return this.$scopedSlots.default({items:this.value})},mounted:function(){var e=this,t=new u["Sortable"](this.$el,{draggable:".".concat(this.itemClass),handle:".".concat(this.handleClass),mirror:{constrainDimensions:!0}}).on("sortable:stop",function(t){var s=t.oldIndex,a=t.newIndex;e.$emit("input",f(e.value,s,a))});this.$on("hook:destroyed",function(){t.destroy()})}},x=w,y=s("2877"),C=Object(y["a"])(x,h,p,!1,null,null,null),k=C.exports,O={render:function(){return this.$slots.default[0]},inject:["itemClass"],mounted:function(){this.$el.classList.add(this.itemClass)}},j=O,_=Object(y["a"])(j,m,v,!1,null,null,null),F=_.exports,S=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"border border-black p-4 shadow-md bg-grey-darkest relative"},[s("h1",{staticClass:"mb-4 opacity-50 flex items-start"},[s("span",{staticClass:"bg-black"}),s("button",{staticClass:"text-white",class:{"opacity-50 spin":e.refreshing},attrs:{disabled:e.refreshing},on:{click:e.refreshFeed}},[s("svg",{staticClass:"w-8 h-8",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},[s("circle",{staticClass:"primary",attrs:{cx:"12",cy:"12",r:"10"}}),s("path",{staticClass:"secondary",attrs:{d:"M8.52 7.11a5.98 5.98 0 0 1 8.98 2.5 1 1 0 1 1-1.83.8 4 4 0 0 0-5.7-1.86l.74.74A1 1 0 0 1 10 11H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1.7-.7l.82.81zm5.51 8.34l-.74-.74A1 1 0 0 1 14 13h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1.7.7l-.82-.81A5.98 5.98 0 0 1 6.5 14.4a1 1 0 1 1 1.83-.8 4 4 0 0 0 5.7 1.85z"}})])]),s("span",{staticClass:"ml-4"},[s("a",{staticClass:"text-grey no-underline mr-2 hover:text-grey-light",attrs:{href:e.metaData.link}},[e._v(e._s(e.metaData.title))]),s("sortable-handle",[s("svg",{staticClass:"ml-2 h-4 w-4 cursor-move text-grey hover:text-grey-darkest",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M14 4h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM8 4h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm6 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm-6 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm6 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm-6 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z"}})])])],1)]),s("ul",{staticClass:"list-reset"},e._l(e.items,function(t){return s("li",{key:t.link,staticClass:"mb-4"},[s("a",{staticClass:"text-grey text-xl no-underline hover:text-grey-light visited:text-grey-dark",attrs:{href:t.link}},[e._v(e._s(t.title))]),s("div",{staticClass:"text-grey-dark font-light text-sm opacity-70"},[e._v(e._s(t.pubDate))])])}),0),s("button",{staticClass:"absolute pin-r pin-b",attrs:{title:"Delete"},on:{click:function(t){e.deleteFeed(e.feed)}}},[s("svg",{staticClass:"icon-trash w-8 mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[s("path",{staticClass:"primary",attrs:{d:"M5 5h14l-.89 15.12a2 2 0 0 1-2 1.88H7.9a2 2 0 0 1-2-1.88L5 5zm5 5a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1z"}}),s("path",{staticClass:"secondary",attrs:{d:"M8.59 4l1.7-1.7A1 1 0 0 1 11 2h2a1 1 0 0 1 .7.3L15.42 4H19a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2h3.59z"}})])])])},I=[],z=(s("96cf"),s("3b8d")),$=(s("b54a"),{render:function(){return this.$slots.default[0]},inject:["handleClass"],mounted:function(){this.$el.classList.add(this.handleClass)}}),D=$,U=Object(y["a"])(D,b,g,!1,null,null,null),M=U.exports,A=s("b0f0"),H=new A,L={props:["feed"],components:{SortableHandle:M},mounted:function(){var e=this,t=localStorage.getItem("rss::".concat(this.feed));t&&(t=JSON.parse(t),this.items=t.items.slice(0,10),this.metaData={title:t.title,link:t.link}),this.refreshIfItsBeenAWhile(),setTimeout(function(){e.refreshIfItsBeenAWhile()},9e5)},data:function(){return{refreshing:!1,items:[],metaData:{title:"",link:""}}},methods:{refreshIfItsBeenAWhile:function(){var e=localStorage.getItem("rss::".concat(this.feed,"::lastrefresh")),t=9e5,s=(new Date).getTime()-t;(!e||e<s)&&this.refreshFeed()},refreshFeed:function(){var e=Object(z["a"])(regeneratorRuntime.mark(function e(){var t,s,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t="https://cors-anywhere.herokuapp.com/",this.refreshing=!0,e.next=4,H.parseURL(t+this.feed);case 4:s=e.sent,this.items=s.items.slice(0,10),this.metaData.title=s.title,this.metaData.link=s.link,this.refreshing=!1,localStorage.setItem("rss::".concat(this.feed),d()(s)),a=(new Date).getTime(),localStorage.setItem("rss::".concat(this.feed,"::lastrefresh"),a);case 12:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),deleteFeed:function(e){this.$emit("remove",e)}}},P=L,B=Object(y["a"])(P,S,I,!1,null,null,null),T=B.exports,J={name:"app",components:{SortableList:k,SortableItem:F,FeedItem:T},mounted:function(){var e=localStorage.getItem("rss::feeds");e&&(this.feeds=JSON.parse(e))},watch:{feeds:function(){localStorage.setItem("rss::feeds",d()(this.feeds))}},data:function(){return{newFeedUrl:"",feeds:["http://feeds.bbci.co.uk/news/rss.xml"]}},methods:{addFeed:function(){if(this.newFeedUrl){var e=Object(o["a"])(this.feeds);e.push(this.newFeedUrl.trim()),this.feeds=Object(o["a"])(new l.a(e)),this.newFeedUrl=""}},deleteFeed:function(e){this.feeds=this.feeds.filter(function(t){return t!=e})}}},N=J,R=Object(y["a"])(N,r,n,!1,null,null,null),V=R.exports;s("a589");a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(V)}}).$mount("#app")},a589:function(e,t,s){}});
//# sourceMappingURL=app.0959d517.js.map