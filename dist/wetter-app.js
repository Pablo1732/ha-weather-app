var It=globalThis,Ht=It.ShadowRoot&&(It.ShadyCSS===void 0||It.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ie=Symbol(),Te=new WeakMap,At=class{constructor(i,t,e){if(this._$cssResult$=!0,e!==ie)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=t}get styleSheet(){let i=this.o,t=this.t;if(Ht&&i===void 0){let e=t!==void 0&&t.length===1;e&&(i=Te.get(t)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),e&&Te.set(t,i))}return i}toString(){return this.cssText}},Ce=s=>new At(typeof s=="string"?s:s+"",void 0,ie),B=(s,...i)=>{let t=s.length===1?s[0]:i.reduce((e,n,a)=>e+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+s[a+1],s[0]);return new At(t,s,ie)},De=(s,i)=>{if(Ht)s.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of i){let e=document.createElement("style"),n=It.litNonce;n!==void 0&&e.setAttribute("nonce",n),e.textContent=t.cssText,s.appendChild(e)}},ne=Ht?s=>s:s=>s instanceof CSSStyleSheet?(i=>{let t="";for(let e of i.cssRules)t+=e.cssText;return Ce(t)})(s):s;var{is:Oi,defineProperty:Ni,getOwnPropertyDescriptor:Ki,getOwnPropertyNames:ji,getOwnPropertySymbols:Li,getPrototypeOf:Gi}=Object,Y=globalThis,Ee=Y.trustedTypes,Qi=Ee?Ee.emptyScript:"",se=Y.reactiveElementPolyfillSupport,kt=(s,i)=>s,re={toAttribute(s,i){switch(i){case Boolean:s=s?Qi:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,i){let t=s;switch(i){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},He=(s,i)=>!Oi(s,i),Re={attribute:!0,type:String,converter:re,reflect:!1,useDefault:!1,hasChanged:He},Be,Pe;(Be=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(Pe=Y.litPropertyMetadata)!=null||(Y.litPropertyMetadata=new WeakMap);var L=class extends HTMLElement{static addInitializer(i){var t;this._$Ei(),((t=this.l)!=null?t:this.l=[]).push(i)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(i,t=Re){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(i)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(i,t),!t.noAccessor){let e=Symbol(),n=this.getPropertyDescriptor(i,e,t);n!==void 0&&Ni(this.prototype,i,n)}}static getPropertyDescriptor(i,t,e){var r;let{get:n,set:a}=(r=Ki(this.prototype,i))!=null?r:{get(){return this[t]},set(o){this[t]=o}};return{get:n,set(o){let d=n==null?void 0:n.call(this);a==null||a.call(this,o),this.requestUpdate(i,d,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(i){var t;return(t=this.elementProperties.get(i))!=null?t:Re}static _$Ei(){if(this.hasOwnProperty(kt("elementProperties")))return;let i=Gi(this);i.finalize(),i.l!==void 0&&(this.l=[...i.l]),this.elementProperties=new Map(i.elementProperties)}static finalize(){if(this.hasOwnProperty(kt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(kt("properties"))){let t=this.properties,e=[...ji(t),...Li(t)];for(let n of e)this.createProperty(n,t[n])}let i=this[Symbol.metadata];if(i!==null){let t=litPropertyMetadata.get(i);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[t,e]of this.elementProperties){let n=this._$Eu(t,e);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(i){let t=[];if(Array.isArray(i)){let e=new Set(i.flat(1/0).reverse());for(let n of e)t.unshift(ne(n))}else i!==void 0&&t.push(ne(i));return t}static _$Eu(i,t){let e=t.attribute;return e===!1?void 0:typeof e=="string"?e:typeof i=="string"?i.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var i;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(i=this.constructor.l)==null||i.forEach(t=>t(this))}addController(i){var t,e;((t=this._$EO)!=null?t:this._$EO=new Set).add(i),this.renderRoot!==void 0&&this.isConnected&&((e=i.hostConnected)==null||e.call(i))}removeController(i){var t;(t=this._$EO)==null||t.delete(i)}_$E_(){let i=new Map,t=this.constructor.elementProperties;for(let e of t.keys())this.hasOwnProperty(e)&&(i.set(e,this[e]),delete this[e]);i.size>0&&(this._$Ep=i)}createRenderRoot(){var t;let i=(t=this.shadowRoot)!=null?t:this.attachShadow(this.constructor.shadowRootOptions);return De(i,this.constructor.elementStyles),i}connectedCallback(){var i,t;(i=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostConnected)==null?void 0:n.call(e)})}enableUpdating(i){}disconnectedCallback(){var i;(i=this._$EO)==null||i.forEach(t=>{var e;return(e=t.hostDisconnected)==null?void 0:e.call(t)})}attributeChangedCallback(i,t,e){this._$AK(i,e)}_$ET(i,t){var a;let e=this.constructor.elementProperties.get(i),n=this.constructor._$Eu(i,e);if(n!==void 0&&e.reflect===!0){let r=(((a=e.converter)==null?void 0:a.toAttribute)!==void 0?e.converter:re).toAttribute(t,e.type);this._$Em=i,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(i,t){var a,r,o;let e=this.constructor,n=e._$Eh.get(i);if(n!==void 0&&this._$Em!==n){let d=e.getPropertyOptions(n),h=typeof d.converter=="function"?{fromAttribute:d.converter}:((a=d.converter)==null?void 0:a.fromAttribute)!==void 0?d.converter:re;this._$Em=n;let c=h.fromAttribute(t,d.type);this[n]=(o=c!=null?c:(r=this._$Ej)==null?void 0:r.get(n))!=null?o:c,this._$Em=null}}requestUpdate(i,t,e,n=!1,a){var r,o;if(i!==void 0){let d=this.constructor;if(n===!1&&(a=this[i]),e!=null||(e=d.getPropertyOptions(i)),!(((r=e.hasChanged)!=null?r:He)(a,t)||e.useDefault&&e.reflect&&a===((o=this._$Ej)==null?void 0:o.get(i))&&!this.hasAttribute(d._$Eu(i,e))))return;this.C(i,t,e)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(i,t,{useDefault:e,reflect:n,wrapped:a},r){var o,d,h;e&&!((o=this._$Ej)!=null?o:this._$Ej=new Map).has(i)&&(this._$Ej.set(i,(d=r!=null?r:t)!=null?d:this[i]),a!==!0||r!==void 0)||(this._$AL.has(i)||(this.hasUpdated||e||(t=void 0),this._$AL.set(i,t)),n===!0&&this._$Em!==i&&((h=this._$Eq)!=null?h:this._$Eq=new Set).add(i))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let i=this.scheduleUpdate();return i!=null&&await i,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e,n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[r,o]of a){let{wrapped:d}=o,h=this[r];d!==!0||this._$AL.has(r)||h===void 0||this.C(r,void 0,o,h)}}let i=!1,t=this._$AL;try{i=this.shouldUpdate(t),i?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(a=>{var r;return(r=a.hostUpdate)==null?void 0:r.call(a)}),this.update(t)):this._$EM()}catch(a){throw i=!1,this._$EM(),a}i&&this._$AE(t)}willUpdate(i){}_$AE(i){var t;(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostUpdated)==null?void 0:n.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(i)),this.updated(i)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(i){return!0}update(i){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(i){}firstUpdated(i){}},Ie;L.elementStyles=[],L.shadowRootOptions={mode:"open"},L[kt("elementProperties")]=new Map,L[kt("finalized")]=new Map,se==null||se({ReactiveElement:L}),((Ie=Y.reactiveElementVersions)!=null?Ie:Y.reactiveElementVersions=[]).push("2.1.2");var St=globalThis,ze=s=>s,zt=St.trustedTypes,Fe=zt?zt.createPolicy("lit-html",{createHTML:s=>s}):void 0,le="$lit$",G=`lit$${Math.random().toFixed(9).slice(2)}$`,ce="?"+G,Yi=`<${ce}>`,et=document,Mt=()=>et.createComment(""),Tt=s=>s===null||typeof s!="object"&&typeof s!="function",de=Array.isArray,Ge=s=>de(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",ae=`[ 	
\f\r]`,_t=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ue=/-->/g,Oe=/>/g,X=RegExp(`>|${ae}(?:([^\\s"'>=/]+)(${ae}*=${ae}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ne=/'/g,Ke=/"/g,Qe=/^(?:script|style|textarea|title)$/i,he=s=>(i,...t)=>({_$litType$:s,strings:i,values:t}),f=he(1),v=he(2),On=he(3),Q=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),je=new WeakMap,tt=et.createTreeWalker(et,129);function Ye(s,i){if(!de(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Fe!==void 0?Fe.createHTML(i):i}var We=(s,i)=>{let t=s.length-1,e=[],n,a=i===2?"<svg>":i===3?"<math>":"",r=_t;for(let o=0;o<t;o++){let d=s[o],h,c,l=-1,u=0;for(;u<d.length&&(r.lastIndex=u,c=r.exec(d),c!==null);)u=r.lastIndex,r===_t?c[1]==="!--"?r=Ue:c[1]!==void 0?r=Oe:c[2]!==void 0?(Qe.test(c[2])&&(n=RegExp("</"+c[2],"g")),r=X):c[3]!==void 0&&(r=X):r===X?c[0]===">"?(r=n!=null?n:_t,l=-1):c[1]===void 0?l=-2:(l=r.lastIndex-c[2].length,h=c[1],r=c[3]===void 0?X:c[3]==='"'?Ke:Ne):r===Ke||r===Ne?r=X:r===Ue||r===Oe?r=_t:(r=X,n=void 0);let p=r===X&&s[o+1].startsWith("/>")?" ":"";a+=r===_t?d+Yi:l>=0?(e.push(h),d.slice(0,l)+le+d.slice(l)+G+p):d+G+(l===-2?o:p)}return[Ye(s,a+(s[t]||"<?>")+(i===2?"</svg>":i===3?"</math>":"")),e]},Ct=class s{constructor({strings:i,_$litType$:t},e){let n;this.parts=[];let a=0,r=0,o=i.length-1,d=this.parts,[h,c]=We(i,t);if(this.el=s.createElement(h,e),tt.currentNode=this.el.content,t===2||t===3){let l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(n=tt.nextNode())!==null&&d.length<o;){if(n.nodeType===1){if(n.hasAttributes())for(let l of n.getAttributeNames())if(l.endsWith(le)){let u=c[r++],p=n.getAttribute(l).split(G),m=/([.?@])?(.*)/.exec(u);d.push({type:1,index:a,name:m[2],strings:p,ctor:m[1]==="."?Ut:m[1]==="?"?Ot:m[1]==="@"?Nt:nt}),n.removeAttribute(l)}else l.startsWith(G)&&(d.push({type:6,index:a}),n.removeAttribute(l));if(Qe.test(n.tagName)){let l=n.textContent.split(G),u=l.length-1;if(u>0){n.textContent=zt?zt.emptyScript:"";for(let p=0;p<u;p++)n.append(l[p],Mt()),tt.nextNode(),d.push({type:2,index:++a});n.append(l[u],Mt())}}}else if(n.nodeType===8)if(n.data===ce)d.push({type:2,index:a});else{let l=-1;for(;(l=n.data.indexOf(G,l+1))!==-1;)d.push({type:7,index:a}),l+=G.length-1}a++}}static createElement(i,t){let e=et.createElement("template");return e.innerHTML=i,e}};function it(s,i,t=s,e){var r,o,d;if(i===Q)return i;let n=e!==void 0?(r=t._$Co)==null?void 0:r[e]:t._$Cl,a=Tt(i)?void 0:i._$litDirective$;return(n==null?void 0:n.constructor)!==a&&((o=n==null?void 0:n._$AO)==null||o.call(n,!1),a===void 0?n=void 0:(n=new a(s),n._$AT(s,t,e)),e!==void 0?((d=t._$Co)!=null?d:t._$Co=[])[e]=n:t._$Cl=n),n!==void 0&&(i=it(s,n._$AS(s,i.values),n,e)),i}var Ft=class{constructor(i,t){this._$AV=[],this._$AN=void 0,this._$AD=i,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(i){var h;let{el:{content:t},parts:e}=this._$AD,n=((h=i==null?void 0:i.creationScope)!=null?h:et).importNode(t,!0);tt.currentNode=n;let a=tt.nextNode(),r=0,o=0,d=e[0];for(;d!==void 0;){if(r===d.index){let c;d.type===2?c=new dt(a,a.nextSibling,this,i):d.type===1?c=new d.ctor(a,d.name,d.strings,this,i):d.type===6&&(c=new Kt(a,this,i)),this._$AV.push(c),d=e[++o]}r!==(d==null?void 0:d.index)&&(a=tt.nextNode(),r++)}return tt.currentNode=et,n}p(i){let t=0;for(let e of this._$AV)e!==void 0&&(e.strings!==void 0?(e._$AI(i,e,t),t+=e.strings.length-2):e._$AI(i[t])),t++}},dt=class s{get _$AU(){var i,t;return(t=(i=this._$AM)==null?void 0:i._$AU)!=null?t:this._$Cv}constructor(i,t,e,n){var a;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=i,this._$AB=t,this._$AM=e,this.options=n,this._$Cv=(a=n==null?void 0:n.isConnected)!=null?a:!0}get parentNode(){let i=this._$AA.parentNode,t=this._$AM;return t!==void 0&&(i==null?void 0:i.nodeType)===11&&(i=t.parentNode),i}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(i,t=this){i=it(this,i,t),Tt(i)?i===b||i==null||i===""?(this._$AH!==b&&this._$AR(),this._$AH=b):i!==this._$AH&&i!==Q&&this._(i):i._$litType$!==void 0?this.$(i):i.nodeType!==void 0?this.T(i):Ge(i)?this.k(i):this._(i)}O(i){return this._$AA.parentNode.insertBefore(i,this._$AB)}T(i){this._$AH!==i&&(this._$AR(),this._$AH=this.O(i))}_(i){this._$AH!==b&&Tt(this._$AH)?this._$AA.nextSibling.data=i:this.T(et.createTextNode(i)),this._$AH=i}$(i){var a;let{values:t,_$litType$:e}=i,n=typeof e=="number"?this._$AC(i):(e.el===void 0&&(e.el=Ct.createElement(Ye(e.h,e.h[0]),this.options)),e);if(((a=this._$AH)==null?void 0:a._$AD)===n)this._$AH.p(t);else{let r=new Ft(n,this),o=r.u(this.options);r.p(t),this.T(o),this._$AH=r}}_$AC(i){let t=je.get(i.strings);return t===void 0&&je.set(i.strings,t=new Ct(i)),t}k(i){de(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,e,n=0;for(let a of i)n===t.length?t.push(e=new s(this.O(Mt()),this.O(Mt()),this,this.options)):e=t[n],e._$AI(a),n++;n<t.length&&(this._$AR(e&&e._$AB.nextSibling,n),t.length=n)}_$AR(i=this._$AA.nextSibling,t){var e;for((e=this._$AP)==null?void 0:e.call(this,!1,!0,t);i!==this._$AB;){let n=ze(i).nextSibling;ze(i).remove(),i=n}}setConnected(i){var t;this._$AM===void 0&&(this._$Cv=i,(t=this._$AP)==null||t.call(this,i))}},nt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(i,t,e,n,a){this.type=1,this._$AH=b,this._$AN=void 0,this.element=i,this.name=t,this._$AM=n,this.options=a,e.length>2||e[0]!==""||e[1]!==""?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=b}_$AI(i,t=this,e,n){let a=this.strings,r=!1;if(a===void 0)i=it(this,i,t,0),r=!Tt(i)||i!==this._$AH&&i!==Q,r&&(this._$AH=i);else{let o=i,d,h;for(i=a[0],d=0;d<a.length-1;d++)h=it(this,o[e+d],t,d),h===Q&&(h=this._$AH[d]),r||(r=!Tt(h)||h!==this._$AH[d]),h===b?i=b:i!==b&&(i+=(h!=null?h:"")+a[d+1]),this._$AH[d]=h}r&&!n&&this.j(i)}j(i){i===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,i!=null?i:"")}},Ut=class extends nt{constructor(){super(...arguments),this.type=3}j(i){this.element[this.name]=i===b?void 0:i}},Ot=class extends nt{constructor(){super(...arguments),this.type=4}j(i){this.element.toggleAttribute(this.name,!!i&&i!==b)}},Nt=class extends nt{constructor(i,t,e,n,a){super(i,t,e,n,a),this.type=5}_$AI(i,t=this){var r;if((i=(r=it(this,i,t,0))!=null?r:b)===Q)return;let e=this._$AH,n=i===b&&e!==b||i.capture!==e.capture||i.once!==e.once||i.passive!==e.passive,a=i!==b&&(e===b||n);n&&this.element.removeEventListener(this.name,this,e),a&&this.element.addEventListener(this.name,this,i),this._$AH=i}handleEvent(i){var t,e;typeof this._$AH=="function"?this._$AH.call((e=(t=this.options)==null?void 0:t.host)!=null?e:this.element,i):this._$AH.handleEvent(i)}},Kt=class{constructor(i,t,e){this.element=i,this.type=6,this._$AN=void 0,this._$AM=t,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(i){it(this,i)}},Ve={M:le,P:G,A:ce,C:1,L:We,R:Ft,D:Ge,V:it,I:dt,H:nt,N:Ot,U:Nt,B:Ut,F:Kt},oe=St.litHtmlPolyfillSupport,Le;oe==null||oe(Ct,dt),((Le=St.litHtmlVersions)!=null?Le:St.litHtmlVersions=[]).push("3.3.3");var Je=(s,i,t)=>{var a,r;let e=(a=t==null?void 0:t.renderBefore)!=null?a:i,n=e._$litPart$;if(n===void 0){let o=(r=t==null?void 0:t.renderBefore)!=null?r:null;e._$litPart$=n=new dt(i.insertBefore(Mt(),o),o,void 0,t!=null?t:{})}return n._$AI(s),n};var st=globalThis,P=class extends L{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!=null||(t.renderBefore=i.firstChild),i}update(i){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Do=Je(t,this.renderRoot,this.renderOptions)}connectedCallback(){var i;super.connectedCallback(),(i=this._$Do)==null||i.setConnected(!0)}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this._$Do)==null||i.setConnected(!1)}render(){return Q}},Ze;P._$litElement$=!0,P.finalized=!0,(Ze=st.litElementHydrateSupport)==null||Ze.call(st,{LitElement:P});var pe=st.litElementPolyfillSupport;pe==null||pe({LitElement:P});var qe;((qe=st.litElementVersions)!=null?qe:st.litElementVersions=[]).push("4.2.2");var Dt=class{constructor(i,t,e){this.host=i;this.type=t;this.entity=e;this.connected=!1;i.addController(this)}hostConnected(){this.connected=!0,this.sync()}hostDisconnected(){this.connected=!1,this.stop()}hostUpdated(){this.sync()}sync(){let i=this.host.hass,t=this.entity();if(!this.connected||!i||!t)return;let e=`${t}|${this.type}`;e!==this.subscribedKey&&(this.stop(),this.subscribedKey=e,this.error=void 0,this.unsub=i.connection.subscribeMessage(n=>{var a;this.forecast=(a=n.forecast)!=null?a:[],this.host.requestUpdate()},{type:"weather/subscribe_forecast",forecast_type:this.type,entity_id:t}),this.unsub.catch(n=>{var a;this.error=(a=n==null?void 0:n.message)!=null?a:String(n),this.subscribedKey=void 0,this.host.requestUpdate()}))}stop(){let i=this.unsub;this.unsub=void 0,this.subscribedKey=void 0,i==null||i.then(t=>t()).catch(()=>{})}};var rt=new Map;function ht(s,i){let t=i.ids.filter(Boolean);if(!t.length)return Promise.resolve({});let e=JSON.stringify([t,i.start.getTime(),i.end.getTime(),i.period,i.types]),n=Date.now(),a=rt.get(e);if(a&&a.expires>n)return a.promise;let r=s.callWS({type:"recorder/statistics_during_period",start_time:i.start.toISOString(),end_time:i.end.toISOString(),statistic_ids:t,period:i.period,types:i.types}).then(Wi),o={promise:r,expires:i.end.getTime()<n?1/0:n+3e5};return rt.set(e,o),r.catch(()=>rt.get(e)===o&&rt.delete(e)),rt.size>60&&rt.delete(rt.keys().next().value),r}function Wi(s){for(let i of Object.values(s))for(let t of i)typeof t.start!="number"&&(t.start=new Date(t.start).getTime()),typeof t.end!="number"&&(t.end=new Date(t.end).getTime());return s}var C=(s,i)=>f`<div class="head"><ha-icon icon=${s}></ha-icon><span>${i}</span></div>`,pt=B`
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
`;var K=Math.PI/180;function ue(s,i,t){let e=new Date(s.getFullYear(),s.getMonth(),s.getDate(),12),a=Math.round((e.getTime()-Date.UTC(2e3,0,1,12))/864e5)-t/360,r=(357.5291+.98560028*a)%360,o=1.9148*Math.sin(r*K)+.02*Math.sin(2*r*K)+3e-4*Math.sin(3*r*K),d=(r+o+180+102.9372)%360,h=a+.0053*Math.sin(r*K)-.0069*Math.sin(2*d*K),c=Math.asin(Math.sin(d*K)*Math.sin(23.4397*K)),l=(Math.sin(-.833*K)-Math.sin(i*K)*Math.sin(c))/(Math.cos(i*K)*Math.cos(c));if(l<-1||l>1)return;let u=Math.acos(l)/K/360,p=m=>new Date(Date.UTC(2e3,0,1,12)+m*864e5);return{rise:p(h-u),set:p(h+u),noon:p(h)}}var at=29.530588853,Vi=Date.UTC(2e3,0,6,18,14);function Xe(s){let t=((s.getTime()-Vi)/864e5%at+at)%at,e=(1-Math.cos(t/at*2*Math.PI))/2,n=(at/2-t+at)%at;return{age:t,illumination:e,nextFull:new Date(s.getTime()+n*864e5)}}var Ji={"clear-night":"Klar",cloudy:"Bew\xF6lkt",exceptional:"Unwetter",fog:"Nebel",hail:"Hagel",lightning:"Gewitter","lightning-rainy":"Gewitter mit Regen",partlycloudy:"Teilweise bew\xF6lkt",pouring:"Starkregen",rainy:"Regnerisch",snowy:"Schnee","snowy-rainy":"Schneeregen",sunny:"Sonnig",windy:"Windig","windy-variant":"Windig und bew\xF6lkt"};function Et(s){return s&&Ji[s]||"\u2013"}var ti={sunny:"47,128,237",partlycloudy:"70,130,200",cloudy:"120,135,150","windy-variant":"120,135,150",rainy:"80,105,135",pouring:"70,90,120",hail:"90,100,125",snowy:"160,180,205","snowy-rainy":"130,150,175",fog:"150,155,160",lightning:"85,80,125","lightning-rainy":"85,80,125",exceptional:"150,70,70",windy:"100,140,170"},Zi="35,50,100";function ei(s,i){return`rgba(${i&&(s==="sunny"||s==="clear-night"||s==="partlycloudy")?Zi:s&&ti[s]||ti.cloudy},${i?.35:.45})`}var qi={new_moon:"Neumond",waxing_crescent:"Zunehmende Sichel",first_quarter:"Erstes Viertel",waxing_gibbous:"Zunehmender Mond",full_moon:"Vollmond",waning_gibbous:"Abnehmender Mond",last_quarter:"Letztes Viertel",waning_crescent:"Abnehmende Sichel"};function ii(s){return s&&qi[s]||"\u2013"}var ni="data:image/jpeg;base64,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";var si=new Map;function _(s,i=1){if(s==null||!isFinite(s))return"\u2013";let t=si.get(i);return t||(t=new Intl.NumberFormat("de-DE",{minimumFractionDigits:i,maximumFractionDigits:i}),si.set(i,t)),t.format(s)}var D=(s,i=0)=>s==null?"\u2013":`${_(s,i)}\xB0`,W=(s,i=1)=>`${_(s,i)} l/m\xB2`;function R(s,i){let t=i?s==null?void 0:s.states[i]:void 0;if(!t)return;let e=parseFloat(t.state);return isFinite(e)?e:void 0}var Xi=["So","Mo","Di","Mi","Do","Fr","Sa"];function ri(s,i=new Date){return s.toDateString()===i.toDateString()?"Heute":Xi[s.getDay()]}function ai(s){return`${String(s.getHours()).padStart(2,"0")} Uhr`}function jt(s){return s.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}var tn=["N","NO","O","SO","S","SW","W","NW"];function Lt(s){return s==null||!isFinite(s)?"\u2013":tn[Math.round((s%360+360)%360/45)%8]}function oi(s){return f`<div class="tiles">
    ${sn(s)} ${en(s)} ${rn(s)} ${an(s)} ${on(s)} ${cn(s)} ${dn(s)} ${hn(s)}
  </div>`}function en({hass:s,config:i}){var r;let t=(r=i.sensors)!=null?r:{},e=R(s,t.feels_like);if(e==null)return b;let n=R(s,t.temperature),a=n==null?"":e<n-1?"Durch den Wind f\xFChlt es sich k\xE4lter an.":e>n+1?"Durch die Luftfeuchtigkeit f\xFChlt es sich w\xE4rmer an.":"\xC4hnlich wie die tats\xE4chliche Temperatur.";return f`<section class="card tile">${C("mdi:thermometer-lines","Gef\xFChlt")}
    <div class="val">${D(e)}</div>
    ${n!=null?f`<div class="lbl">Tatsächlich: ${D(n)}</div>${nn(e,n)}`:b}
    <div class="txt">${a}</div></section>`}function nn(s,i){let t=Math.round(s-i),e=Math.max(14,Math.abs(s-i)/.5),n=t<0?s-.32*e:t>0?s+.32*e-e:i-e/2,a=o=>(o-n)/e*100,r=t<0?"#6ec6f0":"#ffb74d";return f`<div class="fbar">
    ${t!==0?f`<i class="fseg" style="left:${a(Math.min(s,i))}%;width:${a(Math.max(s,i))-a(Math.min(s,i))}%;background:${r}"></i>
      <b class="fpill" style="left:${a(s)}%;background:${r};transform:translateX(${t<0?"-100%":"0"})">${t<0?"\u2193":"\u2191"}${Math.abs(t)}°</b>`:b}
    <i class="ftick" style="left:${a(i)}%"></i>
  </div>`}function sn({hass:s,config:i}){var o;let t=(o=i.sensors)!=null?o:{},e=R(s,t.wind_speed);if(e==null)return b;let n=R(s,t.wind_gust),a=R(s,t.wind_direction),r=[...Array(72)].map((d,h)=>{let c=h*5*Math.PI/180,l=h%18===0?38:41;return v`<line x1=${50+Math.sin(c)*l} y1=${50-Math.cos(c)*l} x2=${50+Math.sin(c)*45} y2=${50-Math.cos(c)*45} class=${h%18===0?"tk major":"tk"}/>`});return f`<section class="card tile wide2">${C("mdi:weather-windy","Wind")}
    <div class="wind">
      <div class="rows">
        <div class="row"><span>Wind</span><b>${_(e,0)} km/h</b></div>
        ${n!=null?f`<div class="row"><span>Böen</span><b>${_(n,0)} km/h</b></div>`:b}
        ${a!=null?f`<div class="row"><span>Richtung</span><b>${_(a,0)}° ${Lt(a)}</b></div>`:b}
      </div>
      <svg class="compass" viewBox="0 0 100 100">
        ${r}
        ${["N","O","S","W"].map((d,h)=>v`<text x=${50+Math.sin(h*Math.PI/2)*30} y=${54-Math.cos(h*Math.PI/2)*30} class="cl">${d}</text>`)}
        ${a!=null?v`<g transform="rotate(${a+180} 50 50)">
          <line x1="50" y1="88" x2="50" y2="18" class="arrow"/><path d="M50 10l-6 11h12z" class="arrowhead"/>
          <circle cx="50" cy="88" r="3.5" class="arrowhead"/></g>`:b}
        <circle cx="50" cy="50" r="17" class="hub"/>
        <text x="50" y="50" class="cv">${_(e,0)}</text><text x="50" y="60" class="cu">km/h</text>
      </svg>
    </div></section>`}function rn({hass:s,config:i,hourly:t,recent:e}){var h;let n=(h=i.sensors)!=null?h:{};if(!n.rain_total&&!t)return b;let a=n.rain_total&&(e!=null&&e[n.rain_total])?e[n.rain_total].reduce((c,l)=>{var u;return c+((u=l.change)!=null?u:0)},0):void 0,r=Date.now(),o=t==null?void 0:t.filter(c=>{let l=new Date(c.datetime).getTime();return l>=r-36e5&&l<r+23*36e5}).reduce((c,l)=>{var u;return c+((u=l.precipitation)!=null?u:0)},0),d=R(s,n.rain_rate);return f`<section class="card tile">${C("mdi:water","Niederschlag")}
    <div class="val">${a!=null?W(a):"\u2013"}</div>
    <div class="lbl">in den letzten 24 Std.</div>
    <div class="txt">${d?f`Aktuell ${_(d)} l/m² pro Std.<br>`:b}
      ${o!=null?`${W(o)} in den n\xE4chsten 24 Std. erwartet.`:""}</div></section>`}function an({hass:s,config:i,recent:t}){var l;let e=(l=i.sensors)!=null?l:{},n=R(s,e.pressure);if(n==null)return b;let a=e.pressure?t==null?void 0:t[e.pressure]:void 0,r=a&&a.length>=3?a[a.length-3].mean:void 0,o=r!=null?n-r:void 0,d=o==null?"":o>1?"steigend":o<-1?"fallend":"gleichbleibend",h=o==null?0:Math.max(-1,Math.min(1,o/4))*120,c=[...Array(41)].map((u,p)=>{let m=(-120+p*6)*Math.PI/180;return v`<line x1=${50+Math.sin(m)*36} y1=${54-Math.cos(m)*36} x2=${50+Math.sin(m)*44} y2=${54-Math.cos(m)*44} class="tk"/>`});return f`<section class="card tile">${C("mdi:gauge","Luftdruck")}
    <svg class="gauge" viewBox="0 0 100 92">
      ${c}
      <g transform="rotate(${h} 50 54)"><line x1="50" y1="6" x2="50" y2="20" class="needle"/></g>
      <text x="50" y="52" class="gv">${_(n,0)}</text><text x="50" y="64" class="gu">hPa</text>
      <text x="16" y="90" class="gu">−</text><text x="84" y="90" class="gu">+</text>
    </svg>
    <div class="txt">${d?f`3 Std.: ${d} (${o>0?"+":""}${_(o,1)} hPa)`:b}</div></section>`}function on({hass:s,config:i}){var a;let t=(a=i.sensors)!=null?a:{},e=R(s,t.humidity);if(e==null)return b;let n=R(s,t.dewpoint);return f`<section class="card tile">${C("mdi:water-percent","Feuchtigkeit")}
    <div class="val">${_(e,0)} %</div>
    <div class="hbar"><i style="width:${Math.max(0,Math.min(100,e))}%"></i></div>
    <div class="txt">${n!=null?`Der Taupunkt liegt derzeit bei ${D(n)}.`:""}</div></section>`}var ln=[[3,"Niedrig"],[6,"Mittel"],[8,"Hoch"],[11,"Sehr hoch"],[99,"Extrem"]];function cn({hass:s,config:i}){var r;let t=(r=i.sensors)!=null?r:{},e=R(s,t.uv);if(e==null)return b;let n=R(s,t.solar),a=ln.find(([o])=>e<o)[1];return f`<section class="card tile">${C("mdi:sun-wireless","UV-Index")}
    <div class="val">${_(e,0)}</div><div class="lbl">${a}</div>
    <div class="uvbar"><i style="left:${Math.min(100,e/11*100)}%"></i></div>
    <div class="txt">${n!=null?`Sonneneinstrahlung ${_(n,0)} W/m\xB2`:""}</div></section>`}function dn({hass:s,config:i}){var U,I,F,ot,Pt,yt,N,lt,wt;let t=(U=s.states[i.weather])==null?void 0:U.attributes,e=i.sun?s.states[i.sun]:void 0,n=(F=t==null?void 0:t.latitude)!=null?F:(I=s.config)==null?void 0:I.latitude,a=(Pt=t==null?void 0:t.longitude)!=null?Pt:(ot=s.config)==null?void 0:ot.longitude;if(n==null||a==null)return b;let r=new Date,o=ue(r,n,a);if(!o)return b;let d=z=>z&&new Date(z).toDateString()===r.toDateString()?new Date(z):void 0,h=(yt=d(e==null?void 0:e.attributes.next_rising))!=null?yt:o.rise,c=(N=d(e==null?void 0:e.attributes.next_setting))!=null?N:o.set,l=r<c,u=r<h?["Sonnenaufgang",h]:l?["Sonnenuntergang",c]:["Sonnenaufgang",(wt=(lt=ue(new Date(r.getTime()+864e5),n,a))==null?void 0:lt.rise)!=null?wt:h],p=new Date(r.getFullYear(),r.getMonth(),r.getDate()).getTime(),m=z=>(z.getTime()-p)/864e5,y=(m(h)+m(c))/2,$=m(c)-m(h),x=z=>Math.cos(2*Math.PI*(z-y)),A=Math.cos(Math.PI*$),k=z=>34-z*22,S=[...Array(49)].map((z,Z)=>`${Z?"L":"M"}${Z/48*100},${k(x(Z/48))}`).join(" "),H=m(r),E=r>=h&&r<c;return f`<section class="card tile">${C(E?"mdi:weather-sunset-down":"mdi:weather-sunset-up",u[0])}
    <div class="val">${jt(u[1])}</div>
    <div class="sunarc">
      <svg viewBox="0 0 100 60" preserveAspectRatio="none">
        <path d=${S} class="sunpath"/>
        <line x1="0" x2="100" y1=${k(A)} y2=${k(A)} class="hz"/>
      </svg>
      <!-- Punkt als HTML, sonst verzerrt preserveAspectRatio=none ihn zur Ellipse -->
      <i class=${E?"sundot":"sundot down"} style="left:${H*100}%;top:${k(x(H))/60*100}%"></i>
    </div>
    <div class="txt">${u[0]==="Sonnenuntergang"?`Sonnenaufgang: ${jt(h)}`:`Sonnenuntergang: ${jt(c)}`}</div>
  </section>`}function hn({hass:s,config:i}){var r;let t=i.moon?(r=s.states[i.moon])==null?void 0:r.state:void 0,e=Xe(new Date),n=Math.round((e.nextFull.getTime()-Date.now())/864e5),a=e.illumination;return f`<section class="card tile wide2 moont">${C("mdi:moon-waxing-gibbous",t?ii(t):"Mond")}
    <div class="moon">
      <div>
        <div class="row"><span>Beleuchtung</span><b>${Math.round(a*100)} %</b></div>
        <div class="row"><span>Nächster Vollmond</span><b>${n<=0?"heute":n===1?"morgen":`in ${n} Tg.`}</b></div>
      </div>
      ${pn(a,e.age<29.530588853/2)}
    </div></section>`}function pn(s,i){let a=`M50 30 A20 20 0 0 0 50 70 A${20*Math.abs(1-2*s)} 20 0 0 ${s>.5?1:0} 50 30Z`;return v`<svg class="moonimg" viewBox="28 28 44 44" aria-hidden="true">
    <defs>
      <filter id="ms" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="0.6"/></filter>
      <clipPath id="mc"><circle cx=${50} cy=${50} r=${20}/></clipPath>
    </defs>
    <g clip-path="url(#mc)">
      <image href=${ni} x=${30} y=${30} width=${40} height=${40}/>
      ${s<.995?v`<path d=${a} fill="#05070c" fill-opacity="0.88" filter="url(#ms)"
        transform=${i?"":"translate(100 0) scale(-1 1)"}/>`:b}
    </g>
  </svg>`}var li=B`
  /* so viele Spalten wie passen (Handy 2, Tablet/PC 3–6) → keine riesigen, halbleeren Kacheln */
  .tiles { display: grid; grid-template-columns: repeat(auto-fill, minmax(165px, 1fr)); gap: 12px; }
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
  .moon .moonimg { width: 92px; height: 92px; flex: none; }
  .moon > div { flex: 1; min-width: 0; }
`;var un="M18 46a10 10 0 0 1 0-20a14 14 0 0 1 27-3a11.5 11.5 0 0 1 1 23z",ci=(s=32,i=32,t=11)=>v`
  <g class="sun">
    <circle cx=${s} cy=${i} r=${t} fill="#FFD84D"/>
    ${[0,45,90,135,180,225,270,315].map(e=>{let n=e*Math.PI/180,a=s+Math.cos(n)*(t+4),r=i+Math.sin(n)*(t+4),o=s+Math.cos(n)*(t+9),d=i+Math.sin(n)*(t+9);return v`<line x1=${a} y1=${r} x2=${o} y2=${d} stroke="#FFD84D" stroke-width="3.5" stroke-linecap="round"/>`})}
  </g>`,me=(s=0,i=0,t=1)=>v`
  <path class="mo" transform="translate(${s} ${i}) scale(${t})"
    d="M40 10a20 20 0 1 0 14 34A17 17 0 0 1 40 10z"/>`,O=(s=0,i=0,t=1,e="c1")=>v`
  <path transform="translate(${s} ${i}) scale(${t})" d=${un} class=${e}/>`,Gt=s=>v`
  ${[...Array(s)].map((i,t)=>{let e=22+t*(20/Math.max(1,s-1));return v`<line x1=${e} y1="50" x2=${e-3} y2="58" stroke="#4FB3FF" stroke-width="3" stroke-linecap="round"/>`})}`,di=v`${[22,32,42].map((s,i)=>v`<circle cx=${s} cy=${i%2?57:53} r="2.6" class="fl"/>`)}`,hi=v`<path d="M34 44l-7 10h6l-3 9l10-13h-6l3-6z" fill="#FFD84D"/>`,mn=v`${[40,47,54].map((s,i)=>v`<line x1=${12+i*3} y1=${s} x2=${52-i*2} y2=${s} class="ln" stroke-width="3.5" stroke-linecap="round"/>`)}`;function Rt(s,i=!1){let t;switch(s){case"sunny":t=i?me(2,6,.95):ci();break;case"clear-night":t=me(2,6,.95);break;case"partlycloudy":t=v`${i?me(10,-2,.7):ci(42,22,9)}${O(-4,6,1)}`;break;case"cloudy":case"windy-variant":t=v`${O(10,-4,.75,"c2")}${O(-4,6)}`;break;case"fog":t=v`${O(0,-8,.95,"c2")}${mn}`;break;case"rainy":t=v`${O(0,-6)}${Gt(3)}`;break;case"pouring":t=v`${O(0,-6,1,"c2")}${Gt(5)}`;break;case"hail":t=v`${O(0,-6,1,"c2")}${di}`;break;case"snowy":t=v`${O(0,-6)}${di}`;break;case"snowy-rainy":t=v`${O(0,-6)}${Gt(2)}<circle cx="32" cy="55" r="2.6" class="fl"/>`;break;case"lightning":t=v`${O(0,-8,1,"c2")}${hi}`;break;case"lightning-rainy":case"exceptional":t=v`${O(0,-8,1,"c2")}${hi}${Gt(2)}`;break;case"windy":t=v`${[24,32,40].map((e,n)=>v`<path d="M10 ${e}h${30-n*6}a6 6 0 1 0-6-6" fill="none" class="ln" stroke-width="3.5" stroke-linecap="round"/>`)}`;break;default:t=O(0,0,1,"c2")}return v`<svg class="wicon" viewBox="0 0 64 64" aria-hidden="true">${t}</svg>`}function Qt(s,i,t=Date.now()){let e=(s!=null?s:[]).filter(r=>r.temperature!=null).map(r=>({t:new Date(r.datetime).getTime(),v:r.temperature})),n=gn(e,t),a=i!=null&&n!=null?i-n:0;return(r,o)=>{if(o==null||!a||r<=t)return o;let d=1-(r-t)/(3*36e5);return d>0?o+a*d:o}}function gn(s,i){for(let t=0;t<s.length-1;t++){let e=s[t],n=s[t+1];if(e.t<=i&&i<=n.t)return e.v+(n.v-e.v)*(i-e.t)/(n.t-e.t||1)}if(s.length&&s[0].t>i&&s[0].t-i<=36e5)return s[0].v}var ut=class extends P{constructor(){super(...arguments);this._tab="forecast";this._wide=!1;this._metric="temp";this.hourly=new Dt(this,"hourly",()=>{var t;return(t=this._config)==null?void 0:t.weather});this.daily=new Dt(this,"daily",()=>{var t;return(t=this._config)==null?void 0:t.weather})}setConfig(t){if(!(t!=null&&t.weather))throw new Error("`weather:` fehlt (z. B. weather.weather_fusion_ai_kresslingweg)");this._config={...t,sensors:{...t.sensors}}}static getStubConfig(t){var e;return{weather:(e=Object.keys(t.states).find(n=>n.startsWith("weather.")))!=null?e:""}}getCardSize(){return 12}getGridOptions(){return{columns:"full",rows:"auto"}}connectedCallback(){var t;super.connectedCallback(),(t=this._ro)!=null||(this._ro=new ResizeObserver(e=>{let n=e[0].contentRect.width>=820;n!==this._wide&&(this._wide=n)})),this._ro.observe(this)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._ro)==null||t.disconnect()}shouldUpdate(t){if(t.size>1||!t.has("hass"))return!0;let e=t.get("hass");return!e||!this.hass||!this._config?!0:this.watchedIds().some(n=>e.states[n]!==this.hass.states[n])}watchedIds(){var e;let t=this._config;return[t.weather,t.sun,t.moon,...Object.values((e=t.sensors)!=null?e:{})].filter(Boolean)}updated(){this._tab==="forecast"&&this.loadRecent()}loadRecent(){var r;let t=(r=this._config.sensors)!=null?r:{},e=[t.rain_total,t.pressure].filter(Boolean);if(!this.hass||!e.length)return;let n=Math.ceil(Date.now()/3e5)*3e5,a=String(n);a!==this._recentKey&&(this._recentKey=a,ht(this.hass,{ids:e,start:new Date(n-864e5),end:new Date(n),period:"hour",types:["mean","change"]}).then(o=>a===this._recentKey&&(this._recent=o),()=>this._recentKey=void 0))}openDetail(t,e=this._metric){this._metric=e,this._detail=t}render(){var o,d,h,c,l;if(!this._config||!this.hass)return b;let t=this.hass.states[this._config.weather];if(!t)return f`<div class="warn">Entität ${this._config.weather} nicht gefunden.</div>`;let e=this._config.sun?((o=this.hass.states[this._config.sun])==null?void 0:o.state)==="below_horizon":!1,n=(d=this._config.sensors)!=null?d:{},a=(h=R(this.hass,n.temperature))!=null?h:t.attributes.temperature,r=(c=this.daily.forecast)==null?void 0:c[0];return f`
      <div class="app ${this._wide?"wide":""} ${(l=this.hass.themes)!=null&&l.darkMode?"dark":""} ${this._config.layout==="page"?"page":""}"
        style="--wa-tint:${ei(t.state,e)}">
        ${this._config.animations!==!1?f`<wetter-app-sky class="sky" .condition=${t.state} .night=${e}></wetter-app-sky>`:b}
        <header>
          ${this._config.name?f`<div class="place">${this._config.name}</div>`:b}
          <div class="now">${D(a)}</div>
          <div class="cond">${Et(t.state)}</div>
          ${r?f`<div class="hl">H: ${D(r.temperature)}  T: ${D(r.templow)}</div>`:b}
        </header>

        <nav class="tabs" role="tablist">
          ${["forecast","history"].map(u=>f`
            <button role="tab" aria-selected=${this._tab===u} class=${this._tab===u?"on":""}
              @click=${()=>this._tab=u}>
              <ha-icon icon=${u==="forecast"?"mdi:calendar-arrow-right":"mdi:chart-line"}></ha-icon>
              ${u==="forecast"?"Vorhersage":"Historie"}
            </button>`)}
        </nav>

        <main>${this._tab==="forecast"?this.renderForecast(a,e):f`<wetter-app-history .hass=${this.hass} .config=${this._config} .wide=${this._wide}></wetter-app-history>`}</main>
      </div>
    `}renderForecast(t,e){var a,r;let n=(a=this.hourly.error)!=null?a:this.daily.error;return f`
      ${n?f`<div class="warn">Vorhersage nicht verfügbar: ${n}</div>`:b}
      <div class="cols">
        <div class="left">
          <section class="card hourly">${this.renderHourly(t,e)}</section>
          ${oi({hass:this.hass,config:this._config,hourly:this.hourly.forecast,recent:this._recent})}
        </div>
        <section class="card daily">${this.renderDaily(t)}</section>
      </div>
      ${this._detail!=null&&this.daily.forecast?f`<wetter-app-day-detail .hass=${this.hass} .config=${this._config} .hourly=${(r=this.hourly.forecast)!=null?r:[]}
            .daily=${this.daily.forecast} .index=${this._detail} .metric=${this._metric}
            @close=${()=>this._detail=void 0}
            @select=${o=>this._detail=o.detail.index}
            @metric=${o=>this._metric=o.detail.metric}></wetter-app-day-detail>`:b}
    `}renderHourly(t,e){let n=this.hourly.forecast;if(!n)return f`<div class="loading">Lade Stundenvorhersage …</div>`;let a=Date.now()-36e5,r=n.filter(d=>new Date(d.datetime).getTime()>a).slice(0,25),o=Qt(n,t);return f`
      ${C("mdi:clock-outline","St\xFCndlich")}
      <div class="hours">
        ${r.map((d,h)=>{var c;return f`
          <div class="hr" @click=${()=>this.openDetail(0,"temp")}>
            <div class="t">${h===0?"Jetzt":ai(new Date(d.datetime))}</div>
            ${Rt(d.condition,h===0?e:d.is_daytime===!1)}
            <div class="p">${((c=d.precipitation_probability)!=null?c:0)>=20?`${Math.round(d.precipitation_probability)} %`:""}</div>
            <div class="v">${D(h===0?t!=null?t:d.temperature:o(new Date(d.datetime).getTime(),d.temperature))}</div>
          </div>`})}
      </div>
    `}renderDaily(t){let e=this.daily.forecast;if(!e)return f`<div class="loading">Lade Tagesvorhersage …</div>`;let n=e.slice(0,10),a=Math.min(...n.map(h=>{var c,l;return(l=(c=h.templow)!=null?c:h.temperature)!=null?l:99})),r=Math.max(...n.map(h=>{var c;return(c=h.temperature)!=null?c:-99})),o=Math.max(1,r-a),d=h=>(h-a)/o*100;return f`
      ${C("mdi:calendar-week",`${n.length}-Tage-Vorhersage`)}
      ${n.map((h,c)=>{var y,$,x,A;let l=($=(y=h.templow)!=null?y:h.temperature)!=null?$:a,u=(x=h.temperature)!=null?x:l,p=Math.max(.5,d(u)-d(l)),m=`background-size:${100/p*100}% 100%;background-position:${p>=100?0:d(l)/(100-p)*100}% 0`;return f`
          <div class="day" role="button" tabindex="0" @click=${()=>this.openDetail(c)}
            @keydown=${k=>k.key==="Enter"&&this.openDetail(c)}>
            <div class="wd">${ri(new Date(h.datetime))}</div>
            <div class="ic">
              ${Rt(h.condition)}
              ${((A=h.precipitation_probability)!=null?A:0)>=20?f`<span class="p">${Math.round(h.precipitation_probability)} %</span>`:b}
            </div>
            <div class="lo">${D(l)}</div>
            <div class="bar">
              <div class="fill" style="left:${d(l)}%;right:${100-d(u)}%;${m}"></div>
              ${c===0&&t!=null?f`<div class="dot" style="left:${Math.min(100,Math.max(0,d(t)))}%"></div>`:b}
            </div>
            <div class="hi">${D(u)}</div>
          </div>`})}
    `}};ut.properties={hass:{attribute:!1},_config:{state:!0},_tab:{state:!0},_wide:{state:!0},_detail:{state:!0},_metric:{state:!0},_recent:{state:!0}},ut.styles=[pt,li,B`
      :host { display: block; }
      /* Dezenter Wetter-Farbton oben, läuft in den Theme-Hintergrund aus */
      .app {
        box-sizing: border-box; padding: 16px 12px; display: flex; flex-direction: column; gap: 12px;
        border-radius: var(--ha-card-border-radius, 12px);
        background: linear-gradient(180deg, var(--wa-tint) 0, transparent 520px), var(--primary-background-color, #111);
      }
      .app { position: relative; --wa-drop: rgba(40, 70, 110, 0.3); --wa-flake: rgba(90, 110, 140, 0.55); --wa-cloudbg: rgba(120, 135, 155, 0.22); }
      .app.dark { --wa-drop: rgba(255, 255, 255, 0.3); --wa-flake: rgba(255, 255, 255, 0.75); --wa-cloudbg: rgba(255, 255, 255, 0.11); }
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

    `];var M={l:6,r:38,t:18,b:22},gt=class extends P{constructor(){super(...arguments);this.start=0;this.end=0;this.series=[];this.ticks=[];this.markers=[];this.height=200;this.yUnit="";this.rightUnit="";this.timeFormat=t=>new Date(t).toLocaleString("de-DE");this._w=0;this._onTouchStart=t=>this.touchStart(t);this._onTouchMove=t=>this.touchMove(t);this._onTouchEnd=()=>this.touchEnd()}connectedCallback(){var t;super.connectedCallback(),(t=this._ro)!=null||(this._ro=new ResizeObserver(e=>{let n=Math.round(e[0].contentRect.width);n&&n!==this._w&&(this._w=n)})),this._ro.observe(this),this.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.addEventListener("touchmove",this._onTouchMove,{passive:!1}),this.addEventListener("touchend",this._onTouchEnd),this.addEventListener("touchcancel",this._onTouchEnd)}disconnectedCallback(){var t,e;super.disconnectedCallback(),(t=this._ro)==null||t.disconnect(),this.removeEventListener("touchstart",this._onTouchStart),this.removeEventListener("touchmove",this._onTouchMove),this.removeEventListener("touchend",this._onTouchEnd),this.removeEventListener("touchcancel",this._onTouchEnd),clearTimeout((e=this._touch)==null?void 0:e.timer),clearTimeout(this._hideTimer)}willUpdate(t){(t.has("series")||t.has("start"))&&(this._hover=void 0)}x(t){let e=Math.max(1,this.end-this.start);return M.l+(t-this.start)/e*(this._w-M.l-M.r)}scale(t){var c;let e=[];for(let l of this.series)if(((c=l.axis)!=null?c:"left")===t){for(let u of l.points)u.v!=null&&e.push(u.v),u.v2!=null&&e.push(u.v2);l.type==="bar"&&e.push(0)}let n=t==="left"?this.yMin:0,a=t==="left"?this.yMax:this.rightMax;n==null&&(n=e.length?Math.min(...e):0),a==null&&(a=e.length?Math.max(...e):1),a-n<1e-9&&(a=n+1);let r=xn((a-n)/4);t==="left"&&this.yMin==null&&(n=Math.floor(n/r)*r),t==="left"&&this.yMax==null&&(a=Math.ceil(a/r)*r),t==="right"&&this.rightMax==null&&(a=Math.ceil(a/r)*r);let o=this.height-M.t-M.b,d=l=>M.t+o-(l-n)/(a-n)*o,h=[];for(let l=n;l<=a+r/1e3;l+=r)h.push(Math.round(l*1e6)/1e6);return{y:d,ticks:h,lo:n,hi:a}}onPointer(t){t.pointerType!=="touch"&&this.hoverAt(t.clientX)}touchStart(t){var n;if(clearTimeout((n=this._touch)==null?void 0:n.timer),clearTimeout(this._hideTimer),t.touches.length!==1){this._touch=void 0;return}let e=t.touches[0];this._touch={x:e.clientX,y:e.clientY,mode:"?"},this._touch.timer=window.setTimeout(()=>{var a;((a=this._touch)==null?void 0:a.mode)==="?"&&(this._touch.mode="scrub")},250),this.hoverAt(e.clientX)}touchMove(t){let e=this._touch;if(!e||t.touches.length!==1)return;let n=t.touches[0];if(e.mode==="?"){let a=Math.abs(n.clientX-e.x),r=Math.abs(n.clientY-e.y);if(a<8&&r<8)return;if(clearTimeout(e.timer),e.mode=a>r?"scrub":"scroll",e.mode==="scroll"){this._hover=void 0;return}}e.mode==="scrub"&&(t.cancelable&&t.preventDefault(),this.hoverAt(n.clientX))}touchEnd(){let t=this._touch;t&&(clearTimeout(t.timer),this._touch=void 0,t.mode!=="scroll"&&(this._hideTimer=window.setTimeout(()=>this._hover=void 0,3e3)))}hoverAt(t){let e=this.renderRoot.querySelector("svg");if(!e)return;let n=t-e.getBoundingClientRect().left,a=this.start+(n-M.l)/(this._w-M.l-M.r)*(this.end-this.start),r;for(let o of this.series)for(let d of o.points){if(d.v==null)continue;let h=Yt(o,d);(r==null||Math.abs(h-a)<Math.abs(r-a))&&(r=h)}this._hover=r}render(){var h;let t=this._w;if(!t||this.end<=this.start)return f`<div style="height:${this.height}px"></div>`;let e=this.scale("left"),a=this.series.some(c=>c.axis==="right")?this.scale("right"):void 0,r=this.height-M.b,o=[];this.now&&this.now>this.start&&this.now<this.end&&o.push(v`<rect x=${M.l} y=${M.t} width=${this.x(this.now)-M.l} height=${r-M.t} class="past"/>`);for(let c of e.ticks){let l=e.y(c);o.push(v`<line x1=${M.l} x2=${t-M.r} y1=${l} y2=${l} class="grid"/>`),o.push(v`<text x=${t-M.r+6} y=${l+4} class="ylab">${pi(c)}${this.yUnit}</text>`)}if(a){let c=this.series.find(l=>l.axis==="right").color;for(let l of a.ticks)l!==0&&o.push(v`<text x=${M.l+3} y=${a.y(l)-3} class="rlab" style="fill:${c}">${pi(l)}${this.rightUnit}</text>`)}for(let c of this.ticks){let l=this.x(c.t);l<M.l-1||l>t-M.r+1||(o.push(v`<line x1=${l} x2=${l} y1=${M.t} y2=${r} class="vgrid"/>`),o.push(v`<text x=${l+3} y=${this.height-6} class="xlab">${c.label}</text>`))}this.series.forEach((c,l)=>{var y,$;let u=c.axis==="right"&&a?a:e,p=c.points.filter(x=>x.v!=null).sort((x,A)=>x.t-A.t);if(!p.length)return;if(c.type==="bar"||c.type==="range"){let x=(y=c.barWidth)!=null?y:p.length>1?p[1].t-p[0].t:(this.end-this.start)/24,A=u.y(Math.max(0,u.lo));for(let k of p){let S=k.t2!=null?k.t2-k.t:x,H=Math.max(1.5,Math.min(14,(this.x(this.start+S)-this.x(this.start))*.65)),E=this.x(k.t+S/2),U=u.y(k.v),I=c.type==="range"?u.y(($=k.v2)!=null?$:k.v):A,F=Math.max(c.type==="range"?H:.5,Math.abs(I-U)),ot=Math.min(U,I)-(F-Math.abs(I-U))/2;o.push(v`<rect x=${E-H/2} y=${ot} width=${H} height=${F} rx=${c.type==="range"?H/2:2} style="fill:${c.color}"/>`)}return}if(c.type==="band"){let x=p.filter(k=>k.v2!=null).map(k=>[this.x(k.t),u.y(k.v2)]),A=p.map(k=>[this.x(k.t),u.y(k.v)]).reverse();x.length&&o.push(v`<path d=${mt(x)+" L"+mt(A).slice(1)+"Z"} style="fill:${c.color};fill-opacity:0.28"/>`);return}let m=p.map(x=>[this.x(x.t),u.y(x.v)]);if(c.type==="area"){let x=`g${l}`;o.push(v`
          <defs><linearGradient id=${x} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" style="stop-color:${c.color};stop-opacity:0.45"/>
            <stop offset="1" style="stop-color:${c.color};stop-opacity:0.04"/>
          </linearGradient></defs>
          <path d=${`${mt(m)} L${m[m.length-1][0]},${r} L${m[0][0]},${r}Z`} fill="url(#${x})"/>`)}if(c.dashUntil!=null&&p[0].t<c.dashUntil){let x=p.findIndex(S=>S.t>=c.dashUntil),A=x<0?m:m.slice(0,x+1),k=x<0?[]:m.slice(x);o.push(v`<path d=${mt(A)} class="ln" style="stroke:${c.color}" stroke-dasharray="5 5"/>`),k.length>1&&o.push(v`<path d=${mt(k)} class="ln" style="stroke:${c.color}"/>`)}else o.push(v`<path d=${mt(m)} class="ln" style="stroke:${c.color}" stroke-dasharray=${c.dashed?"4 4":"none"}/>`)});for(let c of this.markers){let l=this.x(c.t),u=e.y(c.v);o.push(v`<circle cx=${l} cy=${u} r="4" class="mk"/>`),o.push(v`<text x=${l} y=${u-9} class="mklab">${c.label}</text>`)}if(this.now&&this.now>this.start&&this.now<this.end){let c=this.x(this.now);o.push(v`<line x1=${c} x2=${c} y1=${M.t} y2=${r} class="nowl"/>`)}let d=b;if(this._hover!=null){let c=this._hover,l=this.x(c);o.push(v`<line x1=${l} x2=${l} y1=${M.t-6} y2=${r} class="hov"/>`);let u=[];for(let m of this.series){let y=fn(m,c);if(!y||y.v==null||m.silent)continue;let $=m.axis==="right"&&a?a:e;(m.type==="line"||m.type==="area")&&o.push(v`<circle cx=${l} cy=${$.y(y.v)} r="4" style="fill:${m.color}" class="hdot"/>`);let x=A=>{var k,S;return`${_(A,(k=m.digits)!=null?k:1)}${(S=m.unit)!=null?S:""}`};(m.type==="band"||m.type==="range")&&y.v2!=null?u.push({color:m.color,label:"Max",value:x(y.v2)},{color:m.color,label:"Min",value:x(y.v)}):u.push({color:m.color,label:(h=m.label)!=null?h:"",value:x(y.v)})}let p=l>t/2?`right:${t-l+8}px`:`left:${l+8}px`;d=f`<div class="tip" style="${p}"><b>${this.timeFormat(c)}</b>
        ${u.map(m=>f`<div class="tr"><i style="background:${m.color}"></i><span>${m.label}</span><b>${m.value}</b></div>`)}</div>`}return f`
      <div class="wrap">
        ${d}
        <svg width=${t} height=${this.height} @pointermove=${this.onPointer} @pointerdown=${this.onPointer}
          @pointerleave=${c=>{c.pointerType!=="touch"&&(this._hover=void 0)}}>${o}</svg>
      </div>
    `}};gt.properties={start:{type:Number},end:{type:Number},series:{attribute:!1},ticks:{attribute:!1},markers:{attribute:!1},now:{type:Number},height:{type:Number},yMin:{type:Number},yMax:{type:Number},yUnit:{type:String},rightMax:{type:Number},rightUnit:{type:String},timeFormat:{attribute:!1},_w:{state:!0},_hover:{state:!0}},gt.styles=B`
    :host { display: block; width: 100%; touch-action: pan-y; -webkit-user-select: none; user-select: none; -webkit-touch-callout: none; }
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
  `;function fn(s,i){var a;let t;for(let r of s.points)r.v!=null&&(!t||Math.abs(Yt(s,r)-i)<Math.abs(Yt(s,t)-i))&&(t=r);if(!t)return;let e=s.points,n=t.t2!=null?t.t2-t.t:(a=s.barWidth)!=null?a:e.length>1?Math.abs(e[1].t-e[0].t):1/0;return Math.abs(Yt(s,t)-i)<=n/2+1?t:void 0}function Yt(s,i){var n;if(s.type!=="bar"&&s.type!=="range")return i.t;let t=s.points,e=i.t2!=null?i.t2-i.t:(n=s.barWidth)!=null?n:t.length>1?t[1].t-t[0].t:0;return i.t+e/2}function xn(s){let i=Math.pow(10,Math.floor(Math.log10(Math.max(s,1e-9)))),t=s/i;return(t<=1?1:t<=2?2:t<=2.5?2.5:t<=5?5:10)*i}function pi(s){return Number.isInteger(s)?String(s):_(s,1)}function mt(s){let i=s.length;if(i===0)return"";if(i<3)return"M"+s.map(r=>`${r[0]},${r[1]}`).join(" L");let t=[],e=[],n=[];for(let r=0;r<i-1;r++)t[r]=s[r+1][0]-s[r][0],e[r]=t[r]?(s[r+1][1]-s[r][1])/t[r]:0;n[0]=e[0],n[i-1]=e[i-2];for(let r=1;r<i-1;r++)n[r]=e[r-1]*e[r]<=0?0:3*(t[r-1]+t[r])/((2*t[r]+t[r-1])/e[r-1]+(t[r]+2*t[r-1])/e[r]);let a=`M${s[0][0]},${s[0][1]}`;for(let r=0;r<i-1;r++){let o=t[r]/3;a+=` C${s[r][0]+o},${s[r][1]+o*n[r]} ${s[r+1][0]-o},${s[r+1][1]-o*n[r+1]} ${s[r+1][0]},${s[r+1][1]}`}return a}var ui=[{id:"temp",label:"Temperatur",icon:"mdi:thermometer"},{id:"rain",label:"Niederschlag",icon:"mdi:weather-pouring"},{id:"wind",label:"Wind",icon:"mdi:weather-windy"}],j=36e5,bn=["S","M","D","M","D","F","S"];function mi(s){let i=new Date(s);return new Date(i.getFullYear(),i.getMonth(),i.getDate()).getTime()}var ft=class extends P{constructor(){super(...arguments);this.hourly=[];this.daily=[];this.index=0;this.metric="temp";this.onKey=t=>t.key==="Escape"&&this.close()}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey)}close(){this.dispatchEvent(new CustomEvent("close"))}willUpdate(t){(t.has("index")||t.has("hass"))&&this.loadPast()}loadPast(){var d,h;let t=(h=(d=this.config)==null?void 0:d.sensors)!=null?h:{},e=this.daily[this.index];if(!this.hass||!e)return;let n=mi(e.datetime),a=Date.now();if(n>a)return;let r=Math.min(n+24*j,Math.ceil(a/3e5)*3e5),o=`${n}|${r}`;o!==this._pastKey&&(this._pastKey=o,ht(this.hass,{ids:[t.temperature,t.rain_total,t.wind_speed,t.wind_gust].filter(Boolean),start:new Date(n),end:new Date(r),period:"hour",types:["mean","max","change"]}).then(c=>o===this._pastKey&&(this._past=c),()=>this._pastKey=void 0))}render(){let t=this.daily[this.index];if(!t)return b;let e=mi(t.datetime),n=e+24*j,a=Date.now(),r=a>=e&&a<n,o=this.hourly.filter(h=>{let c=new Date(h.datetime).getTime();return c>=e&&c<=n}),d=new Date(e).toLocaleDateString("de-DE",{weekday:"long",day:"numeric",month:"long"});return f`
      <div class="backdrop" @click=${this.close}></div>
      <div class="sheet" role="dialog" aria-label="Tagesdetail">
        <div class="top">
          <button class="ib" aria-label="Schließen" @click=${this.close}><ha-icon icon="mdi:close"></ha-icon></button>
          <div class="ttl">${ui.find(h=>h.id===this.metric).label}</div>
          <span style="width:40px"></span>
        </div>

        <div class="days">
          ${this.daily.map((h,c)=>{let l=new Date(h.datetime);return f`<button class=${c===this.index?"on":""} @click=${()=>this.select(c)}>
              <span class="l">${bn[l.getDay()]}</span><span class="n">${l.getDate()}</span></button>`})}
        </div>
        <div class="date">${d}</div>

        <div class="chips">
          ${ui.map(h=>f`<button class=${h.id===this.metric?"on":""}
            @click=${()=>this.setMetric(h.id)}><ha-icon icon=${h.icon}></ha-icon>${h.label}</button>`)}
        </div>

        <section class="card">
          ${this.renderSummary(t,o,r)}
          ${o.length?this.renderChart(e,n,o,r?a:void 0):f`<div class="hint">Für diesen Tag gibt es keine Stundenvorhersage.</div>`}
        </section>
      </div>
    `}select(t){this.dispatchEvent(new CustomEvent("select",{detail:{index:t}}))}setMetric(t){this.dispatchEvent(new CustomEvent("metric",{detail:{metric:t}}))}renderSummary(t,e,n){var h,c,l;let a=(h=this.config.sensors)!=null?h:{};if(this.metric==="temp"){let u=n?R(this.hass,a.temperature):void 0;return f`<div class="sum">
        <div class="sum-ic">${Rt(t.condition)}</div>
        <div>
          <div class="big">${u!=null?D(u):Et(t.condition)}</div>
          <div class="sub">H: ${D(t.temperature)} · T: ${D(t.templow)}${u!=null?` \xB7 ${Et(t.condition)}`:""}</div>
        </div>
      </div>`}if(this.metric==="rain"){let u=n&&a.rain_total?this.pastRows(a.rain_total).reduce((m,y)=>{var $;return m+(($=y.change)!=null?$:0)},0):void 0,p=Math.max(0,...e.map(m=>{var y;return(y=m.precipitation_probability)!=null?y:0}),(c=t.precipitation_probability)!=null?c:0);return f`<div class="sum">
        <div>
          <div class="big">${W((l=t.precipitation)!=null?l:e.reduce((m,y)=>{var $;return m+(($=y.precipitation)!=null?$:0)},0))}</div>
          <div class="sub">erwartet · Wahrscheinlichkeit bis ${Math.round(p)} %${u!=null?` \xB7 bisher gemessen ${W(u)}`:""}</div>
        </div>
      </div>`}let r=e.map(u=>u.wind_speed).filter(u=>u!=null),o=r.length?r.reduce((u,p)=>u+p,0)/r.length:t.wind_speed,d=a.wind_gust&&n?Math.max(...this.pastRows(a.wind_gust).map(u=>{var p;return(p=u.max)!=null?p:0}),0):void 0;return f`<div class="sum">
      <div>
        <div class="big">${_(o,0)} km/h <span class="dir">${Lt(t.wind_bearing)}</span></div>
        <div class="sub">Ø Vorhersage · max ${_(r.length?Math.max(...r):void 0,0)} km/h${d?` \xB7 st\xE4rkste B\xF6e heute ${_(d,0)} km/h`:""}</div>
      </div>
    </div>`}pastRows(t){var e,n;return(n=(e=this._past)==null?void 0:e[t])!=null?n:[]}renderChart(t,e,n,a){var $;let r=($=this.config.sensors)!=null?$:{},o=n.map(x=>({t:new Date(x.datetime).getTime(),h:x})),d=a?o.filter(x=>x.t>=a-j):o,h=[0,6,12,18].map(x=>({t:t+x*j,label:`${String(x).padStart(2,"0")} Uhr`})),c=[],l=[],u="\xB0",p,m="",y;if(this.metric==="temp"){let x=r.temperature&&a?this.pastRows(r.temperature).map(E=>({t:E.start+j/2,v:E.mean})):[],A=a?R(this.hass,r.temperature):void 0,k=Qt(this.hourly,A),S=[...x,...A!=null?[{t:a,v:A}]:[],...d.filter(E=>!a||E.t>a).map(E=>({t:E.t,v:k(E.t,E.h.temperature)}))];c.push({type:"area",points:S,color:"var(--wa-temp, #4fc3f7)",dashUntil:a,label:"Temperatur",unit:"\xB0",digits:1});let H=S.filter(E=>E.v!=null);if(H.length){let E=H.reduce((I,F)=>F.v>I.v?F:I),U=H.reduce((I,F)=>F.v<I.v?F:I);l.push({t:E.t,v:E.v,label:"H"},{t:U.t,v:U.v,label:"T"})}}else if(this.metric==="rain")u="",y=0,r.rain_total&&a&&c.push({type:"bar",points:this.pastRows(r.rain_total).map(x=>({t:x.start,v:x.change})),color:"var(--wa-rain-past, #1e6fb8)",barWidth:j,label:"gemessen",unit:" l/m\xB2",digits:1}),c.push({type:"bar",points:d.map(x=>{var A;return{t:x.t,v:(A=x.h.precipitation)!=null?A:0}}),color:"var(--wa-rain)",barWidth:j,label:"Menge",unit:" l/m\xB2",digits:1}),c.push({type:"line",axis:"right",points:d.map(x=>({t:x.t+j/2,v:x.h.precipitation_probability})),color:"var(--wa-prob, #90caf9)",label:"Wahrscheinl.",unit:" %",digits:0}),p=100,m=" %";else{u="",y=0;let x=r.wind_speed&&a?this.pastRows(r.wind_speed).map(S=>({t:S.start+j/2,v:S.mean})):[],A=a?R(this.hass,r.wind_speed):void 0,k=[...x,...A!=null?[{t:a,v:A}]:[],...d.filter(S=>!a||S.t>a).map(S=>({t:S.t,v:S.h.wind_speed}))];c.push({type:"area",points:k,color:"var(--wa-wind, #81c784)",dashUntil:a,label:"Wind",unit:" km/h",digits:0}),r.wind_gust&&a&&c.push({type:"line",points:this.pastRows(r.wind_gust).map(S=>({t:S.start+j/2,v:S.max})),color:"var(--wa-gust, #ffb74d)",label:"B\xF6e",unit:" km/h",digits:0})}return f`
      <wetter-app-chart .start=${t} .end=${e} .series=${c} .ticks=${h} .markers=${l}
        .now=${a} .height=${220} .yUnit=${u} .yMin=${y} .rightMax=${p} .rightUnit=${m}
        .timeFormat=${x=>new Date(x).toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}>
      </wetter-app-chart>
      ${this.metric==="wind"?this.renderWindDirs(t,d):b}
      ${this.metric==="rain"?f`<div class="legend"><i style="background:var(--wa-rain)"></i>Menge pro Stunde
        <i class="ln" style="background:var(--wa-prob, #90caf9)"></i>Wahrscheinlichkeit${a?f`<i style="background:var(--wa-rain-past, #1e6fb8)"></i>gemessen`:b}</div>`:b}
    `}renderWindDirs(t,e){let n=e.filter(a=>new Date(a.t).getHours()%3===0);return f`<div class="dirs">
      ${n.map(a=>{var r;return f`<div style="left:calc(6px + (100% - 44px) * ${(a.t-t)/(24*j)})">
        <ha-icon icon="mdi:navigation" style="transform:rotate(${((r=a.h.wind_bearing)!=null?r:0)+180}deg)"></ha-icon>
        <span>${new Date(a.t).getHours()} Uhr</span></div>`})}
    </div>`}};ft.properties={hass:{attribute:!1},config:{attribute:!1},hourly:{attribute:!1},daily:{attribute:!1},index:{type:Number},metric:{type:String},_past:{state:!0}},ft.styles=[pt,B`
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
    `];var ge=[{id:"day",label:"Tag"},{id:"7d",label:"7 Tage"},{id:"30d",label:"30 Tage"},{id:"month",label:"Monat"},{id:"year",label:"Jahr"}];var vn=["Januar","Februar","M\xE4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];function yn(s){return new Date(s.getFullYear(),s.getMonth(),s.getDate())}function Bt(s,i){return new Date(s.getFullYear(),s.getMonth(),s.getDate()+i)}function gi(s,i=!1){return s.toLocaleDateString("de-DE",i?{day:"2-digit",month:"2-digit",year:"numeric"}:{day:"2-digit",month:"2-digit"})}function Wt(s){return ge.some(i=>i.id===s)}function fi(s,i=new Date){let t=yn(i),e=Math.min(0,Math.round(s.offset)),n,a,r,o;switch(s.preset){case"day":{n=Bt(t,e),a=Bt(n,1),r="hour",o=e===0?"Heute":e===-1?"Gestern":n.toLocaleDateString("de-DE",{weekday:"short",day:"2-digit",month:"2-digit"});break}case"7d":case"30d":{let h=s.preset==="7d"?7:30;a=Bt(t,1+e*h),n=Bt(a,-h),r=h===7?"hour":"day",o=e===0?`Letzte ${h} Tage`:`${gi(n)} \u2013 ${gi(Bt(a,-1),!0)}`;break}case"month":{n=new Date(i.getFullYear(),i.getMonth()+e,1),a=new Date(n.getFullYear(),n.getMonth()+1,1),r="day",o=`${vn[n.getMonth()]} ${n.getFullYear()}`;break}default:{n=new Date(i.getFullYear()+e,0,1),a=new Date(n.getFullYear()+1,0,1),r="month",o=String(n.getFullYear());break}}let d=a.getTime()>i.getTime();return d&&(a=new Date(Math.ceil(i.getTime()/3e5)*3e5)),{preset:s.preset,offset:e,start:n,end:a,period:r,label:o,live:d}}var Vt=new Map,fe=new EventTarget,xi="wetter-app:range:";function wn(s,i){let t=i;try{let e=localStorage.getItem(xi+s);Wt(e)&&(t=e)}catch{}return{preset:t,offset:0}}function $n(s,i="7d"){let t=Vt.get(s);return t||(t=wn(s,i),Vt.set(s,t)),t}function An(s,i){let t=Vt.get(s);if(Vt.set(s,i),(t==null?void 0:t.preset)!==i.preset)try{localStorage.setItem(xi+s,i.preset)}catch{}fe.dispatchEvent(new CustomEvent(s))}var Jt=class{constructor(i,t,e=()=>"7d"){this.host=i;this.groupOf=t;this.fallback=e;this.onChange=()=>this.host.requestUpdate();i.addController(this)}get state(){return $n(this.groupOf(),this.fallback())}get range(){return fi(this.state)}set(i){An(this.groupOf(),i)}hostConnected(){this.listen()}hostUpdated(){this.group!==this.groupOf()&&this.listen()}hostDisconnected(){this.group&&fe.removeEventListener(this.group,this.onChange),this.group=void 0}listen(){this.hostDisconnected(),this.group=this.groupOf(),fe.addEventListener(this.group,this.onChange)}};function bi(s){let i=s.range;return f`
    <div class="range">
      <div class="chips" role="tablist">
        ${ge.map(t=>f`<button role="tab" aria-selected=${t.id===i.preset}
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
  `}var vi=B`
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
`;var V=[{min:0,max:1,label:"0",name:"Windstille",color:"#2a32ff",text:"#fff"},{min:1,max:6,label:"1",name:"leiser Zug",color:"#3a6ff7",text:"#fff"},{min:6,max:12,label:"2",name:"leichte Brise",color:"#3fb4f7",text:"#000"},{min:12,max:20,label:"3",name:"schwache Brise",color:"#44f2f7",text:"#000"},{min:20,max:29,label:"4",name:"m\xE4\xDFige Brise",color:"#a6f78a",text:"#000"},{min:29,max:39,label:"5",name:"frische Brise",color:"#f7d64a",text:"#000"},{min:39,max:50,label:"6",name:"starker Wind",color:"#f77a4a",text:"#000"},{min:50,max:62,label:"7",name:"steifer Wind",color:"#e8443a",text:"#fff"},{min:62,max:1/0,label:"8+",name:"st\xFCrmischer Wind und mehr",color:"#b0207a",text:"#fff"}],Zt=["N","NNO","NO","ONO","O","OSO","SO","SSO","S","SSW","SW","WSW","W","WNW","NW","NNW"],yi=s=>V.findIndex(i=>s<i.max);function wi(s=[],i=[],t={}){var Se,Me;let e=(Se=t.now)!=null?Se:{},n=new Map(i.map(g=>[g.start,g.mean])),a=Zt.map(()=>V.map(()=>0)),r=V.map(()=>0),o=0;for(let g of s){let w=n.get(g.start);if(g.mean==null||w==null)continue;o++;let T=yi(w);r[T]++,T!==0&&a[Math.round((g.mean%360+360)%360/22.5)%16][T]++}if(!o)return f`<div class="hint">Keine Winddaten im Zeitraum.</div>`;let d=g=>g/o*100,h=a.map(g=>d(g.reduce((w,T)=>w+T,0))),c=Math.max(...h,1),l=(Me=[2,5,10,20,25,50].find(g=>c/g<=4))!=null?Me:50,u=Math.ceil(c/l)*l,p=16,m=90,y=g=>p+g/u*(m-p),$=g=>(g-90)*Math.PI/180,x=(g,w)=>`${100+g*Math.cos($(w))},${100+g*Math.sin($(w))}`,A=(g,w,T)=>{let q=g*22.5-10.5,ct=g*22.5+10.5;return`M${x(w,q)} L${x(T,q)} A${T} ${T} 0 0 1 ${x(T,ct)} L${x(w,ct)} A${w} ${w} 0 0 0 ${x(w,q)}Z`},k=0,S=1/0;for(let g=0;g<16;g++){let w=Math.max(h[g],h[(g+1)%16]);w<S&&(S=w,k=g)}let H=k*22.5+11.25,E=[],U=[];for(let g=l;g<=u;g+=l)E.push(v`<circle cx="100" cy="100" r=${y(g)} class="ring"/>`),U.push(v`<text x=${100+y(g)*Math.cos($(H))} y=${102.5+y(g)*Math.sin($(H))} class="rl">${g} %</text>`);let I=g=>t.selected!=null&&t.selected!==g?"dim":"",F=a.flatMap((g,w)=>{let T=0;return g.map((q,ct)=>{if(!q)return v``;let Ui=y(T);return T+=d(q),v`<path d=${A(w,Ui,y(T))} style="fill:${V[ct].color}" class=${I(ct)}><title>${Zt[w]}, Bft ${V[ct].label}: ${_(d(q),1)} %</title></path>`})}),ot=Zt.map((g,w)=>w%4===0?v``:v`<text x=${100+101*Math.cos($(w*22.5))} y=${103+101*Math.sin($(w*22.5))} class=${w%2?"cd2":"cd"}>${Zt[w]}</text>`),Pt=e.direction!=null?v`<path d="M100 ${100-m-1} l-5 -9 h10z" class="now" transform="rotate(${e.direction} 100 100)"><title>Aktuell: ${Math.round(e.direction)}°</title></path>`:v``,yt=e.speed!=null?yi(e.speed):-1,N=V.map((g,w)=>({...g,i:w,share:d(r[w]),w:Math.max(d(r[w]),9)})).filter(g=>r[g.i]>0||g.i===yt),lt=N.reduce((g,w)=>g+w.w,0),wt=g=>N.slice(0,g).reduce((w,T)=>w+T.w,0)/lt*100,z,Z=N.findIndex(g=>g.i===yt);if(Z>=0){let g=N[Z],w=Number.isFinite(g.max)?g.max:g.min+20;z=wt(Z)+Math.min(1,(e.speed-g.min)/(w-g.min))*(g.w/lt)*100}let zi=g=>g>=1?`${Math.round(g)}%`:`${_(g,1)}%`,$t=t.selected!=null?V[t.selected]:void 0,$e=g=>window.innerHeight-g.currentTarget.getBoundingClientRect().bottom<150,Ae=(g,w)=>{var T;return(T=t.onSelect)==null?void 0:T.call(t,t.selected===w?void 0:w,$e(g))},ke=(g,w)=>{var T;g.pointerType==="mouse"&&((T=t.onSelect)==null||T.call(t,w,$e(g)))},_e=g=>{var w;g.pointerType==="mouse"&&((w=t.onSelect)==null||w.call(t,void 0))},ee=N.findIndex(g=>g.i===t.selected),Fi=g=>g.min===0?"unter 1":Number.isFinite(g.max)?`${g.min}\u2013${g.max-1}`:`ab ${g.min}`;return f`
    <div class="rose">
      <svg viewBox="-14 -14 228 228">
        ${E}
        <line x1="100" y1="8" x2="100" y2="192" class="ring"/><line x1="8" y1="100" x2="192" y2="100" class="ring"/>
        ${F}
        <circle cx="100" cy="100" r=${p-1} style="fill:${V[0].color}" class=${I(0)}/>
        <text x="100" y="103.5" class="cv">${Math.round(d(r[0]))} %</text>
        ${U}
        <text x="100" y="2" class="cd">N</text><text x="100" y="208" class="cd">S</text>
        <text x="203" y="103" class="cd">O</text><text x="-3" y="103" class="cd">W</text>
        ${ot}
        ${Pt}
      </svg>
      <div class="bftbar">
        ${z!=null?f`<span class="nowsp" style="left:${z}%" title="Aktuell: ${_(e.speed,1)} km/h"></span>`:""}
        ${$t&&ee>=0?f`<div class="btip ${t.up?"up":""}" style="left:${wt(ee)+N[ee].w/lt*50}%">
          <div class="tr"><i style="background:${$t.color}"></i><b>Beaufort ${$t.label}</b></div>
          <div class="tr"><span>${$t.name}</span></div>
          <div class="tr"><span>Wind</span><b>${Fi($t)} km/h</b></div>
          <div class="tr"><span>Anteil</span><b>${_(d(r[t.selected]),1)} %</b></div>
        </div>`:""}
        <div class="segs">${N.map(g=>f`<button style="flex:${g.w} 1 0;background:${g.color};color:${g.text}" class=${t.selected===g.i?"on":""}
          @click=${w=>Ae(w,g.i)} @pointerenter=${w=>ke(w,g.i)} @pointerleave=${_e}>${zi(g.share)}</button>`)}</div>
        <div class="nums">${N.map(g=>f`<span style="flex:${g.w} 1 0" @click=${w=>Ae(w,g.i)} @pointerenter=${w=>ke(w,g.i)} @pointerleave=${_e}>${g.label}</span>`)}</div>
        <div class="bl">Beaufort</div>
      </div>
    </div>`}var $i=B`
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
  .segs button { min-width: 0; overflow: hidden; border: 0; padding: 0; font: inherit; font-size: 10px; font-weight: 600; line-height: 20px; cursor: pointer; }
  .segs button.on { box-shadow: inset 0 0 0 2px var(--wa-text); }
  .nums { display: flex; font-size: 11px; color: var(--wa-text2); margin-top: 2px; }
  .nums span { min-width: 0; text-align: center; cursor: pointer; }
  .bl { text-align: center; font-size: 12px; color: var(--wa-text2); margin-top: 2px; }
  .btip {
    position: absolute; top: 100%; transform: translateX(-50%); margin-top: 2px; pointer-events: none; z-index: 1; min-width: 130px;
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
`;var kn=[{id:"pressure",label:"Luftdruck",unit:" hPa",digits:1},{id:"humidity",label:"Feuchte",unit:" %",digits:0},{id:"solar",label:"Sonne",unit:" W/m\xB2",digits:0},{id:"uv",label:"UV",unit:"",digits:1}],xe=["Jan","Feb","M\xE4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],_n=["Januar","Februar","M\xE4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],be=["So","Mo","Di","Mi","Do","Fr","Sa"],Ai=864e5,Sn=.1,xt=class extends P{constructor(){super(...arguments);this.wide=!1;this._compare=!1;this._extra="pressure";this._bftUp=!1;this.range=new Jt(this,()=>{var t,e;return(e=(t=this.config)==null?void 0:t.sync_group)!=null?e:"default"},()=>{var t;return Wt((t=this.config)==null?void 0:t.default_range)?this.config.default_range:"7d"})}periods(t){return{main:t.preset==="day"||t.preset==="7d"?"hour":"day",rain:t.preset==="day"?"hour":"day",rose:t.start.getTime()>Date.now()-9*Ai?"5minute":"hour"}}updated(){this.load()}async load(){var d,h;if(!this.hass||!this.config)return;let t=this.range.range,e=(d=this.config.sensors)!=null?d:{},n=this.periods(t),a=`${t.start.getTime()}|${t.end.getTime()}|${this._compare}`;if(a===this._key)return;this._key=a,this._err=void 0;let r=c=>c.filter(Boolean),o=(c,l,u,p=t.start,m=t.end)=>ht(this.hass,{ids:c,start:p,end:m,period:l,types:u});try{let c=new Date(t.start);c.setFullYear(c.getFullYear()-1);let l=new Date(t.end);l.setFullYear(l.getFullYear()-1);let[u,p,m,y,$]=await Promise.all([o(r([e.temperature,e.humidity,e.pressure,e.solar,e.uv,e.wind_speed,e.wind_gust]),n.main,["mean","min","max"]),o(r([e.rain_total]),n.rain,["change"]),o(r([e.wind_direction,n.rose!==n.main?e.wind_speed:void 0]),n.rose,["mean"]),this._compare?o(r([e.temperature]),n.main,["mean","min","max"],c,l):void 0,this._compare?o(r([e.rain_total]),n.rain,["change"],c,l):void 0]);if(a!==this._key)return;this._dataRange=t,this._data={main:u,rain:p,dir:m,prev:this._compare?{...y,...$}:void 0}}catch(c){if(a!==this._key)return;this._err=(h=c==null?void 0:c.message)!=null?h:String(c),this._key=void 0}}render(){var l,u,p;if(!this.config)return b;let t=this.range.range,e=this._data,n=e&&this._dataRange?this._dataRange:t,a=n!==t&&(n.start.getTime()!==t.start.getTime()||n.end.getTime()!==t.end.getTime()),r=(l=this.config.sensors)!=null?l:{},o=t.preset!=="day",d=r.temperature&&(e==null?void 0:e.main[r.temperature])||[],h=(u=d.find(m=>m.mean!=null))==null?void 0:u.start,c=!a&&h!=null&&h-n.start.getTime()>2*Ai?f`<div class="hint-inline"><ha-icon icon="mdi:information-outline"></ha-icon>Daten erst ab ${new Date(h).toLocaleDateString("de-DE")}</div>`:b;return f`
      <section class="card">
        ${bi(this.range)}
        ${o?f`<div class="cmp"><button class=${this._compare?"on":""}
          @click=${()=>this._compare=!this._compare}><ha-icon icon="mdi:compare-horizontal"></ha-icon>Vorjahr vergleichen</button></div>`:b}
      </section>
      ${this._err?f`<div class="warn">Statistik nicht verfügbar: ${this._err}</div>`:b}
      ${e?!d.length&&!(r.rain_total&&((p=e.rain[r.rain_total])!=null&&p.length))?f`<div class="hint">Keine Daten in diesem Zeitraum.</div>`:f`<div class="body ${a?"stale":""}">
            ${c}
            ${this.renderSummary(n,e)}
            <div class="cols">
              ${this.renderTemp(n,e)}
              ${this.renderRain(n,e)}
            </div>
            ${n.preset==="year"?this.renderYearTable(n,e):b}
            <div class="cols">
              ${this.renderWind(n,e)}
              ${this.renderExtra(n,e)}
            </div></div>`:f`<div class="loading">Lade Historie …</div>`}
    `}rows(t,e,n){let a=e&&(t==null?void 0:t[e])||[];return n.preset==="year"?ki(a):a}ticks(t){let e=[],n=t.start;if(t.preset==="day")for(let a of[0,6,12,18])e.push({t:new Date(n.getFullYear(),n.getMonth(),n.getDate(),a).getTime(),label:`${String(a).padStart(2,"0")} Uhr`});else if(t.preset==="7d")for(let a=0;a<7;a++){let r=new Date(n.getFullYear(),n.getMonth(),n.getDate()+a);e.push({t:r.getTime(),label:be[r.getDay()]})}else if(t.preset==="30d")for(let a=0;a<30;a+=7){let r=new Date(n.getFullYear(),n.getMonth(),n.getDate()+a);e.push({t:r.getTime(),label:`${r.getDate()}.${r.getMonth()+1}.`})}else if(t.preset==="month")for(let a of[1,8,15,22,29])e.push({t:new Date(n.getFullYear(),n.getMonth(),a).getTime(),label:`${a}.`});else for(let a=0;a<12;a++)e.push({t:new Date(n.getFullYear(),a,1).getTime(),label:xe[a]});return e}fmt(t,e){return n=>{let a=new Date(n);return t.preset==="year"&&e!=="hour"?`${_n[a.getMonth()]}`:e==="hour"?`${be[a.getDay()]} ${String(a.getHours()).padStart(2,"0")}:00`:`${be[a.getDay()]}, ${a.getDate()}.${a.getMonth()+1}.`}}chart(t,e,n){var a,r;return f`<wetter-app-chart .start=${t.start.getTime()} .end=${t.end.getTime()} .series=${e}
      .ticks=${this.ticks(t)} .height=${(a=n.height)!=null?a:200} .yUnit=${(r=n.yUnit)!=null?r:""} .yMin=${n.yMin}
      .rightMax=${n.rightMax} .timeFormat=${this.fmt(t,t.preset==="year"?"month":n.period)}></wetter-app-chart>`}shift(t){return t.map(e=>{let n=new Date(e.start);n.setFullYear(n.getFullYear()+1);let a=new Date(e.end);return a.setFullYear(a.getFullYear()+1),{...e,start:n.getTime(),end:a.getTime()}})}renderSummary(t,e){var x;let n=(x=this.config.sensors)!=null?x:{},a=this.periods(t),r=n.temperature&&e.main[n.temperature]||[],o=ye(r,"min",Math.min),d=ye(r,"max",Math.max),h=ve(r.map(A=>A.mean)),c=n.rain_total&&e.rain[n.rain_total]||[],l=c.reduce((A,k)=>{var S;return A+((S=k.change)!=null?S:0)},0),u=c.filter(A=>{var k;return((k=A.change)!=null?k:0)>=Sn}).length,p=ye(n.wind_gust&&e.main[n.wind_gust]||[],"max",Math.max),m=ve((n.wind_speed&&e.main[n.wind_speed]||[]).map(A=>A.mean)),y=ve((n.humidity&&e.main[n.humidity]||[]).map(A=>A.mean)),$=this.fmt({...t,preset:t.preset==="year"?"30d":t.preset},a.main);return f`<div class="grid">
      <section class="card kv">${C("mdi:thermometer","Temperatur")}
        <div class="big">${D(h,1)}</div><div class="sub">Durchschnitt</div>
        <div class="ext"><span>▲ ${D(d==null?void 0:d.v,1)}</span><small>${d?$(d.t):""}</small></div>
        <div class="ext"><span>▼ ${D(o==null?void 0:o.v,1)}</span><small>${o?$(o.t):""}</small></div>
      </section>
      <section class="card kv">${C("mdi:weather-pouring","Niederschlag")}
        <div class="big">${W(l)}</div><div class="sub">Summe</div>
        <div class="ext"><span>${u}</span><small>${a.rain==="hour"?"Stunden mit Regen":"Regentage (\u2265 0,1 l/m\xB2)"}</small></div>
      </section>
      <section class="card kv">${C("mdi:weather-windy","Wind")}
        <div class="big">${_(m,1)} km/h</div><div class="sub">Durchschnitt</div>
        <div class="ext"><span>${_(p==null?void 0:p.v,0)} km/h</span><small>stärkste Böe${p?` \xB7 ${$(p.t)}`:""}</small></div>
      </section>
      <section class="card kv">${C("mdi:water-percent","Luftfeuchte")}
        <div class="big">${_(y,0)} %</div><div class="sub">Durchschnitt</div>
      </section>
    </div>`}renderTemp(t,e){var h,c;let n=(h=this.config.sensors)!=null?h:{},a=this.periods(t),r=this.rows(e.main,n.temperature,t),o=[],d=l=>l.start+(l.end-l.start)/2;if(a.main==="hour"?o.push({type:"band",points:r.map(l=>({t:d(l),v:l.min,v2:l.max})),color:"var(--wa-temp, #4fc3f7)",label:"",unit:"\xB0",digits:1}):o.push({type:"range",points:r.map(l=>({t:l.start,t2:l.end,v:l.min,v2:l.max})),color:"rgba(79, 195, 247, 0.55)",label:"",unit:"\xB0",digits:1}),o.push({type:"line",points:r.map(l=>({t:d(l),v:l.mean})),color:"var(--wa-temp-line, #ffb74d)",label:"\xD8",unit:"\xB0",digits:1}),e.prev&&n.temperature){let l=this.rows({x:this.shift((c=e.prev[n.temperature])!=null?c:[])},"x",t);o.push({type:"line",dashed:!0,points:l.map(u=>({t:d(u),v:u.mean})),color:"var(--wa-text2)",label:"Vorjahr \xD8",unit:"\xB0",digits:1})}return f`<section class="card">${C("mdi:thermometer","Temperatur")}
      ${this.chart(t,o,{yUnit:"\xB0",period:a.main})}
      <div class="legend"><i style="background:#4fc3f7"></i>Min–Max<i class="ln" style="background:#ffb74d"></i>Durchschnitt
        ${e.prev?f`<i class="ln dash"></i>Vorjahr`:b}</div>
    </section>`}renderRain(t,e){var h,c;let n=(h=this.config.sensors)!=null?h:{};if(!n.rain_total)return b;let a=this.periods(t),r=this.rows(e.rain,n.rain_total,t),o=l=>{let u=0;return l.map(p=>{var m;return{t:Math.min(p.end,t.end.getTime()),v:u+=(m=p.change)!=null?m:0}})},d=[{type:"bar",points:r.map(l=>{var u;return{t:l.start,t2:l.end,v:(u=l.change)!=null?u:0}}),color:"var(--wa-rain)",label:"Menge",unit:" l/m\xB2",digits:1},{type:"line",axis:"right",points:[{t:t.start.getTime(),v:0},...o(r)],color:"var(--wa-prob, #90caf9)",label:"Summe",unit:" l/m\xB2",digits:1}];if(e.prev){let l=this.rows({x:this.shift((c=e.prev[n.rain_total])!=null?c:[])},"x",t);l.length&&d.push({type:"line",axis:"right",dashed:!0,points:[{t:t.start.getTime(),v:0},...o(l)],color:"var(--wa-text2)",label:"Vorjahr",unit:" l/m\xB2",digits:1})}return f`<section class="card">${C("mdi:weather-pouring","Niederschlag")}
      ${this.chart(t,d,{yMin:0,period:a.rain})}
      <div class="legend"><i style="background:var(--wa-rain)"></i>${a.rain==="hour"?"pro Stunde":t.preset==="year"?"pro Monat":"pro Tag"}
        <i class="ln" style="background:var(--wa-prob, #90caf9)"></i>Summe (rechte Skala)${e.prev?f`<i class="ln dash"></i>Vorjahr`:b}</div>
    </section>`}renderWind(t,e){var u;let n=(u=this.config.sensors)!=null?u:{};if(!n.wind_speed)return b;let a=this.periods(t),r=n.wind_direction&&e.dir[n.wind_direction]||[],o=(a.rose===a.main?e.main[n.wind_speed]:e.dir[n.wind_speed])||[],d=this.rows(e.main,n.wind_speed,t),h=this.rows(e.main,n.wind_gust,t),c=p=>p.start+(p.end-p.start)/2,l=[{type:"line",points:d.map(p=>({t:c(p),v:p.mean})),color:"var(--wa-wind, #81c784)",label:"\xD8",unit:" km/h",digits:1},...h.length?[{type:"line",points:h.map(p=>({t:c(p),v:p.max})),color:"var(--wa-gust, #ffb74d)",label:"B\xF6e",unit:" km/h",digits:0}]:[]];return f`<section class="card">${C("mdi:weather-windy","Wind")}
      ${n.wind_direction?wi(r,o,{now:t.live?{direction:R(this.hass,n.wind_direction),speed:R(this.hass,n.wind_speed)}:{},selected:this._bft,up:this._bftUp,onSelect:(p,m)=>{this._bft=p,this._bftUp=!!m}}):b}
      ${this.chart(t,l,{yMin:0,period:a.main,height:160})}
      <div class="legend"><i class="ln" style="background:#81c784"></i>Durchschnitt<i class="ln" style="background:#ffb74d"></i>stärkste Böe</div>
    </section>`}renderExtra(t,e){var l,u;let n=(l=this.config.sensors)!=null?l:{},a=kn.filter(p=>n[p.id]);if(!a.length)return b;let r=(u=a.find(p=>p.id===this._extra))!=null?u:a[0],o=this.periods(t),d=this.rows(e.main,n[r.id],t),h=p=>p.start+(p.end-p.start)/2,c=[{type:"band",points:d.map(p=>({t:h(p),v:p.min,v2:p.max})),color:"var(--wa-accent)",unit:r.unit,digits:r.digits},{type:"line",points:d.map(p=>({t:h(p),v:p.mean})),color:"var(--wa-accent)",label:"\xD8",unit:r.unit,digits:r.digits}];return f`<section class="card">${C("mdi:chart-bell-curve-cumulative","Weitere Werte")}
      <div class="chips small">${a.map(p=>f`<button class=${p===r?"on":""} @click=${()=>this._extra=p.id}>${p.label}</button>`)}</div>
      ${this.chart(t,c,{period:o.main,yMin:r.id==="pressure"?void 0:0})}
      <div class="legend"><i class="ln" style="background:var(--wa-accent)"></i>Durchschnitt<i style="background:var(--wa-accent);opacity:.3"></i>Min–Max</div>
    </section>`}renderYearTable(t,e){var l,u;let n=(l=this.config.sensors)!=null?l:{},a=this.rows(e.main,n.temperature,t),r=this.rows(e.rain,n.rain_total,t),o=e.prev&&n.rain_total?ki(this.shift((u=e.prev[n.rain_total])!=null?u:[])):[],d=[...Array(12)].map((p,m)=>new Date(t.start.getFullYear(),m,1).getTime()),h=(p,m)=>p.find(y=>y.start===m),c=Math.max(1,...r.map(p=>{var m;return(m=p.change)!=null?m:0}),...o.map(p=>{var m;return(m=p.change)!=null?m:0}));return f`<section class="card">${C("mdi:table",`Monate ${t.start.getFullYear()}`)}
      <table class="months">
        <thead><tr><th></th><th>Ø</th><th>Min</th><th>Max</th><th class="rc">Niederschlag</th></tr></thead>
        <tbody>${d.map((p,m)=>{var A,k;let y=h(a,p),$=h(r,p),x=h(o,p);return!y&&!$?f`<tr class="empty"><td>${xe[m]}</td><td colspan="4">–</td></tr>`:f`<tr>
            <td>${xe[m]}</td><td>${D(y==null?void 0:y.mean,1)}</td><td class="cold">${D(y==null?void 0:y.min,1)}</td><td class="warm">${D(y==null?void 0:y.max,1)}</td>
            <td class="rc"><div class="rcell"><div class="rbar"><i style="width:${((A=$==null?void 0:$.change)!=null?A:0)/c*100}%"></i>
              ${x?f`<b style="left:${((k=x.change)!=null?k:0)/c*100}%" title="Vorjahr"></b>`:b}</div>
              <span>${_($==null?void 0:$.change,0)}</span></div></td></tr>`})}</tbody>
      </table>
    </section>`}};xt.properties={hass:{attribute:!1},config:{attribute:!1},wide:{type:Boolean,reflect:!0},_data:{state:!0},_err:{state:!0},_compare:{state:!0},_extra:{state:!0},_bft:{state:!0}},xt.styles=[pt,vi,$i,B`
      :host { display: flex; flex-direction: column; gap: 12px; }
      .cols, .grid { display: grid; gap: 12px; }
      .body { display: flex; flex-direction: column; gap: 12px; transition: opacity 0.15s; }
      .body.stale { opacity: 0.45; pointer-events: none; }
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
      /* oben so viel Luft wie unten bis zum Diagramm (dessen Innenabstand oben) */
      .chips.small { display: flex; gap: 6px; flex-wrap: wrap; margin: 12px 0 2px; }
      .chips.small button { line-height: 18px; }
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
    `];function ve(s){let i=s.filter(t=>t!=null);return i.length?i.reduce((t,e)=>t+e,0)/i.length:void 0}function ye(s,i,t){let e;for(let n of s){let a=n[i];a!=null&&(!e||t(a,e.v)===a&&a!==e.v)&&(e={t:n.start,v:a})}return e}function ki(s){var t;let i=new Map;for(let e of s){let n=new Date(e.start),a=new Date(n.getFullYear(),n.getMonth(),1).getTime(),r=i.get(a);r||(r={start:a,end:new Date(n.getFullYear(),n.getMonth()+1,1).getTime(),min:null,max:null,mean:null,change:null,_n:0,_sum:0},i.set(a,r)),e.min!=null&&(r.min=r.min==null?e.min:Math.min(r.min,e.min)),e.max!=null&&(r.max=r.max==null?e.max:Math.max(r.max,e.max)),e.mean!=null&&(r._sum+=e.mean,r._n++,r.mean=r._sum/r._n),e.change!=null&&(r.change=((t=r.change)!=null?t:0)+e.change)}return[...i.values()].sort((e,n)=>e.start-n.start)}var _i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Si=s=>(...i)=>({_$litDirective$:s,values:i}),qt=class{constructor(i){}get _$AU(){return this._$AM._$AU}_$AT(i,t,e){this._$Ct=i,this._$AM=t,this._$Ci=e}_$AS(i,t){return this.update(i,t)}update(i,t){return this.render(...t)}};var{I:Mn}=Ve,Mi=s=>s;var Ti=()=>document.createComment(""),bt=(s,i,t)=>{var a;let e=s._$AA.parentNode,n=i===void 0?s._$AB:i._$AA;if(t===void 0){let r=e.insertBefore(Ti(),n),o=e.insertBefore(Ti(),n);t=new Mn(r,o,s,s.options)}else{let r=t._$AB.nextSibling,o=t._$AM,d=o!==s;if(d){let h;(a=t._$AQ)==null||a.call(t,s),t._$AM=s,t._$AP!==void 0&&(h=s._$AU)!==o._$AU&&t._$AP(h)}if(r!==n||d){let h=t._$AA;for(;h!==r;){let c=Mi(h).nextSibling;Mi(e).insertBefore(h,n),h=c}}}return t},J=(s,i,t=s)=>(s._$AI(i,t),s),Tn={},Ci=(s,i=Tn)=>s._$AH=i,Di=s=>s._$AH,Xt=s=>{s._$AR(),s._$AA.remove()};var Ei=(s,i,t)=>{let e=new Map;for(let n=i;n<=t;n++)e.set(s[n],n);return e},Ri=Si(class extends qt{constructor(s){if(super(s),s.type!==_i.CHILD)throw Error("repeat() can only be used in text expressions")}dt(s,i,t){let e;t===void 0?t=i:i!==void 0&&(e=i);let n=[],a=[],r=0;for(let o of s)n[r]=e?e(o,r):r,a[r]=t(o,r),r++;return{values:a,keys:n}}render(s,i,t){return this.dt(s,i,t).values}update(s,[i,t,e]){var y;let n=Di(s),{values:a,keys:r}=this.dt(i,t,e);if(!Array.isArray(n))return this.ut=r,a;let o=(y=this.ut)!=null?y:this.ut=[],d=[],h,c,l=0,u=n.length-1,p=0,m=a.length-1;for(;l<=u&&p<=m;)if(n[l]===null)l++;else if(n[u]===null)u--;else if(o[l]===r[p])d[p]=J(n[l],a[p]),l++,p++;else if(o[u]===r[m])d[m]=J(n[u],a[m]),u--,m--;else if(o[l]===r[m])d[m]=J(n[l],a[m]),bt(s,d[m+1],n[l]),l++,m--;else if(o[u]===r[p])d[p]=J(n[u],a[p]),bt(s,n[l],n[u]),u--,p++;else if(h===void 0&&(h=Ei(r,p,m),c=Ei(o,l,u)),h.has(o[l]))if(h.has(o[u])){let $=c.get(r[p]),x=$!==void 0?n[$]:null;if(x===null){let A=bt(s,n[l]);J(A,a[p]),d[p]=A}else d[p]=J(x,a[p]),bt(s,n[l],x),n[$]=null;p++}else Xt(n[u]),u--;else Xt(n[l]),l++;for(;p<=m;){let $=bt(s,d[m+1]);J($,a[p]),d[p++]=$}for(;l<=u;){let $=n[l++];$!==null&&Xt($)}return this.ut=r,Ci(s,d),Q}});var Cn={rainy:["clouds","rain"],pouring:["clouds","pour"],hail:["clouds","rain"],"lightning-rainy":["clouds","rain","flash"],lightning:["clouds","flash"],snowy:["fewclouds","snow"],"snowy-rainy":["fewclouds","sleet"],sunny:["sun"],"clear-night":["stars"],partlycloudy:["sun","fewclouds"],cloudy:["clouds"],fog:["fog"],windy:["wind"],"windy-variant":["fewclouds","wind"]};function Dn(s){return()=>{s=s+1831565813|0;let i=Math.imul(s^s>>>15,1|s);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}var En=[{transform:"translate3d(0,-40px,0)"},{transform:"translate3d(0,580px,0)"}],Rn=[{transform:"translate3d(0,-10px,0)"},{transform:"translate3d(14px,280px,0)"},{transform:"translate3d(0,570px,0)"}],we=s=>[{transform:`translate3d(-${s}%,0,0)`},{transform:"translate3d(100%,0,0)"}];function Ii(s,i){let t=Dn(i),e=n=>[...Array(n)];switch(s){case"rain":case"pour":case"sleet":return e(s==="pour"?56:s==="sleet"?14:28).map(()=>{let a=700+t()*500;return{cls:"drop",style:`left:${(t()*100).toFixed(1)}%;height:${Math.round(14+t()*14)}px;opacity:${(.4+t()*.6).toFixed(2)}`,anim:En,dur:a,delay:-t()*a}}).concat(s==="sleet"?Ii("snow",i+7).slice(0,18):[]);case"snow":return e(36).map(()=>{let n=9e3+t()*8e3,a=(2+t()*2.5).toFixed(1);return{cls:"flake",style:`left:${(t()*100).toFixed(1)}%;width:${a}px;height:${a}px;opacity:${(.35+t()*.5).toFixed(2)}`,anim:Rn,dur:n,delay:-t()*n}});case"stars":case"fewstars":return e(s==="stars"?46:18).map(()=>{let n=(1+t()*1.6).toFixed(1);return{cls:"star",style:`left:${(t()*100).toFixed(1)}%;top:${(t()*300).toFixed(0)}px;width:${n}px;height:${n}px`,anim:[{opacity:.15},{opacity:.4+t()*.6}],dur:1800+t()*3500,delay:-t()*4e3,easing:"ease-in-out",dir:"alternate"}});case"sun":return[{cls:"glow",style:"",anim:[{transform:"scale(1)",opacity:.75},{transform:"scale(1.08)",opacity:1}],dur:7e3,delay:0,easing:"ease-in-out",dir:"alternate"},{cls:"rays",style:"",anim:[{transform:"rotate(0deg)"},{transform:"rotate(360deg)"}],dur:14e4,delay:0}];case"clouds":case"fewclouds":return e(s==="clouds"?5:3).map((n,a)=>{let r=7e4+t()*5e4;return{cls:"lane",style:`top:${Math.round(10+a*(s==="clouds"?70:90)+t()*30)}px;--cw:${Math.round(28+t()*16)}%;opacity:${(.5+t()*.5).toFixed(2)}`,anim:we(45),dur:r,delay:-t()*r}});case"fog":return e(4).map((n,a)=>{let r=5e4+t()*4e4;return{cls:"lane fogl",style:`top:${60+a*90}px`,anim:we(80),dur:r,delay:-t()*r}});case"wind":return e(10).map(()=>{let n=2200+t()*2200;return{cls:"lane windl",style:`top:${Math.round(20+t()*380)}px;--sw:${Math.round(60+t()*90)}px;opacity:${(.3+t()*.6).toFixed(2)}`,anim:we(20),dur:n,delay:-t()*n*3}});case"flash":return[{cls:"flash",style:"",anim:[{opacity:0,offset:0},{opacity:0,offset:.1},{opacity:.38,offset:.11},{opacity:0,offset:.13},{opacity:.24,offset:.15},{opacity:0,offset:.17},{opacity:0,offset:1}],dur:8e3,delay:0}]}}var Bi=new Map;function Bn(s,i){var n;let t=`${s}|${i}`,e=Bi.get(t);return e||(e=((n=Cn[s])!=null?n:[]).map(r=>i&&r==="sun"?"fewstars":r).flatMap((r,o)=>Ii(r,o*31+1)),Bi.set(t,e)),e}var Pn=()=>typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,Pi=1500,vt=class extends P{constructor(){super(...arguments);this.night=!1;this._groups=[];this._started=new WeakSet}willUpdate(t){if(!t.has("condition")&&!t.has("night"))return;let e=this.condition&&!Pn()?`${this.condition}|${this.night}`:"",n=this._groups.find(a=>!a.leaving);(n==null?void 0:n.key)!==e&&(this._groups=[...this._groups.filter(a=>a!==n&&!a.leaving),...n?[{...n,leaving:!0}]:[],...e?[{key:e,items:Bn(this.condition,this.night)}]:[]])}render(){return f`${Ri(this._groups,t=>t.key,t=>f`<div class="g" data-key=${t.key}>
      ${t.items.map(e=>f`<i class=${e.cls} style=${e.style}>${e.cls.startsWith("lane")?f`<b></b>`:b}</i>`)}
    </div>`)}`}updated(){this.renderRoot.querySelectorAll(".g").forEach(e=>{let n=this._groups.find(a=>a.key===e.dataset.key);if(!(!n||typeof e.animate!="function")){if(n.leaving){this._started.has(e)&&!e.dataset.out?(e.dataset.out="1",e.animate([{opacity:1},{opacity:0}],{duration:Pi,fill:"forwards"}).onfinish=()=>{this._groups=this._groups.filter(a=>a!==n)}):this._started.has(e)||(this._groups=this._groups.filter(a=>a!==n));return}this._started.has(e)||(this._started.add(e),e.animate([{opacity:0},{opacity:1}],{duration:Pi}),e.querySelectorAll("i").forEach((a,r)=>{var d,h;let o=n.items[r];o&&a.animate(o.anim,{duration:o.dur,delay:o.delay,iterations:1/0,easing:(d=o.easing)!=null?d:"linear",direction:(h=o.dir)!=null?h:"normal"})}))}})}};vt.properties={condition:{},night:{type:Boolean},_groups:{state:!0}},vt.styles=B`
    :host {
      position: absolute; left: 0; right: 0; top: 0; height: 560px; overflow: hidden; pointer-events: none; display: block;
      -webkit-mask-image: linear-gradient(180deg, #000 0, #000 45%, transparent 100%);
      mask-image: linear-gradient(180deg, #000 0, #000 45%, transparent 100%);
    }
    .g { position: absolute; inset: 0; }
    i { position: absolute; top: 0; left: 0; will-change: transform; }
    .drop { width: 1.5px; border-radius: 1px; background: linear-gradient(180deg, transparent, var(--wa-drop)); }
    .flake, .star { border-radius: 50%; background: var(--wa-flake); }
    .star { will-change: opacity; }
    .glow {
      left: auto; right: -130px; top: -150px; width: 440px; height: 440px; border-radius: 50%;
      background: radial-gradient(circle, rgba(255, 236, 170, 0.6) 0, rgba(255, 222, 120, 0.42) 14%, rgba(255, 200, 80, 0.16) 36%, transparent 68%);
    }
    .rays {
      left: auto; right: -330px; top: -350px; width: 820px; height: 820px; border-radius: 50%; opacity: 0.22;
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
  `;var Hi=[["wetter-app",ut,"Wetter-App","Komplette Wetter-App mit Vorhersage und Historie"]],In=[["wetter-app-chart",gt],["wetter-app-day-detail",ft],["wetter-app-history",xt],["wetter-app-sky",vt]];for(let[s,i]of[...In,...Hi])customElements.get(s)||customElements.define(s,i);var te=window;te.customCards=te.customCards||[];for(let[s,,i,t]of Hi)te.customCards.some(e=>e.type===s)||te.customCards.push({type:s,name:i,description:t,preview:!1});console.info("%c WETTER-APP %c 0.1.0 ","background:#2f6fc4;color:#fff;border-radius:3px 0 0 3px","background:#555;color:#fff;border-radius:0 3px 3px 0");
