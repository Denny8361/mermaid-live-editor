var t=Object.defineProperty,a=Object.defineProperties,e=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(a,e,o)=>e in a?t(a,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[e]=o,n=(t,a)=>{for(var e in a||(a={}))s.call(a,e)&&i(t,e,a[e]);if(o)for(var e of o(a))r.call(a,e)&&i(t,e,a[e]);return t},c=(t,o)=>a(t,e(o));import{C as l,S as d,i as u,s as p,e as f,c as m,a as h,d as g,b as y,Z as w,f as b,E as v,P as j,I as O,A as S,ab as x,ac as D,R as E,J as $,K as P,L as I,ad as L,N as H}from"./vendor-f68abb6e.js";import{c as R,e as T,f as J,i as N,h as U,j as V,a as _,k}from"./state-37c87c35.js";const M=l(void 0);function z(t){let a,e;return{c(){a=f("div"),e=f("div"),this.h()},l(t){a=m(t,"DIV",{id:!0,class:!0});var o=h(a);e=m(o,"DIV",{id:!0,class:!0}),h(e).forEach(g),o.forEach(g),this.h()},h(){y(e,"id","container"),y(e,"class","flex-1 overflow-auto"),y(a,"id","view"),y(a,"class","p-2 svelte-5ndy2s"),w(a,"error",t[2]),w(a,"outOfSync",t[3])},m(o,s){b(o,a,s),v(a,e),t[4](e),t[5](a)},p(t,[e]){4&e&&w(a,"error",t[2]),8&e&&w(a,"outOfSync",t[3])},i:j,o:j,d(e){e&&g(a),t[4](null),t[5](null)}}}function A(t,a,e){let o;O(t,R,(t=>e(9,o=t)));let s,r,i="",n="",c=!1,l=!1,d=!0;return S((()=>{R.subscribe((t=>{try{if(s&&t&&(t.updateDiagram||t.autoSync)){if(t.autoSync||x(R,o.updateDiagram=!1,o),e(3,l=!1),d=!0,i===t.code&&n===t.mermaid)return;i=t.code,n=t.mermaid;const a=r.parentElement.scrollTop;delete s.dataset.processed,D.exports.initialize(Object.assign({},JSON.parse(t.mermaid))),D.exports.render("graph-div",i,(t=>{e(0,s.innerHTML=t,s)})),e(1,r.parentElement.scrollTop=a,r),e(2,c=!1)}else d?d=!1:e(3,l=!0)}catch(a){console.log("view fail",a),e(2,c=!0)}})),M.subscribe((t=>{void 0===t?e(2,c=!1):(e(2,c=!0),console.log("Error: ",t))}))})),[s,r,c,l,function(t){E[t?"unshift":"push"]((()=>{s=t,e(0,s)}))},function(t){E[t?"unshift":"push"]((()=>{r=t,e(1,r)}))}]}class C extends d{constructor(t){super(),u(this,t,A,z,p,{})}}const G=$(l("manual"),P(),"autoHistoryMode"),K=$(l([]),P(),"autoHistoryStore"),Z=$(l([]),P(),"manualHistoryStore"),q=l([]),B=I([G,K,Z,q],(([t,a,e,o],s)=>{s("auto"===t?a:"manual"===t?e:"loader"===t?o:a)})),F=t=>{"loader"!==t.type?(t.name=L(2),"auto"===t.type?K.update((a=>(30===a.length&&a.pop(),[t,...a]))):Z.update((a=>[t,...a]))):q.update((a=>[t,...a]))},Q=t=>{("auto"===H(G)?K:Z).update((a=>("loader"!==H(G)&&(a=a.filter((a=>t&&a.time!=t))),a)))},W=t=>{const a=H(t?K:Z);return a.length>0?JSON.stringify(a[0].state):""},X=async t=>t.truncated?await(await fetch(t.raw_url)).text():t.content,Y=async t=>{const[a,e,o,s]=t.split("github.com").pop().split("/"),{html_url:r,files:i,history:n}=await(await fetch(`https://api.github.com/gists/${o}${s?"/"+s:""}`)).json();if((t=>"code.mmd"in t)(i)){const t=await X(i["code.mmd"]);let a;"config.json"in i&&(a=await X(i["config.json"]));const e=n[0];return{url:`${r}/${e.version}`,code:t,config:a,author:e.user.login,time:new Date(e.committed_at).getTime(),version:e.version.slice(-7)}}throw"Invalid gist provided"},tt=(t,a=t.url)=>{const e=c(n({},T),{code:t.code,loader:{type:"gist",config:{url:a}}});return t.config&&(e.mermaid=t.config),e},at={gist:async t=>{try{const[a,e,o,s]=t.split("github.com").pop().split("/"),{history:r}=await(await fetch(`https://api.github.com/gists/${o}${s?"/"+s:""}`)).json(),i=[];for(const t of r){const a=await Y(t.url).catch((()=>{}));a&&i.push(a)}if(0===i.length)throw"Invalid gist provided";i.reverse();const n=tt(i.slice(-1).pop(),t);for(const t of i)F({state:tt(t),time:t.time,type:"loader",url:t.url,name:`${t.author} v${t.version}`});return n}catch(a){console.error(a)}}},et=()=>{J({updateDiagram:!0})},ot=async()=>{var t;k(window.location.hash.slice(1)),await N("Loading Gist...",(async()=>{const t=new URLSearchParams(window.location.search);let a,e,o=T,s=!1;const r=t.get("code"),i=t.get("config");if(r&&(a=await(await fetch(r)).text(),s=!0),e=i?await(await fetch(i)).text():T.mermaid,a)o={code:a,mermaid:e,loader:{type:"files",config:{codeURL:r,configURL:i}}};else for(const[n,c]of t.entries())if(n in at)try{o=await at[n](c),s=!0;break}catch(l){console.error(l)}s&&J(c(n({},o),{autoSync:!0,updateDiagram:!0,updateEditor:!0}))})().catch(console.error)),et(),U(),await V(),null==(t=_)||t.page()};export{C as V,B as a,F as b,Q as c,M as e,W as g,G as h,ot as i,q as l,et as s};