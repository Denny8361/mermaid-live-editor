var b=Object.defineProperty,k=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var m=(e,t,s)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,a=(e,t)=>{for(var s in t||(t={}))L.call(t,s)&&m(e,s,t[s]);if(u)for(var s of u(t))_.call(t,s)&&m(e,s,t[s]);return e},o=(e,t)=>k(e,v(t));import{D as p,L as C,M as T,N as O,O as w,P as D,Q as N,R as A,T as E,U as z,V as c}from"./vendor-54c63849.js";import{_ as f}from"./preload-helper-1db36302.js";const J={loading:!1},g=p(J),H=async(e,t)=>{g.set({loading:!0,message:e});const s=await t;return g.set({loading:!1}),s};let l;const M=async()=>{if(!l)try{const{Analytics:e}=await f(()=>import("./analytics.browser.es-3a37d114.js"),[]),t=await f(()=>import("./analytics-plugin-ga.browser.es-1cdb0512.js"),[]);l=e({app:"mermaid-live-editor",plugins:[t.init({trackingId:"UA-153180559-1"})]})}catch{console.info("Analytics blocked ;)")}},R=e=>e.replace(/^\s*%%.*\n/g,`
`).trimStart().split(" ")[0];let y;const j=e=>{l&&(clearTimeout(y),y=setTimeout(function(){const t=R(e);console.debug("ga:","send","event","render",t),l.track("render",{graphType:t})},5e3))},P={serialize:e=>D(e,!0),deserialize:e=>N(e)},U={serialize:e=>{const t=new TextEncoder().encode(e),s=T(t,{level:9});return C(s,!0)},deserialize:e=>{const t=O(e);return w(t,{to:"string"})}},d={base64:P,pako:U},I=e=>{const t=JSON.stringify(e),s="pako",n=d[s].serialize(t);return`${s}:${n}`},B=e=>{let t,s;if(e.includes(":")){let r;if([r,s]=e.split(":"),r in d)t=r;else throw new Error(`Unknown serde type: ${r}`)}else t="base64",s=e;const n=d[t].deserialize(s);return JSON.parse(n)},G={code:`graph TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]
  `,mermaid:JSON.stringify({theme:"default"},null,2),updateEditor:!1,autoSync:!0,updateDiagram:!0},$=`graph TD
    A[Loading URL failed. We can try to figure out why.] -->|Decode JSON| B(Please check the console to see the JSON and error details.)
    B --> C{Is the JSON correct?}
    C -->|Yes| D(Please Click here to Raise an issue in github.<br/>Including the broken link in the issue <br/> will speed up the fix.)
    C -->|No| E{Did someone <br/>send you this link?}
    E -->|Yes| F[Ask them to send <br/>you the complete link]
    E -->|No| G{Did you copy <br/> the complete URL?}
    G --> |Yes| D
    G --> |"No :("| H(Try using the Timeline tab in History <br/>from same browser you used to create the diagram.)
    click D href "https://github.com/mermaid-js/mermaid-live-editor/issues/new?assignees=&labels=bug&template=bug_report.md&title=Broken%20link" "Raise issue"`,i=A(p(G),E(),"codeStore"),x=z([i],([e],t)=>{t(I(e))}),Q=e=>{let t;console.log("Loading",e);try{t=B(e);const s=typeof t.mermaid=="string"?JSON.parse(t.mermaid):t.mermaid;s.securityLevel&&s.securityLevel!=="strict"&&confirm(`Removing "securityLevel":"${s.securityLevel}" from the config for safety.
Click Cancel if you trust the source of this Diagram.`)&&delete s.securityLevel,t.mermaid=JSON.stringify(s,null,2)}catch(s){t=c(i),e&&(console.error("Init error",s),t.code=$)}h(o(a({},t),{updateEditor:!0}))},h=e=>{i.update(t=>a(a({},t),e))};let S=!1;const W=(e,t,s=!1)=>{if(j(e),(e.match(/\n/g)||"").length+1>50&&!S&&c(i).autoSync){const r=confirm("Long diagram detected. Turn off Auto Sync? Click the sync logo to manually sync.");S=!0,r&&h({autoSync:!1})}i.update(r=>o(a({},r),{code:e,updateEditor:t,updateDiagram:s}))},q=(e,t)=>{i.update(s=>o(a({},s),{mermaid:e,updateEditor:t}))},K=e=>{i.update(t=>{const s=JSON.parse(t.mermaid);return(!s.theme||["dark","default"].includes(s.theme))&&(s.theme=e?"dark":"default"),o(a({},t),{mermaid:JSON.stringify(s,null,2),updateEditor:!0})})},X=()=>{x.subscribe(e=>{history.replaceState(void 0,void 0,`#${e}`)})},Z=()=>JSON.stringify(c(i));export{l as a,q as b,i as c,G as d,h as e,X as f,Z as g,M as h,H as i,Q as j,g as l,U as p,x as s,K as t,W as u};
