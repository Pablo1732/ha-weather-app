var gt=globalThis,ft=gt.ShadowRoot&&(gt.ShadyCSS===void 0||gt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,At=Symbol(),qt=new WeakMap,st=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==At)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(ft&&e===void 0){let i=t!==void 0&&t.length===1;i&&(e=qt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&qt.set(t,e))}return e}toString(){return this.cssText}},Qt=n=>new st(typeof n=="string"?n:n+"",void 0,At),C=(n,...e)=>{let t=n.length===1?n[0]:e.reduce((i,s,a)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[a+1],n[0]);return new st(t,n,At)},te=(n,e)=>{if(ft)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let i=document.createElement("style"),s=gt.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)}},Et=ft?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return Qt(t)})(n):n;var{is:We,defineProperty:Ve,getOwnPropertyDescriptor:je,getOwnPropertyNames:Ke,getOwnPropertySymbols:Be,getPrototypeOf:Ye}=Object,F=globalThis,ee=F.trustedTypes,Ge=ee?ee.emptyScript:"",Dt=F.reactiveElementPolyfillSupport,nt=(n,e)=>n,Ct={toAttribute(n,e){switch(e){case Boolean:n=n?Ge:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},ae=(n,e)=>!We(n,e),ie={attribute:!0,type:String,converter:Ct,reflect:!1,useDefault:!1,hasChanged:ae},se,ne;(se=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(ne=F.litPropertyMetadata)!=null||(F.litPropertyMetadata=new WeakMap);var I=class extends HTMLElement{static addInitializer(e){var t;this._$Ei(),((t=this.l)!=null?t:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ie){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Ve(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){var r;let{get:s,set:a}=(r=je(this.prototype,e))!=null?r:{get(){return this[t]},set(o){this[t]=o}};return{get:s,set(o){let c=s==null?void 0:s.call(this);a==null||a.call(this,o),this.requestUpdate(e,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var t;return(t=this.elementProperties.get(e))!=null?t:ie}static _$Ei(){if(this.hasOwnProperty(nt("elementProperties")))return;let e=Ye(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(nt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(nt("properties"))){let t=this.properties,i=[...Ke(t),...Be(t)];for(let s of i)this.createProperty(s,t[s])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[t,i]of this.elementProperties){let s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let s of i)t.unshift(Et(s))}else e!==void 0&&t.push(Et(e));return t}static _$Eu(e,t){let i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$EO)!=null?t:this._$EO=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)==null||i.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var t;let e=(t=this.shadowRoot)!=null?t:this.attachShadow(this.constructor.shadowRootOptions);return te(e,this.constructor.elementStyles),e}connectedCallback(){var e,t;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostConnected)==null?void 0:s.call(i)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var a;let i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){let r=(((a=i.converter)==null?void 0:a.toAttribute)!==void 0?i.converter:Ct).toAttribute(t,i.type);this._$Em=e,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(e,t){var a,r,o;let i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){let c=i.getPropertyOptions(s),l=typeof c.converter=="function"?{fromAttribute:c.converter}:((a=c.converter)==null?void 0:a.fromAttribute)!==void 0?c.converter:Ct;this._$Em=s;let d=l.fromAttribute(t,c.type);this[s]=(o=d!=null?d:(r=this._$Ej)==null?void 0:r.get(s))!=null?o:d,this._$Em=null}}requestUpdate(e,t,i,s=!1,a){var r,o;if(e!==void 0){let c=this.constructor;if(s===!1&&(a=this[e]),i!=null||(i=c.getPropertyOptions(e)),!(((r=i.hasChanged)!=null?r:ae)(a,t)||i.useDefault&&i.reflect&&a===((o=this._$Ej)==null?void 0:o.get(e))&&!this.hasAttribute(c._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:a},r){var o,c,l;i&&!((o=this._$Ej)!=null?o:this._$Ej=new Map).has(e)&&(this._$Ej.set(e,(c=r!=null?r:t)!=null?c:this[e]),a!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&((l=this._$Eq)!=null?l:this._$Eq=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i,s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((i=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[r,o]of a){let{wrapped:c}=o,l=this[r];c!==!0||this._$AL.has(r)||l===void 0||this.C(r,void 0,o,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(a=>{var r;return(r=a.hostUpdate)==null?void 0:r.call(a)}),this.update(t)):this._$EM()}catch(a){throw e=!1,this._$EM(),a}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}},re;I.elementStyles=[],I.shadowRootOptions={mode:"open"},I[nt("elementProperties")]=new Map,I[nt("finalized")]=new Map,Dt==null||Dt({ReactiveElement:I}),((re=F.reactiveElementVersions)!=null?re:F.reactiveElementVersions=[]).push("2.1.2");var at=globalThis,oe=n=>n,vt=at.trustedTypes,ce=vt?vt.createPolicy("lit-html",{createHTML:n=>n}):void 0,ge="$lit$",L=`lit$${Math.random().toFixed(9).slice(2)}$`,fe="?"+L,Je=`<${fe}>`,K=document,ot=()=>K.createComment(""),ct=n=>n===null||typeof n!="object"&&typeof n!="function",Ot=Array.isArray,Ze=n=>Ot(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",Tt=`[ 	
\f\r]`,rt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,le=/-->/g,de=/>/g,V=RegExp(`>|${Tt}(?:([^\\s"'>=/]+)(${Tt}*=${Tt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),he=/'/g,pe=/"/g,ve=/^(?:script|style|textarea|title)$/i,It=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),m=It(1),b=It(2),Ci=It(3),B=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),ue=new WeakMap,j=K.createTreeWalker(K,129);function be(n,e){if(!Ot(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return ce!==void 0?ce.createHTML(e):e}var Xe=(n,e)=>{let t=n.length-1,i=[],s,a=e===2?"<svg>":e===3?"<math>":"",r=rt;for(let o=0;o<t;o++){let c=n[o],l,d,h=-1,u=0;for(;u<c.length&&(r.lastIndex=u,d=r.exec(c),d!==null);)u=r.lastIndex,r===rt?d[1]==="!--"?r=le:d[1]!==void 0?r=de:d[2]!==void 0?(ve.test(d[2])&&(s=RegExp("</"+d[2],"g")),r=V):d[3]!==void 0&&(r=V):r===V?d[0]===">"?(r=s!=null?s:rt,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,l=d[1],r=d[3]===void 0?V:d[3]==='"'?pe:he):r===pe||r===he?r=V:r===le||r===de?r=rt:(r=V,s=void 0);let p=r===V&&n[o+1].startsWith("/>")?" ":"";a+=r===rt?c+Je:h>=0?(i.push(l),c.slice(0,h)+ge+c.slice(h)+L+p):c+L+(h===-2?o:p)}return[be(n,a+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},lt=class n{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let a=0,r=0,o=e.length-1,c=this.parts,[l,d]=Xe(e,t);if(this.el=n.createElement(l,i),j.currentNode=this.el.content,t===2||t===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=j.nextNode())!==null&&c.length<o;){if(s.nodeType===1){if(s.hasAttributes())for(let h of s.getAttributeNames())if(h.endsWith(ge)){let u=d[r++],p=s.getAttribute(h).split(L),f=/([.?@])?(.*)/.exec(u);c.push({type:1,index:a,name:f[2],strings:p,ctor:f[1]==="."?zt:f[1]==="?"?Ht:f[1]==="@"?Ut:X}),s.removeAttribute(h)}else h.startsWith(L)&&(c.push({type:6,index:a}),s.removeAttribute(h));if(ve.test(s.tagName)){let h=s.textContent.split(L),u=h.length-1;if(u>0){s.textContent=vt?vt.emptyScript:"";for(let p=0;p<u;p++)s.append(h[p],ot()),j.nextNode(),c.push({type:2,index:++a});s.append(h[u],ot())}}}else if(s.nodeType===8)if(s.data===fe)c.push({type:2,index:a});else{let h=-1;for(;(h=s.data.indexOf(L,h+1))!==-1;)c.push({type:7,index:a}),h+=L.length-1}a++}}static createElement(e,t){let i=K.createElement("template");return i.innerHTML=e,i}};function Z(n,e,t=n,i){var r,o,c;if(e===B)return e;let s=i!==void 0?(r=t._$Co)==null?void 0:r[i]:t._$Cl,a=ct(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==a&&((o=s==null?void 0:s._$AO)==null||o.call(s,!1),a===void 0?s=void 0:(s=new a(n),s._$AT(n,t,i)),i!==void 0?((c=t._$Co)!=null?c:t._$Co=[])[i]=s:t._$Cl=s),s!==void 0&&(e=Z(n,s._$AS(n,e.values),s,i)),e}var Pt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var l;let{el:{content:t},parts:i}=this._$AD,s=((l=e==null?void 0:e.creationScope)!=null?l:K).importNode(t,!0);j.currentNode=s;let a=j.nextNode(),r=0,o=0,c=i[0];for(;c!==void 0;){if(r===c.index){let d;c.type===2?d=new dt(a,a.nextSibling,this,e):c.type===1?d=new c.ctor(a,c.name,c.strings,this,e):c.type===6&&(d=new Nt(a,this,e)),this._$AV.push(d),c=i[++o]}r!==(c==null?void 0:c.index)&&(a=j.nextNode(),r++)}return j.currentNode=K,s}p(e){let t=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},dt=class n{get _$AU(){var e,t;return(t=(e=this._$AM)==null?void 0:e._$AU)!=null?t:this._$Cv}constructor(e,t,i,s){var a;this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(a=s==null?void 0:s.isConnected)!=null?a:!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Z(this,e,t),ct(e)?e===v||e==null||e===""?(this._$AH!==v&&this._$AR(),this._$AH=v):e!==this._$AH&&e!==B&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ze(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==v&&ct(this._$AH)?this._$AA.nextSibling.data=e:this.T(K.createTextNode(e)),this._$AH=e}$(e){var a;let{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=lt.createElement(be(i.h,i.h[0]),this.options)),i);if(((a=this._$AH)==null?void 0:a._$AD)===s)this._$AH.p(t);else{let r=new Pt(s,this),o=r.u(this.options);r.p(t),this.T(o),this._$AH=r}}_$AC(e){let t=ue.get(e.strings);return t===void 0&&ue.set(e.strings,t=new lt(e)),t}k(e){Ot(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,s=0;for(let a of e)s===t.length?t.push(i=new n(this.O(ot()),this.O(ot()),this,this.options)):i=t[s],i._$AI(a),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e!==this._$AB;){let s=oe(e).nextSibling;oe(e).remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},X=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,a){this.type=1,this._$AH=v,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=v}_$AI(e,t=this,i,s){let a=this.strings,r=!1;if(a===void 0)e=Z(this,e,t,0),r=!ct(e)||e!==this._$AH&&e!==B,r&&(this._$AH=e);else{let o=e,c,l;for(e=a[0],c=0;c<a.length-1;c++)l=Z(this,o[i+c],t,c),l===B&&(l=this._$AH[c]),r||(r=!ct(l)||l!==this._$AH[c]),l===v?e=v:e!==v&&(e+=(l!=null?l:"")+a[c+1]),this._$AH[c]=l}r&&!s&&this.j(e)}j(e){e===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},zt=class extends X{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===v?void 0:e}},Ht=class extends X{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==v)}},Ut=class extends X{constructor(e,t,i,s,a){super(e,t,i,s,a),this.type=5}_$AI(e,t=this){var r;if((e=(r=Z(this,e,t,0))!=null?r:v)===B)return;let i=this._$AH,s=e===v&&i!==v||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,a=e!==v&&(i===v||s);s&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)==null?void 0:t.host)!=null?i:this.element,e):this._$AH.handleEvent(e)}},Nt=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}};var Rt=at.litHtmlPolyfillSupport,me;Rt==null||Rt(lt,dt),((me=at.litHtmlVersions)!=null?me:at.litHtmlVersions=[]).push("3.3.3");var xe=(n,e,t)=>{var a,r;let i=(a=t==null?void 0:t.renderBefore)!=null?a:e,s=i._$litPart$;if(s===void 0){let o=(r=t==null?void 0:t.renderBefore)!=null?r:null;i._$litPart$=s=new dt(e.insertBefore(ot(),o),o,void 0,t!=null?t:{})}return s._$AI(n),s};var Y=globalThis,T=class extends I{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;let e=super.createRenderRoot();return(i=(t=this.renderOptions).renderBefore)!=null||(t.renderBefore=e.firstChild),e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=xe(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return B}},ye;T._$litElement$=!0,T.finalized=!0,(ye=Y.litElementHydrateSupport)==null||ye.call(Y,{LitElement:T});var Ft=Y.litElementPolyfillSupport;Ft==null||Ft({LitElement:T});var $e;(($e=Y.litElementVersions)!=null?$e:Y.litElementVersions=[]).push("4.2.2");var ht=class{constructor(e,t,i){this.host=e;this.type=t;this.entity=i;this.connected=!1;e.addController(this)}hostConnected(){this.connected=!0,this.sync()}hostDisconnected(){this.connected=!1,this.stop()}hostUpdated(){this.sync()}sync(){let e=this.host.hass,t=this.entity();if(!this.connected||!e||!t)return;let i=`${t}|${this.type}`;i!==this.subscribedKey&&(this.stop(),this.subscribedKey=i,this.error=void 0,this.unsub=e.connection.subscribeMessage(s=>{var a;this.forecast=(a=s.forecast)!=null?a:[],this.host.requestUpdate()},{type:"weather/subscribe_forecast",forecast_type:this.type,entity_id:t}),this.unsub.catch(s=>{var a;this.error=(a=s==null?void 0:s.message)!=null?a:String(s),this.subscribedKey=void 0,this.host.requestUpdate()}))}stop(){let e=this.unsub;this.unsub=void 0,this.subscribedKey=void 0,e==null||e.then(t=>t()).catch(()=>{})}};var Lt=[{id:"day",label:"Tag"},{id:"7d",label:"7 Tage"},{id:"30d",label:"30 Tage"},{id:"month",label:"Monat"},{id:"year",label:"Jahr"}];var qe=["Januar","Februar","M\xE4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];function Qe(n){return new Date(n.getFullYear(),n.getMonth(),n.getDate())}function pt(n,e){return new Date(n.getFullYear(),n.getMonth(),n.getDate()+e)}function we(n,e=!1){return n.toLocaleDateString("de-DE",e?{day:"2-digit",month:"2-digit",year:"numeric"}:{day:"2-digit",month:"2-digit"})}function bt(n){return Lt.some(e=>e.id===n)}function _e(n,e=new Date){let t=Qe(e),i=Math.min(0,Math.round(n.offset)),s,a,r,o;switch(n.preset){case"day":{s=pt(t,i),a=pt(s,1),r="hour",o=i===0?"Heute":i===-1?"Gestern":s.toLocaleDateString("de-DE",{weekday:"short",day:"2-digit",month:"2-digit"});break}case"7d":case"30d":{let l=n.preset==="7d"?7:30;a=pt(t,1+i*l),s=pt(a,-l),r=l===7?"hour":"day",o=i===0?`Letzte ${l} Tage`:`${we(s)} \u2013 ${we(pt(a,-1),!0)}`;break}case"month":{s=new Date(e.getFullYear(),e.getMonth()+i,1),a=new Date(s.getFullYear(),s.getMonth()+1,1),r="day",o=`${qe[s.getMonth()]} ${s.getFullYear()}`;break}default:{s=new Date(e.getFullYear()+i,0,1),a=new Date(s.getFullYear()+1,0,1),r="month",o=String(s.getFullYear());break}}let c=a.getTime()>e.getTime();return c&&(a=new Date(Math.ceil(e.getTime()/3e5)*3e5)),{preset:n.preset,offset:i,start:s,end:a,period:r,label:o,live:c}}var xt=new Map,Wt=new EventTarget,ke="wetter-app:range:";function ti(n,e){let t=e;try{let i=localStorage.getItem(ke+n);bt(i)&&(t=i)}catch{}return{preset:t,offset:0}}function ei(n,e="7d"){let t=xt.get(n);return t||(t=ti(n,e),xt.set(n,t)),t}function ii(n,e){let t=xt.get(n);if(xt.set(n,e),(t==null?void 0:t.preset)!==e.preset)try{localStorage.setItem(ke+n,e.preset)}catch{}Wt.dispatchEvent(new CustomEvent(n))}var yt=class{constructor(e,t,i=()=>"7d"){this.host=e;this.groupOf=t;this.fallback=i;this.onChange=()=>this.host.requestUpdate();e.addController(this)}get state(){return ei(this.groupOf(),this.fallback())}get range(){return _e(this.state)}set(e){ii(this.groupOf(),e)}hostConnected(){this.listen()}hostUpdated(){this.group!==this.groupOf()&&this.listen()}hostDisconnected(){this.group&&Wt.removeEventListener(this.group,this.onChange),this.group=void 0}listen(){this.hostDisconnected(),this.group=this.groupOf(),Wt.addEventListener(this.group,this.onChange)}};var G=new Map;function q(n,e){let t=e.ids.filter(Boolean);if(!t.length)return Promise.resolve({});let i=JSON.stringify([t,e.start.getTime(),e.end.getTime(),e.period,e.types]),s=Date.now(),a=G.get(i);if(a&&a.expires>s)return a.promise;let r=n.callWS({type:"recorder/statistics_during_period",start_time:e.start.toISOString(),end_time:e.end.toISOString(),statistic_ids:t,period:e.period,types:e.types}).then(si),o={promise:r,expires:e.end.getTime()<s?1/0:s+3e5};return G.set(i,o),r.catch(()=>G.get(i)===o&&G.delete(i)),G.size>60&&G.delete(G.keys().next().value),r}function si(n){for(let e of Object.values(n))for(let t of e)typeof t.start!="number"&&(t.start=new Date(t.start).getTime()),typeof t.end!="number"&&(t.end=new Date(t.end).getTime());return n}function Se(n){let e=n.range;return m`
    <div class="range">
      <div class="chips" role="tablist">
        ${Lt.map(t=>m`<button role="tab" aria-selected=${t.id===e.preset}
            class=${t.id===e.preset?"on":""}
            @click=${()=>n.set({preset:t.id,offset:0})}>${t.label}</button>`)}
      </div>
      <div class="nav">
        <button class="ib" aria-label="Zurück" @click=${()=>n.set({preset:e.preset,offset:e.offset-1})}>
          <ha-icon icon="mdi:chevron-left"></ha-icon>
        </button>
        <span>${e.label}</span>
        <button class="ib" aria-label="Vor" ?disabled=${e.offset>=0}
          @click=${()=>n.set({preset:e.preset,offset:e.offset+1})}>
          <ha-icon icon="mdi:chevron-right"></ha-icon>
        </button>
      </div>
    </div>
  `}var Me=C`
  .range { display: flex; flex-direction: column; gap: 8px; }
  .chips { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; }
  .chips button {
    border: 1px solid var(--wa-divider); background: none; color: var(--wa-text); font: inherit; font-size: 13px;
    padding: 6px 14px; border-radius: 16px; cursor: pointer; white-space: nowrap;
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
`;var D=(n,e)=>m`<div class="head"><ha-icon icon=${n}></ha-icon><span>${e}</span></div>`,$t=C`
  :host {
    --wa-text: var(--primary-text-color);
    --wa-text2: var(--secondary-text-color);
    --wa-divider: var(--divider-color, rgba(127, 127, 127, 0.2));
    --wa-accent: var(--primary-color);
    --wa-rain: var(--blue-color, #2196f3);
    --wa-track: rgba(127, 127, 127, 0.22);
    --wa-radius: var(--ha-card-border-radius, 12px);
    /* Icon-Farben fürs helle Theme, .dark überschreibt */
    --wa-cloud: #b9c4cf;
    --wa-cloud2: #93a1ae;
    --wa-moon: #8e9bb0;
    color: var(--wa-text);
  }
  .dark {
    --wa-cloud: #e6eaef;
    --wa-cloud2: #aab4bf;
    --wa-moon: #e9edf5;
  }

  .card {
    background: var(--ha-card-background, var(--card-background-color, #fff));
    border-radius: var(--wa-radius);
    border: var(--ha-card-border-width, 1px) solid var(--ha-card-border-color, var(--wa-divider));
    box-shadow: var(--ha-card-box-shadow, none);
    padding: 12px 14px;
    min-width: 0;
    box-sizing: border-box;
  }

  .head {
    display: flex; align-items: center; gap: 8px;
    font-size: 14px; font-weight: 500; color: var(--wa-text2);
    padding-bottom: 8px; margin-bottom: 4px; border-bottom: 1px solid var(--wa-divider);
  }
  .head ha-icon { --mdc-icon-size: 18px; color: var(--state-icon-color, var(--wa-text2)); }

  .wicon { display: block; }
  .wicon .c1 { fill: var(--wa-cloud); }
  .wicon .c2 { fill: var(--wa-cloud2); }
  .wicon .mo { fill: var(--wa-moon); }
  .wicon .ln { stroke: var(--wa-cloud2); }
  .wicon .fl { fill: var(--wa-cloud2); }

  .warn {
    background: rgba(var(--rgb-warning-color, 255, 166, 0), 0.15); color: var(--wa-text);
    border-radius: var(--wa-radius); padding: 10px 14px; font-size: 14px;
  }
  .loading, .hint { color: var(--wa-text2); text-align: center; padding: 16px; font-size: 14px; }
`;var z=Math.PI/180;function Vt(n,e,t){let i=new Date(n.getFullYear(),n.getMonth(),n.getDate(),12),a=Math.round((i.getTime()-Date.UTC(2e3,0,1,12))/864e5)-t/360,r=(357.5291+.98560028*a)%360,o=1.9148*Math.sin(r*z)+.02*Math.sin(2*r*z)+3e-4*Math.sin(3*r*z),c=(r+o+180+102.9372)%360,l=a+.0053*Math.sin(r*z)-.0069*Math.sin(2*c*z),d=Math.asin(Math.sin(c*z)*Math.sin(23.4397*z)),h=(Math.sin(-.833*z)-Math.sin(e*z)*Math.sin(d))/(Math.cos(e*z)*Math.cos(d));if(h<-1||h>1)return;let u=Math.acos(h)/z/360,p=f=>new Date(Date.UTC(2e3,0,1,12)+f*864e5);return{rise:p(l-u),set:p(l+u),noon:p(l)}}var J=29.530588853,ni=Date.UTC(2e3,0,6,18,14);function Ae(n){let t=((n.getTime()-ni)/864e5%J+J)%J,i=(1-Math.cos(t/J*2*Math.PI))/2,s=(J/2-t+J)%J;return{age:t,illumination:i,nextFull:new Date(n.getTime()+s*864e5)}}var ri={"clear-night":"Klar",cloudy:"Bew\xF6lkt",exceptional:"Unwetter",fog:"Nebel",hail:"Hagel",lightning:"Gewitter","lightning-rainy":"Gewitter mit Regen",partlycloudy:"Teilweise bew\xF6lkt",pouring:"Starkregen",rainy:"Regnerisch",snowy:"Schnee","snowy-rainy":"Schneeregen",sunny:"Sonnig",windy:"Windig","windy-variant":"Windig und bew\xF6lkt"};function ut(n){return n&&ri[n]||"\u2013"}var Ee={sunny:"47,128,237",partlycloudy:"70,130,200",cloudy:"120,135,150","windy-variant":"120,135,150",rainy:"80,105,135",pouring:"70,90,120",hail:"90,100,125",snowy:"160,180,205","snowy-rainy":"130,150,175",fog:"150,155,160",lightning:"85,80,125","lightning-rainy":"85,80,125",exceptional:"150,70,70",windy:"100,140,170"},ai="35,50,100";function De(n,e){return`rgba(${e&&(n==="sunny"||n==="clear-night"||n==="partlycloudy")?ai:n&&Ee[n]||Ee.cloudy},${e?.35:.45})`}var oi={new_moon:"Neumond",waxing_crescent:"Zunehmende Sichel",first_quarter:"Erstes Viertel",waxing_gibbous:"Zunehmender Mond",full_moon:"Vollmond",waning_gibbous:"Abnehmender Mond",last_quarter:"Letztes Viertel",waning_crescent:"Abnehmende Sichel"};function Ce(n){return n&&oi[n]||"\u2013"}var Te=new Map;function w(n,e=1){if(n==null||!isFinite(n))return"\u2013";let t=Te.get(e);return t||(t=new Intl.NumberFormat("de-DE",{minimumFractionDigits:e,maximumFractionDigits:e}),Te.set(e,t)),t.format(n)}var E=(n,e=0)=>n==null?"\u2013":`${w(n,e)}\xB0`,W=(n,e=1)=>`${w(n,e)} l/m\xB2`;function A(n,e){let t=e?n==null?void 0:n.states[e]:void 0;if(!t)return;let i=parseFloat(t.state);return isFinite(i)?i:void 0}var ci=["So","Mo","Di","Mi","Do","Fr","Sa"];function Re(n,e=new Date){return n.toDateString()===e.toDateString()?"Heute":ci[n.getDay()]}function Pe(n){return`${String(n.getHours()).padStart(2,"0")} Uhr`}function wt(n){return n.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}var li=["N","NO","O","SO","S","SW","W","NW"];function _t(n){return n==null||!isFinite(n)?"\u2013":li[Math.round((n%360+360)%360/45)%8]}function ze(n){return m`<div class="tiles">
    ${hi(n)} ${di(n)} ${pi(n)} ${ui(n)} ${mi(n)} ${fi(n)} ${vi(n)} ${bi(n)}
  </div>`}function di({hass:n,config:e}){var r;let t=(r=e.sensors)!=null?r:{},i=A(n,t.feels_like);if(i==null)return v;let s=A(n,t.temperature),a=s==null?"":i<s-1?"Durch den Wind f\xFChlt es sich k\xE4lter an.":i>s+1?"Durch die Luftfeuchtigkeit f\xFChlt es sich w\xE4rmer an.":"\xC4hnlich wie die tats\xE4chliche Temperatur.";return m`<section class="card tile">${D("mdi:thermometer-lines","Gef\xFChlt")}
    <div class="val">${E(i)}</div><div class="txt">${a}</div></section>`}function hi({hass:n,config:e}){var o;let t=(o=e.sensors)!=null?o:{},i=A(n,t.wind_speed);if(i==null)return v;let s=A(n,t.wind_gust),a=A(n,t.wind_direction),r=[...Array(72)].map((c,l)=>{let d=l*5*Math.PI/180,h=l%18===0?38:41;return b`<line x1=${50+Math.sin(d)*h} y1=${50-Math.cos(d)*h} x2=${50+Math.sin(d)*45} y2=${50-Math.cos(d)*45} class=${l%18===0?"tk major":"tk"}/>`});return m`<section class="card tile wide2">${D("mdi:weather-windy","Wind")}
    <div class="wind">
      <div class="rows">
        <div class="row"><span>Wind</span><b>${w(i,0)} km/h</b></div>
        ${s!=null?m`<div class="row"><span>Böen</span><b>${w(s,0)} km/h</b></div>`:v}
        ${a!=null?m`<div class="row"><span>Richtung</span><b>${w(a,0)}° ${_t(a)}</b></div>`:v}
      </div>
      <svg class="compass" viewBox="0 0 100 100">
        ${r}
        ${["N","O","S","W"].map((c,l)=>b`<text x=${50+Math.sin(l*Math.PI/2)*30} y=${54-Math.cos(l*Math.PI/2)*30} class="cl">${c}</text>`)}
        ${a!=null?b`<g transform="rotate(${a+180} 50 50)">
          <line x1="50" y1="88" x2="50" y2="18" class="arrow"/><path d="M50 10l-6 11h12z" class="arrowhead"/>
          <circle cx="50" cy="88" r="3.5" class="arrowhead"/></g>`:v}
        <circle cx="50" cy="50" r="17" class="hub"/>
        <text x="50" y="50" class="cv">${w(i,0)}</text><text x="50" y="60" class="cu">km/h</text>
      </svg>
    </div></section>`}function pi({hass:n,config:e,hourly:t,recent:i}){var l;let s=(l=e.sensors)!=null?l:{};if(!s.rain_total&&!t)return v;let a=s.rain_total&&(i!=null&&i[s.rain_total])?i[s.rain_total].reduce((d,h)=>{var u;return d+((u=h.change)!=null?u:0)},0):void 0,r=Date.now(),o=t==null?void 0:t.filter(d=>{let h=new Date(d.datetime).getTime();return h>=r-36e5&&h<r+23*36e5}).reduce((d,h)=>{var u;return d+((u=h.precipitation)!=null?u:0)},0),c=A(n,s.rain_rate);return m`<section class="card tile">${D("mdi:water","Niederschlag")}
    <div class="val">${a!=null?W(a):"\u2013"}</div>
    <div class="lbl">in den letzten 24 Std.</div>
    <div class="txt">${c?m`Aktuell ${w(c)} l/m² pro Std.<br>`:v}
      ${o!=null?`${W(o)} in den n\xE4chsten 24 Std. erwartet.`:""}</div></section>`}function ui({hass:n,config:e,recent:t}){var h;let i=(h=e.sensors)!=null?h:{},s=A(n,i.pressure);if(s==null)return v;let a=i.pressure?t==null?void 0:t[i.pressure]:void 0,r=a&&a.length>=3?a[a.length-3].mean:void 0,o=r!=null?s-r:void 0,c=o==null?"":o>1?"steigend":o<-1?"fallend":"gleichbleibend",l=o==null?0:Math.max(-1,Math.min(1,o/4))*120,d=[...Array(41)].map((u,p)=>{let f=(-120+p*6)*Math.PI/180;return b`<line x1=${50+Math.sin(f)*36} y1=${54-Math.cos(f)*36} x2=${50+Math.sin(f)*44} y2=${54-Math.cos(f)*44} class="tk"/>`});return m`<section class="card tile">${D("mdi:gauge","Luftdruck")}
    <svg class="gauge" viewBox="0 0 100 92">
      ${d}
      <g transform="rotate(${l} 50 54)"><line x1="50" y1="6" x2="50" y2="20" class="needle"/></g>
      <text x="50" y="52" class="gv">${w(s,0)}</text><text x="50" y="64" class="gu">hPa</text>
      <text x="16" y="90" class="gu">−</text><text x="84" y="90" class="gu">+</text>
    </svg>
    <div class="txt">${c?m`3 Std.: ${c} (${o>0?"+":""}${w(o,1)} hPa)`:v}</div></section>`}function mi({hass:n,config:e}){var a;let t=(a=e.sensors)!=null?a:{},i=A(n,t.humidity);if(i==null)return v;let s=A(n,t.dewpoint);return m`<section class="card tile">${D("mdi:water-percent","Feuchtigkeit")}
    <div class="val">${w(i,0)} %</div>
    <div class="txt">${s!=null?`Der Taupunkt liegt derzeit bei ${E(s)}.`:""}</div></section>`}var gi=[[3,"Niedrig"],[6,"Mittel"],[8,"Hoch"],[11,"Sehr hoch"],[99,"Extrem"]];function fi({hass:n,config:e}){var r;let t=(r=e.sensors)!=null?r:{},i=A(n,t.uv);if(i==null)return v;let s=A(n,t.solar),a=gi.find(([o])=>i<o)[1];return m`<section class="card tile">${D("mdi:sun-wireless","UV-Index")}
    <div class="val">${w(i,0)}</div><div class="lbl">${a}</div>
    <div class="uvbar"><i style="left:${Math.min(100,i/11*100)}%"></i></div>
    <div class="txt">${s!=null?`Sonneneinstrahlung ${w(s,0)} W/m\xB2`:""}</div></section>`}function vi({hass:n,config:e}){var N,P,Kt,Bt,Yt,Gt,Jt,Zt,Xt;let t=(N=n.states[e.weather])==null?void 0:N.attributes,i=e.sun?n.states[e.sun]:void 0,s=(Kt=t==null?void 0:t.latitude)!=null?Kt:(P=n.config)==null?void 0:P.latitude,a=(Yt=t==null?void 0:t.longitude)!=null?Yt:(Bt=n.config)==null?void 0:Bt.longitude;if(s==null||a==null)return v;let r=new Date,o=Vt(r,s,a);if(!o)return v;let c=O=>O&&new Date(O).toDateString()===r.toDateString()?new Date(O):void 0,l=(Gt=c(i==null?void 0:i.attributes.next_rising))!=null?Gt:o.rise,d=(Jt=c(i==null?void 0:i.attributes.next_setting))!=null?Jt:o.set,h=r<d,u=r<l?["Sonnenaufgang",l]:h?["Sonnenuntergang",d]:["Sonnenaufgang",(Xt=(Zt=Vt(new Date(r.getTime()+864e5),s,a))==null?void 0:Zt.rise)!=null?Xt:l],p=new Date(r.getFullYear(),r.getMonth(),r.getDate()).getTime(),f=O=>(O.getTime()-p)/864e5,$=(f(l)+f(d))/2,k=f(d)-f(l),g=O=>Math.cos(2*Math.PI*(O-$)),S=Math.cos(Math.PI*k),x=O=>34-O*22,_=[...Array(49)].map((O,Mt)=>`${Mt?"L":"M"}${Mt/48*100},${x(g(Mt/48))}`).join(" "),y=f(r),U=r>=l&&r<d;return m`<section class="card tile">${D(U?"mdi:weather-sunset-down":"mdi:weather-sunset-up",u[0])}
    <div class="val">${wt(u[1])}</div>
    <div class="sunarc">
      <svg viewBox="0 0 100 60" preserveAspectRatio="none">
        <path d=${_} class="sunpath"/>
        <line x1="0" x2="100" y1=${x(S)} y2=${x(S)} class="hz"/>
      </svg>
      <!-- Punkt als HTML, sonst verzerrt preserveAspectRatio=none ihn zur Ellipse -->
      <i class=${U?"sundot":"sundot down"} style="left:${y*100}%;top:${x(g(y))/60*100}%"></i>
    </div>
    <div class="txt">${u[0]==="Sonnenuntergang"?`Sonnenaufgang: ${wt(l)}`:`Sonnenuntergang: ${wt(d)}`}</div>
  </section>`}function bi({hass:n,config:e}){var l;let t=e.moon?(l=n.states[e.moon])==null?void 0:l.state:void 0,i=Ae(new Date),s=Math.round((i.nextFull.getTime()-Date.now())/864e5),a=i.age<29.530588853/2,r=i.illumination,c=`M50 30 A20 20 0 0 1 50 70 A${20*Math.abs(1-2*r)} 20 0 0 ${r>.5?1:0} 50 30Z`;return m`<section class="card tile wide2">${D("mdi:moon-waxing-gibbous",t?Ce(t):"Mond")}
    <div class="moon">
      <svg viewBox="28 28 44 44"><circle cx="50" cy="50" r="20" class="moon-dark"/>
        <path d=${c} class="moon-lit" transform=${a?"":"translate(100 0) scale(-1 1)"}/></svg>
      <div>
        <div class="row"><span>Beleuchtung</span><b>${Math.round(r*100)} %</b></div>
        <div class="row"><span>Vollmond</span><b>${s<=0?"heute":s===1?"morgen":`in ${s} Tg.`}</b></div>
      </div>
    </div></section>`}var He=C`
  .tiles { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
  .wide .tiles { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  .tile { display: flex; flex-direction: column; min-height: 150px; }
  .tile.wide2 { grid-column: span 2; }
  .tile .val { font-size: 32px; font-weight: 600; line-height: 1.2; margin-top: 4px; }
  .tile .lbl { font-size: 15px; font-weight: 500; }
  .tile .txt { font-size: 13px; color: var(--wa-text2); margin-top: auto; padding-top: 8px; }
  .row { display: flex; justify-content: space-between; gap: 8px; padding: 6px 0; border-bottom: 1px solid var(--wa-divider); font-size: 14px; }
  .row:last-child { border-bottom: 0; }
  .row span { color: var(--wa-text2); }

  .wind { display: flex; align-items: center; gap: 12px; flex: 1; }
  .wind .rows { flex: 1; min-width: 0; }
  .compass { width: 120px; height: 120px; flex: none; }
  .tk { stroke: var(--wa-text2); stroke-width: 1; opacity: 0.5; }
  .tk.major { stroke-width: 2; opacity: 0.9; }
  .cl { fill: var(--wa-text2); font-size: 9px; font-weight: 600; text-anchor: middle; }
  .arrow { stroke: var(--wa-text); stroke-width: 2.5; }
  .arrowhead { fill: var(--wa-text); }
  .hub { fill: var(--ha-card-background, var(--card-background-color, #1c1c1c)); }
  .cv { fill: var(--wa-text); font-size: 15px; font-weight: 600; text-anchor: middle; }
  .cu { fill: var(--wa-text2); font-size: 7px; text-anchor: middle; }

  .gauge { width: 100%; max-width: 130px; margin: 4px auto 0; display: block; }
  .needle { stroke: var(--wa-text); stroke-width: 3.5; stroke-linecap: round; }
  .gv { fill: var(--wa-text); font-size: 18px; font-weight: 600; text-anchor: middle; }
  .gu { fill: var(--wa-text2); font-size: 9px; text-anchor: middle; }

  .uvbar {
    position: relative; height: 5px; border-radius: 3px; margin-top: 10px;
    background: linear-gradient(90deg, #66bb6a, #ffee58, #ffa726, #ef5350, #ab47bc);
  }
  .uvbar i {
    position: absolute; top: 50%; width: 9px; height: 9px; margin: -4.5px 0 0 -4.5px; border-radius: 50%; box-sizing: border-box;
    background: var(--wa-text); border: 2px solid var(--ha-card-background, var(--card-background-color, #fff));
  }

  .sunarc { position: relative; height: 56px; margin-top: 6px; }
  .sunarc svg { width: 100%; height: 100%; display: block; }
  .sunpath { fill: none; stroke: var(--wa-text2); stroke-width: 1.5; vector-effect: non-scaling-stroke; opacity: 0.7; }
  .hz { stroke: var(--wa-text2); stroke-width: 1; vector-effect: non-scaling-stroke; opacity: 0.5; }
  .sundot { position: absolute; width: 10px; height: 10px; margin: -5px 0 0 -5px; border-radius: 50%; background: #ffd84d; }
  .sundot.down { background: var(--wa-text2); }

  .moon { display: flex; align-items: center; gap: 12px; flex: 1; }
  .moon svg { width: 64px; height: 64px; flex: none; }
  .moon > div { flex: 1; min-width: 0; }
  .moon-dark { fill: rgba(127, 127, 127, 0.25); }
  .moon-lit { fill: var(--wa-moon); }
`;var xi="M18 46a10 10 0 0 1 0-20a14 14 0 0 1 27-3a11.5 11.5 0 0 1 1 23z",Ue=(n=32,e=32,t=11)=>b`
  <g class="sun">
    <circle cx=${n} cy=${e} r=${t} fill="#FFD84D"/>
    ${[0,45,90,135,180,225,270,315].map(i=>{let s=i*Math.PI/180,a=n+Math.cos(s)*(t+4),r=e+Math.sin(s)*(t+4),o=n+Math.cos(s)*(t+9),c=e+Math.sin(s)*(t+9);return b`<line x1=${a} y1=${r} x2=${o} y2=${c} stroke="#FFD84D" stroke-width="3.5" stroke-linecap="round"/>`})}
  </g>`,jt=(n=0,e=0,t=1)=>b`
  <path class="mo" transform="translate(${n} ${e}) scale(${t})"
    d="M40 10a20 20 0 1 0 14 34A17 17 0 0 1 40 10z"/>`,R=(n=0,e=0,t=1,i="c1")=>b`
  <path transform="translate(${n} ${e}) scale(${t})" d=${xi} class=${i}/>`,kt=n=>b`
  ${[...Array(n)].map((e,t)=>{let i=22+t*(20/Math.max(1,n-1));return b`<line x1=${i} y1="50" x2=${i-3} y2="58" stroke="#4FB3FF" stroke-width="3" stroke-linecap="round"/>`})}`,Ne=b`${[22,32,42].map((n,e)=>b`<circle cx=${n} cy=${e%2?57:53} r="2.6" class="fl"/>`)}`,Oe=b`<path d="M34 44l-7 10h6l-3 9l10-13h-6l3-6z" fill="#FFD84D"/>`,yi=b`${[40,47,54].map((n,e)=>b`<line x1=${12+e*3} y1=${n} x2=${52-e*2} y2=${n} class="ln" stroke-width="3.5" stroke-linecap="round"/>`)}`;function mt(n,e=!1){let t;switch(n){case"sunny":t=e?jt(2,6,.95):Ue();break;case"clear-night":t=jt(2,6,.95);break;case"partlycloudy":t=b`${e?jt(10,-2,.7):Ue(42,22,9)}${R(-4,6,1)}`;break;case"cloudy":case"windy-variant":t=b`${R(10,-4,.75,"c2")}${R(-4,6)}`;break;case"fog":t=b`${R(0,-8,.95,"c2")}${yi}`;break;case"rainy":t=b`${R(0,-6)}${kt(3)}`;break;case"pouring":t=b`${R(0,-6,1,"c2")}${kt(5)}`;break;case"hail":t=b`${R(0,-6,1,"c2")}${Ne}`;break;case"snowy":t=b`${R(0,-6)}${Ne}`;break;case"snowy-rainy":t=b`${R(0,-6)}${kt(2)}<circle cx="32" cy="55" r="2.6" class="fl"/>`;break;case"lightning":t=b`${R(0,-8,1,"c2")}${Oe}`;break;case"lightning-rainy":case"exceptional":t=b`${R(0,-8,1,"c2")}${Oe}${kt(2)}`;break;case"windy":t=b`${[24,32,40].map((i,s)=>b`<path d="M10 ${i}h${30-s*6}a6 6 0 1 0-6-6" fill="none" class="ln" stroke-width="3.5" stroke-linecap="round"/>`)}`;break;default:t=R(0,0,1,"c2")}return b`<svg class="wicon" viewBox="0 0 64 64" aria-hidden="true">${t}</svg>`}var Q=class extends T{constructor(){super(...arguments);this._tab="forecast";this._wide=!1;this._metric="temp";this.hourly=new ht(this,"hourly",()=>{var t;return(t=this._config)==null?void 0:t.weather});this.daily=new ht(this,"daily",()=>{var t;return(t=this._config)==null?void 0:t.weather});this.range=new yt(this,()=>{var t,i;return(i=(t=this._config)==null?void 0:t.sync_group)!=null?i:"default"},()=>{var t;return bt((t=this._config)==null?void 0:t.default_range)?this._config.default_range:"7d"})}setConfig(t){if(!(t!=null&&t.weather))throw new Error("`weather:` fehlt (z. B. weather.weather_fusion_ai_kresslingweg)");this._config={...t,sensors:{...t.sensors}}}static getStubConfig(t){var i;return{weather:(i=Object.keys(t.states).find(s=>s.startsWith("weather.")))!=null?i:""}}getCardSize(){return 12}getGridOptions(){return{columns:"full",rows:"auto"}}connectedCallback(){var t;super.connectedCallback(),(t=this._ro)!=null||(this._ro=new ResizeObserver(i=>{let s=i[0].contentRect.width>=820;s!==this._wide&&(this._wide=s)})),this._ro.observe(this)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._ro)==null||t.disconnect()}shouldUpdate(t){if(t.size>1||!t.has("hass"))return!0;let i=t.get("hass");return!i||!this.hass||!this._config?!0:this.watchedIds().some(s=>i.states[s]!==this.hass.states[s])}watchedIds(){var i;let t=this._config;return[t.weather,t.sun,t.moon,...Object.values((i=t.sensors)!=null?i:{})].filter(Boolean)}updated(){this._tab==="history"?this.loadStats(this.range.range):this.loadRecent()}loadRecent(){var r;let t=(r=this._config.sensors)!=null?r:{},i=[t.rain_total,t.pressure].filter(Boolean);if(!this.hass||!i.length)return;let s=Math.ceil(Date.now()/3e5)*3e5,a=String(s);a!==this._recentKey&&(this._recentKey=a,q(this.hass,{ids:i,start:new Date(s-864e5),end:new Date(s),period:"hour",types:["mean","change"]}).then(o=>a===this._recentKey&&(this._recent=o),()=>this._recentKey=void 0))}openDetail(t,i=this._metric){this._metric=i,this._detail=t}async loadStats(t){var a,r;let i=(a=this._config.sensors)!=null?a:{},s=`${t.start.getTime()}|${t.end.getTime()}|${t.period}`;if(!(!this.hass||s===this._statsKey)){this._statsKey=s,this._statsError=void 0;try{let[o,c]=await Promise.all([q(this.hass,{ids:[i.temperature,i.wind_speed,i.wind_gust,i.humidity,i.pressure].filter(Boolean),start:t.start,end:t.end,period:t.period,types:["mean","min","max"]}),q(this.hass,{ids:i.rain_total?[i.rain_total]:[],start:t.start,end:t.end,period:t.period,types:["change"]})]);s===this._statsKey&&(this._stats={...o,...c})}catch(o){s===this._statsKey&&(this._statsError=(r=o==null?void 0:o.message)!=null?r:String(o),this._statsKey=void 0)}}}render(){var o,c,l,d,h;if(!this._config||!this.hass)return v;let t=this.hass.states[this._config.weather];if(!t)return m`<div class="warn">Entität ${this._config.weather} nicht gefunden.</div>`;let i=this._config.sun?((o=this.hass.states[this._config.sun])==null?void 0:o.state)==="below_horizon":!1,s=(c=this._config.sensors)!=null?c:{},a=(l=A(this.hass,s.temperature))!=null?l:t.attributes.temperature,r=(d=this.daily.forecast)==null?void 0:d[0];return m`
      <div class="app ${this._wide?"wide":""} ${(h=this.hass.themes)!=null&&h.darkMode?"dark":""} ${this._config.layout==="page"?"page":""}"
        style="--wa-tint:${De(t.state,i)}">
        <header>
          ${this._config.name?m`<div class="place">${this._config.name}</div>`:v}
          <div class="now">${E(a)}</div>
          <div class="cond">${ut(t.state)}</div>
          ${r?m`<div class="hl">H: ${E(r.temperature)}  T: ${E(r.templow)}</div>`:v}
        </header>

        <nav class="tabs" role="tablist">
          ${["forecast","history"].map(u=>m`
            <button role="tab" aria-selected=${this._tab===u} class=${this._tab===u?"on":""}
              @click=${()=>this._tab=u}>
              <ha-icon icon=${u==="forecast"?"mdi:calendar-arrow-right":"mdi:chart-line"}></ha-icon>
              ${u==="forecast"?"Vorhersage":"Historie"}
            </button>`)}
        </nav>

        <main>${this._tab==="forecast"?this.renderForecast(a,i):this.renderHistory()}</main>
      </div>
    `}renderForecast(t,i){var a,r;let s=(a=this.hourly.error)!=null?a:this.daily.error;return m`
      ${s?m`<div class="warn">Vorhersage nicht verfügbar: ${s}</div>`:v}
      <div class="cols">
        <section class="card">${this.renderHourly(t,i)}</section>
        <section class="card">${this.renderDaily(t)}</section>
      </div>
      ${ze({hass:this.hass,config:this._config,hourly:this.hourly.forecast,recent:this._recent})}
      ${this._detail!=null&&this.daily.forecast?m`<wetter-app-day-detail .hass=${this.hass} .config=${this._config} .hourly=${(r=this.hourly.forecast)!=null?r:[]}
            .daily=${this.daily.forecast} .index=${this._detail} .metric=${this._metric}
            @close=${()=>this._detail=void 0}
            @select=${o=>this._detail=o.detail.index}
            @metric=${o=>this._metric=o.detail.metric}></wetter-app-day-detail>`:v}
    `}renderHourly(t,i){let s=this.hourly.forecast;if(!s)return m`<div class="loading">Lade Stundenvorhersage …</div>`;let a=Date.now()-36e5,r=s.filter(o=>new Date(o.datetime).getTime()>a).slice(0,25);return m`
      ${D("mdi:clock-outline","St\xFCndlich")}
      <div class="hours">
        ${r.map((o,c)=>{var l;return m`
          <div class="hr" @click=${()=>this.openDetail(0,"temp")}>
            <div class="t">${c===0?"Jetzt":Pe(new Date(o.datetime))}</div>
            ${mt(o.condition,c===0?i:o.is_daytime===!1)}
            <div class="p">${((l=o.precipitation_probability)!=null?l:0)>=20?`${Math.round(o.precipitation_probability)} %`:""}</div>
            <div class="v">${E(c===0&&t!=null?t:o.temperature)}</div>
          </div>`})}
      </div>
    `}renderDaily(t){let i=this.daily.forecast;if(!i)return m`<div class="loading">Lade Tagesvorhersage …</div>`;let s=i.slice(0,10),a=Math.min(...s.map(l=>{var d,h;return(h=(d=l.templow)!=null?d:l.temperature)!=null?h:99})),r=Math.max(...s.map(l=>{var d;return(d=l.temperature)!=null?d:-99})),o=Math.max(1,r-a),c=l=>(l-a)/o*100;return m`
      ${D("mdi:calendar-week",`${s.length}-Tage-Vorhersage`)}
      ${s.map((l,d)=>{var $,k,g,S;let h=(k=($=l.templow)!=null?$:l.temperature)!=null?k:a,u=(g=l.temperature)!=null?g:h,p=Math.max(.5,c(u)-c(h)),f=`background-size:${100/p*100}% 100%;background-position:${p>=100?0:c(h)/(100-p)*100}% 0`;return m`
          <div class="day" role="button" tabindex="0" @click=${()=>this.openDetail(d)}
            @keydown=${x=>x.key==="Enter"&&this.openDetail(d)}>
            <div class="wd">${Re(new Date(l.datetime))}</div>
            <div class="ic">
              ${mt(l.condition)}
              ${((S=l.precipitation_probability)!=null?S:0)>=20?m`<span class="p">${Math.round(l.precipitation_probability)} %</span>`:v}
            </div>
            <div class="lo">${E(h)}</div>
            <div class="bar">
              <div class="fill" style="left:${c(h)}%;right:${100-c(u)}%;${f}"></div>
              ${d===0&&t!=null?m`<div class="dot" style="left:${Math.min(100,Math.max(0,c(t)))}%"></div>`:v}
            </div>
            <div class="hi">${E(u)}</div>
          </div>`})}
    `}renderHistory(){var r,o;let t=(r=this._config.sensors)!=null?r:{},i=this._stats,s=(c,l)=>{var u;let d=c?i==null?void 0:i[c]:void 0,h=(u=d==null?void 0:d.map(p=>p[l]).filter(p=>p!=null))!=null?u:[];if(h.length)return l==="min"?Math.min(...h):l==="max"?Math.max(...h):h.reduce((p,f)=>p+f,0)/h.length},a=t.rain_total?(o=i==null?void 0:i[t.rain_total])==null?void 0:o.reduce((c,l)=>{var d;return c+((d=l.change)!=null?d:0)},0):void 0;return m`
      <section class="card">${Se(this.range)}</section>
      ${this._statsError?m`<div class="warn">Statistik nicht verfügbar: ${this._statsError}</div>`:v}
      ${i?m`
        <div class="grid">
          <section class="card kv">
            ${D("mdi:thermometer","Temperatur")}
            <div class="big">${E(s(t.temperature,"mean"),1)}</div>
            <div class="sub">Ø · min ${E(s(t.temperature,"min"),1)} · max ${E(s(t.temperature,"max"),1)}</div>
          </section>
          <section class="card kv">
            ${D("mdi:weather-pouring","Regen")}
            <div class="big">${W(a)}</div>
            <div class="sub">Summe im Zeitraum</div>
          </section>
          <section class="card kv">
            ${D("mdi:weather-windy","Wind")}
            <div class="big">${w(s(t.wind_speed,"mean"))} km/h</div>
            <div class="sub">Ø · stärkste Böe ${w(s(t.wind_gust,"max"))} km/h</div>
          </section>
          <section class="card kv">
            ${D("mdi:water-percent","Luftfeuchte")}
            <div class="big">${w(s(t.humidity,"mean"),0)} %</div>
            <div class="sub">Ø · min ${w(s(t.humidity,"min"),0)} % · max ${w(s(t.humidity,"max"),0)} %</div>
          </section>
        </div>
        <div class="hint">Diagramme folgen in Schritt 3.</div>
      `:m`<div class="loading">Lade Historie …</div>`}
    `}};Q.properties={hass:{attribute:!1},_config:{state:!0},_tab:{state:!0},_stats:{state:!0},_statsError:{state:!0},_wide:{state:!0},_detail:{state:!0},_metric:{state:!0},_recent:{state:!0}},Q.styles=[$t,Me,He,C`
      :host { display: block; }
      /* Dezenter Wetter-Farbton oben, läuft in den Theme-Hintergrund aus */
      .app {
        box-sizing: border-box; padding: 16px 12px; display: flex; flex-direction: column; gap: 12px;
        border-radius: var(--ha-card-border-radius, 12px);
        background: linear-gradient(180deg, var(--wa-tint) 0, transparent 520px), var(--primary-background-color, #111);
      }
      .app > * { width: 100%; max-width: 1100px; margin-left: auto; margin-right: auto; box-sizing: border-box; }
      /* Ganzseiten-Modus (Panel-Ansicht): ganze Fläche, keine Rundung */
      /* Panel-Ansicht setzt --ha-card-border-radius: 0 → innere Karten bekommen den HA-Standardradius */
      .app.page {
        border-radius: 0; min-height: calc(100vh - var(--header-height, 56px)); padding: 20px 10px;
        --wa-radius: var(--ha-border-radius-lg, 12px);
      }

      header { text-align: center; padding: 8px 0 12px; }
      .place { font-size: 28px; font-weight: 500; }
      .now { font-size: 88px; font-weight: 600; line-height: 1; margin: 2px 0 4px 20px; }
      .cond { font-size: 20px; font-weight: 500; }
      .hl { font-size: 17px; font-weight: 500; white-space: pre; }

      /* Tabs im Stil der HA-Oberfläche: Text + Unterstrich in Primärfarbe */
      .tabs { display: flex; border-bottom: 1px solid var(--wa-divider); }
      .tabs button {
        flex: 1; display: flex; align-items: center; justify-content: center; gap: 8px;
        border: 0; background: none; color: var(--wa-text2); font: inherit; font-size: 14px; font-weight: 500;
        padding: 12px 8px; cursor: pointer; border-bottom: 2px solid transparent; margin-bottom: -1px;
      }
      .tabs button ha-icon { --mdc-icon-size: 20px; }
      .tabs button.on { color: var(--wa-accent); border-bottom-color: var(--wa-accent); }

      main { display: flex; flex-direction: column; gap: 12px; }
      .cols, .grid { display: grid; gap: 12px; }
      .wide .cols { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); align-items: start; }
      .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .wide .grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }

      .hours { display: flex; overflow-x: auto; gap: 4px; scrollbar-width: none; -webkit-overflow-scrolling: touch; }
      .hours::-webkit-scrollbar { display: none; }
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
      .day, .hr { cursor: pointer; border-radius: 8px; }
      .day:hover, .hr:hover { background: rgba(127, 127, 127, 0.08); }
      .wd { font-size: 15px; font-weight: 500; }
      .ic { display: flex; flex-direction: column; align-items: center; }
      .ic .wicon { width: 28px; height: 28px; }
      .ic .p { font-size: 11px; color: var(--wa-rain); font-weight: 500; }
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

      .kv .big { font-size: 26px; font-weight: 400; margin-top: 4px; }
      .kv .sub { font-size: 13px; color: var(--wa-text2); }
    `];var M={l:6,r:38,t:18,b:22},et=class extends T{constructor(){super(...arguments);this.start=0;this.end=0;this.series=[];this.ticks=[];this.markers=[];this.height=200;this.yUnit="";this.rightUnit="";this.timeFormat=t=>new Date(t).toLocaleString("de-DE");this._w=0}connectedCallback(){var t;super.connectedCallback(),(t=this._ro)!=null||(this._ro=new ResizeObserver(i=>{let s=Math.round(i[0].contentRect.width);s&&s!==this._w&&(this._w=s)})),this._ro.observe(this)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._ro)==null||t.disconnect()}willUpdate(t){(t.has("series")||t.has("start"))&&(this._hover=void 0)}x(t){let i=Math.max(1,this.end-this.start);return M.l+(t-this.start)/i*(this._w-M.l-M.r)}scale(t){var d;let i=[];for(let h of this.series)if(((d=h.axis)!=null?d:"left")===t){for(let u of h.points)u.v!=null&&i.push(u.v),u.v2!=null&&i.push(u.v2);h.type==="bar"&&i.push(0)}let s=t==="left"?this.yMin:0,a=t==="left"?this.yMax:this.rightMax;s==null&&(s=i.length?Math.min(...i):0),a==null&&(a=i.length?Math.max(...i):1),a-s<1e-9&&(a=s+1);let r=wi((a-s)/4);t==="left"&&this.yMin==null&&(s=Math.floor(s/r)*r),t==="left"&&this.yMax==null&&(a=Math.ceil(a/r)*r),t==="right"&&this.rightMax==null&&(a=Math.ceil(a/r)*r);let o=this.height-M.t-M.b,c=h=>M.t+o-(h-s)/(a-s)*o,l=[];for(let h=s;h<=a+r/1e3;h+=r)l.push(Math.round(h*1e6)/1e6);return{y:c,ticks:l,lo:s,hi:a}}onPointer(t){let i=t.currentTarget.getBoundingClientRect(),s=t.clientX-i.left,a=this.start+(s-M.l)/(this._w-M.l-M.r)*(this.end-this.start),r;for(let o of this.series)for(let c of o.points)c.v!=null&&(r==null||Math.abs(c.t-a)<Math.abs(r-a))&&(r=c.t);this._hover=r}render(){var l,d,h,u;let t=this._w;if(!t||this.end<=this.start)return m`<div style="height:${this.height}px"></div>`;let i=this.scale("left"),a=this.series.some(p=>p.axis==="right")?this.scale("right"):void 0,r=this.height-M.b,o=[];this.now&&this.now>this.start&&this.now<this.end&&o.push(b`<rect x=${M.l} y=${M.t} width=${this.x(this.now)-M.l} height=${r-M.t} class="past"/>`);for(let p of i.ticks){let f=i.y(p);o.push(b`<line x1=${M.l} x2=${t-M.r} y1=${f} y2=${f} class="grid"/>`),o.push(b`<text x=${t-M.r+6} y=${f+4} class="ylab">${_i(p)}${this.yUnit}</text>`)}for(let p of this.ticks){let f=this.x(p.t);f<M.l-1||f>t-M.r+1||(o.push(b`<line x1=${f} x2=${f} y1=${M.t} y2=${r} class="vgrid"/>`),o.push(b`<text x=${f+3} y=${this.height-6} class="xlab">${p.label}</text>`))}this.series.forEach((p,f)=>{var S;let $=p.axis==="right"&&a?a:i,k=p.points.filter(x=>x.v!=null).sort((x,_)=>x.t-_.t);if(!k.length)return;if(p.type==="bar"){let x=(S=p.barWidth)!=null?S:k.length>1?k[1].t-k[0].t:(this.end-this.start)/24,_=Math.max(1.5,(this.x(this.start+x)-this.x(this.start))*.7),y=$.y(Math.max(0,$.lo));for(let U of k){let N=this.x(U.t+x/2),P=$.y(U.v);o.push(b`<rect x=${N-_/2} y=${Math.min(P,y)} width=${_} height=${Math.max(.5,Math.abs(y-P))} rx="2" style="fill:${p.color}"/>`)}return}if(p.type==="band"){let x=k.filter(y=>y.v2!=null).map(y=>[this.x(y.t),$.y(y.v2)]),_=k.map(y=>[this.x(y.t),$.y(y.v)]).reverse();x.length&&o.push(b`<path d=${tt(x)+" L"+tt(_).slice(1)+"Z"} style="fill:${p.color};fill-opacity:0.28"/>`);return}let g=k.map(x=>[this.x(x.t),$.y(x.v)]);if(p.type==="area"){let x=`g${f}`;o.push(b`
          <defs><linearGradient id=${x} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" style="stop-color:${p.color};stop-opacity:0.45"/>
            <stop offset="1" style="stop-color:${p.color};stop-opacity:0.04"/>
          </linearGradient></defs>
          <path d=${`${tt(g)} L${g[g.length-1][0]},${r} L${g[0][0]},${r}Z`} fill="url(#${x})"/>`)}if(p.dashUntil!=null&&k[0].t<p.dashUntil){let x=k.findIndex(U=>U.t>=p.dashUntil),_=x<0?g:g.slice(0,x+1),y=x<0?[]:g.slice(x);o.push(b`<path d=${tt(_)} class="ln" style="stroke:${p.color}" stroke-dasharray="5 5"/>`),y.length>1&&o.push(b`<path d=${tt(y)} class="ln" style="stroke:${p.color}"/>`)}else o.push(b`<path d=${tt(g)} class="ln" style="stroke:${p.color}"/>`)});for(let p of this.markers){let f=this.x(p.t),$=i.y(p.v);o.push(b`<circle cx=${f} cy=${$} r="4" class="mk"/>`),o.push(b`<text x=${f} y=${$-9} class="mklab">${p.label}</text>`)}if(this.now&&this.now>this.start&&this.now<this.end){let p=this.x(this.now);o.push(b`<line x1=${p} x2=${p} y1=${M.t} y2=${r} class="nowl"/>`)}let c=v;if(this._hover!=null){let p=this._hover,f=this.x(p);o.push(b`<line x1=${f} x2=${f} y1=${M.t-6} y2=${r} class="hov"/>`);let $=[];for(let g of this.series){let S=$i(g,p);if(!S||S.v==null||g.silent)continue;let x=g.axis==="right"&&a?a:i;(g.type==="line"||g.type==="area")&&o.push(b`<circle cx=${f} cy=${x.y(S.v)} r="4" style="fill:${g.color}" class="hdot"/>`);let _=g.type==="band"&&S.v2!=null?`${w(S.v,(l=g.digits)!=null?l:1)} \u2013 ${w(S.v2,(d=g.digits)!=null?d:1)}`:w(S.v,(h=g.digits)!=null?h:1);$.push(`${g.label?g.label+" ":""}${_}${(u=g.unit)!=null?u:""}`)}let k=Math.min(Math.max(f,70),t-70);c=m`<div class="tip" style="left:${k}px"><b>${this.timeFormat(p)}</b>${$.map(g=>m`<span>${g}</span>`)}</div>`}return m`
      <div class="wrap">
        ${c}
        <svg width=${t} height=${this.height} @pointermove=${this.onPointer} @pointerdown=${this.onPointer}
          @pointerleave=${()=>this._hover=void 0}>${o}</svg>
      </div>
    `}};et.properties={start:{type:Number},end:{type:Number},series:{attribute:!1},ticks:{attribute:!1},markers:{attribute:!1},now:{type:Number},height:{type:Number},yMin:{type:Number},yMax:{type:Number},yUnit:{type:String},rightMax:{type:Number},rightUnit:{type:String},timeFormat:{attribute:!1},_w:{state:!0},_hover:{state:!0}},et.styles=C`
    :host { display: block; width: 100%; touch-action: pan-y; }
    .wrap { position: relative; }
    svg { display: block; overflow: visible; }
    .grid { stroke: var(--divider-color, rgba(127, 127, 127, 0.2)); stroke-width: 1; }
    .vgrid { stroke: var(--divider-color, rgba(127, 127, 127, 0.2)); stroke-dasharray: 2 3; }
    .ylab, .xlab { fill: var(--secondary-text-color); font-size: 11px; }
    .past { fill: rgba(127, 127, 127, 0.08); }
    .ln { fill: none; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
    .mk { fill: var(--primary-text-color); stroke: var(--card-background-color, #000); stroke-width: 2; }
    .mklab { fill: var(--primary-text-color); font-size: 12px; font-weight: 600; text-anchor: middle; }
    .nowl { stroke: var(--primary-text-color); stroke-width: 1; opacity: 0.5; }
    .hov { stroke: var(--primary-text-color); stroke-width: 1; }
    .hdot { stroke: var(--card-background-color, #000); stroke-width: 2; }
    .tip {
      position: absolute; top: -8px; transform: translate(-50%, -100%); pointer-events: none; z-index: 1;
      background: var(--card-background-color, #222); color: var(--primary-text-color);
      border: 1px solid var(--divider-color); border-radius: 8px; padding: 4px 8px; font-size: 12px;
      display: flex; gap: 8px; white-space: nowrap; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    }
  `;function $i(n,e){var a;let t;for(let r of n.points)r.v!=null&&(!t||Math.abs(r.t-e)<Math.abs(t.t-e))&&(t=r);if(!t)return;let i=n.points,s=(a=n.barWidth)!=null?a:i.length>1?Math.abs(i[1].t-i[0].t):1/0;return Math.abs(t.t-e)<=s/2+1?t:void 0}function wi(n){let e=Math.pow(10,Math.floor(Math.log10(Math.max(n,1e-9)))),t=n/e;return(t<=1?1:t<=2?2:t<=2.5?2.5:t<=5?5:10)*e}function _i(n){return Number.isInteger(n)?String(n):w(n,1)}function tt(n){let e=n.length;if(e===0)return"";if(e<3)return"M"+n.map(r=>`${r[0]},${r[1]}`).join(" L");let t=[],i=[],s=[];for(let r=0;r<e-1;r++)t[r]=n[r+1][0]-n[r][0],i[r]=t[r]?(n[r+1][1]-n[r][1])/t[r]:0;s[0]=i[0],s[e-1]=i[e-2];for(let r=1;r<e-1;r++)s[r]=i[r-1]*i[r]<=0?0:3*(t[r-1]+t[r])/((2*t[r]+t[r-1])/i[r-1]+(t[r]+2*t[r-1])/i[r]);let a=`M${n[0][0]},${n[0][1]}`;for(let r=0;r<e-1;r++){let o=t[r]/3;a+=` C${n[r][0]+o},${n[r][1]+o*s[r]} ${n[r+1][0]-o},${n[r+1][1]-o*s[r+1]} ${n[r+1][0]},${n[r+1][1]}`}return a}var Ie=[{id:"temp",label:"Temperatur",icon:"mdi:thermometer"},{id:"rain",label:"Niederschlag",icon:"mdi:weather-pouring"},{id:"wind",label:"Wind",icon:"mdi:weather-windy"}],H=36e5,ki=["S","M","D","M","D","F","S"];function Fe(n){let e=new Date(n);return new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()}var it=class extends T{constructor(){super(...arguments);this.hourly=[];this.daily=[];this.index=0;this.metric="temp";this.onKey=t=>t.key==="Escape"&&this.close()}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey)}close(){this.dispatchEvent(new CustomEvent("close"))}willUpdate(t){(t.has("index")||t.has("hass"))&&this.loadPast()}loadPast(){var c,l;let t=(l=(c=this.config)==null?void 0:c.sensors)!=null?l:{},i=this.daily[this.index];if(!this.hass||!i)return;let s=Fe(i.datetime),a=Date.now();if(s>a)return;let r=Math.min(s+24*H,Math.ceil(a/3e5)*3e5),o=`${s}|${r}`;o!==this._pastKey&&(this._pastKey=o,q(this.hass,{ids:[t.temperature,t.rain_total,t.wind_speed,t.wind_gust].filter(Boolean),start:new Date(s),end:new Date(r),period:"hour",types:["mean","max","change"]}).then(d=>o===this._pastKey&&(this._past=d),()=>this._pastKey=void 0))}render(){let t=this.daily[this.index];if(!t)return v;let i=Fe(t.datetime),s=i+24*H,a=Date.now(),r=a>=i&&a<s,o=this.hourly.filter(l=>{let d=new Date(l.datetime).getTime();return d>=i&&d<=s}),c=new Date(i).toLocaleDateString("de-DE",{weekday:"long",day:"numeric",month:"long"});return m`
      <div class="backdrop" @click=${this.close}></div>
      <div class="sheet" role="dialog" aria-label="Tagesdetail">
        <div class="top">
          <button class="ib" aria-label="Schließen" @click=${this.close}><ha-icon icon="mdi:close"></ha-icon></button>
          <div class="ttl">${Ie.find(l=>l.id===this.metric).label}</div>
          <span style="width:40px"></span>
        </div>

        <div class="days">
          ${this.daily.map((l,d)=>{let h=new Date(l.datetime);return m`<button class=${d===this.index?"on":""} @click=${()=>this.select(d)}>
              <span class="l">${ki[h.getDay()]}</span><span class="n">${h.getDate()}</span></button>`})}
        </div>
        <div class="date">${c}</div>

        <div class="chips">
          ${Ie.map(l=>m`<button class=${l.id===this.metric?"on":""}
            @click=${()=>this.setMetric(l.id)}><ha-icon icon=${l.icon}></ha-icon>${l.label}</button>`)}
        </div>

        <section class="card">
          ${this.renderSummary(t,o,r)}
          ${o.length?this.renderChart(i,s,o,r?a:void 0):m`<div class="hint">Für diesen Tag gibt es keine Stundenvorhersage.</div>`}
        </section>
      </div>
    `}select(t){this.dispatchEvent(new CustomEvent("select",{detail:{index:t}}))}setMetric(t){this.dispatchEvent(new CustomEvent("metric",{detail:{metric:t}}))}renderSummary(t,i,s){var l,d,h;let a=(l=this.config.sensors)!=null?l:{};if(this.metric==="temp"){let u=s?A(this.hass,a.temperature):void 0;return m`<div class="sum">
        <div class="sum-ic">${mt(t.condition)}</div>
        <div>
          <div class="big">${u!=null?E(u):ut(t.condition)}</div>
          <div class="sub">H: ${E(t.temperature)} · T: ${E(t.templow)}${u!=null?` \xB7 ${ut(t.condition)}`:""}</div>
        </div>
      </div>`}if(this.metric==="rain"){let u=s&&a.rain_total?this.pastRows(a.rain_total).reduce((f,$)=>{var k;return f+((k=$.change)!=null?k:0)},0):void 0,p=Math.max(0,...i.map(f=>{var $;return($=f.precipitation_probability)!=null?$:0}),(d=t.precipitation_probability)!=null?d:0);return m`<div class="sum">
        <div>
          <div class="big">${W((h=t.precipitation)!=null?h:i.reduce((f,$)=>{var k;return f+((k=$.precipitation)!=null?k:0)},0))}</div>
          <div class="sub">erwartet · Wahrscheinlichkeit bis ${Math.round(p)} %${u!=null?` \xB7 bisher gemessen ${W(u)}`:""}</div>
        </div>
      </div>`}let r=i.map(u=>u.wind_speed).filter(u=>u!=null),o=r.length?r.reduce((u,p)=>u+p,0)/r.length:t.wind_speed,c=a.wind_gust&&s?Math.max(...this.pastRows(a.wind_gust).map(u=>{var p;return(p=u.max)!=null?p:0}),0):void 0;return m`<div class="sum">
      <div>
        <div class="big">${w(o,0)} km/h <span class="dir">${_t(t.wind_bearing)}</span></div>
        <div class="sub">Ø Vorhersage · max ${w(r.length?Math.max(...r):void 0,0)} km/h${c?` \xB7 st\xE4rkste B\xF6e heute ${w(c,0)} km/h`:""}</div>
      </div>
    </div>`}pastRows(t){var i,s;return(s=(i=this._past)==null?void 0:i[t])!=null?s:[]}renderChart(t,i,s,a){var k;let r=(k=this.config.sensors)!=null?k:{},o=s.map(g=>({t:new Date(g.datetime).getTime(),h:g})),c=a?o.filter(g=>g.t>=a-H):o,l=[0,6,12,18].map(g=>({t:t+g*H,label:`${String(g).padStart(2,"0")} Uhr`})),d=[],h=[],u="\xB0",p,f="",$;if(this.metric==="temp"){let g=r.temperature&&a?this.pastRows(r.temperature).map(y=>({t:y.start+H/2,v:y.mean})):[],S=a?A(this.hass,r.temperature):void 0,x=[...g,...S!=null?[{t:a,v:S}]:[],...c.filter(y=>!a||y.t>a).map(y=>({t:y.t,v:y.h.temperature}))];d.push({type:"area",points:x,color:"var(--wa-temp, #4fc3f7)",dashUntil:a,label:"",unit:"\xB0",digits:1});let _=x.filter(y=>y.v!=null);if(_.length){let y=_.reduce((N,P)=>P.v>N.v?P:N),U=_.reduce((N,P)=>P.v<N.v?P:N);h.push({t:y.t,v:y.v,label:"H"},{t:U.t,v:U.v,label:"T"})}}else if(this.metric==="rain")u="",$=0,r.rain_total&&a&&d.push({type:"bar",points:this.pastRows(r.rain_total).map(g=>({t:g.start,v:g.change})),color:"var(--wa-rain-past, #1e6fb8)",barWidth:H,label:"gemessen",unit:" l/m\xB2",digits:1}),d.push({type:"bar",points:c.map(g=>{var S;return{t:g.t,v:(S=g.h.precipitation)!=null?S:0}}),color:"var(--wa-rain)",barWidth:H,label:"",unit:" l/m\xB2",digits:1}),d.push({type:"line",axis:"right",points:c.map(g=>({t:g.t+H/2,v:g.h.precipitation_probability})),color:"var(--wa-prob, #90caf9)",unit:" %",digits:0}),p=100,f=" %";else{u="",$=0;let g=r.wind_speed&&a?this.pastRows(r.wind_speed).map(_=>({t:_.start+H/2,v:_.mean})):[],S=a?A(this.hass,r.wind_speed):void 0,x=[...g,...S!=null?[{t:a,v:S}]:[],...c.filter(_=>!a||_.t>a).map(_=>({t:_.t,v:_.h.wind_speed}))];d.push({type:"area",points:x,color:"var(--wa-wind, #81c784)",dashUntil:a,label:"\xD8",unit:" km/h",digits:0}),r.wind_gust&&a&&d.push({type:"line",points:this.pastRows(r.wind_gust).map(_=>({t:_.start+H/2,v:_.max})),color:"var(--wa-gust, #ffb74d)",label:"B\xF6e",unit:" km/h",digits:0})}return m`
      <wetter-app-chart .start=${t} .end=${i} .series=${d} .ticks=${l} .markers=${h}
        .now=${a} .height=${220} .yUnit=${u} .yMin=${$} .rightMax=${p} .rightUnit=${f}
        .timeFormat=${g=>new Date(g).toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}>
      </wetter-app-chart>
      ${this.metric==="wind"?this.renderWindDirs(t,c):v}
      ${this.metric==="rain"?m`<div class="legend"><i style="background:var(--wa-rain)"></i>Menge pro Stunde
        <i class="ln" style="background:var(--wa-prob, #90caf9)"></i>Wahrscheinlichkeit${a?m`<i style="background:var(--wa-rain-past, #1e6fb8)"></i>gemessen`:v}</div>`:v}
    `}renderWindDirs(t,i){let s=i.filter(a=>new Date(a.t).getHours()%3===0);return m`<div class="dirs">
      ${s.map(a=>{var r;return m`<div style="left:calc(6px + (100% - 44px) * ${(a.t-t)/(24*H)})">
        <ha-icon icon="mdi:navigation" style="transform:rotate(${((r=a.h.wind_bearing)!=null?r:0)+180}deg)"></ha-icon>
        <span>${new Date(a.t).getHours()} Uhr</span></div>`})}
    </div>`}};it.properties={hass:{attribute:!1},config:{attribute:!1},hourly:{attribute:!1},daily:{attribute:!1},index:{type:Number},metric:{type:String},_past:{state:!0}},it.styles=[$t,C`
      :host { position: fixed; inset: 0; z-index: 8; display: flex; justify-content: center; align-items: stretch; }
      .backdrop { position: absolute; inset: 0; background: rgba(0, 0, 0, 0.55); }
      .sheet {
        position: relative; width: 100%; max-width: 720px; overflow-y: auto; box-sizing: border-box;
        background: var(--primary-background-color, #111); padding: 8px 12px 24px;
        display: flex; flex-direction: column; gap: 12px; -webkit-overflow-scrolling: touch;
      }
      @media (min-width: 760px) {
        :host { align-items: center; }
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
      .chips ha-icon { --mdc-icon-size: 16px; }
      .chips button.on {
        border-color: transparent; color: var(--wa-accent); font-weight: 500;
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.18);
      }
      .sum { display: flex; align-items: center; gap: 12px; padding: 4px 0 12px; }
      .sum-ic .wicon { width: 52px; height: 52px; }
      .big { font-size: 28px; font-weight: 600; }
      .dir { font-size: 18px; color: var(--wa-text2); font-weight: 500; }
      .sub { font-size: 13px; color: var(--wa-text2); }
      .legend { display: flex; flex-wrap: wrap; align-items: center; gap: 6px 12px; font-size: 12px; color: var(--wa-text2); margin-top: 8px; }
      .legend i { display: inline-block; width: 10px; height: 10px; border-radius: 2px; margin-right: -6px; }
      .legend i.ln { height: 3px; }
      .dirs { position: relative; height: 36px; margin-top: 6px; }
      .dirs div {
        position: absolute; top: 0; transform: translateX(-50%); display: flex; flex-direction: column;
        align-items: center; font-size: 11px; color: var(--wa-text2); white-space: nowrap;
      }
      .dirs ha-icon { --mdc-icon-size: 18px; color: var(--wa-text); }
    `];var Le=[["wetter-app",Q,"Wetter-App","Komplette Wetter-App mit Vorhersage und Historie"]],Si=[["wetter-app-chart",et],["wetter-app-day-detail",it]];for(let[n,e]of[...Si,...Le])customElements.get(n)||customElements.define(n,e);var St=window;St.customCards=St.customCards||[];for(let[n,,e,t]of Le)St.customCards.some(i=>i.type===n)||St.customCards.push({type:n,name:e,description:t,preview:!1});console.info("%c WETTER-APP %c 0.1.0 ","background:#2f6fc4;color:#fff;border-radius:3px 0 0 3px","background:#555;color:#fff;border-radius:0 3px 3px 0");
