import{s as W,p as S,u as V,q,v as z}from"./scheduler.f55867eb.js";import{S as F,i as H,g as k,s as J,e as B,h as b,j as v,f as m,c as K,k as h,a as w,y as g,p as L,t as y,b as M,d as E,m as O,n as R,o as T}from"./index.029394d5.js";import{b as P}from"./paths.edca01b6.js";const Q=i=>({}),j=i=>({}),U=i=>({}),C=i=>({});function X(i){let t;const r=i[4].image,l=S(r,i,i[3],j);return{c(){l&&l.c()},l(e){l&&l.l(e)},m(e,s){l&&l.m(e,s),t=!0},p(e,s){l&&l.p&&(!t||s&8)&&V(l,r,e,e[3],t?z(r,e[3],s,Q):q(e[3]),j)},i(e){t||(E(l,e),t=!0)},o(e){y(l,e),t=!1},d(e){l&&l.d(e)}}}function Y(i){let t,r;const l=i[4].image,e=S(l,i,i[3],C);return{c(){t=k("a"),e&&e.c(),this.h()},l(s){t=b(s,"A",{href:!0,target:!0,rel:!0});var a=v(t);e&&e.l(a),a.forEach(m),this.h()},h(){h(t,"href",i[1]),h(t,"target","_blank"),h(t,"rel","noreferrer")},m(s,a){w(s,t,a),e&&e.m(t,null),r=!0},p(s,a){e&&e.p&&(!r||a&8)&&V(e,l,s,s[3],r?z(l,s[3],a,U):q(s[3]),C),(!r||a&2)&&h(t,"href",s[1])},i(s){r||(E(e,s),r=!0)},o(s){y(e,s),r=!1},d(s){s&&m(t),e&&e.d(s)}}}function G(i){let t;function r(s,a){return s[1]?$:Z}let l=r(i),e=l(i);return{c(){e.c(),t=B()},l(s){e.l(s),t=B()},m(s,a){e.m(s,a),w(s,t,a)},p(s,a){l===(l=r(s))&&e?e.p(s,a):(e.d(1),e=l(s),e&&(e.c(),e.m(t.parentNode,t)))},d(s){s&&m(t),e.d(s)}}}function Z(i){let t,r;return{c(){t=k("strong"),r=O(i[0])},l(l){t=b(l,"STRONG",{});var e=v(t);r=R(e,i[0]),e.forEach(m)},m(l,e){w(l,t,e),g(t,r)},p(l,e){e&1&&T(r,l[0])},d(l){l&&m(t)}}}function $(i){let t,r;return{c(){t=k("a"),r=O(i[0]),this.h()},l(l){t=b(l,"A",{href:!0,target:!0,rel:!0});var e=v(t);r=R(e,i[0]),e.forEach(m),this.h()},h(){h(t,"href",i[1]),h(t,"target","_blank"),h(t,"rel","noreferrer")},m(l,e){w(l,t,e),g(t,r)},p(l,e){e&1&&T(r,l[0]),e&2&&h(t,"href",l[1])},d(l){l&&m(t)}}}function x(i){let t,r,l,e,s,a,u,f;const A=[Y,X],d=[];function N(n,c){return n[1]?0:1}l=N(i),e=d[l]=A[l](i);let o=i[0]&&G(i);const D=i[4].default,_=S(D,i,i[3],null);return{c(){t=k("div"),r=k("div"),e.c(),s=J(),a=k("div"),o&&o.c(),u=B(),_&&_.c(),this.h()},l(n){t=b(n,"DIV",{class:!0});var c=v(t);r=b(c,"DIV",{class:!0});var p=v(r);e.l(p),p.forEach(m),s=K(c),a=b(c,"DIV",{class:!0});var I=v(a);o&&o.l(I),u=B(),_&&_.l(I),I.forEach(m),c.forEach(m),this.h()},h(){h(r,"class","left svelte-zfewwh"),h(a,"class","right"),h(t,"class","block svelte-zfewwh")},m(n,c){w(n,t,c),g(t,r),d[l].m(r,null),g(t,s),g(t,a),o&&o.m(a,null),g(a,u),_&&_.m(a,null),f=!0},p(n,[c]){let p=l;l=N(n),l===p?d[l].p(n,c):(L(),y(d[p],1,1,()=>{d[p]=null}),M(),e=d[l],e?e.p(n,c):(e=d[l]=A[l](n),e.c()),E(e,1),e.m(r,null)),n[0]?o?o.p(n,c):(o=G(n),o.c(),o.m(a,u)):o&&(o.d(1),o=null),_&&_.p&&(!f||c&8)&&V(_,D,n,n[3],f?z(D,n[3],c,null):q(n[3]),null)},i(n){f||(E(e),E(_,n),f=!0)},o(n){y(e),y(_,n),f=!1},d(n){n&&m(t),d[l].d(),o&&o.d(),_&&_.d(n)}}}function ee(i,t,r){let l,{$$slots:e={},$$scope:s}=t,{header:a=null}=t,{link:u=null}=t;return i.$$set=f=>{"header"in f&&r(0,a=f.header),"link"in f&&r(2,u=f.link),"$$scope"in f&&r(3,s=f.$$scope)},i.$$.update=()=>{i.$$.dirty&4&&r(1,l=u!=null&&u.startsWith("/")?`${P}${u}`:u)},[a,l,u,s,e]}class re extends F{constructor(t){super(),H(this,t,ee,x,W,{header:0,link:2})}}export{re as B};
