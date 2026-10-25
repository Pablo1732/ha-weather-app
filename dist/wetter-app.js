var St=globalThis,kt=St.ShadowRoot&&(St.ShadyCSS===void 0||St.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ut=Symbol(),le=new WeakMap,pt=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Ut)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(kt&&e===void 0){let i=t!==void 0&&t.length===1;i&&(e=le.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&le.set(t,e))}return e}toString(){return this.cssText}},ce=r=>new pt(typeof r=="string"?r:r+"",void 0,Ut),P=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((i,s,a)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[a+1],r[0]);return new pt(t,r,Ut)},de=(r,e)=>{if(kt)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let i=document.createElement("style"),s=St.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},It=kt?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return ce(t)})(r):r;var{is:ii,defineProperty:si,getOwnPropertyDescriptor:ni,getOwnPropertyNames:ri,getOwnPropertySymbols:ai,getPrototypeOf:oi}=Object,B=globalThis,he=B.trustedTypes,li=he?he.emptyScript:"",Lt=B.reactiveElementPolyfillSupport,ut=(r,e)=>r,Wt={toAttribute(r,e){switch(e){case Boolean:r=r?li:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},fe=(r,e)=>!ii(r,e),pe={attribute:!0,type:String,converter:Wt,reflect:!1,useDefault:!1,hasChanged:fe},ue,me;(ue=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(me=B.litPropertyMetadata)!=null||(B.litPropertyMetadata=new WeakMap);var j=class extends HTMLElement{static addInitializer(e){var t;this._$Ei(),((t=this.l)!=null?t:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=pe){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&si(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){var n;let{get:s,set:a}=(n=ni(this.prototype,e))!=null?n:{get(){return this[t]},set(o){this[t]=o}};return{get:s,set(o){let c=s==null?void 0:s.call(this);a==null||a.call(this,o),this.requestUpdate(e,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var t;return(t=this.elementProperties.get(e))!=null?t:pe}static _$Ei(){if(this.hasOwnProperty(ut("elementProperties")))return;let e=oi(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ut("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ut("properties"))){let t=this.properties,i=[...ri(t),...ai(t)];for(let s of i)this.createProperty(s,t[s])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[t,i]of this.elementProperties){let s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let s of i)t.unshift(It(s))}else e!==void 0&&t.push(It(e));return t}static _$Eu(e,t){let i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$EO)!=null?t:this._$EO=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)==null||i.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var t;let e=(t=this.shadowRoot)!=null?t:this.attachShadow(this.constructor.shadowRootOptions);return de(e,this.constructor.elementStyles),e}connectedCallback(){var e,t;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostConnected)==null?void 0:s.call(i)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var a;let i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){let n=(((a=i.converter)==null?void 0:a.toAttribute)!==void 0?i.converter:Wt).toAttribute(t,i.type);this._$Em=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,t){var a,n,o;let i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){let c=i.getPropertyOptions(s),h=typeof c.converter=="function"?{fromAttribute:c.converter}:((a=c.converter)==null?void 0:a.fromAttribute)!==void 0?c.converter:Wt;this._$Em=s;let l=h.fromAttribute(t,c.type);this[s]=(o=l!=null?l:(n=this._$Ej)==null?void 0:n.get(s))!=null?o:l,this._$Em=null}}requestUpdate(e,t,i,s=!1,a){var n,o;if(e!==void 0){let c=this.constructor;if(s===!1&&(a=this[e]),i!=null||(i=c.getPropertyOptions(e)),!(((n=i.hasChanged)!=null?n:fe)(a,t)||i.useDefault&&i.reflect&&a===((o=this._$Ej)==null?void 0:o.get(e))&&!this.hasAttribute(c._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:a},n){var o,c,h;i&&!((o=this._$Ej)!=null?o:this._$Ej=new Map).has(e)&&(this._$Ej.set(e,(c=n!=null?n:t)!=null?c:this[e]),a!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&((h=this._$Eq)!=null?h:this._$Eq=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i,s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((i=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[n,o]of a){let{wrapped:c}=o,h=this[n];c!==!0||this._$AL.has(n)||h===void 0||this.C(n,void 0,o,h)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(a=>{var n;return(n=a.hostUpdate)==null?void 0:n.call(a)}),this.update(t)):this._$EM()}catch(a){throw e=!1,this._$EM(),a}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}},ge;j.elementStyles=[],j.shadowRootOptions={mode:"open"},j[ut("elementProperties")]=new Map,j[ut("finalized")]=new Map,Lt==null||Lt({ReactiveElement:j}),((ge=B.reactiveElementVersions)!=null?ge:B.reactiveElementVersions=[]).push("2.1.2");var gt=globalThis,ve=r=>r,Mt=gt.trustedTypes,be=Mt?Mt.createPolicy("lit-html",{createHTML:r=>r}):void 0,ke="$lit$",Y=`lit$${Math.random().toFixed(9).slice(2)}$`,Me="?"+Y,ci=`<${Me}>`,Z=document,ft=()=>Z.createComment(""),vt=r=>r===null||typeof r!="object"&&typeof r!="function",Zt=Array.isArray,di=r=>Zt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Vt=`[ 	
\f\r]`,mt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xe=/-->/g,$e=/>/g,G=RegExp(`>|${Vt}(?:([^\\s"'>=/]+)(${Vt}*=${Vt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ye=/'/g,we=/"/g,De=/^(?:script|style|textarea|title)$/i,Xt=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),g=Xt(1),b=Xt(2),Zi=Xt(3),X=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),_e=new WeakMap,J=Z.createTreeWalker(Z,129);function Ae(r,e){if(!Zt(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return be!==void 0?be.createHTML(e):e}var hi=(r,e)=>{let t=r.length-1,i=[],s,a=e===2?"<svg>":e===3?"<math>":"",n=mt;for(let o=0;o<t;o++){let c=r[o],h,l,d=-1,p=0;for(;p<c.length&&(n.lastIndex=p,l=n.exec(c),l!==null);)p=n.lastIndex,n===mt?l[1]==="!--"?n=xe:l[1]!==void 0?n=$e:l[2]!==void 0?(De.test(l[2])&&(s=RegExp("</"+l[2],"g")),n=G):l[3]!==void 0&&(n=G):n===G?l[0]===">"?(n=s!=null?s:mt,d=-1):l[1]===void 0?d=-2:(d=n.lastIndex-l[2].length,h=l[1],n=l[3]===void 0?G:l[3]==='"'?we:ye):n===we||n===ye?n=G:n===xe||n===$e?n=mt:(n=G,s=void 0);let u=n===G&&r[o+1].startsWith("/>")?" ":"";a+=n===mt?c+ci:d>=0?(i.push(h),c.slice(0,d)+ke+c.slice(d)+Y+u):c+Y+(d===-2?o:u)}return[Ae(r,a+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},bt=class r{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let a=0,n=0,o=e.length-1,c=this.parts,[h,l]=hi(e,t);if(this.el=r.createElement(h,i),J.currentNode=this.el.content,t===2||t===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=J.nextNode())!==null&&c.length<o;){if(s.nodeType===1){if(s.hasAttributes())for(let d of s.getAttributeNames())if(d.endsWith(ke)){let p=l[n++],u=s.getAttribute(d).split(Y),m=/([.?@])?(.*)/.exec(p);c.push({type:1,index:a,name:m[2],strings:u,ctor:m[1]==="."?Yt:m[1]==="?"?Kt:m[1]==="@"?Gt:nt}),s.removeAttribute(d)}else d.startsWith(Y)&&(c.push({type:6,index:a}),s.removeAttribute(d));if(De.test(s.tagName)){let d=s.textContent.split(Y),p=d.length-1;if(p>0){s.textContent=Mt?Mt.emptyScript:"";for(let u=0;u<p;u++)s.append(d[u],ft()),J.nextNode(),c.push({type:2,index:++a});s.append(d[p],ft())}}}else if(s.nodeType===8)if(s.data===Me)c.push({type:2,index:a});else{let d=-1;for(;(d=s.data.indexOf(Y,d+1))!==-1;)c.push({type:7,index:a}),d+=Y.length-1}a++}}static createElement(e,t){let i=Z.createElement("template");return i.innerHTML=e,i}};function st(r,e,t=r,i){var n,o,c;if(e===X)return e;let s=i!==void 0?(n=t._$Co)==null?void 0:n[i]:t._$Cl,a=vt(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==a&&((o=s==null?void 0:s._$AO)==null||o.call(s,!1),a===void 0?s=void 0:(s=new a(r),s._$AT(r,t,i)),i!==void 0?((c=t._$Co)!=null?c:t._$Co=[])[i]=s:t._$Cl=s),s!==void 0&&(e=st(r,s._$AS(r,e.values),s,i)),e}var Bt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var h;let{el:{content:t},parts:i}=this._$AD,s=((h=e==null?void 0:e.creationScope)!=null?h:Z).importNode(t,!0);J.currentNode=s;let a=J.nextNode(),n=0,o=0,c=i[0];for(;c!==void 0;){if(n===c.index){let l;c.type===2?l=new xt(a,a.nextSibling,this,e):c.type===1?l=new c.ctor(a,c.name,c.strings,this,e):c.type===6&&(l=new Jt(a,this,e)),this._$AV.push(l),c=i[++o]}n!==(c==null?void 0:c.index)&&(a=J.nextNode(),n++)}return J.currentNode=Z,s}p(e){let t=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},xt=class r{get _$AU(){var e,t;return(t=(e=this._$AM)==null?void 0:e._$AU)!=null?t:this._$Cv}constructor(e,t,i,s){var a;this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(a=s==null?void 0:s.isConnected)!=null?a:!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=st(this,e,t),vt(e)?e===v||e==null||e===""?(this._$AH!==v&&this._$AR(),this._$AH=v):e!==this._$AH&&e!==X&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):di(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==v&&vt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Z.createTextNode(e)),this._$AH=e}$(e){var a;let{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=bt.createElement(Ae(i.h,i.h[0]),this.options)),i);if(((a=this._$AH)==null?void 0:a._$AD)===s)this._$AH.p(t);else{let n=new Bt(s,this),o=n.u(this.options);n.p(t),this.T(o),this._$AH=n}}_$AC(e){let t=_e.get(e.strings);return t===void 0&&_e.set(e.strings,t=new bt(e)),t}k(e){Zt(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,s=0;for(let a of e)s===t.length?t.push(i=new r(this.O(ft()),this.O(ft()),this,this.options)):i=t[s],i._$AI(a),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e!==this._$AB;){let s=ve(e).nextSibling;ve(e).remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},nt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,a){this.type=1,this._$AH=v,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=v}_$AI(e,t=this,i,s){let a=this.strings,n=!1;if(a===void 0)e=st(this,e,t,0),n=!vt(e)||e!==this._$AH&&e!==X,n&&(this._$AH=e);else{let o=e,c,h;for(e=a[0],c=0;c<a.length-1;c++)h=st(this,o[i+c],t,c),h===X&&(h=this._$AH[c]),n||(n=!vt(h)||h!==this._$AH[c]),h===v?e=v:e!==v&&(e+=(h!=null?h:"")+a[c+1]),this._$AH[c]=h}n&&!s&&this.j(e)}j(e){e===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},Yt=class extends nt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===v?void 0:e}},Kt=class extends nt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==v)}},Gt=class extends nt{constructor(e,t,i,s,a){super(e,t,i,s,a),this.type=5}_$AI(e,t=this){var n;if((e=(n=st(this,e,t,0))!=null?n:v)===X)return;let i=this._$AH,s=e===v&&i!==v||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,a=e!==v&&(i===v||s);s&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)==null?void 0:t.host)!=null?i:this.element,e):this._$AH.handleEvent(e)}},Jt=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){st(this,e)}};var jt=gt.litHtmlPolyfillSupport,Se;jt==null||jt(bt,xt),((Se=gt.litHtmlVersions)!=null?Se:gt.litHtmlVersions=[]).push("3.3.3");var Re=(r,e,t)=>{var a,n;let i=(a=t==null?void 0:t.renderBefore)!=null?a:e,s=i._$litPart$;if(s===void 0){let o=(n=t==null?void 0:t.renderBefore)!=null?n:null;i._$litPart$=s=new xt(e.insertBefore(ft(),o),o,void 0,t!=null?t:{})}return s._$AI(r),s};var q=globalThis,H=class extends j{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;let e=super.createRenderRoot();return(i=(t=this.renderOptions).renderBefore)!=null||(t.renderBefore=e.firstChild),e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Re(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return X}},Te;H._$litElement$=!0,H.finalized=!0,(Te=q.litElementHydrateSupport)==null||Te.call(q,{LitElement:H});var qt=q.litElementPolyfillSupport;qt==null||qt({LitElement:H});var Ce;((Ce=q.litElementVersions)!=null?Ce:q.litElementVersions=[]).push("4.2.2");var $t=class{constructor(e,t,i){this.host=e;this.type=t;this.entity=i;this.connected=!1;e.addController(this)}hostConnected(){this.connected=!0,this.sync()}hostDisconnected(){this.connected=!1,this.stop()}hostUpdated(){this.sync()}sync(){let e=this.host.hass,t=this.entity();if(!this.connected||!e||!t)return;let i=`${t}|${this.type}`;i!==this.subscribedKey&&(this.stop(),this.subscribedKey=i,this.error=void 0,this.unsub=e.connection.subscribeMessage(s=>{var a;this.forecast=(a=s.forecast)!=null?a:[],this.host.requestUpdate()},{type:"weather/subscribe_forecast",forecast_type:this.type,entity_id:t}),this.unsub.catch(s=>{var a;this.error=(a=s==null?void 0:s.message)!=null?a:String(s),this.subscribedKey=void 0,this.host.requestUpdate()}))}stop(){let e=this.unsub;this.unsub=void 0,this.subscribedKey=void 0,e==null||e.then(t=>t()).catch(()=>{})}};var Q=new Map;function rt(r,e){let t=e.ids.filter(Boolean);if(!t.length)return Promise.resolve({});let i=JSON.stringify([t,e.start.getTime(),e.end.getTime(),e.period,e.types]),s=Date.now(),a=Q.get(i);if(a&&a.expires>s)return a.promise;let n=r.callWS({type:"recorder/statistics_during_period",start_time:e.start.toISOString(),end_time:e.end.toISOString(),statistic_ids:t,period:e.period,types:e.types}).then(pi),o={promise:n,expires:e.end.getTime()<s?1/0:s+3e5};return Q.set(i,o),n.catch(()=>Q.get(i)===o&&Q.delete(i)),Q.size>60&&Q.delete(Q.keys().next().value),n}function pi(r){for(let e of Object.values(r))for(let t of e)typeof t.start!="number"&&(t.start=new Date(t.start).getTime()),typeof t.end!="number"&&(t.end=new Date(t.end).getTime());return r}var R=(r,e)=>g`<div class="head"><ha-icon icon=${r}></ha-icon><span>${e}</span></div>`,at=P`
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
`;var L=Math.PI/180;function Qt(r,e,t){let i=new Date(r.getFullYear(),r.getMonth(),r.getDate(),12),a=Math.round((i.getTime()-Date.UTC(2e3,0,1,12))/864e5)-t/360,n=(357.5291+.98560028*a)%360,o=1.9148*Math.sin(n*L)+.02*Math.sin(2*n*L)+3e-4*Math.sin(3*n*L),c=(n+o+180+102.9372)%360,h=a+.0053*Math.sin(n*L)-.0069*Math.sin(2*c*L),l=Math.asin(Math.sin(c*L)*Math.sin(23.4397*L)),d=(Math.sin(-.833*L)-Math.sin(e*L)*Math.sin(l))/(Math.cos(e*L)*Math.cos(l));if(d<-1||d>1)return;let p=Math.acos(d)/L/360,u=m=>new Date(Date.UTC(2e3,0,1,12)+m*864e5);return{rise:u(h-p),set:u(h+p),noon:u(h)}}var tt=29.530588853,ui=Date.UTC(2e3,0,6,18,14);function Ee(r){let t=((r.getTime()-ui)/864e5%tt+tt)%tt,i=(1-Math.cos(t/tt*2*Math.PI))/2,s=(tt/2-t+tt)%tt;return{age:t,illumination:i,nextFull:new Date(r.getTime()+s*864e5)}}var mi={"clear-night":"Klar",cloudy:"Bew\xF6lkt",exceptional:"Unwetter",fog:"Nebel",hail:"Hagel",lightning:"Gewitter","lightning-rainy":"Gewitter mit Regen",partlycloudy:"Teilweise bew\xF6lkt",pouring:"Starkregen",rainy:"Regnerisch",snowy:"Schnee","snowy-rainy":"Schneeregen",sunny:"Sonnig",windy:"Windig","windy-variant":"Windig und bew\xF6lkt"};function yt(r){return r&&mi[r]||"\u2013"}var Pe={sunny:"47,128,237",partlycloudy:"70,130,200",cloudy:"120,135,150","windy-variant":"120,135,150",rainy:"80,105,135",pouring:"70,90,120",hail:"90,100,125",snowy:"160,180,205","snowy-rainy":"130,150,175",fog:"150,155,160",lightning:"85,80,125","lightning-rainy":"85,80,125",exceptional:"150,70,70",windy:"100,140,170"},gi="35,50,100";function ze(r,e){return`rgba(${e&&(r==="sunny"||r==="clear-night"||r==="partlycloudy")?gi:r&&Pe[r]||Pe.cloudy},${e?.35:.45})`}var fi={new_moon:"Neumond",waxing_crescent:"Zunehmende Sichel",first_quarter:"Erstes Viertel",waxing_gibbous:"Zunehmender Mond",full_moon:"Vollmond",waning_gibbous:"Abnehmender Mond",last_quarter:"Letztes Viertel",waning_crescent:"Abnehmende Sichel"};function Ne(r){return r&&fi[r]||"\u2013"}var Fe=new Map;function M(r,e=1){if(r==null||!isFinite(r))return"\u2013";let t=Fe.get(e);return t||(t=new Intl.NumberFormat("de-DE",{minimumFractionDigits:e,maximumFractionDigits:e}),Fe.set(e,t)),t.format(r)}var T=(r,e=0)=>r==null?"\u2013":`${M(r,e)}\xB0`,K=(r,e=1)=>`${M(r,e)} l/m\xB2`;function C(r,e){let t=e?r==null?void 0:r.states[e]:void 0;if(!t)return;let i=parseFloat(t.state);return isFinite(i)?i:void 0}var vi=["So","Mo","Di","Mi","Do","Fr","Sa"];function He(r,e=new Date){return r.toDateString()===e.toDateString()?"Heute":vi[r.getDay()]}function Oe(r){return`${String(r.getHours()).padStart(2,"0")} Uhr`}function Dt(r){return r.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}var bi=["N","NO","O","SO","S","SW","W","NW"];function At(r){return r==null||!isFinite(r)?"\u2013":bi[Math.round((r%360+360)%360/45)%8]}function Ue(r){return g`<div class="tiles">
    ${$i(r)} ${xi(r)} ${yi(r)} ${wi(r)} ${_i(r)} ${ki(r)} ${Mi(r)} ${Di(r)}
  </div>`}function xi({hass:r,config:e}){var n;let t=(n=e.sensors)!=null?n:{},i=C(r,t.feels_like);if(i==null)return v;let s=C(r,t.temperature),a=s==null?"":i<s-1?"Durch den Wind f\xFChlt es sich k\xE4lter an.":i>s+1?"Durch die Luftfeuchtigkeit f\xFChlt es sich w\xE4rmer an.":"\xC4hnlich wie die tats\xE4chliche Temperatur.";return g`<section class="card tile">${R("mdi:thermometer-lines","Gef\xFChlt")}
    <div class="val">${T(i)}</div><div class="txt">${a}</div></section>`}function $i({hass:r,config:e}){var o;let t=(o=e.sensors)!=null?o:{},i=C(r,t.wind_speed);if(i==null)return v;let s=C(r,t.wind_gust),a=C(r,t.wind_direction),n=[...Array(72)].map((c,h)=>{let l=h*5*Math.PI/180,d=h%18===0?38:41;return b`<line x1=${50+Math.sin(l)*d} y1=${50-Math.cos(l)*d} x2=${50+Math.sin(l)*45} y2=${50-Math.cos(l)*45} class=${h%18===0?"tk major":"tk"}/>`});return g`<section class="card tile wide2">${R("mdi:weather-windy","Wind")}
    <div class="wind">
      <div class="rows">
        <div class="row"><span>Wind</span><b>${M(i,0)} km/h</b></div>
        ${s!=null?g`<div class="row"><span>Böen</span><b>${M(s,0)} km/h</b></div>`:v}
        ${a!=null?g`<div class="row"><span>Richtung</span><b>${M(a,0)}° ${At(a)}</b></div>`:v}
      </div>
      <svg class="compass" viewBox="0 0 100 100">
        ${n}
        ${["N","O","S","W"].map((c,h)=>b`<text x=${50+Math.sin(h*Math.PI/2)*30} y=${54-Math.cos(h*Math.PI/2)*30} class="cl">${c}</text>`)}
        ${a!=null?b`<g transform="rotate(${a+180} 50 50)">
          <line x1="50" y1="88" x2="50" y2="18" class="arrow"/><path d="M50 10l-6 11h12z" class="arrowhead"/>
          <circle cx="50" cy="88" r="3.5" class="arrowhead"/></g>`:v}
        <circle cx="50" cy="50" r="17" class="hub"/>
        <text x="50" y="50" class="cv">${M(i,0)}</text><text x="50" y="60" class="cu">km/h</text>
      </svg>
    </div></section>`}function yi({hass:r,config:e,hourly:t,recent:i}){var h;let s=(h=e.sensors)!=null?h:{};if(!s.rain_total&&!t)return v;let a=s.rain_total&&(i!=null&&i[s.rain_total])?i[s.rain_total].reduce((l,d)=>{var p;return l+((p=d.change)!=null?p:0)},0):void 0,n=Date.now(),o=t==null?void 0:t.filter(l=>{let d=new Date(l.datetime).getTime();return d>=n-36e5&&d<n+23*36e5}).reduce((l,d)=>{var p;return l+((p=d.precipitation)!=null?p:0)},0),c=C(r,s.rain_rate);return g`<section class="card tile">${R("mdi:water","Niederschlag")}
    <div class="val">${a!=null?K(a):"\u2013"}</div>
    <div class="lbl">in den letzten 24 Std.</div>
    <div class="txt">${c?g`Aktuell ${M(c)} l/m² pro Std.<br>`:v}
      ${o!=null?`${K(o)} in den n\xE4chsten 24 Std. erwartet.`:""}</div></section>`}function wi({hass:r,config:e,recent:t}){var d;let i=(d=e.sensors)!=null?d:{},s=C(r,i.pressure);if(s==null)return v;let a=i.pressure?t==null?void 0:t[i.pressure]:void 0,n=a&&a.length>=3?a[a.length-3].mean:void 0,o=n!=null?s-n:void 0,c=o==null?"":o>1?"steigend":o<-1?"fallend":"gleichbleibend",h=o==null?0:Math.max(-1,Math.min(1,o/4))*120,l=[...Array(41)].map((p,u)=>{let m=(-120+u*6)*Math.PI/180;return b`<line x1=${50+Math.sin(m)*36} y1=${54-Math.cos(m)*36} x2=${50+Math.sin(m)*44} y2=${54-Math.cos(m)*44} class="tk"/>`});return g`<section class="card tile">${R("mdi:gauge","Luftdruck")}
    <svg class="gauge" viewBox="0 0 100 92">
      ${l}
      <g transform="rotate(${h} 50 54)"><line x1="50" y1="6" x2="50" y2="20" class="needle"/></g>
      <text x="50" y="52" class="gv">${M(s,0)}</text><text x="50" y="64" class="gu">hPa</text>
      <text x="16" y="90" class="gu">−</text><text x="84" y="90" class="gu">+</text>
    </svg>
    <div class="txt">${c?g`3 Std.: ${c} (${o>0?"+":""}${M(o,1)} hPa)`:v}</div></section>`}function _i({hass:r,config:e}){var a;let t=(a=e.sensors)!=null?a:{},i=C(r,t.humidity);if(i==null)return v;let s=C(r,t.dewpoint);return g`<section class="card tile">${R("mdi:water-percent","Feuchtigkeit")}
    <div class="val">${M(i,0)} %</div>
    <div class="txt">${s!=null?`Der Taupunkt liegt derzeit bei ${T(s)}.`:""}</div></section>`}var Si=[[3,"Niedrig"],[6,"Mittel"],[8,"Hoch"],[11,"Sehr hoch"],[99,"Extrem"]];function ki({hass:r,config:e}){var n;let t=(n=e.sensors)!=null?n:{},i=C(r,t.uv);if(i==null)return v;let s=C(r,t.solar),a=Si.find(([o])=>i<o)[1];return g`<section class="card tile">${R("mdi:sun-wireless","UV-Index")}
    <div class="val">${M(i,0)}</div><div class="lbl">${a}</div>
    <div class="uvbar"><i style="left:${Math.min(100,i/11*100)}%"></i></div>
    <div class="txt">${s!=null?`Sonneneinstrahlung ${M(s,0)} W/m\xB2`:""}</div></section>`}function Mi({hass:r,config:e}){var U,z,x,S,E,N,F,it,oe;let t=(U=r.states[e.weather])==null?void 0:U.attributes,i=e.sun?r.states[e.sun]:void 0,s=(x=t==null?void 0:t.latitude)!=null?x:(z=r.config)==null?void 0:z.latitude,a=(E=t==null?void 0:t.longitude)!=null?E:(S=r.config)==null?void 0:S.longitude;if(s==null||a==null)return v;let n=new Date,o=Qt(n,s,a);if(!o)return v;let c=V=>V&&new Date(V).toDateString()===n.toDateString()?new Date(V):void 0,h=(N=c(i==null?void 0:i.attributes.next_rising))!=null?N:o.rise,l=(F=c(i==null?void 0:i.attributes.next_setting))!=null?F:o.set,d=n<l,p=n<h?["Sonnenaufgang",h]:d?["Sonnenuntergang",l]:["Sonnenaufgang",(oe=(it=Qt(new Date(n.getTime()+864e5),s,a))==null?void 0:it.rise)!=null?oe:h],u=new Date(n.getFullYear(),n.getMonth(),n.getDate()).getTime(),m=V=>(V.getTime()-u)/864e5,$=(m(h)+m(l))/2,_=m(l)-m(h),f=V=>Math.cos(2*Math.PI*(V-$)),y=Math.cos(Math.PI*_),w=V=>34-V*22,k=[...Array(49)].map((V,Ot)=>`${Ot?"L":"M"}${Ot/48*100},${w(f(Ot/48))}`).join(" "),O=m(n),A=n>=h&&n<l;return g`<section class="card tile">${R(A?"mdi:weather-sunset-down":"mdi:weather-sunset-up",p[0])}
    <div class="val">${Dt(p[1])}</div>
    <div class="sunarc">
      <svg viewBox="0 0 100 60" preserveAspectRatio="none">
        <path d=${k} class="sunpath"/>
        <line x1="0" x2="100" y1=${w(y)} y2=${w(y)} class="hz"/>
      </svg>
      <!-- Punkt als HTML, sonst verzerrt preserveAspectRatio=none ihn zur Ellipse -->
      <i class=${A?"sundot":"sundot down"} style="left:${O*100}%;top:${w(f(O))/60*100}%"></i>
    </div>
    <div class="txt">${p[0]==="Sonnenuntergang"?`Sonnenaufgang: ${Dt(h)}`:`Sonnenuntergang: ${Dt(l)}`}</div>
  </section>`}function Di({hass:r,config:e}){var n;let t=e.moon?(n=r.states[e.moon])==null?void 0:n.state:void 0,i=Ee(new Date),s=Math.round((i.nextFull.getTime()-Date.now())/864e5),a=i.illumination;return g`<section class="card tile wide2">${R("mdi:moon-waxing-gibbous",t?Ne(t):"Mond")}
    <div class="moon">
      <div>
        <div class="row"><span>Beleuchtung</span><b>${Math.round(a*100)} %</b></div>
        <div class="row"><span>Nächster Vollmond</span><b>${s<=0?"heute":s===1?"morgen":`in ${s} Tg.`}</b></div>
      </div>
      ${Ri(a,i.age<29.530588853/2)}
    </div></section>`}var Ai=[[-.55,.05,.3,.45],[-.3,-.35,.28,.22],[.15,-.38,.16,.14],[.3,-.1,.2,.16],[.66,-.3,.1,.09],[.55,.15,.12,.17],[.35,.3,.08,.08],[-.2,.35,.18,.13],[-.48,.42,.09,.08],[-.05,-.68,.35,.07],[-.15,-.08,.14,.1]];function Ri(r,e){let a=`M50 30 A20 20 0 0 0 50 70 A${20*Math.abs(1-2*r)} 20 0 0 ${r>.5?1:0} 50 30Z`;return b`<svg class="moonimg" viewBox="28 28 44 44" aria-hidden="true">
    <defs>
      <radialGradient id="mg" cx="0.42" cy="0.38" r="0.65">
        <stop offset="0" stop-color="#f4f3ee"/><stop offset="0.75" stop-color="#d4d3cc"/><stop offset="1" stop-color="#a9a8a2"/>
      </radialGradient>
      <filter id="mb" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1.1"/></filter>
      <filter id="ms" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="0.5"/></filter>
      <clipPath id="mc"><circle cx=${50} cy=${50} r=${20}/></clipPath>
    </defs>
    <g clip-path="url(#mc)">
      <circle cx=${50} cy=${50} r=${20} fill="url(#mg)"/>
      <g filter="url(#mb)" fill="#80838a" fill-opacity="0.5">
        ${Ai.map(([n,o,c,h])=>b`<ellipse cx=${50+n*20} cy=${50+o*20} rx=${c*20} ry=${h*20}/>`)}
      </g>
      <circle cx=${50-.12*20} cy=${50+.72*20} r="0.9" fill="#fff" fill-opacity="0.8"/>
      <circle cx=${50-.33*20} cy=${50-.05*20} r="0.7" fill="#fff" fill-opacity="0.6"/>
      ${r<.995?b`<path d=${a} fill="#0a0c12" fill-opacity="0.86" filter="url(#ms)"
        transform=${e?"":"translate(100 0) scale(-1 1)"}/>`:v}
    </g>
  </svg>`}var Ie=P`
  /* so viele Spalten wie passen (Handy 2, Tablet/PC 3–6) → keine riesigen, halbleeren Kacheln */
  .tiles { display: grid; grid-template-columns: repeat(auto-fill, minmax(165px, 1fr)); gap: 12px; }
  .tile { display: flex; flex-direction: column; min-height: 130px; }
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

  .sunarc { position: relative; height: 56px; margin-top: 6px; }
  .sunarc svg { width: 100%; height: 100%; display: block; }
  .sunpath { fill: none; stroke: var(--wa-text2); stroke-width: 1.5; vector-effect: non-scaling-stroke; opacity: 0.7; }
  .hz { stroke: var(--wa-text2); stroke-width: 1; vector-effect: non-scaling-stroke; opacity: 0.5; }
  .sundot { position: absolute; width: 10px; height: 10px; margin: -5px 0 0 -5px; border-radius: 50%; background: #ffd84d; }
  .sundot.down { background: var(--wa-text2); }

  .moon { display: flex; align-items: center; gap: 12px; flex: 1; }
  .moon .moonimg { width: 92px; height: 92px; flex: none; }
  .moon > div { flex: 1; min-width: 0; }
`;var Ti="M18 46a10 10 0 0 1 0-20a14 14 0 0 1 27-3a11.5 11.5 0 0 1 1 23z",Le=(r=32,e=32,t=11)=>b`
  <g class="sun">
    <circle cx=${r} cy=${e} r=${t} fill="#FFD84D"/>
    ${[0,45,90,135,180,225,270,315].map(i=>{let s=i*Math.PI/180,a=r+Math.cos(s)*(t+4),n=e+Math.sin(s)*(t+4),o=r+Math.cos(s)*(t+9),c=e+Math.sin(s)*(t+9);return b`<line x1=${a} y1=${n} x2=${o} y2=${c} stroke="#FFD84D" stroke-width="3.5" stroke-linecap="round"/>`})}
  </g>`,te=(r=0,e=0,t=1)=>b`
  <path class="mo" transform="translate(${r} ${e}) scale(${t})"
    d="M40 10a20 20 0 1 0 14 34A17 17 0 0 1 40 10z"/>`,I=(r=0,e=0,t=1,i="c1")=>b`
  <path transform="translate(${r} ${e}) scale(${t})" d=${Ti} class=${i}/>`,Rt=r=>b`
  ${[...Array(r)].map((e,t)=>{let i=22+t*(20/Math.max(1,r-1));return b`<line x1=${i} y1="50" x2=${i-3} y2="58" stroke="#4FB3FF" stroke-width="3" stroke-linecap="round"/>`})}`,We=b`${[22,32,42].map((r,e)=>b`<circle cx=${r} cy=${e%2?57:53} r="2.6" class="fl"/>`)}`,Ve=b`<path d="M34 44l-7 10h6l-3 9l10-13h-6l3-6z" fill="#FFD84D"/>`,Ci=b`${[40,47,54].map((r,e)=>b`<line x1=${12+e*3} y1=${r} x2=${52-e*2} y2=${r} class="ln" stroke-width="3.5" stroke-linecap="round"/>`)}`;function wt(r,e=!1){let t;switch(r){case"sunny":t=e?te(2,6,.95):Le();break;case"clear-night":t=te(2,6,.95);break;case"partlycloudy":t=b`${e?te(10,-2,.7):Le(42,22,9)}${I(-4,6,1)}`;break;case"cloudy":case"windy-variant":t=b`${I(10,-4,.75,"c2")}${I(-4,6)}`;break;case"fog":t=b`${I(0,-8,.95,"c2")}${Ci}`;break;case"rainy":t=b`${I(0,-6)}${Rt(3)}`;break;case"pouring":t=b`${I(0,-6,1,"c2")}${Rt(5)}`;break;case"hail":t=b`${I(0,-6,1,"c2")}${We}`;break;case"snowy":t=b`${I(0,-6)}${We}`;break;case"snowy-rainy":t=b`${I(0,-6)}${Rt(2)}<circle cx="32" cy="55" r="2.6" class="fl"/>`;break;case"lightning":t=b`${I(0,-8,1,"c2")}${Ve}`;break;case"lightning-rainy":case"exceptional":t=b`${I(0,-8,1,"c2")}${Ve}${Rt(2)}`;break;case"windy":t=b`${[24,32,40].map((i,s)=>b`<path d="M10 ${i}h${30-s*6}a6 6 0 1 0-6-6" fill="none" class="ln" stroke-width="3.5" stroke-linecap="round"/>`)}`;break;default:t=I(0,0,1,"c2")}return b`<svg class="wicon" viewBox="0 0 64 64" aria-hidden="true">${t}</svg>`}function Tt(r,e,t=Date.now()){let i=(r!=null?r:[]).filter(n=>n.temperature!=null).map(n=>({t:new Date(n.datetime).getTime(),v:n.temperature})),s=Ei(i,t),a=e!=null&&s!=null?e-s:0;return(n,o)=>{if(o==null||!a||n<=t)return o;let c=1-(n-t)/(3*36e5);return c>0?o+a*c:o}}function Ei(r,e){for(let t=0;t<r.length-1;t++){let i=r[t],s=r[t+1];if(i.t<=e&&e<=s.t)return i.v+(s.v-i.v)*(e-i.t)/(s.t-i.t||1)}if(r.length&&r[0].t>e&&r[0].t-e<=36e5)return r[0].v}var ot=class extends H{constructor(){super(...arguments);this._tab="forecast";this._wide=!1;this._metric="temp";this.hourly=new $t(this,"hourly",()=>{var t;return(t=this._config)==null?void 0:t.weather});this.daily=new $t(this,"daily",()=>{var t;return(t=this._config)==null?void 0:t.weather})}setConfig(t){if(!(t!=null&&t.weather))throw new Error("`weather:` fehlt (z. B. weather.weather_fusion_ai_kresslingweg)");this._config={...t,sensors:{...t.sensors}}}static getStubConfig(t){var i;return{weather:(i=Object.keys(t.states).find(s=>s.startsWith("weather.")))!=null?i:""}}getCardSize(){return 12}getGridOptions(){return{columns:"full",rows:"auto"}}connectedCallback(){var t;super.connectedCallback(),(t=this._ro)!=null||(this._ro=new ResizeObserver(i=>{let s=i[0].contentRect.width>=820;s!==this._wide&&(this._wide=s)})),this._ro.observe(this)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._ro)==null||t.disconnect()}shouldUpdate(t){if(t.size>1||!t.has("hass"))return!0;let i=t.get("hass");return!i||!this.hass||!this._config?!0:this.watchedIds().some(s=>i.states[s]!==this.hass.states[s])}watchedIds(){var i;let t=this._config;return[t.weather,t.sun,t.moon,...Object.values((i=t.sensors)!=null?i:{})].filter(Boolean)}updated(){this._tab==="forecast"&&this.loadRecent()}loadRecent(){var n;let t=(n=this._config.sensors)!=null?n:{},i=[t.rain_total,t.pressure].filter(Boolean);if(!this.hass||!i.length)return;let s=Math.ceil(Date.now()/3e5)*3e5,a=String(s);a!==this._recentKey&&(this._recentKey=a,rt(this.hass,{ids:i,start:new Date(s-864e5),end:new Date(s),period:"hour",types:["mean","change"]}).then(o=>a===this._recentKey&&(this._recent=o),()=>this._recentKey=void 0))}openDetail(t,i=this._metric){this._metric=i,this._detail=t}render(){var o,c,h,l,d;if(!this._config||!this.hass)return v;let t=this.hass.states[this._config.weather];if(!t)return g`<div class="warn">Entität ${this._config.weather} nicht gefunden.</div>`;let i=this._config.sun?((o=this.hass.states[this._config.sun])==null?void 0:o.state)==="below_horizon":!1,s=(c=this._config.sensors)!=null?c:{},a=(h=C(this.hass,s.temperature))!=null?h:t.attributes.temperature,n=(l=this.daily.forecast)==null?void 0:l[0];return g`
      <div class="app ${this._wide?"wide":""} ${(d=this.hass.themes)!=null&&d.darkMode?"dark":""} ${this._config.layout==="page"?"page":""}"
        style="--wa-tint:${ze(t.state,i)}">
        <header>
          ${this._config.name?g`<div class="place">${this._config.name}</div>`:v}
          <div class="now">${T(a)}</div>
          <div class="cond">${yt(t.state)}</div>
          ${n?g`<div class="hl">H: ${T(n.temperature)}  T: ${T(n.templow)}</div>`:v}
        </header>

        <nav class="tabs" role="tablist">
          ${["forecast","history"].map(p=>g`
            <button role="tab" aria-selected=${this._tab===p} class=${this._tab===p?"on":""}
              @click=${()=>this._tab=p}>
              <ha-icon icon=${p==="forecast"?"mdi:calendar-arrow-right":"mdi:chart-line"}></ha-icon>
              ${p==="forecast"?"Vorhersage":"Historie"}
            </button>`)}
        </nav>

        <main>${this._tab==="forecast"?this.renderForecast(a,i):g`<wetter-app-history .hass=${this.hass} .config=${this._config} .wide=${this._wide}></wetter-app-history>`}</main>
      </div>
    `}renderForecast(t,i){var a,n;let s=(a=this.hourly.error)!=null?a:this.daily.error;return g`
      ${s?g`<div class="warn">Vorhersage nicht verfügbar: ${s}</div>`:v}
      <div class="cols">
        <section class="card">${this.renderHourly(t,i)}</section>
        <section class="card">${this.renderDaily(t)}</section>
      </div>
      ${Ue({hass:this.hass,config:this._config,hourly:this.hourly.forecast,recent:this._recent})}
      ${this._detail!=null&&this.daily.forecast?g`<wetter-app-day-detail .hass=${this.hass} .config=${this._config} .hourly=${(n=this.hourly.forecast)!=null?n:[]}
            .daily=${this.daily.forecast} .index=${this._detail} .metric=${this._metric}
            @close=${()=>this._detail=void 0}
            @select=${o=>this._detail=o.detail.index}
            @metric=${o=>this._metric=o.detail.metric}></wetter-app-day-detail>`:v}
    `}renderHourly(t,i){let s=this.hourly.forecast;if(!s)return g`<div class="loading">Lade Stundenvorhersage …</div>`;let a=Date.now()-36e5,n=s.filter(c=>new Date(c.datetime).getTime()>a).slice(0,25),o=Tt(s,t);return g`
      ${R("mdi:clock-outline","St\xFCndlich")}
      <div class="hours">
        ${n.map((c,h)=>{var l;return g`
          <div class="hr" @click=${()=>this.openDetail(0,"temp")}>
            <div class="t">${h===0?"Jetzt":Oe(new Date(c.datetime))}</div>
            ${wt(c.condition,h===0?i:c.is_daytime===!1)}
            <div class="p">${((l=c.precipitation_probability)!=null?l:0)>=20?`${Math.round(c.precipitation_probability)} %`:""}</div>
            <div class="v">${T(h===0?t!=null?t:c.temperature:o(new Date(c.datetime).getTime(),c.temperature))}</div>
          </div>`})}
      </div>
    `}renderDaily(t){let i=this.daily.forecast;if(!i)return g`<div class="loading">Lade Tagesvorhersage …</div>`;let s=i.slice(0,10),a=Math.min(...s.map(h=>{var l,d;return(d=(l=h.templow)!=null?l:h.temperature)!=null?d:99})),n=Math.max(...s.map(h=>{var l;return(l=h.temperature)!=null?l:-99})),o=Math.max(1,n-a),c=h=>(h-a)/o*100;return g`
      ${R("mdi:calendar-week",`${s.length}-Tage-Vorhersage`)}
      ${s.map((h,l)=>{var $,_,f,y;let d=(_=($=h.templow)!=null?$:h.temperature)!=null?_:a,p=(f=h.temperature)!=null?f:d,u=Math.max(.5,c(p)-c(d)),m=`background-size:${100/u*100}% 100%;background-position:${u>=100?0:c(d)/(100-u)*100}% 0`;return g`
          <div class="day" role="button" tabindex="0" @click=${()=>this.openDetail(l)}
            @keydown=${w=>w.key==="Enter"&&this.openDetail(l)}>
            <div class="wd">${He(new Date(h.datetime))}</div>
            <div class="ic">
              ${wt(h.condition)}
              <span class="p">${((y=h.precipitation_probability)!=null?y:0)>=20?`${Math.round(h.precipitation_probability)} %`:""}</span>
            </div>
            <div class="lo">${T(d)}</div>
            <div class="bar">
              <div class="fill" style="left:${c(d)}%;right:${100-c(p)}%;${m}"></div>
              ${l===0&&t!=null?g`<div class="dot" style="left:${Math.min(100,Math.max(0,c(t)))}%"></div>`:v}
            </div>
            <div class="hi">${T(p)}</div>
          </div>`})}
    `}};ot.properties={hass:{attribute:!1},_config:{state:!0},_tab:{state:!0},_wide:{state:!0},_detail:{state:!0},_metric:{state:!0},_recent:{state:!0}},ot.styles=[at,Ie,P`
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
      .day, .hr { cursor: pointer; }
      .hr { border-radius: 8px; }
      .day:hover, .hr:hover { background: rgba(127, 127, 127, 0.08); }
      .wd { font-size: 15px; font-weight: 500; }
      /* feste Höhe → alle Tageszeilen gleich hoch, egal ob Regen-% darunter steht */
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

    `];var D={l:6,r:38,t:18,b:22},ct=class extends H{constructor(){super(...arguments);this.start=0;this.end=0;this.series=[];this.ticks=[];this.markers=[];this.height=200;this.yUnit="";this.rightUnit="";this.timeFormat=t=>new Date(t).toLocaleString("de-DE");this._w=0}connectedCallback(){var t;super.connectedCallback(),(t=this._ro)!=null||(this._ro=new ResizeObserver(i=>{let s=Math.round(i[0].contentRect.width);s&&s!==this._w&&(this._w=s)})),this._ro.observe(this)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._ro)==null||t.disconnect()}willUpdate(t){(t.has("series")||t.has("start"))&&(this._hover=void 0)}x(t){let i=Math.max(1,this.end-this.start);return D.l+(t-this.start)/i*(this._w-D.l-D.r)}scale(t){var l;let i=[];for(let d of this.series)if(((l=d.axis)!=null?l:"left")===t){for(let p of d.points)p.v!=null&&i.push(p.v),p.v2!=null&&i.push(p.v2);d.type==="bar"&&i.push(0)}let s=t==="left"?this.yMin:0,a=t==="left"?this.yMax:this.rightMax;s==null&&(s=i.length?Math.min(...i):0),a==null&&(a=i.length?Math.max(...i):1),a-s<1e-9&&(a=s+1);let n=zi((a-s)/4);t==="left"&&this.yMin==null&&(s=Math.floor(s/n)*n),t==="left"&&this.yMax==null&&(a=Math.ceil(a/n)*n),t==="right"&&this.rightMax==null&&(a=Math.ceil(a/n)*n);let o=this.height-D.t-D.b,c=d=>D.t+o-(d-s)/(a-s)*o,h=[];for(let d=s;d<=a+n/1e3;d+=n)h.push(Math.round(d*1e6)/1e6);return{y:c,ticks:h,lo:s,hi:a}}onPointer(t){let i=t.currentTarget.getBoundingClientRect(),s=t.clientX-i.left,a=this.start+(s-D.l)/(this._w-D.l-D.r)*(this.end-this.start),n;for(let o of this.series)for(let c of o.points){if(c.v==null)continue;let h=Ct(o,c);(n==null||Math.abs(h-a)<Math.abs(n-a))&&(n=h)}this._hover=n}render(){var h;let t=this._w;if(!t||this.end<=this.start)return g`<div style="height:${this.height}px"></div>`;let i=this.scale("left"),a=this.series.some(l=>l.axis==="right")?this.scale("right"):void 0,n=this.height-D.b,o=[];this.now&&this.now>this.start&&this.now<this.end&&o.push(b`<rect x=${D.l} y=${D.t} width=${this.x(this.now)-D.l} height=${n-D.t} class="past"/>`);for(let l of i.ticks){let d=i.y(l);o.push(b`<line x1=${D.l} x2=${t-D.r} y1=${d} y2=${d} class="grid"/>`),o.push(b`<text x=${t-D.r+6} y=${d+4} class="ylab">${je(l)}${this.yUnit}</text>`)}if(a){let l=this.series.find(d=>d.axis==="right").color;for(let d of a.ticks)d!==0&&o.push(b`<text x=${D.l+3} y=${a.y(d)-3} class="rlab" style="fill:${l}">${je(d)}${this.rightUnit}</text>`)}for(let l of this.ticks){let d=this.x(l.t);d<D.l-1||d>t-D.r+1||(o.push(b`<line x1=${d} x2=${d} y1=${D.t} y2=${n} class="vgrid"/>`),o.push(b`<text x=${d+3} y=${this.height-6} class="xlab">${l.label}</text>`))}this.series.forEach((l,d)=>{var $,_;let p=l.axis==="right"&&a?a:i,u=l.points.filter(f=>f.v!=null).sort((f,y)=>f.t-y.t);if(!u.length)return;if(l.type==="bar"||l.type==="range"){let f=($=l.barWidth)!=null?$:u.length>1?u[1].t-u[0].t:(this.end-this.start)/24,y=p.y(Math.max(0,p.lo));for(let w of u){let k=w.t2!=null?w.t2-w.t:f,O=Math.max(1.5,Math.min(14,(this.x(this.start+k)-this.x(this.start))*.65)),A=this.x(w.t+k/2),U=p.y(w.v),z=l.type==="range"?p.y((_=w.v2)!=null?_:w.v):y,x=Math.max(l.type==="range"?O:.5,Math.abs(z-U)),S=Math.min(U,z)-(x-Math.abs(z-U))/2;o.push(b`<rect x=${A-O/2} y=${S} width=${O} height=${x} rx=${l.type==="range"?O/2:2} style="fill:${l.color}"/>`)}return}if(l.type==="band"){let f=u.filter(w=>w.v2!=null).map(w=>[this.x(w.t),p.y(w.v2)]),y=u.map(w=>[this.x(w.t),p.y(w.v)]).reverse();f.length&&o.push(b`<path d=${lt(f)+" L"+lt(y).slice(1)+"Z"} style="fill:${l.color};fill-opacity:0.28"/>`);return}let m=u.map(f=>[this.x(f.t),p.y(f.v)]);if(l.type==="area"){let f=`g${d}`;o.push(b`
          <defs><linearGradient id=${f} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" style="stop-color:${l.color};stop-opacity:0.45"/>
            <stop offset="1" style="stop-color:${l.color};stop-opacity:0.04"/>
          </linearGradient></defs>
          <path d=${`${lt(m)} L${m[m.length-1][0]},${n} L${m[0][0]},${n}Z`} fill="url(#${f})"/>`)}if(l.dashUntil!=null&&u[0].t<l.dashUntil){let f=u.findIndex(k=>k.t>=l.dashUntil),y=f<0?m:m.slice(0,f+1),w=f<0?[]:m.slice(f);o.push(b`<path d=${lt(y)} class="ln" style="stroke:${l.color}" stroke-dasharray="5 5"/>`),w.length>1&&o.push(b`<path d=${lt(w)} class="ln" style="stroke:${l.color}"/>`)}else o.push(b`<path d=${lt(m)} class="ln" style="stroke:${l.color}" stroke-dasharray=${l.dashed?"4 4":"none"}/>`)});for(let l of this.markers){let d=this.x(l.t),p=i.y(l.v);o.push(b`<circle cx=${d} cy=${p} r="4" class="mk"/>`),o.push(b`<text x=${d} y=${p-9} class="mklab">${l.label}</text>`)}if(this.now&&this.now>this.start&&this.now<this.end){let l=this.x(this.now);o.push(b`<line x1=${l} x2=${l} y1=${D.t} y2=${n} class="nowl"/>`)}let c=v;if(this._hover!=null){let l=this._hover,d=this.x(l);o.push(b`<line x1=${d} x2=${d} y1=${D.t-6} y2=${n} class="hov"/>`);let p=[];for(let m of this.series){let $=Pi(m,l);if(!$||$.v==null||m.silent)continue;let _=m.axis==="right"&&a?a:i;(m.type==="line"||m.type==="area")&&o.push(b`<circle cx=${d} cy=${_.y($.v)} r="4" style="fill:${m.color}" class="hdot"/>`);let f=y=>{var w,k;return`${M(y,(w=m.digits)!=null?w:1)}${(k=m.unit)!=null?k:""}`};(m.type==="band"||m.type==="range")&&$.v2!=null?p.push({color:m.color,label:"Max",value:f($.v2)},{color:m.color,label:"Min",value:f($.v)}):p.push({color:m.color,label:(h=m.label)!=null?h:"",value:f($.v)})}let u=d>t/2?`right:${t-d+8}px`:`left:${d+8}px`;c=g`<div class="tip" style="${u}"><b>${this.timeFormat(l)}</b>
        ${p.map(m=>g`<div class="tr"><i style="background:${m.color}"></i><span>${m.label}</span><b>${m.value}</b></div>`)}</div>`}return g`
      <div class="wrap">
        ${c}
        <svg width=${t} height=${this.height} @pointermove=${this.onPointer} @pointerdown=${this.onPointer}
          @pointerleave=${()=>this._hover=void 0}>${o}</svg>
      </div>
    `}};ct.properties={start:{type:Number},end:{type:Number},series:{attribute:!1},ticks:{attribute:!1},markers:{attribute:!1},now:{type:Number},height:{type:Number},yMin:{type:Number},yMax:{type:Number},yUnit:{type:String},rightMax:{type:Number},rightUnit:{type:String},timeFormat:{attribute:!1},_w:{state:!0},_hover:{state:!0}},ct.styles=P`
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
      position: absolute; top: 4px; pointer-events: none; z-index: 1; min-width: 96px;
      background: var(--card-background-color, #222); color: var(--primary-text-color);
      border: 1px solid var(--divider-color); border-radius: 8px; padding: 6px 8px; font-size: 12px;
      display: flex; flex-direction: column; gap: 3px; white-space: nowrap; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    }
    .tr { display: flex; align-items: center; gap: 6px; }
    .tr i { width: 8px; height: 8px; border-radius: 2px; flex: none; }
    .tr span { color: var(--secondary-text-color); flex: 1; }
    .tr b { font-weight: 600; }
  `;function Pi(r,e){var a;let t;for(let n of r.points)n.v!=null&&(!t||Math.abs(Ct(r,n)-e)<Math.abs(Ct(r,t)-e))&&(t=n);if(!t)return;let i=r.points,s=t.t2!=null?t.t2-t.t:(a=r.barWidth)!=null?a:i.length>1?Math.abs(i[1].t-i[0].t):1/0;return Math.abs(Ct(r,t)-e)<=s/2+1?t:void 0}function Ct(r,e){var s;if(r.type!=="bar"&&r.type!=="range")return e.t;let t=r.points,i=e.t2!=null?e.t2-e.t:(s=r.barWidth)!=null?s:t.length>1?t[1].t-t[0].t:0;return e.t+i/2}function zi(r){let e=Math.pow(10,Math.floor(Math.log10(Math.max(r,1e-9)))),t=r/e;return(t<=1?1:t<=2?2:t<=2.5?2.5:t<=5?5:10)*e}function je(r){return Number.isInteger(r)?String(r):M(r,1)}function lt(r){let e=r.length;if(e===0)return"";if(e<3)return"M"+r.map(n=>`${n[0]},${n[1]}`).join(" L");let t=[],i=[],s=[];for(let n=0;n<e-1;n++)t[n]=r[n+1][0]-r[n][0],i[n]=t[n]?(r[n+1][1]-r[n][1])/t[n]:0;s[0]=i[0],s[e-1]=i[e-2];for(let n=1;n<e-1;n++)s[n]=i[n-1]*i[n]<=0?0:3*(t[n-1]+t[n])/((2*t[n]+t[n-1])/i[n-1]+(t[n]+2*t[n-1])/i[n]);let a=`M${r[0][0]},${r[0][1]}`;for(let n=0;n<e-1;n++){let o=t[n]/3;a+=` C${r[n][0]+o},${r[n][1]+o*s[n]} ${r[n+1][0]-o},${r[n+1][1]-o*s[n+1]} ${r[n+1][0]},${r[n+1][1]}`}return a}var Be=[{id:"temp",label:"Temperatur",icon:"mdi:thermometer"},{id:"rain",label:"Niederschlag",icon:"mdi:weather-pouring"},{id:"wind",label:"Wind",icon:"mdi:weather-windy"}],W=36e5,Ni=["S","M","D","M","D","F","S"];function Ye(r){let e=new Date(r);return new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()}var dt=class extends H{constructor(){super(...arguments);this.hourly=[];this.daily=[];this.index=0;this.metric="temp";this.onKey=t=>t.key==="Escape"&&this.close()}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey)}close(){this.dispatchEvent(new CustomEvent("close"))}willUpdate(t){(t.has("index")||t.has("hass"))&&this.loadPast()}loadPast(){var c,h;let t=(h=(c=this.config)==null?void 0:c.sensors)!=null?h:{},i=this.daily[this.index];if(!this.hass||!i)return;let s=Ye(i.datetime),a=Date.now();if(s>a)return;let n=Math.min(s+24*W,Math.ceil(a/3e5)*3e5),o=`${s}|${n}`;o!==this._pastKey&&(this._pastKey=o,rt(this.hass,{ids:[t.temperature,t.rain_total,t.wind_speed,t.wind_gust].filter(Boolean),start:new Date(s),end:new Date(n),period:"hour",types:["mean","max","change"]}).then(l=>o===this._pastKey&&(this._past=l),()=>this._pastKey=void 0))}render(){let t=this.daily[this.index];if(!t)return v;let i=Ye(t.datetime),s=i+24*W,a=Date.now(),n=a>=i&&a<s,o=this.hourly.filter(h=>{let l=new Date(h.datetime).getTime();return l>=i&&l<=s}),c=new Date(i).toLocaleDateString("de-DE",{weekday:"long",day:"numeric",month:"long"});return g`
      <div class="backdrop" @click=${this.close}></div>
      <div class="sheet" role="dialog" aria-label="Tagesdetail">
        <div class="top">
          <button class="ib" aria-label="Schließen" @click=${this.close}><ha-icon icon="mdi:close"></ha-icon></button>
          <div class="ttl">${Be.find(h=>h.id===this.metric).label}</div>
          <span style="width:40px"></span>
        </div>

        <div class="days">
          ${this.daily.map((h,l)=>{let d=new Date(h.datetime);return g`<button class=${l===this.index?"on":""} @click=${()=>this.select(l)}>
              <span class="l">${Ni[d.getDay()]}</span><span class="n">${d.getDate()}</span></button>`})}
        </div>
        <div class="date">${c}</div>

        <div class="chips">
          ${Be.map(h=>g`<button class=${h.id===this.metric?"on":""}
            @click=${()=>this.setMetric(h.id)}><ha-icon icon=${h.icon}></ha-icon>${h.label}</button>`)}
        </div>

        <section class="card">
          ${this.renderSummary(t,o,n)}
          ${o.length?this.renderChart(i,s,o,n?a:void 0):g`<div class="hint">Für diesen Tag gibt es keine Stundenvorhersage.</div>`}
        </section>
      </div>
    `}select(t){this.dispatchEvent(new CustomEvent("select",{detail:{index:t}}))}setMetric(t){this.dispatchEvent(new CustomEvent("metric",{detail:{metric:t}}))}renderSummary(t,i,s){var h,l,d;let a=(h=this.config.sensors)!=null?h:{};if(this.metric==="temp"){let p=s?C(this.hass,a.temperature):void 0;return g`<div class="sum">
        <div class="sum-ic">${wt(t.condition)}</div>
        <div>
          <div class="big">${p!=null?T(p):yt(t.condition)}</div>
          <div class="sub">H: ${T(t.temperature)} · T: ${T(t.templow)}${p!=null?` \xB7 ${yt(t.condition)}`:""}</div>
        </div>
      </div>`}if(this.metric==="rain"){let p=s&&a.rain_total?this.pastRows(a.rain_total).reduce((m,$)=>{var _;return m+((_=$.change)!=null?_:0)},0):void 0,u=Math.max(0,...i.map(m=>{var $;return($=m.precipitation_probability)!=null?$:0}),(l=t.precipitation_probability)!=null?l:0);return g`<div class="sum">
        <div>
          <div class="big">${K((d=t.precipitation)!=null?d:i.reduce((m,$)=>{var _;return m+((_=$.precipitation)!=null?_:0)},0))}</div>
          <div class="sub">erwartet · Wahrscheinlichkeit bis ${Math.round(u)} %${p!=null?` \xB7 bisher gemessen ${K(p)}`:""}</div>
        </div>
      </div>`}let n=i.map(p=>p.wind_speed).filter(p=>p!=null),o=n.length?n.reduce((p,u)=>p+u,0)/n.length:t.wind_speed,c=a.wind_gust&&s?Math.max(...this.pastRows(a.wind_gust).map(p=>{var u;return(u=p.max)!=null?u:0}),0):void 0;return g`<div class="sum">
      <div>
        <div class="big">${M(o,0)} km/h <span class="dir">${At(t.wind_bearing)}</span></div>
        <div class="sub">Ø Vorhersage · max ${M(n.length?Math.max(...n):void 0,0)} km/h${c?` \xB7 st\xE4rkste B\xF6e heute ${M(c,0)} km/h`:""}</div>
      </div>
    </div>`}pastRows(t){var i,s;return(s=(i=this._past)==null?void 0:i[t])!=null?s:[]}renderChart(t,i,s,a){var _;let n=(_=this.config.sensors)!=null?_:{},o=s.map(f=>({t:new Date(f.datetime).getTime(),h:f})),c=a?o.filter(f=>f.t>=a-W):o,h=[0,6,12,18].map(f=>({t:t+f*W,label:`${String(f).padStart(2,"0")} Uhr`})),l=[],d=[],p="\xB0",u,m="",$;if(this.metric==="temp"){let f=n.temperature&&a?this.pastRows(n.temperature).map(A=>({t:A.start+W/2,v:A.mean})):[],y=a?C(this.hass,n.temperature):void 0,w=Tt(this.hourly,y),k=[...f,...y!=null?[{t:a,v:y}]:[],...c.filter(A=>!a||A.t>a).map(A=>({t:A.t,v:w(A.t,A.h.temperature)}))];l.push({type:"area",points:k,color:"var(--wa-temp, #4fc3f7)",dashUntil:a,label:"Temperatur",unit:"\xB0",digits:1});let O=k.filter(A=>A.v!=null);if(O.length){let A=O.reduce((z,x)=>x.v>z.v?x:z),U=O.reduce((z,x)=>x.v<z.v?x:z);d.push({t:A.t,v:A.v,label:"H"},{t:U.t,v:U.v,label:"T"})}}else if(this.metric==="rain")p="",$=0,n.rain_total&&a&&l.push({type:"bar",points:this.pastRows(n.rain_total).map(f=>({t:f.start,v:f.change})),color:"var(--wa-rain-past, #1e6fb8)",barWidth:W,label:"gemessen",unit:" l/m\xB2",digits:1}),l.push({type:"bar",points:c.map(f=>{var y;return{t:f.t,v:(y=f.h.precipitation)!=null?y:0}}),color:"var(--wa-rain)",barWidth:W,label:"Menge",unit:" l/m\xB2",digits:1}),l.push({type:"line",axis:"right",points:c.map(f=>({t:f.t+W/2,v:f.h.precipitation_probability})),color:"var(--wa-prob, #90caf9)",label:"Wahrscheinl.",unit:" %",digits:0}),u=100,m=" %";else{p="",$=0;let f=n.wind_speed&&a?this.pastRows(n.wind_speed).map(k=>({t:k.start+W/2,v:k.mean})):[],y=a?C(this.hass,n.wind_speed):void 0,w=[...f,...y!=null?[{t:a,v:y}]:[],...c.filter(k=>!a||k.t>a).map(k=>({t:k.t,v:k.h.wind_speed}))];l.push({type:"area",points:w,color:"var(--wa-wind, #81c784)",dashUntil:a,label:"Wind",unit:" km/h",digits:0}),n.wind_gust&&a&&l.push({type:"line",points:this.pastRows(n.wind_gust).map(k=>({t:k.start+W/2,v:k.max})),color:"var(--wa-gust, #ffb74d)",label:"B\xF6e",unit:" km/h",digits:0})}return g`
      <wetter-app-chart .start=${t} .end=${i} .series=${l} .ticks=${h} .markers=${d}
        .now=${a} .height=${220} .yUnit=${p} .yMin=${$} .rightMax=${u} .rightUnit=${m}
        .timeFormat=${f=>new Date(f).toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}>
      </wetter-app-chart>
      ${this.metric==="wind"?this.renderWindDirs(t,c):v}
      ${this.metric==="rain"?g`<div class="legend"><i style="background:var(--wa-rain)"></i>Menge pro Stunde
        <i class="ln" style="background:var(--wa-prob, #90caf9)"></i>Wahrscheinlichkeit${a?g`<i style="background:var(--wa-rain-past, #1e6fb8)"></i>gemessen`:v}</div>`:v}
    `}renderWindDirs(t,i){let s=i.filter(a=>new Date(a.t).getHours()%3===0);return g`<div class="dirs">
      ${s.map(a=>{var n;return g`<div style="left:calc(6px + (100% - 44px) * ${(a.t-t)/(24*W)})">
        <ha-icon icon="mdi:navigation" style="transform:rotate(${((n=a.h.wind_bearing)!=null?n:0)+180}deg)"></ha-icon>
        <span>${new Date(a.t).getHours()} Uhr</span></div>`})}
    </div>`}};dt.properties={hass:{attribute:!1},config:{attribute:!1},hourly:{attribute:!1},daily:{attribute:!1},index:{type:Number},metric:{type:String},_past:{state:!0}},dt.styles=[at,P`
      :host { position: fixed; inset: 0; z-index: 8; display: flex; justify-content: center; align-items: stretch; }
      .backdrop { position: absolute; inset: 0; background: rgba(0, 0, 0, 0.55); }
      .sheet {
        position: relative; width: 100%; max-width: 720px; overflow-y: auto; box-sizing: border-box;
        background: var(--primary-background-color, #111);
        /* iPhone: nicht unter Statusleiste/Home-Indikator rutschen */
        padding: calc(8px + env(safe-area-inset-top, 0px)) 12px calc(24px + env(safe-area-inset-bottom, 0px));
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
    `];var ee=[{id:"day",label:"Tag"},{id:"7d",label:"7 Tage"},{id:"30d",label:"30 Tage"},{id:"month",label:"Monat"},{id:"year",label:"Jahr"}];var Fi=["Januar","Februar","M\xE4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];function Hi(r){return new Date(r.getFullYear(),r.getMonth(),r.getDate())}function _t(r,e){return new Date(r.getFullYear(),r.getMonth(),r.getDate()+e)}function Ke(r,e=!1){return r.toLocaleDateString("de-DE",e?{day:"2-digit",month:"2-digit",year:"numeric"}:{day:"2-digit",month:"2-digit"})}function Et(r){return ee.some(e=>e.id===r)}function Ge(r,e=new Date){let t=Hi(e),i=Math.min(0,Math.round(r.offset)),s,a,n,o;switch(r.preset){case"day":{s=_t(t,i),a=_t(s,1),n="hour",o=i===0?"Heute":i===-1?"Gestern":s.toLocaleDateString("de-DE",{weekday:"short",day:"2-digit",month:"2-digit"});break}case"7d":case"30d":{let h=r.preset==="7d"?7:30;a=_t(t,1+i*h),s=_t(a,-h),n=h===7?"hour":"day",o=i===0?`Letzte ${h} Tage`:`${Ke(s)} \u2013 ${Ke(_t(a,-1),!0)}`;break}case"month":{s=new Date(e.getFullYear(),e.getMonth()+i,1),a=new Date(s.getFullYear(),s.getMonth()+1,1),n="day",o=`${Fi[s.getMonth()]} ${s.getFullYear()}`;break}default:{s=new Date(e.getFullYear()+i,0,1),a=new Date(s.getFullYear()+1,0,1),n="month",o=String(s.getFullYear());break}}let c=a.getTime()>e.getTime();return c&&(a=new Date(Math.ceil(e.getTime()/3e5)*3e5)),{preset:r.preset,offset:i,start:s,end:a,period:n,label:o,live:c}}var Pt=new Map,ie=new EventTarget,Je="wetter-app:range:";function Oi(r,e){let t=e;try{let i=localStorage.getItem(Je+r);Et(i)&&(t=i)}catch{}return{preset:t,offset:0}}function Ui(r,e="7d"){let t=Pt.get(r);return t||(t=Oi(r,e),Pt.set(r,t)),t}function Ii(r,e){let t=Pt.get(r);if(Pt.set(r,e),(t==null?void 0:t.preset)!==e.preset)try{localStorage.setItem(Je+r,e.preset)}catch{}ie.dispatchEvent(new CustomEvent(r))}var zt=class{constructor(e,t,i=()=>"7d"){this.host=e;this.groupOf=t;this.fallback=i;this.onChange=()=>this.host.requestUpdate();e.addController(this)}get state(){return Ui(this.groupOf(),this.fallback())}get range(){return Ge(this.state)}set(e){Ii(this.groupOf(),e)}hostConnected(){this.listen()}hostUpdated(){this.group!==this.groupOf()&&this.listen()}hostDisconnected(){this.group&&ie.removeEventListener(this.group,this.onChange),this.group=void 0}listen(){this.hostDisconnected(),this.group=this.groupOf(),ie.addEventListener(this.group,this.onChange)}};function Ze(r){let e=r.range;return g`
    <div class="range">
      <div class="chips" role="tablist">
        ${ee.map(t=>g`<button role="tab" aria-selected=${t.id===e.preset}
            class=${t.id===e.preset?"on":""}
            @click=${()=>r.set({preset:t.id,offset:0})}>${t.label}</button>`)}
      </div>
      <div class="nav">
        <button class="ib" aria-label="Zurück" @click=${()=>r.set({preset:e.preset,offset:e.offset-1})}>
          <ha-icon icon="mdi:chevron-left"></ha-icon>
        </button>
        <span>${e.label}</span>
        <button class="ib" aria-label="Vor" ?disabled=${e.offset>=0}
          @click=${()=>r.set({preset:e.preset,offset:e.offset+1})}>
          <ha-icon icon="mdi:chevron-right"></ha-icon>
        </button>
      </div>
    </div>
  `}var Xe=P`
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
`;var Nt={max:1,color:"#2a32ff",text:"#fff"},et=[{max:6,label:"1",color:"#3a6ff7",text:"#fff"},{max:12,label:"2",color:"#3fb4f7",text:"#000"},{max:20,label:"3",color:"#44f2f7",text:"#000"},{max:29,label:"4",color:"#a6f78a",text:"#000"},{max:39,label:"5",color:"#f7d64a",text:"#000"},{max:1/0,label:"6+",color:"#f77a4a",text:"#000"}],Ft=["N","NNO","NO","ONO","O","OSO","SO","SSO","S","SSW","SW","WSW","W","WNW","NW","NNW"];function qe(r=[],e=[],t={}){var z;let i=new Map(e.map(x=>[x.start,x.mean])),s=Ft.map(()=>et.map(()=>0)),a=et.map(()=>0),n=0,o=0;for(let x of r){let S=i.get(x.start);if(x.mean==null||S==null)continue;if(o++,S<Nt.max){n++;continue}let E=Math.round((x.mean%360+360)%360/22.5)%16,N=et.findIndex(F=>S<F.max);s[E][N]++,a[N]++}if(!o)return g`<div class="hint">Keine Winddaten im Zeitraum.</div>`;let c=x=>x/o*100,h=Math.max(...s.map(x=>c(x.reduce((S,E)=>S+E,0))),1),l=(z=[2,5,10,20,25,50].find(x=>h/x<=4))!=null?z:50,d=Math.ceil(h/l)*l,p=16,u=90,m=x=>p+x/d*(u-p),$=x=>(x-90)*Math.PI/180,_=(x,S)=>`${100+x*Math.cos($(S))},${100+x*Math.sin($(S))}`,f=(x,S,E)=>{let N=x*22.5-10.5,F=x*22.5+10.5;return`M${_(S,N)} L${_(E,N)} A${E} ${E} 0 0 1 ${_(E,F)} L${_(S,F)} A${S} ${S} 0 0 0 ${_(S,N)}Z`},y=[];for(let x=l;x<=d;x+=l)y.push(b`<circle cx="100" cy="100" r=${m(x)} class="ring"/>`),y.push(b`<text x=${100+m(x)*Math.cos($(123.75))} y=${102+m(x)*Math.sin($(123.75))} class="rl">${x} %</text>`);let w=s.flatMap((x,S)=>{let E=0;return x.map((N,F)=>{if(!N)return b``;let it=m(E);return E+=c(N),b`<path d=${f(S,it,m(E))} style="fill:${et[F].color}"><title>${Ft[S]}, Bft ${et[F].label}: ${M(c(N),1)} %</title></path>`})}),k=Ft.map((x,S)=>S%4===0?b``:b`<text x=${100+101*Math.cos($(S*22.5))} y=${103+101*Math.sin($(S*22.5))} class=${S%2?"cd2":"cd"}>${Ft[S]}</text>`),O=t.direction!=null?b`<path d="M100 ${100-u-1} l-5 -9 h10z" class="now" transform="rotate(${t.direction} 100 100)"><title>Aktuell: ${Math.round(t.direction)}°</title></path>`:b``,A=[{...Nt,label:"0",share:c(n)},...et.map((x,S)=>({...x,share:c(a[S])}))],U;if(t.speed!=null){let x=[0,Nt.max,...et.map(F=>F.max)],S=Math.max(0,x.findIndex((F,it)=>it>0&&t.speed<F)-1),E=x[S],N=Number.isFinite(x[S+1])?x[S+1]:E+20;U=(S+Math.min(1,(t.speed-E)/(N-E)))/A.length*100}return g`
    <div class="rose">
      <svg viewBox="-14 -14 228 228">
        ${y}
        <line x1="100" y1="8" x2="100" y2="192" class="ring"/><line x1="8" y1="100" x2="192" y2="100" class="ring"/>
        ${w}
        <circle cx="100" cy="100" r=${p-1} style="fill:${Nt.color}"/>
        <text x="100" y="103.5" class="cv">${Math.round(c(n))} %</text>
        <text x="100" y="2" class="cd">N</text><text x="100" y="208" class="cd">S</text>
        <text x="203" y="103" class="cd">O</text><text x="-3" y="103" class="cd">W</text>
        ${k}
        ${O}
      </svg>
      <div class="bftbar">
        ${U!=null?g`<span class="nowsp" style="left:${U}%" title="Aktuell: ${M(t.speed,1)} km/h"></span>`:""}
        <div class="segs">${A.map(x=>g`<span style="background:${x.color};color:${x.text}">${x.share>=.5?`${Math.round(x.share)}%`:""}</span>`)}</div>
        <div class="nums">${A.map(x=>g`<span>${x.label}</span>`)}</div>
        <div class="bl">Beaufort</div>
      </div>
    </div>`}var Qe=P`
  .rose { display: flex; flex-direction: column; align-items: center; gap: 10px; }
  .rose svg { width: 100%; max-width: 320px; }
  .ring { fill: none; stroke: var(--wa-divider); stroke-width: 0.8; }
  .rl { fill: var(--wa-text2); font-size: 6.5px; text-anchor: middle; paint-order: stroke; stroke: var(--ha-card-background, var(--card-background-color, #1c1c1c)); stroke-width: 2px; }
  .cv { fill: #fff; font-size: 9px; font-weight: 600; text-anchor: middle; }
  .cd { fill: var(--wa-text); font-size: 10px; font-weight: 600; text-anchor: middle; }
  .cd2 { fill: var(--wa-text2); font-size: 6.5px; text-anchor: middle; }
  .now { fill: #e53935; }
  .bftbar { position: relative; width: 100%; max-width: 360px; padding-top: 10px; }
  .segs { display: flex; height: 18px; border-radius: 4px; overflow: hidden; }
  .segs span { flex: 1; font-size: 10px; font-weight: 600; line-height: 18px; text-align: center; }
  .nums { display: flex; font-size: 11px; color: var(--wa-text2); margin-top: 2px; }
  .nums span { flex: 1; text-align: center; }
  .bl { text-align: center; font-size: 11px; color: var(--wa-text2); }
  .nowsp { position: absolute; top: 0; width: 0; height: 0; margin-left: -6px;
    border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 9px solid #e53935; }
`;var Li=[{id:"pressure",label:"Luftdruck",unit:" hPa",digits:1},{id:"humidity",label:"Feuchte",unit:" %",digits:0},{id:"solar",label:"Sonne",unit:" W/m\xB2",digits:0},{id:"uv",label:"UV",unit:"",digits:1}],se=["Jan","Feb","M\xE4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],Wi=["Januar","Februar","M\xE4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],ne=["So","Mo","Di","Mi","Do","Fr","Sa"],Vi=864e5,ji=.1,ht=class extends H{constructor(){super(...arguments);this.wide=!1;this._compare=!1;this._extra="pressure";this.range=new zt(this,()=>{var t,i;return(i=(t=this.config)==null?void 0:t.sync_group)!=null?i:"default"},()=>{var t;return Et((t=this.config)==null?void 0:t.default_range)?this.config.default_range:"7d"})}periods(t){return{main:t.preset==="day"||t.preset==="7d"?"hour":"day",rain:t.preset==="day"?"hour":"day",rose:"hour"}}updated(){this.load()}async load(){var c,h;if(!this.hass||!this.config)return;let t=this.range.range,i=(c=this.config.sensors)!=null?c:{},s=this.periods(t),a=`${t.start.getTime()}|${t.end.getTime()}|${this._compare}`;if(a===this._key)return;this._key=a,this._err=void 0;let n=l=>l.filter(Boolean),o=(l,d,p,u=t.start,m=t.end)=>rt(this.hass,{ids:l,start:u,end:m,period:d,types:p});try{let l=new Date(t.start);l.setFullYear(l.getFullYear()-1);let d=new Date(t.end);d.setFullYear(d.getFullYear()-1);let[p,u,m,$,_]=await Promise.all([o(n([i.temperature,i.humidity,i.pressure,i.solar,i.uv,i.wind_speed,i.wind_gust]),s.main,["mean","min","max"]),o(n([i.rain_total]),s.rain,["change"]),o(n([i.wind_direction,s.rose!==s.main?i.wind_speed:void 0]),s.rose,["mean"]),this._compare?o(n([i.temperature]),s.main,["mean","min","max"],l,d):void 0,this._compare?o(n([i.rain_total]),s.rain,["change"],l,d):void 0]);if(a!==this._key)return;this._data={main:p,rain:u,dir:m,prev:this._compare?{...$,..._}:void 0}}catch(l){if(a!==this._key)return;this._err=(h=l==null?void 0:l.message)!=null?h:String(l),this._key=void 0}}render(){var h,l,d;if(!this.config)return v;let t=this.range.range,i=this._data,s=(h=this.config.sensors)!=null?h:{},a=t.preset!=="day",n=s.temperature&&(i==null?void 0:i.main[s.temperature])||[],o=(l=n.find(p=>p.mean!=null))==null?void 0:l.start,c=o!=null&&o-t.start.getTime()>2*Vi?g`<div class="hint-inline"><ha-icon icon="mdi:information-outline"></ha-icon>Daten erst ab ${new Date(o).toLocaleDateString("de-DE")}</div>`:v;return g`
      <section class="card">
        ${Ze(this.range)}
        ${a?g`<div class="cmp"><button class=${this._compare?"on":""}
          @click=${()=>this._compare=!this._compare}><ha-icon icon="mdi:compare-horizontal"></ha-icon>Vorjahr vergleichen</button></div>`:v}
      </section>
      ${this._err?g`<div class="warn">Statistik nicht verfügbar: ${this._err}</div>`:v}
      ${i?!n.length&&!(s.rain_total&&((d=i.rain[s.rain_total])!=null&&d.length))?g`<div class="hint">Keine Daten in diesem Zeitraum.</div>`:g`
            ${c}
            ${this.renderSummary(t,i)}
            <div class="cols">
              ${this.renderTemp(t,i)}
              ${this.renderRain(t,i)}
            </div>
            ${t.preset==="year"?this.renderYearTable(t,i):v}
            <div class="cols">
              ${this.renderWind(t,i)}
              ${this.renderExtra(t,i)}
            </div>`:g`<div class="loading">Lade Historie …</div>`}
    `}rows(t,i,s){let a=i&&(t==null?void 0:t[i])||[];return s.preset==="year"?ti(a):a}ticks(t){let i=[],s=t.start;if(t.preset==="day")for(let a of[0,6,12,18])i.push({t:new Date(s.getFullYear(),s.getMonth(),s.getDate(),a).getTime(),label:`${String(a).padStart(2,"0")} Uhr`});else if(t.preset==="7d")for(let a=0;a<7;a++){let n=new Date(s.getFullYear(),s.getMonth(),s.getDate()+a);i.push({t:n.getTime(),label:ne[n.getDay()]})}else if(t.preset==="30d")for(let a=0;a<30;a+=7){let n=new Date(s.getFullYear(),s.getMonth(),s.getDate()+a);i.push({t:n.getTime(),label:`${n.getDate()}.${n.getMonth()+1}.`})}else if(t.preset==="month")for(let a of[1,8,15,22,29])i.push({t:new Date(s.getFullYear(),s.getMonth(),a).getTime(),label:`${a}.`});else for(let a=0;a<12;a++)i.push({t:new Date(s.getFullYear(),a,1).getTime(),label:se[a]});return i}fmt(t,i){return s=>{let a=new Date(s);return t.preset==="year"&&i!=="hour"?`${Wi[a.getMonth()]}`:i==="hour"?`${ne[a.getDay()]} ${String(a.getHours()).padStart(2,"0")}:00`:`${ne[a.getDay()]}, ${a.getDate()}.${a.getMonth()+1}.`}}chart(t,i,s){var a,n;return g`<wetter-app-chart .start=${t.start.getTime()} .end=${t.end.getTime()} .series=${i}
      .ticks=${this.ticks(t)} .height=${(a=s.height)!=null?a:200} .yUnit=${(n=s.yUnit)!=null?n:""} .yMin=${s.yMin}
      .rightMax=${s.rightMax} .timeFormat=${this.fmt(t,t.preset==="year"?"month":s.period)}></wetter-app-chart>`}shift(t){return t.map(i=>{let s=new Date(i.start);s.setFullYear(s.getFullYear()+1);let a=new Date(i.end);return a.setFullYear(a.getFullYear()+1),{...i,start:s.getTime(),end:a.getTime()}})}renderSummary(t,i){var f;let s=(f=this.config.sensors)!=null?f:{},a=this.periods(t),n=s.temperature&&i.main[s.temperature]||[],o=ae(n,"min",Math.min),c=ae(n,"max",Math.max),h=re(n.map(y=>y.mean)),l=s.rain_total&&i.rain[s.rain_total]||[],d=l.reduce((y,w)=>{var k;return y+((k=w.change)!=null?k:0)},0),p=l.filter(y=>{var w;return((w=y.change)!=null?w:0)>=ji}).length,u=ae(s.wind_gust&&i.main[s.wind_gust]||[],"max",Math.max),m=re((s.wind_speed&&i.main[s.wind_speed]||[]).map(y=>y.mean)),$=re((s.humidity&&i.main[s.humidity]||[]).map(y=>y.mean)),_=this.fmt({...t,preset:t.preset==="year"?"30d":t.preset},a.main);return g`<div class="grid">
      <section class="card kv">${R("mdi:thermometer","Temperatur")}
        <div class="big">${T(h,1)}</div><div class="sub">Durchschnitt</div>
        <div class="ext"><span>▲ ${T(c==null?void 0:c.v,1)}</span><small>${c?_(c.t):""}</small></div>
        <div class="ext"><span>▼ ${T(o==null?void 0:o.v,1)}</span><small>${o?_(o.t):""}</small></div>
      </section>
      <section class="card kv">${R("mdi:weather-pouring","Niederschlag")}
        <div class="big">${K(d)}</div><div class="sub">Summe</div>
        <div class="ext"><span>${p}</span><small>${a.rain==="hour"?"Stunden mit Regen":"Regentage (\u2265 0,1 l/m\xB2)"}</small></div>
      </section>
      <section class="card kv">${R("mdi:weather-windy","Wind")}
        <div class="big">${M(m,1)} km/h</div><div class="sub">Durchschnitt</div>
        <div class="ext"><span>${M(u==null?void 0:u.v,0)} km/h</span><small>stärkste Böe${u?` \xB7 ${_(u.t)}`:""}</small></div>
      </section>
      <section class="card kv">${R("mdi:water-percent","Luftfeuchte")}
        <div class="big">${M($,0)} %</div><div class="sub">Durchschnitt</div>
      </section>
    </div>`}renderTemp(t,i){var h,l;let s=(h=this.config.sensors)!=null?h:{},a=this.periods(t),n=this.rows(i.main,s.temperature,t),o=[],c=d=>d.start+(d.end-d.start)/2;if(a.main==="hour"?o.push({type:"band",points:n.map(d=>({t:c(d),v:d.min,v2:d.max})),color:"var(--wa-temp, #4fc3f7)",label:"",unit:"\xB0",digits:1}):o.push({type:"range",points:n.map(d=>({t:d.start,t2:d.end,v:d.min,v2:d.max})),color:"rgba(79, 195, 247, 0.55)",label:"",unit:"\xB0",digits:1}),o.push({type:"line",points:n.map(d=>({t:c(d),v:d.mean})),color:"var(--wa-temp-line, #ffb74d)",label:"\xD8",unit:"\xB0",digits:1}),i.prev&&s.temperature){let d=this.rows({x:this.shift((l=i.prev[s.temperature])!=null?l:[])},"x",t);o.push({type:"line",dashed:!0,points:d.map(p=>({t:c(p),v:p.mean})),color:"var(--wa-text2)",label:"Vorjahr \xD8",unit:"\xB0",digits:1})}return g`<section class="card">${R("mdi:thermometer","Temperatur")}
      ${this.chart(t,o,{yUnit:"\xB0",period:a.main})}
      <div class="legend"><i style="background:#4fc3f7"></i>Min–Max<i class="ln" style="background:#ffb74d"></i>Durchschnitt
        ${i.prev?g`<i class="ln dash"></i>Vorjahr`:v}</div>
    </section>`}renderRain(t,i){var h,l;let s=(h=this.config.sensors)!=null?h:{};if(!s.rain_total)return v;let a=this.periods(t),n=this.rows(i.rain,s.rain_total,t),o=d=>{let p=0;return d.map(u=>{var m;return{t:Math.min(u.end,t.end.getTime()),v:p+=(m=u.change)!=null?m:0}})},c=[{type:"bar",points:n.map(d=>{var p;return{t:d.start,t2:d.end,v:(p=d.change)!=null?p:0}}),color:"var(--wa-rain)",label:"Menge",unit:" l/m\xB2",digits:1},{type:"line",axis:"right",points:[{t:t.start.getTime(),v:0},...o(n)],color:"var(--wa-prob, #90caf9)",label:"Summe",unit:" l/m\xB2",digits:1}];if(i.prev){let d=this.rows({x:this.shift((l=i.prev[s.rain_total])!=null?l:[])},"x",t);d.length&&c.push({type:"line",axis:"right",dashed:!0,points:[{t:t.start.getTime(),v:0},...o(d)],color:"var(--wa-text2)",label:"Vorjahr",unit:" l/m\xB2",digits:1})}return g`<section class="card">${R("mdi:weather-pouring","Niederschlag")}
      ${this.chart(t,c,{yMin:0,period:a.rain})}
      <div class="legend"><i style="background:var(--wa-rain)"></i>${a.rain==="hour"?"pro Stunde":t.preset==="year"?"pro Monat":"pro Tag"}
        <i class="ln" style="background:var(--wa-prob, #90caf9)"></i>Summe (rechte Skala)${i.prev?g`<i class="ln dash"></i>Vorjahr`:v}</div>
    </section>`}renderWind(t,i){var p;let s=(p=this.config.sensors)!=null?p:{};if(!s.wind_speed)return v;let a=this.periods(t),n=s.wind_direction&&i.dir[s.wind_direction]||[],o=(a.rose===a.main?i.main[s.wind_speed]:i.dir[s.wind_speed])||[],c=this.rows(i.main,s.wind_speed,t),h=this.rows(i.main,s.wind_gust,t),l=u=>u.start+(u.end-u.start)/2,d=[{type:"line",points:c.map(u=>({t:l(u),v:u.mean})),color:"var(--wa-wind, #81c784)",label:"\xD8",unit:" km/h",digits:1},...h.length?[{type:"line",points:h.map(u=>({t:l(u),v:u.max})),color:"var(--wa-gust, #ffb74d)",label:"B\xF6e",unit:" km/h",digits:0}]:[]];return g`<section class="card">${R("mdi:weather-windy","Wind")}
      ${s.wind_direction?qe(n,o,t.live?{direction:C(this.hass,s.wind_direction),speed:C(this.hass,s.wind_speed)}:{}):v}
      ${this.chart(t,d,{yMin:0,period:a.main,height:160})}
      <div class="legend"><i class="ln" style="background:#81c784"></i>Durchschnitt<i class="ln" style="background:#ffb74d"></i>stärkste Böe</div>
    </section>`}renderExtra(t,i){var d,p;let s=(d=this.config.sensors)!=null?d:{},a=Li.filter(u=>s[u.id]);if(!a.length)return v;let n=(p=a.find(u=>u.id===this._extra))!=null?p:a[0],o=this.periods(t),c=this.rows(i.main,s[n.id],t),h=u=>u.start+(u.end-u.start)/2,l=[{type:"band",points:c.map(u=>({t:h(u),v:u.min,v2:u.max})),color:"var(--wa-accent)",unit:n.unit,digits:n.digits},{type:"line",points:c.map(u=>({t:h(u),v:u.mean})),color:"var(--wa-accent)",label:"\xD8",unit:n.unit,digits:n.digits}];return g`<section class="card">${R("mdi:chart-bell-curve-cumulative","Weitere Werte")}
      <div class="chips small">${a.map(u=>g`<button class=${u===n?"on":""} @click=${()=>this._extra=u.id}>${u.label}</button>`)}</div>
      ${this.chart(t,l,{period:o.main,yMin:n.id==="pressure"?void 0:0})}
      <div class="legend"><i class="ln" style="background:var(--wa-accent)"></i>Durchschnitt<i style="background:var(--wa-accent);opacity:.3"></i>Min–Max</div>
    </section>`}renderYearTable(t,i){var d,p;let s=(d=this.config.sensors)!=null?d:{},a=this.rows(i.main,s.temperature,t),n=this.rows(i.rain,s.rain_total,t),o=i.prev&&s.rain_total?ti(this.shift((p=i.prev[s.rain_total])!=null?p:[])):[],c=[...Array(12)].map((u,m)=>new Date(t.start.getFullYear(),m,1).getTime()),h=(u,m)=>u.find($=>$.start===m),l=Math.max(1,...n.map(u=>{var m;return(m=u.change)!=null?m:0}),...o.map(u=>{var m;return(m=u.change)!=null?m:0}));return g`<section class="card">${R("mdi:table",`Monate ${t.start.getFullYear()}`)}
      <table class="months">
        <thead><tr><th></th><th>Ø</th><th>Min</th><th>Max</th><th class="rc">Niederschlag</th></tr></thead>
        <tbody>${c.map((u,m)=>{var y,w;let $=h(a,u),_=h(n,u),f=h(o,u);return!$&&!_?g`<tr class="empty"><td>${se[m]}</td><td colspan="4">–</td></tr>`:g`<tr>
            <td>${se[m]}</td><td>${T($==null?void 0:$.mean,1)}</td><td class="cold">${T($==null?void 0:$.min,1)}</td><td class="warm">${T($==null?void 0:$.max,1)}</td>
            <td class="rc"><div class="rcell"><div class="rbar"><i style="width:${((y=_==null?void 0:_.change)!=null?y:0)/l*100}%"></i>
              ${f?g`<b style="left:${((w=f.change)!=null?w:0)/l*100}%" title="Vorjahr"></b>`:v}</div>
              <span>${M(_==null?void 0:_.change,0)}</span></div></td></tr>`})}</tbody>
      </table>
    </section>`}};ht.properties={hass:{attribute:!1},config:{attribute:!1},wide:{type:Boolean,reflect:!0},_data:{state:!0},_err:{state:!0},_compare:{state:!0},_extra:{state:!0}},ht.styles=[at,Xe,Qe,P`
      :host { display: flex; flex-direction: column; gap: 12px; }
      .cols, .grid { display: grid; gap: 12px; }
      :host([wide]) .cols { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); align-items: start; }
      .grid { grid-template-columns: repeat(auto-fill, minmax(165px, 1fr)); }
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
    `];function re(r){let e=r.filter(t=>t!=null);return e.length?e.reduce((t,i)=>t+i,0)/e.length:void 0}function ae(r,e,t){let i;for(let s of r){let a=s[e];a!=null&&(!i||t(a,i.v)===a&&a!==i.v)&&(i={t:s.start,v:a})}return i}function ti(r){var t;let e=new Map;for(let i of r){let s=new Date(i.start),a=new Date(s.getFullYear(),s.getMonth(),1).getTime(),n=e.get(a);n||(n={start:a,end:new Date(s.getFullYear(),s.getMonth()+1,1).getTime(),min:null,max:null,mean:null,change:null,_n:0,_sum:0},e.set(a,n)),i.min!=null&&(n.min=n.min==null?i.min:Math.min(n.min,i.min)),i.max!=null&&(n.max=n.max==null?i.max:Math.max(n.max,i.max)),i.mean!=null&&(n._sum+=i.mean,n._n++,n.mean=n._sum/n._n),i.change!=null&&(n.change=((t=n.change)!=null?t:0)+i.change)}return[...e.values()].sort((i,s)=>i.start-s.start)}var ei=[["wetter-app",ot,"Wetter-App","Komplette Wetter-App mit Vorhersage und Historie"]],Bi=[["wetter-app-chart",ct],["wetter-app-day-detail",dt],["wetter-app-history",ht]];for(let[r,e]of[...Bi,...ei])customElements.get(r)||customElements.define(r,e);var Ht=window;Ht.customCards=Ht.customCards||[];for(let[r,,e,t]of ei)Ht.customCards.some(i=>i.type===r)||Ht.customCards.push({type:r,name:e,description:t,preview:!1});console.info("%c WETTER-APP %c 0.1.0 ","background:#2f6fc4;color:#fff;border-radius:3px 0 0 3px","background:#555;color:#fff;border-radius:0 3px 3px 0");
