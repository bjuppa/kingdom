webpackJsonp([18],{"0F0d":function(t,n,e){"use strict";n.a={name:"no-ssr",props:["placeholder"],data:function(){return{canRender:!1}},mounted:function(){this.canRender=!0},render:function(t){return this.canRender?this.$slots.default&&this.$slots.default[0]:t("div",{class:["no-ssr-placeholder"]},this.$slots.placeholder||this.placeholder)}}},"2OyL":function(t,n,e){var r=e("CTNS");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e("rjj0")("32cef31f",r,!1,{sourceMap:!0})},CTNS:function(t,n,e){(t.exports=e("FZ+f")(!0)).push([t.i,"\n.__nuxt-error-page {\n  padding: 16px;\n  padding: 1rem;\n  background: #F7F8FB;\n  color: #47494E;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  font-family: sans-serif;\n  font-weight: 100 !important;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  -webkit-font-smoothing: antialiased; \n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.__nuxt-error-page .error {\n  max-width: 450px;\n}\n.__nuxt-error-page .title {\n  font-size: 24px;\n  font-size: 1.5rem;\n  margin-top: 15px;\n  color: #47494E;\n  margin-bottom: 8px;\n}\n.__nuxt-error-page .description {\n  color: #7F828B;\n  line-height: 21px;\n  margin-bottom: 10px;\n}\n.__nuxt-error-page a {\n  color: #7F828B !important;\n  text-decoration: none;\n}\n.__nuxt-error-page .logo {\n  position: fixed;\n  left: 12px;\n  bottom: 12px;\n}\n","",{version:3,sources:["/Users/bjorn/Code/kingdom/.nuxt/components/.nuxt/components/nuxt-error.vue"],names:[],mappings:";AA6CA;EACA,cAAA;EAAA,cAAA;EACA,oBAAA;EACA,eAAA;EACA,mBAAA;EACA,qBAAA;EAAA,qBAAA;EAAA,cAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,wBAAA;EACA,0BAAA;MAAA,uBAAA;UAAA,oBAAA;EACA,6BAAA;EAAA,8BAAA;MAAA,2BAAA;UAAA,uBAAA;EACA,wBAAA;EACA,4BAAA;EACA,2BAAA;EACA,+BAAA;EACA,oCAAA;EACA,mBAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,UAAA;CACA;AACA;EACA,iBAAA;CACA;AACA;EACA,gBAAA;EAAA,kBAAA;EACA,iBAAA;EACA,eAAA;EACA,mBAAA;CACA;AACA;EACA,eAAA;EACA,kBAAA;EACA,oBAAA;CACA;AACA;EACA,0BAAA;EACA,sBAAA;CACA;AACA;EACA,gBAAA;EACA,WAAA;EACA,aAAA;CACA",file:"nuxt-error.vue",sourcesContent:['<template>\n<div class="__nuxt-error-page">\n<div class="error">\n  <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#DBE1EC" viewBox="0 0 48 48"><path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"/></svg>\n\n  <div class="title">{{ message }}</div>\n  <p class="description" v-if="statusCode === 404">\n    <nuxt-link class="error-link" to="/">Back to the home page</nuxt-link>\n  </p>\n  \n\n  <div class="logo">\n    <a href="https://nuxtjs.org" target="_blank" rel="noopener">Nuxt.js</a>\n  </div>\n</div>\n</div>\n</template>\n\n<script>\nexport default {\n  name: \'nuxt-error\',\n  props: [\'error\'],\n  head () {\n    return {\n      title: this.message,\n      meta: [\n        {\n          name: \'viewport\',\n          content: \'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no\'\n        }\n      ]\n    }\n  },\n  \n  computed: {\n    statusCode () {\n      return (this.error && this.error.statusCode) || 500\n    },\n    message () {\n      return this.error.message || \'Error\'\n    }\n  }\n}\n<\/script>\n\n<style>\n.__nuxt-error-page {\n  padding: 1rem;\n  background: #F7F8FB;\n  color: #47494E;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-family: sans-serif;\n  font-weight: 100 !important;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  -webkit-font-smoothing: antialiased; \n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.__nuxt-error-page .error {\n  max-width: 450px;\n}\n.__nuxt-error-page .title {\n  font-size: 1.5rem;\n  margin-top: 15px;\n  color: #47494E;\n  margin-bottom: 8px; \n}\n.__nuxt-error-page .description {\n  color: #7F828B;\n  line-height: 21px;\n  margin-bottom: 10px;\n}\n.__nuxt-error-page a {\n  color: #7F828B !important;\n  text-decoration: none;\n}\n.__nuxt-error-page .logo {\n  position: fixed;\n  left: 12px;\n  bottom: 12px;\n}\n</style>\n'],sourceRoot:""}])},F88d:function(t,n,e){"use strict";var r=e("WlcD"),o=e("P+aQ"),i=!1;var a=function(t){i||e("Px6w")},s=e("VU/8")(r.a,o.a,!1,a,null,null);s.options.__file=".nuxt/components/nuxt-loading.vue",n.a=s.exports},"HBB+":function(t,n,e){"use strict";n.a={name:"nuxt-child",functional:!0,props:["keepAlive"],render:function(t,n){var e=n.parent,i=n.data,a=n.props;i.nuxtChild=!0;for(var s=e,u=e.$nuxt.nuxt.transitions,c=e.$nuxt.nuxt.defaultTransition,l=0;e;)e.$vnode&&e.$vnode.data.nuxtChild&&l++,e=e.$parent;i.nuxtChildDepth=l;var p=u[l]||c,h={};r.forEach(function(t){void 0!==p[t]&&(h[t]=p[t])});var f={};o.forEach(function(t){"function"==typeof p[t]&&(f[t]=p[t].bind(s))});var d=f.beforeEnter;f.beforeEnter=function(t){if(window.$nuxt.$emit("triggerScroll"),d)return d.call(s,t)};var m=[t("router-view",i)];return void 0!==a.keepAlive&&(m=[t("keep-alive",m)]),t("transition",{props:h,on:f},m)}};var r=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],o=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"]},"Hot+":function(t,n,e){"use strict";var r=e("/5sW"),o=e("HBB+"),i=e("ct3O"),a=e("YLfZ");n.a={name:"nuxt",props:["nuxtChildKey","keepAlive"],render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){r.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(a.b)(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:o.a,NuxtError:i.a}}},"P+aQ":function(t,n,e){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"nuxt-progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})};r._withStripped=!0;var o={render:r,staticRenderFns:[]};n.a=o},Px6w:function(t,n,e){var r=e("zg9I");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e("rjj0")("5bab7354",r,!1,{sourceMap:!0})},QhKw:function(t,n,e){"use strict";var r=function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),n("div",{staticClass:"title"},[this._v(this._s(this.message))]),404===this.statusCode?n("p",{staticClass:"description"},[n("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[this._v("Back to the home page")])],1):this._e(),this._m(0)])])};r._withStripped=!0;var o={render:r,staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"logo"},[n("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}]};n.a=o},T23V:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,o,i,a=e("pFYg"),s=e.n(a),u=e("//Fk"),c=e.n(u),l=e("Xxa5"),p=e.n(l),h=e("mvHQ"),f=e.n(h),d=e("exGp"),m=e.n(d),A=e("fZjL"),x=e.n(A),v=e("woOf"),g=e.n(v),C=e("/5sW"),y=e("unZF"),b=e("qcny"),w=e("YLfZ"),_=(r=m()(p.a.mark(function t(n,e,r){var o,i,a=this;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!j.nuxt.err||e.path!==n.path,this._queryChanged=f()(n.query)!==f()(e.query),this._diffQuery=this._queryChanged?Object(w.g)(n.query,e.query):[],this._pathChanged&&this.$loading.start&&this.$loading.start(),t.prev=4,t.next=7,Object(w.k)(n);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var n=t.options.watchQuery;return!0===n||!!Array.isArray(n)&&n.some(function(t){return a._diffQuery[t]})})&&this.$loading.start&&this.$loading.start(),r(),t.next=19;break;case 12:t.prev=12,t.t0=t.catch(4),t.t0=t.t0||{},i=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:i,message:t.t0.message}),this.$nuxt.$emit("routeChanged",n,e,t.t0),r(!1);case 19:case"end":return t.stop()}},t,this,[[4,12]])})),function(t,n,e){return r.apply(this,arguments)}),E=(o=m()(p.a.mark(function t(n,e,r){var o,i,a,s,u,l,h,f,d=this;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return o=!1,i=function(t){if(e.path===t.path&&d.$loading.finish&&d.$loading.finish(),e.path!==t.path&&d.$loading.pause&&d.$loading.pause(),!o){o=!0;var n=[];$=Object(w.e)(e,n).map(function(t,r){return Object(w.b)(e.matched[n[r]].path)(e.params)}),r(t)}},t.next=6,Object(w.m)(j,{route:n,from:e,next:i.bind(this)});case 6:if(this._dateLastError=j.nuxt.dateErr,this._hadError=!!j.nuxt.err,a=[],(s=Object(w.e)(n,a)).length){t.next=24;break}return t.next=13,O.call(this,s,j.context);case 13:if(!o){t.next=15;break}return t.abrupt("return");case 15:return t.next=17,this.loadLayout("function"==typeof b.a.layout?b.a.layout(j.context):b.a.layout);case 17:return u=t.sent,t.next=20,O.call(this,s,j.context,u);case 20:if(!o){t.next=22;break}return t.abrupt("return");case 22:return j.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 24:return s.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(S(s,n,e)),t.prev=26,t.next=29,O.call(this,s,j.context);case 29:if(!o){t.next=31;break}return t.abrupt("return");case 31:if(!j.context._errored){t.next=33;break}return t.abrupt("return",r());case 33:return"function"==typeof(l=s[0].options.layout)&&(l=l(j.context)),t.next=37,this.loadLayout(l);case 37:return l=t.sent,t.next=40,O.call(this,s,j.context,l);case 40:if(!o){t.next=42;break}return t.abrupt("return");case 42:if(!j.context._errored){t.next=44;break}return t.abrupt("return",r());case 44:if(h=!0,s.forEach(function(t){h&&"function"==typeof t.options.validate&&(h=t.options.validate({params:n.params||{},query:n.query||{}}))}),h){t.next=49;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 49:return t.next=51,c.a.all(s.map(function(t,e){if(t._path=Object(w.b)(n.matched[a[e]].path)(n.params),t._dataRefresh=!1,d._pathChanged&&t._path!==$[e])t._dataRefresh=!0;else if(!d._pathChanged&&d._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return d._diffQuery[t]}))}if(!d._hadError&&d._isMounted&&!t._dataRefresh)return c.a.resolve();var o=[],i=t.options.asyncData&&"function"==typeof t.options.asyncData,s=!!t.options.fetch,u=i&&s?30:45;if(i){var l=Object(w.j)(t.options.asyncData,j.context).then(function(n){Object(w.a)(t,n),d.$loading.increase&&d.$loading.increase(u)});o.push(l)}if(s){var p=t.options.fetch(j.context);p&&(p instanceof c.a||"function"==typeof p.then)||(p=c.a.resolve(p)),p.then(function(t){d.$loading.increase&&d.$loading.increase(u)}),o.push(p)}return c.a.all(o)}));case 51:o||(this.$loading.finish&&this.$loading.finish(),$=s.map(function(t,e){return Object(w.b)(n.matched[a[e]].path)(n.params)}),r()),t.next=66;break;case 54:return t.prev=54,t.t0=t.catch(26),t.t0||(t.t0={}),$=[],t.t0.statusCode=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,"function"==typeof(f=b.a.layout)&&(f=f(j.context)),t.next=63,this.loadLayout(f);case 63:this.error(t.t0),this.$nuxt.$emit("routeChanged",n,e,t.t0),r(!1);case 66:case"end":return t.stop()}},t,this,[[26,54]])})),function(t,n,e){return o.apply(this,arguments)}),k=(i=m()(p.a.mark(function t(n){var e,r,o,i;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return j=n.app,B=n.router,t.next=4,c.a.all(T(B));case 4:return e=t.sent,r=new C.default(j),o=R.layout||"default",t.next=9,r.loadLayout(o);case 9:if(r.setLayout(o),i=function(){r.$mount("#__nuxt"),C.default.nextTick(function(){z(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),e.length&&(r.setTransitions(S(e,B.currentRoute)),$=B.currentRoute.matched.map(function(t){return Object(w.b)(t.path)(B.currentRoute.params)})),r.$loading={},R.error&&r.error(R.error),B.beforeEach(_.bind(r)),B.beforeEach(E.bind(r)),B.afterEach(M),B.afterEach(F.bind(r)),!R.serverRendered){t.next=22;break}return i(),t.abrupt("return");case 22:E.call(r,B.currentRoute,B.currentRoute,function(t){if(!t)return M(B.currentRoute,B.currentRoute),q.call(r,B.currentRoute),void i();B.push(t,function(){return i()},function(t){if(!t)return i();console.error(t)})});case 23:case"end":return t.stop()}},t,this)})),function(t){return i.apply(this,arguments)}),$=[],j=void 0,B=void 0,R=window.__NUXT__||{};function S(t,n,e){var r=function(t){var r=function(t,n){if(!t||!t.options||!t.options[n])return{};var e=t.options[n];if("function"==typeof e){for(var r=arguments.length,o=Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];return e.apply(void 0,o)}return e}(t,"transition",n,e)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var n=g()({},r(t));if(e&&e.matched.length&&e.matched[0].components.default){var o=r(e.matched[0].components.default);x()(o).filter(function(t){return o[t]&&-1!==t.toLowerCase().indexOf("leave")}).forEach(function(t){n[t]=o[t]})}return n})}function L(t,n){return R.serverRendered&&n&&Object(w.a)(t,n),t._Ctor=t,t}function T(t){var n,e=this,r=Object(w.d)(t.options.base,t.options.mode);return Object(w.c)(t.match(r),(n=m()(p.a.mark(function t(n,r,o,i,a){var s;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof n||n.options){t.next=4;break}return t.next=3,n();case 3:n=t.sent;case 4:return s=L(Object(w.l)(n),R.data?R.data[a]:null),o.components[i]=s,t.abrupt("return",s);case 7:case"end":return t.stop()}},t,e)})),function(t,e,r,o,i){return n.apply(this,arguments)}))}function O(t,n,e){var r=this,o=[],i=!1;if(void 0!==e&&(o=[],e.middleware&&(o=o.concat(e.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof y.a[t]&&(i=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),y.a[t])}),!i)return Object(w.i)(o,n)}function M(t,n){Object(w.c)(t,function(t,n,e,r){return"object"!==(void 0===t?"undefined":s()(t))||t.options||((t=C.default.extend(t))._Ctor=t,e.components[r]=t),t})}function q(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var n=this.$options.nuxt.err?b.a.layout:t.matched[0].components.default.options.layout;"function"==typeof n&&(n=n(j.context)),this.setLayout(n)}function F(t,n){var e=this;!1===this._pathChanged&&!1===this._queryChanged||C.default.nextTick(function(){Object(w.f)(t,[]).forEach(function(t,n){if(t&&t.constructor._dataRefresh&&$[n]===t.constructor._path&&"function"==typeof t.constructor.options.data){var e=t.constructor.options.data.call(t);for(var r in e)C.default.set(t.$data,r,e[r])}}),q.call(e,t)})}function z(t){window._nuxtReadyCbs.forEach(function(n){"function"==typeof n&&n(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),B.afterEach(function(n,e){C.default.nextTick(function(){return t.$nuxt.$emit("routeChanged",n,e)})})}Object(b.b)().then(k).catch(function(t){"ERR_REDIRECT"!==t.message&&console.error("[nuxt] Error while initializing app",t)})},WRRc:function(t,n,e){"use strict";n.a={name:"nuxt-link",functional:!0,render:function(t,n){return t("router-link",n.data,n.children)}}},WlcD:function(t,n,e){"use strict";var r=e("/5sW");n.a={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,duration:5e3,height:"2px",color:"black",failedColor:"red"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,r.default.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}}},YLfZ:function(t,n,e){"use strict";n.a=function(t,n){var e=t.options.data||v;if(!n&&t.options.hasAsyncData)return;t.options.hasAsyncData=!0,t.options.data=function(){var r=e.call(this);return this.$ssrContext&&(n=this.$ssrContext.asyncData[t.cid]),A()({},r,n)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)},n.l=g,n.e=C,n.f=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,e){return d()(t.instances).map(function(r){return n&&n.push(e),t.instances[r]})}))},n.c=y,n.k=b,e.d(n,"h",function(){return E}),e.d(n,"m",function(){return k}),n.i=function t(n,e){if(!n.length||e._redirected||e._errored)return h.a.resolve();return $(n[0],e).then(function(){return t(n.slice(1),e)})},n.j=$,n.d=function(t,n){var e=window.location.pathname;if("hash"===n)return window.location.hash.replace(/^#\//,"");t&&0===e.indexOf(t)&&(e=e.slice(t.length));return(e||"/")+window.location.search+window.location.hash},n.b=function(t,n){return function(t){for(var n=new Array(t.length),e=0;e<t.length;e++)"object"===a()(t[e])&&(n[e]=new RegExp("^(?:"+t[e].pattern+")$"));return function(e,r){for(var i="",a=e||{},s=r||{},u=s.pretty?B:encodeURIComponent,c=0;c<t.length;c++){var l=t[c];if("string"!=typeof l){var p,h=a[l.name];if(null==h){if(l.optional){l.partial&&(i+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(Array.isArray(h)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+o()(h)+"`");if(0===h.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var f=0;f<h.length;f++){if(p=u(h[f]),!n[c].test(p))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+o()(p)+"`");i+=(0===f?l.prefix:l.delimiter)+p}}else{if(p=l.asterisk?encodeURI(h).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):u(h),!n[c].test(p))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+p+'"');i+=l.prefix+p}}else i+=l}return i}}(function(t,n){var e,r=[],o=0,i=0,a="",s=n&&n.delimiter||"/";for(;null!=(e=j.exec(t));){var u=e[0],c=e[1],l=e.index;if(a+=t.slice(i,l),i=l+u.length,c)a+=c[1];else{var p=t[i],h=e[2],f=e[3],d=e[4],m=e[5],A=e[6],x=e[7];a&&(r.push(a),a="");var v=null!=h&&null!=p&&p!==h,g="+"===A||"*"===A,C="?"===A||"*"===A,y=e[2]||s,b=d||m;r.push({name:f||o++,prefix:h||"",delimiter:y,optional:C,repeat:g,partial:v,asterisk:!!x,pattern:b?S(b):x?".*":"[^"+R(y)+"]+?"})}}i<t.length&&(a+=t.substr(i));a&&r.push(a);return r}(t,n))},n.g=function(t,n){var e={},r=A()({},t,n);for(var o in r)String(t[o])!==String(n[o])&&(e[o]=!0);return e};var r=e("mvHQ"),o=e.n(r),i=e("pFYg"),a=e.n(i),s=e("Xxa5"),u=e.n(s),c=e("exGp"),l=e.n(c),p=e("//Fk"),h=e.n(p),f=e("fZjL"),d=e.n(f),m=e("Dd8w"),A=e.n(m),x=e("/5sW"),v=function(){return{}};function g(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=x.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function C(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,e){return d()(t.components).map(function(r){return n&&n.push(e),t.components[r]})}))}function y(t,n){return Array.prototype.concat.apply([],t.matched.map(function(t,e){return d()(t.components).map(function(r){return n(t.components[r],t.instances[r],t,r,e)})}))}function b(t){var n,e=this;return h.a.all(y(t,(n=l()(u.a.mark(function t(n,r,o,i){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof n||n.options){t.next=4;break}return t.next=3,n();case 3:n=t.sent;case 4:return t.abrupt("return",o.components[i]=g(n));case 5:case"end":return t.stop()}},t,e)})),function(t,e,r,o){return n.apply(this,arguments)})))}window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var w,_,E=(w=l()(u.a.mark(function t(n){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(n);case 2:return t.abrupt("return",A()({},n,{meta:C(n).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)})),function(t){return w.apply(this,arguments)}),k=(_=l()(u.a.mark(function t(n,e){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.to?e.to:e.route,n.context){t.next=13;break}t.t0=!0,t.t1=n,t.t2=e.payload,t.t3=e.error,t.t4={},n.context={get isServer(){return console.warn("context.isServer has been deprecated, please use process.server instead."),!1},get isClient(){return console.warn("context.isClient has been deprecated, please use process.client instead."),!0},isStatic:t.t0,isDev:!1,isHMR:!1,app:t.t1,payload:t.t2,error:t.t3,base:"/kingdom/",env:t.t4},e.req&&(n.context.req=e.req),e.res&&(n.context.res=e.res),n.context.redirect=function(t,e,r){if(t){n.context._redirected=!0;var o=void 0===e?"undefined":a()(e);if("number"==typeof t||"undefined"!==o&&"object"!==o||(r=e||{},o=void 0===(e=t)?"undefined":a()(e),t=302),"object"===o&&(e=n.router.resolve(e).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(e))throw e=L(e,r),window.location.replace(e),new Error("ERR_REDIRECT");n.context.next({path:e,query:r,status:t})}},n.context.nuxtState=window.__NUXT__;case 13:if(n.context.next=e.next,n.context._redirected=!1,n.context._errored=!1,n.context.isHMR=!!e.isHMR,!e.route){t.next=21;break}return t.next=20,E(e.route);case 20:n.context.route=t.sent;case 21:if(n.context.params=n.context.route.params||{},n.context.query=n.context.route.query||{},!e.from){t.next=27;break}return t.next=26,E(e.from);case 26:n.context.from=t.sent;case 27:case"end":return t.stop()}},t,this)})),function(t,n){return _.apply(this,arguments)});function $(t,n){var e=void 0;return(e=2===t.length?new h.a(function(e){t(n,function(t,r){t&&n.error(t),e(r=r||{})})}):t(n))&&(e instanceof h.a||"function"==typeof e.then)||(e=h.a.resolve(e)),e}var j=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function B(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function R(t){return t.replace(/([.+*?=^!:()[\]|\/\\])/g,"\\$1")}function S(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function L(t,n){var e=void 0,r=t.indexOf("://");-1!==r?(e=t.substring(0,r),t=t.substring(r+3)):0===t.indexOf("//")&&(t=t.substring(2));var i=t.split("/"),a=(e?e+"://":"//")+i.shift(),s=i.filter(Boolean).join("/"),u=void 0;return 2===(i=s.split("#")).length&&(s=i[0],u=i[1]),a+=s?"/"+s:"",n&&"{}"!==o()(n)&&(a+=(2===t.split("?").length?"&":"?")+function(t){return d()(t).sort().map(function(n){var e=t[n];return null==e?"":Array.isArray(e)?e.slice().map(function(t){return[n,"=",t].join("")}).join("&"):n+"="+e}).filter(Boolean).join("&")}(n)),a+=u?"#"+u:""}},ct3O:function(t,n,e){"use strict";var r=e("lMIg"),o=e("QhKw"),i=!1;var a=function(t){i||e("2OyL")},s=e("VU/8")(r.a,o.a,!1,a,null,null);s.options.__file=".nuxt/components/nuxt-error.vue",n.a=s.exports},lMIg:function(t,n,e){"use strict";n.a={name:"nuxt-error",props:["error"],head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}}},mtxM:function(t,n,e){"use strict";n.a=function(){return new a.default({mode:"history",base:"/kingdom/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:b,routes:[{path:"/level-4-baseline",component:s,name:"level-4-baseline"},{path:"/level-3-rhythm",component:u,name:"level-3-rhythm"},{path:"/level-2-sizing",component:c,name:"level-2-sizing"},{path:"/forms-demo",component:l,name:"forms-demo"},{path:"/demo",component:p,name:"demo"},{path:"/level-1-reset",component:h,name:"level-1-reset"},{path:"/forms-demo/L2",component:f,name:"forms-demo-L2"},{path:"/demo/L3",component:d,name:"demo-L3"},{path:"/demo/L1",component:m,name:"demo-L1"},{path:"/forms-demo/L4",component:A,name:"forms-demo-L4"},{path:"/demo/L4",component:x,name:"demo-L4"},{path:"/demo/L2",component:v,name:"demo-L2"},{path:"/forms-demo/L1",component:g,name:"forms-demo-L1"},{path:"/forms-demo/L3",component:C,name:"forms-demo-L3"},{path:"/",component:y,name:"index"}],fallback:!1})};var r=e("//Fk"),o=e.n(r),i=e("/5sW"),a=e("/ocq");i.default.use(a.default);var s=function(){return e.e(4).then(e.bind(null,"1FeG")).then(function(t){return t.default||t})},u=function(){return e.e(15).then(e.bind(null,"gzB0")).then(function(t){return t.default||t})},c=function(){return e.e(14).then(e.bind(null,"U4M5")).then(function(t){return t.default||t})},l=function(){return e.e(0).then(e.bind(null,"q/CE")).then(function(t){return t.default||t})},p=function(){return e.e(1).then(e.bind(null,"97Hj")).then(function(t){return t.default||t})},h=function(){return e.e(5).then(e.bind(null,"P8xC")).then(function(t){return t.default||t})},f=function(){return e.e(8).then(e.bind(null,"mHuB")).then(function(t){return t.default||t})},d=function(){return e.e(11).then(e.bind(null,"iBft")).then(function(t){return t.default||t})},m=function(){return e.e(13).then(e.bind(null,"vvgu")).then(function(t){return t.default||t})},A=function(){return e.e(6).then(e.bind(null,"a/HD")).then(function(t){return t.default||t})},x=function(){return e.e(10).then(e.bind(null,"viE0")).then(function(t){return t.default||t})},v=function(){return e.e(12).then(e.bind(null,"Uevi")).then(function(t){return t.default||t})},g=function(){return e.e(9).then(e.bind(null,"qlf0")).then(function(t){return t.default||t})},C=function(){return e.e(7).then(e.bind(null,"IaL8")).then(function(t){return t.default||t})},y=function(){return e.e(2).then(e.bind(null,"/nvP")).then(function(t){return t.default||t})};window.history.scrollRestoration="manual";var b=function(t,n,e){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),e&&(r=e),new o.a(function(n){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var e=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(e="#"+window.CSS.escape(e.substr(1)));try{document.querySelector(e)&&(r={selector:e})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}n(r)})})}},qcny:function(t,n,e){"use strict";e.d(n,"b",function(){return $});var r=e("Xxa5"),o=e.n(r),i=e("//Fk"),a=(e.n(i),e("C4MV")),s=e.n(a),u=e("woOf"),c=e.n(u),l=e("Dd8w"),p=e.n(l),h=e("exGp"),f=e.n(h),d=e("MU8w"),m=(e.n(d),e("/5sW")),A=e("p3jY"),x=e.n(A),v=e("mtxM"),g=e("0F0d"),C=e("HBB+"),y=e("WRRc"),b=e("ct3O"),w=e("Hot+"),_=e("yTq1"),E=e("YLfZ");e.d(n,"a",function(){return b.a});var k,$=(k=f()(o.a.mark(function t(n){var e,r,i,a,u;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(v.a)(n),r=p()({router:e,nuxt:{defaultTransition:j,transitions:[j],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?c()({},j,{name:t}):c()({},j,t):j}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,r.context._errored=!!t,"string"==typeof t&&(t={statusCode:500,message:t});var e=this.nuxt||this.$options.nuxt;return e.dateErr=Date.now(),e.err=t,n&&(n.nuxt.error=t),t}}},_.a),i=n?n.next:function(t){return r.router.push(t)},a=void 0,n?a=e.resolve(n.url).route:(u=Object(E.d)(e.options.base),a=e.resolve(u).route),t.next=7,Object(E.m)(r,{route:a,next:i,error:r.nuxt.error.bind(r),payload:n?n.payload:void 0,req:n?n.req:void 0,res:n?n.res:void 0,beforeRenderFns:n?n.beforeRenderFns:void 0});case 7:(function(t,n){if(!t)throw new Error("inject(key, value) has no key provided");if(!n)throw new Error("inject(key, value) has no value provided");r[t="$"+t]=n;var e="__nuxt_"+t+"_installed__";m.default[e]||(m.default[e]=!0,m.default.use(function(){m.default.prototype.hasOwnProperty(t)||s()(m.default.prototype,t,{get:function(){return this.$root.$options[t]}})}))}),t.next=11;break;case 11:return t.abrupt("return",{app:r,router:e});case 12:case"end":return t.stop()}},t,this)})),function(t){return k.apply(this,arguments)});m.default.component(g.a.name,g.a),m.default.component(C.a.name,C.a),m.default.component(y.a.name,y.a),m.default.component(w.a.name,w.a),m.default.use(x.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var j={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"}},unZF:function(t,n,e){"use strict";n.a={}},yTq1:function(t,n,e){"use strict";var r=e("//Fk"),o=e.n(r),i=e("/5sW"),a=e("F88d"),s={_default:function(){return e.e(3).then(e.bind(null,"YzJl")).then(function(t){return t.default||t})},_demo:function(){return e.e(16).then(e.bind(null,"IC97")).then(function(t){return t.default||t})}},u={};n.a={head:{meta:[{charset:"utf-8"},{"http-equiv":"X-UA-Compatible",content:"IE=edge"},{name:"viewport",content:"width=device-width, initial-scale=1"}],title:"Kingdom CSS",link:[],style:[],script:[]},render:function(t,n){var e=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt");return t("div",{domProps:{id:"__nuxt"}},[e,t("transition",{props:{name:"layout",mode:"out-in"}},[t("div",{domProps:{id:"__layout"},key:this.layoutName},[r])])])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){i.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){i.default.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){t&&u["_"+t]||(t="default"),this.layoutName=t;var n="_"+t;return this.layout=u[n],this.layout},loadLayout:function(t){var n=this;t&&(s["_"+t]||u["_"+t])||(t="default");var e="_"+t;return u[e]?o.a.resolve(u[e]):s[e]().then(function(t){return u[e]=t,delete s[e],u[e]}).catch(function(t){if(n.$nuxt)return n.$nuxt.error({statusCode:500,message:t.message})})}},components:{NuxtLoading:a.a}}},zg9I:function(t,n,e){(t.exports=e("FZ+f")(!0)).push([t.i,"\n.nuxt-progress {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  height: 2px;\n  width: 0%;\n  -webkit-transition: width 0.2s, opacity 0.4s;\n  transition: width 0.2s, opacity 0.4s;\n  opacity: 1;\n  background-color: #efc14e;\n  z-index: 999999;\n}\n","",{version:3,sources:["/Users/bjorn/Code/kingdom/.nuxt/components/.nuxt/components/nuxt-loading.vue"],names:[],mappings:";AAyFA;EACA,gBAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,6CAAA;EAAA,qCAAA;EACA,WAAA;EACA,0BAAA;EACA,gBAAA;CACA",file:"nuxt-loading.vue",sourcesContent:["<template>\n  <div class=\"nuxt-progress\" :style=\"{\n    'width': percent+'%',\n    'height': height,\n    'background-color': canSuccess? color : failedColor,\n    'opacity': show ? 1 : 0\n  }\"></div>\n</template>\n\n<script>\nimport Vue from 'vue'\n\nexport default {\n  name: 'nuxt-loading',\n  data () {\n    return {\n      percent: 0,\n      show: false,\n      canSuccess: true,\n      duration: 5000,\n      height: '2px',\n      color: 'black',\n      failedColor: 'red',\n    }\n  },\n  methods: {\n    start () {\n      this.show = true\n      this.canSuccess = true\n      if (this._timer) {\n        clearInterval(this._timer)\n        this.percent = 0\n      }\n      this._cut = 10000 / Math.floor(this.duration)\n      this._timer = setInterval(() => {\n        this.increase(this._cut * Math.random())\n        if (this.percent > 95) {\n          this.finish()\n        }\n      }, 100)\n      return this\n    },\n    set (num) {\n      this.show = true\n      this.canSuccess = true\n      this.percent = Math.floor(num)\n      return this\n    },\n    get () {\n      return Math.floor(this.percent)\n    },\n    increase (num) {\n      this.percent = this.percent + Math.floor(num)\n      return this\n    },\n    decrease (num) {\n      this.percent = this.percent - Math.floor(num)\n      return this\n    },\n    finish () {\n      this.percent = 100\n      this.hide()\n      return this\n    },\n    pause () {\n      clearInterval(this._timer)\n      return this\n    },\n    hide () {\n      clearInterval(this._timer)\n      this._timer = null\n      setTimeout(() => {\n        this.show = false\n        Vue.nextTick(() => {\n          setTimeout(() => {\n            this.percent = 0\n          }, 200)\n        })\n      }, 500)\n      return this\n    },\n    fail () {\n      this.canSuccess = false\n      return this\n    }\n  }\n}\n<\/script>\n\n<style>\n.nuxt-progress {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  height: 2px;\n  width: 0%;\n  transition: width 0.2s, opacity 0.4s;\n  opacity: 1;\n  background-color: #efc14e;\n  z-index: 999999;\n}\n</style>\n"],sourceRoot:""}])}},["T23V"]);