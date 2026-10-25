var Kt=globalThis,jt=Kt.ShadowRoot&&(Kt.ShadyCSS===void 0||Kt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,xe=Symbol(),Ve=new WeakMap,Rt=class{constructor(i,t,e){if(this._$cssResult$=!0,e!==xe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=t}get styleSheet(){let i=this.o,t=this.t;if(jt&&i===void 0){let e=t!==void 0&&t.length===1;e&&(i=Ve.get(t)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),e&&Ve.set(t,i))}return i}toString(){return this.cssText}},Ze=a=>new Rt(typeof a=="string"?a:a+"",void 0,xe),H=(a,...i)=>{let t=a.length===1?a[0]:i.reduce((e,n,s)=>e+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+a[s+1],a[0]);return new Rt(t,a,xe)},Je=(a,i)=>{if(jt)a.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of i){let e=document.createElement("style"),n=Kt.litNonce;n!==void 0&&e.setAttribute("nonce",n),e.textContent=t.cssText,a.appendChild(e)}},ve=jt?a=>a:a=>a instanceof CSSStyleSheet?(i=>{let t="";for(let e of i.cssRules)t+=e.cssText;return Ze(t)})(a):a;var{is:rn,defineProperty:an,getOwnPropertyDescriptor:on,getOwnPropertyNames:ln,getOwnPropertySymbols:cn,getPrototypeOf:dn}=Object,et=globalThis,qe=et.trustedTypes,hn=qe?qe.emptyScript:"",we=et.reactiveElementPolyfillSupport,Ht=(a,i)=>a,ye={toAttribute(a,i){switch(i){case Boolean:a=a?hn:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,i){let t=a;switch(i){case Boolean:t=a!==null;break;case Number:t=a===null?null:Number(a);break;case Object:case Array:try{t=JSON.parse(a)}catch{t=null}}return t}},ni=(a,i)=>!rn(a,i),Xe={attribute:!0,type:String,converter:ye,reflect:!1,useDefault:!1,hasChanged:ni},ti,ei;(ti=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(ei=et.litPropertyMetadata)!=null||(et.litPropertyMetadata=new WeakMap);var J=class extends HTMLElement{static addInitializer(i){var t;this._$Ei(),((t=this.l)!=null?t:this.l=[]).push(i)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(i,t=Xe){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(i)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(i,t),!t.noAccessor){let e=Symbol(),n=this.getPropertyDescriptor(i,e,t);n!==void 0&&an(this.prototype,i,n)}}static getPropertyDescriptor(i,t,e){var r;let{get:n,set:s}=(r=on(this.prototype,i))!=null?r:{get(){return this[t]},set(l){this[t]=l}};return{get:n,set(l){let o=n==null?void 0:n.call(this);s==null||s.call(this,l),this.requestUpdate(i,o,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(i){var t;return(t=this.elementProperties.get(i))!=null?t:Xe}static _$Ei(){if(this.hasOwnProperty(Ht("elementProperties")))return;let i=dn(this);i.finalize(),i.l!==void 0&&(this.l=[...i.l]),this.elementProperties=new Map(i.elementProperties)}static finalize(){if(this.hasOwnProperty(Ht("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ht("properties"))){let t=this.properties,e=[...ln(t),...cn(t)];for(let n of e)this.createProperty(n,t[n])}let i=this[Symbol.metadata];if(i!==null){let t=litPropertyMetadata.get(i);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[t,e]of this.elementProperties){let n=this._$Eu(t,e);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(i){let t=[];if(Array.isArray(i)){let e=new Set(i.flat(1/0).reverse());for(let n of e)t.unshift(ve(n))}else i!==void 0&&t.push(ve(i));return t}static _$Eu(i,t){let e=t.attribute;return e===!1?void 0:typeof e=="string"?e:typeof i=="string"?i.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var i;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(i=this.constructor.l)==null||i.forEach(t=>t(this))}addController(i){var t,e;((t=this._$EO)!=null?t:this._$EO=new Set).add(i),this.renderRoot!==void 0&&this.isConnected&&((e=i.hostConnected)==null||e.call(i))}removeController(i){var t;(t=this._$EO)==null||t.delete(i)}_$E_(){let i=new Map,t=this.constructor.elementProperties;for(let e of t.keys())this.hasOwnProperty(e)&&(i.set(e,this[e]),delete this[e]);i.size>0&&(this._$Ep=i)}createRenderRoot(){var t;let i=(t=this.shadowRoot)!=null?t:this.attachShadow(this.constructor.shadowRootOptions);return Je(i,this.constructor.elementStyles),i}connectedCallback(){var i,t;(i=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostConnected)==null?void 0:n.call(e)})}enableUpdating(i){}disconnectedCallback(){var i;(i=this._$EO)==null||i.forEach(t=>{var e;return(e=t.hostDisconnected)==null?void 0:e.call(t)})}attributeChangedCallback(i,t,e){this._$AK(i,e)}_$ET(i,t){var s;let e=this.constructor.elementProperties.get(i),n=this.constructor._$Eu(i,e);if(n!==void 0&&e.reflect===!0){let r=(((s=e.converter)==null?void 0:s.toAttribute)!==void 0?e.converter:ye).toAttribute(t,e.type);this._$Em=i,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(i,t){var s,r,l;let e=this.constructor,n=e._$Eh.get(i);if(n!==void 0&&this._$Em!==n){let o=e.getPropertyOptions(n),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)==null?void 0:s.fromAttribute)!==void 0?o.converter:ye;this._$Em=n;let d=c.fromAttribute(t,o.type);this[n]=(l=d!=null?d:(r=this._$Ej)==null?void 0:r.get(n))!=null?l:d,this._$Em=null}}requestUpdate(i,t,e,n=!1,s){var r,l;if(i!==void 0){let o=this.constructor;if(n===!1&&(s=this[i]),e!=null||(e=o.getPropertyOptions(i)),!(((r=e.hasChanged)!=null?r:ni)(s,t)||e.useDefault&&e.reflect&&s===((l=this._$Ej)==null?void 0:l.get(i))&&!this.hasAttribute(o._$Eu(i,e))))return;this.C(i,t,e)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(i,t,{useDefault:e,reflect:n,wrapped:s},r){var l,o,c;e&&!((l=this._$Ej)!=null?l:this._$Ej=new Map).has(i)&&(this._$Ej.set(i,(o=r!=null?r:t)!=null?o:this[i]),s!==!0||r!==void 0)||(this._$AL.has(i)||(this.hasUpdated||e||(t=void 0),this._$AL.set(i,t)),n===!0&&this._$Em!==i&&((c=this._$Eq)!=null?c:this._$Eq=new Set).add(i))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let i=this.scheduleUpdate();return i!=null&&await i,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e,n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[r,l]of this._$Ep)this[r]=l;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[r,l]of s){let{wrapped:o}=l,c=this[r];o!==!0||this._$AL.has(r)||c===void 0||this.C(r,void 0,l,c)}}let i=!1,t=this._$AL;try{i=this.shouldUpdate(t),i?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(s=>{var r;return(r=s.hostUpdate)==null?void 0:r.call(s)}),this.update(t)):this._$EM()}catch(s){throw i=!1,this._$EM(),s}i&&this._$AE(t)}willUpdate(i){}_$AE(i){var t;(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostUpdated)==null?void 0:n.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(i)),this.updated(i)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(i){return!0}update(i){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(i){}firstUpdated(i){}},ii;J.elementStyles=[],J.shadowRootOptions={mode:"open"},J[Ht("elementProperties")]=new Map,J[Ht("finalized")]=new Map,we==null||we({ReactiveElement:J}),((ii=et.reactiveElementVersions)!=null?ii:et.reactiveElementVersions=[]).push("2.1.2");var zt=globalThis,si=a=>a,Gt=zt.trustedTypes,ri=Gt?Gt.createPolicy("lit-html",{createHTML:a=>a}):void 0,_e="$lit$",q=`lit$${Math.random().toFixed(9).slice(2)}$`,ke="?"+q,pn=`<${ke}>`,dt=document,Bt=()=>dt.createComment(""),Pt=a=>a===null||typeof a!="object"&&typeof a!="function",Se=Array.isArray,pi=a=>Se(a)||typeof(a==null?void 0:a[Symbol.iterator])=="function",$e=`[ 	
\f\r]`,It=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ai=/-->/g,oi=/>/g,lt=RegExp(`>|${$e}(?:([^\\s"'>=/]+)(${$e}*=${$e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),li=/'/g,ci=/"/g,ui=/^(?:script|style|textarea|title)$/i,Me=a=>(i,...t)=>({_$litType$:a,strings:i,values:t}),g=Me(1),$=Me(2),cs=Me(3),X=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),di=new WeakMap,ct=dt.createTreeWalker(dt,129);function mi(a,i){if(!Se(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return ri!==void 0?ri.createHTML(i):i}var gi=(a,i)=>{let t=a.length-1,e=[],n,s=i===2?"<svg>":i===3?"<math>":"",r=It;for(let l=0;l<t;l++){let o=a[l],c,d,h=-1,m=0;for(;m<o.length&&(r.lastIndex=m,d=r.exec(o),d!==null);)m=r.lastIndex,r===It?d[1]==="!--"?r=ai:d[1]!==void 0?r=oi:d[2]!==void 0?(ui.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=lt):d[3]!==void 0&&(r=lt):r===lt?d[0]===">"?(r=n!=null?n:It,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,c=d[1],r=d[3]===void 0?lt:d[3]==='"'?ci:li):r===ci||r===li?r=lt:r===ai||r===oi?r=It:(r=lt,n=void 0);let p=r===lt&&a[l+1].startsWith("/>")?" ":"";s+=r===It?o+pn:h>=0?(e.push(c),o.slice(0,h)+_e+o.slice(h)+q+p):o+q+(h===-2?l:p)}return[mi(a,s+(a[t]||"<?>")+(i===2?"</svg>":i===3?"</math>":"")),e]},Ft=class a{constructor({strings:i,_$litType$:t},e){let n;this.parts=[];let s=0,r=0,l=i.length-1,o=this.parts,[c,d]=gi(i,t);if(this.el=a.createElement(c,e),ct.currentNode=this.el.content,t===2||t===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(n=ct.nextNode())!==null&&o.length<l;){if(n.nodeType===1){if(n.hasAttributes())for(let h of n.getAttributeNames())if(h.endsWith(_e)){let m=d[r++],p=n.getAttribute(h).split(q),w=/([.?@])?(.*)/.exec(m);o.push({type:1,index:s,name:w[2],strings:p,ctor:w[1]==="."?Wt:w[1]==="?"?Yt:w[1]==="@"?Vt:pt}),n.removeAttribute(h)}else h.startsWith(q)&&(o.push({type:6,index:s}),n.removeAttribute(h));if(ui.test(n.tagName)){let h=n.textContent.split(q),m=h.length-1;if(m>0){n.textContent=Gt?Gt.emptyScript:"";for(let p=0;p<m;p++)n.append(h[p],Bt()),ct.nextNode(),o.push({type:2,index:++s});n.append(h[m],Bt())}}}else if(n.nodeType===8)if(n.data===ke)o.push({type:2,index:s});else{let h=-1;for(;(h=n.data.indexOf(q,h+1))!==-1;)o.push({type:7,index:s}),h+=q.length-1}s++}}static createElement(i,t){let e=dt.createElement("template");return e.innerHTML=i,e}};function ht(a,i,t=a,e){var r,l,o;if(i===X)return i;let n=e!==void 0?(r=t._$Co)==null?void 0:r[e]:t._$Cl,s=Pt(i)?void 0:i._$litDirective$;return(n==null?void 0:n.constructor)!==s&&((l=n==null?void 0:n._$AO)==null||l.call(n,!1),s===void 0?n=void 0:(n=new s(a),n._$AT(a,t,e)),e!==void 0?((o=t._$Co)!=null?o:t._$Co=[])[e]=n:t._$Cl=n),n!==void 0&&(i=ht(a,n._$AS(a,i.values),n,e)),i}var Qt=class{constructor(i,t){this._$AV=[],this._$AN=void 0,this._$AD=i,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(i){var c;let{el:{content:t},parts:e}=this._$AD,n=((c=i==null?void 0:i.creationScope)!=null?c:dt).importNode(t,!0);ct.currentNode=n;let s=ct.nextNode(),r=0,l=0,o=e[0];for(;o!==void 0;){if(r===o.index){let d;o.type===2?d=new vt(s,s.nextSibling,this,i):o.type===1?d=new o.ctor(s,o.name,o.strings,this,i):o.type===6&&(d=new Zt(s,this,i)),this._$AV.push(d),o=e[++l]}r!==(o==null?void 0:o.index)&&(s=ct.nextNode(),r++)}return ct.currentNode=dt,n}p(i){let t=0;for(let e of this._$AV)e!==void 0&&(e.strings!==void 0?(e._$AI(i,e,t),t+=e.strings.length-2):e._$AI(i[t])),t++}},vt=class a{get _$AU(){var i,t;return(t=(i=this._$AM)==null?void 0:i._$AU)!=null?t:this._$Cv}constructor(i,t,e,n){var s;this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=i,this._$AB=t,this._$AM=e,this.options=n,this._$Cv=(s=n==null?void 0:n.isConnected)!=null?s:!0}get parentNode(){let i=this._$AA.parentNode,t=this._$AM;return t!==void 0&&(i==null?void 0:i.nodeType)===11&&(i=t.parentNode),i}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(i,t=this){i=ht(this,i,t),Pt(i)?i===v||i==null||i===""?(this._$AH!==v&&this._$AR(),this._$AH=v):i!==this._$AH&&i!==X&&this._(i):i._$litType$!==void 0?this.$(i):i.nodeType!==void 0?this.T(i):pi(i)?this.k(i):this._(i)}O(i){return this._$AA.parentNode.insertBefore(i,this._$AB)}T(i){this._$AH!==i&&(this._$AR(),this._$AH=this.O(i))}_(i){this._$AH!==v&&Pt(this._$AH)?this._$AA.nextSibling.data=i:this.T(dt.createTextNode(i)),this._$AH=i}$(i){var s;let{values:t,_$litType$:e}=i,n=typeof e=="number"?this._$AC(i):(e.el===void 0&&(e.el=Ft.createElement(mi(e.h,e.h[0]),this.options)),e);if(((s=this._$AH)==null?void 0:s._$AD)===n)this._$AH.p(t);else{let r=new Qt(n,this),l=r.u(this.options);r.p(t),this.T(l),this._$AH=r}}_$AC(i){let t=di.get(i.strings);return t===void 0&&di.set(i.strings,t=new Ft(i)),t}k(i){Se(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,e,n=0;for(let s of i)n===t.length?t.push(e=new a(this.O(Bt()),this.O(Bt()),this,this.options)):e=t[n],e._$AI(s),n++;n<t.length&&(this._$AR(e&&e._$AB.nextSibling,n),t.length=n)}_$AR(i=this._$AA.nextSibling,t){var e;for((e=this._$AP)==null?void 0:e.call(this,!1,!0,t);i!==this._$AB;){let n=si(i).nextSibling;si(i).remove(),i=n}}setConnected(i){var t;this._$AM===void 0&&(this._$Cv=i,(t=this._$AP)==null||t.call(this,i))}},pt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(i,t,e,n,s){this.type=1,this._$AH=v,this._$AN=void 0,this.element=i,this.name=t,this._$AM=n,this.options=s,e.length>2||e[0]!==""||e[1]!==""?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=v}_$AI(i,t=this,e,n){let s=this.strings,r=!1;if(s===void 0)i=ht(this,i,t,0),r=!Pt(i)||i!==this._$AH&&i!==X,r&&(this._$AH=i);else{let l=i,o,c;for(i=s[0],o=0;o<s.length-1;o++)c=ht(this,l[e+o],t,o),c===X&&(c=this._$AH[o]),r||(r=!Pt(c)||c!==this._$AH[o]),c===v?i=v:i!==v&&(i+=(c!=null?c:"")+s[o+1]),this._$AH[o]=c}r&&!n&&this.j(i)}j(i){i===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,i!=null?i:"")}},Wt=class extends pt{constructor(){super(...arguments),this.type=3}j(i){this.element[this.name]=i===v?void 0:i}},Yt=class extends pt{constructor(){super(...arguments),this.type=4}j(i){this.element.toggleAttribute(this.name,!!i&&i!==v)}},Vt=class extends pt{constructor(i,t,e,n,s){super(i,t,e,n,s),this.type=5}_$AI(i,t=this){var r;if((i=(r=ht(this,i,t,0))!=null?r:v)===X)return;let e=this._$AH,n=i===v&&e!==v||i.capture!==e.capture||i.once!==e.once||i.passive!==e.passive,s=i!==v&&(e===v||n);n&&this.element.removeEventListener(this.name,this,e),s&&this.element.addEventListener(this.name,this,i),this._$AH=i}handleEvent(i){var t,e;typeof this._$AH=="function"?this._$AH.call((e=(t=this.options)==null?void 0:t.host)!=null?e:this.element,i):this._$AH.handleEvent(i)}},Zt=class{constructor(i,t,e){this.element=i,this.type=6,this._$AN=void 0,this._$AM=t,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(i){ht(this,i)}},fi={M:_e,P:q,A:ke,C:1,L:gi,R:Qt,D:pi,V:ht,I:vt,H:pt,N:Yt,U:Vt,B:Wt,F:Zt},Ae=zt.litHtmlPolyfillSupport,hi;Ae==null||Ae(Ft,vt),((hi=zt.litHtmlVersions)!=null?hi:zt.litHtmlVersions=[]).push("3.3.3");var bi=(a,i,t)=>{var s,r;let e=(s=t==null?void 0:t.renderBefore)!=null?s:i,n=e._$litPart$;if(n===void 0){let l=(r=t==null?void 0:t.renderBefore)!=null?r:null;e._$litPart$=n=new vt(i.insertBefore(Bt(),l),l,void 0,t!=null?t:{})}return n._$AI(a),n};var ut=globalThis,P=class extends J{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!=null||(t.renderBefore=i.firstChild),i}update(i){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Do=bi(t,this.renderRoot,this.renderOptions)}connectedCallback(){var i;super.connectedCallback(),(i=this._$Do)==null||i.setConnected(!0)}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this._$Do)==null||i.setConnected(!1)}render(){return X}},xi;P._$litElement$=!0,P.finalized=!0,(xi=ut.litElementHydrateSupport)==null||xi.call(ut,{LitElement:P});var Te=ut.litElementPolyfillSupport;Te==null||Te({LitElement:P});var vi;((vi=ut.litElementVersions)!=null?vi:ut.litElementVersions=[]).push("4.2.2");var it=class{constructor(i,t,e){this.host=i;this.type=t;this.entity=e;this.connected=!1;this.retryDelay=1e4;i.addController(this)}hostConnected(){this.connected=!0,this.sync()}hostDisconnected(){this.connected=!1,this.stop()}hostUpdated(){this.sync()}sync(){let i=this.host.hass,t=this.entity();if(!this.connected||!i||!t)return;let e=`${t}|${this.type}`;if(e===this.subscribedKey)return;this.stop(),this.subscribedKey=e;let n=i.connection.subscribeMessage(s=>{var r;this.forecast=(r=s.forecast)!=null?r:[],this.error=void 0,this.retryDelay=1e4,this.host.requestUpdate()},{type:"weather/subscribe_forecast",forecast_type:this.type,entity_id:t});this.unsub=n,n.catch(s=>{var r;this.unsub===n&&(this.error=(r=s==null?void 0:s.message)!=null?r:String(s),this.host.requestUpdate(),this.retryTimer=window.setTimeout(()=>{this.unsub===n&&(this.unsub=void 0,this.subscribedKey=void 0,this.sync())},this.retryDelay),this.retryDelay=Math.min(3e5,this.retryDelay*2))})}stop(){clearTimeout(this.retryTimer);let i=this.unsub;this.unsub=void 0,this.subscribedKey=void 0,i==null||i.then(t=>t()).catch(()=>{})}};function Jt(a,i){let t=Math.ceil(Date.now()/3e5)*3e5,e=Math.floor(Date.now()/36e5)*36e5;return Promise.all([tt(a,{...i,end:new Date(e),period:"hour"}),t>e?tt(a,{...i,start:new Date(e),end:new Date(t),period:"5minute"}):Promise.resolve({})]).then(([n,s])=>({hours:n,current:s}))}function wi(a,i){var e;let t={...a};for(let[n,s]of Object.entries(i))t[n]=[...(e=t[n])!=null?e:[],...s];return t}var mt=new Map;function tt(a,i){let t=i.ids.filter(Boolean);if(!t.length)return Promise.resolve({});let e=JSON.stringify([t,i.start.getTime(),i.end.getTime(),i.period,i.types]),n=Date.now(),s=mt.get(e);if(s&&s.expires>n)return s.promise;let r=a.callWS({type:"recorder/statistics_during_period",start_time:i.start.toISOString(),end_time:i.end.toISOString(),statistic_ids:t,period:i.period,types:i.types}).then(un),l={promise:r,expires:i.end.getTime()<n-9e5?1/0:n+3e5};return mt.set(e,l),r.catch(()=>mt.get(e)===l&&mt.delete(e)),mt.size>60&&mt.delete(mt.keys().next().value),r}function un(a){for(let i of Object.values(a))for(let t of i)typeof t.start!="number"&&(t.start=new Date(t.start).getTime()),typeof t.end!="number"&&(t.end=new Date(t.end).getTime());return a}var I=(a,i)=>g`<div class="head"><ha-icon icon=${a}></ha-icon><span>${i}</span></div>`,De=H`
  .wicon { display: block; }
  .wicon .c1 { fill: var(--wa-cloud); }
  .wicon .c2 { fill: var(--wa-cloud2); }
  .wicon .mo { fill: var(--wa-moon); }
  .wicon .ln { stroke: var(--wa-cloud2); }
  .wicon .fl { fill: var(--wa-cloud2); }
`,nt=H`
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

  ${De}

  .warn {
    background: rgba(var(--rgb-warning-color, 255, 166, 0), 0.15); color: var(--wa-text);
    border-radius: var(--ha-card-border-radius, 12px); padding: 10px 14px; font-size: 14px;
  }
  .loading, .hint { color: var(--wa-text2); text-align: center; padding: 16px; font-size: 14px; }
`;function gt(a){return g`<div class="legend">${a.filter(Boolean).map(i=>{var t,e;return g`<span><i class=${(t=i.kind)!=null?t:"box"}
    style="background:${i.color};opacity:${(e=i.opacity)!=null?e:1}"></i>${i.label}</span>`})}</div>`}var qt=H`
  .legend { display: flex; flex-wrap: wrap; align-items: center; gap: 6px 14px; font-size: 12px; color: var(--wa-text2); margin-top: 8px; }
  .legend span { display: inline-flex; align-items: center; gap: 6px; white-space: nowrap; }
  .legend i { display: inline-block; width: 10px; height: 10px; border-radius: 2px; flex: none; }
  .legend i.line { height: 3px; }
`;var j=Math.PI/180;function Ee(a,i,t){let e=new Date(a.getFullYear(),a.getMonth(),a.getDate(),12),s=Math.round((e.getTime()-Date.UTC(2e3,0,1,12))/864e5)-t/360,r=(357.5291+.98560028*s)%360,l=1.9148*Math.sin(r*j)+.02*Math.sin(2*r*j)+3e-4*Math.sin(3*r*j),o=(r+l+180+102.9372)%360,c=s+.0053*Math.sin(r*j)-.0069*Math.sin(2*o*j),d=Math.asin(Math.sin(o*j)*Math.sin(23.4397*j)),h=(Math.sin(-.833*j)-Math.sin(i*j)*Math.sin(d))/(Math.cos(i*j)*Math.cos(d));if(h<-1||h>1)return;let m=Math.acos(h)/j/360,p=w=>new Date(Date.UTC(2e3,0,1,12)+w*864e5);return{rise:p(c-m),set:p(c+m),noon:p(c)}}var ft=29.530588853,mn=Date.UTC(2e3,0,6,18,14);function yi(a){let t=((a.getTime()-mn)/864e5%ft+ft)%ft,e=(1-Math.cos(t/ft*2*Math.PI))/2,n=(ft/2-t+ft)%ft;return{age:t,illumination:e,nextFull:new Date(a.getTime()+n*864e5)}}var gn={"clear-night":"Klar",cloudy:"Bew\xF6lkt",exceptional:"Unwetter",fog:"Nebel",hail:"Hagel",lightning:"Gewitter","lightning-rainy":"Gewitter mit Regen",partlycloudy:"Teilweise bew\xF6lkt",pouring:"Starkregen",rainy:"Regnerisch",snowy:"Schnee","snowy-rainy":"Schneeregen",sunny:"Sonnig",windy:"Windig","windy-variant":"Windig und bew\xF6lkt"};function bt(a){return a&&gn[a]||"\u2013"}var $i={sunny:"47,128,237",partlycloudy:"70,130,200",cloudy:"120,135,150","windy-variant":"120,135,150",rainy:"75,110,155",pouring:"65,95,140",hail:"90,100,125",snowy:"160,180,205","snowy-rainy":"130,150,175",fog:"150,155,160",lightning:"85,80,125","lightning-rainy":"85,80,125",exceptional:"150,70,70",windy:"100,140,170"},fn="35,50,100";function Xt(a,i,t=i?.35:.45){return`rgba(${i&&(a==="sunny"||a==="clear-night"||a==="partlycloudy")?fn:a&&$i[a]||$i.cloudy},${t})`}var bn={new_moon:"Neumond",waxing_crescent:"Zunehmende Sichel",first_quarter:"Erstes Viertel",waxing_gibbous:"Zunehmender Mond",full_moon:"Vollmond",waning_gibbous:"Abnehmender Mond",last_quarter:"Letztes Viertel",waning_crescent:"Abnehmende Sichel"};function Ai(a){return a&&bn[a]||"\u2013"}var _i="data:image/jpeg;base64,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";var ki=new Map;function M(a,i=1){if(a==null||!isFinite(a))return"\u2013";let t=ki.get(i);return t||(t=new Intl.NumberFormat("de-DE",{minimumFractionDigits:i,maximumFractionDigits:i}),ki.set(i,t)),t.format(a)}var E=(a,i=0)=>a==null?"\u2013":`${M(a,i)}\xB0`,st=(a,i=1)=>`${M(a,i)} l/m\xB2`;function C(a,i){let t=i?a==null?void 0:a.states[i]:void 0;if(!t)return;let e=parseFloat(t.state);return isFinite(e)?e:void 0}var xn=["So","Mo","Di","Mi","Do","Fr","Sa"];function Ot(a,i=new Date){return a.toDateString()===i.toDateString()?"Heute":xn[a.getDay()]}function te(a){return`${String(a.getHours()).padStart(2,"0")} Uhr`}function ee(a){return a.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}var vn=["N","NO","O","SO","S","SW","W","NW"];function wt(a){return a==null||!isFinite(a)?"\u2013":vn[Math.round((a%360+360)%360/45)%8]}function Si(a){return g`<div class="tiles">
    ${$n(a)} ${wn(a)} ${An(a)} ${_n(a)} ${kn(a)} ${Mn(a)} ${Tn(a)} ${Dn(a)}
  </div>`}function wn({hass:a,config:i}){var r;let t=(r=i.sensors)!=null?r:{},e=C(a,t.feels_like);if(e==null)return v;let n=C(a,t.temperature),s=n==null?"":e<n-1?"Durch den Wind f\xFChlt es sich k\xE4lter an.":e>n+1?"Durch die Luftfeuchtigkeit f\xFChlt es sich w\xE4rmer an.":"\xC4hnlich wie die tats\xE4chliche Temperatur.";return g`<section class="card tile">${I("mdi:thermometer-lines","Gef\xFChlt")}
    <div class="val">${E(e)}</div>
    ${n!=null?g`<div class="lbl">Tatsächlich: ${E(n)}</div>${yn(e,n)}`:v}
    <div class="txt">${s}</div></section>`}function yn(a,i){let t=Math.round(a-i),e=Math.max(14,Math.abs(a-i)/.5),n=t<0?a-.32*e:t>0?a+.32*e-e:i-e/2,s=l=>(l-n)/e*100,r=t<0?"#6ec6f0":"#ffb74d";return g`<div class="fbar">
    ${t!==0?g`<i class="fseg" style="left:${s(Math.min(a,i))}%;width:${s(Math.max(a,i))-s(Math.min(a,i))}%;background:${r}"></i>
      <b class="fpill" style="left:${s(a)}%;background:${r};transform:translateX(${t<0?"-100%":"0"})">${t<0?"\u2193":"\u2191"}${Math.abs(t)}°</b>`:v}
    <i class="ftick" style="left:${s(i)}%"></i>
  </div>`}function $n({hass:a,config:i}){var l;let t=(l=i.sensors)!=null?l:{},e=C(a,t.wind_speed);if(e==null)return v;let n=C(a,t.wind_gust),s=C(a,t.wind_direction),r=[...Array(72)].map((o,c)=>{let d=c*5*Math.PI/180,h=c%18===0?38:41;return $`<line x1=${50+Math.sin(d)*h} y1=${50-Math.cos(d)*h} x2=${50+Math.sin(d)*45} y2=${50-Math.cos(d)*45} class=${c%18===0?"tk major":"tk"}/>`});return g`<section class="card tile wide2">${I("mdi:weather-windy","Wind")}
    <div class="wind">
      <div class="rows">
        <div class="row"><span>Wind</span><b>${M(e,0)} km/h</b></div>
        ${n!=null?g`<div class="row"><span>Böen</span><b>${M(n,0)} km/h</b></div>`:v}
        ${s!=null?g`<div class="row"><span>Richtung</span><b>${M(s,0)}° ${wt(s)}</b></div>`:v}
      </div>
      <svg class="compass" viewBox="0 0 100 100">
        ${r}
        ${["N","O","S","W"].map((o,c)=>$`<text x=${50+Math.sin(c*Math.PI/2)*30} y=${54-Math.cos(c*Math.PI/2)*30} class="cl">${o}</text>`)}
        ${s!=null?$`<g transform="rotate(${s+180} 50 50)">
          <line x1="50" y1="88" x2="50" y2="18" class="arrow"/><path d="M50 10l-6 11h12z" class="arrowhead"/>
          <circle cx="50" cy="88" r="3.5" class="arrowhead"/></g>`:v}
        <circle cx="50" cy="50" r="17" class="hub"/>
        <text x="50" y="50" class="cv">${M(e,0)}</text><text x="50" y="60" class="cu">km/h</text>
      </svg>
    </div></section>`}function An({hass:a,config:i,hourly:t,recent:e}){var c;let n=(c=i.sensors)!=null?c:{};if(!n.rain_total&&!t)return v;let s=n.rain_total&&(e!=null&&e[n.rain_total])?e[n.rain_total].reduce((d,h)=>{var m;return d+((m=h.change)!=null?m:0)},0):void 0,r=Date.now(),l=t==null?void 0:t.filter(d=>{let h=new Date(d.datetime).getTime();return h>=r-36e5&&h<r+23*36e5}).reduce((d,h)=>{var m;return d+((m=h.precipitation)!=null?m:0)},0),o=C(a,n.rain_rate);return g`<section class="card tile">${I("mdi:water","Niederschlag")}
    <div class="val">${s!=null?st(s):"\u2013"}</div>
    <div class="lbl">in den letzten 24 Std.</div>
    <div class="txt">${o?g`Aktuell ${M(o)} l/m² pro Std.<br>`:v}
      ${l!=null?`${st(l)} in den n\xE4chsten 24 Std. erwartet.`:""}</div></section>`}function _n({hass:a,config:i,recent:t}){var m;let e=(m=i.sensors)!=null?m:{},n=C(a,e.pressure);if(n==null)return v;let s=e.pressure?t==null?void 0:t[e.pressure]:void 0,r=s==null?void 0:s.filter(p=>p.end-p.start>=36e5),l=r&&r.length>=3?r[r.length-3].mean:void 0,o=l!=null?n-l:void 0,c=o==null?"":o>1?"steigend":o<-1?"fallend":"gleichbleibend",d=o==null?0:Math.max(-1,Math.min(1,o/4))*120,h=[...Array(41)].map((p,w)=>{let u=(-120+w*6)*Math.PI/180;return $`<line x1=${50+Math.sin(u)*36} y1=${54-Math.cos(u)*36} x2=${50+Math.sin(u)*44} y2=${54-Math.cos(u)*44} class="tk"/>`});return g`<section class="card tile">${I("mdi:gauge","Luftdruck")}
    <svg class="gauge" viewBox="0 0 100 92">
      ${h}
      <g transform="rotate(${d} 50 54)"><line x1="50" y1="6" x2="50" y2="20" class="needle"/></g>
      <text x="50" y="52" class="gv">${M(n,0)}</text><text x="50" y="64" class="gu">hPa</text>
      <text x="16" y="90" class="gu">−</text><text x="84" y="90" class="gu">+</text>
    </svg>
    <div class="txt">${c?g`3 Std.: ${c} (${o>0?"+":""}${M(o,1)} hPa)`:v}</div></section>`}function kn({hass:a,config:i}){var s;let t=(s=i.sensors)!=null?s:{},e=C(a,t.humidity);if(e==null)return v;let n=C(a,t.dewpoint);return g`<section class="card tile">${I("mdi:water-percent","Feuchtigkeit")}
    <div class="val">${M(e,0)} %</div>
    <div class="hbar"><i style="width:${Math.max(0,Math.min(100,e))}%"></i></div>
    <div class="txt">${n!=null?`Der Taupunkt liegt derzeit bei ${E(n)}.`:""}</div></section>`}var Sn=[[3,"Niedrig"],[6,"Mittel"],[8,"Hoch"],[11,"Sehr hoch"],[99,"Extrem"]];function Mn({hass:a,config:i}){var r;let t=(r=i.sensors)!=null?r:{},e=C(a,t.uv);if(e==null)return v;let n=C(a,t.solar),s=Sn.find(([l])=>e<l)[1];return g`<section class="card tile">${I("mdi:sun-wireless","UV-Index")}
    <div class="val">${M(e,0)}</div><div class="lbl">${s}</div>
    <div class="uvbar"><i style="left:${Math.min(100,e/11*100)}%"></i></div>
    <div class="txt">${n!=null?`Sonneneinstrahlung ${M(n,0)} W/m\xB2`:""}</div></section>`}function Tn({hass:a,config:i}){var D,T,B,Y,xt,V,O,Q,at;let t=(D=a.states[i.weather])==null?void 0:D.attributes,e=i.sun?a.states[i.sun]:void 0,n=(B=t==null?void 0:t.latitude)!=null?B:(T=a.config)==null?void 0:T.latitude,s=(xt=t==null?void 0:t.longitude)!=null?xt:(Y=a.config)==null?void 0:Y.longitude;if(n==null||s==null)return v;let r=new Date,l=Ee(r,n,s);if(!l)return v;let o=U=>U&&new Date(U).toDateString()===r.toDateString()?new Date(U):void 0,c=(V=o(e==null?void 0:e.attributes.next_rising))!=null?V:l.rise,d=(O=o(e==null?void 0:e.attributes.next_setting))!=null?O:l.set,h=r<d,m=r<c?["Sonnenaufgang",c]:h?["Sonnenuntergang",d]:["Sonnenaufgang",(at=(Q=Ee(new Date(r.getTime()+864e5),n,s))==null?void 0:Q.rise)!=null?at:c],p=new Date(r.getFullYear(),r.getMonth(),r.getDate()).getTime(),w=U=>(U.getTime()-p)/864e5,u=(w(c)+w(d))/2,b=w(d)-w(c),x=U=>Math.cos(2*Math.PI*(U-u)),_=Math.cos(Math.PI*b),A=U=>34-U*22,S=[...Array(49)].map((U,ot)=>`${ot?"L":"M"}${ot/48*100},${A(x(ot/48))}`).join(" "),F=w(r),y=r>=c&&r<d;return g`<section class="card tile">${I(y?"mdi:weather-sunset-down":"mdi:weather-sunset-up",m[0])}
    <div class="val">${ee(m[1])}</div>
    <div class="sunarc">
      <svg viewBox="0 0 100 60" preserveAspectRatio="none">
        <path d=${S} class="sunpath"/>
        <line x1="0" x2="100" y1=${A(_)} y2=${A(_)} class="hz"/>
      </svg>
      <!-- Punkt als HTML, sonst verzerrt preserveAspectRatio=none ihn zur Ellipse -->
      <i class=${y?"sundot":"sundot down"} style="left:${F*100}%;top:${A(x(F))/60*100}%"></i>
    </div>
    <div class="txt">${m[0]==="Sonnenuntergang"?`Sonnenaufgang: ${ee(c)}`:`Sonnenuntergang: ${ee(d)}`}</div>
  </section>`}function Dn({hass:a,config:i}){var r;let t=i.moon?(r=a.states[i.moon])==null?void 0:r.state:void 0,e=yi(new Date),n=Math.round((e.nextFull.getTime()-Date.now())/864e5),s=e.illumination;return g`<section class="card tile wide2 moont">${I("mdi:moon-waxing-gibbous",t?Ai(t):"Mond")}
    <div class="moon">
      <div>
        <div class="row"><span>Beleuchtung</span><b>${Math.round(s*100)} %</b></div>
        <div class="row"><span>Nächster Vollmond</span><b>${n<=0?"heute":n===1?"morgen":`in ${n} Tg.`}</b></div>
      </div>
      ${En(s,e.age<29.530588853/2)}
    </div></section>`}function En(a,i){let s=`M50 30 A20 20 0 0 0 50 70 A${20*Math.abs(1-2*a)} 20 0 0 ${a>.5?1:0} 50 30Z`;return $`<svg class="moonimg" viewBox="28 28 44 44" aria-hidden="true">
    <defs>
      <filter id="ms" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="0.6"/></filter>
      <clipPath id="mc"><circle cx=${50} cy=${50} r=${20}/></clipPath>
    </defs>
    <g clip-path="url(#mc)">
      <image href=${_i} x=${30} y=${30} width=${40} height=${40}/>
      ${a<.995?$`<path d=${s} fill="#05070c" fill-opacity="0.88" filter="url(#ms)"
        transform=${i?"":"translate(100 0) scale(-1 1)"}/>`:v}
    </g>
  </svg>`}var Mi=H`
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
`;var Cn="M18 46a10 10 0 0 1 0-20a14 14 0 0 1 27-3a11.5 11.5 0 0 1 1 23z",Ti=(a=32,i=32,t=11)=>$`
  <g class="sun">
    <circle cx=${a} cy=${i} r=${t} fill="#FFD84D"/>
    ${[0,45,90,135,180,225,270,315].map(e=>{let n=e*Math.PI/180,s=a+Math.cos(n)*(t+4),r=i+Math.sin(n)*(t+4),l=a+Math.cos(n)*(t+9),o=i+Math.sin(n)*(t+9);return $`<line x1=${s} y1=${r} x2=${l} y2=${o} stroke="#FFD84D" stroke-width="3.5" stroke-linecap="round"/>`})}
  </g>`,Ce=(a=0,i=0,t=1)=>$`
  <path class="mo" transform="translate(${a} ${i}) scale(${t})"
    d="M40 10a20 20 0 1 0 14 34A17 17 0 0 1 40 10z"/>`,L=(a=0,i=0,t=1,e="c1")=>$`
  <path transform="translate(${a} ${i}) scale(${t})" d=${Cn} class=${e}/>`,ie=a=>$`
  ${[...Array(a)].map((i,t)=>{let e=22+t*(20/Math.max(1,a-1));return $`<line x1=${e} y1="50" x2=${e-3} y2="58" stroke="#4FB3FF" stroke-width="3" stroke-linecap="round"/>`})}`,Di=$`${[22,32,42].map((a,i)=>$`<circle cx=${a} cy=${i%2?57:53} r="2.6" class="fl"/>`)}`,Ei=$`<path d="M34 44l-7 10h6l-3 9l10-13h-6l3-6z" fill="#FFD84D"/>`,Rn=$`${[40,47,54].map((a,i)=>$`<line x1=${12+i*3} y1=${a} x2=${52-i*2} y2=${a} class="ln" stroke-width="3.5" stroke-linecap="round"/>`)}`;function G(a,i=!1){let t;switch(a){case"sunny":t=i?Ce(2,6,.95):Ti();break;case"clear-night":t=Ce(2,6,.95);break;case"partlycloudy":t=$`${i?Ce(10,-2,.7):Ti(42,22,9)}${L(-4,6,1)}`;break;case"cloudy":case"windy-variant":t=$`${L(10,-4,.75,"c2")}${L(-4,6)}`;break;case"fog":t=$`${L(0,-8,.95,"c2")}${Rn}`;break;case"rainy":t=$`${L(0,-6)}${ie(3)}`;break;case"pouring":t=$`${L(0,-6,1,"c2")}${ie(5)}`;break;case"hail":t=$`${L(0,-6,1,"c2")}${Di}`;break;case"snowy":t=$`${L(0,-6)}${Di}`;break;case"snowy-rainy":t=$`${L(0,-6)}${ie(2)}<circle cx="32" cy="55" r="2.6" class="fl"/>`;break;case"lightning":t=$`${L(0,-8,1,"c2")}${Ei}`;break;case"lightning-rainy":case"exceptional":t=$`${L(0,-8,1,"c2")}${Ei}${ie(2)}`;break;case"windy":t=$`${[24,32,40].map((e,n)=>$`<path d="M10 ${e}h${30-n*6}a6 6 0 1 0-6-6" fill="none" class="ln" stroke-width="3.5" stroke-linecap="round"/>`)}`;break;default:t=L(0,0,1,"c2")}return $`<svg class="wicon" viewBox="0 0 64 64" aria-hidden="true">${t}</svg>`}function yt(a,i,t=Date.now()){let e=(a!=null?a:[]).filter(r=>r.temperature!=null).map(r=>({t:new Date(r.datetime).getTime(),v:r.temperature})),n=Hn(e,t),s=i!=null&&n!=null?i-n:0;return(r,l)=>{if(l==null||!s||r<=t)return l;let o=1-(r-t)/(3*36e5);return o>0?l+s*o:l}}function Hn(a,i){for(let t=0;t<a.length-1;t++){let e=a[t],n=a[t+1];if(e.t<=i&&i<=n.t)return e.v+(n.v-e.v)*(i-e.t)/(n.t-e.t||1)}if(a.length&&a[0].t>i&&a[0].t-i<=36e5)return a[0].v}var Ci=[{id:"temp",label:"Temperatur",icon:"mdi:thermometer"},{id:"rain",label:"Niederschlag",icon:"mdi:weather-pouring"},{id:"wind",label:"Wind",icon:"mdi:weather-windy"}],N=36e5,In=["S","M","D","M","D","F","S"];function ne(a){let i=new Date(a);return new Date(i.getFullYear(),i.getMonth(),i.getDate()).getTime()}function se(a,i,t){if(t&&t.index===i){let e=a.findIndex(n=>ne(n.datetime)===t.day);return e>=0?e:void 0}return i>=0&&i<a.length?i:void 0}var re=(a,i)=>({index:i,day:ne(a[i].datetime)}),$t=class extends P{constructor(){super(...arguments);this.hourly=[];this.daily=[];this.index=0;this.metric="temp";this.onKey=t=>t.key==="Escape"&&this.close();this.onResize=()=>this.requestUpdate()}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey),window.addEventListener("resize",this.onResize)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),window.removeEventListener("resize",this.onResize)}close(){this.dispatchEvent(new CustomEvent("close"))}willUpdate(t){(t.has("index")||t.has("hass"))&&this.loadPast()}loadPast(){var h,m;let t=(m=(h=this.config)==null?void 0:h.sensors)!=null?m:{},e=this.daily[this.index];if(!this.hass||!e)return;let n=ne(e.datetime),s=Date.now();if(n>s)return;let r=Math.min(n+24*N,Math.ceil(s/3e5)*3e5),l=`${n}|${r}`;if(l===this._pastKey)return;this._pastKey=l;let o=[t.temperature,t.rain_total,t.wind_speed,t.wind_gust].filter(Boolean),c=["mean","max","change"];(r<n+24*N?Jt(this.hass,{ids:o,start:new Date(n),types:c}):tt(this.hass,{ids:o,start:new Date(n),end:new Date(r),period:"hour",types:c}).then(p=>({hours:p,current:{}}))).then(p=>l===this._pastKey&&(this._past=p.hours,this._pastNow=p.current),()=>this._pastKey=void 0)}render(){let t=this.daily[this.index];if(!t)return v;let e=ne(t.datetime),n=e+24*N,s=Date.now(),r=s>=e&&s<n,l=this.hourly.filter(c=>{let d=new Date(c.datetime).getTime();return d>=e&&d<=n}),o=new Date(e).toLocaleDateString("de-DE",{weekday:"long",day:"numeric",month:"long"});return g`
      <div class="backdrop" @click=${this.close}></div>
      <div class="sheet" role="dialog" aria-label="Tagesdetail">
        <div class="top">
          <button class="ib" aria-label="Schließen" @click=${this.close}><ha-icon icon="mdi:close"></ha-icon></button>
          <div class="ttl">${Ci.find(c=>c.id===this.metric).label}</div>
          <span style="width:40px"></span>
        </div>

        <div class="days">
          ${this.daily.map((c,d)=>{let h=new Date(c.datetime);return g`<button class=${d===this.index?"on":""} @click=${()=>this.select(d)}>
              <span class="l">${In[h.getDay()]}</span><span class="n">${h.getDate()}</span></button>`})}
        </div>
        <div class="date">${o}</div>

        <div class="chips">
          ${Ci.map(c=>g`<button class=${c.id===this.metric?"on":""}
            @click=${()=>this.setMetric(c.id)}><ha-icon icon=${c.icon}></ha-icon>${c.label}</button>`)}
        </div>

        <section class="card">
          ${this.renderSummary(t,l,r)}
          ${l.length?this.renderChart(e,n,l,r?s:void 0):g`<div class="hint">Für diesen Tag gibt es keine Stundenvorhersage.</div>`}
        </section>
      </div>
    `}select(t){this.dispatchEvent(new CustomEvent("select",{detail:{index:t}}))}setMetric(t){this.dispatchEvent(new CustomEvent("metric",{detail:{metric:t}}))}renderSummary(t,e,n){var h,m,p,w;let s=(h=this.config.sensors)!=null?h:{};if(this.metric==="temp"){let u=n?C(this.hass,s.temperature):void 0;return g`<div class="sum">
        <div class="sum-ic">${G(t.condition)}</div>
        <div>
          <div class="big">${u!=null?E(u):bt(t.condition)}</div>
          <div class="sub">H: ${E(t.temperature)} · T: ${E(t.templow)}${u!=null?` \xB7 ${bt(t.condition)}`:""}</div>
        </div>
      </div>`}if(this.metric==="rain"){let u=n&&s.rain_total?this.allRows(s.rain_total).reduce((x,_)=>{var A;return x+((A=_.change)!=null?A:0)},0):void 0,b=Math.max(0,...e.map(x=>{var _;return(_=x.precipitation_probability)!=null?_:0}),(m=t.precipitation_probability)!=null?m:0);return g`<div class="sum">
        <div>
          <div class="big">${st((p=t.precipitation)!=null?p:e.reduce((x,_)=>{var A;return x+((A=_.precipitation)!=null?A:0)},0))}</div>
          <div class="sub">erwartet · Wahrscheinlichkeit bis ${Math.round(b)} %${u!=null?` \xB7 bisher gemessen ${st(u)}`:""}</div>
        </div>
      </div>`}let r=e.map(u=>u.wind_speed).filter(u=>u!=null),l=r.length?r.reduce((u,b)=>u+b,0)/r.length:t.wind_speed,o=e.map(u=>u.wind_bearing).filter(u=>u!=null),c=(w=t.wind_bearing)!=null?w:o.length?Math.atan2(o.reduce((u,b)=>u+Math.sin(b*Math.PI/180),0),o.reduce((u,b)=>u+Math.cos(b*Math.PI/180),0))*180/Math.PI:void 0,d=s.wind_gust&&n?Math.max(...this.allRows(s.wind_gust).map(u=>{var b;return(b=u.max)!=null?b:0}),0):void 0;return g`<div class="sum">
      <div>
        <div class="big">${M(l,0)} km/h ${c!=null?g`<span class="dir">${wt(c)}</span>`:v}</div>
        <div class="sub">Ø Vorhersage · max ${M(r.length?Math.max(...r):void 0,0)} km/h${d?` \xB7 st\xE4rkste B\xF6e heute ${M(d,0)} km/h`:""}</div>
      </div>
    </div>`}pastRows(t){var e,n;return(n=(e=this._past)==null?void 0:e[t])!=null?n:[]}allRows(t){var e,n;return[...this.pastRows(t),...(n=(e=this._pastNow)==null?void 0:e[t])!=null?n:[]]}chartHeight(){return typeof matchMedia=="function"&&matchMedia("(max-height: 600px) and (min-width: 700px)").matches?Math.max(180,Math.min(360,window.innerHeight-215)):220}renderChart(t,e,n,s){var b;let r=(b=this.config.sensors)!=null?b:{},l=n.map(x=>({t:new Date(x.datetime).getTime(),h:x})),o=s?l.filter(x=>x.t>=s-N):l,c=[0,6,12,18].map(x=>({t:t+x*N,label:`${String(x).padStart(2,"0")} Uhr`})),d=[],h=[],m="\xB0",p,w="",u;if(this.metric==="temp"){let x=r.temperature&&s?this.pastRows(r.temperature).map(y=>({t:y.start+N/2,v:y.mean})):[],_=s?C(this.hass,r.temperature):void 0,A=yt(this.hourly,_),S=[...x,..._!=null?[{t:s,v:_}]:[],...o.filter(y=>!s||y.t>s).map(y=>({t:y.t,v:A(y.t,y.h.temperature)}))];d.push({type:"area",points:S,color:"var(--wa-temp, #4fc3f7)",dashUntil:s,label:"Temperatur",unit:"\xB0",digits:1});let F=S.filter(y=>y.v!=null);if(F.length){let y=F.reduce((T,B)=>B.v>T.v?B:T),D=F.reduce((T,B)=>B.v<T.v?B:T);h.push({t:y.t,v:y.v,label:"H"},{t:D.t,v:D.v,label:"T"})}}else if(this.metric==="rain")m="",u=0,r.rain_total&&s&&d.push({type:"bar",points:this.pastRows(r.rain_total).map(x=>({t:x.start,v:x.change})),color:"var(--wa-rain-past, #1e6fb8)",barWidth:N,label:"gemessen",unit:" l/m\xB2",digits:1}),d.push({type:"bar",points:o.map(x=>{var _;return{t:x.t,v:(_=x.h.precipitation)!=null?_:0}}),color:"var(--wa-rain)",barWidth:N,label:"Menge",unit:" l/m\xB2",digits:1}),d.push({type:"line",axis:"right",points:o.map(x=>({t:x.t+N/2,v:x.h.precipitation_probability})),color:"var(--wa-prob, #90caf9)",label:"Wahrscheinl.",unit:" %",digits:0}),p=100,w=" %";else{m="",u=0;let x=r.wind_speed&&s?this.pastRows(r.wind_speed).map(S=>({t:S.start+N/2,v:S.mean})):[],_=s?C(this.hass,r.wind_speed):void 0,A=[...x,..._!=null?[{t:s,v:_}]:[],...o.filter(S=>!s||S.t>s).map(S=>({t:S.t,v:S.h.wind_speed}))];d.push({type:"area",points:A,color:"var(--wa-wind, #81c784)",dashUntil:s,label:"Wind",unit:" km/h",digits:0}),r.wind_gust&&s&&d.push({type:"line",points:this.pastRows(r.wind_gust).map(S=>({t:S.start+N/2,v:S.max})),color:"var(--wa-gust, #ffb74d)",label:"B\xF6e",unit:" km/h",digits:0})}return g`
      <wetter-app-chart .start=${t} .end=${e} .series=${d} .ticks=${c} .markers=${h}
        .now=${s} .height=${this.chartHeight()} .yUnit=${m} .yMin=${u} .rightMax=${p} .rightUnit=${w}
        .timeFormat=${x=>new Date(x).toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}
        .tipIcon=${x=>{var A;let _=(A=l.find(S=>S.t<=x&&x<S.t+N))==null?void 0:A.h;return _!=null&&_.condition?G(_.condition,_.is_daytime===!1):v}}>
      </wetter-app-chart>
      ${this.metric==="wind"?this.renderWindDirs(t,o):v}
      ${this.metric==="rain"?gt([{color:"var(--wa-rain)",label:"Menge pro Stunde"},{color:"var(--wa-prob, #90caf9)",label:"Wahrscheinlichkeit",kind:"line"},!!s&&{color:"var(--wa-rain-past, #1e6fb8)",label:"gemessen"}]):v}
    `}renderWindDirs(t,e){let n=e.filter(s=>new Date(s.t).getHours()%3===0);return g`<div class="dirs">
      ${n.map(s=>{var r;return g`<div style="left:calc(6px + (100% - 44px) * ${(s.t-t)/(24*N)})">
        <ha-icon icon="mdi:navigation" style="transform:rotate(${((r=s.h.wind_bearing)!=null?r:0)+180}deg)"></ha-icon>
        <span>${new Date(s.t).getHours()}</span></div>`})}
    </div>`}};$t.properties={hass:{attribute:!1},config:{attribute:!1},hourly:{attribute:!1},daily:{attribute:!1},index:{type:Number},metric:{type:String},_past:{state:!0}},$t.styles=[nt,qt,H`
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
    `];function Ut(a,i,t){var o,c;let e=a==null?void 0:a[0];if(!e)return a;let n=new Date().setHours(0,0,0,0);if(new Date(e.datetime).setHours(0,0,0,0)!==n)return a;let s=[t,...(i!=null?i:[]).filter(d=>d.end>n).flatMap(d=>[d.min,d.max])].filter(d=>typeof d=="number"&&isFinite(d));if(!s.length)return a;let r=Math.min(...s,(o=e.templow)!=null?o:1/0),l=Math.max(...s,(c=e.temperature)!=null?c:-1/0);return r===e.templow&&l===e.temperature?a:[{...e,templow:r,temperature:l},...a.slice(1)]}var Re=[{id:"day",label:"Tag"},{id:"7d",label:"7 Tage"},{id:"30d",label:"30 Tage"},{id:"month",label:"Monat"},{id:"year",label:"Jahr"}];var zn=["Januar","Februar","M\xE4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];function Bn(a){return new Date(a.getFullYear(),a.getMonth(),a.getDate())}function Nt(a,i){return new Date(a.getFullYear(),a.getMonth(),a.getDate()+i)}function Ri(a,i=!1){return a.toLocaleDateString("de-DE",i?{day:"2-digit",month:"2-digit",year:"numeric"}:{day:"2-digit",month:"2-digit"})}function At(a){return Re.some(i=>i.id===a)}function Hi(a,i=new Date){let t=Bn(i),e=Math.min(0,Math.round(a.offset)),n,s,r,l;switch(a.preset){case"day":{n=Nt(t,e),s=Nt(n,1),r="hour",l=e===0?"Heute":e===-1?"Gestern":n.toLocaleDateString("de-DE",{weekday:"short",day:"2-digit",month:"2-digit"});break}case"7d":case"30d":{let c=a.preset==="7d"?7:30;s=Nt(t,1+e*c),n=Nt(s,-c),r=c===7?"hour":"day",l=e===0?`Letzte ${c} Tage`:`${Ri(n)} \u2013 ${Ri(Nt(s,-1),!0)}`;break}case"month":{n=new Date(i.getFullYear(),i.getMonth()+e,1),s=new Date(n.getFullYear(),n.getMonth()+1,1),r="day",l=`${zn[n.getMonth()]} ${n.getFullYear()}`;break}default:{n=new Date(i.getFullYear()+e,0,1),s=new Date(n.getFullYear()+1,0,1),r="month",l=String(n.getFullYear());break}}let o=s.getTime()>i.getTime();return o&&(s=new Date(Math.ceil(i.getTime()/3e5)*3e5)),{preset:a.preset,offset:e,start:n,end:s,period:r,label:l,live:o}}var ae=new Map,He=new EventTarget,Ii="wetter-app:range:";function Pn(a,i){let t=i;try{let e=localStorage.getItem(Ii+a);At(e)&&(t=e)}catch{}return{preset:t,offset:0}}function Fn(a,i="7d"){let t=ae.get(a);return t||(t=Pn(a,i),ae.set(a,t)),t}function Ie(a,i){let t=ae.get(a);if(ae.set(a,i),(t==null?void 0:t.preset)!==i.preset)try{localStorage.setItem(Ii+a,i.preset)}catch{}He.dispatchEvent(new CustomEvent(a))}var oe=class{constructor(i,t,e=()=>"7d"){this.host=i;this.groupOf=t;this.fallback=e;this.onChange=()=>this.host.requestUpdate();i.addController(this)}get state(){return Fn(this.groupOf(),this.fallback())}get range(){return Hi(this.state)}set(i){Ie(this.groupOf(),i)}hostConnected(){this.listen()}hostUpdated(){this.group!==this.groupOf()&&this.listen()}hostDisconnected(){this.group&&He.removeEventListener(this.group,this.onChange),this.group=void 0}listen(){this.hostDisconnected(),this.group=this.groupOf(),He.addEventListener(this.group,this.onChange)}};var _t=class extends P{constructor(){super(...arguments);this._tab="forecast";this._wide=!1;this._metric="temp";this.hourly=new it(this,"hourly",()=>{var t;return(t=this._config)==null?void 0:t.weather});this.daily=new it(this,"daily",()=>{var t;return(t=this._config)==null?void 0:t.weather});this._onLocation=()=>this.applyLink()}setConfig(t){if(!(t!=null&&t.weather))throw new Error("`weather:` fehlt (z. B. weather.weather_fusion_ai_kresslingweg)");this._config={...t,sensors:{...t.sensors}},this.isConnected&&this.applyLink()}static getStubConfig(t){var e;return{weather:(e=Object.keys(t.states).find(n=>n.startsWith("weather.")))!=null?e:""}}getCardSize(){return 12}getGridOptions(){return{columns:"full",rows:"auto"}}connectedCallback(){var t;super.connectedCallback(),(t=this._ro)!=null||(this._ro=new ResizeObserver(e=>{let n=e[0].contentRect.width>=820;n!==this._wide&&(this._wide=n)})),this._ro.observe(this),this.applyLink(),window.addEventListener("location-changed",this._onLocation)}applyLink(){var o;let t=new URLSearchParams(location.search),e=t.get("wetter");if(!e||!this._config)return;let[n,s,r]=e.split(":");if(n==="history")this._tab="history",this._detail=void 0,At(s)&&Ie((o=this._config.sync_group)!=null?o:"default",{preset:s,offset:0});else{this._tab="forecast";let c=n==="day"?parseInt(s,10):NaN;this._detail=isFinite(c)&&c>=0?c:void 0,(r==="temp"||r==="rain"||r==="wind")&&(this._metric=r)}t.delete("wetter");let l=t.toString();history.replaceState(history.state,"",location.pathname+(l?"?"+l:"")+location.hash)}disconnectedCallback(){var t,e;super.disconnectedCallback(),window.removeEventListener("location-changed",this._onLocation),(t=this._ro)==null||t.disconnect(),(e=this._hoursRo)==null||e.disconnect(),this._hoursEl=void 0,this.syncDetail(),setTimeout(()=>{this.isConnected||(this._detail=void 0)})}syncDetail(){var s,r,l,o,c,d,h,m;let t=this._config&&this._detail!=null?this.dailyForecast((o=C(this.hass,(s=this._config.sensors)==null?void 0:s.temperature))!=null?o:(l=(r=this.hass)==null?void 0:r.states[this._config.weather])==null?void 0:l.attributes.temperature):void 0;if(this.isConnected&&this._tab==="forecast"&&!!t){let p=se(t,this._detail,this._shown);if(p==null||p!==this._detail){this._detail=p;return}this._shown=re(t,p)}else{this._shown=void 0,(c=this._detailEl)==null||c.remove(),this._detailEl=void 0;return}let n=this._detailEl;n||(n=document.createElement("wetter-app-day-detail"),n.addEventListener("close",()=>this._detail=void 0),n.addEventListener("select",p=>this._detail=p.detail.index),n.addEventListener("metric",p=>this._metric=p.detail.metric),document.body.appendChild(n),this._detailEl=n),Object.assign(n,{hass:this.hass,config:this._config,hourly:(d=this.hourly.forecast)!=null?d:[],daily:t,index:this._detail,metric:this._metric}),n.classList.toggle("dark",!!((m=(h=this.hass)==null?void 0:h.themes)!=null&&m.darkMode))}shouldUpdate(t){var n,s;if(t.size>1||!t.has("hass"))return!0;let e=t.get("hass");return!e||!this.hass||!this._config||((n=e.themes)==null?void 0:n.darkMode)!==((s=this.hass.themes)==null?void 0:s.darkMode)?!0:this.watchedIds().some(r=>e.states[r]!==this.hass.states[r])}watchedIds(){var e;let t=this._config;return[t.weather,t.sun,t.moon,...Object.values((e=t.sensors)!=null?e:{})].filter(Boolean)}updated(){var e;this._tab==="forecast"&&this.loadRecent();let t=this.renderRoot.querySelector(".hours");t!==this._hoursEl&&((e=this._hoursRo)==null||e.disconnect(),this._hoursEl=t!=null?t:void 0,t&&typeof ResizeObserver=="function"&&(this._hoursRo=new ResizeObserver(()=>this.fadeEdges(t)),this._hoursRo.observe(t))),t&&this.fadeEdges(t),this.syncDetail()}loadRecent(){var l;let t=(l=this._config.sensors)!=null?l:{},e=[t.rain_total,t.pressure,t.temperature].filter(Boolean);if(!this.hass||!e.length)return;let n=Math.ceil(Date.now()/3e5)*3e5,s=String(n);if(s===this._recentKey)return;this._recentKey=s;let r=Math.floor(Date.now()/36e5)*36e5;Jt(this.hass,{ids:e,start:new Date(r-23*36e5),types:["mean","min","max","change"]}).then(o=>s===this._recentKey&&(this._recent=wi(o.hours,o.current)),()=>this._recentKey=void 0)}dailyForecast(t){var n,s;let e=(n=this._config.sensors)==null?void 0:n.temperature;return Ut(this.daily.forecast,e?(s=this._recent)==null?void 0:s[e]:void 0,t)}fadeEdges(t){let e=t.scrollWidth-t.clientWidth;t.classList.toggle("fl",t.scrollLeft>2),t.classList.toggle("fr",t.scrollLeft<e-2)}dayIndex(t){var s;let e=new Date(t).setHours(0,0,0,0),n=((s=this.daily.forecast)!=null?s:[]).findIndex(r=>new Date(r.datetime).setHours(0,0,0,0)===e);return Math.max(0,n)}openDetail(t,e=this._metric){this._metric=e,this._detail=t}render(){var c,d,h,m;if(!this._config||!this.hass)return v;let t=this.hass.states[this._config.weather];if(!t)return g`<div class="warn">Entität ${this._config.weather} nicht gefunden.</div>`;let e=this._config.sun?((c=this.hass.states[this._config.sun])==null?void 0:c.state)==="below_horizon":!1,n=(d=this._config.sensors)!=null?d:{},s=(h=C(this.hass,n.temperature))!=null?h:t.attributes.temperature,r=this.dailyForecast(s),l=r==null?void 0:r[0],o=!!((m=this.hass.themes)!=null&&m.darkMode);return g`
      <div class="app ${this._wide?"wide":""} ${o?"dark":""} ${this._config.layout==="page"?"page":""}"
        style="--wa-tint:${o?Xt(t.state,e):Xt(t.state,e,.62)};--wa-tint2:${o?"transparent":Xt(t.state,e,.1)}">
        ${this._config.animations!==!1?g`<wetter-app-sky class="sky" .condition=${t.state} .night=${e}></wetter-app-sky>`:v}
        <header>
          ${this._config.name?g`<div class="place">${this._config.name}</div>`:v}
          <div class="now">${E(s)}</div>
          <div class="cond">${bt(t.state)}</div>
          ${l?g`<div class="hl">H: ${E(l.temperature)}  T: ${E(l.templow)}</div>`:v}
        </header>

        <nav class="tabs" role="tablist">
          ${["forecast","history"].map(p=>g`
            <button role="tab" aria-selected=${this._tab===p} class=${this._tab===p?"on":""}
              @click=${()=>{this._tab=p,this._detail=void 0}}>
              <ha-icon icon=${p==="forecast"?"mdi:calendar-arrow-right":"mdi:chart-line"}></ha-icon>
              ${p==="forecast"?"Vorhersage":"Historie"}
            </button>`)}
        </nav>

        <main>${this._tab==="forecast"?this.renderForecast(r,s,e):g`<wetter-app-history .hass=${this.hass} .config=${this._config} .wide=${this._wide}></wetter-app-history>`}</main>
      </div>
    `}renderForecast(t,e,n){var r;let s=(r=this.hourly.error)!=null?r:this.daily.error;return g`
      ${s?g`<div class="warn">Vorhersage nicht verfügbar: ${s}</div>`:v}
      <div class="cols">
        <div class="left">
          <section class="card hourly">${this.renderHourly(e,n)}</section>
          ${Si({hass:this.hass,config:this._config,hourly:this.hourly.forecast,recent:this._recent})}
        </div>
        <section class="card daily">${this.renderDaily(t,e)}</section>
      </div>
    `}renderHourly(t,e){let n=this.hourly.forecast;if(!n)return g`<div class="loading">Lade Stundenvorhersage …</div>`;let s=Date.now()-36e5,r=n.filter(o=>new Date(o.datetime).getTime()>s).slice(0,25),l=yt(n,t);return g`
      ${I("mdi:clock-outline","St\xFCndlich")}
      <div class="hours" @scroll=${o=>this.fadeEdges(o.currentTarget)}>
        ${r.map((o,c)=>{var d;return g`
          <div class="hr" @click=${()=>this.openDetail(this.dayIndex(o.datetime),"temp")}>
            <div class="t">${c===0?"Jetzt":te(new Date(o.datetime))}</div>
            ${G(o.condition,c===0?e:o.is_daytime===!1)}
            <div class="p">${((d=o.precipitation_probability)!=null?d:0)>=20?`${Math.round(o.precipitation_probability)} %`:""}</div>
            <div class="v">${E(c===0?t!=null?t:o.temperature:l(new Date(o.datetime).getTime(),o.temperature))}</div>
          </div>`})}
      </div>
    `}renderDaily(t,e){if(!t)return g`<div class="loading">Lade Tagesvorhersage …</div>`;let n=t.slice(0,10),s=Math.min(...n.map(c=>{var d,h;return(h=(d=c.templow)!=null?d:c.temperature)!=null?h:99})),r=Math.max(...n.map(c=>{var d;return(d=c.temperature)!=null?d:-99})),l=Math.max(1,r-s),o=c=>(c-s)/l*100;return g`
      ${I("mdi:calendar-week",`${n.length}-Tage-Vorhersage`)}
      ${n.map((c,d)=>{var u,b,x,_;let h=(b=(u=c.templow)!=null?u:c.temperature)!=null?b:s,m=(x=c.temperature)!=null?x:h,p=Math.max(.5,o(m)-o(h)),w=`background-size:${100/p*100}% 100%;background-position:${p>=100?0:o(h)/(100-p)*100}% 0`;return g`
          <div class="day" role="button" tabindex="0" @click=${()=>this.openDetail(d)}
            @keydown=${A=>A.key==="Enter"&&this.openDetail(d)}>
            <div class="wd">${Ot(new Date(c.datetime))}</div>
            <div class="ic">
              ${G(c.condition)}
              ${((_=c.precipitation_probability)!=null?_:0)>=20?g`<span class="p">${Math.round(c.precipitation_probability)} %</span>`:v}
            </div>
            <div class="lo">${E(h)}</div>
            <div class="bar">
              <div class="fill" style="left:${o(h)}%;right:${100-o(m)}%;${w}"></div>
              ${d===0&&e!=null?g`<div class="dot" style="left:${Math.min(100,Math.max(0,o(e)))}%"></div>`:v}
            </div>
            <div class="hi">${E(m)}</div>
          </div>`})}
    `}};_t.properties={hass:{attribute:!1},_config:{state:!0},_tab:{state:!0},_wide:{state:!0},_detail:{state:!0},_metric:{state:!0},_recent:{state:!0}},_t.styles=[nt,Mi,H`
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

    `];var Lt=36e5,zi=24*Lt,kt=class extends P{constructor(){super(...arguments);this._m={};this._cols=6;this.hourly=new it(this,"hourly",()=>{var t;return(t=this._config)==null?void 0:t.weather});this.daily=new it(this,"daily",()=>{var t;return(t=this._config)==null?void 0:t.weather})}setConfig(t){if(!(t!=null&&t.weather))throw new Error("`weather:` fehlt (z. B. weather.weather_fusion_ai_kresslingweg)");this._config={...t,sensors:{...t.sensors}}}static getStubConfig(t){var e;return{weather:(e=Object.keys(t.states).find(n=>n.startsWith("weather.")))!=null?e:""}}getCardSize(){return 6}getGridOptions(){return{columns:12,rows:"auto",min_columns:6}}connectedCallback(){var t;super.connectedCallback(),(t=this._ro)!=null||(this._ro=new ResizeObserver(e=>{let n=Math.max(5,Math.min(10,Math.floor(e[0].contentRect.width/58)));n!==this._cols&&(this._cols=n)})),this._ro.observe(this)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._ro)==null||t.disconnect(),this.syncDetail(),setTimeout(()=>{this.isConnected||(this._detail=void 0)})}shouldUpdate(t){var s,r,l;if(t.size>1||!t.has("hass"))return!0;let e=t.get("hass");if(!e||!this.hass||!this._config||((s=e.themes)==null?void 0:s.darkMode)!==((r=this.hass.themes)==null?void 0:r.darkMode))return!0;let n=this._config;return[n.weather,n.sun,...Object.values((l=n.sensors)!=null?l:{})].some(o=>o&&e.states[o]!==this.hass.states[o])}updated(){this.load(),this.syncDetail()}syncDetail(){var s,r,l,o,c,d,h,m,p,w;let t=(d=C(this.hass,(r=(s=this._config)==null?void 0:s.sensors)==null?void 0:r.temperature))!=null?d:(c=(o=this.hass)==null?void 0:o.states[(l=this._config)==null?void 0:l.weather])==null?void 0:c.attributes.temperature,e=this._detail!=null&&this.hass?Ut(this.daily.forecast,this._m.temp,t):void 0;if(this.isConnected&&e){let u=se(e,this._detail,this._shown);if(u==null||u!==this._detail){this._detail=u;return}this._shown=re(e,u)}else{this._shown=void 0,(h=this._detailEl)==null||h.remove(),this._detailEl=void 0;return}let n=this._detailEl;n||(n=document.createElement("wetter-app-day-detail"),n.addEventListener("close",()=>this._detail=void 0),n.addEventListener("select",u=>this._detail=u.detail.index),n.addEventListener("metric",u=>this._detailEl.metric=u.detail.metric),n.metric="temp",document.body.appendChild(n),this._detailEl=n),Object.assign(n,{hass:this.hass,config:this._config,hourly:(m=this.hourly.forecast)!=null?m:[],daily:e,index:this._detail}),n.classList.toggle("dark",!!((w=(p=this.hass)==null?void 0:p.themes)!=null&&w.darkMode))}load(){var d;if(!this._config)return;let t=(d=this._config.sensors)!=null?d:{},e=[t.rain_total,t.temperature,t.wind_gust].filter(Boolean);if(!this.hass||!e.length)return;let n=Math.ceil(Date.now()/3e5)*3e5,s=String(n);if(s===this._key)return;this._key=s;let r=new Date().setHours(0,0,0,0),l=r-6*zi,o=Math.floor(Date.now()/Lt)*Lt,c=["change","min","max"];Promise.all([tt(this.hass,{ids:e,start:new Date(l),end:new Date(o),period:"hour",types:[...c]}),tt(this.hass,{ids:e,start:new Date(o),end:new Date(n),period:"5minute",types:[...c]})]).then(([h,m])=>s===this._key&&(this._m=this.measure(h,m,r)),()=>this._key=void 0)}measure(t,e,n){var d;let s=(d=this._config.sensors)!=null?d:{},r=h=>{var m,p;return h?[...(m=t[h])!=null?m:[],...(p=e[h])!=null?p:[]]:[]},l=h=>h.reduce((m,p)=>{var w;return m+((w=p.change)!=null?w:0)},0),o=r(s.rain_total),c=r(s.wind_gust).filter(h=>h.end>n).map(h=>h.max).filter(h=>h!=null);return{rainToday:s.rain_total?l(o.filter(h=>h.start>=n)):void 0,rain7:s.rain_total?l(o):void 0,gustMax:c.length?Math.max(...c):void 0,temp:r(s.temperature)}}open(t){let e=this._config.navigation_path;e&&(history.pushState(null,"",t?`${e}${e.includes("?")?"&":"?"}wetter=${t}`:e),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}})))}tap(t){if(!this._config.navigation_path||this._config.open_button)return;let e=/^day:(\d+)/.exec(t);return e?()=>this._detail=Number(e[1]):()=>this.open(t)}render(){var d,h,m,p,w;if(!this._config||!this.hass)return v;let t=this.hass.states[this._config.weather];if(!t)return g`<div class="card warn">Entität ${this._config.weather} nicht gefunden.</div>`;let e=(d=this._config.sensors)!=null?d:{},n=this._config.sun?((h=this.hass.states[this._config.sun])==null?void 0:h.state)==="below_horizon":!1,s=(m=C(this.hass,e.temperature))!=null?m:t.attributes.temperature,r=C(this.hass,e.feels_like),l=Ut(this.daily.forecast,this._m.temp,s),o=l==null?void 0:l[0],c=!!this._config.navigation_path&&!this._config.open_button;return g`
      <div class="card ${(p=this.hass.themes)!=null&&p.darkMode?"dark":""} ${c?"taps":""}">
        <div class="now t-able" @click=${this.tap("forecast")}>
          <div class="ic">${G(t.state,n)}</div>
          <div class="t">${E(s)}</div>
          <div class="info">
            <b>${bt(t.state)}</b>
            <span>${(w=this._config.name)!=null?w:""}</span>
          </div>
          <div class="hl">
            ${o?g`<div>H: ${E(o.temperature)}  T: ${E(o.templow)}</div>`:v}
            ${r!=null?g`<div class="sub">Gefühlt ${E(r)}</div>`:v}
          </div>
        </div>
        ${this._config.forecast==="hours"?this.renderHours(s,n):this.renderPeriods(l)}
        ${l?this.renderDays(l.slice(1,4)):v}
        ${this.renderStats()}
        ${this._config.navigation_path&&this._config.open_button?g`<button class="open" @click=${()=>this.open()}>
          <ha-icon icon="mdi:weather-partly-cloudy"></ha-icon>Wetter-App öffnen<ha-icon icon="mdi:chevron-right"></ha-icon></button>`:v}
      </div>
    `}dayOf(t){var n;let e=new Date(t).setHours(0,0,0,0);return Math.max(0,((n=this.daily.forecast)!=null?n:[]).findIndex(s=>new Date(s.datetime).setHours(0,0,0,0)===e))}renderHours(t,e){let n=this.hourly.forecast;if(!n)return g`<div class="loading">Lade Vorhersage …</div>`;let s=Date.now()-Lt,r=n.filter(o=>new Date(o.datetime).getTime()>s).slice(0,this._cols),l=yt(n,t);return g`<div class="hours" style="grid-template-columns:repeat(${r.length}, minmax(0, 1fr))">
      ${r.map((o,c)=>g`<div class="hr t-able" @click=${this.tap(`day:${this.dayOf(new Date(o.datetime).getTime())}:temp`)}>
        <div class="lab">${c===0?"Jetzt":te(new Date(o.datetime)).replace(" Uhr","")}</div>
        ${G(o.condition,c===0?e:o.is_daytime===!1)}
        <div class="p">${ze(o.precipitation_probability)}</div>
        <div class="v">${E(c===0?t!=null?t:o.temperature:l(new Date(o.datetime).getTime(),o.temperature))}</div>
      </div>`)}
    </div>`}renderPeriods(t){let e=this.hourly.forecast;if(!e)return g`<div class="loading">Lade Vorhersage …</div>`;let n=Nn(e,Date.now(),t);return n.length?g`<div class="hours" style="grid-template-columns:repeat(${n.length}, minmax(0, 1fr))">
      ${n.map(s=>{var r;return g`<div class="hr t-able" @click=${this.tap(`day:${this.dayOf(s.start)}:temp`)}>
        <div class="lab">${s.label}<small>${(r=s.sub)!=null?r:"\xA0"}</small></div>
        ${G(s.condition,s.night)}
        <div class="p">${ze(s.prob)}</div>
        <div class="v">${s.lo==null?"\u2013":Math.round(s.lo)===Math.round(s.hi)?E(s.hi):`${M(s.lo,0)}\u2013${E(s.hi)}`}</div>
      </div>`})}
    </div>`:v}renderDays(t){return t.length?g`<div class="days">
      ${t.map((e,n)=>g`<div class="day t-able" @click=${this.tap(`day:${n+1}:temp`)}>
        <div class="top"><span class="wd">${Ot(new Date(e.datetime))}</span>${G(e.condition)}
          <span class="p">${ze(e.precipitation_probability)}</span></div>
        <div class="tt"><span class="lo">${E(e.templow)}</span> / <span class="hi">${E(e.temperature)}</span></div>
      </div>`)}
    </div>`:v}renderStats(){var o;let t=(o=this._config.sensors)!=null?o:{},e=this._m,n=C(this.hass,t.rain_rate),s=C(this.hass,t.wind_speed),r=C(this.hass,t.wind_direction),l=[t.rain_total&&g`<div class="st t-able" @click=${this.tap("history:day")}><span>Regen heute</span><b>${M(e.rainToday,1)} l/m²</b>
        <small>${n?`jetzt ${M(n,1)} l/m\xB2/h`:"seit 0 Uhr"}</small></div>`,t.rain_total&&g`<div class="st t-able" @click=${this.tap("history:7d")}><span>Regen 7 Tage</span><b>${M(e.rain7,1)} l/m²</b>
        <small>seit ${Ot(new Date(Date.now()-6*zi))} 0 Uhr</small></div>`,t.wind_speed&&g`<div class="st t-able" @click=${this.tap("history:day")}><span>Wind</span><b>${M(s,0)} km/h ${r!=null?wt(r):""}</b>
        <small>${e.gustMax!=null?`B\xF6en ${M(e.gustMax,0)} km/h`:""}</small></div>`].filter(Boolean);return l.length?g`<div class="stats">${l}</div>`:v}};kt.properties={hass:{attribute:!1},_config:{state:!0},_m:{state:!0},_cols:{state:!0},_detail:{state:!0}},kt.styles=[nt,H`
      :host { display: block; }
      .card { display: flex; flex-direction: column; gap: 10px; }
      .warn, .loading { color: var(--wa-text2); font-size: 14px; padding: 8px 0; }
      .now { display: flex; align-items: center; gap: 10px; }
      /* antippbare Bereiche: Zeiger + kurzes Abdunkeln beim Tippen */
      .taps .t-able { cursor: pointer; border-radius: 10px; -webkit-tap-highlight-color: transparent; }
      .taps .t-able:active { background: rgba(127, 127, 127, 0.18); }
      .taps .st.t-able:active, .taps .day.t-able:active { background: rgba(127, 127, 127, 0.22); }
      .now .ic .wicon { width: 48px; height: 48px; }
      .now .t { font-size: 40px; font-weight: 600; line-height: 1; }
      .info { display: flex; flex-direction: column; min-width: 0; flex: 1; }
      .info b { font-size: 16px; font-weight: 500; }
      .info span, .sub { font-size: 13px; color: var(--wa-text2); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .hl { text-align: right; font-size: 14px; font-weight: 500; white-space: nowrap; }

      .hours { display: grid; gap: 2px; border-top: 1px solid var(--wa-divider); padding-top: 8px; }
      .hr { display: flex; flex-direction: column; align-items: center; gap: 2px; min-width: 0; }
      .hr .lab { font-size: 12px; color: var(--wa-text2); text-align: center; line-height: 1.25; white-space: nowrap; }
      .hr .lab small { display: block; font-size: 11px; opacity: 0.8; }
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
    `];var ze=a=>(a!=null?a:0)>=20?`${Math.round(a)} %`:"",On={0:"Nacht",6:"Vormittag",12:"Nachmittag",18:"Abend"},Un=["lightning-rainy","lightning","hail","pouring","snowy-rainy","snowy","rainy","fog","cloudy","windy-variant","partlycloudy","windy","sunny","clear-night"];function Nn(a,i,t){var l,o,c,d;let e=new Date(i),n=new Date(e.getFullYear(),e.getMonth(),e.getDate(),Math.floor(e.getHours()/6)*6).getTime(),s=new Date(i).setHours(0,0,0,0),r=[];for(let h=0;h<4;h++){let m=new Date(n);m.setHours(m.getHours()+h*6);let p=new Date(n);p.setHours(p.getHours()+(h+1)*6);let w=h===0?i-Lt:m.getTime()-1,u=a.filter(y=>{let D=new Date(y.datetime).getTime();return D>w&&D<p.getTime()});if(!u.length)continue;let b=new Map;u.forEach(y=>{var D;return y.condition&&b.set(y.condition,((D=b.get(y.condition))!=null?D:0)+1)});let x=Un.find(y=>{var D;return((D=b.get(y))!=null?D:0)>=Math.max(1,u.length/3)}),_=(l=[...b.entries()].sort((y,D)=>D[1]-y[1])[0])==null?void 0:l[0],A=u.map(y=>y.temperature).filter(y=>y!=null),S=m.getHours(),F=new Date(m).setHours(0,0,0,0)>s&&S!==0;r.push({start:m.getTime(),label:(o=On[S])!=null?o:`${S} Uhr`,sub:h===0?"jetzt":F?"morgen":void 0,condition:(d=x!=null?x:_)!=null?d:(c=t==null?void 0:t[0])==null?void 0:c.condition,night:u.filter(y=>y.is_daytime===!1).length>u.length/2,prob:Math.max(0,...u.map(y=>{var D;return(D=y.precipitation_probability)!=null?D:0})),lo:A.length?Math.min(...A):void 0,hi:A.length?Math.max(...A):void 0})}return r}var Be="wetter-app-tip";function le(a){window.dispatchEvent(new CustomEvent(Be,{detail:a}))}function ce(a,i,t){let e=s=>{s.detail!==a&&i()},n=s=>{let r=t==null?void 0:t();r&&!s.composedPath().includes(r)&&i()};return window.addEventListener(Be,e),t&&window.addEventListener("pointerdown",n,!0),()=>{window.removeEventListener(Be,e),window.removeEventListener("pointerdown",n,!0)}}var R={l:6,r:38,t:18,b:22},Mt=class extends P{constructor(){super(...arguments);this.start=0;this.end=0;this.series=[];this.ticks=[];this.markers=[];this.height=200;this.yUnit="";this.rightUnit="";this.timeFormat=t=>new Date(t).toLocaleString("de-DE");this._w=0;this._onTouchStart=t=>this.touchStart(t);this._onTouchMove=t=>this.touchMove(t);this._onTouchEnd=()=>this.touchEnd()}connectedCallback(){var t;super.connectedCallback(),(t=this._ro)!=null||(this._ro=new ResizeObserver(e=>{let n=Math.round(e[0].contentRect.width);n&&n!==this._w&&(this._w=n)})),this._ro.observe(this),this._offTip=ce(this,()=>this._hover=void 0,()=>this),this.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.addEventListener("touchmove",this._onTouchMove,{passive:!1}),this.addEventListener("touchend",this._onTouchEnd),this.addEventListener("touchcancel",this._onTouchEnd)}disconnectedCallback(){var t,e,n;super.disconnectedCallback(),(t=this._ro)==null||t.disconnect(),(e=this._offTip)==null||e.call(this),this.removeEventListener("touchstart",this._onTouchStart),this.removeEventListener("touchmove",this._onTouchMove),this.removeEventListener("touchend",this._onTouchEnd),this.removeEventListener("touchcancel",this._onTouchEnd),clearTimeout((n=this._touch)==null?void 0:n.timer),clearTimeout(this._hideTimer)}willUpdate(t){t.has("start")&&t.get("start")!==void 0&&t.get("start")!==this.start&&(this._hover=void 0)}x(t){let e=Math.max(1,this.end-this.start);return R.l+(t-this.start)/e*(this._w-R.l-R.r)}scale(t){var d;let e=[];for(let h of this.series)if(((d=h.axis)!=null?d:"left")===t){for(let m of h.points)m.v!=null&&e.push(m.v),m.v2!=null&&e.push(m.v2);h.type==="bar"&&e.push(0)}let n=t==="left"?this.yMin:0,s=t==="left"?this.yMax:this.rightMax;n==null&&(n=e.length?Math.min(...e):0),s==null&&(s=e.length?Math.max(...e):1),s-n<1e-9&&(s=n+1);let r=Kn((s-n)/4);t==="left"&&this.yMin==null&&(n=Math.floor(n/r)*r),t==="left"&&this.yMax==null&&(s=Math.ceil(s/r)*r),t==="right"&&this.rightMax==null&&(s=Math.ceil(s/r)*r);let l=this.height-R.t-R.b,o=h=>R.t+l-(h-n)/(s-n)*l,c=[];for(let h=n;h<=s+r/1e3;h+=r)c.push(Math.round(h*1e6)/1e6);return{y:o,ticks:c,lo:n,hi:s}}onPointer(t){t.pointerType!=="touch"&&this.hoverAt(t.clientX)}touchStart(t){var n;if(clearTimeout((n=this._touch)==null?void 0:n.timer),clearTimeout(this._hideTimer),t.touches.length!==1){this._touch=void 0;return}let e=t.touches[0];this._touch={x:e.clientX,y:e.clientY,mode:"?"},this._touch.timer=window.setTimeout(()=>{var s;((s=this._touch)==null?void 0:s.mode)==="?"&&(this._touch.mode="scrub")},250),this.hoverAt(e.clientX)}touchMove(t){let e=this._touch;if(!e||t.touches.length!==1)return;let n=t.touches[0];if(e.mode==="?"){let s=Math.abs(n.clientX-e.x),r=Math.abs(n.clientY-e.y);if(s<8&&r<8)return;if(clearTimeout(e.timer),e.mode=s>r?"scrub":"scroll",e.mode==="scroll"){this._hover=void 0;return}}e.mode==="scrub"&&(t.cancelable&&t.preventDefault(),this.hoverAt(n.clientX))}touchEnd(){let t=this._touch;t&&(clearTimeout(t.timer),this._touch=void 0,t.mode!=="scroll"&&(this._hideTimer=window.setTimeout(()=>this._hover=void 0,3e3)))}hoverAt(t){let e=this.renderRoot.querySelector(".wrap > svg");if(!e)return;let n=t-e.getBoundingClientRect().left,s=this.start+(n-R.l)/(this._w-R.l-R.r)*(this.end-this.start),r;for(let l of this.series)for(let o of l.points){if(o.v==null)continue;let c=de(l,o);(r==null||Math.abs(c-s)<Math.abs(r-s))&&(r=c)}this._hover==null&&r!=null&&le(this),this._hover=r}render(){var m,p,w;let t=this._w;if(!t||this.end<=this.start)return g`<div style="height:${this.height}px"></div>`;let e=this.scale("left"),s=this.series.some(u=>u.axis==="right")?this.scale("right"):void 0,r=this.height-R.b,l=[];this.now&&this.now>this.start&&this.now<this.end&&l.push($`<rect x=${R.l} y=${R.t} width=${this.x(this.now)-R.l} height=${r-R.t} class="past"/>`);for(let u of e.ticks){let b=e.y(u);l.push($`<line x1=${R.l} x2=${t-R.r} y1=${b} y2=${b} class="grid"/>`),l.push($`<text x=${t-R.r+6} y=${b+4} class="ylab">${Bi(u)}${this.yUnit}</text>`)}let o=[];if(s){let u=this.series.find(b=>b.axis==="right").color;for(let b of s.ticks)b!==0&&o.push($`<text x=${R.l+3} y=${s.y(b)-3} class="rlab" style="fill:${u}">${Bi(b)}${this.rightUnit}</text>`)}for(let u of this.ticks){let b=this.x(u.t);if(b<R.l-1||b>t-R.r+1)continue;l.push($`<line x1=${b} x2=${b} y1=${R.t} y2=${r} class="vgrid"/>`);let x=b+3+u.label.length*6>t-R.r;l.push($`<text x=${x?b-3:b+3} y=${this.height-6} class="xlab" style=${x?"text-anchor:end":""}>${u.label}</text>`)}let c=[];this.series.forEach((u,b)=>{var S,F;let x=u.axis==="right"&&s?s:e,_=u.points.filter(y=>y.v!=null).sort((y,D)=>y.t-D.t);if(!_.length)return;if(u.type==="bar"||u.type==="range"){let y=(S=u.barWidth)!=null?S:_.length>1?_[1].t-_[0].t:(this.end-this.start)/24,D=x.y(Math.max(0,x.lo));for(let T of _){let B=T.t2!=null?T.t2-T.t:y,Y=Math.max(1.5,Math.min(14,(this.x(this.start+B)-this.x(this.start))*.65)),xt=this.x(T.t+B/2),V=x.y(T.v),O=u.type==="range"?x.y((F=T.v2)!=null?F:T.v):D,Q=Math.max(u.type==="range"?Y:.5,Math.abs(O-V)),at=Math.min(V,O)-(Q-Math.abs(O-V))/2;c.push($`<rect x=${xt-Y/2} y=${at} width=${Y} height=${Q} rx=${u.type==="range"?Y/2:2} style="fill:${u.color}"/>`)}return}if(u.type==="band"){let y=_.filter(T=>T.v2!=null).map(T=>[this.x(T.t),x.y(T.v2)]),D=_.map(T=>[this.x(T.t),x.y(T.v)]).reverse();y.length&&c.push($`<path d=${St(y)+" L"+St(D).slice(1)+"Z"} style="fill:${u.color};fill-opacity:0.28"/>`);return}let A=_.map(y=>[this.x(y.t),x.y(y.v)]);if(u.type==="area"){let y=`g${b}`;c.push($`
          <defs><linearGradient id=${y} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" style="stop-color:${u.color};stop-opacity:0.45"/>
            <stop offset="1" style="stop-color:${u.color};stop-opacity:0.04"/>
          </linearGradient></defs>
          <path d=${`${St(A)} L${A[A.length-1][0]},${r} L${A[0][0]},${r}Z`} fill="url(#${y})"/>`)}if(u.dashUntil!=null&&_[0].t<u.dashUntil){let y=_.findIndex(B=>B.t>=u.dashUntil),D=y<0?A:A.slice(0,y+1),T=y<0?[]:A.slice(y);c.push($`<path d=${St(D)} class="ln" style="stroke:${u.color}" stroke-dasharray="5 5"/>`),T.length>1&&c.push($`<path d=${St(T)} class="ln" style="stroke:${u.color}"/>`)}else c.push($`<path d=${St(A)} class="ln" style="stroke:${u.color}" />`)});let d=l.length;for(let u of this.markers){let b=this.x(u.t),x=e.y(u.v);l.push($`<circle cx=${b} cy=${x} r="4" class="mk"/>`),l.push($`<text x=${b} y=${x-9} class="mklab">${u.label}</text>`)}if(this.now&&this.now>this.start&&this.now<this.end){let u=this.x(this.now);l.push($`<line x1=${u} x2=${u} y1=${R.t} y2=${r} class="nowl"/>`)}let h=v;if(this._hover!=null){let u=this._hover,b=this.x(u);l.push($`<line x1=${b} x2=${b} y1=${R.t-6} y2=${r} class="hov"/>`);let x=[];for(let A of this.series){let S=Ln(A,u);if(!S||S.v==null||A.silent)continue;let F=A.axis==="right"&&s?s:e;(A.type==="line"||A.type==="area")&&l.push($`<circle cx=${b} cy=${F.y(S.v)} r="4" style="fill:${A.color}" class="hdot"/>`);let y=D=>{var T,B;return`${M(D,(T=A.digits)!=null?T:1)}${(B=A.unit)!=null?B:""}`};(A.type==="band"||A.type==="range")&&S.v2!=null?x.push({color:A.color,label:"Max",value:y(S.v2)},{color:A.color,label:"Min",value:y(S.v)}):x.push({color:A.color,label:(m=A.label)!=null?m:"",value:y(S.v)})}let _=b>t/2?`right:${t-b+8}px`:`left:${b+8}px`;h=g`<div class="tip" style="${_}"><div class="th"><b>${this.timeFormat(u)}</b>${(w=(p=this.tipIcon)==null?void 0:p.call(this,u))!=null?w:v}</div>
        ${x.map(A=>g`<div class="tr"><i style="background:${A.color}"></i><span>${A.label}</span><b>${A.value}</b></div>`)}</div>`}return g`
      <div class="wrap">
        ${h}
        <svg width=${t} height=${this.height} @pointermove=${this.onPointer} @pointerdown=${this.onPointer}
          @pointerleave=${u=>{u.pointerType!=="touch"&&(this._hover=void 0)}}>
          <defs><clipPath id="plot"><rect x=${R.l-1} y="0" width=${Math.max(0,t-R.l-R.r+2)} height=${r+1}/></clipPath></defs>
          ${l.slice(0,d)}<g clip-path="url(#plot)">${c}</g>${l.slice(d)}${o}</svg>
      </div>
    `}};Mt.properties={start:{type:Number},end:{type:Number},series:{attribute:!1},ticks:{attribute:!1},markers:{attribute:!1},now:{type:Number},height:{type:Number},yMin:{type:Number},yMax:{type:Number},yUnit:{type:String},rightMax:{type:Number},rightUnit:{type:String},timeFormat:{attribute:!1},tipIcon:{attribute:!1},_w:{state:!0},_hover:{state:!0}},Mt.styles=[De,H`
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
    .th { display: flex; align-items: center; justify-content: space-between; gap: 8px; min-height: 18px; }
    .th .wicon { width: 26px; height: 26px; margin: -4px -2px -4px 0; }
    .tr { display: flex; align-items: center; gap: 6px; }
    .tr i { width: 8px; height: 8px; border-radius: 2px; flex: none; }
    .tr span { color: var(--secondary-text-color); flex: 1; }
    .tr b { font-weight: 600; }
  `];function Ln(a,i){var s;let t;for(let r of a.points)r.v!=null&&(!t||Math.abs(de(a,r)-i)<Math.abs(de(a,t)-i))&&(t=r);if(!t)return;let e=a.points,n=t.t2!=null?t.t2-t.t:(s=a.barWidth)!=null?s:e.length>1?Math.abs(e[1].t-e[0].t):1/0;return Math.abs(de(a,t)-i)<=n/2+1?t:void 0}function de(a,i){var n;if(a.type!=="bar"&&a.type!=="range")return i.t;let t=a.points,e=i.t2!=null?i.t2-i.t:(n=a.barWidth)!=null?n:t.length>1?t[1].t-t[0].t:0;return i.t+e/2}function Kn(a){let i=Math.pow(10,Math.floor(Math.log10(Math.max(a,1e-9)))),t=a/i;return(t<=1?1:t<=2?2:t<=2.5?2.5:t<=5?5:10)*i}function Bi(a){return Number.isInteger(a)?String(a):M(a,1)}function St(a){let i=a.length;if(i===0)return"";if(i<3)return"M"+a.map(r=>`${r[0]},${r[1]}`).join(" L");let t=[],e=[],n=[];for(let r=0;r<i-1;r++)t[r]=a[r+1][0]-a[r][0],e[r]=t[r]?(a[r+1][1]-a[r][1])/t[r]:0;n[0]=e[0],n[i-1]=e[i-2];for(let r=1;r<i-1;r++)n[r]=e[r-1]*e[r]<=0?0:3*(t[r-1]+t[r])/((2*t[r]+t[r-1])/e[r-1]+(t[r]+2*t[r-1])/e[r]);let s=`M${a[0][0]},${a[0][1]}`;for(let r=0;r<i-1;r++){let l=t[r]/3;s+=` C${a[r][0]+l},${a[r][1]+l*n[r]} ${a[r+1][0]-l},${a[r+1][1]-l*n[r+1]} ${a[r+1][0]},${a[r+1][1]}`}return s}function Pi(a){let i=a.range;return g`
    <div class="range">
      <div class="chips" role="tablist">
        ${Re.map(t=>g`<button role="tab" aria-selected=${t.id===i.preset}
            class=${t.id===i.preset?"on":""}
            @click=${()=>a.set({preset:t.id,offset:0})}>${t.label}</button>`)}
      </div>
      <div class="nav">
        <button class="ib" aria-label="Zurück" @click=${()=>a.set({preset:i.preset,offset:i.offset-1})}>
          <ha-icon icon="mdi:chevron-left"></ha-icon>
        </button>
        <span>${i.label}</span>
        <button class="ib" aria-label="Vor" ?disabled=${i.offset>=0}
          @click=${()=>a.set({preset:i.preset,offset:i.offset+1})}>
          <ha-icon icon="mdi:chevron-right"></ha-icon>
        </button>
      </div>
    </div>
  `}var Fi=H`
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
`;var W=[{min:0,max:1,label:"0",name:"Windstille",color:"#2a32ff",text:"#fff"},{min:1,max:6,label:"1",name:"leiser Zug",color:"#3a6ff7",text:"#fff"},{min:6,max:12,label:"2",name:"leichte Brise",color:"#3fb4f7",text:"#000"},{min:12,max:20,label:"3",name:"schwache Brise",color:"#44f2f7",text:"#000"},{min:20,max:29,label:"4",name:"m\xE4\xDFige Brise",color:"#a6f78a",text:"#000"},{min:29,max:39,label:"5",name:"frische Brise",color:"#f7d64a",text:"#000"},{min:39,max:50,label:"6",name:"starker Wind",color:"#f77a4a",text:"#000"},{min:50,max:62,label:"7",name:"steifer Wind",color:"#e8443a",text:"#fff"},{min:62,max:1/0,label:"8+",name:"st\xFCrmischer Wind und mehr",color:"#b0207a",text:"#fff"}],he=["N","NNO","NO","ONO","O","OSO","SO","SSO","S","SSW","SW","WSW","W","WNW","NW","NNW"],Oi=a=>W.findIndex(i=>a<i.max),pe=3;function jn(a){let i=Oi(a.mean),t=a.min,e=a.max,n=a.mean;if(t==null||e==null||e<W[pe].min||e-t<.01)return[[i,1]];let s=Math.min(e,Math.max(t,3*n-t-e)),r=c=>c<=t?0:c>=e?1:c<=s?(c-t)**2/((e-t)*(s-t||1e-9)):1-(e-c)**2/((e-t)*(e-s||1e-9)),l=W.map(c=>r(c.max)-r(c.min));if(i>=pe)return l.map((c,d)=>[d,c]).filter(([,c])=>c>0);let o=l.slice(pe).reduce((c,d)=>c+d,0);return[[i,1-o],...l.map((c,d)=>[d,c]).filter(([c,d])=>c>=pe&&d>0)]}function Ui(a=[],i=[],t={}){var We,Ye;let e=(We=t.now)!=null?We:{},n=new Map(i.map(f=>[f.start,f])),s=he.map(()=>W.map(()=>0)),r=W.map(()=>0),l=0;for(let f of a){let k=n.get(f.start);if(f.mean==null||(k==null?void 0:k.mean)==null)continue;l++;let z=Math.round((f.mean%360+360)%360/22.5)%16;for(let[K,Z]of jn(k))r[K]+=Z,K>0&&(s[z][K]+=Z)}if(!l)return g`<div class="hint">Keine Winddaten im Zeitraum.</div>`;let o=f=>f/l*100,c=s.map(f=>o(f.reduce((k,z)=>k+z,0))),d=Math.max(...c,1),h=(Ye=[2,5,10,20,25,50].find(f=>d/f<=4))!=null?Ye:50,m=Math.ceil(d/h)*h,p=16,w=90,u=f=>p+f/m*(w-p),b=f=>(f-90)*Math.PI/180,x=(f,k)=>`${100+f*Math.cos(b(k))},${100+f*Math.sin(b(k))}`,_=(f,k,z)=>{let K=f*22.5-10.5,Z=f*22.5+10.5;return`M${x(k,K)} L${x(z,K)} A${z} ${z} 0 0 1 ${x(z,Z)} L${x(k,Z)} A${k} ${k} 0 0 0 ${x(k,K)}Z`},A=0,S=1/0;for(let f=0;f<16;f++){let k=Math.max(c[f],c[(f+1)%16]);k<S&&(S=k,A=f)}let F=A*22.5+11.25,y=[],D=[];for(let f=h;f<=m;f+=h)y.push($`<circle cx="100" cy="100" r=${u(f)} class="ring"/>`),D.push($`<text x=${100+u(f)*Math.cos(b(F))} y=${102.5+u(f)*Math.sin(b(F))} class="rl">${f} %</text>`);let T=f=>t.selected!=null&&t.selected!==f?"dim":"",B=s.flatMap((f,k)=>{let z=0;return f.map((K,Z)=>{if(!K)return $``;let sn=u(z);return z+=o(K),$`<path d=${_(k,sn,u(z))} style="fill:${W[Z].color}" class=${T(Z)}><title>${he[k]}, Bft ${W[Z].label}: ${M(o(K),1)} %</title></path>`})}),Y=he.map((f,k)=>k%4===0?$``:$`<text x=${100+109*Math.cos(b(k*22.5))} y=${103+109*Math.sin(b(k*22.5))} class=${k%2?"cd2":"cd"}>${he[k]}</text>`),xt=e.direction!=null?$`<path d="M100 ${100-w-1} l-5 -9 h10z" class="now" transform="rotate(${e.direction} 100 100)"><title>Aktuell: ${Math.round(e.direction)}°</title></path>`:$``,V=e.speed!=null?Oi(e.speed):-1,O=W.map((f,k)=>({...f,i:k,share:o(r[k]),w:Math.max(o(r[k]),9)})).filter(f=>r[f.i]>0||f.i===V),Q=O.reduce((f,k)=>f+k.w,0),at=f=>O.slice(0,f).reduce((k,z)=>k+z.w,0)/Q*100,U,ot=O.findIndex(f=>f.i===V);if(ot>=0){let f=O[ot],k=Number.isFinite(f.max)?f.max:f.min+20;U=at(ot)+Math.min(1,(e.speed-f.min)/(k-f.min))*(f.w/Q)*100}let tn=(f,k)=>f.w/Q*300>=k.length*6+6,en=f=>`left:${f}%;transform:translateX(-${f}%)`,fe=f=>f>=1?`${Math.round(f)}%`:f>=.05?`${M(f,1)}%`:"<0,1%",Ct=t.selected!=null?W[t.selected]:void 0,Ke=f=>window.innerHeight-f.currentTarget.getBoundingClientRect().bottom<150,je=(f,k)=>{var z;return(z=t.onSelect)==null?void 0:z.call(t,t.selected===k?void 0:k,Ke(f))},Ge=(f,k)=>{var z;f.pointerType==="mouse"&&((z=t.onSelect)==null||z.call(t,k,Ke(f)))},Qe=f=>{var k;f.pointerType==="mouse"&&((k=t.onSelect)==null||k.call(t,void 0))},be=O.findIndex(f=>f.i===t.selected),nn=f=>f.min===0?"unter 1":Number.isFinite(f.max)?`${f.min}\u2013${f.max-1}`:`ab ${f.min}`;return g`
    <div class="rose">
      <svg viewBox="-22 -22 244 244">
        ${y}
        <line x1="100" y1="8" x2="100" y2="192" class="ring"/><line x1="8" y1="100" x2="192" y2="100" class="ring"/>
        ${B}
        <circle cx="100" cy="100" r=${p-1} style="fill:${W[0].color}" class=${T(0)}/>
        <text x="100" y="103.5" class="cv">${Math.round(o(r[0]))} %</text>
        ${D}
        <text x="100" y="-6" class="cd">N</text><text x="100" y="216" class="cd">S</text>
        <text x="211" y="103" class="cd">O</text><text x="-11" y="103" class="cd">W</text>
        ${Y}
        ${xt}
      </svg>
      <div class="bftbar">
        ${U!=null?g`<span class="nowsp" style="left:${U}%" title="Aktuell: ${M(e.speed,1)} km/h"></span>`:""}
        ${Ct&&be>=0?g`<div class="btip ${t.up?"up":""}" style=${en(at(be)+O[be].w/Q*50)}>
          <div class="tr"><i style="background:${Ct.color}"></i><b>Beaufort ${Ct.label}</b></div>
          <div class="tr"><span>${Ct.name}</span></div>
          <div class="tr"><span>Wind</span><b>${nn(Ct)} km/h</b></div>
          <div class="tr"><span>Anteil</span><b>${fe(o(r[t.selected]))}</b></div>
        </div>`:""}
        <div class="segs">${O.map(f=>g`<button style="flex:${f.w} 1 0;background:${f.color};color:${f.text}" class=${t.selected===f.i?"on":""}
          @click=${k=>je(k,f.i)} @pointerenter=${k=>Ge(k,f.i)} @pointerleave=${Qe}>${tn(f,fe(f.share))?fe(f.share):""}</button>`)}</div>
        <div class="nums">${O.map(f=>g`<span style="flex:${f.w} 1 0" @click=${k=>je(k,f.i)} @pointerenter=${k=>Ge(k,f.i)} @pointerleave=${Qe}>${f.label}</span>`)}</div>
        <div class="bl">Beaufort</div>
      </div>
    </div>`}var Ni=H`
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
`;var Gn=[{id:"pressure",label:"Luftdruck",unit:" hPa",digits:1,color:"var(--wa-accent)"},{id:"humidity",label:"Feuchte",unit:" %",digits:0,color:"#4dd0e1"},{id:"solar",label:"Sonne",unit:" W/m\xB2",digits:0,color:"#ffb300"},{id:"uv",label:"UV",unit:"",digits:1,color:"#ab47bc"}],Qn=$`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"/></svg>`,Pe=["Jan","Feb","M\xE4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],Wn=["Januar","Februar","M\xE4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],Fe=["So","Mo","Di","Mi","Do","Fr","Sa"],Li=864e5,Yn=.1,Tt=class extends P{constructor(){super(...arguments);this.wide=!1;this._extra="pressure";this._bftUp=!1;this.range=new oe(this,()=>{var t,e;return(e=(t=this.config)==null?void 0:t.sync_group)!=null?e:"default"},()=>{var t;return At((t=this.config)==null?void 0:t.default_range)?this.config.default_range:"7d"})}periods(t){return{main:t.preset==="day"||t.preset==="7d"?"hour":"day",rain:t.preset==="day"?"hour":"day",rose:t.start.getTime()>Date.now()-9*Li?"5minute":"hour"}}connectedCallback(){super.connectedCallback(),this._offTip=ce(this,()=>this._bft=void 0,()=>this.renderRoot.querySelector(".bftbar"))}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._offTip)==null||t.call(this)}updated(){this.load()}async load(){var o,c;if(!this.hass||!this.config)return;let t=this.range.range,e=(o=this.config.sensors)!=null?o:{},n=this.periods(t),s=`${t.start.getTime()}|${t.end.getTime()}`;if(s===this._key)return;this._key=s,this._err=void 0;let r=d=>d.filter(Boolean),l=(d,h,m)=>tt(this.hass,{ids:d,start:t.start,end:t.end,period:h,types:m});try{let[d,h,m]=await Promise.all([l(r([e.temperature,e.humidity,e.pressure,e.solar,e.uv,e.wind_speed,e.wind_gust]),n.main,["mean","min","max"]),l(r([e.rain_total]),n.rain,["change"]),l(r([e.wind_direction,n.rose!==n.main?e.wind_speed:void 0]),n.rose,["mean","min","max"])]);if(s!==this._key)return;this._dataRange=t,this._data={main:d,rain:h,dir:m}}catch(d){if(s!==this._key)return;this._err=(c=d==null?void 0:d.message)!=null?c:String(d),this._key=void 0}}render(){var d,h,m;if(!this.config)return v;let t=this.range.range,e=this._data,n=e&&this._dataRange?this._dataRange:t,s=n!==t&&(n.start.getTime()!==t.start.getTime()||n.end.getTime()!==t.end.getTime()),r=(d=this.config.sensors)!=null?d:{},l=r.temperature&&(e==null?void 0:e.main[r.temperature])||[],o=(h=l.find(p=>p.mean!=null))==null?void 0:h.start,c=!s&&o!=null&&o-n.start.getTime()>2*Li?g`<div class="hint-inline"><span>${Qn}<span>Daten erst ab <b>${new Date(o).toLocaleDateString("de-DE")}</b></span></span></div>`:v;return g`
      <section class="card">
        ${Pi(this.range)}
      </section>
      ${this._err?g`<div class="warn">Statistik nicht verfügbar: ${this._err}</div>`:v}
      ${e?!l.length&&!(r.rain_total&&((m=e.rain[r.rain_total])!=null&&m.length))?g`<div class="hint">Keine Daten in diesem Zeitraum.</div>`:g`<div class="body ${s?"stale":""}">
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
            </div></div>`:g`<div class="loading">Lade Historie …</div>`}
    `}inRange(t,e,n){let s=n.start.getTime(),r=n.end.getTime();return(e&&(t==null?void 0:t[e])||[]).filter(l=>l.start<r&&l.end>s)}rows(t,e,n){let s=this.inRange(t,e,n);return n.preset==="year"?Vn(s):s}ticks(t){let e=[],n=t.start;if(t.preset==="day")for(let s of[0,6,12,18])e.push({t:new Date(n.getFullYear(),n.getMonth(),n.getDate(),s).getTime(),label:`${String(s).padStart(2,"0")} Uhr`});else if(t.preset==="7d")for(let s=0;s<7;s++){let r=new Date(n.getFullYear(),n.getMonth(),n.getDate()+s);e.push({t:r.getTime(),label:Fe[r.getDay()]})}else if(t.preset==="30d")for(let s=0;s<30;s+=7){let r=new Date(n.getFullYear(),n.getMonth(),n.getDate()+s);e.push({t:r.getTime(),label:`${r.getDate()}.${r.getMonth()+1}.`})}else if(t.preset==="month")for(let s of[1,8,15,22,29])e.push({t:new Date(n.getFullYear(),n.getMonth(),s).getTime(),label:`${s}.`});else for(let s=0;s<12;s++)e.push({t:new Date(n.getFullYear(),s,1).getTime(),label:Pe[s]});return e}fmt(t,e){return n=>{let s=new Date(n);return t.preset==="year"&&e!=="hour"?`${Wn[s.getMonth()]}`:e==="hour"?`${Fe[s.getDay()]} ${String(s.getHours()).padStart(2,"0")}:00`:`${Fe[s.getDay()]}, ${s.getDate()}.${s.getMonth()+1}.`}}chart(t,e,n){var s,r;return g`<wetter-app-chart .start=${t.start.getTime()} .end=${t.end.getTime()} .series=${e}
      .ticks=${this.ticks(t)} .height=${(s=n.height)!=null?s:200} .yUnit=${(r=n.yUnit)!=null?r:""} .yMin=${n.yMin}
      .rightMax=${n.rightMax} .timeFormat=${this.fmt(t,t.preset==="year"?"month":n.period)}></wetter-app-chart>`}renderSummary(t,e){var x;let n=(x=this.config.sensors)!=null?x:{},s=this.periods(t),r=this.inRange(e.main,n.temperature,t),l=Ue(r,"min",Math.min),o=Ue(r,"max",Math.max),c=Oe(r.map(_=>_.mean)),d=this.inRange(e.rain,n.rain_total,t),h=d.reduce((_,A)=>{var S;return _+((S=A.change)!=null?S:0)},0),m=d.filter(_=>{var A;return((A=_.change)!=null?A:0)>=Yn}).length,p=Ue(this.inRange(e.main,n.wind_gust,t),"max",Math.max),w=Oe(this.inRange(e.main,n.wind_speed,t).map(_=>_.mean)),u=Oe(this.inRange(e.main,n.humidity,t).map(_=>_.mean)),b=this.fmt({...t,preset:t.preset==="year"?"30d":t.preset},s.main);return g`<div class="grid">
      <section class="card kv">${I("mdi:thermometer","Temperatur")}
        <div class="big">${E(c,1)}</div><div class="sub">Durchschnitt</div>
        <div class="ext"><span>▲ ${E(o==null?void 0:o.v,1)}</span><small>${o?b(o.t):""}</small></div>
        <div class="ext"><span>▼ ${E(l==null?void 0:l.v,1)}</span><small>${l?b(l.t):""}</small></div>
      </section>
      <section class="card kv">${I("mdi:weather-pouring","Niederschlag")}
        <div class="big">${st(h)}</div><div class="sub">Summe</div>
        <div class="ext"><span>${m}</span><small>${s.rain==="hour"?"Stunden mit Regen":"Regentage (\u2265 0,1 l/m\xB2)"}</small></div>
      </section>
      <section class="card kv">${I("mdi:weather-windy","Wind")}
        <div class="big">${M(w,1)} km/h</div><div class="sub">Durchschnitt</div>
        <div class="ext"><span>${M(p==null?void 0:p.v,0)} km/h</span><small>stärkste Böe${p?` \xB7 ${b(p.t)}`:""}</small></div>
      </section>
      <section class="card kv">${I("mdi:water-percent","Luftfeuchte")}
        <div class="big">${M(u,0)} %</div><div class="sub">Durchschnitt</div>
      </section>
    </div>`}renderTemp(t,e){var c;let n=(c=this.config.sensors)!=null?c:{},s=this.periods(t),r=this.rows(e.main,n.temperature,t),l=[],o=d=>d.start+(d.end-d.start)/2;return s.main==="hour"?l.push({type:"band",points:r.map(d=>({t:o(d),v:d.min,v2:d.max})),color:"var(--wa-temp, #4fc3f7)",label:"",unit:"\xB0",digits:1}):l.push({type:"range",points:r.map(d=>({t:d.start,t2:d.end,v:d.min,v2:d.max})),color:"rgba(79, 195, 247, 0.55)",label:"",unit:"\xB0",digits:1}),l.push({type:"line",points:r.map(d=>({t:o(d),v:d.mean})),color:"var(--wa-temp-line, #ffb74d)",label:"\xD8",unit:"\xB0",digits:1}),g`<section class="card">${I("mdi:thermometer","Temperatur")}
      ${this.chart(t,l,{yUnit:"\xB0",period:s.main})}
      ${gt([{color:"#4fc3f7",label:"Min\u2013Max"},{color:"#ffb74d",label:"Durchschnitt",kind:"line"}])}
    </section>`}renderRain(t,e){var d;let n=(d=this.config.sensors)!=null?d:{};if(!n.rain_total)return v;let s=this.periods(t),r=this.rows(e.rain,n.rain_total,t),l=h=>{let m=0;return h.map(p=>{var w;return{t:Math.min(p.end,t.end.getTime()),v:m+=(w=p.change)!=null?w:0}})},o=r.slice(Math.max(0,r.findIndex(h=>h.change!=null))),c=[{type:"bar",points:r.map(h=>{var m;return{t:h.start,t2:h.end,v:(m=h.change)!=null?m:0}}),color:"var(--wa-rain)",label:"Menge",unit:" l/m\xB2",digits:1},{type:"line",axis:"right",points:o.length?[{t:Math.max(o[0].start,t.start.getTime()),v:0},...l(o)]:[],color:"var(--wa-prob, #90caf9)",label:"Summe",unit:" l/m\xB2",digits:1}];return g`<section class="card">${I("mdi:weather-pouring","Niederschlag")}
      ${this.chart(t,c,{yMin:0,period:s.rain})}
      ${gt([{color:"var(--wa-rain)",label:s.rain==="hour"?"pro Stunde":t.preset==="year"?"pro Monat":"pro Tag"},{color:"var(--wa-prob, #90caf9)",label:"Summe (blaue Skala links)",kind:"line"}])}
    </section>`}renderWind(t,e){var m;let n=(m=this.config.sensors)!=null?m:{};if(!n.wind_speed)return v;let s=this.periods(t),r=n.wind_direction&&e.dir[n.wind_direction]||[],l=(s.rose===s.main?e.main[n.wind_speed]:e.dir[n.wind_speed])||[],o=this.rows(e.main,n.wind_speed,t),c=this.rows(e.main,n.wind_gust,t),d=p=>p.start+(p.end-p.start)/2,h=[{type:"line",points:o.map(p=>({t:d(p),v:p.mean})),color:"var(--wa-wind, #81c784)",label:"\xD8",unit:" km/h",digits:1},...c.length?[{type:"line",points:c.map(p=>({t:d(p),v:p.max})),color:"var(--wa-gust, #ffb74d)",label:"B\xF6e",unit:" km/h",digits:0}]:[]];return g`<section class="card">${I("mdi:weather-windy","Wind")}
      ${n.wind_direction?Ui(r,l,{now:t.live?{direction:C(this.hass,n.wind_direction),speed:C(this.hass,n.wind_speed)}:{},selected:this._bft,up:this._bftUp,onSelect:(p,w)=>{p!=null&&this._bft==null&&le(this),this._bft=p,this._bftUp=!!w}}):v}
      ${this.chart(t,h,{yMin:0,period:s.main,height:160})}
      ${gt([{color:"#81c784",label:"Durchschnitt",kind:"line"},{color:"#ffb74d",label:"st\xE4rkste B\xF6e",kind:"line"}])}
    </section>`}renderExtra(t,e){var h,m;let n=(h=this.config.sensors)!=null?h:{},s=Gn.filter(p=>n[p.id]);if(!s.length)return v;let r=(m=s.find(p=>p.id===this._extra))!=null?m:s[0],l=this.periods(t),o=this.rows(e.main,n[r.id],t),c=p=>p.start+(p.end-p.start)/2,d=[{type:"band",points:o.map(p=>({t:c(p),v:p.min,v2:p.max})),color:r.color,unit:r.unit,digits:r.digits},{type:"line",points:o.map(p=>({t:c(p),v:p.mean})),color:r.color,label:"\xD8",unit:r.unit,digits:r.digits}];return g`<section class="card">${I("mdi:chart-bell-curve-cumulative","Weitere Werte")}
      <div class="chips small">${s.map(p=>g`<button class=${p===r?"on":""} @click=${()=>this._extra=p.id}>${p.label}</button>`)}</div>
      ${this.chart(t,d,{period:l.main,yMin:r.id==="pressure"?void 0:0})}
      ${gt([{color:r.color,label:"Durchschnitt",kind:"line"},{color:r.color,label:"Min\u2013Max",opacity:.3}])}
    </section>`}renderYearTable(t,e){var m;let n=(m=this.config.sensors)!=null?m:{},s=this.rows(e.main,n.temperature,t),r=this.rows(e.rain,n.rain_total,t),l=(p,w)=>p.find(u=>u.start===w),o=[...Array(12)].map((p,w)=>new Date(t.start.getFullYear(),w,1).getTime()).filter(p=>p<=Date.now()),c=o.findIndex(p=>l(s,p)||l(r,p)),d=c<0?o:o.slice(c),h=Math.max(1,...r.map(p=>{var w;return(w=p.change)!=null?w:0}));return g`<section class="card">${I("mdi:table",`Monate ${t.start.getFullYear()}`)}
      <table class="months">
        <thead><tr><th></th><th>Ø</th><th>Min</th><th>Max</th><th class="rc">Niederschlag</th></tr></thead>
        <tbody>${d.map(p=>{var x;let w=new Date(p).getMonth(),u=l(s,p),b=l(r,p);return!u&&!b?g`<tr class="empty"><td>${Pe[w]}</td><td colspan="4">–</td></tr>`:g`<tr>
            <td>${Pe[w]}</td><td>${E(u==null?void 0:u.mean,1)}</td><td class="cold">${E(u==null?void 0:u.min,1)}</td><td class="warm">${E(u==null?void 0:u.max,1)}</td>
            <td class="rc"><div class="rcell"><div class="rbar"><i style="width:${((x=b==null?void 0:b.change)!=null?x:0)/h*100}%"></i></div>
              <span>${M(b==null?void 0:b.change,0)}</span></div></td></tr>`})}</tbody>
      </table>
    </section>`}};Tt.properties={hass:{attribute:!1},config:{attribute:!1},wide:{type:Boolean,reflect:!0},_data:{state:!0},_err:{state:!0},_extra:{state:!0},_bft:{state:!0}},Tt.styles=[nt,qt,Fi,Ni,H`
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
    `];function Oe(a){let i=a.filter(t=>t!=null);return i.length?i.reduce((t,e)=>t+e,0)/i.length:void 0}function Ue(a,i,t){let e;for(let n of a){let s=n[i];s!=null&&(!e||t(s,e.v)===s&&s!==e.v)&&(e={t:n.start,v:s})}return e}function Vn(a){var t;let i=new Map;for(let e of a){let n=new Date(e.start),s=new Date(n.getFullYear(),n.getMonth(),1).getTime(),r=i.get(s);r||(r={start:s,end:new Date(n.getFullYear(),n.getMonth()+1,1).getTime(),min:null,max:null,mean:null,change:null,_n:0,_sum:0},i.set(s,r)),e.min!=null&&(r.min=r.min==null?e.min:Math.min(r.min,e.min)),e.max!=null&&(r.max=r.max==null?e.max:Math.max(r.max,e.max)),e.mean!=null&&(r._sum+=e.mean,r._n++,r.mean=r._sum/r._n),e.change!=null&&(r.change=((t=r.change)!=null?t:0)+e.change)}return[...i.values()].sort((e,n)=>e.start-n.start)}var Ki={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ji=a=>(...i)=>({_$litDirective$:a,values:i}),ue=class{constructor(i){}get _$AU(){return this._$AM._$AU}_$AT(i,t,e){this._$Ct=i,this._$AM=t,this._$Ci=e}_$AS(i,t){return this.update(i,t)}update(i,t){return this.render(...t)}};var{I:Zn}=fi,Gi=a=>a;var Qi=()=>document.createComment(""),Dt=(a,i,t)=>{var s;let e=a._$AA.parentNode,n=i===void 0?a._$AB:i._$AA;if(t===void 0){let r=e.insertBefore(Qi(),n),l=e.insertBefore(Qi(),n);t=new Zn(r,l,a,a.options)}else{let r=t._$AB.nextSibling,l=t._$AM,o=l!==a;if(o){let c;(s=t._$AQ)==null||s.call(t,a),t._$AM=a,t._$AP!==void 0&&(c=a._$AU)!==l._$AU&&t._$AP(c)}if(r!==n||o){let c=t._$AA;for(;c!==r;){let d=Gi(c).nextSibling;Gi(e).insertBefore(c,n),c=d}}}return t},rt=(a,i,t=a)=>(a._$AI(i,t),a),Jn={},Wi=(a,i=Jn)=>a._$AH=i,Yi=a=>a._$AH,me=a=>{a._$AR(),a._$AA.remove()};var Vi=(a,i,t)=>{let e=new Map;for(let n=i;n<=t;n++)e.set(a[n],n);return e},Zi=ji(class extends ue{constructor(a){if(super(a),a.type!==Ki.CHILD)throw Error("repeat() can only be used in text expressions")}dt(a,i,t){let e;t===void 0?t=i:i!==void 0&&(e=i);let n=[],s=[],r=0;for(let l of a)n[r]=e?e(l,r):r,s[r]=t(l,r),r++;return{values:s,keys:n}}render(a,i,t){return this.dt(a,i,t).values}update(a,[i,t,e]){var u;let n=Yi(a),{values:s,keys:r}=this.dt(i,t,e);if(!Array.isArray(n))return this.ut=r,s;let l=(u=this.ut)!=null?u:this.ut=[],o=[],c,d,h=0,m=n.length-1,p=0,w=s.length-1;for(;h<=m&&p<=w;)if(n[h]===null)h++;else if(n[m]===null)m--;else if(l[h]===r[p])o[p]=rt(n[h],s[p]),h++,p++;else if(l[m]===r[w])o[w]=rt(n[m],s[w]),m--,w--;else if(l[h]===r[w])o[w]=rt(n[h],s[w]),Dt(a,o[w+1],n[h]),h++,w--;else if(l[m]===r[p])o[p]=rt(n[m],s[p]),Dt(a,n[h],n[m]),m--,p++;else if(c===void 0&&(c=Vi(r,p,w),d=Vi(l,h,m)),c.has(l[h]))if(c.has(l[m])){let b=d.get(r[p]),x=b!==void 0?n[b]:null;if(x===null){let _=Dt(a,n[h]);rt(_,s[p]),o[p]=_}else o[p]=rt(x,s[p]),Dt(a,n[h],x),n[b]=null;p++}else me(n[m]),m--;else me(n[h]),h++;for(;p<=w;){let b=Dt(a,o[w+1]);rt(b,s[p]),o[p++]=b}for(;h<=m;){let b=n[h++];b!==null&&me(b)}return this.ut=r,Wi(a,o),X}});var qn={rainy:["clouds","rain"],pouring:["clouds","pour"],hail:["clouds","hail"],"lightning-rainy":["clouds","rain","flash"],lightning:["clouds","flash"],snowy:["fewclouds","snow"],"snowy-rainy":["fewclouds","sleet"],sunny:["sun"],"clear-night":["stars"],partlycloudy:["sun","fewclouds"],cloudy:["clouds"],fog:["fog"],windy:["wind"],"windy-variant":["fewclouds","wind"]};function Xn(a){return()=>{a=a+1831565813|0;let i=Math.imul(a^a>>>15,1|a);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}var ts=a=>[{transform:"translate3d(0,-40px,0)",opacity:a},{transform:"translate3d(0,230px,0)",opacity:a,offset:.43},{transform:"translate3d(0,580px,0)",opacity:0}],es=a=>[{transform:"translate3d(0,-10px,0)",opacity:a},{transform:"translate3d(14px,280px,0)",opacity:a*.8},{transform:"translate3d(0,570px,0)",opacity:0}],is=a=>[{transform:"translate3d(0,-20px,0)",opacity:a,easing:"ease-in"},{transform:"translate3d(0,300px,0)",opacity:a,offset:.62},{transform:"translate3d(4px,270px,0)",opacity:a*.7,offset:.72},{transform:"translate3d(7px,520px,0)",opacity:0}],Ne=a=>[{transform:`translate3d(-${a}%,0,0)`},{transform:"translate3d(100%,0,0)"}];function Le(a,i){let t=Xn(i),e=n=>[...Array(n)];switch(a){case"rain":case"pour":case"sleet":return e(a==="pour"?56:a==="sleet"?14:28).map(()=>{let s=700+t()*500;return{cls:"drop",style:`left:${(t()*100).toFixed(1)}%;height:${Math.round(14+t()*14)}px`,anim:ts(.4+t()*.6),dur:s,delay:-t()*s}}).concat(a==="sleet"?Le("snow",i+7).slice(0,18):[]);case"hail":return e(26).map(()=>{let n=900+t()*500,s=(3.5+t()*2.5).toFixed(1);return{cls:"hail",style:`left:${(t()*100).toFixed(1)}%;top:${Math.round(-t()*160)}px;width:${s}px;height:${s}px`,anim:is(.6+t()*.4),dur:n,delay:-t()*n}}).concat(Le("rain",i+3).slice(0,10));case"snow":return e(36).map(()=>{let n=9e3+t()*8e3,s=(2+t()*2.5).toFixed(1);return{cls:"flake",style:`left:${(t()*100).toFixed(1)}%;width:${s}px;height:${s}px`,anim:es(.35+t()*.5),dur:n,delay:-t()*n}});case"stars":case"fewstars":return e(a==="stars"?46:18).map(()=>{let n=(1+t()*1.6).toFixed(1);return{cls:"star",style:`left:${(t()*100).toFixed(1)}%;top:${(t()*300).toFixed(0)}px;width:${n}px;height:${n}px`,anim:[{opacity:.15},{opacity:.4+t()*.6}],dur:1800+t()*3500,delay:-t()*4e3,easing:"ease-in-out",dir:"alternate"}});case"sun":return[{cls:"glow",style:"",anim:[{transform:"scale(1)",opacity:.75},{transform:"scale(1.08)",opacity:1}],dur:7e3,delay:0,easing:"ease-in-out",dir:"alternate"},{cls:"rays",style:"",anim:[{transform:"rotate(0deg)"},{transform:"rotate(360deg)"}],dur:14e4,delay:0}];case"clouds":case"fewclouds":return e(a==="clouds"?5:3).map((n,s)=>{let r=7e4+t()*5e4;return{cls:"lane",style:`top:${Math.round(10+s*(a==="clouds"?70:90)+t()*30)}px;--cw:${Math.round(28+t()*16)}%;opacity:${(.5+t()*.5).toFixed(2)}`,anim:Ne(45),dur:r,delay:-t()*r}});case"fog":return e(4).map((n,s)=>{let r=5e4+t()*4e4;return{cls:"lane fogl",style:`top:${60+s*90}px`,anim:Ne(80),dur:r,delay:-t()*r}});case"wind":return e(10).map(()=>{let n=2200+t()*2200;return{cls:"lane windl",style:`top:${Math.round(20+t()*380)}px;--sw:${Math.round(60+t()*90)}px;opacity:${(.3+t()*.6).toFixed(2)}`,anim:Ne(20),dur:n,delay:-t()*n*3}});case"flash":return[{cls:"flash",style:"",anim:[{opacity:0,offset:0},{opacity:0,offset:.1},{opacity:.38,offset:.11},{opacity:0,offset:.13},{opacity:.24,offset:.15},{opacity:0,offset:.17},{opacity:0,offset:1}],dur:8e3,delay:0}]}}var Ji=new Map;function ns(a,i){var n;let t=`${a}|${i}`,e=Ji.get(t);return e||(e=((n=qn[a])!=null?n:[]).map(r=>i&&r==="sun"?"fewstars":r).flatMap((r,l)=>Le(r,l*31+1)),Ji.set(t,e)),e}var qi=1500,Et=class extends P{constructor(){super(...arguments);this.night=!1;this._groups=[];this._started=new WeakSet}willUpdate(t){if(!t.has("condition")&&!t.has("night"))return;let e=this.condition?`${this.condition}|${this.night}`:"",n=this._groups.find(s=>!s.leaving);(n==null?void 0:n.key)!==e&&(this._groups=[...this._groups.filter(s=>s!==n&&!s.leaving),...n?[{...n,leaving:!0}]:[],...e?[{key:e,items:ns(this.condition,this.night)}]:[]])}render(){return g`${Zi(this._groups,t=>t.key,t=>g`<div class="g" data-key=${t.key}>
      ${t.items.map(e=>g`<i class=${e.cls} style=${e.style}>${e.cls.startsWith("lane")?g`<b></b>`:v}</i>`)}
    </div>`)}`}updated(){this.renderRoot.querySelectorAll(".g").forEach(e=>{let n=this._groups.find(s=>s.key===e.dataset.key);if(!(!n||typeof e.animate!="function")){if(n.leaving){this._started.has(e)&&!e.dataset.out?(e.dataset.out="1",e.animate([{opacity:1},{opacity:0}],{duration:qi,fill:"forwards"}).onfinish=()=>{this._groups=this._groups.filter(s=>s!==n)}):this._started.has(e)||(this._groups=this._groups.filter(s=>s!==n));return}this._started.has(e)||(this._started.add(e),e.animate([{opacity:0},{opacity:1}],{duration:qi}),e.querySelectorAll("i").forEach((s,r)=>{var o,c;let l=n.items[r];l&&s.animate(l.anim,{duration:l.dur,delay:l.delay,iterations:1/0,easing:(o=l.easing)!=null?o:"linear",direction:(c=l.dir)!=null?c:"normal"})}))}})}};Et.properties={condition:{},night:{type:Boolean},_groups:{state:!0}},Et.styles=H`
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
  `;var Xi=[["wetter-app",_t,"Wetter-App","Komplette Wetter-App mit Vorhersage und Historie"],["wetter-app-kompakt",kt,"Wetter-App kompakt","Das Wichtigste aus Vorhersage und Historie, antippen \xF6ffnet die Wetter-App"]],ss=[["wetter-app-chart",Mt],["wetter-app-day-detail",$t],["wetter-app-history",Tt],["wetter-app-sky",Et]];for(let[a,i]of[...ss,...Xi])customElements.get(a)||customElements.define(a,i);var ge=window;ge.customCards=ge.customCards||[];for(let[a,,i,t]of Xi)ge.customCards.some(e=>e.type===a)||ge.customCards.push({type:a,name:i,description:t,preview:!1});console.info("%c WETTER-APP %c 0.1.0 (2026-10-25 15:09 UTC) ","background:#2f6fc4;color:#fff;border-radius:3px 0 0 3px","background:#555;color:#fff;border-radius:0 3px 3px 0");
