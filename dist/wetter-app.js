var Ut=globalThis,Nt=Ut.ShadowRoot&&(Ut.ShadyCSS===void 0||Ut.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,me=Symbol(),Le=new WeakMap,Et=class{constructor(i,t,e){if(this._$cssResult$=!0,e!==me)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=t}get styleSheet(){let i=this.o,t=this.t;if(Nt&&i===void 0){let e=t!==void 0&&t.length===1;e&&(i=Le.get(t)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),e&&Le.set(t,i))}return i}toString(){return this.cssText}},Ke=r=>new Et(typeof r=="string"?r:r+"",void 0,me),E=(r,...i)=>{let t=r.length===1?r[0]:i.reduce((e,n,a)=>e+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+r[a+1],r[0]);return new Et(t,r,me)},je=(r,i)=>{if(Nt)r.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of i){let e=document.createElement("style"),n=Ut.litNonce;n!==void 0&&e.setAttribute("nonce",n),e.textContent=t.cssText,r.appendChild(e)}},ge=Nt?r=>r:r=>r instanceof CSSStyleSheet?(i=>{let t="";for(let e of i.cssRules)t+=e.cssText;return Ke(t)})(r):r;var{is:Zi,defineProperty:qi,getOwnPropertyDescriptor:Xi,getOwnPropertyNames:tn,getOwnPropertySymbols:en,getPrototypeOf:nn}=Object,et=globalThis,Ge=et.trustedTypes,sn=Ge?Ge.emptyScript:"",fe=et.reactiveElementPolyfillSupport,Rt=(r,i)=>r,xe={toAttribute(r,i){switch(i){case Boolean:r=r?sn:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,i){let t=r;switch(i){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Je=(r,i)=>!Zi(r,i),Qe={attribute:!0,type:String,converter:xe,reflect:!1,useDefault:!1,hasChanged:Je},We,Ye;(We=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(Ye=et.litPropertyMetadata)!=null||(et.litPropertyMetadata=new WeakMap);var W=class extends HTMLElement{static addInitializer(i){var t;this._$Ei(),((t=this.l)!=null?t:this.l=[]).push(i)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(i,t=Qe){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(i)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(i,t),!t.noAccessor){let e=Symbol(),n=this.getPropertyDescriptor(i,e,t);n!==void 0&&qi(this.prototype,i,n)}}static getPropertyDescriptor(i,t,e){var s;let{get:n,set:a}=(s=Xi(this.prototype,i))!=null?s:{get(){return this[t]},set(l){this[t]=l}};return{get:n,set(l){let o=n==null?void 0:n.call(this);a==null||a.call(this,l),this.requestUpdate(i,o,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(i){var t;return(t=this.elementProperties.get(i))!=null?t:Qe}static _$Ei(){if(this.hasOwnProperty(Rt("elementProperties")))return;let i=nn(this);i.finalize(),i.l!==void 0&&(this.l=[...i.l]),this.elementProperties=new Map(i.elementProperties)}static finalize(){if(this.hasOwnProperty(Rt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Rt("properties"))){let t=this.properties,e=[...tn(t),...en(t)];for(let n of e)this.createProperty(n,t[n])}let i=this[Symbol.metadata];if(i!==null){let t=litPropertyMetadata.get(i);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[t,e]of this.elementProperties){let n=this._$Eu(t,e);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(i){let t=[];if(Array.isArray(i)){let e=new Set(i.flat(1/0).reverse());for(let n of e)t.unshift(ge(n))}else i!==void 0&&t.push(ge(i));return t}static _$Eu(i,t){let e=t.attribute;return e===!1?void 0:typeof e=="string"?e:typeof i=="string"?i.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var i;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(i=this.constructor.l)==null||i.forEach(t=>t(this))}addController(i){var t,e;((t=this._$EO)!=null?t:this._$EO=new Set).add(i),this.renderRoot!==void 0&&this.isConnected&&((e=i.hostConnected)==null||e.call(i))}removeController(i){var t;(t=this._$EO)==null||t.delete(i)}_$E_(){let i=new Map,t=this.constructor.elementProperties;for(let e of t.keys())this.hasOwnProperty(e)&&(i.set(e,this[e]),delete this[e]);i.size>0&&(this._$Ep=i)}createRenderRoot(){var t;let i=(t=this.shadowRoot)!=null?t:this.attachShadow(this.constructor.shadowRootOptions);return je(i,this.constructor.elementStyles),i}connectedCallback(){var i,t;(i=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostConnected)==null?void 0:n.call(e)})}enableUpdating(i){}disconnectedCallback(){var i;(i=this._$EO)==null||i.forEach(t=>{var e;return(e=t.hostDisconnected)==null?void 0:e.call(t)})}attributeChangedCallback(i,t,e){this._$AK(i,e)}_$ET(i,t){var a;let e=this.constructor.elementProperties.get(i),n=this.constructor._$Eu(i,e);if(n!==void 0&&e.reflect===!0){let s=(((a=e.converter)==null?void 0:a.toAttribute)!==void 0?e.converter:xe).toAttribute(t,e.type);this._$Em=i,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(i,t){var a,s,l;let e=this.constructor,n=e._$Eh.get(i);if(n!==void 0&&this._$Em!==n){let o=e.getPropertyOptions(n),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((a=o.converter)==null?void 0:a.fromAttribute)!==void 0?o.converter:xe;this._$Em=n;let d=c.fromAttribute(t,o.type);this[n]=(l=d!=null?d:(s=this._$Ej)==null?void 0:s.get(n))!=null?l:d,this._$Em=null}}requestUpdate(i,t,e,n=!1,a){var s,l;if(i!==void 0){let o=this.constructor;if(n===!1&&(a=this[i]),e!=null||(e=o.getPropertyOptions(i)),!(((s=e.hasChanged)!=null?s:Je)(a,t)||e.useDefault&&e.reflect&&a===((l=this._$Ej)==null?void 0:l.get(i))&&!this.hasAttribute(o._$Eu(i,e))))return;this.C(i,t,e)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(i,t,{useDefault:e,reflect:n,wrapped:a},s){var l,o,c;e&&!((l=this._$Ej)!=null?l:this._$Ej=new Map).has(i)&&(this._$Ej.set(i,(o=s!=null?s:t)!=null?o:this[i]),a!==!0||s!==void 0)||(this._$AL.has(i)||(this.hasUpdated||e||(t=void 0),this._$AL.set(i,t)),n===!0&&this._$Em!==i&&((c=this._$Eq)!=null?c:this._$Eq=new Set).add(i))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let i=this.scheduleUpdate();return i!=null&&await i,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e,n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[s,l]of this._$Ep)this[s]=l;this._$Ep=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[s,l]of a){let{wrapped:o}=l,c=this[s];o!==!0||this._$AL.has(s)||c===void 0||this.C(s,void 0,l,c)}}let i=!1,t=this._$AL;try{i=this.shouldUpdate(t),i?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(a=>{var s;return(s=a.hostUpdate)==null?void 0:s.call(a)}),this.update(t)):this._$EM()}catch(a){throw i=!1,this._$EM(),a}i&&this._$AE(t)}willUpdate(i){}_$AE(i){var t;(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostUpdated)==null?void 0:n.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(i)),this.updated(i)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(i){return!0}update(i){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(i){}firstUpdated(i){}},Ve;W.elementStyles=[],W.shadowRootOptions={mode:"open"},W[Rt("elementProperties")]=new Map,W[Rt("finalized")]=new Map,fe==null||fe({ReactiveElement:W}),((Ve=et.reactiveElementVersions)!=null?Ve:et.reactiveElementVersions=[]).push("2.1.2");var Ht=globalThis,Ze=r=>r,Lt=Ht.trustedTypes,qe=Lt?Lt.createPolicy("lit-html",{createHTML:r=>r}):void 0,we="$lit$",Y=`lit$${Math.random().toFixed(9).slice(2)}$`,ye="?"+Y,rn=`<${ye}>`,dt=document,zt=()=>dt.createComment(""),It=r=>r===null||typeof r!="object"&&typeof r!="function",$e=Array.isArray,ri=r=>$e(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",be=`[ 	
\f\r]`,Bt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Xe=/-->/g,ti=/>/g,lt=RegExp(`>|${be}(?:([^\\s"'>=/]+)(${be}*=${be}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ei=/'/g,ii=/"/g,ai=/^(?:script|style|textarea|title)$/i,Ae=r=>(i,...t)=>({_$litType$:r,strings:i,values:t}),u=Ae(1),w=Ae(2),ts=Ae(3),V=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),ni=new WeakMap,ct=dt.createTreeWalker(dt,129);function oi(r,i){if(!$e(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return qe!==void 0?qe.createHTML(i):i}var li=(r,i)=>{let t=r.length-1,e=[],n,a=i===2?"<svg>":i===3?"<math>":"",s=Bt;for(let l=0;l<t;l++){let o=r[l],c,d,h=-1,m=0;for(;m<o.length&&(s.lastIndex=m,d=s.exec(o),d!==null);)m=s.lastIndex,s===Bt?d[1]==="!--"?s=Xe:d[1]!==void 0?s=ti:d[2]!==void 0?(ai.test(d[2])&&(n=RegExp("</"+d[2],"g")),s=lt):d[3]!==void 0&&(s=lt):s===lt?d[0]===">"?(s=n!=null?n:Bt,h=-1):d[1]===void 0?h=-2:(h=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?lt:d[3]==='"'?ii:ei):s===ii||s===ei?s=lt:s===Xe||s===ti?s=Bt:(s=lt,n=void 0);let p=s===lt&&r[l+1].startsWith("/>")?" ":"";a+=s===Bt?o+rn:h>=0?(e.push(c),o.slice(0,h)+we+o.slice(h)+Y+p):o+Y+(h===-2?l:p)}return[oi(r,a+(r[t]||"<?>")+(i===2?"</svg>":i===3?"</math>":"")),e]},Pt=class r{constructor({strings:i,_$litType$:t},e){let n;this.parts=[];let a=0,s=0,l=i.length-1,o=this.parts,[c,d]=li(i,t);if(this.el=r.createElement(c,e),ct.currentNode=this.el.content,t===2||t===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(n=ct.nextNode())!==null&&o.length<l;){if(n.nodeType===1){if(n.hasAttributes())for(let h of n.getAttributeNames())if(h.endsWith(we)){let m=d[s++],p=n.getAttribute(h).split(Y),f=/([.?@])?(.*)/.exec(m);o.push({type:1,index:a,name:f[2],strings:p,ctor:f[1]==="."?jt:f[1]==="?"?Gt:f[1]==="@"?Qt:ht}),n.removeAttribute(h)}else h.startsWith(Y)&&(o.push({type:6,index:a}),n.removeAttribute(h));if(ai.test(n.tagName)){let h=n.textContent.split(Y),m=h.length-1;if(m>0){n.textContent=Lt?Lt.emptyScript:"";for(let p=0;p<m;p++)n.append(h[p],zt()),ct.nextNode(),o.push({type:2,index:++a});n.append(h[m],zt())}}}else if(n.nodeType===8)if(n.data===ye)o.push({type:2,index:a});else{let h=-1;for(;(h=n.data.indexOf(Y,h+1))!==-1;)o.push({type:7,index:a}),h+=Y.length-1}a++}}static createElement(i,t){let e=dt.createElement("template");return e.innerHTML=i,e}};function pt(r,i,t=r,e){var s,l,o;if(i===V)return i;let n=e!==void 0?(s=t._$Co)==null?void 0:s[e]:t._$Cl,a=It(i)?void 0:i._$litDirective$;return(n==null?void 0:n.constructor)!==a&&((l=n==null?void 0:n._$AO)==null||l.call(n,!1),a===void 0?n=void 0:(n=new a(r),n._$AT(r,t,e)),e!==void 0?((o=t._$Co)!=null?o:t._$Co=[])[e]=n:t._$Cl=n),n!==void 0&&(i=pt(r,n._$AS(r,i.values),n,e)),i}var Kt=class{constructor(i,t){this._$AV=[],this._$AN=void 0,this._$AD=i,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(i){var c;let{el:{content:t},parts:e}=this._$AD,n=((c=i==null?void 0:i.creationScope)!=null?c:dt).importNode(t,!0);ct.currentNode=n;let a=ct.nextNode(),s=0,l=0,o=e[0];for(;o!==void 0;){if(s===o.index){let d;o.type===2?d=new bt(a,a.nextSibling,this,i):o.type===1?d=new o.ctor(a,o.name,o.strings,this,i):o.type===6&&(d=new Wt(a,this,i)),this._$AV.push(d),o=e[++l]}s!==(o==null?void 0:o.index)&&(a=ct.nextNode(),s++)}return ct.currentNode=dt,n}p(i){let t=0;for(let e of this._$AV)e!==void 0&&(e.strings!==void 0?(e._$AI(i,e,t),t+=e.strings.length-2):e._$AI(i[t])),t++}},bt=class r{get _$AU(){var i,t;return(t=(i=this._$AM)==null?void 0:i._$AU)!=null?t:this._$Cv}constructor(i,t,e,n){var a;this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=i,this._$AB=t,this._$AM=e,this.options=n,this._$Cv=(a=n==null?void 0:n.isConnected)!=null?a:!0}get parentNode(){let i=this._$AA.parentNode,t=this._$AM;return t!==void 0&&(i==null?void 0:i.nodeType)===11&&(i=t.parentNode),i}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(i,t=this){i=pt(this,i,t),It(i)?i===v||i==null||i===""?(this._$AH!==v&&this._$AR(),this._$AH=v):i!==this._$AH&&i!==V&&this._(i):i._$litType$!==void 0?this.$(i):i.nodeType!==void 0?this.T(i):ri(i)?this.k(i):this._(i)}O(i){return this._$AA.parentNode.insertBefore(i,this._$AB)}T(i){this._$AH!==i&&(this._$AR(),this._$AH=this.O(i))}_(i){this._$AH!==v&&It(this._$AH)?this._$AA.nextSibling.data=i:this.T(dt.createTextNode(i)),this._$AH=i}$(i){var a;let{values:t,_$litType$:e}=i,n=typeof e=="number"?this._$AC(i):(e.el===void 0&&(e.el=Pt.createElement(oi(e.h,e.h[0]),this.options)),e);if(((a=this._$AH)==null?void 0:a._$AD)===n)this._$AH.p(t);else{let s=new Kt(n,this),l=s.u(this.options);s.p(t),this.T(l),this._$AH=s}}_$AC(i){let t=ni.get(i.strings);return t===void 0&&ni.set(i.strings,t=new Pt(i)),t}k(i){$e(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,e,n=0;for(let a of i)n===t.length?t.push(e=new r(this.O(zt()),this.O(zt()),this,this.options)):e=t[n],e._$AI(a),n++;n<t.length&&(this._$AR(e&&e._$AB.nextSibling,n),t.length=n)}_$AR(i=this._$AA.nextSibling,t){var e;for((e=this._$AP)==null?void 0:e.call(this,!1,!0,t);i!==this._$AB;){let n=Ze(i).nextSibling;Ze(i).remove(),i=n}}setConnected(i){var t;this._$AM===void 0&&(this._$Cv=i,(t=this._$AP)==null||t.call(this,i))}},ht=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(i,t,e,n,a){this.type=1,this._$AH=v,this._$AN=void 0,this.element=i,this.name=t,this._$AM=n,this.options=a,e.length>2||e[0]!==""||e[1]!==""?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=v}_$AI(i,t=this,e,n){let a=this.strings,s=!1;if(a===void 0)i=pt(this,i,t,0),s=!It(i)||i!==this._$AH&&i!==V,s&&(this._$AH=i);else{let l=i,o,c;for(i=a[0],o=0;o<a.length-1;o++)c=pt(this,l[e+o],t,o),c===V&&(c=this._$AH[o]),s||(s=!It(c)||c!==this._$AH[o]),c===v?i=v:i!==v&&(i+=(c!=null?c:"")+a[o+1]),this._$AH[o]=c}s&&!n&&this.j(i)}j(i){i===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,i!=null?i:"")}},jt=class extends ht{constructor(){super(...arguments),this.type=3}j(i){this.element[this.name]=i===v?void 0:i}},Gt=class extends ht{constructor(){super(...arguments),this.type=4}j(i){this.element.toggleAttribute(this.name,!!i&&i!==v)}},Qt=class extends ht{constructor(i,t,e,n,a){super(i,t,e,n,a),this.type=5}_$AI(i,t=this){var s;if((i=(s=pt(this,i,t,0))!=null?s:v)===V)return;let e=this._$AH,n=i===v&&e!==v||i.capture!==e.capture||i.once!==e.once||i.passive!==e.passive,a=i!==v&&(e===v||n);n&&this.element.removeEventListener(this.name,this,e),a&&this.element.addEventListener(this.name,this,i),this._$AH=i}handleEvent(i){var t,e;typeof this._$AH=="function"?this._$AH.call((e=(t=this.options)==null?void 0:t.host)!=null?e:this.element,i):this._$AH.handleEvent(i)}},Wt=class{constructor(i,t,e){this.element=i,this.type=6,this._$AN=void 0,this._$AM=t,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(i){pt(this,i)}},ci={M:we,P:Y,A:ye,C:1,L:li,R:Kt,D:ri,V:pt,I:bt,H:ht,N:Gt,U:Qt,B:jt,F:Wt},ve=Ht.litHtmlPolyfillSupport,si;ve==null||ve(Pt,bt),((si=Ht.litHtmlVersions)!=null?si:Ht.litHtmlVersions=[]).push("3.3.3");var di=(r,i,t)=>{var a,s;let e=(a=t==null?void 0:t.renderBefore)!=null?a:i,n=e._$litPart$;if(n===void 0){let l=(s=t==null?void 0:t.renderBefore)!=null?s:null;e._$litPart$=n=new bt(i.insertBefore(zt(),l),l,void 0,t!=null?t:{})}return n._$AI(r),n};var ut=globalThis,z=class extends W{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!=null||(t.renderBefore=i.firstChild),i}update(i){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Do=di(t,this.renderRoot,this.renderOptions)}connectedCallback(){var i;super.connectedCallback(),(i=this._$Do)==null||i.setConnected(!0)}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this._$Do)==null||i.setConnected(!1)}render(){return V}},pi;z._$litElement$=!0,z.finalized=!0,(pi=ut.litElementHydrateSupport)==null||pi.call(ut,{LitElement:z});var ke=ut.litElementPolyfillSupport;ke==null||ke({LitElement:z});var hi;((hi=ut.litElementVersions)!=null?hi:ut.litElementVersions=[]).push("4.2.2");var it=class{constructor(i,t,e){this.host=i;this.type=t;this.entity=e;this.connected=!1;i.addController(this)}hostConnected(){this.connected=!0,this.sync()}hostDisconnected(){this.connected=!1,this.stop()}hostUpdated(){this.sync()}sync(){let i=this.host.hass,t=this.entity();if(!this.connected||!i||!t)return;let e=`${t}|${this.type}`;e!==this.subscribedKey&&(this.stop(),this.subscribedKey=e,this.error=void 0,this.unsub=i.connection.subscribeMessage(n=>{var a;this.forecast=(a=n.forecast)!=null?a:[],this.host.requestUpdate()},{type:"weather/subscribe_forecast",forecast_type:this.type,entity_id:t}),this.unsub.catch(n=>{var a;this.error=(a=n==null?void 0:n.message)!=null?a:String(n),this.subscribedKey=void 0,this.host.requestUpdate()}))}stop(){let i=this.unsub;this.unsub=void 0,this.subscribedKey=void 0,i==null||i.then(t=>t()).catch(()=>{})}};var mt=new Map;function J(r,i){let t=i.ids.filter(Boolean);if(!t.length)return Promise.resolve({});let e=JSON.stringify([t,i.start.getTime(),i.end.getTime(),i.period,i.types]),n=Date.now(),a=mt.get(e);if(a&&a.expires>n)return a.promise;let s=r.callWS({type:"recorder/statistics_during_period",start_time:i.start.toISOString(),end_time:i.end.toISOString(),statistic_ids:t,period:i.period,types:i.types}).then(an),l={promise:s,expires:i.end.getTime()<n?1/0:n+3e5};return mt.set(e,l),s.catch(()=>mt.get(e)===l&&mt.delete(e)),mt.size>60&&mt.delete(mt.keys().next().value),s}function an(r){for(let i of Object.values(r))for(let t of i)typeof t.start!="number"&&(t.start=new Date(t.start).getTime()),typeof t.end!="number"&&(t.end=new Date(t.end).getTime());return r}var R=(r,i)=>u`<div class="head"><ha-icon icon=${r}></ha-icon><span>${i}</span></div>`,nt=E`
  :host {
    --wa-text: var(--primary-text-color);
    --wa-text2: var(--secondary-text-color);
    --wa-divider: var(--divider-color, rgba(127, 127, 127, 0.2));
    --wa-accent: var(--primary-color);
    --wa-rain: var(--blue-color, #2196f3);
    --wa-track: rgba(127, 127, 127, 0.22);
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
    padding-bottom: 8px; margin-bottom: 4px; border-bottom: 1px solid var(--wa-divider);
  }
  .head ha-icon { --mdc-icon-size: 18px; color: var(--state-icon-color, var(--wa-text2)); flex: none; }
  /* lange Titel in schmalen Kacheln (z. B. „Sonnenuntergang“) kürzen statt über den Rand laufen */
  .head span { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

  .wicon { display: block; }
  .wicon .c1 { fill: var(--wa-cloud); }
  .wicon .c2 { fill: var(--wa-cloud2); }
  .wicon .mo { fill: var(--wa-moon); }
  .wicon .ln { stroke: var(--wa-cloud2); }
  .wicon .fl { fill: var(--wa-cloud2); }

  .warn {
    background: rgba(var(--rgb-warning-color, 255, 166, 0), 0.15); color: var(--wa-text);
    border-radius: var(--ha-card-border-radius, 12px); padding: 10px 14px; font-size: 14px;
  }
  .loading, .hint { color: var(--wa-text2); text-align: center; padding: 16px; font-size: 14px; }
`;function gt(r){return u`<div class="legend">${r.filter(Boolean).map(i=>{var t,e;return u`<span><i class=${(t=i.kind)!=null?t:"box"}
    style="background:${i.color};opacity:${(e=i.opacity)!=null?e:1}"></i>${i.label}</span>`})}</div>`}var Yt=E`
  .legend { display: flex; flex-wrap: wrap; align-items: center; gap: 6px 14px; font-size: 12px; color: var(--wa-text2); margin-top: 8px; }
  .legend span { display: inline-flex; align-items: center; gap: 6px; white-space: nowrap; }
  .legend i { display: inline-block; width: 10px; height: 10px; border-radius: 2px; flex: none; }
  .legend i.line { height: 3px; }
`;var K=Math.PI/180;function _e(r,i,t){let e=new Date(r.getFullYear(),r.getMonth(),r.getDate(),12),a=Math.round((e.getTime()-Date.UTC(2e3,0,1,12))/864e5)-t/360,s=(357.5291+.98560028*a)%360,l=1.9148*Math.sin(s*K)+.02*Math.sin(2*s*K)+3e-4*Math.sin(3*s*K),o=(s+l+180+102.9372)%360,c=a+.0053*Math.sin(s*K)-.0069*Math.sin(2*o*K),d=Math.asin(Math.sin(o*K)*Math.sin(23.4397*K)),h=(Math.sin(-.833*K)-Math.sin(i*K)*Math.sin(d))/(Math.cos(i*K)*Math.cos(d));if(h<-1||h>1)return;let m=Math.acos(h)/K/360,p=f=>new Date(Date.UTC(2e3,0,1,12)+f*864e5);return{rise:p(c-m),set:p(c+m),noon:p(c)}}var ft=29.530588853,on=Date.UTC(2e3,0,6,18,14);function ui(r){let t=((r.getTime()-on)/864e5%ft+ft)%ft,e=(1-Math.cos(t/ft*2*Math.PI))/2,n=(ft/2-t+ft)%ft;return{age:t,illumination:e,nextFull:new Date(r.getTime()+n*864e5)}}var ln={"clear-night":"Klar",cloudy:"Bew\xF6lkt",exceptional:"Unwetter",fog:"Nebel",hail:"Hagel",lightning:"Gewitter","lightning-rainy":"Gewitter mit Regen",partlycloudy:"Teilweise bew\xF6lkt",pouring:"Starkregen",rainy:"Regnerisch",snowy:"Schnee","snowy-rainy":"Schneeregen",sunny:"Sonnig",windy:"Windig","windy-variant":"Windig und bew\xF6lkt"};function xt(r){return r&&ln[r]||"\u2013"}var mi={sunny:"47,128,237",partlycloudy:"70,130,200",cloudy:"120,135,150","windy-variant":"120,135,150",rainy:"75,110,155",pouring:"65,95,140",hail:"90,100,125",snowy:"160,180,205","snowy-rainy":"130,150,175",fog:"150,155,160",lightning:"85,80,125","lightning-rainy":"85,80,125",exceptional:"150,70,70",windy:"100,140,170"},cn="35,50,100";function Vt(r,i,t=i?.35:.45){return`rgba(${i&&(r==="sunny"||r==="clear-night"||r==="partlycloudy")?cn:r&&mi[r]||mi.cloudy},${t})`}var dn={new_moon:"Neumond",waxing_crescent:"Zunehmende Sichel",first_quarter:"Erstes Viertel",waxing_gibbous:"Zunehmender Mond",full_moon:"Vollmond",waning_gibbous:"Abnehmender Mond",last_quarter:"Letztes Viertel",waning_crescent:"Abnehmende Sichel"};function gi(r){return r&&dn[r]||"\u2013"}var fi="data:image/jpeg;base64,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";var xi=new Map;function S(r,i=1){if(r==null||!isFinite(r))return"\u2013";let t=xi.get(i);return t||(t=new Intl.NumberFormat("de-DE",{minimumFractionDigits:i,maximumFractionDigits:i}),xi.set(i,t)),t.format(r)}var M=(r,i=0)=>r==null?"\u2013":`${S(r,i)}\xB0`,st=(r,i=1)=>`${S(r,i)} l/m\xB2`;function C(r,i){let t=i?r==null?void 0:r.states[i]:void 0;if(!t)return;let e=parseFloat(t.state);return isFinite(e)?e:void 0}var pn=["So","Mo","Di","Mi","Do","Fr","Sa"];function Ft(r,i=new Date){return r.toDateString()===i.toDateString()?"Heute":pn[r.getDay()]}function Jt(r){return`${String(r.getHours()).padStart(2,"0")} Uhr`}function Zt(r){return r.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}var hn=["N","NO","O","SO","S","SW","W","NW"];function vt(r){return r==null||!isFinite(r)?"\u2013":hn[Math.round((r%360+360)%360/45)%8]}function bi(r){return u`<div class="tiles">
    ${gn(r)} ${un(r)} ${fn(r)} ${xn(r)} ${bn(r)} ${wn(r)} ${yn(r)} ${$n(r)}
  </div>`}function un({hass:r,config:i}){var s;let t=(s=i.sensors)!=null?s:{},e=C(r,t.feels_like);if(e==null)return v;let n=C(r,t.temperature),a=n==null?"":e<n-1?"Durch den Wind f\xFChlt es sich k\xE4lter an.":e>n+1?"Durch die Luftfeuchtigkeit f\xFChlt es sich w\xE4rmer an.":"\xC4hnlich wie die tats\xE4chliche Temperatur.";return u`<section class="card tile">${R("mdi:thermometer-lines","Gef\xFChlt")}
    <div class="val">${M(e)}</div>
    ${n!=null?u`<div class="lbl">Tatsächlich: ${M(n)}</div>${mn(e,n)}`:v}
    <div class="txt">${a}</div></section>`}function mn(r,i){let t=Math.round(r-i),e=Math.max(14,Math.abs(r-i)/.5),n=t<0?r-.32*e:t>0?r+.32*e-e:i-e/2,a=l=>(l-n)/e*100,s=t<0?"#6ec6f0":"#ffb74d";return u`<div class="fbar">
    ${t!==0?u`<i class="fseg" style="left:${a(Math.min(r,i))}%;width:${a(Math.max(r,i))-a(Math.min(r,i))}%;background:${s}"></i>
      <b class="fpill" style="left:${a(r)}%;background:${s};transform:translateX(${t<0?"-100%":"0"})">${t<0?"\u2193":"\u2191"}${Math.abs(t)}°</b>`:v}
    <i class="ftick" style="left:${a(i)}%"></i>
  </div>`}function gn({hass:r,config:i}){var l;let t=(l=i.sensors)!=null?l:{},e=C(r,t.wind_speed);if(e==null)return v;let n=C(r,t.wind_gust),a=C(r,t.wind_direction),s=[...Array(72)].map((o,c)=>{let d=c*5*Math.PI/180,h=c%18===0?38:41;return w`<line x1=${50+Math.sin(d)*h} y1=${50-Math.cos(d)*h} x2=${50+Math.sin(d)*45} y2=${50-Math.cos(d)*45} class=${c%18===0?"tk major":"tk"}/>`});return u`<section class="card tile wide2">${R("mdi:weather-windy","Wind")}
    <div class="wind">
      <div class="rows">
        <div class="row"><span>Wind</span><b>${S(e,0)} km/h</b></div>
        ${n!=null?u`<div class="row"><span>Böen</span><b>${S(n,0)} km/h</b></div>`:v}
        ${a!=null?u`<div class="row"><span>Richtung</span><b>${S(a,0)}° ${vt(a)}</b></div>`:v}
      </div>
      <svg class="compass" viewBox="0 0 100 100">
        ${s}
        ${["N","O","S","W"].map((o,c)=>w`<text x=${50+Math.sin(c*Math.PI/2)*30} y=${54-Math.cos(c*Math.PI/2)*30} class="cl">${o}</text>`)}
        ${a!=null?w`<g transform="rotate(${a+180} 50 50)">
          <line x1="50" y1="88" x2="50" y2="18" class="arrow"/><path d="M50 10l-6 11h12z" class="arrowhead"/>
          <circle cx="50" cy="88" r="3.5" class="arrowhead"/></g>`:v}
        <circle cx="50" cy="50" r="17" class="hub"/>
        <text x="50" y="50" class="cv">${S(e,0)}</text><text x="50" y="60" class="cu">km/h</text>
      </svg>
    </div></section>`}function fn({hass:r,config:i,hourly:t,recent:e}){var c;let n=(c=i.sensors)!=null?c:{};if(!n.rain_total&&!t)return v;let a=n.rain_total&&(e!=null&&e[n.rain_total])?e[n.rain_total].reduce((d,h)=>{var m;return d+((m=h.change)!=null?m:0)},0):void 0,s=Date.now(),l=t==null?void 0:t.filter(d=>{let h=new Date(d.datetime).getTime();return h>=s-36e5&&h<s+23*36e5}).reduce((d,h)=>{var m;return d+((m=h.precipitation)!=null?m:0)},0),o=C(r,n.rain_rate);return u`<section class="card tile">${R("mdi:water","Niederschlag")}
    <div class="val">${a!=null?st(a):"\u2013"}</div>
    <div class="lbl">in den letzten 24 Std.</div>
    <div class="txt">${o?u`Aktuell ${S(o)} l/m² pro Std.<br>`:v}
      ${l!=null?`${st(l)} in den n\xE4chsten 24 Std. erwartet.`:""}</div></section>`}function xn({hass:r,config:i,recent:t}){var h;let e=(h=i.sensors)!=null?h:{},n=C(r,e.pressure);if(n==null)return v;let a=e.pressure?t==null?void 0:t[e.pressure]:void 0,s=a&&a.length>=3?a[a.length-3].mean:void 0,l=s!=null?n-s:void 0,o=l==null?"":l>1?"steigend":l<-1?"fallend":"gleichbleibend",c=l==null?0:Math.max(-1,Math.min(1,l/4))*120,d=[...Array(41)].map((m,p)=>{let f=(-120+p*6)*Math.PI/180;return w`<line x1=${50+Math.sin(f)*36} y1=${54-Math.cos(f)*36} x2=${50+Math.sin(f)*44} y2=${54-Math.cos(f)*44} class="tk"/>`});return u`<section class="card tile">${R("mdi:gauge","Luftdruck")}
    <svg class="gauge" viewBox="0 0 100 92">
      ${d}
      <g transform="rotate(${c} 50 54)"><line x1="50" y1="6" x2="50" y2="20" class="needle"/></g>
      <text x="50" y="52" class="gv">${S(n,0)}</text><text x="50" y="64" class="gu">hPa</text>
      <text x="16" y="90" class="gu">−</text><text x="84" y="90" class="gu">+</text>
    </svg>
    <div class="txt">${o?u`3 Std.: ${o} (${l>0?"+":""}${S(l,1)} hPa)`:v}</div></section>`}function bn({hass:r,config:i}){var a;let t=(a=i.sensors)!=null?a:{},e=C(r,t.humidity);if(e==null)return v;let n=C(r,t.dewpoint);return u`<section class="card tile">${R("mdi:water-percent","Feuchtigkeit")}
    <div class="val">${S(e,0)} %</div>
    <div class="hbar"><i style="width:${Math.max(0,Math.min(100,e))}%"></i></div>
    <div class="txt">${n!=null?`Der Taupunkt liegt derzeit bei ${M(n)}.`:""}</div></section>`}var vn=[[3,"Niedrig"],[6,"Mittel"],[8,"Hoch"],[11,"Sehr hoch"],[99,"Extrem"]];function wn({hass:r,config:i}){var s;let t=(s=i.sensors)!=null?s:{},e=C(r,t.uv);if(e==null)return v;let n=C(r,t.solar),a=vn.find(([l])=>e<l)[1];return u`<section class="card tile">${R("mdi:sun-wireless","UV-Index")}
    <div class="val">${S(e,0)}</div><div class="lbl">${a}</div>
    <div class="uvbar"><i style="left:${Math.min(100,e/11*100)}%"></i></div>
    <div class="txt">${n!=null?`Sonneneinstrahlung ${S(n,0)} W/m\xB2`:""}</div></section>`}function yn({hass:r,config:i}){var I,P,U,q,X,tt,O,at,Ct;let t=(I=r.states[i.weather])==null?void 0:I.attributes,e=i.sun?r.states[i.sun]:void 0,n=(U=t==null?void 0:t.latitude)!=null?U:(P=r.config)==null?void 0:P.latitude,a=(X=t==null?void 0:t.longitude)!=null?X:(q=r.config)==null?void 0:q.longitude;if(n==null||a==null)return v;let s=new Date,l=_e(s,n,a);if(!l)return v;let o=F=>F&&new Date(F).toDateString()===s.toDateString()?new Date(F):void 0,c=(tt=o(e==null?void 0:e.attributes.next_rising))!=null?tt:l.rise,d=(O=o(e==null?void 0:e.attributes.next_setting))!=null?O:l.set,h=s<d,m=s<c?["Sonnenaufgang",c]:h?["Sonnenuntergang",d]:["Sonnenaufgang",(Ct=(at=_e(new Date(s.getTime()+864e5),n,a))==null?void 0:at.rise)!=null?Ct:c],p=new Date(s.getFullYear(),s.getMonth(),s.getDate()).getTime(),f=F=>(F.getTime()-p)/864e5,b=(f(c)+f(d))/2,y=f(d)-f(c),x=F=>Math.cos(2*Math.PI*(F-b)),A=Math.cos(Math.PI*y),T=F=>34-F*22,k=[...Array(49)].map((F,ot)=>`${ot?"L":"M"}${ot/48*100},${T(x(ot/48))}`).join(" "),H=f(s),_=s>=c&&s<d;return u`<section class="card tile">${R(_?"mdi:weather-sunset-down":"mdi:weather-sunset-up",m[0])}
    <div class="val">${Zt(m[1])}</div>
    <div class="sunarc">
      <svg viewBox="0 0 100 60" preserveAspectRatio="none">
        <path d=${k} class="sunpath"/>
        <line x1="0" x2="100" y1=${T(A)} y2=${T(A)} class="hz"/>
      </svg>
      <!-- Punkt als HTML, sonst verzerrt preserveAspectRatio=none ihn zur Ellipse -->
      <i class=${_?"sundot":"sundot down"} style="left:${H*100}%;top:${T(x(H))/60*100}%"></i>
    </div>
    <div class="txt">${m[0]==="Sonnenuntergang"?`Sonnenaufgang: ${Zt(c)}`:`Sonnenuntergang: ${Zt(d)}`}</div>
  </section>`}function $n({hass:r,config:i}){var s;let t=i.moon?(s=r.states[i.moon])==null?void 0:s.state:void 0,e=ui(new Date),n=Math.round((e.nextFull.getTime()-Date.now())/864e5),a=e.illumination;return u`<section class="card tile wide2 moont">${R("mdi:moon-waxing-gibbous",t?gi(t):"Mond")}
    <div class="moon">
      <div>
        <div class="row"><span>Beleuchtung</span><b>${Math.round(a*100)} %</b></div>
        <div class="row"><span>Nächster Vollmond</span><b>${n<=0?"heute":n===1?"morgen":`in ${n} Tg.`}</b></div>
      </div>
      ${An(a,e.age<29.530588853/2)}
    </div></section>`}function An(r,i){let a=`M50 30 A20 20 0 0 0 50 70 A${20*Math.abs(1-2*r)} 20 0 0 ${r>.5?1:0} 50 30Z`;return w`<svg class="moonimg" viewBox="28 28 44 44" aria-hidden="true">
    <defs>
      <filter id="ms" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="0.6"/></filter>
      <clipPath id="mc"><circle cx=${50} cy=${50} r=${20}/></clipPath>
    </defs>
    <g clip-path="url(#mc)">
      <image href=${fi} x=${30} y=${30} width=${40} height=${40}/>
      ${r<.995?w`<path d=${a} fill="#05070c" fill-opacity="0.88" filter="url(#ms)"
        transform=${i?"":"translate(100 0) scale(-1 1)"}/>`:v}
    </g>
  </svg>`}var vi=E`
  /* so viele Spalten wie passen (Handy 2, Tablet/PC 3–6) → keine riesigen, halbleeren Kacheln */
  /* min(…, 50 %): auch auf sehr schmalen Handys immer 2 Spalten — breite Kacheln (span 2) sprengen sonst das Raster */
  .tiles { display: grid; grid-template-columns: repeat(auto-fill, minmax(165px, 1fr)); gap: 12px; }
  .tiles { grid-template-columns: repeat(auto-fill, minmax(min(165px, calc(50% - 6px)), 1fr)); } /* alte Browser ohne min(): Zeile davor */
  .tile { display: flex; flex-direction: column; }
  .tile.wide2 { grid-column: span 2; }
  .tile .val { font-size: 28px; font-weight: 600; line-height: 1.2; margin-top: 2px; }
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

  .fbar { position: relative; height: 18px; margin-top: 10px; }
  .fbar::before { content: ""; position: absolute; left: 0; right: 0; top: 7px; height: 4px; border-radius: 2px; background: var(--wa-track); }
  .fseg { position: absolute; top: 7px; height: 4px; }
  .fpill {
    position: absolute; top: 0; padding: 0 7px; border-radius: 9px;
    font-size: 12px; line-height: 18px; font-weight: 600; color: #10202c; white-space: nowrap;
  }
  .ftick { position: absolute; top: 2px; width: 3px; height: 14px; margin-left: -1.5px; border-radius: 2px; background: var(--wa-text); }
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
`;var kn="M18 46a10 10 0 0 1 0-20a14 14 0 0 1 27-3a11.5 11.5 0 0 1 1 23z",wi=(r=32,i=32,t=11)=>w`
  <g class="sun">
    <circle cx=${r} cy=${i} r=${t} fill="#FFD84D"/>
    ${[0,45,90,135,180,225,270,315].map(e=>{let n=e*Math.PI/180,a=r+Math.cos(n)*(t+4),s=i+Math.sin(n)*(t+4),l=r+Math.cos(n)*(t+9),o=i+Math.sin(n)*(t+9);return w`<line x1=${a} y1=${s} x2=${l} y2=${o} stroke="#FFD84D" stroke-width="3.5" stroke-linecap="round"/>`})}
  </g>`,Se=(r=0,i=0,t=1)=>w`
  <path class="mo" transform="translate(${r} ${i}) scale(${t})"
    d="M40 10a20 20 0 1 0 14 34A17 17 0 0 1 40 10z"/>`,N=(r=0,i=0,t=1,e="c1")=>w`
  <path transform="translate(${r} ${i}) scale(${t})" d=${kn} class=${e}/>`,qt=r=>w`
  ${[...Array(r)].map((i,t)=>{let e=22+t*(20/Math.max(1,r-1));return w`<line x1=${e} y1="50" x2=${e-3} y2="58" stroke="#4FB3FF" stroke-width="3" stroke-linecap="round"/>`})}`,yi=w`${[22,32,42].map((r,i)=>w`<circle cx=${r} cy=${i%2?57:53} r="2.6" class="fl"/>`)}`,$i=w`<path d="M34 44l-7 10h6l-3 9l10-13h-6l3-6z" fill="#FFD84D"/>`,_n=w`${[40,47,54].map((r,i)=>w`<line x1=${12+i*3} y1=${r} x2=${52-i*2} y2=${r} class="ln" stroke-width="3.5" stroke-linecap="round"/>`)}`;function Z(r,i=!1){let t;switch(r){case"sunny":t=i?Se(2,6,.95):wi();break;case"clear-night":t=Se(2,6,.95);break;case"partlycloudy":t=w`${i?Se(10,-2,.7):wi(42,22,9)}${N(-4,6,1)}`;break;case"cloudy":case"windy-variant":t=w`${N(10,-4,.75,"c2")}${N(-4,6)}`;break;case"fog":t=w`${N(0,-8,.95,"c2")}${_n}`;break;case"rainy":t=w`${N(0,-6)}${qt(3)}`;break;case"pouring":t=w`${N(0,-6,1,"c2")}${qt(5)}`;break;case"hail":t=w`${N(0,-6,1,"c2")}${yi}`;break;case"snowy":t=w`${N(0,-6)}${yi}`;break;case"snowy-rainy":t=w`${N(0,-6)}${qt(2)}<circle cx="32" cy="55" r="2.6" class="fl"/>`;break;case"lightning":t=w`${N(0,-8,1,"c2")}${$i}`;break;case"lightning-rainy":case"exceptional":t=w`${N(0,-8,1,"c2")}${$i}${qt(2)}`;break;case"windy":t=w`${[24,32,40].map((e,n)=>w`<path d="M10 ${e}h${30-n*6}a6 6 0 1 0-6-6" fill="none" class="ln" stroke-width="3.5" stroke-linecap="round"/>`)}`;break;default:t=N(0,0,1,"c2")}return w`<svg class="wicon" viewBox="0 0 64 64" aria-hidden="true">${t}</svg>`}function wt(r,i,t=Date.now()){let e=(r!=null?r:[]).filter(s=>s.temperature!=null).map(s=>({t:new Date(s.datetime).getTime(),v:s.temperature})),n=Sn(e,t),a=i!=null&&n!=null?i-n:0;return(s,l)=>{if(l==null||!a||s<=t)return l;let o=1-(s-t)/(3*36e5);return o>0?l+a*o:l}}function Sn(r,i){for(let t=0;t<r.length-1;t++){let e=r[t],n=r[t+1];if(e.t<=i&&i<=n.t)return e.v+(n.v-e.v)*(i-e.t)/(n.t-e.t||1)}if(r.length&&r[0].t>i&&r[0].t-i<=36e5)return r[0].v}function Xt(r,i,t){var o,c;let e=r==null?void 0:r[0];if(!e)return r;let n=new Date().setHours(0,0,0,0);if(new Date(e.datetime).setHours(0,0,0,0)!==n)return r;let a=[t,...(i!=null?i:[]).filter(d=>d.end>n).flatMap(d=>[d.min,d.max])].filter(d=>typeof d=="number"&&isFinite(d));if(!a.length)return r;let s=Math.min(...a,(o=e.templow)!=null?o:1/0),l=Math.max(...a,(c=e.temperature)!=null?c:-1/0);return s===e.templow&&l===e.temperature?r:[{...e,templow:s,temperature:l},...r.slice(1)]}var yt=class extends z{constructor(){super(...arguments);this._tab="forecast";this._wide=!1;this._metric="temp";this.hourly=new it(this,"hourly",()=>{var t;return(t=this._config)==null?void 0:t.weather});this.daily=new it(this,"daily",()=>{var t;return(t=this._config)==null?void 0:t.weather})}setConfig(t){if(!(t!=null&&t.weather))throw new Error("`weather:` fehlt (z. B. weather.weather_fusion_ai_kresslingweg)");this._config={...t,sensors:{...t.sensors}}}static getStubConfig(t){var e;return{weather:(e=Object.keys(t.states).find(n=>n.startsWith("weather.")))!=null?e:""}}getCardSize(){return 12}getGridOptions(){return{columns:"full",rows:"auto"}}connectedCallback(){var t;super.connectedCallback(),(t=this._ro)!=null||(this._ro=new ResizeObserver(e=>{let n=e[0].contentRect.width>=820;n!==this._wide&&(this._wide=n)})),this._ro.observe(this)}disconnectedCallback(){var t,e;super.disconnectedCallback(),(t=this._ro)==null||t.disconnect(),(e=this._hoursRo)==null||e.disconnect(),this._hoursEl=void 0,this.syncDetail()}syncDetail(){var n,a,s,l,o,c,d,h;if(!(this.isConnected&&this._tab==="forecast"&&this._detail!=null&&!!this.daily.forecast)){(n=this._detailEl)==null||n.remove(),this._detailEl=void 0;return}let e=this._detailEl;e||(e=document.createElement("wetter-app-day-detail"),e.addEventListener("close",()=>this._detail=void 0),e.addEventListener("select",m=>this._detail=m.detail.index),e.addEventListener("metric",m=>this._metric=m.detail.metric),document.body.appendChild(e),this._detailEl=e),Object.assign(e,{hass:this.hass,config:this._config,hourly:(a=this.hourly.forecast)!=null?a:[],daily:this.dailyForecast((c=C(this.hass,(s=this._config.sensors)==null?void 0:s.temperature))!=null?c:(o=(l=this.hass)==null?void 0:l.states[this._config.weather])==null?void 0:o.attributes.temperature),index:this._detail,metric:this._metric}),e.classList.toggle("dark",!!((h=(d=this.hass)==null?void 0:d.themes)!=null&&h.darkMode))}shouldUpdate(t){var n,a;if(t.size>1||!t.has("hass"))return!0;let e=t.get("hass");return!e||!this.hass||!this._config||((n=e.themes)==null?void 0:n.darkMode)!==((a=this.hass.themes)==null?void 0:a.darkMode)?!0:this.watchedIds().some(s=>e.states[s]!==this.hass.states[s])}watchedIds(){var e;let t=this._config;return[t.weather,t.sun,t.moon,...Object.values((e=t.sensors)!=null?e:{})].filter(Boolean)}updated(){var e;this._tab==="forecast"&&this.loadRecent();let t=this.renderRoot.querySelector(".hours");t!==this._hoursEl&&((e=this._hoursRo)==null||e.disconnect(),this._hoursEl=t!=null?t:void 0,t&&typeof ResizeObserver=="function"&&(this._hoursRo=new ResizeObserver(()=>this.fadeEdges(t)),this._hoursRo.observe(t))),t&&this.fadeEdges(t),this.syncDetail()}loadRecent(){var s;let t=(s=this._config.sensors)!=null?s:{},e=[t.rain_total,t.pressure,t.temperature].filter(Boolean);if(!this.hass||!e.length)return;let n=Math.ceil(Date.now()/3e5)*3e5,a=String(n);a!==this._recentKey&&(this._recentKey=a,J(this.hass,{ids:e,start:new Date(n-864e5),end:new Date(n),period:"hour",types:["mean","min","max","change"]}).then(l=>a===this._recentKey&&(this._recent=l),()=>this._recentKey=void 0))}dailyForecast(t){var n,a;let e=(n=this._config.sensors)==null?void 0:n.temperature;return Xt(this.daily.forecast,e?(a=this._recent)==null?void 0:a[e]:void 0,t)}fadeEdges(t){let e=t.scrollWidth-t.clientWidth;t.classList.toggle("fl",t.scrollLeft>2),t.classList.toggle("fr",t.scrollLeft<e-2)}dayIndex(t){var a;let e=new Date(t).setHours(0,0,0,0),n=((a=this.daily.forecast)!=null?a:[]).findIndex(s=>new Date(s.datetime).setHours(0,0,0,0)===e);return Math.max(0,n)}openDetail(t,e=this._metric){this._metric=e,this._detail=t}render(){var c,d,h,m;if(!this._config||!this.hass)return v;let t=this.hass.states[this._config.weather];if(!t)return u`<div class="warn">Entität ${this._config.weather} nicht gefunden.</div>`;let e=this._config.sun?((c=this.hass.states[this._config.sun])==null?void 0:c.state)==="below_horizon":!1,n=(d=this._config.sensors)!=null?d:{},a=(h=C(this.hass,n.temperature))!=null?h:t.attributes.temperature,s=this.dailyForecast(a),l=s==null?void 0:s[0],o=!!((m=this.hass.themes)!=null&&m.darkMode);return u`
      <div class="app ${this._wide?"wide":""} ${o?"dark":""} ${this._config.layout==="page"?"page":""}"
        style="--wa-tint:${o?Vt(t.state,e):Vt(t.state,e,.62)};--wa-tint2:${o?"transparent":Vt(t.state,e,.1)}">
        ${this._config.animations!==!1?u`<wetter-app-sky class="sky" .condition=${t.state} .night=${e}></wetter-app-sky>`:v}
        <header>
          ${this._config.name?u`<div class="place">${this._config.name}</div>`:v}
          <div class="now">${M(a)}</div>
          <div class="cond">${xt(t.state)}</div>
          ${l?u`<div class="hl">H: ${M(l.temperature)}  T: ${M(l.templow)}</div>`:v}
        </header>

        <nav class="tabs" role="tablist">
          ${["forecast","history"].map(p=>u`
            <button role="tab" aria-selected=${this._tab===p} class=${this._tab===p?"on":""}
              @click=${()=>{this._tab=p,this._detail=void 0}}>
              <ha-icon icon=${p==="forecast"?"mdi:calendar-arrow-right":"mdi:chart-line"}></ha-icon>
              ${p==="forecast"?"Vorhersage":"Historie"}
            </button>`)}
        </nav>

        <main>${this._tab==="forecast"?this.renderForecast(s,a,e):u`<wetter-app-history .hass=${this.hass} .config=${this._config} .wide=${this._wide}></wetter-app-history>`}</main>
      </div>
    `}renderForecast(t,e,n){var s;let a=(s=this.hourly.error)!=null?s:this.daily.error;return u`
      ${a?u`<div class="warn">Vorhersage nicht verfügbar: ${a}</div>`:v}
      <div class="cols">
        <div class="left">
          <section class="card hourly">${this.renderHourly(e,n)}</section>
          ${bi({hass:this.hass,config:this._config,hourly:this.hourly.forecast,recent:this._recent})}
        </div>
        <section class="card daily">${this.renderDaily(t,e)}</section>
      </div>
    `}renderHourly(t,e){let n=this.hourly.forecast;if(!n)return u`<div class="loading">Lade Stundenvorhersage …</div>`;let a=Date.now()-36e5,s=n.filter(o=>new Date(o.datetime).getTime()>a).slice(0,25),l=wt(n,t);return u`
      ${R("mdi:clock-outline","St\xFCndlich")}
      <div class="hours" @scroll=${o=>this.fadeEdges(o.currentTarget)}>
        ${s.map((o,c)=>{var d;return u`
          <div class="hr" @click=${()=>this.openDetail(this.dayIndex(o.datetime),"temp")}>
            <div class="t">${c===0?"Jetzt":Jt(new Date(o.datetime))}</div>
            ${Z(o.condition,c===0?e:o.is_daytime===!1)}
            <div class="p">${((d=o.precipitation_probability)!=null?d:0)>=20?`${Math.round(o.precipitation_probability)} %`:""}</div>
            <div class="v">${M(c===0?t!=null?t:o.temperature:l(new Date(o.datetime).getTime(),o.temperature))}</div>
          </div>`})}
      </div>
    `}renderDaily(t,e){if(!t)return u`<div class="loading">Lade Tagesvorhersage …</div>`;let n=t.slice(0,10),a=Math.min(...n.map(c=>{var d,h;return(h=(d=c.templow)!=null?d:c.temperature)!=null?h:99})),s=Math.max(...n.map(c=>{var d;return(d=c.temperature)!=null?d:-99})),l=Math.max(1,s-a),o=c=>(c-a)/l*100;return u`
      ${R("mdi:calendar-week",`${n.length}-Tage-Vorhersage`)}
      ${n.map((c,d)=>{var b,y,x,A;let h=(y=(b=c.templow)!=null?b:c.temperature)!=null?y:a,m=(x=c.temperature)!=null?x:h,p=Math.max(.5,o(m)-o(h)),f=`background-size:${100/p*100}% 100%;background-position:${p>=100?0:o(h)/(100-p)*100}% 0`;return u`
          <div class="day" role="button" tabindex="0" @click=${()=>this.openDetail(d)}
            @keydown=${T=>T.key==="Enter"&&this.openDetail(d)}>
            <div class="wd">${Ft(new Date(c.datetime))}</div>
            <div class="ic">
              ${Z(c.condition)}
              ${((A=c.precipitation_probability)!=null?A:0)>=20?u`<span class="p">${Math.round(c.precipitation_probability)} %</span>`:v}
            </div>
            <div class="lo">${M(h)}</div>
            <div class="bar">
              <div class="fill" style="left:${o(h)}%;right:${100-o(m)}%;${f}"></div>
              ${d===0&&e!=null?u`<div class="dot" style="left:${Math.min(100,Math.max(0,o(e)))}%"></div>`:v}
            </div>
            <div class="hi">${M(m)}</div>
          </div>`})}
    `}};yt.properties={hass:{attribute:!1},_config:{state:!0},_tab:{state:!0},_wide:{state:!0},_detail:{state:!0},_metric:{state:!0},_recent:{state:!0}},yt.styles=[nt,vi,E`
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
      .place { font-size: 28px; font-weight: 500; }
      .now { font-size: 88px; font-weight: 600; line-height: 1; margin: 2px 0 4px 20px; }
      .cond { font-size: 20px; font-weight: 500; }
      .hl { font-size: 17px; font-weight: 500; white-space: pre; }

      /* Breit, aber niedrig (Echo Show 960×480, Handy quer, kleine Tablets): Kopf kompakt in einer Zeile
         statt halbe Bildschirmhöhe — Temperatur links, Ort/Wetter/H-T rechts daneben */
      @media (max-height: 600px) and (min-width: 700px) {
        header {
          display: grid; grid-template-columns: auto auto; justify-content: center; align-items: center;
          column-gap: 18px; text-align: left; padding: 0 0 6px;
        }
        header > :not(.now) { grid-column: 2; }
        .now { grid-column: 1; grid-row: 1 / span 3; font-size: 64px; margin: 0; }
        .place { font-size: 20px; }
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
      .tabs button ha-icon { --mdc-icon-size: 20px; }
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

    `];var te=36e5,Ai=24*te,$t=class extends z{constructor(){super(...arguments);this._m={};this._cols=6;this.hourly=new it(this,"hourly",()=>{var t;return(t=this._config)==null?void 0:t.weather});this.daily=new it(this,"daily",()=>{var t;return(t=this._config)==null?void 0:t.weather})}setConfig(t){if(!(t!=null&&t.weather))throw new Error("`weather:` fehlt (z. B. weather.weather_fusion_ai_kresslingweg)");this._config={...t,sensors:{...t.sensors}}}static getStubConfig(t){var e;return{weather:(e=Object.keys(t.states).find(n=>n.startsWith("weather.")))!=null?e:""}}getCardSize(){return 6}getGridOptions(){return{columns:12,rows:"auto",min_columns:6}}connectedCallback(){var t;super.connectedCallback(),(t=this._ro)!=null||(this._ro=new ResizeObserver(e=>{let n=Math.max(5,Math.min(10,Math.floor(e[0].contentRect.width/58)));n!==this._cols&&(this._cols=n)})),this._ro.observe(this)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._ro)==null||t.disconnect()}shouldUpdate(t){var a,s,l;if(t.size>1||!t.has("hass"))return!0;let e=t.get("hass");if(!e||!this.hass||!this._config||((a=e.themes)==null?void 0:a.darkMode)!==((s=this.hass.themes)==null?void 0:s.darkMode))return!0;let n=this._config;return[n.weather,n.sun,...Object.values((l=n.sensors)!=null?l:{})].some(o=>o&&e.states[o]!==this.hass.states[o])}updated(){this.load()}load(){var d;let t=(d=this._config.sensors)!=null?d:{},e=[t.rain_total,t.temperature,t.wind_gust].filter(Boolean);if(!this.hass||!e.length)return;let n=Math.ceil(Date.now()/3e5)*3e5,a=String(n);if(a===this._key)return;this._key=a;let s=new Date().setHours(0,0,0,0),l=s-6*Ai,o=Math.floor(Date.now()/te)*te,c=["change","min","max"];Promise.all([J(this.hass,{ids:e,start:new Date(l),end:new Date(o),period:"hour",types:[...c]}),J(this.hass,{ids:e,start:new Date(o),end:new Date(n),period:"5minute",types:[...c]})]).then(([h,m])=>a===this._key&&(this._m=this.measure(h,m,s)),()=>this._key=void 0)}measure(t,e,n){var d;let a=(d=this._config.sensors)!=null?d:{},s=h=>{var m,p;return h?[...(m=t[h])!=null?m:[],...(p=e[h])!=null?p:[]]:[]},l=h=>h.reduce((m,p)=>{var f;return m+((f=p.change)!=null?f:0)},0),o=s(a.rain_total),c=s(a.wind_gust).filter(h=>h.end>n).map(h=>h.max).filter(h=>h!=null);return{rainToday:a.rain_total?l(o.filter(h=>h.start>=n)):void 0,rain7:a.rain_total?l(o):void 0,gustMax:c.length?Math.max(...c):void 0,temp:s(a.temperature)}}open(){let t=this._config.navigation_path;t&&(history.pushState(null,"",t),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}})))}render(){var d,h,m,p,f;if(!this._config||!this.hass)return v;let t=this.hass.states[this._config.weather];if(!t)return u`<div class="card warn">Entität ${this._config.weather} nicht gefunden.</div>`;let e=(d=this._config.sensors)!=null?d:{},n=this._config.sun?((h=this.hass.states[this._config.sun])==null?void 0:h.state)==="below_horizon":!1,a=(m=C(this.hass,e.temperature))!=null?m:t.attributes.temperature,s=C(this.hass,e.feels_like),l=Xt(this.daily.forecast,this._m.temp,a),o=l==null?void 0:l[0],c=!!this._config.navigation_path;return u`
      <div class="card ${(p=this.hass.themes)!=null&&p.darkMode?"dark":""}">
        <div class="now ${c?"link":""}" @click=${()=>this.open()}>
          <div class="ic">${Z(t.state,n)}</div>
          <div class="t">${M(a)}</div>
          <div class="info">
            <b>${xt(t.state)}</b>
            <span>${(f=this._config.name)!=null?f:""}</span>
          </div>
          <div class="hl">
            ${o?u`<div>H: ${M(o.temperature)}  T: ${M(o.templow)}</div>`:v}
            ${s!=null?u`<div class="sub">Gefühlt ${M(s)}</div>`:v}
          </div>
        </div>
        ${this.renderHours(a,n)}
        ${l?this.renderDays(l.slice(1,4)):v}
        ${this.renderStats()}
        ${c?u`<button class="open" @click=${()=>this.open()}>
          <ha-icon icon="mdi:weather-partly-cloudy"></ha-icon>Wetter-App öffnen<ha-icon icon="mdi:chevron-right"></ha-icon></button>`:v}
      </div>
    `}renderHours(t,e){let n=this.hourly.forecast;if(!n)return u`<div class="loading">Lade Vorhersage …</div>`;let a=Date.now()-te,s=n.filter(o=>new Date(o.datetime).getTime()>a).slice(0,this._cols),l=wt(n,t);return u`<div class="hours" style="grid-template-columns:repeat(${s.length}, minmax(0, 1fr))">
      ${s.map((o,c)=>{var d;return u`<div class="hr">
        <div class="lab">${c===0?"Jetzt":Jt(new Date(o.datetime)).replace(" Uhr","")}</div>
        ${Z(o.condition,c===0?e:o.is_daytime===!1)}
        <div class="p">${((d=o.precipitation_probability)!=null?d:0)>=20?`${Math.round(o.precipitation_probability)} %`:""}</div>
        <div class="v">${M(c===0?t!=null?t:o.temperature:l(new Date(o.datetime).getTime(),o.temperature))}</div>
      </div>`})}
    </div>`}renderDays(t){return t.length?u`<div class="days">
      ${t.map(e=>{var n;return u`<div class="day">
        <div class="top"><span class="wd">${Ft(new Date(e.datetime))}</span>${Z(e.condition)}
          <span class="p">${((n=e.precipitation_probability)!=null?n:0)>=20?`${Math.round(e.precipitation_probability)} %`:""}</span></div>
        <div class="tt"><span class="lo">${M(e.templow)}</span> / <span class="hi">${M(e.temperature)}</span></div>
      </div>`})}
    </div>`:v}renderStats(){var o;let t=(o=this._config.sensors)!=null?o:{},e=this._m,n=C(this.hass,t.rain_rate),a=C(this.hass,t.wind_speed),s=C(this.hass,t.wind_direction),l=[t.rain_total&&u`<div class="st"><span>Regen heute</span><b>${S(e.rainToday,1)} l/m²</b>
        <small>${n?`jetzt ${S(n,1)} l/m\xB2/h`:"trocken"}</small></div>`,t.rain_total&&u`<div class="st"><span>Regen 7 Tage</span><b>${S(e.rain7,1)} l/m²</b>
        <small>seit ${Ft(new Date(Date.now()-6*Ai))} 0 Uhr</small></div>`,t.wind_speed&&u`<div class="st"><span>Wind</span><b>${S(a,0)} km/h ${s!=null?vt(s):""}</b>
        <small>${e.gustMax!=null?`B\xF6en ${S(e.gustMax,0)} km/h`:""}</small></div>`].filter(Boolean);return l.length?u`<div class="stats">${l}</div>`:v}};$t.properties={hass:{attribute:!1},_config:{state:!0},_m:{state:!0},_cols:{state:!0}},$t.styles=[nt,E`
      :host { display: block; }
      .card { display: flex; flex-direction: column; gap: 10px; }
      .warn, .loading { color: var(--wa-text2); font-size: 14px; padding: 8px 0; }
      .now { display: flex; align-items: center; gap: 10px; }
      .now.link { cursor: pointer; }
      .now .ic .wicon { width: 48px; height: 48px; }
      .now .t { font-size: 40px; font-weight: 600; line-height: 1; }
      .info { display: flex; flex-direction: column; min-width: 0; flex: 1; }
      .info b { font-size: 16px; font-weight: 500; }
      .info span, .sub { font-size: 13px; color: var(--wa-text2); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .hl { text-align: right; font-size: 14px; font-weight: 500; white-space: nowrap; }

      .hours { display: grid; gap: 2px; border-top: 1px solid var(--wa-divider); padding-top: 8px; }
      .hr { display: flex; flex-direction: column; align-items: center; gap: 2px; min-width: 0; }
      .hr .lab { font-size: 12px; color: var(--wa-text2); }
      .hr .wicon { width: 28px; height: 28px; }
      .p { font-size: 11px; color: var(--wa-rain); font-weight: 500; min-height: 13px; line-height: 13px; }
      .hr .v { font-size: 15px; font-weight: 500; }

      .days { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 6px; }
      .day {
        display: flex; flex-direction: column; align-items: center; gap: 2px; min-width: 0;
        padding: 6px 4px; border-radius: 10px; background: rgba(127, 127, 127, 0.1); font-size: 14px;
      }
      .day .top { display: flex; align-items: center; gap: 6px; }
      .day .wd { font-weight: 500; }
      .day .wicon { width: 24px; height: 24px; }
      .day .p { min-height: 0; white-space: nowrap; }
      .day .tt { color: var(--wa-text2); white-space: nowrap; }
      .day .hi { color: var(--wa-text); font-weight: 500; }

      .stats { display: grid; grid-auto-flow: column; grid-auto-columns: minmax(0, 1fr); gap: 4px; }
      .st { display: flex; flex-direction: column; padding: 6px 6px 6px 8px; border-radius: 10px; background: rgba(127, 127, 127, 0.1); min-width: 0; }
      .st span, .st small { font-size: 12px; color: var(--wa-text2); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .st b { font-size: 15px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

      .open {
        display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%;
        border: 0; border-radius: 10px; padding: 10px; cursor: pointer; font: inherit; font-size: 14px; font-weight: 500;
        color: var(--wa-accent); background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.14);
      }
      .open ha-icon { --mdc-icon-size: 18px; }
    `];var Me="wetter-app-tip";function ee(r){window.dispatchEvent(new CustomEvent(Me,{detail:r}))}function ie(r,i,t){let e=a=>{a.detail!==r&&i()},n=a=>{let s=t==null?void 0:t();s&&!a.composedPath().includes(s)&&i()};return window.addEventListener(Me,e),t&&window.addEventListener("pointerdown",n,!0),()=>{window.removeEventListener(Me,e),window.removeEventListener("pointerdown",n,!0)}}var D={l:6,r:38,t:18,b:22},kt=class extends z{constructor(){super(...arguments);this.start=0;this.end=0;this.series=[];this.ticks=[];this.markers=[];this.height=200;this.yUnit="";this.rightUnit="";this.timeFormat=t=>new Date(t).toLocaleString("de-DE");this._w=0;this._onTouchStart=t=>this.touchStart(t);this._onTouchMove=t=>this.touchMove(t);this._onTouchEnd=()=>this.touchEnd()}connectedCallback(){var t;super.connectedCallback(),(t=this._ro)!=null||(this._ro=new ResizeObserver(e=>{let n=Math.round(e[0].contentRect.width);n&&n!==this._w&&(this._w=n)})),this._ro.observe(this),this._offTip=ie(this,()=>this._hover=void 0,()=>this),this.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.addEventListener("touchmove",this._onTouchMove,{passive:!1}),this.addEventListener("touchend",this._onTouchEnd),this.addEventListener("touchcancel",this._onTouchEnd)}disconnectedCallback(){var t,e,n;super.disconnectedCallback(),(t=this._ro)==null||t.disconnect(),(e=this._offTip)==null||e.call(this),this.removeEventListener("touchstart",this._onTouchStart),this.removeEventListener("touchmove",this._onTouchMove),this.removeEventListener("touchend",this._onTouchEnd),this.removeEventListener("touchcancel",this._onTouchEnd),clearTimeout((n=this._touch)==null?void 0:n.timer),clearTimeout(this._hideTimer)}willUpdate(t){t.has("start")&&t.get("start")!==void 0&&t.get("start")!==this.start&&(this._hover=void 0)}x(t){let e=Math.max(1,this.end-this.start);return D.l+(t-this.start)/e*(this._w-D.l-D.r)}scale(t){var d;let e=[];for(let h of this.series)if(((d=h.axis)!=null?d:"left")===t){for(let m of h.points)m.v!=null&&e.push(m.v),m.v2!=null&&e.push(m.v2);h.type==="bar"&&e.push(0)}let n=t==="left"?this.yMin:0,a=t==="left"?this.yMax:this.rightMax;n==null&&(n=e.length?Math.min(...e):0),a==null&&(a=e.length?Math.max(...e):1),a-n<1e-9&&(a=n+1);let s=Tn((a-n)/4);t==="left"&&this.yMin==null&&(n=Math.floor(n/s)*s),t==="left"&&this.yMax==null&&(a=Math.ceil(a/s)*s),t==="right"&&this.rightMax==null&&(a=Math.ceil(a/s)*s);let l=this.height-D.t-D.b,o=h=>D.t+l-(h-n)/(a-n)*l,c=[];for(let h=n;h<=a+s/1e3;h+=s)c.push(Math.round(h*1e6)/1e6);return{y:o,ticks:c,lo:n,hi:a}}onPointer(t){t.pointerType!=="touch"&&this.hoverAt(t.clientX)}touchStart(t){var n;if(clearTimeout((n=this._touch)==null?void 0:n.timer),clearTimeout(this._hideTimer),t.touches.length!==1){this._touch=void 0;return}let e=t.touches[0];this._touch={x:e.clientX,y:e.clientY,mode:"?"},this._touch.timer=window.setTimeout(()=>{var a;((a=this._touch)==null?void 0:a.mode)==="?"&&(this._touch.mode="scrub")},250),this.hoverAt(e.clientX)}touchMove(t){let e=this._touch;if(!e||t.touches.length!==1)return;let n=t.touches[0];if(e.mode==="?"){let a=Math.abs(n.clientX-e.x),s=Math.abs(n.clientY-e.y);if(a<8&&s<8)return;if(clearTimeout(e.timer),e.mode=a>s?"scrub":"scroll",e.mode==="scroll"){this._hover=void 0;return}}e.mode==="scrub"&&(t.cancelable&&t.preventDefault(),this.hoverAt(n.clientX))}touchEnd(){let t=this._touch;t&&(clearTimeout(t.timer),this._touch=void 0,t.mode!=="scroll"&&(this._hideTimer=window.setTimeout(()=>this._hover=void 0,3e3)))}hoverAt(t){let e=this.renderRoot.querySelector("svg");if(!e)return;let n=t-e.getBoundingClientRect().left,a=this.start+(n-D.l)/(this._w-D.l-D.r)*(this.end-this.start),s;for(let l of this.series)for(let o of l.points){if(o.v==null)continue;let c=ne(l,o);(s==null||Math.abs(c-a)<Math.abs(s-a))&&(s=c)}this._hover==null&&s!=null&&ee(this),this._hover=s}render(){var m;let t=this._w;if(!t||this.end<=this.start)return u`<div style="height:${this.height}px"></div>`;let e=this.scale("left"),a=this.series.some(p=>p.axis==="right")?this.scale("right"):void 0,s=this.height-D.b,l=[];this.now&&this.now>this.start&&this.now<this.end&&l.push(w`<rect x=${D.l} y=${D.t} width=${this.x(this.now)-D.l} height=${s-D.t} class="past"/>`);for(let p of e.ticks){let f=e.y(p);l.push(w`<line x1=${D.l} x2=${t-D.r} y1=${f} y2=${f} class="grid"/>`),l.push(w`<text x=${t-D.r+6} y=${f+4} class="ylab">${ki(p)}${this.yUnit}</text>`)}let o=[];if(a){let p=this.series.find(f=>f.axis==="right").color;for(let f of a.ticks)f!==0&&o.push(w`<text x=${D.l+3} y=${a.y(f)-3} class="rlab" style="fill:${p}">${ki(f)}${this.rightUnit}</text>`)}for(let p of this.ticks){let f=this.x(p.t);if(f<D.l-1||f>t-D.r+1)continue;l.push(w`<line x1=${f} x2=${f} y1=${D.t} y2=${s} class="vgrid"/>`);let b=f+3+p.label.length*6>t-D.r;l.push(w`<text x=${b?f-3:f+3} y=${this.height-6} class="xlab" style=${b?"text-anchor:end":""}>${p.label}</text>`)}let c=[];this.series.forEach((p,f)=>{var A,T;let b=p.axis==="right"&&a?a:e,y=p.points.filter(k=>k.v!=null).sort((k,H)=>k.t-H.t);if(!y.length)return;if(p.type==="bar"||p.type==="range"){let k=(A=p.barWidth)!=null?A:y.length>1?y[1].t-y[0].t:(this.end-this.start)/24,H=b.y(Math.max(0,b.lo));for(let _ of y){let I=_.t2!=null?_.t2-_.t:k,P=Math.max(1.5,Math.min(14,(this.x(this.start+I)-this.x(this.start))*.65)),U=this.x(_.t+I/2),q=b.y(_.v),X=p.type==="range"?b.y((T=_.v2)!=null?T:_.v):H,tt=Math.max(p.type==="range"?P:.5,Math.abs(X-q)),O=Math.min(q,X)-(tt-Math.abs(X-q))/2;c.push(w`<rect x=${U-P/2} y=${O} width=${P} height=${tt} rx=${p.type==="range"?P/2:2} style="fill:${p.color}"/>`)}return}if(p.type==="band"){let k=y.filter(_=>_.v2!=null).map(_=>[this.x(_.t),b.y(_.v2)]),H=y.map(_=>[this.x(_.t),b.y(_.v)]).reverse();k.length&&c.push(w`<path d=${At(k)+" L"+At(H).slice(1)+"Z"} style="fill:${p.color};fill-opacity:0.28"/>`);return}let x=y.map(k=>[this.x(k.t),b.y(k.v)]);if(p.type==="area"){let k=`g${f}`;c.push(w`
          <defs><linearGradient id=${k} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" style="stop-color:${p.color};stop-opacity:0.45"/>
            <stop offset="1" style="stop-color:${p.color};stop-opacity:0.04"/>
          </linearGradient></defs>
          <path d=${`${At(x)} L${x[x.length-1][0]},${s} L${x[0][0]},${s}Z`} fill="url(#${k})"/>`)}if(p.dashUntil!=null&&y[0].t<p.dashUntil){let k=y.findIndex(I=>I.t>=p.dashUntil),H=k<0?x:x.slice(0,k+1),_=k<0?[]:x.slice(k);c.push(w`<path d=${At(H)} class="ln" style="stroke:${p.color}" stroke-dasharray="5 5"/>`),_.length>1&&c.push(w`<path d=${At(_)} class="ln" style="stroke:${p.color}"/>`)}else c.push(w`<path d=${At(x)} class="ln" style="stroke:${p.color}" />`)});let d=l.length;for(let p of this.markers){let f=this.x(p.t),b=e.y(p.v);l.push(w`<circle cx=${f} cy=${b} r="4" class="mk"/>`),l.push(w`<text x=${f} y=${b-9} class="mklab">${p.label}</text>`)}if(this.now&&this.now>this.start&&this.now<this.end){let p=this.x(this.now);l.push(w`<line x1=${p} x2=${p} y1=${D.t} y2=${s} class="nowl"/>`)}let h=v;if(this._hover!=null){let p=this._hover,f=this.x(p);l.push(w`<line x1=${f} x2=${f} y1=${D.t-6} y2=${s} class="hov"/>`);let b=[];for(let x of this.series){let A=Mn(x,p);if(!A||A.v==null||x.silent)continue;let T=x.axis==="right"&&a?a:e;(x.type==="line"||x.type==="area")&&l.push(w`<circle cx=${f} cy=${T.y(A.v)} r="4" style="fill:${x.color}" class="hdot"/>`);let k=H=>{var _,I;return`${S(H,(_=x.digits)!=null?_:1)}${(I=x.unit)!=null?I:""}`};(x.type==="band"||x.type==="range")&&A.v2!=null?b.push({color:x.color,label:"Max",value:k(A.v2)},{color:x.color,label:"Min",value:k(A.v)}):b.push({color:x.color,label:(m=x.label)!=null?m:"",value:k(A.v)})}let y=f>t/2?`right:${t-f+8}px`:`left:${f+8}px`;h=u`<div class="tip" style="${y}"><b>${this.timeFormat(p)}</b>
        ${b.map(x=>u`<div class="tr"><i style="background:${x.color}"></i><span>${x.label}</span><b>${x.value}</b></div>`)}</div>`}return u`
      <div class="wrap">
        ${h}
        <svg width=${t} height=${this.height} @pointermove=${this.onPointer} @pointerdown=${this.onPointer}
          @pointerleave=${p=>{p.pointerType!=="touch"&&(this._hover=void 0)}}>
          <defs><clipPath id="plot"><rect x=${D.l-1} y="0" width=${Math.max(0,t-D.l-D.r+2)} height=${s+1}/></clipPath></defs>
          ${l.slice(0,d)}<g clip-path="url(#plot)">${c}</g>${l.slice(d)}${o}</svg>
      </div>
    `}};kt.properties={start:{type:Number},end:{type:Number},series:{attribute:!1},ticks:{attribute:!1},markers:{attribute:!1},now:{type:Number},height:{type:Number},yMin:{type:Number},yMax:{type:Number},yUnit:{type:String},rightMax:{type:Number},rightUnit:{type:String},timeFormat:{attribute:!1},_w:{state:!0},_hover:{state:!0}},kt.styles=E`
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
    .mklab { fill: var(--primary-text-color); font-size: 12px; font-weight: 600; text-anchor: middle; }
    .nowl { stroke: var(--primary-text-color); stroke-width: 1; opacity: 0.5; }
    .hov { stroke: var(--primary-text-color); stroke-width: 1; }
    .hdot { stroke: var(--card-background-color, #000); stroke-width: 2; }
    .tip {
      position: absolute; top: 4px; pointer-events: none; z-index: 1; min-width: 96px;
      background: var(--card-background-color, #222); color: var(--primary-text-color);
      border: 1px solid var(--divider-color); border-radius: 8px; padding: 6px 8px; font-size: 12px;
      display: flex; flex-direction: column; gap: 3px; white-space: nowrap; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    }
    .tr { display: flex; align-items: center; gap: 6px; }
    .tr i { width: 8px; height: 8px; border-radius: 2px; flex: none; }
    .tr span { color: var(--secondary-text-color); flex: 1; }
    .tr b { font-weight: 600; }
  `;function Mn(r,i){var a;let t;for(let s of r.points)s.v!=null&&(!t||Math.abs(ne(r,s)-i)<Math.abs(ne(r,t)-i))&&(t=s);if(!t)return;let e=r.points,n=t.t2!=null?t.t2-t.t:(a=r.barWidth)!=null?a:e.length>1?Math.abs(e[1].t-e[0].t):1/0;return Math.abs(ne(r,t)-i)<=n/2+1?t:void 0}function ne(r,i){var n;if(r.type!=="bar"&&r.type!=="range")return i.t;let t=r.points,e=i.t2!=null?i.t2-i.t:(n=r.barWidth)!=null?n:t.length>1?t[1].t-t[0].t:0;return i.t+e/2}function Tn(r){let i=Math.pow(10,Math.floor(Math.log10(Math.max(r,1e-9)))),t=r/i;return(t<=1?1:t<=2?2:t<=2.5?2.5:t<=5?5:10)*i}function ki(r){return Number.isInteger(r)?String(r):S(r,1)}function At(r){let i=r.length;if(i===0)return"";if(i<3)return"M"+r.map(s=>`${s[0]},${s[1]}`).join(" L");let t=[],e=[],n=[];for(let s=0;s<i-1;s++)t[s]=r[s+1][0]-r[s][0],e[s]=t[s]?(r[s+1][1]-r[s][1])/t[s]:0;n[0]=e[0],n[i-1]=e[i-2];for(let s=1;s<i-1;s++)n[s]=e[s-1]*e[s]<=0?0:3*(t[s-1]+t[s])/((2*t[s]+t[s-1])/e[s-1]+(t[s]+2*t[s-1])/e[s]);let a=`M${r[0][0]},${r[0][1]}`;for(let s=0;s<i-1;s++){let l=t[s]/3;a+=` C${r[s][0]+l},${r[s][1]+l*n[s]} ${r[s+1][0]-l},${r[s+1][1]-l*n[s+1]} ${r[s+1][0]},${r[s+1][1]}`}return a}var _i=[{id:"temp",label:"Temperatur",icon:"mdi:thermometer"},{id:"rain",label:"Niederschlag",icon:"mdi:weather-pouring"},{id:"wind",label:"Wind",icon:"mdi:weather-windy"}],j=36e5,Cn=["S","M","D","M","D","F","S"];function Si(r){let i=new Date(r);return new Date(i.getFullYear(),i.getMonth(),i.getDate()).getTime()}var _t=class extends z{constructor(){super(...arguments);this.hourly=[];this.daily=[];this.index=0;this.metric="temp";this.onKey=t=>t.key==="Escape"&&this.close()}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey)}close(){this.dispatchEvent(new CustomEvent("close"))}willUpdate(t){(t.has("index")||t.has("hass"))&&this.loadPast()}loadPast(){var o,c;let t=(c=(o=this.config)==null?void 0:o.sensors)!=null?c:{},e=this.daily[this.index];if(!this.hass||!e)return;let n=Si(e.datetime),a=Date.now();if(n>a)return;let s=Math.min(n+24*j,Math.ceil(a/3e5)*3e5),l=`${n}|${s}`;l!==this._pastKey&&(this._pastKey=l,J(this.hass,{ids:[t.temperature,t.rain_total,t.wind_speed,t.wind_gust].filter(Boolean),start:new Date(n),end:new Date(s),period:"hour",types:["mean","max","change"]}).then(d=>l===this._pastKey&&(this._past=d),()=>this._pastKey=void 0))}render(){let t=this.daily[this.index];if(!t)return v;let e=Si(t.datetime),n=e+24*j,a=Date.now(),s=a>=e&&a<n,l=this.hourly.filter(c=>{let d=new Date(c.datetime).getTime();return d>=e&&d<=n}),o=new Date(e).toLocaleDateString("de-DE",{weekday:"long",day:"numeric",month:"long"});return u`
      <div class="backdrop" @click=${this.close}></div>
      <div class="sheet" role="dialog" aria-label="Tagesdetail">
        <div class="top">
          <button class="ib" aria-label="Schließen" @click=${this.close}><ha-icon icon="mdi:close"></ha-icon></button>
          <div class="ttl">${_i.find(c=>c.id===this.metric).label}</div>
          <span style="width:40px"></span>
        </div>

        <div class="days">
          ${this.daily.map((c,d)=>{let h=new Date(c.datetime);return u`<button class=${d===this.index?"on":""} @click=${()=>this.select(d)}>
              <span class="l">${Cn[h.getDay()]}</span><span class="n">${h.getDate()}</span></button>`})}
        </div>
        <div class="date">${o}</div>

        <div class="chips">
          ${_i.map(c=>u`<button class=${c.id===this.metric?"on":""}
            @click=${()=>this.setMetric(c.id)}><ha-icon icon=${c.icon}></ha-icon>${c.label}</button>`)}
        </div>

        <section class="card">
          ${this.renderSummary(t,l,s)}
          ${l.length?this.renderChart(e,n,l,s?a:void 0):u`<div class="hint">Für diesen Tag gibt es keine Stundenvorhersage.</div>`}
        </section>
      </div>
    `}select(t){this.dispatchEvent(new CustomEvent("select",{detail:{index:t}}))}setMetric(t){this.dispatchEvent(new CustomEvent("metric",{detail:{metric:t}}))}renderSummary(t,e,n){var h,m,p,f;let a=(h=this.config.sensors)!=null?h:{};if(this.metric==="temp"){let b=n?C(this.hass,a.temperature):void 0;return u`<div class="sum">
        <div class="sum-ic">${Z(t.condition)}</div>
        <div>
          <div class="big">${b!=null?M(b):xt(t.condition)}</div>
          <div class="sub">H: ${M(t.temperature)} · T: ${M(t.templow)}${b!=null?` \xB7 ${xt(t.condition)}`:""}</div>
        </div>
      </div>`}if(this.metric==="rain"){let b=n&&a.rain_total?this.pastRows(a.rain_total).reduce((x,A)=>{var T;return x+((T=A.change)!=null?T:0)},0):void 0,y=Math.max(0,...e.map(x=>{var A;return(A=x.precipitation_probability)!=null?A:0}),(m=t.precipitation_probability)!=null?m:0);return u`<div class="sum">
        <div>
          <div class="big">${st((p=t.precipitation)!=null?p:e.reduce((x,A)=>{var T;return x+((T=A.precipitation)!=null?T:0)},0))}</div>
          <div class="sub">erwartet · Wahrscheinlichkeit bis ${Math.round(y)} %${b!=null?` \xB7 bisher gemessen ${st(b)}`:""}</div>
        </div>
      </div>`}let s=e.map(b=>b.wind_speed).filter(b=>b!=null),l=s.length?s.reduce((b,y)=>b+y,0)/s.length:t.wind_speed,o=e.map(b=>b.wind_bearing).filter(b=>b!=null),c=(f=t.wind_bearing)!=null?f:o.length?Math.atan2(o.reduce((b,y)=>b+Math.sin(y*Math.PI/180),0),o.reduce((b,y)=>b+Math.cos(y*Math.PI/180),0))*180/Math.PI:void 0,d=a.wind_gust&&n?Math.max(...this.pastRows(a.wind_gust).map(b=>{var y;return(y=b.max)!=null?y:0}),0):void 0;return u`<div class="sum">
      <div>
        <div class="big">${S(l,0)} km/h ${c!=null?u`<span class="dir">${vt(c)}</span>`:v}</div>
        <div class="sub">Ø Vorhersage · max ${S(s.length?Math.max(...s):void 0,0)} km/h${d?` \xB7 st\xE4rkste B\xF6e heute ${S(d,0)} km/h`:""}</div>
      </div>
    </div>`}pastRows(t){var e,n;return(n=(e=this._past)==null?void 0:e[t])!=null?n:[]}chartHeight(){return typeof matchMedia=="function"&&matchMedia("(max-height: 600px) and (min-width: 700px)").matches?Math.max(180,Math.min(360,window.innerHeight-215)):220}renderChart(t,e,n,a){var y;let s=(y=this.config.sensors)!=null?y:{},l=n.map(x=>({t:new Date(x.datetime).getTime(),h:x})),o=a?l.filter(x=>x.t>=a-j):l,c=[0,6,12,18].map(x=>({t:t+x*j,label:`${String(x).padStart(2,"0")} Uhr`})),d=[],h=[],m="\xB0",p,f="",b;if(this.metric==="temp"){let x=s.temperature&&a?this.pastRows(s.temperature).map(_=>({t:_.start+j/2,v:_.mean})):[],A=a?C(this.hass,s.temperature):void 0,T=wt(this.hourly,A),k=[...x,...A!=null?[{t:a,v:A}]:[],...o.filter(_=>!a||_.t>a).map(_=>({t:_.t,v:T(_.t,_.h.temperature)}))];d.push({type:"area",points:k,color:"var(--wa-temp, #4fc3f7)",dashUntil:a,label:"Temperatur",unit:"\xB0",digits:1});let H=k.filter(_=>_.v!=null);if(H.length){let _=H.reduce((P,U)=>U.v>P.v?U:P),I=H.reduce((P,U)=>U.v<P.v?U:P);h.push({t:_.t,v:_.v,label:"H"},{t:I.t,v:I.v,label:"T"})}}else if(this.metric==="rain")m="",b=0,s.rain_total&&a&&d.push({type:"bar",points:this.pastRows(s.rain_total).map(x=>({t:x.start,v:x.change})),color:"var(--wa-rain-past, #1e6fb8)",barWidth:j,label:"gemessen",unit:" l/m\xB2",digits:1}),d.push({type:"bar",points:o.map(x=>{var A;return{t:x.t,v:(A=x.h.precipitation)!=null?A:0}}),color:"var(--wa-rain)",barWidth:j,label:"Menge",unit:" l/m\xB2",digits:1}),d.push({type:"line",axis:"right",points:o.map(x=>({t:x.t+j/2,v:x.h.precipitation_probability})),color:"var(--wa-prob, #90caf9)",label:"Wahrscheinl.",unit:" %",digits:0}),p=100,f=" %";else{m="",b=0;let x=s.wind_speed&&a?this.pastRows(s.wind_speed).map(k=>({t:k.start+j/2,v:k.mean})):[],A=a?C(this.hass,s.wind_speed):void 0,T=[...x,...A!=null?[{t:a,v:A}]:[],...o.filter(k=>!a||k.t>a).map(k=>({t:k.t,v:k.h.wind_speed}))];d.push({type:"area",points:T,color:"var(--wa-wind, #81c784)",dashUntil:a,label:"Wind",unit:" km/h",digits:0}),s.wind_gust&&a&&d.push({type:"line",points:this.pastRows(s.wind_gust).map(k=>({t:k.start+j/2,v:k.max})),color:"var(--wa-gust, #ffb74d)",label:"B\xF6e",unit:" km/h",digits:0})}return u`
      <wetter-app-chart .start=${t} .end=${e} .series=${d} .ticks=${c} .markers=${h}
        .now=${a} .height=${this.chartHeight()} .yUnit=${m} .yMin=${b} .rightMax=${p} .rightUnit=${f}
        .timeFormat=${x=>new Date(x).toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}>
      </wetter-app-chart>
      ${this.metric==="wind"?this.renderWindDirs(t,o):v}
      ${this.metric==="rain"?gt([{color:"var(--wa-rain)",label:"Menge pro Stunde"},{color:"var(--wa-prob, #90caf9)",label:"Wahrscheinlichkeit",kind:"line"},!!a&&{color:"var(--wa-rain-past, #1e6fb8)",label:"gemessen"}]):v}
    `}renderWindDirs(t,e){let n=e.filter(a=>new Date(a.t).getHours()%3===0);return u`<div class="dirs">
      ${n.map(a=>{var s;return u`<div style="left:calc(6px + (100% - 44px) * ${(a.t-t)/(24*j)})">
        <ha-icon icon="mdi:navigation" style="transform:rotate(${((s=a.h.wind_bearing)!=null?s:0)+180}deg)"></ha-icon>
        <span>${new Date(a.t).getHours()}</span></div>`})}
    </div>`}};_t.properties={hass:{attribute:!1},config:{attribute:!1},hourly:{attribute:!1},daily:{attribute:!1},index:{type:Number},metric:{type:String},_past:{state:!0}},_t.styles=[nt,Yt,E`
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
      .dirs { position: relative; height: 36px; margin-top: 6px; }
      .dirs div {
        position: absolute; top: 0; transform: translateX(-50%); display: flex; flex-direction: column;
        align-items: center; font-size: 11px; color: var(--wa-text2); white-space: nowrap;
      }
      .dirs ha-icon { --mdc-icon-size: 18px; color: var(--wa-text); }
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
    `];var Te=[{id:"day",label:"Tag"},{id:"7d",label:"7 Tage"},{id:"30d",label:"30 Tage"},{id:"month",label:"Monat"},{id:"year",label:"Jahr"}];var Dn=["Januar","Februar","M\xE4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];function En(r){return new Date(r.getFullYear(),r.getMonth(),r.getDate())}function Ot(r,i){return new Date(r.getFullYear(),r.getMonth(),r.getDate()+i)}function Mi(r,i=!1){return r.toLocaleDateString("de-DE",i?{day:"2-digit",month:"2-digit",year:"numeric"}:{day:"2-digit",month:"2-digit"})}function se(r){return Te.some(i=>i.id===r)}function Ti(r,i=new Date){let t=En(i),e=Math.min(0,Math.round(r.offset)),n,a,s,l;switch(r.preset){case"day":{n=Ot(t,e),a=Ot(n,1),s="hour",l=e===0?"Heute":e===-1?"Gestern":n.toLocaleDateString("de-DE",{weekday:"short",day:"2-digit",month:"2-digit"});break}case"7d":case"30d":{let c=r.preset==="7d"?7:30;a=Ot(t,1+e*c),n=Ot(a,-c),s=c===7?"hour":"day",l=e===0?`Letzte ${c} Tage`:`${Mi(n)} \u2013 ${Mi(Ot(a,-1),!0)}`;break}case"month":{n=new Date(i.getFullYear(),i.getMonth()+e,1),a=new Date(n.getFullYear(),n.getMonth()+1,1),s="day",l=`${Dn[n.getMonth()]} ${n.getFullYear()}`;break}default:{n=new Date(i.getFullYear()+e,0,1),a=new Date(n.getFullYear()+1,0,1),s="month",l=String(n.getFullYear());break}}let o=a.getTime()>i.getTime();return o&&(a=new Date(Math.ceil(i.getTime()/3e5)*3e5)),{preset:r.preset,offset:e,start:n,end:a,period:s,label:l,live:o}}var re=new Map,Ce=new EventTarget,Ci="wetter-app:range:";function Rn(r,i){let t=i;try{let e=localStorage.getItem(Ci+r);se(e)&&(t=e)}catch{}return{preset:t,offset:0}}function Bn(r,i="7d"){let t=re.get(r);return t||(t=Rn(r,i),re.set(r,t)),t}function Hn(r,i){let t=re.get(r);if(re.set(r,i),(t==null?void 0:t.preset)!==i.preset)try{localStorage.setItem(Ci+r,i.preset)}catch{}Ce.dispatchEvent(new CustomEvent(r))}var ae=class{constructor(i,t,e=()=>"7d"){this.host=i;this.groupOf=t;this.fallback=e;this.onChange=()=>this.host.requestUpdate();i.addController(this)}get state(){return Bn(this.groupOf(),this.fallback())}get range(){return Ti(this.state)}set(i){Hn(this.groupOf(),i)}hostConnected(){this.listen()}hostUpdated(){this.group!==this.groupOf()&&this.listen()}hostDisconnected(){this.group&&Ce.removeEventListener(this.group,this.onChange),this.group=void 0}listen(){this.hostDisconnected(),this.group=this.groupOf(),Ce.addEventListener(this.group,this.onChange)}};function Di(r){let i=r.range;return u`
    <div class="range">
      <div class="chips" role="tablist">
        ${Te.map(t=>u`<button role="tab" aria-selected=${t.id===i.preset}
            class=${t.id===i.preset?"on":""}
            @click=${()=>r.set({preset:t.id,offset:0})}>${t.label}</button>`)}
      </div>
      <div class="nav">
        <button class="ib" aria-label="Zurück" @click=${()=>r.set({preset:i.preset,offset:i.offset-1})}>
          <ha-icon icon="mdi:chevron-left"></ha-icon>
        </button>
        <span>${i.label}</span>
        <button class="ib" aria-label="Vor" ?disabled=${i.offset>=0}
          @click=${()=>r.set({preset:i.preset,offset:i.offset+1})}>
          <ha-icon icon="mdi:chevron-right"></ha-icon>
        </button>
      </div>
    </div>
  `}var Ei=E`
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
`;var G=[{min:0,max:1,label:"0",name:"Windstille",color:"#2a32ff",text:"#fff"},{min:1,max:6,label:"1",name:"leiser Zug",color:"#3a6ff7",text:"#fff"},{min:6,max:12,label:"2",name:"leichte Brise",color:"#3fb4f7",text:"#000"},{min:12,max:20,label:"3",name:"schwache Brise",color:"#44f2f7",text:"#000"},{min:20,max:29,label:"4",name:"m\xE4\xDFige Brise",color:"#a6f78a",text:"#000"},{min:29,max:39,label:"5",name:"frische Brise",color:"#f7d64a",text:"#000"},{min:39,max:50,label:"6",name:"starker Wind",color:"#f77a4a",text:"#000"},{min:50,max:62,label:"7",name:"steifer Wind",color:"#e8443a",text:"#fff"},{min:62,max:1/0,label:"8+",name:"st\xFCrmischer Wind und mehr",color:"#b0207a",text:"#fff"}],oe=["N","NNO","NO","ONO","O","OSO","SO","SSO","S","SSW","SW","WSW","W","WNW","NW","NNW"],Ri=r=>G.findIndex(i=>r<i.max),le=3;function zn(r){let i=Ri(r.mean),t=r.min,e=r.max,n=r.mean;if(t==null||e==null||e<G[le].min||e-t<.01)return[[i,1]];let a=Math.min(e,Math.max(t,3*n-t-e)),s=c=>c<=t?0:c>=e?1:c<=a?(c-t)**2/((e-t)*(a-t||1e-9)):1-(e-c)**2/((e-t)*(e-a||1e-9)),l=G.map(c=>s(c.max)-s(c.min));if(i>=le)return l.map((c,d)=>[d,c]).filter(([,c])=>c>0);let o=l.slice(le).reduce((c,d)=>c+d,0);return[[i,1-o],...l.map((c,d)=>[d,c]).filter(([c,d])=>c>=le&&d>0)]}function Bi(r=[],i=[],t={}){var Ue,Ne;let e=(Ue=t.now)!=null?Ue:{},n=new Map(i.map(g=>[g.start,g])),a=oe.map(()=>G.map(()=>0)),s=G.map(()=>0),l=0;for(let g of r){let $=n.get(g.start);if(g.mean==null||($==null?void 0:$.mean)==null)continue;l++;let B=Math.round((g.mean%360+360)%360/22.5)%16;for(let[L,Q]of zn($))s[L]+=Q,L>0&&(a[B][L]+=Q)}if(!l)return u`<div class="hint">Keine Winddaten im Zeitraum.</div>`;let o=g=>g/l*100,c=a.map(g=>o(g.reduce(($,B)=>$+B,0))),d=Math.max(...c,1),h=(Ne=[2,5,10,20,25,50].find(g=>d/g<=4))!=null?Ne:50,m=Math.ceil(d/h)*h,p=16,f=90,b=g=>p+g/m*(f-p),y=g=>(g-90)*Math.PI/180,x=(g,$)=>`${100+g*Math.cos(y($))},${100+g*Math.sin(y($))}`,A=(g,$,B)=>{let L=g*22.5-10.5,Q=g*22.5+10.5;return`M${x($,L)} L${x(B,L)} A${B} ${B} 0 0 1 ${x(B,Q)} L${x($,Q)} A${$} ${$} 0 0 0 ${x($,L)}Z`},T=0,k=1/0;for(let g=0;g<16;g++){let $=Math.max(c[g],c[(g+1)%16]);$<k&&(k=$,T=g)}let H=T*22.5+11.25,_=[],I=[];for(let g=h;g<=m;g+=h)_.push(w`<circle cx="100" cy="100" r=${b(g)} class="ring"/>`),I.push(w`<text x=${100+b(g)*Math.cos(y(H))} y=${102.5+b(g)*Math.sin(y(H))} class="rl">${g} %</text>`);let P=g=>t.selected!=null&&t.selected!==g?"dim":"",U=a.flatMap((g,$)=>{let B=0;return g.map((L,Q)=>{if(!L)return w``;let Ji=b(B);return B+=o(L),w`<path d=${A($,Ji,b(B))} style="fill:${G[Q].color}" class=${P(Q)}><title>${oe[$]}, Bft ${G[Q].label}: ${S(o(L),1)} %</title></path>`})}),q=oe.map((g,$)=>$%4===0?w``:w`<text x=${100+109*Math.cos(y($*22.5))} y=${103+109*Math.sin(y($*22.5))} class=${$%2?"cd2":"cd"}>${oe[$]}</text>`),X=e.direction!=null?w`<path d="M100 ${100-f-1} l-5 -9 h10z" class="now" transform="rotate(${e.direction} 100 100)"><title>Aktuell: ${Math.round(e.direction)}°</title></path>`:w``,tt=e.speed!=null?Ri(e.speed):-1,O=G.map((g,$)=>({...g,i:$,share:o(s[$]),w:Math.max(o(s[$]),9)})).filter(g=>s[g.i]>0||g.i===tt),at=O.reduce((g,$)=>g+$.w,0),Ct=g=>O.slice(0,g).reduce(($,B)=>$+B.w,0)/at*100,F,ot=O.findIndex(g=>g.i===tt);if(ot>=0){let g=O[ot],$=Number.isFinite(g.max)?g.max:g.min+20;F=Ct(ot)+Math.min(1,(e.speed-g.min)/($-g.min))*(g.w/at)*100}let Wi=(g,$)=>g.w/at*300>=$.length*6+6,Yi=g=>`left:${g}%;transform:translateX(-${g}%)`,he=g=>g>=1?`${Math.round(g)}%`:g>=.05?`${S(g,1)}%`:"<0,1%",Dt=t.selected!=null?G[t.selected]:void 0,Ie=g=>window.innerHeight-g.currentTarget.getBoundingClientRect().bottom<150,Pe=(g,$)=>{var B;return(B=t.onSelect)==null?void 0:B.call(t,t.selected===$?void 0:$,Ie(g))},Fe=(g,$)=>{var B;g.pointerType==="mouse"&&((B=t.onSelect)==null||B.call(t,$,Ie(g)))},Oe=g=>{var $;g.pointerType==="mouse"&&(($=t.onSelect)==null||$.call(t,void 0))},ue=O.findIndex(g=>g.i===t.selected),Vi=g=>g.min===0?"unter 1":Number.isFinite(g.max)?`${g.min}\u2013${g.max-1}`:`ab ${g.min}`;return u`
    <div class="rose">
      <svg viewBox="-22 -22 244 244">
        ${_}
        <line x1="100" y1="8" x2="100" y2="192" class="ring"/><line x1="8" y1="100" x2="192" y2="100" class="ring"/>
        ${U}
        <circle cx="100" cy="100" r=${p-1} style="fill:${G[0].color}" class=${P(0)}/>
        <text x="100" y="103.5" class="cv">${Math.round(o(s[0]))} %</text>
        ${I}
        <text x="100" y="-6" class="cd">N</text><text x="100" y="216" class="cd">S</text>
        <text x="211" y="103" class="cd">O</text><text x="-11" y="103" class="cd">W</text>
        ${q}
        ${X}
      </svg>
      <div class="bftbar">
        ${F!=null?u`<span class="nowsp" style="left:${F}%" title="Aktuell: ${S(e.speed,1)} km/h"></span>`:""}
        ${Dt&&ue>=0?u`<div class="btip ${t.up?"up":""}" style=${Yi(Ct(ue)+O[ue].w/at*50)}>
          <div class="tr"><i style="background:${Dt.color}"></i><b>Beaufort ${Dt.label}</b></div>
          <div class="tr"><span>${Dt.name}</span></div>
          <div class="tr"><span>Wind</span><b>${Vi(Dt)} km/h</b></div>
          <div class="tr"><span>Anteil</span><b>${he(o(s[t.selected]))}</b></div>
        </div>`:""}
        <div class="segs">${O.map(g=>u`<button style="flex:${g.w} 1 0;background:${g.color};color:${g.text}" class=${t.selected===g.i?"on":""}
          @click=${$=>Pe($,g.i)} @pointerenter=${$=>Fe($,g.i)} @pointerleave=${Oe}>${Wi(g,he(g.share))?he(g.share):""}</button>`)}</div>
        <div class="nums">${O.map(g=>u`<span style="flex:${g.w} 1 0" @click=${$=>Pe($,g.i)} @pointerenter=${$=>Fe($,g.i)} @pointerleave=${Oe}>${g.label}</span>`)}</div>
        <div class="bl">Beaufort</div>
      </div>
    </div>`}var Hi=E`
  .rose { display: flex; flex-direction: column; align-items: center; gap: 10px; }
  .rose svg { width: 100%; max-width: 340px; }
  .rose .dim { opacity: 0.25; }
  .ring { fill: none; stroke: var(--wa-divider); stroke-width: 0.8; }
  .rl {
    fill: var(--wa-text); font-size: 6.5px; font-weight: 500; text-anchor: middle;
    paint-order: stroke; stroke: var(--ha-card-background, var(--card-background-color, #1c1c1c)); stroke-width: 2.2px;
  }
  .cv { fill: #fff; font-size: 9px; font-weight: 600; text-anchor: middle; }
  .cd { fill: var(--wa-text); font-size: 10px; font-weight: 600; text-anchor: middle; }
  .cd2 { fill: var(--wa-text2); font-size: 6.5px; text-anchor: middle; }
  .now { fill: #e53935; }
  .bftbar { position: relative; width: 100%; max-width: 360px; padding-top: 10px; }
  .segs { display: flex; height: 20px; border-radius: 4px; overflow: hidden; }
  .segs button { min-width: 0; overflow: hidden; border: 0; padding: 0; font: inherit; font-size: 10px; font-weight: 600; line-height: 20px; cursor: pointer; }
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
  .btip .tr b { font-weight: 600; }
  .nowsp { position: absolute; top: 0; width: 0; height: 0; margin-left: -6px;
    border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 9px solid #e53935; }
`;var In=[{id:"pressure",label:"Luftdruck",unit:" hPa",digits:1,color:"var(--wa-accent)"},{id:"humidity",label:"Feuchte",unit:" %",digits:0,color:"#4dd0e1"},{id:"solar",label:"Sonne",unit:" W/m\xB2",digits:0,color:"#ffb300"},{id:"uv",label:"UV",unit:"",digits:1,color:"#ab47bc"}],Pn=w`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"/></svg>`,De=["Jan","Feb","M\xE4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],Fn=["Januar","Februar","M\xE4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],Ee=["So","Mo","Di","Mi","Do","Fr","Sa"],zi=864e5,On=.1,St=class extends z{constructor(){super(...arguments);this.wide=!1;this._extra="pressure";this._bftUp=!1;this.range=new ae(this,()=>{var t,e;return(e=(t=this.config)==null?void 0:t.sync_group)!=null?e:"default"},()=>{var t;return se((t=this.config)==null?void 0:t.default_range)?this.config.default_range:"7d"})}periods(t){return{main:t.preset==="day"||t.preset==="7d"?"hour":"day",rain:t.preset==="day"?"hour":"day",rose:t.start.getTime()>Date.now()-9*zi?"5minute":"hour"}}connectedCallback(){super.connectedCallback(),this._offTip=ie(this,()=>this._bft=void 0,()=>this.renderRoot.querySelector(".bftbar"))}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._offTip)==null||t.call(this)}updated(){this.load()}async load(){var o,c;if(!this.hass||!this.config)return;let t=this.range.range,e=(o=this.config.sensors)!=null?o:{},n=this.periods(t),a=`${t.start.getTime()}|${t.end.getTime()}`;if(a===this._key)return;this._key=a,this._err=void 0;let s=d=>d.filter(Boolean),l=(d,h,m)=>J(this.hass,{ids:d,start:t.start,end:t.end,period:h,types:m});try{let[d,h,m]=await Promise.all([l(s([e.temperature,e.humidity,e.pressure,e.solar,e.uv,e.wind_speed,e.wind_gust]),n.main,["mean","min","max"]),l(s([e.rain_total]),n.rain,["change"]),l(s([e.wind_direction,n.rose!==n.main?e.wind_speed:void 0]),n.rose,["mean","min","max"])]);if(a!==this._key)return;this._dataRange=t,this._data={main:d,rain:h,dir:m}}catch(d){if(a!==this._key)return;this._err=(c=d==null?void 0:d.message)!=null?c:String(d),this._key=void 0}}render(){var d,h,m;if(!this.config)return v;let t=this.range.range,e=this._data,n=e&&this._dataRange?this._dataRange:t,a=n!==t&&(n.start.getTime()!==t.start.getTime()||n.end.getTime()!==t.end.getTime()),s=(d=this.config.sensors)!=null?d:{},l=s.temperature&&(e==null?void 0:e.main[s.temperature])||[],o=(h=l.find(p=>p.mean!=null))==null?void 0:h.start,c=!a&&o!=null&&o-n.start.getTime()>2*zi?u`<div class="hint-inline"><span>${Pn}<span>Daten erst ab <b>${new Date(o).toLocaleDateString("de-DE")}</b></span></span></div>`:v;return u`
      <section class="card">
        ${Di(this.range)}
      </section>
      ${this._err?u`<div class="warn">Statistik nicht verfügbar: ${this._err}</div>`:v}
      ${e?!l.length&&!(s.rain_total&&((m=e.rain[s.rain_total])!=null&&m.length))?u`<div class="hint">Keine Daten in diesem Zeitraum.</div>`:u`<div class="body ${a?"stale":""}">
            ${c}
            ${this.renderSummary(n,e)}
            <div class="cols">
              ${this.renderTemp(n,e)}
              ${this.renderRain(n,e)}
            </div>
            ${n.preset==="year"?this.renderYearTable(n,e):v}
            <div class="cols">
              ${this.renderWind(n,e)}
              ${this.renderExtra(n,e)}
            </div></div>`:u`<div class="loading">Lade Historie …</div>`}
    `}rows(t,e,n){let a=n.start.getTime(),s=n.end.getTime(),l=(e&&(t==null?void 0:t[e])||[]).filter(o=>o.start<s&&o.end>a);return n.preset==="year"?Un(l):l}ticks(t){let e=[],n=t.start;if(t.preset==="day")for(let a of[0,6,12,18])e.push({t:new Date(n.getFullYear(),n.getMonth(),n.getDate(),a).getTime(),label:`${String(a).padStart(2,"0")} Uhr`});else if(t.preset==="7d")for(let a=0;a<7;a++){let s=new Date(n.getFullYear(),n.getMonth(),n.getDate()+a);e.push({t:s.getTime(),label:Ee[s.getDay()]})}else if(t.preset==="30d")for(let a=0;a<30;a+=7){let s=new Date(n.getFullYear(),n.getMonth(),n.getDate()+a);e.push({t:s.getTime(),label:`${s.getDate()}.${s.getMonth()+1}.`})}else if(t.preset==="month")for(let a of[1,8,15,22,29])e.push({t:new Date(n.getFullYear(),n.getMonth(),a).getTime(),label:`${a}.`});else for(let a=0;a<12;a++)e.push({t:new Date(n.getFullYear(),a,1).getTime(),label:De[a]});return e}fmt(t,e){return n=>{let a=new Date(n);return t.preset==="year"&&e!=="hour"?`${Fn[a.getMonth()]}`:e==="hour"?`${Ee[a.getDay()]} ${String(a.getHours()).padStart(2,"0")}:00`:`${Ee[a.getDay()]}, ${a.getDate()}.${a.getMonth()+1}.`}}chart(t,e,n){var a,s;return u`<wetter-app-chart .start=${t.start.getTime()} .end=${t.end.getTime()} .series=${e}
      .ticks=${this.ticks(t)} .height=${(a=n.height)!=null?a:200} .yUnit=${(s=n.yUnit)!=null?s:""} .yMin=${n.yMin}
      .rightMax=${n.rightMax} .timeFormat=${this.fmt(t,t.preset==="year"?"month":n.period)}></wetter-app-chart>`}renderSummary(t,e){var x;let n=(x=this.config.sensors)!=null?x:{},a=this.periods(t),s=n.temperature&&e.main[n.temperature]||[],l=Be(s,"min",Math.min),o=Be(s,"max",Math.max),c=Re(s.map(A=>A.mean)),d=n.rain_total&&e.rain[n.rain_total]||[],h=d.reduce((A,T)=>{var k;return A+((k=T.change)!=null?k:0)},0),m=d.filter(A=>{var T;return((T=A.change)!=null?T:0)>=On}).length,p=Be(n.wind_gust&&e.main[n.wind_gust]||[],"max",Math.max),f=Re((n.wind_speed&&e.main[n.wind_speed]||[]).map(A=>A.mean)),b=Re((n.humidity&&e.main[n.humidity]||[]).map(A=>A.mean)),y=this.fmt({...t,preset:t.preset==="year"?"30d":t.preset},a.main);return u`<div class="grid">
      <section class="card kv">${R("mdi:thermometer","Temperatur")}
        <div class="big">${M(c,1)}</div><div class="sub">Durchschnitt</div>
        <div class="ext"><span>▲ ${M(o==null?void 0:o.v,1)}</span><small>${o?y(o.t):""}</small></div>
        <div class="ext"><span>▼ ${M(l==null?void 0:l.v,1)}</span><small>${l?y(l.t):""}</small></div>
      </section>
      <section class="card kv">${R("mdi:weather-pouring","Niederschlag")}
        <div class="big">${st(h)}</div><div class="sub">Summe</div>
        <div class="ext"><span>${m}</span><small>${a.rain==="hour"?"Stunden mit Regen":"Regentage (\u2265 0,1 l/m\xB2)"}</small></div>
      </section>
      <section class="card kv">${R("mdi:weather-windy","Wind")}
        <div class="big">${S(f,1)} km/h</div><div class="sub">Durchschnitt</div>
        <div class="ext"><span>${S(p==null?void 0:p.v,0)} km/h</span><small>stärkste Böe${p?` \xB7 ${y(p.t)}`:""}</small></div>
      </section>
      <section class="card kv">${R("mdi:water-percent","Luftfeuchte")}
        <div class="big">${S(b,0)} %</div><div class="sub">Durchschnitt</div>
      </section>
    </div>`}renderTemp(t,e){var c;let n=(c=this.config.sensors)!=null?c:{},a=this.periods(t),s=this.rows(e.main,n.temperature,t),l=[],o=d=>d.start+(d.end-d.start)/2;return a.main==="hour"?l.push({type:"band",points:s.map(d=>({t:o(d),v:d.min,v2:d.max})),color:"var(--wa-temp, #4fc3f7)",label:"",unit:"\xB0",digits:1}):l.push({type:"range",points:s.map(d=>({t:d.start,t2:d.end,v:d.min,v2:d.max})),color:"rgba(79, 195, 247, 0.55)",label:"",unit:"\xB0",digits:1}),l.push({type:"line",points:s.map(d=>({t:o(d),v:d.mean})),color:"var(--wa-temp-line, #ffb74d)",label:"\xD8",unit:"\xB0",digits:1}),u`<section class="card">${R("mdi:thermometer","Temperatur")}
      ${this.chart(t,l,{yUnit:"\xB0",period:a.main})}
      ${gt([{color:"#4fc3f7",label:"Min\u2013Max"},{color:"#ffb74d",label:"Durchschnitt",kind:"line"}])}
    </section>`}renderRain(t,e){var d;let n=(d=this.config.sensors)!=null?d:{};if(!n.rain_total)return v;let a=this.periods(t),s=this.rows(e.rain,n.rain_total,t),l=h=>{let m=0;return h.map(p=>{var f;return{t:Math.min(p.end,t.end.getTime()),v:m+=(f=p.change)!=null?f:0}})},o=s.slice(Math.max(0,s.findIndex(h=>h.change!=null))),c=[{type:"bar",points:s.map(h=>{var m;return{t:h.start,t2:h.end,v:(m=h.change)!=null?m:0}}),color:"var(--wa-rain)",label:"Menge",unit:" l/m\xB2",digits:1},{type:"line",axis:"right",points:o.length?[{t:Math.max(o[0].start,t.start.getTime()),v:0},...l(o)]:[],color:"var(--wa-prob, #90caf9)",label:"Summe",unit:" l/m\xB2",digits:1}];return u`<section class="card">${R("mdi:weather-pouring","Niederschlag")}
      ${this.chart(t,c,{yMin:0,period:a.rain})}
      ${gt([{color:"var(--wa-rain)",label:a.rain==="hour"?"pro Stunde":t.preset==="year"?"pro Monat":"pro Tag"},{color:"var(--wa-prob, #90caf9)",label:"Summe (blaue Skala links)",kind:"line"}])}
    </section>`}renderWind(t,e){var m;let n=(m=this.config.sensors)!=null?m:{};if(!n.wind_speed)return v;let a=this.periods(t),s=n.wind_direction&&e.dir[n.wind_direction]||[],l=(a.rose===a.main?e.main[n.wind_speed]:e.dir[n.wind_speed])||[],o=this.rows(e.main,n.wind_speed,t),c=this.rows(e.main,n.wind_gust,t),d=p=>p.start+(p.end-p.start)/2,h=[{type:"line",points:o.map(p=>({t:d(p),v:p.mean})),color:"var(--wa-wind, #81c784)",label:"\xD8",unit:" km/h",digits:1},...c.length?[{type:"line",points:c.map(p=>({t:d(p),v:p.max})),color:"var(--wa-gust, #ffb74d)",label:"B\xF6e",unit:" km/h",digits:0}]:[]];return u`<section class="card">${R("mdi:weather-windy","Wind")}
      ${n.wind_direction?Bi(s,l,{now:t.live?{direction:C(this.hass,n.wind_direction),speed:C(this.hass,n.wind_speed)}:{},selected:this._bft,up:this._bftUp,onSelect:(p,f)=>{p!=null&&this._bft==null&&ee(this),this._bft=p,this._bftUp=!!f}}):v}
      ${this.chart(t,h,{yMin:0,period:a.main,height:160})}
      ${gt([{color:"#81c784",label:"Durchschnitt",kind:"line"},{color:"#ffb74d",label:"st\xE4rkste B\xF6e",kind:"line"}])}
    </section>`}renderExtra(t,e){var h,m;let n=(h=this.config.sensors)!=null?h:{},a=In.filter(p=>n[p.id]);if(!a.length)return v;let s=(m=a.find(p=>p.id===this._extra))!=null?m:a[0],l=this.periods(t),o=this.rows(e.main,n[s.id],t),c=p=>p.start+(p.end-p.start)/2,d=[{type:"band",points:o.map(p=>({t:c(p),v:p.min,v2:p.max})),color:s.color,unit:s.unit,digits:s.digits},{type:"line",points:o.map(p=>({t:c(p),v:p.mean})),color:s.color,label:"\xD8",unit:s.unit,digits:s.digits}];return u`<section class="card">${R("mdi:chart-bell-curve-cumulative","Weitere Werte")}
      <div class="chips small">${a.map(p=>u`<button class=${p===s?"on":""} @click=${()=>this._extra=p.id}>${p.label}</button>`)}</div>
      ${this.chart(t,d,{period:l.main,yMin:s.id==="pressure"?void 0:0})}
      ${gt([{color:s.color,label:"Durchschnitt",kind:"line"},{color:s.color,label:"Min\u2013Max",opacity:.3}])}
    </section>`}renderYearTable(t,e){var m;let n=(m=this.config.sensors)!=null?m:{},a=this.rows(e.main,n.temperature,t),s=this.rows(e.rain,n.rain_total,t),l=(p,f)=>p.find(b=>b.start===f),o=[...Array(12)].map((p,f)=>new Date(t.start.getFullYear(),f,1).getTime()).filter(p=>p<=Date.now()),c=o.findIndex(p=>l(a,p)||l(s,p)),d=c<0?o:o.slice(c),h=Math.max(1,...s.map(p=>{var f;return(f=p.change)!=null?f:0}));return u`<section class="card">${R("mdi:table",`Monate ${t.start.getFullYear()}`)}
      <table class="months">
        <thead><tr><th></th><th>Ø</th><th>Min</th><th>Max</th><th class="rc">Niederschlag</th></tr></thead>
        <tbody>${d.map(p=>{var x;let f=new Date(p).getMonth(),b=l(a,p),y=l(s,p);return!b&&!y?u`<tr class="empty"><td>${De[f]}</td><td colspan="4">–</td></tr>`:u`<tr>
            <td>${De[f]}</td><td>${M(b==null?void 0:b.mean,1)}</td><td class="cold">${M(b==null?void 0:b.min,1)}</td><td class="warm">${M(b==null?void 0:b.max,1)}</td>
            <td class="rc"><div class="rcell"><div class="rbar"><i style="width:${((x=y==null?void 0:y.change)!=null?x:0)/h*100}%"></i></div>
              <span>${S(y==null?void 0:y.change,0)}</span></div></td></tr>`})}</tbody>
      </table>
    </section>`}};St.properties={hass:{attribute:!1},config:{attribute:!1},wide:{type:Boolean,reflect:!0},_data:{state:!0},_err:{state:!0},_extra:{state:!0},_bft:{state:!0}},St.styles=[nt,Yt,Ei,Hi,E`
      :host { display: flex; flex-direction: column; gap: 12px; }
      .cols, .grid { display: grid; gap: 12px; }
      .body { display: flex; flex-direction: column; gap: 12px; transition: opacity 0.15s; }
      .body.stale { opacity: 0.45; pointer-events: none; }
      :host([wide]) .cols { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); align-items: start; }
      /* auto-fit: vorhandene Kacheln teilen sich die ganze Breite statt rechts eine Lücke zu lassen */
      .grid { grid-template-columns: repeat(auto-fit, minmax(165px, 1fr)); }
      .kv .big { font-size: 26px; font-weight: 600; margin-top: 4px; }
      .kv .sub { font-size: 12px; color: var(--wa-text2); margin-bottom: 6px; }
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
    `];function Re(r){let i=r.filter(t=>t!=null);return i.length?i.reduce((t,e)=>t+e,0)/i.length:void 0}function Be(r,i,t){let e;for(let n of r){let a=n[i];a!=null&&(!e||t(a,e.v)===a&&a!==e.v)&&(e={t:n.start,v:a})}return e}function Un(r){var t;let i=new Map;for(let e of r){let n=new Date(e.start),a=new Date(n.getFullYear(),n.getMonth(),1).getTime(),s=i.get(a);s||(s={start:a,end:new Date(n.getFullYear(),n.getMonth()+1,1).getTime(),min:null,max:null,mean:null,change:null,_n:0,_sum:0},i.set(a,s)),e.min!=null&&(s.min=s.min==null?e.min:Math.min(s.min,e.min)),e.max!=null&&(s.max=s.max==null?e.max:Math.max(s.max,e.max)),e.mean!=null&&(s._sum+=e.mean,s._n++,s.mean=s._sum/s._n),e.change!=null&&(s.change=((t=s.change)!=null?t:0)+e.change)}return[...i.values()].sort((e,n)=>e.start-n.start)}var Ii={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Pi=r=>(...i)=>({_$litDirective$:r,values:i}),ce=class{constructor(i){}get _$AU(){return this._$AM._$AU}_$AT(i,t,e){this._$Ct=i,this._$AM=t,this._$Ci=e}_$AS(i,t){return this.update(i,t)}update(i,t){return this.render(...t)}};var{I:Nn}=ci,Fi=r=>r;var Oi=()=>document.createComment(""),Mt=(r,i,t)=>{var a;let e=r._$AA.parentNode,n=i===void 0?r._$AB:i._$AA;if(t===void 0){let s=e.insertBefore(Oi(),n),l=e.insertBefore(Oi(),n);t=new Nn(s,l,r,r.options)}else{let s=t._$AB.nextSibling,l=t._$AM,o=l!==r;if(o){let c;(a=t._$AQ)==null||a.call(t,r),t._$AM=r,t._$AP!==void 0&&(c=r._$AU)!==l._$AU&&t._$AP(c)}if(s!==n||o){let c=t._$AA;for(;c!==s;){let d=Fi(c).nextSibling;Fi(e).insertBefore(c,n),c=d}}}return t},rt=(r,i,t=r)=>(r._$AI(i,t),r),Ln={},Ui=(r,i=Ln)=>r._$AH=i,Ni=r=>r._$AH,de=r=>{r._$AR(),r._$AA.remove()};var Li=(r,i,t)=>{let e=new Map;for(let n=i;n<=t;n++)e.set(r[n],n);return e},Ki=Pi(class extends ce{constructor(r){if(super(r),r.type!==Ii.CHILD)throw Error("repeat() can only be used in text expressions")}dt(r,i,t){let e;t===void 0?t=i:i!==void 0&&(e=i);let n=[],a=[],s=0;for(let l of r)n[s]=e?e(l,s):s,a[s]=t(l,s),s++;return{values:a,keys:n}}render(r,i,t){return this.dt(r,i,t).values}update(r,[i,t,e]){var b;let n=Ni(r),{values:a,keys:s}=this.dt(i,t,e);if(!Array.isArray(n))return this.ut=s,a;let l=(b=this.ut)!=null?b:this.ut=[],o=[],c,d,h=0,m=n.length-1,p=0,f=a.length-1;for(;h<=m&&p<=f;)if(n[h]===null)h++;else if(n[m]===null)m--;else if(l[h]===s[p])o[p]=rt(n[h],a[p]),h++,p++;else if(l[m]===s[f])o[f]=rt(n[m],a[f]),m--,f--;else if(l[h]===s[f])o[f]=rt(n[h],a[f]),Mt(r,o[f+1],n[h]),h++,f--;else if(l[m]===s[p])o[p]=rt(n[m],a[p]),Mt(r,n[h],n[m]),m--,p++;else if(c===void 0&&(c=Li(s,p,f),d=Li(l,h,m)),c.has(l[h]))if(c.has(l[m])){let y=d.get(s[p]),x=y!==void 0?n[y]:null;if(x===null){let A=Mt(r,n[h]);rt(A,a[p]),o[p]=A}else o[p]=rt(x,a[p]),Mt(r,n[h],x),n[y]=null;p++}else de(n[m]),m--;else de(n[h]),h++;for(;p<=f;){let y=Mt(r,o[f+1]);rt(y,a[p]),o[p++]=y}for(;h<=m;){let y=n[h++];y!==null&&de(y)}return this.ut=s,Ui(r,o),V}});var Kn={rainy:["clouds","rain"],pouring:["clouds","pour"],hail:["clouds","hail"],"lightning-rainy":["clouds","rain","flash"],lightning:["clouds","flash"],snowy:["fewclouds","snow"],"snowy-rainy":["fewclouds","sleet"],sunny:["sun"],"clear-night":["stars"],partlycloudy:["sun","fewclouds"],cloudy:["clouds"],fog:["fog"],windy:["wind"],"windy-variant":["fewclouds","wind"]};function jn(r){return()=>{r=r+1831565813|0;let i=Math.imul(r^r>>>15,1|r);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}var Gn=r=>[{transform:"translate3d(0,-40px,0)",opacity:r},{transform:"translate3d(0,230px,0)",opacity:r,offset:.43},{transform:"translate3d(0,580px,0)",opacity:0}],Qn=r=>[{transform:"translate3d(0,-10px,0)",opacity:r},{transform:"translate3d(14px,280px,0)",opacity:r*.8},{transform:"translate3d(0,570px,0)",opacity:0}],Wn=r=>[{transform:"translate3d(0,-20px,0)",opacity:r,easing:"ease-in"},{transform:"translate3d(0,300px,0)",opacity:r,offset:.62},{transform:"translate3d(4px,270px,0)",opacity:r*.7,offset:.72},{transform:"translate3d(7px,520px,0)",opacity:0}],He=r=>[{transform:`translate3d(-${r}%,0,0)`},{transform:"translate3d(100%,0,0)"}];function ze(r,i){let t=jn(i),e=n=>[...Array(n)];switch(r){case"rain":case"pour":case"sleet":return e(r==="pour"?56:r==="sleet"?14:28).map(()=>{let a=700+t()*500;return{cls:"drop",style:`left:${(t()*100).toFixed(1)}%;height:${Math.round(14+t()*14)}px`,anim:Gn(.4+t()*.6),dur:a,delay:-t()*a}}).concat(r==="sleet"?ze("snow",i+7).slice(0,18):[]);case"hail":return e(26).map(()=>{let n=900+t()*500,a=(3.5+t()*2.5).toFixed(1);return{cls:"hail",style:`left:${(t()*100).toFixed(1)}%;top:${Math.round(-t()*160)}px;width:${a}px;height:${a}px`,anim:Wn(.6+t()*.4),dur:n,delay:-t()*n}}).concat(ze("rain",i+3).slice(0,10));case"snow":return e(36).map(()=>{let n=9e3+t()*8e3,a=(2+t()*2.5).toFixed(1);return{cls:"flake",style:`left:${(t()*100).toFixed(1)}%;width:${a}px;height:${a}px`,anim:Qn(.35+t()*.5),dur:n,delay:-t()*n}});case"stars":case"fewstars":return e(r==="stars"?46:18).map(()=>{let n=(1+t()*1.6).toFixed(1);return{cls:"star",style:`left:${(t()*100).toFixed(1)}%;top:${(t()*300).toFixed(0)}px;width:${n}px;height:${n}px`,anim:[{opacity:.15},{opacity:.4+t()*.6}],dur:1800+t()*3500,delay:-t()*4e3,easing:"ease-in-out",dir:"alternate"}});case"sun":return[{cls:"glow",style:"",anim:[{transform:"scale(1)",opacity:.75},{transform:"scale(1.08)",opacity:1}],dur:7e3,delay:0,easing:"ease-in-out",dir:"alternate"},{cls:"rays",style:"",anim:[{transform:"rotate(0deg)"},{transform:"rotate(360deg)"}],dur:14e4,delay:0}];case"clouds":case"fewclouds":return e(r==="clouds"?5:3).map((n,a)=>{let s=7e4+t()*5e4;return{cls:"lane",style:`top:${Math.round(10+a*(r==="clouds"?70:90)+t()*30)}px;--cw:${Math.round(28+t()*16)}%;opacity:${(.5+t()*.5).toFixed(2)}`,anim:He(45),dur:s,delay:-t()*s}});case"fog":return e(4).map((n,a)=>{let s=5e4+t()*4e4;return{cls:"lane fogl",style:`top:${60+a*90}px`,anim:He(80),dur:s,delay:-t()*s}});case"wind":return e(10).map(()=>{let n=2200+t()*2200;return{cls:"lane windl",style:`top:${Math.round(20+t()*380)}px;--sw:${Math.round(60+t()*90)}px;opacity:${(.3+t()*.6).toFixed(2)}`,anim:He(20),dur:n,delay:-t()*n*3}});case"flash":return[{cls:"flash",style:"",anim:[{opacity:0,offset:0},{opacity:0,offset:.1},{opacity:.38,offset:.11},{opacity:0,offset:.13},{opacity:.24,offset:.15},{opacity:0,offset:.17},{opacity:0,offset:1}],dur:8e3,delay:0}]}}var ji=new Map;function Yn(r,i){var n;let t=`${r}|${i}`,e=ji.get(t);return e||(e=((n=Kn[r])!=null?n:[]).map(s=>i&&s==="sun"?"fewstars":s).flatMap((s,l)=>ze(s,l*31+1)),ji.set(t,e)),e}var Gi=1500,Tt=class extends z{constructor(){super(...arguments);this.night=!1;this._groups=[];this._started=new WeakSet}willUpdate(t){if(!t.has("condition")&&!t.has("night"))return;let e=this.condition?`${this.condition}|${this.night}`:"",n=this._groups.find(a=>!a.leaving);(n==null?void 0:n.key)!==e&&(this._groups=[...this._groups.filter(a=>a!==n&&!a.leaving),...n?[{...n,leaving:!0}]:[],...e?[{key:e,items:Yn(this.condition,this.night)}]:[]])}render(){return u`${Ki(this._groups,t=>t.key,t=>u`<div class="g" data-key=${t.key}>
      ${t.items.map(e=>u`<i class=${e.cls} style=${e.style}>${e.cls.startsWith("lane")?u`<b></b>`:v}</i>`)}
    </div>`)}`}updated(){this.renderRoot.querySelectorAll(".g").forEach(e=>{let n=this._groups.find(a=>a.key===e.dataset.key);if(!(!n||typeof e.animate!="function")){if(n.leaving){this._started.has(e)&&!e.dataset.out?(e.dataset.out="1",e.animate([{opacity:1},{opacity:0}],{duration:Gi,fill:"forwards"}).onfinish=()=>{this._groups=this._groups.filter(a=>a!==n)}):this._started.has(e)||(this._groups=this._groups.filter(a=>a!==n));return}this._started.has(e)||(this._started.add(e),e.animate([{opacity:0},{opacity:1}],{duration:Gi}),e.querySelectorAll("i").forEach((a,s)=>{var o,c;let l=n.items[s];l&&a.animate(l.anim,{duration:l.dur,delay:l.delay,iterations:1/0,easing:(o=l.easing)!=null?o:"linear",direction:(c=l.dir)!=null?c:"normal"})}))}})}};Tt.properties={condition:{},night:{type:Boolean},_groups:{state:!0}},Tt.styles=E`
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
  `;var Qi=[["wetter-app",yt,"Wetter-App","Komplette Wetter-App mit Vorhersage und Historie"],["wetter-app-kompakt",$t,"Wetter-App kompakt","Das Wichtigste aus Vorhersage und Historie, Knopf zur Wetter-App"]],Vn=[["wetter-app-chart",kt],["wetter-app-day-detail",_t],["wetter-app-history",St],["wetter-app-sky",Tt]];for(let[r,i]of[...Vn,...Qi])customElements.get(r)||customElements.define(r,i);var pe=window;pe.customCards=pe.customCards||[];for(let[r,,i,t]of Qi)pe.customCards.some(e=>e.type===r)||pe.customCards.push({type:r,name:i,description:t,preview:!1});console.info("%c WETTER-APP %c 0.1.0 (2026-10-25 13:54 UTC) ","background:#2f6fc4;color:#fff;border-radius:3px 0 0 3px","background:#555;color:#fff;border-radius:0 3px 3px 0");
