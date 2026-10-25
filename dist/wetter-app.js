var _t=globalThis,St=_t.ShadowRoot&&(_t.ShadyCSS===void 0||_t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Nt=Symbol(),ae=new WeakMap,ct=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Nt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(St&&e===void 0){let i=t!==void 0&&t.length===1;i&&(e=ae.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ae.set(t,e))}return e}toString(){return this.cssText}},oe=a=>new ct(typeof a=="string"?a:a+"",void 0,Nt),C=(a,...e)=>{let t=a.length===1?a[0]:e.reduce((i,s,r)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+a[r+1],a[0]);return new ct(t,a,Nt)},le=(a,e)=>{if(St)a.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let i=document.createElement("style"),s=_t.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,a.appendChild(i)}},Ot=St?a=>a:a=>a instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return oe(t)})(a):a;var{is:ei,defineProperty:ii,getOwnPropertyDescriptor:si,getOwnPropertyNames:ni,getOwnPropertySymbols:ri,getPrototypeOf:ai}=Object,L=globalThis,ce=L.trustedTypes,oi=ce?ce.emptyScript:"",Ut=L.reactiveElementPolyfillSupport,dt=(a,e)=>a,Ht={toAttribute(a,e){switch(e){case Boolean:a=a?oi:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,e){let t=a;switch(e){case Boolean:t=a!==null;break;case Number:t=a===null?null:Number(a);break;case Object:case Array:try{t=JSON.parse(a)}catch{t=null}}return t}},me=(a,e)=>!ei(a,e),de={attribute:!0,type:String,converter:Ht,reflect:!1,useDefault:!1,hasChanged:me},he,pe;(he=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(pe=L.litPropertyMetadata)!=null||(L.litPropertyMetadata=new WeakMap);var I=class extends HTMLElement{static addInitializer(e){var t;this._$Ei(),((t=this.l)!=null?t:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=de){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&ii(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){var n;let{get:s,set:r}=(n=si(this.prototype,e))!=null?n:{get(){return this[t]},set(o){this[t]=o}};return{get:s,set(o){let l=s==null?void 0:s.call(this);r==null||r.call(this,o),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var t;return(t=this.elementProperties.get(e))!=null?t:de}static _$Ei(){if(this.hasOwnProperty(dt("elementProperties")))return;let e=ai(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(dt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(dt("properties"))){let t=this.properties,i=[...ni(t),...ri(t)];for(let s of i)this.createProperty(s,t[s])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[t,i]of this.elementProperties){let s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let s of i)t.unshift(Ot(s))}else e!==void 0&&t.push(Ot(e));return t}static _$Eu(e,t){let i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$EO)!=null?t:this._$EO=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)==null||i.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var t;let e=(t=this.shadowRoot)!=null?t:this.attachShadow(this.constructor.shadowRootOptions);return le(e,this.constructor.elementStyles),e}connectedCallback(){var e,t;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostConnected)==null?void 0:s.call(i)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var r;let i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){let n=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:Ht).toAttribute(t,i.type);this._$Em=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,t){var r,n,o;let i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){let l=i.getPropertyOptions(s),c=typeof l.converter=="function"?{fromAttribute:l.converter}:((r=l.converter)==null?void 0:r.fromAttribute)!==void 0?l.converter:Ht;this._$Em=s;let p=c.fromAttribute(t,l.type);this[s]=(o=p!=null?p:(n=this._$Ej)==null?void 0:n.get(s))!=null?o:p,this._$Em=null}}requestUpdate(e,t,i,s=!1,r){var n,o;if(e!==void 0){let l=this.constructor;if(s===!1&&(r=this[e]),i!=null||(i=l.getPropertyOptions(e)),!(((n=i.hasChanged)!=null?n:me)(r,t)||i.useDefault&&i.reflect&&r===((o=this._$Ej)==null?void 0:o.get(e))&&!this.hasAttribute(l._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:r},n){var o,l,c;i&&!((o=this._$Ej)!=null?o:this._$Ej=new Map).has(e)&&(this._$Ej.set(e,(l=n!=null?n:t)!=null?l:this[e]),r!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&((c=this._$Eq)!=null?c:this._$Eq=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i,s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((i=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[n,o]of r){let{wrapped:l}=o,c=this[n];l!==!0||this._$AL.has(n)||c===void 0||this.C(n,void 0,o,c)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(r=>{var n;return(n=r.hostUpdate)==null?void 0:n.call(r)}),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}},ue;I.elementStyles=[],I.shadowRootOptions={mode:"open"},I[dt("elementProperties")]=new Map,I[dt("finalized")]=new Map,Ut==null||Ut({ReactiveElement:I}),((ue=L.reactiveElementVersions)!=null?ue:L.reactiveElementVersions=[]).push("2.1.2");var pt=globalThis,ge=a=>a,kt=pt.trustedTypes,fe=kt?kt.createPolicy("lit-html",{createHTML:a=>a}):void 0,_e="$lit$",W=`lit$${Math.random().toFixed(9).slice(2)}$`,Se="?"+W,li=`<${Se}>`,Y=document,ut=()=>Y.createComment(""),mt=a=>a===null||typeof a!="object"&&typeof a!="function",Kt=Array.isArray,ci=a=>Kt(a)||typeof(a==null?void 0:a[Symbol.iterator])=="function",It=`[ 	
\f\r]`,ht=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ve=/-->/g,be=/>/g,j=RegExp(`>|${It}(?:([^\\s"'>=/]+)(${It}*=${It}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),xe=/'/g,ye=/"/g,ke=/^(?:script|style|textarea|title)$/i,Gt=a=>(e,...t)=>({_$litType$:a,strings:e,values:t}),m=Gt(1),y=Gt(2),Gi=Gt(3),K=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),$e=new WeakMap,B=Y.createTreeWalker(Y,129);function Me(a,e){if(!Kt(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return fe!==void 0?fe.createHTML(e):e}var di=(a,e)=>{let t=a.length-1,i=[],s,r=e===2?"<svg>":e===3?"<math>":"",n=ht;for(let o=0;o<t;o++){let l=a[o],c,p,h=-1,u=0;for(;u<l.length&&(n.lastIndex=u,p=n.exec(l),p!==null);)u=n.lastIndex,n===ht?p[1]==="!--"?n=ve:p[1]!==void 0?n=be:p[2]!==void 0?(ke.test(p[2])&&(s=RegExp("</"+p[2],"g")),n=j):p[3]!==void 0&&(n=j):n===j?p[0]===">"?(n=s!=null?s:ht,h=-1):p[1]===void 0?h=-2:(h=n.lastIndex-p[2].length,c=p[1],n=p[3]===void 0?j:p[3]==='"'?ye:xe):n===ye||n===xe?n=j:n===ve||n===be?n=ht:(n=j,s=void 0);let d=n===j&&a[o+1].startsWith("/>")?" ":"";r+=n===ht?l+li:h>=0?(i.push(c),l.slice(0,h)+_e+l.slice(h)+W+d):l+W+(h===-2?o:d)}return[Me(a,r+(a[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},gt=class a{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,n=0,o=e.length-1,l=this.parts,[c,p]=di(e,t);if(this.el=a.createElement(c,i),B.currentNode=this.el.content,t===2||t===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=B.nextNode())!==null&&l.length<o;){if(s.nodeType===1){if(s.hasAttributes())for(let h of s.getAttributeNames())if(h.endsWith(_e)){let u=p[n++],d=s.getAttribute(h).split(W),g=/([.?@])?(.*)/.exec(u);l.push({type:1,index:r,name:g[2],strings:d,ctor:g[1]==="."?Vt:g[1]==="?"?jt:g[1]==="@"?Bt:tt}),s.removeAttribute(h)}else h.startsWith(W)&&(l.push({type:6,index:r}),s.removeAttribute(h));if(ke.test(s.tagName)){let h=s.textContent.split(W),u=h.length-1;if(u>0){s.textContent=kt?kt.emptyScript:"";for(let d=0;d<u;d++)s.append(h[d],ut()),B.nextNode(),l.push({type:2,index:++r});s.append(h[u],ut())}}}else if(s.nodeType===8)if(s.data===Se)l.push({type:2,index:r});else{let h=-1;for(;(h=s.data.indexOf(W,h+1))!==-1;)l.push({type:7,index:r}),h+=W.length-1}r++}}static createElement(e,t){let i=Y.createElement("template");return i.innerHTML=e,i}};function Q(a,e,t=a,i){var n,o,l;if(e===K)return e;let s=i!==void 0?(n=t._$Co)==null?void 0:n[i]:t._$Cl,r=mt(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==r&&((o=s==null?void 0:s._$AO)==null||o.call(s,!1),r===void 0?s=void 0:(s=new r(a),s._$AT(a,t,i)),i!==void 0?((l=t._$Co)!=null?l:t._$Co=[])[i]=s:t._$Cl=s),s!==void 0&&(e=Q(a,s._$AS(a,e.values),s,i)),e}var Wt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var c;let{el:{content:t},parts:i}=this._$AD,s=((c=e==null?void 0:e.creationScope)!=null?c:Y).importNode(t,!0);B.currentNode=s;let r=B.nextNode(),n=0,o=0,l=i[0];for(;l!==void 0;){if(n===l.index){let p;l.type===2?p=new ft(r,r.nextSibling,this,e):l.type===1?p=new l.ctor(r,l.name,l.strings,this,e):l.type===6&&(p=new Yt(r,this,e)),this._$AV.push(p),l=i[++o]}n!==(l==null?void 0:l.index)&&(r=B.nextNode(),n++)}return B.currentNode=Y,s}p(e){let t=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},ft=class a{get _$AU(){var e,t;return(t=(e=this._$AM)==null?void 0:e._$AU)!=null?t:this._$Cv}constructor(e,t,i,s){var r;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(r=s==null?void 0:s.isConnected)!=null?r:!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Q(this,e,t),mt(e)?e===b||e==null||e===""?(this._$AH!==b&&this._$AR(),this._$AH=b):e!==this._$AH&&e!==K&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ci(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==b&&mt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Y.createTextNode(e)),this._$AH=e}$(e){var r;let{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=gt.createElement(Me(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===s)this._$AH.p(t);else{let n=new Wt(s,this),o=n.u(this.options);n.p(t),this.T(o),this._$AH=n}}_$AC(e){let t=$e.get(e.strings);return t===void 0&&$e.set(e.strings,t=new gt(e)),t}k(e){Kt(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,s=0;for(let r of e)s===t.length?t.push(i=new a(this.O(ut()),this.O(ut()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e!==this._$AB;){let s=ge(e).nextSibling;ge(e).remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},tt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,r){this.type=1,this._$AH=b,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=b}_$AI(e,t=this,i,s){let r=this.strings,n=!1;if(r===void 0)e=Q(this,e,t,0),n=!mt(e)||e!==this._$AH&&e!==K,n&&(this._$AH=e);else{let o=e,l,c;for(e=r[0],l=0;l<r.length-1;l++)c=Q(this,o[i+l],t,l),c===K&&(c=this._$AH[l]),n||(n=!mt(c)||c!==this._$AH[l]),c===b?e=b:e!==b&&(e+=(c!=null?c:"")+r[l+1]),this._$AH[l]=c}n&&!s&&this.j(e)}j(e){e===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},Vt=class extends tt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===b?void 0:e}},jt=class extends tt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==b)}},Bt=class extends tt{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var n;if((e=(n=Q(this,e,t,0))!=null?n:b)===K)return;let i=this._$AH,s=e===b&&i!==b||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==b&&(i===b||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)==null?void 0:t.host)!=null?i:this.element,e):this._$AH.handleEvent(e)}},Yt=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Q(this,e)}};var Lt=pt.litHtmlPolyfillSupport,we;Lt==null||Lt(gt,ft),((we=pt.litHtmlVersions)!=null?we:pt.litHtmlVersions=[]).push("3.3.3");var De=(a,e,t)=>{var r,n;let i=(r=t==null?void 0:t.renderBefore)!=null?r:e,s=i._$litPart$;if(s===void 0){let o=(n=t==null?void 0:t.renderBefore)!=null?n:null;i._$litPart$=s=new ft(e.insertBefore(ut(),o),o,void 0,t!=null?t:{})}return s._$AI(a),s};var G=globalThis,z=class extends I{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;let e=super.createRenderRoot();return(i=(t=this.renderOptions).renderBefore)!=null||(t.renderBefore=e.firstChild),e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=De(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return K}},Ae;z._$litElement$=!0,z.finalized=!0,(Ae=G.litElementHydrateSupport)==null||Ae.call(G,{LitElement:z});var Jt=G.litElementPolyfillSupport;Jt==null||Jt({LitElement:z});var Te;((Te=G.litElementVersions)!=null?Te:G.litElementVersions=[]).push("4.2.2");var vt=class{constructor(e,t,i){this.host=e;this.type=t;this.entity=i;this.connected=!1;e.addController(this)}hostConnected(){this.connected=!0,this.sync()}hostDisconnected(){this.connected=!1,this.stop()}hostUpdated(){this.sync()}sync(){let e=this.host.hass,t=this.entity();if(!this.connected||!e||!t)return;let i=`${t}|${this.type}`;i!==this.subscribedKey&&(this.stop(),this.subscribedKey=i,this.error=void 0,this.unsub=e.connection.subscribeMessage(s=>{var r;this.forecast=(r=s.forecast)!=null?r:[],this.host.requestUpdate()},{type:"weather/subscribe_forecast",forecast_type:this.type,entity_id:t}),this.unsub.catch(s=>{var r;this.error=(r=s==null?void 0:s.message)!=null?r:String(s),this.subscribedKey=void 0,this.host.requestUpdate()}))}stop(){let e=this.unsub;this.unsub=void 0,this.subscribedKey=void 0,e==null||e.then(t=>t()).catch(()=>{})}};var J=new Map;function et(a,e){let t=e.ids.filter(Boolean);if(!t.length)return Promise.resolve({});let i=JSON.stringify([t,e.start.getTime(),e.end.getTime(),e.period,e.types]),s=Date.now(),r=J.get(i);if(r&&r.expires>s)return r.promise;let n=a.callWS({type:"recorder/statistics_during_period",start_time:e.start.toISOString(),end_time:e.end.toISOString(),statistic_ids:t,period:e.period,types:e.types}).then(hi),o={promise:n,expires:e.end.getTime()<s?1/0:s+3e5};return J.set(i,o),n.catch(()=>J.get(i)===o&&J.delete(i)),J.size>60&&J.delete(J.keys().next().value),n}function hi(a){for(let e of Object.values(a))for(let t of e)typeof t.start!="number"&&(t.start=new Date(t.start).getTime()),typeof t.end!="number"&&(t.end=new Date(t.end).getTime());return a}var A=(a,e)=>m`<div class="head"><ha-icon icon=${a}></ha-icon><span>${e}</span></div>`,it=C`
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
`;var O=Math.PI/180;function Zt(a,e,t){let i=new Date(a.getFullYear(),a.getMonth(),a.getDate(),12),r=Math.round((i.getTime()-Date.UTC(2e3,0,1,12))/864e5)-t/360,n=(357.5291+.98560028*r)%360,o=1.9148*Math.sin(n*O)+.02*Math.sin(2*n*O)+3e-4*Math.sin(3*n*O),l=(n+o+180+102.9372)%360,c=r+.0053*Math.sin(n*O)-.0069*Math.sin(2*l*O),p=Math.asin(Math.sin(l*O)*Math.sin(23.4397*O)),h=(Math.sin(-.833*O)-Math.sin(e*O)*Math.sin(p))/(Math.cos(e*O)*Math.cos(p));if(h<-1||h>1)return;let u=Math.acos(h)/O/360,d=g=>new Date(Date.UTC(2e3,0,1,12)+g*864e5);return{rise:d(c-u),set:d(c+u),noon:d(c)}}var Z=29.530588853,pi=Date.UTC(2e3,0,6,18,14);function Ee(a){let t=((a.getTime()-pi)/864e5%Z+Z)%Z,i=(1-Math.cos(t/Z*2*Math.PI))/2,s=(Z/2-t+Z)%Z;return{age:t,illumination:i,nextFull:new Date(a.getTime()+s*864e5)}}var ui={"clear-night":"Klar",cloudy:"Bew\xF6lkt",exceptional:"Unwetter",fog:"Nebel",hail:"Hagel",lightning:"Gewitter","lightning-rainy":"Gewitter mit Regen",partlycloudy:"Teilweise bew\xF6lkt",pouring:"Starkregen",rainy:"Regnerisch",snowy:"Schnee","snowy-rainy":"Schneeregen",sunny:"Sonnig",windy:"Windig","windy-variant":"Windig und bew\xF6lkt"};function bt(a){return a&&ui[a]||"\u2013"}var Re={sunny:"47,128,237",partlycloudy:"70,130,200",cloudy:"120,135,150","windy-variant":"120,135,150",rainy:"80,105,135",pouring:"70,90,120",hail:"90,100,125",snowy:"160,180,205","snowy-rainy":"130,150,175",fog:"150,155,160",lightning:"85,80,125","lightning-rainy":"85,80,125",exceptional:"150,70,70",windy:"100,140,170"},mi="35,50,100";function Ce(a,e){return`rgba(${e&&(a==="sunny"||a==="clear-night"||a==="partlycloudy")?mi:a&&Re[a]||Re.cloudy},${e?.35:.45})`}var gi={new_moon:"Neumond",waxing_crescent:"Zunehmende Sichel",first_quarter:"Erstes Viertel",waxing_gibbous:"Zunehmender Mond",full_moon:"Vollmond",waning_gibbous:"Abnehmender Mond",last_quarter:"Letztes Viertel",waning_crescent:"Abnehmende Sichel"};function Pe(a){return a&&gi[a]||"\u2013"}var ze=new Map;function k(a,e=1){if(a==null||!isFinite(a))return"\u2013";let t=ze.get(e);return t||(t=new Intl.NumberFormat("de-DE",{minimumFractionDigits:e,maximumFractionDigits:e}),ze.set(e,t)),t.format(a)}var T=(a,e=0)=>a==null?"\u2013":`${k(a,e)}\xB0`,V=(a,e=1)=>`${k(a,e)} l/m\xB2`;function R(a,e){let t=e?a==null?void 0:a.states[e]:void 0;if(!t)return;let i=parseFloat(t.state);return isFinite(i)?i:void 0}var fi=["So","Mo","Di","Mi","Do","Fr","Sa"];function Fe(a,e=new Date){return a.toDateString()===e.toDateString()?"Heute":fi[a.getDay()]}function Ne(a){return`${String(a.getHours()).padStart(2,"0")} Uhr`}function Mt(a){return a.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}var vi=["N","NO","O","SO","S","SW","W","NW"];function Dt(a){return a==null||!isFinite(a)?"\u2013":vi[Math.round((a%360+360)%360/45)%8]}function Oe(a){return m`<div class="tiles">
    ${xi(a)} ${bi(a)} ${yi(a)} ${$i(a)} ${wi(a)} ${Si(a)} ${ki(a)} ${Mi(a)}
  </div>`}function bi({hass:a,config:e}){var n;let t=(n=e.sensors)!=null?n:{},i=R(a,t.feels_like);if(i==null)return b;let s=R(a,t.temperature),r=s==null?"":i<s-1?"Durch den Wind f\xFChlt es sich k\xE4lter an.":i>s+1?"Durch die Luftfeuchtigkeit f\xFChlt es sich w\xE4rmer an.":"\xC4hnlich wie die tats\xE4chliche Temperatur.";return m`<section class="card tile">${A("mdi:thermometer-lines","Gef\xFChlt")}
    <div class="val">${T(i)}</div><div class="txt">${r}</div></section>`}function xi({hass:a,config:e}){var o;let t=(o=e.sensors)!=null?o:{},i=R(a,t.wind_speed);if(i==null)return b;let s=R(a,t.wind_gust),r=R(a,t.wind_direction),n=[...Array(72)].map((l,c)=>{let p=c*5*Math.PI/180,h=c%18===0?38:41;return y`<line x1=${50+Math.sin(p)*h} y1=${50-Math.cos(p)*h} x2=${50+Math.sin(p)*45} y2=${50-Math.cos(p)*45} class=${c%18===0?"tk major":"tk"}/>`});return m`<section class="card tile wide2">${A("mdi:weather-windy","Wind")}
    <div class="wind">
      <div class="rows">
        <div class="row"><span>Wind</span><b>${k(i,0)} km/h</b></div>
        ${s!=null?m`<div class="row"><span>Böen</span><b>${k(s,0)} km/h</b></div>`:b}
        ${r!=null?m`<div class="row"><span>Richtung</span><b>${k(r,0)}° ${Dt(r)}</b></div>`:b}
      </div>
      <svg class="compass" viewBox="0 0 100 100">
        ${n}
        ${["N","O","S","W"].map((l,c)=>y`<text x=${50+Math.sin(c*Math.PI/2)*30} y=${54-Math.cos(c*Math.PI/2)*30} class="cl">${l}</text>`)}
        ${r!=null?y`<g transform="rotate(${r+180} 50 50)">
          <line x1="50" y1="88" x2="50" y2="18" class="arrow"/><path d="M50 10l-6 11h12z" class="arrowhead"/>
          <circle cx="50" cy="88" r="3.5" class="arrowhead"/></g>`:b}
        <circle cx="50" cy="50" r="17" class="hub"/>
        <text x="50" y="50" class="cv">${k(i,0)}</text><text x="50" y="60" class="cu">km/h</text>
      </svg>
    </div></section>`}function yi({hass:a,config:e,hourly:t,recent:i}){var c;let s=(c=e.sensors)!=null?c:{};if(!s.rain_total&&!t)return b;let r=s.rain_total&&(i!=null&&i[s.rain_total])?i[s.rain_total].reduce((p,h)=>{var u;return p+((u=h.change)!=null?u:0)},0):void 0,n=Date.now(),o=t==null?void 0:t.filter(p=>{let h=new Date(p.datetime).getTime();return h>=n-36e5&&h<n+23*36e5}).reduce((p,h)=>{var u;return p+((u=h.precipitation)!=null?u:0)},0),l=R(a,s.rain_rate);return m`<section class="card tile">${A("mdi:water","Niederschlag")}
    <div class="val">${r!=null?V(r):"\u2013"}</div>
    <div class="lbl">in den letzten 24 Std.</div>
    <div class="txt">${l?m`Aktuell ${k(l)} l/m² pro Std.<br>`:b}
      ${o!=null?`${V(o)} in den n\xE4chsten 24 Std. erwartet.`:""}</div></section>`}function $i({hass:a,config:e,recent:t}){var h;let i=(h=e.sensors)!=null?h:{},s=R(a,i.pressure);if(s==null)return b;let r=i.pressure?t==null?void 0:t[i.pressure]:void 0,n=r&&r.length>=3?r[r.length-3].mean:void 0,o=n!=null?s-n:void 0,l=o==null?"":o>1?"steigend":o<-1?"fallend":"gleichbleibend",c=o==null?0:Math.max(-1,Math.min(1,o/4))*120,p=[...Array(41)].map((u,d)=>{let g=(-120+d*6)*Math.PI/180;return y`<line x1=${50+Math.sin(g)*36} y1=${54-Math.cos(g)*36} x2=${50+Math.sin(g)*44} y2=${54-Math.cos(g)*44} class="tk"/>`});return m`<section class="card tile">${A("mdi:gauge","Luftdruck")}
    <svg class="gauge" viewBox="0 0 100 92">
      ${p}
      <g transform="rotate(${c} 50 54)"><line x1="50" y1="6" x2="50" y2="20" class="needle"/></g>
      <text x="50" y="52" class="gv">${k(s,0)}</text><text x="50" y="64" class="gu">hPa</text>
      <text x="16" y="90" class="gu">−</text><text x="84" y="90" class="gu">+</text>
    </svg>
    <div class="txt">${l?m`3 Std.: ${l} (${o>0?"+":""}${k(o,1)} hPa)`:b}</div></section>`}function wi({hass:a,config:e}){var r;let t=(r=e.sensors)!=null?r:{},i=R(a,t.humidity);if(i==null)return b;let s=R(a,t.dewpoint);return m`<section class="card tile">${A("mdi:water-percent","Feuchtigkeit")}
    <div class="val">${k(i,0)} %</div>
    <div class="txt">${s!=null?`Der Taupunkt liegt derzeit bei ${T(s)}.`:""}</div></section>`}var _i=[[3,"Niedrig"],[6,"Mittel"],[8,"Hoch"],[11,"Sehr hoch"],[99,"Extrem"]];function Si({hass:a,config:e}){var n;let t=(n=e.sensors)!=null?n:{},i=R(a,t.uv);if(i==null)return b;let s=R(a,t.solar),r=_i.find(([o])=>i<o)[1];return m`<section class="card tile">${A("mdi:sun-wireless","UV-Index")}
    <div class="val">${k(i,0)}</div><div class="lbl">${r}</div>
    <div class="uvbar"><i style="left:${Math.min(100,i/11*100)}%"></i></div>
    <div class="txt">${s!=null?`Sonneneinstrahlung ${k(s,0)} W/m\xB2`:""}</div></section>`}function ki({hass:a,config:e}){var E,P,F,X,q,lt,wt,ne,re;let t=(E=a.states[e.weather])==null?void 0:E.attributes,i=e.sun?a.states[e.sun]:void 0,s=(F=t==null?void 0:t.latitude)!=null?F:(P=a.config)==null?void 0:P.latitude,r=(q=t==null?void 0:t.longitude)!=null?q:(X=a.config)==null?void 0:X.longitude;if(s==null||r==null)return b;let n=new Date,o=Zt(n,s,r);if(!o)return b;let l=H=>H&&new Date(H).toDateString()===n.toDateString()?new Date(H):void 0,c=(lt=l(i==null?void 0:i.attributes.next_rising))!=null?lt:o.rise,p=(wt=l(i==null?void 0:i.attributes.next_setting))!=null?wt:o.set,h=n<p,u=n<c?["Sonnenaufgang",c]:h?["Sonnenuntergang",p]:["Sonnenaufgang",(re=(ne=Zt(new Date(n.getTime()+864e5),s,r))==null?void 0:ne.rise)!=null?re:c],d=new Date(n.getFullYear(),n.getMonth(),n.getDate()).getTime(),g=H=>(H.getTime()-d)/864e5,$=(g(c)+g(p))/2,w=g(p)-g(c),v=H=>Math.cos(2*Math.PI*(H-$)),f=Math.cos(Math.PI*w),S=H=>34-H*22,x=[...Array(49)].map((H,Ft)=>`${Ft?"L":"M"}${Ft/48*100},${S(v(Ft/48))}`).join(" "),M=g(n),_=n>=c&&n<p;return m`<section class="card tile">${A(_?"mdi:weather-sunset-down":"mdi:weather-sunset-up",u[0])}
    <div class="val">${Mt(u[1])}</div>
    <div class="sunarc">
      <svg viewBox="0 0 100 60" preserveAspectRatio="none">
        <path d=${x} class="sunpath"/>
        <line x1="0" x2="100" y1=${S(f)} y2=${S(f)} class="hz"/>
      </svg>
      <!-- Punkt als HTML, sonst verzerrt preserveAspectRatio=none ihn zur Ellipse -->
      <i class=${_?"sundot":"sundot down"} style="left:${M*100}%;top:${S(v(M))/60*100}%"></i>
    </div>
    <div class="txt">${u[0]==="Sonnenuntergang"?`Sonnenaufgang: ${Mt(c)}`:`Sonnenuntergang: ${Mt(p)}`}</div>
  </section>`}function Mi({hass:a,config:e}){var c;let t=e.moon?(c=a.states[e.moon])==null?void 0:c.state:void 0,i=Ee(new Date),s=Math.round((i.nextFull.getTime()-Date.now())/864e5),r=i.age<29.530588853/2,n=i.illumination,l=`M50 30 A20 20 0 0 1 50 70 A${20*Math.abs(1-2*n)} 20 0 0 ${n>.5?1:0} 50 30Z`;return m`<section class="card tile wide2">${A("mdi:moon-waxing-gibbous",t?Pe(t):"Mond")}
    <div class="moon">
      <svg viewBox="28 28 44 44"><circle cx="50" cy="50" r="20" class="moon-dark"/>
        <path d=${l} class="moon-lit" transform=${r?"":"translate(100 0) scale(-1 1)"}/></svg>
      <div>
        <div class="row"><span>Beleuchtung</span><b>${Math.round(n*100)} %</b></div>
        <div class="row"><span>Vollmond</span><b>${s<=0?"heute":s===1?"morgen":`in ${s} Tg.`}</b></div>
      </div>
    </div></section>`}var Ue=C`
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
`;var Di="M18 46a10 10 0 0 1 0-20a14 14 0 0 1 27-3a11.5 11.5 0 0 1 1 23z",He=(a=32,e=32,t=11)=>y`
  <g class="sun">
    <circle cx=${a} cy=${e} r=${t} fill="#FFD84D"/>
    ${[0,45,90,135,180,225,270,315].map(i=>{let s=i*Math.PI/180,r=a+Math.cos(s)*(t+4),n=e+Math.sin(s)*(t+4),o=a+Math.cos(s)*(t+9),l=e+Math.sin(s)*(t+9);return y`<line x1=${r} y1=${n} x2=${o} y2=${l} stroke="#FFD84D" stroke-width="3.5" stroke-linecap="round"/>`})}
  </g>`,Xt=(a=0,e=0,t=1)=>y`
  <path class="mo" transform="translate(${a} ${e}) scale(${t})"
    d="M40 10a20 20 0 1 0 14 34A17 17 0 0 1 40 10z"/>`,N=(a=0,e=0,t=1,i="c1")=>y`
  <path transform="translate(${a} ${e}) scale(${t})" d=${Di} class=${i}/>`,At=a=>y`
  ${[...Array(a)].map((e,t)=>{let i=22+t*(20/Math.max(1,a-1));return y`<line x1=${i} y1="50" x2=${i-3} y2="58" stroke="#4FB3FF" stroke-width="3" stroke-linecap="round"/>`})}`,Ie=y`${[22,32,42].map((a,e)=>y`<circle cx=${a} cy=${e%2?57:53} r="2.6" class="fl"/>`)}`,Le=y`<path d="M34 44l-7 10h6l-3 9l10-13h-6l3-6z" fill="#FFD84D"/>`,Ai=y`${[40,47,54].map((a,e)=>y`<line x1=${12+e*3} y1=${a} x2=${52-e*2} y2=${a} class="ln" stroke-width="3.5" stroke-linecap="round"/>`)}`;function xt(a,e=!1){let t;switch(a){case"sunny":t=e?Xt(2,6,.95):He();break;case"clear-night":t=Xt(2,6,.95);break;case"partlycloudy":t=y`${e?Xt(10,-2,.7):He(42,22,9)}${N(-4,6,1)}`;break;case"cloudy":case"windy-variant":t=y`${N(10,-4,.75,"c2")}${N(-4,6)}`;break;case"fog":t=y`${N(0,-8,.95,"c2")}${Ai}`;break;case"rainy":t=y`${N(0,-6)}${At(3)}`;break;case"pouring":t=y`${N(0,-6,1,"c2")}${At(5)}`;break;case"hail":t=y`${N(0,-6,1,"c2")}${Ie}`;break;case"snowy":t=y`${N(0,-6)}${Ie}`;break;case"snowy-rainy":t=y`${N(0,-6)}${At(2)}<circle cx="32" cy="55" r="2.6" class="fl"/>`;break;case"lightning":t=y`${N(0,-8,1,"c2")}${Le}`;break;case"lightning-rainy":case"exceptional":t=y`${N(0,-8,1,"c2")}${Le}${At(2)}`;break;case"windy":t=y`${[24,32,40].map((i,s)=>y`<path d="M10 ${i}h${30-s*6}a6 6 0 1 0-6-6" fill="none" class="ln" stroke-width="3.5" stroke-linecap="round"/>`)}`;break;default:t=N(0,0,1,"c2")}return y`<svg class="wicon" viewBox="0 0 64 64" aria-hidden="true">${t}</svg>`}function Tt(a,e,t=Date.now()){let i=(a!=null?a:[]).filter(n=>n.temperature!=null).map(n=>({t:new Date(n.datetime).getTime(),v:n.temperature})),s=Ti(i,t),r=e!=null&&s!=null?e-s:0;return(n,o)=>{if(o==null||!r||n<=t)return o;let l=1-(n-t)/(3*36e5);return l>0?o+r*l:o}}function Ti(a,e){for(let t=0;t<a.length-1;t++){let i=a[t],s=a[t+1];if(i.t<=e&&e<=s.t)return i.v+(s.v-i.v)*(e-i.t)/(s.t-i.t||1)}if(a.length&&a[0].t>e&&a[0].t-e<=36e5)return a[0].v}var st=class extends z{constructor(){super(...arguments);this._tab="forecast";this._wide=!1;this._metric="temp";this.hourly=new vt(this,"hourly",()=>{var t;return(t=this._config)==null?void 0:t.weather});this.daily=new vt(this,"daily",()=>{var t;return(t=this._config)==null?void 0:t.weather})}setConfig(t){if(!(t!=null&&t.weather))throw new Error("`weather:` fehlt (z. B. weather.weather_fusion_ai_kresslingweg)");this._config={...t,sensors:{...t.sensors}}}static getStubConfig(t){var i;return{weather:(i=Object.keys(t.states).find(s=>s.startsWith("weather.")))!=null?i:""}}getCardSize(){return 12}getGridOptions(){return{columns:"full",rows:"auto"}}connectedCallback(){var t;super.connectedCallback(),(t=this._ro)!=null||(this._ro=new ResizeObserver(i=>{let s=i[0].contentRect.width>=820;s!==this._wide&&(this._wide=s)})),this._ro.observe(this)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._ro)==null||t.disconnect()}shouldUpdate(t){if(t.size>1||!t.has("hass"))return!0;let i=t.get("hass");return!i||!this.hass||!this._config?!0:this.watchedIds().some(s=>i.states[s]!==this.hass.states[s])}watchedIds(){var i;let t=this._config;return[t.weather,t.sun,t.moon,...Object.values((i=t.sensors)!=null?i:{})].filter(Boolean)}updated(){this._tab==="forecast"&&this.loadRecent()}loadRecent(){var n;let t=(n=this._config.sensors)!=null?n:{},i=[t.rain_total,t.pressure].filter(Boolean);if(!this.hass||!i.length)return;let s=Math.ceil(Date.now()/3e5)*3e5,r=String(s);r!==this._recentKey&&(this._recentKey=r,et(this.hass,{ids:i,start:new Date(s-864e5),end:new Date(s),period:"hour",types:["mean","change"]}).then(o=>r===this._recentKey&&(this._recent=o),()=>this._recentKey=void 0))}openDetail(t,i=this._metric){this._metric=i,this._detail=t}render(){var o,l,c,p,h;if(!this._config||!this.hass)return b;let t=this.hass.states[this._config.weather];if(!t)return m`<div class="warn">Entität ${this._config.weather} nicht gefunden.</div>`;let i=this._config.sun?((o=this.hass.states[this._config.sun])==null?void 0:o.state)==="below_horizon":!1,s=(l=this._config.sensors)!=null?l:{},r=(c=R(this.hass,s.temperature))!=null?c:t.attributes.temperature,n=(p=this.daily.forecast)==null?void 0:p[0];return m`
      <div class="app ${this._wide?"wide":""} ${(h=this.hass.themes)!=null&&h.darkMode?"dark":""} ${this._config.layout==="page"?"page":""}"
        style="--wa-tint:${Ce(t.state,i)}">
        <header>
          ${this._config.name?m`<div class="place">${this._config.name}</div>`:b}
          <div class="now">${T(r)}</div>
          <div class="cond">${bt(t.state)}</div>
          ${n?m`<div class="hl">H: ${T(n.temperature)}  T: ${T(n.templow)}</div>`:b}
        </header>

        <nav class="tabs" role="tablist">
          ${["forecast","history"].map(u=>m`
            <button role="tab" aria-selected=${this._tab===u} class=${this._tab===u?"on":""}
              @click=${()=>this._tab=u}>
              <ha-icon icon=${u==="forecast"?"mdi:calendar-arrow-right":"mdi:chart-line"}></ha-icon>
              ${u==="forecast"?"Vorhersage":"Historie"}
            </button>`)}
        </nav>

        <main>${this._tab==="forecast"?this.renderForecast(r,i):m`<wetter-app-history .hass=${this.hass} .config=${this._config} .wide=${this._wide}></wetter-app-history>`}</main>
      </div>
    `}renderForecast(t,i){var r,n;let s=(r=this.hourly.error)!=null?r:this.daily.error;return m`
      ${s?m`<div class="warn">Vorhersage nicht verfügbar: ${s}</div>`:b}
      <div class="cols">
        <section class="card">${this.renderHourly(t,i)}</section>
        <section class="card">${this.renderDaily(t)}</section>
      </div>
      ${Oe({hass:this.hass,config:this._config,hourly:this.hourly.forecast,recent:this._recent})}
      ${this._detail!=null&&this.daily.forecast?m`<wetter-app-day-detail .hass=${this.hass} .config=${this._config} .hourly=${(n=this.hourly.forecast)!=null?n:[]}
            .daily=${this.daily.forecast} .index=${this._detail} .metric=${this._metric}
            @close=${()=>this._detail=void 0}
            @select=${o=>this._detail=o.detail.index}
            @metric=${o=>this._metric=o.detail.metric}></wetter-app-day-detail>`:b}
    `}renderHourly(t,i){let s=this.hourly.forecast;if(!s)return m`<div class="loading">Lade Stundenvorhersage …</div>`;let r=Date.now()-36e5,n=s.filter(l=>new Date(l.datetime).getTime()>r).slice(0,25),o=Tt(s,t);return m`
      ${A("mdi:clock-outline","St\xFCndlich")}
      <div class="hours">
        ${n.map((l,c)=>{var p;return m`
          <div class="hr" @click=${()=>this.openDetail(0,"temp")}>
            <div class="t">${c===0?"Jetzt":Ne(new Date(l.datetime))}</div>
            ${xt(l.condition,c===0?i:l.is_daytime===!1)}
            <div class="p">${((p=l.precipitation_probability)!=null?p:0)>=20?`${Math.round(l.precipitation_probability)} %`:""}</div>
            <div class="v">${T(c===0?t!=null?t:l.temperature:o(new Date(l.datetime).getTime(),l.temperature))}</div>
          </div>`})}
      </div>
    `}renderDaily(t){let i=this.daily.forecast;if(!i)return m`<div class="loading">Lade Tagesvorhersage …</div>`;let s=i.slice(0,10),r=Math.min(...s.map(c=>{var p,h;return(h=(p=c.templow)!=null?p:c.temperature)!=null?h:99})),n=Math.max(...s.map(c=>{var p;return(p=c.temperature)!=null?p:-99})),o=Math.max(1,n-r),l=c=>(c-r)/o*100;return m`
      ${A("mdi:calendar-week",`${s.length}-Tage-Vorhersage`)}
      ${s.map((c,p)=>{var $,w,v,f;let h=(w=($=c.templow)!=null?$:c.temperature)!=null?w:r,u=(v=c.temperature)!=null?v:h,d=Math.max(.5,l(u)-l(h)),g=`background-size:${100/d*100}% 100%;background-position:${d>=100?0:l(h)/(100-d)*100}% 0`;return m`
          <div class="day" role="button" tabindex="0" @click=${()=>this.openDetail(p)}
            @keydown=${S=>S.key==="Enter"&&this.openDetail(p)}>
            <div class="wd">${Fe(new Date(c.datetime))}</div>
            <div class="ic">
              ${xt(c.condition)}
              ${((f=c.precipitation_probability)!=null?f:0)>=20?m`<span class="p">${Math.round(c.precipitation_probability)} %</span>`:b}
            </div>
            <div class="lo">${T(h)}</div>
            <div class="bar">
              <div class="fill" style="left:${l(h)}%;right:${100-l(u)}%;${g}"></div>
              ${p===0&&t!=null?m`<div class="dot" style="left:${Math.min(100,Math.max(0,l(t)))}%"></div>`:b}
            </div>
            <div class="hi">${T(u)}</div>
          </div>`})}
    `}};st.properties={hass:{attribute:!1},_config:{state:!0},_tab:{state:!0},_wide:{state:!0},_detail:{state:!0},_metric:{state:!0},_recent:{state:!0}},st.styles=[it,Ue,C`
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
      .cols { display: grid; gap: 12px; }
      .wide .cols { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); align-items: start; }

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

    `];var D={l:6,r:38,t:18,b:22},rt=class extends z{constructor(){super(...arguments);this.start=0;this.end=0;this.series=[];this.ticks=[];this.markers=[];this.height=200;this.yUnit="";this.rightUnit="";this.timeFormat=t=>new Date(t).toLocaleString("de-DE");this._w=0}connectedCallback(){var t;super.connectedCallback(),(t=this._ro)!=null||(this._ro=new ResizeObserver(i=>{let s=Math.round(i[0].contentRect.width);s&&s!==this._w&&(this._w=s)})),this._ro.observe(this)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._ro)==null||t.disconnect()}willUpdate(t){(t.has("series")||t.has("start"))&&(this._hover=void 0)}x(t){let i=Math.max(1,this.end-this.start);return D.l+(t-this.start)/i*(this._w-D.l-D.r)}scale(t){var p;let i=[];for(let h of this.series)if(((p=h.axis)!=null?p:"left")===t){for(let u of h.points)u.v!=null&&i.push(u.v),u.v2!=null&&i.push(u.v2);h.type==="bar"&&i.push(0)}let s=t==="left"?this.yMin:0,r=t==="left"?this.yMax:this.rightMax;s==null&&(s=i.length?Math.min(...i):0),r==null&&(r=i.length?Math.max(...i):1),r-s<1e-9&&(r=s+1);let n=Ri((r-s)/4);t==="left"&&this.yMin==null&&(s=Math.floor(s/n)*n),t==="left"&&this.yMax==null&&(r=Math.ceil(r/n)*n),t==="right"&&this.rightMax==null&&(r=Math.ceil(r/n)*n);let o=this.height-D.t-D.b,l=h=>D.t+o-(h-s)/(r-s)*o,c=[];for(let h=s;h<=r+n/1e3;h+=n)c.push(Math.round(h*1e6)/1e6);return{y:l,ticks:c,lo:s,hi:r}}onPointer(t){let i=t.currentTarget.getBoundingClientRect(),s=t.clientX-i.left,r=this.start+(s-D.l)/(this._w-D.l-D.r)*(this.end-this.start),n;for(let o of this.series)for(let l of o.points){if(l.v==null)continue;let c=Et(o,l);(n==null||Math.abs(c-r)<Math.abs(n-r))&&(n=c)}this._hover=n}render(){var c,p,h,u;let t=this._w;if(!t||this.end<=this.start)return m`<div style="height:${this.height}px"></div>`;let i=this.scale("left"),r=this.series.some(d=>d.axis==="right")?this.scale("right"):void 0,n=this.height-D.b,o=[];this.now&&this.now>this.start&&this.now<this.end&&o.push(y`<rect x=${D.l} y=${D.t} width=${this.x(this.now)-D.l} height=${n-D.t} class="past"/>`);for(let d of i.ticks){let g=i.y(d);o.push(y`<line x1=${D.l} x2=${t-D.r} y1=${g} y2=${g} class="grid"/>`),o.push(y`<text x=${t-D.r+6} y=${g+4} class="ylab">${We(d)}${this.yUnit}</text>`)}if(r){let d=this.series.find(g=>g.axis==="right").color;for(let g of r.ticks)g!==0&&o.push(y`<text x=${D.l+3} y=${r.y(g)-3} class="rlab" style="fill:${d}">${We(g)}${this.rightUnit}</text>`)}for(let d of this.ticks){let g=this.x(d.t);g<D.l-1||g>t-D.r+1||(o.push(y`<line x1=${g} x2=${g} y1=${D.t} y2=${n} class="vgrid"/>`),o.push(y`<text x=${g+3} y=${this.height-6} class="xlab">${d.label}</text>`))}this.series.forEach((d,g)=>{var f,S;let $=d.axis==="right"&&r?r:i,w=d.points.filter(x=>x.v!=null).sort((x,M)=>x.t-M.t);if(!w.length)return;if(d.type==="bar"||d.type==="range"){let x=(f=d.barWidth)!=null?f:w.length>1?w[1].t-w[0].t:(this.end-this.start)/24,M=$.y(Math.max(0,$.lo));for(let _ of w){let E=_.t2!=null?_.t2-_.t:x,P=Math.max(1.5,Math.min(14,(this.x(this.start+E)-this.x(this.start))*.65)),F=this.x(_.t+E/2),X=$.y(_.v),q=d.type==="range"?$.y((S=_.v2)!=null?S:_.v):M,lt=Math.max(d.type==="range"?P:.5,Math.abs(q-X)),wt=Math.min(X,q)-(lt-Math.abs(q-X))/2;o.push(y`<rect x=${F-P/2} y=${wt} width=${P} height=${lt} rx=${d.type==="range"?P/2:2} style="fill:${d.color}"/>`)}return}if(d.type==="band"){let x=w.filter(_=>_.v2!=null).map(_=>[this.x(_.t),$.y(_.v2)]),M=w.map(_=>[this.x(_.t),$.y(_.v)]).reverse();x.length&&o.push(y`<path d=${nt(x)+" L"+nt(M).slice(1)+"Z"} style="fill:${d.color};fill-opacity:0.28"/>`);return}let v=w.map(x=>[this.x(x.t),$.y(x.v)]);if(d.type==="area"){let x=`g${g}`;o.push(y`
          <defs><linearGradient id=${x} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" style="stop-color:${d.color};stop-opacity:0.45"/>
            <stop offset="1" style="stop-color:${d.color};stop-opacity:0.04"/>
          </linearGradient></defs>
          <path d=${`${nt(v)} L${v[v.length-1][0]},${n} L${v[0][0]},${n}Z`} fill="url(#${x})"/>`)}if(d.dashUntil!=null&&w[0].t<d.dashUntil){let x=w.findIndex(E=>E.t>=d.dashUntil),M=x<0?v:v.slice(0,x+1),_=x<0?[]:v.slice(x);o.push(y`<path d=${nt(M)} class="ln" style="stroke:${d.color}" stroke-dasharray="5 5"/>`),_.length>1&&o.push(y`<path d=${nt(_)} class="ln" style="stroke:${d.color}"/>`)}else o.push(y`<path d=${nt(v)} class="ln" style="stroke:${d.color}" stroke-dasharray=${d.dashed?"4 4":"none"}/>`)});for(let d of this.markers){let g=this.x(d.t),$=i.y(d.v);o.push(y`<circle cx=${g} cy=${$} r="4" class="mk"/>`),o.push(y`<text x=${g} y=${$-9} class="mklab">${d.label}</text>`)}if(this.now&&this.now>this.start&&this.now<this.end){let d=this.x(this.now);o.push(y`<line x1=${d} x2=${d} y1=${D.t} y2=${n} class="nowl"/>`)}let l=b;if(this._hover!=null){let d=this._hover,g=this.x(d);o.push(y`<line x1=${g} x2=${g} y1=${D.t-6} y2=${n} class="hov"/>`);let $=[];for(let v of this.series){let f=Ei(v,d);if(!f||f.v==null||v.silent)continue;let S=v.axis==="right"&&r?r:i;(v.type==="line"||v.type==="area")&&o.push(y`<circle cx=${g} cy=${S.y(f.v)} r="4" style="fill:${v.color}" class="hdot"/>`);let x=(v.type==="band"||v.type==="range")&&f.v2!=null?`${k(f.v,(c=v.digits)!=null?c:1)} \u2013 ${k(f.v2,(p=v.digits)!=null?p:1)}`:k(f.v,(h=v.digits)!=null?h:1);$.push(`${v.label?v.label+" ":""}${x}${(u=v.unit)!=null?u:""}`)}let w=Math.min(Math.max(g,70),t-70);l=m`<div class="tip" style="left:${w}px"><b>${this.timeFormat(d)}</b>${$.map(v=>m`<span>${v}</span>`)}</div>`}return m`
      <div class="wrap">
        ${l}
        <svg width=${t} height=${this.height} @pointermove=${this.onPointer} @pointerdown=${this.onPointer}
          @pointerleave=${()=>this._hover=void 0}>${o}</svg>
      </div>
    `}};rt.properties={start:{type:Number},end:{type:Number},series:{attribute:!1},ticks:{attribute:!1},markers:{attribute:!1},now:{type:Number},height:{type:Number},yMin:{type:Number},yMax:{type:Number},yUnit:{type:String},rightMax:{type:Number},rightUnit:{type:String},timeFormat:{attribute:!1},_w:{state:!0},_hover:{state:!0}},rt.styles=C`
    :host { display: block; width: 100%; touch-action: pan-y; }
    .wrap { position: relative; }
    svg { display: block; overflow: visible; }
    .grid { stroke: var(--divider-color, rgba(127, 127, 127, 0.2)); stroke-width: 1; }
    .vgrid { stroke: var(--divider-color, rgba(127, 127, 127, 0.2)); stroke-dasharray: 2 3; }
    .ylab, .xlab { fill: var(--secondary-text-color); font-size: 11px; }
    .rlab { font-size: 10px; opacity: 0.85; }
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
  `;function Ei(a,e){var r;let t;for(let n of a.points)n.v!=null&&(!t||Math.abs(Et(a,n)-e)<Math.abs(Et(a,t)-e))&&(t=n);if(!t)return;let i=a.points,s=t.t2!=null?t.t2-t.t:(r=a.barWidth)!=null?r:i.length>1?Math.abs(i[1].t-i[0].t):1/0;return Math.abs(Et(a,t)-e)<=s/2+1?t:void 0}function Et(a,e){var s;if(a.type!=="bar"&&a.type!=="range")return e.t;let t=a.points,i=e.t2!=null?e.t2-e.t:(s=a.barWidth)!=null?s:t.length>1?t[1].t-t[0].t:0;return e.t+i/2}function Ri(a){let e=Math.pow(10,Math.floor(Math.log10(Math.max(a,1e-9)))),t=a/e;return(t<=1?1:t<=2?2:t<=2.5?2.5:t<=5?5:10)*e}function We(a){return Number.isInteger(a)?String(a):k(a,1)}function nt(a){let e=a.length;if(e===0)return"";if(e<3)return"M"+a.map(n=>`${n[0]},${n[1]}`).join(" L");let t=[],i=[],s=[];for(let n=0;n<e-1;n++)t[n]=a[n+1][0]-a[n][0],i[n]=t[n]?(a[n+1][1]-a[n][1])/t[n]:0;s[0]=i[0],s[e-1]=i[e-2];for(let n=1;n<e-1;n++)s[n]=i[n-1]*i[n]<=0?0:3*(t[n-1]+t[n])/((2*t[n]+t[n-1])/i[n-1]+(t[n]+2*t[n-1])/i[n]);let r=`M${a[0][0]},${a[0][1]}`;for(let n=0;n<e-1;n++){let o=t[n]/3;r+=` C${a[n][0]+o},${a[n][1]+o*s[n]} ${a[n+1][0]-o},${a[n+1][1]-o*s[n+1]} ${a[n+1][0]},${a[n+1][1]}`}return r}var Ve=[{id:"temp",label:"Temperatur",icon:"mdi:thermometer"},{id:"rain",label:"Niederschlag",icon:"mdi:weather-pouring"},{id:"wind",label:"Wind",icon:"mdi:weather-windy"}],U=36e5,Ci=["S","M","D","M","D","F","S"];function je(a){let e=new Date(a);return new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()}var at=class extends z{constructor(){super(...arguments);this.hourly=[];this.daily=[];this.index=0;this.metric="temp";this.onKey=t=>t.key==="Escape"&&this.close()}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey)}close(){this.dispatchEvent(new CustomEvent("close"))}willUpdate(t){(t.has("index")||t.has("hass"))&&this.loadPast()}loadPast(){var l,c;let t=(c=(l=this.config)==null?void 0:l.sensors)!=null?c:{},i=this.daily[this.index];if(!this.hass||!i)return;let s=je(i.datetime),r=Date.now();if(s>r)return;let n=Math.min(s+24*U,Math.ceil(r/3e5)*3e5),o=`${s}|${n}`;o!==this._pastKey&&(this._pastKey=o,et(this.hass,{ids:[t.temperature,t.rain_total,t.wind_speed,t.wind_gust].filter(Boolean),start:new Date(s),end:new Date(n),period:"hour",types:["mean","max","change"]}).then(p=>o===this._pastKey&&(this._past=p),()=>this._pastKey=void 0))}render(){let t=this.daily[this.index];if(!t)return b;let i=je(t.datetime),s=i+24*U,r=Date.now(),n=r>=i&&r<s,o=this.hourly.filter(c=>{let p=new Date(c.datetime).getTime();return p>=i&&p<=s}),l=new Date(i).toLocaleDateString("de-DE",{weekday:"long",day:"numeric",month:"long"});return m`
      <div class="backdrop" @click=${this.close}></div>
      <div class="sheet" role="dialog" aria-label="Tagesdetail">
        <div class="top">
          <button class="ib" aria-label="Schließen" @click=${this.close}><ha-icon icon="mdi:close"></ha-icon></button>
          <div class="ttl">${Ve.find(c=>c.id===this.metric).label}</div>
          <span style="width:40px"></span>
        </div>

        <div class="days">
          ${this.daily.map((c,p)=>{let h=new Date(c.datetime);return m`<button class=${p===this.index?"on":""} @click=${()=>this.select(p)}>
              <span class="l">${Ci[h.getDay()]}</span><span class="n">${h.getDate()}</span></button>`})}
        </div>
        <div class="date">${l}</div>

        <div class="chips">
          ${Ve.map(c=>m`<button class=${c.id===this.metric?"on":""}
            @click=${()=>this.setMetric(c.id)}><ha-icon icon=${c.icon}></ha-icon>${c.label}</button>`)}
        </div>

        <section class="card">
          ${this.renderSummary(t,o,n)}
          ${o.length?this.renderChart(i,s,o,n?r:void 0):m`<div class="hint">Für diesen Tag gibt es keine Stundenvorhersage.</div>`}
        </section>
      </div>
    `}select(t){this.dispatchEvent(new CustomEvent("select",{detail:{index:t}}))}setMetric(t){this.dispatchEvent(new CustomEvent("metric",{detail:{metric:t}}))}renderSummary(t,i,s){var c,p,h;let r=(c=this.config.sensors)!=null?c:{};if(this.metric==="temp"){let u=s?R(this.hass,r.temperature):void 0;return m`<div class="sum">
        <div class="sum-ic">${xt(t.condition)}</div>
        <div>
          <div class="big">${u!=null?T(u):bt(t.condition)}</div>
          <div class="sub">H: ${T(t.temperature)} · T: ${T(t.templow)}${u!=null?` \xB7 ${bt(t.condition)}`:""}</div>
        </div>
      </div>`}if(this.metric==="rain"){let u=s&&r.rain_total?this.pastRows(r.rain_total).reduce((g,$)=>{var w;return g+((w=$.change)!=null?w:0)},0):void 0,d=Math.max(0,...i.map(g=>{var $;return($=g.precipitation_probability)!=null?$:0}),(p=t.precipitation_probability)!=null?p:0);return m`<div class="sum">
        <div>
          <div class="big">${V((h=t.precipitation)!=null?h:i.reduce((g,$)=>{var w;return g+((w=$.precipitation)!=null?w:0)},0))}</div>
          <div class="sub">erwartet · Wahrscheinlichkeit bis ${Math.round(d)} %${u!=null?` \xB7 bisher gemessen ${V(u)}`:""}</div>
        </div>
      </div>`}let n=i.map(u=>u.wind_speed).filter(u=>u!=null),o=n.length?n.reduce((u,d)=>u+d,0)/n.length:t.wind_speed,l=r.wind_gust&&s?Math.max(...this.pastRows(r.wind_gust).map(u=>{var d;return(d=u.max)!=null?d:0}),0):void 0;return m`<div class="sum">
      <div>
        <div class="big">${k(o,0)} km/h <span class="dir">${Dt(t.wind_bearing)}</span></div>
        <div class="sub">Ø Vorhersage · max ${k(n.length?Math.max(...n):void 0,0)} km/h${l?` \xB7 st\xE4rkste B\xF6e heute ${k(l,0)} km/h`:""}</div>
      </div>
    </div>`}pastRows(t){var i,s;return(s=(i=this._past)==null?void 0:i[t])!=null?s:[]}renderChart(t,i,s,r){var w;let n=(w=this.config.sensors)!=null?w:{},o=s.map(v=>({t:new Date(v.datetime).getTime(),h:v})),l=r?o.filter(v=>v.t>=r-U):o,c=[0,6,12,18].map(v=>({t:t+v*U,label:`${String(v).padStart(2,"0")} Uhr`})),p=[],h=[],u="\xB0",d,g="",$;if(this.metric==="temp"){let v=n.temperature&&r?this.pastRows(n.temperature).map(_=>({t:_.start+U/2,v:_.mean})):[],f=r?R(this.hass,n.temperature):void 0,S=Tt(this.hourly,f),x=[...v,...f!=null?[{t:r,v:f}]:[],...l.filter(_=>!r||_.t>r).map(_=>({t:_.t,v:S(_.t,_.h.temperature)}))];p.push({type:"area",points:x,color:"var(--wa-temp, #4fc3f7)",dashUntil:r,label:"",unit:"\xB0",digits:1});let M=x.filter(_=>_.v!=null);if(M.length){let _=M.reduce((P,F)=>F.v>P.v?F:P),E=M.reduce((P,F)=>F.v<P.v?F:P);h.push({t:_.t,v:_.v,label:"H"},{t:E.t,v:E.v,label:"T"})}}else if(this.metric==="rain")u="",$=0,n.rain_total&&r&&p.push({type:"bar",points:this.pastRows(n.rain_total).map(v=>({t:v.start,v:v.change})),color:"var(--wa-rain-past, #1e6fb8)",barWidth:U,label:"gemessen",unit:" l/m\xB2",digits:1}),p.push({type:"bar",points:l.map(v=>{var f;return{t:v.t,v:(f=v.h.precipitation)!=null?f:0}}),color:"var(--wa-rain)",barWidth:U,label:"",unit:" l/m\xB2",digits:1}),p.push({type:"line",axis:"right",points:l.map(v=>({t:v.t+U/2,v:v.h.precipitation_probability})),color:"var(--wa-prob, #90caf9)",unit:" %",digits:0}),d=100,g=" %";else{u="",$=0;let v=n.wind_speed&&r?this.pastRows(n.wind_speed).map(x=>({t:x.start+U/2,v:x.mean})):[],f=r?R(this.hass,n.wind_speed):void 0,S=[...v,...f!=null?[{t:r,v:f}]:[],...l.filter(x=>!r||x.t>r).map(x=>({t:x.t,v:x.h.wind_speed}))];p.push({type:"area",points:S,color:"var(--wa-wind, #81c784)",dashUntil:r,label:"\xD8",unit:" km/h",digits:0}),n.wind_gust&&r&&p.push({type:"line",points:this.pastRows(n.wind_gust).map(x=>({t:x.start+U/2,v:x.max})),color:"var(--wa-gust, #ffb74d)",label:"B\xF6e",unit:" km/h",digits:0})}return m`
      <wetter-app-chart .start=${t} .end=${i} .series=${p} .ticks=${c} .markers=${h}
        .now=${r} .height=${220} .yUnit=${u} .yMin=${$} .rightMax=${d} .rightUnit=${g}
        .timeFormat=${v=>new Date(v).toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}>
      </wetter-app-chart>
      ${this.metric==="wind"?this.renderWindDirs(t,l):b}
      ${this.metric==="rain"?m`<div class="legend"><i style="background:var(--wa-rain)"></i>Menge pro Stunde
        <i class="ln" style="background:var(--wa-prob, #90caf9)"></i>Wahrscheinlichkeit${r?m`<i style="background:var(--wa-rain-past, #1e6fb8)"></i>gemessen`:b}</div>`:b}
    `}renderWindDirs(t,i){let s=i.filter(r=>new Date(r.t).getHours()%3===0);return m`<div class="dirs">
      ${s.map(r=>{var n;return m`<div style="left:calc(6px + (100% - 44px) * ${(r.t-t)/(24*U)})">
        <ha-icon icon="mdi:navigation" style="transform:rotate(${((n=r.h.wind_bearing)!=null?n:0)+180}deg)"></ha-icon>
        <span>${new Date(r.t).getHours()} Uhr</span></div>`})}
    </div>`}};at.properties={hass:{attribute:!1},config:{attribute:!1},hourly:{attribute:!1},daily:{attribute:!1},index:{type:Number},metric:{type:String},_past:{state:!0}},at.styles=[it,C`
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
    `];var qt=[{id:"day",label:"Tag"},{id:"7d",label:"7 Tage"},{id:"30d",label:"30 Tage"},{id:"month",label:"Monat"},{id:"year",label:"Jahr"}];var Pi=["Januar","Februar","M\xE4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];function zi(a){return new Date(a.getFullYear(),a.getMonth(),a.getDate())}function yt(a,e){return new Date(a.getFullYear(),a.getMonth(),a.getDate()+e)}function Be(a,e=!1){return a.toLocaleDateString("de-DE",e?{day:"2-digit",month:"2-digit",year:"numeric"}:{day:"2-digit",month:"2-digit"})}function Rt(a){return qt.some(e=>e.id===a)}function Ye(a,e=new Date){let t=zi(e),i=Math.min(0,Math.round(a.offset)),s,r,n,o;switch(a.preset){case"day":{s=yt(t,i),r=yt(s,1),n="hour",o=i===0?"Heute":i===-1?"Gestern":s.toLocaleDateString("de-DE",{weekday:"short",day:"2-digit",month:"2-digit"});break}case"7d":case"30d":{let c=a.preset==="7d"?7:30;r=yt(t,1+i*c),s=yt(r,-c),n=c===7?"hour":"day",o=i===0?`Letzte ${c} Tage`:`${Be(s)} \u2013 ${Be(yt(r,-1),!0)}`;break}case"month":{s=new Date(e.getFullYear(),e.getMonth()+i,1),r=new Date(s.getFullYear(),s.getMonth()+1,1),n="day",o=`${Pi[s.getMonth()]} ${s.getFullYear()}`;break}default:{s=new Date(e.getFullYear()+i,0,1),r=new Date(s.getFullYear()+1,0,1),n="month",o=String(s.getFullYear());break}}let l=r.getTime()>e.getTime();return l&&(r=new Date(Math.ceil(e.getTime()/3e5)*3e5)),{preset:a.preset,offset:i,start:s,end:r,period:n,label:o,live:l}}var Ct=new Map,Qt=new EventTarget,Ke="wetter-app:range:";function Fi(a,e){let t=e;try{let i=localStorage.getItem(Ke+a);Rt(i)&&(t=i)}catch{}return{preset:t,offset:0}}function Ni(a,e="7d"){let t=Ct.get(a);return t||(t=Fi(a,e),Ct.set(a,t)),t}function Oi(a,e){let t=Ct.get(a);if(Ct.set(a,e),(t==null?void 0:t.preset)!==e.preset)try{localStorage.setItem(Ke+a,e.preset)}catch{}Qt.dispatchEvent(new CustomEvent(a))}var Pt=class{constructor(e,t,i=()=>"7d"){this.host=e;this.groupOf=t;this.fallback=i;this.onChange=()=>this.host.requestUpdate();e.addController(this)}get state(){return Ni(this.groupOf(),this.fallback())}get range(){return Ye(this.state)}set(e){Oi(this.groupOf(),e)}hostConnected(){this.listen()}hostUpdated(){this.group!==this.groupOf()&&this.listen()}hostDisconnected(){this.group&&Qt.removeEventListener(this.group,this.onChange),this.group=void 0}listen(){this.hostDisconnected(),this.group=this.groupOf(),Qt.addEventListener(this.group,this.onChange)}};function Ge(a){let e=a.range;return m`
    <div class="range">
      <div class="chips" role="tablist">
        ${qt.map(t=>m`<button role="tab" aria-selected=${t.id===e.preset}
            class=${t.id===e.preset?"on":""}
            @click=${()=>a.set({preset:t.id,offset:0})}>${t.label}</button>`)}
      </div>
      <div class="nav">
        <button class="ib" aria-label="Zurück" @click=${()=>a.set({preset:e.preset,offset:e.offset-1})}>
          <ha-icon icon="mdi:chevron-left"></ha-icon>
        </button>
        <span>${e.label}</span>
        <button class="ib" aria-label="Vor" ?disabled=${e.offset>=0}
          @click=${()=>a.set({preset:e.preset,offset:e.offset+1})}>
          <ha-icon icon="mdi:chevron-right"></ha-icon>
        </button>
      </div>
    </div>
  `}var Je=C`
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
`;var $t=[{max:6,label:"1",color:"#4fc3f7"},{max:12,label:"2",color:"#4db6ac"},{max:20,label:"3",color:"#aed581"},{max:29,label:"4",color:"#ffd54f"},{max:39,label:"5",color:"#ffb74d"},{max:1/0,label:"6+",color:"#e57373"}],Ui=1,Ze=["N","NNO","NO","ONO","O","OSO","SO","SSO","S","SSW","SW","WSW","W","WNW","NW","NNW"];function Xe(a=[],e=[]){var v;let t=new Map(e.map(f=>[f.start,f.mean])),i=Ze.map(()=>$t.map(()=>0)),s=$t.map(()=>0),r=0,n=0;for(let f of a){let S=t.get(f.start);if(f.mean==null||S==null)continue;if(n++,S<Ui){r++;continue}let x=Math.round((f.mean%360+360)%360/22.5)%16,M=$t.findIndex(_=>S<_.max);i[x][M]++,s[M]++}if(!n)return m`<div class="hint">Keine Winddaten im Zeitraum.</div>`;let o=f=>f/n*100,l=Math.max(...i.map(f=>o(f.reduce((S,x)=>S+x,0))),1),c=(v=[2,5,10,20,25,50].find(f=>l/f<=4))!=null?v:50,p=Math.ceil(l/c)*c,h=14,u=92,d=f=>h+f/p*(u-h),g=(f,S,x)=>{let M=(f*22.5-9.5-90)*Math.PI/180,_=(f*22.5+9.5-90)*Math.PI/180,E=(P,F)=>`${100+P*Math.cos(F)},${100+P*Math.sin(F)}`;return`M${E(S,M)} L${E(x,M)} A${x} ${x} 0 0 1 ${E(x,_)} L${E(S,_)} A${S} ${S} 0 0 0 ${E(S,M)}Z`},$=[];for(let f=c;f<=p;f+=c)$.push(y`<circle cx="100" cy="100" r=${d(f)} class="ring"/>`),$.push(y`<text x=${100+d(f)*.71+2} y=${100+d(f)*.71+8} class="rl">${f} %</text>`);let w=i.flatMap((f,S)=>{let x=0;return f.map((M,_)=>{if(!M)return y``;let E=d(x);return x+=o(M),y`<path d=${g(S,E,d(x))} style="fill:${$t[_].color}"><title>${Ze[S]}: ${k(o(M),1)} %</title></path>`})});return m`
    <div class="rose">
      <svg viewBox="-12 -12 224 224">
        ${$}
        <line x1="100" y1="2" x2="100" y2="198" class="ring"/><line x1="2" y1="100" x2="198" y2="100" class="ring"/>
        ${w}
        <circle cx="100" cy="100" r=${h-1} class="calm"/>
        <text x="100" y="104" class="cv">${Math.round(o(r))} %</text>
        <text x="100" y="-2" class="cd">N</text><text x="100" y="212" class="cd">S</text>
        <text x="206" y="104" class="cd">O</text><text x="-6" y="104" class="cd">W</text>
      </svg>
      <div class="bft">
        <span class="bl">Beaufort</span>
        <span><i style="background:var(--wa-track)"></i>0 · ${Math.round(o(r))} %</span>
        ${$t.map((f,S)=>s[S]?m`<span><i style="background:${f.color}"></i>${f.label} · ${Math.round(o(s[S]))} %</span>`:"")}
      </div>
    </div>`}var qe=C`
  .rose { display: flex; flex-direction: column; align-items: center; gap: 8px; }
  .rose svg { width: 100%; max-width: 300px; }
  .ring { fill: none; stroke: var(--wa-divider); stroke-width: 0.8; }
  .rl { fill: var(--wa-text2); font-size: 7px; }
  .calm { fill: var(--ha-card-background, var(--card-background-color, #1c1c1c)); stroke: var(--wa-divider); }
  .cv { fill: var(--wa-text); font-size: 8px; font-weight: 600; text-anchor: middle; }
  .cd { fill: var(--wa-text2); font-size: 10px; font-weight: 600; text-anchor: middle; }
  .bft { display: flex; flex-wrap: wrap; gap: 4px 12px; justify-content: center; font-size: 12px; color: var(--wa-text2); }
  .bft i { display: inline-block; width: 10px; height: 10px; border-radius: 2px; margin-right: 4px; vertical-align: -1px; }
  .bft .bl { font-weight: 500; }
`;var Hi=[{id:"pressure",label:"Luftdruck",unit:" hPa",digits:1},{id:"humidity",label:"Feuchte",unit:" %",digits:0},{id:"solar",label:"Sonne",unit:" W/m\xB2",digits:0},{id:"uv",label:"UV",unit:"",digits:1}],te=["Jan","Feb","M\xE4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],Ii=["Januar","Februar","M\xE4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],ee=["So","Mo","Di","Mi","Do","Fr","Sa"],Li=864e5,Wi=.1,ot=class extends z{constructor(){super(...arguments);this.wide=!1;this._compare=!1;this._extra="pressure";this.range=new Pt(this,()=>{var t,i;return(i=(t=this.config)==null?void 0:t.sync_group)!=null?i:"default"},()=>{var t;return Rt((t=this.config)==null?void 0:t.default_range)?this.config.default_range:"7d"})}periods(t){return{main:t.preset==="day"||t.preset==="7d"?"hour":"day",rain:t.preset==="day"?"hour":"day",rose:"hour"}}updated(){this.load()}async load(){var l,c;if(!this.hass||!this.config)return;let t=this.range.range,i=(l=this.config.sensors)!=null?l:{},s=this.periods(t),r=`${t.start.getTime()}|${t.end.getTime()}|${this._compare}`;if(r===this._key)return;this._key=r,this._err=void 0;let n=p=>p.filter(Boolean),o=(p,h,u,d=t.start,g=t.end)=>et(this.hass,{ids:p,start:d,end:g,period:h,types:u});try{let p=new Date(t.start);p.setFullYear(p.getFullYear()-1);let h=new Date(t.end);h.setFullYear(h.getFullYear()-1);let[u,d,g,$,w]=await Promise.all([o(n([i.temperature,i.humidity,i.pressure,i.solar,i.uv,i.wind_speed,i.wind_gust]),s.main,["mean","min","max"]),o(n([i.rain_total]),s.rain,["change"]),o(n([i.wind_direction,s.rose!==s.main?i.wind_speed:void 0]),s.rose,["mean"]),this._compare?o(n([i.temperature]),s.main,["mean","min","max"],p,h):void 0,this._compare?o(n([i.rain_total]),s.rain,["change"],p,h):void 0]);if(r!==this._key)return;this._data={main:u,rain:d,dir:g,prev:this._compare?{...$,...w}:void 0}}catch(p){if(r!==this._key)return;this._err=(c=p==null?void 0:p.message)!=null?c:String(p),this._key=void 0}}render(){var c,p,h;if(!this.config)return b;let t=this.range.range,i=this._data,s=(c=this.config.sensors)!=null?c:{},r=t.preset!=="day",n=s.temperature&&(i==null?void 0:i.main[s.temperature])||[],o=(p=n.find(u=>u.mean!=null))==null?void 0:p.start,l=o!=null&&o-t.start.getTime()>2*Li?m`<div class="hint-inline"><ha-icon icon="mdi:information-outline"></ha-icon>Daten erst ab ${new Date(o).toLocaleDateString("de-DE")}</div>`:b;return m`
      <section class="card">
        ${Ge(this.range)}
        ${r?m`<div class="cmp"><button class=${this._compare?"on":""}
          @click=${()=>this._compare=!this._compare}><ha-icon icon="mdi:compare-horizontal"></ha-icon>Vorjahr vergleichen</button></div>`:b}
      </section>
      ${this._err?m`<div class="warn">Statistik nicht verfügbar: ${this._err}</div>`:b}
      ${i?!n.length&&!(s.rain_total&&((h=i.rain[s.rain_total])!=null&&h.length))?m`<div class="hint">Keine Daten in diesem Zeitraum.</div>`:m`
            ${l}
            ${this.renderSummary(t,i)}
            <div class="cols">
              ${this.renderTemp(t,i)}
              ${this.renderRain(t,i)}
            </div>
            ${t.preset==="year"?this.renderYearTable(t,i):b}
            <div class="cols">
              ${this.renderWind(t,i)}
              ${this.renderExtra(t,i)}
            </div>`:m`<div class="loading">Lade Historie …</div>`}
    `}rows(t,i,s){let r=i&&(t==null?void 0:t[i])||[];return s.preset==="year"?Qe(r):r}ticks(t){let i=[],s=t.start;if(t.preset==="day")for(let r of[0,6,12,18])i.push({t:new Date(s.getFullYear(),s.getMonth(),s.getDate(),r).getTime(),label:`${String(r).padStart(2,"0")} Uhr`});else if(t.preset==="7d")for(let r=0;r<7;r++){let n=new Date(s.getFullYear(),s.getMonth(),s.getDate()+r);i.push({t:n.getTime(),label:ee[n.getDay()]})}else if(t.preset==="30d")for(let r=0;r<30;r+=7){let n=new Date(s.getFullYear(),s.getMonth(),s.getDate()+r);i.push({t:n.getTime(),label:`${n.getDate()}.${n.getMonth()+1}.`})}else if(t.preset==="month")for(let r of[1,8,15,22,29])i.push({t:new Date(s.getFullYear(),s.getMonth(),r).getTime(),label:`${r}.`});else for(let r=0;r<12;r++)i.push({t:new Date(s.getFullYear(),r,1).getTime(),label:te[r]});return i}fmt(t,i){return s=>{let r=new Date(s);return t.preset==="year"&&i!=="hour"?`${Ii[r.getMonth()]}`:i==="hour"?`${ee[r.getDay()]} ${String(r.getHours()).padStart(2,"0")}:00`:`${ee[r.getDay()]}, ${r.getDate()}.${r.getMonth()+1}.`}}chart(t,i,s){var r,n;return m`<wetter-app-chart .start=${t.start.getTime()} .end=${t.end.getTime()} .series=${i}
      .ticks=${this.ticks(t)} .height=${(r=s.height)!=null?r:200} .yUnit=${(n=s.yUnit)!=null?n:""} .yMin=${s.yMin}
      .rightMax=${s.rightMax} .timeFormat=${this.fmt(t,t.preset==="year"?"month":s.period)}></wetter-app-chart>`}shift(t){return t.map(i=>{let s=new Date(i.start);s.setFullYear(s.getFullYear()+1);let r=new Date(i.end);return r.setFullYear(r.getFullYear()+1),{...i,start:s.getTime(),end:r.getTime()}})}renderSummary(t,i){var v;let s=(v=this.config.sensors)!=null?v:{},r=this.periods(t),n=s.temperature&&i.main[s.temperature]||[],o=se(n,"min",Math.min),l=se(n,"max",Math.max),c=ie(n.map(f=>f.mean)),p=s.rain_total&&i.rain[s.rain_total]||[],h=p.reduce((f,S)=>{var x;return f+((x=S.change)!=null?x:0)},0),u=p.filter(f=>{var S;return((S=f.change)!=null?S:0)>=Wi}).length,d=se(s.wind_gust&&i.main[s.wind_gust]||[],"max",Math.max),g=ie((s.wind_speed&&i.main[s.wind_speed]||[]).map(f=>f.mean)),$=ie((s.humidity&&i.main[s.humidity]||[]).map(f=>f.mean)),w=this.fmt({...t,preset:t.preset==="year"?"30d":t.preset},r.main);return m`<div class="grid">
      <section class="card kv">${A("mdi:thermometer","Temperatur")}
        <div class="big">${T(c,1)}</div><div class="sub">Durchschnitt</div>
        <div class="ext"><span>▲ ${T(l==null?void 0:l.v,1)}</span><small>${l?w(l.t):""}</small></div>
        <div class="ext"><span>▼ ${T(o==null?void 0:o.v,1)}</span><small>${o?w(o.t):""}</small></div>
      </section>
      <section class="card kv">${A("mdi:weather-pouring","Niederschlag")}
        <div class="big">${V(h)}</div><div class="sub">Summe</div>
        <div class="ext"><span>${u}</span><small>${r.rain==="hour"?"Stunden mit Regen":"Regentage (\u2265 0,1 l/m\xB2)"}</small></div>
      </section>
      <section class="card kv">${A("mdi:weather-windy","Wind")}
        <div class="big">${k(g,1)} km/h</div><div class="sub">Durchschnitt</div>
        <div class="ext"><span>${k(d==null?void 0:d.v,0)} km/h</span><small>stärkste Böe${d?` \xB7 ${w(d.t)}`:""}</small></div>
      </section>
      <section class="card kv">${A("mdi:water-percent","Luftfeuchte")}
        <div class="big">${k($,0)} %</div><div class="sub">Durchschnitt</div>
      </section>
    </div>`}renderTemp(t,i){var c,p;let s=(c=this.config.sensors)!=null?c:{},r=this.periods(t),n=this.rows(i.main,s.temperature,t),o=[],l=h=>h.start+(h.end-h.start)/2;if(r.main==="hour"?o.push({type:"band",points:n.map(h=>({t:l(h),v:h.min,v2:h.max})),color:"var(--wa-temp, #4fc3f7)",label:"",unit:"\xB0",digits:1}):o.push({type:"range",points:n.map(h=>({t:h.start,t2:h.end,v:h.min,v2:h.max})),color:"rgba(79, 195, 247, 0.55)",label:"",unit:"\xB0",digits:1}),o.push({type:"line",points:n.map(h=>({t:l(h),v:h.mean})),color:"var(--wa-temp-line, #ffb74d)",label:"\xD8",unit:"\xB0",digits:1}),i.prev&&s.temperature){let h=this.rows({x:this.shift((p=i.prev[s.temperature])!=null?p:[])},"x",t);o.push({type:"line",dashed:!0,points:h.map(u=>({t:l(u),v:u.mean})),color:"var(--wa-text2)",label:"Vorjahr \xD8",unit:"\xB0",digits:1})}return m`<section class="card">${A("mdi:thermometer","Temperatur")}
      ${this.chart(t,o,{yUnit:"\xB0",period:r.main})}
      <div class="legend"><i style="background:#4fc3f7"></i>Min–Max<i class="ln" style="background:#ffb74d"></i>Durchschnitt
        ${i.prev?m`<i class="ln dash"></i>Vorjahr`:b}</div>
    </section>`}renderRain(t,i){var c,p;let s=(c=this.config.sensors)!=null?c:{};if(!s.rain_total)return b;let r=this.periods(t),n=this.rows(i.rain,s.rain_total,t),o=h=>{let u=0;return h.map(d=>{var g;return{t:Math.min(d.end,t.end.getTime()),v:u+=(g=d.change)!=null?g:0}})},l=[{type:"bar",points:n.map(h=>{var u;return{t:h.start,t2:h.end,v:(u=h.change)!=null?u:0}}),color:"var(--wa-rain)",label:"",unit:" l/m\xB2",digits:1},{type:"line",axis:"right",points:[{t:t.start.getTime(),v:0},...o(n)],color:"var(--wa-prob, #90caf9)",label:"Summe",unit:" l/m\xB2",digits:1}];if(i.prev){let h=this.rows({x:this.shift((p=i.prev[s.rain_total])!=null?p:[])},"x",t);h.length&&l.push({type:"line",axis:"right",dashed:!0,points:[{t:t.start.getTime(),v:0},...o(h)],color:"var(--wa-text2)",label:"Vorjahr",unit:" l/m\xB2",digits:1})}return m`<section class="card">${A("mdi:weather-pouring","Niederschlag")}
      ${this.chart(t,l,{yMin:0,period:r.rain})}
      <div class="legend"><i style="background:var(--wa-rain)"></i>${r.rain==="hour"?"pro Stunde":t.preset==="year"?"pro Monat":"pro Tag"}
        <i class="ln" style="background:var(--wa-prob, #90caf9)"></i>Summe (rechte Skala)${i.prev?m`<i class="ln dash"></i>Vorjahr`:b}</div>
    </section>`}renderWind(t,i){var u;let s=(u=this.config.sensors)!=null?u:{};if(!s.wind_speed)return b;let r=this.periods(t),n=s.wind_direction&&i.dir[s.wind_direction]||[],o=(r.rose===r.main?i.main[s.wind_speed]:i.dir[s.wind_speed])||[],l=this.rows(i.main,s.wind_speed,t),c=this.rows(i.main,s.wind_gust,t),p=d=>d.start+(d.end-d.start)/2,h=[{type:"line",points:l.map(d=>({t:p(d),v:d.mean})),color:"var(--wa-wind, #81c784)",label:"\xD8",unit:" km/h",digits:1},...c.length?[{type:"line",points:c.map(d=>({t:p(d),v:d.max})),color:"var(--wa-gust, #ffb74d)",label:"B\xF6e",unit:" km/h",digits:0}]:[]];return m`<section class="card">${A("mdi:weather-windy","Wind")}
      ${s.wind_direction?Xe(n,o):b}
      ${this.chart(t,h,{yMin:0,period:r.main,height:160})}
      <div class="legend"><i class="ln" style="background:#81c784"></i>Durchschnitt<i class="ln" style="background:#ffb74d"></i>stärkste Böe</div>
    </section>`}renderExtra(t,i){var h,u;let s=(h=this.config.sensors)!=null?h:{},r=Hi.filter(d=>s[d.id]);if(!r.length)return b;let n=(u=r.find(d=>d.id===this._extra))!=null?u:r[0],o=this.periods(t),l=this.rows(i.main,s[n.id],t),c=d=>d.start+(d.end-d.start)/2,p=[{type:"band",points:l.map(d=>({t:c(d),v:d.min,v2:d.max})),color:"var(--wa-accent)",unit:n.unit,digits:n.digits},{type:"line",points:l.map(d=>({t:c(d),v:d.mean})),color:"var(--wa-accent)",label:"\xD8",unit:n.unit,digits:n.digits}];return m`<section class="card">${A("mdi:chart-bell-curve-cumulative","Weitere Werte")}
      <div class="chips small">${r.map(d=>m`<button class=${d===n?"on":""} @click=${()=>this._extra=d.id}>${d.label}</button>`)}</div>
      ${this.chart(t,p,{period:o.main,yMin:n.id==="pressure"?void 0:0})}
      <div class="legend"><i class="ln" style="background:var(--wa-accent)"></i>Durchschnitt<i style="background:var(--wa-accent);opacity:.3"></i>Min–Max</div>
    </section>`}renderYearTable(t,i){var h,u;let s=(h=this.config.sensors)!=null?h:{},r=this.rows(i.main,s.temperature,t),n=this.rows(i.rain,s.rain_total,t),o=i.prev&&s.rain_total?Qe(this.shift((u=i.prev[s.rain_total])!=null?u:[])):[],l=[...Array(12)].map((d,g)=>new Date(t.start.getFullYear(),g,1).getTime()),c=(d,g)=>d.find($=>$.start===g),p=Math.max(1,...n.map(d=>{var g;return(g=d.change)!=null?g:0}),...o.map(d=>{var g;return(g=d.change)!=null?g:0}));return m`<section class="card">${A("mdi:table",`Monate ${t.start.getFullYear()}`)}
      <table class="months">
        <thead><tr><th></th><th>Ø</th><th>Min</th><th>Max</th><th class="rc">Niederschlag</th></tr></thead>
        <tbody>${l.map((d,g)=>{var f,S;let $=c(r,d),w=c(n,d),v=c(o,d);return!$&&!w?m`<tr class="empty"><td>${te[g]}</td><td colspan="4">–</td></tr>`:m`<tr>
            <td>${te[g]}</td><td>${T($==null?void 0:$.mean,1)}</td><td class="cold">${T($==null?void 0:$.min,1)}</td><td class="warm">${T($==null?void 0:$.max,1)}</td>
            <td class="rc"><div class="rcell"><div class="rbar"><i style="width:${((f=w==null?void 0:w.change)!=null?f:0)/p*100}%"></i>
              ${v?m`<b style="left:${((S=v.change)!=null?S:0)/p*100}%" title="Vorjahr"></b>`:b}</div>
              <span>${k(w==null?void 0:w.change,0)}</span></div></td></tr>`})}</tbody>
      </table>
    </section>`}};ot.properties={hass:{attribute:!1},config:{attribute:!1},wide:{type:Boolean,reflect:!0},_data:{state:!0},_err:{state:!0},_compare:{state:!0},_extra:{state:!0}},ot.styles=[it,Je,qe,C`
      :host { display: flex; flex-direction: column; gap: 12px; }
      .cols, .grid { display: grid; gap: 12px; }
      :host([wide]) .cols { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); align-items: start; }
      .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      :host([wide]) .grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
      .kv .big { font-size: 26px; font-weight: 600; margin-top: 4px; }
      .kv .sub { font-size: 12px; color: var(--wa-text2); margin-bottom: 6px; }
      .ext { display: flex; align-items: baseline; gap: 6px; font-size: 14px; flex-wrap: wrap; }
      .ext span { font-weight: 500; }
      .ext small { color: var(--wa-text2); font-size: 12px; }
      .cmp { display: flex; justify-content: center; margin-top: 8px; }
      .cmp button, .chips.small button {
        display: flex; align-items: center; gap: 6px; border: 1px solid var(--wa-divider); background: none;
        color: var(--wa-text); font: inherit; font-size: 13px; padding: 5px 12px; border-radius: 16px; cursor: pointer;
      }
      .cmp ha-icon { --mdc-icon-size: 16px; }
      .cmp button.on, .chips.small button.on {
        border-color: transparent; color: var(--wa-accent); font-weight: 500; background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.18);
      }
      .chips.small { display: flex; gap: 6px; flex-wrap: wrap; margin: 4px 0 8px; }
      .legend { display: flex; flex-wrap: wrap; align-items: center; gap: 6px 12px; font-size: 12px; color: var(--wa-text2); margin-top: 6px; }
      .legend i { display: inline-block; width: 10px; height: 10px; border-radius: 2px; margin-right: -6px; }
      .legend i.ln { height: 3px; }
      .legend i.dash { height: 0; border-top: 2px dashed var(--wa-text2); background: none; }
      .hint-inline { display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--wa-text2); justify-content: center; }
      .hint-inline ha-icon { --mdc-icon-size: 16px; }
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
      .rbar b { position: absolute; top: -3px; bottom: -3px; width: 2px; background: var(--wa-text2); }
      .rcell span { min-width: 30px; }
    `];function ie(a){let e=a.filter(t=>t!=null);return e.length?e.reduce((t,i)=>t+i,0)/e.length:void 0}function se(a,e,t){let i;for(let s of a){let r=s[e];r!=null&&(!i||t(r,i.v)===r&&r!==i.v)&&(i={t:s.start,v:r})}return i}function Qe(a){var t;let e=new Map;for(let i of a){let s=new Date(i.start),r=new Date(s.getFullYear(),s.getMonth(),1).getTime(),n=e.get(r);n||(n={start:r,end:new Date(s.getFullYear(),s.getMonth()+1,1).getTime(),min:null,max:null,mean:null,change:null,_n:0,_sum:0},e.set(r,n)),i.min!=null&&(n.min=n.min==null?i.min:Math.min(n.min,i.min)),i.max!=null&&(n.max=n.max==null?i.max:Math.max(n.max,i.max)),i.mean!=null&&(n._sum+=i.mean,n._n++,n.mean=n._sum/n._n),i.change!=null&&(n.change=((t=n.change)!=null?t:0)+i.change)}return[...e.values()].sort((i,s)=>i.start-s.start)}var ti=[["wetter-app",st,"Wetter-App","Komplette Wetter-App mit Vorhersage und Historie"]],Vi=[["wetter-app-chart",rt],["wetter-app-day-detail",at],["wetter-app-history",ot]];for(let[a,e]of[...Vi,...ti])customElements.get(a)||customElements.define(a,e);var zt=window;zt.customCards=zt.customCards||[];for(let[a,,e,t]of ti)zt.customCards.some(i=>i.type===a)||zt.customCards.push({type:a,name:e,description:t,preview:!1});console.info("%c WETTER-APP %c 0.1.0 ","background:#2f6fc4;color:#fff;border-radius:3px 0 0 3px","background:#555;color:#fff;border-radius:0 3px 3px 0");
