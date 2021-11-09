/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,t=Symbol(),i=new Map;class o{constructor(e,i){if(this._$cssResult$=!0,i!==t)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let t=i.get(this.cssText);return e&&void 0===t&&(i.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const s=e?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let i="";for(const t of e.cssRules)i+=t.cssText;return(e=>new o("string"==typeof e?e:e+"",t))(i)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var n,r;const a={toAttribute(e,t){switch(t){case Boolean:e=e?"":null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},l=(e,t)=>t!==e&&(t==t||e==e),d={attribute:!0,type:String,converter:a,reflect:!1,hasChanged:l};class c extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;null!==(t=this.l)&&void 0!==t||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,i)=>{const o=this._$Eh(i,t);void 0!==o&&(this._$Eu.set(o,i),e.push(o))})),e}static createProperty(e,t=d){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i="symbol"==typeof e?Symbol():"__"+e,o=this.getPropertyDescriptor(e,i,t);void 0!==o&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(o){const s=this[e];this[t]=o,this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||d}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(s(e))}else void 0!==e&&t.push(s(e));return t}static _$Eh(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}o(){var e;this._$Ev=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,i;(null!==(t=this._$Em)&&void 0!==t?t:this._$Em=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$Em)||void 0===t||t.splice(this._$Em.indexOf(e)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{e?t.adoptedStyleSheets=i.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):i.forEach((e=>{const i=document.createElement("style"),o=window.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=e.cssText,t.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$Em)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$Em)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$Eg(e,t,i=d){var o,s;const n=this.constructor._$Eh(e,i);if(void 0!==n&&!0===i.reflect){const r=(null!==(s=null===(o=i.converter)||void 0===o?void 0:o.toAttribute)&&void 0!==s?s:a.toAttribute)(t,i.type);this._$Ei=e,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$Ei=null}}_$AK(e,t){var i,o,s;const n=this.constructor,r=n._$Eu.get(e);if(void 0!==r&&this._$Ei!==r){const e=n.getPropertyOptions(r),l=e.converter,d=null!==(s=null!==(o=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==o?o:"function"==typeof l?l:null)&&void 0!==s?s:a.fromAttribute;this._$Ei=r,this[r]=d(t,e.type),this._$Ei=null}}requestUpdate(e,t,i){let o=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||l)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Ei!==e&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(e,i))):o=!1),!this.isUpdatePending&&o&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((e,t)=>this[t]=e)),this._$Et=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this._$Em)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(i)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$Em)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(e){return!0}update(e){void 0!==this._$ES&&(this._$ES.forEach(((e,t)=>this._$Eg(t,this[t],e))),this._$ES=void 0),this._$ET()}updated(e){}firstUpdated(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var h,u;c.finalized=!0,c.elementProperties=new Map,c.elementStyles=[],c.shadowRootOptions={mode:"open"},null===(n=globalThis.reactiveElementPolyfillSupport)||void 0===n||n.call(globalThis,{ReactiveElement:c}),(null!==(r=globalThis.reactiveElementVersions)&&void 0!==r?r:globalThis.reactiveElementVersions=[]).push("1.0.0");const p=globalThis.trustedTypes,m=p?p.createPolicy("lit-html",{createHTML:e=>e}):void 0,g=`lit$${(Math.random()+"").slice(9)}$`,f="?"+g,b=`<${f}>`,v=document,y=(e="")=>v.createComment(e),w=e=>null===e||"object"!=typeof e&&"function"!=typeof e,$=Array.isArray,_=e=>{var t;return $(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])},A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,x=/-->/g,S=/>/g,k=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,E=/'/g,C=/"/g,j=/^(?:script|style|textarea)$/i,P=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),I=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),U=new WeakMap,M=(e,t,i)=>{var o,s;const n=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:t;let r=n._$litPart$;if(void 0===r){const e=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;n._$litPart$=r=new D(t.insertBefore(y(),e),e,void 0,null!=i?i:{})}return r._$AI(e),r},H=v.createTreeWalker(v,129,null,!1),z=(e,t)=>{const i=e.length-1,o=[];let s,n=2===t?"<svg>":"",r=A;for(let t=0;t<i;t++){const i=e[t];let a,l,d=-1,c=0;for(;c<i.length&&(r.lastIndex=c,l=r.exec(i),null!==l);)c=r.lastIndex,r===A?"!--"===l[1]?r=x:void 0!==l[1]?r=S:void 0!==l[2]?(j.test(l[2])&&(s=RegExp("</"+l[2],"g")),r=k):void 0!==l[3]&&(r=k):r===k?">"===l[0]?(r=null!=s?s:A,d=-1):void 0===l[1]?d=-2:(d=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?k:'"'===l[3]?C:E):r===C||r===E?r=k:r===x||r===S?r=A:(r=k,s=void 0);const h=r===k&&e[t+1].startsWith("/>")?" ":"";n+=r===A?i+b:d>=0?(o.push(a),i.slice(0,d)+"$lit$"+i.slice(d)+g+h):i+g+(-2===d?(o.push(void 0),t):h)}const a=n+(e[i]||"<?>")+(2===t?"</svg>":"");return[void 0!==m?m.createHTML(a):a,o]};class R{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let s=0,n=0;const r=e.length-1,a=this.parts,[l,d]=z(e,t);if(this.el=R.createElement(l,i),H.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(o=H.nextNode())&&a.length<r;){if(1===o.nodeType){if(o.hasAttributes()){const e=[];for(const t of o.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(g)){const i=d[n++];if(e.push(t),void 0!==i){const e=o.getAttribute(i.toLowerCase()+"$lit$").split(g),t=/([.?@])?(.*)/.exec(i);a.push({type:1,index:s,name:t[2],strings:e,ctor:"."===t[1]?G:"?"===t[1]?B:"@"===t[1]?V:L})}else a.push({type:6,index:s})}for(const t of e)o.removeAttribute(t)}if(j.test(o.tagName)){const e=o.textContent.split(g),t=e.length-1;if(t>0){o.textContent=p?p.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],y()),H.nextNode(),a.push({type:2,index:++s});o.append(e[t],y())}}}else if(8===o.nodeType)if(o.data===f)a.push({type:2,index:s});else{let e=-1;for(;-1!==(e=o.data.indexOf(g,e+1));)a.push({type:7,index:s}),e+=g.length-1}s++}}static createElement(e,t){const i=v.createElement("template");return i.innerHTML=e,i}}function N(e,t,i=e,o){var s,n,r,a;if(t===I)return t;let l=void 0!==o?null===(s=i._$Cl)||void 0===s?void 0:s[o]:i._$Cu;const d=w(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===d?l=void 0:(l=new d(e),l._$AT(e,i,o)),void 0!==o?(null!==(r=(a=i)._$Cl)&&void 0!==r?r:a._$Cl=[])[o]=l:i._$Cu=l),void 0!==l&&(t=N(e,l._$AS(e,t.values),l,o)),t}class O{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:i},parts:o}=this._$AD,s=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:v).importNode(i,!0);H.currentNode=s;let n=H.nextNode(),r=0,a=0,l=o[0];for(;void 0!==l;){if(r===l.index){let t;2===l.type?t=new D(n,n.nextSibling,this,e):1===l.type?t=new l.ctor(n,l.name,l.strings,this,e):6===l.type&&(t=new F(n,this,e)),this.v.push(t),l=o[++a]}r!==(null==l?void 0:l.index)&&(n=H.nextNode(),r++)}return s}m(e){let t=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class D{constructor(e,t,i,o){var s;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cg=null===(s=null==o?void 0:o.isConnected)||void 0===s||s}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=N(this,e,t),w(e)?e===T||null==e||""===e?(this._$AH!==T&&this._$AR(),this._$AH=T):e!==this._$AH&&e!==I&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.S(e):_(e)?this.M(e):this.$(e)}A(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}S(e){this._$AH!==e&&(this._$AR(),this._$AH=this.A(e))}$(e){this._$AH!==T&&w(this._$AH)?this._$AA.nextSibling.data=e:this.S(v.createTextNode(e)),this._$AH=e}T(e){var t;const{values:i,_$litType$:o}=e,s="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=R.createElement(o.h,this.options)),o);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===s)this._$AH.m(i);else{const e=new O(s,this),t=e.p(this.options);e.m(i),this.S(t),this._$AH=e}}_$AC(e){let t=U.get(e.strings);return void 0===t&&U.set(e.strings,t=new R(e)),t}M(e){$(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const s of e)o===t.length?t.push(i=new D(this.A(y()),this.A(y()),this,this.options)):i=t[o],i._$AI(s),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cg=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class L{constructor(e,t,i,o,s){this.type=1,this._$AH=T,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=T}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,o){const s=this.strings;let n=!1;if(void 0===s)e=N(this,e,t,0),n=!w(e)||e!==this._$AH&&e!==I,n&&(this._$AH=e);else{const o=e;let r,a;for(e=s[0],r=0;r<s.length-1;r++)a=N(this,o[i+r],t,r),a===I&&(a=this._$AH[r]),n||(n=!w(a)||a!==this._$AH[r]),a===T?e=T:e!==T&&(e+=(null!=a?a:"")+s[r+1]),this._$AH[r]=a}n&&!o&&this.k(e)}k(e){e===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class G extends L{constructor(){super(...arguments),this.type=3}k(e){this.element[this.name]=e===T?void 0:e}}class B extends L{constructor(){super(...arguments),this.type=4}k(e){e&&e!==T?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class V extends L{constructor(e,t,i,o,s){super(e,t,i,o,s),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=N(this,e,t,0))&&void 0!==i?i:T)===I)return;const o=this._$AH,s=e===T&&o!==T||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==T&&(o===T||s);s&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class F{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){N(this,e)}}const W={P:"$lit$",V:g,L:f,I:1,N:z,R:O,D:_,j:N,H:D,O:L,F:B,B:V,W:G,Z:F};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var J,q,X;null===(h=globalThis.litHtmlPolyfillSupport)||void 0===h||h.call(globalThis,R,D),(null!==(u=globalThis.litHtmlVersions)&&void 0!==u?u:globalThis.litHtmlVersions=[]).push("2.0.0");class Q extends c{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=M(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!1)}render(){return I}}Q.finalized=!0,Q._$litElement$=!0,null===(J=globalThis.litElementHydrateSupport)||void 0===J||J.call(globalThis,{LitElement:Q}),null===(q=globalThis.litElementPolyfillSupport)||void 0===q||q.call(globalThis,{LitElement:Q}),(null!==(X=globalThis.litElementVersions)&&void 0!==X?X:globalThis.litElementVersions=[]).push("3.0.0"),String(Math.random()).slice(2),
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
window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e});
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
let K,Z=!1;(()=>{try{const e={get capture(){return Z=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})(),
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
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");let Y=0;function ee(e){K=e}function te(){K=null,Y=0}const ie=Symbol("haunted.phase"),oe=Symbol("haunted.hook"),se=Symbol("haunted.update"),ne=Symbol("haunted.commit"),re=Symbol("haunted.effects"),ae=Symbol("haunted.layoutEffects");class le{update;host;virtual;[oe];[re];[ae];constructor(e,t){this.update=e,this.host=t,this[oe]=new Map,this[re]=[],this[ae]=[]}run(e){ee(this);let t=e();return te(),t}_runEffects(e){let t=this[e];ee(this);for(let e of t)e.call(this);te()}runEffects(){this._runEffects(re)}runLayoutEffects(){this._runEffects(ae)}teardown(){this[oe].forEach((e=>{"function"==typeof e.teardown&&e.teardown()}))}}const de=Promise.resolve().then.bind(Promise.resolve());function ce(){let e,t=[];function i(){e=null;let i=t;t=[];for(var o=0,s=i.length;o<s;o++)i[o]()}return function(o){t.push(o),null==e&&(e=de(i))}}const he=ce(),ue=ce();class pe{renderer;host;state;[ie];_updateQueued;constructor(e,t){this.renderer=e,this.host=t,this.state=new le(this.update.bind(this),t),this[ie]=null,this._updateQueued=!1}update(){this._updateQueued||(he((()=>{let e=this.handlePhase(se);ue((()=>{this.handlePhase(ne,e),ue((()=>{this.handlePhase(re)}))})),this._updateQueued=!1})),this._updateQueued=!0)}handlePhase(e,t){switch(this[ie]=e,e){case ne:return this.commit(t),void this.runEffects(ae);case se:return this.render();case re:return this.runEffects(re)}this[ie]=null}render(){return this.state.run((()=>this.renderer.call(this.host,this.host)))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}}function me(e){class t extends pe{frag;constructor(e,t,i){super(e,i||t),this.frag=t}commit(t){e(t,this.frag)}}return function(e,i,o){const s=(o||i||{}).baseElement||HTMLElement,{observedAttributes:n=[],useShadowDOM:r=!0,shadowRootInit:a={}}=o||i||{};class l extends s{_scheduler;static get observedAttributes(){return e.observedAttributes||n||[]}constructor(){super(),!1===r?this._scheduler=new t(e,this):(this.attachShadow({mode:"open",...a}),this._scheduler=new t(e,this.shadowRoot,this))}connectedCallback(){this._scheduler.update()}disconnectedCallback(){this._scheduler.teardown()}attributeChangedCallback(e,t,i){if(t===i)return;let o=""===i||i;Reflect.set(this,((e="")=>e.replace(/-+([a-z])?/g,((e,t)=>t?t.toUpperCase():"")))(e),o)}}const d=new Proxy(s.prototype,{getPrototypeOf:e=>e,set(e,t,i,o){let s;return t in e?(s=Object.getOwnPropertyDescriptor(e,t),s&&s.set?(s.set.call(o,i),!0):(Reflect.set(e,t,i,o),!0)):(s="symbol"==typeof t||"_"===t[0]?{enumerable:!0,configurable:!0,writable:!0,value:i}:function(e){let t=e,i=!1;return Object.freeze({enumerable:!0,configurable:!0,get:()=>t,set(e){i&&t===e||(i=!0,t=e,this._scheduler&&this._scheduler.update())}})}(i),Object.defineProperty(o,t,s),s.set&&s.set.call(o,i),!0)}});return Object.setPrototypeOf(l.prototype,d),l}}class ge{id;state;constructor(e,t){this.id=e,this.state=t}}function fe(e,...t){let i=Y++,o=K[oe],s=o.get(i);return s||(s=new e(i,K,...t),o.set(i,s)),s.update(...t)}function be(e){return fe.bind(null,e)}function ve(e){return be(class extends ge{callback;lastValues;values;_teardown;constructor(t,i,o,s){super(t,i),e(i,this)}update(e,t){this.callback=e,this.values=t}call(){this.values&&!this.hasChanged()||this.run(),this.lastValues=this.values}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(){"function"==typeof this._teardown&&this._teardown()}hasChanged(){return!this.lastValues||this.values.some(((e,t)=>this.lastValues[t]!==e))}})}function ye(e,t){e[re].push(t)}const we=ve(ye),$e=be(class extends ge{Context;value;_ranEffect;_unsubscribe;constructor(e,t,i){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,ye(t,this)}update(e){if(this.state.virtual)throw new Error("can't be used with virtual components");return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const t={Context:e,callback:this._updater};this.state.host.dispatchEvent(new CustomEvent("haunted.context",{detail:t,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:i=null,value:o}=t;this.value=i?o:e.defaultValue,this._unsubscribe=i}teardown(){this._unsubscribe&&this._unsubscribe()}});be(class extends ge{value;values;constructor(e,t,i,o){super(e,t),this.value=i(),this.values=o}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some(((e,t)=>this.values[t]!==e))}}),ve((function(e,t){e[ae].push(t)}));const _e=be(class extends ge{args;constructor(e,t,i){super(e,t),this.updater=this.updater.bind(this),"function"==typeof i&&(i=i()),this.makeArgs(i)}update(){return this.args}updater(e){if("function"==typeof e){const t=e,[i]=this.args;e=t(i)}this.makeArgs(e),this.state.update()}makeArgs(e){this.args=Object.freeze([e,this.updater])}});
/**
 * @license
 * Portions Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Promise.resolve(),be(class extends ge{reducer;currentState;constructor(e,t,i,o,s){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=void 0!==s?s(o):o}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}});const{component:Ae}=function({render:e}){const t=me(e),i=function(e){return t=>{const i={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.listeners=new Set,this.addEventListener("haunted.context",this)}disconnectedCallback(){this.removeEventListener("haunted.context",this)}handleEvent(e){const{detail:t}=e;t.Context===i&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),e.stopPropagation())}unsubscribe(e){this.listeners.delete(e)}set value(e){this._value=e;for(let t of this.listeners)t(e)}get value(){return this._value}},Consumer:e((function({render:e}){return e($e(i))})),defaultValue:t};return i}}(t);return{component:t,createContext:i}}({render:M}),xe=P`
  <style>
    :host {
      position: relative;
      display: block;
      min-height: 100vh;
    }

    main {
      padding-top: 3.25rem;
      padding-bottom: 3.25rem;
    }

    section {
      padding-top: 4rem;
      padding-bottom: 4rem;
      padding-left: 1rem;
      padding-right: 1rem;
    }

    section.jumbo {
      padding-top: 2rem;
      padding-bottom: 2rem;
      text-align: center;
    }

    .jumbo h1 {
      font-size: 4rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: .15rem;
      margin-bottom: 1rem;
    }

    .jumbo h2 {
      font-size: 1.5rem;
    }

    section.summary p {
      margin: 0 0 1rem 0;
      font-size: 1.1rem;
      font-weight: 400;
      line-height: 2.2rem;
    }

    section.summary p a {
      text-decoration: none;
      font-weight: 500;
      color: hsl(211deg 100% 25% / 90%);
    }

    .container {
      display: block;
      max-width: 40rem;
      margin: 0 auto;
    }

    .date {
      margin-left: 0.5rem;
    }

    section.experience h1 {
      margin-bottom: 2rem;
      margin-top: 0;
      font-size: 2rem;
    }

    .job {
      margin-top: 3rem;
    }

    .job h2.title {
      margin-top: 0;
      font-size: 1.17rem;
      font-weight: 500;
    }

    .job p.summary {
      margin-top: .5rem;
      margin-bottom: 0;
      font-size: 1.17rem;
      font-weight: 400;
      line-height: 2rem;
    }

    footer {
      position: absolute;
      bottom: 0;
      height: 3.25rem;
      width: 100%;
      background-color: #f0f0f0;
    }

    footer a {
      padding-top: 1rem;
      padding-bottom: 1rem;
      font-size: .75rem;
    }

    footer .container {
      display: flex;
      flex: 1 1 auto;
      padding-left: 1rem;
      padding-right: 1rem;
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

    .cranberry {
      color: #c11067;
    }

    .navy {
      color: rgba(0, 32, 66, 0.9);
    }

    .cursor-pointer {
      cursor: pointer;
    }

    .button-transparent {
      position: relative;
      z-index: 2;
      color: inherit;
      background-color: transparent;
      border-radius: 0;
      border: 1px solid transparent;
    }

    .button, button {
      font-family: inherit;
      font-weight: 600;
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
      transition: background-color .15s cubic-bezier(0.645, 0.045, 0.355, 1.000);
    }

    .button:hover, .button:focus {
      background-color: rgb(115 179 221 / 17%);
    }

    .button:focus, button:focus, a:focus {
      outline: 2px solid hsl(211deg 100% 40% / 90%)!important;
    }

    .button:focus, button:focus {
      outline-offset: -2px!important;
    }
  </style>
`;function Se(e){return e.toLowerCase().replace(/[^a-z0-9]+/gi,"-")}
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ke({setNavFocus:e,setProject:t}){var i;i=i=>async function({location:e,setNavFocus:t,setProject:i}){const o=new URLSearchParams(e.search);if(o.has("project")){const e=o.get("project");if(!e)return;return i(decodeURIComponent(e)),void t("#visuals")}i(""),t(e.hash)}({location:i,setNavFocus:e,setProject:t}),document.body.addEventListener("click",(e=>{if(e.defaultPrevented||0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)return;const t=e.composedPath().filter((e=>"A"===e.tagName))[0];if(!t||t.target||t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;const o=t.href;if(!o||-1!==o.indexOf("mailto:"))return;const s=window.location,n=s.origin||s.protocol+"//"+s.host;0===o.indexOf(n)&&(e.preventDefault(),o!==s.href&&(window.history.pushState({},"",o),i(s,e)))})),window.addEventListener("popstate",(e=>i(window.location,e))),i(window.location,null)}var Ee;!function(e){e.HEADER="nav-bar",e.PROJECT_IMAGE=".image-container img",e.SEARCH_INPUT='input[type="search"]'}(Ee||(Ee={}));const Ce=P`
  <section id="summary" class="jumbo navy">
    <h1>Jory Phillips</h1>
    <h2>do-gooder; designer & front-end developer</h2>
  </section>
`,je=P`
  <section class="summary">
    <div class="container">
      <p>My specialty is bridging big-picture concepts with detailed
        implementation. I seek projects that help people navigate and understand
        complex things, or simply make people's lives better.</p>
      <p>I have designed & developed apps for Google, helped a branding agency
        brand itself, and created design guidelines and illustrations for major
        cities and a movie studio/theme park. I've led teams that make
        complicated stuff, and I am often eager to attempt the impossible.</p>
        <p>Want to collaborate?
        <a href="javascript:location='mailto:\u006a\u006f\u0072\u0079\u002e\u006c\u002e\u0070\u0068\u0069\u006c\u006c\u0069\u0070\u0073\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d';void 0">
        Please reach out!</a></p>
    </div>
  </section>
`,Pe=[{title:"Mock for plan review UI",date:"2021",description:"A high-fidelity mock for a user interface allowing fluid communication between an agency and applicant.",imageSources:["plan_review_mock.jpg"],keywords:["software","ux","ui","mock","communication"]},{title:"front-end tech lead",date:"2020-2021",description:"I was the tech lead for a team of front-end engineers working within the design systems management branch of Material. I prototyped features, led building a production-grade app for managing tokens and design system details, and mentored and helped other engineers add features.",imageSources:["Google_Material_Design_Logo.svg"],keywords:["software","typescript","tooling","develop","engineer","Google","Material"]},{title:"Gallery.io web engineering",date:"2019",description:"Google's Material Gallery web appplication evolved from iterations of earlier prototype applications written in ES5-era AngularJS. I led team-wide efforts to modernize the application, resulting in thousands of tech debt issues closed, more dev-friendly componentization, and a bundle size reduction of at least 33%. While the app is being turned down due to the popularity of Figma, I am very proud of the progress we made on it and the lessons it taught.",href:"https://gallery.io",imageSources:["gallery.jpg"],keywords:["software","typescript","tooling","modernization","develop","engineer","Google","Material"]},{title:"web performance analysis",date:"2020",href:"https://github.com/joryphillips/joryphillips.github.io/issues/8#issuecomment-611778792",imageSources:["web-perf.png"],keywords:["software","develop","engineer","performance","tooling"],description:"I did a performance assessment on my own website and wrote up findings in a GitHub issue. If you know of a page that is loading too slowly, the methods I applied might help!"},{title:"full app design for Android Build",imageSources:["test-result-details.png"],keywords:["ux","ui","develop","Google","Android","typescript","mock"],description:"I was the only UXer on the Android Build team for a while, which meant I got to lead the design of some very complex things, like this tool used to help engineers chase down broken builds and failing tests. This was an early mock, and most of what is represented here has been built and refined by the team."},{title:"build and test status wireframe",imageSources:["target-row-pies-wireframe.jpg"],keywords:["ux","ui","wireframe","Google","Android"],description:"This was a quick ugly iPad drawing done to visually prove out the concept of integrating complex test and basic build status information. It was then engineered by me and others on the Android Build team. I implemented a pretty sweet web component for displaying those test results pie charts, too. 😁 🥧"},{title:"concept diagrams",imageSources:["grid-test-views@3x.png"],keywords:["conceptual","diagram","communication","Google","Android"],description:"These are a couple conceptual diagrams used to discuss the multidimensional complexity of tracking builds, tests, and devices. Included here mostly to add additional visual interest. 🙃"},{title:"notification CRUD app",imageSources:["notification-crud-edit.png"],keywords:["ux","ui","develop","Google","Android","typescript"],description:"I designed and implemented a tool for adding, editing, and removing system alerts across Android internal sites."},{title:"lightweight webpage generator",imageSources:["ux-page-crud.png"],keywords:["ux","ui","develop","Google","Android"],description:"I made web app that allowed Google teams to generate their own internal sites, pulling content from Sheets, Drive, custom Markdown, and Google's internal bug reporting tool. This tool helped get at least two versions of Android OS get designed and shipped on time."},{title:"mojibrush.co ui/ux + oss contributions",imageSources:["moji-brush.png"],href:"https://mojibrush.co",keywords:["ux","ui","develop","fun"],description:"I wireframed the UI & UX for this spectacular progressive web app on a pizza box in a microkitchen, then helped build it."},{title:"make a webpage from Google Sheets",imageSources:["ux-sheet-stepper.png"],keywords:["ux","ui","develop","Google","Android"],description:"At Google there is a common need to quickly spin up websites that pull content from Google Sheets. I made a web app that allowed people to make pages that do that, and walked them through validation, column select, sort options, etc."},{title:"four shipped Material emoji",imageSources:["four-material-emoji.svg"],keywords:["illustration","Material","fun","Google","Android"],description:"I designed these four emoji for the release of Android 6. Almost all emojis have been updated since then, but my design for Reminder Ribbon got put back into use for Android 12!"},{title:"imagery exploration",imageSources:["dichotomy-01.jpg"],keywords:["presentation","conceptual","communication","Google","Android"],description:"Every designer and presenter eventually has to come up with imagery that helps convey a problem or a solution. This is one I made to help in a presentation about device notification overload."},{title:"identity/branding illustrations",imageSources:["droid-4-up.svg"],keywords:["illustration","fun","Google","Android"],description:"I designed these for the Android UX research team as an exercise in helping them achieve brand cohesiveness. The Android figurine is beloved among research participants, making it ideal as a character-defining visual representation for Android researchers."},{title:"dancing t-rex",imageSources:["dancing-dino.gif"],keywords:["fun","Google","Android"],description:"I did not design this dinosaur, but I did make him dance."},{title:"Global Brand Works Website",date:"2015",imageSources:["gbw.jpg"],description:"I designed and developed the Global Brand Works website with legibility, navigation, and mobile readiness in mind. The site was completely custom-built and the overall design direction has been steadfast for a half decade! For a time, I also served as the Creative Director for this boutique branding agency and helped their clients with general design, graphic, and presentation needs.",href:"https://globalbrandworks.com/",keywords:["ux","ui","develop","communication","freelance"]},{title:"Wall Clock Product Design/Prototype",date:"2010",imageSources:["heathrow-clock.svg"],description:"Tasked with coming up with product ideas that could build upon notNeutral's (Rios Clementi Hale Studio's product design brand) successful CityPlates, I started analyzing aerial photographs of different cities for inspiration. I was especially drawn to the way airports look from above. This London Heathrow graphic was originally presented as an idea for a large-scale wall graphic and clock, with the runways as moving hands. Here I have streamlined the original Illustrator file with SVG and used Javascript to make it a functional time-telling graphic.",keywords:["conceptual","prototyping","maps"]},{title:"Mapping & Data Analysis",date:"2009",imageSources:["pub-facilities-map.svg"],description:"I designed and created this map in Adobe Illustrator after exporting the data from ArcGIS. The map was originally used at multiple scales in a presentation to elected officials and planners to describe the abundance of public facilities within five miles of the Univeral Studios site. The icons are based on universally-recognized symbols for the activities they represent.",keywords:["conceptual","urban design","urban planning","communication","maps"]},{title:"Universal Studios Master Plan",date:"2011",imageSources:["usmp.png"],description:"While working at Rios Clementi Hale Studios, I produced materials and coordinated a team of multidisciplinary designers to help Universal Studios create an 'entitlement package' that adopted their new master plan. The project's needs constantly shifted, and included maintaining a building inventory, creating view simulations, 3D modeling, mapping, diagramming, and preparing various presentation materials. This important plan was subsequently adopted by the City of Los Angeles and the County of Los Angeles.",keywords:["urban design","urban planning","communication"]},{title:"not a real emoji",imageSources:["incredulous_goat.png"],keywords:["fun","goat","emoji"],description:"Like the dancing t-rex, I designed neither the goat, nor the sunglasses, but I did put one on the other to make a superior emoji."}];const Ie=P`
  <section id="experience" class="experience">
    <div class="container">
      <h1>Experience</h1>
      <div class="job-holder">
        ${[{date:"Sept 2015 - Sept 2021",place:"Google, UX Engineer",summary:"Designed & developed apps, UIs, widgets & ways to share & shape actionable information. Started as web designer; finished as a tech lead.",detail:"Developed a web app from conception through implementation to allow the Android UX team to better share their work. Developed a rapid prototyping app for the Google Store UX team. Designed and developed a web app for UX researchers to store, find, and share study findings. Also designed identity-building illustrations and several shipped Material-design emoji."},{date:"Jan 2014 - Sept 2015",place:"Freelance Designer/Developer",summary:"Designed & built web sites, apps, presentations; general design consulting.",detail:"Designed and developed a handful of client websites, also providing messaging, content advice, graphic design, and production. Developed a prototype/MVP web app to help medical clinics with green business guidelines. Consulted as a Creative Director for a boutique branding firm, including communication, visual design, and technical advice."},{date:"Aug 2011 - Dec 2013",place:"City of Santa Monica",summary:"Revised framework for future development; managed  engagement & analysis; delivered lots of presentations.",detail:"Led effort to rewrite City's zoning code. Designed and produced multi-platform content: reports, presentations, graphics, engagement materials for print, broadcast, and web. Result: a draft zoning ordinance for public review."},{date:"Jul 2008 - Aug 2011",place:"Rios Clementi Hale Studios",summary:"Bridged the gap between design and law to help move a significant destination and economic engine forward.",detail:"Helped get the Universal Studios Master Plan adopted. Design, coordination, and production of conceptual drawings, illustrations, 3D models, multi-format presentations, maps, layout & publishing of documents, and other materials."},{date:"May 2006 - Jul 2008",place:"City of West Hollywood",summary:"Analyzed & delivered recommendations regarding other people's well-designed, and not well-designed, development proposals.",detail:"Analysis and presentation of urban design and planning-related issues."},{date:"Apr 2000 - Feb 2006",place:"City of Seattle",summary:"Led major policy changes to help make Seattle more livable, walkable, and sustainable.",detail:"Produced plans, reports, graphics, and presentations leading to tangible improvements in Seattle's physical environment. First urban planner at the City of Seattle to use digital 3D modeling to inform outreach and analysis related to changes to zoning and building typologies."},{date:"Aug 1997 - April 2000",place:"Arai/Jackson Architects & Planners",summary:"Designed & produced posters and giant documents; learned to manage projects; learned from plenty of mistakes.",detail:"Design, production, content of various urban design and planning projects."}].map((e=>function(e){return P`
    <div class="job">
      <h2 class="title">
        <span class="cranberry">${e.place}</span>
        <span class="regular date">${e.date}</span>
      </h2>
      <p class="summary">${e.summary}</p>
    </div>
  `}(e)))}
      </div>
    </div>
  </section>
`,Te=P`
  <footer class="navy border-top">
    <div class="container">
      <a href="https://www.linkedin.com/in/joryphillips" class="button button-transparent">linkedin</a>
      <a class="button button-transparent" href="javascript:location='mailto:\u006a\u006f\u0072\u0079\u002e\u006c\u002e\u0070\u0068\u0069\u006c\u006c\u0069\u0070\u0073\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d';void 0">email</a>
      <a href="https://github.com/joryphillips/joryphillips.github.io" class="button button-transparent">src</a>
    </div>
  </footer>
`,Ue=P`
  <style>
    :host {
      z-index: 2;
      height: 3.25rem;
      left: 0;
      right: 0;
      top: 0;
      position: fixed;
      background-color: #f0f0f0;
      border-bottom-style: solid;
      border-bottom-width: 1px;
      border-bottom-color: rgba(0, 0, 0, .125);
    }

    nav {
      display: flex;
      flex: 1 1 auto;
      max-width: 40rem;
      margin: 0 auto;
    }

    .navy {
      color: rgba(0, 32, 66, 0.9);
    }

    a {
      position: relative;
      float: left;
      z-index: 2;
      padding: 1rem;
      font-family: inherit;
      font-weight: 600;
      text-decoration: none;
      cursor: pointer;
      line-height: 1.125rem;
      vertical-align: middle;
      -webkit-appearance: none;
      transition: background-color .15s cubic-bezier(0.645, 0.045, 0.355, 1.000);
      color: inherit;
      background-color: transparent;
      border-radius: 0;
      border: 1px solid transparent;
    }

    a:focus {
      background-color: rgb(115 179 221 / 17%);
      outline: 2px solid hsl(211deg 100% 40% / 90%)!important;
      outline-offset: -2px!important;
    }
  </style>
`;customElements.define("nav-bar",Ae((function({navFocus:e="",onNavSelect:t}){return we((()=>{!function(e,t){const i=t.shadowRoot?.querySelectorAll("a");if(!i)return;if(!e){for(const e of Array.from(i))e.blur();return}Array.from(i).find((t=>t.hash===e))?.focus()}(e,this)}),[e]),P`
    ${Ue}

    <header class="navy">
      <nav>
        <a href="/#summary" @click=${t}>Summary</a>
        <a href="/#visuals" @click=${t}>Visuals</a>
        <a href="/#experience" @click=${t}>Experience</a>
      </nav>
    </header>
  `})));
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Me=1,He=2,ze=e=>(...t)=>({_$litDirective$:e,values:t});class Re{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{H:Ne}=W,Oe=()=>document.createComment(""),De=(e,t,i)=>{var o;const s=e._$AA.parentNode,n=void 0===t?e._$AB:t._$AA;if(void 0===i){const t=s.insertBefore(Oe(),n),o=s.insertBefore(Oe(),n);i=new Ne(t,o,e,e.options)}else{const t=i._$AB.nextSibling,r=i._$AM,a=r!==e;if(a){let t;null===(o=i._$AQ)||void 0===o||o.call(i,e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==r._$AU&&i._$AP(t)}if(t!==n||a){let e=i._$AA;for(;e!==t;){const t=e.nextSibling;s.insertBefore(e,n),e=t}}}return i},Le=(e,t,i=e)=>(e._$AI(t,i),e),Ge={},Be=e=>{var t;null===(t=e._$AP)||void 0===t||t.call(e,!1,!0);let i=e._$AA;const o=e._$AB.nextSibling;for(;i!==o;){const e=i.nextSibling;i.remove(),i=e}},Ve=(e,t,i)=>{const o=new Map;for(let s=t;s<=i;s++)o.set(e[s],s);return o},Fe=ze(class extends Re{constructor(e){if(super(e),e.type!==He)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let o;void 0===i?i=t:void 0!==t&&(o=t);const s=[],n=[];let r=0;for(const t of e)s[r]=o?o(t,r):r,n[r]=i(t,r),r++;return{values:n,keys:s}}render(e,t,i){return this.dt(e,t,i).values}update(e,[t,i,o]){var s;const n=(e=>e._$AH)(e),{values:r,keys:a}=this.dt(t,i,o);if(!Array.isArray(n))return this.ct=a,r;const l=null!==(s=this.ct)&&void 0!==s?s:this.ct=[],d=[];let c,h,u=0,p=n.length-1,m=0,g=r.length-1;for(;u<=p&&m<=g;)if(null===n[u])u++;else if(null===n[p])p--;else if(l[u]===a[m])d[m]=Le(n[u],r[m]),u++,m++;else if(l[p]===a[g])d[g]=Le(n[p],r[g]),p--,g--;else if(l[u]===a[g])d[g]=Le(n[u],r[g]),De(e,d[g+1],n[u]),u++,g--;else if(l[p]===a[m])d[m]=Le(n[p],r[m]),De(e,n[u],n[p]),p--,m++;else if(void 0===c&&(c=Ve(a,m,g),h=Ve(l,u,p)),c.has(l[u]))if(c.has(l[p])){const t=h.get(a[m]),i=void 0!==t?n[t]:null;if(null===i){const t=De(e,n[u]);Le(t,r[m]),d[m]=t}else d[m]=Le(i,r[m]),De(e,n[u],i),n[t]=null;m++}else Be(n[p]),p--;else Be(n[u]),u++;for(;m<=g;){const t=De(e,d[g+1]);Le(t,r[m]),d[m++]=t}for(;u<=p;){const e=n[u++];null!==e&&Be(e)}return this.ct=a,((e,t=Ge)=>{e._$AH=t})(e,d),I}}),We=ze(class extends Re{constructor(e){var t;if(super(e),e.type!==Me||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var i,o;if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.et=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!(null===(i=this.et)||void 0===i?void 0:i.has(e))&&this.st.add(e);return this.render(t)}const s=e.element.classList;this.st.forEach((e=>{e in t||(s.remove(e),this.st.delete(e))}));for(const e in t){const i=!!t[e];i===this.st.has(e)||(null===(o=this.et)||void 0===o?void 0:o.has(e))||(i?(s.add(e),this.st.add(e)):(s.remove(e),this.st.delete(e)))}return I}}),Je=P`
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

    input[type="search"]:focus {
      outline: 2px solid hsl(211deg 100% 40% / 90%)!important;
    }

    ul,
    ul li,
    ul ul li {
      margin:0;
      padding: 0;
      text-indent: 0;
      list-style-type: none;
    }

    ul[role="listbox"] {
      display: none;
      background-color: #FFF;
      border: 1px solid #ccc;
    }

    ul[role="listbox"], button[role="option"] {
      box-sizing: border-box;
      width: 100%;
    }

    ul[role="listbox"].show {
      display: block;
      position: absolute;
      z-index: 10;
      max-height: 200px;
      overflow-y: scroll;
    }

    li[role="option"] {
      background-color: #FFF;;
      border: none;
      border-bottom: 1px solid #ccc;
      font-size: inherit;
      text-align: left;
      padding: .5rem;
    }

    li[role="option"][active], li[role="option"]:hover {
      background-color: rgb(115 179 221 / 17%);
    }

    li:last-of-type  button[role="option"] {
      border-bottom: none;
    }
  </style>
`,qe=e=>e,Xe={behavior:"smooth",block:"nearest"};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */customElements.define("search-input",Ae((function({keyWords:e=new Set,handleSearchInput:t=qe}){const[i,o]=_e(!1),[s,n]=_e(void 0),[r,a]=_e(null),[l,d]=_e(""),c=this.shadowRoot?.querySelector("#listbox"),h=e=>{d(e),o(!i),t(e)};return P`
    ${Je}
    <div
      id="combobox"
      role="combobox"
      aria-expanded=${i}
      aria-owns="listbox"
      aria-haspopup="true">
    <label for="search" class="hide">Search</label>
      <input
        type="search"
        placeholder="search"
        aria-label="Search through projects"
        aria-controls="listbox"
        aria-autocomplete="list"
        autocomplete="off"
        .value=${l}
        @input=${e=>{const{value:i}=e.composedPath().find((e=>"INPUT"===e.tagName));s&&clearTimeout(s),n(window.setTimeout((()=>{t(i)}),350))}}
        @focus=${()=>{o(!0)}}
        @blur=${()=>{a(null),i&&o(!1)}}
        @keyup=${i=>{const{key:s}=i;switch(s){case"ArrowDown":(()=>{let t;o(!0),t=null==r||r===e.size-1?0:r+1,c&&c.children[t].scrollIntoView(Xe),a(t)})();break;case"ArrowUp":(()=>{let t;t=null==r||0===r?e.size-1:r-1,c&&c.children[t].scrollIntoView(Xe),a(t)})();break;case"Escape":t(""),a(null),o(!1);break;case"Enter":if(null==r)break;d([...e][r]),t([...e][r]),o(!1)}}}
      >
    </div>

    <ul
      id="listbox"
      role="listbox"
      aria-expanded=${i}
      class=${We({show:i})}
    >${[...e].map(((e,t)=>P`
        <li
          role="option"
          ?active=${t===r}
          @mousedown=${()=>h(e)}>${e}</li>
      `))}
    </ul>
  `})));const Qe=P`
  <style>
    :host {
      opacity: 1;
      transition: opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1.000);
    }

    .project-card-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: .25rem .5rem;
      height: 2rem;
    }

    :host([selected]) .project-card-title {
      padding: 2rem 0.5rem 1rem .5rem;
    }

    .info-icons, .info-icons .info, .info-icons .link {
      display: flex;
      align-items: center;
    }

    .info-icons .link {
      background-color: transparent;
      opacity: .7;
      padding: 0 0 0 0.7rem;
    }

    .info-icons .link:hover {
      opacity: 1;
    }

    .link img {
      width: 1.6rem;
      height: 1.6rem;
    }

    .link[hidden] {
      visibility: hidden;
    }

    h2.title {
      margin: 0;
      font-size: 1rem;
      font-weight: 500;
    }

    :host([selected]) h2.title {
      font-size: 1.5rem;
    }

    svg.width-100 {
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
      transition: box-shadow .15s cubic-bezier(0.645, 0.045, 0.355, 1.000);
    }

    @media screen and (max-width: 400px) {
      .image-container {
        height: 150px;
      }
      :host([selected]) .image-container {
        height: 300px;
      }
    }

    @media screen and (min-width: 600px) {
      :host([selected]) .image-container {
        height: 600px;
      }
    }

    :host([selected]) a.image-container {
      pointer-events: none;
    }

    a.image-container:focus {
      outline: 2px solid hsl(211deg 100% 40% / 90%)!important;
    }

    a.image-container:focus, a.image-container:hover {
      box-shadow: 0px 1px 6px 0px #8C8C8C;
    }

    .image-container img {
      opacity: 0;
      transition: opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1.000), scale3d 0.2s cubic-bezier(0.645, 0.045, 0.355, 1.000);
    }

    .image-container:hover img.visible,
    :host([selected]) .image-container img.visible {
      opacity: 1;
    }

    .image-container img.visible {
      opacity: .95;
    }

    .image-container > * {
      display: block;
      max-width: 100%;
      max-height: 100%;
    }

    a {
      font-family: inherit;
      font-weight: 700;
      text-decoration: none;
      cursor: pointer;
      line-height: 1.125rem;
      margin: 0;
      height: auto;
    }

    .visible-hidden {
      clip: rect(1px, 1px, 1px, 1px);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }
  </style>
`;function Ke(e){const t=e.shadowRoot?.querySelector(Ee.PROJECT_IMAGE);t&&t.dataset.src&&(t.src=t.dataset.src,async function(e,t){e.src.indexOf("heathrow-clock.svg")>-1&&(await import("./clock-1b9e457b.js")).addClockPrototype(e,t)}(t,e),t.classList.add("visible"))}customElements.define("project-card",Ae((function({project:e,selected:t}){we((()=>{!function({element:e,onIntersection:t,unobserve:i=!0,options:o}){const s=new IntersectionObserver((e=>{for(const o of e)o.isIntersecting&&(t(o.target),i&&s.unobserve(o.target))}),o);s.observe(e)}({element:this,onIntersection:Ke})}),[]);const i="./images/"+e.imageSources[0],o=encodeURIComponent(Se(e.title));return P`
    ${Qe}

    <a
      tabindex=${t?-1:0}
      href="/?project=${o}"
      class="image-container"
      aria-label="Get more project info"
    ><img
        class="image block"
        data-src="${i}"
        alt="image of ${e.title}">
    </a>
    <div class="project-card-title">
      <h2 class="title">${e.title}</h2>
      <div class="info-icons">
        ${e.href?P`
          <a class="link" href="${e.href}">
            <img src="${"./images/"}launch-black-18dp.svg" alt="External link">
            <span class="visible-hidden">Go to project reference</span>
          </a>
        `:null}
      </div>
    </div>
  `}),{observedAttributes:["selected"]}));const Ze=P`
  <style>
    section {
      background-color: #ddd;
      padding-top: 4rem;
      padding-bottom: 4rem;
      padding-left: 2rem;
      padding-right: 2rem;
    }
    @media (max-width: 400px) {
      section {
        padding-left: 1rem;
        padding-right: 1rem;
      }
    }
    .visuals-header {
      display: flex;
      align-items: baseline;
      flex-wrap: wrap;
      margin-bottom: 2rem;
    }
    h1 {
      font-size: 2rem;
      flex: 1 1 auto;
      min-width: 0;
      min-height: 0;
      margin: 0 1rem .5rem 0;
      white-space: nowrap;
    }
    .project-holder {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1rem;
      grid-auto-rows: minmax(300px, auto);
    }
    @media screen and (max-width: 400px) {
      .project-holder {
        grid-auto-rows: minmax(150px, auto);
      }
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
`;customElements.define("project-list",Ae((function({setSelectedProjectName:e}){const[t,i]=_e(""),o=Pe.filter((e=>function(e,t){const{keywords:i,title:o}=t;return function(e,t){let i=!1;const o=e.toLowerCase().split(" ");for(let e=0;e<o.length;e++){const s=o[e].trim();i=t.toLowerCase().includes(s)}return i}(e,i.join(" ")+" "+o.toLowerCase())}(t,e)));return P`
    ${Ze}

    <section class="border-bottom border-top">
      <div class="visuals-header">
        <h1>Visuals & Projects</h1>
        <search-input
          .keyWords=${function(e){const t=new Set;if(e)for(const i of e)for(const e of i.keywords)t.add(e.toLowerCase());return t}(Pe)}
          .handleSearchInput=${e=>{i(e)}}
        ></search-input>
      </div>

      <div class="project-holder">
        ${Fe(o,(e=>Se(e.title)),(t=>P`
              <project-card
                .project=${t}
                .handleInfoClick=${e}
              ></project-card>
            `))}
      </div>
    </section>
  `})));const Ye=P`
  <style>
    :host {
      display: block;
      padding-top: 5.25rem;
      padding-bottom: 3.25rem;
      padding-left: 2rem;
      padding-right: 2rem;
      opacity: 1;
      transition: opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1.000);
    }

    .description {
      margin: .5rem;
      line-height: 1.7;
    }

    a {
      display: flex;
      align-items: center;
      width: 12rem;
      margin: 1rem 0;
      text-decoration: none;
      font-weight: 500;
      color: hsl(211deg 100% 25% / 90%);
      fill: hsl(211deg 100% 25% / 90%);
    }

    a > * {
      margin-right: 0.5rem;
    }

  </style>
`;customElements.define("project-detail",Ae((function({projectName:e}){const t=Pe.find((t=>Se(t.title)===e));return t?P`
    ${Ye}

    <project-card
      selected
      .project=${t}
    ></project-card>

    <p class="description">${t.description}</p>
    <a
      href='/'
      aria-label="Close detail and return to full project list"
    >
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
    Back to project list</a>
  `:P`<div>No project found</div>`}))),customElements.define("app-component",Ae((function(){const[e,t]=_e(""),[i,o]=_e(""),[s,n]=_e(void 0);we((()=>{ke({setNavFocus:t,setProject:r})}),[]),we((()=>{!e||i||s||function(e,t){if(!t)return;e.querySelector(t).scrollIntoView()}(this.shadowRoot,e)}),[e,i,s]),we((()=>{i||null==s||scrollTo({top:s})}),[s,i]);const r=e=>{if(e){n(window.scrollY);const t=Pe.find((t=>Se(t.title)===e))?.title;document.title=`Jory's ${t} Project`}else document.title="Jory Phillips Portfolio and Resume";o(e)};return P`
    ${xe}

    <nav-bar .navFocus=${e} .onNavSelect=${()=>{n(void 0)}}></nav-bar>
      <main ?hidden=${!!i}>
        ${Ce}
        ${je}
        <project-list
          id="visuals"
          .setSelectedProjectName=${r}
        ></project-list>
        ${Ie}
      </main>
      <project-detail
        ?hidden=${!i}
        .projectName=${i}
      ></project-detail>

    ${Te}
  `})));
//# sourceMappingURL=app.js.map
