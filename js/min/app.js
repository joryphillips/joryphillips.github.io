/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const e=new WeakMap,t=t=>(...i)=>{const s=t(...i);return e.set(s,!0),s},i=t=>"function"==typeof t&&e.has(t),s="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},o={},a={},r=`{{lit-${String(Math.random()).slice(2)}}}`,l=`\x3c!--${r}--\x3e`,d=new RegExp(`${r}|${l}`);class c{constructor(e,t){this.parts=[],this.element=t;const i=[],s=[],n=document.createTreeWalker(t.content,133,null,!1);let o=0,a=-1,l=0;const{strings:c,values:{length:h}}=e;for(;l<h;){const e=n.nextNode();if(null!==e){if(a++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let s=0;for(let e=0;e<i;e++)u(t[e].name,"$lit$")&&s++;for(;s-- >0;){const t=c[l],i=m.exec(t)[2],s=i.toLowerCase()+"$lit$",n=e.getAttribute(s);e.removeAttribute(s);const o=n.split(d);this.parts.push({type:"attribute",index:a,name:i,strings:o}),l+=o.length-1}}"TEMPLATE"===e.tagName&&(s.push(e),n.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(r)>=0){const s=e.parentNode,n=t.split(d),o=n.length-1;for(let t=0;t<o;t++){let i,o=n[t];if(""===o)i=p();else{const e=m.exec(o);null!==e&&u(e[2],"$lit$")&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),i=document.createTextNode(o)}s.insertBefore(i,e),this.parts.push({type:"node",index:++a})}""===n[o]?(s.insertBefore(p(),e),i.push(e)):e.data=n[o],l+=o}}else if(8===e.nodeType)if(e.data===r){const t=e.parentNode;null!==e.previousSibling&&a!==o||(a++,t.insertBefore(p(),e)),o=a,this.parts.push({type:"node",index:a}),null===e.nextSibling?e.data="":(i.push(e),a--),l++}else{let t=-1;for(;-1!==(t=e.data.indexOf(r,t+1));)this.parts.push({type:"node",index:-1}),l++}}else n.currentNode=s.pop()}for(const e of i)e.parentNode.removeChild(e)}}const u=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},h=e=>-1!==e.index,p=()=>document.createComment(""),m=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class g{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=s?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],i=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let o,a=0,r=0,l=n.nextNode();for(;a<i.length;)if(o=i[a],h(o)){for(;r<o.index;)r++,"TEMPLATE"===l.nodeName&&(t.push(l),n.currentNode=l.content),null===(l=n.nextNode())&&(n.currentNode=t.pop(),l=n.nextNode());if("node"===o.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));a++}else this.__parts.push(void 0),a++;return s&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const f=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),b=` ${r} `;class v{constructor(e,t,i,s){this.strings=e,this.values=t,this.type=i,this.processor=s}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let s=0;s<e;s++){const e=this.strings[s],n=e.lastIndexOf("\x3c!--");i=(n>-1||i)&&-1===e.indexOf("--\x3e",n+1);const o=m.exec(e);t+=null===o?e+(i?b:l):e.substr(0,o.index)+o[1]+o[2]+"$lit$"+o[3]+r}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==f&&(t=f.createHTML(t)),e.innerHTML=t,e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const y=e=>null===e||!("object"==typeof e||"function"==typeof e),w=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class x{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new _(this)}_getValue(){const e=this.strings,t=e.length-1,i=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=i[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!w(e))return e}let s="";for(let n=0;n<t;n++){s+=e[n];const t=i[n];if(void 0!==t){const e=t.value;if(y(e)||!w(e))s+="string"==typeof e?e:String(e);else for(const t of e)s+="string"==typeof t?t:String(t)}}return s+=e[t],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class _{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===o||y(e)&&e===this.value||(this.value=e,i(e)||(this.committer.dirty=!0))}commit(){for(;i(this.value);){const e=this.value;this.value=o,e(this)}this.value!==o&&this.committer.commit()}}class k{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(p()),this.endNode=e.appendChild(p())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=p()),e.__insert(this.endNode=p())}insertAfterPart(e){e.__insert(this.startNode=p()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;i(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=o,e(this)}const e=this.__pendingValue;e!==o&&(y(e)?e!==this.value&&this.__commitText(e):e instanceof v?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):w(e)?this.__commitIterable(e):e===a?(this.value=a,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof g&&this.value.template===t)this.value.update(e.values);else{const i=new g(t,e.processor,this.options),s=i._clone();i.update(e.values),this.__commitNode(s),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,s=0;for(const n of e)i=t[s],void 0===i&&(i=new k(this.options),t.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(t[s-1])),i.setValue(n),i.commit(),s++;s<t.length&&(t.length=s,this.clear(i&&i.endNode))}clear(e=this.startNode){n(this.startNode.parentNode,e.nextSibling,this.endNode)}}class S{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;i(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=o,e(this)}if(this.__pendingValue===o)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=o}}class E extends x{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new A(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class A extends _{}let N=!1;(()=>{try{const e={get capture(){return N=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class C{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;i(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=o,e(this)}if(this.__pendingValue===o)return;const e=this.__pendingValue,t=this.value,s=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=$(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=o}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const $=e=>e&&(N?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;const j=new class{handleAttributeExpressions(e,t,i,s){const n=t[0];if("."===n){return new E(e,t.slice(1),i).parts}if("@"===n)return[new C(e,t.slice(1),s.eventContext)];if("?"===n)return[new S(e,t.slice(1),i)];return new x(e,t,i).parts}handleTextExpression(e){return new k(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function T(e){let t=V.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},V.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const s=e.strings.join(r);return i=t.keyString.get(s),void 0===i&&(i=new c(e,e.getTemplateElement()),t.keyString.set(s,i)),t.stringsArray.set(e.strings,i),i}const V=new Map,I=new WeakMap,P=(e,t,i)=>{let s=I.get(t);void 0===s&&(n(t,t.firstChild),I.set(t,s=new k(Object.assign({templateFactory:T},i))),s.appendInto(t)),s.setValue(e),s.commit()};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const M=(e,...t)=>new v(e,t,"html",j);let L,D=0;function G(e){L=e}function H(){L=null,D=0}const z=Symbol("haunted.phase"),R=Symbol("haunted.hook"),F=Symbol("haunted.update"),O=Symbol("haunted.commit"),W=Symbol("haunted.effects"),U=Symbol("haunted.layoutEffects");class B{update;host;virtual;[R];[W];[U];constructor(e,t){this.update=e,this.host=t,this[R]=new Map,this[W]=[],this[U]=[]}run(e){G(this);let t=e();return H(),t}_runEffects(e){let t=this[e];G(this);for(let e of t)e.call(this);H()}runEffects(){this._runEffects(W)}runLayoutEffects(){this._runEffects(U)}teardown(){this[R].forEach((e=>{"function"==typeof e.teardown&&e.teardown()}))}}const J=Promise.resolve().then.bind(Promise.resolve());function q(){let e,t=[];function i(){e=null;let i=t;t=[];for(var s=0,n=i.length;s<n;s++)i[s]()}return function(s){t.push(s),null==e&&(e=J(i))}}const Q=q(),X=q();class K{renderer;host;state;[z];_updateQueued;constructor(e,t){this.renderer=e,this.host=t,this.state=new B(this.update.bind(this),t),this[z]=null,this._updateQueued=!1}update(){this._updateQueued||(Q((()=>{let e=this.handlePhase(F);X((()=>{this.handlePhase(O,e),X((()=>{this.handlePhase(W)}))})),this._updateQueued=!1})),this._updateQueued=!0)}handlePhase(e,t){switch(this[z]=e,e){case O:return this.commit(t),void this.runEffects(U);case F:return this.render();case W:return this.runEffects(W)}this[z]=null}render(){return this.state.run((()=>this.renderer.call(this.host,this.host)))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}}function Y(e){class t extends K{frag;constructor(e,t,i){super(e,i||t),this.frag=t}commit(t){e(t,this.frag)}}return function(e,i,s){const n=(s||i||{}).baseElement||HTMLElement,{observedAttributes:o=[],useShadowDOM:a=!0,shadowRootInit:r={}}=s||i||{};class l extends n{_scheduler;static get observedAttributes(){return e.observedAttributes||o||[]}constructor(){super(),!1===a?this._scheduler=new t(e,this):(this.attachShadow({mode:"open",...r}),this._scheduler=new t(e,this.shadowRoot,this))}connectedCallback(){this._scheduler.update()}disconnectedCallback(){this._scheduler.teardown()}attributeChangedCallback(e,t,i){if(t===i)return;let s=""===i||i;Reflect.set(this,((e="")=>e.replace(/-+([a-z])?/g,((e,t)=>t?t.toUpperCase():"")))(e),s)}}const d=new Proxy(n.prototype,{getPrototypeOf:e=>e,set(e,t,i,s){let n;return t in e?(n=Object.getOwnPropertyDescriptor(e,t),n&&n.set?(n.set.call(s,i),!0):(Reflect.set(e,t,i,s),!0)):(n="symbol"==typeof t||"_"===t[0]?{enumerable:!0,configurable:!0,writable:!0,value:i}:function(e){let t=e,i=!1;return Object.freeze({enumerable:!0,configurable:!0,get:()=>t,set(e){i&&t===e||(i=!0,t=e,this._scheduler&&this._scheduler.update())}})}(i),Object.defineProperty(s,t,n),n.set&&n.set.call(s,i),!0)}});return Object.setPrototypeOf(l.prototype,d),l}}class Z{id;state;constructor(e,t){this.id=e,this.state=t}}function ee(e,...t){let i=D++,s=L[R],n=s.get(i);return n||(n=new e(i,L,...t),s.set(i,n)),n.update(...t)}function te(e){return ee.bind(null,e)}function ie(e){return te(class extends Z{callback;lastValues;values;_teardown;constructor(t,i,s,n){super(t,i),e(i,this)}update(e,t){this.callback=e,this.values=t}call(){this.values&&!this.hasChanged()||this.run(),this.lastValues=this.values}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(){"function"==typeof this._teardown&&this._teardown()}hasChanged(){return!this.lastValues||this.values.some(((e,t)=>this.lastValues[t]!==e))}})}function se(e,t){e[W].push(t)}const ne=ie(se),oe=te(class extends Z{Context;value;_ranEffect;_unsubscribe;constructor(e,t,i){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,se(t,this)}update(e){if(this.state.virtual)throw new Error("can't be used with virtual components");return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const t={Context:e,callback:this._updater};this.state.host.dispatchEvent(new CustomEvent("haunted.context",{detail:t,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:i=null,value:s}=t;this.value=i?s:e.defaultValue,this._unsubscribe=i}teardown(){this._unsubscribe&&this._unsubscribe()}});te(class extends Z{value;values;constructor(e,t,i,s){super(e,t),this.value=i(),this.values=s}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some(((e,t)=>this.values[t]!==e))}}),ie((function(e,t){e[U].push(t)}));const ae=te(class extends Z{args;constructor(e,t,i){super(e,t),this.updater=this.updater.bind(this),"function"==typeof i&&(i=i()),this.makeArgs(i)}update(){return this.args}updater(e){if("function"==typeof e){const t=e,[i]=this.args;e=t(i)}this.makeArgs(e),this.state.update()}makeArgs(e){this.args=Object.freeze([e,this.updater])}});
/**
 * @license
 * Portions Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Promise.resolve(),te(class extends Z{reducer;currentState;constructor(e,t,i,s,n){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=void 0!==n?n(s):s}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}});const{component:re,createContext:le}=function({render:e}){const t=Y(e),i=function(e){return t=>{const i={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.listeners=new Set,this.addEventListener("haunted.context",this)}disconnectedCallback(){this.removeEventListener("haunted.context",this)}handleEvent(e){const{detail:t}=e;t.Context===i&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),e.stopPropagation())}unsubscribe(e){this.listeners.delete(e)}set value(e){this._value=e;for(let t of this.listeners)t(e)}get value(){return this._value}},Consumer:e((function({render:e}){return e(oe(i))})),defaultValue:t};return i}}(t);return{component:t,createContext:i}}({render:P}),de=(e,t)=>{const i=e.startNode.parentNode,s=void 0===t?e.endNode:t.startNode,n=i.insertBefore(p(),s);i.insertBefore(p(),s);const o=new k(e.options);return o.insertAfterNode(n),o},ce=(e,t)=>(e.setValue(t),e.commit(),e),ue=(e,t,i)=>{const s=e.startNode.parentNode,n=i?i.startNode:e.endNode,o=t.endNode.nextSibling;o!==n&&((e,t,i=null,s=null)=>{for(;t!==i;){const i=t.nextSibling;e.insertBefore(t,s),t=i}})(s,t.startNode,o,n)},he=e=>{n(e.startNode.parentNode,e.startNode,e.endNode.nextSibling)},pe=(e,t,i)=>{const s=new Map;for(let n=t;n<=i;n++)s.set(e[n],n);return s},me=new WeakMap,ge=new WeakMap,fe=t(((e,t,i)=>{let s;return void 0===i?i=t:void 0!==t&&(s=t),t=>{if(!(t instanceof k))throw new Error("repeat can only be used in text bindings");const n=me.get(t)||[],o=ge.get(t)||[],a=[],r=[],l=[];let d,c,u=0;for(const t of e)l[u]=s?s(t,u):u,r[u]=i(t,u),u++;let h=0,p=n.length-1,m=0,g=r.length-1;for(;h<=p&&m<=g;)if(null===n[h])h++;else if(null===n[p])p--;else if(o[h]===l[m])a[m]=ce(n[h],r[m]),h++,m++;else if(o[p]===l[g])a[g]=ce(n[p],r[g]),p--,g--;else if(o[h]===l[g])a[g]=ce(n[h],r[g]),ue(t,n[h],a[g+1]),h++,g--;else if(o[p]===l[m])a[m]=ce(n[p],r[m]),ue(t,n[p],n[h]),p--,m++;else if(void 0===d&&(d=pe(l,m,g),c=pe(o,h,p)),d.has(o[h]))if(d.has(o[p])){const e=c.get(l[m]),i=void 0!==e?n[e]:null;if(null===i){const e=de(t,n[h]);ce(e,r[m]),a[m]=e}else a[m]=ce(i,r[m]),ue(t,i,n[h]),n[e]=null;m++}else he(n[p]),p--;else he(n[h]),h++;for(;m<=g;){const e=de(t,a[g+1]);ce(e,r[m]),a[m++]=e}for(;h<=p;){const e=n[h++];null!==e&&he(e)}me.set(t,a),ge.set(t,l)}}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class be{constructor(e){this.classes=new Set,this.changed=!1,this.element=e;const t=(e.getAttribute("class")||"").split(/\s+/);for(const e of t)this.classes.add(e)}add(e){this.classes.add(e),this.changed=!0}remove(e){this.classes.delete(e),this.changed=!0}commit(){if(this.changed){let e="";this.classes.forEach((t=>e+=t+" ")),this.element.setAttribute("class",e)}}}const ve=new WeakMap,ye=t((e=>t=>{if(!(t instanceof _)||t instanceof A||"class"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:i}=t,{element:s}=i;let n=ve.get(t);void 0===n&&(s.setAttribute("class",i.strings.join(" ")),ve.set(t,n=new Set));const o=s.classList||new be(s);n.forEach((t=>{t in e||(o.remove(t),n.delete(t))}));for(const t in e){const i=e[t];i!=n.has(t)&&(i?(o.add(t),n.add(t)):(o.remove(t),n.delete(t)))}"function"==typeof o.commit&&o.commit()}));var we;!function(e){e.HEADER="header",e.PROJECT_IMAGE=".image-container img",e.SEARCH_INPUT='input[type="search"]'}(we||(we={}));const xe=M`
    <style>
      :host {
        position: relative;
        flex: 2 1 auto;
        min-width: 200px;
      }

      :host label.hide {
        position: absolute!important;
        height: 1px;
        width: 1px;
        overflow: hidden;
        clip: rect(1px,1px,1px,1px);
      }

      input[type="search"] {
        font-family: inherit;
        font-size: inherit;
        display: block;
        width: 100%;
        padding: .5rem;
        border: 1px solid #ccc;
        border-radius: 3px;
      }

      div[role="listbox"] {
        display: none;
        background-color: #FFF;
        border: 1px solid #ccc;
      }

      div[role="listbox"], button[role="option"] {
        box-sizing: border-box;
        width: 100%;
      }

      div[role="listbox"].show {
        display: block;
        position: absolute;
        z-index: 10;
        max-height: 200px;
        overflow-y: scroll;
      }

      button[role="option"] {
        background-color: #FFF;;
        border-bottom: 1px solid #ccc;
        font-size: inherit;
        text-align: left;
        padding: .5rem;
      }

      button[role="option"]:last-of-type {
        border-bottom: none;
      }
    </style>
`;function _e(e){return e.toLowerCase().replace(/[^a-z0-9]+/gi,"-")}customElements.define("search-box",re((function({keyWords:e,handleSearchInput:t}){const[i,s]=ae(!1),[n,o]=ae(null),a=this.shadowRoot.querySelector(we.SEARCH_INPUT),r=()=>{s(!i)};return M`
    ${xe}

    <label for="search" class="hide">Search</label>
    <input
      type="search"
      placeholder="search"
      aria-label="Search through projects"
      autocomplete="off"
      @input=${e=>{const{value:i}=e.composedPath().find((e=>"INPUT"===e.tagName));n&&clearTimeout(n),o(setTimeout((()=>{t(i)}),350))}}
      @focus=${()=>{r()}}
      @blur=${e=>{e.preventDefault(),i&&r()}}
    >
    <div role="listbox" class=${ye({show:i})}>
      ${[...e].map((e=>M`
        <button
          role="option"
          @mousedown=${()=>(e=>{a.value=e,r(),t(e)})(e)}>${e}</button>
      `))}
    </div>
  `})));function ke(e){const t=e.shadowRoot.querySelector(we.PROJECT_IMAGE);t&&(t.src=t?.dataset?.src,async function(e,t){e.src.indexOf("heathrow-clock.svg")>-1&&(await import("./clock-28afe552.js")).addClockPrototype(e,t)}(t,e),t.classList.add("visible"))}const Se=M`
  <style>
    :host {
      opacity: 1;
      transition: opacity 0.2s ease-in-out;
    }

    .project-card-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: .5rem;
    }

    .description {
      margin: .5rem;
      line-height: 1.7;
    }

    .description[hidden] {
      display: none;
    }

    .info-icons, .info-icons .info, .info-icons .link {
      display: flex;
      align-items: center;
    }

    .info-icons .info, .info-icons .link {
      background-color: transparent;
      opacity: .7;
      padding: 0 0 0 0.7rem;
    }

    .info-icons .info:hover, .info-icons .link:hover {
      opacity: 1;
    }

    .info img, .link img {
      width: 1.6rem;
      height: 1.6rem;
    }

    .info[hidden], .link[hidden] {
      display: none;
    }

    h5.title {
      margin: 0;
      font-size: 1.1rem;
    }

    .image-container img {
      opacity: 0;
    }

    .image-container img.visible {
      opacity: 1;
    }

    .width-100 {
      width: 100%
    }

    .image-container {
      display: flex;
      height: 300px;
      padding: 8px;
      overflow: hidden;
      justify-content: center;
      align-items: center;
      background-color: #FFF;
      border: 1px solid rgba(0, 0, 0, 0.2);
    }

    .image-container > * {
      display: block;
      max-width: 100%;
      max-height: 100%;
    }

    .button, button {
      font-family: inherit;
      font-weight: 700;
      text-decoration: none;
      cursor: pointer;
      line-height: 1.125rem;
      padding-left: 1rem;
      padding-right: 1rem;
      margin: 0;
      height: auto;
      border: 1px solid transparent;
      vertical-align: middle;
      -webkit-appearance: none;
    }

    button.close[hidden] {
      display: none;
    }


  </style>
`;customElements.define("project-card",re((function({project:e,handleInfoClick:t,handleInfoCloseClick:i,selected:s}){ne((()=>{!function(e,t){const i=new IntersectionObserver((e=>{for(const s of e)if(s.isIntersecting){const e=s.target;t(e),i.unobserve(e)}}));i.observe(e)}(this,ke)}),[]);const n="./images/"+e.imageSources[0];return M`
    ${Se}

    <div class="image-container">
      <img class="image visible block" data-src="${n}" alt="image of ${e.title}">
    </div>
    <div class="project-card-title">
      <h5 class="title">${e.title}</h5>
      <div class="info-icons">
        <button
          ?hidden=${!e.description}
          class="info"
          @click=${()=>t(e)}
        ><img src="${"./images/"}info-black-18dp.svg"></button>
        <a ?hidden=${!e.href} class="link" href="${e.href}">
          <img src="${"./images/"}launch-black-18dp.svg">
        </a>
      </div>
    </div>
    <p ?hidden=${!s} class="description">${e.description}</p>
    <button ?hidden=${!s} class="close" @click=${i}>Close</button>
  `})));const Ee=[{date:"Sept 2015 - present",place:"Google, UX Engineer",summary:"Designing & developing apps, UIs, widgets & ways to share & shape actionable information.",detail:"Developed a web app from conception through implementation to allow the Android UX team to better share their work. Developed a rapid prototyping app for the Google Store UX team. Designed and developed a web app for UX researchers to store, find, and share study findings. Also designed identity-building illustrations and several shipped Material-design emoji."},{date:"Jan 2014 - Sept 2015",place:"Freelance Designer/Developer",summary:"Designed & built web sites, apps, presentations; general design consulting.",detail:"Designed and developed a handful of client websites, also providing messaging, content advice, graphic design, and production. Developed a prototype/MVP web app to help medical clinics with green business guidelines. Consulted as a Creative Director for a boutique branding firm, including communication, visual design, and technical advice."},{date:"Aug 2011 - Dec 2013",place:"City of Santa Monica",summary:"Revised framework for future development; managed  engagement & analysis; delivered lots of presentations.",detail:"Led effort to rewrite City's zoning code. Designed and produced multi-platform content: reports, presentations, graphics, engagement materials for print, broadcast, and web. Result: a draft zoning ordinance for public review."},{date:"Jul 2008 - Aug 2011",place:"Rios Clementi Hale Studios",summary:"Bridged the gap between design and law to help move a significant destination and economic engine forward.",detail:"Helped get the Universal Studios Master Plan adopted. Design, coordination, and production of conceptual drawings, illustrations, 3D models, multi-format presentations, maps, layout & publishing of documents, and other materials."},{date:"May 2006 - Jul 2008",place:"City of West Hollywood",summary:"Analyzed & delivered recommendations regarding other people's well-designed, and not well-designed, development proposals.",detail:"Analysis and presentation of urban design and planning-related issues."},{date:"Apr 2000 - Feb 2006",place:"City of Seattle",summary:"Led major policy changes to help make Seattle more livable, walkable, and sustainable.",detail:"Produced plans, reports, graphics, and presentations leading to tangible improvements in Seattle's physical environment. First urban planner at the City of Seattle to use digital 3D modeling to inform outreach and analysis related to changes to zoning and building typologies."},{date:"Aug 1997 - April 2000",place:"Arai/Jackson Architects & Planners",summary:"Designed & produced posters and giant documents; learned to manage projects; learned from plenty of mistakes.",detail:"Design, production, content of various urban design and planning projects."}],Ae=[{title:"Mock for plan review UI",date:"2021",description:"A high-fidelity mock for a user interface allowing fluid communication between an agency and applicant.",imageSources:["plan_review_mock.png"],keywords:["software","ux","ui","mock","communication"]},{title:"Gallery.io web engineering",date:"2019",description:"Google's Material Gallery web appplication evolved from iterations of earlier prototype applications written in ES5-era AngularJS. I led team-wide efforts to modernize the application, starting with the need to update how it was being built and bundled. This unblocked a TypeScript migration, which I also led, along with efforts to componentize the application and update state management using more modern libraries. As a result, thousands of tech debt issues have been closed and the application's bundle size has been reduced by at least 33%.",href:"https://gallery.io",imageSources:["gallery.jpg"],keywords:["software","typescript","tooling","modernization","develop","engineer","Google","Material"]},{title:"web performance analysis",date:"2020",href:"https://github.com/joryphillips/joryphillips.github.io/issues/8#issuecomment-611778792",imageSources:["web-perf.png"],keywords:["software","develop","engineer","performance","tooling"]},{title:"comprehensive design + implementation",imageSources:["test-result-details.png"],keywords:["ux","ui","develop","Google","Android","typescript"]},{title:"web component wireframe",imageSources:["target-row-pies-wireframe.jpg"],keywords:["ux","ui","wireframe","Google","Android"]},{title:"concept diagrams",imageSources:["grid-test-views@3x.png"],keywords:["conceptual","diagram","communication","Google","Android"]},{title:"notification CRUD app",imageSources:["notification-crud-edit.png"],keywords:["ux","ui","develop","Google","Android","typescript"]},{title:"lightweight webpage generator",imageSources:["ux-page-crud.png"],keywords:["ux","ui","develop","Google","Android"]},{title:"mojibrush.co ui/ux + oss contributions",imageSources:["moji-brush.png"],href:"https://mojibrush.co",keywords:["ux","ui","develop","fun"]},{title:"make a webpage from Google Sheets",imageSources:["ux-sheet-stepper.png"],keywords:["ux","ui","develop","Google","Android"]},{title:"contrast study",imageSources:["material-gray-contrast-ratio-study.png"],keywords:["ux","ui","accessibility","Google","Android"]},{title:"sketchy wireframe",imageSources:["sketchy-wireframe.png"],keywords:["ux","ui","wireframe","sketch","Google","Android"]},{title:"four shipped Material emoji",imageSources:["four-material-emoji.svg"],keywords:["illustration","Material","fun","Google","Android"]},{title:"imagery exploration",imageSources:["dichotomy-01.jpg"],keywords:["presentation","conceptual","communication","Google","Android"]},{title:"identity/branding illustrations",imageSources:["droid-4-up.svg"],keywords:["illustration","fun","Google","Android"]},{title:"concept for research logo",imageSources:["UERchives-magnifying-glass-exag_480.png"],keywords:["illustration","Material","fun","Google","Android"]},{title:"dancing t-rex",imageSources:["dancing-dino.gif"],keywords:["fun","Google","Android"]},{title:"sustainable healthcare website",date:"2015",imageSources:["eksh-desktop.jpg"],description:"Erika Kimball Sustainable Healthcare is a website I designed and developed using a lightweight animation library for subtle parallax scrolling effects. I researched and incorporated a custom CMS/blog solution to fit the client's needs, and designed the logo in Adobe Illustrator.",keywords:["ux","ui","develop","communication","freelance"]},{title:"mobile web app",date:"2014",imageSources:["rumblemunk-mobile.jpg"],keywords:["ux","ui","develop"]},{title:"Global Brand Works Website",date:"2015",imageSources:["gbw.jpg"],description:"I designed and developed the Global Brand Works website with legibility, navigation, and mobile readiness in mind. The site was completely custom-built with HTML/CSS/JavaScript/PHP for interactivity. For a time, I also served as the Creative Director for this boutique branding agency and helped their clients with general design, graphic, and presentation needs.",href:"https://globalbrandworks.com/",keywords:["ux","ui","develop","communication","freelance"]},{title:"Illustration",date:"2009",imageSources:["shanghai-outlines.jpg","shanghai-full-width-section-trnsp.png"],description:"As part of a competition to master plan a portion of a new theme park and entertainment destination, I digitally painted section and elevations line drawings to convey exiting, active retail, restaurant, and entertainment areas. Drawing from a variety of textures and patterns found in design and fashion magazines, I experimented with transparency, overlap, and varying hues to reach an appropriate balance. This is a small, zoomed-in portion of one of several drawings, which were presented on large-format presentation boards.",keywords:["urban design","illustration","fun","communication"]},{title:"Wall Clock Product Design/Prototype",date:"2010",imageSources:["heathrow-clock.svg"],description:"Tasked with coming up with product ideas that could build upon notNeutral's (Rios Clementi Hale Studio's product design brand) successful CityPlates, I started analyzing aerial photographs of different cities for inspiration. I was especially drawn to the way airports look from above. This London Heathrow graphic was originally presented as an idea for a large-scale wall graphic and clock, with the runways as moving hands. Here I have streamlined the original Illustrator file with SVG and used Javascript to make it a functional time-telling graphic.",keywords:["conceptual","prototyping","maps"]},{title:"Mapping & Data Analysis",date:"2009",imageSources:["pub-facilities-map.svg"],description:"I designed and created this interactive map in Adobe Illustrator after exporting the data from ArcGIS. The map was originally used at multiple scales in a presentation to elected officials and planners to describe the abundance of public facilities within five miles of the Univeral Studios site. The icons are based on universally-recognized symbols for the activities they represent.",keywords:["conceptual","urban design","urban planning","communication","maps"]},{title:"Universal Studios Master Plan",date:"2011",imageSources:["usmp.png"],description:"While working at Rios Clementi Hale Studios, I produced materials and coordinated a team of multidisciplinary designers to help Universal Studios create an 'entitlement package' that adopted their new master plan. The project's needs constantly shifted, and included maintaining a building inventory, creating view simulations, 3D modeling, mapping, diagramming, and preparing various presentation materials. This important plan was subsequently adopted by the City of Los Angeles and the County of Los Angeles.",keywords:["urban design","urban planning","communication"]},{title:"not a real emoji",imageSources:["incredulous_goat.png"],keywords:["fun","goat","emoji"]}];const Ne=M`
  <style>
    section {
      background-color: #ddd;
      padding-top: 4rem;
      padding-bottom: 4rem;
      padding-left: 1rem;
      padding-right: 1rem;
    }
    .visuals-header {
      display: flex;
      align-items: baseline;
      flex-wrap: wrap;
      margin-bottom: 2rem;
    }
    h1 {
      flex: 1 1 auto;
      min-width: 0;
      min-height: 0;
      margin: 0 1rem .25rem 0;
      white-space: nowrap;
    }
    .project-holder {
      display: grid;
      align-items: center;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1rem;
      grid-auto-rows: minmax(300px, auto);
    }
    .border-bottom {
      border-bottom-style: solid;
      border-bottom-width: 1px;
      border-bottom-color: rgba(0, 0, 0, .125);
    }

    .border-top {
      border-top-style: solid;
      border-top-width: 1px;
      border-top-color: rgba(0, 0, 0, .125);
    }
  </style>
`;function Ce(e){e.preventDefault();const t=e.target.hash,i=document.querySelector(t),s=document.querySelector(we.HEADER),n=s?s.offsetHeight:0;if(i){const e=i.offsetTop-n;window.scroll({top:e,behavior:"smooth"}),history.pushState(null,null,t)}}customElements.define("project-list",re((function(){const[e,t]=ae(""),[i,s]=ae(null),n=e=>{s(_e(e.title))},o=()=>{s(null)},a=e=>_e(e.title)===i,r=Ae.filter((t=>function(e,t){const{keywords:i,title:s}=t;return function(e,t){let i=!1;const s=e.toLowerCase().split(" ");for(let e=0;e<s.length;e++){const n=s[e].trim();i=t.toLowerCase().includes(n)}return i}(e,i.join(" ")+" "+s.toLowerCase())}(e,t)));return M`
    ${Ne}

    <section class="border-bottom border-top">
      <div class="visuals-header">
        <h1>Visuals & Projects</h1>
        <search-box
          .keyWords=${function(e){const t=new Set;if(e)for(const i of e)for(const e of i.keywords)t.add(e.toLowerCase());return t}(Ae)}
          .handleSearchInput=${e=>{t(e)}}
        ></search-box>
      </div>

      <div class="project-holder">
        ${fe(r,(e=>_e(e.title)),(e=>M`
              <project-card
                ?hidden=${(e=>null!=i&&!a(e))(e)}
                id=${_e(e.title)}
                .selected=${a(e)}
                .project=${e}
                .handleInfoClick=${n}
                .handleInfoCloseClick=${o}
              ></project-card>
            `))}
      </div>
    </section>
  `})));const $e=M`
  <header class="navy">
    <nav class="container flex-auto">
      <a href="/#summary" @click=${Ce} class="button button-transparent">Summary</a>
      <a href="/#visuals" @click=${Ce} class="button button-transparent">Visuals</a>
      <a href="/#experience" @click=${Ce} class="button button-transparent">Experience</a>
    </nav>
  </header>
`,je=M`
  <section class="jumbo navy">
    <h1>Jory Phillips</h1>
    <h2>designer & front-end developer</h2>
  </section>
`,Te=M`
  <section id="summary" class="summary">
    <div class="container">
      <p>My strength is bridging big-picture concepts with detailed implementation. I am especially interested in projects that
        help people navigate and understand complex things.</p>
      <p>I have designed & developed apps for Google, helped a branding agency brand itself, and created design guidelines and
        illustrations for major cities and a movie studio/theme park. I have also delivered scores of presentations to decision
        makers, community groups, and professional organizations. I can prototype, design, develop, or present your ideas
        and information with interest, interaction, and positive experiences.</p>
    </div>
  </section>
`;const Ve=M`
  <section id="experience" class="experience">
    <div class="container">
      <h1>Experience</h1>
      <div class="job-holder">
        ${Ee.map((e=>function(e){return M`
    <div class="job">
      <h3 class="title">
        <span class="dark-blue">${e.place}</span>
        <span class="regular date">${e.date}</span>
      </h3>
      <h3 class="summary">${e.summary}</h3>
    </div>
  `}(e)))}
      </div>
    </div>
  </section>
`,Ie=M`
  <footer class="navy border-top">
    <div class="container">
      <a href="https://www.linkedin.com/in/joryphillips" class="button button-transparent">linkedin</a>
      <a class="button button-transparent" href="javascript:location='mailto:\u006a\u006f\u0072\u0079\u002e\u006c\u002e\u0070\u0068\u0069\u006c\u006c\u0069\u0070\u0073\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d';void 0">email</a>
      <a href="https://github.com/joryphillips/joryphillips.github.io" class="button button-transparent">src</a>
    </div>
  </footer>
`;P(M`
  ${$e}
  ${je}
  ${Te}
  <project-list id="visuals"></project-list>
  ${Ve}
  ${Ie}
`,document.body);
//# sourceMappingURL=app.js.map
