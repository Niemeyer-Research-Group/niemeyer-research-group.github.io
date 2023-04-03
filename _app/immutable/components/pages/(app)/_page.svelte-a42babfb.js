import{S as Be,i as He,s as Re,k as R,q as b,a as B,w as z,e as re,l as L,m as M,r as k,h as c,c as H,x as G,b as $,G as A,y as T,f as h,d as Z,t as v,z as F,K as me,H as Le,g as y,u as ce,n as te,J as $e}from"../../../chunks/index-991fc65b.js";import{L as fe}from"../../../chunks/Link-0b2df8da.js";import{E as pe}from"../../../chunks/External-c1814a83.js";import{p as Me}from"../../../chunks/stores-16b779f4.js";import{T as De}from"../../../chunks/Thumbnail-fa7f7bfc.js";import{B as je}from"../../../chunks/Block-33108756.js";import{b as Ce}from"../../../chunks/paths-b4419565.js";function _e(r){return`${Ce}/images/headshots/mug-${r}.jpg`}function he(r,t,l){const e=r.slice();e[2]=t[l];const n=e[0].getDiscoveryRange(e[2]);e[3]=n;const f=e[0].getPublication(e[2].pubs[0]);return e[4]=f,e}function ge(r,t,l){const e=r.slice();return e[7]=t[l],e}function de(r,t,l){const e=r.slice();return e[10]=t[l],e}function be(r,t,l){const e=r.slice();return e[13]=t[l],e}function Oe(r){let t;return{c(){t=b("students")},l(l){t=k(l,"students")},m(l,e){$(l,t,e)},d(l){l&&c(t)}}}function qe(r){let t;return{c(){t=b("publishing")},l(l){t=k(l,"publishing")},m(l,e){$(l,t,e)},d(l){l&&c(t)}}}function ze(r){let t;return{c(){t=b("presenting")},l(l){t=k(l,"presenting")},m(l,e){$(l,t,e)},d(l){l&&c(t)}}}function Ge(r){let t;return{c(){t=b("teaching")},l(l){t=k(l,"teaching")},m(l,e){$(l,t,e)},d(l){l&&c(t)}}}function Te(r){let t;return{c(){t=b("lab")},l(l){t=k(l,"lab")},m(l,e){$(l,t,e)},d(l){l&&c(t)}}}function ke(r){let t,l;return t=new je({props:{$$slots:{image:[Ye],default:[Xe]},$$scope:{ctx:r}}}),{c(){z(t.$$.fragment)},l(e){G(t.$$.fragment,e)},m(e,n){T(t,e,n),l=!0},p(e,n){const f={};n&65537&&(f.$$scope={dirty:n,ctx:e}),t.$set(f)},i(e){l||(h(t.$$.fragment,e),l=!0)},o(e){v(t.$$.fragment,e),l=!1},d(e){F(t,e)}}}function ve(r){let t,l;return t=new fe({props:{to:r[13].id==="ken"?"/bio":"/lab/#"+r[13].id,$$slots:{default:[Fe]},$$scope:{ctx:r}}}),{c(){z(t.$$.fragment)},l(e){G(t.$$.fragment,e)},m(e,n){T(t,e,n),l=!0},p(e,n){const f={};n&1&&(f.to=e[13].id==="ken"?"/bio":"/lab/#"+e[13].id),n&65537&&(f.$$scope={dirty:n,ctx:e}),t.$set(f)},i(e){l||(h(t.$$.fragment,e),l=!0)},o(e){v(t.$$.fragment,e),l=!1},d(e){F(t,e)}}}function Fe(r){let t,l,e,n;return{c(){t=R("img"),n=B(),this.h()},l(f){t=L(f,"IMG",{src:!0,alt:!0,class:!0}),n=H(f),this.h()},h(){$e(t.src,l=`${_e(r[13].id)}`)||te(t,"src",l),te(t,"alt",e=`${r[13].name} headshot`),te(t,"class","mini-headshot")},m(f,a){$(f,t,a),$(f,n,a)},p(f,a){a&1&&!$e(t.src,l=`${_e(f[13].id)}`)&&te(t,"src",l),a&1&&e!==(e=`${f[13].name} headshot`)&&te(t,"alt",e)},d(f){f&&c(t),f&&c(n)}}}function we(r){let t,l,e=r[13]&&ve(r);return{c(){e&&e.c(),t=re()},l(n){e&&e.l(n),t=re()},m(n,f){e&&e.m(n,f),$(n,t,f),l=!0},p(n,f){n[13]?e?(e.p(n,f),f&1&&h(e,1)):(e=ve(n),e.c(),h(e,1),e.m(t.parentNode,t)):e&&(y(),v(e,1,1,()=>{e=null}),Z())},i(n){l||(h(e),l=!0)},o(n){v(e),l=!1},d(n){e&&e.d(n),n&&c(t)}}}function Ke(r){let t=r[10]+"",l;return{c(){l=b(t)},l(e){l=k(e,t)},m(e,n){$(e,l,n)},p(e,n){n&1&&t!==(t=e[10]+"")&&ce(l,t)},d(e){e&&c(l)}}}function Ee(r){let t,l,e;return l=new fe({props:{to:`/publications?${r[10]}`,$$slots:{default:[Ke]},$$scope:{ctx:r}}}),{c(){t=R("mark"),z(l.$$.fragment),this.h()},l(n){t=L(n,"MARK",{class:!0});var f=M(t);G(l.$$.fragment,f),f.forEach(c),this.h()},h(){te(t,"class","topic")},m(n,f){$(n,t,f),T(l,t,null),e=!0},p(n,f){const a={};f&1&&(a.to=`/publications?${n[10]}`),f&65537&&(a.$$scope={dirty:f,ctx:n}),l.$set(a)},i(n){e||(h(l.$$.fragment,n),e=!0)},o(n){v(l.$$.fragment,n),e=!1},d(n){n&&c(t),F(l)}}}function Pe(r){let t,l,e=r[2].video,n=[];for(let a=0;a<e.length;a+=1)n[a]=Ie(ge(r,e,a));const f=a=>v(n[a],1,1,()=>{n[a]=null});return{c(){for(let a=0;a<n.length;a+=1)n[a].c();t=re()},l(a){for(let u=0;u<n.length;u+=1)n[u].l(a);t=re()},m(a,u){for(let i=0;i<n.length;i+=1)n[i].m(a,u);$(a,t,u),l=!0},p(a,u){if(u&1){e=a[2].video;let i;for(i=0;i<e.length;i+=1){const g=ge(a,e,i);n[i]?(n[i].p(g,u),h(n[i],1)):(n[i]=Ie(g),n[i].c(),h(n[i],1),n[i].m(t.parentNode,t))}for(y(),i=e.length;i<n.length;i+=1)f(i);Z()}},i(a){if(!l){for(let u=0;u<e.length;u+=1)h(n[u]);l=!0}},o(a){n=n.filter(Boolean);for(let u=0;u<n.length;u+=1)v(n[u]);l=!1},d(a){me(n,a),a&&c(t)}}}function Je(r){let t;return{c(){t=b("video")},l(l){t=k(l,"video")},m(l,e){$(l,t,e)},d(l){l&&c(t)}}}function Ie(r){let t,l,e,n,f,a,u;return f=new pe({props:{to:r[7],$$slots:{default:[Je]},$$scope:{ctx:r}}}),{c(){t=b("  "),l=R("span"),e=b("🎬"),n=B(),z(f.$$.fragment),a=b(" "),this.h()},l(i){t=k(i,"  "),l=L(i,"SPAN",{class:!0});var g=M(l);e=k(g,"🎬"),g.forEach(c),n=H(i),G(f.$$.fragment,i),a=k(i," "),this.h()},h(){te(l,"class","emoji")},m(i,g){$(i,t,g),$(i,l,g),A(l,e),$(i,n,g),T(f,i,g),$(i,a,g),u=!0},p(i,g){const W={};g&1&&(W.to=i[7]),g&65536&&(W.$$scope={dirty:g,ctx:i}),f.$set(W)},i(i){u||(h(f.$$.fragment,i),u=!0)},o(i){v(f.$$.fragment,i),u=!1},d(i){i&&c(t),i&&c(l),i&&c(n),F(f,i),i&&c(a)}}}function Ae(r){let t,l,e,n,f,a;return f=new pe({props:{to:r[2].demo,$$slots:{default:[Qe]},$$scope:{ctx:r}}}),{c(){t=b(" "),l=R("span"),e=b("🖥️"),n=B(),z(f.$$.fragment),this.h()},l(u){t=k(u," "),l=L(u,"SPAN",{class:!0});var i=M(l);e=k(i,"🖥️"),i.forEach(c),n=H(u),G(f.$$.fragment,u),this.h()},h(){te(l,"class","emoji")},m(u,i){$(u,t,i),$(u,l,i),A(l,e),$(u,n,i),T(f,u,i),a=!0},p(u,i){const g={};i&1&&(g.to=u[2].demo),i&65536&&(g.$$scope={dirty:i,ctx:u}),f.$set(g)},i(u){a||(h(f.$$.fragment,u),a=!0)},o(u){v(f.$$.fragment,u),a=!1},d(u){u&&c(t),u&&c(l),u&&c(n),F(f,u)}}}function Qe(r){let t;return{c(){t=b("demo")},l(l){t=k(l,"demo")},m(l,e){$(l,t,e)},d(l){l&&c(t)}}}function Ne(r){let t,l,e="{}",n,f,a,u;return a=new pe({props:{to:r[2].code,$$slots:{default:[Ue]},$$scope:{ctx:r}}}),{c(){t=b(" "),l=R("code"),n=b(e),f=b(" "),z(a.$$.fragment)},l(i){t=k(i," "),l=L(i,"CODE",{});var g=M(l);n=k(g,e),g.forEach(c),f=k(i," "),G(a.$$.fragment,i)},m(i,g){$(i,t,g),$(i,l,g),A(l,n),$(i,f,g),T(a,i,g),u=!0},p(i,g){const W={};g&1&&(W.to=i[2].code),g&65536&&(W.$$scope={dirty:g,ctx:i}),a.$set(W)},i(i){u||(h(a.$$.fragment,i),u=!0)},o(i){v(a.$$.fragment,i),u=!1},d(i){i&&c(t),i&&c(l),i&&c(f),F(a,i)}}}function Ue(r){let t;return{c(){t=b("code")},l(l){t=k(l,"code")},m(l,e){$(l,t,e)},d(l){l&&c(t)}}}function Se(r){let t,l,e,n,f;return n=new fe({props:{to:`/publications?${r[2].tags[0].replaceAll(" ","%20")}`,$$slots:{default:[Ve]},$$scope:{ctx:r}}}),{c(){t=b(" "),l=R("span"),e=b("📄"),z(n.$$.fragment),this.h()},l(a){t=k(a," "),l=L(a,"SPAN",{class:!0});var u=M(l);e=k(u,"📄"),u.forEach(c),G(n.$$.fragment,a),this.h()},h(){te(l,"class","emoji")},m(a,u){$(a,t,u),$(a,l,u),A(l,e),T(n,a,u),f=!0},p(a,u){const i={};u&1&&(i.to=`/publications?${a[2].tags[0].replaceAll(" ","%20")}`),u&65536&&(i.$$scope={dirty:u,ctx:a}),n.$set(i)},i(a){f||(h(n.$$.fragment,a),f=!0)},o(a){v(n.$$.fragment,a),f=!1},d(a){a&&c(t),a&&c(l),F(n,a)}}}function Ve(r){let t;return{c(){t=b("papers")},l(l){t=k(l,"papers")},m(l,e){$(l,t,e)},d(l){l&&c(t)}}}function Xe(r){let t,l=r[2].contribution+"",e,n,f,a,u=r[3][0]+"",i,g=r[3][0]!==r[3][1]?` — ${r[3][1]}`:"",W,ae,C,le,X=r[2].detail+"",K,ne,J,O,Y,P,oe,x,U,ie,ee,D,V=r[0].getPeopleFromPubs(r[2].pubs),E=[];for(let s=0;s<V.length;s+=1)E[s]=we(be(r,V,s));const se=s=>v(E[s],1,1,()=>{E[s]=null});let Q=r[2].tags,w=[];for(let s=0;s<Q.length;s+=1)w[s]=Ee(de(r,Q,s));const I=s=>v(w[s],1,1,()=>{w[s]=null});let N=r[2].video&&Pe(r),o=r[2].demo&&Ae(r),m=r[2].code&&Ne(r),d=r[2].tags.length>0&&Se(r);return{c(){t=R("strong"),e=b(l),n=B(),f=R("small"),a=b("("),i=b(u),W=b(g),ae=b(")"),C=B(),le=R("br"),K=b(X),ne=B(),J=R("p");for(let s=0;s<E.length;s+=1)E[s].c();O=B(),Y=R("p"),P=R("small");for(let s=0;s<w.length;s+=1)w[s].c();oe=B(),N&&N.c(),x=B(),o&&o.c(),U=B(),m&&m.c(),ie=B(),d&&d.c(),ee=B()},l(s){t=L(s,"STRONG",{});var p=M(t);e=k(p,l),p.forEach(c),n=H(s),f=L(s,"SMALL",{});var _=M(f);a=k(_,"("),i=k(_,u),W=k(_,g),ae=k(_,")"),_.forEach(c),C=H(s),le=L(s,"BR",{}),K=k(s,X),ne=H(s),J=L(s,"P",{});var j=M(J);for(let ue=0;ue<E.length;ue+=1)E[ue].l(j);j.forEach(c),O=H(s),Y=L(s,"P",{});var S=M(Y);P=L(S,"SMALL",{});var q=M(P);for(let ue=0;ue<w.length;ue+=1)w[ue].l(q);oe=H(q),N&&N.l(q),x=H(q),o&&o.l(q),U=H(q),m&&m.l(q),ie=H(q),d&&d.l(q),q.forEach(c),S.forEach(c),ee=H(s)},m(s,p){$(s,t,p),A(t,e),$(s,n,p),$(s,f,p),A(f,a),A(f,i),A(f,W),A(f,ae),$(s,C,p),$(s,le,p),$(s,K,p),$(s,ne,p),$(s,J,p);for(let _=0;_<E.length;_+=1)E[_].m(J,null);$(s,O,p),$(s,Y,p),A(Y,P);for(let _=0;_<w.length;_+=1)w[_].m(P,null);A(P,oe),N&&N.m(P,null),A(P,x),o&&o.m(P,null),A(P,U),m&&m.m(P,null),A(P,ie),d&&d.m(P,null),$(s,ee,p),D=!0},p(s,p){if((!D||p&1)&&l!==(l=s[2].contribution+"")&&ce(e,l),(!D||p&1)&&u!==(u=s[3][0]+"")&&ce(i,u),(!D||p&1)&&g!==(g=s[3][0]!==s[3][1]?` — ${s[3][1]}`:"")&&ce(W,g),(!D||p&1)&&X!==(X=s[2].detail+"")&&ce(K,X),p&1){V=s[0].getPeopleFromPubs(s[2].pubs);let _;for(_=0;_<V.length;_+=1){const j=be(s,V,_);E[_]?(E[_].p(j,p),h(E[_],1)):(E[_]=we(j),E[_].c(),h(E[_],1),E[_].m(J,null))}for(y(),_=V.length;_<E.length;_+=1)se(_);Z()}if(p&1){Q=s[2].tags;let _;for(_=0;_<Q.length;_+=1){const j=de(s,Q,_);w[_]?(w[_].p(j,p),h(w[_],1)):(w[_]=Ee(j),w[_].c(),h(w[_],1),w[_].m(P,oe))}for(y(),_=Q.length;_<w.length;_+=1)I(_);Z()}s[2].video?N?(N.p(s,p),p&1&&h(N,1)):(N=Pe(s),N.c(),h(N,1),N.m(P,x)):N&&(y(),v(N,1,1,()=>{N=null}),Z()),s[2].demo?o?(o.p(s,p),p&1&&h(o,1)):(o=Ae(s),o.c(),h(o,1),o.m(P,U)):o&&(y(),v(o,1,1,()=>{o=null}),Z()),s[2].code?m?(m.p(s,p),p&1&&h(m,1)):(m=Ne(s),m.c(),h(m,1),m.m(P,ie)):m&&(y(),v(m,1,1,()=>{m=null}),Z()),s[2].tags.length>0?d?(d.p(s,p),p&1&&h(d,1)):(d=Se(s),d.c(),h(d,1),d.m(P,null)):d&&(y(),v(d,1,1,()=>{d=null}),Z())},i(s){if(!D){for(let p=0;p<V.length;p+=1)h(E[p]);for(let p=0;p<Q.length;p+=1)h(w[p]);h(N),h(o),h(m),h(d),D=!0}},o(s){E=E.filter(Boolean);for(let p=0;p<E.length;p+=1)v(E[p]);w=w.filter(Boolean);for(let p=0;p<w.length;p+=1)v(w[p]);v(N),v(o),v(m),v(d),D=!1},d(s){s&&c(t),s&&c(n),s&&c(f),s&&c(C),s&&c(le),s&&c(K),s&&c(ne),s&&c(J),me(E,s),s&&c(O),s&&c(Y),me(w,s),N&&N.d(),o&&o.d(),m&&m.d(),d&&d.d(),s&&c(ee)}}}function Ye(r){let t,l;return t=new De({props:{url:`/images/papers/paper-${r[4].id}.png`,alt:"A clip from the paper's text or figure",slot:"image"}}),{c(){z(t.$$.fragment)},l(e){G(t.$$.fragment,e)},m(e,n){T(t,e,n),l=!0},p(e,n){const f={};n&1&&(f.url=`/images/papers/paper-${e[4].id}.png`),t.$set(f)},i(e){l||(h(t.$$.fragment,e),l=!0)},o(e){v(t.$$.fragment,e),l=!1},d(e){F(t,e)}}}function We(r){let t,l,e=r[4]&&ke(r);return{c(){e&&e.c(),t=re()},l(n){e&&e.l(n),t=re()},m(n,f){e&&e.m(n,f),$(n,t,f),l=!0},p(n,f){n[4]?e?(e.p(n,f),f&1&&h(e,1)):(e=ke(n),e.c(),h(e,1),e.m(t.parentNode,t)):e&&(y(),v(e,1,1,()=>{e=null}),Z())},i(n){l||(h(e),l=!0)},o(n){v(e),l=!1},d(n){e&&e.d(n),n&&c(t)}}}function Ze(r){let t,l,e,n,f,a,u,i,g,W,ae,C,le,X,K,ne,J,O,Y,P,oe,x,U,ie,ee,D,V,E,se,Q;a=new fe({props:{to:"/lab",$$slots:{default:[Oe]},$$scope:{ctx:r}}}),i=new fe({props:{to:"/publications",$$slots:{default:[qe]},$$scope:{ctx:r}}}),W=new fe({props:{to:"/talks",$$slots:{default:[ze]},$$scope:{ctx:r}}}),C=new fe({props:{to:"/classes",$$slots:{default:[Ge]},$$scope:{ctx:r}}}),P=new fe({props:{to:"/lab",$$slots:{default:[Te]},$$scope:{ctx:r}}});let w=r[0].getDiscoveries(void 0,r[1]),I=[];for(let o=0;o<w.length;o+=1)I[o]=We(he(r,w,o));const N=o=>v(I[o],1,1,()=>{I[o]=null});return{c(){t=R("h1"),l=b("I am a computational engineering researcher, using numerical methods and high-performance computing to study physical problems in energy, transportation, and aerospace."),e=B(),n=R("p"),f=b("I work with a diverse and exciting group of "),z(a.$$.fragment),u=b(` on these topics; 
	`),z(i.$$.fragment),g=b(` in combustion, energy, and computational physics communities;
	and then `),z(W.$$.fragment),ae=b(" and "),z(C.$$.fragment),le=b(" our work in the world."),X=B(),K=R("p"),ne=b(`We study mainly fluid dynamics phenomena using computer simulations, particularly fluid flows 
	involving chemical reactions such as combustion. Our work extends from 
	analyzing and simplifying chemical kinetic reaction models for transportation fuels, 
	to developing surrogate models for predicting properties of fuels and chemicals,
	and even to computationally expensive, direct numerical simulations of turbulent combustion.
	We develop and apply methods to simulate combustion and other fluid-flow problems, 
	including in wildfires and the ocean.
	We also write a lot of code!`),J=B(),O=R("p"),Y=b(`Want to do research with me?
	Read about my `),z(P.$$.fragment),oe=b("."),x=B(),U=R("h2"),ie=b("Contributions"),ee=B(),D=R("p"),V=b(`My lab and I have made many contributions since since I started doing research in 2008.
	Here are some of the highlights from our work.
	How I describe these is always evolving as we learn more.`),E=B();for(let o=0;o<I.length;o+=1)I[o].c();se=re()},l(o){t=L(o,"H1",{});var m=M(t);l=k(m,"I am a computational engineering researcher, using numerical methods and high-performance computing to study physical problems in energy, transportation, and aerospace."),m.forEach(c),e=H(o),n=L(o,"P",{});var d=M(n);f=k(d,"I work with a diverse and exciting group of "),G(a.$$.fragment,d),u=k(d,` on these topics; 
	`),G(i.$$.fragment,d),g=k(d,` in combustion, energy, and computational physics communities;
	and then `),G(W.$$.fragment,d),ae=k(d," and "),G(C.$$.fragment,d),le=k(d," our work in the world."),d.forEach(c),X=H(o),K=L(o,"P",{});var s=M(K);ne=k(s,`We study mainly fluid dynamics phenomena using computer simulations, particularly fluid flows 
	involving chemical reactions such as combustion. Our work extends from 
	analyzing and simplifying chemical kinetic reaction models for transportation fuels, 
	to developing surrogate models for predicting properties of fuels and chemicals,
	and even to computationally expensive, direct numerical simulations of turbulent combustion.
	We develop and apply methods to simulate combustion and other fluid-flow problems, 
	including in wildfires and the ocean.
	We also write a lot of code!`),s.forEach(c),J=H(o),O=L(o,"P",{});var p=M(O);Y=k(p,`Want to do research with me?
	Read about my `),G(P.$$.fragment,p),oe=k(p,"."),p.forEach(c),x=H(o),U=L(o,"H2",{});var _=M(U);ie=k(_,"Contributions"),_.forEach(c),ee=H(o),D=L(o,"P",{});var j=M(D);V=k(j,`My lab and I have made many contributions since since I started doing research in 2008.
	Here are some of the highlights from our work.
	How I describe these is always evolving as we learn more.`),j.forEach(c),E=H(o);for(let S=0;S<I.length;S+=1)I[S].l(o);se=re()},m(o,m){$(o,t,m),A(t,l),$(o,e,m),$(o,n,m),A(n,f),T(a,n,null),A(n,u),T(i,n,null),A(n,g),T(W,n,null),A(n,ae),T(C,n,null),A(n,le),$(o,X,m),$(o,K,m),A(K,ne),$(o,J,m),$(o,O,m),A(O,Y),T(P,O,null),A(O,oe),$(o,x,m),$(o,U,m),A(U,ie),$(o,ee,m),$(o,D,m),A(D,V),$(o,E,m);for(let d=0;d<I.length;d+=1)I[d].m(o,m);$(o,se,m),Q=!0},p(o,[m]){const d={};m&65536&&(d.$$scope={dirty:m,ctx:o}),a.$set(d);const s={};m&65536&&(s.$$scope={dirty:m,ctx:o}),i.$set(s);const p={};m&65536&&(p.$$scope={dirty:m,ctx:o}),W.$set(p);const _={};m&65536&&(_.$$scope={dirty:m,ctx:o}),C.$set(_);const j={};if(m&65536&&(j.$$scope={dirty:m,ctx:o}),P.$set(j),m&1){w=o[0].getDiscoveries(void 0,o[1]);let S;for(S=0;S<w.length;S+=1){const q=he(o,w,S);I[S]?(I[S].p(q,m),h(I[S],1)):(I[S]=We(q),I[S].c(),h(I[S],1),I[S].m(se.parentNode,se))}for(y(),S=w.length;S<I.length;S+=1)N(S);Z()}},i(o){if(!Q){h(a.$$.fragment,o),h(i.$$.fragment,o),h(W.$$.fragment,o),h(C.$$.fragment,o),h(P.$$.fragment,o);for(let m=0;m<w.length;m+=1)h(I[m]);Q=!0}},o(o){v(a.$$.fragment,o),v(i.$$.fragment,o),v(W.$$.fragment,o),v(C.$$.fragment,o),v(P.$$.fragment,o),I=I.filter(Boolean);for(let m=0;m<I.length;m+=1)v(I[m]);Q=!1},d(o){o&&c(t),o&&c(e),o&&c(n),F(a),F(i),F(W),F(C),o&&c(X),o&&c(K),o&&c(J),o&&c(O),F(P),o&&c(x),o&&c(U),o&&c(ee),o&&c(D),o&&c(E),me(I,o),o&&c(se)}}}function ye(r,t,l){let e;return Le(r,Me,f=>l(0,e=f)),[e,f=>-e.getDiscoveryRange(f)[1]]}class st extends Be{constructor(t){super(),He(this,t,ye,Ze,Re,{})}}export{st as default};