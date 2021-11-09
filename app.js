/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t$2=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e$4=Symbol(),n$3=new Map;class s$3{constructor(b,j){if(this._$cssResult$=!0,j!==e$4)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=b}get styleSheet(){let b=n$3.get(this.cssText);return t$2&&b===void 0&&(n$3.set(this.cssText,b=new CSSStyleSheet),b.replaceSync(this.cssText)),b}toString(){return this.cssText}}const o$4=U=>new s$3(typeof U=="string"?U:U+"",e$4),i$3=(U,b)=>{t$2?U.adoptedStyleSheets=b.map(j=>j instanceof CSSStyleSheet?j:j.styleSheet):b.forEach(j=>{const z=document.createElement("style"),O=window.litNonce;O!==void 0&&z.setAttribute("nonce",O),z.textContent=j.cssText,U.appendChild(z)})},S$1=t$2?U=>U:U=>U instanceof CSSStyleSheet?(b=>{let j="";for(const z of b.cssRules)j+=z.cssText;return o$4(j)})(U):U;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$2,e$3;const r$2={toAttribute(U,b){switch(b){case Boolean:U=U?"":null;break;case Object:case Array:U=U==null?U:JSON.stringify(U)}return U},fromAttribute(U,b){let j=U;switch(b){case Boolean:j=U!==null;break;case Number:j=U===null?null:Number(U);break;case Object:case Array:try{j=JSON.parse(U)}catch{j=null}}return j}},h$1=(U,b)=>b!==U&&(b==b||U==U),o$3={attribute:!0,type:String,converter:r$2,reflect:!1,hasChanged:h$1};class n$2 extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(b){var j;(j=this.l)!==null&&j!==void 0||(this.l=[]),this.l.push(b)}static get observedAttributes(){this.finalize();const b=[];return this.elementProperties.forEach((j,z)=>{const O=this._$Eh(z,j);O!==void 0&&(this._$Eu.set(O,z),b.push(O))}),b}static createProperty(b,j=o$3){if(j.state&&(j.attribute=!1),this.finalize(),this.elementProperties.set(b,j),!j.noAccessor&&!this.prototype.hasOwnProperty(b)){const z=typeof b=="symbol"?Symbol():"__"+b,O=this.getPropertyDescriptor(b,z,j);O!==void 0&&Object.defineProperty(this.prototype,b,O)}}static getPropertyDescriptor(b,j,z){return{get(){return this[j]},set(O){const D=this[b];this[j]=O,this.requestUpdate(b,D,z)},configurable:!0,enumerable:!0}}static getPropertyOptions(b){return this.elementProperties.get(b)||o$3}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const b=Object.getPrototypeOf(this);if(b.finalize(),this.elementProperties=new Map(b.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const j=this.properties,z=[...Object.getOwnPropertyNames(j),...Object.getOwnPropertySymbols(j)];for(const O of z)this.createProperty(O,j[O])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(b){const j=[];if(Array.isArray(b)){const z=new Set(b.flat(1/0).reverse());for(const O of z)j.unshift(S$1(O))}else b!==void 0&&j.push(S$1(b));return j}static _$Eh(b,j){const z=j.attribute;return z===!1?void 0:typeof z=="string"?z:typeof b=="string"?b.toLowerCase():void 0}o(){var b;this._$Ev=new Promise(j=>this.enableUpdating=j),this._$AL=new Map,this._$Ep(),this.requestUpdate(),(b=this.constructor.l)===null||b===void 0||b.forEach(j=>j(this))}addController(b){var j,z;((j=this._$Em)!==null&&j!==void 0?j:this._$Em=[]).push(b),this.renderRoot!==void 0&&this.isConnected&&((z=b.hostConnected)===null||z===void 0||z.call(b))}removeController(b){var j;(j=this._$Em)===null||j===void 0||j.splice(this._$Em.indexOf(b)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach((b,j)=>{this.hasOwnProperty(j)&&(this._$Et.set(j,this[j]),delete this[j])})}createRenderRoot(){var b;const j=(b=this.shadowRoot)!==null&&b!==void 0?b:this.attachShadow(this.constructor.shadowRootOptions);return i$3(j,this.constructor.elementStyles),j}connectedCallback(){var b;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(b=this._$Em)===null||b===void 0||b.forEach(j=>{var z;return(z=j.hostConnected)===null||z===void 0?void 0:z.call(j)})}enableUpdating(b){}disconnectedCallback(){var b;(b=this._$Em)===null||b===void 0||b.forEach(j=>{var z;return(z=j.hostDisconnected)===null||z===void 0?void 0:z.call(j)})}attributeChangedCallback(b,j,z){this._$AK(b,z)}_$Eg(b,j,z=o$3){var O,D;const B=this.constructor._$Eh(b,z);if(B!==void 0&&z.reflect===!0){const J=((D=(O=z.converter)===null||O===void 0?void 0:O.toAttribute)!==null&&D!==void 0?D:r$2.toAttribute)(j,z.type);this._$Ei=b,J==null?this.removeAttribute(B):this.setAttribute(B,J),this._$Ei=null}}_$AK(b,j){var z,O,D;const B=this.constructor,J=B._$Eu.get(b);if(J!==void 0&&this._$Ei!==J){const F=B.getPropertyOptions(J),G=F.converter,Z=(D=(O=(z=G)===null||z===void 0?void 0:z.fromAttribute)!==null&&O!==void 0?O:typeof G=="function"?G:null)!==null&&D!==void 0?D:r$2.fromAttribute;this._$Ei=J,this[J]=Z(j,F.type),this._$Ei=null}}requestUpdate(b,j,z){let O=!0;b!==void 0&&(((z=z||this.constructor.getPropertyOptions(b)).hasChanged||h$1)(this[b],j)?(this._$AL.has(b)||this._$AL.set(b,j),z.reflect===!0&&this._$Ei!==b&&(this._$ES===void 0&&(this._$ES=new Map),this._$ES.set(b,z))):O=!1),!this.isUpdatePending&&O&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(j){Promise.reject(j)}const b=this.scheduleUpdate();return b!=null&&await b,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var b;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((O,D)=>this[D]=O),this._$Et=void 0);let j=!1;const z=this._$AL;try{j=this.shouldUpdate(z),j?(this.willUpdate(z),(b=this._$Em)===null||b===void 0||b.forEach(O=>{var D;return(D=O.hostUpdate)===null||D===void 0?void 0:D.call(O)}),this.update(z)):this._$ET()}catch(O){throw j=!1,this._$ET(),O}j&&this._$AE(z)}willUpdate(b){}_$AE(b){var j;(j=this._$Em)===null||j===void 0||j.forEach(z=>{var O;return(O=z.hostUpdated)===null||O===void 0?void 0:O.call(z)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(b)),this.updated(b)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(b){return!0}update(b){this._$ES!==void 0&&(this._$ES.forEach((j,z)=>this._$Eg(z,this[z],j)),this._$ES=void 0),this._$ET()}updated(b){}firstUpdated(b){}}n$2.finalized=!0,n$2.elementProperties=new Map,n$2.elementStyles=[],n$2.shadowRootOptions={mode:"open"},(s$2=globalThis.reactiveElementPolyfillSupport)===null||s$2===void 0||s$2.call(globalThis,{ReactiveElement:n$2}),((e$3=globalThis.reactiveElementVersions)!==null&&e$3!==void 0?e$3:globalThis.reactiveElementVersions=[]).push("1.0.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var t$1,i$2;const s$1=globalThis.trustedTypes,e$2=s$1?s$1.createPolicy("lit-html",{createHTML:U=>U}):void 0,o$2=`lit$${(Math.random()+"").slice(9)}$`,n$1="?"+o$2,l$1=`<${n$1}>`,h=document,r$1=(U="")=>h.createComment(U),d=U=>U===null||typeof U!="object"&&typeof U!="function",u$2=Array.isArray,v=U=>{var b;return u$2(U)||typeof((b=U)===null||b===void 0?void 0:b[Symbol.iterator])=="function"},c$2=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,a$1=/-->/g,f$1=/>/g,_=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,g=/'/g,m$1=/"/g,$=/^(?:script|style|textarea)$/i,p=U=>(b,...j)=>({_$litType$:U,strings:b,values:j}),y=p(1),T=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),w=new WeakMap,A=(U,b,j)=>{var z,O;const D=(z=j==null?void 0:j.renderBefore)!==null&&z!==void 0?z:b;let B=D._$litPart$;if(B===void 0){const J=(O=j==null?void 0:j.renderBefore)!==null&&O!==void 0?O:null;D._$litPart$=B=new S(b.insertBefore(r$1(),J),J,void 0,j??{})}return B._$AI(U),B},C=h.createTreeWalker(h,129,null,!1),P=(U,b)=>{const j=U.length-1,z=[];let O,D=b===2?"<svg>":"",B=c$2;for(let F=0;F<j;F++){const G=U[F];let Z,X,q=-1,K=0;for(;K<G.length&&(B.lastIndex=K,X=B.exec(G),X!==null);)K=B.lastIndex,B===c$2?X[1]==="!--"?B=a$1:X[1]!==void 0?B=f$1:X[2]!==void 0?($.test(X[2])&&(O=RegExp("</"+X[2],"g")),B=_):X[3]!==void 0&&(B=_):B===_?X[0]===">"?(B=O??c$2,q=-1):X[1]===void 0?q=-2:(q=B.lastIndex-X[2].length,Z=X[1],B=X[3]===void 0?_:X[3]==='"'?m$1:g):B===m$1||B===g?B=_:B===a$1||B===f$1?B=c$2:(B=_,O=void 0);const W=B===_&&U[F+1].startsWith("/>")?" ":"";D+=B===c$2?G+l$1:q>=0?(z.push(Z),G.slice(0,q)+"$lit$"+G.slice(q)+o$2+W):G+o$2+(q===-2?(z.push(void 0),F):W)}const J=D+(U[j]||"<?>")+(b===2?"</svg>":"");return[e$2!==void 0?e$2.createHTML(J):J,z]};class V{constructor({strings:b,_$litType$:j},z){let O;this.parts=[];let D=0,B=0;const J=b.length-1,F=this.parts,[G,Z]=P(b,j);if(this.el=V.createElement(G,z),C.currentNode=this.el.content,j===2){const X=this.el.content,q=X.firstChild;q.remove(),X.append(...q.childNodes)}for(;(O=C.nextNode())!==null&&F.length<J;){if(O.nodeType===1){if(O.hasAttributes()){const X=[];for(const q of O.getAttributeNames())if(q.endsWith("$lit$")||q.startsWith(o$2)){const K=Z[B++];if(X.push(q),K!==void 0){const W=O.getAttribute(K.toLowerCase()+"$lit$").split(o$2),Q=/([.?@])?(.*)/.exec(K);F.push({type:1,index:D,name:Q[2],strings:W,ctor:Q[1]==="."?k:Q[1]==="?"?H:Q[1]==="@"?I:M})}else F.push({type:6,index:D})}for(const q of X)O.removeAttribute(q)}if($.test(O.tagName)){const X=O.textContent.split(o$2),q=X.length-1;if(q>0){O.textContent=s$1?s$1.emptyScript:"";for(let K=0;K<q;K++)O.append(X[K],r$1()),C.nextNode(),F.push({type:2,index:++D});O.append(X[q],r$1())}}}else if(O.nodeType===8)if(O.data===n$1)F.push({type:2,index:D});else{let X=-1;for(;(X=O.data.indexOf(o$2,X+1))!==-1;)F.push({type:7,index:D}),X+=o$2.length-1}D++}}static createElement(b,j){const z=h.createElement("template");return z.innerHTML=b,z}}function E(U,b,j=U,z){var O,D,B,J;if(b===T)return b;let F=z!==void 0?(O=j._$Cl)===null||O===void 0?void 0:O[z]:j._$Cu;const G=d(b)?void 0:b._$litDirective$;return(F==null?void 0:F.constructor)!==G&&((D=F==null?void 0:F._$AO)===null||D===void 0||D.call(F,!1),G===void 0?F=void 0:(F=new G(U),F._$AT(U,j,z)),z!==void 0?((B=(J=j)._$Cl)!==null&&B!==void 0?B:J._$Cl=[])[z]=F:j._$Cu=F),F!==void 0&&(b=E(U,F._$AS(U,b.values),F,z)),b}class N{constructor(b,j){this.v=[],this._$AN=void 0,this._$AD=b,this._$AM=j}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(b){var j;const{el:{content:z},parts:O}=this._$AD,D=((j=b==null?void 0:b.creationScope)!==null&&j!==void 0?j:h).importNode(z,!0);C.currentNode=D;let B=C.nextNode(),J=0,F=0,G=O[0];for(;G!==void 0;){if(J===G.index){let Z;G.type===2?Z=new S(B,B.nextSibling,this,b):G.type===1?Z=new G.ctor(B,G.name,G.strings,this,b):G.type===6&&(Z=new L(B,this,b)),this.v.push(Z),G=O[++F]}J!==(G==null?void 0:G.index)&&(B=C.nextNode(),J++)}return D}m(b){let j=0;for(const z of this.v)z!==void 0&&(z.strings!==void 0?(z._$AI(b,z,j),j+=z.strings.length-2):z._$AI(b[j])),j++}}class S{constructor(b,j,z,O){var D;this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=b,this._$AB=j,this._$AM=z,this.options=O,this._$Cg=(D=O==null?void 0:O.isConnected)===null||D===void 0||D}get _$AU(){var b,j;return(j=(b=this._$AM)===null||b===void 0?void 0:b._$AU)!==null&&j!==void 0?j:this._$Cg}get parentNode(){let b=this._$AA.parentNode;const j=this._$AM;return j!==void 0&&b.nodeType===11&&(b=j.parentNode),b}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(b,j=this){b=E(this,b,j),d(b)?b===x||b==null||b===""?(this._$AH!==x&&this._$AR(),this._$AH=x):b!==this._$AH&&b!==T&&this.$(b):b._$litType$!==void 0?this.T(b):b.nodeType!==void 0?this.S(b):v(b)?this.M(b):this.$(b)}A(b,j=this._$AB){return this._$AA.parentNode.insertBefore(b,j)}S(b){this._$AH!==b&&(this._$AR(),this._$AH=this.A(b))}$(b){this._$AH!==x&&d(this._$AH)?this._$AA.nextSibling.data=b:this.S(h.createTextNode(b)),this._$AH=b}T(b){var j;const{values:z,_$litType$:O}=b,D=typeof O=="number"?this._$AC(b):(O.el===void 0&&(O.el=V.createElement(O.h,this.options)),O);if(((j=this._$AH)===null||j===void 0?void 0:j._$AD)===D)this._$AH.m(z);else{const B=new N(D,this),J=B.p(this.options);B.m(z),this.S(J),this._$AH=B}}_$AC(b){let j=w.get(b.strings);return j===void 0&&w.set(b.strings,j=new V(b)),j}M(b){u$2(this._$AH)||(this._$AH=[],this._$AR());const j=this._$AH;let z,O=0;for(const D of b)O===j.length?j.push(z=new S(this.A(r$1()),this.A(r$1()),this,this.options)):z=j[O],z._$AI(D),O++;O<j.length&&(this._$AR(z&&z._$AB.nextSibling,O),j.length=O)}_$AR(b=this._$AA.nextSibling,j){var z;for((z=this._$AP)===null||z===void 0||z.call(this,!1,!0,j);b&&b!==this._$AB;){const O=b.nextSibling;b.remove(),b=O}}setConnected(b){var j;this._$AM===void 0&&(this._$Cg=b,(j=this._$AP)===null||j===void 0||j.call(this,b))}}class M{constructor(b,j,z,O,D){this.type=1,this._$AH=x,this._$AN=void 0,this.element=b,this.name=j,this._$AM=O,this.options=D,z.length>2||z[0]!==""||z[1]!==""?(this._$AH=Array(z.length-1).fill(new String),this.strings=z):this._$AH=x}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(b,j=this,z,O){const D=this.strings;let B=!1;if(D===void 0)b=E(this,b,j,0),B=!d(b)||b!==this._$AH&&b!==T,B&&(this._$AH=b);else{const J=b;let F,G;for(b=D[0],F=0;F<D.length-1;F++)G=E(this,J[z+F],j,F),G===T&&(G=this._$AH[F]),B||(B=!d(G)||G!==this._$AH[F]),G===x?b=x:b!==x&&(b+=(G??"")+D[F+1]),this._$AH[F]=G}B&&!O&&this.k(b)}k(b){b===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,b??"")}}class k extends M{constructor(){super(...arguments),this.type=3}k(b){this.element[this.name]=b===x?void 0:b}}class H extends M{constructor(){super(...arguments),this.type=4}k(b){b&&b!==x?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class I extends M{constructor(b,j,z,O,D){super(b,j,z,O,D),this.type=5}_$AI(b,j=this){var z;if((b=(z=E(this,b,j,0))!==null&&z!==void 0?z:x)===T)return;const O=this._$AH,D=b===x&&O!==x||b.capture!==O.capture||b.once!==O.once||b.passive!==O.passive,B=b!==x&&(O===x||D);D&&this.element.removeEventListener(this.name,this,O),B&&this.element.addEventListener(this.name,this,b),this._$AH=b}handleEvent(b){var j,z;typeof this._$AH=="function"?this._$AH.call((z=(j=this.options)===null||j===void 0?void 0:j.host)!==null&&z!==void 0?z:this.element,b):this._$AH.handleEvent(b)}}class L{constructor(b,j,z){this.element=b,this.type=6,this._$AN=void 0,this._$AM=j,this.options=z}get _$AU(){return this._$AM._$AU}_$AI(b){E(this,b)}}const R={P:"$lit$",V:o$2,L:n$1,I:1,N:P,R:N,D:v,j:E,H:S,O:M,F:H,B:I,W:k,Z:L};(t$1=globalThis.litHtmlPolyfillSupport)===null||t$1===void 0||t$1.call(globalThis,V,S),((i$2=globalThis.litHtmlVersions)!==null&&i$2!==void 0?i$2:globalThis.litHtmlVersions=[]).push("2.0.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l,o$1,r;class n extends n$2{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var b,j;const z=super.createRenderRoot();return(b=(j=this.renderOptions).renderBefore)!==null&&b!==void 0||(j.renderBefore=z.firstChild),z}update(b){const j=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(b),this._$Dt=A(j,this.renderRoot,this.renderOptions)}connectedCallback(){var b;super.connectedCallback(),(b=this._$Dt)===null||b===void 0||b.setConnected(!0)}disconnectedCallback(){var b;super.disconnectedCallback(),(b=this._$Dt)===null||b===void 0||b.setConnected(!1)}render(){return T}}n.finalized=!0,n._$litElement$=!0,(l=globalThis.litElementHydrateSupport)===null||l===void 0||l.call(globalThis,{LitElement:n}),(o$1=globalThis.litElementPolyfillSupport)===null||o$1===void 0||o$1.call(globalThis,{LitElement:n}),((r=globalThis.litElementVersions)!==null&&r!==void 0?r:globalThis.litElementVersions=[]).push("3.0.0");/**
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
 */""+String(Math.random()).slice(2);/**
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
 */window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:U=>U});/**
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
 */let eventOptionsSupported=!1;(()=>{try{const U={get capture(){return eventOptionsSupported=!0,!1}};window.addEventListener("test",U,U),window.removeEventListener("test",U,U)}catch{}})();/**
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
 */typeof window!="undefined"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");let current,currentId=0;function setCurrent(U){current=U}function clear(){current=null,currentId=0}function notify(){return currentId++}const phaseSymbol=Symbol("haunted.phase"),hookSymbol=Symbol("haunted.hook"),updateSymbol=Symbol("haunted.update"),commitSymbol=Symbol("haunted.commit"),effectsSymbol=Symbol("haunted.effects"),layoutEffectsSymbol=Symbol("haunted.layoutEffects"),contextEvent="haunted.context";class State{update;host;virtual;[hookSymbol];[effectsSymbol];[layoutEffectsSymbol];constructor(b,j){this.update=b,this.host=j,this[hookSymbol]=new Map,this[effectsSymbol]=[],this[layoutEffectsSymbol]=[]}run(b){setCurrent(this);let j=b();return clear(),j}_runEffects(b){let j=this[b];setCurrent(this);for(let z of j)z.call(this);clear()}runEffects(){this._runEffects(effectsSymbol)}runLayoutEffects(){this._runEffects(layoutEffectsSymbol)}teardown(){this[hookSymbol].forEach(j=>{typeof j.teardown=="function"&&j.teardown()})}}const defer=Promise.resolve().then.bind(Promise.resolve());function runner(){let U=[],b;function j(){b=null;let z=U;U=[];for(var O=0,D=z.length;O<D;O++)z[O]()}return function(z){U.push(z),b==null&&(b=defer(j))}}const read=runner(),write=runner();class BaseScheduler{renderer;host;state;[phaseSymbol];_updateQueued;constructor(b,j){this.renderer=b,this.host=j,this.state=new State(this.update.bind(this),j),this[phaseSymbol]=null,this._updateQueued=!1}update(){this._updateQueued||(read(()=>{let b=this.handlePhase(updateSymbol);write(()=>{this.handlePhase(commitSymbol,b),write(()=>{this.handlePhase(effectsSymbol)})}),this._updateQueued=!1}),this._updateQueued=!0)}handlePhase(b,j){switch(this[phaseSymbol]=b,b){case commitSymbol:this.commit(j),this.runEffects(layoutEffectsSymbol);return;case updateSymbol:return this.render();case effectsSymbol:return this.runEffects(effectsSymbol)}this[phaseSymbol]=null}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(b){this.state._runEffects(b)}teardown(){this.state.teardown()}}const toCamelCase=(U="")=>U.replace(/-+([a-z])?/g,(b,j)=>j?j.toUpperCase():"");function makeComponent(U){class b extends BaseScheduler{frag;constructor(O,D,B){super(O,B||D);this.frag=D}commit(O){U(O,this.frag)}}function j(z,O,D){const B=(D||O||{}).baseElement||HTMLElement,{observedAttributes:J=[],useShadowDOM:F=!0,shadowRootInit:G={}}=D||O||{};class Z extends B{_scheduler;static get observedAttributes(){return z.observedAttributes||J||[]}constructor(){super();F===!1?this._scheduler=new b(z,this):(this.attachShadow({mode:"open",...G}),this._scheduler=new b(z,this.shadowRoot,this))}connectedCallback(){this._scheduler.update()}disconnectedCallback(){this._scheduler.teardown()}attributeChangedCallback(W,Q,Y){if(Q===Y)return;let te=Y===""?!0:Y;Reflect.set(this,toCamelCase(W),te)}}function X(K){let W=K,Q=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return W},set(Y){Q&&W===Y||(Q=!0,W=Y,this._scheduler&&this._scheduler.update())}})}const q=new Proxy(B.prototype,{getPrototypeOf(K){return K},set(K,W,Q,Y){let te;return W in K?(te=Object.getOwnPropertyDescriptor(K,W),te&&te.set?(te.set.call(Y,Q),!0):(Reflect.set(K,W,Q,Y),!0)):(typeof W=="symbol"||W[0]==="_"?te={enumerable:!0,configurable:!0,writable:!0,value:Q}:te=X(Q),Object.defineProperty(Y,W,te),te.set&&te.set.call(Y,Q),!0)}});return Object.setPrototypeOf(Z.prototype,q),Z}return j}class Hook{id;state;constructor(b,j){this.id=b,this.state=j}}function use(U,...b){let j=notify(),z=current[hookSymbol],O=z.get(j);return O||(O=new U(j,current,...b),z.set(j,O)),O.update(...b)}function hook(U){return use.bind(null,U)}function createEffect(U){return hook(class extends Hook{callback;lastValues;values;_teardown;constructor(b,j,z,O){super(b,j);U(j,this)}update(b,j){this.callback=b,this.values=j}call(){(!this.values||this.hasChanged())&&this.run(),this.lastValues=this.values}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(){typeof this._teardown=="function"&&this._teardown()}hasChanged(){return!this.lastValues||this.values.some((b,j)=>this.lastValues[j]!==b)}})}function setEffects(U,b){U[effectsSymbol].push(b)}const useEffect=createEffect(setEffects),useContext=hook(class extends Hook{Context;value;_ranEffect;_unsubscribe;constructor(U,b,j){super(U,b);this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,setEffects(b,this)}update(U){if(this.state.virtual)throw new Error("can't be used with virtual components");return this.Context!==U&&(this._subscribe(U),this.Context=U),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(U){this.value=U,this.state.update()}_subscribe(U){const b={Context:U,callback:this._updater};this.state.host.dispatchEvent(new CustomEvent(contextEvent,{detail:b,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:j=null,value:z}=b;this.value=j?z:U.defaultValue,this._unsubscribe=j}teardown(){this._unsubscribe&&this._unsubscribe()}});function makeContext(U){return b=>{const j={Provider:class extends HTMLElement{listeners;_value;constructor(){super();this.listeners=new Set,this.addEventListener(contextEvent,this)}disconnectedCallback(){this.removeEventListener(contextEvent,this)}handleEvent(z){const{detail:O}=z;O.Context===j&&(O.value=this.value,O.unsubscribe=this.unsubscribe.bind(this,O.callback),this.listeners.add(O.callback),z.stopPropagation())}unsubscribe(z){this.listeners.delete(z)}set value(z){this._value=z;for(let O of this.listeners)O(z)}get value(){return this._value}},Consumer:U(function({render:z}){const O=useContext(j);return z(O)}),defaultValue:b};return j}}hook(class extends Hook{value;values;constructor(U,b,j,z){super(U,b);this.value=j(),this.values=z}update(U,b){return this.hasChanged(b)&&(this.values=b,this.value=U()),this.value}hasChanged(U=[]){return U.some((b,j)=>this.values[j]!==b)}});function setLayoutEffects(U,b){U[layoutEffectsSymbol].push(b)}createEffect(setLayoutEffects);const useState=hook(class extends Hook{args;constructor(U,b,j){super(U,b);this.updater=this.updater.bind(this),typeof j=="function"&&(j=j()),this.makeArgs(j)}update(){return this.args}updater(U){if(typeof U=="function"){const b=U,[j]=this.args;U=b(j)}this.makeArgs(U),this.state.update()}makeArgs(U){this.args=Object.freeze([U,this.updater])}});/**
 * @license
 * Portions Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Promise.resolve(),hook(class extends Hook{reducer;currentState;constructor(U,b,j,z,O){super(U,b);this.dispatch=this.dispatch.bind(this),this.currentState=O!==void 0?O(z):z}update(U){return this.reducer=U,[this.currentState,this.dispatch]}dispatch(U){this.currentState=this.reducer(this.currentState,U),this.state.update()}});function haunted({render:U}){const b=makeComponent(U),j=makeContext(b);return{component:b,createContext:j}}const{component}=haunted({render:A}),styles$5=y`
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
`;function addIntersectionObserver({element:U,onIntersection:b,unobserve:j=!0,options:z}){const O=new IntersectionObserver(D=>{for(const B of D)B.isIntersecting&&(b(B.target),j&&O.unobserve(B.target))},z);O.observe(U)}function getKeyWords(U){const b=new Set;if(U)for(const j of U)for(const z of j.keywords)b.add(z.toLowerCase());return b}function kebabCase(U){return U.toLowerCase().replace(/[^a-z0-9]+/gi,"-")}/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const installRouter=U=>{document.body.addEventListener("click",b=>{if(b.defaultPrevented||b.button!==0||b.metaKey||b.ctrlKey||b.shiftKey)return;const j=b.composedPath().filter(B=>B.tagName==="A")[0];if(!j||j.target||j.hasAttribute("download")||j.getAttribute("rel")==="external")return;const z=j.href;if(!z||z.indexOf("mailto:")!==-1)return;const O=window.location,D=O.origin||O.protocol+"//"+O.host;z.indexOf(D)===0&&(b.preventDefault(),z!==O.href&&(window.history.pushState({},"",z),U(O,b)))}),window.addEventListener("popstate",b=>U(window.location,b)),U(window.location,null)};async function handleNavigation({location:U,setNavFocus:b,setProject:j}){const z=new URLSearchParams(U.search);if(z.has("project")){const O=z.get("project");if(!O)return;j(decodeURIComponent(O)),b("#visuals");return}else j("");b(U.hash)}function router({setNavFocus:U,setProject:b}){installRouter(j=>handleNavigation({location:j,setNavFocus:U,setProject:b}))}function scrollToElement(U,b){if(!b)return;U.querySelector(b).scrollIntoView()}var Selector;(function(U){U.HEADER="nav-bar",U.PROJECT_IMAGE=".image-container img",U.SEARCH_INPUT='input[type="search"]'})(Selector||(Selector={}));const jumbotron=y`
  <section id="summary" class="jumbo navy">
    <h1>Jory Phillips</h1>
    <h2>do-gooder; designer & front-end developer</h2>
  </section>
`,summary=y`
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
`,RESUME=[{date:"Sept 2015 - Sept 2021",place:"Google, UX Engineer",summary:"Designed & developed apps, UIs, widgets & ways to share & shape actionable information. Started as web designer; finished as a tech lead.",detail:"Developed a web app from conception through implementation to allow the Android UX team to better share their work. Developed a rapid prototyping app for the Google Store UX team. Designed and developed a web app for UX researchers to store, find, and share study findings. Also designed identity-building illustrations and several shipped Material-design emoji."},{date:"Jan 2014 - Sept 2015",place:"Freelance Designer/Developer",summary:"Designed & built web sites, apps, presentations; general design consulting.",detail:"Designed and developed a handful of client websites, also providing messaging, content advice, graphic design, and production. Developed a prototype/MVP web app to help medical clinics with green business guidelines. Consulted as a Creative Director for a boutique branding firm, including communication, visual design, and technical advice."},{date:"Aug 2011 - Dec 2013",place:"City of Santa Monica",summary:"Revised framework for future development; managed  engagement & analysis; delivered lots of presentations.",detail:"Led effort to rewrite City's zoning code. Designed and produced multi-platform content: reports, presentations, graphics, engagement materials for print, broadcast, and web. Result: a draft zoning ordinance for public review."},{date:"Jul 2008 - Aug 2011",place:"Rios Clementi Hale Studios",summary:"Bridged the gap between design and law to help move a significant destination and economic engine forward.",detail:"Helped get the Universal Studios Master Plan adopted. Design, coordination, and production of conceptual drawings, illustrations, 3D models, multi-format presentations, maps, layout & publishing of documents, and other materials."},{date:"May 2006 - Jul 2008",place:"City of West Hollywood",summary:"Analyzed & delivered recommendations regarding other people's well-designed, and not well-designed, development proposals.",detail:"Analysis and presentation of urban design and planning-related issues."},{date:"Apr 2000 - Feb 2006",place:"City of Seattle",summary:"Led major policy changes to help make Seattle more livable, walkable, and sustainable.",detail:"Produced plans, reports, graphics, and presentations leading to tangible improvements in Seattle's physical environment. First urban planner at the City of Seattle to use digital 3D modeling to inform outreach and analysis related to changes to zoning and building typologies."},{date:"Aug 1997 - April 2000",place:"Arai/Jackson Architects & Planners",summary:"Designed & produced posters and giant documents; learned to manage projects; learned from plenty of mistakes.",detail:"Design, production, content of various urban design and planning projects."}],PORTFOLIO=[{title:"Mock for plan review UI",date:"2021",description:"A high-fidelity mock for a user interface allowing fluid communication between an agency and applicant.",imageSources:["plan_review_mock.jpg"],keywords:["software","ux","ui","mock","communication"]},{title:"front-end tech lead",date:"2020-2021",description:"I was the tech lead for a team of front-end engineers working within the design systems management branch of Material. I prototyped features, led building a production-grade app for managing tokens and design system details, and mentored and helped other engineers add features.",imageSources:["Google_Material_Design_Logo.svg"],keywords:["software","typescript","tooling","develop","engineer","Google","Material"]},{title:"Gallery.io web engineering",date:"2019",description:"Google's Material Gallery web appplication evolved from iterations of earlier prototype applications written in ES5-era AngularJS. I led team-wide efforts to modernize the application, resulting in thousands of tech debt issues closed, more dev-friendly componentization, and a bundle size reduction of at least 33%. While the app is being turned down due to the popularity of Figma, I am very proud of the progress we made on it and the lessons it taught.",href:"https://gallery.io",imageSources:["gallery.jpg"],keywords:["software","typescript","tooling","modernization","develop","engineer","Google","Material"]},{title:"web performance analysis",date:"2020",href:"https://github.com/joryphillips/joryphillips.github.io/issues/8#issuecomment-611778792",imageSources:["web-perf.png"],keywords:["software","develop","engineer","performance","tooling"],description:"I did a performance assessment on my own website and wrote up findings in a GitHub issue. If you know of a page that is loading too slowly, the methods I applied might help!"},{title:"full app design for Android Build",imageSources:["test-result-details.png"],keywords:["ux","ui","develop","Google","Android","typescript","mock"],description:"I was the only UXer on the Android Build team for a while, which meant I got to lead the design of some very complex things, like this tool used to help engineers chase down broken builds and failing tests. This was an early mock, and most of what is represented here has been built and refined by the team."},{title:"build and test status wireframe",imageSources:["target-row-pies-wireframe.jpg"],keywords:["ux","ui","wireframe","Google","Android"],description:"This was a quick ugly iPad drawing done to visually prove out the concept of integrating complex test and basic build status information. It was then engineered by me and others on the Android Build team. I implemented a pretty sweet web component for displaying those test results pie charts, too. \u{1F601} \u{1F967}"},{title:"concept diagrams",imageSources:["grid-test-views@3x.png"],keywords:["conceptual","diagram","communication","Google","Android"],description:"These are a couple conceptual diagrams used to discuss the multidimensional complexity of tracking builds, tests, and devices. Included here mostly to add additional visual interest. \u{1F643}"},{title:"notification CRUD app",imageSources:["notification-crud-edit.png"],keywords:["ux","ui","develop","Google","Android","typescript"],description:"I designed and implemented a tool for adding, editing, and removing system alerts across Android internal sites."},{title:"lightweight webpage generator",imageSources:["ux-page-crud.png"],keywords:["ux","ui","develop","Google","Android"],description:"I made web app that allowed Google teams to generate their own internal sites, pulling content from Sheets, Drive, custom Markdown, and Google's internal bug reporting tool. This tool helped get at least two versions of Android OS get designed and shipped on time."},{title:"mojibrush.co ui/ux + oss contributions",imageSources:["moji-brush.png"],href:"https://mojibrush.co",keywords:["ux","ui","develop","fun"],description:"I wireframed the UI & UX for this spectacular progressive web app on a pizza box in a microkitchen, then helped build it."},{title:"make a webpage from Google Sheets",imageSources:["ux-sheet-stepper.png"],keywords:["ux","ui","develop","Google","Android"],description:"At Google there is a common need to quickly spin up websites that pull content from Google Sheets. I made a web app that allowed people to make pages that do that, and walked them through validation, column select, sort options, etc."},{title:"four shipped Material emoji",imageSources:["four-material-emoji.svg"],keywords:["illustration","Material","fun","Google","Android"],description:"I designed these four emoji for the release of Android 6. Almost all emojis have been updated since then, but my design for Reminder Ribbon got put back into use for Android 12!"},{title:"imagery exploration",imageSources:["dichotomy-01.jpg"],keywords:["presentation","conceptual","communication","Google","Android"],description:"Every designer and presenter eventually has to come up with imagery that helps convey a problem or a solution. This is one I made to help in a presentation about device notification overload."},{title:"identity/branding illustrations",imageSources:["droid-4-up.svg"],keywords:["illustration","fun","Google","Android"],description:"I designed these for the Android UX research team as an exercise in helping them achieve brand cohesiveness. The Android figurine is beloved among research participants, making it ideal as a character-defining visual representation for Android researchers."},{title:"dancing t-rex",imageSources:["dancing-dino.gif"],keywords:["fun","Google","Android"],description:"I did not design this dinosaur, but I did make him dance."},{title:"Global Brand Works Website",date:"2015",imageSources:["gbw.jpg"],description:"I designed and developed the Global Brand Works website with legibility, navigation, and mobile readiness in mind. The site was completely custom-built and the overall design direction has been steadfast for a half decade! For a time, I also served as the Creative Director for this boutique branding agency and helped their clients with general design, graphic, and presentation needs.",href:"https://globalbrandworks.com/",keywords:["ux","ui","develop","communication","freelance"]},{title:"Wall Clock Product Design/Prototype",date:"2010",imageSources:["heathrow-clock.svg"],description:"Tasked with coming up with product ideas that could build upon notNeutral's (Rios Clementi Hale Studio's product design brand) successful CityPlates, I started analyzing aerial photographs of different cities for inspiration. I was especially drawn to the way airports look from above. This London Heathrow graphic was originally presented as an idea for a large-scale wall graphic and clock, with the runways as moving hands. Here I have streamlined the original Illustrator file with SVG and used Javascript to make it a functional time-telling graphic.",keywords:["conceptual","prototyping","maps"]},{title:"Mapping & Data Analysis",date:"2009",imageSources:["pub-facilities-map.svg"],description:"I designed and created this map in Adobe Illustrator after exporting the data from ArcGIS. The map was originally used at multiple scales in a presentation to elected officials and planners to describe the abundance of public facilities within five miles of the Univeral Studios site. The icons are based on universally-recognized symbols for the activities they represent.",keywords:["conceptual","urban design","urban planning","communication","maps"]},{title:"Universal Studios Master Plan",date:"2011",imageSources:["usmp.png"],description:"While working at Rios Clementi Hale Studios, I produced materials and coordinated a team of multidisciplinary designers to help Universal Studios create an 'entitlement package' that adopted their new master plan. The project's needs constantly shifted, and included maintaining a building inventory, creating view simulations, 3D modeling, mapping, diagramming, and preparing various presentation materials. This important plan was subsequently adopted by the City of Los Angeles and the County of Los Angeles.",keywords:["urban design","urban planning","communication"]},{title:"not a real emoji",imageSources:["incredulous_goat.png"],keywords:["fun","goat","emoji"],description:"Like the dancing t-rex, I designed neither the goat, nor the sunglasses, but I did put one on the other to make a superior emoji."}];function renderJob(U){return y`
    <div class="job">
      <h2 class="title">
        <span class="cranberry">${U.place}</span>
        <span class="regular date">${U.date}</span>
      </h2>
      <p class="summary">${U.summary}</p>
    </div>
  `}const jobs=y`
  <section id="experience" class="experience">
    <div class="container">
      <h1>Experience</h1>
      <div class="job-holder">
        ${RESUME.map(U=>renderJob(U))}
      </div>
    </div>
  </section>
`,footer=y`
  <footer class="navy border-top">
    <div class="container">
      <a href="https://www.linkedin.com/in/joryphillips" class="button button-transparent">linkedin</a>
      <a class="button button-transparent" href="javascript:location='mailto:\u006a\u006f\u0072\u0079\u002e\u006c\u002e\u0070\u0068\u0069\u006c\u006c\u0069\u0070\u0073\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d';void 0">email</a>
      <a href="https://github.com/joryphillips/joryphillips.github.io" class="button button-transparent">src</a>
    </div>
  </footer>
`,styles$4=y`
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
`;function onNavFocusChange(U,b){const j=b.shadowRoot?.querySelectorAll("a");if(!j)return;if(!U){for(const O of Array.from(j))O.blur();return}Array.from(j).find(O=>O.hash===U)?.focus()}function NavBar({navFocus:U="",onNavSelect:b}){return useEffect(()=>{onNavFocusChange(U,this)},[U]),y`
    ${styles$4}

    <header class="navy">
      <nav>
        <a href="/#summary" @click=${b}>Summary</a>
        <a href="/#visuals" @click=${b}>Visuals</a>
        <a href="/#experience" @click=${b}>Experience</a>
      </nav>
    </header>
  `}customElements.define("nav-bar",component(NavBar));/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$1=U=>(...b)=>({_$litDirective$:U,values:b});class i$1{constructor(b){}get _$AU(){return this._$AM._$AU}_$AT(b,j,z){this._$Ct=b,this._$AM=j,this._$Ci=z}_$AS(b,j){return this.update(b,j)}update(b,j){return this.render(...j)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{H:i}=R,e=()=>document.createComment(""),u$1=(U,b,j)=>{var z;const O=U._$AA.parentNode,D=b===void 0?U._$AB:b._$AA;if(j===void 0){const B=O.insertBefore(e(),D),J=O.insertBefore(e(),D);j=new i(B,J,U,U.options)}else{const B=j._$AB.nextSibling,J=j._$AM,F=J!==U;if(F){let G;(z=j._$AQ)===null||z===void 0||z.call(j,U),j._$AM=U,j._$AP!==void 0&&(G=U._$AU)!==J._$AU&&j._$AP(G)}if(B!==D||F){let G=j._$AA;for(;G!==B;){const Z=G.nextSibling;O.insertBefore(G,D),G=Z}}}return j},c$1=(U,b,j=U)=>(U._$AI(b,j),U),f={},s=(U,b=f)=>U._$AH=b,a=U=>U._$AH,m=U=>{var b;(b=U._$AP)===null||b===void 0||b.call(U,!1,!0);let j=U._$AA;const z=U._$AB.nextSibling;for(;j!==z;){const O=j.nextSibling;j.remove(),j=O}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u=(U,b,j)=>{const z=new Map;for(let O=b;O<=j;O++)z.set(U[O],O);return z},c=e$1(class extends i$1{constructor(U){if(super(U),U.type!==t.CHILD)throw Error("repeat() can only be used in text expressions")}dt(U,b,j){let z;j===void 0?j=b:b!==void 0&&(z=b);const O=[],D=[];let B=0;for(const J of U)O[B]=z?z(J,B):B,D[B]=j(J,B),B++;return{values:D,keys:O}}render(U,b,j){return this.dt(U,b,j).values}update(U,[b,j,z]){var O;const D=a(U),{values:B,keys:J}=this.dt(b,j,z);if(!Array.isArray(D))return this.ct=J,B;const F=(O=this.ct)!==null&&O!==void 0?O:this.ct=[],G=[];let Z,X,q=0,K=D.length-1,W=0,Q=B.length-1;for(;q<=K&&W<=Q;)if(D[q]===null)q++;else if(D[K]===null)K--;else if(F[q]===J[W])G[W]=c$1(D[q],B[W]),q++,W++;else if(F[K]===J[Q])G[Q]=c$1(D[K],B[Q]),K--,Q--;else if(F[q]===J[Q])G[Q]=c$1(D[q],B[Q]),u$1(U,G[Q+1],D[q]),q++,Q--;else if(F[K]===J[W])G[W]=c$1(D[K],B[W]),u$1(U,D[q],D[K]),K--,W++;else if(Z===void 0&&(Z=u(J,W,Q),X=u(F,q,K)),Z.has(F[q]))if(Z.has(F[K])){const Y=X.get(J[W]),te=Y!==void 0?D[Y]:null;if(te===null){const oe=u$1(U,D[q]);c$1(oe,B[W]),G[W]=oe}else G[W]=c$1(te,B[W]),u$1(U,D[q],te),D[Y]=null;W++}else m(D[K]),K--;else m(D[q]),q++;for(;W<=Q;){const Y=u$1(U,G[Q+1]);c$1(Y,B[W]),G[W++]=Y}for(;q<=K;){const Y=D[q++];Y!==null&&m(Y)}return this.ct=J,s(U,G),T}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o=e$1(class extends i$1{constructor(U){var b;if(super(U),U.type!==t.ATTRIBUTE||U.name!=="class"||((b=U.strings)===null||b===void 0?void 0:b.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(U){return" "+Object.keys(U).filter(b=>U[b]).join(" ")+" "}update(U,[b]){var j,z;if(this.st===void 0){this.st=new Set,U.strings!==void 0&&(this.et=new Set(U.strings.join(" ").split(/\s/).filter(D=>D!=="")));for(const D in b)b[D]&&!((j=this.et)===null||j===void 0?void 0:j.has(D))&&this.st.add(D);return this.render(b)}const O=U.element.classList;this.st.forEach(D=>{D in b||(O.remove(D),this.st.delete(D))});for(const D in b){const B=!!b[D];B===this.st.has(D)||((z=this.et)===null||z===void 0?void 0:z.has(D))||(B?(O.add(D),this.st.add(D)):(O.remove(D),this.st.delete(D)))}return T}}),styles$3=y`
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
`,DEBOUNCE_TIMEOUT=350,defaultHandleSearchInput=U=>U,defaultScrollBehavior={behavior:"smooth",block:"nearest"};function SearchInput({keyWords:U=new Set,handleSearchInput:b=defaultHandleSearchInput}){const[j,z]=useState(!1),[O,D]=useState(void 0),[B,J]=useState(null),[F,G]=useState(""),Z=this.shadowRoot?.querySelector("#listbox"),X=()=>{z(!j)},q=()=>{z(!0)},K=()=>{z(!0);let ee;B==null||B===U.size-1?ee=0:ee=B+1,Z&&Z.children[ee].scrollIntoView(defaultScrollBehavior),J(ee)},W=()=>{let ee;B==null||B===0?ee=U.size-1:ee=B-1,Z&&Z.children[ee].scrollIntoView(defaultScrollBehavior),J(ee)},Q=ee=>{const{key:ie}=ee;switch(ie){case"ArrowDown":K();break;case"ArrowUp":W();break;case"Escape":b(""),J(null),z(!1);break;case"Enter":if(B==null)break;G([...U][B]),b([...U][B]),z(!1);break}},Y=()=>{J(null),j&&z(!1)},te=ee=>{const{value:ie}=ee.composedPath().find(se=>se.tagName==="INPUT");O&&clearTimeout(O),D(window.setTimeout(()=>{b(ie)},DEBOUNCE_TIMEOUT))},oe=ee=>{G(ee),X(),b(ee)};return y`
    ${styles$3}
    <div
      id="combobox"
      role="combobox"
      aria-expanded=${j}
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
        .value=${F}
        @input=${te}
        @focus=${q}
        @blur=${Y}
        @keyup=${Q}
      >
    </div>

    <ul
      id="listbox"
      role="listbox"
      aria-expanded=${j}
      class=${o({show:j})}
    >${[...U].map((ee,ie)=>y`
        <li
          role="option"
          ?active=${ie===B}
          @mousedown=${()=>oe(ee)}>${ee}</li>
      `)}
    </ul>
  `}customElements.define("search-input",component(SearchInput));const styles$2=y`
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
  </style>
`,IMAGE_PATH="./images/",CLOCK_PATH="heathrow-clock.svg";async function conditionallyLoadClockPrototype(U,b){U.src.indexOf(CLOCK_PATH)>-1&&(await import("./clock-d2c372ba.js")).addClockPrototype(U,b)}function showProjectAndLoadImage(U){const b=U.shadowRoot?.querySelector(Selector.PROJECT_IMAGE);!b||!b.dataset.src||(b.src=b.dataset.src,conditionallyLoadClockPrototype(b,U),b.classList.add("visible"))}function ProjectCard({project:U,selected:b}){useEffect(()=>{addIntersectionObserver({element:this,onIntersection:showProjectAndLoadImage})},[]);const j=IMAGE_PATH+U.imageSources[0],z=encodeURIComponent(kebabCase(U.title));return y`
    ${styles$2}

    <a
      tabindex=${b?-1:0}
      href="/?project=${z}"
      class="image-container"
      aria-label="Get more project info"
    ><img
        class="image block"
        data-src="${j}"
        alt="image of ${U.title}">
    </a>
    <div class="project-card-title">
      <h2 class="title">${U.title}</h2>
      <div class="info-icons">
        ${U.href?y`
          <a class="link" href="${U.href}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
            <span class="visible-hidden">Go to project reference</span>
          </a>
        `:null}
      </div>
    </div>
  `}customElements.define("project-card",component(ProjectCard,{observedAttributes:["selected"]}));const styles$1=y`
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
`;function listHasSearchValues(U,b){let j=!1;const z=U.toLowerCase().split(" ");for(let O=0;O<z.length;O++){const D=z[O].trim();j=b.toLowerCase().includes(D)}return j}function shouldShowProject(U,b){const{keywords:j,title:z}=b,O=j.join(" ")+" "+z.toLowerCase();return listHasSearchValues(U,O)}function ProjectList({setSelectedProjectName:U}){const[b,j]=useState(""),z=D=>{j(D)},O=PORTFOLIO.filter(D=>shouldShowProject(b,D));return y`
    ${styles$1}

    <section class="border-bottom border-top">
      <div class="visuals-header">
        <h1>Visuals & Projects</h1>
        <search-input
          .keyWords=${getKeyWords(PORTFOLIO)}
          .handleSearchInput=${z}
        ></search-input>
      </div>

      <div class="project-holder">
        ${c(O,D=>kebabCase(D.title),D=>y`
              <project-card
                .project=${D}
                .handleInfoClick=${U}
              ></project-card>
            `)}
      </div>
    </section>
  `}customElements.define("project-list",component(ProjectList));const styles=y`
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
`;function ProjectDetail({projectName:U}){const b=PORTFOLIO.find(j=>kebabCase(j.title)===U);return b?y`
    ${styles}

    <project-card
      selected
      .project=${b}
    ></project-card>

    <p class="description">${b.description}</p>
    <a
      href='/'
      aria-label="Close detail and return to full project list"
    >
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
    Back to project list</a>
  `:y`<div>No project found</div>`}customElements.define("project-detail",component(ProjectDetail));function App(){const[U,b]=useState(""),[j,z]=useState(""),[O,D]=useState(void 0);useEffect(()=>{router({setNavFocus:b,setProject:B})},[]),useEffect(()=>{U&&!j&&!O&&scrollToElement(this.shadowRoot,U)},[U,j,O]),useEffect(()=>{!j&&O!=null&&scrollTo({top:O})},[O,j]);const B=F=>{if(F){D(window.scrollY);const G=PORTFOLIO.find(Z=>kebabCase(Z.title)===F)?.title;document.title=`Jory's ${G} Project`}else document.title="Jory Phillips Portfolio and Resume";z(F)};return y`
    ${styles$5}

    <nav-bar .navFocus=${U} .onNavSelect=${()=>{D(void 0)}}></nav-bar>
      <main ?hidden=${!!j}>
        ${jumbotron}
        ${summary}
        <project-list
          id="visuals"
          .setSelectedProjectName=${B}
        ></project-list>
        ${jobs}
      </main>
      <project-detail
        ?hidden=${!j}
        .projectName=${j}
      ></project-detail>

    ${footer}
  `}customElements.define("app-component",component(App));
//# sourceMappingURL=app.js.map
