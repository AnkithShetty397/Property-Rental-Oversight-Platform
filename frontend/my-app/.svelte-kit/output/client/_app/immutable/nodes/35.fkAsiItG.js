import{l as K,c as Q}from"../chunks/global.DC77a2-V.js";import{s as W,n as q}from"../chunks/scheduler.Dgi1yRhy.js";import{S as X,i as Y,e as u,c as h,a as g,d as f,l as v,b as P,m as r,F as A,E as Z,g as I,s as y,n as H,k as C,o as D,q as ee,p as F}from"../chunks/index.i9izywSM.js";import{e as R}from"../chunks/each.CvcTpb99.js";import{g as te}from"../chunks/entry.DTdBLLXD.js";const se=async({fetch:n})=>{try{const e=await n(`http://localhost:3000/api/search/searchHouse?city=${K}`);return e.ok?{houses:await e.json()}:(console.log("Response not okay"),{houses:[]})}catch{return console.error("Error fetching data:"),{house:[]}}},fe=Object.freeze(Object.defineProperty({__proto__:null,load:se},Symbol.toStringTag,{value:"Module"}));function U(n,e,o){const s=n.slice();return s[3]=e[o],s}function le(n){let e,o=R(n[0].houses),s=[];for(let a=0;a<o.length;a+=1)s[a]=G(U(n,o,a));return{c(){for(let a=0;a<s.length;a+=1)s[a].c();e=A()},l(a){for(let l=0;l<s.length;l+=1)s[l].l(a);e=A()},m(a,l){for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(a,l);P(a,e,l)},p(a,l){if(l&3){o=R(a[0].houses);let t;for(t=0;t<o.length;t+=1){const c=U(a,o,t);s[t]?s[t].p(c,l):(s[t]=G(c),s[t].c(),s[t].m(e.parentNode,e))}for(;t<s.length;t+=1)s[t].d(1);s.length=o.length}},d(a){a&&f(e),Z(s,a)}}}function ae(n){let e,o="No houses found";return{c(){e=u("div"),e.textContent=o},l(s){e=h(s,"DIV",{"data-svelte-h":!0}),I(e)!=="svelte-slmht6"&&(e.textContent=o)},m(s,a){P(s,e,a)},p:q,d(s){s&&f(e)}}}function G(n){let e,o,s='<img src="http://localhost:3000/api/profile/getProfilePicture?user_id=0000000001" alt="" class="house-image svelte-1wfv7kr"/> <span class="label svelte-1wfv7kr"></span>',a,l,t,c,d=n[3].house_no+"",x,T,p,V,w=n[3].block_no+"",E,B,m,z="Description goes here...",M,_,L="Open",N,O,$;function J(){return n[2](n[3])}return{c(){e=u("div"),o=u("div"),o.innerHTML=s,a=y(),l=u("div"),t=u("h3"),c=H("House number: "),x=H(d),T=y(),p=u("p"),V=H("Block number: "),E=H(w),B=y(),m=u("p"),m.textContent=z,M=y(),_=u("button"),_.textContent=L,N=y(),this.h()},l(k){e=h(k,"DIV",{class:!0});var i=g(e);o=h(i,"DIV",{class:!0,"data-svelte-h":!0}),I(o)!=="svelte-1ahombt"&&(o.innerHTML=s),a=C(i),l=h(i,"DIV",{class:!0});var b=g(l);t=h(b,"H3",{class:!0});var S=g(t);c=D(S,"House number: "),x=D(S,d),S.forEach(f),T=C(b),p=h(b,"P",{class:!0});var j=g(p);V=D(j,"Block number: "),E=D(j,w),j.forEach(f),B=C(b),m=h(b,"P",{class:!0,"data-svelte-h":!0}),I(m)!=="svelte-1ilib0w"&&(m.textContent=z),b.forEach(f),M=C(i),_=h(i,"BUTTON",{class:!0,"data-svelte-h":!0}),I(_)!=="svelte-156eqz"&&(_.textContent=L),N=C(i),i.forEach(f),this.h()},h(){v(o,"class","image-label svelte-1wfv7kr"),v(t,"class","svelte-1wfv7kr"),v(p,"class","svelte-1wfv7kr"),v(m,"class","svelte-1wfv7kr"),v(l,"class","text-content svelte-1wfv7kr"),v(_,"class","open-button svelte-1wfv7kr"),v(e,"class","result svelte-1wfv7kr")},m(k,i){P(k,e,i),r(e,o),r(e,a),r(e,l),r(l,t),r(t,c),r(t,x),r(l,T),r(l,p),r(p,V),r(p,E),r(l,B),r(l,m),r(e,M),r(e,_),r(e,N),O||($=ee(_,"click",J),O=!0)},p(k,i){n=k,i&1&&d!==(d=n[3].house_no+"")&&F(x,d),i&1&&w!==(w=n[3].block_no+"")&&F(E,w)},d(k){k&&f(e),O=!1,$()}}}function oe(n){let e,o;function s(t,c){return t[0].houses.length===0?ae:le}let a=s(n),l=a(n);return{c(){e=u("main"),o=u("div"),l.c(),this.h()},l(t){e=h(t,"MAIN",{});var c=g(e);o=h(c,"DIV",{class:!0});var d=g(o);l.l(d),d.forEach(f),c.forEach(f),this.h()},h(){v(o,"class","scrollable-container svelte-1wfv7kr")},m(t,c){P(t,e,c),r(e,o),l.m(o,null)},p(t,[c]){a===(a=s(t))&&l?l.p(t,c):(l.d(1),l=a(t),l&&(l.c(),l.m(o,null)))},i:q,o:q,d(t){t&&f(e),l.d()}}}function ne(n,e,o){let{data:s}=e;function a(t){Q(t),te("/user/search/house")}const l=t=>a(t.house_no);return n.$$set=t=>{"data"in t&&o(0,s=t.data)},[s,a,l]}class de extends X{constructor(e){super(),Y(this,e,ne,oe,W,{data:0})}}export{de as component,fe as universal};