var Ht=globalThis,zt=Ht.ShadowRoot&&(Ht.ShadyCSS===void 0||Ht.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ce=Symbol(),ze=new WeakMap,_t=class{constructor(i,t,e){if(this._$cssResult$=!0,e!==ce)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=t}get styleSheet(){let i=this.o,t=this.t;if(zt&&i===void 0){let e=t!==void 0&&t.length===1;e&&(i=ze.get(t)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),e&&ze.set(t,i))}return i}toString(){return this.cssText}},Fe=s=>new _t(typeof s=="string"?s:s+"",void 0,ce),B=(s,...i)=>{let t=s.length===1?s[0]:i.reduce((e,n,a)=>e+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+s[a+1],s[0]);return new _t(t,s,ce)},Oe=(s,i)=>{if(zt)s.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of i){let e=document.createElement("style"),n=Ht.litNonce;n!==void 0&&e.setAttribute("nonce",n),e.textContent=t.cssText,s.appendChild(e)}},de=zt?s=>s:s=>s instanceof CSSStyleSheet?(i=>{let t="";for(let e of i.cssRules)t+=e.cssText;return Fe(t)})(s):s;var{is:Wi,defineProperty:Yi,getOwnPropertyDescriptor:Vi,getOwnPropertyNames:Ji,getOwnPropertySymbols:Zi,getPrototypeOf:qi}=Object,X=globalThis,Ue=X.trustedTypes,Xi=Ue?Ue.emptyScript:"",he=X.reactiveElementPolyfillSupport,St=(s,i)=>s,pe={toAttribute(s,i){switch(i){case Boolean:s=s?Xi:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,i){let t=s;switch(i){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},je=(s,i)=>!Wi(s,i),Ne={attribute:!0,type:String,converter:pe,reflect:!1,useDefault:!1,hasChanged:je},Le,Ke;(Le=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(Ke=X.litPropertyMetadata)!=null||(X.litPropertyMetadata=new WeakMap);var W=class extends HTMLElement{static addInitializer(i){var t;this._$Ei(),((t=this.l)!=null?t:this.l=[]).push(i)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(i,t=Ne){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(i)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(i,t),!t.noAccessor){let e=Symbol(),n=this.getPropertyDescriptor(i,e,t);n!==void 0&&Yi(this.prototype,i,n)}}static getPropertyDescriptor(i,t,e){var r;let{get:n,set:a}=(r=Vi(this.prototype,i))!=null?r:{get(){return this[t]},set(o){this[t]=o}};return{get:n,set(o){let l=n==null?void 0:n.call(this);a==null||a.call(this,o),this.requestUpdate(i,l,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(i){var t;return(t=this.elementProperties.get(i))!=null?t:Ne}static _$Ei(){if(this.hasOwnProperty(St("elementProperties")))return;let i=qi(this);i.finalize(),i.l!==void 0&&(this.l=[...i.l]),this.elementProperties=new Map(i.elementProperties)}static finalize(){if(this.hasOwnProperty(St("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(St("properties"))){let t=this.properties,e=[...Ji(t),...Zi(t)];for(let n of e)this.createProperty(n,t[n])}let i=this[Symbol.metadata];if(i!==null){let t=litPropertyMetadata.get(i);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[t,e]of this.elementProperties){let n=this._$Eu(t,e);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(i){let t=[];if(Array.isArray(i)){let e=new Set(i.flat(1/0).reverse());for(let n of e)t.unshift(de(n))}else i!==void 0&&t.push(de(i));return t}static _$Eu(i,t){let e=t.attribute;return e===!1?void 0:typeof e=="string"?e:typeof i=="string"?i.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var i;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(i=this.constructor.l)==null||i.forEach(t=>t(this))}addController(i){var t,e;((t=this._$EO)!=null?t:this._$EO=new Set).add(i),this.renderRoot!==void 0&&this.isConnected&&((e=i.hostConnected)==null||e.call(i))}removeController(i){var t;(t=this._$EO)==null||t.delete(i)}_$E_(){let i=new Map,t=this.constructor.elementProperties;for(let e of t.keys())this.hasOwnProperty(e)&&(i.set(e,this[e]),delete this[e]);i.size>0&&(this._$Ep=i)}createRenderRoot(){var t;let i=(t=this.shadowRoot)!=null?t:this.attachShadow(this.constructor.shadowRootOptions);return Oe(i,this.constructor.elementStyles),i}connectedCallback(){var i,t;(i=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostConnected)==null?void 0:n.call(e)})}enableUpdating(i){}disconnectedCallback(){var i;(i=this._$EO)==null||i.forEach(t=>{var e;return(e=t.hostDisconnected)==null?void 0:e.call(t)})}attributeChangedCallback(i,t,e){this._$AK(i,e)}_$ET(i,t){var a;let e=this.constructor.elementProperties.get(i),n=this.constructor._$Eu(i,e);if(n!==void 0&&e.reflect===!0){let r=(((a=e.converter)==null?void 0:a.toAttribute)!==void 0?e.converter:pe).toAttribute(t,e.type);this._$Em=i,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(i,t){var a,r,o;let e=this.constructor,n=e._$Eh.get(i);if(n!==void 0&&this._$Em!==n){let l=e.getPropertyOptions(n),c=typeof l.converter=="function"?{fromAttribute:l.converter}:((a=l.converter)==null?void 0:a.fromAttribute)!==void 0?l.converter:pe;this._$Em=n;let h=c.fromAttribute(t,l.type);this[n]=(o=h!=null?h:(r=this._$Ej)==null?void 0:r.get(n))!=null?o:h,this._$Em=null}}requestUpdate(i,t,e,n=!1,a){var r,o;if(i!==void 0){let l=this.constructor;if(n===!1&&(a=this[i]),e!=null||(e=l.getPropertyOptions(i)),!(((r=e.hasChanged)!=null?r:je)(a,t)||e.useDefault&&e.reflect&&a===((o=this._$Ej)==null?void 0:o.get(i))&&!this.hasAttribute(l._$Eu(i,e))))return;this.C(i,t,e)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(i,t,{useDefault:e,reflect:n,wrapped:a},r){var o,l,c;e&&!((o=this._$Ej)!=null?o:this._$Ej=new Map).has(i)&&(this._$Ej.set(i,(l=r!=null?r:t)!=null?l:this[i]),a!==!0||r!==void 0)||(this._$AL.has(i)||(this.hasUpdated||e||(t=void 0),this._$AL.set(i,t)),n===!0&&this._$Em!==i&&((c=this._$Eq)!=null?c:this._$Eq=new Set).add(i))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let i=this.scheduleUpdate();return i!=null&&await i,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e,n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[r,o]of a){let{wrapped:l}=o,c=this[r];l!==!0||this._$AL.has(r)||c===void 0||this.C(r,void 0,o,c)}}let i=!1,t=this._$AL;try{i=this.shouldUpdate(t),i?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(a=>{var r;return(r=a.hostUpdate)==null?void 0:r.call(a)}),this.update(t)):this._$EM()}catch(a){throw i=!1,this._$EM(),a}i&&this._$AE(t)}willUpdate(i){}_$AE(i){var t;(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostUpdated)==null?void 0:n.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(i)),this.updated(i)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(i){return!0}update(i){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(i){}firstUpdated(i){}},Ge;W.elementStyles=[],W.shadowRootOptions={mode:"open"},W[St("elementProperties")]=new Map,W[St("finalized")]=new Map,he==null||he({ReactiveElement:W}),((Ge=X.reactiveElementVersions)!=null?Ge:X.reactiveElementVersions=[]).push("2.1.2");var Tt=globalThis,Qe=s=>s,Ft=Tt.trustedTypes,We=Ft?Ft.createPolicy("lit-html",{createHTML:s=>s}):void 0,ge="$lit$",Y=`lit$${Math.random().toFixed(9).slice(2)}$`,fe="?"+Y,tn=`<${fe}>`,at=document,Ct=()=>at.createComment(""),Dt=s=>s===null||typeof s!="object"&&typeof s!="function",be=Array.isArray,ti=s=>be(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",ue=`[ 	
\f\r]`,Mt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ye=/-->/g,Ve=/>/g,st=RegExp(`>|${ue}(?:([^\\s"'>=/]+)(${ue}*=${ue}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Je=/'/g,Ze=/"/g,ei=/^(?:script|style|textarea|title)$/i,xe=s=>(i,...t)=>({_$litType$:s,strings:i,values:t}),f=xe(1),y=xe(2),Jn=xe(3),V=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),qe=new WeakMap,rt=at.createTreeWalker(at,129);function ii(s,i){if(!be(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return We!==void 0?We.createHTML(i):i}var ni=(s,i)=>{let t=s.length-1,e=[],n,a=i===2?"<svg>":i===3?"<math>":"",r=Mt;for(let o=0;o<t;o++){let l=s[o],c,h,p=-1,m=0;for(;m<l.length&&(r.lastIndex=m,h=r.exec(l),h!==null);)m=r.lastIndex,r===Mt?h[1]==="!--"?r=Ye:h[1]!==void 0?r=Ve:h[2]!==void 0?(ei.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=st):h[3]!==void 0&&(r=st):r===st?h[0]===">"?(r=n!=null?n:Mt,p=-1):h[1]===void 0?p=-2:(p=r.lastIndex-h[2].length,c=h[1],r=h[3]===void 0?st:h[3]==='"'?Ze:Je):r===Ze||r===Je?r=st:r===Ye||r===Ve?r=Mt:(r=st,n=void 0);let d=r===st&&s[o+1].startsWith("/>")?" ":"";a+=r===Mt?l+tn:p>=0?(e.push(c),l.slice(0,p)+ge+l.slice(p)+Y+d):l+Y+(p===-2?o:d)}return[ii(s,a+(s[t]||"<?>")+(i===2?"</svg>":i===3?"</math>":"")),e]},Et=class s{constructor({strings:i,_$litType$:t},e){let n;this.parts=[];let a=0,r=0,o=i.length-1,l=this.parts,[c,h]=ni(i,t);if(this.el=s.createElement(c,e),rt.currentNode=this.el.content,t===2||t===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(n=rt.nextNode())!==null&&l.length<o;){if(n.nodeType===1){if(n.hasAttributes())for(let p of n.getAttributeNames())if(p.endsWith(ge)){let m=h[r++],d=n.getAttribute(p).split(Y),g=/([.?@])?(.*)/.exec(m);l.push({type:1,index:a,name:g[2],strings:d,ctor:g[1]==="."?Ut:g[1]==="?"?Nt:g[1]==="@"?Lt:lt}),n.removeAttribute(p)}else p.startsWith(Y)&&(l.push({type:6,index:a}),n.removeAttribute(p));if(ei.test(n.tagName)){let p=n.textContent.split(Y),m=p.length-1;if(m>0){n.textContent=Ft?Ft.emptyScript:"";for(let d=0;d<m;d++)n.append(p[d],Ct()),rt.nextNode(),l.push({type:2,index:++a});n.append(p[m],Ct())}}}else if(n.nodeType===8)if(n.data===fe)l.push({type:2,index:a});else{let p=-1;for(;(p=n.data.indexOf(Y,p+1))!==-1;)l.push({type:7,index:a}),p+=Y.length-1}a++}}static createElement(i,t){let e=at.createElement("template");return e.innerHTML=i,e}};function ot(s,i,t=s,e){var r,o,l;if(i===V)return i;let n=e!==void 0?(r=t._$Co)==null?void 0:r[e]:t._$Cl,a=Dt(i)?void 0:i._$litDirective$;return(n==null?void 0:n.constructor)!==a&&((o=n==null?void 0:n._$AO)==null||o.call(n,!1),a===void 0?n=void 0:(n=new a(s),n._$AT(s,t,e)),e!==void 0?((l=t._$Co)!=null?l:t._$Co=[])[e]=n:t._$Cl=n),n!==void 0&&(i=ot(s,n._$AS(s,i.values),n,e)),i}var Ot=class{constructor(i,t){this._$AV=[],this._$AN=void 0,this._$AD=i,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(i){var c;let{el:{content:t},parts:e}=this._$AD,n=((c=i==null?void 0:i.creationScope)!=null?c:at).importNode(t,!0);rt.currentNode=n;let a=rt.nextNode(),r=0,o=0,l=e[0];for(;l!==void 0;){if(r===l.index){let h;l.type===2?h=new ut(a,a.nextSibling,this,i):l.type===1?h=new l.ctor(a,l.name,l.strings,this,i):l.type===6&&(h=new Kt(a,this,i)),this._$AV.push(h),l=e[++o]}r!==(l==null?void 0:l.index)&&(a=rt.nextNode(),r++)}return rt.currentNode=at,n}p(i){let t=0;for(let e of this._$AV)e!==void 0&&(e.strings!==void 0?(e._$AI(i,e,t),t+=e.strings.length-2):e._$AI(i[t])),t++}},ut=class s{get _$AU(){var i,t;return(t=(i=this._$AM)==null?void 0:i._$AU)!=null?t:this._$Cv}constructor(i,t,e,n){var a;this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=i,this._$AB=t,this._$AM=e,this.options=n,this._$Cv=(a=n==null?void 0:n.isConnected)!=null?a:!0}get parentNode(){let i=this._$AA.parentNode,t=this._$AM;return t!==void 0&&(i==null?void 0:i.nodeType)===11&&(i=t.parentNode),i}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(i,t=this){i=ot(this,i,t),Dt(i)?i===v||i==null||i===""?(this._$AH!==v&&this._$AR(),this._$AH=v):i!==this._$AH&&i!==V&&this._(i):i._$litType$!==void 0?this.$(i):i.nodeType!==void 0?this.T(i):ti(i)?this.k(i):this._(i)}O(i){return this._$AA.parentNode.insertBefore(i,this._$AB)}T(i){this._$AH!==i&&(this._$AR(),this._$AH=this.O(i))}_(i){this._$AH!==v&&Dt(this._$AH)?this._$AA.nextSibling.data=i:this.T(at.createTextNode(i)),this._$AH=i}$(i){var a;let{values:t,_$litType$:e}=i,n=typeof e=="number"?this._$AC(i):(e.el===void 0&&(e.el=Et.createElement(ii(e.h,e.h[0]),this.options)),e);if(((a=this._$AH)==null?void 0:a._$AD)===n)this._$AH.p(t);else{let r=new Ot(n,this),o=r.u(this.options);r.p(t),this.T(o),this._$AH=r}}_$AC(i){let t=qe.get(i.strings);return t===void 0&&qe.set(i.strings,t=new Et(i)),t}k(i){be(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,e,n=0;for(let a of i)n===t.length?t.push(e=new s(this.O(Ct()),this.O(Ct()),this,this.options)):e=t[n],e._$AI(a),n++;n<t.length&&(this._$AR(e&&e._$AB.nextSibling,n),t.length=n)}_$AR(i=this._$AA.nextSibling,t){var e;for((e=this._$AP)==null?void 0:e.call(this,!1,!0,t);i!==this._$AB;){let n=Qe(i).nextSibling;Qe(i).remove(),i=n}}setConnected(i){var t;this._$AM===void 0&&(this._$Cv=i,(t=this._$AP)==null||t.call(this,i))}},lt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(i,t,e,n,a){this.type=1,this._$AH=v,this._$AN=void 0,this.element=i,this.name=t,this._$AM=n,this.options=a,e.length>2||e[0]!==""||e[1]!==""?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=v}_$AI(i,t=this,e,n){let a=this.strings,r=!1;if(a===void 0)i=ot(this,i,t,0),r=!Dt(i)||i!==this._$AH&&i!==V,r&&(this._$AH=i);else{let o=i,l,c;for(i=a[0],l=0;l<a.length-1;l++)c=ot(this,o[e+l],t,l),c===V&&(c=this._$AH[l]),r||(r=!Dt(c)||c!==this._$AH[l]),c===v?i=v:i!==v&&(i+=(c!=null?c:"")+a[l+1]),this._$AH[l]=c}r&&!n&&this.j(i)}j(i){i===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,i!=null?i:"")}},Ut=class extends lt{constructor(){super(...arguments),this.type=3}j(i){this.element[this.name]=i===v?void 0:i}},Nt=class extends lt{constructor(){super(...arguments),this.type=4}j(i){this.element.toggleAttribute(this.name,!!i&&i!==v)}},Lt=class extends lt{constructor(i,t,e,n,a){super(i,t,e,n,a),this.type=5}_$AI(i,t=this){var r;if((i=(r=ot(this,i,t,0))!=null?r:v)===V)return;let e=this._$AH,n=i===v&&e!==v||i.capture!==e.capture||i.once!==e.once||i.passive!==e.passive,a=i!==v&&(e===v||n);n&&this.element.removeEventListener(this.name,this,e),a&&this.element.addEventListener(this.name,this,i),this._$AH=i}handleEvent(i){var t,e;typeof this._$AH=="function"?this._$AH.call((e=(t=this.options)==null?void 0:t.host)!=null?e:this.element,i):this._$AH.handleEvent(i)}},Kt=class{constructor(i,t,e){this.element=i,this.type=6,this._$AN=void 0,this._$AM=t,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(i){ot(this,i)}},si={M:ge,P:Y,A:fe,C:1,L:ni,R:Ot,D:ti,V:ot,I:ut,H:lt,N:Nt,U:Lt,B:Ut,F:Kt},me=Tt.litHtmlPolyfillSupport,Xe;me==null||me(Et,ut),((Xe=Tt.litHtmlVersions)!=null?Xe:Tt.litHtmlVersions=[]).push("3.3.3");var ri=(s,i,t)=>{var a,r;let e=(a=t==null?void 0:t.renderBefore)!=null?a:i,n=e._$litPart$;if(n===void 0){let o=(r=t==null?void 0:t.renderBefore)!=null?r:null;e._$litPart$=n=new ut(i.insertBefore(Ct(),o),o,void 0,t!=null?t:{})}return n._$AI(s),n};var ct=globalThis,z=class extends W{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!=null||(t.renderBefore=i.firstChild),i}update(i){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Do=ri(t,this.renderRoot,this.renderOptions)}connectedCallback(){var i;super.connectedCallback(),(i=this._$Do)==null||i.setConnected(!0)}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this._$Do)==null||i.setConnected(!1)}render(){return V}},ai;z._$litElement$=!0,z.finalized=!0,(ai=ct.litElementHydrateSupport)==null||ai.call(ct,{LitElement:z});var ve=ct.litElementPolyfillSupport;ve==null||ve({LitElement:z});var oi;((oi=ct.litElementVersions)!=null?oi:ct.litElementVersions=[]).push("4.2.2");var Rt=class{constructor(i,t,e){this.host=i;this.type=t;this.entity=e;this.connected=!1;i.addController(this)}hostConnected(){this.connected=!0,this.sync()}hostDisconnected(){this.connected=!1,this.stop()}hostUpdated(){this.sync()}sync(){let i=this.host.hass,t=this.entity();if(!this.connected||!i||!t)return;let e=`${t}|${this.type}`;e!==this.subscribedKey&&(this.stop(),this.subscribedKey=e,this.error=void 0,this.unsub=i.connection.subscribeMessage(n=>{var a;this.forecast=(a=n.forecast)!=null?a:[],this.host.requestUpdate()},{type:"weather/subscribe_forecast",forecast_type:this.type,entity_id:t}),this.unsub.catch(n=>{var a;this.error=(a=n==null?void 0:n.message)!=null?a:String(n),this.subscribedKey=void 0,this.host.requestUpdate()}))}stop(){let i=this.unsub;this.unsub=void 0,this.subscribedKey=void 0,i==null||i.then(t=>t()).catch(()=>{})}};var dt=new Map;function mt(s,i){let t=i.ids.filter(Boolean);if(!t.length)return Promise.resolve({});let e=JSON.stringify([t,i.start.getTime(),i.end.getTime(),i.period,i.types]),n=Date.now(),a=dt.get(e);if(a&&a.expires>n)return a.promise;let r=s.callWS({type:"recorder/statistics_during_period",start_time:i.start.toISOString(),end_time:i.end.toISOString(),statistic_ids:t,period:i.period,types:i.types}).then(en),o={promise:r,expires:i.end.getTime()<n?1/0:n+3e5};return dt.set(e,o),r.catch(()=>dt.get(e)===o&&dt.delete(e)),dt.size>60&&dt.delete(dt.keys().next().value),r}function en(s){for(let i of Object.values(s))for(let t of i)typeof t.start!="number"&&(t.start=new Date(t.start).getTime()),typeof t.end!="number"&&(t.end=new Date(t.end).getTime());return s}var C=(s,i)=>f`<div class="head"><ha-icon icon=${s}></ha-icon><span>${i}</span></div>`,gt=B`
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
`;function ht(s){return f`<div class="legend">${s.filter(Boolean).map(i=>{var t,e;return f`<span><i class=${(t=i.kind)!=null?t:"box"}
    style="background:${i.color};opacity:${(e=i.opacity)!=null?e:1}"></i>${i.label}</span>`})}</div>`}var Gt=B`
  .legend { display: flex; flex-wrap: wrap; align-items: center; gap: 6px 14px; font-size: 12px; color: var(--wa-text2); margin-top: 8px; }
  .legend span { display: inline-flex; align-items: center; gap: 6px; white-space: nowrap; }
  .legend i { display: inline-block; width: 10px; height: 10px; border-radius: 2px; flex: none; }
  .legend i.line { height: 3px; }
`;var K=Math.PI/180;function ye(s,i,t){let e=new Date(s.getFullYear(),s.getMonth(),s.getDate(),12),a=Math.round((e.getTime()-Date.UTC(2e3,0,1,12))/864e5)-t/360,r=(357.5291+.98560028*a)%360,o=1.9148*Math.sin(r*K)+.02*Math.sin(2*r*K)+3e-4*Math.sin(3*r*K),l=(r+o+180+102.9372)%360,c=a+.0053*Math.sin(r*K)-.0069*Math.sin(2*l*K),h=Math.asin(Math.sin(l*K)*Math.sin(23.4397*K)),p=(Math.sin(-.833*K)-Math.sin(i*K)*Math.sin(h))/(Math.cos(i*K)*Math.cos(h));if(p<-1||p>1)return;let m=Math.acos(p)/K/360,d=g=>new Date(Date.UTC(2e3,0,1,12)+g*864e5);return{rise:d(c-m),set:d(c+m),noon:d(c)}}var pt=29.530588853,nn=Date.UTC(2e3,0,6,18,14);function li(s){let t=((s.getTime()-nn)/864e5%pt+pt)%pt,e=(1-Math.cos(t/pt*2*Math.PI))/2,n=(pt/2-t+pt)%pt;return{age:t,illumination:e,nextFull:new Date(s.getTime()+n*864e5)}}var sn={"clear-night":"Klar",cloudy:"Bew\xF6lkt",exceptional:"Unwetter",fog:"Nebel",hail:"Hagel",lightning:"Gewitter","lightning-rainy":"Gewitter mit Regen",partlycloudy:"Teilweise bew\xF6lkt",pouring:"Starkregen",rainy:"Regnerisch",snowy:"Schnee","snowy-rainy":"Schneeregen",sunny:"Sonnig",windy:"Windig","windy-variant":"Windig und bew\xF6lkt"};function Bt(s){return s&&sn[s]||"\u2013"}var ci={sunny:"47,128,237",partlycloudy:"70,130,200",cloudy:"120,135,150","windy-variant":"120,135,150",rainy:"75,110,155",pouring:"65,95,140",hail:"90,100,125",snowy:"160,180,205","snowy-rainy":"130,150,175",fog:"150,155,160",lightning:"85,80,125","lightning-rainy":"85,80,125",exceptional:"150,70,70",windy:"100,140,170"},rn="35,50,100";function jt(s,i,t=i?.35:.45){return`rgba(${i&&(s==="sunny"||s==="clear-night"||s==="partlycloudy")?rn:s&&ci[s]||ci.cloudy},${t})`}var an={new_moon:"Neumond",waxing_crescent:"Zunehmende Sichel",first_quarter:"Erstes Viertel",waxing_gibbous:"Zunehmender Mond",full_moon:"Vollmond",waning_gibbous:"Abnehmender Mond",last_quarter:"Letztes Viertel",waning_crescent:"Abnehmende Sichel"};function di(s){return s&&an[s]||"\u2013"}var hi="data:image/jpeg;base64,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";var pi=new Map;function M(s,i=1){if(s==null||!isFinite(s))return"\u2013";let t=pi.get(i);return t||(t=new Intl.NumberFormat("de-DE",{minimumFractionDigits:i,maximumFractionDigits:i}),pi.set(i,t)),t.format(s)}var D=(s,i=0)=>s==null?"\u2013":`${M(s,i)}\xB0`,tt=(s,i=1)=>`${M(s,i)} l/m\xB2`;function E(s,i){let t=i?s==null?void 0:s.states[i]:void 0;if(!t)return;let e=parseFloat(t.state);return isFinite(e)?e:void 0}var on=["So","Mo","Di","Mi","Do","Fr","Sa"];function ui(s,i=new Date){return s.toDateString()===i.toDateString()?"Heute":on[s.getDay()]}function mi(s){return`${String(s.getHours()).padStart(2,"0")} Uhr`}function Qt(s){return s.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}var ln=["N","NO","O","SO","S","SW","W","NW"];function Wt(s){return s==null||!isFinite(s)?"\u2013":ln[Math.round((s%360+360)%360/45)%8]}function gi(s){return f`<div class="tiles">
    ${hn(s)} ${cn(s)} ${pn(s)} ${un(s)} ${mn(s)} ${fn(s)} ${bn(s)} ${xn(s)}
  </div>`}function cn({hass:s,config:i}){var r;let t=(r=i.sensors)!=null?r:{},e=E(s,t.feels_like);if(e==null)return v;let n=E(s,t.temperature),a=n==null?"":e<n-1?"Durch den Wind f\xFChlt es sich k\xE4lter an.":e>n+1?"Durch die Luftfeuchtigkeit f\xFChlt es sich w\xE4rmer an.":"\xC4hnlich wie die tats\xE4chliche Temperatur.";return f`<section class="card tile">${C("mdi:thermometer-lines","Gef\xFChlt")}
    <div class="val">${D(e)}</div>
    ${n!=null?f`<div class="lbl">Tatsächlich: ${D(n)}</div>${dn(e,n)}`:v}
    <div class="txt">${a}</div></section>`}function dn(s,i){let t=Math.round(s-i),e=Math.max(14,Math.abs(s-i)/.5),n=t<0?s-.32*e:t>0?s+.32*e-e:i-e/2,a=o=>(o-n)/e*100,r=t<0?"#6ec6f0":"#ffb74d";return f`<div class="fbar">
    ${t!==0?f`<i class="fseg" style="left:${a(Math.min(s,i))}%;width:${a(Math.max(s,i))-a(Math.min(s,i))}%;background:${r}"></i>
      <b class="fpill" style="left:${a(s)}%;background:${r};transform:translateX(${t<0?"-100%":"0"})">${t<0?"\u2193":"\u2191"}${Math.abs(t)}°</b>`:v}
    <i class="ftick" style="left:${a(i)}%"></i>
  </div>`}function hn({hass:s,config:i}){var o;let t=(o=i.sensors)!=null?o:{},e=E(s,t.wind_speed);if(e==null)return v;let n=E(s,t.wind_gust),a=E(s,t.wind_direction),r=[...Array(72)].map((l,c)=>{let h=c*5*Math.PI/180,p=c%18===0?38:41;return y`<line x1=${50+Math.sin(h)*p} y1=${50-Math.cos(h)*p} x2=${50+Math.sin(h)*45} y2=${50-Math.cos(h)*45} class=${c%18===0?"tk major":"tk"}/>`});return f`<section class="card tile wide2">${C("mdi:weather-windy","Wind")}
    <div class="wind">
      <div class="rows">
        <div class="row"><span>Wind</span><b>${M(e,0)} km/h</b></div>
        ${n!=null?f`<div class="row"><span>Böen</span><b>${M(n,0)} km/h</b></div>`:v}
        ${a!=null?f`<div class="row"><span>Richtung</span><b>${M(a,0)}° ${Wt(a)}</b></div>`:v}
      </div>
      <svg class="compass" viewBox="0 0 100 100">
        ${r}
        ${["N","O","S","W"].map((l,c)=>y`<text x=${50+Math.sin(c*Math.PI/2)*30} y=${54-Math.cos(c*Math.PI/2)*30} class="cl">${l}</text>`)}
        ${a!=null?y`<g transform="rotate(${a+180} 50 50)">
          <line x1="50" y1="88" x2="50" y2="18" class="arrow"/><path d="M50 10l-6 11h12z" class="arrowhead"/>
          <circle cx="50" cy="88" r="3.5" class="arrowhead"/></g>`:v}
        <circle cx="50" cy="50" r="17" class="hub"/>
        <text x="50" y="50" class="cv">${M(e,0)}</text><text x="50" y="60" class="cu">km/h</text>
      </svg>
    </div></section>`}function pn({hass:s,config:i,hourly:t,recent:e}){var c;let n=(c=i.sensors)!=null?c:{};if(!n.rain_total&&!t)return v;let a=n.rain_total&&(e!=null&&e[n.rain_total])?e[n.rain_total].reduce((h,p)=>{var m;return h+((m=p.change)!=null?m:0)},0):void 0,r=Date.now(),o=t==null?void 0:t.filter(h=>{let p=new Date(h.datetime).getTime();return p>=r-36e5&&p<r+23*36e5}).reduce((h,p)=>{var m;return h+((m=p.precipitation)!=null?m:0)},0),l=E(s,n.rain_rate);return f`<section class="card tile">${C("mdi:water","Niederschlag")}
    <div class="val">${a!=null?tt(a):"\u2013"}</div>
    <div class="lbl">in den letzten 24 Std.</div>
    <div class="txt">${l?f`Aktuell ${M(l)} l/m² pro Std.<br>`:v}
      ${o!=null?`${tt(o)} in den n\xE4chsten 24 Std. erwartet.`:""}</div></section>`}function un({hass:s,config:i,recent:t}){var p;let e=(p=i.sensors)!=null?p:{},n=E(s,e.pressure);if(n==null)return v;let a=e.pressure?t==null?void 0:t[e.pressure]:void 0,r=a&&a.length>=3?a[a.length-3].mean:void 0,o=r!=null?n-r:void 0,l=o==null?"":o>1?"steigend":o<-1?"fallend":"gleichbleibend",c=o==null?0:Math.max(-1,Math.min(1,o/4))*120,h=[...Array(41)].map((m,d)=>{let g=(-120+d*6)*Math.PI/180;return y`<line x1=${50+Math.sin(g)*36} y1=${54-Math.cos(g)*36} x2=${50+Math.sin(g)*44} y2=${54-Math.cos(g)*44} class="tk"/>`});return f`<section class="card tile">${C("mdi:gauge","Luftdruck")}
    <svg class="gauge" viewBox="0 0 100 92">
      ${h}
      <g transform="rotate(${c} 50 54)"><line x1="50" y1="6" x2="50" y2="20" class="needle"/></g>
      <text x="50" y="52" class="gv">${M(n,0)}</text><text x="50" y="64" class="gu">hPa</text>
      <text x="16" y="90" class="gu">−</text><text x="84" y="90" class="gu">+</text>
    </svg>
    <div class="txt">${l?f`3 Std.: ${l} (${o>0?"+":""}${M(o,1)} hPa)`:v}</div></section>`}function mn({hass:s,config:i}){var a;let t=(a=i.sensors)!=null?a:{},e=E(s,t.humidity);if(e==null)return v;let n=E(s,t.dewpoint);return f`<section class="card tile">${C("mdi:water-percent","Feuchtigkeit")}
    <div class="val">${M(e,0)} %</div>
    <div class="hbar"><i style="width:${Math.max(0,Math.min(100,e))}%"></i></div>
    <div class="txt">${n!=null?`Der Taupunkt liegt derzeit bei ${D(n)}.`:""}</div></section>`}var gn=[[3,"Niedrig"],[6,"Mittel"],[8,"Hoch"],[11,"Sehr hoch"],[99,"Extrem"]];function fn({hass:s,config:i}){var r;let t=(r=i.sensors)!=null?r:{},e=E(s,t.uv);if(e==null)return v;let n=E(s,t.solar),a=gn.find(([o])=>e<o)[1];return f`<section class="card tile">${C("mdi:sun-wireless","UV-Index")}
    <div class="val">${M(e,0)}</div><div class="lbl">${a}</div>
    <div class="uvbar"><i style="left:${Math.min(100,e/11*100)}%"></i></div>
    <div class="txt">${n!=null?`Sonneneinstrahlung ${M(n,0)} W/m\xB2`:""}</div></section>`}function bn({hass:s,config:i}){var P,H,U,J,Z,q,O,it,At;let t=(P=s.states[i.weather])==null?void 0:P.attributes,e=i.sun?s.states[i.sun]:void 0,n=(U=t==null?void 0:t.latitude)!=null?U:(H=s.config)==null?void 0:H.latitude,a=(Z=t==null?void 0:t.longitude)!=null?Z:(J=s.config)==null?void 0:J.longitude;if(n==null||a==null)return v;let r=new Date,o=ye(r,n,a);if(!o)return v;let l=F=>F&&new Date(F).toDateString()===r.toDateString()?new Date(F):void 0,c=(q=l(e==null?void 0:e.attributes.next_rising))!=null?q:o.rise,h=(O=l(e==null?void 0:e.attributes.next_setting))!=null?O:o.set,p=r<h,m=r<c?["Sonnenaufgang",c]:p?["Sonnenuntergang",h]:["Sonnenaufgang",(At=(it=ye(new Date(r.getTime()+864e5),n,a))==null?void 0:it.rise)!=null?At:c],d=new Date(r.getFullYear(),r.getMonth(),r.getDate()).getTime(),g=F=>(F.getTime()-d)/864e5,b=(g(c)+g(h))/2,w=g(h)-g(c),x=F=>Math.cos(2*Math.PI*(F-b)),A=Math.cos(Math.PI*w),S=F=>34-F*22,k=[...Array(49)].map((F,nt)=>`${nt?"L":"M"}${nt/48*100},${S(x(nt/48))}`).join(" "),I=g(r),_=r>=c&&r<h;return f`<section class="card tile">${C(_?"mdi:weather-sunset-down":"mdi:weather-sunset-up",m[0])}
    <div class="val">${Qt(m[1])}</div>
    <div class="sunarc">
      <svg viewBox="0 0 100 60" preserveAspectRatio="none">
        <path d=${k} class="sunpath"/>
        <line x1="0" x2="100" y1=${S(A)} y2=${S(A)} class="hz"/>
      </svg>
      <!-- Punkt als HTML, sonst verzerrt preserveAspectRatio=none ihn zur Ellipse -->
      <i class=${_?"sundot":"sundot down"} style="left:${I*100}%;top:${S(x(I))/60*100}%"></i>
    </div>
    <div class="txt">${m[0]==="Sonnenuntergang"?`Sonnenaufgang: ${Qt(c)}`:`Sonnenuntergang: ${Qt(h)}`}</div>
  </section>`}function xn({hass:s,config:i}){var r;let t=i.moon?(r=s.states[i.moon])==null?void 0:r.state:void 0,e=li(new Date),n=Math.round((e.nextFull.getTime()-Date.now())/864e5),a=e.illumination;return f`<section class="card tile wide2 moont">${C("mdi:moon-waxing-gibbous",t?di(t):"Mond")}
    <div class="moon">
      <div>
        <div class="row"><span>Beleuchtung</span><b>${Math.round(a*100)} %</b></div>
        <div class="row"><span>Nächster Vollmond</span><b>${n<=0?"heute":n===1?"morgen":`in ${n} Tg.`}</b></div>
      </div>
      ${vn(a,e.age<29.530588853/2)}
    </div></section>`}function vn(s,i){let a=`M50 30 A20 20 0 0 0 50 70 A${20*Math.abs(1-2*s)} 20 0 0 ${s>.5?1:0} 50 30Z`;return y`<svg class="moonimg" viewBox="28 28 44 44" aria-hidden="true">
    <defs>
      <filter id="ms" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="0.6"/></filter>
      <clipPath id="mc"><circle cx=${50} cy=${50} r=${20}/></clipPath>
    </defs>
    <g clip-path="url(#mc)">
      <image href=${hi} x=${30} y=${30} width=${40} height=${40}/>
      ${s<.995?y`<path d=${a} fill="#05070c" fill-opacity="0.88" filter="url(#ms)"
        transform=${i?"":"translate(100 0) scale(-1 1)"}/>`:v}
    </g>
  </svg>`}var fi=B`
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
`;var yn="M18 46a10 10 0 0 1 0-20a14 14 0 0 1 27-3a11.5 11.5 0 0 1 1 23z",bi=(s=32,i=32,t=11)=>y`
  <g class="sun">
    <circle cx=${s} cy=${i} r=${t} fill="#FFD84D"/>
    ${[0,45,90,135,180,225,270,315].map(e=>{let n=e*Math.PI/180,a=s+Math.cos(n)*(t+4),r=i+Math.sin(n)*(t+4),o=s+Math.cos(n)*(t+9),l=i+Math.sin(n)*(t+9);return y`<line x1=${a} y1=${r} x2=${o} y2=${l} stroke="#FFD84D" stroke-width="3.5" stroke-linecap="round"/>`})}
  </g>`,we=(s=0,i=0,t=1)=>y`
  <path class="mo" transform="translate(${s} ${i}) scale(${t})"
    d="M40 10a20 20 0 1 0 14 34A17 17 0 0 1 40 10z"/>`,N=(s=0,i=0,t=1,e="c1")=>y`
  <path transform="translate(${s} ${i}) scale(${t})" d=${yn} class=${e}/>`,Yt=s=>y`
  ${[...Array(s)].map((i,t)=>{let e=22+t*(20/Math.max(1,s-1));return y`<line x1=${e} y1="50" x2=${e-3} y2="58" stroke="#4FB3FF" stroke-width="3" stroke-linecap="round"/>`})}`,xi=y`${[22,32,42].map((s,i)=>y`<circle cx=${s} cy=${i%2?57:53} r="2.6" class="fl"/>`)}`,vi=y`<path d="M34 44l-7 10h6l-3 9l10-13h-6l3-6z" fill="#FFD84D"/>`,wn=y`${[40,47,54].map((s,i)=>y`<line x1=${12+i*3} y1=${s} x2=${52-i*2} y2=${s} class="ln" stroke-width="3.5" stroke-linecap="round"/>`)}`;function It(s,i=!1){let t;switch(s){case"sunny":t=i?we(2,6,.95):bi();break;case"clear-night":t=we(2,6,.95);break;case"partlycloudy":t=y`${i?we(10,-2,.7):bi(42,22,9)}${N(-4,6,1)}`;break;case"cloudy":case"windy-variant":t=y`${N(10,-4,.75,"c2")}${N(-4,6)}`;break;case"fog":t=y`${N(0,-8,.95,"c2")}${wn}`;break;case"rainy":t=y`${N(0,-6)}${Yt(3)}`;break;case"pouring":t=y`${N(0,-6,1,"c2")}${Yt(5)}`;break;case"hail":t=y`${N(0,-6,1,"c2")}${xi}`;break;case"snowy":t=y`${N(0,-6)}${xi}`;break;case"snowy-rainy":t=y`${N(0,-6)}${Yt(2)}<circle cx="32" cy="55" r="2.6" class="fl"/>`;break;case"lightning":t=y`${N(0,-8,1,"c2")}${vi}`;break;case"lightning-rainy":case"exceptional":t=y`${N(0,-8,1,"c2")}${vi}${Yt(2)}`;break;case"windy":t=y`${[24,32,40].map((e,n)=>y`<path d="M10 ${e}h${30-n*6}a6 6 0 1 0-6-6" fill="none" class="ln" stroke-width="3.5" stroke-linecap="round"/>`)}`;break;default:t=N(0,0,1,"c2")}return y`<svg class="wicon" viewBox="0 0 64 64" aria-hidden="true">${t}</svg>`}function Vt(s,i,t=Date.now()){let e=(s!=null?s:[]).filter(r=>r.temperature!=null).map(r=>({t:new Date(r.datetime).getTime(),v:r.temperature})),n=$n(e,t),a=i!=null&&n!=null?i-n:0;return(r,o)=>{if(o==null||!a||r<=t)return o;let l=1-(r-t)/(3*36e5);return l>0?o+a*l:o}}function $n(s,i){for(let t=0;t<s.length-1;t++){let e=s[t],n=s[t+1];if(e.t<=i&&i<=n.t)return e.v+(n.v-e.v)*(i-e.t)/(n.t-e.t||1)}if(s.length&&s[0].t>i&&s[0].t-i<=36e5)return s[0].v}var ft=class extends z{constructor(){super(...arguments);this._tab="forecast";this._wide=!1;this._metric="temp";this.hourly=new Rt(this,"hourly",()=>{var t;return(t=this._config)==null?void 0:t.weather});this.daily=new Rt(this,"daily",()=>{var t;return(t=this._config)==null?void 0:t.weather})}setConfig(t){if(!(t!=null&&t.weather))throw new Error("`weather:` fehlt (z. B. weather.weather_fusion_ai_kresslingweg)");this._config={...t,sensors:{...t.sensors}}}static getStubConfig(t){var e;return{weather:(e=Object.keys(t.states).find(n=>n.startsWith("weather.")))!=null?e:""}}getCardSize(){return 12}getGridOptions(){return{columns:"full",rows:"auto"}}connectedCallback(){var t;super.connectedCallback(),(t=this._ro)!=null||(this._ro=new ResizeObserver(e=>{let n=e[0].contentRect.width>=820;n!==this._wide&&(this._wide=n)})),this._ro.observe(this)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._ro)==null||t.disconnect(),this.syncDetail()}syncDetail(){var n,a,r,o,l,c,h,p;if(!(this.isConnected&&this._tab==="forecast"&&this._detail!=null&&!!this.daily.forecast)){(n=this._detailEl)==null||n.remove(),this._detailEl=void 0;return}let e=this._detailEl;e||(e=document.createElement("wetter-app-day-detail"),e.addEventListener("close",()=>this._detail=void 0),e.addEventListener("select",m=>this._detail=m.detail.index),e.addEventListener("metric",m=>this._metric=m.detail.metric),document.body.appendChild(e),this._detailEl=e),Object.assign(e,{hass:this.hass,config:this._config,hourly:(a=this.hourly.forecast)!=null?a:[],daily:this.dailyForecast((c=E(this.hass,(r=this._config.sensors)==null?void 0:r.temperature))!=null?c:(l=(o=this.hass)==null?void 0:o.states[this._config.weather])==null?void 0:l.attributes.temperature),index:this._detail,metric:this._metric}),e.classList.toggle("dark",!!((p=(h=this.hass)==null?void 0:h.themes)!=null&&p.darkMode))}shouldUpdate(t){var n,a;if(t.size>1||!t.has("hass"))return!0;let e=t.get("hass");return!e||!this.hass||!this._config||((n=e.themes)==null?void 0:n.darkMode)!==((a=this.hass.themes)==null?void 0:a.darkMode)?!0:this.watchedIds().some(r=>e.states[r]!==this.hass.states[r])}watchedIds(){var e;let t=this._config;return[t.weather,t.sun,t.moon,...Object.values((e=t.sensors)!=null?e:{})].filter(Boolean)}updated(){this._tab==="forecast"&&this.loadRecent(),this.syncDetail()}loadRecent(){var r;let t=(r=this._config.sensors)!=null?r:{},e=[t.rain_total,t.pressure,t.temperature].filter(Boolean);if(!this.hass||!e.length)return;let n=Math.ceil(Date.now()/3e5)*3e5,a=String(n);a!==this._recentKey&&(this._recentKey=a,mt(this.hass,{ids:e,start:new Date(n-864e5),end:new Date(n),period:"hour",types:["mean","min","max","change"]}).then(o=>a===this._recentKey&&(this._recent=o),()=>this._recentKey=void 0))}dailyForecast(t){var p,m,d,g;let e=this.daily.forecast,n=e==null?void 0:e[0];if(!n)return e;let a=new Date().setHours(0,0,0,0);if(new Date(n.datetime).setHours(0,0,0,0)!==a)return e;let r=(p=this._config.sensors)==null?void 0:p.temperature,o=r&&((m=this._recent)==null?void 0:m[r])||[],l=[t,...o.filter(b=>b.end>a).flatMap(b=>[b.min,b.max])].filter(b=>typeof b=="number"&&isFinite(b));if(!l.length)return e;let c=Math.min(...l,(d=n.templow)!=null?d:1/0),h=Math.max(...l,(g=n.temperature)!=null?g:-1/0);return c===n.templow&&h===n.temperature?e:[{...n,templow:c,temperature:h},...e.slice(1)]}dayIndex(t){var a;let e=new Date(t).setHours(0,0,0,0),n=((a=this.daily.forecast)!=null?a:[]).findIndex(r=>new Date(r.datetime).setHours(0,0,0,0)===e);return Math.max(0,n)}openDetail(t,e=this._metric){this._metric=e,this._detail=t}render(){var c,h,p,m;if(!this._config||!this.hass)return v;let t=this.hass.states[this._config.weather];if(!t)return f`<div class="warn">Entität ${this._config.weather} nicht gefunden.</div>`;let e=this._config.sun?((c=this.hass.states[this._config.sun])==null?void 0:c.state)==="below_horizon":!1,n=(h=this._config.sensors)!=null?h:{},a=(p=E(this.hass,n.temperature))!=null?p:t.attributes.temperature,r=this.dailyForecast(a),o=r==null?void 0:r[0],l=!!((m=this.hass.themes)!=null&&m.darkMode);return f`
      <div class="app ${this._wide?"wide":""} ${l?"dark":""} ${this._config.layout==="page"?"page":""}"
        style="--wa-tint:${l?jt(t.state,e):jt(t.state,e,.62)};--wa-tint2:${l?"transparent":jt(t.state,e,.1)}">
        ${this._config.animations!==!1?f`<wetter-app-sky class="sky" .condition=${t.state} .night=${e}></wetter-app-sky>`:v}
        <header>
          ${this._config.name?f`<div class="place">${this._config.name}</div>`:v}
          <div class="now">${D(a)}</div>
          <div class="cond">${Bt(t.state)}</div>
          ${o?f`<div class="hl">H: ${D(o.temperature)}  T: ${D(o.templow)}</div>`:v}
        </header>

        <nav class="tabs" role="tablist">
          ${["forecast","history"].map(d=>f`
            <button role="tab" aria-selected=${this._tab===d} class=${this._tab===d?"on":""}
              @click=${()=>{this._tab=d,this._detail=void 0}}>
              <ha-icon icon=${d==="forecast"?"mdi:calendar-arrow-right":"mdi:chart-line"}></ha-icon>
              ${d==="forecast"?"Vorhersage":"Historie"}
            </button>`)}
        </nav>

        <main>${this._tab==="forecast"?this.renderForecast(r,a,e):f`<wetter-app-history .hass=${this.hass} .config=${this._config} .wide=${this._wide}></wetter-app-history>`}</main>
      </div>
    `}renderForecast(t,e,n){var r;let a=(r=this.hourly.error)!=null?r:this.daily.error;return f`
      ${a?f`<div class="warn">Vorhersage nicht verfügbar: ${a}</div>`:v}
      <div class="cols">
        <div class="left">
          <section class="card hourly">${this.renderHourly(e,n)}</section>
          ${gi({hass:this.hass,config:this._config,hourly:this.hourly.forecast,recent:this._recent})}
        </div>
        <section class="card daily">${this.renderDaily(t,e)}</section>
      </div>
    `}renderHourly(t,e){let n=this.hourly.forecast;if(!n)return f`<div class="loading">Lade Stundenvorhersage …</div>`;let a=Date.now()-36e5,r=n.filter(l=>new Date(l.datetime).getTime()>a).slice(0,25),o=Vt(n,t);return f`
      ${C("mdi:clock-outline","St\xFCndlich")}
      <div class="hours">
        ${r.map((l,c)=>{var h;return f`
          <div class="hr" @click=${()=>this.openDetail(this.dayIndex(l.datetime),"temp")}>
            <div class="t">${c===0?"Jetzt":mi(new Date(l.datetime))}</div>
            ${It(l.condition,c===0?e:l.is_daytime===!1)}
            <div class="p">${((h=l.precipitation_probability)!=null?h:0)>=20?`${Math.round(l.precipitation_probability)} %`:""}</div>
            <div class="v">${D(c===0?t!=null?t:l.temperature:o(new Date(l.datetime).getTime(),l.temperature))}</div>
          </div>`})}
      </div>
    `}renderDaily(t,e){if(!t)return f`<div class="loading">Lade Tagesvorhersage …</div>`;let n=t.slice(0,10),a=Math.min(...n.map(c=>{var h,p;return(p=(h=c.templow)!=null?h:c.temperature)!=null?p:99})),r=Math.max(...n.map(c=>{var h;return(h=c.temperature)!=null?h:-99})),o=Math.max(1,r-a),l=c=>(c-a)/o*100;return f`
      ${C("mdi:calendar-week",`${n.length}-Tage-Vorhersage`)}
      ${n.map((c,h)=>{var b,w,x,A;let p=(w=(b=c.templow)!=null?b:c.temperature)!=null?w:a,m=(x=c.temperature)!=null?x:p,d=Math.max(.5,l(m)-l(p)),g=`background-size:${100/d*100}% 100%;background-position:${d>=100?0:l(p)/(100-d)*100}% 0`;return f`
          <div class="day" role="button" tabindex="0" @click=${()=>this.openDetail(h)}
            @keydown=${S=>S.key==="Enter"&&this.openDetail(h)}>
            <div class="wd">${ui(new Date(c.datetime))}</div>
            <div class="ic">
              ${It(c.condition)}
              ${((A=c.precipitation_probability)!=null?A:0)>=20?f`<span class="p">${Math.round(c.precipitation_probability)} %</span>`:v}
            </div>
            <div class="lo">${D(p)}</div>
            <div class="bar">
              <div class="fill" style="left:${l(p)}%;right:${100-l(m)}%;${g}"></div>
              ${h===0&&e!=null?f`<div class="dot" style="left:${Math.min(100,Math.max(0,l(e)))}%"></div>`:v}
            </div>
            <div class="hi">${D(m)}</div>
          </div>`})}
    `}};ft.properties={hass:{attribute:!1},_config:{state:!0},_tab:{state:!0},_wide:{state:!0},_detail:{state:!0},_metric:{state:!0},_recent:{state:!0}},ft.styles=[gt,fi,B`
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

    `];var $e="wetter-app-tip";function Jt(s){window.dispatchEvent(new CustomEvent($e,{detail:s}))}function Zt(s,i,t){let e=a=>{a.detail!==s&&i()},n=a=>{let r=t==null?void 0:t();r&&!a.composedPath().includes(r)&&i()};return window.addEventListener($e,e),t&&window.addEventListener("pointerdown",n,!0),()=>{window.removeEventListener($e,e),window.removeEventListener("pointerdown",n,!0)}}var T={l:6,r:38,t:18,b:22},xt=class extends z{constructor(){super(...arguments);this.start=0;this.end=0;this.series=[];this.ticks=[];this.markers=[];this.height=200;this.yUnit="";this.rightUnit="";this.timeFormat=t=>new Date(t).toLocaleString("de-DE");this._w=0;this._onTouchStart=t=>this.touchStart(t);this._onTouchMove=t=>this.touchMove(t);this._onTouchEnd=()=>this.touchEnd()}connectedCallback(){var t;super.connectedCallback(),(t=this._ro)!=null||(this._ro=new ResizeObserver(e=>{let n=Math.round(e[0].contentRect.width);n&&n!==this._w&&(this._w=n)})),this._ro.observe(this),this._offTip=Zt(this,()=>this._hover=void 0,()=>this),this.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.addEventListener("touchmove",this._onTouchMove,{passive:!1}),this.addEventListener("touchend",this._onTouchEnd),this.addEventListener("touchcancel",this._onTouchEnd)}disconnectedCallback(){var t,e,n;super.disconnectedCallback(),(t=this._ro)==null||t.disconnect(),(e=this._offTip)==null||e.call(this),this.removeEventListener("touchstart",this._onTouchStart),this.removeEventListener("touchmove",this._onTouchMove),this.removeEventListener("touchend",this._onTouchEnd),this.removeEventListener("touchcancel",this._onTouchEnd),clearTimeout((n=this._touch)==null?void 0:n.timer),clearTimeout(this._hideTimer)}willUpdate(t){t.has("start")&&t.get("start")!==void 0&&t.get("start")!==this.start&&(this._hover=void 0)}x(t){let e=Math.max(1,this.end-this.start);return T.l+(t-this.start)/e*(this._w-T.l-T.r)}scale(t){var h;let e=[];for(let p of this.series)if(((h=p.axis)!=null?h:"left")===t){for(let m of p.points)m.v!=null&&e.push(m.v),m.v2!=null&&e.push(m.v2);p.type==="bar"&&e.push(0)}let n=t==="left"?this.yMin:0,a=t==="left"?this.yMax:this.rightMax;n==null&&(n=e.length?Math.min(...e):0),a==null&&(a=e.length?Math.max(...e):1),a-n<1e-9&&(a=n+1);let r=kn((a-n)/4);t==="left"&&this.yMin==null&&(n=Math.floor(n/r)*r),t==="left"&&this.yMax==null&&(a=Math.ceil(a/r)*r),t==="right"&&this.rightMax==null&&(a=Math.ceil(a/r)*r);let o=this.height-T.t-T.b,l=p=>T.t+o-(p-n)/(a-n)*o,c=[];for(let p=n;p<=a+r/1e3;p+=r)c.push(Math.round(p*1e6)/1e6);return{y:l,ticks:c,lo:n,hi:a}}onPointer(t){t.pointerType!=="touch"&&this.hoverAt(t.clientX)}touchStart(t){var n;if(clearTimeout((n=this._touch)==null?void 0:n.timer),clearTimeout(this._hideTimer),t.touches.length!==1){this._touch=void 0;return}let e=t.touches[0];this._touch={x:e.clientX,y:e.clientY,mode:"?"},this._touch.timer=window.setTimeout(()=>{var a;((a=this._touch)==null?void 0:a.mode)==="?"&&(this._touch.mode="scrub")},250),this.hoverAt(e.clientX)}touchMove(t){let e=this._touch;if(!e||t.touches.length!==1)return;let n=t.touches[0];if(e.mode==="?"){let a=Math.abs(n.clientX-e.x),r=Math.abs(n.clientY-e.y);if(a<8&&r<8)return;if(clearTimeout(e.timer),e.mode=a>r?"scrub":"scroll",e.mode==="scroll"){this._hover=void 0;return}}e.mode==="scrub"&&(t.cancelable&&t.preventDefault(),this.hoverAt(n.clientX))}touchEnd(){let t=this._touch;t&&(clearTimeout(t.timer),this._touch=void 0,t.mode!=="scroll"&&(this._hideTimer=window.setTimeout(()=>this._hover=void 0,3e3)))}hoverAt(t){let e=this.renderRoot.querySelector("svg");if(!e)return;let n=t-e.getBoundingClientRect().left,a=this.start+(n-T.l)/(this._w-T.l-T.r)*(this.end-this.start),r;for(let o of this.series)for(let l of o.points){if(l.v==null)continue;let c=qt(o,l);(r==null||Math.abs(c-a)<Math.abs(r-a))&&(r=c)}this._hover==null&&r!=null&&Jt(this),this._hover=r}render(){var m;let t=this._w;if(!t||this.end<=this.start)return f`<div style="height:${this.height}px"></div>`;let e=this.scale("left"),a=this.series.some(d=>d.axis==="right")?this.scale("right"):void 0,r=this.height-T.b,o=[];this.now&&this.now>this.start&&this.now<this.end&&o.push(y`<rect x=${T.l} y=${T.t} width=${this.x(this.now)-T.l} height=${r-T.t} class="past"/>`);for(let d of e.ticks){let g=e.y(d);o.push(y`<line x1=${T.l} x2=${t-T.r} y1=${g} y2=${g} class="grid"/>`),o.push(y`<text x=${t-T.r+6} y=${g+4} class="ylab">${yi(d)}${this.yUnit}</text>`)}let l=[];if(a){let d=this.series.find(g=>g.axis==="right").color;for(let g of a.ticks)g!==0&&l.push(y`<text x=${T.l+3} y=${a.y(g)-3} class="rlab" style="fill:${d}">${yi(g)}${this.rightUnit}</text>`)}for(let d of this.ticks){let g=this.x(d.t);if(g<T.l-1||g>t-T.r+1)continue;o.push(y`<line x1=${g} x2=${g} y1=${T.t} y2=${r} class="vgrid"/>`);let b=g+3+d.label.length*6>t-T.r;o.push(y`<text x=${b?g-3:g+3} y=${this.height-6} class="xlab" style=${b?"text-anchor:end":""}>${d.label}</text>`)}let c=[];this.series.forEach((d,g)=>{var A,S;let b=d.axis==="right"&&a?a:e,w=d.points.filter(k=>k.v!=null).sort((k,I)=>k.t-I.t);if(!w.length)return;if(d.type==="bar"||d.type==="range"){let k=(A=d.barWidth)!=null?A:w.length>1?w[1].t-w[0].t:(this.end-this.start)/24,I=b.y(Math.max(0,b.lo));for(let _ of w){let P=_.t2!=null?_.t2-_.t:k,H=Math.max(1.5,Math.min(14,(this.x(this.start+P)-this.x(this.start))*.65)),U=this.x(_.t+P/2),J=b.y(_.v),Z=d.type==="range"?b.y((S=_.v2)!=null?S:_.v):I,q=Math.max(d.type==="range"?H:.5,Math.abs(Z-J)),O=Math.min(J,Z)-(q-Math.abs(Z-J))/2;c.push(y`<rect x=${U-H/2} y=${O} width=${H} height=${q} rx=${d.type==="range"?H/2:2} style="fill:${d.color}"/>`)}return}if(d.type==="band"){let k=w.filter(_=>_.v2!=null).map(_=>[this.x(_.t),b.y(_.v2)]),I=w.map(_=>[this.x(_.t),b.y(_.v)]).reverse();k.length&&c.push(y`<path d=${bt(k)+" L"+bt(I).slice(1)+"Z"} style="fill:${d.color};fill-opacity:0.28"/>`);return}let x=w.map(k=>[this.x(k.t),b.y(k.v)]);if(d.type==="area"){let k=`g${g}`;c.push(y`
          <defs><linearGradient id=${k} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" style="stop-color:${d.color};stop-opacity:0.45"/>
            <stop offset="1" style="stop-color:${d.color};stop-opacity:0.04"/>
          </linearGradient></defs>
          <path d=${`${bt(x)} L${x[x.length-1][0]},${r} L${x[0][0]},${r}Z`} fill="url(#${k})"/>`)}if(d.dashUntil!=null&&w[0].t<d.dashUntil){let k=w.findIndex(P=>P.t>=d.dashUntil),I=k<0?x:x.slice(0,k+1),_=k<0?[]:x.slice(k);c.push(y`<path d=${bt(I)} class="ln" style="stroke:${d.color}" stroke-dasharray="5 5"/>`),_.length>1&&c.push(y`<path d=${bt(_)} class="ln" style="stroke:${d.color}"/>`)}else c.push(y`<path d=${bt(x)} class="ln" style="stroke:${d.color}" />`)});let h=o.length;for(let d of this.markers){let g=this.x(d.t),b=e.y(d.v);o.push(y`<circle cx=${g} cy=${b} r="4" class="mk"/>`),o.push(y`<text x=${g} y=${b-9} class="mklab">${d.label}</text>`)}if(this.now&&this.now>this.start&&this.now<this.end){let d=this.x(this.now);o.push(y`<line x1=${d} x2=${d} y1=${T.t} y2=${r} class="nowl"/>`)}let p=v;if(this._hover!=null){let d=this._hover,g=this.x(d);o.push(y`<line x1=${g} x2=${g} y1=${T.t-6} y2=${r} class="hov"/>`);let b=[];for(let x of this.series){let A=An(x,d);if(!A||A.v==null||x.silent)continue;let S=x.axis==="right"&&a?a:e;(x.type==="line"||x.type==="area")&&o.push(y`<circle cx=${g} cy=${S.y(A.v)} r="4" style="fill:${x.color}" class="hdot"/>`);let k=I=>{var _,P;return`${M(I,(_=x.digits)!=null?_:1)}${(P=x.unit)!=null?P:""}`};(x.type==="band"||x.type==="range")&&A.v2!=null?b.push({color:x.color,label:"Max",value:k(A.v2)},{color:x.color,label:"Min",value:k(A.v)}):b.push({color:x.color,label:(m=x.label)!=null?m:"",value:k(A.v)})}let w=g>t/2?`right:${t-g+8}px`:`left:${g+8}px`;p=f`<div class="tip" style="${w}"><b>${this.timeFormat(d)}</b>
        ${b.map(x=>f`<div class="tr"><i style="background:${x.color}"></i><span>${x.label}</span><b>${x.value}</b></div>`)}</div>`}return f`
      <div class="wrap">
        ${p}
        <svg width=${t} height=${this.height} @pointermove=${this.onPointer} @pointerdown=${this.onPointer}
          @pointerleave=${d=>{d.pointerType!=="touch"&&(this._hover=void 0)}}>
          <defs><clipPath id="plot"><rect x=${T.l-1} y="0" width=${Math.max(0,t-T.l-T.r+2)} height=${r+1}/></clipPath></defs>
          ${o.slice(0,h)}<g clip-path="url(#plot)">${c}</g>${o.slice(h)}${l}</svg>
      </div>
    `}};xt.properties={start:{type:Number},end:{type:Number},series:{attribute:!1},ticks:{attribute:!1},markers:{attribute:!1},now:{type:Number},height:{type:Number},yMin:{type:Number},yMax:{type:Number},yUnit:{type:String},rightMax:{type:Number},rightUnit:{type:String},timeFormat:{attribute:!1},_w:{state:!0},_hover:{state:!0}},xt.styles=B`
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
  `;function An(s,i){var a;let t;for(let r of s.points)r.v!=null&&(!t||Math.abs(qt(s,r)-i)<Math.abs(qt(s,t)-i))&&(t=r);if(!t)return;let e=s.points,n=t.t2!=null?t.t2-t.t:(a=s.barWidth)!=null?a:e.length>1?Math.abs(e[1].t-e[0].t):1/0;return Math.abs(qt(s,t)-i)<=n/2+1?t:void 0}function qt(s,i){var n;if(s.type!=="bar"&&s.type!=="range")return i.t;let t=s.points,e=i.t2!=null?i.t2-i.t:(n=s.barWidth)!=null?n:t.length>1?t[1].t-t[0].t:0;return i.t+e/2}function kn(s){let i=Math.pow(10,Math.floor(Math.log10(Math.max(s,1e-9)))),t=s/i;return(t<=1?1:t<=2?2:t<=2.5?2.5:t<=5?5:10)*i}function yi(s){return Number.isInteger(s)?String(s):M(s,1)}function bt(s){let i=s.length;if(i===0)return"";if(i<3)return"M"+s.map(r=>`${r[0]},${r[1]}`).join(" L");let t=[],e=[],n=[];for(let r=0;r<i-1;r++)t[r]=s[r+1][0]-s[r][0],e[r]=t[r]?(s[r+1][1]-s[r][1])/t[r]:0;n[0]=e[0],n[i-1]=e[i-2];for(let r=1;r<i-1;r++)n[r]=e[r-1]*e[r]<=0?0:3*(t[r-1]+t[r])/((2*t[r]+t[r-1])/e[r-1]+(t[r]+2*t[r-1])/e[r]);let a=`M${s[0][0]},${s[0][1]}`;for(let r=0;r<i-1;r++){let o=t[r]/3;a+=` C${s[r][0]+o},${s[r][1]+o*n[r]} ${s[r+1][0]-o},${s[r+1][1]-o*n[r+1]} ${s[r+1][0]},${s[r+1][1]}`}return a}var wi=[{id:"temp",label:"Temperatur",icon:"mdi:thermometer"},{id:"rain",label:"Niederschlag",icon:"mdi:weather-pouring"},{id:"wind",label:"Wind",icon:"mdi:weather-windy"}],G=36e5,_n=["S","M","D","M","D","F","S"];function $i(s){let i=new Date(s);return new Date(i.getFullYear(),i.getMonth(),i.getDate()).getTime()}var vt=class extends z{constructor(){super(...arguments);this.hourly=[];this.daily=[];this.index=0;this.metric="temp";this.onKey=t=>t.key==="Escape"&&this.close()}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey)}close(){this.dispatchEvent(new CustomEvent("close"))}willUpdate(t){(t.has("index")||t.has("hass"))&&this.loadPast()}loadPast(){var l,c;let t=(c=(l=this.config)==null?void 0:l.sensors)!=null?c:{},e=this.daily[this.index];if(!this.hass||!e)return;let n=$i(e.datetime),a=Date.now();if(n>a)return;let r=Math.min(n+24*G,Math.ceil(a/3e5)*3e5),o=`${n}|${r}`;o!==this._pastKey&&(this._pastKey=o,mt(this.hass,{ids:[t.temperature,t.rain_total,t.wind_speed,t.wind_gust].filter(Boolean),start:new Date(n),end:new Date(r),period:"hour",types:["mean","max","change"]}).then(h=>o===this._pastKey&&(this._past=h),()=>this._pastKey=void 0))}render(){let t=this.daily[this.index];if(!t)return v;let e=$i(t.datetime),n=e+24*G,a=Date.now(),r=a>=e&&a<n,o=this.hourly.filter(c=>{let h=new Date(c.datetime).getTime();return h>=e&&h<=n}),l=new Date(e).toLocaleDateString("de-DE",{weekday:"long",day:"numeric",month:"long"});return f`
      <div class="backdrop" @click=${this.close}></div>
      <div class="sheet" role="dialog" aria-label="Tagesdetail">
        <div class="top">
          <button class="ib" aria-label="Schließen" @click=${this.close}><ha-icon icon="mdi:close"></ha-icon></button>
          <div class="ttl">${wi.find(c=>c.id===this.metric).label}</div>
          <span style="width:40px"></span>
        </div>

        <div class="days">
          ${this.daily.map((c,h)=>{let p=new Date(c.datetime);return f`<button class=${h===this.index?"on":""} @click=${()=>this.select(h)}>
              <span class="l">${_n[p.getDay()]}</span><span class="n">${p.getDate()}</span></button>`})}
        </div>
        <div class="date">${l}</div>

        <div class="chips">
          ${wi.map(c=>f`<button class=${c.id===this.metric?"on":""}
            @click=${()=>this.setMetric(c.id)}><ha-icon icon=${c.icon}></ha-icon>${c.label}</button>`)}
        </div>

        <section class="card">
          ${this.renderSummary(t,o,r)}
          ${o.length?this.renderChart(e,n,o,r?a:void 0):f`<div class="hint">Für diesen Tag gibt es keine Stundenvorhersage.</div>`}
        </section>
      </div>
    `}select(t){this.dispatchEvent(new CustomEvent("select",{detail:{index:t}}))}setMetric(t){this.dispatchEvent(new CustomEvent("metric",{detail:{metric:t}}))}renderSummary(t,e,n){var p,m,d,g;let a=(p=this.config.sensors)!=null?p:{};if(this.metric==="temp"){let b=n?E(this.hass,a.temperature):void 0;return f`<div class="sum">
        <div class="sum-ic">${It(t.condition)}</div>
        <div>
          <div class="big">${b!=null?D(b):Bt(t.condition)}</div>
          <div class="sub">H: ${D(t.temperature)} · T: ${D(t.templow)}${b!=null?` \xB7 ${Bt(t.condition)}`:""}</div>
        </div>
      </div>`}if(this.metric==="rain"){let b=n&&a.rain_total?this.pastRows(a.rain_total).reduce((x,A)=>{var S;return x+((S=A.change)!=null?S:0)},0):void 0,w=Math.max(0,...e.map(x=>{var A;return(A=x.precipitation_probability)!=null?A:0}),(m=t.precipitation_probability)!=null?m:0);return f`<div class="sum">
        <div>
          <div class="big">${tt((d=t.precipitation)!=null?d:e.reduce((x,A)=>{var S;return x+((S=A.precipitation)!=null?S:0)},0))}</div>
          <div class="sub">erwartet · Wahrscheinlichkeit bis ${Math.round(w)} %${b!=null?` \xB7 bisher gemessen ${tt(b)}`:""}</div>
        </div>
      </div>`}let r=e.map(b=>b.wind_speed).filter(b=>b!=null),o=r.length?r.reduce((b,w)=>b+w,0)/r.length:t.wind_speed,l=e.map(b=>b.wind_bearing).filter(b=>b!=null),c=(g=t.wind_bearing)!=null?g:l.length?Math.atan2(l.reduce((b,w)=>b+Math.sin(w*Math.PI/180),0),l.reduce((b,w)=>b+Math.cos(w*Math.PI/180),0))*180/Math.PI:void 0,h=a.wind_gust&&n?Math.max(...this.pastRows(a.wind_gust).map(b=>{var w;return(w=b.max)!=null?w:0}),0):void 0;return f`<div class="sum">
      <div>
        <div class="big">${M(o,0)} km/h ${c!=null?f`<span class="dir">${Wt(c)}</span>`:v}</div>
        <div class="sub">Ø Vorhersage · max ${M(r.length?Math.max(...r):void 0,0)} km/h${h?` \xB7 st\xE4rkste B\xF6e heute ${M(h,0)} km/h`:""}</div>
      </div>
    </div>`}pastRows(t){var e,n;return(n=(e=this._past)==null?void 0:e[t])!=null?n:[]}renderChart(t,e,n,a){var w;let r=(w=this.config.sensors)!=null?w:{},o=n.map(x=>({t:new Date(x.datetime).getTime(),h:x})),l=a?o.filter(x=>x.t>=a-G):o,c=[0,6,12,18].map(x=>({t:t+x*G,label:`${String(x).padStart(2,"0")} Uhr`})),h=[],p=[],m="\xB0",d,g="",b;if(this.metric==="temp"){let x=r.temperature&&a?this.pastRows(r.temperature).map(_=>({t:_.start+G/2,v:_.mean})):[],A=a?E(this.hass,r.temperature):void 0,S=Vt(this.hourly,A),k=[...x,...A!=null?[{t:a,v:A}]:[],...l.filter(_=>!a||_.t>a).map(_=>({t:_.t,v:S(_.t,_.h.temperature)}))];h.push({type:"area",points:k,color:"var(--wa-temp, #4fc3f7)",dashUntil:a,label:"Temperatur",unit:"\xB0",digits:1});let I=k.filter(_=>_.v!=null);if(I.length){let _=I.reduce((H,U)=>U.v>H.v?U:H),P=I.reduce((H,U)=>U.v<H.v?U:H);p.push({t:_.t,v:_.v,label:"H"},{t:P.t,v:P.v,label:"T"})}}else if(this.metric==="rain")m="",b=0,r.rain_total&&a&&h.push({type:"bar",points:this.pastRows(r.rain_total).map(x=>({t:x.start,v:x.change})),color:"var(--wa-rain-past, #1e6fb8)",barWidth:G,label:"gemessen",unit:" l/m\xB2",digits:1}),h.push({type:"bar",points:l.map(x=>{var A;return{t:x.t,v:(A=x.h.precipitation)!=null?A:0}}),color:"var(--wa-rain)",barWidth:G,label:"Menge",unit:" l/m\xB2",digits:1}),h.push({type:"line",axis:"right",points:l.map(x=>({t:x.t+G/2,v:x.h.precipitation_probability})),color:"var(--wa-prob, #90caf9)",label:"Wahrscheinl.",unit:" %",digits:0}),d=100,g=" %";else{m="",b=0;let x=r.wind_speed&&a?this.pastRows(r.wind_speed).map(k=>({t:k.start+G/2,v:k.mean})):[],A=a?E(this.hass,r.wind_speed):void 0,S=[...x,...A!=null?[{t:a,v:A}]:[],...l.filter(k=>!a||k.t>a).map(k=>({t:k.t,v:k.h.wind_speed}))];h.push({type:"area",points:S,color:"var(--wa-wind, #81c784)",dashUntil:a,label:"Wind",unit:" km/h",digits:0}),r.wind_gust&&a&&h.push({type:"line",points:this.pastRows(r.wind_gust).map(k=>({t:k.start+G/2,v:k.max})),color:"var(--wa-gust, #ffb74d)",label:"B\xF6e",unit:" km/h",digits:0})}return f`
      <wetter-app-chart .start=${t} .end=${e} .series=${h} .ticks=${c} .markers=${p}
        .now=${a} .height=${220} .yUnit=${m} .yMin=${b} .rightMax=${d} .rightUnit=${g}
        .timeFormat=${x=>new Date(x).toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}>
      </wetter-app-chart>
      ${this.metric==="wind"?this.renderWindDirs(t,l):v}
      ${this.metric==="rain"?ht([{color:"var(--wa-rain)",label:"Menge pro Stunde"},{color:"var(--wa-prob, #90caf9)",label:"Wahrscheinlichkeit",kind:"line"},!!a&&{color:"var(--wa-rain-past, #1e6fb8)",label:"gemessen"}]):v}
    `}renderWindDirs(t,e){let n=e.filter(a=>new Date(a.t).getHours()%3===0);return f`<div class="dirs">
      ${n.map(a=>{var r;return f`<div style="left:calc(6px + (100% - 44px) * ${(a.t-t)/(24*G)})">
        <ha-icon icon="mdi:navigation" style="transform:rotate(${((r=a.h.wind_bearing)!=null?r:0)+180}deg)"></ha-icon>
        <span>${new Date(a.t).getHours()}</span></div>`})}
    </div>`}};vt.properties={hass:{attribute:!1},config:{attribute:!1},hourly:{attribute:!1},daily:{attribute:!1},index:{type:Number},metric:{type:String},_past:{state:!0}},vt.styles=[gt,Gt,B`
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
    `];var Ae=[{id:"day",label:"Tag"},{id:"7d",label:"7 Tage"},{id:"30d",label:"30 Tage"},{id:"month",label:"Monat"},{id:"year",label:"Jahr"}];var Sn=["Januar","Februar","M\xE4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];function Mn(s){return new Date(s.getFullYear(),s.getMonth(),s.getDate())}function Pt(s,i){return new Date(s.getFullYear(),s.getMonth(),s.getDate()+i)}function Ai(s,i=!1){return s.toLocaleDateString("de-DE",i?{day:"2-digit",month:"2-digit",year:"numeric"}:{day:"2-digit",month:"2-digit"})}function Xt(s){return Ae.some(i=>i.id===s)}function ki(s,i=new Date){let t=Mn(i),e=Math.min(0,Math.round(s.offset)),n,a,r,o;switch(s.preset){case"day":{n=Pt(t,e),a=Pt(n,1),r="hour",o=e===0?"Heute":e===-1?"Gestern":n.toLocaleDateString("de-DE",{weekday:"short",day:"2-digit",month:"2-digit"});break}case"7d":case"30d":{let c=s.preset==="7d"?7:30;a=Pt(t,1+e*c),n=Pt(a,-c),r=c===7?"hour":"day",o=e===0?`Letzte ${c} Tage`:`${Ai(n)} \u2013 ${Ai(Pt(a,-1),!0)}`;break}case"month":{n=new Date(i.getFullYear(),i.getMonth()+e,1),a=new Date(n.getFullYear(),n.getMonth()+1,1),r="day",o=`${Sn[n.getMonth()]} ${n.getFullYear()}`;break}default:{n=new Date(i.getFullYear()+e,0,1),a=new Date(n.getFullYear()+1,0,1),r="month",o=String(n.getFullYear());break}}let l=a.getTime()>i.getTime();return l&&(a=new Date(Math.ceil(i.getTime()/3e5)*3e5)),{preset:s.preset,offset:e,start:n,end:a,period:r,label:o,live:l}}var te=new Map,ke=new EventTarget,_i="wetter-app:range:";function Tn(s,i){let t=i;try{let e=localStorage.getItem(_i+s);Xt(e)&&(t=e)}catch{}return{preset:t,offset:0}}function Cn(s,i="7d"){let t=te.get(s);return t||(t=Tn(s,i),te.set(s,t)),t}function Dn(s,i){let t=te.get(s);if(te.set(s,i),(t==null?void 0:t.preset)!==i.preset)try{localStorage.setItem(_i+s,i.preset)}catch{}ke.dispatchEvent(new CustomEvent(s))}var ee=class{constructor(i,t,e=()=>"7d"){this.host=i;this.groupOf=t;this.fallback=e;this.onChange=()=>this.host.requestUpdate();i.addController(this)}get state(){return Cn(this.groupOf(),this.fallback())}get range(){return ki(this.state)}set(i){Dn(this.groupOf(),i)}hostConnected(){this.listen()}hostUpdated(){this.group!==this.groupOf()&&this.listen()}hostDisconnected(){this.group&&ke.removeEventListener(this.group,this.onChange),this.group=void 0}listen(){this.hostDisconnected(),this.group=this.groupOf(),ke.addEventListener(this.group,this.onChange)}};function Si(s){let i=s.range;return f`
    <div class="range">
      <div class="chips" role="tablist">
        ${Ae.map(t=>f`<button role="tab" aria-selected=${t.id===i.preset}
            class=${t.id===i.preset?"on":""}
            @click=${()=>s.set({preset:t.id,offset:0})}>${t.label}</button>`)}
      </div>
      <div class="nav">
        <button class="ib" aria-label="Zurück" @click=${()=>s.set({preset:i.preset,offset:i.offset-1})}>
          <ha-icon icon="mdi:chevron-left"></ha-icon>
        </button>
        <span>${i.label}</span>
        <button class="ib" aria-label="Vor" ?disabled=${i.offset>=0}
          @click=${()=>s.set({preset:i.preset,offset:i.offset+1})}>
          <ha-icon icon="mdi:chevron-right"></ha-icon>
        </button>
      </div>
    </div>
  `}var Mi=B`
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
`;var j=[{min:0,max:1,label:"0",name:"Windstille",color:"#2a32ff",text:"#fff"},{min:1,max:6,label:"1",name:"leiser Zug",color:"#3a6ff7",text:"#fff"},{min:6,max:12,label:"2",name:"leichte Brise",color:"#3fb4f7",text:"#000"},{min:12,max:20,label:"3",name:"schwache Brise",color:"#44f2f7",text:"#000"},{min:20,max:29,label:"4",name:"m\xE4\xDFige Brise",color:"#a6f78a",text:"#000"},{min:29,max:39,label:"5",name:"frische Brise",color:"#f7d64a",text:"#000"},{min:39,max:50,label:"6",name:"starker Wind",color:"#f77a4a",text:"#000"},{min:50,max:62,label:"7",name:"steifer Wind",color:"#e8443a",text:"#fff"},{min:62,max:1/0,label:"8+",name:"st\xFCrmischer Wind und mehr",color:"#b0207a",text:"#fff"}],ie=["N","NNO","NO","ONO","O","OSO","SO","SSO","S","SSW","SW","WSW","W","WNW","NW","NNW"],Ti=s=>j.findIndex(i=>s<i.max),ne=3;function En(s){let i=Ti(s.mean),t=s.min,e=s.max,n=s.mean;if(t==null||e==null||e<j[ne].min||e-t<.01)return[[i,1]];let a=Math.min(e,Math.max(t,3*n-t-e)),r=c=>c<=t?0:c>=e?1:c<=a?(c-t)**2/((e-t)*(a-t||1e-9)):1-(e-c)**2/((e-t)*(e-a||1e-9)),o=j.map(c=>r(c.max)-r(c.min));if(i>=ne)return o.map((c,h)=>[h,c]).filter(([,c])=>c>0);let l=o.slice(ne).reduce((c,h)=>c+h,0);return[[i,1-l],...o.map((c,h)=>[h,c]).filter(([c,h])=>c>=ne&&h>0)]}function Ci(s=[],i=[],t={}){var Pe,He;let e=(Pe=t.now)!=null?Pe:{},n=new Map(i.map(u=>[u.start,u])),a=ie.map(()=>j.map(()=>0)),r=j.map(()=>0),o=0;for(let u of s){let $=n.get(u.start);if(u.mean==null||($==null?void 0:$.mean)==null)continue;o++;let R=Math.round((u.mean%360+360)%360/22.5)%16;for(let[L,Q]of En($))r[L]+=Q,L>0&&(a[R][L]+=Q)}if(!o)return f`<div class="hint">Keine Winddaten im Zeitraum.</div>`;let l=u=>u/o*100,c=a.map(u=>l(u.reduce(($,R)=>$+R,0))),h=Math.max(...c,1),p=(He=[2,5,10,20,25,50].find(u=>h/u<=4))!=null?He:50,m=Math.ceil(h/p)*p,d=16,g=90,b=u=>d+u/m*(g-d),w=u=>(u-90)*Math.PI/180,x=(u,$)=>`${100+u*Math.cos(w($))},${100+u*Math.sin(w($))}`,A=(u,$,R)=>{let L=u*22.5-10.5,Q=u*22.5+10.5;return`M${x($,L)} L${x(R,L)} A${R} ${R} 0 0 1 ${x(R,Q)} L${x($,Q)} A${$} ${$} 0 0 0 ${x($,L)}Z`},S=0,k=1/0;for(let u=0;u<16;u++){let $=Math.max(c[u],c[(u+1)%16]);$<k&&(k=$,S=u)}let I=S*22.5+11.25,_=[],P=[];for(let u=p;u<=m;u+=p)_.push(y`<circle cx="100" cy="100" r=${b(u)} class="ring"/>`),P.push(y`<text x=${100+b(u)*Math.cos(w(I))} y=${102.5+b(u)*Math.sin(w(I))} class="rl">${u} %</text>`);let H=u=>t.selected!=null&&t.selected!==u?"dim":"",U=a.flatMap((u,$)=>{let R=0;return u.map((L,Q)=>{if(!L)return y``;let Qi=b(R);return R+=l(L),y`<path d=${A($,Qi,b(R))} style="fill:${j[Q].color}" class=${H(Q)}><title>${ie[$]}, Bft ${j[Q].label}: ${M(l(L),1)} %</title></path>`})}),J=ie.map((u,$)=>$%4===0?y``:y`<text x=${100+109*Math.cos(w($*22.5))} y=${103+109*Math.sin(w($*22.5))} class=${$%2?"cd2":"cd"}>${ie[$]}</text>`),Z=e.direction!=null?y`<path d="M100 ${100-g-1} l-5 -9 h10z" class="now" transform="rotate(${e.direction} 100 100)"><title>Aktuell: ${Math.round(e.direction)}°</title></path>`:y``,q=e.speed!=null?Ti(e.speed):-1,O=j.map((u,$)=>({...u,i:$,share:l(r[$]),w:Math.max(l(r[$]),9)})).filter(u=>r[u.i]>0||u.i===q),it=O.reduce((u,$)=>u+$.w,0),At=u=>O.slice(0,u).reduce(($,R)=>$+R.w,0)/it*100,F,nt=O.findIndex(u=>u.i===q);if(nt>=0){let u=O[nt],$=Number.isFinite(u.max)?u.max:u.min+20;F=At(nt)+Math.min(1,(e.speed-u.min)/($-u.min))*(u.w/it)*100}let Ki=(u,$)=>u.w/it*300>=$.length*6+6,Gi=u=>`left:${u}%;transform:translateX(-${u}%)`,oe=u=>u>=1?`${Math.round(u)}%`:u>=.05?`${M(u,1)}%`:"<0,1%",kt=t.selected!=null?j[t.selected]:void 0,Ee=u=>window.innerHeight-u.currentTarget.getBoundingClientRect().bottom<150,Re=(u,$)=>{var R;return(R=t.onSelect)==null?void 0:R.call(t,t.selected===$?void 0:$,Ee(u))},Be=(u,$)=>{var R;u.pointerType==="mouse"&&((R=t.onSelect)==null||R.call(t,$,Ee(u)))},Ie=u=>{var $;u.pointerType==="mouse"&&(($=t.onSelect)==null||$.call(t,void 0))},le=O.findIndex(u=>u.i===t.selected),ji=u=>u.min===0?"unter 1":Number.isFinite(u.max)?`${u.min}\u2013${u.max-1}`:`ab ${u.min}`;return f`
    <div class="rose">
      <svg viewBox="-22 -22 244 244">
        ${_}
        <line x1="100" y1="8" x2="100" y2="192" class="ring"/><line x1="8" y1="100" x2="192" y2="100" class="ring"/>
        ${U}
        <circle cx="100" cy="100" r=${d-1} style="fill:${j[0].color}" class=${H(0)}/>
        <text x="100" y="103.5" class="cv">${Math.round(l(r[0]))} %</text>
        ${P}
        <text x="100" y="-6" class="cd">N</text><text x="100" y="216" class="cd">S</text>
        <text x="211" y="103" class="cd">O</text><text x="-11" y="103" class="cd">W</text>
        ${J}
        ${Z}
      </svg>
      <div class="bftbar">
        ${F!=null?f`<span class="nowsp" style="left:${F}%" title="Aktuell: ${M(e.speed,1)} km/h"></span>`:""}
        ${kt&&le>=0?f`<div class="btip ${t.up?"up":""}" style=${Gi(At(le)+O[le].w/it*50)}>
          <div class="tr"><i style="background:${kt.color}"></i><b>Beaufort ${kt.label}</b></div>
          <div class="tr"><span>${kt.name}</span></div>
          <div class="tr"><span>Wind</span><b>${ji(kt)} km/h</b></div>
          <div class="tr"><span>Anteil</span><b>${oe(l(r[t.selected]))}</b></div>
        </div>`:""}
        <div class="segs">${O.map(u=>f`<button style="flex:${u.w} 1 0;background:${u.color};color:${u.text}" class=${t.selected===u.i?"on":""}
          @click=${$=>Re($,u.i)} @pointerenter=${$=>Be($,u.i)} @pointerleave=${Ie}>${Ki(u,oe(u.share))?oe(u.share):""}</button>`)}</div>
        <div class="nums">${O.map(u=>f`<span style="flex:${u.w} 1 0" @click=${$=>Re($,u.i)} @pointerenter=${$=>Be($,u.i)} @pointerleave=${Ie}>${u.label}</span>`)}</div>
        <div class="bl">Beaufort</div>
      </div>
    </div>`}var Di=B`
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
`;var Rn=[{id:"pressure",label:"Luftdruck",unit:" hPa",digits:1,color:"var(--wa-accent)"},{id:"humidity",label:"Feuchte",unit:" %",digits:0,color:"#4dd0e1"},{id:"solar",label:"Sonne",unit:" W/m\xB2",digits:0,color:"#ffb300"},{id:"uv",label:"UV",unit:"",digits:1,color:"#ab47bc"}],Bn=y`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"/></svg>`,_e=["Jan","Feb","M\xE4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],In=["Januar","Februar","M\xE4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],Se=["So","Mo","Di","Mi","Do","Fr","Sa"],Ei=864e5,Pn=.1,yt=class extends z{constructor(){super(...arguments);this.wide=!1;this._extra="pressure";this._bftUp=!1;this.range=new ee(this,()=>{var t,e;return(e=(t=this.config)==null?void 0:t.sync_group)!=null?e:"default"},()=>{var t;return Xt((t=this.config)==null?void 0:t.default_range)?this.config.default_range:"7d"})}periods(t){return{main:t.preset==="day"||t.preset==="7d"?"hour":"day",rain:t.preset==="day"?"hour":"day",rose:t.start.getTime()>Date.now()-9*Ei?"5minute":"hour"}}connectedCallback(){super.connectedCallback(),this._offTip=Zt(this,()=>this._bft=void 0,()=>this.renderRoot.querySelector(".bftbar"))}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._offTip)==null||t.call(this)}updated(){this.load()}async load(){var l,c;if(!this.hass||!this.config)return;let t=this.range.range,e=(l=this.config.sensors)!=null?l:{},n=this.periods(t),a=`${t.start.getTime()}|${t.end.getTime()}`;if(a===this._key)return;this._key=a,this._err=void 0;let r=h=>h.filter(Boolean),o=(h,p,m)=>mt(this.hass,{ids:h,start:t.start,end:t.end,period:p,types:m});try{let[h,p,m]=await Promise.all([o(r([e.temperature,e.humidity,e.pressure,e.solar,e.uv,e.wind_speed,e.wind_gust]),n.main,["mean","min","max"]),o(r([e.rain_total]),n.rain,["change"]),o(r([e.wind_direction,n.rose!==n.main?e.wind_speed:void 0]),n.rose,["mean","min","max"])]);if(a!==this._key)return;this._dataRange=t,this._data={main:h,rain:p,dir:m}}catch(h){if(a!==this._key)return;this._err=(c=h==null?void 0:h.message)!=null?c:String(h),this._key=void 0}}render(){var h,p,m;if(!this.config)return v;let t=this.range.range,e=this._data,n=e&&this._dataRange?this._dataRange:t,a=n!==t&&(n.start.getTime()!==t.start.getTime()||n.end.getTime()!==t.end.getTime()),r=(h=this.config.sensors)!=null?h:{},o=r.temperature&&(e==null?void 0:e.main[r.temperature])||[],l=(p=o.find(d=>d.mean!=null))==null?void 0:p.start,c=!a&&l!=null&&l-n.start.getTime()>2*Ei?f`<div class="hint-inline"><span>${Bn}<span>Daten erst ab <b>${new Date(l).toLocaleDateString("de-DE")}</b></span></span></div>`:v;return f`
      <section class="card">
        ${Si(this.range)}
      </section>
      ${this._err?f`<div class="warn">Statistik nicht verfügbar: ${this._err}</div>`:v}
      ${e?!o.length&&!(r.rain_total&&((m=e.rain[r.rain_total])!=null&&m.length))?f`<div class="hint">Keine Daten in diesem Zeitraum.</div>`:f`<div class="body ${a?"stale":""}">
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
            </div></div>`:f`<div class="loading">Lade Historie …</div>`}
    `}rows(t,e,n){let a=n.start.getTime(),r=n.end.getTime(),o=(e&&(t==null?void 0:t[e])||[]).filter(l=>l.start<r&&l.end>a);return n.preset==="year"?Hn(o):o}ticks(t){let e=[],n=t.start;if(t.preset==="day")for(let a of[0,6,12,18])e.push({t:new Date(n.getFullYear(),n.getMonth(),n.getDate(),a).getTime(),label:`${String(a).padStart(2,"0")} Uhr`});else if(t.preset==="7d")for(let a=0;a<7;a++){let r=new Date(n.getFullYear(),n.getMonth(),n.getDate()+a);e.push({t:r.getTime(),label:Se[r.getDay()]})}else if(t.preset==="30d")for(let a=0;a<30;a+=7){let r=new Date(n.getFullYear(),n.getMonth(),n.getDate()+a);e.push({t:r.getTime(),label:`${r.getDate()}.${r.getMonth()+1}.`})}else if(t.preset==="month")for(let a of[1,8,15,22,29])e.push({t:new Date(n.getFullYear(),n.getMonth(),a).getTime(),label:`${a}.`});else for(let a=0;a<12;a++)e.push({t:new Date(n.getFullYear(),a,1).getTime(),label:_e[a]});return e}fmt(t,e){return n=>{let a=new Date(n);return t.preset==="year"&&e!=="hour"?`${In[a.getMonth()]}`:e==="hour"?`${Se[a.getDay()]} ${String(a.getHours()).padStart(2,"0")}:00`:`${Se[a.getDay()]}, ${a.getDate()}.${a.getMonth()+1}.`}}chart(t,e,n){var a,r;return f`<wetter-app-chart .start=${t.start.getTime()} .end=${t.end.getTime()} .series=${e}
      .ticks=${this.ticks(t)} .height=${(a=n.height)!=null?a:200} .yUnit=${(r=n.yUnit)!=null?r:""} .yMin=${n.yMin}
      .rightMax=${n.rightMax} .timeFormat=${this.fmt(t,t.preset==="year"?"month":n.period)}></wetter-app-chart>`}renderSummary(t,e){var x;let n=(x=this.config.sensors)!=null?x:{},a=this.periods(t),r=n.temperature&&e.main[n.temperature]||[],o=Te(r,"min",Math.min),l=Te(r,"max",Math.max),c=Me(r.map(A=>A.mean)),h=n.rain_total&&e.rain[n.rain_total]||[],p=h.reduce((A,S)=>{var k;return A+((k=S.change)!=null?k:0)},0),m=h.filter(A=>{var S;return((S=A.change)!=null?S:0)>=Pn}).length,d=Te(n.wind_gust&&e.main[n.wind_gust]||[],"max",Math.max),g=Me((n.wind_speed&&e.main[n.wind_speed]||[]).map(A=>A.mean)),b=Me((n.humidity&&e.main[n.humidity]||[]).map(A=>A.mean)),w=this.fmt({...t,preset:t.preset==="year"?"30d":t.preset},a.main);return f`<div class="grid">
      <section class="card kv">${C("mdi:thermometer","Temperatur")}
        <div class="big">${D(c,1)}</div><div class="sub">Durchschnitt</div>
        <div class="ext"><span>▲ ${D(l==null?void 0:l.v,1)}</span><small>${l?w(l.t):""}</small></div>
        <div class="ext"><span>▼ ${D(o==null?void 0:o.v,1)}</span><small>${o?w(o.t):""}</small></div>
      </section>
      <section class="card kv">${C("mdi:weather-pouring","Niederschlag")}
        <div class="big">${tt(p)}</div><div class="sub">Summe</div>
        <div class="ext"><span>${m}</span><small>${a.rain==="hour"?"Stunden mit Regen":"Regentage (\u2265 0,1 l/m\xB2)"}</small></div>
      </section>
      <section class="card kv">${C("mdi:weather-windy","Wind")}
        <div class="big">${M(g,1)} km/h</div><div class="sub">Durchschnitt</div>
        <div class="ext"><span>${M(d==null?void 0:d.v,0)} km/h</span><small>stärkste Böe${d?` \xB7 ${w(d.t)}`:""}</small></div>
      </section>
      <section class="card kv">${C("mdi:water-percent","Luftfeuchte")}
        <div class="big">${M(b,0)} %</div><div class="sub">Durchschnitt</div>
      </section>
    </div>`}renderTemp(t,e){var c;let n=(c=this.config.sensors)!=null?c:{},a=this.periods(t),r=this.rows(e.main,n.temperature,t),o=[],l=h=>h.start+(h.end-h.start)/2;return a.main==="hour"?o.push({type:"band",points:r.map(h=>({t:l(h),v:h.min,v2:h.max})),color:"var(--wa-temp, #4fc3f7)",label:"",unit:"\xB0",digits:1}):o.push({type:"range",points:r.map(h=>({t:h.start,t2:h.end,v:h.min,v2:h.max})),color:"rgba(79, 195, 247, 0.55)",label:"",unit:"\xB0",digits:1}),o.push({type:"line",points:r.map(h=>({t:l(h),v:h.mean})),color:"var(--wa-temp-line, #ffb74d)",label:"\xD8",unit:"\xB0",digits:1}),f`<section class="card">${C("mdi:thermometer","Temperatur")}
      ${this.chart(t,o,{yUnit:"\xB0",period:a.main})}
      ${ht([{color:"#4fc3f7",label:"Min\u2013Max"},{color:"#ffb74d",label:"Durchschnitt",kind:"line"}])}
    </section>`}renderRain(t,e){var h;let n=(h=this.config.sensors)!=null?h:{};if(!n.rain_total)return v;let a=this.periods(t),r=this.rows(e.rain,n.rain_total,t),o=p=>{let m=0;return p.map(d=>{var g;return{t:Math.min(d.end,t.end.getTime()),v:m+=(g=d.change)!=null?g:0}})},l=r.slice(Math.max(0,r.findIndex(p=>p.change!=null))),c=[{type:"bar",points:r.map(p=>{var m;return{t:p.start,t2:p.end,v:(m=p.change)!=null?m:0}}),color:"var(--wa-rain)",label:"Menge",unit:" l/m\xB2",digits:1},{type:"line",axis:"right",points:l.length?[{t:Math.max(l[0].start,t.start.getTime()),v:0},...o(l)]:[],color:"var(--wa-prob, #90caf9)",label:"Summe",unit:" l/m\xB2",digits:1}];return f`<section class="card">${C("mdi:weather-pouring","Niederschlag")}
      ${this.chart(t,c,{yMin:0,period:a.rain})}
      ${ht([{color:"var(--wa-rain)",label:a.rain==="hour"?"pro Stunde":t.preset==="year"?"pro Monat":"pro Tag"},{color:"var(--wa-prob, #90caf9)",label:"Summe (blaue Skala links)",kind:"line"}])}
    </section>`}renderWind(t,e){var m;let n=(m=this.config.sensors)!=null?m:{};if(!n.wind_speed)return v;let a=this.periods(t),r=n.wind_direction&&e.dir[n.wind_direction]||[],o=(a.rose===a.main?e.main[n.wind_speed]:e.dir[n.wind_speed])||[],l=this.rows(e.main,n.wind_speed,t),c=this.rows(e.main,n.wind_gust,t),h=d=>d.start+(d.end-d.start)/2,p=[{type:"line",points:l.map(d=>({t:h(d),v:d.mean})),color:"var(--wa-wind, #81c784)",label:"\xD8",unit:" km/h",digits:1},...c.length?[{type:"line",points:c.map(d=>({t:h(d),v:d.max})),color:"var(--wa-gust, #ffb74d)",label:"B\xF6e",unit:" km/h",digits:0}]:[]];return f`<section class="card">${C("mdi:weather-windy","Wind")}
      ${n.wind_direction?Ci(r,o,{now:t.live?{direction:E(this.hass,n.wind_direction),speed:E(this.hass,n.wind_speed)}:{},selected:this._bft,up:this._bftUp,onSelect:(d,g)=>{d!=null&&this._bft==null&&Jt(this),this._bft=d,this._bftUp=!!g}}):v}
      ${this.chart(t,p,{yMin:0,period:a.main,height:160})}
      ${ht([{color:"#81c784",label:"Durchschnitt",kind:"line"},{color:"#ffb74d",label:"st\xE4rkste B\xF6e",kind:"line"}])}
    </section>`}renderExtra(t,e){var p,m;let n=(p=this.config.sensors)!=null?p:{},a=Rn.filter(d=>n[d.id]);if(!a.length)return v;let r=(m=a.find(d=>d.id===this._extra))!=null?m:a[0],o=this.periods(t),l=this.rows(e.main,n[r.id],t),c=d=>d.start+(d.end-d.start)/2,h=[{type:"band",points:l.map(d=>({t:c(d),v:d.min,v2:d.max})),color:r.color,unit:r.unit,digits:r.digits},{type:"line",points:l.map(d=>({t:c(d),v:d.mean})),color:r.color,label:"\xD8",unit:r.unit,digits:r.digits}];return f`<section class="card">${C("mdi:chart-bell-curve-cumulative","Weitere Werte")}
      <div class="chips small">${a.map(d=>f`<button class=${d===r?"on":""} @click=${()=>this._extra=d.id}>${d.label}</button>`)}</div>
      ${this.chart(t,h,{period:o.main,yMin:r.id==="pressure"?void 0:0})}
      ${ht([{color:r.color,label:"Durchschnitt",kind:"line"},{color:r.color,label:"Min\u2013Max",opacity:.3}])}
    </section>`}renderYearTable(t,e){var m;let n=(m=this.config.sensors)!=null?m:{},a=this.rows(e.main,n.temperature,t),r=this.rows(e.rain,n.rain_total,t),o=(d,g)=>d.find(b=>b.start===g),l=[...Array(12)].map((d,g)=>new Date(t.start.getFullYear(),g,1).getTime()).filter(d=>d<=Date.now()),c=l.findIndex(d=>o(a,d)||o(r,d)),h=c<0?l:l.slice(c),p=Math.max(1,...r.map(d=>{var g;return(g=d.change)!=null?g:0}));return f`<section class="card">${C("mdi:table",`Monate ${t.start.getFullYear()}`)}
      <table class="months">
        <thead><tr><th></th><th>Ø</th><th>Min</th><th>Max</th><th class="rc">Niederschlag</th></tr></thead>
        <tbody>${h.map(d=>{var x;let g=new Date(d).getMonth(),b=o(a,d),w=o(r,d);return!b&&!w?f`<tr class="empty"><td>${_e[g]}</td><td colspan="4">–</td></tr>`:f`<tr>
            <td>${_e[g]}</td><td>${D(b==null?void 0:b.mean,1)}</td><td class="cold">${D(b==null?void 0:b.min,1)}</td><td class="warm">${D(b==null?void 0:b.max,1)}</td>
            <td class="rc"><div class="rcell"><div class="rbar"><i style="width:${((x=w==null?void 0:w.change)!=null?x:0)/p*100}%"></i></div>
              <span>${M(w==null?void 0:w.change,0)}</span></div></td></tr>`})}</tbody>
      </table>
    </section>`}};yt.properties={hass:{attribute:!1},config:{attribute:!1},wide:{type:Boolean,reflect:!0},_data:{state:!0},_err:{state:!0},_extra:{state:!0},_bft:{state:!0}},yt.styles=[gt,Gt,Mi,Di,B`
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
    `];function Me(s){let i=s.filter(t=>t!=null);return i.length?i.reduce((t,e)=>t+e,0)/i.length:void 0}function Te(s,i,t){let e;for(let n of s){let a=n[i];a!=null&&(!e||t(a,e.v)===a&&a!==e.v)&&(e={t:n.start,v:a})}return e}function Hn(s){var t;let i=new Map;for(let e of s){let n=new Date(e.start),a=new Date(n.getFullYear(),n.getMonth(),1).getTime(),r=i.get(a);r||(r={start:a,end:new Date(n.getFullYear(),n.getMonth()+1,1).getTime(),min:null,max:null,mean:null,change:null,_n:0,_sum:0},i.set(a,r)),e.min!=null&&(r.min=r.min==null?e.min:Math.min(r.min,e.min)),e.max!=null&&(r.max=r.max==null?e.max:Math.max(r.max,e.max)),e.mean!=null&&(r._sum+=e.mean,r._n++,r.mean=r._sum/r._n),e.change!=null&&(r.change=((t=r.change)!=null?t:0)+e.change)}return[...i.values()].sort((e,n)=>e.start-n.start)}var Ri={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Bi=s=>(...i)=>({_$litDirective$:s,values:i}),se=class{constructor(i){}get _$AU(){return this._$AM._$AU}_$AT(i,t,e){this._$Ct=i,this._$AM=t,this._$Ci=e}_$AS(i,t){return this.update(i,t)}update(i,t){return this.render(...t)}};var{I:zn}=si,Ii=s=>s;var Pi=()=>document.createComment(""),wt=(s,i,t)=>{var a;let e=s._$AA.parentNode,n=i===void 0?s._$AB:i._$AA;if(t===void 0){let r=e.insertBefore(Pi(),n),o=e.insertBefore(Pi(),n);t=new zn(r,o,s,s.options)}else{let r=t._$AB.nextSibling,o=t._$AM,l=o!==s;if(l){let c;(a=t._$AQ)==null||a.call(t,s),t._$AM=s,t._$AP!==void 0&&(c=s._$AU)!==o._$AU&&t._$AP(c)}if(r!==n||l){let c=t._$AA;for(;c!==r;){let h=Ii(c).nextSibling;Ii(e).insertBefore(c,n),c=h}}}return t},et=(s,i,t=s)=>(s._$AI(i,t),s),Fn={},Hi=(s,i=Fn)=>s._$AH=i,zi=s=>s._$AH,re=s=>{s._$AR(),s._$AA.remove()};var Fi=(s,i,t)=>{let e=new Map;for(let n=i;n<=t;n++)e.set(s[n],n);return e},Oi=Bi(class extends se{constructor(s){if(super(s),s.type!==Ri.CHILD)throw Error("repeat() can only be used in text expressions")}dt(s,i,t){let e;t===void 0?t=i:i!==void 0&&(e=i);let n=[],a=[],r=0;for(let o of s)n[r]=e?e(o,r):r,a[r]=t(o,r),r++;return{values:a,keys:n}}render(s,i,t){return this.dt(s,i,t).values}update(s,[i,t,e]){var b;let n=zi(s),{values:a,keys:r}=this.dt(i,t,e);if(!Array.isArray(n))return this.ut=r,a;let o=(b=this.ut)!=null?b:this.ut=[],l=[],c,h,p=0,m=n.length-1,d=0,g=a.length-1;for(;p<=m&&d<=g;)if(n[p]===null)p++;else if(n[m]===null)m--;else if(o[p]===r[d])l[d]=et(n[p],a[d]),p++,d++;else if(o[m]===r[g])l[g]=et(n[m],a[g]),m--,g--;else if(o[p]===r[g])l[g]=et(n[p],a[g]),wt(s,l[g+1],n[p]),p++,g--;else if(o[m]===r[d])l[d]=et(n[m],a[d]),wt(s,n[p],n[m]),m--,d++;else if(c===void 0&&(c=Fi(r,d,g),h=Fi(o,p,m)),c.has(o[p]))if(c.has(o[m])){let w=h.get(r[d]),x=w!==void 0?n[w]:null;if(x===null){let A=wt(s,n[p]);et(A,a[d]),l[d]=A}else l[d]=et(x,a[d]),wt(s,n[p],x),n[w]=null;d++}else re(n[m]),m--;else re(n[p]),p++;for(;d<=g;){let w=wt(s,l[g+1]);et(w,a[d]),l[d++]=w}for(;p<=m;){let w=n[p++];w!==null&&re(w)}return this.ut=r,Hi(s,l),V}});var On={rainy:["clouds","rain"],pouring:["clouds","pour"],hail:["clouds","hail"],"lightning-rainy":["clouds","rain","flash"],lightning:["clouds","flash"],snowy:["fewclouds","snow"],"snowy-rainy":["fewclouds","sleet"],sunny:["sun"],"clear-night":["stars"],partlycloudy:["sun","fewclouds"],cloudy:["clouds"],fog:["fog"],windy:["wind"],"windy-variant":["fewclouds","wind"]};function Un(s){return()=>{s=s+1831565813|0;let i=Math.imul(s^s>>>15,1|s);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}var Nn=s=>[{transform:"translate3d(0,-40px,0)",opacity:s},{transform:"translate3d(0,230px,0)",opacity:s,offset:.43},{transform:"translate3d(0,580px,0)",opacity:0}],Ln=s=>[{transform:"translate3d(0,-10px,0)",opacity:s},{transform:"translate3d(14px,280px,0)",opacity:s*.8},{transform:"translate3d(0,570px,0)",opacity:0}],Kn=s=>[{transform:"translate3d(0,-20px,0)",opacity:s,easing:"ease-in"},{transform:"translate3d(0,300px,0)",opacity:s,offset:.62},{transform:"translate3d(4px,270px,0)",opacity:s*.7,offset:.72},{transform:"translate3d(7px,520px,0)",opacity:0}],Ce=s=>[{transform:`translate3d(-${s}%,0,0)`},{transform:"translate3d(100%,0,0)"}];function De(s,i){let t=Un(i),e=n=>[...Array(n)];switch(s){case"rain":case"pour":case"sleet":return e(s==="pour"?56:s==="sleet"?14:28).map(()=>{let a=700+t()*500;return{cls:"drop",style:`left:${(t()*100).toFixed(1)}%;height:${Math.round(14+t()*14)}px`,anim:Nn(.4+t()*.6),dur:a,delay:-t()*a}}).concat(s==="sleet"?De("snow",i+7).slice(0,18):[]);case"hail":return e(26).map(()=>{let n=900+t()*500,a=(3.5+t()*2.5).toFixed(1);return{cls:"hail",style:`left:${(t()*100).toFixed(1)}%;top:${Math.round(-t()*160)}px;width:${a}px;height:${a}px`,anim:Kn(.6+t()*.4),dur:n,delay:-t()*n}}).concat(De("rain",i+3).slice(0,10));case"snow":return e(36).map(()=>{let n=9e3+t()*8e3,a=(2+t()*2.5).toFixed(1);return{cls:"flake",style:`left:${(t()*100).toFixed(1)}%;width:${a}px;height:${a}px`,anim:Ln(.35+t()*.5),dur:n,delay:-t()*n}});case"stars":case"fewstars":return e(s==="stars"?46:18).map(()=>{let n=(1+t()*1.6).toFixed(1);return{cls:"star",style:`left:${(t()*100).toFixed(1)}%;top:${(t()*300).toFixed(0)}px;width:${n}px;height:${n}px`,anim:[{opacity:.15},{opacity:.4+t()*.6}],dur:1800+t()*3500,delay:-t()*4e3,easing:"ease-in-out",dir:"alternate"}});case"sun":return[{cls:"glow",style:"",anim:[{transform:"scale(1)",opacity:.75},{transform:"scale(1.08)",opacity:1}],dur:7e3,delay:0,easing:"ease-in-out",dir:"alternate"},{cls:"rays",style:"",anim:[{transform:"rotate(0deg)"},{transform:"rotate(360deg)"}],dur:14e4,delay:0}];case"clouds":case"fewclouds":return e(s==="clouds"?5:3).map((n,a)=>{let r=7e4+t()*5e4;return{cls:"lane",style:`top:${Math.round(10+a*(s==="clouds"?70:90)+t()*30)}px;--cw:${Math.round(28+t()*16)}%;opacity:${(.5+t()*.5).toFixed(2)}`,anim:Ce(45),dur:r,delay:-t()*r}});case"fog":return e(4).map((n,a)=>{let r=5e4+t()*4e4;return{cls:"lane fogl",style:`top:${60+a*90}px`,anim:Ce(80),dur:r,delay:-t()*r}});case"wind":return e(10).map(()=>{let n=2200+t()*2200;return{cls:"lane windl",style:`top:${Math.round(20+t()*380)}px;--sw:${Math.round(60+t()*90)}px;opacity:${(.3+t()*.6).toFixed(2)}`,anim:Ce(20),dur:n,delay:-t()*n*3}});case"flash":return[{cls:"flash",style:"",anim:[{opacity:0,offset:0},{opacity:0,offset:.1},{opacity:.38,offset:.11},{opacity:0,offset:.13},{opacity:.24,offset:.15},{opacity:0,offset:.17},{opacity:0,offset:1}],dur:8e3,delay:0}]}}var Ui=new Map;function Gn(s,i){var n;let t=`${s}|${i}`,e=Ui.get(t);return e||(e=((n=On[s])!=null?n:[]).map(r=>i&&r==="sun"?"fewstars":r).flatMap((r,o)=>De(r,o*31+1)),Ui.set(t,e)),e}var Ni=1500,$t=class extends z{constructor(){super(...arguments);this.night=!1;this._groups=[];this._started=new WeakSet}willUpdate(t){if(!t.has("condition")&&!t.has("night"))return;let e=this.condition?`${this.condition}|${this.night}`:"",n=this._groups.find(a=>!a.leaving);(n==null?void 0:n.key)!==e&&(this._groups=[...this._groups.filter(a=>a!==n&&!a.leaving),...n?[{...n,leaving:!0}]:[],...e?[{key:e,items:Gn(this.condition,this.night)}]:[]])}render(){return f`${Oi(this._groups,t=>t.key,t=>f`<div class="g" data-key=${t.key}>
      ${t.items.map(e=>f`<i class=${e.cls} style=${e.style}>${e.cls.startsWith("lane")?f`<b></b>`:v}</i>`)}
    </div>`)}`}updated(){this.renderRoot.querySelectorAll(".g").forEach(e=>{let n=this._groups.find(a=>a.key===e.dataset.key);if(!(!n||typeof e.animate!="function")){if(n.leaving){this._started.has(e)&&!e.dataset.out?(e.dataset.out="1",e.animate([{opacity:1},{opacity:0}],{duration:Ni,fill:"forwards"}).onfinish=()=>{this._groups=this._groups.filter(a=>a!==n)}):this._started.has(e)||(this._groups=this._groups.filter(a=>a!==n));return}this._started.has(e)||(this._started.add(e),e.animate([{opacity:0},{opacity:1}],{duration:Ni}),e.querySelectorAll("i").forEach((a,r)=>{var l,c;let o=n.items[r];o&&a.animate(o.anim,{duration:o.dur,delay:o.delay,iterations:1/0,easing:(l=o.easing)!=null?l:"linear",direction:(c=o.dir)!=null?c:"normal"})}))}})}};$t.properties={condition:{},night:{type:Boolean},_groups:{state:!0}},$t.styles=B`
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
  `;var Li=[["wetter-app",ft,"Wetter-App","Komplette Wetter-App mit Vorhersage und Historie"]],jn=[["wetter-app-chart",xt],["wetter-app-day-detail",vt],["wetter-app-history",yt],["wetter-app-sky",$t]];for(let[s,i]of[...jn,...Li])customElements.get(s)||customElements.define(s,i);var ae=window;ae.customCards=ae.customCards||[];for(let[s,,i,t]of Li)ae.customCards.some(e=>e.type===s)||ae.customCards.push({type:s,name:i,description:t,preview:!1});console.info("%c WETTER-APP %c 0.1.0 ","background:#2f6fc4;color:#fff;border-radius:3px 0 0 3px","background:#555;color:#fff;border-radius:0 3px 3px 0");
