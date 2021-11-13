(function(t){function e(e){for(var o,r,s=e[0],c=e[1],u=e[2],f=0,d=[];f<s.length;f++)r=s[f],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(o=!1)}o&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},a={app:0},i=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}}),n("router-view")],1)},i=[],r=(n("5c0b"),n("2877")),s={},c=Object(r["a"])(s,a,i,!1,null,null,null),u=c.exports,l=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h1",{staticClass:"home__title"},[t._v("Masiv´s Newspaper")]),n("p",{staticClass:"home__subtitle"},[t._v(t._s(t.currentDate()))])]),n("div",{staticClass:"columns is-desktop"},[n("div",{staticClass:"column is-8 home__column-cartoons"},[n("p",{staticClass:"title"},[t._v("Masiv Cartoons")]),n("p",{staticClass:"content"},[t._v(" Here you can read famous cartoons and rate them. Enjoy! ")]),n("Book"),n("div",{staticClass:"home__button-more"},[n("button",{staticClass:"button is-outlined",on:{click:function(e){return t.random()}}},[t._v(" Load More ")])])],1),t._m(0)])])},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"column home__column-news"},[n("p",{staticClass:"title"},[t._v("Masiv is now part of Route Mobile")]),n("p",[t._v(" As part of our vision of global growth, today we are closing the acquisition transaction of Masivian SAS and all its subsidiaries in Colombia and Peru by Route Mobile UK Limited, a subsidiary of Route Mobile Ltd (NSE: ROUTE). "),n("br"),n("br"),t._v(" Route Mobile is one of the main providers of platform services for cloud communications at a global level with a direct presence in multiple countries, connected to more than 300 international operators, to the main OTT ecosystems and with a portfolio of products of great extension. ")]),n("div",[n("p",{staticClass:"title"},[t._v("Chatbot for technical support.")]),n("p",[t._v(" This service allows all types of companies to obtain the benefits of using artificial intelligence to optimize customer service and provide a better experience. In addition, the implementation of a Chatbot extends the range of availability to 24 hours a day, 7 days a week. ")])])])}],v=n("5530"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"options"},t._l(t.cartoons,(function(e,o){return n("div",{key:o,staticClass:"option",class:{active:e.active},style:{backgroundImage:"url("+e.img+")"},on:{click:function(n){return t.setActive(o,e)}}},[n("div",{staticClass:"box__hover"},[n("div",{staticClass:"shadow"}),n("div",{staticClass:"label book__rating box__hover"},[e.active?n("div",{staticClass:"stars"},[n("star-rating",{attrs:{increment:1,"max-rating":5,"inactive-color":"#ffffff","active-color":"#ffd700","star-size":35,"rounded-corners":!0,"show-rating":!1},on:{"rating-selected":function(e){return t.setRating(o)}},model:{value:t.rate,callback:function(e){t.rate=e},expression:"rate"}}),n("div",{staticClass:"info"},[n("div",{staticClass:"main"},[t._v(t._s(e.safe_title))]),n("div",{staticClass:"sub"},[t._v(t._s(e.year))])])],1):n("div",{staticClass:"icon rate"},[n("i",{staticClass:"fas fa-star"},[t._v(t._s(e.rate))])])])])])})),0)},p=[],b=n("2f62"),h=n("5b3d"),_=n.n(h),C={name:"Book",components:{StarRating:_.a},mounted:function(){this.rating=0},data:function(){return{}},computed:Object(v["a"])(Object(v["a"])({},Object(b["c"])(["cartoons","rating"])),{},{rate:{get:function(){return this.rating},set:function(t){this.setRate(t)}}}),methods:Object(v["a"])(Object(v["a"])({},Object(b["b"])(["setActiveAll","setRatingCartoon","setRate"])),{},{setRating:function(t){this.setRatingCartoon({index:t,chooseRate:this.rating})},setActive:function(t,e){this.rate=e.rate,this.setActiveAll(t)}})},g=C,O=Object(r["a"])(g,m,p,!1,null,"7814439c",null),y=O.exports,A=n("5a0c"),w=n.n(A),E={name:"Home",components:{Book:y},mounted:function(){this.random()},computed:Object(v["a"])({},Object(b["c"])(["maxLimitNumberCartoon","quantityCartoonsLoad"])),methods:Object(v["a"])(Object(v["a"])({},Object(b["b"])(["getCartoon","setActive","resetAllCartoons"])),{},{random:function(){var t=this;this.resetAllCartoons();for(var e=function(e){var n=Math.floor(Math.random()*(t.maxLimitNumberCartoon-1)+1);t.getCartoon(n).then((function(n){0===e&&t.setActive(0,n)}))},n=0;n<this.quantityCartoonsLoad;n++)e(n)},currentDate:function(){var t=new Date,e=w()(t).format("dddd, MMM. D, YYYY");return e}})},R=E,T=Object(r["a"])(R,f,d,!1,null,null,null),x=T.exports;o["a"].use(l["a"]);var j=[{path:"/",name:"Home",component:x}],S=new l["a"]({mode:"history",base:"/",routes:j}),M=S,k=(n("d3b7"),n("bc3a")),N=n.n(k);o["a"].use(b["a"]);var L=new b["a"].Store({state:{cartoons:[],maxLimitNumberCartoon:2539,quantityCartoonsLoad:5,rating:0},mutations:{SET_CARTOON:function(t,e){var n=e;n.active=!1,n.rate=0,t.cartoons.push(n)},CHANGE_ACTIVE:function(t,e){t.cartoons[e.index].active=e.active},RESET_CARTOONS:function(t){t.cartoons=[]},SET_CHOOSE_RATE:function(t,e){t.cartoons[e.index].rate=e.chooseRate},SET_RATING:function(t,e){t.rating=e}},actions:{getCartoon:function(t,e){var n=t.commit,o=t.dispatch;return o("setRate",0),new Promise((function(t,o){N.a.post("https://api-cartoon-test.herokuapp.com",{cartoon:e}).then((function(e){n("SET_CARTOON",e.data),t("success")})).catch((function(t){o(t)}))}))},setActiveAll:function(t,e){for(var n=t.commit,o=t.state,a=0;a<o.quantityCartoonsLoad;a++)n("CHANGE_ACTIVE",a===e?{index:a,active:!0}:{index:a,active:!1})},setActive:function(t,e){var n=t.commit;n("CHANGE_ACTIVE",{index:e,active:!0})},resetAllCartoons:function(t){var e=t.commit;e("RESET_CARTOONS")},setRatingCartoon:function(t,e){var n=t.commit;n("SET_CHOOSE_RATE",e)},setRate:function(t,e){var n=t.commit;n("SET_RATING",e)}},modules:{}});n("c1c3"),n("f0a3"),n("6014");o["a"].config.productionTip=!1,new o["a"]({router:M,store:L,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},6014:function(t,e,n){},"9c0c":function(t,e,n){},c1c3:function(t,e,n){},f0a3:function(t,e,n){}});
//# sourceMappingURL=app.23c645e4.js.map