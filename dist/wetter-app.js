var U1=globalThis,z1=U1.ShadowRoot&&(U1.ShadyCSS===void 0||U1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s2=Symbol(),Q2=new WeakMap,B1=class{constructor(V,C,H){if(this._$cssResult$=!0,H!==s2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=V,this.t=C}get styleSheet(){let V=this.o,C=this.t;if(z1&&V===void 0){let H=C!==void 0&&C.length===1;H&&(V=Q2.get(C)),V===void 0&&((this.o=V=new CSSStyleSheet).replaceSync(this.cssText),H&&Q2.set(C,V))}return V}toString(){return this.cssText}},K2=M=>new B1(typeof M=="string"?M:M+"",void 0,s2),P=(M,...V)=>{let C=M.length===1?M[0]:V.reduce((H,L,e)=>H+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(L)+M[e+1],M[0]);return new B1(C,M,s2)},j2=(M,V)=>{if(z1)M.adoptedStyleSheets=V.map(C=>C instanceof CSSStyleSheet?C:C.styleSheet);else for(let C of V){let H=document.createElement("style"),L=U1.litNonce;L!==void 0&&H.setAttribute("nonce",L),H.textContent=C.cssText,M.appendChild(H)}},Z2=z1?M=>M:M=>M instanceof CSSStyleSheet?(V=>{let C="";for(let H of V.cssRules)C+=H.cssText;return K2(C)})(M):M;var{is:g3,defineProperty:f3,getOwnPropertyDescriptor:O3,getOwnPropertyNames:w3,getOwnPropertySymbols:b3,getPrototypeOf:k3}=Object,M1=globalThis,Y2=M1.trustedTypes,y3=Y2?Y2.emptyScript:"",u2=M1.reactiveElementPolyfillSupport,T1=(M,V)=>M,c2={toAttribute(M,V){switch(V){case Boolean:M=M?y3:null;break;case Object:case Array:M=M==null?M:JSON.stringify(M)}return M},fromAttribute(M,V){let C=M;switch(V){case Boolean:C=M!==null;break;case Number:C=M===null?null:Number(M);break;case Object:case Array:try{C=JSON.parse(M)}catch{C=null}}return C}},H5=(M,V)=>!g3(M,V),q2={attribute:!0,type:String,converter:c2,reflect:!1,useDefault:!1,hasChanged:H5},J2,X2;(J2=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(X2=M1.litPropertyMetadata)!=null||(M1.litPropertyMetadata=new WeakMap);var J=class extends HTMLElement{static addInitializer(V){var C;this._$Ei(),((C=this.l)!=null?C:this.l=[]).push(V)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(V,C=q2){if(C.state&&(C.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(V)&&((C=Object.create(C)).wrapped=!0),this.elementProperties.set(V,C),!C.noAccessor){let H=Symbol(),L=this.getPropertyDescriptor(V,H,C);L!==void 0&&f3(this.prototype,V,L)}}static getPropertyDescriptor(V,C,H){var r;let{get:L,set:e}=(r=O3(this.prototype,V))!=null?r:{get(){return this[C]},set(i){this[C]=i}};return{get:L,set(i){let t=L==null?void 0:L.call(this);e==null||e.call(this,i),this.requestUpdate(V,t,H)},configurable:!0,enumerable:!0}}static getPropertyOptions(V){var C;return(C=this.elementProperties.get(V))!=null?C:q2}static _$Ei(){if(this.hasOwnProperty(T1("elementProperties")))return;let V=k3(this);V.finalize(),V.l!==void 0&&(this.l=[...V.l]),this.elementProperties=new Map(V.elementProperties)}static finalize(){if(this.hasOwnProperty(T1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(T1("properties"))){let C=this.properties,H=[...w3(C),...b3(C)];for(let L of H)this.createProperty(L,C[L])}let V=this[Symbol.metadata];if(V!==null){let C=litPropertyMetadata.get(V);if(C!==void 0)for(let[H,L]of C)this.elementProperties.set(H,L)}this._$Eh=new Map;for(let[C,H]of this.elementProperties){let L=this._$Eu(C,H);L!==void 0&&this._$Eh.set(L,C)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(V){let C=[];if(Array.isArray(V)){let H=new Set(V.flat(1/0).reverse());for(let L of H)C.unshift(Z2(L))}else V!==void 0&&C.push(Z2(V));return C}static _$Eu(V,C){let H=C.attribute;return H===!1?void 0:typeof H=="string"?H:typeof V=="string"?V.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var V;this._$ES=new Promise(C=>this.enableUpdating=C),this._$AL=new Map,this._$E_(),this.requestUpdate(),(V=this.constructor.l)==null||V.forEach(C=>C(this))}addController(V){var C,H;((C=this._$EO)!=null?C:this._$EO=new Set).add(V),this.renderRoot!==void 0&&this.isConnected&&((H=V.hostConnected)==null||H.call(V))}removeController(V){var C;(C=this._$EO)==null||C.delete(V)}_$E_(){let V=new Map,C=this.constructor.elementProperties;for(let H of C.keys())this.hasOwnProperty(H)&&(V.set(H,this[H]),delete this[H]);V.size>0&&(this._$Ep=V)}createRenderRoot(){var C;let V=(C=this.shadowRoot)!=null?C:this.attachShadow(this.constructor.shadowRootOptions);return j2(V,this.constructor.elementStyles),V}connectedCallback(){var V,C;(V=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(C=this._$EO)==null||C.forEach(H=>{var L;return(L=H.hostConnected)==null?void 0:L.call(H)})}enableUpdating(V){}disconnectedCallback(){var V;(V=this._$EO)==null||V.forEach(C=>{var H;return(H=C.hostDisconnected)==null?void 0:H.call(C)})}attributeChangedCallback(V,C,H){this._$AK(V,H)}_$ET(V,C){var e;let H=this.constructor.elementProperties.get(V),L=this.constructor._$Eu(V,H);if(L!==void 0&&H.reflect===!0){let r=(((e=H.converter)==null?void 0:e.toAttribute)!==void 0?H.converter:c2).toAttribute(C,H.type);this._$Em=V,r==null?this.removeAttribute(L):this.setAttribute(L,r),this._$Em=null}}_$AK(V,C){var e,r,i;let H=this.constructor,L=H._$Eh.get(V);if(L!==void 0&&this._$Em!==L){let t=H.getPropertyOptions(L),a=typeof t.converter=="function"?{fromAttribute:t.converter}:((e=t.converter)==null?void 0:e.fromAttribute)!==void 0?t.converter:c2;this._$Em=L;let o=a.fromAttribute(C,t.type);this[L]=(i=o!=null?o:(r=this._$Ej)==null?void 0:r.get(L))!=null?i:o,this._$Em=null}}requestUpdate(V,C,H,L=!1,e){var r,i;if(V!==void 0){let t=this.constructor;if(L===!1&&(e=this[V]),H!=null||(H=t.getPropertyOptions(V)),!(((r=H.hasChanged)!=null?r:H5)(e,C)||H.useDefault&&H.reflect&&e===((i=this._$Ej)==null?void 0:i.get(V))&&!this.hasAttribute(t._$Eu(V,H))))return;this.C(V,C,H)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(V,C,{useDefault:H,reflect:L,wrapped:e},r){var i,t,a;H&&!((i=this._$Ej)!=null?i:this._$Ej=new Map).has(V)&&(this._$Ej.set(V,(t=r!=null?r:C)!=null?t:this[V]),e!==!0||r!==void 0)||(this._$AL.has(V)||(this.hasUpdated||H||(C=void 0),this._$AL.set(V,C)),L===!0&&this._$Em!==V&&((a=this._$Eq)!=null?a:this._$Eq=new Set).add(V))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(C){Promise.reject(C)}let V=this.scheduleUpdate();return V!=null&&await V,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var H,L;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((H=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[r,i]of this._$Ep)this[r]=i;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[r,i]of e){let{wrapped:t}=i,a=this[r];t!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,i,a)}}let V=!1,C=this._$AL;try{V=this.shouldUpdate(C),V?(this.willUpdate(C),(L=this._$EO)==null||L.forEach(e=>{var r;return(r=e.hostUpdate)==null?void 0:r.call(e)}),this.update(C)):this._$EM()}catch(e){throw V=!1,this._$EM(),e}V&&this._$AE(C)}willUpdate(V){}_$AE(V){var C;(C=this._$EO)==null||C.forEach(H=>{var L;return(L=H.hostUpdated)==null?void 0:L.call(H)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(V)),this.updated(V)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(V){return!0}update(V){this._$Eq&&(this._$Eq=this._$Eq.forEach(C=>this._$ET(C,this[C]))),this._$EM()}updated(V){}firstUpdated(V){}},C5;J.elementStyles=[],J.shadowRootOptions={mode:"open"},J[T1("elementProperties")]=new Map,J[T1("finalized")]=new Map,u2==null||u2({ReactiveElement:J}),((C5=M1.reactiveElementVersions)!=null?C5:M1.reactiveElementVersions=[]).push("2.1.2");var R1=globalThis,V5=M=>M,G1=R1.trustedTypes,L5=G1?G1.createPolicy("lit-html",{createHTML:M=>M}):void 0,g2="$lit$",X=`lit$${Math.random().toFixed(9).slice(2)}$`,f2="?"+X,B3=`<${f2}>`,d1=document,F1=()=>d1.createComment(""),D1=M=>M===null||typeof M!="object"&&typeof M!="function",O2=Array.isArray,o5=M=>O2(M)||typeof(M==null?void 0:M[Symbol.iterator])=="function",S2=`[ 	
\f\r]`,P1=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M5=/-->/g,e5=/>/g,o1=RegExp(`>|${S2}(?:([^\\s"'>=/]+)(${S2}*=${S2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),r5=/'/g,t5=/"/g,A5=/^(?:script|style|textarea|title)$/i,w2=M=>(V,...C)=>({_$litType$:M,strings:V,values:C}),p=w2(1),c=w2(2),k0=w2(3),C1=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),i5=new WeakMap,A1=d1.createTreeWalker(d1,129);function d5(M,V){if(!O2(M)||!M.hasOwnProperty("raw"))throw Error("invalid template strings array");return L5!==void 0?L5.createHTML(V):V}var n5=(M,V)=>{let C=M.length-1,H=[],L,e=V===2?"<svg>":V===3?"<math>":"",r=P1;for(let i=0;i<C;i++){let t=M[i],a,o,A=-1,n=0;for(;n<t.length&&(r.lastIndex=n,o=r.exec(t),o!==null);)n=r.lastIndex,r===P1?o[1]==="!--"?r=M5:o[1]!==void 0?r=e5:o[2]!==void 0?(A5.test(o[2])&&(L=RegExp("</"+o[2],"g")),r=o1):o[3]!==void 0&&(r=o1):r===o1?o[0]===">"?(r=L!=null?L:P1,A=-1):o[1]===void 0?A=-2:(A=r.lastIndex-o[2].length,a=o[1],r=o[3]===void 0?o1:o[3]==='"'?t5:r5):r===t5||r===r5?r=o1:r===M5||r===e5?r=P1:(r=o1,L=void 0);let d=r===o1&&M[i+1].startsWith("/>")?" ":"";e+=r===P1?t+B3:A>=0?(H.push(a),t.slice(0,A)+g2+t.slice(A)+X+d):t+X+(A===-2?i:d)}return[d5(M,e+(M[C]||"<?>")+(V===2?"</svg>":V===3?"</math>":"")),H]},E1=class M{constructor({strings:V,_$litType$:C},H){let L;this.parts=[];let e=0,r=0,i=V.length-1,t=this.parts,[a,o]=n5(V,C);if(this.el=M.createElement(a,H),A1.currentNode=this.el.content,C===2||C===3){let A=this.el.content.firstChild;A.replaceWith(...A.childNodes)}for(;(L=A1.nextNode())!==null&&t.length<i;){if(L.nodeType===1){if(L.hasAttributes())for(let A of L.getAttributeNames())if(A.endsWith(g2)){let n=o[r++],d=L.getAttribute(A).split(X),v=/([.?@])?(.*)/.exec(n);t.push({type:1,index:e,name:v[2],strings:d,ctor:v[1]==="."?K1:v[1]==="?"?j1:v[1]==="@"?Y1:p1}),L.removeAttribute(A)}else A.startsWith(X)&&(t.push({type:6,index:e}),L.removeAttribute(A));if(A5.test(L.tagName)){let A=L.textContent.split(X),n=A.length-1;if(n>0){L.textContent=G1?G1.emptyScript:"";for(let d=0;d<n;d++)L.append(A[d],F1()),A1.nextNode(),t.push({type:2,index:++e});L.append(A[n],F1())}}}else if(L.nodeType===8)if(L.data===f2)t.push({type:2,index:e});else{let A=-1;for(;(A=L.data.indexOf(X,A+1))!==-1;)t.push({type:7,index:e}),A+=X.length-1}e++}}static createElement(V,C){let H=d1.createElement("template");return H.innerHTML=V,H}};function n1(M,V,C=M,H){var r,i,t;if(V===C1)return V;let L=H!==void 0?(r=C._$Co)==null?void 0:r[H]:C._$Cl,e=D1(V)?void 0:V._$litDirective$;return(L==null?void 0:L.constructor)!==e&&((i=L==null?void 0:L._$AO)==null||i.call(L,!1),e===void 0?L=void 0:(L=new e(M),L._$AT(M,C,H)),H!==void 0?((t=C._$Co)!=null?t:C._$Co=[])[H]=L:C._$Cl=L),L!==void 0&&(V=n1(M,L._$AS(M,V.values),L,H)),V}var Q1=class{constructor(V,C){this._$AV=[],this._$AN=void 0,this._$AD=V,this._$AM=C}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(V){var a;let{el:{content:C},parts:H}=this._$AD,L=((a=V==null?void 0:V.creationScope)!=null?a:d1).importNode(C,!0);A1.currentNode=L;let e=A1.nextNode(),r=0,i=0,t=H[0];for(;t!==void 0;){if(r===t.index){let o;t.type===2?o=new Z1(e,e.nextSibling,this,V):t.type===1?o=new t.ctor(e,t.name,t.strings,this,V):t.type===6&&(o=new q1(e,this,V)),this._$AV.push(o),t=H[++i]}r!==(t==null?void 0:t.index)&&(e=A1.nextNode(),r++)}return A1.currentNode=d1,L}p(V){let C=0;for(let H of this._$AV)H!==void 0&&(H.strings!==void 0?(H._$AI(V,H,C),C+=H.strings.length-2):H._$AI(V[C])),C++}},Z1=class M{get _$AU(){var V,C;return(C=(V=this._$AM)==null?void 0:V._$AU)!=null?C:this._$Cv}constructor(V,C,H,L){var e;this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=V,this._$AB=C,this._$AM=H,this.options=L,this._$Cv=(e=L==null?void 0:L.isConnected)!=null?e:!0}get parentNode(){let V=this._$AA.parentNode,C=this._$AM;return C!==void 0&&(V==null?void 0:V.nodeType)===11&&(V=C.parentNode),V}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(V,C=this){V=n1(this,V,C),D1(V)?V===Z||V==null||V===""?(this._$AH!==Z&&this._$AR(),this._$AH=Z):V!==this._$AH&&V!==C1&&this._(V):V._$litType$!==void 0?this.$(V):V.nodeType!==void 0?this.T(V):o5(V)?this.k(V):this._(V)}O(V){return this._$AA.parentNode.insertBefore(V,this._$AB)}T(V){this._$AH!==V&&(this._$AR(),this._$AH=this.O(V))}_(V){this._$AH!==Z&&D1(this._$AH)?this._$AA.nextSibling.data=V:this.T(d1.createTextNode(V)),this._$AH=V}$(V){var e;let{values:C,_$litType$:H}=V,L=typeof H=="number"?this._$AC(V):(H.el===void 0&&(H.el=E1.createElement(d5(H.h,H.h[0]),this.options)),H);if(((e=this._$AH)==null?void 0:e._$AD)===L)this._$AH.p(C);else{let r=new Q1(L,this),i=r.u(this.options);r.p(C),this.T(i),this._$AH=r}}_$AC(V){let C=i5.get(V.strings);return C===void 0&&i5.set(V.strings,C=new E1(V)),C}k(V){O2(this._$AH)||(this._$AH=[],this._$AR());let C=this._$AH,H,L=0;for(let e of V)L===C.length?C.push(H=new M(this.O(F1()),this.O(F1()),this,this.options)):H=C[L],H._$AI(e),L++;L<C.length&&(this._$AR(H&&H._$AB.nextSibling,L),C.length=L)}_$AR(V=this._$AA.nextSibling,C){var H;for((H=this._$AP)==null?void 0:H.call(this,!1,!0,C);V!==this._$AB;){let L=V5(V).nextSibling;V5(V).remove(),V=L}}setConnected(V){var C;this._$AM===void 0&&(this._$Cv=V,(C=this._$AP)==null||C.call(this,V))}},p1=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(V,C,H,L,e){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=V,this.name=C,this._$AM=L,this.options=e,H.length>2||H[0]!==""||H[1]!==""?(this._$AH=Array(H.length-1).fill(new String),this.strings=H):this._$AH=Z}_$AI(V,C=this,H,L){let e=this.strings,r=!1;if(e===void 0)V=n1(this,V,C,0),r=!D1(V)||V!==this._$AH&&V!==C1,r&&(this._$AH=V);else{let i=V,t,a;for(V=e[0],t=0;t<e.length-1;t++)a=n1(this,i[H+t],C,t),a===C1&&(a=this._$AH[t]),r||(r=!D1(a)||a!==this._$AH[t]),a===Z?V=Z:V!==Z&&(V+=(a!=null?a:"")+e[t+1]),this._$AH[t]=a}r&&!L&&this.j(V)}j(V){V===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,V!=null?V:"")}},K1=class extends p1{constructor(){super(...arguments),this.type=3}j(V){this.element[this.name]=V===Z?void 0:V}},j1=class extends p1{constructor(){super(...arguments),this.type=4}j(V){this.element.toggleAttribute(this.name,!!V&&V!==Z)}},Y1=class extends p1{constructor(V,C,H,L,e){super(V,C,H,L,e),this.type=5}_$AI(V,C=this){var r;if((V=(r=n1(this,V,C,0))!=null?r:Z)===C1)return;let H=this._$AH,L=V===Z&&H!==Z||V.capture!==H.capture||V.once!==H.once||V.passive!==H.passive,e=V!==Z&&(H===Z||L);L&&this.element.removeEventListener(this.name,this,H),e&&this.element.addEventListener(this.name,this,V),this._$AH=V}handleEvent(V){var C,H;typeof this._$AH=="function"?this._$AH.call((H=(C=this.options)==null?void 0:C.host)!=null?H:this.element,V):this._$AH.handleEvent(V)}},q1=class{constructor(V,C,H){this.element=V,this.type=6,this._$AN=void 0,this._$AM=C,this.options=H}get _$AU(){return this._$AM._$AU}_$AI(V){n1(this,V)}},p5={M:g2,P:X,A:f2,C:1,L:n5,R:Q1,D:o5,V:n1,I:Z1,H:p1,N:j1,U:Y1,B:K1,F:q1},h2=R1.litHtmlPolyfillSupport,a5;h2==null||h2(E1,Z1),((a5=R1.litHtmlVersions)!=null?a5:R1.litHtmlVersions=[]).push("3.3.3");var m5=(M,V,C)=>{var e,r;let H=(e=C==null?void 0:C.renderBefore)!=null?e:V,L=H._$litPart$;if(L===void 0){let i=(r=C==null?void 0:C.renderBefore)!=null?r:null;H._$litPart$=L=new Z1(V.insertBefore(F1(),i),i,void 0,C!=null?C:{})}return L._$AI(M),L};var m1=globalThis,$=class extends J{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var C,H;let V=super.createRenderRoot();return(H=(C=this.renderOptions).renderBefore)!=null||(C.renderBefore=V.firstChild),V}update(V){let C=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(V),this._$Do=m5(C,this.renderRoot,this.renderOptions)}connectedCallback(){var V;super.connectedCallback(),(V=this._$Do)==null||V.setConnected(!0)}disconnectedCallback(){var V;super.disconnectedCallback(),(V=this._$Do)==null||V.setConnected(!1)}render(){return C1}},l5;$._$litElement$=!0,$.finalized=!0,(l5=m1.litElementHydrateSupport)==null||l5.call(m1,{LitElement:$});var b2=m1.litElementPolyfillSupport;b2==null||b2({LitElement:$});var x5;((x5=m1.litElementVersions)!=null?x5:m1.litElementVersions=[]).push("4.2.2");var v5="M7.03 13.92H11.03V5L13.04 4.97V13.92H17.03L12.03 18.92Z";var s5="M7.03 9.97H11.03V18.89L13.04 18.92V9.97H17.03L12.03 4.97Z";var Z5="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3M19 19H5V8H19V19M12 17V15H8V12H12V10L16 13.5L12 17Z";var u5="M6 1H8V3H16V1H18V3H19C20.11 3 21 3.9 21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.89 3 5 3H6V1M5 8V19H19V8H5M7 10H17V12H7V10Z";var c5="M4 19V20H22V22H2V2H4V17C7 17 10 15 12.1 11.4C15.1 6.4 18.4 4 22 4V6C19.2 6 16.5 8.1 13.9 12.5C11.3 16.6 7.7 19 4 19Z";var S5="M16,11.78L20.24,4.45L21.97,5.45L16.74,14.5L10.23,10.75L5.46,19H22V21H2V3H4V17.54L9.5,8L16,11.78Z";var h5="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z";var g5="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z";var f5="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z";var O5="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";var w5="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12C20,14.4 19,16.5 17.3,18C15.9,16.7 14,16 12,16C10,16 8.2,16.7 6.7,18C5,16.5 4,14.4 4,12A8,8 0 0,1 12,4M14,5.89C13.62,5.9 13.26,6.15 13.1,6.54L11.81,9.77L11.71,10C11,10.13 10.41,10.6 10.14,11.26C9.73,12.29 10.23,13.45 11.26,13.86C12.29,14.27 13.45,13.77 13.86,12.74C14.12,12.08 14,11.32 13.57,10.76L13.67,10.5L14.96,7.29L14.97,7.26C15.17,6.75 14.92,6.17 14.41,5.96C14.28,5.91 14.15,5.89 14,5.89M10,6A1,1 0 0,0 9,7A1,1 0 0,0 10,8A1,1 0 0,0 11,7A1,1 0 0,0 10,6M7,9A1,1 0 0,0 6,10A1,1 0 0,0 7,11A1,1 0 0,0 8,10A1,1 0 0,0 7,9M17,9A1,1 0 0,0 16,10A1,1 0 0,0 17,11A1,1 0 0,0 18,10A1,1 0 0,0 17,9Z";var b5="M6 12C6 7.5 7.93 3.26 12 2A10 10 0 0 1 12 22C7.93 20.74 6 16.5 6 12Z";var k5="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z";var y5="M11 6C13.76 6 16 8.24 16 11S13.76 16 11 16 6 13.76 6 11 8.24 6 11 6M11 1L13.39 4.42C12.65 4.15 11.84 4 11 4S9.35 4.15 8.61 4.42L11 1M2.34 6L6.5 5.65C5.9 6.16 5.36 6.78 4.94 7.5C4.5 8.24 4.25 9 4.11 9.79L2.34 6M2.36 16L4.12 12.23C4.26 13 4.53 13.78 4.95 14.5C5.37 15.24 5.91 15.86 6.5 16.37L2.36 16M19.65 6L17.88 9.79C17.74 9 17.47 8.23 17.05 7.5C16.63 6.78 16.1 6.15 15.5 5.64L19.65 6M23 13H21C21 15.05 20.22 17.1 18.66 18.66C17.09 20.23 15.05 21 13 21V23C15.56 23 18.12 22 20.07 20.07S23 15.56 23 13M19 13H17C17 14 16.61 15.05 15.83 15.83C15.05 16.61 14 17 13 17V19C14.54 19 16.08 18.41 17.25 17.24C18.41 16.08 19 14.54 19 13";var B5="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z";var T5="M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V8H11V5A1 1 0 0 1 12 4Z";var P5="M17 3H21V5H17V3M17 7H21V9H17V7M17 11H21V13H17.75L17 12.1V11M21 15V17H19C19 16.31 18.9 15.63 18.71 15H21M7 3V5H3V3H7M7 7V9H3V7H7M7 11V12.1L6.25 13H3V11H7M3 15H5.29C5.1 15.63 5 16.31 5 17H3V15M15 13V5C15 3.34 13.66 2 12 2S9 3.34 9 5V13C6.79 14.66 6.34 17.79 8 20S12.79 22.66 15 21 17.66 16.21 16 14C15.72 13.62 15.38 13.28 15 13M12 4C12.55 4 13 4.45 13 5V8H11V5C11 4.45 11.45 4 12 4Z";var R5="M12,20A6,6 0 0,1 6,14C6,10 12,3.25 12,3.25C12,3.25 18,10 18,14A6,6 0 0,1 12,20Z";var F5="M12,3.25C12,3.25 6,10 6,14C6,17.32 8.69,20 12,20A6,6 0 0,0 18,14C18,10 12,3.25 12,3.25M14.47,9.97L15.53,11.03L9.53,17.03L8.47,15.97M9.75,10A1.25,1.25 0 0,1 11,11.25A1.25,1.25 0 0,1 9.75,12.5A1.25,1.25 0 0,1 8.5,11.25A1.25,1.25 0 0,1 9.75,10M14.25,14.5A1.25,1.25 0 0,1 15.5,15.75A1.25,1.25 0 0,1 14.25,17A1.25,1.25 0 0,1 13,15.75A1.25,1.25 0 0,1 14.25,14.5Z";var D5="M12.74,5.47C15.1,6.5 16.35,9.03 15.92,11.46C17.19,12.56 18,14.19 18,16V16.17C18.31,16.06 18.65,16 19,16A3,3 0 0,1 22,19A3,3 0 0,1 19,22H6A4,4 0 0,1 2,18A4,4 0 0,1 6,14H6.27C5,12.45 4.6,10.24 5.5,8.26C6.72,5.5 9.97,4.24 12.74,5.47M11.93,7.3C10.16,6.5 8.09,7.31 7.31,9.07C6.85,10.09 6.93,11.22 7.41,12.13C8.5,10.83 10.16,10 12,10C12.7,10 13.38,10.12 14,10.34C13.94,9.06 13.18,7.86 11.93,7.3M13.55,3.64C13,3.4 12.45,3.23 11.88,3.12L14.37,1.82L15.27,4.71C14.76,4.29 14.19,3.93 13.55,3.64M6.09,4.44C5.6,4.79 5.17,5.19 4.8,5.63L4.91,2.82L7.87,3.5C7.25,3.71 6.65,4.03 6.09,4.44M18,9.71C17.91,9.12 17.78,8.55 17.59,8L19.97,9.5L17.92,11.73C18.03,11.08 18.05,10.4 18,9.71M3.04,11.3C3.11,11.9 3.24,12.47 3.43,13L1.06,11.5L3.1,9.28C3,9.93 2.97,10.61 3.04,11.3M19,18H16V16A4,4 0 0,0 12,12A4,4 0 0,0 8,16H6A2,2 0 0,0 4,18A2,2 0 0,0 6,20H19A1,1 0 0,0 20,19A1,1 0 0,0 19,18Z";var E5="M9,12C9.53,12.14 9.85,12.69 9.71,13.22L8.41,18.05C8.27,18.59 7.72,18.9 7.19,18.76C6.65,18.62 6.34,18.07 6.5,17.54L7.78,12.71C7.92,12.17 8.47,11.86 9,12M13,12C13.53,12.14 13.85,12.69 13.71,13.22L11.64,20.95C11.5,21.5 10.95,21.8 10.41,21.66C9.88,21.5 9.56,20.97 9.7,20.43L11.78,12.71C11.92,12.17 12.47,11.86 13,12M17,12C17.53,12.14 17.85,12.69 17.71,13.22L16.41,18.05C16.27,18.59 15.72,18.9 15.19,18.76C14.65,18.62 14.34,18.07 14.5,17.54L15.78,12.71C15.92,12.17 16.47,11.86 17,12M17,10V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,12.11 3.6,13.08 4.5,13.6V13.59C5,13.87 5.14,14.5 4.87,14.96C4.59,15.43 4,15.6 3.5,15.32V15.33C2,14.47 1,12.85 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12C23,13.5 22.2,14.77 21,15.46V15.46C20.5,15.73 19.91,15.57 19.63,15.09C19.36,14.61 19.5,14 20,13.72V13.73C20.6,13.39 21,12.74 21,12A2,2 0 0,0 19,10H17Z";var $5="M3,12H7A5,5 0 0,1 12,7A5,5 0 0,1 17,12H21A1,1 0 0,1 22,13A1,1 0 0,1 21,14H3A1,1 0 0,1 2,13A1,1 0 0,1 3,12M15,12A3,3 0 0,0 12,9A3,3 0 0,0 9,12H15M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M12.71,20.71L15.82,17.6C16.21,17.21 16.21,16.57 15.82,16.18C15.43,15.79 14.8,15.79 14.41,16.18L12,18.59L9.59,16.18C9.2,15.79 8.57,15.79 8.18,16.18C7.79,16.57 7.79,17.21 8.18,17.6L11.29,20.71C11.5,20.9 11.74,21 12,21C12.26,21 12.5,20.9 12.71,20.71Z",_5="M3,12H7A5,5 0 0,1 12,7A5,5 0 0,1 17,12H21A1,1 0 0,1 22,13A1,1 0 0,1 21,14H3A1,1 0 0,1 2,13A1,1 0 0,1 3,12M15,12A3,3 0 0,0 12,9A3,3 0 0,0 9,12H15M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M12.71,16.3L15.82,19.41C16.21,19.8 16.21,20.43 15.82,20.82C15.43,21.21 14.8,21.21 14.41,20.82L12,18.41L9.59,20.82C9.2,21.21 8.57,21.21 8.18,20.82C7.79,20.43 7.79,19.8 8.18,19.41L11.29,16.3C11.5,16.1 11.74,16 12,16C12.26,16 12.5,16.1 12.71,16.3Z";var I5="M4,10A1,1 0 0,1 3,9A1,1 0 0,1 4,8H12A2,2 0 0,0 14,6A2,2 0 0,0 12,4C11.45,4 10.95,4.22 10.59,4.59C10.2,5 9.56,5 9.17,4.59C8.78,4.2 8.78,3.56 9.17,3.17C9.9,2.45 10.9,2 12,2A4,4 0 0,1 16,6A4,4 0 0,1 12,10H4M19,12A1,1 0 0,0 20,11A1,1 0 0,0 19,10C18.72,10 18.47,10.11 18.29,10.29C17.9,10.68 17.27,10.68 16.88,10.29C16.5,9.9 16.5,9.27 16.88,8.88C17.42,8.34 18.17,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H5A1,1 0 0,1 4,13A1,1 0 0,1 5,12H19M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z";var N5={"mdi:arrow-down-thin":v5,"mdi:arrow-up-thin":s5,"mdi:calendar-arrow-right":Z5,"mdi:calendar-week":u5,"mdi:chart-bell-curve-cumulative":c5,"mdi:chart-line":S5,"mdi:chevron-left":h5,"mdi:chevron-right":g5,"mdi:clock-outline":f5,"mdi:close":O5,"mdi:gauge":w5,"mdi:moon-waxing-gibbous":b5,"mdi:navigation":k5,"mdi:sun-wireless":y5,"mdi:table":B5,"mdi:thermometer":T5,"mdi:thermometer-lines":P5,"mdi:water":R5,"mdi:water-percent":F5,"mdi:weather-partly-cloudy":D5,"mdi:weather-pouring":E5,"mdi:weather-sunset-down":$5,"mdi:weather-sunset-up":_5,"mdi:weather-windy":I5},k2=M=>{var V;return(V=N5[M])!=null?V:""},I=(M,V="")=>{var C;return p`<svg class="mdi" viewBox="0 0 24 24" aria-hidden="true" style="width:var(--mdc-icon-size,24px);height:var(--mdc-icon-size,24px);fill:currentColor;flex:none;${V}"><path d=${(C=N5[M])!=null?C:""}></path></svg>`};var e1=class{constructor(V,C,H){this.host=V;this.type=C;this.entity=H;this.connected=!1;this.retryDelay=1e4;V.addController(this)}hostConnected(){this.connected=!0,this.sync()}hostDisconnected(){this.connected=!1,this.stop()}hostUpdated(){this.sync()}sync(){let V=this.host.hass,C=this.entity();if(!this.connected||!V||!C)return;let H=`${C}|${this.type}`;if(H===this.subscribedKey)return;this.stop(),this.subscribedKey=H;let L=V.connection.subscribeMessage(e=>{var r;this.forecast=(r=e.forecast)!=null?r:[],this.error=void 0,this.retryDelay=1e4,this.host.requestUpdate()},{type:"weather/subscribe_forecast",forecast_type:this.type,entity_id:C});this.unsub=L,L.catch(e=>{var r;this.unsub===L&&(this.error=(r=e==null?void 0:e.message)!=null?r:String(e),this.host.requestUpdate(),this.retryTimer=window.setTimeout(()=>{this.unsub===L&&(this.unsub=void 0,this.subscribedKey=void 0,this.sync())},this.retryDelay),this.retryDelay=Math.min(3e5,this.retryDelay*2))})}stop(){clearTimeout(this.retryTimer);let V=this.unsub;this.unsub=void 0,this.subscribedKey=void 0,V==null||V.then(C=>C()).catch(()=>{})}};function J1(M,V){let C=Math.ceil(Date.now()/3e5)*3e5,H=Math.floor(Date.now()/36e5)*36e5;return Promise.all([H1(M,{...V,end:new Date(H),period:"hour"}),C>H?H1(M,{...V,start:new Date(H),end:new Date(C),period:"5minute"}):Promise.resolve({})]).then(([L,e])=>({hours:L,current:e}))}function W5(M,V){var H;let C={...M};for(let[L,e]of Object.entries(V))C[L]=[...(H=C[L])!=null?H:[],...e];return C}var l1=new Map;function H1(M,V){let C=V.ids.filter(Boolean);if(!C.length)return Promise.resolve({});let H=JSON.stringify([C,V.start.getTime(),V.end.getTime(),V.period,V.types]),L=Date.now(),e=l1.get(H);if(e&&e.expires>L)return e.promise;let r=M.callWS({type:"recorder/statistics_during_period",start_time:V.start.toISOString(),end_time:V.end.toISOString(),statistic_ids:C,period:V.period,types:V.types}).then(T3),i={promise:r,expires:V.end.getTime()<L-9e5?1/0:L+3e5};return l1.set(H,i),r.catch(()=>l1.get(H)===i&&l1.delete(H)),l1.size>60&&l1.delete(l1.keys().next().value),r}function T3(M){for(let V of Object.values(M))for(let C of V)typeof C.start!="number"&&(C.start=new Date(C.start).getTime()),typeof C.end!="number"&&(C.end=new Date(C.end).getTime());return M}var R=(M,V)=>p`<div class="head">${I(M)}<span>${V}</span></div>`,y2=P`
  .wicon { display: block; }
  .wicon .c1 { fill: var(--wa-cloud); }
  .wicon .c2 { fill: var(--wa-cloud2); }
  .wicon .mo { fill: var(--wa-moon); }
  .wicon .ln { stroke: var(--wa-cloud2); }
  .wicon .fl { fill: var(--wa-cloud2); }
`,r1=P`
  :host {
    --wa-text: var(--primary-text-color);
    --wa-text2: var(--secondary-text-color);
    --wa-divider: var(--divider-color, rgba(127, 127, 127, 0.2));
    --wa-accent: var(--primary-color);
    --wa-rain: var(--blue-color, #2196f3);
    --wa-track: rgba(127, 127, 127, 0.22);
    /* Icon-Farben fürs helle Theme, .dark überschreibt */
    --wa-cloud: #a3afbb;
    --wa-cloud2: #7d8b98;
    --wa-moon: #8e9bb0;
    color: var(--wa-text);
  }
  .dark {
    --wa-cloud: #e6eaef;
    --wa-cloud2: #aab4bf;
    --wa-moon: #e9edf5;
  }

  /* nur zwei Schriftstärken wie in HA: 400 und 500 */
  b { font-weight: 500; }

  .card {
    background: var(--ha-card-background, var(--card-background-color, #fff));
    border-radius: var(--ha-card-border-radius, 12px);
    border: var(--ha-card-border-width, 1px) solid var(--ha-card-border-color, var(--wa-divider));
    box-shadow: var(--ha-card-box-shadow, var(--wa-card-shadow, none));
    padding: 12px 14px;
    min-width: 0;
    box-sizing: border-box;
  }

  .head {
    display: flex; align-items: center; gap: 8px;
    font-size: 14px; font-weight: 500; color: var(--wa-text2);
    margin-bottom: 6px;
  }
  .head .mdi { --mdc-icon-size: 18px; color: var(--state-icon-color, var(--wa-text2)); flex: none; }
  /* lange Titel in schmalen Kacheln (z. B. „Sonnenuntergang“) kürzen statt über den Rand laufen */
  .head span { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

  ${y2}

  .warn {
    background: rgba(var(--rgb-warning-color, 255, 166, 0), 0.15); color: var(--wa-text);
    border-radius: var(--ha-card-border-radius, 12px); padding: 10px 14px; font-size: 14px;
  }
  .loading, .hint { color: var(--wa-text2); text-align: center; padding: 16px; font-size: 14px; }
`;function t1(M){return p`<div class="legend">${M.filter(Boolean).map(V=>{var C,H;return p`<span><i class=${(C=V.kind)!=null?C:"box"}
    style="background:${V.color};opacity:${(H=V.opacity)!=null?H:1}"></i>${V.label}</span>`})}</div>`}var X1=P`
  .legend { display: flex; flex-wrap: wrap; align-items: center; gap: 6px 14px; font-size: 12px; color: var(--wa-text2); margin-top: 8px; }
  .legend span { display: inline-flex; align-items: center; gap: 6px; white-space: nowrap; }
  .legend i { display: inline-block; width: 10px; height: 10px; border-radius: 2px; flex: none; }
  .legend i.line { height: 3px; }
`;var G=Math.PI/180;function B2(M,V,C){let H=new Date(M.getFullYear(),M.getMonth(),M.getDate(),12),e=Math.round((H.getTime()-Date.UTC(2e3,0,1,12))/864e5)-C/360,r=(357.5291+.98560028*e)%360,i=1.9148*Math.sin(r*G)+.02*Math.sin(2*r*G)+3e-4*Math.sin(3*r*G),t=(r+i+180+102.9372)%360,a=e+.0053*Math.sin(r*G)-.0069*Math.sin(2*t*G),o=Math.asin(Math.sin(t*G)*Math.sin(23.4397*G)),A=(Math.sin(-.833*G)-Math.sin(V*G)*Math.sin(o))/(Math.cos(V*G)*Math.cos(o));if(A<-1||A>1)return;let n=Math.acos(A)/G/360,d=v=>new Date(Date.UTC(2e3,0,1,12)+v*864e5);return{rise:d(a-n),set:d(a+n),noon:d(a)}}var x1=29.530588853,P3=Date.UTC(2e3,0,6,18,14);function U5(M){let C=((M.getTime()-P3)/864e5%x1+x1)%x1,H=(1-Math.cos(C/x1*2*Math.PI))/2,L=(x1/2-C+x1)%x1;return{age:C,illumination:H,nextFull:new Date(M.getTime()+L*864e5)}}var R3={"clear-night":"Klar",cloudy:"Bew\xF6lkt",exceptional:"Unwetter",fog:"Nebel",hail:"Hagel",lightning:"Gewitter","lightning-rainy":"Gewitter mit Regen",partlycloudy:"Teilweise bew\xF6lkt",pouring:"Starkregen",rainy:"Regnerisch",snowy:"Schnee","snowy-rainy":"Schneeregen",sunny:"Sonnig",windy:"Windig","windy-variant":"Windig und bew\xF6lkt"};function v1(M){return M&&R3[M]||"\u2013"}var z5={sunny:"47,128,237",partlycloudy:"70,130,200",cloudy:"120,135,150","windy-variant":"120,135,150",rainy:"75,110,155",pouring:"65,95,140",hail:"90,100,125",snowy:"160,180,205","snowy-rainy":"130,150,175",fog:"150,155,160",lightning:"85,80,125","lightning-rainy":"85,80,125",exceptional:"150,70,70",windy:"100,140,170"},F3="35,50,100";function C2(M,V,C=V?.35:.45){return`rgba(${V&&(M==="sunny"||M==="clear-night"||M==="partlycloudy")?F3:M&&z5[M]||z5.cloudy},${C})`}var D3={new_moon:"Neumond",waxing_crescent:"Zunehmende Sichel",first_quarter:"Erstes Viertel",waxing_gibbous:"Zunehmender Mond",full_moon:"Vollmond",waning_gibbous:"Abnehmender Mond",last_quarter:"Letztes Viertel",waning_crescent:"Abnehmende Sichel"};function G5(M){return M&&D3[M]||"\u2013"}var Q5="data:image/jpeg;base64,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";var K5=new Map;function O(M,V=1){if(M==null||!isFinite(M))return"\u2013";let C=K5.get(V);C||(C=new Intl.NumberFormat("de-DE",{minimumFractionDigits:V,maximumFractionDigits:V}),K5.set(V,C));let H=10**V;return C.format(Math.round(M*H)===0?0:M)}var y=(M,V=0)=>M==null?"\u2013":`${O(M,V)}\xB0`,i1=(M,V=1)=>`${O(M,V)} l/m\xB2`;function T(M,V){let C=V?M==null?void 0:M.states[V]:void 0;if(!C)return;let H=parseFloat(C.state);return isFinite(H)?H:void 0}var E3=["So","Mo","Di","Mi","Do","Fr","Sa"];function $1(M,V=new Date){return M.toDateString()===V.toDateString()?"Heute":E3[M.getDay()]}function H2(M){return`${String(M.getHours()).padStart(2,"0")} Uhr`}function V2(M){return M.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}var $3=["N","NO","O","SO","S","SW","W","NW"];function u1(M){return M==null||!isFinite(M)?"\u2013":$3[Math.round((M%360+360)%360/45)%8]}function j5(M){return p`<div class="tiles">
    ${N3(M)} ${_3(M)} ${z3(M)} ${W3(M)} ${U3(M)} ${Q3(M)} ${K3(M)} ${j3(M)}
  </div>`}function _3({hass:M,config:V}){var r;let C=(r=V.sensors)!=null?r:{},H=T(M,C.feels_like);if(H==null)return Z;let L=T(M,C.temperature),e=L==null?"":H<L-1?"Durch den Wind f\xFChlt es sich k\xE4lter an.":H>L+1?"Durch die Luftfeuchtigkeit f\xFChlt es sich w\xE4rmer an.":"\xC4hnlich wie die tats\xE4chliche Temperatur.";return p`<section class="card tile">${R("mdi:thermometer-lines","Gef\xFChlt")}
    <div class="val">${y(H)}</div>
    ${L!=null?p`<div class="lbl">Tatsächlich: ${y(L)}</div>${I3(H,L)}`:Z}
    <div class="txt">${e}</div></section>`}function I3(M,V){let C=Math.round(M-V),H=Math.max(14,Math.abs(M-V)/.5),L=C<0?M-.32*H:C>0?M+.32*H-H:V-H/2,e=i=>(i-L)/H*100,r=C<0?"#6ec6f0":"#ffb74d";return p`<div class="fbar">
    ${C!==0?p`<i class="fseg" style="left:${e(Math.min(M,V))}%;width:${e(Math.max(M,V))-e(Math.min(M,V))}%;background:${r}"></i>
      <b class="fpill" style="left:${e(M)}%;background:${r};transform:translateX(${C<0?"-100%":"0"})">${I(C<0?"mdi:arrow-down-thin":"mdi:arrow-up-thin")}${Math.abs(C)}°</b>`:Z}
    <i class="ftick" style="left:${e(V)}%"></i>
  </div>`}function N3({hass:M,config:V}){var i;let C=(i=V.sensors)!=null?i:{},H=T(M,C.wind_speed);if(H==null)return Z;let L=T(M,C.wind_gust),e=T(M,C.wind_direction),r=[...Array(72)].map((t,a)=>{let o=a*5*Math.PI/180,A=a%18===0?38:41;return c`<line x1=${50+Math.sin(o)*A} y1=${50-Math.cos(o)*A} x2=${50+Math.sin(o)*45} y2=${50-Math.cos(o)*45} class=${a%18===0?"tk major":"tk"}/>`});return p`<section class="card tile wide2">${R("mdi:weather-windy","Wind")}
    <div class="wind">
      <div class="rows">
        <div class="row"><span>Wind</span><b>${O(H,0)} km/h</b></div>
        ${L!=null?p`<div class="row"><span>Böen</span><b>${O(L,0)} km/h</b></div>`:Z}
        ${e!=null?p`<div class="row"><span>Richtung</span><b>${O(e,0)}° ${u1(e)}</b></div>`:Z}
      </div>
      <svg class="compass" viewBox="0 0 100 100">
        ${r}
        ${["N","O","S","W"].map((t,a)=>c`<text x=${50+Math.sin(a*Math.PI/2)*30} y=${54-Math.cos(a*Math.PI/2)*30} class="cl">${t}</text>`)}
        ${e!=null?c`<g transform="rotate(${e+180} 50 50)">
          <line x1="50" y1="88" x2="50" y2="18" class="arrow"/><path d="M50 10l-6 11h12z" class="arrowhead"/>
          <circle cx="50" cy="88" r="3.5" class="arrowhead"/></g>`:Z}
        <circle cx="50" cy="50" r="17" class="hub"/>
        <text x="50" y="50" class="cv">${O(H,0)}</text><text x="50" y="60" class="cu">km/h</text>
      </svg>
    </div></section>`}function W3({hass:M,config:V,hourly:C,recent:H}){var a;let L=(a=V.sensors)!=null?a:{};if(!L.rain_total&&!C)return Z;let e=L.rain_total&&(H!=null&&H[L.rain_total])?H[L.rain_total].reduce((o,A)=>{var n;return o+((n=A.change)!=null?n:0)},0):void 0,r=Date.now(),i=C==null?void 0:C.filter(o=>{let A=new Date(o.datetime).getTime();return A>=r-36e5&&A<r+23*36e5}).reduce((o,A)=>{var n;return o+((n=A.precipitation)!=null?n:0)},0),t=T(M,L.rain_rate);return p`<section class="card tile">${R("mdi:water","Niederschlag")}
    <div class="val">${e!=null?i1(e):"\u2013"}</div>
    <div class="lbl">in den letzten 24 Std.</div>
    <div class="rows bottom">
      ${L.rain_rate?p`<div class="row"><span>Aktuell</span><b>${t?`${O(t)} l/m\xB2/h`:"kein Regen"}</b></div>`:Z}
      ${i!=null?p`<div class="row"><span>Nächste 24 Std.</span><b>${i1(i)}</b></div>`:Z}
    </div></section>`}function U3({hass:M,config:V,recent:C}){var n;let H=(n=V.sensors)!=null?n:{},L=T(M,H.pressure);if(L==null)return Z;let e=H.pressure?C==null?void 0:C[H.pressure]:void 0,r=e==null?void 0:e.filter(d=>d.end-d.start>=36e5),i=r&&r.length>=3?r[r.length-3].mean:void 0,t=i!=null?L-i:void 0,a=t==null?"":t>1?"steigend":t<-1?"fallend":"gleichbleibend",o=t==null?0:Math.max(-1,Math.min(1,t/4))*120,A=[...Array(41)].map((d,v)=>{let x=(-120+v*6)*Math.PI/180;return c`<line x1=${50+Math.sin(x)*36} y1=${54-Math.cos(x)*36} x2=${50+Math.sin(x)*44} y2=${54-Math.cos(x)*44} class="tk"/>`});return p`<section class="card tile">${R("mdi:gauge","Luftdruck")}
    <svg class="gauge" viewBox="0 0 100 92">
      ${A}
      <g transform="rotate(${o} 50 54)"><line x1="50" y1="6" x2="50" y2="20" class="needle"/></g>
      <text x="50" y="52" class="gv">${O(L,0)}</text><text x="50" y="64" class="gu">hPa</text>
      <svg x="11" y="81" width="10" height="10" viewBox="0 0 24 24"><path d=${k2("mdi:arrow-down-thin")} class="ga"/></svg>
      <svg x="79" y="81" width="10" height="10" viewBox="0 0 24 24"><path d=${k2("mdi:arrow-up-thin")} class="ga"/></svg>
    </svg>
    <div class="txt">${a?p`3 Std.: ${a} (${t>0?"+":""}${O(t,1)} hPa)`:Z}</div></section>`}function z3({hass:M,config:V}){var e;let C=(e=V.sensors)!=null?e:{},H=T(M,C.humidity);if(H==null)return Z;let L=T(M,C.dewpoint);return p`<section class="card tile">${R("mdi:water-percent","Feuchtigkeit")}
    <div class="val">${O(H,0)} %</div>
    <div class="hbar"><i style="width:${Math.max(0,Math.min(100,H))}%"></i></div>
    <div class="txt">${L!=null?`Der Taupunkt liegt derzeit bei ${y(L)}.`:""}</div></section>`}var G3=[[3,"Niedrig"],[6,"Mittel"],[8,"Hoch"],[11,"Sehr hoch"],[99,"Extrem"]];function Q3({hass:M,config:V}){var r;let C=(r=V.sensors)!=null?r:{},H=T(M,C.uv);if(H==null)return Z;let L=T(M,C.solar),e=G3.find(([i])=>H<i)[1];return p`<section class="card tile">${R("mdi:sun-wireless","UV-Index")}
    <div class="val">${O(H,0)}</div><div class="lbl">${e}</div>
    <div class="uvbar"><i style="left:${Math.min(100,H/11*100)}%"></i></div>
    <div class="txt">${L!=null?`Sonneneinstrahlung ${O(L,0)} W/m\xB2`:""}</div></section>`}function K3({hass:M,config:V}){var _,b,F,k,N,Y,s1,V1,K;let C=(_=M.states[V.weather])==null?void 0:_.attributes,H=V.sun?M.states[V.sun]:void 0,L=(F=C==null?void 0:C.latitude)!=null?F:(b=M.config)==null?void 0:b.latitude,e=(N=C==null?void 0:C.longitude)!=null?N:(k=M.config)==null?void 0:k.longitude;if(L==null||e==null)return Z;let r=new Date,i=B2(r,L,e);if(!i)return Z;let t=E=>E&&new Date(E).toDateString()===r.toDateString()?new Date(E):void 0,a=(Y=t(H==null?void 0:H.attributes.next_rising))!=null?Y:i.rise,o=(s1=t(H==null?void 0:H.attributes.next_setting))!=null?s1:i.set,A=r<o,n=r<a?["Sonnenaufgang",a]:A?["Sonnenuntergang",o]:["Sonnenaufgang",(K=(V1=B2(new Date(r.getTime()+864e5),L,e))==null?void 0:V1.rise)!=null?K:a],d=new Date(r.getFullYear(),r.getMonth(),r.getDate()).getTime(),v=E=>(E.getTime()-d)/864e5,x=(v(a)+v(o))/2,h=v(o)-v(a),m=E=>Math.cos(2*Math.PI*(E-x)),s=Math.cos(Math.PI*h),f=E=>34-E*22,S=[...Array(49)].map((E,L1)=>`${L1?"L":"M"}${L1/48*100},${f(m(L1/48))}`).join(" "),u=v(r),w=r>=a&&r<o;return p`<section class="card tile">${R(w?"mdi:weather-sunset-down":"mdi:weather-sunset-up",n[0])}
    <div class="val">${V2(n[1])}</div>
    <div class="sunarc">
      <svg viewBox="0 0 100 60" preserveAspectRatio="none">
        <path d=${S} class="sunpath"/>
        <line x1="0" x2="100" y1=${f(s)} y2=${f(s)} class="hz"/>
      </svg>
      <!-- Punkt als HTML, sonst verzerrt preserveAspectRatio=none ihn zur Ellipse -->
      <i class=${w?"sundot":"sundot down"} style="left:${u*100}%;top:${f(m(u))/60*100}%"></i>
    </div>
    <div class="txt">${n[0]==="Sonnenuntergang"?`Sonnenaufgang: ${V2(a)}`:`Sonnenuntergang: ${V2(o)}`}</div>
  </section>`}function j3({hass:M,config:V}){var r;let C=V.moon?(r=M.states[V.moon])==null?void 0:r.state:void 0,H=U5(new Date),L=Math.round((H.nextFull.getTime()-Date.now())/864e5),e=H.illumination;return p`<section class="card tile wide2 moont">${R("mdi:moon-waxing-gibbous",C?G5(C):"Mond")}
    <div class="moon">
      <div>
        <div class="row"><span>Beleuchtung</span><b>${Math.round(e*100)} %</b></div>
        <div class="row"><span>Nächster Vollmond</span><b>${L<=0?"heute":L===1?"morgen":`in ${L} Tg.`}</b></div>
      </div>
      ${Y3(e,H.age<29.530588853/2)}
    </div></section>`}function Y3(M,V){let e=`M50 30 A20 20 0 0 0 50 70 A${20*Math.abs(1-2*M)} 20 0 0 ${M>.5?1:0} 50 30Z`;return c`<svg class="moonimg" viewBox="28 28 44 44" aria-hidden="true">
    <defs>
      <filter id="ms" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="0.6"/></filter>
      <clipPath id="mc"><circle cx=${50} cy=${50} r=${20}/></clipPath>
    </defs>
    <g clip-path="url(#mc)">
      <image href=${Q5} x=${30} y=${30} width=${40} height=${40}/>
      ${M<.995?c`<path d=${e} fill="#05070c" fill-opacity="0.88" filter="url(#ms)"
        transform=${V?"":"translate(100 0) scale(-1 1)"}/>`:Z}
    </g>
  </svg>`}var Y5=P`
  /* so viele Spalten wie passen (Handy 2, Tablet/PC 3–6) → keine riesigen, halbleeren Kacheln */
  /* min(…, 50 %): auch auf sehr schmalen Handys immer 2 Spalten — breite Kacheln (span 2) sprengen sonst das Raster */
  .tiles { display: grid; grid-template-columns: repeat(auto-fill, minmax(165px, 1fr)); gap: 12px; }
  .tiles { grid-template-columns: repeat(auto-fill, minmax(min(165px, calc(50% - 6px)), 1fr)); } /* alte Browser ohne min(): Zeile davor */
  .tile { display: flex; flex-direction: column; }
  .tile.wide2 { grid-column: span 2; }
  .tile .val { font-size: 28px; font-weight: 500; line-height: 1.2; margin-top: 2px; }
  .tile .lbl { font-size: 14px; font-weight: 500; }
  .tile .txt { font-size: 13px; color: var(--wa-text2); margin-top: auto; padding-top: 8px; }
  .row { display: flex; justify-content: space-between; gap: 8px; padding: 6px 0; border-bottom: 1px solid var(--wa-divider); font-size: 14px; }
  .row:last-child { border-bottom: 0; }
  .row span { color: var(--wa-text2); }

  .wind { display: flex; align-items: center; gap: 12px; flex: 1; }
  .wind .rows { flex: 1; min-width: 0; }
  .compass { width: 120px; height: 120px; flex: none; }
  .tk { stroke: var(--wa-text2); stroke-width: 1; opacity: 0.5; }
  .tk.major { stroke-width: 2; opacity: 0.9; }
  .cl { fill: var(--wa-text2); font-size: 9px; font-weight: 500; text-anchor: middle; }
  .arrow { stroke: var(--wa-text); stroke-width: 2.5; }
  .arrowhead { fill: var(--wa-text); }
  .hub { fill: var(--ha-card-background, var(--card-background-color, #1c1c1c)); }
  .cv { fill: var(--wa-text); font-size: 15px; font-weight: 500; text-anchor: middle; }
  .cu { fill: var(--wa-text2); font-size: 7px; text-anchor: middle; }

  .gauge { width: 100%; max-width: 130px; margin: 4px auto 0; display: block; }
  .needle { stroke: var(--wa-text); stroke-width: 3.5; stroke-linecap: round; }
  .gv { fill: var(--wa-text); font-size: 18px; font-weight: 500; text-anchor: middle; }
  .gu { fill: var(--wa-text2); font-size: 9px; text-anchor: middle; }
  .ga { fill: var(--wa-text2); }

  .uvbar {
    position: relative; height: 5px; border-radius: 3px; margin-top: 10px;
    background: linear-gradient(90deg, #66bb6a, #ffee58, #ffa726, #ef5350, #ab47bc);
  }
  .uvbar i {
    position: absolute; top: 50%; width: 9px; height: 9px; margin: -4.5px 0 0 -4.5px; border-radius: 50%; box-sizing: border-box;
    background: var(--wa-text); border: 2px solid var(--ha-card-background, var(--card-background-color, #fff));
  }

  .fbar { position: relative; height: 18px; margin-top: 10px; }
  .fbar::before { content: ""; position: absolute; left: 0; right: 0; top: 7px; height: 4px; border-radius: 2px; background: var(--wa-track); }
  .fseg { position: absolute; top: 7px; height: 4px; }
  .fpill {
    position: absolute; top: 0; padding: 0 7px 0 4px; border-radius: 9px;
    display: inline-flex; align-items: center; gap: 1px; --mdc-icon-size: 13px;
    font-size: 12px; line-height: 18px; font-weight: 500; color: #10202c; white-space: nowrap;
  }
  .ftick { position: absolute; top: 2px; width: 3px; height: 14px; margin-left: -1.5px; border-radius: 2px; background: var(--wa-text); }
  /* Zeilen unten bündig wie der Text der Nachbarkacheln */
  .rows.bottom { margin-top: auto; padding-top: 8px; }
  .hbar { height: 5px; border-radius: 3px; margin-top: 10px; background: var(--wa-track); overflow: hidden; }
  .hbar i { display: block; height: 100%; border-radius: 3px; background: var(--wa-rain); }

  .sunarc { position: relative; height: 56px; margin-top: 6px; }
  .sunarc svg { width: 100%; height: 100%; display: block; }
  .sunpath { fill: none; stroke: var(--wa-text2); stroke-width: 1.5; vector-effect: non-scaling-stroke; opacity: 0.7; }
  .hz { stroke: var(--wa-text2); stroke-width: 1; vector-effect: non-scaling-stroke; opacity: 0.5; }
  .sundot { position: absolute; width: 10px; height: 10px; margin: -5px 0 0 -5px; border-radius: 50%; background: #ffd84d; }
  .sundot.down { background: var(--wa-text2); }

  .moon { display: flex; align-items: center; gap: 12px; flex: 1; }
  /* NASA-Foto ist für dunklen Grund belichtet → im hellen Theme aufhellen */
  .moon .moonimg { width: 92px; height: 92px; flex: none; filter: var(--wa-moonimg, none); }
  .moon > div { flex: 1; min-width: 0; }
`;var q3="M18 46a10 10 0 0 1 0-20a14 14 0 0 1 27-3a11.5 11.5 0 0 1 1 23z",q5=(M=32,V=32,C=11)=>c`
  <g class="sun">
    <circle cx=${M} cy=${V} r=${C} fill="#FFD84D"/>
    ${[0,45,90,135,180,225,270,315].map(H=>{let L=H*Math.PI/180,e=M+Math.cos(L)*(C+4),r=V+Math.sin(L)*(C+4),i=M+Math.cos(L)*(C+9),t=V+Math.sin(L)*(C+9);return c`<line x1=${e} y1=${r} x2=${i} y2=${t} stroke="#FFD84D" stroke-width="3.5" stroke-linecap="round"/>`})}
  </g>`,T2=(M=0,V=0,C=1)=>c`
  <path class="mo" transform="translate(${M} ${V}) scale(${C})"
    d="M40 10a20 20 0 1 0 14 34A17 17 0 0 1 40 10z"/>`,U=(M=0,V=0,C=1,H="c1")=>c`
  <path transform="translate(${M} ${V}) scale(${C})" d=${q3} class=${H}/>`,L2=M=>c`
  ${[...Array(M)].map((V,C)=>{let H=22+C*(20/Math.max(1,M-1));return c`<line x1=${H} y1="50" x2=${H-3} y2="58" stroke="#4FB3FF" stroke-width="3" stroke-linecap="round"/>`})}`,J5=c`${[22,32,42].map((M,V)=>c`<circle cx=${M} cy=${V%2?57:53} r="2.6" class="fl"/>`)}`,X5=c`<path d="M34 44l-7 10h6l-3 9l10-13h-6l3-6z" fill="#FFD84D"/>`,J3=c`${[40,47,54].map((M,V)=>c`<line x1=${12+V*3} y1=${M} x2=${52-V*2} y2=${M} class="ln" stroke-width="3.5" stroke-linecap="round"/>`)}`;function Q(M,V=!1){let C;switch(M){case"sunny":C=V?T2(2,6,.95):q5();break;case"clear-night":C=T2(2,6,.95);break;case"partlycloudy":C=c`${V?T2(10,-2,.7):q5(42,22,9)}${U(-4,6,1)}`;break;case"cloudy":case"windy-variant":C=c`${U(10,-4,.75,"c2")}${U(-4,6)}`;break;case"fog":C=c`${U(0,-8,.95,"c2")}${J3}`;break;case"rainy":C=c`${U(0,-6)}${L2(3)}`;break;case"pouring":C=c`${U(0,-6,1,"c2")}${L2(5)}`;break;case"hail":C=c`${U(0,-6,1,"c2")}${J5}`;break;case"snowy":C=c`${U(0,-6)}${J5}`;break;case"snowy-rainy":C=c`${U(0,-6)}${L2(2)}<circle cx="32" cy="55" r="2.6" class="fl"/>`;break;case"lightning":C=c`${U(0,-8,1,"c2")}${X5}`;break;case"lightning-rainy":case"exceptional":C=c`${U(0,-8,1,"c2")}${X5}${L2(2)}`;break;case"windy":C=c`${[24,32,40].map((H,L)=>c`<path d="M10 ${H}h${30-L*6}a6 6 0 1 0-6-6" fill="none" class="ln" stroke-width="3.5" stroke-linecap="round"/>`)}`;break;default:C=U(0,0,1,"c2")}return c`<svg class="wicon" viewBox="0 0 64 64" aria-hidden="true">${C}</svg>`}function c1(M,V,C=Date.now()){let H=(M!=null?M:[]).filter(r=>r.temperature!=null).map(r=>({t:new Date(r.datetime).getTime(),v:r.temperature})),L=X3(H,C),e=V!=null&&L!=null?V-L:0;return(r,i)=>{if(i==null||!e||r<=C)return i;let t=1-(r-C)/(3*36e5);return t>0?i+e*t:i}}function X3(M,V){for(let C=0;C<M.length-1;C++){let H=M[C],L=M[C+1];if(H.t<=V&&V<=L.t)return H.v+(L.v-H.v)*(V-H.t)/(L.t-H.t||1)}if(M.length&&M[0].t>V&&M[0].t-V<=36e5)return M[0].v}var C3=[{id:"temp",label:"Temperatur",icon:"mdi:thermometer"},{id:"rain",label:"Niederschlag",icon:"mdi:weather-pouring"},{id:"wind",label:"Wind",icon:"mdi:weather-windy"}],W=36e5,C0=["So","Mo","Di","Mi","Do","Fr","Sa"];function M2(M){let V=new Date(M);return new Date(V.getFullYear(),V.getMonth(),V.getDate()).getTime()}function e2(M,V,C){if(C&&C.index===V){let H=M.findIndex(L=>M2(L.datetime)===C.day);return H>=0?H:void 0}return V>=0&&V<M.length?V:void 0}var r2=(M,V)=>({index:V,day:M2(M[V].datetime)}),S1=class extends ${constructor(){super(...arguments);this.hourly=[];this.daily=[];this.index=0;this.metric="temp";this.onKey=C=>C.key==="Escape"&&this.close();this.onResize=()=>this.requestUpdate()}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey),window.addEventListener("resize",this.onResize)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),window.removeEventListener("resize",this.onResize)}close(){this.dispatchEvent(new CustomEvent("close"))}willUpdate(C){(C.has("index")||C.has("hass"))&&this.loadPast()}loadPast(){var A,n;let C=(n=(A=this.config)==null?void 0:A.sensors)!=null?n:{},H=this.daily[this.index];if(!this.hass||!H)return;let L=M2(H.datetime),e=Date.now();if(L>e)return;let r=Math.min(L+24*W,Math.ceil(e/3e5)*3e5),i=`${L}|${r}`;if(i===this._pastKey)return;this._pastKey=i;let t=[C.temperature,C.rain_total,C.wind_speed,C.wind_gust,C.wind_direction].filter(Boolean),a=["mean","max","change"];(r<L+24*W?J1(this.hass,{ids:t,start:new Date(L),types:a}):H1(this.hass,{ids:t,start:new Date(L),end:new Date(r),period:"hour",types:a}).then(d=>({hours:d,current:{}}))).then(d=>i===this._pastKey&&(this._past=d.hours,this._pastNow=d.current),()=>this._pastKey=void 0)}render(){let C=this.daily[this.index];if(!C)return Z;let H=M2(C.datetime),L=H+24*W,e=Date.now(),r=e>=H&&e<L,i=this.hourly.filter(a=>{let o=new Date(a.datetime).getTime();return o>=H&&o<=L}),t=new Date(H).toLocaleDateString("de-DE",{weekday:"long",day:"numeric",month:"long"});return p`
      <div class="backdrop" @click=${this.close}></div>
      <div class="sheet" role="dialog" aria-label="Tagesdetail">
        <div class="top">
          <button class="ib" aria-label="Schließen" @click=${this.close}>${I("mdi:close")}</button>
          <div class="ttl">${C3.find(a=>a.id===this.metric).label}</div>
          <span style="width:40px"></span>
        </div>

        <div class="days">
          ${this.daily.map((a,o)=>{let A=new Date(a.datetime);return p`<button class=${o===this.index?"on":""} @click=${()=>this.select(o)}>
              <span class="l">${C0[A.getDay()]}</span><span class="n">${A.getDate()}</span></button>`})}
        </div>
        <div class="date">${t}</div>

        <div class="chips">
          ${C3.map(a=>p`<button class=${a.id===this.metric?"on":""}
            @click=${()=>this.setMetric(a.id)}>${I(a.icon)}${a.label}</button>`)}
        </div>

        <section class="card">
          ${this.renderSummary(C,i,r)}
          ${i.length?this.renderChart(H,L,i,r?e:void 0):p`<div class="hint">Für diesen Tag gibt es keine Stundenvorhersage.</div>`}
        </section>
      </div>
    `}select(C){this.dispatchEvent(new CustomEvent("select",{detail:{index:C}}))}setMetric(C){this.dispatchEvent(new CustomEvent("metric",{detail:{metric:C}}))}renderSummary(C,H,L){var A,n,d,v;let e=(A=this.config.sensors)!=null?A:{};if(this.metric==="temp"){let x=L?T(this.hass,e.temperature):void 0;return p`<div class="sum">
        <div class="sum-ic">${Q(C.condition)}</div>
        <div>
          <div class="big">${x!=null?y(x):v1(C.condition)}</div>
          <div class="sub">H: ${y(C.temperature)} · T: ${y(C.templow)}${x!=null?` \xB7 ${v1(C.condition)}`:""}</div>
        </div>
      </div>`}if(this.metric==="rain"){let x=L&&e.rain_total?this.allRows(e.rain_total).reduce((m,s)=>{var f;return m+((f=s.change)!=null?f:0)},0):void 0,h=Math.max(0,...H.map(m=>{var s;return(s=m.precipitation_probability)!=null?s:0}),(n=C.precipitation_probability)!=null?n:0);return p`<div class="sum">
        <div>
          <div class="big">${i1((d=C.precipitation)!=null?d:H.reduce((m,s)=>{var f;return m+((f=s.precipitation)!=null?f:0)},0))}</div>
          <div class="sub">erwartet · Wahrscheinlichkeit bis ${Math.round(h)} %${x!=null?` \xB7 bisher gemessen ${i1(x)}`:""}</div>
        </div>
      </div>`}let r=H.map(x=>x.wind_speed).filter(x=>x!=null),i=r.length?r.reduce((x,h)=>x+h,0)/r.length:C.wind_speed,t=H.map(x=>x.wind_bearing).filter(x=>x!=null),a=(v=C.wind_bearing)!=null?v:t.length?Math.atan2(t.reduce((x,h)=>x+Math.sin(h*Math.PI/180),0),t.reduce((x,h)=>x+Math.cos(h*Math.PI/180),0))*180/Math.PI:void 0,o=e.wind_gust&&L?Math.max(...this.allRows(e.wind_gust).map(x=>{var h;return(h=x.max)!=null?h:0}),0):void 0;return p`<div class="sum">
      <div>
        <div class="big">${O(i,0)} km/h ${a!=null?p`<span class="dir">${u1(a)}</span>`:Z}</div>
        <div class="sub">Ø Vorhersage · max ${O(r.length?Math.max(...r):void 0,0)} km/h${o?` \xB7 st\xE4rkste B\xF6e heute ${O(o,0)} km/h`:""}</div>
      </div>
    </div>`}pastRows(C){var H,L;return(L=(H=this._past)==null?void 0:H[C])!=null?L:[]}allRows(C){var H,L;return[...this.pastRows(C),...(L=(H=this._pastNow)==null?void 0:H[C])!=null?L:[]]}chartHeight(){return typeof matchMedia=="function"&&matchMedia("(max-height: 600px) and (min-width: 700px)").matches?Math.max(180,Math.min(360,window.innerHeight-215)):220}renderChart(C,H,L,e){var h;let r=(h=this.config.sensors)!=null?h:{},i=L.map(m=>({t:new Date(m.datetime).getTime(),h:m})),t=e?i.filter(m=>m.t>=e-W):i,a=[0,6,12,18].map(m=>({t:C+m*W,label:`${String(m).padStart(2,"0")} Uhr`})),o=[],A=[],n="\xB0",d,v="",x;if(this.metric==="temp"){let m=r.temperature&&e?this.pastRows(r.temperature).map(w=>({t:w.start+W/2,v:w.mean})):[],s=e?T(this.hass,r.temperature):void 0,f=c1(this.hourly,s),S=[...m,...s!=null?[{t:e,v:s}]:[],...t.filter(w=>!e||w.t>e).map(w=>({t:w.t,v:f(w.t,w.h.temperature)}))];o.push({type:"area",points:S,color:"var(--wa-temp, #4fc3f7)",dashUntil:e,label:"Temperatur",unit:"\xB0",digits:1});let u=S.filter(w=>w.v!=null);if(u.length){let w=u.reduce((b,F)=>F.v>b.v?F:b),_=u.reduce((b,F)=>F.v<b.v?F:b);A.push({t:w.t,v:w.v,label:"H"},{t:_.t,v:_.v,label:"T"})}}else if(this.metric==="rain")n="",x=0,r.rain_total&&e&&o.push({type:"bar",points:this.pastRows(r.rain_total).map(m=>({t:m.start,v:m.change})),color:"var(--wa-rain-past, #1e6fb8)",barWidth:W,label:"gemessen",unit:" l/m\xB2",digits:1}),o.push({type:"bar",points:t.map(m=>{var s;return{t:m.t,v:(s=m.h.precipitation)!=null?s:0}}),color:"var(--wa-rain)",barWidth:W,label:"Menge",unit:" l/m\xB2",digits:1}),o.push({type:"line",axis:"right",points:t.map(m=>({t:m.t+W/2,v:m.h.precipitation_probability})),color:"var(--wa-prob, #90caf9)",label:"Wahrscheinl.",unit:" %",digits:0}),d=100,v=" %";else{n="",x=0;let m=r.wind_speed&&e?this.pastRows(r.wind_speed).map(S=>({t:S.start+W/2,v:S.mean})):[],s=e?T(this.hass,r.wind_speed):void 0,f=[...m,...s!=null?[{t:e,v:s}]:[],...t.filter(S=>!e||S.t>e).map(S=>({t:S.t,v:S.h.wind_speed}))];o.push({type:"area",points:f,color:"var(--wa-wind, #81c784)",dashUntil:e,label:"Wind",unit:" km/h",digits:0}),r.wind_gust&&e&&o.push({type:"line",points:this.pastRows(r.wind_gust).map(S=>({t:S.start+W/2,v:S.max})),color:"var(--wa-gust, #ffb74d)",label:"B\xF6e",unit:" km/h",digits:0})}return p`
      <wetter-app-chart .start=${C} .end=${H} .series=${o} .ticks=${a} .markers=${A}
        .now=${e} .height=${this.chartHeight()} .yUnit=${n} .yMin=${x} .rightMax=${d} .rightUnit=${v}
        .timeFormat=${m=>new Date(m).toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}
        .tipIcon=${m=>{var f;let s=(f=i.find(S=>S.t<=m&&m<S.t+W))==null?void 0:f.h;return s!=null&&s.condition?Q(s.condition,s.is_daytime===!1):Z}}>
      </wetter-app-chart>
      ${this.metric==="wind"?p`${this.renderWindDirs(C,t)}${t1([{color:"var(--wa-wind, #81c784)",label:"Wind",kind:"line"},o.length>1&&{color:"var(--wa-gust, #ffb74d)",label:"B\xF6en",kind:"line"}])}`:Z}
      ${this.metric==="rain"?t1([{color:"var(--wa-rain)",label:"Menge pro Stunde"},{color:"var(--wa-prob, #90caf9)",label:"Wahrscheinlichkeit",kind:"line"},!!e&&{color:"var(--wa-rain-past, #1e6fb8)",label:"gemessen"}]):Z}
    `}renderWindDirs(C,H){var i;let L=(i=this.config.sensors)==null?void 0:i.wind_direction,e=new Map((L?this.pastRows(L):[]).map(t=>[t.start,t.mean])),r=[0,3,6,9,12,15,18,21].map(t=>{var A,n;let a=new Date(C);a.setHours(t);let o=(n=e.get(a.getTime()))!=null?n:(A=H.find(d=>d.t===a.getTime()))==null?void 0:A.h.wind_bearing;return{t:a.getTime(),h:t,dir:o}}).filter(t=>t.dir!=null);return p`<div class="dirs">
      ${r.map(t=>p`<div style="left:calc(6px + (100% - 44px) * ${(t.t-C)/(24*W)})">
        ${I("mdi:navigation",`transform:rotate(${t.dir+180}deg)`)}
        <span>${t.h}</span></div>`)}
    </div>`}};S1.properties={hass:{attribute:!1},config:{attribute:!1},hourly:{attribute:!1},daily:{attribute:!1},index:{type:Number},metric:{type:String},_past:{state:!0}},S1.styles=[r1,X1,P`
      /* hängt direkt an <body> → Schrift und Farben selbst setzen */
      :host {
        position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 9; display: flex; justify-content: center; align-items: stretch;
        font-family: var(--ha-font-family-body, var(--mdc-typography-font-family, Roboto, Noto, sans-serif));
        -webkit-font-smoothing: antialiased; line-height: 1.4;
      }
      :host(.dark) { --wa-cloud: #e6eaef; --wa-cloud2: #aab4bf; --wa-moon: #e9edf5; }
      .backdrop { position: absolute; top: 0; right: 0; bottom: 0; left: 0; background: rgba(0, 0, 0, 0.55); }
      .sheet {
        position: relative; width: 100%; max-width: 720px; overflow-y: auto; box-sizing: border-box;
        background: var(--primary-background-color, #111);
        /* iPhone: nicht unter Statusleiste/Home-Indikator rutschen */
        padding: calc(8px + env(safe-area-inset-top, 0px)) 12px calc(24px + env(safe-area-inset-bottom, 0px));
        display: flex; flex-direction: column; gap: 12px; -webkit-overflow-scrolling: touch;
      }
      @media (min-width: 760px) {
        :host { align-items: center; padding: 24px; box-sizing: border-box; }
        /* PC: Hintergrund deutlich abdunkeln und weichzeichnen, damit das Popup klar im Fokus steht */
        .backdrop { background: rgba(0, 0, 0, 0.6); -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); }
        .sheet { max-height: 90vh; border-radius: var(--ha-border-radius-lg, 12px); }
      }
      .top { display: flex; align-items: center; justify-content: space-between; }
      .ttl { font-size: 18px; font-weight: 500; }
      .ib {
        border: 0; background: rgba(127, 127, 127, 0.18); color: var(--wa-text); width: 40px; height: 40px;
        border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center;
      }
      .days { display: flex; justify-content: space-between; gap: 2px; }
      .days button {
        flex: 1; border: 0; background: none; color: var(--wa-text); cursor: pointer; font: inherit;
        display: flex; flex-direction: column; align-items: center; gap: 4px; padding: 4px 0;
      }
      .days .l { font-size: 12px; color: var(--wa-text2); }
      .days .n {
        font-size: 17px; font-weight: 500; width: 36px; height: 36px; line-height: 36px; border-radius: 50%;
      }
      .days button.on .n { background: var(--wa-accent); color: var(--text-primary-color, #fff); }
      .date { text-align: center; font-size: 15px; font-weight: 500; }
      .chips { display: flex; gap: 6px; justify-content: center; flex-wrap: wrap; }
      .chips button {
        display: flex; align-items: center; gap: 6px; border: 1px solid var(--wa-divider); background: none;
        color: var(--wa-text); font: inherit; font-size: 13px; padding: 6px 12px; border-radius: 16px; cursor: pointer;
      }
      .chips .mdi { --mdc-icon-size: 16px; }
      .chips button.on {
        border-color: transparent; color: var(--wa-accent); font-weight: 500;
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.18);
      }
      .sum { display: flex; align-items: center; gap: 12px; padding: 4px 0 12px; }
      .sum-ic .wicon { width: 52px; height: 52px; }
      .big { font-size: 28px; font-weight: 500; }
      .dir { font-size: 18px; color: var(--wa-text2); font-weight: 500; }
      .sub { font-size: 13px; color: var(--wa-text2); }
      .dirs { position: relative; height: 36px; margin-top: 6px; }
      .dirs div {
        position: absolute; top: 0; transform: translateX(-50%); display: flex; flex-direction: column;
        align-items: center; font-size: 11px; color: var(--wa-text2); white-space: nowrap;
      }
      .dirs .mdi { --mdc-icon-size: 18px; color: var(--wa-text); }
      /* am Ende, damit es die Grundregeln oben überschreibt.
         Breit, aber niedrig (Echo Show 960×480, Handy quer): Vollbild, Tage + Werte-Auswahl links als Spalte,
         rechts Datum und Diagramm — nichts muss vertikal gescrollt werden */
      @media (max-height: 600px) and (min-width: 700px) {
        :host { padding: 0; align-items: stretch; }
        .sheet {
          max-width: none; max-height: none; height: 100%; border-radius: 0;
          display: grid; grid-template-columns: 210px minmax(0, 1fr); grid-template-rows: auto auto auto 1fr;
          grid-template-areas: "top date" "days card" "chips card" ". card"; gap: 10px 16px;
          padding: calc(8px + env(safe-area-inset-top, 0px)) calc(12px + env(safe-area-inset-right, 0px)) 8px calc(12px + env(safe-area-inset-left, 0px));
        }
        .top { grid-area: top; }
        .ttl, .top > span { display: none; }
        .date { grid-area: date; align-self: center; text-align: left; font-size: 17px; }
        .days { grid-area: days; display: grid; grid-template-columns: 1fr 1fr; gap: 4px; }
        .days button { flex-direction: row; justify-content: flex-start; gap: 8px; padding: 2px 4px; border-radius: 18px; }
        .days .l { width: 22px; font-size: 13px; }
        .days .n { width: 30px; height: 30px; line-height: 30px; font-size: 15px; }
        .chips { grid-area: chips; flex-direction: column; flex-wrap: nowrap; align-items: stretch; }
        .chips button { padding: 6px 12px; }
        .sheet > .card { grid-area: card; align-self: start; }
      }
    `];function _1(M,V,C){var t,a;let H=M==null?void 0:M[0];if(!H)return M;let L=new Date().setHours(0,0,0,0);if(new Date(H.datetime).setHours(0,0,0,0)!==L)return M;let e=[C,...(V!=null?V:[]).filter(o=>o.end>L).flatMap(o=>[o.min,o.max])].filter(o=>typeof o=="number"&&isFinite(o));if(!e.length)return M;let r=Math.min(...e,(t=H.templow)!=null?t:1/0),i=Math.max(...e,(a=H.temperature)!=null?a:-1/0);return r===H.templow&&i===H.temperature?M:[{...H,templow:r,temperature:i},...M.slice(1)]}var P2=[{id:"day",label:"Tag"},{id:"7d",label:"7 Tage"},{id:"30d",label:"30 Tage"},{id:"month",label:"Monat"},{id:"year",label:"Jahr"}];var H0=["Januar","Februar","M\xE4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];function V0(M){return new Date(M.getFullYear(),M.getMonth(),M.getDate())}function I1(M,V){return new Date(M.getFullYear(),M.getMonth(),M.getDate()+V)}function H3(M,V=!1){return M.toLocaleDateString("de-DE",V?{day:"2-digit",month:"2-digit",year:"numeric"}:{day:"2-digit",month:"2-digit"})}function h1(M){return P2.some(V=>V.id===M)}function V3(M,V=new Date){let C=V0(V),H=Math.min(0,Math.round(M.offset)),L,e,r,i;switch(M.preset){case"day":{L=I1(C,H),e=I1(L,1),r="hour",i=H===0?"Heute":H===-1?"Gestern":L.toLocaleDateString("de-DE",{weekday:"short",day:"2-digit",month:"2-digit"});break}case"7d":case"30d":{let a=M.preset==="7d"?7:30;e=I1(C,1+H*a),L=I1(e,-a),r=a===7?"hour":"day",i=H===0?`Letzte ${a} Tage`:`${H3(L)} \u2013 ${H3(I1(e,-1),!0)}`;break}case"month":{L=new Date(V.getFullYear(),V.getMonth()+H,1),e=new Date(L.getFullYear(),L.getMonth()+1,1),r="day",i=`${H0[L.getMonth()]} ${L.getFullYear()}`;break}default:{L=new Date(V.getFullYear()+H,0,1),e=new Date(L.getFullYear()+1,0,1),r="month",i=String(L.getFullYear());break}}let t=e.getTime()>V.getTime();return t&&(e=new Date(Math.ceil(V.getTime()/3e5)*3e5)),{preset:M.preset,offset:H,start:L,end:e,period:r,label:i,live:t}}var t2=new Map,R2=new EventTarget,L3="wetter-app:range:";function L0(M,V){let C=V;try{let H=localStorage.getItem(L3+M);h1(H)&&(C=H)}catch{}return{preset:C,offset:0}}function M0(M,V="7d"){let C=t2.get(M);return C||(C=L0(M,V),t2.set(M,C)),C}function F2(M,V){let C=t2.get(M);if(t2.set(M,V),(C==null?void 0:C.preset)!==V.preset)try{localStorage.setItem(L3+M,V.preset)}catch{}R2.dispatchEvent(new CustomEvent(M))}var i2=class{constructor(V,C,H=()=>"7d"){this.host=V;this.groupOf=C;this.fallback=H;this.onChange=()=>this.host.requestUpdate();V.addController(this)}get state(){return M0(this.groupOf(),this.fallback())}get range(){return V3(this.state)}set(V){F2(this.groupOf(),V)}hostConnected(){this.listen()}hostUpdated(){this.group!==this.groupOf()&&this.listen()}hostDisconnected(){this.group&&R2.removeEventListener(this.group,this.onChange),this.group=void 0}listen(){this.hostDisconnected(),this.group=this.groupOf(),R2.addEventListener(this.group,this.onChange)}};var g1=class extends ${constructor(){super(...arguments);this._tab="forecast";this._wide=!1;this._metric="temp";this.hourly=new e1(this,"hourly",()=>{var C;return(C=this._config)==null?void 0:C.weather});this.daily=new e1(this,"daily",()=>{var C;return(C=this._config)==null?void 0:C.weather});this._onLocation=()=>this.applyLink()}setConfig(C){if(!(C!=null&&C.weather))throw new Error("`weather:` fehlt (z. B. weather.weather_fusion_ai_kresslingweg)");this._config={...C,sensors:{...C.sensors}},this.isConnected&&this.applyLink()}static getStubConfig(C){var H;return{weather:(H=Object.keys(C.states).find(L=>L.startsWith("weather.")))!=null?H:""}}getCardSize(){return 12}getGridOptions(){return{columns:"full",rows:"auto"}}connectedCallback(){var C;super.connectedCallback(),(C=this._ro)!=null||(this._ro=new ResizeObserver(H=>{let L=H[0].contentRect.width>=820;L!==this._wide&&(this._wide=L)})),this._ro.observe(this),this.applyLink(),window.addEventListener("location-changed",this._onLocation)}applyLink(){var t;let C=new URLSearchParams(location.search),H=C.get("wetter");if(!H||!this._config)return;let[L,e,r]=H.split(":");if(L==="history")this._tab="history",this._detail=void 0,h1(e)&&F2((t=this._config.sync_group)!=null?t:"default",{preset:e,offset:0});else{this._tab="forecast";let a=L==="day"?parseInt(e,10):NaN;this._detail=isFinite(a)&&a>=0?a:void 0,(r==="temp"||r==="rain"||r==="wind")&&(this._metric=r)}C.delete("wetter");let i=C.toString();history.replaceState(history.state,"",location.pathname+(i?"?"+i:"")+location.hash)}disconnectedCallback(){var C,H;super.disconnectedCallback(),window.removeEventListener("location-changed",this._onLocation),(C=this._ro)==null||C.disconnect(),(H=this._hoursRo)==null||H.disconnect(),this._hoursEl=void 0,this.syncDetail(),setTimeout(()=>{this.isConnected||(this._detail=void 0)})}syncDetail(){var e,r,i,t,a,o,A,n;let C=this._config&&this._detail!=null?this.dailyForecast((t=T(this.hass,(e=this._config.sensors)==null?void 0:e.temperature))!=null?t:(i=(r=this.hass)==null?void 0:r.states[this._config.weather])==null?void 0:i.attributes.temperature):void 0;if(this.isConnected&&this._tab==="forecast"&&!!C){let d=e2(C,this._detail,this._shown);if(d==null||d!==this._detail){this._detail=d;return}this._shown=r2(C,d)}else{this._shown=void 0,(a=this._detailEl)==null||a.remove(),this._detailEl=void 0;return}let L=this._detailEl;L||(L=document.createElement("wetter-app-day-detail"),L.addEventListener("close",()=>this._detail=void 0),L.addEventListener("select",d=>this._detail=d.detail.index),L.addEventListener("metric",d=>this._metric=d.detail.metric),document.body.appendChild(L),this._detailEl=L),Object.assign(L,{hass:this.hass,config:this._config,hourly:(o=this.hourly.forecast)!=null?o:[],daily:C,index:this._detail,metric:this._metric}),L.classList.toggle("dark",!!((n=(A=this.hass)==null?void 0:A.themes)!=null&&n.darkMode))}shouldUpdate(C){var L,e;if(C.size>1||!C.has("hass"))return!0;let H=C.get("hass");return!H||!this.hass||!this._config||((L=H.themes)==null?void 0:L.darkMode)!==((e=this.hass.themes)==null?void 0:e.darkMode)?!0:this.watchedIds().some(r=>H.states[r]!==this.hass.states[r])}watchedIds(){var H;let C=this._config;return[C.weather,C.sun,C.moon,...Object.values((H=C.sensors)!=null?H:{})].filter(Boolean)}updated(){var H;this._tab==="forecast"&&this.loadRecent();let C=this.renderRoot.querySelector(".hours");C!==this._hoursEl&&((H=this._hoursRo)==null||H.disconnect(),this._hoursEl=C!=null?C:void 0,C&&typeof ResizeObserver=="function"&&(this._hoursRo=new ResizeObserver(()=>this.fadeEdges(C)),this._hoursRo.observe(C))),C&&this.fadeEdges(C),this.syncDetail()}loadRecent(){var i;let C=(i=this._config.sensors)!=null?i:{},H=[C.rain_total,C.pressure,C.temperature].filter(Boolean);if(!this.hass||!H.length)return;let L=Math.ceil(Date.now()/3e5)*3e5,e=String(L);if(e===this._recentKey)return;this._recentKey=e;let r=Math.floor(Date.now()/36e5)*36e5;J1(this.hass,{ids:H,start:new Date(r-23*36e5),types:["mean","min","max","change"]}).then(t=>e===this._recentKey&&(this._recent=W5(t.hours,t.current)),()=>this._recentKey=void 0)}dailyForecast(C){var L,e;let H=(L=this._config.sensors)==null?void 0:L.temperature;return _1(this.daily.forecast,H?(e=this._recent)==null?void 0:e[H]:void 0,C)}fadeEdges(C){let H=C.scrollWidth-C.clientWidth;C.classList.toggle("fl",C.scrollLeft>2),C.classList.toggle("fr",C.scrollLeft<H-2)}dayIndex(C){var e;let H=new Date(C).setHours(0,0,0,0),L=((e=this.daily.forecast)!=null?e:[]).findIndex(r=>new Date(r.datetime).setHours(0,0,0,0)===H);return Math.max(0,L)}openDetail(C,H=this._metric){this._metric=H,this._detail=C}render(){var a,o,A,n;if(!this._config||!this.hass)return Z;let C=this.hass.states[this._config.weather];if(!C)return p`<div class="warn">Entität ${this._config.weather} nicht gefunden.</div>`;let H=this._config.sun?((a=this.hass.states[this._config.sun])==null?void 0:a.state)==="below_horizon":!1,L=(o=this._config.sensors)!=null?o:{},e=(A=T(this.hass,L.temperature))!=null?A:C.attributes.temperature,r=this.dailyForecast(e),i=r==null?void 0:r[0],t=!!((n=this.hass.themes)!=null&&n.darkMode);return p`
      <div class="app ${this._wide?"wide":""} ${t?"dark":""} ${this._config.layout==="page"?"page":""}"
        style="--wa-tint:${t?C2(C.state,H):C2(C.state,H,.62)};--wa-tint2:${t?"transparent":C2(C.state,H,.1)}">
        ${this._config.animations!==!1?p`<wetter-app-sky class="sky" .condition=${C.state} .night=${H}></wetter-app-sky>`:Z}
        <header>
          ${this._config.name?p`<div class="place">${this._config.name}</div>`:Z}
          <div class="now">${y(e)}</div>
          <div class="cond">${v1(C.state)}</div>
          ${i?p`<div class="hl">H: ${y(i.temperature)}  T: ${y(i.templow)}</div>`:Z}
        </header>

        <nav class="tabs" role="tablist">
          ${["forecast","history"].map(d=>p`
            <button role="tab" aria-selected=${this._tab===d} class=${this._tab===d?"on":""}
              @click=${()=>{this._tab=d,this._detail=void 0}}>
              ${I(d==="forecast"?"mdi:calendar-arrow-right":"mdi:chart-line")}
              ${d==="forecast"?"Vorhersage":"Historie"}
            </button>`)}
        </nav>

        <main>${this._tab==="forecast"?this.renderForecast(r,e,H):p`<wetter-app-history .hass=${this.hass} .config=${this._config} .wide=${this._wide}></wetter-app-history>`}</main>
      </div>
    `}renderForecast(C,H,L){var r;let e=(r=this.hourly.error)!=null?r:this.daily.error;return p`
      ${e?p`<div class="warn">Vorhersage nicht verfügbar: ${e}</div>`:Z}
      <div class="cols">
        <div class="left">
          <section class="card hourly">${this.renderHourly(H,L)}</section>
          ${j5({hass:this.hass,config:this._config,hourly:this.hourly.forecast,recent:this._recent})}
        </div>
        <section class="card daily">${this.renderDaily(C,H)}</section>
      </div>
    `}renderHourly(C,H){let L=this.hourly.forecast;if(!L)return p`<div class="loading">Lade Stundenvorhersage …</div>`;let e=Date.now()-36e5,r=L.filter(t=>new Date(t.datetime).getTime()>e).slice(0,25),i=c1(L,C);return p`
      ${R("mdi:clock-outline","St\xFCndlich")}
      <div class="hours" @scroll=${t=>this.fadeEdges(t.currentTarget)}>
        ${r.map((t,a)=>{var o;return p`
          <div class="hr" @click=${()=>this.openDetail(this.dayIndex(t.datetime),"temp")}>
            <div class="t">${a===0?"Jetzt":H2(new Date(t.datetime))}</div>
            ${Q(t.condition,a===0?H:t.is_daytime===!1)}
            <div class="p">${((o=t.precipitation_probability)!=null?o:0)>=30?`${Math.round(t.precipitation_probability)} %`:""}</div>
            <div class="v">${y(a===0?C!=null?C:t.temperature:i(new Date(t.datetime).getTime(),t.temperature))}</div>
          </div>`})}
      </div>
    `}renderDaily(C,H){if(!C)return p`<div class="loading">Lade Tagesvorhersage …</div>`;let L=C.slice(0,10),e=Math.min(...L.map(a=>{var o,A;return(A=(o=a.templow)!=null?o:a.temperature)!=null?A:99})),r=Math.max(...L.map(a=>{var o;return(o=a.temperature)!=null?o:-99})),i=Math.max(1,r-e),t=a=>(a-e)/i*100;return p`
      ${R("mdi:calendar-week",`${L.length}-Tage-Vorhersage`)}
      ${L.map((a,o)=>{var x,h,m,s;let A=(h=(x=a.templow)!=null?x:a.temperature)!=null?h:e,n=(m=a.temperature)!=null?m:A,d=Math.max(.5,t(n)-t(A)),v=`background-size:${100/d*100}% 100%;background-position:${d>=100?0:t(A)/(100-d)*100}% 0`;return p`
          <div class="day" role="button" tabindex="0" @click=${()=>this.openDetail(o)}
            @keydown=${f=>f.key==="Enter"&&this.openDetail(o)}>
            <div class="wd">${$1(new Date(a.datetime))}</div>
            <div class="ic">
              ${Q(a.condition)}
              ${((s=a.precipitation_probability)!=null?s:0)>=30?p`<span class="p">${Math.round(a.precipitation_probability)} %</span>`:Z}
            </div>
            <div class="lo">${y(A)}</div>
            <div class="bar">
              <div class="fill" style="left:${t(A)}%;right:${100-t(n)}%;${v}"></div>
              ${o===0&&H!=null?p`<div class="dot" style="left:${Math.min(100,Math.max(0,t(H)))}%"></div>`:Z}
            </div>
            <div class="hi">${y(n)}</div>
          </div>`})}
    `}};g1.properties={hass:{attribute:!1},_config:{state:!0},_tab:{state:!0},_wide:{state:!0},_detail:{state:!0},_metric:{state:!0},_recent:{state:!0}},g1.styles=[r1,Y5,P`
      :host { display: block; }
      /* Dezenter Wetter-Farbton oben, läuft in den Theme-Hintergrund aus */
      .app {
        box-sizing: border-box; padding: 16px 12px; display: flex; flex-direction: column; gap: 12px;
        border-radius: var(--ha-card-border-radius, 12px);
        /* unten wieder in den reinen Theme-Hintergrund → keine Kante zum HA-Hintergrund darunter */
        background: linear-gradient(180deg, var(--wa-tint) 0, var(--wa-tint2, transparent) 520px, var(--wa-tint2, transparent) calc(100% - 320px), transparent 100%),
          var(--primary-background-color, #111);
      }
      .app { position: relative; --wa-card-shadow: 0 1px 4px rgba(0, 0, 0, 0.08); /* Helles Theme: weiße Wolken/Flocken mit feiner Kante statt Grau — Grau verschwindet auf hellem Grund */
        --wa-drop: rgba(30, 60, 100, 0.45); --wa-flake: #fff; --wa-flake-edge: rgba(40, 55, 80, 0.35); --wa-cloudbg: rgba(255, 255, 255, 0.85); --wa-rays: 0.55;
        --wa-moonimg: brightness(1.35) contrast(0.95) saturate(0.7) drop-shadow(0 1px 3px rgba(0, 0, 0, 0.25)); }
      .app.dark { --wa-card-shadow: none; --wa-drop: rgba(255, 255, 255, 0.3); --wa-flake: rgba(255, 255, 255, 0.75); --wa-cloudbg: rgba(255, 255, 255, 0.11); --wa-flake-edge: transparent; --wa-rays: 0.22; --wa-moonimg: none; }
      .app > header, .app > nav, .app > main { position: relative; z-index: 1; }
      .app > :not(.sky) { width: 100%; max-width: 1200px; margin-left: auto; margin-right: auto; box-sizing: border-box; }
      /* Ganzseiten-Modus (Panel-Ansicht): ganze Fläche, keine Rundung */
      /* Panel-Ansicht setzt --ha-card-border-radius: 0 → innere Karten bekommen den HA-Standardradius */
      .app.page {
        border-radius: 0; min-height: calc(100vh - var(--header-height, 56px)); padding: 20px 10px;
        /* direkt die HA-Variable setzen → gilt auch in Historie/Detail (eigene Shadow-Roots) */
        --ha-card-border-radius: var(--ha-border-radius-lg, 12px);
      }

      header { text-align: center; padding: 8px 0 12px; }
      .place { font-size: 24px; font-weight: 400; }
      .now { font-size: 88px; font-weight: 300; line-height: 1; margin: 2px 0 4px 20px; }
      .cond { font-size: 20px; font-weight: 500; }
      .hl { font-size: 16px; white-space: pre; }

      /* Breit, aber niedrig (Echo Show 960×480, Handy quer, kleine Tablets): Kopf kompakt in einer Zeile
         statt halbe Bildschirmhöhe — Temperatur links, Ort/Wetter/H-T rechts daneben */
      @media (max-height: 600px) and (min-width: 700px) {
        header {
          display: grid; grid-template-columns: auto auto; justify-content: center; align-items: center;
          column-gap: 18px; text-align: left; padding: 0 0 6px;
        }
        header > :not(.now) { grid-column: 2; }
        .now { grid-column: 1; grid-row: 1 / span 3; font-size: 64px; margin: 0; }
        .place { font-size: 18px; }
        .cond { font-size: 16px; }
        .hl { font-size: 14px; }
        .app.page { padding-top: 10px; }
        /* Tabs rechts neben den Kopf in dieselbe Zeile */
        .app { display: grid; grid-template-columns: auto minmax(260px, 1fr); column-gap: 32px; }
        .app > header { grid-column: 1; justify-content: start; padding: 0 0 0 8px; }
        .app > nav { grid-column: 2; align-self: center; }
        .app > main { grid-column: 1 / -1; }
        .tabs button { padding: 10px 8px; }
      }

      /* Tabs im Stil der HA-Oberfläche: Text + Unterstrich in Primärfarbe */
      .tabs { display: flex; border-bottom: 1px solid var(--wa-divider); }
      .tabs button {
        flex: 1; display: flex; align-items: center; justify-content: center; gap: 8px;
        border: 0; background: none; color: var(--wa-text2); font: inherit; font-size: 14px; font-weight: 500;
        padding: 12px 8px; cursor: pointer; border-bottom: 2px solid transparent; margin-bottom: -1px;
      }
      .tabs button .mdi { --mdc-icon-size: 20px; }
      .tabs button.on { color: var(--wa-accent); border-bottom-color: var(--wa-accent); }

      main { display: flex; flex-direction: column; gap: 12px; }
      .cols { display: grid; gap: 12px; }
      /* Handy: Stündlich, 7 Tage, Kacheln untereinander. PC: links Stündlich + Kacheln, rechts 7 Tage */
      .left { display: contents; }
      .hourly { order: 0; } .daily { order: 1; } .cols .tiles { order: 2; }
      .wide .cols { grid-template-columns: minmax(0, 3fr) minmax(300px, 2fr); align-items: start; }
      .wide .left { display: flex; flex-direction: column; gap: 12px; }
      .wide .tiles { grid-template-columns: repeat(3, minmax(0, 1fr)); }
      .wide .tile.moont { grid-column: auto; }
      .wide .moont .moon { flex-direction: column-reverse; align-items: stretch; }
      .wide .moont .moonimg { align-self: center; }

      .hours { display: flex; overflow-x: auto; gap: 4px; scrollbar-width: none; -webkit-overflow-scrolling: touch; }
      .hours::-webkit-scrollbar { display: none; }
      .hours.fl { -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 36px); mask-image: linear-gradient(90deg, transparent 0, #000 36px); }
      .hours.fr { -webkit-mask-image: linear-gradient(270deg, transparent 0, #000 36px); mask-image: linear-gradient(270deg, transparent 0, #000 36px); }
      .hours.fl.fr {
        -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 36px, #000 calc(100% - 36px), transparent 100%);
        mask-image: linear-gradient(90deg, transparent 0, #000 36px, #000 calc(100% - 36px), transparent 100%);
      }
      .hr { flex: 1 0 54px; display: flex; flex-direction: column; align-items: center; gap: 4px; padding: 4px 0; }
      .hr .t { font-size: 12px; color: var(--wa-text2); white-space: nowrap; }
      .hr .wicon { width: 30px; height: 30px; }
      .hr .p { font-size: 11px; color: var(--wa-rain); font-weight: 500; min-height: 13px; }
      .hr .v { font-size: 16px; font-weight: 500; }

      .day {
        display: grid; grid-template-columns: 48px 40px 34px 1fr 34px; align-items: center; gap: 8px;
        padding: 6px 0; border-bottom: 1px solid var(--wa-divider);
      }
      .day:last-child { border-bottom: 0; }
      .day, .hr { cursor: pointer; }
      .hr { border-radius: 8px; }
      .day:hover, .hr:hover { background: rgba(127, 127, 127, 0.08); }
      .wd { font-size: 15px; font-weight: 500; }
      /* feste Höhe → alle Tageszeilen gleich hoch, egal ob Regen-% darunter steht */
      /* feste Höhe → gleich hohe Zeilen; ohne % sitzt das Icon mittig */
      .ic { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 42px; }
      .ic .wicon { width: 28px; height: 28px; }
      .ic .p { font-size: 11px; line-height: 13px; height: 13px; color: var(--wa-rain); font-weight: 500; }
      .lo { color: var(--wa-text2); text-align: right; font-size: 15px; }
      .hi { text-align: right; font-size: 15px; font-weight: 500; }
      .bar { position: relative; height: 5px; background: var(--wa-track); border-radius: 3px; }
      .fill {
        position: absolute; top: 0; bottom: 0; border-radius: 3px;
        background: linear-gradient(90deg, #42a5f5, #66bb6a, #ffca28, #ff7043);
      }
      .dot {
        position: absolute; top: 50%; width: 9px; height: 9px; margin: -4.5px 0 0 -4.5px; box-sizing: border-box;
        background: var(--wa-text); border: 2px solid var(--ha-card-background, var(--card-background-color, #fff));
        border-radius: 50%;
      }

    `];var N1=36e5,M3=24*N1,f1=class extends ${constructor(){super(...arguments);this._m={};this._cols=6;this._short=!1;this.hourly=new e1(this,"hourly",()=>{var C;return(C=this._config)==null?void 0:C.weather});this.daily=new e1(this,"daily",()=>{var C;return(C=this._config)==null?void 0:C.weather})}setConfig(C){if(!(C!=null&&C.weather))throw new Error("`weather:` fehlt (z. B. weather.weather_fusion_ai_kresslingweg)");this._config={...C,sensors:{...C.sensors}}}static getStubConfig(C){var H;return{weather:(H=Object.keys(C.states).find(L=>L.startsWith("weather.")))!=null?H:""}}getCardSize(){return 6}getGridOptions(){return{columns:12,rows:"auto",min_columns:6}}connectedCallback(){var C;super.connectedCallback(),(C=this._ro)!=null||(this._ro=new ResizeObserver(H=>{let L=Math.max(5,Math.min(10,Math.floor(H[0].contentRect.width/58)));L!==this._cols&&(this._cols=L),this._short=!1,this.requestUpdate()})),this._ro.observe(this)}disconnectedCallback(){var C;super.disconnectedCallback(),(C=this._ro)==null||C.disconnect(),this.syncDetail(),setTimeout(()=>{this.isConnected||(this._detail=void 0)})}shouldUpdate(C){var e,r,i;if(C.size>1||!C.has("hass"))return!0;let H=C.get("hass");if(!H||!this.hass||!this._config||((e=H.themes)==null?void 0:e.darkMode)!==((r=this.hass.themes)==null?void 0:r.darkMode))return!0;let L=this._config;return[L.weather,L.sun,...Object.values((i=L.sensors)!=null?i:{})].some(t=>t&&H.states[t]!==this.hass.states[t])}updated(){let C=this.renderRoot.querySelector(".gust");!this._short&&C&&C.scrollWidth>C.clientWidth&&(this._short=!0),this.load(),this.syncDetail()}syncDetail(){var e,r,i,t,a,o,A,n,d,v;let C=(o=T(this.hass,(r=(e=this._config)==null?void 0:e.sensors)==null?void 0:r.temperature))!=null?o:(a=(t=this.hass)==null?void 0:t.states[(i=this._config)==null?void 0:i.weather])==null?void 0:a.attributes.temperature,H=this._detail!=null&&this.hass?_1(this.daily.forecast,this._m.temp,C):void 0;if(this.isConnected&&H){let x=e2(H,this._detail,this._shown);if(x==null||x!==this._detail){this._detail=x;return}this._shown=r2(H,x)}else{this._shown=void 0,(A=this._detailEl)==null||A.remove(),this._detailEl=void 0;return}let L=this._detailEl;L||(L=document.createElement("wetter-app-day-detail"),L.addEventListener("close",()=>this._detail=void 0),L.addEventListener("select",x=>this._detail=x.detail.index),L.addEventListener("metric",x=>this._detailEl.metric=x.detail.metric),L.metric="temp",document.body.appendChild(L),this._detailEl=L),Object.assign(L,{hass:this.hass,config:this._config,hourly:(n=this.hourly.forecast)!=null?n:[],daily:H,index:this._detail}),L.classList.toggle("dark",!!((v=(d=this.hass)==null?void 0:d.themes)!=null&&v.darkMode))}load(){var o;if(!this._config)return;let C=(o=this._config.sensors)!=null?o:{},H=[C.rain_total,C.temperature,C.wind_gust].filter(Boolean);if(!this.hass||!H.length)return;let L=Math.ceil(Date.now()/3e5)*3e5,e=String(L);if(e===this._key)return;this._key=e;let r=new Date().setHours(0,0,0,0),i=r-6*M3,t=Math.floor(Date.now()/N1)*N1,a=["change","min","max"];Promise.all([H1(this.hass,{ids:H,start:new Date(i),end:new Date(t),period:"hour",types:[...a]}),H1(this.hass,{ids:H,start:new Date(t),end:new Date(L),period:"5minute",types:[...a]})]).then(([A,n])=>e===this._key&&(this._m=this.measure(A,n,r)),()=>this._key=void 0)}measure(C,H,L){var o;let e=(o=this._config.sensors)!=null?o:{},r=A=>{var n,d;return A?[...(n=C[A])!=null?n:[],...(d=H[A])!=null?d:[]]:[]},i=A=>A.reduce((n,d)=>{var v;return n+((v=d.change)!=null?v:0)},0),t=r(e.rain_total),a=r(e.wind_gust).filter(A=>A.end>L).map(A=>A.max).filter(A=>A!=null);return{rainToday:e.rain_total?i(t.filter(A=>A.start>=L)):void 0,rain7:e.rain_total?i(t):void 0,gustMax:a.length?Math.max(...a):void 0,temp:r(e.temperature)}}open(C){let H=this._config.navigation_path;H&&(history.pushState(null,"",C?`${H}${H.includes("?")?"&":"?"}wetter=${C}`:H),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}})))}tap(C){if(!this._config.navigation_path||this._config.open_button)return;let H=/^day:(\d+)/.exec(C);return H?()=>this._detail=Number(H[1]):()=>this.open(C)}render(){var o,A,n,d,v,x;if(!this._config||!this.hass)return Z;let C=this.hass.states[this._config.weather];if(!C)return p`<div class="card warn">Entität ${this._config.weather} nicht gefunden.</div>`;let H=(o=this._config.sensors)!=null?o:{},L=this._config.sun?((A=this.hass.states[this._config.sun])==null?void 0:A.state)==="below_horizon":!1,e=(n=T(this.hass,H.temperature))!=null?n:C.attributes.temperature,r=T(this.hass,H.feels_like),i=_1(this.daily.forecast,this._m.temp,e),t=i==null?void 0:i[0],a=!!this._config.navigation_path&&!this._config.open_button;return p`
      <div class="card ${(d=this.hass.themes)!=null&&d.darkMode?"dark":""} ${a?"taps":""}">
        <div class="now t-able" @click=${this.tap("forecast")}>
          <div class="ic">${Q(C.state,L)}</div>
          <div class="t">${y(e)}</div>
          <div class="info">
            <b>${v1(C.state)}</b>
            <span>${(v=this._config.name)!=null?v:""}</span>
          </div>
          <div class="hl">
            ${t?p`<div>H: ${y(t.temperature)} · T: ${y(t.templow)}</div>`:Z}
            ${r!=null?p`<div class="sub">Gefühlt ${y(r)}</div>`:Z}
          </div>
        </div>
        ${this._config.forecast==="hours"?this.renderHours(e,L):this.renderPeriods(i)}
        ${this.renderTiles((x=i==null?void 0:i.slice(1,4))!=null?x:[])}
        ${this._config.navigation_path&&this._config.open_button?p`<button class="open" @click=${()=>this.open()}>
          ${I("mdi:weather-partly-cloudy")}Wetter-App öffnen${I("mdi:chevron-right")}</button>`:Z}
      </div>
    `}dayOf(C){var L;let H=new Date(C).setHours(0,0,0,0);return Math.max(0,((L=this.daily.forecast)!=null?L:[]).findIndex(e=>new Date(e.datetime).setHours(0,0,0,0)===H))}renderHours(C,H){let L=this.hourly.forecast;if(!L)return p`<div class="loading">Lade Vorhersage …</div>`;let e=Date.now()-N1,r=L.filter(t=>new Date(t.datetime).getTime()>e).slice(0,this._cols),i=c1(L,C);return p`<div class="hours" style="grid-template-columns:repeat(${r.length}, minmax(0, 1fr))">
      ${r.map((t,a)=>p`<div class="hr t-able" @click=${this.tap(`day:${this.dayOf(new Date(t.datetime).getTime())}:temp`)}>
        <div class="lab">${a===0?"Jetzt":H2(new Date(t.datetime)).replace(" Uhr","")}</div>
        ${Q(t.condition,a===0?H:t.is_daytime===!1)}
        <div class="p">${a2(t.precipitation_probability)}</div>
        <div class="v">${y(a===0?C!=null?C:t.temperature:i(new Date(t.datetime).getTime(),t.temperature))}</div>
      </div>`)}
    </div>`}renderPeriods(C){let H=this.hourly.forecast;if(!H)return p`<div class="loading">Lade Vorhersage …</div>`;let L=t0(H,Date.now(),C);return L.length?p`<div class="hours" style="grid-template-columns:repeat(${L.length}, minmax(0, 1fr))">
      ${L.map((e,r)=>p`<div class="hr t-able" @click=${this.tap(`day:${this.dayOf(e.start)}:temp`)}>
        <div class="lab">${r===0?"Jetzt":e.label}</div>
        ${Q(e.condition,e.night)}
        <div class="p">${a2(e.prob)}</div>
        <div class="v">${e3(e.hi,e.lo)}</div>
      </div>`)}
    </div>`:Z}renderTiles(C){let H=[...this.dayTiles(C),...this.statTiles()];return H.length?p`<div class="tiles">${H}</div>`:Z}dayTiles(C){return C.map((H,L)=>p`<div class="tile t-able" @click=${this.tap(`day:${L+1}:temp`)}>
        <div class="th"><span>${$1(new Date(H.datetime))}</span>${Q(H.condition)}</div>
        <b>${e3(H.temperature,H.templow)}</b>
        <small class="rain">${a2(H.precipitation_probability)&&`${a2(H.precipitation_probability)} Regen`}</small>
      </div>`)}statTiles(){var i;let C=(i=this._config.sensors)!=null?i:{},H=this._m,L=T(this.hass,C.rain_rate),e=T(this.hass,C.wind_speed),r=T(this.hass,C.wind_direction);return[C.rain_total&&p`<div class="tile t-able" @click=${this.tap("history:day")}><div class="th"><span>Regen heute</span></div><b>${O(H.rainToday,1)} l/m²</b>
        <small>${L?`jetzt ${O(L,1)} l/m\xB2/h`:"seit 0 Uhr"}</small></div>`,C.rain_total&&p`<div class="tile t-able" @click=${this.tap("history:7d")}><div class="th"><span>Regen 7 Tage</span></div><b>${O(H.rain7,1)} l/m²</b>
        <small>seit ${$1(new Date(Date.now()-6*M3))}</small></div>`,C.wind_speed&&p`<div class="tile t-able" @click=${this.tap("history:day")}><div class="th"><span>Wind</span></div><b>${O(e,0)} km/h ${r!=null?u1(r):""}</b>
        <small class="gust">${H.gustMax!=null?`B\xF6en ${O(H.gustMax,0)}${this._short?"":" km/h"}`:""}</small></div>`].filter(Boolean)}};f1.properties={hass:{attribute:!1},_config:{state:!0},_m:{state:!0},_cols:{state:!0},_detail:{state:!0},_short:{state:!0}},f1.styles=[r1,P`
      :host { display: block; }
      /* Maße wie HA-Kacheln, Schrift 14/12, Gewichte 400/500 */
      .card { display: flex; flex-direction: column; gap: 12px; padding: 12px; }
      /* Abstände: 12 zwischen Bereichen, 8 zwischen Kacheln (waagrecht = senkrecht), 8 in der Kachel */
      .warn, .loading { color: var(--wa-text2); font-size: 14px; padding: 8px 0; }
      .now { display: flex; align-items: center; gap: 8px; }
      /* antippbare Bereiche: Zeiger + kurzes Abdunkeln beim Tippen */
      .taps .t-able { cursor: pointer; border-radius: 10px; -webkit-tap-highlight-color: transparent; }
      .taps .t-able:active { background: rgba(127, 127, 127, 0.18); }
      .taps .tile.t-able:active { background: rgba(127, 127, 127, 0.2); }
      .now .ic .wicon { width: 48px; height: 48px; }
      .now .t { font-size: 40px; font-weight: 400; line-height: 1; }
      .info { display: flex; flex-direction: column; min-width: 0; flex: 1; }
      .info b { font-size: 16px; line-height: 22px; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .info span, .sub { font-size: 14px; line-height: 20px; color: var(--wa-text2); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .hl { text-align: right; font-size: 14px; line-height: 22px; white-space: nowrap; }

      .hours { display: grid; gap: 2px; }
      .hr { display: flex; flex-direction: column; align-items: center; gap: 2px; min-width: 0; padding: 2px 0; }
      .hr .lab { font-size: 12px; color: var(--wa-text2); white-space: nowrap; }
      .hr .wicon { width: 28px; height: 28px; }
      .p { font-size: 12px; color: var(--wa-rain); min-height: 14px; line-height: 14px; }
      .hr .v { font-size: 14px; font-weight: 500; white-space: nowrap; }
      .lo { font-weight: 400; color: var(--wa-text2); }

      /* Tage und Messwerte: gleicher Aufbau, gleiche Fläche */
      .tiles { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; }
      .tile {
        display: flex; flex-direction: column; min-width: 0; padding: 8px 4px 8px 8px;
        border-radius: 12px; background: rgba(127, 127, 127, 0.08);
      }
      .tile .th { display: flex; align-items: center; justify-content: space-between; gap: 4px; height: 20px; }
      .tile .th .wicon { width: 20px; height: 20px; flex: none; }
      .tile .th span, .tile small { font-size: 12px; color: var(--wa-text2); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .tile b { font-size: 14px; line-height: 20px; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .tile small { min-height: 16px; line-height: 16px; }
      .tile .rain { color: var(--wa-rain); }

      .open {
        display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%;
        border: 0; border-radius: 10px; padding: 10px; cursor: pointer; font: inherit; font-size: 14px; font-weight: 500;
        color: var(--wa-accent); background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.14);
      }
      .open .mdi { --mdc-icon-size: 18px; }
    `];var e3=(M,V)=>M==null?"\u2013":V==null||Math.round(V)===Math.round(M)?y(M):p`${y(M)}<span class="lo"> / ${y(V)}</span>`,a2=M=>(M!=null?M:0)>=30?`${Math.round(M)} %`:"",e0={0:"Nacht",6:"Vormittag",12:"Nachmittag",18:"Abend"},r0=["lightning-rainy","lightning","hail","pouring","snowy-rainy","snowy","rainy","fog","cloudy","windy-variant","partlycloudy","windy","sunny","clear-night"];function t0(M,V,C){var r,i,t,a;let H=new Date(V),L=new Date(H.getFullYear(),H.getMonth(),H.getDate(),Math.floor(H.getHours()/6)*6).getTime(),e=[];for(let o=0;o<4;o++){let A=new Date(L);A.setHours(A.getHours()+o*6);let n=new Date(L);n.setHours(n.getHours()+(o+1)*6);let d=o===0?V-N1:A.getTime()-1,v=M.filter(S=>{let u=new Date(S.datetime).getTime();return u>d&&u<n.getTime()});if(!v.length)continue;let x=new Map;v.forEach(S=>{var u;return S.condition&&x.set(S.condition,((u=x.get(S.condition))!=null?u:0)+1)});let h=r0.find(S=>{var u;return((u=x.get(S))!=null?u:0)>=Math.max(1,v.length/3)}),m=(r=[...x.entries()].sort((S,u)=>u[1]-S[1])[0])==null?void 0:r[0],s=v.map(S=>S.temperature).filter(S=>S!=null),f=A.getHours();e.push({start:A.getTime(),label:(i=e0[f])!=null?i:`${f} Uhr`,condition:(a=h!=null?h:m)!=null?a:(t=C==null?void 0:C[0])==null?void 0:t.condition,night:v.filter(S=>S.is_daytime===!1).length>v.length/2,prob:Math.max(0,...v.map(S=>{var u;return(u=S.precipitation_probability)!=null?u:0})),lo:s.length?Math.min(...s):void 0,hi:s.length?Math.max(...s):void 0})}return e}var D2="wetter-app-tip";function o2(M){window.dispatchEvent(new CustomEvent(D2,{detail:M}))}function A2(M,V,C){let H=e=>{e.detail!==M&&V()},L=e=>{let r=C==null?void 0:C();r&&!e.composedPath().includes(r)&&V()};return window.addEventListener(D2,H),C&&window.addEventListener("pointerdown",L,!0),()=>{window.removeEventListener(D2,H),window.removeEventListener("pointerdown",L,!0)}}var B={l:6,r:38,t:18,b:22},w1=class extends ${constructor(){super(...arguments);this.start=0;this.end=0;this.series=[];this.ticks=[];this.markers=[];this.height=200;this.yUnit="";this.rightUnit="";this.timeFormat=C=>new Date(C).toLocaleString("de-DE");this._w=0;this._onTouchStart=C=>this.touchStart(C);this._onTouchMove=C=>this.touchMove(C);this._onTouchEnd=()=>this.touchEnd()}connectedCallback(){var C;super.connectedCallback(),(C=this._ro)!=null||(this._ro=new ResizeObserver(H=>{let L=Math.round(H[0].contentRect.width);L&&L!==this._w&&(this._w=L)})),this._ro.observe(this),this._offTip=A2(this,()=>this._hover=void 0,()=>this),this.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.addEventListener("touchmove",this._onTouchMove,{passive:!1}),this.addEventListener("touchend",this._onTouchEnd),this.addEventListener("touchcancel",this._onTouchEnd)}disconnectedCallback(){var C,H,L;super.disconnectedCallback(),(C=this._ro)==null||C.disconnect(),(H=this._offTip)==null||H.call(this),this.removeEventListener("touchstart",this._onTouchStart),this.removeEventListener("touchmove",this._onTouchMove),this.removeEventListener("touchend",this._onTouchEnd),this.removeEventListener("touchcancel",this._onTouchEnd),clearTimeout((L=this._touch)==null?void 0:L.timer),clearTimeout(this._hideTimer)}willUpdate(C){C.has("start")&&C.get("start")!==void 0&&C.get("start")!==this.start&&(this._hover=void 0)}x(C){let H=Math.max(1,this.end-this.start);return B.l+(C-this.start)/H*(this._w-B.l-B.r)}scale(C){var o;let H=[];for(let A of this.series)if(((o=A.axis)!=null?o:"left")===C){for(let n of A.points)n.v!=null&&H.push(n.v),n.v2!=null&&H.push(n.v2);A.type==="bar"&&H.push(0)}let L=C==="left"?this.yMin:0,e=C==="left"?this.yMax:this.rightMax;L==null&&(L=H.length?Math.min(...H):0),e==null&&(e=H.length?Math.max(...H):1),e-L<1e-9&&(e=L+1);let r=a0((e-L)/4);C==="left"&&this.yMin==null&&(L=Math.floor(L/r)*r),C==="left"&&this.yMax==null&&(e=Math.ceil(e/r)*r),C==="right"&&this.rightMax==null&&(e=Math.ceil(e/r)*r);let i=this.height-B.t-B.b,t=A=>B.t+i-(A-L)/(e-L)*i,a=[];for(let A=L;A<=e+r/1e3;A+=r)a.push(Math.round(A*1e6)/1e6);return{y:t,ticks:a,lo:L,hi:e}}onPointer(C){C.pointerType!=="touch"&&this.hoverAt(C.clientX)}touchStart(C){var L;if(clearTimeout((L=this._touch)==null?void 0:L.timer),clearTimeout(this._hideTimer),C.touches.length!==1){this._touch=void 0;return}let H=C.touches[0];this._touch={x:H.clientX,y:H.clientY,mode:"?"},this._touch.timer=window.setTimeout(()=>{var e;((e=this._touch)==null?void 0:e.mode)==="?"&&(this._touch.mode="scrub")},250),this.hoverAt(H.clientX)}touchMove(C){let H=this._touch;if(!H||C.touches.length!==1)return;let L=C.touches[0];if(H.mode==="?"){let e=Math.abs(L.clientX-H.x),r=Math.abs(L.clientY-H.y);if(e<8&&r<8)return;if(clearTimeout(H.timer),H.mode=e>r?"scrub":"scroll",H.mode==="scroll"){this._hover=void 0;return}}H.mode==="scrub"&&(C.cancelable&&C.preventDefault(),this.hoverAt(L.clientX))}touchEnd(){let C=this._touch;C&&(clearTimeout(C.timer),this._touch=void 0,C.mode!=="scroll"&&(this._hideTimer=window.setTimeout(()=>this._hover=void 0,3e3)))}hoverAt(C){let H=this.renderRoot.querySelector(".wrap > svg");if(!H)return;let L=C-H.getBoundingClientRect().left,e=this.start+(L-B.l)/(this._w-B.l-B.r)*(this.end-this.start),r;for(let i of this.series)for(let t of i.points){if(t.v==null)continue;let a=d2(i,t);(r==null||Math.abs(a-e)<Math.abs(r-e))&&(r=a)}this._hover==null&&r!=null&&o2(this),this._hover=r}render(){var n,d,v,x,h;let C=this._w;if(!C||this.end<=this.start)return p`<div style="height:${this.height}px"></div>`;let H=this.scale("left"),e=this.series.some(m=>m.axis==="right")?this.scale("right"):void 0,r=this.height-B.b,i=[];this.now&&this.now>this.start&&this.now<this.end&&i.push(c`<rect x=${B.l} y=${B.t} width=${this.x(this.now)-B.l} height=${r-B.t} class="past"/>`);for(let m of H.ticks){let s=H.y(m);i.push(c`<line x1=${B.l} x2=${C-B.r} y1=${s} y2=${s} class="grid"/>`),i.push(c`<text x=${C-B.r+6} y=${s+4} class="ylab">${r3(m)}${this.yUnit}</text>`)}let t=[];if(e&&!this.series.some(m=>m.axis==="right"&&m.endLabel)){let m=this.series.find(s=>s.axis==="right").color;for(let s of e.ticks)s!==0&&t.push(c`<text x=${B.l+3} y=${e.y(s)-3} class="rlab" style="fill:${m}">${r3(s)}${this.rightUnit}</text>`)}for(let m of this.ticks){let s=this.x(m.t);if(s<B.l-1||s>C-B.r+1)continue;i.push(c`<line x1=${s} x2=${s} y1=${B.t} y2=${r} class="vgrid"/>`);let f=s+3+m.label.length*6>C-B.r;i.push(c`<text x=${f?s-3:s+3} y=${this.height-6} class="xlab" style=${f?"text-anchor:end":""}>${m.label}</text>`)}let a=[];this.series.forEach((m,s)=>{var w,_;let f=m.axis==="right"&&e?e:H,S=m.points.filter(b=>b.v!=null).sort((b,F)=>b.t-F.t);if(!S.length)return;if(m.type==="bar"||m.type==="range"){let b=(w=m.barWidth)!=null?w:S.length>1?S[1].t-S[0].t:(this.end-this.start)/24,F=f.y(Math.max(0,f.lo));for(let k of S){let N=k.t2!=null?k.t2-k.t:b,Y=Math.max(1.5,Math.min(14,(this.x(this.start+N)-this.x(this.start))*.65)),s1=this.x(k.t+N/2),V1=f.y(k.v),K=m.type==="range"?f.y((_=k.v2)!=null?_:k.v):F,E=Math.max(m.type==="range"?Y:.5,Math.abs(K-V1)),L1=Math.min(V1,K)-(E-Math.abs(K-V1))/2;a.push(c`<rect x=${s1-Y/2} y=${L1} width=${Y} height=${E} rx=${m.type==="range"?Y/2:2} style="fill:${m.color}"/>`)}return}if(m.type==="band"){let b=S.filter(k=>k.v2!=null).map(k=>[this.x(k.t),f.y(k.v2)]),F=S.map(k=>[this.x(k.t),f.y(k.v)]).reverse();b.length&&a.push(c`<path d=${O1(b)+" L"+O1(F).slice(1)+"Z"} style="fill:${m.color};fill-opacity:0.28"/>`);return}let u=S.map(b=>[this.x(b.t),f.y(b.v)]);if(m.type==="area"){let b=`g${s}`;a.push(c`
          <defs><linearGradient id=${b} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" style="stop-color:${m.color};stop-opacity:0.45"/>
            <stop offset="1" style="stop-color:${m.color};stop-opacity:0.04"/>
          </linearGradient></defs>
          <path d=${`${O1(u)} L${u[u.length-1][0]},${r} L${u[0][0]},${r}Z`} fill="url(#${b})"/>`)}if(m.dashUntil!=null&&S[0].t<m.dashUntil){let b=S.findIndex(N=>N.t>=m.dashUntil),F=b<0?u:u.slice(0,b+1),k=b<0?[]:u.slice(b);a.push(c`<path d=${O1(F)} class="ln" style="stroke:${m.color}" stroke-dasharray="5 5"/>`),k.length>1&&a.push(c`<path d=${O1(k)} class="ln" style="stroke:${m.color}"/>`)}else a.push(c`<path d=${O1(u)} class="ln" style="stroke:${m.color}" />`)});let o=i.length;for(let m of this.series){let s=m.endLabel?[...m.points].reverse().find(S=>S.v!=null):void 0;if(!s)continue;let f=m.axis==="right"&&e?e:H;i.push(c`<text x=${Math.min(this.x(s.t),C-B.r)-2} y=${f.y(s.v)-7} class="rlab" style="fill:${m.color};text-anchor:end">${O(s.v,(n=m.digits)!=null?n:1)}${(d=m.unit)!=null?d:""}</text>`)}for(let m of this.markers){let s=this.x(m.t),f=H.y(m.v);i.push(c`<circle cx=${s} cy=${f} r="4" class="mk"/>`),i.push(c`<text x=${s} y=${f-9} class="mklab">${m.label}</text>`)}if(this.now&&this.now>this.start&&this.now<this.end){let m=this.x(this.now);i.push(c`<line x1=${m} x2=${m} y1=${B.t} y2=${r} class="nowl"/>`)}let A=Z;if(this._hover!=null){let m=this._hover,s=this.x(m);i.push(c`<line x1=${s} x2=${s} y1=${B.t-6} y2=${r} class="hov"/>`);let f=[];for(let u of this.series){let w=i0(u,m);if(!w||w.v==null||u.silent)continue;let _=u.axis==="right"&&e?e:H;(u.type==="line"||u.type==="area")&&i.push(c`<circle cx=${s} cy=${_.y(w.v)} r="4" style="fill:${u.color}" class="hdot"/>`);let b=F=>{var k,N;return`${O(F,(k=u.digits)!=null?k:1)}${(N=u.unit)!=null?N:""}`};(u.type==="band"||u.type==="range")&&w.v2!=null?f.push({color:u.color,label:"Max",value:b(w.v2)},{color:u.color,label:"Min",value:b(w.v)}):f.push({color:u.color,label:(v=u.label)!=null?v:"",value:b(w.v)})}let S=s>C/2?`right:${C-s+8}px`:`left:${s+8}px`;A=p`<div class="tip" style="${S}"><div class="th"><b>${this.timeFormat(m)}</b>${(h=(x=this.tipIcon)==null?void 0:x.call(this,m))!=null?h:Z}</div>
        ${f.map(u=>p`<div class="tr"><i style="background:${u.color}"></i><span>${u.label}</span><b>${u.value}</b></div>`)}</div>`}return p`
      <div class="wrap">
        ${A}
        <svg width=${C} height=${this.height} @pointermove=${this.onPointer} @pointerdown=${this.onPointer}
          @pointerleave=${m=>{m.pointerType!=="touch"&&(this._hover=void 0)}}>
          <defs><clipPath id="plot"><rect x=${B.l-1} y="0" width=${Math.max(0,C-B.l-B.r+2)} height=${r+1}/></clipPath></defs>
          ${i.slice(0,o)}<g clip-path="url(#plot)">${a}</g>${i.slice(o)}${t}</svg>
      </div>
    `}};w1.properties={start:{type:Number},end:{type:Number},series:{attribute:!1},ticks:{attribute:!1},markers:{attribute:!1},now:{type:Number},height:{type:Number},yMin:{type:Number},yMax:{type:Number},yUnit:{type:String},rightMax:{type:Number},rightUnit:{type:String},timeFormat:{attribute:!1},tipIcon:{attribute:!1},_w:{state:!0},_hover:{state:!0}},w1.styles=[y2,P`
    :host { display: block; width: 100%; touch-action: pan-y; -webkit-user-select: none; user-select: none; -webkit-touch-callout: none; }
    .wrap { position: relative; }
    svg { display: block; overflow: visible; }
    .grid { stroke: var(--divider-color, rgba(127, 127, 127, 0.2)); stroke-width: 1; }
    .vgrid { stroke: var(--divider-color, rgba(127, 127, 127, 0.2)); stroke-dasharray: 2 3; }
    .ylab, .xlab { fill: var(--secondary-text-color); font-size: 11px; }
    .rlab {
      font-size: 10px; font-weight: 500; paint-order: stroke; stroke-width: 3px; stroke-linejoin: round;
      stroke: var(--ha-card-background, var(--card-background-color, #1c1c1c));
    }
    .past { fill: rgba(127, 127, 127, 0.08); }
    .ln { fill: none; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
    .mk { fill: var(--primary-text-color); stroke: var(--card-background-color, #000); stroke-width: 2; }
    .mklab { fill: var(--primary-text-color); font-size: 12px; font-weight: 500; text-anchor: middle; }
    .nowl { stroke: var(--primary-text-color); stroke-width: 1; opacity: 0.5; }
    .hov { stroke: var(--primary-text-color); stroke-width: 1; }
    .hdot { stroke: var(--card-background-color, #000); stroke-width: 2; }
    .tip {
      position: absolute; top: 4px; pointer-events: none; z-index: 1; min-width: 96px;
      background: var(--card-background-color, #222); color: var(--primary-text-color);
      border: 1px solid var(--divider-color); border-radius: 8px; padding: 6px 8px; font-size: 12px;
      display: flex; flex-direction: column; gap: 3px; white-space: nowrap; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    }
    .th { display: flex; align-items: center; justify-content: space-between; gap: 8px; min-height: 18px; }
    .th .wicon { width: 26px; height: 26px; margin: -4px -2px -4px 0; }
    .tr { display: flex; align-items: center; gap: 6px; }
    .tr i { width: 8px; height: 8px; border-radius: 2px; flex: none; }
    .tr span { color: var(--secondary-text-color); flex: 1; }
    .tr b { font-weight: 500; }
  `];function i0(M,V){var e;let C;for(let r of M.points)r.v!=null&&(!C||Math.abs(d2(M,r)-V)<Math.abs(d2(M,C)-V))&&(C=r);if(!C)return;let H=M.points,L=C.t2!=null?C.t2-C.t:(e=M.barWidth)!=null?e:H.length>1?Math.abs(H[1].t-H[0].t):1/0;return Math.abs(d2(M,C)-V)<=L/2+1?C:void 0}function d2(M,V){var L;if(M.type!=="bar"&&M.type!=="range")return V.t;let C=M.points,H=V.t2!=null?V.t2-V.t:(L=M.barWidth)!=null?L:C.length>1?C[1].t-C[0].t:0;return V.t+H/2}function a0(M){let V=Math.pow(10,Math.floor(Math.log10(Math.max(M,1e-9)))),C=M/V;return(C<=1?1:C<=2?2:C<=2.5?2.5:C<=5?5:10)*V}function r3(M){let V=0;for(;V<3&&Math.abs(Math.round(M*10**V)-M*10**V)>1e-6;)V++;return V===0?String(Math.round(M)):O(M,V)}function O1(M){let V=M.length;if(V===0)return"";if(V<3)return"M"+M.map(r=>`${r[0]},${r[1]}`).join(" L");let C=[],H=[],L=[];for(let r=0;r<V-1;r++)C[r]=M[r+1][0]-M[r][0],H[r]=C[r]?(M[r+1][1]-M[r][1])/C[r]:0;L[0]=H[0],L[V-1]=H[V-2];for(let r=1;r<V-1;r++)L[r]=H[r-1]*H[r]<=0?0:3*(C[r-1]+C[r])/((2*C[r]+C[r-1])/H[r-1]+(C[r]+2*C[r-1])/H[r]);let e=`M${M[0][0]},${M[0][1]}`;for(let r=0;r<V-1;r++){let i=C[r]/3;e+=` C${M[r][0]+i},${M[r][1]+i*L[r]} ${M[r+1][0]-i},${M[r+1][1]-i*L[r+1]} ${M[r+1][0]},${M[r+1][1]}`}return e}function t3(M){let V=M.range;return p`
    <div class="range">
      <div class="chips" role="tablist">
        ${P2.map(C=>p`<button role="tab" aria-selected=${C.id===V.preset}
            class=${C.id===V.preset?"on":""}
            @click=${()=>M.set({preset:C.id,offset:0})}>${C.label}</button>`)}
      </div>
      <div class="nav">
        <button class="ib" aria-label="Zurück" @click=${()=>M.set({preset:V.preset,offset:V.offset-1})}>
          ${I("mdi:chevron-left")}
        </button>
        <span>${V.label}</span>
        <button class="ib" aria-label="Vor" ?disabled=${V.offset>=0}
          @click=${()=>M.set({preset:V.preset,offset:V.offset+1})}>
          ${I("mdi:chevron-right")}
        </button>
      </div>
    </div>
  `}var i3=P`
  .range { display: flex; flex-direction: column; gap: 8px; }
  .chips { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; }
  .chips button {
    border: 1px solid var(--wa-divider); background: none; color: var(--wa-text); font: inherit; font-size: 13px;
    padding: 6px 11px; border-radius: 16px; cursor: pointer; white-space: nowrap;
  }
  .chips button.on {
    border-color: transparent; color: var(--wa-accent); font-weight: 500;
    background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.18);
  }
  .nav { display: flex; align-items: center; justify-content: space-between; }
  .nav span { font-weight: 500; font-size: 16px; }
  .ib {
    border: 0; background: none; color: var(--wa-text); width: 40px; height: 40px; border-radius: 50%;
    cursor: pointer; display: flex; align-items: center; justify-content: center;
  }
  .ib:hover { background: rgba(127, 127, 127, 0.15); }
  .ib[disabled] { opacity: 0.3; cursor: default; background: none; }
`;var j=[{min:0,max:1,label:"0",name:"Windstille",color:"#2a32ff",text:"#fff"},{min:1,max:6,label:"1",name:"leiser Zug",color:"#3a6ff7",text:"#fff"},{min:6,max:12,label:"2",name:"leichte Brise",color:"#3fb4f7",text:"#000"},{min:12,max:20,label:"3",name:"schwache Brise",color:"#44f2f7",text:"#000"},{min:20,max:29,label:"4",name:"m\xE4\xDFige Brise",color:"#a6f78a",text:"#000"},{min:29,max:39,label:"5",name:"frische Brise",color:"#f7d64a",text:"#000"},{min:39,max:50,label:"6",name:"starker Wind",color:"#f77a4a",text:"#000"},{min:50,max:62,label:"7",name:"steifer Wind",color:"#e8443a",text:"#fff"},{min:62,max:1/0,label:"8+",name:"st\xFCrmischer Wind und mehr",color:"#b0207a",text:"#fff"}],n2=["N","NNO","NO","ONO","O","OSO","SO","SSO","S","SSW","SW","WSW","W","WNW","NW","NNW"],o0=M=>j.findIndex(V=>M<V.max),p2=3;function A0(M){let V=o0(M.mean),C=M.min,H=M.max,L=M.mean;if(C==null||H==null||H<j[p2].min||H-C<.01)return[[V,1]];let e=Math.min(H,Math.max(C,3*L-C-H)),r=a=>a<=C?0:a>=H?1:a<=e?(a-C)**2/((H-C)*(e-C||1e-9)):1-(H-a)**2/((H-C)*(H-e||1e-9)),i=j.map(a=>r(a.max)-r(a.min));if(V>=p2)return i.map((a,o)=>[o,a]).filter(([,a])=>a>0);let t=i.slice(p2).reduce((a,o)=>a+o,0);return[[V,1-t],...i.map((a,o)=>[o,a]).filter(([a,o])=>a>=p2&&o>0)]}function a3(M=[],V=[],C={}){var G2;let H=new Map(V.map(l=>[l.start,l])),L=n2.map(()=>j.map(()=>0)),e=j.map(()=>0),r=0;for(let l of M){let g=H.get(l.start);if(l.mean==null||(g==null?void 0:g.mean)==null)continue;r++;let D=Math.round((l.mean%360+360)%360/22.5)%16;for(let[z,q]of A0(g))e[z]+=q,z>0&&(L[D][z]+=q)}if(!r)return p`<div class="hint">Keine Winddaten im Zeitraum.</div>`;let i=l=>l/r*100,t=L.map(l=>i(l.reduce((g,D)=>g+D,0))),a=Math.max(...t,1),o=(G2=[2,5,10,20,25,50].find(l=>a/l<=4))!=null?G2:50,A=Math.ceil(a/o)*o,n=16,d=90,v=l=>n+l/A*(d-n),x=l=>(l-90)*Math.PI/180,h=(l,g)=>`${100+l*Math.cos(x(g))},${100+l*Math.sin(x(g))}`,m=(l,g,D)=>{let z=l*22.5-10.5,q=l*22.5+10.5;return`M${h(g,z)} L${h(D,z)} A${D} ${D} 0 0 1 ${h(D,q)} L${h(g,q)} A${g} ${g} 0 0 0 ${h(g,z)}Z`},s=0,f=1/0;for(let l=0;l<16;l++){let g=Math.max(t[l],t[(l+1)%16]);g<f&&(f=g,s=l)}let S=s*22.5+11.25,u=[],w=[];for(let l=o;l<=A;l+=o)u.push(c`<circle cx="100" cy="100" r=${v(l)} class="ring"/>`),w.push(c`<text x=${100+v(l)*Math.cos(x(S))} y=${102.5+v(l)*Math.sin(x(S))} class="rl">${l} %</text>`);let _=l=>C.selected!=null&&C.selected!==l?"dim":"",b=L.flatMap((l,g)=>{let D=0;return l.map((z,q)=>{if(!z)return c``;let h3=v(D);return D+=i(z),c`<path d=${m(g,h3,v(D))} style="fill:${j[q].color}" class=${_(q)}><title>${n2[g]}, Bft ${j[q].label}: ${O(i(z),1)} %</title></path>`})}),F=n2.map((l,g)=>g%4===0?c``:c`<text x=${100+109*Math.cos(x(g*22.5))} y=${103+109*Math.sin(x(g*22.5))} class=${g%2?"cd2":"cd"}>${n2[g]}</text>`),k=j.map((l,g)=>({...l,i:g,share:i(e[g]),w:Math.max(i(e[g]),9)})).filter(l=>e[l.i]>0),N=k.reduce((l,g)=>l+g.w,0),Y=l=>k.slice(0,l).reduce((g,D)=>g+D.w,0)/N*100,s1=(l,g)=>l.w/N*300>=g.length*6+6,V1=l=>`left:${l}%;transform:translateX(-${l}%)`,K=l=>l>=1?`${Math.round(l)}%`:l>=.05?`${O(l,1)}%`:"<0,1%",E=C.selected!=null?j[C.selected]:void 0,L1=l=>window.innerHeight-l.currentTarget.getBoundingClientRect().bottom<150,W2=(l,g)=>{var D;return(D=C.onSelect)==null?void 0:D.call(C,C.selected===g?void 0:g,L1(l))},U2=(l,g)=>{var D;l.pointerType==="mouse"&&((D=C.onSelect)==null||D.call(C,g,L1(l)))},z2=l=>{var g;l.pointerType==="mouse"&&((g=C.onSelect)==null||g.call(C,void 0))},v2=k.findIndex(l=>l.i===C.selected),S3=l=>l.min===0?"unter 1":Number.isFinite(l.max)?`${l.min}\u2013${l.max-1}`:`ab ${l.min}`;return p`
    <div class="rose">
      <svg viewBox="-22 -22 244 244">
        ${u}
        <line x1="100" y1="8" x2="100" y2="192" class="ring"/><line x1="8" y1="100" x2="192" y2="100" class="ring"/>
        ${b}
        <circle cx="100" cy="100" r=${n-1} style="fill:${j[0].color}" class=${_(0)}/>
        <text x="100" y="103.5" class="cv">${Math.round(i(e[0]))} %</text>
        ${w}
        <text x="100" y="-6" class="cd">N</text><text x="100" y="216" class="cd">S</text>
        <text x="211" y="103" class="cd">O</text><text x="-11" y="103" class="cd">W</text>
        ${F}
      </svg>
      <div class="bftbar">
        ${E&&v2>=0?p`<div class="btip ${C.up?"up":""}" style=${V1(Y(v2)+k[v2].w/N*50)}>
          <div class="tr"><i style="background:${E.color}"></i><b>Beaufort ${E.label}</b></div>
          <div class="tr"><span>${E.name}</span></div>
          <div class="tr"><span>Wind</span><b>${S3(E)} km/h</b></div>
          <div class="tr"><span>Anteil</span><b>${K(i(e[C.selected]))}</b></div>
        </div>`:""}
        <div class="segs">${k.map(l=>p`<button style="flex:${l.w} 1 0;background:${l.color};color:${l.text}" class=${C.selected===l.i?"on":""}
          @click=${g=>W2(g,l.i)} @pointerenter=${g=>U2(g,l.i)} @pointerleave=${z2}>${s1(l,K(l.share))?K(l.share):""}</button>`)}</div>
        <div class="nums">${k.map(l=>p`<span style="flex:${l.w} 1 0" @click=${g=>W2(g,l.i)} @pointerenter=${g=>U2(g,l.i)} @pointerleave=${z2}>${l.label}</span>`)}</div>
        <div class="bl">Beaufort</div>
      </div>
    </div>`}var o3=P`
  .rose { display: flex; flex-direction: column; align-items: center; gap: 10px; }
  .rose svg { width: 100%; max-width: 340px; }
  .rose .dim { opacity: 0.25; }
  .ring { fill: none; stroke: var(--wa-divider); stroke-width: 0.8; }
  .rl {
    fill: var(--wa-text); font-size: 6.5px; font-weight: 500; text-anchor: middle;
    paint-order: stroke; stroke: var(--ha-card-background, var(--card-background-color, #1c1c1c)); stroke-width: 2.2px;
  }
  .cv { fill: #fff; font-size: 9px; font-weight: 500; text-anchor: middle; }
  .cd { fill: var(--wa-text); font-size: 10px; font-weight: 500; text-anchor: middle; }
  .cd2 { fill: var(--wa-text2); font-size: 6.5px; text-anchor: middle; }
  .bftbar { position: relative; width: 100%; max-width: 360px; padding-top: 10px; }
  .segs { display: flex; height: 20px; border-radius: 4px; overflow: hidden; }
  .segs button { min-width: 0; overflow: hidden; border: 0; padding: 0; font: inherit; font-size: 10px; font-weight: 500; line-height: 20px; cursor: pointer; }
  .segs button.on { box-shadow: inset 0 0 0 2px var(--wa-text); }
  .nums { display: flex; font-size: 11px; color: var(--wa-text2); margin-top: 2px; }
  .nums span { min-width: 0; text-align: center; cursor: pointer; }
  .bl { text-align: center; font-size: 12px; color: var(--wa-text2); margin-top: 2px; }
  .btip {
    position: absolute; top: 34px; pointer-events: none; z-index: 1; min-width: 130px;
    background: var(--card-background-color, #222); color: var(--primary-text-color);
    border: 1px solid var(--divider-color); border-radius: 8px; padding: 6px 8px; font-size: 12px; line-height: 1.5;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25); white-space: nowrap;
  }
  .btip.up { top: auto; bottom: calc(100% - 6px); margin-top: 0; }
  .btip .tr { display: flex; align-items: center; gap: 6px; }
  .btip .tr i { width: 8px; height: 8px; border-radius: 2px; flex: none; }
  .btip .tr span { color: var(--secondary-text-color); flex: 1; }
  .btip .tr b { font-weight: 500; }
`;var d0=[{id:"pressure",label:"Luftdruck",unit:" hPa",digits:1,color:"var(--wa-accent)"},{id:"humidity",label:"Feuchte",unit:" %",digits:0,color:"#4dd0e1"},{id:"solar",label:"Sonne",unit:" W/m\xB2",digits:0,color:"#ffb300"},{id:"uv",label:"UV",unit:"",digits:1,color:"#ab47bc"}],n0=c`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"/></svg>`,E2=["Jan","Feb","M\xE4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],p0=["Januar","Februar","M\xE4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],$2=["So","Mo","Di","Mi","Do","Fr","Sa"],A3=864e5,m0=.1,b1=class extends ${constructor(){super(...arguments);this.wide=!1;this._extra="pressure";this._bftUp=!1;this.range=new i2(this,()=>{var C,H;return(H=(C=this.config)==null?void 0:C.sync_group)!=null?H:"default"},()=>{var C;return h1((C=this.config)==null?void 0:C.default_range)?this.config.default_range:"7d"})}periods(C){return{main:C.preset==="day"||C.preset==="7d"?"hour":"day",rain:C.preset==="day"?"hour":"day",rose:C.start.getTime()>Date.now()-9*A3?"5minute":"hour"}}connectedCallback(){super.connectedCallback(),this._offTip=A2(this,()=>this._bft=void 0,()=>this.renderRoot.querySelector(".bftbar"))}disconnectedCallback(){var C;super.disconnectedCallback(),(C=this._offTip)==null||C.call(this)}updated(){this.load()}async load(){var t,a;if(!this.hass||!this.config)return;let C=this.range.range,H=(t=this.config.sensors)!=null?t:{},L=this.periods(C),e=`${C.start.getTime()}|${C.end.getTime()}`;if(e===this._key)return;this._key=e,this._err=void 0;let r=o=>o.filter(Boolean),i=(o,A,n)=>H1(this.hass,{ids:o,start:C.start,end:C.end,period:A,types:n});try{let[o,A,n]=await Promise.all([i(r([H.temperature,H.humidity,H.pressure,H.solar,H.uv,H.wind_speed,H.wind_gust]),L.main,["mean","min","max"]),i(r([H.rain_total]),L.rain,["change"]),i(r([H.wind_direction,L.rose!==L.main?H.wind_speed:void 0]),L.rose,["mean","min","max"])]);if(e!==this._key)return;this._dataRange=C,this._data={main:o,rain:A,dir:n}}catch(o){if(e!==this._key)return;this._err=(a=o==null?void 0:o.message)!=null?a:String(o),this._key=void 0}}render(){var o,A,n;if(!this.config)return Z;let C=this.range.range,H=this._data,L=H&&this._dataRange?this._dataRange:C,e=L!==C&&(L.start.getTime()!==C.start.getTime()||L.end.getTime()!==C.end.getTime()),r=(o=this.config.sensors)!=null?o:{},i=r.temperature&&(H==null?void 0:H.main[r.temperature])||[],t=(A=i.find(d=>d.mean!=null))==null?void 0:A.start,a=!e&&t!=null&&t-L.start.getTime()>2*A3?p`<div class="hint-inline"><span>${n0}<span>Daten erst ab <b>${new Date(t).toLocaleDateString("de-DE")}</b></span></span></div>`:Z;return p`
      <section class="card">
        ${t3(this.range)}
      </section>
      ${this._err?p`<div class="warn">Statistik nicht verfügbar: ${this._err}</div>`:Z}
      ${H?!i.length&&!(r.rain_total&&((n=H.rain[r.rain_total])!=null&&n.length))?p`<div class="hint">Keine Daten in diesem Zeitraum.</div>`:p`<div class="body ${e?"stale":""}">
            ${a}
            ${this.renderSummary(L,H)}
            <div class="cols">
              ${this.renderTemp(L,H)}
              ${this.renderRain(L,H)}
            </div>
            ${L.preset==="year"?this.renderYearTable(L,H):Z}
            <div class="cols">
              ${this.renderWind(L,H)}
              ${this.renderExtra(L,H)}
            </div></div>`:p`<div class="loading">Lade Historie …</div>`}
    `}inRange(C,H,L){let e=L.start.getTime(),r=L.end.getTime();return(H&&(C==null?void 0:C[H])||[]).filter(i=>i.start<r&&i.end>e)}rows(C,H,L){let e=this.inRange(C,H,L);return L.preset==="year"?l0(e):e}ticks(C){let H=[],L=C.start;if(C.preset==="day")for(let e of[0,6,12,18])H.push({t:new Date(L.getFullYear(),L.getMonth(),L.getDate(),e).getTime(),label:`${String(e).padStart(2,"0")} Uhr`});else if(C.preset==="7d")for(let e=0;e<7;e++){let r=new Date(L.getFullYear(),L.getMonth(),L.getDate()+e);H.push({t:r.getTime(),label:$2[r.getDay()]})}else if(C.preset==="30d")for(let e=0;e<30;e+=7){let r=new Date(L.getFullYear(),L.getMonth(),L.getDate()+e);H.push({t:r.getTime(),label:`${r.getDate()}.${r.getMonth()+1}.`})}else if(C.preset==="month")for(let e of[1,8,15,22,29])H.push({t:new Date(L.getFullYear(),L.getMonth(),e).getTime(),label:`${e}.`});else for(let e=0;e<12;e++)H.push({t:new Date(L.getFullYear(),e,1).getTime(),label:E2[e]});return H}fmt(C,H){return L=>{let e=new Date(L);if(C.preset==="year"&&H!=="hour")return`${p0[e.getMonth()]}`;let r=`${String(e.getHours()).padStart(2,"0")}:00`;return H==="hour"?C.preset==="day"?r:`${$2[e.getDay()]} ${r}`:`${$2[e.getDay()]}, ${e.getDate()}.${e.getMonth()+1}.`}}chart(C,H,L){var e,r;return p`<wetter-app-chart .start=${C.start.getTime()} .end=${C.end.getTime()} .series=${H}
      .ticks=${this.ticks(C)} .height=${(e=L.height)!=null?e:200} .yUnit=${(r=L.yUnit)!=null?r:""} .yMin=${L.yMin}
      .rightMax=${L.rightMax} .timeFormat=${this.fmt(C,C.preset==="year"?"month":L.period)}></wetter-app-chart>`}renderSummary(C,H){var S;let L=(S=this.config.sensors)!=null?S:{},e=this.periods(C),r=this.inRange(H.main,L.temperature,C),i=W1(r,"min",Math.min),t=W1(r,"max",Math.max),a=_2(r.map(u=>u.mean)),o=this.inRange(H.rain,L.rain_total,C),A=o.reduce((u,w)=>{var _;return u+((_=w.change)!=null?_:0)},0),n=o.filter(u=>{var w;return((w=u.change)!=null?w:0)>=m0}).length,d=this.inRange(H.main,L.humidity,C),v=W1(d,"max",Math.max),x=W1(d,"min",Math.min),h=W1(this.inRange(H.main,L.wind_gust,C),"max",Math.max),m=_2(this.inRange(H.main,L.wind_speed,C).map(u=>u.mean)),s=_2(d.map(u=>u.mean)),f=this.fmt({...C,preset:C.preset==="year"?"30d":C.preset},e.main);return p`<div class="grid">
      <section class="card kv">${R("mdi:thermometer","Temperatur")}
        <div class="big">${y(a,1)}</div><div class="sub">Durchschnitt</div>
        <div class="ext"><span>▲ ${y(t==null?void 0:t.v,1)}</span><small>${t?f(t.t):""}</small></div>
        <div class="ext"><span>▼ ${y(i==null?void 0:i.v,1)}</span><small>${i?f(i.t):""}</small></div>
      </section>
      <section class="card kv">${R("mdi:weather-pouring","Niederschlag")}
        <div class="big">${i1(A)}</div><div class="sub">Summe</div>
        <div class="ext"><span>${n}</span><small>${e.rain==="hour"?"Stunden mit Regen":"Regentage (\u2265 0,1 l/m\xB2)"}</small></div>
      </section>
      <section class="card kv">${R("mdi:weather-windy","Wind")}
        <div class="big">${O(m,1)} km/h</div><div class="sub">Durchschnitt</div>
        <div class="ext"><span>${O(h==null?void 0:h.v,0)} km/h</span><small>stärkste Böe${h?` \xB7 ${f(h.t)}`:""}</small></div>
      </section>
      <section class="card kv">${R("mdi:water-percent","Luftfeuchte")}
        <div class="big">${O(s,0)} %</div><div class="sub">Durchschnitt</div>
        <div class="ext"><span>▲ ${O(v==null?void 0:v.v,0)} %</span><small>${v?f(v.t):""}</small></div>
        <div class="ext"><span>▼ ${O(x==null?void 0:x.v,0)} %</span><small>${x?f(x.t):""}</small></div>
      </section>
    </div>`}renderTemp(C,H){var a;let L=(a=this.config.sensors)!=null?a:{},e=this.periods(C),r=this.rows(H.main,L.temperature,C),i=[],t=o=>o.start+(o.end-o.start)/2;return e.main==="hour"?i.push({type:"band",points:r.map(o=>({t:t(o),v:o.min,v2:o.max})),color:"var(--wa-temp, #4fc3f7)",label:"",unit:"\xB0",digits:1}):i.push({type:"range",points:r.map(o=>({t:o.start,t2:o.end,v:o.min,v2:o.max})),color:"rgba(79, 195, 247, 0.55)",label:"",unit:"\xB0",digits:1}),i.push({type:"line",points:r.map(o=>({t:t(o),v:o.mean})),color:"var(--wa-temp-line, #ffb74d)",label:"\xD8",unit:"\xB0",digits:1}),p`<section class="card">${R("mdi:thermometer","Temperatur")}
      ${this.chart(C,i,{yUnit:"\xB0",period:e.main})}
      ${t1([{color:"#4fc3f7",label:"Min\u2013Max",opacity:e.main==="hour"?.28:.55},{color:"#ffb74d",label:"Durchschnitt",kind:"line"}])}
    </section>`}renderRain(C,H){var o;let L=(o=this.config.sensors)!=null?o:{};if(!L.rain_total)return Z;let e=this.periods(C),r=this.rows(H.rain,L.rain_total,C),i=A=>{let n=0;return A.map(d=>{var v;return{t:Math.min(d.end,C.end.getTime()),v:n+=(v=d.change)!=null?v:0}})},t=r.slice(Math.max(0,r.findIndex(A=>A.change!=null))),a=[{type:"bar",points:r.map(A=>{var n;return{t:A.start,t2:A.end,v:(n=A.change)!=null?n:0}}),color:"var(--wa-rain)",label:"Menge",unit:" l/m\xB2",digits:1},{type:"line",axis:"right",points:t.length?[{t:Math.max(t[0].start,C.start.getTime()),v:0},...i(t)]:[],color:"var(--wa-prob, #90caf9)",label:"Summe",unit:" l/m\xB2",digits:1,endLabel:!0}];return p`<section class="card">${R("mdi:weather-pouring","Niederschlag")}
      ${this.chart(C,a,{yMin:0,period:e.rain})}
      ${t1([{color:"var(--wa-rain)",label:e.rain==="hour"?"pro Stunde":C.preset==="year"?"pro Monat":"pro Tag"},{color:"var(--wa-prob, #90caf9)",label:"Summe",kind:"line"}])}
    </section>`}renderWind(C,H){var n;let L=(n=this.config.sensors)!=null?n:{};if(!L.wind_speed)return Z;let e=this.periods(C),r=L.wind_direction&&H.dir[L.wind_direction]||[],i=(e.rose===e.main?H.main[L.wind_speed]:H.dir[L.wind_speed])||[],t=this.rows(H.main,L.wind_speed,C),a=this.rows(H.main,L.wind_gust,C),o=d=>d.start+(d.end-d.start)/2,A=[{type:"line",points:t.map(d=>({t:o(d),v:d.mean})),color:"var(--wa-wind, #81c784)",label:"\xD8",unit:" km/h",digits:1},...a.length?[{type:"line",points:a.map(d=>({t:o(d),v:d.max})),color:"var(--wa-gust, #ffb74d)",label:"B\xF6e",unit:" km/h",digits:0}]:[]];return p`<section class="card">${R("mdi:weather-windy","Wind")}
      ${L.wind_direction?a3(r,i,{selected:this._bft,up:this._bftUp,onSelect:(d,v)=>{d!=null&&this._bft==null&&o2(this),this._bft=d,this._bftUp=!!v}}):Z}
      ${this.chart(C,A,{yMin:0,period:e.main,height:160})}
      ${t1([{color:"#81c784",label:"Durchschnitt",kind:"line"},{color:"#ffb74d",label:"st\xE4rkste B\xF6e",kind:"line"}])}
    </section>`}renderExtra(C,H){var A,n;let L=(A=this.config.sensors)!=null?A:{},e=d0.filter(d=>L[d.id]);if(!e.length)return Z;let r=(n=e.find(d=>d.id===this._extra))!=null?n:e[0],i=this.periods(C),t=this.rows(H.main,L[r.id],C),a=d=>d.start+(d.end-d.start)/2,o=[{type:"band",points:t.map(d=>({t:a(d),v:d.min,v2:d.max})),color:r.color,unit:r.unit,digits:r.digits},{type:"line",points:t.map(d=>({t:a(d),v:d.mean})),color:r.color,label:"\xD8",unit:r.unit,digits:r.digits}];return p`<section class="card">${R("mdi:chart-bell-curve-cumulative","Weitere Werte")}
      <div class="chips small">${e.map(d=>p`<button class=${d===r?"on":""} @click=${()=>this._extra=d.id}>${d.label}</button>`)}</div>
      ${this.chart(C,o,{period:i.main,yMin:r.id==="pressure"?void 0:0})}
      ${t1([{color:r.color,label:"Durchschnitt",kind:"line"},{color:r.color,label:"Min\u2013Max",opacity:.3}])}
    </section>`}renderYearTable(C,H){var n;let L=(n=this.config.sensors)!=null?n:{},e=this.rows(H.main,L.temperature,C),r=this.rows(H.rain,L.rain_total,C),i=(d,v)=>d.find(x=>x.start===v),t=[...Array(12)].map((d,v)=>new Date(C.start.getFullYear(),v,1).getTime()).filter(d=>d<=Date.now()),a=t.findIndex(d=>i(e,d)||i(r,d)),o=a<0?t:t.slice(a),A=Math.max(1,...r.map(d=>{var v;return(v=d.change)!=null?v:0}));return p`<section class="card">${R("mdi:table",`Monate ${C.start.getFullYear()}`)}
      <table class="months">
        <thead><tr><th></th><th>Ø</th><th>Min</th><th>Max</th><th class="rc">Niederschlag</th></tr></thead>
        <tbody>${o.map(d=>{var m;let v=new Date(d).getMonth(),x=i(e,d),h=i(r,d);return!x&&!h?p`<tr class="empty"><td>${E2[v]}</td><td colspan="4">–</td></tr>`:p`<tr>
            <td>${E2[v]}</td><td>${y(x==null?void 0:x.mean,1)}</td><td class="cold">${y(x==null?void 0:x.min,1)}</td><td class="warm">${y(x==null?void 0:x.max,1)}</td>
            <td class="rc"><div class="rcell"><div class="rbar"><i style="width:${((m=h==null?void 0:h.change)!=null?m:0)/A*100}%"></i></div>
              <span>${O(h==null?void 0:h.change,0)}</span></div></td></tr>`})}</tbody>
      </table>
    </section>`}};b1.properties={hass:{attribute:!1},config:{attribute:!1},wide:{type:Boolean,reflect:!0},_data:{state:!0},_err:{state:!0},_extra:{state:!0},_bft:{state:!0}},b1.styles=[r1,X1,i3,o3,P`
      :host { display: flex; flex-direction: column; gap: 12px; }
      .cols, .grid { display: grid; gap: 12px; }
      .body { display: flex; flex-direction: column; gap: 12px; transition: opacity 0.15s; }
      .body.stale { opacity: 0.45; pointer-events: none; }
      :host([wide]) .cols { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); align-items: start; }
      /* auto-fit: vorhandene Kacheln teilen sich die ganze Breite statt rechts eine Lücke zu lassen */
      .grid { grid-template-columns: repeat(auto-fit, minmax(165px, 1fr)); }
      .kv .big { font-size: 26px; font-weight: 500; margin-top: 4px; }
      /* Detailzeilen unten bündig, auch wenn eine Kachel nur eine hat */
      .kv { display: flex; flex-direction: column; }
      .kv .sub { font-size: 12px; color: var(--wa-text2); padding-bottom: 6px; margin-bottom: auto; }
      .ext { display: flex; align-items: baseline; gap: 6px; font-size: 14px; flex-wrap: wrap; }
      .ext span { font-weight: 500; }
      .ext small { color: var(--wa-text2); font-size: 12px; }
      .chips.small button {
        display: flex; align-items: center; gap: 6px; border: 1px solid var(--wa-divider); background: none;
        color: var(--wa-text); font: inherit; font-size: 13px; padding: 5px 12px; border-radius: 16px; cursor: pointer;
      }
      .chips.small button.on {
        border-color: transparent; color: var(--wa-accent); font-weight: 500; background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.18);
      }
      /* oben so viel Luft wie unten bis zum Diagramm (dessen Innenabstand oben) */
      .chips.small { display: flex; gap: 6px; flex-wrap: wrap; margin: 12px 0 2px; }
      .chips.small button { line-height: 18px; }
      /* auffällig wie ein Hinweis-Banner, aber in Theme-Farben (Orange = HA-Warnfarbe) */
      .hint-inline { display: flex; justify-content: center; }
      .hint-inline > span {
        display: inline-flex; align-items: center; gap: 8px; font-size: 14px; color: var(--wa-text); padding: 8px 14px; border-radius: 12px;
        background: rgba(255, 152, 0, 0.16); border: 1px solid rgba(255, 152, 0, 0.45);
      }
      .hint-inline svg { width: 18px; height: 18px; fill: var(--warning-color, #ff9800); flex: none; }
      .months { width: 100%; border-collapse: collapse; font-size: 14px; }
      .months th { font-size: 12px; font-weight: 500; color: var(--wa-text2); text-align: right; padding: 4px; }
      .months td { padding: 6px 4px; text-align: right; border-top: 1px solid var(--wa-divider); white-space: nowrap; }
      .months td:first-child, .months th:first-child { text-align: left; font-weight: 500; }
      .months .cold { color: #4fc3f7; }
      .months .warm { color: #ffb74d; }
      .months .rc { width: 40%; }
      .months th.rc { text-align: left; }
      .rcell { display: flex; align-items: center; gap: 8px; }
      .months tr.empty td { color: var(--wa-text2); }
      .rbar { position: relative; flex: 1; height: 8px; background: var(--wa-track); border-radius: 4px; }
      .rbar i { position: absolute; left: 0; top: 0; bottom: 0; background: var(--wa-rain); border-radius: 4px; }
      .rcell span { min-width: 30px; }
    `];function _2(M){let V=M.filter(C=>C!=null);return V.length?V.reduce((C,H)=>C+H,0)/V.length:void 0}function W1(M,V,C){let H;for(let L of M){let e=L[V];e!=null&&(!H||C(e,H.v)===e&&e!==H.v)&&(H={t:L.start,v:e})}return H}function l0(M){var C;let V=new Map;for(let H of M){let L=new Date(H.start),e=new Date(L.getFullYear(),L.getMonth(),1).getTime(),r=V.get(e);r||(r={start:e,end:new Date(L.getFullYear(),L.getMonth()+1,1).getTime(),min:null,max:null,mean:null,change:null,_n:0,_sum:0},V.set(e,r)),H.min!=null&&(r.min=r.min==null?H.min:Math.min(r.min,H.min)),H.max!=null&&(r.max=r.max==null?H.max:Math.max(r.max,H.max)),H.mean!=null&&(r._sum+=H.mean,r._n++,r.mean=r._sum/r._n),H.change!=null&&(r.change=((C=r.change)!=null?C:0)+H.change)}return[...V.values()].sort((H,L)=>H.start-L.start)}var d3={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},n3=M=>(...V)=>({_$litDirective$:M,values:V}),m2=class{constructor(V){}get _$AU(){return this._$AM._$AU}_$AT(V,C,H){this._$Ct=V,this._$AM=C,this._$Ci=H}_$AS(V,C){return this.update(V,C)}update(V,C){return this.render(...C)}};var{I:x0}=p5,p3=M=>M;var m3=()=>document.createComment(""),k1=(M,V,C)=>{var e;let H=M._$AA.parentNode,L=V===void 0?M._$AB:V._$AA;if(C===void 0){let r=H.insertBefore(m3(),L),i=H.insertBefore(m3(),L);C=new x0(r,i,M,M.options)}else{let r=C._$AB.nextSibling,i=C._$AM,t=i!==M;if(t){let a;(e=C._$AQ)==null||e.call(C,M),C._$AM=M,C._$AP!==void 0&&(a=M._$AU)!==i._$AU&&C._$AP(a)}if(r!==L||t){let a=C._$AA;for(;a!==r;){let o=p3(a).nextSibling;p3(H).insertBefore(a,L),a=o}}}return C},a1=(M,V,C=M)=>(M._$AI(V,C),M),v0={},l3=(M,V=v0)=>M._$AH=V,x3=M=>M._$AH,l2=M=>{M._$AR(),M._$AA.remove()};var v3=(M,V,C)=>{let H=new Map;for(let L=V;L<=C;L++)H.set(M[L],L);return H},s3=n3(class extends m2{constructor(M){if(super(M),M.type!==d3.CHILD)throw Error("repeat() can only be used in text expressions")}dt(M,V,C){let H;C===void 0?C=V:V!==void 0&&(H=V);let L=[],e=[],r=0;for(let i of M)L[r]=H?H(i,r):r,e[r]=C(i,r),r++;return{values:e,keys:L}}render(M,V,C){return this.dt(M,V,C).values}update(M,[V,C,H]){var x;let L=x3(M),{values:e,keys:r}=this.dt(V,C,H);if(!Array.isArray(L))return this.ut=r,e;let i=(x=this.ut)!=null?x:this.ut=[],t=[],a,o,A=0,n=L.length-1,d=0,v=e.length-1;for(;A<=n&&d<=v;)if(L[A]===null)A++;else if(L[n]===null)n--;else if(i[A]===r[d])t[d]=a1(L[A],e[d]),A++,d++;else if(i[n]===r[v])t[v]=a1(L[n],e[v]),n--,v--;else if(i[A]===r[v])t[v]=a1(L[A],e[v]),k1(M,t[v+1],L[A]),A++,v--;else if(i[n]===r[d])t[d]=a1(L[n],e[d]),k1(M,L[A],L[n]),n--,d++;else if(a===void 0&&(a=v3(r,d,v),o=v3(i,A,n)),a.has(i[A]))if(a.has(i[n])){let h=o.get(r[d]),m=h!==void 0?L[h]:null;if(m===null){let s=k1(M,L[A]);a1(s,e[d]),t[d]=s}else t[d]=a1(m,e[d]),k1(M,L[A],m),L[h]=null;d++}else l2(L[n]),n--;else l2(L[A]),A++;for(;d<=v;){let h=k1(M,t[v+1]);a1(h,e[d]),t[d++]=h}for(;A<=n;){let h=L[A++];h!==null&&l2(h)}return this.ut=r,l3(M,t),C1}});var s0={rainy:["clouds","rain"],pouring:["clouds","pour"],hail:["clouds","hail"],"lightning-rainy":["clouds","rain","flash"],lightning:["clouds","flash"],snowy:["fewclouds","snow"],"snowy-rainy":["fewclouds","sleet"],sunny:["sun"],"clear-night":["stars"],partlycloudy:["sun","fewclouds"],cloudy:["clouds"],fog:["fog"],windy:["wind"],"windy-variant":["fewclouds","wind"]};function Z0(M){return()=>{M=M+1831565813|0;let V=Math.imul(M^M>>>15,1|M);return V=V+Math.imul(V^V>>>7,61|V)^V,((V^V>>>14)>>>0)/4294967296}}var u0=M=>[{transform:"translate3d(0,-40px,0)",opacity:M},{transform:"translate3d(0,230px,0)",opacity:M,offset:.43},{transform:"translate3d(0,580px,0)",opacity:0}],c0=M=>[{transform:"translate3d(0,-10px,0)",opacity:M},{transform:"translate3d(14px,280px,0)",opacity:M*.8},{transform:"translate3d(0,570px,0)",opacity:0}],S0=M=>[{transform:"translate3d(0,-20px,0)",opacity:M,easing:"ease-in"},{transform:"translate3d(0,300px,0)",opacity:M,offset:.62},{transform:"translate3d(4px,270px,0)",opacity:M*.7,offset:.72},{transform:"translate3d(7px,520px,0)",opacity:0}],I2=M=>[{transform:`translate3d(-${M}%,0,0)`},{transform:"translate3d(100%,0,0)"}];function N2(M,V){let C=Z0(V),H=L=>[...Array(L)];switch(M){case"rain":case"pour":case"sleet":return H(M==="pour"?56:M==="sleet"?14:28).map(()=>{let e=700+C()*500;return{cls:"drop",style:`left:${(C()*100).toFixed(1)}%;height:${Math.round(14+C()*14)}px`,anim:u0(.4+C()*.6),dur:e,delay:-C()*e}}).concat(M==="sleet"?N2("snow",V+7).slice(0,18):[]);case"hail":return H(26).map(()=>{let L=900+C()*500,e=(3.5+C()*2.5).toFixed(1);return{cls:"hail",style:`left:${(C()*100).toFixed(1)}%;top:${Math.round(-C()*160)}px;width:${e}px;height:${e}px`,anim:S0(.6+C()*.4),dur:L,delay:-C()*L}}).concat(N2("rain",V+3).slice(0,10));case"snow":return H(36).map(()=>{let L=9e3+C()*8e3,e=(2+C()*2.5).toFixed(1);return{cls:"flake",style:`left:${(C()*100).toFixed(1)}%;width:${e}px;height:${e}px`,anim:c0(.35+C()*.5),dur:L,delay:-C()*L}});case"stars":case"fewstars":return H(M==="stars"?46:18).map(()=>{let L=(1+C()*1.6).toFixed(1);return{cls:"star",style:`left:${(C()*100).toFixed(1)}%;top:${(C()*300).toFixed(0)}px;width:${L}px;height:${L}px`,anim:[{opacity:.15},{opacity:.4+C()*.6}],dur:1800+C()*3500,delay:-C()*4e3,easing:"ease-in-out",dir:"alternate"}});case"sun":return[{cls:"glow",style:"",anim:[{transform:"scale(1)",opacity:.75},{transform:"scale(1.08)",opacity:1}],dur:7e3,delay:0,easing:"ease-in-out",dir:"alternate"},{cls:"rays",style:"",anim:[{transform:"rotate(0deg)"},{transform:"rotate(360deg)"}],dur:14e4,delay:0}];case"clouds":case"fewclouds":return H(M==="clouds"?5:3).map((L,e)=>{let r=7e4+C()*5e4;return{cls:"lane",style:`top:${Math.round(10+e*(M==="clouds"?70:90)+C()*30)}px;--cw:${Math.round(28+C()*16)}%;opacity:${(.5+C()*.5).toFixed(2)}`,anim:I2(45),dur:r,delay:-C()*r}});case"fog":return H(4).map((L,e)=>{let r=5e4+C()*4e4;return{cls:"lane fogl",style:`top:${60+e*90}px`,anim:I2(80),dur:r,delay:-C()*r}});case"wind":return H(10).map(()=>{let L=2200+C()*2200;return{cls:"lane windl",style:`top:${Math.round(20+C()*380)}px;--sw:${Math.round(60+C()*90)}px;opacity:${(.3+C()*.6).toFixed(2)}`,anim:I2(20),dur:L,delay:-C()*L*3}});case"flash":return[{cls:"flash",style:"",anim:[{opacity:0,offset:0},{opacity:0,offset:.1},{opacity:.38,offset:.11},{opacity:0,offset:.13},{opacity:.24,offset:.15},{opacity:0,offset:.17},{opacity:0,offset:1}],dur:8e3,delay:0}]}}var Z3=new Map;function h0(M,V){var L;let C=`${M}|${V}`,H=Z3.get(C);return H||(H=((L=s0[M])!=null?L:[]).map(r=>V&&r==="sun"?"fewstars":r).flatMap((r,i)=>N2(r,i*31+1)),Z3.set(C,H)),H}var u3=1500,y1=class extends ${constructor(){super(...arguments);this.night=!1;this._groups=[];this._started=new WeakSet}willUpdate(C){if(!C.has("condition")&&!C.has("night"))return;let H=this.condition?`${this.condition}|${this.night}`:"",L=this._groups.find(e=>!e.leaving);(L==null?void 0:L.key)!==H&&(this._groups=[...this._groups.filter(e=>e!==L&&!e.leaving),...L?[{...L,leaving:!0}]:[],...H?[{key:H,items:h0(this.condition,this.night)}]:[]])}render(){return p`${s3(this._groups,C=>C.key,C=>p`<div class="g" data-key=${C.key}>
      ${C.items.map(H=>p`<i class=${H.cls} style=${H.style}>${H.cls.startsWith("lane")?p`<b></b>`:Z}</i>`)}
    </div>`)}`}updated(){this.renderRoot.querySelectorAll(".g").forEach(H=>{let L=this._groups.find(e=>e.key===H.dataset.key);if(!(!L||typeof H.animate!="function")){if(L.leaving){this._started.has(H)&&!H.dataset.out?(H.dataset.out="1",H.animate([{opacity:1},{opacity:0}],{duration:u3,fill:"forwards"}).onfinish=()=>{this._groups=this._groups.filter(e=>e!==L)}):this._started.has(H)||(this._groups=this._groups.filter(e=>e!==L));return}this._started.has(H)||(this._started.add(H),H.animate([{opacity:0},{opacity:1}],{duration:u3}),H.querySelectorAll("i").forEach((e,r)=>{var t,a;let i=L.items[r];i&&e.animate(i.anim,{duration:i.dur,delay:i.delay,iterations:1/0,easing:(t=i.easing)!=null?t:"linear",direction:(a=i.dir)!=null?a:"normal"})}))}})}};y1.properties={condition:{},night:{type:Boolean},_groups:{state:!0}},y1.styles=P`
    :host {
      position: absolute; left: 0; right: 0; top: 0; height: 560px; overflow: hidden; pointer-events: none; display: block;
    }
    .g { position: absolute; top: 0; right: 0; bottom: 0; left: 0; }
    i { position: absolute; top: 0; left: 0; }
    .drop { width: 1.5px; border-radius: 1px; background: linear-gradient(180deg, transparent, var(--wa-drop)); }
    .flake, .star, .hail { border-radius: 50%; background: var(--wa-flake); box-shadow: 0 0 0 0.5px var(--wa-flake-edge, transparent); }
    .hail { background: radial-gradient(circle at 35% 35%, #fff 0, var(--wa-flake) 70%); box-shadow: 0 0 0 0.5px var(--wa-flake-edge, rgba(0, 0, 0, 0.15)); }
    .glow {
      left: auto; right: -130px; top: -150px; width: 440px; height: 440px; border-radius: 50%;
      background: radial-gradient(circle, rgba(255, 236, 170, 0.6) 0, rgba(255, 222, 120, 0.42) 14%, rgba(255, 200, 80, 0.16) 36%, transparent 68%);
    }
    .rays {
      left: auto; right: -330px; top: -350px; width: 820px; height: 820px; border-radius: 50%; opacity: var(--wa-rays, 0.22);
      background: repeating-conic-gradient(from 0deg, rgba(255, 220, 140, 0.16) 0deg, transparent 9deg, rgba(255, 220, 140, 0.16) 20deg);
      -webkit-mask-image: radial-gradient(circle, #000 0, rgba(0, 0, 0, 0.5) 20%, transparent 50%);
      mask-image: radial-gradient(circle, #000 0, rgba(0, 0, 0, 0.5) 20%, transparent 50%);
    }
    .lane { width: 100%; height: 120px; }
    .lane b {
      position: absolute; left: 0; top: 0; width: var(--cw, 35%); height: 100%;
      background:
        radial-gradient(ellipse 45% 50% at 35% 60%, var(--wa-cloudbg) 0, transparent 70%),
        radial-gradient(ellipse 40% 55% at 62% 45%, var(--wa-cloudbg) 0, transparent 70%),
        radial-gradient(ellipse 50% 40% at 50% 70%, var(--wa-cloudbg) 0, transparent 75%);
    }
    .fogl { height: 70px; }
    .fogl b { width: 80%; background: radial-gradient(ellipse 50% 50% at 50% 50%, var(--wa-cloudbg) 0, transparent 70%); }
    .windl { height: 2px; }
    .windl b { width: var(--sw); height: 1.5px; border-radius: 1px; background: linear-gradient(90deg, transparent, var(--wa-drop), transparent); }
    .flash { width: 100%; height: 100%; opacity: 0; background: radial-gradient(ellipse at 50% 0, rgba(255, 255, 255, 0.9), transparent 70%); }
  `;var c3=[["wetter-app",g1,"Wetter-App","Komplette Wetter-App mit Vorhersage und Historie"],["wetter-app-kompakt",f1,"Wetter-App kompakt","Das Wichtigste aus Vorhersage und Historie, antippen \xF6ffnet die Wetter-App"]],g0=[["wetter-app-chart",w1],["wetter-app-day-detail",S1],["wetter-app-history",b1],["wetter-app-sky",y1]];for(let[M,V]of[...g0,...c3])customElements.get(M)||customElements.define(M,V);var x2=window;x2.customCards=x2.customCards||[];for(let[M,,V,C]of c3)x2.customCards.some(H=>H.type===M)||x2.customCards.push({type:M,name:V,description:C,preview:!1});console.info("%c WETTER-APP %c 1.1.0 (2026-10-25 20:02 UTC) ","background:#2f6fc4;color:#fff;border-radius:3px 0 0 3px","background:#555;color:#fff;border-radius:0 3px 3px 0");
