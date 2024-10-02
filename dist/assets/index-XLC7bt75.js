var ri=Object.defineProperty;var ai=(o,e,t)=>e in o?ri(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var m=(o,e,t)=>ai(o,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const le=globalThis,ze=le.ShadowRoot&&(le.ShadyCSS===void 0||le.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,De=Symbol(),qe=new WeakMap;let Pt=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==De)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ze&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=qe.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&qe.set(t,e))}return e}toString(){return this.cssText}};const li=o=>new Pt(typeof o=="string"?o:o+"",void 0,De),C=(o,...e)=>{const t=o.length===1?o[0]:e.reduce((i,s,n)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[n+1],o[0]);return new Pt(t,o,De)},Ut=(o,e)=>{if(ze)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=le.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,o.appendChild(i)}},Je=ze?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return li(t)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ci,defineProperty:di,getOwnPropertyDescriptor:hi,getOwnPropertyNames:ui,getOwnPropertySymbols:pi,getPrototypeOf:fi}=Object,x=globalThis,Ke=x.trustedTypes,mi=Ke?Ke.emptyScript:"",we=x.reactiveElementPolyfillSupport,K=(o,e)=>o,Oe={toAttribute(o,e){switch(e){case Boolean:o=o?mi:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},Tt=(o,e)=>!ci(o,e),Qe={attribute:!0,type:String,converter:Oe,reflect:!1,hasChanged:Tt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),x.litPropertyMetadata??(x.litPropertyMetadata=new WeakMap);class N extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Qe){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&di(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:n}=hi(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get(){return s==null?void 0:s.call(this)},set(r){const l=s==null?void 0:s.call(this);n.call(this,r),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Qe}static _$Ei(){if(this.hasOwnProperty(K("elementProperties")))return;const e=fi(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(K("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(K("properties"))){const t=this.properties,i=[...ui(t),...pi(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(Je(s))}else e!==void 0&&t.push(Je(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ut(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:Oe).toAttribute(t,i.type);this._$Em=e,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(e,t){var n;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const r=i.getPropertyOptions(s),l=typeof r.converter=="function"?{fromAttribute:r.converter}:((n=r.converter)==null?void 0:n.fromAttribute)!==void 0?r.converter:Oe;this._$Em=s,this[s]=l.fromAttribute(t,r.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??Tt)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,r]of this._$Ep)this[n]=r;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,r]of s)r.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],r)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}N.elementStyles=[],N.shadowRootOptions={mode:"open"},N[K("elementProperties")]=new Map,N[K("finalized")]=new Map,we==null||we({ReactiveElement:N}),(x.reactiveElementVersions??(x.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Q=globalThis,pe=Q.trustedTypes,Xe=pe?pe.createPolicy("lit-html",{createHTML:o=>o}):void 0,Be="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,Ve="?"+A,gi=`<${Ve}>`,M=document,Y=()=>M.createComment(""),ee=o=>o===null||typeof o!="object"&&typeof o!="function",Ge=Array.isArray,jt=o=>Ge(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",Ae=`[ 	
\f\r]`,W=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ze=/-->/g,Ye=/>/g,P=RegExp(`>|${Ae}(?:([^\\s"'>=/]+)(${Ae}*=${Ae}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),et=/'/g,tt=/"/g,Ht=/^(?:script|style|textarea|title)$/i,vi=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),w=vi(1),k=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),it=new WeakMap,j=M.createTreeWalker(M,129);function Ot(o,e){if(!Ge(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Xe!==void 0?Xe.createHTML(e):e}const Mt=(o,e)=>{const t=o.length-1,i=[];let s,n=e===2?"<svg>":e===3?"<math>":"",r=W;for(let l=0;l<t;l++){const a=o[l];let d,h,c=-1,p=0;for(;p<a.length&&(r.lastIndex=p,h=r.exec(a),h!==null);)p=r.lastIndex,r===W?h[1]==="!--"?r=Ze:h[1]!==void 0?r=Ye:h[2]!==void 0?(Ht.test(h[2])&&(s=RegExp("</"+h[2],"g")),r=P):h[3]!==void 0&&(r=P):r===P?h[0]===">"?(r=s??W,c=-1):h[1]===void 0?c=-2:(c=r.lastIndex-h[2].length,d=h[1],r=h[3]===void 0?P:h[3]==='"'?tt:et):r===tt||r===et?r=P:r===Ze||r===Ye?r=W:(r=P,s=void 0);const u=r===P&&o[l+1].startsWith("/>")?" ":"";n+=r===W?a+gi:c>=0?(i.push(d),a.slice(0,c)+Be+a.slice(c)+A+u):a+A+(c===-2?l:u)}return[Ot(o,n+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};let Me=class Rt{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,r=0;const l=e.length-1,a=this.parts,[d,h]=Mt(e,t);if(this.el=Rt.createElement(d,i),j.currentNode=this.el.content,t===2||t===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=j.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(Be)){const p=h[r++],u=s.getAttribute(c).split(A),f=/([.?@])?(.*)/.exec(p);a.push({type:1,index:n,name:f[2],strings:u,ctor:f[1]==="."?Lt:f[1]==="?"?zt:f[1]==="@"?Dt:oe}),s.removeAttribute(c)}else c.startsWith(A)&&(a.push({type:6,index:n}),s.removeAttribute(c));if(Ht.test(s.tagName)){const c=s.textContent.split(A),p=c.length-1;if(p>0){s.textContent=pe?pe.emptyScript:"";for(let u=0;u<p;u++)s.append(c[u],Y()),j.nextNode(),a.push({type:2,index:++n});s.append(c[p],Y())}}}else if(s.nodeType===8)if(s.data===Ve)a.push({type:2,index:n});else{let c=-1;for(;(c=s.data.indexOf(A,c+1))!==-1;)a.push({type:7,index:n}),c+=A.length-1}n++}}static createElement(e,t){const i=M.createElement("template");return i.innerHTML=e,i}};function R(o,e,t=o,i){var r,l;if(e===k)return e;let s=i!==void 0?(r=t.o)==null?void 0:r[i]:t.l;const n=ee(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),n===void 0?s=void 0:(s=new n(o),s._$AT(o,t,i)),i!==void 0?(t.o??(t.o=[]))[i]=s:t.l=s),s!==void 0&&(e=R(o,s._$AS(o,e.values),s,i)),e}class It{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??M).importNode(t,!0);j.currentNode=s;let n=j.nextNode(),r=0,l=0,a=i[0];for(;a!==void 0;){if(r===a.index){let d;a.type===2?d=new be(n,n.nextSibling,this,e):a.type===1?d=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(d=new Bt(n,this,e)),this._$AV.push(d),a=i[++l]}r!==(a==null?void 0:a.index)&&(n=j.nextNode(),r++)}return j.currentNode=M,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}let be=class Nt{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this.v}constructor(e,t,i,s){this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this.v=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=R(this,e,t),ee(e)?e===$||e==null||e===""?(this._$AH!==$&&this._$AR(),this._$AH=$):e!==this._$AH&&e!==k&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):jt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==$&&ee(this._$AH)?this._$AA.nextSibling.data=e:this.T(M.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Me.createElement(Ot(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(t);else{const r=new It(s,this),l=r.u(this.options);r.p(t),this.T(l),this._$AH=r}}_$AC(e){let t=it.get(e.strings);return t===void 0&&it.set(e.strings,t=new Me(e)),t}k(e){Ge(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new Nt(this.O(Y()),this.O(Y()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this.v=e,(t=this._$AP)==null||t.call(this,e))}};class oe{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=$,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=$}_$AI(e,t=this,i,s){const n=this.strings;let r=!1;if(n===void 0)e=R(this,e,t,0),r=!ee(e)||e!==this._$AH&&e!==k,r&&(this._$AH=e);else{const l=e;let a,d;for(e=n[0],a=0;a<n.length-1;a++)d=R(this,l[i+a],t,a),d===k&&(d=this._$AH[a]),r||(r=!ee(d)||d!==this._$AH[a]),d===$?e=$:e!==$&&(e+=(d??"")+n[a+1]),this._$AH[a]=d}r&&!s&&this.j(e)}j(e){e===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Lt extends oe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===$?void 0:e}}let zt=class extends oe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==$)}};class Dt extends oe{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=R(this,e,t,0)??$)===k)return;const i=this._$AH,s=e===$&&i!==$||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==$&&(i===$||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Bt{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){R(this,e)}}const bi={M:Be,P:A,A:Ve,C:1,L:Mt,R:It,D:jt,V:R,I:be,H:oe,N:zt,U:Dt,B:Lt,F:Bt},Se=Q.litHtmlPolyfillSupport;Se==null||Se(Me,be),(Q.litHtmlVersions??(Q.litHtmlVersions=[])).push("3.2.0");const Vt=(o,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new be(e.insertBefore(Y(),n),n,void 0,t??{})}return s._$AI(o),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ce=class extends N{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.o=Vt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this.o)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.o)==null||e.setConnected(!1)}render(){return k}};var St;ce._$litElement$=!0,ce.finalized=!0,(St=globalThis.litElementHydrateSupport)==null||St.call(globalThis,{LitElement:ce});const Ee=globalThis.litElementPolyfillSupport;Ee==null||Ee({LitElement:ce});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.0");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de=window,Fe=de.ShadowRoot&&(de.ShadyCSS===void 0||de.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Gt=Symbol(),st=new WeakMap;let $i=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Gt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Fe&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=st.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&st.set(t,e))}return e}toString(){return this.cssText}};const yi=o=>new $i(typeof o=="string"?o:o+"",void 0,Gt),_i=(o,e)=>{Fe?o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),s=de.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,o.appendChild(i)})},ot=Fe?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return yi(t)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var xe;const fe=window,nt=fe.trustedTypes,wi=nt?nt.emptyScript:"",rt=fe.reactiveElementPolyfillSupport,Re={toAttribute(o,e){switch(e){case Boolean:o=o?wi:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},Ft=(o,e)=>e!==o&&(e==e||o==o),ke={attribute:!0,type:String,converter:Re,reflect:!1,hasChanged:Ft},Ie="finalized";let L=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const s=this._$Ep(i,t);s!==void 0&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,t=ke){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const n=this[e];this[t]=s,this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||ke}static finalize(){if(this.hasOwnProperty(Ie))return!1;this[Ie]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(ot(s))}else e!==void 0&&t.push(ot(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return _i(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=ke){var s;const n=this.constructor._$Ep(e,i);if(n!==void 0&&i.reflect===!0){const r=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:Re).toAttribute(t,i.type);this._$El=e,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(e,t){var i;const s=this.constructor,n=s._$Ev.get(e);if(n!==void 0&&this._$El!==n){const r=s.getPropertyOptions(n),l=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:Re;this._$El=n,this[n]=l.fromAttribute(t,r.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Ft)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,n)=>this[n]=s),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var n;return(n=s.hostUpdate)===null||n===void 0?void 0:n.call(s)}),this.update(i)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};L[Ie]=!0,L.elementProperties=new Map,L.elementStyles=[],L.shadowRootOptions={mode:"open"},rt==null||rt({ReactiveElement:L}),((xe=fe.reactiveElementVersions)!==null&&xe!==void 0?xe:fe.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ce;const me=window,z=me.trustedTypes,at=z?z.createPolicy("lit-html",{createHTML:o=>o}):void 0,Ne="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,Wt="?"+S,Ai=`<${Wt}>`,I=document,te=()=>I.createComment(""),ie=o=>o===null||typeof o!="object"&&typeof o!="function",qt=Array.isArray,Si=o=>qt(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",Pe=`[ 	
\f\r]`,q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,lt=/-->/g,ct=/>/g,U=RegExp(`>|${Pe}(?:([^\\s"'>=/]+)(${Pe}*=${Pe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),dt=/'/g,ht=/"/g,Jt=/^(?:script|style|textarea|title)$/i,D=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),ut=new WeakMap,H=I.createTreeWalker(I,129,null,!1);function Kt(o,e){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return at!==void 0?at.createHTML(e):e}const Ei=(o,e)=>{const t=o.length-1,i=[];let s,n=e===2?"<svg>":"",r=q;for(let l=0;l<t;l++){const a=o[l];let d,h,c=-1,p=0;for(;p<a.length&&(r.lastIndex=p,h=r.exec(a),h!==null);)p=r.lastIndex,r===q?h[1]==="!--"?r=lt:h[1]!==void 0?r=ct:h[2]!==void 0?(Jt.test(h[2])&&(s=RegExp("</"+h[2],"g")),r=U):h[3]!==void 0&&(r=U):r===U?h[0]===">"?(r=s??q,c=-1):h[1]===void 0?c=-2:(c=r.lastIndex-h[2].length,d=h[1],r=h[3]===void 0?U:h[3]==='"'?ht:dt):r===ht||r===dt?r=U:r===lt||r===ct?r=q:(r=U,s=void 0);const u=r===U&&o[l+1].startsWith("/>")?" ":"";n+=r===q?a+Ai:c>=0?(i.push(d),a.slice(0,c)+Ne+a.slice(c)+S+u):a+S+(c===-2?(i.push(void 0),l):u)}return[Kt(o,n+(o[t]||"<?>")+(e===2?"</svg>":"")),i]};class se{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,r=0;const l=e.length-1,a=this.parts,[d,h]=Ei(e,t);if(this.el=se.createElement(d,i),H.currentNode=this.el.content,t===2){const c=this.el.content,p=c.firstChild;p.remove(),c.append(...p.childNodes)}for(;(s=H.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes()){const c=[];for(const p of s.getAttributeNames())if(p.endsWith(Ne)||p.startsWith(S)){const u=h[r++];if(c.push(p),u!==void 0){const f=s.getAttribute(u.toLowerCase()+Ne).split(S),g=/([.?@])?(.*)/.exec(u);a.push({type:1,index:n,name:g[2],strings:f,ctor:g[1]==="."?ki:g[1]==="?"?Pi:g[1]==="@"?Ui:$e})}else a.push({type:6,index:n})}for(const p of c)s.removeAttribute(p)}if(Jt.test(s.tagName)){const c=s.textContent.split(S),p=c.length-1;if(p>0){s.textContent=z?z.emptyScript:"";for(let u=0;u<p;u++)s.append(c[u],te()),H.nextNode(),a.push({type:2,index:++n});s.append(c[p],te())}}}else if(s.nodeType===8)if(s.data===Wt)a.push({type:2,index:n});else{let c=-1;for(;(c=s.data.indexOf(S,c+1))!==-1;)a.push({type:7,index:n}),c+=S.length-1}n++}}static createElement(e,t){const i=I.createElement("template");return i.innerHTML=e,i}}function B(o,e,t=o,i){var s,n,r,l;if(e===D)return e;let a=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const d=ie(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==d&&((n=a==null?void 0:a._$AO)===null||n===void 0||n.call(a,!1),d===void 0?a=void 0:(a=new d(o),a._$AT(o,t,i)),i!==void 0?((r=(l=t)._$Co)!==null&&r!==void 0?r:l._$Co=[])[i]=a:t._$Cl=a),a!==void 0&&(e=B(o,a._$AS(o,e.values),a,i)),e}class xi{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:s}=this._$AD,n=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:I).importNode(i,!0);H.currentNode=n;let r=H.nextNode(),l=0,a=0,d=s[0];for(;d!==void 0;){if(l===d.index){let h;d.type===2?h=new ne(r,r.nextSibling,this,e):d.type===1?h=new d.ctor(r,d.name,d.strings,this,e):d.type===6&&(h=new Ti(r,this,e)),this._$AV.push(h),d=s[++a]}l!==(d==null?void 0:d.index)&&(r=H.nextNode(),l++)}return H.currentNode=I,n}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class ne{constructor(e,t,i,s){var n;this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cp=(n=s==null?void 0:s.isConnected)===null||n===void 0||n}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=B(this,e,t),ie(e)?e===y||e==null||e===""?(this._$AH!==y&&this._$AR(),this._$AH=y):e!==this._$AH&&e!==D&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Si(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==y&&ie(this._$AH)?this._$AA.nextSibling.data=e:this.$(I.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:s}=e,n=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=se.createElement(Kt(s.h,s.h[0]),this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===n)this._$AH.v(i);else{const r=new xi(n,this),l=r.u(this.options);r.v(i),this.$(l),this._$AH=r}}_$AC(e){let t=ut.get(e.strings);return t===void 0&&ut.set(e.strings,t=new se(e)),t}T(e){qt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new ne(this.k(te()),this.k(te()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class $e{constructor(e,t,i,s,n){this.type=1,this._$AH=y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=y}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const n=this.strings;let r=!1;if(n===void 0)e=B(this,e,t,0),r=!ie(e)||e!==this._$AH&&e!==D,r&&(this._$AH=e);else{const l=e;let a,d;for(e=n[0],a=0;a<n.length-1;a++)d=B(this,l[i+a],t,a),d===D&&(d=this._$AH[a]),r||(r=!ie(d)||d!==this._$AH[a]),d===y?e=y:e!==y&&(e+=(d??"")+n[a+1]),this._$AH[a]=d}r&&!s&&this.j(e)}j(e){e===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ki extends $e{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===y?void 0:e}}const Ci=z?z.emptyScript:"";class Pi extends $e{constructor(){super(...arguments),this.type=4}j(e){e&&e!==y?this.element.setAttribute(this.name,Ci):this.element.removeAttribute(this.name)}}class Ui extends $e{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){var i;if((e=(i=B(this,e,t,0))!==null&&i!==void 0?i:y)===D)return;const s=this._$AH,n=e===y&&s!==y||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==y&&(s===y||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class Ti{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){B(this,e)}}const pt=me.litHtmlPolyfillSupport;pt==null||pt(se,ne),((Ce=me.litHtmlVersions)!==null&&Ce!==void 0?Ce:me.litHtmlVersions=[]).push("2.8.0");const ji=(o,e,t)=>{var i,s;const n=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let r=n._$litPart$;if(r===void 0){const l=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;n._$litPart$=r=new ne(e.insertBefore(te(),l),l,void 0,t??{})}return r._$AI(o),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ue,Te;class he extends L{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ji(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return D}}he.finalized=!0,he._$litElement$=!0,(Ue=globalThis.litElementHydrateSupport)===null||Ue===void 0||Ue.call(globalThis,{LitElement:he});const ft=globalThis.litElementPolyfillSupport;ft==null||ft({LitElement:he});((Te=globalThis.litElementVersions)!==null&&Te!==void 0?Te:globalThis.litElementVersions=[]).push("3.3.3");let ge,Qt=0;function mt(o){ge=o}function gt(){ge=null,Qt=0}function Hi(){return Qt++}const je=Symbol("haunted.phase"),ue=Symbol("haunted.hook"),vt=Symbol("haunted.update"),bt=Symbol("haunted.commit"),O=Symbol("haunted.effects"),X=Symbol("haunted.layoutEffects"),Le="haunted.context";var Et,xt,kt;kt=ue,xt=O,Et=X;class Oi{constructor(e,t){m(this,"update");m(this,"host");m(this,"virtual");m(this,kt);m(this,xt);m(this,Et);this.update=e,this.host=t,this[ue]=new Map,this[O]=[],this[X]=[]}run(e){mt(this);let t=e();return gt(),t}_runEffects(e){let t=this[e];mt(this);for(let i of t)i.call(this);gt()}runEffects(){this._runEffects(O)}runLayoutEffects(){this._runEffects(X)}teardown(){this[ue].forEach(t=>{typeof t.teardown=="function"&&t.teardown()})}}const Mi=Promise.resolve().then.bind(Promise.resolve());function Xt(){let o=[],e;function t(){e=null;let i=o;o=[];for(var s=0,n=i.length;s<n;s++)i[s]()}return function(i){o.push(i),e==null&&(e=Mi(t))}}const Ri=Xt(),$t=Xt();var Ct;Ct=je;class Ii{constructor(e,t){m(this,"renderer");m(this,"host");m(this,"state");m(this,Ct);m(this,"_updateQueued");this.renderer=e,this.host=t,this.state=new Oi(this.update.bind(this),t),this[je]=null,this._updateQueued=!1}update(){this._updateQueued||(Ri(()=>{let e=this.handlePhase(vt);$t(()=>{this.handlePhase(bt,e),$t(()=>{this.handlePhase(O)})}),this._updateQueued=!1}),this._updateQueued=!0)}handlePhase(e,t){switch(this[je]=e,e){case bt:this.commit(t),this.runEffects(X);return;case vt:return this.render();case O:return this.runEffects(O)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}}const Ni=(o="")=>o.replace(/-+([a-z])?/g,(e,t)=>t?t.toUpperCase():"");function Li(o){class e extends Ii{constructor(n,r,l){super(n,l||r);m(this,"frag");this.frag=r}commit(n){o(n,this.frag)}}function t(i,s,n){const r=(n||s||{}).baseElement||HTMLElement,{observedAttributes:l=[],useShadowDOM:a=!0,shadowRootInit:d={}}=n||s||{};class h extends r{constructor(){super();m(this,"_scheduler");a===!1?this._scheduler=new e(i,this):(this.attachShadow({mode:"open",...d}),this._scheduler=new e(i,this.shadowRoot,this))}static get observedAttributes(){return i.observedAttributes||l||[]}connectedCallback(){this._scheduler.update()}disconnectedCallback(){this._scheduler.teardown()}attributeChangedCallback(g,_,b){if(_===b)return;let _e=b===""?!0:b;Reflect.set(this,Ni(g),_e)}}function c(u){let f=u,g=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return f},set(_){g&&f===_||(g=!0,f=_,this._scheduler&&this._scheduler.update())}})}const p=new Proxy(r.prototype,{getPrototypeOf(u){return u},set(u,f,g,_){let b;return f in u?(b=Object.getOwnPropertyDescriptor(u,f),b&&b.set?(b.set.call(_,g),!0):(Reflect.set(u,f,g,_),!0)):(typeof f=="symbol"||f[0]==="_"?b={enumerable:!0,configurable:!0,writable:!0,value:g}:b=c(g),Object.defineProperty(_,f,b),b.set&&b.set.call(_,g),!0)}});return Object.setPrototypeOf(h.prototype,p),h}return t}class re{constructor(e,t){m(this,"id");m(this,"state");this.id=e,this.state=t}}function zi(o,...e){let t=Hi(),i=ge[ue],s=i.get(t);return s||(s=new o(t,ge,...e),i.set(t,s)),s.update(...e)}function ae(o){return zi.bind(null,o)}function Zt(o){return ae(class extends re{constructor(t,i,s,n){super(t,i);m(this,"callback");m(this,"lastValues");m(this,"values");m(this,"_teardown");o(i,this)}update(t,i){this.callback=t,this.values=i}call(){(!this.values||this.hasChanged())&&this.run(),this.lastValues=this.values}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(){typeof this._teardown=="function"&&this._teardown()}hasChanged(){return!this.lastValues||this.values.some((t,i)=>this.lastValues[i]!==t)}})}function Yt(o,e){o[O].push(e)}const Z=Zt(Yt),Di=ae(class extends re{constructor(e,t,i){super(e,t);m(this,"Context");m(this,"value");m(this,"_ranEffect");m(this,"_unsubscribe");this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Yt(t,this)}update(e){if(this.state.virtual)throw new Error("can't be used with virtual components");return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const t={Context:e,callback:this._updater};this.state.host.dispatchEvent(new CustomEvent(Le,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:i=null,value:s}=t;this.value=i?s:e.defaultValue,this._unsubscribe=i}teardown(){this._unsubscribe&&this._unsubscribe()}});function Bi(o){return e=>{const t={Provider:class extends HTMLElement{constructor(){super();m(this,"listeners");m(this,"_value");this.listeners=new Set,this.addEventListener(Le,this)}disconnectedCallback(){this.removeEventListener(Le,this)}handleEvent(s){const{detail:n}=s;n.Context===t&&(n.value=this.value,n.unsubscribe=this.unsubscribe.bind(this,n.callback),this.listeners.add(n.callback),s.stopPropagation())}unsubscribe(s){this.listeners.delete(s)}set value(s){this._value=s;for(let n of this.listeners)n(s)}get value(){return this._value}},Consumer:o(function({render:i}){const s=Di(t);return i(s)}),defaultValue:e};return t}}ae(class extends re{constructor(e,t,i,s){super(e,t);m(this,"value");m(this,"values");this.value=i(),this.values=s}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((t,i)=>this.values[i]!==t)}});function Vi(o,e){o[X].push(e)}Zt(Vi);const E=ae(class extends re{constructor(e,t,i){super(e,t);m(this,"args");this.updater=this.updater.bind(this),typeof i=="function"&&(i=i()),this.makeArgs(i)}update(){return this.args}updater(e){if(typeof e=="function"){const t=e,[i]=this.args;e=t(i)}this.makeArgs(e),this.state.update()}makeArgs(e){this.args=Object.freeze([e,this.updater])}});/**
 * @license
 * Portions Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Promise.resolve();ae(class extends re{constructor(e,t,i,s,n){super(e,t);m(this,"reducer");m(this,"currentState");this.dispatch=this.dispatch.bind(this),this.currentState=n!==void 0?n(s):s}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}});function Gi({render:o}){const e=Li(o),t=Bi(e);return{component:e,createContext:t}}const{component:V}=Gi({render:Vt}),ei=C`
  :root, :host {
    --focus-outline: 2px solid hsl(211deg 100% 40% / 90%);
    --hover-background: rgb(115 179 221 / 17%);
    --ease-in-out-cubic: cubic-bezier(0.645, 0.045, 0.355, 1.000);
    --border-color: rgba(0, 0, 0, .125);
  }
`,Fi=C`
  .border-bottom {
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: var(--border-color);
  }

  .border-top {
    border-top-style: solid;
    border-top-width: 1px;
    border-top-color: var(--border-color);
  }
`,Wi=[ei,C`
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

  section.experience h1 {
    margin-bottom: 2rem;
    margin-top: 0;
    font-size: 2rem;
  }

  .job {
    margin-top: 3rem;
  }

  .job h2 {
    margin-top: 0;
    font-size: 1.17rem;
    font-weight: 500;
    display: flex;
    flex-wrap: wrap;
  }

  .job .title {
    margin-right: 0.5rem;
  }

  @media screen and (max-width: 600px) {
    .job .title {
      width: 100%;
    }
  }

  .job .title, .job .date {
    margin-top: 0.5rem;
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
    background-color: var(--hover-background);
  }

  .button:focus, button:focus, a:focus {
    outline: var(--focus-outline)!important;
  }

  .button:focus, button:focus {
    outline-offset: -2px!important;
  }
`];function qi({element:o,onIntersection:e,unobserve:t=!0,options:i}){const s=new IntersectionObserver(n=>{for(const r of n)r.isIntersecting&&(e(r.target),t&&s.unobserve(r.target))},i);s.observe(o)}function G(o,e){o instanceof HTMLElement&&o.shadowRoot instanceof ShadowRoot&&Ut(o.shadowRoot,e)}function Ji(o){const e=new Set;if(o)for(const t of o)for(const i of t.keywords)e.add(i.toLowerCase());return e}function ye(o){return o.toLowerCase().replace(/[^a-z0-9]+/gi,"-")}/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ki=o=>{document.body.addEventListener("click",e=>{if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey)return;const t=e.composedPath().filter(r=>r.tagName==="A")[0];if(!t||t.target||t.hasAttribute("download")||t.getAttribute("rel")==="external")return;const i=t.href;if(!i||i.indexOf("mailto:")!==-1)return;const s=window.location,n=s.origin||s.protocol+"//"+s.host;i.indexOf(n)===0&&(e.preventDefault(),i!==s.href&&(window.history.pushState({},"",i),o(s,e)))}),window.addEventListener("popstate",e=>o(window.location,e)),o(window.location,null)};async function Qi({location:o,setNavFocus:e,setProject:t}){const i=new URLSearchParams(o.search);if(i.has("project")){const s=i.get("project");if(!s)return;t(decodeURIComponent(s)),e("#visuals");return}else t("");e(o.hash)}function Xi({setNavFocus:o,setProject:e}){Ki(t=>Qi({location:t,setNavFocus:o,setProject:e}))}function Zi(o,e){if(!e)return;o.querySelector(e).scrollIntoView()}var ti=(o=>(o.HEADER="nav-bar",o.PROJECT_IMAGE=".image-container img",o.SEARCH_INPUT='input[type="search"]',o))(ti||{});const Yi=w`
  <section id="summary" class="jumbo navy">
    <h1>Jory Phillips</h1>
    <h2>designer & front-end developer</h2>
  </section>
`,es=w`
  <section class="summary">
    <div class="container">
      <p>I build things that make people's lives easier and better.
        I have designed & developed apps for Google, helped a branding agency
        brand itself, and created design guidelines and illustrations for major
        cities and a movie studio/theme park. I've led teams that make
        complicated stuff, and I am often eager to attempt the impossible.</p>
        <p>Want to collaborate?
        <a href="javascript:location='mailto:\u006a\u006f\u0072\u0079\u002e\u006c\u002e\u0070\u0068\u0069\u006c\u006c\u0069\u0070\u0073\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d';void 0">
        Please reach out!</a></p>
    </div>
  </section>
`,ts=[{date:"May 2022 - present",place:"Sorted Materials Corporation, CTO, Full-stack engineering",summary:"Built user-friendly logistics app to help companies set up and manage their zero-waste programs.",detail:" Made foundational tech decisions, design and implementation, prototyping, and MVP."},{date:"Dec 2021 - Feb 2022",place:"SimpleCircle, Front-end Engineer",summary:"Built React components to implement several key app features, including mapping and driver routing integration.",detail:""},{date:"Sept 2015 - Sept 2021",place:"Google, UX Engineer",summary:"Designed & developed apps, UIs, widgets & ways to share & shape actionable information.",detail:"Developed a web app from conception through implementation to allow the Android UX team to better share their work. Developed a rapid prototyping app for the Google Store UX team. Designed and developed a web app for UX researchers to store, find, and share study findings. Also designed identity-building illustrations and several shipped Material-design emoji."},{date:"Jan 2014 - Sept 2015",place:"Freelance Designer/Developer",summary:"Designed & built web sites, apps, presentations; general design consulting.",detail:"Designed and developed a handful of client websites, also providing messaging, content advice, graphic design, and production. Developed a prototype/MVP web app to help medical clinics with green business guidelines. Consulted as a Creative Director for a boutique branding firm, including communication, visual design, and technical advice."},{date:"Aug 2011 - Dec 2013",place:"City of Santa Monica",summary:"Revised framework for future development; managed  engagement & analysis; delivered lots of presentations.",detail:"Led effort to rewrite City's zoning code. Designed and produced multi-platform content: reports, presentations, graphics, engagement materials for print, broadcast, and web. Result: a draft zoning ordinance for public review."},{date:"Jul 2008 - Aug 2011",place:"Rios Clementi Hale Studios",summary:"Bridged the gap between design and law to help move a significant destination and economic engine forward.",detail:"Helped get the Universal Studios Master Plan adopted. Design, coordination, and production of conceptual drawings, illustrations, 3D models, multi-format presentations, maps, layout & publishing of documents, and other materials."},{date:"May 2006 - Jul 2008",place:"City of West Hollywood",summary:"Analyzed & delivered recommendations regarding other people's well-designed, and not well-designed, development proposals.",detail:"Analysis and presentation of urban design and planning-related issues."},{date:"Apr 2000 - Feb 2006",place:"City of Seattle",summary:"Led major policy changes to help make Seattle more livable, walkable, and sustainable.",detail:"Produced plans, reports, graphics, and presentations leading to tangible improvements in Seattle's physical environment. First urban planner at the City of Seattle to use digital 3D modeling to inform outreach and analysis related to changes to zoning and building typologies."},{date:"Aug 1997 - April 2000",place:"Arai/Jackson Architects & Planners",summary:"Designed & produced posters and giant documents; learned a great deal.",detail:"Design, production, content of various urban design and planning projects."}],ve=[{title:"Macarons UI and Design System",date:"2022-2024",href:"https://macarons-ui.com",description:"Macarons is a design system with styled UI components intended for React projects. This project is an open-source version of work done in the Sorted Materials app.",imageSources:["macarons-ui.png"],keywords:["software","ux","ui","communication","typescript","tooling","develop","engineer","startup"]},{title:"Sorted Materials",date:"2022-2024",href:"https://sortedmaterials.com",description:"The parti of the Sorted Materials app is an interactive node + edge graph that allows users to rapidly set up material streams.",imageSources:["sorted_materials.png"],keywords:["software","ux","ui","communication","typescript","tooling","develop","engineer","startup"]},{title:"Mock for plan review UI",date:"2021",description:"A high-fidelity mock for a user interface allowing fluid communication between an agency and applicant.",imageSources:["plan_review_mock.jpg"],keywords:["software","ux","ui","mock","communication"]},{title:"front-end tech lead",date:"2020-2021",description:"I was the tech lead for a team of front-end engineers working within the design systems management branch of Material. I prototyped features, led building a production-grade app for managing tokens and design system details, and mentored and helped other engineers add features.",imageSources:["Google_Material_Design_Logo.svg"],keywords:["software","typescript","tooling","develop","engineer","Google","Material"]},{title:"Gallery.io web engineering",date:"2019",description:"Google's Material Gallery web appplication evolved from iterations of earlier prototype applications written in ES5-era AngularJS. I led team-wide efforts to modernize the application, resulting in thousands of tech debt issues closed, more dev-friendly componentization, and a bundle size reduction of at least 33%. While the app is being turned down due to the popularity of Figma, I am very proud of the progress we made on it and the lessons it taught.",href:"https://gallery.io",imageSources:["gallery.jpg"],keywords:["software","typescript","tooling","modernization","develop","engineer","Google","Material"]},{title:"web performance analysis",date:"2020",href:"https://github.com/joryphillips/joryphillips.github.io/issues/8#issuecomment-611778792",imageSources:["web-perf.png"],keywords:["software","develop","engineer","performance","tooling"],description:"I did a performance assessment on my own website and wrote up findings in a GitHub issue. If you know of a page that is loading too slowly, the methods I applied might help!"},{title:"full app design for Android Build",imageSources:["test-result-details.png"],keywords:["ux","ui","develop","Google","Android","typescript","mock"],description:"I was the only UXer on the Android Build team for a while, which meant I got to lead the design of some very complex things, like this tool used to help engineers chase down broken builds and failing tests. This was an early mock, and most of what is represented here has been built and refined by the team."},{title:"notification CRUD app",imageSources:["notification-crud-edit.png"],keywords:["ux","ui","develop","Google","Android","typescript"],description:"I designed and implemented a tool for adding, editing, and removing system alerts across Android internal sites."},{title:"mojibrush.co ui/ux + oss",imageSources:["moji-brush.png"],href:"https://mojibrush.co",keywords:["ux","ui","develop","fun"],description:"I wireframed the UI & UX for this spectacular progressive web app on a pizza box in a microkitchen, then helped build it."},{title:"make a webpage from Google Sheets",imageSources:["ux-sheet-stepper.png"],keywords:["ux","ui","develop","Google","Android"],description:"At Google there is a common need to quickly spin up websites that pull content from Google Sheets. I made a web app that allowed people to make pages that do that, and walked them through validation, column select, sort options, etc."},{title:"four shipped Material emoji",imageSources:["four-material-emoji.svg"],keywords:["illustration","Material","fun","Google","Android"],description:"I designed these four emoji for the release of Android 6. Almost all emojis have been updated since then, but my design for Reminder Ribbon got put back into use for Android 12!"},{title:"identity/branding illustrations",imageSources:["droid-4-up.svg"],keywords:["illustration","fun","Google","Android"],description:"I designed these for the Android UX research team as an exercise in helping them achieve brand cohesiveness. The Android figurine is beloved among research participants, making it ideal as a character-defining visual representation for Android researchers."},{title:"Global Brand Works Website",date:"2015",imageSources:["gbw.jpg"],description:"I designed and developed the Global Brand Works website with legibility, navigation, and mobile readiness in mind. The site was completely custom-built and the overall design direction has been steadfast for a half decade! For a time, I also served as the Creative Director for this boutique branding agency and helped their clients with general design, graphic, and presentation needs.",href:"https://globalbrandworks.com/",keywords:["ux","ui","develop","communication","freelance"]},{title:"Wall Clock Product Design/Prototype",date:"2010",imageSources:["heathrow-clock.svg"],description:"Tasked with coming up with product ideas that could build upon notNeutral's (Rios Clementi Hale Studio's product design brand) successful CityPlates, I started analyzing aerial photographs of different cities for inspiration. I was especially drawn to the way airports look from above. This London Heathrow graphic was originally presented as an idea for a large-scale wall graphic and clock, with the runways as moving hands. Here I have streamlined the original Illustrator file with SVG and used Javascript to make it a functional time-telling graphic.",keywords:["conceptual","prototyping","maps"]},{title:"Mapping & Data Analysis",date:"2009",imageSources:["pub-facilities-map.svg"],description:"I designed and created this map in Adobe Illustrator after exporting the data from ArcGIS. The map was originally used at multiple scales in a presentation to elected officials and planners to describe the abundance of public facilities within five miles of the Univeral Studios site. The icons are based on universally-recognized symbols for the activities they represent.",keywords:["conceptual","urban design","urban planning","communication","maps"]},{title:"Universal Studios Master Plan",date:"2011",imageSources:["usmp.png"],description:"While working at Rios Clementi Hale Studios, I produced materials and coordinated a team of multidisciplinary designers to help Universal Studios create an 'entitlement package' that adopted their new master plan. The project's needs constantly shifted, and included maintaining a building inventory, creating view simulations, 3D modeling, mapping, diagramming, and preparing various presentation materials. This important plan was subsequently adopted by the City of Los Angeles and the County of Los Angeles.",keywords:["urban design","urban planning","communication"]}];function is(o){return w`
    <div class="job">
      <h2>
        <div class="cranberry title">${o.place}</div>
        <div class="regular date">${o.date}</div>
      </h2>
      <p class="summary">${o.summary}</p>
    </div>
  `}const ss=w`
  <section id="experience" class="experience">
    <div class="container">
      <h1>Experience</h1>
      <div class="job-holder">
        ${ts.map(o=>is(o))}
      </div>
    </div>
  </section>
`,os=w`
  <footer class="navy border-top">
    <div class="container">
      <a href="https://www.linkedin.com/in/joryphillips" class="button button-transparent">linkedin</a>
      <a class="button button-transparent" href="javascript:location='mailto:\u006a\u006f\u0072\u0079\u002e\u006c\u002e\u0070\u0068\u0069\u006c\u006c\u0069\u0070\u0073\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d';void 0">email</a>
      <a href="https://github.com/joryphillips/joryphillips.github.io" class="button button-transparent">src</a>
    </div>
  </footer>
`,ns=[ei,C`
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
    transition: background-color .15s var(--ease-in-out-cubic);
    color: inherit;
    background-color: transparent;
    border-radius: 0;
    border: 1px solid transparent;
  }

  a:focus {
    background-color: var(--hover-background);
    outline: var(--focus-outline)!important;
    outline-offset: -2px!important;
  }
`];function rs(o,e){var s;const t=(s=e.shadowRoot)==null?void 0:s.querySelectorAll("a");if(!t)return;if(!o){for(const n of Array.from(t))n.blur();return}const i=Array.from(t).find(n=>n.hash===o);i==null||i.focus()}function as({navFocus:o="",onNavSelect:e}){return Z(()=>{rs(o,this)},[o]),G(this,ns),w`
    <header class="navy">
      <nav>
        <a href="/#summary" @click=${e}>Summary</a>
        <a href="/#visuals" @click=${e}>Visuals</a>
        <a href="/#experience" @click=${e}>Experience</a>
      </nav>
    </header>
  `}customElements.define("nav-bar",V(as));/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ii={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},si=o=>(...e)=>({_$litDirective$:o,values:e});class oi{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this.t=e,this._$AM=t,this.i=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:ls}=bi,yt=()=>document.createComment(""),J=(o,e,t)=>{var n;const i=o._$AA.parentNode,s=e===void 0?o._$AB:e._$AA;if(t===void 0){const r=i.insertBefore(yt(),s),l=i.insertBefore(yt(),s);t=new ls(r,l,o,o.options)}else{const r=t._$AB.nextSibling,l=t._$AM,a=l!==o;if(a){let d;(n=t._$AQ)==null||n.call(t,o),t._$AM=o,t._$AP!==void 0&&(d=o._$AU)!==l._$AU&&t._$AP(d)}if(r!==s||a){let d=t._$AA;for(;d!==r;){const h=d.nextSibling;i.insertBefore(d,s),d=h}}}return t},T=(o,e,t=o)=>(o._$AI(e,t),o),cs={},ds=(o,e=cs)=>o._$AH=e,hs=o=>o._$AH,He=o=>{var i;(i=o._$AP)==null||i.call(o,!1,!0);let e=o._$AA;const t=o._$AB.nextSibling;for(;e!==t;){const s=e.nextSibling;e.remove(),e=s}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _t=(o,e,t)=>{const i=new Map;for(let s=e;s<=t;s++)i.set(o[s],s);return i},us=si(class extends oi{constructor(o){if(super(o),o.type!==ii.CHILD)throw Error("repeat() can only be used in text expressions")}dt(o,e,t){let i;t===void 0?t=e:e!==void 0&&(i=e);const s=[],n=[];let r=0;for(const l of o)s[r]=i?i(l,r):r,n[r]=t(l,r),r++;return{values:n,keys:s}}render(o,e,t){return this.dt(o,e,t).values}update(o,[e,t,i]){const s=hs(o),{values:n,keys:r}=this.dt(e,t,i);if(!Array.isArray(s))return this.ut=r,n;const l=this.ut??(this.ut=[]),a=[];let d,h,c=0,p=s.length-1,u=0,f=n.length-1;for(;c<=p&&u<=f;)if(s[c]===null)c++;else if(s[p]===null)p--;else if(l[c]===r[u])a[u]=T(s[c],n[u]),c++,u++;else if(l[p]===r[f])a[f]=T(s[p],n[f]),p--,f--;else if(l[c]===r[f])a[f]=T(s[c],n[f]),J(o,a[f+1],s[c]),c++,f--;else if(l[p]===r[u])a[u]=T(s[p],n[u]),J(o,s[c],s[p]),p--,u++;else if(d===void 0&&(d=_t(r,u,f),h=_t(l,c,p)),d.has(l[c]))if(d.has(l[p])){const g=h.get(r[u]),_=g!==void 0?s[g]:null;if(_===null){const b=J(o,s[c]);T(b,n[u]),a[u]=b}else a[u]=T(_,n[u]),J(o,s[c],_),s[g]=null;u++}else He(s[p]),p--;else He(s[c]),c++;for(;u<=f;){const g=J(o,a[f+1]);T(g,n[u]),a[u++]=g}for(;c<=p;){const g=s[c++];g!==null&&He(g)}return this.ut=r,ds(o,a),k}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ps=si(class extends oi{constructor(o){var e;if(super(o),o.type!==ii.ATTRIBUTE||o.name!=="class"||((e=o.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(e=>o[e]).join(" ")+" "}update(o,[e]){var i,s;if(this.st===void 0){this.st=new Set,o.strings!==void 0&&(this.nt=new Set(o.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((i=this.nt)!=null&&i.has(n))&&this.st.add(n);return this.render(e)}const t=o.element.classList;for(const n of this.st)n in e||(t.remove(n),this.st.delete(n));for(const n in e){const r=!!e[n];r===this.st.has(n)||(s=this.nt)!=null&&s.has(n)||(r?(t.add(n),this.st.add(n)):(t.remove(n),this.st.delete(n)))}return k}}),fs=[C`
  :host {
    --input-border: 1px solid #ccc;
    --input-border-radius: 3px;
    --combo-padding: .5rem;
    --combo-background: #FFF;

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
    padding: var(--combo-padding);
    border: var(--input-border);
    border-radius: var(--input-border-radius);
  }

  input[type="search"]:focus {
    outline: var(--focus-outline)!important;
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
    background-color: var(--combo-background);
    border: var(--input-border);
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
    background-color: var(--combo-background);
    border: none;
    border: var(--input-border);
    font-size: inherit;
    text-align: left;
    padding: var(--combo-padding);
  }

  li[role="option"][active], li[role="option"]:hover {
    background-color: var(--hover-background);
  }

  li:last-of-type  button[role="option"] {
    border-bottom: none;
  }
`],ms=350,gs=o=>o,wt={behavior:"smooth",block:"nearest"};function vs({keyWords:o=new Set,handleSearchInput:e=gs}){var We;const[t,i]=E(!1),[s,n]=E(void 0),[r,l]=E(null),[a,d]=E(""),h=(We=this.shadowRoot)==null?void 0:We.querySelector("#listbox"),c=()=>{i(!t)},p=()=>{i(!0)},u=()=>{i(!0);let v;r==null||r===o.size-1?v=0:v=r+1,h&&h.children[v].scrollIntoView(wt),l(v)},f=()=>{let v;r==null||r===0?v=o.size-1:v=r-1,h&&h.children[v].scrollIntoView(wt),l(v)},g=v=>{const{key:F}=v;switch(F){case"ArrowDown":u();break;case"ArrowUp":f();break;case"Escape":e(""),l(null),i(!1);break;case"Enter":if(r==null)break;d([...o][r]),e([...o][r]),i(!1);break}},_=()=>{l(null),t&&i(!1)},b=v=>{const{value:F}=v.composedPath().find(ni=>ni.tagName==="INPUT");s&&clearTimeout(s),n(window.setTimeout(()=>{e(F)},ms))},_e=v=>{d(v),c(),e(v)};return G(this,fs),w`
    <div
      id="combobox"
      role="combobox"
      aria-expanded=${t}
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
        .value=${a}
        @input=${b}
        @focus=${p}
        @blur=${_}
        @keyup=${g}
      >
    </div>

    <ul
      id="listbox"
      role="listbox"
      aria-expanded=${t}
      class=${ps({show:t})}
    >${[...o].map((v,F)=>w`
        <li
          role="option"
          ?active=${F===r}
          @mousedown=${()=>_e(v)}>${v}</li>
      `)}
    </ul>
  `}customElements.define("search-input",V(vs));const bs="modulepreload",$s=function(o){return"/"+o},At={},ys=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),l=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));s=Promise.allSettled(t.map(a=>{if(a=$s(a),a in At)return;At[a]=!0;const d=a.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${h}`))return;const c=document.createElement("link");if(c.rel=d?"stylesheet":bs,d||(c.as="script"),c.crossOrigin="",c.href=a,l&&c.setAttribute("nonce",l),document.head.appendChild(c),d)return new Promise((p,u)=>{c.addEventListener("load",p),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${a}`)))})}))}function n(r){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=r,window.dispatchEvent(l),!l.defaultPrevented)throw r}return s.then(r=>{for(const l of r||[])l.status==="rejected"&&n(l.reason);return e().catch(n)})},_s=C`
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

  .info-icons {
    margin-left: 0.7rem;
  }

  .info-icons, .info-icons .link {
    display: flex;
    align-items: center;
  }

  .info-icons .link {
    background-color: transparent;
    opacity: .7;
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
`,ws="./images/",As="heathrow-clock.svg";async function Ss(o,e){o.src.indexOf(As)>-1&&(await ys(()=>import("./clock-DK8Z64Hx.js"),[])).addClockPrototype(o,e)}function Es(o){var t;const e=(t=o.shadowRoot)==null?void 0:t.querySelector(ti.PROJECT_IMAGE);!e||!e.dataset.src||(e.src=e.dataset.src,Ss(e,o),e.classList.add("visible"))}function xs({project:o,selected:e}){Z(()=>{qi({element:this,onIntersection:Es})},[]);const t=ws+o.imageSources[0],i=encodeURIComponent(ye(o.title));return G(this,[_s]),w`
    <a
      tabindex=${e?-1:0}
      href="/?project=${i}"
      class="image-container"
      aria-label="Get more project info"
    ><img
        class="image block"
        data-src="${t}"
        alt="image of ${o.title}">
    </a>
    <div class="project-card-title">
      <h2 class="title">${o.title}</h2>
      <div class="info-icons">
        ${o.href?w`
          <a class="link" href="${o.href}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
            <span class="visible-hidden">Go to project reference</span>
          </a>
        `:null}
      </div>
    </div>
  `}customElements.define("project-card",V(xs,{observedAttributes:["selected"]}));const ks=[Fi,C`
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
`];function Cs(o,e){let t=!1;const i=o.toLowerCase().split(" ");for(let s=0;s<i.length;s++){const n=i[s].trim();t=e.toLowerCase().includes(n)}return t}function Ps(o,e){const{keywords:t,title:i}=e,s=t.join(" ")+" "+i.toLowerCase();return Cs(o,s)}function Us({setSelectedProjectName:o}){const[e,t]=E(""),i=n=>{t(n)},s=ve.filter(n=>Ps(e,n));return G(this,ks),w`

    <section class="border-bottom border-top">
      <div class="visuals-header">
        <h1>Visuals & Projects</h1>
        <search-input
          .keyWords=${Ji(ve)}
          .handleSearchInput=${i}
        ></search-input>
      </div>

      <div class="project-holder">
        ${us(s,n=>ye(n.title),n=>w`
              <project-card
                .project=${n}
                .handleInfoClick=${o}
              ></project-card>
            `)}
      </div>
    </section>
  `}customElements.define("project-list",V(Us));const Ts=C`
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
`;function js({projectName:o}){const e=ve.find(t=>ye(t.title)===o);return e?(G(this,[Ts]),w`
    <project-card
      selected
      .project=${e}
    ></project-card>

    <p class="description">${e.description}</p>
    <a
      href='/'
      aria-label="Close detail and return to full project list"
    >
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
    Back to project list</a>
  `):w`<div>No project found</div>`}customElements.define("project-detail",V(js));function Hs(){const[o,e]=E(""),[t,i]=E(""),[s,n]=E(void 0);Z(()=>{Xi({setNavFocus:e,setProject:r})},[]),Z(()=>{o&&!t&&!s&&Zi(this.shadowRoot,o)},[o,t,s]),Z(()=>{!t&&s!=null&&scrollTo({top:s})},[s,t]);const r=a=>{var d;if(a){n(window.scrollY);const h=(d=ve.find(c=>ye(c.title)===a))==null?void 0:d.title;document.title=`Jory's ${h} Project`}else document.title="Jory Phillips Portfolio and Resume";i(a)},l=()=>{n(void 0)};return G(this,Wi),w`
    <nav-bar .navFocus=${o} .onNavSelect=${l}></nav-bar>

    <main ?hidden=${!!t}>
      ${Yi}
      ${es}

      <project-list
        id="visuals"
        .setSelectedProjectName=${r}
      ></project-list>

      ${ss}
    </main>

    <project-detail
      ?hidden=${!t}
      .projectName=${t}
    ></project-detail>

    ${os}
  `}customElements.define("app-component",V(Hs));
