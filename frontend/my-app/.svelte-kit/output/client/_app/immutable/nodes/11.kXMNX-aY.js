import{s as E,c as I,u as q,g as B,a as H,r as M}from"../chunks/scheduler.Dgi1yRhy.js";import{S as N,i as O,e as _,s as L,c as h,a as $,k as S,g as U,d as g,l as f,b as V,m as p,r as j,q as C,t as P,f as Y}from"../chunks/index._uay1wRk.js";import{g as w}from"../chunks/entry.BBIJJ-6L.js";import{l as D,s as z}from"../chunks/global.DC77a2-V.js";function A(r){let a,o,l,u,t,m='<i class="fa fa-search"></i>Search',d,i,c,b,T;const y=r[3].default,s=I(y,r,r[2],null);return{c(){a=_("body"),o=_("div"),l=_("input"),u=L(),t=_("button"),t.innerHTML=m,d=L(),i=_("div"),s&&s.c(),this.h()},l(e){a=h(e,"BODY",{});var n=$(a);o=h(n,"DIV",{class:!0});var v=$(o);l=h(v,"INPUT",{type:!0,placeholder:!0,class:!0}),u=S(v),t=h(v,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),U(t)!=="svelte-141loiu"&&(t.innerHTML=m),v.forEach(g),d=S(n),i=h(n,"DIV",{});var k=$(i);s&&s.l(k),k.forEach(g),n.forEach(g),this.h()},h(){f(l,"type","text"),f(l,"placeholder","Search..."),f(l,"class","svelte-155jl80"),f(t,"type","submit"),f(t,"class","svelte-155jl80"),f(o,"class","search-container svelte-155jl80")},m(e,n){V(e,a,n),p(a,o),p(o,l),j(l,r[0]),p(o,u),p(o,t),p(a,d),p(a,i),s&&s.m(i,null),c=!0,b||(T=[C(l,"input",r[4]),C(t,"click",r[1])],b=!0)},p(e,[n]){n&1&&l.value!==e[0]&&j(l,e[0]),s&&s.p&&(!c||n&4)&&q(s,y,e,e[2],c?H(y,e[2],n,null):B(e[2]),null)},i(e){c||(P(s,e),c=!0)},o(e){Y(s,e),c=!1},d(e){e&&g(a),s&&s.d(e),b=!1,M(T)}}}function F(r,a,o){let{$$slots:l={},$$scope:u}=a,t="";function m(){console.log(D),z(t),console.log(D),console.log("search button clicked"),w("/user/search/search1")}function d(){t=this.value,o(0,t)}return r.$$set=i=>{"$$scope"in i&&o(2,u=i.$$scope)},[t,m,u,l,d]}class R extends N{constructor(a){super(),O(this,a,F,A,E,{})}}export{R as component};
