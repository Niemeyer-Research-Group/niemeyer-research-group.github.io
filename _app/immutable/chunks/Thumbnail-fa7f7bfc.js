import{S as g,i as _,s as f,k as o,l as b,n,I as r,J as u,b as v,B as c,h as T}from"./index-991fc65b.js";import{b as m}from"./paths-b4419565.js";function q(i){let t,e,a;return{c(){t=o("img"),this.h()},l(l){t=b(l,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){n(t,"class",e=r(`thumbnail ${i[2]?"highlight":""}`)+" svelte-vcs4s7"),u(t.src,a=`${m}${i[0]}`)||n(t,"src",a),n(t,"alt",i[1])},m(l,s){v(l,t,s)},p(l,[s]){s&4&&e!==(e=r(`thumbnail ${l[2]?"highlight":""}`)+" svelte-vcs4s7")&&n(t,"class",e),s&1&&!u(t.src,a=`${m}${l[0]}`)&&n(t,"src",a),s&2&&n(t,"alt",l[1])},i:c,o:c,d(l){l&&T(t)}}}function y(i,t,e){let{url:a}=t,{alt:l}=t,{highlight:s=!1}=t;return i.$$set=h=>{"url"in h&&e(0,a=h.url),"alt"in h&&e(1,l=h.alt),"highlight"in h&&e(2,s=h.highlight)},[a,l,s]}class k extends g{constructor(t){super(),_(this,t,y,q,f,{url:0,alt:1,highlight:2})}}export{k as T};
