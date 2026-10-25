var Et=globalThis,Rt=Et.ShadowRoot&&(Et.ShadyCSS===void 0||Et.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qt=Symbol(),me=new WeakMap,bt=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Qt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Rt&&e===void 0){let i=t!==void 0&&t.length===1;i&&(e=me.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&me.set(t,e))}return e}toString(){return this.cssText}},ge=r=>new bt(typeof r=="string"?r:r+"",void 0,Qt),R=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((i,n,a)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+r[a+1],r[0]);return new bt(t,r,Qt)},fe=(r,e)=>{if(Rt)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let i=document.createElement("style"),n=Et.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=t.cssText,r.appendChild(i)}},Gt=Rt?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return ge(t)})(r):r;var{is:pi,defineProperty:ui,getOwnPropertyDescriptor:mi,getOwnPropertyNames:gi,getOwnPropertySymbols:fi,getPrototypeOf:xi}=Object,G=globalThis,xe=G.trustedTypes,bi=xe?xe.emptyScript:"",Yt=G.reactiveElementPolyfillSupport,vt=(r,e)=>r,Wt={toAttribute(r,e){switch(e){case Boolean:r=r?bi:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},$e=(r,e)=>!pi(r,e),be={attribute:!0,type:String,converter:Wt,reflect:!1,useDefault:!1,hasChanged:$e},ve,ye;(ve=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(ye=G.litPropertyMetadata)!=null||(G.litPropertyMetadata=new WeakMap);var j=class extends HTMLElement{static addInitializer(e){var t;this._$Ei(),((t=this.l)!=null?t:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=be){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),n=this.getPropertyDescriptor(e,i,t);n!==void 0&&ui(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){var s;let{get:n,set:a}=(s=mi(this.prototype,e))!=null?s:{get(){return this[t]},set(o){this[t]=o}};return{get:n,set(o){let d=n==null?void 0:n.call(this);a==null||a.call(this,o),this.requestUpdate(e,d,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var t;return(t=this.elementProperties.get(e))!=null?t:be}static _$Ei(){if(this.hasOwnProperty(vt("elementProperties")))return;let e=xi(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(vt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(vt("properties"))){let t=this.properties,i=[...gi(t),...fi(t)];for(let n of i)this.createProperty(n,t[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[i,n]of t)this.elementProperties.set(i,n)}this._$Eh=new Map;for(let[t,i]of this.elementProperties){let n=this._$Eu(t,i);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let n of i)t.unshift(Gt(n))}else e!==void 0&&t.push(Gt(e));return t}static _$Eu(e,t){let i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$EO)!=null?t:this._$EO=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)==null||i.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var t;let e=(t=this.shadowRoot)!=null?t:this.attachShadow(this.constructor.shadowRootOptions);return fe(e,this.constructor.elementStyles),e}connectedCallback(){var e,t;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(i=>{var n;return(n=i.hostConnected)==null?void 0:n.call(i)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var a;let i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(n!==void 0&&i.reflect===!0){let s=(((a=i.converter)==null?void 0:a.toAttribute)!==void 0?i.converter:Wt).toAttribute(t,i.type);this._$Em=e,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(e,t){var a,s,o;let i=this.constructor,n=i._$Eh.get(e);if(n!==void 0&&this._$Em!==n){let d=i.getPropertyOptions(n),h=typeof d.converter=="function"?{fromAttribute:d.converter}:((a=d.converter)==null?void 0:a.fromAttribute)!==void 0?d.converter:Wt;this._$Em=n;let l=h.fromAttribute(t,d.type);this[n]=(o=l!=null?l:(s=this._$Ej)==null?void 0:s.get(n))!=null?o:l,this._$Em=null}}requestUpdate(e,t,i,n=!1,a){var s,o;if(e!==void 0){let d=this.constructor;if(n===!1&&(a=this[e]),i!=null||(i=d.getPropertyOptions(e)),!(((s=i.hasChanged)!=null?s:$e)(a,t)||i.useDefault&&i.reflect&&a===((o=this._$Ej)==null?void 0:o.get(e))&&!this.hasAttribute(d._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:n,wrapped:a},s){var o,d,h;i&&!((o=this._$Ej)!=null?o:this._$Ej=new Map).has(e)&&(this._$Ej.set(e,(d=s!=null?s:t)!=null?d:this[e]),a!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),n===!0&&this._$Em!==e&&((h=this._$Eq)!=null?h:this._$Eq=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i,n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((i=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[s,o]of a){let{wrapped:d}=o,h=this[s];d!==!0||this._$AL.has(s)||h===void 0||this.C(s,void 0,o,h)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(a=>{var s;return(s=a.hostUpdate)==null?void 0:s.call(a)}),this.update(t)):this._$EM()}catch(a){throw e=!1,this._$EM(),a}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var n;return(n=i.hostUpdated)==null?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}},we;j.elementStyles=[],j.shadowRootOptions={mode:"open"},j[vt("elementProperties")]=new Map,j[vt("finalized")]=new Map,Yt==null||Yt({ReactiveElement:j}),((we=G.reactiveElementVersions)!=null?we:G.reactiveElementVersions=[]).push("2.1.2");var wt=globalThis,Ae=r=>r,Bt=wt.trustedTypes,ke=Bt?Bt.createPolicy("lit-html",{createHTML:r=>r}):void 0,Ee="$lit$",Y=`lit$${Math.random().toFixed(9).slice(2)}$`,Re="?"+Y,vi=`<${Re}>`,q=document,$t=()=>q.createComment(""),At=r=>r===null||typeof r!="object"&&typeof r!="function",ee=Array.isArray,yi=r=>ee(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Lt=`[ 	
\f\r]`,yt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Se=/-->/g,Me=/>/g,Z=RegExp(`>|${Lt}(?:([^\\s"'>=/]+)(${Lt}*=${Lt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),_e=/'/g,Ce=/"/g,Be=/^(?:script|style|textarea|title)$/i,ie=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),m=ie(1),v=ie(2),an=ie(3),X=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),De=new WeakMap,V=q.createTreeWalker(q,129);function Pe(r,e){if(!ee(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ke!==void 0?ke.createHTML(e):e}var wi=(r,e)=>{let t=r.length-1,i=[],n,a=e===2?"<svg>":e===3?"<math>":"",s=yt;for(let o=0;o<t;o++){let d=r[o],h,l,c=-1,u=0;for(;u<d.length&&(s.lastIndex=u,l=s.exec(d),l!==null);)u=s.lastIndex,s===yt?l[1]==="!--"?s=Se:l[1]!==void 0?s=Me:l[2]!==void 0?(Be.test(l[2])&&(n=RegExp("</"+l[2],"g")),s=Z):l[3]!==void 0&&(s=Z):s===Z?l[0]===">"?(s=n!=null?n:yt,c=-1):l[1]===void 0?c=-2:(c=s.lastIndex-l[2].length,h=l[1],s=l[3]===void 0?Z:l[3]==='"'?Ce:_e):s===Ce||s===_e?s=Z:s===Se||s===Me?s=yt:(s=Z,n=void 0);let p=s===Z&&r[o+1].startsWith("/>")?" ":"";a+=s===yt?d+vi:c>=0?(i.push(h),d.slice(0,c)+Ee+d.slice(c)+Y+p):d+Y+(c===-2?o:p)}return[Pe(r,a+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},kt=class r{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let a=0,s=0,o=e.length-1,d=this.parts,[h,l]=wi(e,t);if(this.el=r.createElement(h,i),V.currentNode=this.el.content,t===2||t===3){let c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(n=V.nextNode())!==null&&d.length<o;){if(n.nodeType===1){if(n.hasAttributes())for(let c of n.getAttributeNames())if(c.endsWith(Ee)){let u=l[s++],p=n.getAttribute(c).split(Y),g=/([.?@])?(.*)/.exec(u);d.push({type:1,index:a,name:g[2],strings:p,ctor:g[1]==="."?Vt:g[1]==="?"?qt:g[1]==="@"?Xt:ct}),n.removeAttribute(c)}else c.startsWith(Y)&&(d.push({type:6,index:a}),n.removeAttribute(c));if(Be.test(n.tagName)){let c=n.textContent.split(Y),u=c.length-1;if(u>0){n.textContent=Bt?Bt.emptyScript:"";for(let p=0;p<u;p++)n.append(c[p],$t()),V.nextNode(),d.push({type:2,index:++a});n.append(c[u],$t())}}}else if(n.nodeType===8)if(n.data===Re)d.push({type:2,index:a});else{let c=-1;for(;(c=n.data.indexOf(Y,c+1))!==-1;)d.push({type:7,index:a}),c+=Y.length-1}a++}}static createElement(e,t){let i=q.createElement("template");return i.innerHTML=e,i}};function lt(r,e,t=r,i){var s,o,d;if(e===X)return e;let n=i!==void 0?(s=t._$Co)==null?void 0:s[i]:t._$Cl,a=At(e)?void 0:e._$litDirective$;return(n==null?void 0:n.constructor)!==a&&((o=n==null?void 0:n._$AO)==null||o.call(n,!1),a===void 0?n=void 0:(n=new a(r),n._$AT(r,t,i)),i!==void 0?((d=t._$Co)!=null?d:t._$Co=[])[i]=n:t._$Cl=n),n!==void 0&&(e=lt(r,n._$AS(r,e.values),n,i)),e}var Zt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var h;let{el:{content:t},parts:i}=this._$AD,n=((h=e==null?void 0:e.creationScope)!=null?h:q).importNode(t,!0);V.currentNode=n;let a=V.nextNode(),s=0,o=0,d=i[0];for(;d!==void 0;){if(s===d.index){let l;d.type===2?l=new St(a,a.nextSibling,this,e):d.type===1?l=new d.ctor(a,d.name,d.strings,this,e):d.type===6&&(l=new te(a,this,e)),this._$AV.push(l),d=i[++o]}s!==(d==null?void 0:d.index)&&(a=V.nextNode(),s++)}return V.currentNode=q,n}p(e){let t=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},St=class r{get _$AU(){var e,t;return(t=(e=this._$AM)==null?void 0:e._$AU)!=null?t:this._$Cv}constructor(e,t,i,n){var a;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cv=(a=n==null?void 0:n.isConnected)!=null?a:!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=lt(this,e,t),At(e)?e===b||e==null||e===""?(this._$AH!==b&&this._$AR(),this._$AH=b):e!==this._$AH&&e!==X&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):yi(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==b&&At(this._$AH)?this._$AA.nextSibling.data=e:this.T(q.createTextNode(e)),this._$AH=e}$(e){var a;let{values:t,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=kt.createElement(Pe(i.h,i.h[0]),this.options)),i);if(((a=this._$AH)==null?void 0:a._$AD)===n)this._$AH.p(t);else{let s=new Zt(n,this),o=s.u(this.options);s.p(t),this.T(o),this._$AH=s}}_$AC(e){let t=De.get(e.strings);return t===void 0&&De.set(e.strings,t=new kt(e)),t}k(e){ee(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,n=0;for(let a of e)n===t.length?t.push(i=new r(this.O($t()),this.O($t()),this,this.options)):i=t[n],i._$AI(a),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e!==this._$AB;){let n=Ae(e).nextSibling;Ae(e).remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},ct=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,n,a){this.type=1,this._$AH=b,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=b}_$AI(e,t=this,i,n){let a=this.strings,s=!1;if(a===void 0)e=lt(this,e,t,0),s=!At(e)||e!==this._$AH&&e!==X,s&&(this._$AH=e);else{let o=e,d,h;for(e=a[0],d=0;d<a.length-1;d++)h=lt(this,o[i+d],t,d),h===X&&(h=this._$AH[d]),s||(s=!At(h)||h!==this._$AH[d]),h===b?e=b:e!==b&&(e+=(h!=null?h:"")+a[d+1]),this._$AH[d]=h}s&&!n&&this.j(e)}j(e){e===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},Vt=class extends ct{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===b?void 0:e}},qt=class extends ct{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==b)}},Xt=class extends ct{constructor(e,t,i,n,a){super(e,t,i,n,a),this.type=5}_$AI(e,t=this){var s;if((e=(s=lt(this,e,t,0))!=null?s:b)===X)return;let i=this._$AH,n=e===b&&i!==b||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,a=e!==b&&(i===b||n);n&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)==null?void 0:t.host)!=null?i:this.element,e):this._$AH.handleEvent(e)}},te=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){lt(this,e)}};var Jt=wt.litHtmlPolyfillSupport,Te;Jt==null||Jt(kt,St),((Te=wt.litHtmlVersions)!=null?Te:wt.litHtmlVersions=[]).push("3.3.3");var Ie=(r,e,t)=>{var a,s;let i=(a=t==null?void 0:t.renderBefore)!=null?a:e,n=i._$litPart$;if(n===void 0){let o=(s=t==null?void 0:t.renderBefore)!=null?s:null;i._$litPart$=n=new St(e.insertBefore($t(),o),o,void 0,t!=null?t:{})}return n._$AI(r),n};var tt=globalThis,H=class extends j{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;let e=super.createRenderRoot();return(i=(t=this.renderOptions).renderBefore)!=null||(t.renderBefore=e.firstChild),e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ie(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return X}},ze;H._$litElement$=!0,H.finalized=!0,(ze=tt.litElementHydrateSupport)==null||ze.call(tt,{LitElement:H});var ne=tt.litElementPolyfillSupport;ne==null||ne({LitElement:H});var He;((He=tt.litElementVersions)!=null?He:tt.litElementVersions=[]).push("4.2.2");var Mt=class{constructor(e,t,i){this.host=e;this.type=t;this.entity=i;this.connected=!1;e.addController(this)}hostConnected(){this.connected=!0,this.sync()}hostDisconnected(){this.connected=!1,this.stop()}hostUpdated(){this.sync()}sync(){let e=this.host.hass,t=this.entity();if(!this.connected||!e||!t)return;let i=`${t}|${this.type}`;i!==this.subscribedKey&&(this.stop(),this.subscribedKey=i,this.error=void 0,this.unsub=e.connection.subscribeMessage(n=>{var a;this.forecast=(a=n.forecast)!=null?a:[],this.host.requestUpdate()},{type:"weather/subscribe_forecast",forecast_type:this.type,entity_id:t}),this.unsub.catch(n=>{var a;this.error=(a=n==null?void 0:n.message)!=null?a:String(n),this.subscribedKey=void 0,this.host.requestUpdate()}))}stop(){let e=this.unsub;this.unsub=void 0,this.subscribedKey=void 0,e==null||e.then(t=>t()).catch(()=>{})}};var et=new Map;function dt(r,e){let t=e.ids.filter(Boolean);if(!t.length)return Promise.resolve({});let i=JSON.stringify([t,e.start.getTime(),e.end.getTime(),e.period,e.types]),n=Date.now(),a=et.get(i);if(a&&a.expires>n)return a.promise;let s=r.callWS({type:"recorder/statistics_during_period",start_time:e.start.toISOString(),end_time:e.end.toISOString(),statistic_ids:t,period:e.period,types:e.types}).then($i),o={promise:s,expires:e.end.getTime()<n?1/0:n+3e5};return et.set(i,o),s.catch(()=>et.get(i)===o&&et.delete(i)),et.size>60&&et.delete(et.keys().next().value),s}function $i(r){for(let e of Object.values(r))for(let t of e)typeof t.start!="number"&&(t.start=new Date(t.start).getTime()),typeof t.end!="number"&&(t.end=new Date(t.end).getTime());return r}var C=(r,e)=>m`<div class="head"><ha-icon icon=${r}></ha-icon><span>${e}</span></div>`,ht=R`
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
    border-radius: var(--ha-card-border-radius, 12px); padding: 10px 14px; font-size: 14px;
  }
  .loading, .hint { color: var(--wa-text2); text-align: center; padding: 16px; font-size: 14px; }
`;var N=Math.PI/180;function se(r,e,t){let i=new Date(r.getFullYear(),r.getMonth(),r.getDate(),12),a=Math.round((i.getTime()-Date.UTC(2e3,0,1,12))/864e5)-t/360,s=(357.5291+.98560028*a)%360,o=1.9148*Math.sin(s*N)+.02*Math.sin(2*s*N)+3e-4*Math.sin(3*s*N),d=(s+o+180+102.9372)%360,h=a+.0053*Math.sin(s*N)-.0069*Math.sin(2*d*N),l=Math.asin(Math.sin(d*N)*Math.sin(23.4397*N)),c=(Math.sin(-.833*N)-Math.sin(e*N)*Math.sin(l))/(Math.cos(e*N)*Math.cos(l));if(c<-1||c>1)return;let u=Math.acos(c)/N/360,p=g=>new Date(Date.UTC(2e3,0,1,12)+g*864e5);return{rise:p(h-u),set:p(h+u),noon:p(h)}}var it=29.530588853,Ai=Date.UTC(2e3,0,6,18,14);function Fe(r){let t=((r.getTime()-Ai)/864e5%it+it)%it,i=(1-Math.cos(t/it*2*Math.PI))/2,n=(it/2-t+it)%it;return{age:t,illumination:i,nextFull:new Date(r.getTime()+n*864e5)}}var ki={"clear-night":"Klar",cloudy:"Bew\xF6lkt",exceptional:"Unwetter",fog:"Nebel",hail:"Hagel",lightning:"Gewitter","lightning-rainy":"Gewitter mit Regen",partlycloudy:"Teilweise bew\xF6lkt",pouring:"Starkregen",rainy:"Regnerisch",snowy:"Schnee","snowy-rainy":"Schneeregen",sunny:"Sonnig",windy:"Windig","windy-variant":"Windig und bew\xF6lkt"};function _t(r){return r&&ki[r]||"\u2013"}var Oe={sunny:"47,128,237",partlycloudy:"70,130,200",cloudy:"120,135,150","windy-variant":"120,135,150",rainy:"80,105,135",pouring:"70,90,120",hail:"90,100,125",snowy:"160,180,205","snowy-rainy":"130,150,175",fog:"150,155,160",lightning:"85,80,125","lightning-rainy":"85,80,125",exceptional:"150,70,70",windy:"100,140,170"},Si="35,50,100";function Ue(r,e){return`rgba(${e&&(r==="sunny"||r==="clear-night"||r==="partlycloudy")?Si:r&&Oe[r]||Oe.cloudy},${e?.35:.45})`}var Mi={new_moon:"Neumond",waxing_crescent:"Zunehmende Sichel",first_quarter:"Erstes Viertel",waxing_gibbous:"Zunehmender Mond",full_moon:"Vollmond",waning_gibbous:"Abnehmender Mond",last_quarter:"Letztes Viertel",waning_crescent:"Abnehmende Sichel"};function Ne(r){return r&&Mi[r]||"\u2013"}var Ke="data:image/jpeg;base64,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";var je=new Map;function M(r,e=1){if(r==null||!isFinite(r))return"\u2013";let t=je.get(e);return t||(t=new Intl.NumberFormat("de-DE",{minimumFractionDigits:e,maximumFractionDigits:e}),je.set(e,t)),t.format(r)}var T=(r,e=0)=>r==null?"\u2013":`${M(r,e)}\xB0`,W=(r,e=1)=>`${M(r,e)} l/m\xB2`;function E(r,e){let t=e?r==null?void 0:r.states[e]:void 0;if(!t)return;let i=parseFloat(t.state);return isFinite(i)?i:void 0}var _i=["So","Mo","Di","Mi","Do","Fr","Sa"];function Qe(r,e=new Date){return r.toDateString()===e.toDateString()?"Heute":_i[r.getDay()]}function Ge(r){return`${String(r.getHours()).padStart(2,"0")} Uhr`}function Pt(r){return r.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}var Ci=["N","NO","O","SO","S","SW","W","NW"];function It(r){return r==null||!isFinite(r)?"\u2013":Ci[Math.round((r%360+360)%360/45)%8]}function Ye(r){return m`<div class="tiles">
    ${Ti(r)} ${Di(r)} ${Ei(r)} ${Ri(r)} ${Bi(r)} ${Ii(r)} ${zi(r)} ${Hi(r)}
  </div>`}function Di({hass:r,config:e}){var s;let t=(s=e.sensors)!=null?s:{},i=E(r,t.feels_like);if(i==null)return b;let n=E(r,t.temperature),a=n==null?"":i<n-1?"Durch den Wind f\xFChlt es sich k\xE4lter an.":i>n+1?"Durch die Luftfeuchtigkeit f\xFChlt es sich w\xE4rmer an.":"\xC4hnlich wie die tats\xE4chliche Temperatur.";return m`<section class="card tile">${C("mdi:thermometer-lines","Gef\xFChlt")}
    <div class="val">${T(i)}</div><div class="txt">${a}</div></section>`}function Ti({hass:r,config:e}){var o;let t=(o=e.sensors)!=null?o:{},i=E(r,t.wind_speed);if(i==null)return b;let n=E(r,t.wind_gust),a=E(r,t.wind_direction),s=[...Array(72)].map((d,h)=>{let l=h*5*Math.PI/180,c=h%18===0?38:41;return v`<line x1=${50+Math.sin(l)*c} y1=${50-Math.cos(l)*c} x2=${50+Math.sin(l)*45} y2=${50-Math.cos(l)*45} class=${h%18===0?"tk major":"tk"}/>`});return m`<section class="card tile wide2">${C("mdi:weather-windy","Wind")}
    <div class="wind">
      <div class="rows">
        <div class="row"><span>Wind</span><b>${M(i,0)} km/h</b></div>
        ${n!=null?m`<div class="row"><span>Böen</span><b>${M(n,0)} km/h</b></div>`:b}
        ${a!=null?m`<div class="row"><span>Richtung</span><b>${M(a,0)}° ${It(a)}</b></div>`:b}
      </div>
      <svg class="compass" viewBox="0 0 100 100">
        ${s}
        ${["N","O","S","W"].map((d,h)=>v`<text x=${50+Math.sin(h*Math.PI/2)*30} y=${54-Math.cos(h*Math.PI/2)*30} class="cl">${d}</text>`)}
        ${a!=null?v`<g transform="rotate(${a+180} 50 50)">
          <line x1="50" y1="88" x2="50" y2="18" class="arrow"/><path d="M50 10l-6 11h12z" class="arrowhead"/>
          <circle cx="50" cy="88" r="3.5" class="arrowhead"/></g>`:b}
        <circle cx="50" cy="50" r="17" class="hub"/>
        <text x="50" y="50" class="cv">${M(i,0)}</text><text x="50" y="60" class="cu">km/h</text>
      </svg>
    </div></section>`}function Ei({hass:r,config:e,hourly:t,recent:i}){var h;let n=(h=e.sensors)!=null?h:{};if(!n.rain_total&&!t)return b;let a=n.rain_total&&(i!=null&&i[n.rain_total])?i[n.rain_total].reduce((l,c)=>{var u;return l+((u=c.change)!=null?u:0)},0):void 0,s=Date.now(),o=t==null?void 0:t.filter(l=>{let c=new Date(l.datetime).getTime();return c>=s-36e5&&c<s+23*36e5}).reduce((l,c)=>{var u;return l+((u=c.precipitation)!=null?u:0)},0),d=E(r,n.rain_rate);return m`<section class="card tile">${C("mdi:water","Niederschlag")}
    <div class="val">${a!=null?W(a):"\u2013"}</div>
    <div class="lbl">in den letzten 24 Std.</div>
    <div class="txt">${d?m`Aktuell ${M(d)} l/m² pro Std.<br>`:b}
      ${o!=null?`${W(o)} in den n\xE4chsten 24 Std. erwartet.`:""}</div></section>`}function Ri({hass:r,config:e,recent:t}){var c;let i=(c=e.sensors)!=null?c:{},n=E(r,i.pressure);if(n==null)return b;let a=i.pressure?t==null?void 0:t[i.pressure]:void 0,s=a&&a.length>=3?a[a.length-3].mean:void 0,o=s!=null?n-s:void 0,d=o==null?"":o>1?"steigend":o<-1?"fallend":"gleichbleibend",h=o==null?0:Math.max(-1,Math.min(1,o/4))*120,l=[...Array(41)].map((u,p)=>{let g=(-120+p*6)*Math.PI/180;return v`<line x1=${50+Math.sin(g)*36} y1=${54-Math.cos(g)*36} x2=${50+Math.sin(g)*44} y2=${54-Math.cos(g)*44} class="tk"/>`});return m`<section class="card tile">${C("mdi:gauge","Luftdruck")}
    <svg class="gauge" viewBox="0 0 100 92">
      ${l}
      <g transform="rotate(${h} 50 54)"><line x1="50" y1="6" x2="50" y2="20" class="needle"/></g>
      <text x="50" y="52" class="gv">${M(n,0)}</text><text x="50" y="64" class="gu">hPa</text>
      <text x="16" y="90" class="gu">−</text><text x="84" y="90" class="gu">+</text>
    </svg>
    <div class="txt">${d?m`3 Std.: ${d} (${o>0?"+":""}${M(o,1)} hPa)`:b}</div></section>`}function Bi({hass:r,config:e}){var a;let t=(a=e.sensors)!=null?a:{},i=E(r,t.humidity);if(i==null)return b;let n=E(r,t.dewpoint);return m`<section class="card tile">${C("mdi:water-percent","Feuchtigkeit")}
    <div class="val">${M(i,0)} %</div>
    <div class="txt">${n!=null?`Der Taupunkt liegt derzeit bei ${T(n)}.`:""}</div></section>`}var Pi=[[3,"Niedrig"],[6,"Mittel"],[8,"Hoch"],[11,"Sehr hoch"],[99,"Extrem"]];function Ii({hass:r,config:e}){var s;let t=(s=e.sensors)!=null?s:{},i=E(r,t.uv);if(i==null)return b;let n=E(r,t.solar),a=Pi.find(([o])=>i<o)[1];return m`<section class="card tile">${C("mdi:sun-wireless","UV-Index")}
    <div class="val">${M(i,0)}</div><div class="lbl">${a}</div>
    <div class="uvbar"><i style="left:${Math.min(100,i/11*100)}%"></i></div>
    <div class="txt">${n!=null?`Sonneneinstrahlung ${M(n,0)} W/m\xB2`:""}</div></section>`}function zi({hass:r,config:e}){var O,B,F,nt,Tt,xt,Q,st,rt;let t=(O=r.states[e.weather])==null?void 0:O.attributes,i=e.sun?r.states[e.sun]:void 0,n=(F=t==null?void 0:t.latitude)!=null?F:(B=r.config)==null?void 0:B.latitude,a=(Tt=t==null?void 0:t.longitude)!=null?Tt:(nt=r.config)==null?void 0:nt.longitude;if(n==null||a==null)return b;let s=new Date,o=se(s,n,a);if(!o)return b;let d=P=>P&&new Date(P).toDateString()===s.toDateString()?new Date(P):void 0,h=(xt=d(i==null?void 0:i.attributes.next_rising))!=null?xt:o.rise,l=(Q=d(i==null?void 0:i.attributes.next_setting))!=null?Q:o.set,c=s<l,u=s<h?["Sonnenaufgang",h]:c?["Sonnenuntergang",l]:["Sonnenaufgang",(rt=(st=se(new Date(s.getTime()+864e5),n,a))==null?void 0:st.rise)!=null?rt:h],p=new Date(s.getFullYear(),s.getMonth(),s.getDate()).getTime(),g=P=>(P.getTime()-p)/864e5,y=(g(h)+g(l))/2,A=g(l)-g(h),x=P=>Math.cos(2*Math.PI*(P-y)),$=Math.cos(Math.PI*A),w=P=>34-P*22,S=[...Array(49)].map((P,at)=>`${at?"L":"M"}${at/48*100},${w(x(at/48))}`).join(" "),I=g(s),D=s>=h&&s<l;return m`<section class="card tile">${C(D?"mdi:weather-sunset-down":"mdi:weather-sunset-up",u[0])}
    <div class="val">${Pt(u[1])}</div>
    <div class="sunarc">
      <svg viewBox="0 0 100 60" preserveAspectRatio="none">
        <path d=${S} class="sunpath"/>
        <line x1="0" x2="100" y1=${w($)} y2=${w($)} class="hz"/>
      </svg>
      <!-- Punkt als HTML, sonst verzerrt preserveAspectRatio=none ihn zur Ellipse -->
      <i class=${D?"sundot":"sundot down"} style="left:${I*100}%;top:${w(x(I))/60*100}%"></i>
    </div>
    <div class="txt">${u[0]==="Sonnenuntergang"?`Sonnenaufgang: ${Pt(h)}`:`Sonnenuntergang: ${Pt(l)}`}</div>
  </section>`}function Hi({hass:r,config:e}){var s;let t=e.moon?(s=r.states[e.moon])==null?void 0:s.state:void 0,i=Fe(new Date),n=Math.round((i.nextFull.getTime()-Date.now())/864e5),a=i.illumination;return m`<section class="card tile wide2 moont">${C("mdi:moon-waxing-gibbous",t?Ne(t):"Mond")}
    <div class="moon">
      <div>
        <div class="row"><span>Beleuchtung</span><b>${Math.round(a*100)} %</b></div>
        <div class="row"><span>Nächster Vollmond</span><b>${n<=0?"heute":n===1?"morgen":`in ${n} Tg.`}</b></div>
      </div>
      ${Fi(a,i.age<29.530588853/2)}
    </div></section>`}function Fi(r,e){let a=`M50 30 A20 20 0 0 0 50 70 A${20*Math.abs(1-2*r)} 20 0 0 ${r>.5?1:0} 50 30Z`;return v`<svg class="moonimg" viewBox="28 28 44 44" aria-hidden="true">
    <defs>
      <filter id="ms" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="0.6"/></filter>
      <clipPath id="mc"><circle cx=${50} cy=${50} r=${20}/></clipPath>
    </defs>
    <g clip-path="url(#mc)">
      <image href=${Ke} x=${30} y=${30} width=${40} height=${40}/>
      ${r<.995?v`<path d=${a} fill="#05070c" fill-opacity="0.88" filter="url(#ms)"
        transform=${e?"":"translate(100 0) scale(-1 1)"}/>`:b}
    </g>
  </svg>`}var We=R`
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
`;var Oi="M18 46a10 10 0 0 1 0-20a14 14 0 0 1 27-3a11.5 11.5 0 0 1 1 23z",Le=(r=32,e=32,t=11)=>v`
  <g class="sun">
    <circle cx=${r} cy=${e} r=${t} fill="#FFD84D"/>
    ${[0,45,90,135,180,225,270,315].map(i=>{let n=i*Math.PI/180,a=r+Math.cos(n)*(t+4),s=e+Math.sin(n)*(t+4),o=r+Math.cos(n)*(t+9),d=e+Math.sin(n)*(t+9);return v`<line x1=${a} y1=${s} x2=${o} y2=${d} stroke="#FFD84D" stroke-width="3.5" stroke-linecap="round"/>`})}
  </g>`,re=(r=0,e=0,t=1)=>v`
  <path class="mo" transform="translate(${r} ${e}) scale(${t})"
    d="M40 10a20 20 0 1 0 14 34A17 17 0 0 1 40 10z"/>`,U=(r=0,e=0,t=1,i="c1")=>v`
  <path transform="translate(${r} ${e}) scale(${t})" d=${Oi} class=${i}/>`,zt=r=>v`
  ${[...Array(r)].map((e,t)=>{let i=22+t*(20/Math.max(1,r-1));return v`<line x1=${i} y1="50" x2=${i-3} y2="58" stroke="#4FB3FF" stroke-width="3" stroke-linecap="round"/>`})}`,Je=v`${[22,32,42].map((r,e)=>v`<circle cx=${r} cy=${e%2?57:53} r="2.6" class="fl"/>`)}`,Ze=v`<path d="M34 44l-7 10h6l-3 9l10-13h-6l3-6z" fill="#FFD84D"/>`,Ui=v`${[40,47,54].map((r,e)=>v`<line x1=${12+e*3} y1=${r} x2=${52-e*2} y2=${r} class="ln" stroke-width="3.5" stroke-linecap="round"/>`)}`;function Ct(r,e=!1){let t;switch(r){case"sunny":t=e?re(2,6,.95):Le();break;case"clear-night":t=re(2,6,.95);break;case"partlycloudy":t=v`${e?re(10,-2,.7):Le(42,22,9)}${U(-4,6,1)}`;break;case"cloudy":case"windy-variant":t=v`${U(10,-4,.75,"c2")}${U(-4,6)}`;break;case"fog":t=v`${U(0,-8,.95,"c2")}${Ui}`;break;case"rainy":t=v`${U(0,-6)}${zt(3)}`;break;case"pouring":t=v`${U(0,-6,1,"c2")}${zt(5)}`;break;case"hail":t=v`${U(0,-6,1,"c2")}${Je}`;break;case"snowy":t=v`${U(0,-6)}${Je}`;break;case"snowy-rainy":t=v`${U(0,-6)}${zt(2)}<circle cx="32" cy="55" r="2.6" class="fl"/>`;break;case"lightning":t=v`${U(0,-8,1,"c2")}${Ze}`;break;case"lightning-rainy":case"exceptional":t=v`${U(0,-8,1,"c2")}${Ze}${zt(2)}`;break;case"windy":t=v`${[24,32,40].map((i,n)=>v`<path d="M10 ${i}h${30-n*6}a6 6 0 1 0-6-6" fill="none" class="ln" stroke-width="3.5" stroke-linecap="round"/>`)}`;break;default:t=U(0,0,1,"c2")}return v`<svg class="wicon" viewBox="0 0 64 64" aria-hidden="true">${t}</svg>`}function Ht(r,e,t=Date.now()){let i=(r!=null?r:[]).filter(s=>s.temperature!=null).map(s=>({t:new Date(s.datetime).getTime(),v:s.temperature})),n=Ni(i,t),a=e!=null&&n!=null?e-n:0;return(s,o)=>{if(o==null||!a||s<=t)return o;let d=1-(s-t)/(3*36e5);return d>0?o+a*d:o}}function Ni(r,e){for(let t=0;t<r.length-1;t++){let i=r[t],n=r[t+1];if(i.t<=e&&e<=n.t)return i.v+(n.v-i.v)*(e-i.t)/(n.t-i.t||1)}if(r.length&&r[0].t>e&&r[0].t-e<=36e5)return r[0].v}var pt=class extends H{constructor(){super(...arguments);this._tab="forecast";this._wide=!1;this._metric="temp";this.hourly=new Mt(this,"hourly",()=>{var t;return(t=this._config)==null?void 0:t.weather});this.daily=new Mt(this,"daily",()=>{var t;return(t=this._config)==null?void 0:t.weather})}setConfig(t){if(!(t!=null&&t.weather))throw new Error("`weather:` fehlt (z. B. weather.weather_fusion_ai_kresslingweg)");this._config={...t,sensors:{...t.sensors}}}static getStubConfig(t){var i;return{weather:(i=Object.keys(t.states).find(n=>n.startsWith("weather.")))!=null?i:""}}getCardSize(){return 12}getGridOptions(){return{columns:"full",rows:"auto"}}connectedCallback(){var t;super.connectedCallback(),(t=this._ro)!=null||(this._ro=new ResizeObserver(i=>{let n=i[0].contentRect.width>=820;n!==this._wide&&(this._wide=n)})),this._ro.observe(this)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._ro)==null||t.disconnect()}shouldUpdate(t){if(t.size>1||!t.has("hass"))return!0;let i=t.get("hass");return!i||!this.hass||!this._config?!0:this.watchedIds().some(n=>i.states[n]!==this.hass.states[n])}watchedIds(){var i;let t=this._config;return[t.weather,t.sun,t.moon,...Object.values((i=t.sensors)!=null?i:{})].filter(Boolean)}updated(){this._tab==="forecast"&&this.loadRecent()}loadRecent(){var s;let t=(s=this._config.sensors)!=null?s:{},i=[t.rain_total,t.pressure].filter(Boolean);if(!this.hass||!i.length)return;let n=Math.ceil(Date.now()/3e5)*3e5,a=String(n);a!==this._recentKey&&(this._recentKey=a,dt(this.hass,{ids:i,start:new Date(n-864e5),end:new Date(n),period:"hour",types:["mean","change"]}).then(o=>a===this._recentKey&&(this._recent=o),()=>this._recentKey=void 0))}openDetail(t,i=this._metric){this._metric=i,this._detail=t}render(){var o,d,h,l,c;if(!this._config||!this.hass)return b;let t=this.hass.states[this._config.weather];if(!t)return m`<div class="warn">Entität ${this._config.weather} nicht gefunden.</div>`;let i=this._config.sun?((o=this.hass.states[this._config.sun])==null?void 0:o.state)==="below_horizon":!1,n=(d=this._config.sensors)!=null?d:{},a=(h=E(this.hass,n.temperature))!=null?h:t.attributes.temperature,s=(l=this.daily.forecast)==null?void 0:l[0];return m`
      <div class="app ${this._wide?"wide":""} ${(c=this.hass.themes)!=null&&c.darkMode?"dark":""} ${this._config.layout==="page"?"page":""}"
        style="--wa-tint:${Ue(t.state,i)}">
        <header>
          ${this._config.name?m`<div class="place">${this._config.name}</div>`:b}
          <div class="now">${T(a)}</div>
          <div class="cond">${_t(t.state)}</div>
          ${s?m`<div class="hl">H: ${T(s.temperature)}  T: ${T(s.templow)}</div>`:b}
        </header>

        <nav class="tabs" role="tablist">
          ${["forecast","history"].map(u=>m`
            <button role="tab" aria-selected=${this._tab===u} class=${this._tab===u?"on":""}
              @click=${()=>this._tab=u}>
              <ha-icon icon=${u==="forecast"?"mdi:calendar-arrow-right":"mdi:chart-line"}></ha-icon>
              ${u==="forecast"?"Vorhersage":"Historie"}
            </button>`)}
        </nav>

        <main>${this._tab==="forecast"?this.renderForecast(a,i):m`<wetter-app-history .hass=${this.hass} .config=${this._config} .wide=${this._wide}></wetter-app-history>`}</main>
      </div>
    `}renderForecast(t,i){var a,s;let n=(a=this.hourly.error)!=null?a:this.daily.error;return m`
      ${n?m`<div class="warn">Vorhersage nicht verfügbar: ${n}</div>`:b}
      <div class="cols">
        <div class="left">
          <section class="card hourly">${this.renderHourly(t,i)}</section>
          ${Ye({hass:this.hass,config:this._config,hourly:this.hourly.forecast,recent:this._recent})}
        </div>
        <section class="card daily">${this.renderDaily(t)}</section>
      </div>
      ${this._detail!=null&&this.daily.forecast?m`<wetter-app-day-detail .hass=${this.hass} .config=${this._config} .hourly=${(s=this.hourly.forecast)!=null?s:[]}
            .daily=${this.daily.forecast} .index=${this._detail} .metric=${this._metric}
            @close=${()=>this._detail=void 0}
            @select=${o=>this._detail=o.detail.index}
            @metric=${o=>this._metric=o.detail.metric}></wetter-app-day-detail>`:b}
    `}renderHourly(t,i){let n=this.hourly.forecast;if(!n)return m`<div class="loading">Lade Stundenvorhersage …</div>`;let a=Date.now()-36e5,s=n.filter(d=>new Date(d.datetime).getTime()>a).slice(0,25),o=Ht(n,t);return m`
      ${C("mdi:clock-outline","St\xFCndlich")}
      <div class="hours">
        ${s.map((d,h)=>{var l;return m`
          <div class="hr" @click=${()=>this.openDetail(0,"temp")}>
            <div class="t">${h===0?"Jetzt":Ge(new Date(d.datetime))}</div>
            ${Ct(d.condition,h===0?i:d.is_daytime===!1)}
            <div class="p">${((l=d.precipitation_probability)!=null?l:0)>=20?`${Math.round(d.precipitation_probability)} %`:""}</div>
            <div class="v">${T(h===0?t!=null?t:d.temperature:o(new Date(d.datetime).getTime(),d.temperature))}</div>
          </div>`})}
      </div>
    `}renderDaily(t){let i=this.daily.forecast;if(!i)return m`<div class="loading">Lade Tagesvorhersage …</div>`;let n=i.slice(0,10),a=Math.min(...n.map(h=>{var l,c;return(c=(l=h.templow)!=null?l:h.temperature)!=null?c:99})),s=Math.max(...n.map(h=>{var l;return(l=h.temperature)!=null?l:-99})),o=Math.max(1,s-a),d=h=>(h-a)/o*100;return m`
      ${C("mdi:calendar-week",`${n.length}-Tage-Vorhersage`)}
      ${n.map((h,l)=>{var y,A,x,$;let c=(A=(y=h.templow)!=null?y:h.temperature)!=null?A:a,u=(x=h.temperature)!=null?x:c,p=Math.max(.5,d(u)-d(c)),g=`background-size:${100/p*100}% 100%;background-position:${p>=100?0:d(c)/(100-p)*100}% 0`;return m`
          <div class="day" role="button" tabindex="0" @click=${()=>this.openDetail(l)}
            @keydown=${w=>w.key==="Enter"&&this.openDetail(l)}>
            <div class="wd">${Qe(new Date(h.datetime))}</div>
            <div class="ic">
              ${Ct(h.condition)}
              <span class="p">${(($=h.precipitation_probability)!=null?$:0)>=20?`${Math.round(h.precipitation_probability)} %`:""}</span>
            </div>
            <div class="lo">${T(c)}</div>
            <div class="bar">
              <div class="fill" style="left:${d(c)}%;right:${100-d(u)}%;${g}"></div>
              ${l===0&&t!=null?m`<div class="dot" style="left:${Math.min(100,Math.max(0,d(t)))}%"></div>`:b}
            </div>
            <div class="hi">${T(u)}</div>
          </div>`})}
    `}};pt.properties={hass:{attribute:!1},_config:{state:!0},_tab:{state:!0},_wide:{state:!0},_detail:{state:!0},_metric:{state:!0},_recent:{state:!0}},pt.styles=[ht,We,R`
      :host { display: block; }
      /* Dezenter Wetter-Farbton oben, läuft in den Theme-Hintergrund aus */
      .app {
        box-sizing: border-box; padding: 16px 12px; display: flex; flex-direction: column; gap: 12px;
        border-radius: var(--ha-card-border-radius, 12px);
        background: linear-gradient(180deg, var(--wa-tint) 0, transparent 520px), var(--primary-background-color, #111);
      }
      .app > * { width: 100%; max-width: 1200px; margin-left: auto; margin-right: auto; box-sizing: border-box; }
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

    `];var _={l:6,r:38,t:18,b:22},mt=class extends H{constructor(){super(...arguments);this.start=0;this.end=0;this.series=[];this.ticks=[];this.markers=[];this.height=200;this.yUnit="";this.rightUnit="";this.timeFormat=t=>new Date(t).toLocaleString("de-DE");this._w=0}connectedCallback(){var t;super.connectedCallback(),(t=this._ro)!=null||(this._ro=new ResizeObserver(i=>{let n=Math.round(i[0].contentRect.width);n&&n!==this._w&&(this._w=n)})),this._ro.observe(this)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._ro)==null||t.disconnect()}willUpdate(t){(t.has("series")||t.has("start"))&&(this._hover=void 0)}x(t){let i=Math.max(1,this.end-this.start);return _.l+(t-this.start)/i*(this._w-_.l-_.r)}scale(t){var l;let i=[];for(let c of this.series)if(((l=c.axis)!=null?l:"left")===t){for(let u of c.points)u.v!=null&&i.push(u.v),u.v2!=null&&i.push(u.v2);c.type==="bar"&&i.push(0)}let n=t==="left"?this.yMin:0,a=t==="left"?this.yMax:this.rightMax;n==null&&(n=i.length?Math.min(...i):0),a==null&&(a=i.length?Math.max(...i):1),a-n<1e-9&&(a=n+1);let s=ji((a-n)/4);t==="left"&&this.yMin==null&&(n=Math.floor(n/s)*s),t==="left"&&this.yMax==null&&(a=Math.ceil(a/s)*s),t==="right"&&this.rightMax==null&&(a=Math.ceil(a/s)*s);let o=this.height-_.t-_.b,d=c=>_.t+o-(c-n)/(a-n)*o,h=[];for(let c=n;c<=a+s/1e3;c+=s)h.push(Math.round(c*1e6)/1e6);return{y:d,ticks:h,lo:n,hi:a}}onPointer(t){let i=t.currentTarget.getBoundingClientRect(),n=t.clientX-i.left,a=this.start+(n-_.l)/(this._w-_.l-_.r)*(this.end-this.start),s;for(let o of this.series)for(let d of o.points){if(d.v==null)continue;let h=Ft(o,d);(s==null||Math.abs(h-a)<Math.abs(s-a))&&(s=h)}this._hover=s}render(){var h;let t=this._w;if(!t||this.end<=this.start)return m`<div style="height:${this.height}px"></div>`;let i=this.scale("left"),a=this.series.some(l=>l.axis==="right")?this.scale("right"):void 0,s=this.height-_.b,o=[];this.now&&this.now>this.start&&this.now<this.end&&o.push(v`<rect x=${_.l} y=${_.t} width=${this.x(this.now)-_.l} height=${s-_.t} class="past"/>`);for(let l of i.ticks){let c=i.y(l);o.push(v`<line x1=${_.l} x2=${t-_.r} y1=${c} y2=${c} class="grid"/>`),o.push(v`<text x=${t-_.r+6} y=${c+4} class="ylab">${Ve(l)}${this.yUnit}</text>`)}if(a){let l=this.series.find(c=>c.axis==="right").color;for(let c of a.ticks)c!==0&&o.push(v`<text x=${_.l+3} y=${a.y(c)-3} class="rlab" style="fill:${l}">${Ve(c)}${this.rightUnit}</text>`)}for(let l of this.ticks){let c=this.x(l.t);c<_.l-1||c>t-_.r+1||(o.push(v`<line x1=${c} x2=${c} y1=${_.t} y2=${s} class="vgrid"/>`),o.push(v`<text x=${c+3} y=${this.height-6} class="xlab">${l.label}</text>`))}this.series.forEach((l,c)=>{var y,A;let u=l.axis==="right"&&a?a:i,p=l.points.filter(x=>x.v!=null).sort((x,$)=>x.t-$.t);if(!p.length)return;if(l.type==="bar"||l.type==="range"){let x=(y=l.barWidth)!=null?y:p.length>1?p[1].t-p[0].t:(this.end-this.start)/24,$=u.y(Math.max(0,u.lo));for(let w of p){let S=w.t2!=null?w.t2-w.t:x,I=Math.max(1.5,Math.min(14,(this.x(this.start+S)-this.x(this.start))*.65)),D=this.x(w.t+S/2),O=u.y(w.v),B=l.type==="range"?u.y((A=w.v2)!=null?A:w.v):$,F=Math.max(l.type==="range"?I:.5,Math.abs(B-O)),nt=Math.min(O,B)-(F-Math.abs(B-O))/2;o.push(v`<rect x=${D-I/2} y=${nt} width=${I} height=${F} rx=${l.type==="range"?I/2:2} style="fill:${l.color}"/>`)}return}if(l.type==="band"){let x=p.filter(w=>w.v2!=null).map(w=>[this.x(w.t),u.y(w.v2)]),$=p.map(w=>[this.x(w.t),u.y(w.v)]).reverse();x.length&&o.push(v`<path d=${ut(x)+" L"+ut($).slice(1)+"Z"} style="fill:${l.color};fill-opacity:0.28"/>`);return}let g=p.map(x=>[this.x(x.t),u.y(x.v)]);if(l.type==="area"){let x=`g${c}`;o.push(v`
          <defs><linearGradient id=${x} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" style="stop-color:${l.color};stop-opacity:0.45"/>
            <stop offset="1" style="stop-color:${l.color};stop-opacity:0.04"/>
          </linearGradient></defs>
          <path d=${`${ut(g)} L${g[g.length-1][0]},${s} L${g[0][0]},${s}Z`} fill="url(#${x})"/>`)}if(l.dashUntil!=null&&p[0].t<l.dashUntil){let x=p.findIndex(S=>S.t>=l.dashUntil),$=x<0?g:g.slice(0,x+1),w=x<0?[]:g.slice(x);o.push(v`<path d=${ut($)} class="ln" style="stroke:${l.color}" stroke-dasharray="5 5"/>`),w.length>1&&o.push(v`<path d=${ut(w)} class="ln" style="stroke:${l.color}"/>`)}else o.push(v`<path d=${ut(g)} class="ln" style="stroke:${l.color}" stroke-dasharray=${l.dashed?"4 4":"none"}/>`)});for(let l of this.markers){let c=this.x(l.t),u=i.y(l.v);o.push(v`<circle cx=${c} cy=${u} r="4" class="mk"/>`),o.push(v`<text x=${c} y=${u-9} class="mklab">${l.label}</text>`)}if(this.now&&this.now>this.start&&this.now<this.end){let l=this.x(this.now);o.push(v`<line x1=${l} x2=${l} y1=${_.t} y2=${s} class="nowl"/>`)}let d=b;if(this._hover!=null){let l=this._hover,c=this.x(l);o.push(v`<line x1=${c} x2=${c} y1=${_.t-6} y2=${s} class="hov"/>`);let u=[];for(let g of this.series){let y=Ki(g,l);if(!y||y.v==null||g.silent)continue;let A=g.axis==="right"&&a?a:i;(g.type==="line"||g.type==="area")&&o.push(v`<circle cx=${c} cy=${A.y(y.v)} r="4" style="fill:${g.color}" class="hdot"/>`);let x=$=>{var w,S;return`${M($,(w=g.digits)!=null?w:1)}${(S=g.unit)!=null?S:""}`};(g.type==="band"||g.type==="range")&&y.v2!=null?u.push({color:g.color,label:"Max",value:x(y.v2)},{color:g.color,label:"Min",value:x(y.v)}):u.push({color:g.color,label:(h=g.label)!=null?h:"",value:x(y.v)})}let p=c>t/2?`right:${t-c+8}px`:`left:${c+8}px`;d=m`<div class="tip" style="${p}"><b>${this.timeFormat(l)}</b>
        ${u.map(g=>m`<div class="tr"><i style="background:${g.color}"></i><span>${g.label}</span><b>${g.value}</b></div>`)}</div>`}return m`
      <div class="wrap">
        ${d}
        <svg width=${t} height=${this.height} @pointermove=${this.onPointer} @pointerdown=${this.onPointer}
          @pointerleave=${()=>this._hover=void 0}>${o}</svg>
      </div>
    `}};mt.properties={start:{type:Number},end:{type:Number},series:{attribute:!1},ticks:{attribute:!1},markers:{attribute:!1},now:{type:Number},height:{type:Number},yMin:{type:Number},yMax:{type:Number},yUnit:{type:String},rightMax:{type:Number},rightUnit:{type:String},timeFormat:{attribute:!1},_w:{state:!0},_hover:{state:!0}},mt.styles=R`
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
  `;function Ki(r,e){var a;let t;for(let s of r.points)s.v!=null&&(!t||Math.abs(Ft(r,s)-e)<Math.abs(Ft(r,t)-e))&&(t=s);if(!t)return;let i=r.points,n=t.t2!=null?t.t2-t.t:(a=r.barWidth)!=null?a:i.length>1?Math.abs(i[1].t-i[0].t):1/0;return Math.abs(Ft(r,t)-e)<=n/2+1?t:void 0}function Ft(r,e){var n;if(r.type!=="bar"&&r.type!=="range")return e.t;let t=r.points,i=e.t2!=null?e.t2-e.t:(n=r.barWidth)!=null?n:t.length>1?t[1].t-t[0].t:0;return e.t+i/2}function ji(r){let e=Math.pow(10,Math.floor(Math.log10(Math.max(r,1e-9)))),t=r/e;return(t<=1?1:t<=2?2:t<=2.5?2.5:t<=5?5:10)*e}function Ve(r){return Number.isInteger(r)?String(r):M(r,1)}function ut(r){let e=r.length;if(e===0)return"";if(e<3)return"M"+r.map(s=>`${s[0]},${s[1]}`).join(" L");let t=[],i=[],n=[];for(let s=0;s<e-1;s++)t[s]=r[s+1][0]-r[s][0],i[s]=t[s]?(r[s+1][1]-r[s][1])/t[s]:0;n[0]=i[0],n[e-1]=i[e-2];for(let s=1;s<e-1;s++)n[s]=i[s-1]*i[s]<=0?0:3*(t[s-1]+t[s])/((2*t[s]+t[s-1])/i[s-1]+(t[s]+2*t[s-1])/i[s]);let a=`M${r[0][0]},${r[0][1]}`;for(let s=0;s<e-1;s++){let o=t[s]/3;a+=` C${r[s][0]+o},${r[s][1]+o*n[s]} ${r[s+1][0]-o},${r[s+1][1]-o*n[s+1]} ${r[s+1][0]},${r[s+1][1]}`}return a}var qe=[{id:"temp",label:"Temperatur",icon:"mdi:thermometer"},{id:"rain",label:"Niederschlag",icon:"mdi:weather-pouring"},{id:"wind",label:"Wind",icon:"mdi:weather-windy"}],K=36e5,Qi=["S","M","D","M","D","F","S"];function Xe(r){let e=new Date(r);return new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()}var gt=class extends H{constructor(){super(...arguments);this.hourly=[];this.daily=[];this.index=0;this.metric="temp";this.onKey=t=>t.key==="Escape"&&this.close()}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey)}close(){this.dispatchEvent(new CustomEvent("close"))}willUpdate(t){(t.has("index")||t.has("hass"))&&this.loadPast()}loadPast(){var d,h;let t=(h=(d=this.config)==null?void 0:d.sensors)!=null?h:{},i=this.daily[this.index];if(!this.hass||!i)return;let n=Xe(i.datetime),a=Date.now();if(n>a)return;let s=Math.min(n+24*K,Math.ceil(a/3e5)*3e5),o=`${n}|${s}`;o!==this._pastKey&&(this._pastKey=o,dt(this.hass,{ids:[t.temperature,t.rain_total,t.wind_speed,t.wind_gust].filter(Boolean),start:new Date(n),end:new Date(s),period:"hour",types:["mean","max","change"]}).then(l=>o===this._pastKey&&(this._past=l),()=>this._pastKey=void 0))}render(){let t=this.daily[this.index];if(!t)return b;let i=Xe(t.datetime),n=i+24*K,a=Date.now(),s=a>=i&&a<n,o=this.hourly.filter(h=>{let l=new Date(h.datetime).getTime();return l>=i&&l<=n}),d=new Date(i).toLocaleDateString("de-DE",{weekday:"long",day:"numeric",month:"long"});return m`
      <div class="backdrop" @click=${this.close}></div>
      <div class="sheet" role="dialog" aria-label="Tagesdetail">
        <div class="top">
          <button class="ib" aria-label="Schließen" @click=${this.close}><ha-icon icon="mdi:close"></ha-icon></button>
          <div class="ttl">${qe.find(h=>h.id===this.metric).label}</div>
          <span style="width:40px"></span>
        </div>

        <div class="days">
          ${this.daily.map((h,l)=>{let c=new Date(h.datetime);return m`<button class=${l===this.index?"on":""} @click=${()=>this.select(l)}>
              <span class="l">${Qi[c.getDay()]}</span><span class="n">${c.getDate()}</span></button>`})}
        </div>
        <div class="date">${d}</div>

        <div class="chips">
          ${qe.map(h=>m`<button class=${h.id===this.metric?"on":""}
            @click=${()=>this.setMetric(h.id)}><ha-icon icon=${h.icon}></ha-icon>${h.label}</button>`)}
        </div>

        <section class="card">
          ${this.renderSummary(t,o,s)}
          ${o.length?this.renderChart(i,n,o,s?a:void 0):m`<div class="hint">Für diesen Tag gibt es keine Stundenvorhersage.</div>`}
        </section>
      </div>
    `}select(t){this.dispatchEvent(new CustomEvent("select",{detail:{index:t}}))}setMetric(t){this.dispatchEvent(new CustomEvent("metric",{detail:{metric:t}}))}renderSummary(t,i,n){var h,l,c;let a=(h=this.config.sensors)!=null?h:{};if(this.metric==="temp"){let u=n?E(this.hass,a.temperature):void 0;return m`<div class="sum">
        <div class="sum-ic">${Ct(t.condition)}</div>
        <div>
          <div class="big">${u!=null?T(u):_t(t.condition)}</div>
          <div class="sub">H: ${T(t.temperature)} · T: ${T(t.templow)}${u!=null?` \xB7 ${_t(t.condition)}`:""}</div>
        </div>
      </div>`}if(this.metric==="rain"){let u=n&&a.rain_total?this.pastRows(a.rain_total).reduce((g,y)=>{var A;return g+((A=y.change)!=null?A:0)},0):void 0,p=Math.max(0,...i.map(g=>{var y;return(y=g.precipitation_probability)!=null?y:0}),(l=t.precipitation_probability)!=null?l:0);return m`<div class="sum">
        <div>
          <div class="big">${W((c=t.precipitation)!=null?c:i.reduce((g,y)=>{var A;return g+((A=y.precipitation)!=null?A:0)},0))}</div>
          <div class="sub">erwartet · Wahrscheinlichkeit bis ${Math.round(p)} %${u!=null?` \xB7 bisher gemessen ${W(u)}`:""}</div>
        </div>
      </div>`}let s=i.map(u=>u.wind_speed).filter(u=>u!=null),o=s.length?s.reduce((u,p)=>u+p,0)/s.length:t.wind_speed,d=a.wind_gust&&n?Math.max(...this.pastRows(a.wind_gust).map(u=>{var p;return(p=u.max)!=null?p:0}),0):void 0;return m`<div class="sum">
      <div>
        <div class="big">${M(o,0)} km/h <span class="dir">${It(t.wind_bearing)}</span></div>
        <div class="sub">Ø Vorhersage · max ${M(s.length?Math.max(...s):void 0,0)} km/h${d?` \xB7 st\xE4rkste B\xF6e heute ${M(d,0)} km/h`:""}</div>
      </div>
    </div>`}pastRows(t){var i,n;return(n=(i=this._past)==null?void 0:i[t])!=null?n:[]}renderChart(t,i,n,a){var A;let s=(A=this.config.sensors)!=null?A:{},o=n.map(x=>({t:new Date(x.datetime).getTime(),h:x})),d=a?o.filter(x=>x.t>=a-K):o,h=[0,6,12,18].map(x=>({t:t+x*K,label:`${String(x).padStart(2,"0")} Uhr`})),l=[],c=[],u="\xB0",p,g="",y;if(this.metric==="temp"){let x=s.temperature&&a?this.pastRows(s.temperature).map(D=>({t:D.start+K/2,v:D.mean})):[],$=a?E(this.hass,s.temperature):void 0,w=Ht(this.hourly,$),S=[...x,...$!=null?[{t:a,v:$}]:[],...d.filter(D=>!a||D.t>a).map(D=>({t:D.t,v:w(D.t,D.h.temperature)}))];l.push({type:"area",points:S,color:"var(--wa-temp, #4fc3f7)",dashUntil:a,label:"Temperatur",unit:"\xB0",digits:1});let I=S.filter(D=>D.v!=null);if(I.length){let D=I.reduce((B,F)=>F.v>B.v?F:B),O=I.reduce((B,F)=>F.v<B.v?F:B);c.push({t:D.t,v:D.v,label:"H"},{t:O.t,v:O.v,label:"T"})}}else if(this.metric==="rain")u="",y=0,s.rain_total&&a&&l.push({type:"bar",points:this.pastRows(s.rain_total).map(x=>({t:x.start,v:x.change})),color:"var(--wa-rain-past, #1e6fb8)",barWidth:K,label:"gemessen",unit:" l/m\xB2",digits:1}),l.push({type:"bar",points:d.map(x=>{var $;return{t:x.t,v:($=x.h.precipitation)!=null?$:0}}),color:"var(--wa-rain)",barWidth:K,label:"Menge",unit:" l/m\xB2",digits:1}),l.push({type:"line",axis:"right",points:d.map(x=>({t:x.t+K/2,v:x.h.precipitation_probability})),color:"var(--wa-prob, #90caf9)",label:"Wahrscheinl.",unit:" %",digits:0}),p=100,g=" %";else{u="",y=0;let x=s.wind_speed&&a?this.pastRows(s.wind_speed).map(S=>({t:S.start+K/2,v:S.mean})):[],$=a?E(this.hass,s.wind_speed):void 0,w=[...x,...$!=null?[{t:a,v:$}]:[],...d.filter(S=>!a||S.t>a).map(S=>({t:S.t,v:S.h.wind_speed}))];l.push({type:"area",points:w,color:"var(--wa-wind, #81c784)",dashUntil:a,label:"Wind",unit:" km/h",digits:0}),s.wind_gust&&a&&l.push({type:"line",points:this.pastRows(s.wind_gust).map(S=>({t:S.start+K/2,v:S.max})),color:"var(--wa-gust, #ffb74d)",label:"B\xF6e",unit:" km/h",digits:0})}return m`
      <wetter-app-chart .start=${t} .end=${i} .series=${l} .ticks=${h} .markers=${c}
        .now=${a} .height=${220} .yUnit=${u} .yMin=${y} .rightMax=${p} .rightUnit=${g}
        .timeFormat=${x=>new Date(x).toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}>
      </wetter-app-chart>
      ${this.metric==="wind"?this.renderWindDirs(t,d):b}
      ${this.metric==="rain"?m`<div class="legend"><i style="background:var(--wa-rain)"></i>Menge pro Stunde
        <i class="ln" style="background:var(--wa-prob, #90caf9)"></i>Wahrscheinlichkeit${a?m`<i style="background:var(--wa-rain-past, #1e6fb8)"></i>gemessen`:b}</div>`:b}
    `}renderWindDirs(t,i){let n=i.filter(a=>new Date(a.t).getHours()%3===0);return m`<div class="dirs">
      ${n.map(a=>{var s;return m`<div style="left:calc(6px + (100% - 44px) * ${(a.t-t)/(24*K)})">
        <ha-icon icon="mdi:navigation" style="transform:rotate(${((s=a.h.wind_bearing)!=null?s:0)+180}deg)"></ha-icon>
        <span>${new Date(a.t).getHours()} Uhr</span></div>`})}
    </div>`}};gt.properties={hass:{attribute:!1},config:{attribute:!1},hourly:{attribute:!1},daily:{attribute:!1},index:{type:Number},metric:{type:String},_past:{state:!0}},gt.styles=[ht,R`
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
    `];var ae=[{id:"day",label:"Tag"},{id:"7d",label:"7 Tage"},{id:"30d",label:"30 Tage"},{id:"month",label:"Monat"},{id:"year",label:"Jahr"}];var Gi=["Januar","Februar","M\xE4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];function Yi(r){return new Date(r.getFullYear(),r.getMonth(),r.getDate())}function Dt(r,e){return new Date(r.getFullYear(),r.getMonth(),r.getDate()+e)}function ti(r,e=!1){return r.toLocaleDateString("de-DE",e?{day:"2-digit",month:"2-digit",year:"numeric"}:{day:"2-digit",month:"2-digit"})}function Ot(r){return ae.some(e=>e.id===r)}function ei(r,e=new Date){let t=Yi(e),i=Math.min(0,Math.round(r.offset)),n,a,s,o;switch(r.preset){case"day":{n=Dt(t,i),a=Dt(n,1),s="hour",o=i===0?"Heute":i===-1?"Gestern":n.toLocaleDateString("de-DE",{weekday:"short",day:"2-digit",month:"2-digit"});break}case"7d":case"30d":{let h=r.preset==="7d"?7:30;a=Dt(t,1+i*h),n=Dt(a,-h),s=h===7?"hour":"day",o=i===0?`Letzte ${h} Tage`:`${ti(n)} \u2013 ${ti(Dt(a,-1),!0)}`;break}case"month":{n=new Date(e.getFullYear(),e.getMonth()+i,1),a=new Date(n.getFullYear(),n.getMonth()+1,1),s="day",o=`${Gi[n.getMonth()]} ${n.getFullYear()}`;break}default:{n=new Date(e.getFullYear()+i,0,1),a=new Date(n.getFullYear()+1,0,1),s="month",o=String(n.getFullYear());break}}let d=a.getTime()>e.getTime();return d&&(a=new Date(Math.ceil(e.getTime()/3e5)*3e5)),{preset:r.preset,offset:i,start:n,end:a,period:s,label:o,live:d}}var Ut=new Map,oe=new EventTarget,ii="wetter-app:range:";function Wi(r,e){let t=e;try{let i=localStorage.getItem(ii+r);Ot(i)&&(t=i)}catch{}return{preset:t,offset:0}}function Li(r,e="7d"){let t=Ut.get(r);return t||(t=Wi(r,e),Ut.set(r,t)),t}function Ji(r,e){let t=Ut.get(r);if(Ut.set(r,e),(t==null?void 0:t.preset)!==e.preset)try{localStorage.setItem(ii+r,e.preset)}catch{}oe.dispatchEvent(new CustomEvent(r))}var Nt=class{constructor(e,t,i=()=>"7d"){this.host=e;this.groupOf=t;this.fallback=i;this.onChange=()=>this.host.requestUpdate();e.addController(this)}get state(){return Li(this.groupOf(),this.fallback())}get range(){return ei(this.state)}set(e){Ji(this.groupOf(),e)}hostConnected(){this.listen()}hostUpdated(){this.group!==this.groupOf()&&this.listen()}hostDisconnected(){this.group&&oe.removeEventListener(this.group,this.onChange),this.group=void 0}listen(){this.hostDisconnected(),this.group=this.groupOf(),oe.addEventListener(this.group,this.onChange)}};function ni(r){let e=r.range;return m`
    <div class="range">
      <div class="chips" role="tablist">
        ${ae.map(t=>m`<button role="tab" aria-selected=${t.id===e.preset}
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
  `}var si=R`
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
`;var L=[{min:0,max:1,label:"0",name:"Windstille",color:"#2a32ff",text:"#fff"},{min:1,max:6,label:"1",name:"leiser Zug",color:"#3a6ff7",text:"#fff"},{min:6,max:12,label:"2",name:"leichte Brise",color:"#3fb4f7",text:"#000"},{min:12,max:20,label:"3",name:"schwache Brise",color:"#44f2f7",text:"#000"},{min:20,max:29,label:"4",name:"m\xE4\xDFige Brise",color:"#a6f78a",text:"#000"},{min:29,max:39,label:"5",name:"frische Brise",color:"#f7d64a",text:"#000"},{min:39,max:50,label:"6",name:"starker Wind",color:"#f77a4a",text:"#000"},{min:50,max:62,label:"7",name:"steifer Wind",color:"#e8443a",text:"#fff"},{min:62,max:1/0,label:"8+",name:"st\xFCrmischer Wind und mehr",color:"#b0207a",text:"#fff"}],Kt=["N","NNO","NO","ONO","O","OSO","SO","SSO","S","SSW","SW","WSW","W","WNW","NW","NNW"],ri=r=>L.findIndex(e=>r<e.max);function ai(r=[],e=[],t={}){var pe,ue;let i=(pe=t.now)!=null?pe:{},n=new Map(e.map(f=>[f.start,f.mean])),a=Kt.map(()=>L.map(()=>0)),s=L.map(()=>0),o=0;for(let f of r){let k=n.get(f.start);if(f.mean==null||k==null)continue;o++;let z=ri(k);s[z]++,z!==0&&a[Math.round((f.mean%360+360)%360/22.5)%16][z]++}if(!o)return m`<div class="hint">Keine Winddaten im Zeitraum.</div>`;let d=f=>f/o*100,h=a.map(f=>d(f.reduce((k,z)=>k+z,0))),l=Math.max(...h,1),c=(ue=[2,5,10,20,25,50].find(f=>l/f<=4))!=null?ue:50,u=Math.ceil(l/c)*c,p=16,g=90,y=f=>p+f/u*(g-p),A=f=>(f-90)*Math.PI/180,x=(f,k)=>`${100+f*Math.cos(A(k))},${100+f*Math.sin(A(k))}`,$=(f,k,z)=>{let J=f*22.5-10.5,ot=f*22.5+10.5;return`M${x(k,J)} L${x(z,J)} A${z} ${z} 0 0 1 ${x(z,ot)} L${x(k,ot)} A${k} ${k} 0 0 0 ${x(k,J)}Z`},w=0,S=1/0;for(let f=0;f<16;f++){let k=Math.max(h[f],h[(f+1)%16]);k<S&&(S=k,w=f)}let I=w*22.5+11.25,D=[],O=[];for(let f=c;f<=u;f+=c)D.push(v`<circle cx="100" cy="100" r=${y(f)} class="ring"/>`),O.push(v`<text x=${100+y(f)*Math.cos(A(I))} y=${102.5+y(f)*Math.sin(A(I))} class="rl">${f} %</text>`);let B=f=>t.selected!=null&&t.selected!==f?"dim":"",F=a.flatMap((f,k)=>{let z=0;return f.map((J,ot)=>{if(!J)return v``;let hi=y(z);return z+=d(J),v`<path d=${$(k,hi,y(z))} style="fill:${L[ot].color}" class=${B(ot)}><title>${Kt[k]}, Bft ${L[ot].label}: ${M(d(J),1)} %</title></path>`})}),nt=Kt.map((f,k)=>k%4===0?v``:v`<text x=${100+101*Math.cos(A(k*22.5))} y=${103+101*Math.sin(A(k*22.5))} class=${k%2?"cd2":"cd"}>${Kt[k]}</text>`),Tt=i.direction!=null?v`<path d="M100 ${100-g-1} l-5 -9 h10z" class="now" transform="rotate(${i.direction} 100 100)"><title>Aktuell: ${Math.round(i.direction)}°</title></path>`:v``,xt=i.speed!=null?ri(i.speed):-1,Q=L.map((f,k)=>({...f,i:k,share:d(s[k])})).filter(f=>s[f.i]>0||f.i===xt),st,rt=Q.findIndex(f=>f.i===xt);if(rt>=0){let f=Q[rt],k=Number.isFinite(f.max)?f.max:f.min+20;st=(rt+Math.min(1,(i.speed-f.min)/(k-f.min)))/Q.length*100}let P=t.selected!=null?L[t.selected]:void 0,at=f=>{var k;return(k=t.onSelect)==null?void 0:k.call(t,t.selected===f?void 0:f)},di=f=>f.min===0?"unter 1":Number.isFinite(f.max)?`${f.min}\u2013${f.max-1}`:`ab ${f.min}`;return m`
    <div class="rose">
      <svg viewBox="-14 -14 228 228">
        ${D}
        <line x1="100" y1="8" x2="100" y2="192" class="ring"/><line x1="8" y1="100" x2="192" y2="100" class="ring"/>
        ${F}
        <circle cx="100" cy="100" r=${p-1} style="fill:${L[0].color}" class=${B(0)}/>
        <text x="100" y="103.5" class="cv">${Math.round(d(s[0]))} %</text>
        ${O}
        <text x="100" y="2" class="cd">N</text><text x="100" y="208" class="cd">S</text>
        <text x="203" y="103" class="cd">O</text><text x="-3" y="103" class="cd">W</text>
        ${nt}
        ${Tt}
      </svg>
      <div class="bftbar">
        ${st!=null?m`<span class="nowsp" style="left:${st}%" title="Aktuell: ${M(i.speed,1)} km/h"></span>`:""}
        <div class="segs">${Q.map(f=>m`<button style="background:${f.color};color:${f.text}" class=${t.selected===f.i?"on":""}
          @click=${()=>at(f.i)}>${f.share>=.5?`${Math.round(f.share)}%`:""}</button>`)}</div>
        <div class="nums">${Q.map(f=>m`<span @click=${()=>at(f.i)}>${f.label}</span>`)}</div>
        <div class="bl">${P?m`<b>Beaufort ${P.label}</b> · ${P.name} · ${di(P)} km/h · ${M(d(s[t.selected]),1)} % der Zeit`:"Beaufort \u2014 Stufe antippen f\xFCr km/h"}</div>
      </div>
    </div>`}var oi=R`
  .rose { display: flex; flex-direction: column; align-items: center; gap: 10px; }
  .rose svg { width: 100%; max-width: 320px; }
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
  .segs button { flex: 1; border: 0; padding: 0; font: inherit; font-size: 10px; font-weight: 600; line-height: 20px; cursor: pointer; }
  .segs button.on { box-shadow: inset 0 0 0 2px var(--wa-text); }
  .nums { display: flex; font-size: 11px; color: var(--wa-text2); margin-top: 2px; }
  .nums span { flex: 1; text-align: center; cursor: pointer; }
  .bl { text-align: center; font-size: 12px; color: var(--wa-text2); margin-top: 2px; }
  .bl b { color: var(--wa-text); font-weight: 500; }
  .nowsp { position: absolute; top: 0; width: 0; height: 0; margin-left: -6px;
    border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 9px solid #e53935; }
`;var Zi=[{id:"pressure",label:"Luftdruck",unit:" hPa",digits:1},{id:"humidity",label:"Feuchte",unit:" %",digits:0},{id:"solar",label:"Sonne",unit:" W/m\xB2",digits:0},{id:"uv",label:"UV",unit:"",digits:1}],le=["Jan","Feb","M\xE4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],Vi=["Januar","Februar","M\xE4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],ce=["So","Mo","Di","Mi","Do","Fr","Sa"],qi=864e5,Xi=.1,ft=class extends H{constructor(){super(...arguments);this.wide=!1;this._compare=!1;this._extra="pressure";this.range=new Nt(this,()=>{var t,i;return(i=(t=this.config)==null?void 0:t.sync_group)!=null?i:"default"},()=>{var t;return Ot((t=this.config)==null?void 0:t.default_range)?this.config.default_range:"7d"})}periods(t){return{main:t.preset==="day"||t.preset==="7d"?"hour":"day",rain:t.preset==="day"?"hour":"day",rose:"hour"}}updated(){this.load()}async load(){var d,h;if(!this.hass||!this.config)return;let t=this.range.range,i=(d=this.config.sensors)!=null?d:{},n=this.periods(t),a=`${t.start.getTime()}|${t.end.getTime()}|${this._compare}`;if(a===this._key)return;this._key=a,this._err=void 0;let s=l=>l.filter(Boolean),o=(l,c,u,p=t.start,g=t.end)=>dt(this.hass,{ids:l,start:p,end:g,period:c,types:u});try{let l=new Date(t.start);l.setFullYear(l.getFullYear()-1);let c=new Date(t.end);c.setFullYear(c.getFullYear()-1);let[u,p,g,y,A]=await Promise.all([o(s([i.temperature,i.humidity,i.pressure,i.solar,i.uv,i.wind_speed,i.wind_gust]),n.main,["mean","min","max"]),o(s([i.rain_total]),n.rain,["change"]),o(s([i.wind_direction,n.rose!==n.main?i.wind_speed:void 0]),n.rose,["mean"]),this._compare?o(s([i.temperature]),n.main,["mean","min","max"],l,c):void 0,this._compare?o(s([i.rain_total]),n.rain,["change"],l,c):void 0]);if(a!==this._key)return;this._data={main:u,rain:p,dir:g,prev:this._compare?{...y,...A}:void 0}}catch(l){if(a!==this._key)return;this._err=(h=l==null?void 0:l.message)!=null?h:String(l),this._key=void 0}}render(){var h,l,c;if(!this.config)return b;let t=this.range.range,i=this._data,n=(h=this.config.sensors)!=null?h:{},a=t.preset!=="day",s=n.temperature&&(i==null?void 0:i.main[n.temperature])||[],o=(l=s.find(u=>u.mean!=null))==null?void 0:l.start,d=o!=null&&o-t.start.getTime()>2*qi?m`<div class="hint-inline"><ha-icon icon="mdi:information-outline"></ha-icon>Daten erst ab ${new Date(o).toLocaleDateString("de-DE")}</div>`:b;return m`
      <section class="card">
        ${ni(this.range)}
        ${a?m`<div class="cmp"><button class=${this._compare?"on":""}
          @click=${()=>this._compare=!this._compare}><ha-icon icon="mdi:compare-horizontal"></ha-icon>Vorjahr vergleichen</button></div>`:b}
      </section>
      ${this._err?m`<div class="warn">Statistik nicht verfügbar: ${this._err}</div>`:b}
      ${i?!s.length&&!(n.rain_total&&((c=i.rain[n.rain_total])!=null&&c.length))?m`<div class="hint">Keine Daten in diesem Zeitraum.</div>`:m`
            ${d}
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
    `}rows(t,i,n){let a=i&&(t==null?void 0:t[i])||[];return n.preset==="year"?li(a):a}ticks(t){let i=[],n=t.start;if(t.preset==="day")for(let a of[0,6,12,18])i.push({t:new Date(n.getFullYear(),n.getMonth(),n.getDate(),a).getTime(),label:`${String(a).padStart(2,"0")} Uhr`});else if(t.preset==="7d")for(let a=0;a<7;a++){let s=new Date(n.getFullYear(),n.getMonth(),n.getDate()+a);i.push({t:s.getTime(),label:ce[s.getDay()]})}else if(t.preset==="30d")for(let a=0;a<30;a+=7){let s=new Date(n.getFullYear(),n.getMonth(),n.getDate()+a);i.push({t:s.getTime(),label:`${s.getDate()}.${s.getMonth()+1}.`})}else if(t.preset==="month")for(let a of[1,8,15,22,29])i.push({t:new Date(n.getFullYear(),n.getMonth(),a).getTime(),label:`${a}.`});else for(let a=0;a<12;a++)i.push({t:new Date(n.getFullYear(),a,1).getTime(),label:le[a]});return i}fmt(t,i){return n=>{let a=new Date(n);return t.preset==="year"&&i!=="hour"?`${Vi[a.getMonth()]}`:i==="hour"?`${ce[a.getDay()]} ${String(a.getHours()).padStart(2,"0")}:00`:`${ce[a.getDay()]}, ${a.getDate()}.${a.getMonth()+1}.`}}chart(t,i,n){var a,s;return m`<wetter-app-chart .start=${t.start.getTime()} .end=${t.end.getTime()} .series=${i}
      .ticks=${this.ticks(t)} .height=${(a=n.height)!=null?a:200} .yUnit=${(s=n.yUnit)!=null?s:""} .yMin=${n.yMin}
      .rightMax=${n.rightMax} .timeFormat=${this.fmt(t,t.preset==="year"?"month":n.period)}></wetter-app-chart>`}shift(t){return t.map(i=>{let n=new Date(i.start);n.setFullYear(n.getFullYear()+1);let a=new Date(i.end);return a.setFullYear(a.getFullYear()+1),{...i,start:n.getTime(),end:a.getTime()}})}renderSummary(t,i){var x;let n=(x=this.config.sensors)!=null?x:{},a=this.periods(t),s=n.temperature&&i.main[n.temperature]||[],o=he(s,"min",Math.min),d=he(s,"max",Math.max),h=de(s.map($=>$.mean)),l=n.rain_total&&i.rain[n.rain_total]||[],c=l.reduce(($,w)=>{var S;return $+((S=w.change)!=null?S:0)},0),u=l.filter($=>{var w;return((w=$.change)!=null?w:0)>=Xi}).length,p=he(n.wind_gust&&i.main[n.wind_gust]||[],"max",Math.max),g=de((n.wind_speed&&i.main[n.wind_speed]||[]).map($=>$.mean)),y=de((n.humidity&&i.main[n.humidity]||[]).map($=>$.mean)),A=this.fmt({...t,preset:t.preset==="year"?"30d":t.preset},a.main);return m`<div class="grid">
      <section class="card kv">${C("mdi:thermometer","Temperatur")}
        <div class="big">${T(h,1)}</div><div class="sub">Durchschnitt</div>
        <div class="ext"><span>▲ ${T(d==null?void 0:d.v,1)}</span><small>${d?A(d.t):""}</small></div>
        <div class="ext"><span>▼ ${T(o==null?void 0:o.v,1)}</span><small>${o?A(o.t):""}</small></div>
      </section>
      <section class="card kv">${C("mdi:weather-pouring","Niederschlag")}
        <div class="big">${W(c)}</div><div class="sub">Summe</div>
        <div class="ext"><span>${u}</span><small>${a.rain==="hour"?"Stunden mit Regen":"Regentage (\u2265 0,1 l/m\xB2)"}</small></div>
      </section>
      <section class="card kv">${C("mdi:weather-windy","Wind")}
        <div class="big">${M(g,1)} km/h</div><div class="sub">Durchschnitt</div>
        <div class="ext"><span>${M(p==null?void 0:p.v,0)} km/h</span><small>stärkste Böe${p?` \xB7 ${A(p.t)}`:""}</small></div>
      </section>
      <section class="card kv">${C("mdi:water-percent","Luftfeuchte")}
        <div class="big">${M(y,0)} %</div><div class="sub">Durchschnitt</div>
      </section>
    </div>`}renderTemp(t,i){var h,l;let n=(h=this.config.sensors)!=null?h:{},a=this.periods(t),s=this.rows(i.main,n.temperature,t),o=[],d=c=>c.start+(c.end-c.start)/2;if(a.main==="hour"?o.push({type:"band",points:s.map(c=>({t:d(c),v:c.min,v2:c.max})),color:"var(--wa-temp, #4fc3f7)",label:"",unit:"\xB0",digits:1}):o.push({type:"range",points:s.map(c=>({t:c.start,t2:c.end,v:c.min,v2:c.max})),color:"rgba(79, 195, 247, 0.55)",label:"",unit:"\xB0",digits:1}),o.push({type:"line",points:s.map(c=>({t:d(c),v:c.mean})),color:"var(--wa-temp-line, #ffb74d)",label:"\xD8",unit:"\xB0",digits:1}),i.prev&&n.temperature){let c=this.rows({x:this.shift((l=i.prev[n.temperature])!=null?l:[])},"x",t);o.push({type:"line",dashed:!0,points:c.map(u=>({t:d(u),v:u.mean})),color:"var(--wa-text2)",label:"Vorjahr \xD8",unit:"\xB0",digits:1})}return m`<section class="card">${C("mdi:thermometer","Temperatur")}
      ${this.chart(t,o,{yUnit:"\xB0",period:a.main})}
      <div class="legend"><i style="background:#4fc3f7"></i>Min–Max<i class="ln" style="background:#ffb74d"></i>Durchschnitt
        ${i.prev?m`<i class="ln dash"></i>Vorjahr`:b}</div>
    </section>`}renderRain(t,i){var h,l;let n=(h=this.config.sensors)!=null?h:{};if(!n.rain_total)return b;let a=this.periods(t),s=this.rows(i.rain,n.rain_total,t),o=c=>{let u=0;return c.map(p=>{var g;return{t:Math.min(p.end,t.end.getTime()),v:u+=(g=p.change)!=null?g:0}})},d=[{type:"bar",points:s.map(c=>{var u;return{t:c.start,t2:c.end,v:(u=c.change)!=null?u:0}}),color:"var(--wa-rain)",label:"Menge",unit:" l/m\xB2",digits:1},{type:"line",axis:"right",points:[{t:t.start.getTime(),v:0},...o(s)],color:"var(--wa-prob, #90caf9)",label:"Summe",unit:" l/m\xB2",digits:1}];if(i.prev){let c=this.rows({x:this.shift((l=i.prev[n.rain_total])!=null?l:[])},"x",t);c.length&&d.push({type:"line",axis:"right",dashed:!0,points:[{t:t.start.getTime(),v:0},...o(c)],color:"var(--wa-text2)",label:"Vorjahr",unit:" l/m\xB2",digits:1})}return m`<section class="card">${C("mdi:weather-pouring","Niederschlag")}
      ${this.chart(t,d,{yMin:0,period:a.rain})}
      <div class="legend"><i style="background:var(--wa-rain)"></i>${a.rain==="hour"?"pro Stunde":t.preset==="year"?"pro Monat":"pro Tag"}
        <i class="ln" style="background:var(--wa-prob, #90caf9)"></i>Summe (rechte Skala)${i.prev?m`<i class="ln dash"></i>Vorjahr`:b}</div>
    </section>`}renderWind(t,i){var u;let n=(u=this.config.sensors)!=null?u:{};if(!n.wind_speed)return b;let a=this.periods(t),s=n.wind_direction&&i.dir[n.wind_direction]||[],o=(a.rose===a.main?i.main[n.wind_speed]:i.dir[n.wind_speed])||[],d=this.rows(i.main,n.wind_speed,t),h=this.rows(i.main,n.wind_gust,t),l=p=>p.start+(p.end-p.start)/2,c=[{type:"line",points:d.map(p=>({t:l(p),v:p.mean})),color:"var(--wa-wind, #81c784)",label:"\xD8",unit:" km/h",digits:1},...h.length?[{type:"line",points:h.map(p=>({t:l(p),v:p.max})),color:"var(--wa-gust, #ffb74d)",label:"B\xF6e",unit:" km/h",digits:0}]:[]];return m`<section class="card">${C("mdi:weather-windy","Wind")}
      ${n.wind_direction?ai(s,o,{now:t.live?{direction:E(this.hass,n.wind_direction),speed:E(this.hass,n.wind_speed)}:{},selected:this._bft,onSelect:p=>this._bft=p}):b}
      ${this.chart(t,c,{yMin:0,period:a.main,height:160})}
      <div class="legend"><i class="ln" style="background:#81c784"></i>Durchschnitt<i class="ln" style="background:#ffb74d"></i>stärkste Böe</div>
    </section>`}renderExtra(t,i){var c,u;let n=(c=this.config.sensors)!=null?c:{},a=Zi.filter(p=>n[p.id]);if(!a.length)return b;let s=(u=a.find(p=>p.id===this._extra))!=null?u:a[0],o=this.periods(t),d=this.rows(i.main,n[s.id],t),h=p=>p.start+(p.end-p.start)/2,l=[{type:"band",points:d.map(p=>({t:h(p),v:p.min,v2:p.max})),color:"var(--wa-accent)",unit:s.unit,digits:s.digits},{type:"line",points:d.map(p=>({t:h(p),v:p.mean})),color:"var(--wa-accent)",label:"\xD8",unit:s.unit,digits:s.digits}];return m`<section class="card">${C("mdi:chart-bell-curve-cumulative","Weitere Werte")}
      <div class="chips small">${a.map(p=>m`<button class=${p===s?"on":""} @click=${()=>this._extra=p.id}>${p.label}</button>`)}</div>
      ${this.chart(t,l,{period:o.main,yMin:s.id==="pressure"?void 0:0})}
      <div class="legend"><i class="ln" style="background:var(--wa-accent)"></i>Durchschnitt<i style="background:var(--wa-accent);opacity:.3"></i>Min–Max</div>
    </section>`}renderYearTable(t,i){var c,u;let n=(c=this.config.sensors)!=null?c:{},a=this.rows(i.main,n.temperature,t),s=this.rows(i.rain,n.rain_total,t),o=i.prev&&n.rain_total?li(this.shift((u=i.prev[n.rain_total])!=null?u:[])):[],d=[...Array(12)].map((p,g)=>new Date(t.start.getFullYear(),g,1).getTime()),h=(p,g)=>p.find(y=>y.start===g),l=Math.max(1,...s.map(p=>{var g;return(g=p.change)!=null?g:0}),...o.map(p=>{var g;return(g=p.change)!=null?g:0}));return m`<section class="card">${C("mdi:table",`Monate ${t.start.getFullYear()}`)}
      <table class="months">
        <thead><tr><th></th><th>Ø</th><th>Min</th><th>Max</th><th class="rc">Niederschlag</th></tr></thead>
        <tbody>${d.map((p,g)=>{var $,w;let y=h(a,p),A=h(s,p),x=h(o,p);return!y&&!A?m`<tr class="empty"><td>${le[g]}</td><td colspan="4">–</td></tr>`:m`<tr>
            <td>${le[g]}</td><td>${T(y==null?void 0:y.mean,1)}</td><td class="cold">${T(y==null?void 0:y.min,1)}</td><td class="warm">${T(y==null?void 0:y.max,1)}</td>
            <td class="rc"><div class="rcell"><div class="rbar"><i style="width:${(($=A==null?void 0:A.change)!=null?$:0)/l*100}%"></i>
              ${x?m`<b style="left:${((w=x.change)!=null?w:0)/l*100}%" title="Vorjahr"></b>`:b}</div>
              <span>${M(A==null?void 0:A.change,0)}</span></div></td></tr>`})}</tbody>
      </table>
    </section>`}};ft.properties={hass:{attribute:!1},config:{attribute:!1},wide:{type:Boolean,reflect:!0},_data:{state:!0},_err:{state:!0},_compare:{state:!0},_extra:{state:!0},_bft:{state:!0}},ft.styles=[ht,si,oi,R`
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
    `];function de(r){let e=r.filter(t=>t!=null);return e.length?e.reduce((t,i)=>t+i,0)/e.length:void 0}function he(r,e,t){let i;for(let n of r){let a=n[e];a!=null&&(!i||t(a,i.v)===a&&a!==i.v)&&(i={t:n.start,v:a})}return i}function li(r){var t;let e=new Map;for(let i of r){let n=new Date(i.start),a=new Date(n.getFullYear(),n.getMonth(),1).getTime(),s=e.get(a);s||(s={start:a,end:new Date(n.getFullYear(),n.getMonth()+1,1).getTime(),min:null,max:null,mean:null,change:null,_n:0,_sum:0},e.set(a,s)),i.min!=null&&(s.min=s.min==null?i.min:Math.min(s.min,i.min)),i.max!=null&&(s.max=s.max==null?i.max:Math.max(s.max,i.max)),i.mean!=null&&(s._sum+=i.mean,s._n++,s.mean=s._sum/s._n),i.change!=null&&(s.change=((t=s.change)!=null?t:0)+i.change)}return[...e.values()].sort((i,n)=>i.start-n.start)}var ci=[["wetter-app",pt,"Wetter-App","Komplette Wetter-App mit Vorhersage und Historie"]],tn=[["wetter-app-chart",mt],["wetter-app-day-detail",gt],["wetter-app-history",ft]];for(let[r,e]of[...tn,...ci])customElements.get(r)||customElements.define(r,e);var jt=window;jt.customCards=jt.customCards||[];for(let[r,,e,t]of ci)jt.customCards.some(i=>i.type===r)||jt.customCards.push({type:r,name:e,description:t,preview:!1});console.info("%c WETTER-APP %c 0.1.0 ","background:#2f6fc4;color:#fff;border-radius:3px 0 0 3px","background:#555;color:#fff;border-radius:0 3px 3px 0");
