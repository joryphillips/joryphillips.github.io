/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e$4=Symbol(),n$3=new Map;class s$3{constructor(t,n){if(this._$cssResult$=!0,n!==e$4)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t;}get styleSheet(){let e=n$3.get(this.cssText);return t$2&&void 0===e&&(n$3.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o$4=t=>new s$3("string"==typeof t?t:t+"",e$4),i$3=(e,n)=>{t$2?e.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((t=>{const n=document.createElement("style"),s=window.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=t.cssText,e.appendChild(n);}));},S$1=t$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return o$4(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$2,e$3;const r$2={toAttribute(t,i){switch(i){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},h$1=(t,i)=>i!==t&&(i==i||t==t),o$3={attribute:!0,type:String,converter:r$2,reflect:!1,hasChanged:h$1};class n$2 extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o();}static addInitializer(t){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Eh(s,i);void 0!==e&&(this._$Eu.set(e,s),t.push(e));})),t}static createProperty(t,i=o$3){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||o$3}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(S$1(i));}else void 0!==i&&s.push(S$1(i));return s}static _$Eh(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$Em)&&void 0!==i?i:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$Em)||void 0===i||i.splice(this._$Em.indexOf(t)>>>0,1);}_$Ep(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i$3(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$Eg(t,i,s=o$3){var e,h;const n=this.constructor._$Eh(t,s);if(void 0!==n&&!0===s.reflect){const o=(null!==(h=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==h?h:r$2.toAttribute)(i,s.type);this._$Ei=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Ei=null;}}_$AK(t,i){var s,e,h;const o=this.constructor,n=o._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=o.getPropertyOptions(n),l=t.converter,a=null!==(h=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==h?h:r$2.fromAttribute;this._$Ei=n,this[n]=a(i,t.type),this._$Ei=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||h$1)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$Ev=this._$EC());}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,i)=>this[i]=t)),this._$Et=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$ET();}catch(t){throw i=!1,this._$ET(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$Em)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$ET(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return !0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,i)=>this._$Eg(i,this[i],t))),this._$ES=void 0),this._$ET();}updated(t){}firstUpdated(t){}}n$2.finalized=!0,n$2.elementProperties=new Map,n$2.elementStyles=[],n$2.shadowRootOptions={mode:"open"},null===(s$2=globalThis.reactiveElementPolyfillSupport)||void 0===s$2||s$2.call(globalThis,{ReactiveElement:n$2}),(null!==(e$3=globalThis.reactiveElementVersions)&&void 0!==e$3?e$3:globalThis.reactiveElementVersions=[]).push("1.0.0");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$1,i$2;const s$1=globalThis.trustedTypes,e$2=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$2=`lit$${(Math.random()+"").slice(9)}$`,n$1="?"+o$2,l$1=`<${n$1}>`,h=document,r$1=(t="")=>h.createComment(t),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u$2=Array.isArray,v=t=>{var i;return u$2(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])},c$2=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,a$1=/-->/g,f$1=/>/g,_=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,g=/'/g,m$1=/"/g,$=/^(?:script|style|textarea)$/i,p=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),y=p(1),T=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),w=new WeakMap,A=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new S(i.insertBefore(r$1(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l},C=h.createTreeWalker(h,129,null,!1),P=(t,i)=>{const s=t.length-1,n=[];let h,r=2===i?"<svg>":"",d=c$2;for(let i=0;i<s;i++){const s=t[i];let e,u,v=-1,p=0;for(;p<s.length&&(d.lastIndex=p,u=d.exec(s),null!==u);)p=d.lastIndex,d===c$2?"!--"===u[1]?d=a$1:void 0!==u[1]?d=f$1:void 0!==u[2]?($.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=_):void 0!==u[3]&&(d=_):d===_?">"===u[0]?(d=null!=h?h:c$2,v=-1):void 0===u[1]?v=-2:(v=d.lastIndex-u[2].length,e=u[1],d=void 0===u[3]?_:'"'===u[3]?m$1:g):d===m$1||d===g?d=_:d===a$1||d===f$1?d=c$2:(d=_,h=void 0);const y=d===_&&t[i+1].startsWith("/>")?" ":"";r+=d===c$2?s+l$1:v>=0?(n.push(e),s.slice(0,v)+"$lit$"+s.slice(v)+o$2+y):s+o$2+(-2===v?(n.push(void 0),i):y);}const u=r+(t[s]||"<?>")+(2===i?"</svg>":"");return [void 0!==e$2?e$2.createHTML(u):u,n]};class V{constructor({strings:t,_$litType$:i},e){let l;this.parts=[];let h=0,d=0;const u=t.length-1,v=this.parts,[c,a]=P(t,i);if(this.el=V.createElement(c,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(l=C.nextNode())&&v.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(o$2)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(o$2),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:h,name:i[2],strings:t,ctor:"."===i[1]?k:"?"===i[1]?H:"@"===i[1]?I:M});}else v.push({type:6,index:h});}for(const i of t)l.removeAttribute(i);}if($.test(l.tagName)){const t=l.textContent.split(o$2),i=t.length-1;if(i>0){l.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)l.append(t[s],r$1()),C.nextNode(),v.push({type:2,index:++h});l.append(t[i],r$1());}}}else if(8===l.nodeType)if(l.data===n$1)v.push({type:2,index:h});else {let t=-1;for(;-1!==(t=l.data.indexOf(o$2,t+1));)v.push({type:7,index:h}),t+=o$2.length-1;}h++;}}static createElement(t,i){const s=h.createElement("template");return s.innerHTML=t,s}}function E(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const u=d(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Cl)&&void 0!==l?l:h._$Cl=[])[e]=r:s._$Cu=r),void 0!==r&&(i=E(t,r._$AS(t,i.values),r,e)),i}class N{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:h).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,r=0,d=e[0];for(;void 0!==d;){if(l===d.index){let i;2===d.type?i=new S(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new L(n,this,t)),this.v.push(i),d=e[++r];}l!==(null==d?void 0:d.index)&&(n=C.nextNode(),l++);}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class S{constructor(t,i,s,e){var o;this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cg=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=E(this,t,i),d(t)?t===x||null==t||""===t?(this._$AH!==x&&this._$AR(),this._$AH=x):t!==this._$AH&&t!==T&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):v(t)?this.M(t):this.$(t);}A(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t));}$(t){this._$AH!==x&&d(this._$AH)?this._$AA.nextSibling.data=t:this.S(h.createTextNode(t)),this._$AH=t;}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=V.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else {const t=new N(o,this),i=t.p(this.options);t.m(s),this.S(i),this._$AH=t;}}_$AC(t){let i=w.get(t.strings);return void 0===i&&w.set(t.strings,i=new V(t)),i}M(t){u$2(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new S(this.A(r$1()),this.A(r$1()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class M{constructor(t,i,s,e,o){this.type=1,this._$AH=x,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=x;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=E(this,t,i,0),n=!d(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=E(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!d(h)||h!==this._$AH[l]),h===x?t=x:t!==x&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.k(t);}k(t){t===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class k extends M{constructor(){super(...arguments),this.type=3;}k(t){this.element[this.name]=t===x?void 0:t;}}class H extends M{constructor(){super(...arguments),this.type=4;}k(t){t&&t!==x?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name);}}class I extends M{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=E(this,t,i,0))&&void 0!==s?s:x)===T)return;const e=this._$AH,o=t===x&&e!==x||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==x&&(e===x||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t);}}const R={P:"$lit$",V:o$2,L:n$1,I:1,N:P,R:N,D:v,j:E,H:S,O:M,F:H,B:I,W:k,Z:L};null===(t$1=globalThis.litHtmlPolyfillSupport)||void 0===t$1||t$1.call(globalThis,V,S),(null!==(i$2=globalThis.litHtmlVersions)&&void 0!==i$2?i$2:globalThis.litHtmlVersions=[]).push("2.0.0");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l,o$1,r;class n extends n$2{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=A(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1);}render(){return T}}n.finalized=!0,n._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:n}),null===(o$1=globalThis.litElementPolyfillSupport)||void 0===o$1||o$1.call(globalThis,{LitElement:n});(null!==(r=globalThis.litElementVersions)&&void 0!==r?r:globalThis.litElementVersions=[]).push("3.0.0");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$1=t=>(...e)=>({_$litDirective$:t,values:e});class i$1{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const {H:i}=R,e=()=>document.createComment(""),u$1=(o,t,n)=>{var v;const l=o._$AA.parentNode,d=void 0===t?o._$AB:t._$AA;if(void 0===n){const t=l.insertBefore(e(),d),v=l.insertBefore(e(),d);n=new i(t,v,o,o.options);}else {const i=n._$AB.nextSibling,t=n._$AM,r=t!==o;if(r){let i;null===(v=n._$AQ)||void 0===v||v.call(n,o),n._$AM=o,void 0!==n._$AP&&(i=o._$AU)!==t._$AU&&n._$AP(i);}if(i!==d||r){let o=n._$AA;for(;o!==i;){const i=o.nextSibling;l.insertBefore(o,d),o=i;}}}return n},c$1=(o,i,t=o)=>(o._$AI(i,t),o),f={},s=(o,i=f)=>o._$AH=i,a=o=>o._$AH,m=o=>{var i;null===(i=o._$AP)||void 0===i||i.call(o,!1,!0);let t=o._$AA;const n=o._$AB.nextSibling;for(;t!==n;){const o=t.nextSibling;t.remove(),t=o;}};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const u=(e,s,t)=>{const r=new Map;for(let l=s;l<=t;l++)r.set(e[l],l);return r},c=e$1(class extends i$1{constructor(e){if(super(e),e.type!==t.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,s,t){let r;void 0===t?t=s:void 0!==s&&(r=s);const l=[],o=[];let i=0;for(const s of e)l[i]=r?r(s,i):i,o[i]=t(s,i),i++;return {values:o,keys:l}}render(e,s,t){return this.dt(e,s,t).values}update(s$1,[t,r,c]){var d;const a$1=a(s$1),{values:p,keys:v}=this.dt(t,r,c);if(!Array.isArray(a$1))return this.ct=v,p;const h=null!==(d=this.ct)&&void 0!==d?d:this.ct=[],m$1=[];let y,x,j=0,k=a$1.length-1,w=0,A=p.length-1;for(;j<=k&&w<=A;)if(null===a$1[j])j++;else if(null===a$1[k])k--;else if(h[j]===v[w])m$1[w]=c$1(a$1[j],p[w]),j++,w++;else if(h[k]===v[A])m$1[A]=c$1(a$1[k],p[A]),k--,A--;else if(h[j]===v[A])m$1[A]=c$1(a$1[j],p[A]),u$1(s$1,m$1[A+1],a$1[j]),j++,A--;else if(h[k]===v[w])m$1[w]=c$1(a$1[k],p[w]),u$1(s$1,a$1[j],a$1[k]),k--,w++;else if(void 0===y&&(y=u(v,w,A),x=u(h,j,k)),y.has(h[j]))if(y.has(h[k])){const e=x.get(v[w]),t=void 0!==e?a$1[e]:null;if(null===t){const e=u$1(s$1,a$1[j]);c$1(e,p[w]),m$1[w]=e;}else m$1[w]=c$1(t,p[w]),u$1(s$1,a$1[j],t),a$1[e]=null;w++;}else m(a$1[k]),k--;else m(a$1[j]),j++;for(;w<=A;){const e=u$1(s$1,m$1[A+1]);c$1(e,p[w]),m$1[w++]=e;}for(;j<=k;){const e=a$1[j++];null!==e&&m(e);}return this.ct=v,s(s$1,m$1),T}});

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
 * An expression marker with embedded unique key to avoid collision with
 * possible text in templates.
 */
`{{lit-${String(Math.random()).slice(2)}}}`;

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
 * Our TrustedTypePolicy for HTML which is declared using the html template
 * tag function.
 *
 * That HTML is a developer-authored constant, and is parsed with innerHTML
 * before any untrusted expressions have been mixed in. Therefor it is
 * considered safe by construction.
 */
window.trustedTypes &&
    trustedTypes.createPolicy('lit-html', { createHTML: (s) => s });

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
// Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the third
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.
let eventOptionsSupported = false;
// Wrap into an IIFE because MS Edge <= v41 does not support having try/catch
// blocks right into the body of a module
(() => {
    try {
        const options = {
            get capture() {
                eventOptionsSupported = true;
                return false;
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        window.addEventListener('test', options, options);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        window.removeEventListener('test', options, options);
    }
    catch (_e) {
        // event options not supported
    }
})();

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
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time
if (typeof window !== 'undefined') {
    (window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.4.1');
}

let current;
let currentId = 0;
function setCurrent(state) {
    current = state;
}
function clear() {
    current = null;
    currentId = 0;
}
function notify() {
    return currentId++;
}

const phaseSymbol = Symbol('haunted.phase');
const hookSymbol = Symbol('haunted.hook');
const updateSymbol = Symbol('haunted.update');
const commitSymbol = Symbol('haunted.commit');
const effectsSymbol = Symbol('haunted.effects');
const layoutEffectsSymbol = Symbol('haunted.layoutEffects');
const contextEvent = 'haunted.context';

class State {
    update;
    host;
    virtual;
    [hookSymbol];
    [effectsSymbol];
    [layoutEffectsSymbol];
    constructor(update, host) {
        this.update = update;
        this.host = host;
        this[hookSymbol] = new Map();
        this[effectsSymbol] = [];
        this[layoutEffectsSymbol] = [];
    }
    run(cb) {
        setCurrent(this);
        let res = cb();
        clear();
        return res;
    }
    _runEffects(phase) {
        let effects = this[phase];
        setCurrent(this);
        for (let effect of effects) {
            effect.call(this);
        }
        clear();
    }
    runEffects() {
        this._runEffects(effectsSymbol);
    }
    runLayoutEffects() {
        this._runEffects(layoutEffectsSymbol);
    }
    teardown() {
        let hooks = this[hookSymbol];
        hooks.forEach(hook => {
            if (typeof hook.teardown === 'function') {
                hook.teardown();
            }
        });
    }
}

const defer = Promise.resolve().then.bind(Promise.resolve());
function runner() {
    let tasks = [];
    let id;
    function runTasks() {
        id = null;
        let t = tasks;
        tasks = [];
        for (var i = 0, len = t.length; i < len; i++) {
            t[i]();
        }
    }
    return function (task) {
        tasks.push(task);
        if (id == null) {
            id = defer(runTasks);
        }
    };
}
const read = runner();
const write = runner();
class BaseScheduler {
    renderer;
    host;
    state;
    [phaseSymbol];
    _updateQueued;
    constructor(renderer, host) {
        this.renderer = renderer;
        this.host = host;
        this.state = new State(this.update.bind(this), host);
        this[phaseSymbol] = null;
        this._updateQueued = false;
    }
    update() {
        if (this._updateQueued)
            return;
        read(() => {
            let result = this.handlePhase(updateSymbol);
            write(() => {
                this.handlePhase(commitSymbol, result);
                write(() => {
                    this.handlePhase(effectsSymbol);
                });
            });
            this._updateQueued = false;
        });
        this._updateQueued = true;
    }
    handlePhase(phase, arg) {
        this[phaseSymbol] = phase;
        switch (phase) {
            case commitSymbol:
                this.commit(arg);
                this.runEffects(layoutEffectsSymbol);
                return;
            case updateSymbol: return this.render();
            case effectsSymbol: return this.runEffects(effectsSymbol);
        }
        this[phaseSymbol] = null;
    }
    render() {
        return this.state.run(() => this.renderer.call(this.host, this.host));
    }
    runEffects(phase) {
        this.state._runEffects(phase);
    }
    teardown() {
        this.state.teardown();
    }
}

const toCamelCase = (val = '') => val.replace(/-+([a-z])?/g, (_, char) => char ? char.toUpperCase() : '');
function makeComponent(render) {
    class Scheduler extends BaseScheduler {
        frag;
        constructor(renderer, frag, host) {
            super(renderer, host || frag);
            this.frag = frag;
        }
        commit(result) {
            render(result, this.frag);
        }
    }
    function component(renderer, baseElementOrOptions, options) {
        const BaseElement = (options || baseElementOrOptions || {}).baseElement || HTMLElement;
        const { observedAttributes = [], useShadowDOM = true, shadowRootInit = {} } = options || baseElementOrOptions || {};
        class Element extends BaseElement {
            _scheduler;
            static get observedAttributes() {
                return renderer.observedAttributes || observedAttributes || [];
            }
            constructor() {
                super();
                if (useShadowDOM === false) {
                    this._scheduler = new Scheduler(renderer, this);
                }
                else {
                    this.attachShadow({ mode: 'open', ...shadowRootInit });
                    this._scheduler = new Scheduler(renderer, this.shadowRoot, this);
                }
            }
            connectedCallback() {
                this._scheduler.update();
            }
            disconnectedCallback() {
                this._scheduler.teardown();
            }
            attributeChangedCallback(name, oldValue, newValue) {
                if (oldValue === newValue) {
                    return;
                }
                let val = newValue === '' ? true : newValue;
                Reflect.set(this, toCamelCase(name), val);
            }
        }
        function reflectiveProp(initialValue) {
            let value = initialValue;
            let isSetup = false;
            return Object.freeze({
                enumerable: true,
                configurable: true,
                get() {
                    return value;
                },
                set(newValue) {
                    // Avoid scheduling update when prop value hasn't changed
                    if (isSetup && value === newValue)
                        return;
                    isSetup = true;
                    value = newValue;
                    if (this._scheduler) {
                        this._scheduler.update();
                    }
                }
            });
        }
        const proto = new Proxy(BaseElement.prototype, {
            getPrototypeOf(target) {
                return target;
            },
            set(target, key, value, receiver) {
                let desc;
                if (key in target) {
                    desc = Object.getOwnPropertyDescriptor(target, key);
                    if (desc && desc.set) {
                        desc.set.call(receiver, value);
                        return true;
                    }
                    Reflect.set(target, key, value, receiver);
                    return true;
                }
                if (typeof key === 'symbol' || key[0] === '_') {
                    desc = {
                        enumerable: true,
                        configurable: true,
                        writable: true,
                        value
                    };
                }
                else {
                    desc = reflectiveProp(value);
                }
                Object.defineProperty(receiver, key, desc);
                if (desc.set) {
                    desc.set.call(receiver, value);
                }
                return true;
            }
        });
        Object.setPrototypeOf(Element.prototype, proto);
        return Element;
    }
    return component;
}

class Hook {
    id;
    state;
    constructor(id, state) {
        this.id = id;
        this.state = state;
    }
}
function use(Hook, ...args) {
    let id = notify();
    let hooks = current[hookSymbol];
    let hook = hooks.get(id);
    if (!hook) {
        hook = new Hook(id, current, ...args);
        hooks.set(id, hook);
    }
    return hook.update(...args);
}
function hook(Hook) {
    return use.bind(null, Hook);
}

function createEffect(setEffects) {
    return hook(class extends Hook {
        callback;
        lastValues;
        values;
        _teardown;
        constructor(id, state, ignored1, ignored2) {
            super(id, state);
            setEffects(state, this);
        }
        update(callback, values) {
            this.callback = callback;
            this.values = values;
        }
        call() {
            if (!this.values || this.hasChanged()) {
                this.run();
            }
            this.lastValues = this.values;
        }
        run() {
            this.teardown();
            this._teardown = this.callback.call(this.state);
        }
        teardown() {
            if (typeof this._teardown === 'function') {
                this._teardown();
            }
        }
        hasChanged() {
            return !this.lastValues || this.values.some((value, i) => this.lastValues[i] !== value);
        }
    });
}

function setEffects(state, cb) {
    state[effectsSymbol].push(cb);
}
/**
 * @function
 * @param {() => void} effect - callback function that runs each time dependencies change
 * @param {unknown[]} [dependencies] - list of dependencies to the effect
 * @return {void}
 */
const useEffect = createEffect(setEffects);

const useContext = hook(class extends Hook {
    Context;
    value;
    _ranEffect;
    _unsubscribe;
    constructor(id, state, _) {
        super(id, state);
        this._updater = this._updater.bind(this);
        this._ranEffect = false;
        this._unsubscribe = null;
        setEffects(state, this);
    }
    update(Context) {
        if (this.state.virtual) {
            throw new Error('can\'t be used with virtual components');
        }
        if (this.Context !== Context) {
            this._subscribe(Context);
            this.Context = Context;
        }
        return this.value;
    }
    call() {
        if (!this._ranEffect) {
            this._ranEffect = true;
            if (this._unsubscribe)
                this._unsubscribe();
            this._subscribe(this.Context);
            this.state.update();
        }
    }
    _updater(value) {
        this.value = value;
        this.state.update();
    }
    _subscribe(Context) {
        const detail = { Context, callback: this._updater };
        this.state.host.dispatchEvent(new CustomEvent(contextEvent, {
            detail,
            bubbles: true,
            cancelable: true,
            composed: true, // to pass ShadowDOM boundaries
        }));
        const { unsubscribe = null, value } = detail;
        this.value = unsubscribe ? value : Context.defaultValue;
        this._unsubscribe = unsubscribe;
    }
    teardown() {
        if (this._unsubscribe) {
            this._unsubscribe();
        }
    }
});

function makeContext(component) {
    return (defaultValue) => {
        const Context = {
            Provider: class extends HTMLElement {
                listeners;
                _value;
                constructor() {
                    super();
                    this.listeners = new Set();
                    this.addEventListener(contextEvent, this);
                }
                disconnectedCallback() {
                    this.removeEventListener(contextEvent, this);
                }
                handleEvent(event) {
                    const { detail } = event;
                    if (detail.Context === Context) {
                        detail.value = this.value;
                        detail.unsubscribe = this.unsubscribe.bind(this, detail.callback);
                        this.listeners.add(detail.callback);
                        event.stopPropagation();
                    }
                }
                unsubscribe(callback) {
                    this.listeners.delete(callback);
                }
                set value(value) {
                    this._value = value;
                    for (let callback of this.listeners) {
                        callback(value);
                    }
                }
                get value() {
                    return this._value;
                }
            },
            Consumer: component(function ({ render }) {
                const context = useContext(Context);
                return render(context);
            }),
            defaultValue,
        };
        return Context;
    };
}

hook(class extends Hook {
    value;
    values;
    constructor(id, state, fn, values) {
        super(id, state);
        this.value = fn();
        this.values = values;
    }
    update(fn, values) {
        if (this.hasChanged(values)) {
            this.values = values;
            this.value = fn();
        }
        return this.value;
    }
    hasChanged(values = []) {
        return values.some((value, i) => this.values[i] !== value);
    }
});

function setLayoutEffects(state, cb) {
    state[layoutEffectsSymbol].push(cb);
}
createEffect(setLayoutEffects);

/**
 * @function
 * @template {*} T
 * @param {T} [initialState] - Optional initial state
 * @return {readonly [state: T, updaterFn: StateUpdater<T>]} stateTuple - Tuple of current state and state updater function
 */
const useState = hook(class extends Hook {
    args;
    constructor(id, state, initialValue) {
        super(id, state);
        this.updater = this.updater.bind(this);
        if (typeof initialValue === 'function') {
            initialValue = initialValue();
        }
        this.makeArgs(initialValue);
    }
    update() {
        return this.args;
    }
    updater(value) {
        if (typeof value === 'function') {
            const updaterFn = value;
            const [previousValue] = this.args;
            value = updaterFn(previousValue);
        }
        this.makeArgs(value);
        this.state.update();
    }
    makeArgs(value) {
        this.args = Object.freeze([value, this.updater]);
    }
});

/**
 * @license
 * Portions Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
Promise.resolve();

hook(class extends Hook {
    reducer;
    currentState;
    constructor(id, state, _, initialState, init) {
        super(id, state);
        this.dispatch = this.dispatch.bind(this);
        this.currentState = init !== undefined ? init(initialState) : initialState;
    }
    update(reducer) {
        this.reducer = reducer;
        return [this.currentState, this.dispatch];
    }
    dispatch(action) {
        this.currentState = this.reducer(this.currentState, action);
        this.state.update();
    }
});

function haunted({ render }) {
    const component = makeComponent(render);
    const createContext = makeContext(component);
    return { component, createContext };
}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o=e$1(class extends i$1{constructor(t$1){var i;if(super(t$1),t$1.type!==t.ATTRIBUTE||"class"!==t$1.name||(null===(i=t$1.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(i,[s]){var r,o;if(void 0===this.st){this.st=new Set,void 0!==i.strings&&(this.et=new Set(i.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in s)s[t]&&!(null===(r=this.et)||void 0===r?void 0:r.has(t))&&this.st.add(t);return this.render(s)}const e=i.element.classList;this.st.forEach((t=>{t in s||(e.remove(t),this.st.delete(t));}));for(const t in s){const i=!!s[t];i===this.st.has(t)||(null===(o=this.et)||void 0===o?void 0:o.has(t))||(i?(e.add(t),this.st.add(t)):(e.remove(t),this.st.delete(t)));}return T}});

var Selector;
(function (Selector) {
    Selector["HEADER"] = "header";
    Selector["PROJECT_IMAGE"] = ".image-container img";
    Selector["SEARCH_INPUT"] = "input[type=\"search\"]";
})(Selector || (Selector = {}));

const DEBOUNCE_TIMEOUT = 350;
const styles$2 = y `
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
        border: none;
        border-bottom: 1px solid #ccc;
        font-size: inherit;
        text-align: left;
        padding: .5rem;
      }

      button[role="option"]:last-of-type {
        border-bottom: none;
      }
    </style>
`;
function SearchBox({ keyWords, handleSearchInput }) {
    const [showDropDown, setShowDropDown] = useState(false);
    const [inputDebounce, setInputDebounce] = useState(null);
    const searchInput = this.shadowRoot.querySelector(Selector.SEARCH_INPUT);
    const toggleDropdown = () => {
        setShowDropDown(!showDropDown);
    };
    const handleFocus = () => {
        toggleDropdown();
    };
    const handleBlur = (e) => {
        e.preventDefault();
        if (showDropDown) {
            toggleDropdown();
        }
    };
    const handleInput = (e) => {
        const { value } = e.composedPath().find(el => (el.tagName === 'INPUT'));
        if (inputDebounce) {
            clearTimeout(inputDebounce);
        }
        setInputDebounce(setTimeout(() => {
            handleSearchInput(value);
        }, DEBOUNCE_TIMEOUT));
    };
    const onDropdownButtonClick = (keyword) => {
        searchInput.value = keyword;
        toggleDropdown();
        handleSearchInput(keyword);
    };
    return y `
    ${styles$2}

    <label for="search" class="hide">Search</label>
    <input
      type="search"
      placeholder="search"
      aria-label="Search through projects"
      autocomplete="off"
      @input=${handleInput}
      @focus=${handleFocus}
      @blur=${handleBlur}
    >
    <div role="listbox" class=${o({ 'show': showDropDown })}>
      ${[...keyWords].map(keyword => y `
        <button
          role="option"
          @mousedown=${() => onDropdownButtonClick(keyword)}>${keyword}</button>
      `)}
    </div>
  `;
}
const { component: component$2 } = haunted({ render: A });
customElements.define('search-box', component$2(SearchBox));

function getKeyWords(list) {
    const keywords = new Set();
    if (list) {
        for (const item of list) {
            for (const word of item.keywords) {
                keywords.add(word.toLowerCase());
            }
        }
    }
    return keywords;
}
function kebabCase(str) {
    return str.toLowerCase().replace(/[^a-z0-9]+/gi, '-');
}
function addIntersectionObserver(el, onIntersection) {
    const lazyImageObserver = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                const element = entry.target;
                onIntersection(element);
                lazyImageObserver.unobserve(element);
            }
        }
    });
    lazyImageObserver.observe(el);
}

const IMAGE_PATH = './images/';
const CLOCK_PATH = 'heathrow-clock.svg';
async function conditionallyLoadClockPrototype(lazyImage, parentEl) {
    if (lazyImage.src.indexOf(CLOCK_PATH) > -1) {
        const clock = await import('./clock-28afe552.js');
        clock.addClockPrototype(lazyImage, parentEl);
    }
}
function showProjectAndLoadImage(element) {
    const lazyImage = element.shadowRoot.querySelector(Selector.PROJECT_IMAGE);
    if (!lazyImage)
        return;
    lazyImage.src = lazyImage?.dataset?.src;
    conditionallyLoadClockPrototype(lazyImage, element);
    lazyImage.classList.add('visible');
}
const styles$1 = y `
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

    h2.title {
      margin: 0;
      font-size: 1rem;
      font-weight: 500;
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

    .visible-hidden {
      clip: rect(1px, 1px, 1px, 1px);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }
  </style>
`;
function ProjectCard({ project, handleInfoClick, handleInfoCloseClick, selected }) {
    useEffect(() => {
        addIntersectionObserver(this, showProjectAndLoadImage);
    }, []);
    const imageSourcePath = IMAGE_PATH + project.imageSources[0];
    return y `
    ${styles$1}

    <div class="image-container">
      <img
        class="image visible block"
        data-src="${imageSourcePath}"
        alt="image of ${project.title}">
    </div>
    <div class="project-card-title">
      <h2 class="title">${project.title}</h2>
      <div class="info-icons">
        ${project.description ? y `
          <button
            class="info"
            aria-label="Get more project info"
            @click=${() => handleInfoClick(project)}
          ><img src="${IMAGE_PATH}info-black-18dp.svg" alt="More info"></button>
        ` : ''}
        ${project.href ? y `
          <a class="link" href="${project.href}">
            <img src="${IMAGE_PATH}launch-black-18dp.svg" alt="External link">
            <span class="visible-hidden">Go to project reference</span>
          </a>
        ` : ''}
      </div>
    </div>
    <p ?hidden=${!selected} class="description">${project.description}</p>
    <button
      ?hidden=${!selected}
      class="close"
      aria-label="Close detail and return to full project list"
      @click=${handleInfoCloseClick}
    >Close</button>
  `;
}
const { component: component$1 } = haunted({ render: A });
customElements.define('project-card', component$1(ProjectCard));

const RESUME = [
    {
        date: 'Sept 2015 - Sept 2021',
        place: 'Google, UX Engineer',
        summary: 'Designed & developed apps, UIs, widgets & ways to share & shape actionable information. Started as web designer; finished as a TL.',
        detail: 'Developed a web app from conception through implementation to allow the Android UX team to better share their work. Developed a rapid prototyping app for the Google Store UX team. Designed and developed a web app for UX researchers to store, find, and share study findings. Also designed identity-building illustrations and several shipped Material-design emoji.',
    }, {
        date: 'Jan 2014 - Sept 2015',
        place: 'Freelance Designer/Developer',
        summary: 'Designed & built web sites, apps, presentations; general design consulting.',
        detail: 'Designed and developed a handful of client websites, also providing messaging, content advice, graphic design, and production. Developed a prototype/MVP web app to help medical clinics with green business guidelines. Consulted as a Creative Director for a boutique branding firm, including communication, visual design, and technical advice.',
    }, {
        date: 'Aug 2011 - Dec 2013',
        place: 'City of Santa Monica',
        summary: 'Revised framework for future development; managed  engagement & analysis; delivered lots of presentations.',
        detail: `Led effort to rewrite City's zoning code. Designed and produced multi-platform content: reports, presentations, graphics, engagement materials for print, broadcast, and web. Result: a draft zoning ordinance for public review.`,
    }, {
        date: 'Jul 2008 - Aug 2011',
        place: 'Rios Clementi Hale Studios',
        summary: 'Bridged the gap between design and law to help move a significant destination and economic engine forward.',
        detail: 'Helped get the Universal Studios Master Plan adopted. Design, coordination, and production of conceptual drawings, illustrations, 3D models, multi-format presentations, maps, layout & publishing of documents, and other materials.',
    }, {
        date: 'May 2006 - Jul 2008',
        place: 'City of West Hollywood',
        summary: `Analyzed & delivered recommendations regarding other people's well-designed, and not well-designed, development proposals.`,
        detail: 'Analysis and presentation of urban design and planning-related issues.',
    }, {
        date: 'Apr 2000 - Feb 2006',
        place: 'City of Seattle',
        summary: 'Led major policy changes to help make Seattle more livable, walkable, and sustainable.',
        detail: `Produced plans, reports, graphics, and presentations leading to tangible improvements in Seattle's physical environment. First urban planner at the City of Seattle to use digital 3D modeling to inform outreach and analysis related to changes to zoning and building typologies.`,
    }, {
        date: 'Aug 1997 - April 2000',
        place: 'Arai/Jackson Architects & Planners',
        summary: 'Designed & produced posters and giant documents; learned to manage projects; learned from plenty of mistakes.',
        detail: 'Design, production, content of various urban design and planning projects.',
    }
];
const PORTFOLIO = [
    {
        title: 'Mock for plan review UI',
        date: '2021',
        description: `A high-fidelity mock for a user interface allowing fluid communication between an agency and applicant.`,
        imageSources: ['plan_review_mock.jpg'],
        keywords: ['software', 'ux', 'ui', 'mock', 'communication'],
    },
    {
        title: 'Gallery.io web engineering',
        date: '2019',
        description: `Google's Material Gallery web appplication evolved from iterations of earlier prototype applications written in ES5-era AngularJS. I led team-wide efforts to modernize the application, starting with the need to update how it was being built and bundled. This unblocked a TypeScript migration, which I also led, along with efforts to componentize the application and update state management using more modern libraries. As a result, thousands of tech debt issues have been closed and the application's bundle size has been reduced by at least 33%.`,
        href: 'https://gallery.io',
        imageSources: ['gallery.jpg'],
        keywords: ['software', 'typescript', 'tooling', 'modernization', 'develop', 'engineer', 'Google', 'Material'],
    },
    {
        title: 'web performance analysis',
        date: '2020',
        href: 'https://github.com/joryphillips/joryphillips.github.io/issues/8#issuecomment-611778792',
        imageSources: ['web-perf.png'],
        keywords: ['software', 'develop', 'engineer', 'performance', 'tooling'],
    },
    {
        title: 'comprehensive design + implementation',
        imageSources: ['test-result-details.png'],
        keywords: ['ux', 'ui', 'develop', 'Google', 'Android', 'typescript'],
    },
    {
        title: 'web component wireframe',
        imageSources: ['target-row-pies-wireframe.jpg'],
        keywords: ['ux', 'ui', 'wireframe', 'Google', 'Android'],
    },
    {
        title: 'concept diagrams',
        imageSources: ['grid-test-views@3x.png'],
        keywords: ['conceptual', 'diagram', 'communication', 'Google', 'Android'],
    },
    {
        title: 'notification CRUD app',
        imageSources: ['notification-crud-edit.png'],
        keywords: ['ux', 'ui', 'develop', 'Google', 'Android', 'typescript'],
    },
    {
        title: 'lightweight webpage generator',
        imageSources: ['ux-page-crud.png'],
        keywords: ['ux', 'ui', 'develop', 'Google', 'Android'],
    },
    {
        title: 'mojibrush.co ui/ux + oss contributions',
        imageSources: ['moji-brush.png'],
        href: 'https://mojibrush.co',
        keywords: ['ux', 'ui', 'develop', 'fun'],
    },
    {
        title: 'make a webpage from Google Sheets',
        imageSources: ['ux-sheet-stepper.png'],
        keywords: ['ux', 'ui', 'develop', 'Google', 'Android'],
    },
    {
        title: 'contrast study',
        imageSources: ['material-gray-contrast-ratio-study.png'],
        keywords: ['ux', 'ui', 'accessibility', 'Google', 'Android'],
    },
    {
        title: 'sketchy wireframe',
        imageSources: ['sketchy-wireframe.png'],
        keywords: ['ux', 'ui', 'wireframe', 'sketch', 'Google', 'Android'],
    },
    {
        title: 'four shipped Material emoji',
        imageSources: ['four-material-emoji.svg'],
        keywords: ['illustration', 'Material', 'fun', 'Google', 'Android'],
    },
    {
        title: 'imagery exploration',
        imageSources: ['dichotomy-01.jpg'],
        keywords: ['presentation', 'conceptual', 'communication', 'Google', 'Android'],
    },
    {
        title: 'identity/branding illustrations',
        imageSources: ['droid-4-up.svg'],
        keywords: ['illustration', 'fun', 'Google', 'Android'],
    },
    {
        title: 'concept for research logo',
        imageSources: ['UERchives-magnifying-glass-exag_480.png'],
        keywords: ['illustration', 'Material', 'fun', 'Google', 'Android'],
    },
    {
        title: 'dancing t-rex',
        imageSources: ['dancing-dino.gif'],
        keywords: ['fun', 'Google', 'Android'],
    },
    {
        title: 'sustainable healthcare website',
        date: '2015',
        imageSources: ['eksh-desktop.jpg'],
        description: `Erika Kimball Sustainable Healthcare is a website I designed and developed using a lightweight animation library for subtle parallax scrolling effects. I researched and incorporated a custom CMS/blog solution to fit the client's needs, and designed the logo in Adobe Illustrator.`,
        keywords: ['ux', 'ui', 'develop', 'communication', 'freelance'],
    },
    {
        title: 'mobile web app',
        date: '2014',
        imageSources: ['rumblemunk-mobile.jpg'],
        keywords: ['ux', 'ui', 'develop'],
    },
    {
        title: 'Global Brand Works Website',
        date: '2015',
        imageSources: ['gbw.jpg'],
        description: 'I designed and developed the Global Brand Works website with legibility, navigation, and mobile readiness in mind. The site was completely custom-built with HTML/CSS/JavaScript/PHP for interactivity. For a time, I also served as the Creative Director for this boutique branding agency and helped their clients with general design, graphic, and presentation needs.',
        href: 'https://globalbrandworks.com/',
        keywords: ['ux', 'ui', 'develop', 'communication', 'freelance'],
    },
    {
        title: 'Illustration',
        date: '2009',
        imageSources: ['shanghai-outlines.jpg', 'shanghai-full-width-section-trnsp.png'],
        description: 'As part of a competition to master plan a portion of a new theme park and entertainment destination, I digitally painted section and elevations line drawings to convey exiting, active retail, restaurant, and entertainment areas. Drawing from a variety of textures and patterns found in design and fashion magazines, I experimented with transparency, overlap, and varying hues to reach an appropriate balance. This is a small, zoomed-in portion of one of several drawings, which were presented on large-format presentation boards.',
        keywords: ['urban design', 'illustration', 'fun', 'communication'],
    },
    {
        title: 'Wall Clock Product Design/Prototype',
        date: '2010',
        imageSources: ['heathrow-clock.svg'],
        description: `Tasked with coming up with product ideas that could build upon notNeutral's (Rios Clementi Hale Studio's product design brand) successful CityPlates, I started analyzing aerial photographs of different cities for inspiration. I was especially drawn to the way airports look from above. This London Heathrow graphic was originally presented as an idea for a large-scale wall graphic and clock, with the runways as moving hands. Here I have streamlined the original Illustrator file with SVG and used Javascript to make it a functional time-telling graphic.`,
        keywords: ['conceptual', 'prototyping', 'maps'],
    },
    {
        title: 'Mapping & Data Analysis',
        date: '2009',
        imageSources: ['pub-facilities-map.svg'],
        description: 'I designed and created this interactive map in Adobe Illustrator after exporting the data from ArcGIS. The map was originally used at multiple scales in a presentation to elected officials and planners to describe the abundance of public facilities within five miles of the Univeral Studios site. The icons are based on universally-recognized symbols for the activities they represent.',
        keywords: ['conceptual', 'urban design', 'urban planning', 'communication', 'maps'],
    },
    {
        title: 'Universal Studios Master Plan',
        date: '2011',
        imageSources: ['usmp.png'],
        description: `While working at Rios Clementi Hale Studios, I produced materials and coordinated a team of multidisciplinary designers to help Universal Studios create an 'entitlement package' that adopted their new master plan. The project's needs constantly shifted, and included maintaining a building inventory, creating view simulations, 3D modeling, mapping, diagramming, and preparing various presentation materials. This important plan was subsequently adopted by the City of Los Angeles and the County of Los Angeles.`,
        keywords: ['urban design', 'urban planning', 'communication'],
    },
    {
        title: 'not a real emoji',
        imageSources: ['incredulous_goat.png'],
        keywords: ['fun', 'goat', 'emoji'],
    },
];

function listHasSearchValues(searchValue, listString) {
    let matches = false;
    const searchList = searchValue.toLowerCase().split(' ');
    for (let i = 0; i < searchList.length; i++) {
        const searchTerm = searchList[i].trim();
        matches = listString.toLowerCase().includes(searchTerm);
    }
    return matches;
}
function shouldShowProject(searchValue, project) {
    const { keywords, title } = project;
    const stringToSearch = keywords.join(' ') + ' ' + title.toLowerCase();
    return listHasSearchValues(searchValue, stringToSearch);
}
const styles = y `
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
    footnote {
      display: block;
      margin-top: 2rem;
    }
  </style>
`;
function ProjectList() {
    const [searchValue, setSearchValue] = useState('');
    const [selectedCard, setSelectedCard] = useState(null);
    const handleSearchInput = (value) => {
        setSearchValue(value);
    };
    const handleInfoClick = (project) => {
        setSelectedCard(kebabCase(project.title));
    };
    const handleInfoCloseClick = () => {
        setSelectedCard(null);
    };
    const cardSelected = (project) => {
        return kebabCase(project.title) === selectedCard;
    };
    const hideCard = (project) => {
        return selectedCard != null && !cardSelected(project);
    };
    const projects = PORTFOLIO
        .filter(project => shouldShowProject(searchValue, project));
    return y `
    ${styles}

    <section class="border-bottom border-top">
      <div class="visuals-header">
        <h1>Visuals & Projects</h1>
        <search-box
          .keyWords=${getKeyWords(PORTFOLIO)}
          .handleSearchInput=${handleSearchInput}
        ></search-box>
      </div>

      <div class="project-holder">
        ${c(projects, (project) => kebabCase(project.title), ((project) => y `
              <project-card
                ?hidden=${hideCard(project)}
                id=${kebabCase(project.title)}
                .selected=${cardSelected(project)}
                .project=${project}
                .handleInfoClick=${handleInfoClick}
                .handleInfoCloseClick=${handleInfoCloseClick}
              ></project-card>
            `))}
      </div>
      <footnote>
          A semi-random collection of things I have worked on to help
          visually demonstrate the depth and breadth of my experience. Some
          things are big and important, others are random ideas or short
          explorations.
      </footnote>
    </section>
  `;
}
const { component } = haunted({ render: A });
customElements.define('project-list', component(ProjectList));

function scrollToId(e) {
    e.preventDefault();
    const hash = e.target.hash;
    const scrollTargetEl = document.querySelector(hash);
    const header = document.querySelector(Selector.HEADER);
    const headerHeight = header ? header.offsetHeight : 0;
    if (scrollTargetEl) {
        const scrollTargetY = scrollTargetEl.offsetTop - headerHeight;
        window.scroll({ top: scrollTargetY, behavior: 'smooth' });
        history.pushState(null, null, hash);
    }
}
const navBar = y `
  <header class="navy border-bottom">
    <nav class="container flex-auto">
      <a href="/#summary" @click=${scrollToId} class="button button-transparent">Summary</a>
      <a href="/#visuals" @click=${scrollToId} class="button button-transparent">Visuals</a>
      <a href="/#experience" @click=${scrollToId} class="button button-transparent">Experience</a>
    </nav>
  </header>
`;

const jumbotron = y `
  <section class="jumbo navy">
    <h1>Jory Phillips</h1>
    <h2>do-gooder; designer & front-end developer</h2>
  </section>
`;

const summary = y `
  <section id="summary" class="summary">
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
`;

function renderJob(job) {
    return y `
    <div class="job">
      <h2 class="title">
        <span class="cranberry">${job.place}</span>
        <span class="regular date">${job.date}</span>
      </h2>
      <p class="summary">${job.summary}</p>
    </div>
  `;
}
const jobs = y `
  <section id="experience" class="experience">
    <div class="container">
      <h1>Experience</h1>
      <div class="job-holder">
        ${RESUME.map(job => renderJob(job))}
      </div>
    </div>
  </section>
`;

const footer = y `
  <footer class="navy border-top">
    <div class="container">
      <a href="https://www.linkedin.com/in/joryphillips" class="button button-transparent">linkedin</a>
      <a class="button button-transparent" href="javascript:location='mailto:\u006a\u006f\u0072\u0079\u002e\u006c\u002e\u0070\u0068\u0069\u006c\u006c\u0069\u0070\u0073\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d';void 0">email</a>
      <a href="https://github.com/joryphillips/joryphillips.github.io" class="button button-transparent">src</a>
    </div>
  </footer>
`;

const mainPage = y `
  ${navBar}
  ${jumbotron}
  ${summary}
  <project-list id="visuals"></project-list>
  ${jobs}
  ${footer}
`;
A(mainPage, document.body);
