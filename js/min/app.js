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
var h,u;c.finalized=!0,c.elementProperties=new Map,c.elementStyles=[],c.shadowRootOptions={mode:"open"},null===(n=globalThis.reactiveElementPolyfillSupport)||void 0===n||n.call(globalThis,{ReactiveElement:c}),(null!==(r=globalThis.reactiveElementVersions)&&void 0!==r?r:globalThis.reactiveElementVersions=[]).push("1.0.0");const p=globalThis.trustedTypes,m=p?p.createPolicy("lit-html",{createHTML:e=>e}):void 0,g=`lit$${(Math.random()+"").slice(9)}$`,f="?"+g,b=`<${f}>`,v=document,y=(e="")=>v.createComment(e),w=e=>null===e||"object"!=typeof e&&"function"!=typeof e,$=Array.isArray,_=e=>{var t;return $(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])},A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,x=/-->/g,S=/>/g,k=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,E=/'/g,C=/"/g,P=/^(?:script|style|textarea)$/i,j=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),T=Symbol.for("lit-noChange"),I=Symbol.for("lit-nothing"),U=new WeakMap,H=(e,t,i)=>{var s,o;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:t;let r=n._$litPart$;if(void 0===r){const e=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new L(t.insertBefore(y(),e),e,void 0,null!=i?i:{})}return r._$AI(e),r},M=v.createTreeWalker(v,129,null,!1),R=(e,t)=>{const i=e.length-1,s=[];let o,n=2===t?"<svg>":"",r=A;for(let t=0;t<i;t++){const i=e[t];let a,l,d=-1,c=0;for(;c<i.length&&(r.lastIndex=c,l=r.exec(i),null!==l);)c=r.lastIndex,r===A?"!--"===l[1]?r=x:void 0!==l[1]?r=S:void 0!==l[2]?(P.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=k):void 0!==l[3]&&(r=k):r===k?">"===l[0]?(r=null!=o?o:A,d=-1):void 0===l[1]?d=-2:(d=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?k:'"'===l[3]?C:E):r===C||r===E?r=k:r===x||r===S?r=A:(r=k,o=void 0);const h=r===k&&e[t+1].startsWith("/>")?" ":"";n+=r===A?i+b:d>=0?(s.push(a),i.slice(0,d)+"$lit$"+i.slice(d)+g+h):i+g+(-2===d?(s.push(void 0),t):h)}const a=n+(e[i]||"<?>")+(2===t?"</svg>":"");return[void 0!==m?m.createHTML(a):a,s]};class D{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let o=0,n=0;const r=e.length-1,a=this.parts,[l,d]=R(e,t);if(this.el=D.createElement(l,i),M.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(s=M.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const e=[];for(const t of s.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(g)){const i=d[n++];if(e.push(t),void 0!==i){const e=s.getAttribute(i.toLowerCase()+"$lit$").split(g),t=/([.?@])?(.*)/.exec(i);a.push({type:1,index:o,name:t[2],strings:e,ctor:"."===t[1]?G:"?"===t[1]?B:"@"===t[1]?V:N})}else a.push({type:6,index:o})}for(const t of e)s.removeAttribute(t)}if(P.test(s.tagName)){const e=s.textContent.split(g),t=e.length-1;if(t>0){s.textContent=p?p.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],y()),M.nextNode(),a.push({type:2,index:++o});s.append(e[t],y())}}}else if(8===s.nodeType)if(s.data===f)a.push({type:2,index:o});else{let e=-1;for(;-1!==(e=s.data.indexOf(g,e+1));)a.push({type:7,index:o}),e+=g.length-1}o++}}static createElement(e,t){const i=v.createElement("template");return i.innerHTML=e,i}}function O(e,t,i=e,s){var o,n,r,a;if(t===T)return t;let l=void 0!==s?null===(o=i._$Cl)||void 0===o?void 0:o[s]:i._$Cu;const d=w(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===d?l=void 0:(l=new d(e),l._$AT(e,i,s)),void 0!==s?(null!==(r=(a=i)._$Cl)&&void 0!==r?r:a._$Cl=[])[s]=l:i._$Cu=l),void 0!==l&&(t=O(e,l._$AS(e,t.values),l,s)),t}class z{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:i},parts:s}=this._$AD,o=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:v).importNode(i,!0);M.currentNode=o;let n=M.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let t;2===l.type?t=new L(n,n.nextSibling,this,e):1===l.type?t=new l.ctor(n,l.name,l.strings,this,e):6===l.type&&(t=new F(n,this,e)),this.v.push(t),l=s[++a]}r!==(null==l?void 0:l.index)&&(n=M.nextNode(),r++)}return o}m(e){let t=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class L{constructor(e,t,i,s){var o;this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cg=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=O(this,e,t),w(e)?e===I||null==e||""===e?(this._$AH!==I&&this._$AR(),this._$AH=I):e!==this._$AH&&e!==T&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.S(e):_(e)?this.M(e):this.$(e)}A(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}S(e){this._$AH!==e&&(this._$AR(),this._$AH=this.A(e))}$(e){this._$AH!==I&&w(this._$AH)?this._$AA.nextSibling.data=e:this.S(v.createTextNode(e)),this._$AH=e}T(e){var t;const{values:i,_$litType$:s}=e,o="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=D.createElement(s.h,this.options)),s);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===o)this._$AH.m(i);else{const e=new z(o,this),t=e.p(this.options);e.m(i),this.S(t),this._$AH=e}}_$AC(e){let t=U.get(e.strings);return void 0===t&&U.set(e.strings,t=new D(e)),t}M(e){$(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const o of e)s===t.length?t.push(i=new L(this.A(y()),this.A(y()),this,this.options)):i=t[s],i._$AI(o),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cg=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class N{constructor(e,t,i,s,o){this.type=1,this._$AH=I,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=I}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const o=this.strings;let n=!1;if(void 0===o)e=O(this,e,t,0),n=!w(e)||e!==this._$AH&&e!==T,n&&(this._$AH=e);else{const s=e;let r,a;for(e=o[0],r=0;r<o.length-1;r++)a=O(this,s[i+r],t,r),a===T&&(a=this._$AH[r]),n||(n=!w(a)||a!==this._$AH[r]),a===I?e=I:e!==I&&(e+=(null!=a?a:"")+o[r+1]),this._$AH[r]=a}n&&!s&&this.k(e)}k(e){e===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class G extends N{constructor(){super(...arguments),this.type=3}k(e){this.element[this.name]=e===I?void 0:e}}class B extends N{constructor(){super(...arguments),this.type=4}k(e){e&&e!==I?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class V extends N{constructor(e,t,i,s,o){super(e,t,i,s,o),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=O(this,e,t,0))&&void 0!==i?i:I)===T)return;const s=this._$AH,o=e===I&&s!==I||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==I&&(s===I||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class F{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){O(this,e)}}const q={P:"$lit$",V:g,L:f,I:1,N:R,R:z,D:_,j:O,H:L,O:N,F:B,B:V,W:G,Z:F};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var W,J,X;null===(h=globalThis.litHtmlPolyfillSupport)||void 0===h||h.call(globalThis,D,L),(null!==(u=globalThis.litHtmlVersions)&&void 0!==u?u:globalThis.litHtmlVersions=[]).push("2.0.0");class Q extends c{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=H(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!1)}render(){return T}}Q.finalized=!0,Q._$litElement$=!0,null===(W=globalThis.litElementHydrateSupport)||void 0===W||W.call(globalThis,{LitElement:Q}),null===(J=globalThis.litElementPolyfillSupport)||void 0===J||J.call(globalThis,{LitElement:Q}),(null!==(X=globalThis.litElementVersions)&&void 0!==X?X:globalThis.litElementVersions=[]).push("3.0.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Z=1,K=2,Y=e=>(...t)=>({_$litDirective$:e,values:t});class ee{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{H:te}=q,ie=()=>document.createComment(""),se=(e,t,i)=>{var s;const o=e._$AA.parentNode,n=void 0===t?e._$AB:t._$AA;if(void 0===i){const t=o.insertBefore(ie(),n),s=o.insertBefore(ie(),n);i=new te(t,s,e,e.options)}else{const t=i._$AB.nextSibling,r=i._$AM,a=r!==e;if(a){let t;null===(s=i._$AQ)||void 0===s||s.call(i,e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==r._$AU&&i._$AP(t)}if(t!==n||a){let e=i._$AA;for(;e!==t;){const t=e.nextSibling;o.insertBefore(e,n),e=t}}}return i},oe=(e,t,i=e)=>(e._$AI(t,i),e),ne={},re=e=>{var t;null===(t=e._$AP)||void 0===t||t.call(e,!1,!0);let i=e._$AA;const s=e._$AB.nextSibling;for(;i!==s;){const e=i.nextSibling;i.remove(),i=e}},ae=(e,t,i)=>{const s=new Map;for(let o=t;o<=i;o++)s.set(e[o],o);return s},le=Y(class extends ee{constructor(e){if(super(e),e.type!==K)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let s;void 0===i?i=t:void 0!==t&&(s=t);const o=[],n=[];let r=0;for(const t of e)o[r]=s?s(t,r):r,n[r]=i(t,r),r++;return{values:n,keys:o}}render(e,t,i){return this.dt(e,t,i).values}update(e,[t,i,s]){var o;const n=(e=>e._$AH)(e),{values:r,keys:a}=this.dt(t,i,s);if(!Array.isArray(n))return this.ct=a,r;const l=null!==(o=this.ct)&&void 0!==o?o:this.ct=[],d=[];let c,h,u=0,p=n.length-1,m=0,g=r.length-1;for(;u<=p&&m<=g;)if(null===n[u])u++;else if(null===n[p])p--;else if(l[u]===a[m])d[m]=oe(n[u],r[m]),u++,m++;else if(l[p]===a[g])d[g]=oe(n[p],r[g]),p--,g--;else if(l[u]===a[g])d[g]=oe(n[u],r[g]),se(e,d[g+1],n[u]),u++,g--;else if(l[p]===a[m])d[m]=oe(n[p],r[m]),se(e,n[u],n[p]),p--,m++;else if(void 0===c&&(c=ae(a,m,g),h=ae(l,u,p)),c.has(l[u]))if(c.has(l[p])){const t=h.get(a[m]),i=void 0!==t?n[t]:null;if(null===i){const t=se(e,n[u]);oe(t,r[m]),d[m]=t}else d[m]=oe(i,r[m]),se(e,n[u],i),n[t]=null;m++}else re(n[p]),p--;else re(n[u]),u++;for(;m<=g;){const t=se(e,d[g+1]);oe(t,r[m]),d[m++]=t}for(;u<=p;){const e=n[u++];null!==e&&re(e)}return this.ct=a,((e,t=ne)=>{e._$AH=t})(e,d),T}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */String(Math.random()).slice(2),
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
let de,ce=!1;(()=>{try{const e={get capture(){return ce=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})(),
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
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");let he=0;function ue(e){de=e}function pe(){de=null,he=0}const me=Symbol("haunted.phase"),ge=Symbol("haunted.hook"),fe=Symbol("haunted.update"),be=Symbol("haunted.commit"),ve=Symbol("haunted.effects"),ye=Symbol("haunted.layoutEffects");class we{update;host;virtual;[ge];[ve];[ye];constructor(e,t){this.update=e,this.host=t,this[ge]=new Map,this[ve]=[],this[ye]=[]}run(e){ue(this);let t=e();return pe(),t}_runEffects(e){let t=this[e];ue(this);for(let e of t)e.call(this);pe()}runEffects(){this._runEffects(ve)}runLayoutEffects(){this._runEffects(ye)}teardown(){this[ge].forEach((e=>{"function"==typeof e.teardown&&e.teardown()}))}}const $e=Promise.resolve().then.bind(Promise.resolve());function _e(){let e,t=[];function i(){e=null;let i=t;t=[];for(var s=0,o=i.length;s<o;s++)i[s]()}return function(s){t.push(s),null==e&&(e=$e(i))}}const Ae=_e(),xe=_e();class Se{renderer;host;state;[me];_updateQueued;constructor(e,t){this.renderer=e,this.host=t,this.state=new we(this.update.bind(this),t),this[me]=null,this._updateQueued=!1}update(){this._updateQueued||(Ae((()=>{let e=this.handlePhase(fe);xe((()=>{this.handlePhase(be,e),xe((()=>{this.handlePhase(ve)}))})),this._updateQueued=!1})),this._updateQueued=!0)}handlePhase(e,t){switch(this[me]=e,e){case be:return this.commit(t),void this.runEffects(ye);case fe:return this.render();case ve:return this.runEffects(ve)}this[me]=null}render(){return this.state.run((()=>this.renderer.call(this.host,this.host)))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}}function ke(e){class t extends Se{frag;constructor(e,t,i){super(e,i||t),this.frag=t}commit(t){e(t,this.frag)}}return function(e,i,s){const o=(s||i||{}).baseElement||HTMLElement,{observedAttributes:n=[],useShadowDOM:r=!0,shadowRootInit:a={}}=s||i||{};class l extends o{_scheduler;static get observedAttributes(){return e.observedAttributes||n||[]}constructor(){super(),!1===r?this._scheduler=new t(e,this):(this.attachShadow({mode:"open",...a}),this._scheduler=new t(e,this.shadowRoot,this))}connectedCallback(){this._scheduler.update()}disconnectedCallback(){this._scheduler.teardown()}attributeChangedCallback(e,t,i){if(t===i)return;let s=""===i||i;Reflect.set(this,((e="")=>e.replace(/-+([a-z])?/g,((e,t)=>t?t.toUpperCase():"")))(e),s)}}const d=new Proxy(o.prototype,{getPrototypeOf:e=>e,set(e,t,i,s){let o;return t in e?(o=Object.getOwnPropertyDescriptor(e,t),o&&o.set?(o.set.call(s,i),!0):(Reflect.set(e,t,i,s),!0)):(o="symbol"==typeof t||"_"===t[0]?{enumerable:!0,configurable:!0,writable:!0,value:i}:function(e){let t=e,i=!1;return Object.freeze({enumerable:!0,configurable:!0,get:()=>t,set(e){i&&t===e||(i=!0,t=e,this._scheduler&&this._scheduler.update())}})}(i),Object.defineProperty(s,t,o),o.set&&o.set.call(s,i),!0)}});return Object.setPrototypeOf(l.prototype,d),l}}class Ee{id;state;constructor(e,t){this.id=e,this.state=t}}function Ce(e,...t){let i=he++,s=de[ge],o=s.get(i);return o||(o=new e(i,de,...t),s.set(i,o)),o.update(...t)}function Pe(e){return Ce.bind(null,e)}function je(e){return Pe(class extends Ee{callback;lastValues;values;_teardown;constructor(t,i,s,o){super(t,i),e(i,this)}update(e,t){this.callback=e,this.values=t}call(){this.values&&!this.hasChanged()||this.run(),this.lastValues=this.values}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(){"function"==typeof this._teardown&&this._teardown()}hasChanged(){return!this.lastValues||this.values.some(((e,t)=>this.lastValues[t]!==e))}})}function Te(e,t){e[ve].push(t)}const Ie=je(Te),Ue=Pe(class extends Ee{Context;value;_ranEffect;_unsubscribe;constructor(e,t,i){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Te(t,this)}update(e){if(this.state.virtual)throw new Error("can't be used with virtual components");return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const t={Context:e,callback:this._updater};this.state.host.dispatchEvent(new CustomEvent("haunted.context",{detail:t,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:i=null,value:s}=t;this.value=i?s:e.defaultValue,this._unsubscribe=i}teardown(){this._unsubscribe&&this._unsubscribe()}});Pe(class extends Ee{value;values;constructor(e,t,i,s){super(e,t),this.value=i(),this.values=s}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some(((e,t)=>this.values[t]!==e))}}),je((function(e,t){e[ye].push(t)}));const He=Pe(class extends Ee{args;constructor(e,t,i){super(e,t),this.updater=this.updater.bind(this),"function"==typeof i&&(i=i()),this.makeArgs(i)}update(){return this.args}updater(e){if("function"==typeof e){const t=e,[i]=this.args;e=t(i)}this.makeArgs(e),this.state.update()}makeArgs(e){this.args=Object.freeze([e,this.updater])}});
/**
 * @license
 * Portions Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Me({render:e}){const t=ke(e),i=function(e){return t=>{const i={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.listeners=new Set,this.addEventListener("haunted.context",this)}disconnectedCallback(){this.removeEventListener("haunted.context",this)}handleEvent(e){const{detail:t}=e;t.Context===i&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),e.stopPropagation())}unsubscribe(e){this.listeners.delete(e)}set value(e){this._value=e;for(let t of this.listeners)t(e)}get value(){return this._value}},Consumer:e((function({render:e}){return e(Ue(i))})),defaultValue:t};return i}}(t);return{component:t,createContext:i}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Promise.resolve(),Pe(class extends Ee{reducer;currentState;constructor(e,t,i,s,o){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=void 0!==o?o(s):s}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}});const Re=Y(class extends ee{constructor(e){var t;if(super(e),e.type!==Z||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var i,s;if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.et=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!(null===(i=this.et)||void 0===i?void 0:i.has(e))&&this.st.add(e);return this.render(t)}const o=e.element.classList;this.st.forEach((e=>{e in t||(o.remove(e),this.st.delete(e))}));for(const e in t){const i=!!t[e];i===this.st.has(e)||(null===(s=this.et)||void 0===s?void 0:s.has(e))||(i?(o.add(e),this.st.add(e)):(o.remove(e),this.st.delete(e)))}return T}});var De;!function(e){e.HEADER="header",e.PROJECT_IMAGE=".image-container img",e.SEARCH_INPUT='input[type="search"]'}(De||(De={}));const Oe=j`
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
`;const{component:ze}=Me({render:H});function Le(e){return e.toLowerCase().replace(/[^a-z0-9]+/gi,"-")}customElements.define("search-box",ze((function({keyWords:e,handleSearchInput:t}){const[i,s]=He(!1),[o,n]=He(null),[r,a]=He(null),l=this.shadowRoot.querySelector(De.SEARCH_INPUT),d=this.shadowRoot.querySelector("#listbox"),c=e=>{l.value=e,s(!i),t(e)};return j`
    ${Oe}
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
        @input=${e=>{const{value:i}=e.composedPath().find((e=>"INPUT"===e.tagName));o&&clearTimeout(o),n(setTimeout((()=>{t(i)}),350))}}
        @focus=${()=>{s(!0)}}
        @blur=${()=>{a(null),i&&s(!1)}}
        @keyup=${i=>{const{key:o}=i;switch(o){case"ArrowDown":(()=>{let t;s(!0),t=null==r||r===e.size-1?0:r+1,d.children[t].scrollIntoView({behavior:"smooth",block:"nearest"}),a(t)})();break;case"ArrowUp":(()=>{let t;t=null==r||0===r?e.size-1:r-1,d.children[t].scrollIntoView({behavior:"smooth",block:"nearest"}),a(t)})();break;case"Escape":t(""),a(null),s(!1);break;case"Enter":l.value=[...e][r],t([...e][r]),s(!1)}}}
      >
    </div>

    <ul
      id="listbox"
      role="listbox"
      aria-expanded=${i}
      class=${Re({show:i})}
    >${[...e].map(((e,t)=>j`
        <li
          role="option"
          ?active=${t===r}
          @mousedown=${()=>c(e)}>${e}</li>
      `))}
    </ul>
  `})));function Ne(e){const t=e.shadowRoot.querySelector(De.PROJECT_IMAGE);t&&(t.src=t?.dataset?.src,async function(e,t){e.src.indexOf("heathrow-clock.svg")>-1&&(await import("./clock-28afe552.js")).addClockPrototype(e,t)}(t,e),t.classList.add("visible"))}const Ge=j`
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
`;const{component:Be}=Me({render:H});customElements.define("project-card",Be((function({project:e,handleInfoClick:t,handleInfoCloseClick:i,selected:s}){Ie((()=>{!function(e,t){const i=new IntersectionObserver((e=>{for(const s of e)if(s.isIntersecting){const e=s.target;t(e),i.unobserve(e)}}));i.observe(e)}(this,Ne)}),[]);const o="./images/"+e.imageSources[0];return j`
    ${Ge}

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
        ${e.href?j`
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
  `}),{observedAttributes:["selected"]}));const Ve=[{date:"Sept 2015 - Sept 2021",place:"Google, UX Engineer",summary:"Designed & developed apps, UIs, widgets & ways to share & shape actionable information. Started as web designer; finished as a tech lead.",detail:"Developed a web app from conception through implementation to allow the Android UX team to better share their work. Developed a rapid prototyping app for the Google Store UX team. Designed and developed a web app for UX researchers to store, find, and share study findings. Also designed identity-building illustrations and several shipped Material-design emoji."},{date:"Jan 2014 - Sept 2015",place:"Freelance Designer/Developer",summary:"Designed & built web sites, apps, presentations; general design consulting.",detail:"Designed and developed a handful of client websites, also providing messaging, content advice, graphic design, and production. Developed a prototype/MVP web app to help medical clinics with green business guidelines. Consulted as a Creative Director for a boutique branding firm, including communication, visual design, and technical advice."},{date:"Aug 2011 - Dec 2013",place:"City of Santa Monica",summary:"Revised framework for future development; managed  engagement & analysis; delivered lots of presentations.",detail:"Led effort to rewrite City's zoning code. Designed and produced multi-platform content: reports, presentations, graphics, engagement materials for print, broadcast, and web. Result: a draft zoning ordinance for public review."},{date:"Jul 2008 - Aug 2011",place:"Rios Clementi Hale Studios",summary:"Bridged the gap between design and law to help move a significant destination and economic engine forward.",detail:"Helped get the Universal Studios Master Plan adopted. Design, coordination, and production of conceptual drawings, illustrations, 3D models, multi-format presentations, maps, layout & publishing of documents, and other materials."},{date:"May 2006 - Jul 2008",place:"City of West Hollywood",summary:"Analyzed & delivered recommendations regarding other people's well-designed, and not well-designed, development proposals.",detail:"Analysis and presentation of urban design and planning-related issues."},{date:"Apr 2000 - Feb 2006",place:"City of Seattle",summary:"Led major policy changes to help make Seattle more livable, walkable, and sustainable.",detail:"Produced plans, reports, graphics, and presentations leading to tangible improvements in Seattle's physical environment. First urban planner at the City of Seattle to use digital 3D modeling to inform outreach and analysis related to changes to zoning and building typologies."},{date:"Aug 1997 - April 2000",place:"Arai/Jackson Architects & Planners",summary:"Designed & produced posters and giant documents; learned to manage projects; learned from plenty of mistakes.",detail:"Design, production, content of various urban design and planning projects."}],Fe=[{title:"Mock for plan review UI",date:"2021",description:"A high-fidelity mock for a user interface allowing fluid communication between an agency and applicant.",imageSources:["plan_review_mock.jpg"],keywords:["software","ux","ui","mock","communication"]},{title:"front-end tech lead",date:"2020-2021",description:"I was the tech lead for a team of front-end engineers working within the design systems management branch of Material. I prototyped features, led building a production-grade app for managing tokens and design system details, and mentored and helped other engineers add features.",imageSources:["Google_Material_Design_Logo.svg"],keywords:["software","typescript","tooling","develop","engineer","Google","Material"]},{title:"Gallery.io web engineering",date:"2019",description:"Google's Material Gallery web appplication evolved from iterations of earlier prototype applications written in ES5-era AngularJS. I led team-wide efforts to modernize the application, resulting in thousands of tech debt issues closed, more dev-friendly componentization, and a bundle size reduction of at least 33%. While the app is being turned down due to the popularity of Figma, I am very proud of the progress we made on it and the lessons it taught.",href:"https://gallery.io",imageSources:["gallery.jpg"],keywords:["software","typescript","tooling","modernization","develop","engineer","Google","Material"]},{title:"web performance analysis",date:"2020",href:"https://github.com/joryphillips/joryphillips.github.io/issues/8#issuecomment-611778792",imageSources:["web-perf.png"],keywords:["software","develop","engineer","performance","tooling"],description:"I did a performance assessment on my own website and wrote up findings in a GitHub issue. If you know of a page that is loading too slowly, the methods I applied might help!"},{title:"full app design for Android Build",imageSources:["test-result-details.png"],keywords:["ux","ui","develop","Google","Android","typescript","mock"],description:"I was the only UXer on the Android Build team for a while, which meant I got to lead the design of some very complex things, like this tool used to help engineers chase down broken builds and failing tests. This was an early mock, and most of what is represented here has been built and refined by the team."},{title:"build and test status wireframe",imageSources:["target-row-pies-wireframe.jpg"],keywords:["ux","ui","wireframe","Google","Android"],description:"This was a quick ugly iPad drawing done to visually prove out the concept of integrating complext test and basic build status information. It was then engineered by me and others on the Android Build team. I implemented a pretty sweet web component for displaying those test results pie charts, too. 😁 🥧"},{title:"concept diagrams",imageSources:["grid-test-views@3x.png"],keywords:["conceptual","diagram","communication","Google","Android"],description:"These are a couple conceptual diagrams used to discuss the multidimensional complexity of tracking builds, tests, and devices. Included here mostly to add additional visual interest. 🙃"},{title:"notification CRUD app",imageSources:["notification-crud-edit.png"],keywords:["ux","ui","develop","Google","Android","typescript"],description:"I designed and implemented a tool for adding, editing, and removing system alerts across Android internal sites."},{title:"lightweight webpage generator",imageSources:["ux-page-crud.png"],keywords:["ux","ui","develop","Google","Android"],description:"I made web app that allowed Google teams to generate their own internal sites, pulling content from Sheets, Drive, custom Markdown, and Google's internal bug reporting tool. This tool helped get at least two versions of Android OS get designed and shipped on time."},{title:"mojibrush.co ui/ux + oss contributions",imageSources:["moji-brush.png"],href:"https://mojibrush.co",keywords:["ux","ui","develop","fun"],description:"I wireframed the UI & UX for this spectacular progressive web app on a pizza box in a microkitchen, then helped build it."},{title:"make a webpage from Google Sheets",imageSources:["ux-sheet-stepper.png"],keywords:["ux","ui","develop","Google","Android"],description:"At Google there is a common need to quickly spin up websites that pull content from Google Sheets. I made a web app that allowed people to make pages that do that, and walked them through validation, column select, sort options, etc."},{title:"four shipped Material emoji",imageSources:["four-material-emoji.svg"],keywords:["illustration","Material","fun","Google","Android"],description:"I designed these four emoji for the release of Android 6. Almost all emojis have been updated since then, but my design for Reminder Ribbon got put back into use for Android 12!"},{title:"imagery exploration",imageSources:["dichotomy-01.jpg"],keywords:["presentation","conceptual","communication","Google","Android"],description:"Every designer and presenter eventually has to come up with imagery that helps convey a problem or a solution. This is one I made to help in a presentation about device notification overload."},{title:"identity/branding illustrations",imageSources:["droid-4-up.svg"],keywords:["illustration","fun","Google","Android"],description:"I designed these for the Android UX research team as an exercise in helping them achieve brand cohesiveness. The Android figurine is a beloved among research participants, making it ideal as a character-defining visual representation for Android researchers."},{title:"dancing t-rex",imageSources:["dancing-dino.gif"],keywords:["fun","Google","Android"],description:"I did not design this dinosaur, but I did make him dance."},{title:"Global Brand Works Website",date:"2015",imageSources:["gbw.jpg"],description:"I designed and developed the Global Brand Works website with legibility, navigation, and mobile readiness in mind. The site was completely custom-built and the overall design direction has been steadfast for a half decade! For a time, I also served as the Creative Director for this boutique branding agency and helped their clients with general design, graphic, and presentation needs.",href:"https://globalbrandworks.com/",keywords:["ux","ui","develop","communication","freelance"]},{title:"Wall Clock Product Design/Prototype",date:"2010",imageSources:["heathrow-clock.svg"],description:"Tasked with coming up with product ideas that could build upon notNeutral's (Rios Clementi Hale Studio's product design brand) successful CityPlates, I started analyzing aerial photographs of different cities for inspiration. I was especially drawn to the way airports look from above. This London Heathrow graphic was originally presented as an idea for a large-scale wall graphic and clock, with the runways as moving hands. Here I have streamlined the original Illustrator file with SVG and used Javascript to make it a functional time-telling graphic.",keywords:["conceptual","prototyping","maps"]},{title:"Mapping & Data Analysis",date:"2009",imageSources:["pub-facilities-map.svg"],description:"I designed and created this map in Adobe Illustrator after exporting the data from ArcGIS. The map was originally used at multiple scales in a presentation to elected officials and planners to describe the abundance of public facilities within five miles of the Univeral Studios site. The icons are based on universally-recognized symbols for the activities they represent.",keywords:["conceptual","urban design","urban planning","communication","maps"]},{title:"Universal Studios Master Plan",date:"2011",imageSources:["usmp.png"],description:"While working at Rios Clementi Hale Studios, I produced materials and coordinated a team of multidisciplinary designers to help Universal Studios create an 'entitlement package' that adopted their new master plan. The project's needs constantly shifted, and included maintaining a building inventory, creating view simulations, 3D modeling, mapping, diagramming, and preparing various presentation materials. This important plan was subsequently adopted by the City of Los Angeles and the County of Los Angeles.",keywords:["urban design","urban planning","communication"]},{title:"not a real emoji",imageSources:["incredulous_goat.png"],keywords:["fun","goat","emoji"],description:"Like the dancing t-rex, I designed neither the goat, nor the sunglasses, but I did put one on the other to make a superior emoji."}];const qe=j`
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
`;const{component:We}=Me({render:H});function Je(e){e.preventDefault();const t=e.target.hash,i=document.querySelector(t),s=document.querySelector(De.HEADER),o=s?s.offsetHeight:0;if(i){const e=i.offsetTop-o;window.scroll({top:e,behavior:"smooth"}),history.pushState(null,null,t)}}customElements.define("project-list",We((function(){const[e,t]=He(""),[i,s]=He(null),[o,n]=He(null),r=e=>{n(window.scrollY);const t=this.shadowRoot.querySelector("section");scrollTo({top:t.offsetTop}),s(Le(e.title))},a=()=>{var e,t;s(null),e=()=>scrollTo({top:o}),t=this,requestAnimationFrame((()=>{requestAnimationFrame((()=>{e.apply(t)}))})),n(null)},l=e=>Le(e.title)===i,d=Fe.filter((t=>function(e,t){const{keywords:i,title:s}=t;return function(e,t){let i=!1;const s=e.toLowerCase().split(" ");for(let e=0;e<s.length;e++){const o=s[e].trim();i=t.toLowerCase().includes(o)}return i}(e,i.join(" ")+" "+s.toLowerCase())}(e,t)));return j`
    ${qe}

    <section class="border-bottom border-top">
      <div class="visuals-header">
        <h1>Visuals & Projects</h1>
        <search-box
          ?hidden=${!!i}
          .keyWords=${function(e){const t=new Set;if(e)for(const i of e)for(const e of i.keywords)t.add(e.toLowerCase());return t}(Fe)}
          .handleSearchInput=${e=>{t(e)}}
        ></search-box>
      </div>

      <div class="project-holder">
        ${le(d,(e=>Le(e.title)),(e=>j`
              <project-card
                ?hidden=${(e=>null!=i&&!l(e))(e)}
                id=${Le(e.title)}
                ?selected=${l(e)}
                .project=${e}
                .handleInfoClick=${r}
                .handleInfoCloseClick=${a}
              ></project-card>
            `))}
      </div>
    </section>
  `})));const Xe=j`
  <header class="navy border-bottom">
    <nav class="container">
      <a href="/#summary" @click=${Je} class="button button-transparent">Summary</a>
      <a href="/#visuals" @click=${Je} class="button button-transparent">Visuals</a>
      <a href="/#experience" @click=${Je} class="button button-transparent">Experience</a>
    </nav>
  </header>
`,Qe=j`
  <section class="jumbo navy">
    <h1>Jory Phillips</h1>
    <h2>do-gooder; designer & front-end developer</h2>
  </section>
`,Ze=j`
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
`;const Ke=j`
  <section id="experience" class="experience">
    <div class="container">
      <h1>Experience</h1>
      <div class="job-holder">
        ${Ve.map((e=>function(e){return j`
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
`,Ye=j`
  <footer class="navy border-top">
    <div class="container">
      <a href="https://www.linkedin.com/in/joryphillips" class="button button-transparent">linkedin</a>
      <a class="button button-transparent" href="javascript:location='mailto:\u006a\u006f\u0072\u0079\u002e\u006c\u002e\u0070\u0068\u0069\u006c\u006c\u0069\u0070\u0073\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d';void 0">email</a>
      <a href="https://github.com/joryphillips/joryphillips.github.io" class="button button-transparent">src</a>
    </div>
  </footer>
`,et=j`
  ${Xe}
  ${Qe}
  ${Ze}
  <project-list id="visuals"></project-list>
  ${Ke}
  ${Ye}
`;H(et,document.body);
//# sourceMappingURL=app.js.map
