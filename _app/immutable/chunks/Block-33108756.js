import{S as W,i as j,s as H,C as S,k as p,a as J,e as D,l as b,m as v,h,c as K,n as m,b as w,G as k,g as L,t as y,d as M,f as E,D as V,E as q,F as z,q as O,r as R,u as T}from"./index-991fc65b.js";import{b as P}from"./paths-b4419565.js";const Q=i=>({}),G=i=>({}),U=i=>({}),N=i=>({});function X(i){let t;const r=i[4].image,l=S(r,i,i[3],G);return{c(){l&&l.c()},l(e){l&&l.l(e)},m(e,s){l&&l.m(e,s),t=!0},p(e,s){l&&l.p&&(!t||s&8)&&V(l,r,e,e[3],t?z(r,e[3],s,Q):q(e[3]),G)},i(e){t||(E(l,e),t=!0)},o(e){y(l,e),t=!1},d(e){l&&l.d(e)}}}function Y(i){let t,r;const l=i[4].image,e=S(l,i,i[3],N);return{c(){t=p("a"),e&&e.c(),this.h()},l(s){t=b(s,"A",{href:!0,target:!0,rel:!0});var a=v(t);e&&e.l(a),a.forEach(h),this.h()},h(){m(t,"href",i[1]),m(t,"target","_blank"),m(t,"rel","noreferrer")},m(s,a){w(s,t,a),e&&e.m(t,null),r=!0},p(s,a){e&&e.p&&(!r||a&8)&&V(e,l,s,s[3],r?z(l,s[3],a,U):q(s[3]),N),(!r||a&2)&&m(t,"href",s[1])},i(s){r||(E(e,s),r=!0)},o(s){y(e,s),r=!1},d(s){s&&h(t),e&&e.d(s)}}}function F(i){let t;function r(s,a){return s[1]?$:Z}let l=r(i),e=l(i);return{c(){e.c(),t=D()},l(s){e.l(s),t=D()},m(s,a){e.m(s,a),w(s,t,a)},p(s,a){l===(l=r(s))&&e?e.p(s,a):(e.d(1),e=l(s),e&&(e.c(),e.m(t.parentNode,t)))},d(s){e.d(s),s&&h(t)}}}function Z(i){let t,r;return{c(){t=p("strong"),r=O(i[0])},l(l){t=b(l,"STRONG",{});var e=v(t);r=R(e,i[0]),e.forEach(h)},m(l,e){w(l,t,e),k(t,r)},p(l,e){e&1&&T(r,l[0])},d(l){l&&h(t)}}}function $(i){let t,r;return{c(){t=p("a"),r=O(i[0]),this.h()},l(l){t=b(l,"A",{href:!0,target:!0,rel:!0});var e=v(t);r=R(e,i[0]),e.forEach(h),this.h()},h(){m(t,"href",i[1]),m(t,"target","_blank"),m(t,"rel","noreferrer")},m(l,e){w(l,t,e),k(t,r)},p(l,e){e&1&&T(r,l[0]),e&2&&m(t,"href",l[1])},d(l){l&&h(t)}}}function x(i){let t,r,l,e,s,a,u,f;const A=[Y,X],d=[];function C(n,c){return n[1]?0:1}l=C(i),e=d[l]=A[l](i);let o=i[0]&&F(i);const B=i[4].default,_=S(B,i,i[3],null);return{c(){t=p("div"),r=p("div"),e.c(),s=J(),a=p("div"),o&&o.c(),u=D(),_&&_.c(),this.h()},l(n){t=b(n,"DIV",{class:!0});var c=v(t);r=b(c,"DIV",{class:!0});var g=v(r);e.l(g),g.forEach(h),s=K(c),a=b(c,"DIV",{class:!0});var I=v(a);o&&o.l(I),u=D(),_&&_.l(I),I.forEach(h),c.forEach(h),this.h()},h(){m(r,"class","left svelte-zfewwh"),m(a,"class","right"),m(t,"class","block svelte-zfewwh")},m(n,c){w(n,t,c),k(t,r),d[l].m(r,null),k(t,s),k(t,a),o&&o.m(a,null),k(a,u),_&&_.m(a,null),f=!0},p(n,[c]){let g=l;l=C(n),l===g?d[l].p(n,c):(L(),y(d[g],1,1,()=>{d[g]=null}),M(),e=d[l],e?e.p(n,c):(e=d[l]=A[l](n),e.c()),E(e,1),e.m(r,null)),n[0]?o?o.p(n,c):(o=F(n),o.c(),o.m(a,u)):o&&(o.d(1),o=null),_&&_.p&&(!f||c&8)&&V(_,B,n,n[3],f?z(B,n[3],c,null):q(n[3]),null)},i(n){f||(E(e),E(_,n),f=!0)},o(n){y(e),y(_,n),f=!1},d(n){n&&h(t),d[l].d(),o&&o.d(),_&&_.d(n)}}}function ee(i,t,r){let l,{$$slots:e={},$$scope:s}=t,{header:a=null}=t,{link:u=null}=t;return i.$$set=f=>{"header"in f&&r(0,a=f.header),"link"in f&&r(2,u=f.link),"$$scope"in f&&r(3,s=f.$$scope)},i.$$.update=()=>{i.$$.dirty&4&&r(1,l=u!=null&&u.startsWith("/")?`${P}${u}`:u)},[a,l,u,s,e]}class se extends W{constructor(t){super(),j(this,t,ee,x,H,{header:0,link:2})}}export{se as B};