(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a22ae918"],{"4ec9":function(t,e,n){n("6f48")},6566:function(t,e,n){"use strict";var r=n("9bf2").f,a=n("7c73"),i=n("6964"),o=n("0366"),u=n("19aa"),c=n("2266"),s=n("7dd0"),l=n("2626"),f=n("83ab"),d=n("f183").fastKey,v=n("69f3"),p=v.set,g=v.getterFor;t.exports={getConstructor:function(t,e,n,s){var l=t((function(t,r){u(t,v),p(t,{type:e,index:a(null),first:void 0,last:void 0,size:0}),f||(t.size=0),void 0!=r&&c(r,t[s],{that:t,AS_ENTRIES:n})})),v=l.prototype,b=g(e),h=function(t,e,n){var r,a,i=b(t),o=y(t,e);return o?o.value=n:(i.last=o={index:a=d(e,!0),key:e,value:n,previous:r=i.last,next:void 0,removed:!1},i.first||(i.first=o),r&&(r.next=o),f?i.size++:t.size++,"F"!==a&&(i.index[a]=o)),t},y=function(t,e){var n,r=b(t),a=d(e);if("F"!==a)return r.index[a];for(n=r.first;n;n=n.next)if(n.key==e)return n};return i(v,{clear:function(){var t=this,e=b(t),n=e.index,r=e.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete n[r.index],r=r.next;e.first=e.last=void 0,f?e.size=0:t.size=0},delete:function(t){var e=this,n=b(e),r=y(e,t);if(r){var a=r.next,i=r.previous;delete n.index[r.index],r.removed=!0,i&&(i.next=a),a&&(a.previous=i),n.first==r&&(n.first=a),n.last==r&&(n.last=i),f?n.size--:e.size--}return!!r},forEach:function(t){var e,n=b(this),r=o(t,arguments.length>1?arguments[1]:void 0);while(e=e?e.next:n.first){r(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!y(this,t)}}),i(v,n?{get:function(t){var e=y(this,t);return e&&e.value},set:function(t,e){return h(this,0===t?0:t,e)}}:{add:function(t){return h(this,t=0===t?0:t,t)}}),f&&r(v,"size",{get:function(){return b(this).size}}),l},setStrong:function(t,e,n){var r=e+" Iterator",a=g(e),i=g(r);s(t,e,(function(t,e){p(this,{type:r,target:t,state:a(t),kind:e,last:void 0})}),(function(){var t=i(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),l(e)}}},6964:function(t,e,n){var r=n("cb2d");t.exports=function(t,e,n){for(var a in e)r(t,a,e[a],n);return t}},"6d61":function(t,e,n){"use strict";var r=n("23e7"),a=n("da84"),i=n("e330"),o=n("94ca"),u=n("cb2d"),c=n("f183"),s=n("2266"),l=n("19aa"),f=n("1626"),d=n("861d"),v=n("d039"),p=n("1c7e"),g=n("d44e"),b=n("7156");t.exports=function(t,e,n){var h=-1!==t.indexOf("Map"),y=-1!==t.indexOf("Weak"),x=h?"set":"add",j=a[t],w=j&&j.prototype,O=j,S={},m=function(t){var e=i(w[t]);u(w,t,"add"==t?function(t){return e(this,0===t?0:t),this}:"delete"==t?function(t){return!(y&&!d(t))&&e(this,0===t?0:t)}:"get"==t?function(t){return y&&!d(t)?void 0:e(this,0===t?0:t)}:"has"==t?function(t){return!(y&&!d(t))&&e(this,0===t?0:t)}:function(t,n){return e(this,0===t?0:t,n),this})},k=o(t,!f(j)||!(y||w.forEach&&!v((function(){(new j).entries().next()}))));if(k)O=n.getConstructor(e,t,h,x),c.enable();else if(o(t,!0)){var C=new O,z=C[x](y?{}:-0,1)!=C,E=v((function(){C.has(1)})),_=p((function(t){new j(t)})),N=!y&&v((function(){var t=new j,e=5;while(e--)t[x](e,e);return!t.has(-0)}));_||(O=e((function(t,e){l(t,w);var n=b(new j,t,O);return void 0!=e&&s(e,n[x],{that:n,AS_ENTRIES:h}),n})),O.prototype=w,w.constructor=O),(E||N)&&(m("delete"),m("has"),h&&m("get")),(N||z)&&m(x),y&&w.clear&&delete w.clear}return S[t]=O,r({global:!0,forced:O!=j},S),g(O,t),y||n.setStrong(O,t,h),O}},"6f48":function(t,e,n){"use strict";var r=n("6d61"),a=n("6566");r("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),a)},"8cdb":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:"","grid-list-lg":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{md:"6"}},[n("v-card",{attrs:{color:"orange"}},[n("v-card-title",{attrs:{justify:"center"}},[t._v(" 404: Page could not be found ")])],1)],1)],1)],1),n("v-flex",{attrs:{xs6:""}},[n("v-card",{on:{click:function(e){return t.navigate("/")}}},[n("v-card-title",[n("p",[t._v("Go to Home")])])],1)],1),n("v-flex",{attrs:{xs6:""}},[n("v-card",{on:{click:function(e){return t.navigate("about")}}},[n("v-card-title",[n("p",[t._v("About this app")])])],1)],1),n("v-flex",{attrs:{xs6:""}},[n("v-card",{attrs:{ripple:""},on:{click:function(e){return t.navigate("gents")}}},[n("v-card-title",{attrs:{center:""}},[n("p",[t._v("Soundboard Torius Gents")])])],1)],1),n("v-flex",{attrs:{xs6:""}},[n("v-card",{attrs:{ripple:""},on:{click:function(e){return t.navigate("ladies")}}},[n("v-card-title",[n("p",[t._v("Soundboard Torius Ladies")])])],1)],1)],1)],1)},a=[],i={components:{},methods:{navigate:function(t){this.$router.push(t)}}},o=i,u=(n("b396"),n("2877")),c=n("6544"),s=n.n(c),l=n("b0af"),f=n("99d9"),d=n("ade3"),v=n("5530"),p=(n("d3b7"),n("a9e3"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("3ca3"),n("ddb0"),n("caad"),n("159b"),n("2ca0"),n("4b85"),n("2b0e")),g=n("d9f7"),b=n("80d2"),h=["sm","md","lg","xl"],y=function(){return h.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),x=function(){return h.reduce((function(t,e){return t["offset"+Object(b["u"])(e)]={type:[String,Number],default:null},t}),{})}(),j=function(){return h.reduce((function(t,e){return t["order"+Object(b["u"])(e)]={type:[String,Number],default:null},t}),{})}(),w={col:Object.keys(y),offset:Object.keys(x),order:Object.keys(j)};function O(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var a=e.replace(t,"");r+="-".concat(a)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n),r.toLowerCase()):r.toLowerCase()}}var S=new Map,m=p["a"].extend({name:"v-col",functional:!0,props:Object(v["a"])(Object(v["a"])(Object(v["a"])(Object(v["a"])({cols:{type:[Boolean,String,Number],default:!1}},y),{},{offset:{type:[String,Number],default:null}},x),{},{order:{type:[String,Number],default:null}},j),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,r=e.data,a=e.children,i=(e.parent,"");for(var o in n)i+=String(n[o]);var u=S.get(i);return u||function(){var t,e;for(e in u=[],w)w[e].forEach((function(t){var r=n[t],a=O(e,t,r);a&&u.push(a)}));var r=u.some((function(t){return t.startsWith("col-")}));u.push((t={col:!r||!n.cols},Object(d["a"])(t,"col-".concat(n.cols),n.cols),Object(d["a"])(t,"offset-".concat(n.offset),n.offset),Object(d["a"])(t,"order-".concat(n.order),n.order),Object(d["a"])(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),S.set(i,u)}(),t(n.tag,Object(g["a"])(r,{class:u}),a)}}),k=n("a523"),C=n("0e8f"),z=n("a722"),E=(n("2532"),n("99af"),["sm","md","lg","xl"]),_=["start","end","center"];function N(t,e){return E.reduce((function(n,r){return n[t+Object(b["u"])(r)]=e(),n}),{})}var V=function(t){return[].concat(_,["baseline","stretch"]).includes(t)},L=N("align",(function(){return{type:String,default:null,validator:V}})),T=function(t){return[].concat(_,["space-between","space-around"]).includes(t)},B=N("justify",(function(){return{type:String,default:null,validator:T}})),F=function(t){return[].concat(_,["space-between","space-around","stretch"]).includes(t)},G=N("alignContent",(function(){return{type:String,default:null,validator:F}})),M={align:Object.keys(L),justify:Object.keys(B),alignContent:Object.keys(G)},A={align:"align",justify:"justify",alignContent:"align-content"};function I(t,e,n){var r=A[t];if(null!=n){if(e){var a=e.replace(t,"");r+="-".concat(a)}return r+="-".concat(n),r.toLowerCase()}}var R=new Map,J=p["a"].extend({name:"v-row",functional:!0,props:Object(v["a"])(Object(v["a"])(Object(v["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:V}},L),{},{justify:{type:String,default:null,validator:T}},B),{},{alignContent:{type:String,default:null,validator:F}},G),render:function(t,e){var n=e.props,r=e.data,a=e.children,i="";for(var o in n)i+=String(n[o]);var u=R.get(i);return u||function(){var t,e;for(e in u=[],M)M[e].forEach((function(t){var r=n[t],a=I(e,t,r);a&&u.push(a)}));u.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(d["a"])(t,"align-".concat(n.align),n.align),Object(d["a"])(t,"justify-".concat(n.justify),n.justify),Object(d["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),R.set(i,u)}(),t(n.tag,Object(g["a"])(r,{staticClass:"row",class:u}),a)}}),W=Object(u["a"])(o,r,a,!1,null,"5f49b193",null);e["default"]=W.exports;s()(W,{VCard:l["a"],VCardTitle:f["b"],VCol:m,VContainer:k["a"],VFlex:C["a"],VLayout:z["a"],VRow:J})},b396:function(t,e,n){"use strict";n("fea9")},fea9:function(t,e,n){}}]);
//# sourceMappingURL=chunk-a22ae918.2b393eff.js.map