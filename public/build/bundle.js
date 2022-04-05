var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function i(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function s(){return f(" ")}function d(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function p(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function h(t){return""===t?null:+t}function $(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function m(t,n){t.value=null==n?"":n}function g(t,n,e,o){null===e?t.style.removeProperty(n):t.style.setProperty(n,e,o?"important":"")}let b;function y(t){b=t}const v=[],_=[],x=[],k=[],E=Promise.resolve();let w=!1;function A(t){x.push(t)}const M=new Set;let j=0;function C(){const t=b;do{for(;j<v.length;){const t=v[j];j++,y(t),N(t.$$)}for(y(null),v.length=0,j=0;_.length;)_.pop()();for(let t=0;t<x.length;t+=1){const n=x[t];M.has(n)||(M.add(n),n())}x.length=0}while(v.length);for(;k.length;)k.pop()();w=!1,M.clear(),y(t)}function N(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const O=new Set;function P(t,n){-1===t.$$.dirty[0]&&(v.push(t),w||(w=!0,E.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function T(u,c,l,a,f,s,d,p=[-1]){const h=b;y(u);const $=u.$$={fragment:null,ctx:null,props:s,update:t,not_equal:f,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c.context||(h?h.$$.context:[])),callbacks:e(),dirty:p,skip_bound:!1,root:c.target||h.$$.root};d&&d($.root);let m=!1;if($.ctx=l?l(u,c.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return $.ctx&&f($.ctx[t],$.ctx[t]=o)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](o),m&&P(u,t)),n})):[],$.update(),m=!0,o($.before_update),$.fragment=!!a&&a($.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);$.fragment&&$.fragment.l(t),t.forEach(i)}else $.fragment&&$.fragment.c();c.intro&&((g=u.$$.fragment)&&g.i&&(O.delete(g),g.i(v))),function(t,e,u,c){const{fragment:l,on_mount:i,on_destroy:a,after_update:f}=t.$$;l&&l.m(e,u),c||A((()=>{const e=i.map(n).filter(r);a?a.push(...e):o(e),t.$$.on_mount=[]})),f.forEach(A)}(u,c.target,c.anchor,c.customElement),C()}var g,v;y(h)}function W(t,n,e){const o=t.slice();return o[8]=n[e],o[9]=n,o[10]=e,o}function L(t){let n,e,o;function r(){t[6].call(n,t[10])}return{c(){n=a("input"),p(n,"type","number")},m(u,c){l(u,n,c),m(n,t[2][t[10]]),e||(o=d(n,"input",r),e=!0)},p(e,o){t=e,4&o&&h(n.value)!==t[2][t[10]]&&m(n,t[2][t[10]])},d(t){t&&i(n),e=!1,o()}}}function S(t){let n,e,o,r;return{c(){n=a("br"),e=f("\n        Wordle average: "),o=a("span"),r=f(t[4]),g(o,"color","#538d4e")},m(t,u){l(t,n,u),l(t,e,u),l(t,o,u),c(o,r)},p(t,n){16&n&&$(r,t[4])},d(t){t&&i(n),t&&i(e),t&&i(o)}}}function q(n){let e,o,r,u,b,y,v,_,x,k,E,w,A,M,j,C,N,O,P,T,q,B,D=n[0]+Math.round(n[1])+"",G=n[2],z=[];for(let t=0;t<G.length;t+=1)z[t]=L(W(n,G,t));let F=n[4]&&S(n);return{c(){e=a("main"),o=a("div"),r=a("h1"),r.textContent="Wordle Average",u=s(),b=a("br"),y=f("\n    Guess Distribution\n    ");for(let t=0;t<z.length;t+=1)z[t].c();v=s(),_=a("br"),x=a("br"),k=f("\n    Win % "),E=a("input"),w=s(),A=a("br"),M=a("br"),j=s(),C=a("div"),N=f("Total games played: "),O=a("span"),P=f(D),T=s(),F&&F.c(),p(E,"type","number"),g(O,"color","#d0b036"),p(C,"id","results"),p(o,"id","container")},m(t,i){l(t,e,i),c(e,o),c(o,r),c(o,u),c(o,b),c(o,y);for(let t=0;t<z.length;t+=1)z[t].m(o,null);c(o,v),c(o,_),c(o,x),c(o,k),c(o,E),m(E,n[3]),c(o,w),c(o,A),c(o,M),c(o,j),c(o,C),c(C,N),c(C,O),c(O,P),c(C,T),F&&F.m(C,null),q||(B=d(E,"input",n[7]),q=!0)},p(t,[n]){if(4&n){let e;for(G=t[2],e=0;e<G.length;e+=1){const r=W(t,G,e);z[e]?z[e].p(r,n):(z[e]=L(r),z[e].c(),z[e].m(o,v))}for(;e<z.length;e+=1)z[e].d(1);z.length=G.length}8&n&&h(E.value)!==t[3]&&m(E,t[3]),3&n&&D!==(D=t[0]+Math.round(t[1])+"")&&$(P,D),t[4]?F?F.p(t,n):(F=S(t),F.c(),F.m(C,null)):F&&(F.d(1),F=null)},i:t,o:t,d(t){t&&i(e),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(z,t),F&&F.d(),q=!1,B()}}}function B(t,n,e){let o,r,u,c,l,i;return t.$$.update=()=>{4&t.$$.dirty&&e(0,u=o.reduce(((t,n)=>t+n),0)),9&t.$$.dirty&&e(1,c=u-u/100*r),7&t.$$.dirty&&e(5,l=(o.reduce(((t,n,e)=>t+n*(e+1)),0)+7*c)/u),32&t.$$.dirty&&e(4,i=Math.round(100*l)/100)},e(2,o=[0,0,0,0,0,0]),e(3,r=100),[u,c,o,r,i,l,function(t){o[t]=h(this.value),e(2,o)},function(){r=h(this.value),e(3,r)}]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),T(this,t,B,q,u,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
