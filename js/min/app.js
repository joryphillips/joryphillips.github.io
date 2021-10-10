/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,t=Symbol(),i=new Map;class s{constructor(e,i){if(this._$cssResult$=!0,i!==t)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let t=i.get(this.cssText);return e&&void 0===t&&(i.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const o=e?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let i="";for(const t of e.cssRules)i+=t.cssText;return(e=>new s("string"==typeof e?e:e+"",t))(i)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var n,r;const a={toAttribute(e,t){switch(t){case Boolean:e=e?"":null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},l=(e,t)=>t!==e&&(t==t||e==e),d={attribute:!0,type:String,converter:a,reflect:!1,hasChanged:l};class c extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;null!==(t=this.l)&&void 0!==t||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,i)=>{const s=this._$Eh(i,t);void 0!==s&&(this._$Eu.set(s,i),e.push(s))})),e}static createProperty(e,t=d){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i="symbol"==typeof e?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);void 0!==s&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const o=this[e];this[t]=s,this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||d}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(o(e))}else void 0!==e&&t.push(o(e));return t}static _$Eh(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}o(){var e;this._$Ev=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,i;(null!==(t=this._$Em)&&void 0!==t?t:this._$Em=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$Em)||void 0===t||t.splice(this._$Em.indexOf(e)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{e?t.adoptedStyleSheets=i.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):i.forEach((e=>{const i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$Em)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$Em)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$Eg(e,t,i=d){var s,o;const n=this.constructor._$Eh(e,i);if(void 0!==n&&!0===i.reflect){const r=(null!==(o=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==o?o:a.toAttribute)(t,i.type);this._$Ei=e,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$Ei=null}}_$AK(e,t){var i,s,o;const n=this.constructor,r=n._$Eu.get(e);if(void 0!==r&&this._$Ei!==r){const e=n.getPropertyOptions(r),l=e.converter,d=null!==(o=null!==(s=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof l?l:null)&&void 0!==o?o:a.fromAttribute;this._$Ei=r,this[r]=d(t,e.type),this._$Ei=null}}requestUpdate(e,t,i){let s=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||l)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Ei!==e&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((e,t)=>this[t]=e)),this._$Et=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this._$Em)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(i)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$Em)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(e){return!0}update(e){void 0!==this._$ES&&(this._$ES.forEach(((e,t)=>this._$Eg(t,this[t],e))),this._$ES=void 0),this._$ET()}updated(e){}firstUpdated(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var h,u;c.finalized=!0,c.elementProperties=new Map,c.elementStyles=[],c.shadowRootOptions={mode:"open"},null===(n=globalThis.reactiveElementPolyfillSupport)||void 0===n||n.call(globalThis,{ReactiveElement:c}),(null!==(r=globalThis.reactiveElementVersions)&&void 0!==r?r:globalThis.reactiveElementVersions=[]).push("1.0.0");const p=globalThis.trustedTypes,m=p?p.createPolicy("lit-html",{createHTML:e=>e}):void 0,g=`lit$${(Math.random()+"").slice(9)}$`,f="?"+g,v=`<${f}>`,b=document,y=(e="")=>b.createComment(e),$=e=>null===e||"object"!=typeof e&&"function"!=typeof e,_=Array.isArray,w=e=>{var t;return _(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])},A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,x=/-->/g,S=/>/g,k=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,E=/'/g,C=/"/g,T=/^(?:script|style|textarea)$/i,H=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),P=new WeakMap,I=b.createTreeWalker(b,129,null,!1),M=(e,t)=>{const i=e.length-1,s=[];let o,n=2===t?"<svg>":"",r=A;for(let t=0;t<i;t++){const i=e[t];let a,l,d=-1,c=0;for(;c<i.length&&(r.lastIndex=c,l=r.exec(i),null!==l);)c=r.lastIndex,r===A?"!--"===l[1]?r=x:void 0!==l[1]?r=S:void 0!==l[2]?(T.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=k):void 0!==l[3]&&(r=k):r===k?">"===l[0]?(r=null!=o?o:A,d=-1):void 0===l[1]?d=-2:(d=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?k:'"'===l[3]?C:E):r===C||r===E?r=k:r===x||r===S?r=A:(r=k,o=void 0);const h=r===k&&e[t+1].startsWith("/>")?" ":"";n+=r===A?i+v:d>=0?(s.push(a),i.slice(0,d)+"$lit$"+i.slice(d)+g+h):i+g+(-2===d?(s.push(void 0),t):h)}const a=n+(e[i]||"<?>")+(2===t?"</svg>":"");return[void 0!==m?m.createHTML(a):a,s]};class U{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let o=0,n=0;const r=e.length-1,a=this.parts,[l,d]=M(e,t);if(this.el=U.createElement(l,i),I.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(s=I.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const e=[];for(const t of s.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(g)){const i=d[n++];if(e.push(t),void 0!==i){const e=s.getAttribute(i.toLowerCase()+"$lit$").split(g),t=/([.?@])?(.*)/.exec(i);a.push({type:1,index:o,name:t[2],strings:e,ctor:"."===t[1]?L:"?"===t[1]?O:"@"===t[1]?B:D})}else a.push({type:6,index:o})}for(const t of e)s.removeAttribute(t)}if(T.test(s.tagName)){const e=s.textContent.split(g),t=e.length-1;if(t>0){s.textContent=p?p.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],y()),I.nextNode(),a.push({type:2,index:++o});s.append(e[t],y())}}}else if(8===s.nodeType)if(s.data===f)a.push({type:2,index:o});else{let e=-1;for(;-1!==(e=s.data.indexOf(g,e+1));)a.push({type:7,index:o}),e+=g.length-1}o++}}static createElement(e,t){const i=b.createElement("template");return i.innerHTML=e,i}}function N(e,t,i=e,s){var o,n,r,a;if(t===H)return t;let l=void 0!==s?null===(o=i._$Cl)||void 0===o?void 0:o[s]:i._$Cu;const d=$(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===d?l=void 0:(l=new d(e),l._$AT(e,i,s)),void 0!==s?(null!==(r=(a=i)._$Cl)&&void 0!==r?r:a._$Cl=[])[s]=l:i._$Cu=l),void 0!==l&&(t=N(e,l._$AS(e,t.values),l,s)),t}class z{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:i},parts:s}=this._$AD,o=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:b).importNode(i,!0);I.currentNode=o;let n=I.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let t;2===l.type?t=new R(n,n.nextSibling,this,e):1===l.type?t=new l.ctor(n,l.name,l.strings,this,e):6===l.type&&(t=new G(n,this,e)),this.v.push(t),l=s[++a]}r!==(null==l?void 0:l.index)&&(n=I.nextNode(),r++)}return o}m(e){let t=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class R{constructor(e,t,i,s){var o;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cg=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=N(this,e,t),$(e)?e===j||null==e||""===e?(this._$AH!==j&&this._$AR(),this._$AH=j):e!==this._$AH&&e!==H&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.S(e):w(e)?this.M(e):this.$(e)}A(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}S(e){this._$AH!==e&&(this._$AR(),this._$AH=this.A(e))}$(e){this._$AH!==j&&$(this._$AH)?this._$AA.nextSibling.data=e:this.S(b.createTextNode(e)),this._$AH=e}T(e){var t;const{values:i,_$litType$:s}=e,o="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=U.createElement(s.h,this.options)),s);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===o)this._$AH.m(i);else{const e=new z(o,this),t=e.p(this.options);e.m(i),this.S(t),this._$AH=e}}_$AC(e){let t=P.get(e.strings);return void 0===t&&P.set(e.strings,t=new U(e)),t}M(e){_(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const o of e)s===t.length?t.push(i=new R(this.A(y()),this.A(y()),this,this.options)):i=t[s],i._$AI(o),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cg=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class D{constructor(e,t,i,s,o){this.type=1,this._$AH=j,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const o=this.strings;let n=!1;if(void 0===o)e=N(this,e,t,0),n=!$(e)||e!==this._$AH&&e!==H,n&&(this._$AH=e);else{const s=e;let r,a;for(e=o[0],r=0;r<o.length-1;r++)a=N(this,s[i+r],t,r),a===H&&(a=this._$AH[r]),n||(n=!$(a)||a!==this._$AH[r]),a===j?e=j:e!==j&&(e+=(null!=a?a:"")+o[r+1]),this._$AH[r]=a}n&&!s&&this.k(e)}k(e){e===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class L extends D{constructor(){super(...arguments),this.type=3}k(e){this.element[this.name]=e===j?void 0:e}}class O extends D{constructor(){super(...arguments),this.type=4}k(e){e&&e!==j?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class B extends D{constructor(e,t,i,s,o){super(e,t,i,s,o),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=N(this,e,t,0))&&void 0!==i?i:j)===H)return;const s=this._$AH,o=e===j&&s!==j||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==j&&(s===j||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class G{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){N(this,e)}}const F={P:"$lit$",V:g,L:f,I:1,N:M,R:z,D:w,j:N,H:R,O:D,F:O,B:B,W:L,Z:G};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var V,W;null===(h=globalThis.litHtmlPolyfillSupport)||void 0===h||h.call(globalThis,U,R),(null!==(u=globalThis.litHtmlVersions)&&void 0!==u?u:globalThis.litHtmlVersions=[]).push("2.0.0");const q=globalThis.trustedTypes,J=q?q.createPolicy("lit-html",{createHTML:e=>e}):void 0,X=`lit$${(Math.random()+"").slice(9)}$`,Q="?"+X,K=`<${Q}>`,Z=document,Y=(e="")=>Z.createComment(e),ee=e=>null===e||"object"!=typeof e&&"function"!=typeof e,te=Array.isArray,ie=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,se=/-->/g,oe=/>/g,ne=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,re=/'/g,ae=/"/g,le=/^(?:script|style|textarea)$/i,de=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),ce=Symbol.for("lit-noChange"),he=Symbol.for("lit-nothing"),ue=new WeakMap,pe=(e,t,i)=>{var s,o;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:t;let r=n._$litPart$;if(void 0===r){const e=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new be(t.insertBefore(Y(),e),e,void 0,null!=i?i:{})}return r._$AI(e),r},me=Z.createTreeWalker(Z,129,null,!1);class ge{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let o=0,n=0;const r=e.length-1,a=this.parts,[l,d]=((e,t)=>{const i=e.length-1,s=[];let o,n=2===t?"<svg>":"",r=ie;for(let t=0;t<i;t++){const i=e[t];let a,l,d=-1,c=0;for(;c<i.length&&(r.lastIndex=c,l=r.exec(i),null!==l);)c=r.lastIndex,r===ie?"!--"===l[1]?r=se:void 0!==l[1]?r=oe:void 0!==l[2]?(le.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=ne):void 0!==l[3]&&(r=ne):r===ne?">"===l[0]?(r=null!=o?o:ie,d=-1):void 0===l[1]?d=-2:(d=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?ne:'"'===l[3]?ae:re):r===ae||r===re?r=ne:r===se||r===oe?r=ie:(r=ne,o=void 0);const h=r===ne&&e[t+1].startsWith("/>")?" ":"";n+=r===ie?i+K:d>=0?(s.push(a),i.slice(0,d)+"$lit$"+i.slice(d)+X+h):i+X+(-2===d?(s.push(void 0),t):h)}const a=n+(e[i]||"<?>")+(2===t?"</svg>":"");return[void 0!==J?J.createHTML(a):a,s]})(e,t);if(this.el=ge.createElement(l,i),me.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(s=me.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const e=[];for(const t of s.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(X)){const i=d[n++];if(e.push(t),void 0!==i){const e=s.getAttribute(i.toLowerCase()+"$lit$").split(X),t=/([.?@])?(.*)/.exec(i);a.push({type:1,index:o,name:t[2],strings:e,ctor:"."===t[1]?$e:"?"===t[1]?_e:"@"===t[1]?we:ye})}else a.push({type:6,index:o})}for(const t of e)s.removeAttribute(t)}if(le.test(s.tagName)){const e=s.textContent.split(X),t=e.length-1;if(t>0){s.textContent=q?q.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],Y()),me.nextNode(),a.push({type:2,index:++o});s.append(e[t],Y())}}}else if(8===s.nodeType)if(s.data===Q)a.push({type:2,index:o});else{let e=-1;for(;-1!==(e=s.data.indexOf(X,e+1));)a.push({type:7,index:o}),e+=X.length-1}o++}}static createElement(e,t){const i=Z.createElement("template");return i.innerHTML=e,i}}function fe(e,t,i=e,s){var o,n,r,a;if(t===ce)return t;let l=void 0!==s?null===(o=i._$Cl)||void 0===o?void 0:o[s]:i._$Cu;const d=ee(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===d?l=void 0:(l=new d(e),l._$AT(e,i,s)),void 0!==s?(null!==(r=(a=i)._$Cl)&&void 0!==r?r:a._$Cl=[])[s]=l:i._$Cu=l),void 0!==l&&(t=fe(e,l._$AS(e,t.values),l,s)),t}class ve{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:i},parts:s}=this._$AD,o=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:Z).importNode(i,!0);me.currentNode=o;let n=me.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let t;2===l.type?t=new be(n,n.nextSibling,this,e):1===l.type?t=new l.ctor(n,l.name,l.strings,this,e):6===l.type&&(t=new Ae(n,this,e)),this.v.push(t),l=s[++a]}r!==(null==l?void 0:l.index)&&(n=me.nextNode(),r++)}return o}m(e){let t=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class be{constructor(e,t,i,s){var o;this.type=2,this._$AH=he,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cg=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=fe(this,e,t),ee(e)?e===he||null==e||""===e?(this._$AH!==he&&this._$AR(),this._$AH=he):e!==this._$AH&&e!==ce&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.S(e):(e=>{var t;return te(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])})(e)?this.M(e):this.$(e)}A(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}S(e){this._$AH!==e&&(this._$AR(),this._$AH=this.A(e))}$(e){this._$AH!==he&&ee(this._$AH)?this._$AA.nextSibling.data=e:this.S(Z.createTextNode(e)),this._$AH=e}T(e){var t;const{values:i,_$litType$:s}=e,o="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=ge.createElement(s.h,this.options)),s);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===o)this._$AH.m(i);else{const e=new ve(o,this),t=e.p(this.options);e.m(i),this.S(t),this._$AH=e}}_$AC(e){let t=ue.get(e.strings);return void 0===t&&ue.set(e.strings,t=new ge(e)),t}M(e){te(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const o of e)s===t.length?t.push(i=new be(this.A(Y()),this.A(Y()),this,this.options)):i=t[s],i._$AI(o),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cg=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class ye{constructor(e,t,i,s,o){this.type=1,this._$AH=he,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=he}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const o=this.strings;let n=!1;if(void 0===o)e=fe(this,e,t,0),n=!ee(e)||e!==this._$AH&&e!==ce,n&&(this._$AH=e);else{const s=e;let r,a;for(e=o[0],r=0;r<o.length-1;r++)a=fe(this,s[i+r],t,r),a===ce&&(a=this._$AH[r]),n||(n=!ee(a)||a!==this._$AH[r]),a===he?e=he:e!==he&&(e+=(null!=a?a:"")+o[r+1]),this._$AH[r]=a}n&&!s&&this.k(e)}k(e){e===he?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class $e extends ye{constructor(){super(...arguments),this.type=3}k(e){this.element[this.name]=e===he?void 0:e}}class _e extends ye{constructor(){super(...arguments),this.type=4}k(e){e&&e!==he?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class we extends ye{constructor(e,t,i,s,o){super(e,t,i,s,o),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=fe(this,e,t,0))&&void 0!==i?i:he)===ce)return;const s=this._$AH,o=e===he&&s!==he||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==he&&(s===he||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class Ae{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){fe(this,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var xe,Se,ke;null===(V=globalThis.litHtmlPolyfillSupport)||void 0===V||V.call(globalThis,ge,be),(null!==(W=globalThis.litHtmlVersions)&&void 0!==W?W:globalThis.litHtmlVersions=[]).push("2.0.0");class Ee extends c{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=pe(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!1)}render(){return ce}}Ee.finalized=!0,Ee._$litElement$=!0,null===(xe=globalThis.litElementHydrateSupport)||void 0===xe||xe.call(globalThis,{LitElement:Ee}),null===(Se=globalThis.litElementPolyfillSupport)||void 0===Se||Se.call(globalThis,{LitElement:Ee}),(null!==(ke=globalThis.litElementVersions)&&void 0!==ke?ke:globalThis.litElementVersions=[]).push("3.0.0"),String(Math.random()).slice(2),
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
let Ce,Te=!1;(()=>{try{const e={get capture(){return Te=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})(),
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
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");let He=0;function je(e){Ce=e}function Pe(){Ce=null,He=0}const Ie=Symbol("haunted.phase"),Me=Symbol("haunted.hook"),Ue=Symbol("haunted.update"),Ne=Symbol("haunted.commit"),ze=Symbol("haunted.effects"),Re=Symbol("haunted.layoutEffects");class De{update;host;virtual;[Me];[ze];[Re];constructor(e,t){this.update=e,this.host=t,this[Me]=new Map,this[ze]=[],this[Re]=[]}run(e){je(this);let t=e();return Pe(),t}_runEffects(e){let t=this[e];je(this);for(let e of t)e.call(this);Pe()}runEffects(){this._runEffects(ze)}runLayoutEffects(){this._runEffects(Re)}teardown(){this[Me].forEach((e=>{"function"==typeof e.teardown&&e.teardown()}))}}const Le=Promise.resolve().then.bind(Promise.resolve());function Oe(){let e,t=[];function i(){e=null;let i=t;t=[];for(var s=0,o=i.length;s<o;s++)i[s]()}return function(s){t.push(s),null==e&&(e=Le(i))}}const Be=Oe(),Ge=Oe();class Fe{renderer;host;state;[Ie];_updateQueued;constructor(e,t){this.renderer=e,this.host=t,this.state=new De(this.update.bind(this),t),this[Ie]=null,this._updateQueued=!1}update(){this._updateQueued||(Be((()=>{let e=this.handlePhase(Ue);Ge((()=>{this.handlePhase(Ne,e),Ge((()=>{this.handlePhase(ze)}))})),this._updateQueued=!1})),this._updateQueued=!0)}handlePhase(e,t){switch(this[Ie]=e,e){case Ne:return this.commit(t),void this.runEffects(Re);case Ue:return this.render();case ze:return this.runEffects(ze)}this[Ie]=null}render(){return this.state.run((()=>this.renderer.call(this.host,this.host)))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}}function Ve(e){class t extends Fe{frag;constructor(e,t,i){super(e,i||t),this.frag=t}commit(t){e(t,this.frag)}}return function(e,i,s){const o=(s||i||{}).baseElement||HTMLElement,{observedAttributes:n=[],useShadowDOM:r=!0,shadowRootInit:a={}}=s||i||{};class l extends o{_scheduler;static get observedAttributes(){return e.observedAttributes||n||[]}constructor(){super(),!1===r?this._scheduler=new t(e,this):(this.attachShadow({mode:"open",...a}),this._scheduler=new t(e,this.shadowRoot,this))}connectedCallback(){this._scheduler.update()}disconnectedCallback(){this._scheduler.teardown()}attributeChangedCallback(e,t,i){if(t===i)return;let s=""===i||i;Reflect.set(this,((e="")=>e.replace(/-+([a-z])?/g,((e,t)=>t?t.toUpperCase():"")))(e),s)}}const d=new Proxy(o.prototype,{getPrototypeOf:e=>e,set(e,t,i,s){let o;return t in e?(o=Object.getOwnPropertyDescriptor(e,t),o&&o.set?(o.set.call(s,i),!0):(Reflect.set(e,t,i,s),!0)):(o="symbol"==typeof t||"_"===t[0]?{enumerable:!0,configurable:!0,writable:!0,value:i}:function(e){let t=e,i=!1;return Object.freeze({enumerable:!0,configurable:!0,get:()=>t,set(e){i&&t===e||(i=!0,t=e,this._scheduler&&this._scheduler.update())}})}(i),Object.defineProperty(s,t,o),o.set&&o.set.call(s,i),!0)}});return Object.setPrototypeOf(l.prototype,d),l}}class We{id;state;constructor(e,t){this.id=e,this.state=t}}function qe(e,...t){let i=He++,s=Ce[Me],o=s.get(i);return o||(o=new e(i,Ce,...t),s.set(i,o)),o.update(...t)}function Je(e){return qe.bind(null,e)}function Xe(e){return Je(class extends We{callback;lastValues;values;_teardown;constructor(t,i,s,o){super(t,i),e(i,this)}update(e,t){this.callback=e,this.values=t}call(){this.values&&!this.hasChanged()||this.run(),this.lastValues=this.values}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(){"function"==typeof this._teardown&&this._teardown()}hasChanged(){return!this.lastValues||this.values.some(((e,t)=>this.lastValues[t]!==e))}})}function Qe(e,t){e[ze].push(t)}const Ke=Xe(Qe),Ze=Je(class extends We{Context;value;_ranEffect;_unsubscribe;constructor(e,t,i){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Qe(t,this)}update(e){if(this.state.virtual)throw new Error("can't be used with virtual components");return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const t={Context:e,callback:this._updater};this.state.host.dispatchEvent(new CustomEvent("haunted.context",{detail:t,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:i=null,value:s}=t;this.value=i?s:e.defaultValue,this._unsubscribe=i}teardown(){this._unsubscribe&&this._unsubscribe()}});Je(class extends We{value;values;constructor(e,t,i,s){super(e,t),this.value=i(),this.values=s}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some(((e,t)=>this.values[t]!==e))}}),Xe((function(e,t){e[Re].push(t)}));const Ye=Je(class extends We{args;constructor(e,t,i){super(e,t),this.updater=this.updater.bind(this),"function"==typeof i&&(i=i()),this.makeArgs(i)}update(){return this.args}updater(e){if("function"==typeof e){const t=e,[i]=this.args;e=t(i)}this.makeArgs(e),this.state.update()}makeArgs(e){this.args=Object.freeze([e,this.updater])}});
/**
 * @license
 * Portions Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Promise.resolve(),Je(class extends We{reducer;currentState;constructor(e,t,i,s,o){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=void 0!==o?o(s):s}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}});const{component:et}=function({render:e}){const t=Ve(e),i=function(e){return t=>{const i={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.listeners=new Set,this.addEventListener("haunted.context",this)}disconnectedCallback(){this.removeEventListener("haunted.context",this)}handleEvent(e){const{detail:t}=e;t.Context===i&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),e.stopPropagation())}unsubscribe(e){this.listeners.delete(e)}set value(e){this._value=e;for(let t of this.listeners)t(e)}get value(){return this._value}},Consumer:e((function({render:e}){return e(Ze(i))})),defaultValue:t};return i}}(t);return{component:t,createContext:i}}({render:pe}),tt=de`
  <style>
    section {
      padding-top: 4rem;
      padding-bottom: 4rem;
      padding-left: 1rem;
      padding-right: 1rem;
    }

    section.jumbo {
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
      bottom: 0;
    }

    footer a {
      padding-top: 1rem;
      padding-bottom: 1rem;
      float: left;
      font-size: .75rem;
    }

    footer .container {
      flex: 1 1 auto;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-bottom: .5rem;
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
`;function it(e){return e.toLowerCase().replace(/[^a-z0-9]+/gi,"-")}function st(){return new Promise((e=>requestAnimationFrame((()=>requestAnimationFrame((()=>e()))))))}
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var ot;function nt(e,t,i="smooth"){const s=e.querySelector(t),o=e.querySelector(ot.HEADER),n=o?o.offsetHeight:0;if(s){const e=s.offsetTop-n;window.scroll({top:e,behavior:i})}}!function(e){e.HEADER="header",e.PROJECT_IMAGE=".image-container img",e.SEARCH_INPUT='input[type="search"]'}(ot||(ot={}));let rt=!0;function at({context:e,setNavFocus:t}){var i;i=i=>function({location:e,context:t,setNavFocus:i}){if(i(e.hash),!t)return;const s=e.hash||"#home";rt?window.addEventListener("load",(async()=>{await st(),nt(t,s,"instant"),rt=!1})):nt(t,s)}({location:i,context:e,setNavFocus:t}),document.body.addEventListener("click",(e=>{if(e.defaultPrevented||0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)return;const t=e.composedPath().filter((e=>"A"===e.tagName))[0];if(!t||t.target||t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;const s=t.href;if(!s||-1!==s.indexOf("mailto:"))return;const o=window.location,n=o.origin||o.protocol+"//"+o.host;0===s.indexOf(n)&&(e.preventDefault(),s!==o.href&&(window.history.pushState({},"",s),i(o,e)))})),window.addEventListener("popstate",(e=>i(window.location,e))),i(window.location,null)}const lt=de`
  <section id="home" class="jumbo navy">
    <h1>Jory Phillips</h1>
    <h2>do-gooder; designer & front-end developer</h2>
  </section>
`,dt=de`
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
`,ct=[{title:"Mock for plan review UI",date:"2021",description:"A high-fidelity mock for a user interface allowing fluid communication between an agency and applicant.",imageSources:["plan_review_mock.jpg"],keywords:["software","ux","ui","mock","communication"]},{title:"front-end tech lead",date:"2020-2021",description:"I was the tech lead for a team of front-end engineers working within the design systems management branch of Material. I prototyped features, led building a production-grade app for managing tokens and design system details, and mentored and helped other engineers add features.",imageSources:["Google_Material_Design_Logo.svg"],keywords:["software","typescript","tooling","develop","engineer","Google","Material"]},{title:"Gallery.io web engineering",date:"2019",description:"Google's Material Gallery web appplication evolved from iterations of earlier prototype applications written in ES5-era AngularJS. I led team-wide efforts to modernize the application, resulting in thousands of tech debt issues closed, more dev-friendly componentization, and a bundle size reduction of at least 33%. While the app is being turned down due to the popularity of Figma, I am very proud of the progress we made on it and the lessons it taught.",href:"https://gallery.io",imageSources:["gallery.jpg"],keywords:["software","typescript","tooling","modernization","develop","engineer","Google","Material"]},{title:"web performance analysis",date:"2020",href:"https://github.com/joryphillips/joryphillips.github.io/issues/8#issuecomment-611778792",imageSources:["web-perf.png"],keywords:["software","develop","engineer","performance","tooling"],description:"I did a performance assessment on my own website and wrote up findings in a GitHub issue. If you know of a page that is loading too slowly, the methods I applied might help!"},{title:"full app design for Android Build",imageSources:["test-result-details.png"],keywords:["ux","ui","develop","Google","Android","typescript","mock"],description:"I was the only UXer on the Android Build team for a while, which meant I got to lead the design of some very complex things, like this tool used to help engineers chase down broken builds and failing tests. This was an early mock, and most of what is represented here has been built and refined by the team."},{title:"build and test status wireframe",imageSources:["target-row-pies-wireframe.jpg"],keywords:["ux","ui","wireframe","Google","Android"],description:"This was a quick ugly iPad drawing done to visually prove out the concept of integrating complext test and basic build status information. It was then engineered by me and others on the Android Build team. I implemented a pretty sweet web component for displaying those test results pie charts, too. 😁 🥧"},{title:"concept diagrams",imageSources:["grid-test-views@3x.png"],keywords:["conceptual","diagram","communication","Google","Android"],description:"These are a couple conceptual diagrams used to discuss the multidimensional complexity of tracking builds, tests, and devices. Included here mostly to add additional visual interest. 🙃"},{title:"notification CRUD app",imageSources:["notification-crud-edit.png"],keywords:["ux","ui","develop","Google","Android","typescript"],description:"I designed and implemented a tool for adding, editing, and removing system alerts across Android internal sites."},{title:"lightweight webpage generator",imageSources:["ux-page-crud.png"],keywords:["ux","ui","develop","Google","Android"],description:"I made web app that allowed Google teams to generate their own internal sites, pulling content from Sheets, Drive, custom Markdown, and Google's internal bug reporting tool. This tool helped get at least two versions of Android OS get designed and shipped on time."},{title:"mojibrush.co ui/ux + oss contributions",imageSources:["moji-brush.png"],href:"https://mojibrush.co",keywords:["ux","ui","develop","fun"],description:"I wireframed the UI & UX for this spectacular progressive web app on a pizza box in a microkitchen, then helped build it."},{title:"make a webpage from Google Sheets",imageSources:["ux-sheet-stepper.png"],keywords:["ux","ui","develop","Google","Android"],description:"At Google there is a common need to quickly spin up websites that pull content from Google Sheets. I made a web app that allowed people to make pages that do that, and walked them through validation, column select, sort options, etc."},{title:"four shipped Material emoji",imageSources:["four-material-emoji.svg"],keywords:["illustration","Material","fun","Google","Android"],description:"I designed these four emoji for the release of Android 6. Almost all emojis have been updated since then, but my design for Reminder Ribbon got put back into use for Android 12!"},{title:"imagery exploration",imageSources:["dichotomy-01.jpg"],keywords:["presentation","conceptual","communication","Google","Android"],description:"Every designer and presenter eventually has to come up with imagery that helps convey a problem or a solution. This is one I made to help in a presentation about device notification overload."},{title:"identity/branding illustrations",imageSources:["droid-4-up.svg"],keywords:["illustration","fun","Google","Android"],description:"I designed these for the Android UX research team as an exercise in helping them achieve brand cohesiveness. The Android figurine is a beloved among research participants, making it ideal as a character-defining visual representation for Android researchers."},{title:"dancing t-rex",imageSources:["dancing-dino.gif"],keywords:["fun","Google","Android"],description:"I did not design this dinosaur, but I did make him dance."},{title:"Global Brand Works Website",date:"2015",imageSources:["gbw.jpg"],description:"I designed and developed the Global Brand Works website with legibility, navigation, and mobile readiness in mind. The site was completely custom-built and the overall design direction has been steadfast for a half decade! For a time, I also served as the Creative Director for this boutique branding agency and helped their clients with general design, graphic, and presentation needs.",href:"https://globalbrandworks.com/",keywords:["ux","ui","develop","communication","freelance"]},{title:"Wall Clock Product Design/Prototype",date:"2010",imageSources:["heathrow-clock.svg"],description:"Tasked with coming up with product ideas that could build upon notNeutral's (Rios Clementi Hale Studio's product design brand) successful CityPlates, I started analyzing aerial photographs of different cities for inspiration. I was especially drawn to the way airports look from above. This London Heathrow graphic was originally presented as an idea for a large-scale wall graphic and clock, with the runways as moving hands. Here I have streamlined the original Illustrator file with SVG and used Javascript to make it a functional time-telling graphic.",keywords:["conceptual","prototyping","maps"]},{title:"Mapping & Data Analysis",date:"2009",imageSources:["pub-facilities-map.svg"],description:"I designed and created this map in Adobe Illustrator after exporting the data from ArcGIS. The map was originally used at multiple scales in a presentation to elected officials and planners to describe the abundance of public facilities within five miles of the Univeral Studios site. The icons are based on universally-recognized symbols for the activities they represent.",keywords:["conceptual","urban design","urban planning","communication","maps"]},{title:"Universal Studios Master Plan",date:"2011",imageSources:["usmp.png"],description:"While working at Rios Clementi Hale Studios, I produced materials and coordinated a team of multidisciplinary designers to help Universal Studios create an 'entitlement package' that adopted their new master plan. The project's needs constantly shifted, and included maintaining a building inventory, creating view simulations, 3D modeling, mapping, diagramming, and preparing various presentation materials. This important plan was subsequently adopted by the City of Los Angeles and the County of Los Angeles.",keywords:["urban design","urban planning","communication"]},{title:"not a real emoji",imageSources:["incredulous_goat.png"],keywords:["fun","goat","emoji"],description:"Like the dancing t-rex, I designed neither the goat, nor the sunglasses, but I did put one on the other to make a superior emoji."}];const ht=de`
  <section id="experience" class="experience">
    <div class="container">
      <h1>Experience</h1>
      <div class="job-holder">
        ${[{date:"Sept 2015 - Sept 2021",place:"Google, UX Engineer",summary:"Designed & developed apps, UIs, widgets & ways to share & shape actionable information. Started as web designer; finished as a tech lead.",detail:"Developed a web app from conception through implementation to allow the Android UX team to better share their work. Developed a rapid prototyping app for the Google Store UX team. Designed and developed a web app for UX researchers to store, find, and share study findings. Also designed identity-building illustrations and several shipped Material-design emoji."},{date:"Jan 2014 - Sept 2015",place:"Freelance Designer/Developer",summary:"Designed & built web sites, apps, presentations; general design consulting.",detail:"Designed and developed a handful of client websites, also providing messaging, content advice, graphic design, and production. Developed a prototype/MVP web app to help medical clinics with green business guidelines. Consulted as a Creative Director for a boutique branding firm, including communication, visual design, and technical advice."},{date:"Aug 2011 - Dec 2013",place:"City of Santa Monica",summary:"Revised framework for future development; managed  engagement & analysis; delivered lots of presentations.",detail:"Led effort to rewrite City's zoning code. Designed and produced multi-platform content: reports, presentations, graphics, engagement materials for print, broadcast, and web. Result: a draft zoning ordinance for public review."},{date:"Jul 2008 - Aug 2011",place:"Rios Clementi Hale Studios",summary:"Bridged the gap between design and law to help move a significant destination and economic engine forward.",detail:"Helped get the Universal Studios Master Plan adopted. Design, coordination, and production of conceptual drawings, illustrations, 3D models, multi-format presentations, maps, layout & publishing of documents, and other materials."},{date:"May 2006 - Jul 2008",place:"City of West Hollywood",summary:"Analyzed & delivered recommendations regarding other people's well-designed, and not well-designed, development proposals.",detail:"Analysis and presentation of urban design and planning-related issues."},{date:"Apr 2000 - Feb 2006",place:"City of Seattle",summary:"Led major policy changes to help make Seattle more livable, walkable, and sustainable.",detail:"Produced plans, reports, graphics, and presentations leading to tangible improvements in Seattle's physical environment. First urban planner at the City of Seattle to use digital 3D modeling to inform outreach and analysis related to changes to zoning and building typologies."},{date:"Aug 1997 - April 2000",place:"Arai/Jackson Architects & Planners",summary:"Designed & produced posters and giant documents; learned to manage projects; learned from plenty of mistakes.",detail:"Design, production, content of various urban design and planning projects."}].map((e=>function(e){return de`
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
`,ut=de`
  <footer class="navy border-top">
    <div class="container">
      <a href="https://www.linkedin.com/in/joryphillips" class="button button-transparent">linkedin</a>
      <a class="button button-transparent" href="javascript:location='mailto:\u006a\u006f\u0072\u0079\u002e\u006c\u002e\u0070\u0068\u0069\u006c\u006c\u0069\u0070\u0073\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d';void 0">email</a>
      <a href="https://github.com/joryphillips/joryphillips.github.io" class="button button-transparent">src</a>
    </div>
  </footer>
`,pt=de`
  <style>
    :host {
      z-index: 2;
      left: 0;
      right: 0;
      top: 0;
      position: fixed;
      background-color: #f0f0f0;
    }

    nav {
      flex: 1 1 auto;
    }

    nav a {
      padding-top: 1rem;
      padding-bottom: 1rem;
      float: left;
    }

    .container {
      display: block;
      max-width: 40rem;
      margin: 0 auto;
    }

    .navy {
      color: rgba(0, 32, 66, 0.9);
    }

    .border-bottom {
      border-bottom-style: solid;
      border-bottom-width: 1px;
      border-bottom-color: rgba(0, 0, 0, .125);
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

    .button-transparent {
      position: relative;
      z-index: 2;
      color: inherit;
      background-color: transparent;
      border-radius: 0;
      border: 1px solid transparent;
    }

    .button:focus, button:focus, a:focus {
      background-color: rgb(115 179 221 / 17%);
      outline: 2px solid hsl(211deg 100% 40% / 90%)!important;
    }

    .button:focus, button:focus {
      outline-offset: -2px!important;
    }
  </style>
`;customElements.define("nav-bar",et((function({navFocus:e=""}){return Ke((()=>{!function(e,t){const i=t.shadowRoot?.querySelectorAll("a");if(!i)return;if(!e){for(const e of Array.from(i))e.blur();return}Array.from(i).find((t=>t.hash===e))?.focus()}(e,this)}),[e]),de`
    ${pt}

    <header class="navy border-bottom">
      <nav class="container">
        <a href="#summary" class="button button-transparent">Summary</a>
        <a href="#visuals" class="button button-transparent">Visuals</a>
        <a href="#experience" class="button button-transparent">Experience</a>
      </nav>
    </header>
  `})));
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const mt=1,gt=2,ft=e=>(...t)=>({_$litDirective$:e,values:t});class vt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{H:bt}=F,yt=()=>document.createComment(""),$t=(e,t,i)=>{var s;const o=e._$AA.parentNode,n=void 0===t?e._$AB:t._$AA;if(void 0===i){const t=o.insertBefore(yt(),n),s=o.insertBefore(yt(),n);i=new bt(t,s,e,e.options)}else{const t=i._$AB.nextSibling,r=i._$AM,a=r!==e;if(a){let t;null===(s=i._$AQ)||void 0===s||s.call(i,e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==r._$AU&&i._$AP(t)}if(t!==n||a){let e=i._$AA;for(;e!==t;){const t=e.nextSibling;o.insertBefore(e,n),e=t}}}return i},_t=(e,t,i=e)=>(e._$AI(t,i),e),wt={},At=e=>{var t;null===(t=e._$AP)||void 0===t||t.call(e,!1,!0);let i=e._$AA;const s=e._$AB.nextSibling;for(;i!==s;){const e=i.nextSibling;i.remove(),i=e}},xt=(e,t,i)=>{const s=new Map;for(let o=t;o<=i;o++)s.set(e[o],o);return s},St=ft(class extends vt{constructor(e){if(super(e),e.type!==gt)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let s;void 0===i?i=t:void 0!==t&&(s=t);const o=[],n=[];let r=0;for(const t of e)o[r]=s?s(t,r):r,n[r]=i(t,r),r++;return{values:n,keys:o}}render(e,t,i){return this.dt(e,t,i).values}update(e,[t,i,s]){var o;const n=(e=>e._$AH)(e),{values:r,keys:a}=this.dt(t,i,s);if(!Array.isArray(n))return this.ct=a,r;const l=null!==(o=this.ct)&&void 0!==o?o:this.ct=[],d=[];let c,h,u=0,p=n.length-1,m=0,g=r.length-1;for(;u<=p&&m<=g;)if(null===n[u])u++;else if(null===n[p])p--;else if(l[u]===a[m])d[m]=_t(n[u],r[m]),u++,m++;else if(l[p]===a[g])d[g]=_t(n[p],r[g]),p--,g--;else if(l[u]===a[g])d[g]=_t(n[u],r[g]),$t(e,d[g+1],n[u]),u++,g--;else if(l[p]===a[m])d[m]=_t(n[p],r[m]),$t(e,n[u],n[p]),p--,m++;else if(void 0===c&&(c=xt(a,m,g),h=xt(l,u,p)),c.has(l[u]))if(c.has(l[p])){const t=h.get(a[m]),i=void 0!==t?n[t]:null;if(null===i){const t=$t(e,n[u]);_t(t,r[m]),d[m]=t}else d[m]=_t(i,r[m]),$t(e,n[u],i),n[t]=null;m++}else At(n[p]),p--;else At(n[u]),u++;for(;m<=g;){const t=$t(e,d[g+1]);_t(t,r[m]),d[m++]=t}for(;u<=p;){const e=n[u++];null!==e&&At(e)}return this.ct=a,((e,t=wt)=>{e._$AH=t})(e,d),H}}),kt=ft(class extends vt{constructor(e){var t;if(super(e),e.type!==mt||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var i,s;if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.et=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!(null===(i=this.et)||void 0===i?void 0:i.has(e))&&this.st.add(e);return this.render(t)}const o=e.element.classList;this.st.forEach((e=>{e in t||(o.remove(e),this.st.delete(e))}));for(const e in t){const i=!!t[e];i===this.st.has(e)||(null===(s=this.et)||void 0===s?void 0:s.has(e))||(i?(o.add(e),this.st.add(e)):(o.remove(e),this.st.delete(e)))}return H}}),Et=de`
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
`,Ct=e=>e,Tt={behavior:"smooth",block:"nearest"};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */customElements.define("search-input",et((function({keyWords:e=new Set,handleSearchInput:t=Ct}){const[i,s]=Ye(!1),[o,n]=Ye(void 0),[r,a]=Ye(null),[l,d]=Ye(""),c=this.shadowRoot?.querySelector("#listbox"),h=e=>{d(e),s(!i),t(e)};return de`
    ${Et}
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
        @input=${e=>{const{value:i}=e.composedPath().find((e=>"INPUT"===e.tagName));o&&clearTimeout(o),n(window.setTimeout((()=>{t(i)}),350))}}
        @focus=${()=>{s(!0)}}
        @blur=${()=>{a(null),i&&s(!1)}}
        @keyup=${i=>{const{key:o}=i;switch(o){case"ArrowDown":(()=>{let t;s(!0),t=null==r||r===e.size-1?0:r+1,c&&c.children[t].scrollIntoView(Tt),a(t)})();break;case"ArrowUp":(()=>{let t;t=null==r||0===r?e.size-1:r-1,c&&c.children[t].scrollIntoView(Tt),a(t)})();break;case"Escape":t(""),a(null),s(!1);break;case"Enter":if(null==r)break;d([...e][r]),t([...e][r]),s(!1)}}}
      >
    </div>

    <ul
      id="listbox"
      role="listbox"
      aria-expanded=${i}
      class=${kt({show:i})}
    >${[...e].map(((e,t)=>de`
        <li
          role="option"
          ?active=${t===r}
          @mousedown=${()=>h(e)}>${e}</li>
      `))}
    </ul>
  `})));const Ht=de`
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

    .description {
      margin: .5rem;
      line-height: 1.7;
    }

    .description[hidden] {
      visibility: hidden;
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

    .width-100 {
      width: 100%
    }

    .image-container {
      display: flex;
      height: 300px;
      width: 100%;
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

    :host([selected]) button.image-container {
      pointer-events: none;
    }

    button.image-container:focus {
      outline: 2px solid hsl(211deg 100% 40% / 90%)!important;
    }

    button.image-container:focus, button.image-container:hover {
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

    button {
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

    button.close {
      margin: 1rem 0 0 .5rem;
      height: 2.5rem;
      border: rgba(0, 0, 0, .125);
      background-color: #f0f0f0;
      color: rgba(0, 32, 66, 0.9);
    }

    button.close[hidden] {
      visibility: hidden;
    }

    button.close:focus {
      outline: 2px solid hsl(211deg 100% 40% / 90%)!important;
    }

    button.close:hover, button.close:focus {
      background-color: rgb(115 179 221 / 17%);
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
`;function jt(e){const t=e.shadowRoot?.querySelector(ot.PROJECT_IMAGE);t&&t.dataset.src&&(t.src=t.dataset.src,async function(e,t){e.src.indexOf("heathrow-clock.svg")>-1&&(await import("./clock-8b7f62f2.js")).addClockPrototype(e,t)}(t,e),t.classList.add("visible"))}customElements.define("project-card",et((function({project:e,handleInfoClick:t,handleInfoCloseClick:i,selected:s}){Ke((()=>{!function(e,t){const i=new IntersectionObserver((e=>{for(const s of e)if(s.isIntersecting){const e=s.target;t(e),i.unobserve(e)}}));i.observe(e)}(this,jt)}),[]);const o="./images/"+e.imageSources[0];return de`
    ${Ht}

    <button
      tabindex=${s?-1:0}
      class="image-container"
      aria-label="Get more project info"
      @click=${()=>t(e)}
    ><img
        class="image block"
        data-src="${o}"
        alt="image of ${e.title}">
    </button>
    <div class="project-card-title">
      <h2 class="title">${e.title}</h2>
      <div class="info-icons">
        ${e.href?de`
          <a class="link" href="${e.href}">
            <img src="${"./images/"}launch-black-18dp.svg" alt="External link">
            <span class="visible-hidden">Go to project reference</span>
          </a>
        `:""}
      </div>
    </div>
    <p ?hidden=${!s} class="description">${e.description}</p>
    <button
      ?hidden=${!s}
      class="close"
      aria-label="Close detail and return to full project list"
      @click=${i}
    >Back to project list</button>
  `}),{observedAttributes:["selected"]}));const Pt=de`
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
    search-box[hidden] {
      visibility: hidden;
    }
    project-card[hidden] {
      visibility: hidden;
    }
  </style>
`;customElements.define("project-list",et((function(){const[e,t]=Ye(""),[i,s]=Ye(null),[o,n]=Ye(void 0),r=e=>{n(window.scrollY);const t=this.shadowRoot?.querySelector("section");t&&scrollTo({top:t.offsetTop}),s(it(e.title))},a=async()=>{s(null),await st(),scrollTo({top:o}),n(void 0)},l=e=>it(e.title)===i,d=ct.filter((t=>function(e,t){const{keywords:i,title:s}=t;return function(e,t){let i=!1;const s=e.toLowerCase().split(" ");for(let e=0;e<s.length;e++){const o=s[e].trim();i=t.toLowerCase().includes(o)}return i}(e,i.join(" ")+" "+s.toLowerCase())}(e,t)));return de`
    ${Pt}

    <section class="border-bottom border-top">
      <div class="visuals-header">
        <h1>Visuals & Projects</h1>
        <search-input
          ?hidden=${!!i}
          .keyWords=${function(e){const t=new Set;if(e)for(const i of e)for(const e of i.keywords)t.add(e.toLowerCase());return t}(ct)}
          .handleSearchInput=${e=>{t(e)}}
        ></search-input>
      </div>

      <div class="project-holder">
        ${St(d,(e=>it(e.title)),(e=>de`
              <project-card
                ?hidden=${(e=>null!=i&&!l(e))(e)}
                id=${it(e.title)}
                ?selected=${l(e)}
                .project=${e}
                .handleInfoClick=${r}
                .handleInfoCloseClick=${a}
              ></project-card>
            `))}
      </div>
    </section>
  `}))),customElements.define("app-component",et((function(){const[e,t]=Ye(""),[i,s]=Ye("");return Ke((()=>{at({context:this.shadowRoot,setNavFocus:t})}),[]),de`
    ${tt}

    <nav-bar .navFocus=${e}></nav-bar>

    ${i?de`<project-detail></project-detail>`:de`
        ${lt}
        ${dt}
        <project-list id="visuals"></project-list>
        ${ht}`}

    ${ut}
  `})));
//# sourceMappingURL=app.js.map
