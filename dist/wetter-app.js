var zt=globalThis,Ht=zt.ShadowRoot&&(zt.ShadyCSS===void 0||zt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,le=Symbol(),Ie=new WeakMap,_t=class{constructor(i,t,e){if(this._$cssResult$=!0,e!==le)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=t}get styleSheet(){let i=this.o,t=this.t;if(Ht&&i===void 0){let e=t!==void 0&&t.length===1;e&&(i=Ie.get(t)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),e&&Ie.set(t,i))}return i}toString(){return this.cssText}},ze=s=>new _t(typeof s=="string"?s:s+"",void 0,le),B=(s,...i)=>{let t=s.length===1?s[0]:i.reduce((e,n,a)=>e+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+s[a+1],s[0]);return new _t(t,s,le)},He=(s,i)=>{if(Ht)s.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of i){let e=document.createElement("style"),n=zt.litNonce;n!==void 0&&e.setAttribute("nonce",n),e.textContent=t.cssText,s.appendChild(e)}},ce=Ht?s=>s:s=>s instanceof CSSStyleSheet?(i=>{let t="";for(let e of i.cssRules)t+=e.cssText;return ze(t)})(s):s;var{is:Wi,defineProperty:Vi,getOwnPropertyDescriptor:Ji,getOwnPropertyNames:Zi,getOwnPropertySymbols:qi,getPrototypeOf:Xi}=Object,J=globalThis,Fe=J.trustedTypes,tn=Fe?Fe.emptyScript:"",de=J.reactiveElementPolyfillSupport,St=(s,i)=>s,he={toAttribute(s,i){switch(i){case Boolean:s=s?tn:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,i){let t=s;switch(i){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},je=(s,i)=>!Wi(s,i),Oe={attribute:!0,type:String,converter:he,reflect:!1,useDefault:!1,hasChanged:je},Ue,Ne;(Ue=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(Ne=J.litPropertyMetadata)!=null||(J.litPropertyMetadata=new WeakMap);var Y=class extends HTMLElement{static addInitializer(i){var t;this._$Ei(),((t=this.l)!=null?t:this.l=[]).push(i)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(i,t=Oe){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(i)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(i,t),!t.noAccessor){let e=Symbol(),n=this.getPropertyDescriptor(i,e,t);n!==void 0&&Vi(this.prototype,i,n)}}static getPropertyDescriptor(i,t,e){var r;let{get:n,set:a}=(r=Ji(this.prototype,i))!=null?r:{get(){return this[t]},set(o){this[t]=o}};return{get:n,set(o){let c=n==null?void 0:n.call(this);a==null||a.call(this,o),this.requestUpdate(i,c,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(i){var t;return(t=this.elementProperties.get(i))!=null?t:Oe}static _$Ei(){if(this.hasOwnProperty(St("elementProperties")))return;let i=Xi(this);i.finalize(),i.l!==void 0&&(this.l=[...i.l]),this.elementProperties=new Map(i.elementProperties)}static finalize(){if(this.hasOwnProperty(St("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(St("properties"))){let t=this.properties,e=[...Zi(t),...qi(t)];for(let n of e)this.createProperty(n,t[n])}let i=this[Symbol.metadata];if(i!==null){let t=litPropertyMetadata.get(i);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[t,e]of this.elementProperties){let n=this._$Eu(t,e);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(i){let t=[];if(Array.isArray(i)){let e=new Set(i.flat(1/0).reverse());for(let n of e)t.unshift(ce(n))}else i!==void 0&&t.push(ce(i));return t}static _$Eu(i,t){let e=t.attribute;return e===!1?void 0:typeof e=="string"?e:typeof i=="string"?i.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var i;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(i=this.constructor.l)==null||i.forEach(t=>t(this))}addController(i){var t,e;((t=this._$EO)!=null?t:this._$EO=new Set).add(i),this.renderRoot!==void 0&&this.isConnected&&((e=i.hostConnected)==null||e.call(i))}removeController(i){var t;(t=this._$EO)==null||t.delete(i)}_$E_(){let i=new Map,t=this.constructor.elementProperties;for(let e of t.keys())this.hasOwnProperty(e)&&(i.set(e,this[e]),delete this[e]);i.size>0&&(this._$Ep=i)}createRenderRoot(){var t;let i=(t=this.shadowRoot)!=null?t:this.attachShadow(this.constructor.shadowRootOptions);return He(i,this.constructor.elementStyles),i}connectedCallback(){var i,t;(i=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostConnected)==null?void 0:n.call(e)})}enableUpdating(i){}disconnectedCallback(){var i;(i=this._$EO)==null||i.forEach(t=>{var e;return(e=t.hostDisconnected)==null?void 0:e.call(t)})}attributeChangedCallback(i,t,e){this._$AK(i,e)}_$ET(i,t){var a;let e=this.constructor.elementProperties.get(i),n=this.constructor._$Eu(i,e);if(n!==void 0&&e.reflect===!0){let r=(((a=e.converter)==null?void 0:a.toAttribute)!==void 0?e.converter:he).toAttribute(t,e.type);this._$Em=i,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(i,t){var a,r,o;let e=this.constructor,n=e._$Eh.get(i);if(n!==void 0&&this._$Em!==n){let c=e.getPropertyOptions(n),d=typeof c.converter=="function"?{fromAttribute:c.converter}:((a=c.converter)==null?void 0:a.fromAttribute)!==void 0?c.converter:he;this._$Em=n;let h=d.fromAttribute(t,c.type);this[n]=(o=h!=null?h:(r=this._$Ej)==null?void 0:r.get(n))!=null?o:h,this._$Em=null}}requestUpdate(i,t,e,n=!1,a){var r,o;if(i!==void 0){let c=this.constructor;if(n===!1&&(a=this[i]),e!=null||(e=c.getPropertyOptions(i)),!(((r=e.hasChanged)!=null?r:je)(a,t)||e.useDefault&&e.reflect&&a===((o=this._$Ej)==null?void 0:o.get(i))&&!this.hasAttribute(c._$Eu(i,e))))return;this.C(i,t,e)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(i,t,{useDefault:e,reflect:n,wrapped:a},r){var o,c,d;e&&!((o=this._$Ej)!=null?o:this._$Ej=new Map).has(i)&&(this._$Ej.set(i,(c=r!=null?r:t)!=null?c:this[i]),a!==!0||r!==void 0)||(this._$AL.has(i)||(this.hasUpdated||e||(t=void 0),this._$AL.set(i,t)),n===!0&&this._$Em!==i&&((d=this._$Eq)!=null?d:this._$Eq=new Set).add(i))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let i=this.scheduleUpdate();return i!=null&&await i,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e,n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[r,o]of a){let{wrapped:c}=o,d=this[r];c!==!0||this._$AL.has(r)||d===void 0||this.C(r,void 0,o,d)}}let i=!1,t=this._$AL;try{i=this.shouldUpdate(t),i?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(a=>{var r;return(r=a.hostUpdate)==null?void 0:r.call(a)}),this.update(t)):this._$EM()}catch(a){throw i=!1,this._$EM(),a}i&&this._$AE(t)}willUpdate(i){}_$AE(i){var t;(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostUpdated)==null?void 0:n.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(i)),this.updated(i)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(i){return!0}update(i){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(i){}firstUpdated(i){}},Le;Y.elementStyles=[],Y.shadowRootOptions={mode:"open"},Y[St("elementProperties")]=new Map,Y[St("finalized")]=new Map,de==null||de({ReactiveElement:Y}),((Le=J.reactiveElementVersions)!=null?Le:J.reactiveElementVersions=[]).push("2.1.2");var Tt=globalThis,Ke=s=>s,Ft=Tt.trustedTypes,Ge=Ft?Ft.createPolicy("lit-html",{createHTML:s=>s}):void 0,me="$lit$",W=`lit$${Math.random().toFixed(9).slice(2)}$`,ge="?"+W,en=`<${ge}>`,st=document,Ct=()=>st.createComment(""),Dt=s=>s===null||typeof s!="object"&&typeof s!="function",fe=Array.isArray,qe=s=>fe(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",pe=`[ 	
\f\r]`,Mt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Qe=/-->/g,Ye=/>/g,it=RegExp(`>|${pe}(?:([^\\s"'>=/]+)(${pe}*=${pe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),We=/'/g,Ve=/"/g,Xe=/^(?:script|style|textarea|title)$/i,be=s=>(i,...t)=>({_$litType$:s,strings:i,values:t}),g=be(1),w=be(2),Wn=be(3),V=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),Je=new WeakMap,nt=st.createTreeWalker(st,129);function ti(s,i){if(!fe(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ge!==void 0?Ge.createHTML(i):i}var ei=(s,i)=>{let t=s.length-1,e=[],n,a=i===2?"<svg>":i===3?"<math>":"",r=Mt;for(let o=0;o<t;o++){let c=s[o],d,h,l=-1,u=0;for(;u<c.length&&(r.lastIndex=u,h=r.exec(c),h!==null);)u=r.lastIndex,r===Mt?h[1]==="!--"?r=Qe:h[1]!==void 0?r=Ye:h[2]!==void 0?(Xe.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=it):h[3]!==void 0&&(r=it):r===it?h[0]===">"?(r=n!=null?n:Mt,l=-1):h[1]===void 0?l=-2:(l=r.lastIndex-h[2].length,d=h[1],r=h[3]===void 0?it:h[3]==='"'?Ve:We):r===Ve||r===We?r=it:r===Qe||r===Ye?r=Mt:(r=it,n=void 0);let p=r===it&&s[o+1].startsWith("/>")?" ":"";a+=r===Mt?c+en:l>=0?(e.push(d),c.slice(0,l)+me+c.slice(l)+W+p):c+W+(l===-2?o:p)}return[ti(s,a+(s[t]||"<?>")+(i===2?"</svg>":i===3?"</math>":"")),e]},Et=class s{constructor({strings:i,_$litType$:t},e){let n;this.parts=[];let a=0,r=0,o=i.length-1,c=this.parts,[d,h]=ei(i,t);if(this.el=s.createElement(d,e),nt.currentNode=this.el.content,t===2||t===3){let l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(n=nt.nextNode())!==null&&c.length<o;){if(n.nodeType===1){if(n.hasAttributes())for(let l of n.getAttributeNames())if(l.endsWith(me)){let u=h[r++],p=n.getAttribute(l).split(W),b=/([.?@])?(.*)/.exec(u);c.push({type:1,index:a,name:b[2],strings:p,ctor:b[1]==="."?Ut:b[1]==="?"?Nt:b[1]==="@"?Lt:at}),n.removeAttribute(l)}else l.startsWith(W)&&(c.push({type:6,index:a}),n.removeAttribute(l));if(Xe.test(n.tagName)){let l=n.textContent.split(W),u=l.length-1;if(u>0){n.textContent=Ft?Ft.emptyScript:"";for(let p=0;p<u;p++)n.append(l[p],Ct()),nt.nextNode(),c.push({type:2,index:++a});n.append(l[u],Ct())}}}else if(n.nodeType===8)if(n.data===ge)c.push({type:2,index:a});else{let l=-1;for(;(l=n.data.indexOf(W,l+1))!==-1;)c.push({type:7,index:a}),l+=W.length-1}a++}}static createElement(i,t){let e=st.createElement("template");return e.innerHTML=i,e}};function rt(s,i,t=s,e){var r,o,c;if(i===V)return i;let n=e!==void 0?(r=t._$Co)==null?void 0:r[e]:t._$Cl,a=Dt(i)?void 0:i._$litDirective$;return(n==null?void 0:n.constructor)!==a&&((o=n==null?void 0:n._$AO)==null||o.call(n,!1),a===void 0?n=void 0:(n=new a(s),n._$AT(s,t,e)),e!==void 0?((c=t._$Co)!=null?c:t._$Co=[])[e]=n:t._$Cl=n),n!==void 0&&(i=rt(s,n._$AS(s,i.values),n,e)),i}var Ot=class{constructor(i,t){this._$AV=[],this._$AN=void 0,this._$AD=i,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(i){var d;let{el:{content:t},parts:e}=this._$AD,n=((d=i==null?void 0:i.creationScope)!=null?d:st).importNode(t,!0);nt.currentNode=n;let a=nt.nextNode(),r=0,o=0,c=e[0];for(;c!==void 0;){if(r===c.index){let h;c.type===2?h=new pt(a,a.nextSibling,this,i):c.type===1?h=new c.ctor(a,c.name,c.strings,this,i):c.type===6&&(h=new jt(a,this,i)),this._$AV.push(h),c=e[++o]}r!==(c==null?void 0:c.index)&&(a=nt.nextNode(),r++)}return nt.currentNode=st,n}p(i){let t=0;for(let e of this._$AV)e!==void 0&&(e.strings!==void 0?(e._$AI(i,e,t),t+=e.strings.length-2):e._$AI(i[t])),t++}},pt=class s{get _$AU(){var i,t;return(t=(i=this._$AM)==null?void 0:i._$AU)!=null?t:this._$Cv}constructor(i,t,e,n){var a;this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=i,this._$AB=t,this._$AM=e,this.options=n,this._$Cv=(a=n==null?void 0:n.isConnected)!=null?a:!0}get parentNode(){let i=this._$AA.parentNode,t=this._$AM;return t!==void 0&&(i==null?void 0:i.nodeType)===11&&(i=t.parentNode),i}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(i,t=this){i=rt(this,i,t),Dt(i)?i===v||i==null||i===""?(this._$AH!==v&&this._$AR(),this._$AH=v):i!==this._$AH&&i!==V&&this._(i):i._$litType$!==void 0?this.$(i):i.nodeType!==void 0?this.T(i):qe(i)?this.k(i):this._(i)}O(i){return this._$AA.parentNode.insertBefore(i,this._$AB)}T(i){this._$AH!==i&&(this._$AR(),this._$AH=this.O(i))}_(i){this._$AH!==v&&Dt(this._$AH)?this._$AA.nextSibling.data=i:this.T(st.createTextNode(i)),this._$AH=i}$(i){var a;let{values:t,_$litType$:e}=i,n=typeof e=="number"?this._$AC(i):(e.el===void 0&&(e.el=Et.createElement(ti(e.h,e.h[0]),this.options)),e);if(((a=this._$AH)==null?void 0:a._$AD)===n)this._$AH.p(t);else{let r=new Ot(n,this),o=r.u(this.options);r.p(t),this.T(o),this._$AH=r}}_$AC(i){let t=Je.get(i.strings);return t===void 0&&Je.set(i.strings,t=new Et(i)),t}k(i){fe(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,e,n=0;for(let a of i)n===t.length?t.push(e=new s(this.O(Ct()),this.O(Ct()),this,this.options)):e=t[n],e._$AI(a),n++;n<t.length&&(this._$AR(e&&e._$AB.nextSibling,n),t.length=n)}_$AR(i=this._$AA.nextSibling,t){var e;for((e=this._$AP)==null?void 0:e.call(this,!1,!0,t);i!==this._$AB;){let n=Ke(i).nextSibling;Ke(i).remove(),i=n}}setConnected(i){var t;this._$AM===void 0&&(this._$Cv=i,(t=this._$AP)==null||t.call(this,i))}},at=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(i,t,e,n,a){this.type=1,this._$AH=v,this._$AN=void 0,this.element=i,this.name=t,this._$AM=n,this.options=a,e.length>2||e[0]!==""||e[1]!==""?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=v}_$AI(i,t=this,e,n){let a=this.strings,r=!1;if(a===void 0)i=rt(this,i,t,0),r=!Dt(i)||i!==this._$AH&&i!==V,r&&(this._$AH=i);else{let o=i,c,d;for(i=a[0],c=0;c<a.length-1;c++)d=rt(this,o[e+c],t,c),d===V&&(d=this._$AH[c]),r||(r=!Dt(d)||d!==this._$AH[c]),d===v?i=v:i!==v&&(i+=(d!=null?d:"")+a[c+1]),this._$AH[c]=d}r&&!n&&this.j(i)}j(i){i===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,i!=null?i:"")}},Ut=class extends at{constructor(){super(...arguments),this.type=3}j(i){this.element[this.name]=i===v?void 0:i}},Nt=class extends at{constructor(){super(...arguments),this.type=4}j(i){this.element.toggleAttribute(this.name,!!i&&i!==v)}},Lt=class extends at{constructor(i,t,e,n,a){super(i,t,e,n,a),this.type=5}_$AI(i,t=this){var r;if((i=(r=rt(this,i,t,0))!=null?r:v)===V)return;let e=this._$AH,n=i===v&&e!==v||i.capture!==e.capture||i.once!==e.once||i.passive!==e.passive,a=i!==v&&(e===v||n);n&&this.element.removeEventListener(this.name,this,e),a&&this.element.addEventListener(this.name,this,i),this._$AH=i}handleEvent(i){var t,e;typeof this._$AH=="function"?this._$AH.call((e=(t=this.options)==null?void 0:t.host)!=null?e:this.element,i):this._$AH.handleEvent(i)}},jt=class{constructor(i,t,e){this.element=i,this.type=6,this._$AN=void 0,this._$AM=t,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(i){rt(this,i)}},ii={M:me,P:W,A:ge,C:1,L:ei,R:Ot,D:qe,V:rt,I:pt,H:at,N:Nt,U:Lt,B:Ut,F:jt},ue=Tt.litHtmlPolyfillSupport,Ze;ue==null||ue(Et,pt),((Ze=Tt.litHtmlVersions)!=null?Ze:Tt.litHtmlVersions=[]).push("3.3.3");var ni=(s,i,t)=>{var a,r;let e=(a=t==null?void 0:t.renderBefore)!=null?a:i,n=e._$litPart$;if(n===void 0){let o=(r=t==null?void 0:t.renderBefore)!=null?r:null;e._$litPart$=n=new pt(i.insertBefore(Ct(),o),o,void 0,t!=null?t:{})}return n._$AI(s),n};var ot=globalThis,I=class extends Y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!=null||(t.renderBefore=i.firstChild),i}update(i){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Do=ni(t,this.renderRoot,this.renderOptions)}connectedCallback(){var i;super.connectedCallback(),(i=this._$Do)==null||i.setConnected(!0)}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this._$Do)==null||i.setConnected(!1)}render(){return V}},si;I._$litElement$=!0,I.finalized=!0,(si=ot.litElementHydrateSupport)==null||si.call(ot,{LitElement:I});var xe=ot.litElementPolyfillSupport;xe==null||xe({LitElement:I});var ri;((ri=ot.litElementVersions)!=null?ri:ot.litElementVersions=[]).push("4.2.2");var Rt=class{constructor(i,t,e){this.host=i;this.type=t;this.entity=e;this.connected=!1;i.addController(this)}hostConnected(){this.connected=!0,this.sync()}hostDisconnected(){this.connected=!1,this.stop()}hostUpdated(){this.sync()}sync(){let i=this.host.hass,t=this.entity();if(!this.connected||!i||!t)return;let e=`${t}|${this.type}`;e!==this.subscribedKey&&(this.stop(),this.subscribedKey=e,this.error=void 0,this.unsub=i.connection.subscribeMessage(n=>{var a;this.forecast=(a=n.forecast)!=null?a:[],this.host.requestUpdate()},{type:"weather/subscribe_forecast",forecast_type:this.type,entity_id:t}),this.unsub.catch(n=>{var a;this.error=(a=n==null?void 0:n.message)!=null?a:String(n),this.subscribedKey=void 0,this.host.requestUpdate()}))}stop(){let i=this.unsub;this.unsub=void 0,this.subscribedKey=void 0,i==null||i.then(t=>t()).catch(()=>{})}};var lt=new Map;function ut(s,i){let t=i.ids.filter(Boolean);if(!t.length)return Promise.resolve({});let e=JSON.stringify([t,i.start.getTime(),i.end.getTime(),i.period,i.types]),n=Date.now(),a=lt.get(e);if(a&&a.expires>n)return a.promise;let r=s.callWS({type:"recorder/statistics_during_period",start_time:i.start.toISOString(),end_time:i.end.toISOString(),statistic_ids:t,period:i.period,types:i.types}).then(nn),o={promise:r,expires:i.end.getTime()<n?1/0:n+3e5};return lt.set(e,o),r.catch(()=>lt.get(e)===o&&lt.delete(e)),lt.size>60&&lt.delete(lt.keys().next().value),r}function nn(s){for(let i of Object.values(s))for(let t of i)typeof t.start!="number"&&(t.start=new Date(t.start).getTime()),typeof t.end!="number"&&(t.end=new Date(t.end).getTime());return s}var C=(s,i)=>g`<div class="head"><ha-icon icon=${s}></ha-icon><span>${i}</span></div>`,mt=B`
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
`;function ct(s){return g`<div class="legend">${s.filter(Boolean).map(i=>{var t,e;return g`<span><i class=${(t=i.kind)!=null?t:"box"}
    style="background:${i.kind==="dash"?"none":i.color};opacity:${(e=i.opacity)!=null?e:1}"></i>${i.label}</span>`})}</div>`}var Kt=B`
  .legend { display: flex; flex-wrap: wrap; align-items: center; gap: 6px 14px; font-size: 12px; color: var(--wa-text2); margin-top: 8px; }
  .legend span { display: inline-flex; align-items: center; gap: 6px; white-space: nowrap; }
  .legend i { display: inline-block; width: 10px; height: 10px; border-radius: 2px; flex: none; }
  .legend i.line { height: 3px; }
  .legend i.dash { height: 0; border-top: 2px dashed var(--wa-text2); }
`;var L=Math.PI/180;function ve(s,i,t){let e=new Date(s.getFullYear(),s.getMonth(),s.getDate(),12),a=Math.round((e.getTime()-Date.UTC(2e3,0,1,12))/864e5)-t/360,r=(357.5291+.98560028*a)%360,o=1.9148*Math.sin(r*L)+.02*Math.sin(2*r*L)+3e-4*Math.sin(3*r*L),c=(r+o+180+102.9372)%360,d=a+.0053*Math.sin(r*L)-.0069*Math.sin(2*c*L),h=Math.asin(Math.sin(c*L)*Math.sin(23.4397*L)),l=(Math.sin(-.833*L)-Math.sin(i*L)*Math.sin(h))/(Math.cos(i*L)*Math.cos(h));if(l<-1||l>1)return;let u=Math.acos(l)/L/360,p=b=>new Date(Date.UTC(2e3,0,1,12)+b*864e5);return{rise:p(d-u),set:p(d+u),noon:p(d)}}var dt=29.530588853,sn=Date.UTC(2e3,0,6,18,14);function ai(s){let t=((s.getTime()-sn)/864e5%dt+dt)%dt,e=(1-Math.cos(t/dt*2*Math.PI))/2,n=(dt/2-t+dt)%dt;return{age:t,illumination:e,nextFull:new Date(s.getTime()+n*864e5)}}var rn={"clear-night":"Klar",cloudy:"Bew\xF6lkt",exceptional:"Unwetter",fog:"Nebel",hail:"Hagel",lightning:"Gewitter","lightning-rainy":"Gewitter mit Regen",partlycloudy:"Teilweise bew\xF6lkt",pouring:"Starkregen",rainy:"Regnerisch",snowy:"Schnee","snowy-rainy":"Schneeregen",sunny:"Sonnig",windy:"Windig","windy-variant":"Windig und bew\xF6lkt"};function Bt(s){return s&&rn[s]||"\u2013"}var oi={sunny:"47,128,237",partlycloudy:"70,130,200",cloudy:"120,135,150","windy-variant":"120,135,150",rainy:"80,105,135",pouring:"70,90,120",hail:"90,100,125",snowy:"160,180,205","snowy-rainy":"130,150,175",fog:"150,155,160",lightning:"85,80,125","lightning-rainy":"85,80,125",exceptional:"150,70,70",windy:"100,140,170"},an="35,50,100";function li(s,i){return`rgba(${i&&(s==="sunny"||s==="clear-night"||s==="partlycloudy")?an:s&&oi[s]||oi.cloudy},${i?.35:.45})`}var on={new_moon:"Neumond",waxing_crescent:"Zunehmende Sichel",first_quarter:"Erstes Viertel",waxing_gibbous:"Zunehmender Mond",full_moon:"Vollmond",waning_gibbous:"Abnehmender Mond",last_quarter:"Letztes Viertel",waning_crescent:"Abnehmende Sichel"};function ci(s){return s&&on[s]||"\u2013"}var di="data:image/jpeg;base64,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";var hi=new Map;function S(s,i=1){if(s==null||!isFinite(s))return"\u2013";let t=hi.get(i);return t||(t=new Intl.NumberFormat("de-DE",{minimumFractionDigits:i,maximumFractionDigits:i}),hi.set(i,t)),t.format(s)}var D=(s,i=0)=>s==null?"\u2013":`${S(s,i)}\xB0`,Z=(s,i=1)=>`${S(s,i)} l/m\xB2`;function E(s,i){let t=i?s==null?void 0:s.states[i]:void 0;if(!t)return;let e=parseFloat(t.state);return isFinite(e)?e:void 0}var ln=["So","Mo","Di","Mi","Do","Fr","Sa"];function pi(s,i=new Date){return s.toDateString()===i.toDateString()?"Heute":ln[s.getDay()]}function ui(s){return`${String(s.getHours()).padStart(2,"0")} Uhr`}function Gt(s){return s.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}var cn=["N","NO","O","SO","S","SW","W","NW"];function Qt(s){return s==null||!isFinite(s)?"\u2013":cn[Math.round((s%360+360)%360/45)%8]}function mi(s){return g`<div class="tiles">
    ${pn(s)} ${dn(s)} ${un(s)} ${mn(s)} ${gn(s)} ${bn(s)} ${xn(s)} ${vn(s)}
  </div>`}function dn({hass:s,config:i}){var r;let t=(r=i.sensors)!=null?r:{},e=E(s,t.feels_like);if(e==null)return v;let n=E(s,t.temperature),a=n==null?"":e<n-1?"Durch den Wind f\xFChlt es sich k\xE4lter an.":e>n+1?"Durch die Luftfeuchtigkeit f\xFChlt es sich w\xE4rmer an.":"\xC4hnlich wie die tats\xE4chliche Temperatur.";return g`<section class="card tile">${C("mdi:thermometer-lines","Gef\xFChlt")}
    <div class="val">${D(e)}</div>
    ${n!=null?g`<div class="lbl">Tatsächlich: ${D(n)}</div>${hn(e,n)}`:v}
    <div class="txt">${a}</div></section>`}function hn(s,i){let t=Math.round(s-i),e=Math.max(14,Math.abs(s-i)/.5),n=t<0?s-.32*e:t>0?s+.32*e-e:i-e/2,a=o=>(o-n)/e*100,r=t<0?"#6ec6f0":"#ffb74d";return g`<div class="fbar">
    ${t!==0?g`<i class="fseg" style="left:${a(Math.min(s,i))}%;width:${a(Math.max(s,i))-a(Math.min(s,i))}%;background:${r}"></i>
      <b class="fpill" style="left:${a(s)}%;background:${r};transform:translateX(${t<0?"-100%":"0"})">${t<0?"\u2193":"\u2191"}${Math.abs(t)}°</b>`:v}
    <i class="ftick" style="left:${a(i)}%"></i>
  </div>`}function pn({hass:s,config:i}){var o;let t=(o=i.sensors)!=null?o:{},e=E(s,t.wind_speed);if(e==null)return v;let n=E(s,t.wind_gust),a=E(s,t.wind_direction),r=[...Array(72)].map((c,d)=>{let h=d*5*Math.PI/180,l=d%18===0?38:41;return w`<line x1=${50+Math.sin(h)*l} y1=${50-Math.cos(h)*l} x2=${50+Math.sin(h)*45} y2=${50-Math.cos(h)*45} class=${d%18===0?"tk major":"tk"}/>`});return g`<section class="card tile wide2">${C("mdi:weather-windy","Wind")}
    <div class="wind">
      <div class="rows">
        <div class="row"><span>Wind</span><b>${S(e,0)} km/h</b></div>
        ${n!=null?g`<div class="row"><span>Böen</span><b>${S(n,0)} km/h</b></div>`:v}
        ${a!=null?g`<div class="row"><span>Richtung</span><b>${S(a,0)}° ${Qt(a)}</b></div>`:v}
      </div>
      <svg class="compass" viewBox="0 0 100 100">
        ${r}
        ${["N","O","S","W"].map((c,d)=>w`<text x=${50+Math.sin(d*Math.PI/2)*30} y=${54-Math.cos(d*Math.PI/2)*30} class="cl">${c}</text>`)}
        ${a!=null?w`<g transform="rotate(${a+180} 50 50)">
          <line x1="50" y1="88" x2="50" y2="18" class="arrow"/><path d="M50 10l-6 11h12z" class="arrowhead"/>
          <circle cx="50" cy="88" r="3.5" class="arrowhead"/></g>`:v}
        <circle cx="50" cy="50" r="17" class="hub"/>
        <text x="50" y="50" class="cv">${S(e,0)}</text><text x="50" y="60" class="cu">km/h</text>
      </svg>
    </div></section>`}function un({hass:s,config:i,hourly:t,recent:e}){var d;let n=(d=i.sensors)!=null?d:{};if(!n.rain_total&&!t)return v;let a=n.rain_total&&(e!=null&&e[n.rain_total])?e[n.rain_total].reduce((h,l)=>{var u;return h+((u=l.change)!=null?u:0)},0):void 0,r=Date.now(),o=t==null?void 0:t.filter(h=>{let l=new Date(h.datetime).getTime();return l>=r-36e5&&l<r+23*36e5}).reduce((h,l)=>{var u;return h+((u=l.precipitation)!=null?u:0)},0),c=E(s,n.rain_rate);return g`<section class="card tile">${C("mdi:water","Niederschlag")}
    <div class="val">${a!=null?Z(a):"\u2013"}</div>
    <div class="lbl">in den letzten 24 Std.</div>
    <div class="txt">${c?g`Aktuell ${S(c)} l/m² pro Std.<br>`:v}
      ${o!=null?`${Z(o)} in den n\xE4chsten 24 Std. erwartet.`:""}</div></section>`}function mn({hass:s,config:i,recent:t}){var l;let e=(l=i.sensors)!=null?l:{},n=E(s,e.pressure);if(n==null)return v;let a=e.pressure?t==null?void 0:t[e.pressure]:void 0,r=a&&a.length>=3?a[a.length-3].mean:void 0,o=r!=null?n-r:void 0,c=o==null?"":o>1?"steigend":o<-1?"fallend":"gleichbleibend",d=o==null?0:Math.max(-1,Math.min(1,o/4))*120,h=[...Array(41)].map((u,p)=>{let b=(-120+p*6)*Math.PI/180;return w`<line x1=${50+Math.sin(b)*36} y1=${54-Math.cos(b)*36} x2=${50+Math.sin(b)*44} y2=${54-Math.cos(b)*44} class="tk"/>`});return g`<section class="card tile">${C("mdi:gauge","Luftdruck")}
    <svg class="gauge" viewBox="0 0 100 92">
      ${h}
      <g transform="rotate(${d} 50 54)"><line x1="50" y1="6" x2="50" y2="20" class="needle"/></g>
      <text x="50" y="52" class="gv">${S(n,0)}</text><text x="50" y="64" class="gu">hPa</text>
      <text x="16" y="90" class="gu">−</text><text x="84" y="90" class="gu">+</text>
    </svg>
    <div class="txt">${c?g`3 Std.: ${c} (${o>0?"+":""}${S(o,1)} hPa)`:v}</div></section>`}function gn({hass:s,config:i}){var a;let t=(a=i.sensors)!=null?a:{},e=E(s,t.humidity);if(e==null)return v;let n=E(s,t.dewpoint);return g`<section class="card tile">${C("mdi:water-percent","Feuchtigkeit")}
    <div class="val">${S(e,0)} %</div>
    <div class="hbar"><i style="width:${Math.max(0,Math.min(100,e))}%"></i></div>
    <div class="txt">${n!=null?`Der Taupunkt liegt derzeit bei ${D(n)}.`:""}</div></section>`}var fn=[[3,"Niedrig"],[6,"Mittel"],[8,"Hoch"],[11,"Sehr hoch"],[99,"Extrem"]];function bn({hass:s,config:i}){var r;let t=(r=i.sensors)!=null?r:{},e=E(s,t.uv);if(e==null)return v;let n=E(s,t.solar),a=fn.find(([o])=>e<o)[1];return g`<section class="card tile">${C("mdi:sun-wireless","UV-Index")}
    <div class="val">${S(e,0)}</div><div class="lbl">${a}</div>
    <div class="uvbar"><i style="left:${Math.min(100,e/11*100)}%"></i></div>
    <div class="txt">${n!=null?`Sonneneinstrahlung ${S(n,0)} W/m\xB2`:""}</div></section>`}function xn({hass:s,config:i}){var K,z,H,X,ht,$t,U,tt,At;let t=(K=s.states[i.weather])==null?void 0:K.attributes,e=i.sun?s.states[i.sun]:void 0,n=(H=t==null?void 0:t.latitude)!=null?H:(z=s.config)==null?void 0:z.latitude,a=(ht=t==null?void 0:t.longitude)!=null?ht:(X=s.config)==null?void 0:X.longitude;if(n==null||a==null)return v;let r=new Date,o=ve(r,n,a);if(!o)return v;let c=F=>F&&new Date(F).toDateString()===r.toDateString()?new Date(F):void 0,d=($t=c(e==null?void 0:e.attributes.next_rising))!=null?$t:o.rise,h=(U=c(e==null?void 0:e.attributes.next_setting))!=null?U:o.set,l=r<h,u=r<d?["Sonnenaufgang",d]:l?["Sonnenuntergang",h]:["Sonnenaufgang",(At=(tt=ve(new Date(r.getTime()+864e5),n,a))==null?void 0:tt.rise)!=null?At:d],p=new Date(r.getFullYear(),r.getMonth(),r.getDate()).getTime(),b=F=>(F.getTime()-p)/864e5,f=(b(d)+b(h))/2,y=b(h)-b(d),$=F=>Math.cos(2*Math.PI*(F-f)),x=Math.cos(Math.PI*y),_=F=>34-F*22,k=[...Array(49)].map((F,et)=>`${et?"L":"M"}${et/48*100},${_($(et/48))}`).join(" "),P=b(r),M=r>=d&&r<h;return g`<section class="card tile">${C(M?"mdi:weather-sunset-down":"mdi:weather-sunset-up",u[0])}
    <div class="val">${Gt(u[1])}</div>
    <div class="sunarc">
      <svg viewBox="0 0 100 60" preserveAspectRatio="none">
        <path d=${k} class="sunpath"/>
        <line x1="0" x2="100" y1=${_(x)} y2=${_(x)} class="hz"/>
      </svg>
      <!-- Punkt als HTML, sonst verzerrt preserveAspectRatio=none ihn zur Ellipse -->
      <i class=${M?"sundot":"sundot down"} style="left:${P*100}%;top:${_($(P))/60*100}%"></i>
    </div>
    <div class="txt">${u[0]==="Sonnenuntergang"?`Sonnenaufgang: ${Gt(d)}`:`Sonnenuntergang: ${Gt(h)}`}</div>
  </section>`}function vn({hass:s,config:i}){var r;let t=i.moon?(r=s.states[i.moon])==null?void 0:r.state:void 0,e=ai(new Date),n=Math.round((e.nextFull.getTime()-Date.now())/864e5),a=e.illumination;return g`<section class="card tile wide2 moont">${C("mdi:moon-waxing-gibbous",t?ci(t):"Mond")}
    <div class="moon">
      <div>
        <div class="row"><span>Beleuchtung</span><b>${Math.round(a*100)} %</b></div>
        <div class="row"><span>Nächster Vollmond</span><b>${n<=0?"heute":n===1?"morgen":`in ${n} Tg.`}</b></div>
      </div>
      ${yn(a,e.age<29.530588853/2)}
    </div></section>`}function yn(s,i){let a=`M50 30 A20 20 0 0 0 50 70 A${20*Math.abs(1-2*s)} 20 0 0 ${s>.5?1:0} 50 30Z`;return w`<svg class="moonimg" viewBox="28 28 44 44" aria-hidden="true">
    <defs>
      <filter id="ms" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="0.6"/></filter>
      <clipPath id="mc"><circle cx=${50} cy=${50} r=${20}/></clipPath>
    </defs>
    <g clip-path="url(#mc)">
      <image href=${di} x=${30} y=${30} width=${40} height=${40}/>
      ${s<.995?w`<path d=${a} fill="#05070c" fill-opacity="0.88" filter="url(#ms)"
        transform=${i?"":"translate(100 0) scale(-1 1)"}/>`:v}
    </g>
  </svg>`}var gi=B`
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
`;var wn="M18 46a10 10 0 0 1 0-20a14 14 0 0 1 27-3a11.5 11.5 0 0 1 1 23z",fi=(s=32,i=32,t=11)=>w`
  <g class="sun">
    <circle cx=${s} cy=${i} r=${t} fill="#FFD84D"/>
    ${[0,45,90,135,180,225,270,315].map(e=>{let n=e*Math.PI/180,a=s+Math.cos(n)*(t+4),r=i+Math.sin(n)*(t+4),o=s+Math.cos(n)*(t+9),c=i+Math.sin(n)*(t+9);return w`<line x1=${a} y1=${r} x2=${o} y2=${c} stroke="#FFD84D" stroke-width="3.5" stroke-linecap="round"/>`})}
  </g>`,ye=(s=0,i=0,t=1)=>w`
  <path class="mo" transform="translate(${s} ${i}) scale(${t})"
    d="M40 10a20 20 0 1 0 14 34A17 17 0 0 1 40 10z"/>`,O=(s=0,i=0,t=1,e="c1")=>w`
  <path transform="translate(${s} ${i}) scale(${t})" d=${wn} class=${e}/>`,Yt=s=>w`
  ${[...Array(s)].map((i,t)=>{let e=22+t*(20/Math.max(1,s-1));return w`<line x1=${e} y1="50" x2=${e-3} y2="58" stroke="#4FB3FF" stroke-width="3" stroke-linecap="round"/>`})}`,bi=w`${[22,32,42].map((s,i)=>w`<circle cx=${s} cy=${i%2?57:53} r="2.6" class="fl"/>`)}`,xi=w`<path d="M34 44l-7 10h6l-3 9l10-13h-6l3-6z" fill="#FFD84D"/>`,$n=w`${[40,47,54].map((s,i)=>w`<line x1=${12+i*3} y1=${s} x2=${52-i*2} y2=${s} class="ln" stroke-width="3.5" stroke-linecap="round"/>`)}`;function Pt(s,i=!1){let t;switch(s){case"sunny":t=i?ye(2,6,.95):fi();break;case"clear-night":t=ye(2,6,.95);break;case"partlycloudy":t=w`${i?ye(10,-2,.7):fi(42,22,9)}${O(-4,6,1)}`;break;case"cloudy":case"windy-variant":t=w`${O(10,-4,.75,"c2")}${O(-4,6)}`;break;case"fog":t=w`${O(0,-8,.95,"c2")}${$n}`;break;case"rainy":t=w`${O(0,-6)}${Yt(3)}`;break;case"pouring":t=w`${O(0,-6,1,"c2")}${Yt(5)}`;break;case"hail":t=w`${O(0,-6,1,"c2")}${bi}`;break;case"snowy":t=w`${O(0,-6)}${bi}`;break;case"snowy-rainy":t=w`${O(0,-6)}${Yt(2)}<circle cx="32" cy="55" r="2.6" class="fl"/>`;break;case"lightning":t=w`${O(0,-8,1,"c2")}${xi}`;break;case"lightning-rainy":case"exceptional":t=w`${O(0,-8,1,"c2")}${xi}${Yt(2)}`;break;case"windy":t=w`${[24,32,40].map((e,n)=>w`<path d="M10 ${e}h${30-n*6}a6 6 0 1 0-6-6" fill="none" class="ln" stroke-width="3.5" stroke-linecap="round"/>`)}`;break;default:t=O(0,0,1,"c2")}return w`<svg class="wicon" viewBox="0 0 64 64" aria-hidden="true">${t}</svg>`}function Wt(s,i,t=Date.now()){let e=(s!=null?s:[]).filter(r=>r.temperature!=null).map(r=>({t:new Date(r.datetime).getTime(),v:r.temperature})),n=An(e,t),a=i!=null&&n!=null?i-n:0;return(r,o)=>{if(o==null||!a||r<=t)return o;let c=1-(r-t)/(3*36e5);return c>0?o+a*c:o}}function An(s,i){for(let t=0;t<s.length-1;t++){let e=s[t],n=s[t+1];if(e.t<=i&&i<=n.t)return e.v+(n.v-e.v)*(i-e.t)/(n.t-e.t||1)}if(s.length&&s[0].t>i&&s[0].t-i<=36e5)return s[0].v}var gt=class extends I{constructor(){super(...arguments);this._tab="forecast";this._wide=!1;this._metric="temp";this.hourly=new Rt(this,"hourly",()=>{var t;return(t=this._config)==null?void 0:t.weather});this.daily=new Rt(this,"daily",()=>{var t;return(t=this._config)==null?void 0:t.weather})}setConfig(t){if(!(t!=null&&t.weather))throw new Error("`weather:` fehlt (z. B. weather.weather_fusion_ai_kresslingweg)");this._config={...t,sensors:{...t.sensors}}}static getStubConfig(t){var e;return{weather:(e=Object.keys(t.states).find(n=>n.startsWith("weather.")))!=null?e:""}}getCardSize(){return 12}getGridOptions(){return{columns:"full",rows:"auto"}}connectedCallback(){var t;super.connectedCallback(),(t=this._ro)!=null||(this._ro=new ResizeObserver(e=>{let n=e[0].contentRect.width>=820;n!==this._wide&&(this._wide=n)})),this._ro.observe(this)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._ro)==null||t.disconnect(),this.syncDetail()}syncDetail(){var n,a,r,o;if(!(this.isConnected&&this._tab==="forecast"&&this._detail!=null&&!!this.daily.forecast)){(n=this._detailEl)==null||n.remove(),this._detailEl=void 0;return}let e=this._detailEl;e||(e=document.createElement("wetter-app-day-detail"),e.addEventListener("close",()=>this._detail=void 0),e.addEventListener("select",c=>this._detail=c.detail.index),e.addEventListener("metric",c=>this._metric=c.detail.metric),document.body.appendChild(e),this._detailEl=e),Object.assign(e,{hass:this.hass,config:this._config,hourly:(a=this.hourly.forecast)!=null?a:[],daily:this.daily.forecast,index:this._detail,metric:this._metric}),e.classList.toggle("dark",!!((o=(r=this.hass)==null?void 0:r.themes)!=null&&o.darkMode))}shouldUpdate(t){if(t.size>1||!t.has("hass"))return!0;let e=t.get("hass");return!e||!this.hass||!this._config?!0:this.watchedIds().some(n=>e.states[n]!==this.hass.states[n])}watchedIds(){var e;let t=this._config;return[t.weather,t.sun,t.moon,...Object.values((e=t.sensors)!=null?e:{})].filter(Boolean)}updated(){this._tab==="forecast"&&this.loadRecent(),this.syncDetail()}loadRecent(){var r;let t=(r=this._config.sensors)!=null?r:{},e=[t.rain_total,t.pressure].filter(Boolean);if(!this.hass||!e.length)return;let n=Math.ceil(Date.now()/3e5)*3e5,a=String(n);a!==this._recentKey&&(this._recentKey=a,ut(this.hass,{ids:e,start:new Date(n-864e5),end:new Date(n),period:"hour",types:["mean","change"]}).then(o=>a===this._recentKey&&(this._recent=o),()=>this._recentKey=void 0))}openDetail(t,e=this._metric){this._metric=e,this._detail=t}render(){var o,c,d,h,l;if(!this._config||!this.hass)return v;let t=this.hass.states[this._config.weather];if(!t)return g`<div class="warn">Entität ${this._config.weather} nicht gefunden.</div>`;let e=this._config.sun?((o=this.hass.states[this._config.sun])==null?void 0:o.state)==="below_horizon":!1,n=(c=this._config.sensors)!=null?c:{},a=(d=E(this.hass,n.temperature))!=null?d:t.attributes.temperature,r=(h=this.daily.forecast)==null?void 0:h[0];return g`
      <div class="app ${this._wide?"wide":""} ${(l=this.hass.themes)!=null&&l.darkMode?"dark":""} ${this._config.layout==="page"?"page":""}"
        style="--wa-tint:${li(t.state,e)}">
        ${this._config.animations!==!1?g`<wetter-app-sky class="sky" .condition=${t.state} .night=${e}></wetter-app-sky>`:v}
        <header>
          ${this._config.name?g`<div class="place">${this._config.name}</div>`:v}
          <div class="now">${D(a)}</div>
          <div class="cond">${Bt(t.state)}</div>
          ${r?g`<div class="hl">H: ${D(r.temperature)}  T: ${D(r.templow)}</div>`:v}
        </header>

        <nav class="tabs" role="tablist">
          ${["forecast","history"].map(u=>g`
            <button role="tab" aria-selected=${this._tab===u} class=${this._tab===u?"on":""}
              @click=${()=>{this._tab=u,this._detail=void 0}}>
              <ha-icon icon=${u==="forecast"?"mdi:calendar-arrow-right":"mdi:chart-line"}></ha-icon>
              ${u==="forecast"?"Vorhersage":"Historie"}
            </button>`)}
        </nav>

        <main>${this._tab==="forecast"?this.renderForecast(a,e):g`<wetter-app-history .hass=${this.hass} .config=${this._config} .wide=${this._wide}></wetter-app-history>`}</main>
      </div>
    `}renderForecast(t,e){var a;let n=(a=this.hourly.error)!=null?a:this.daily.error;return g`
      ${n?g`<div class="warn">Vorhersage nicht verfügbar: ${n}</div>`:v}
      <div class="cols">
        <div class="left">
          <section class="card hourly">${this.renderHourly(t,e)}</section>
          ${mi({hass:this.hass,config:this._config,hourly:this.hourly.forecast,recent:this._recent})}
        </div>
        <section class="card daily">${this.renderDaily(t)}</section>
      </div>
    `}renderHourly(t,e){let n=this.hourly.forecast;if(!n)return g`<div class="loading">Lade Stundenvorhersage …</div>`;let a=Date.now()-36e5,r=n.filter(c=>new Date(c.datetime).getTime()>a).slice(0,25),o=Wt(n,t);return g`
      ${C("mdi:clock-outline","St\xFCndlich")}
      <div class="hours">
        ${r.map((c,d)=>{var h;return g`
          <div class="hr" @click=${()=>this.openDetail(0,"temp")}>
            <div class="t">${d===0?"Jetzt":ui(new Date(c.datetime))}</div>
            ${Pt(c.condition,d===0?e:c.is_daytime===!1)}
            <div class="p">${((h=c.precipitation_probability)!=null?h:0)>=20?`${Math.round(c.precipitation_probability)} %`:""}</div>
            <div class="v">${D(d===0?t!=null?t:c.temperature:o(new Date(c.datetime).getTime(),c.temperature))}</div>
          </div>`})}
      </div>
    `}renderDaily(t){let e=this.daily.forecast;if(!e)return g`<div class="loading">Lade Tagesvorhersage …</div>`;let n=e.slice(0,10),a=Math.min(...n.map(d=>{var h,l;return(l=(h=d.templow)!=null?h:d.temperature)!=null?l:99})),r=Math.max(...n.map(d=>{var h;return(h=d.temperature)!=null?h:-99})),o=Math.max(1,r-a),c=d=>(d-a)/o*100;return g`
      ${C("mdi:calendar-week",`${n.length}-Tage-Vorhersage`)}
      ${n.map((d,h)=>{var f,y,$,x;let l=(y=(f=d.templow)!=null?f:d.temperature)!=null?y:a,u=($=d.temperature)!=null?$:l,p=Math.max(.5,c(u)-c(l)),b=`background-size:${100/p*100}% 100%;background-position:${p>=100?0:c(l)/(100-p)*100}% 0`;return g`
          <div class="day" role="button" tabindex="0" @click=${()=>this.openDetail(h)}
            @keydown=${_=>_.key==="Enter"&&this.openDetail(h)}>
            <div class="wd">${pi(new Date(d.datetime))}</div>
            <div class="ic">
              ${Pt(d.condition)}
              ${((x=d.precipitation_probability)!=null?x:0)>=20?g`<span class="p">${Math.round(d.precipitation_probability)} %</span>`:v}
            </div>
            <div class="lo">${D(l)}</div>
            <div class="bar">
              <div class="fill" style="left:${c(l)}%;right:${100-c(u)}%;${b}"></div>
              ${h===0&&t!=null?g`<div class="dot" style="left:${Math.min(100,Math.max(0,c(t)))}%"></div>`:v}
            </div>
            <div class="hi">${D(u)}</div>
          </div>`})}
    `}};gt.properties={hass:{attribute:!1},_config:{state:!0},_tab:{state:!0},_wide:{state:!0},_detail:{state:!0},_metric:{state:!0},_recent:{state:!0}},gt.styles=[mt,gi,B`
      :host { display: block; }
      /* Dezenter Wetter-Farbton oben, läuft in den Theme-Hintergrund aus */
      .app {
        box-sizing: border-box; padding: 16px 12px; display: flex; flex-direction: column; gap: 12px;
        border-radius: var(--ha-card-border-radius, 12px);
        background: linear-gradient(180deg, var(--wa-tint) 0, transparent 520px), var(--primary-background-color, #111);
      }
      .app { position: relative; --wa-drop: rgba(40, 70, 110, 0.3); --wa-flake: rgba(90, 110, 140, 0.55); --wa-cloudbg: rgba(120, 135, 155, 0.15); }
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

    `];var we="wetter-app-tip";function Vt(s){window.dispatchEvent(new CustomEvent(we,{detail:s}))}function Jt(s,i){let t=e=>{e.detail!==s&&i()};return window.addEventListener(we,t),()=>window.removeEventListener(we,t)}var T={l:6,r:38,t:18,b:22},bt=class extends I{constructor(){super(...arguments);this.start=0;this.end=0;this.series=[];this.ticks=[];this.markers=[];this.height=200;this.yUnit="";this.rightUnit="";this.timeFormat=t=>new Date(t).toLocaleString("de-DE");this._w=0;this._onTouchStart=t=>this.touchStart(t);this._onTouchMove=t=>this.touchMove(t);this._onTouchEnd=()=>this.touchEnd()}connectedCallback(){var t;super.connectedCallback(),(t=this._ro)!=null||(this._ro=new ResizeObserver(e=>{let n=Math.round(e[0].contentRect.width);n&&n!==this._w&&(this._w=n)})),this._ro.observe(this),this._offTip=Jt(this,()=>this._hover=void 0),this.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.addEventListener("touchmove",this._onTouchMove,{passive:!1}),this.addEventListener("touchend",this._onTouchEnd),this.addEventListener("touchcancel",this._onTouchEnd)}disconnectedCallback(){var t,e,n;super.disconnectedCallback(),(t=this._ro)==null||t.disconnect(),(e=this._offTip)==null||e.call(this),this.removeEventListener("touchstart",this._onTouchStart),this.removeEventListener("touchmove",this._onTouchMove),this.removeEventListener("touchend",this._onTouchEnd),this.removeEventListener("touchcancel",this._onTouchEnd),clearTimeout((n=this._touch)==null?void 0:n.timer),clearTimeout(this._hideTimer)}willUpdate(t){t.has("start")&&t.get("start")!==void 0&&t.get("start")!==this.start&&(this._hover=void 0)}x(t){let e=Math.max(1,this.end-this.start);return T.l+(t-this.start)/e*(this._w-T.l-T.r)}scale(t){var h;let e=[];for(let l of this.series)if(((h=l.axis)!=null?h:"left")===t){for(let u of l.points)u.v!=null&&e.push(u.v),u.v2!=null&&e.push(u.v2);l.type==="bar"&&e.push(0)}let n=t==="left"?this.yMin:0,a=t==="left"?this.yMax:this.rightMax;n==null&&(n=e.length?Math.min(...e):0),a==null&&(a=e.length?Math.max(...e):1),a-n<1e-9&&(a=n+1);let r=_n((a-n)/4);t==="left"&&this.yMin==null&&(n=Math.floor(n/r)*r),t==="left"&&this.yMax==null&&(a=Math.ceil(a/r)*r),t==="right"&&this.rightMax==null&&(a=Math.ceil(a/r)*r);let o=this.height-T.t-T.b,c=l=>T.t+o-(l-n)/(a-n)*o,d=[];for(let l=n;l<=a+r/1e3;l+=r)d.push(Math.round(l*1e6)/1e6);return{y:c,ticks:d,lo:n,hi:a}}onPointer(t){t.pointerType!=="touch"&&this.hoverAt(t.clientX)}touchStart(t){var n;if(clearTimeout((n=this._touch)==null?void 0:n.timer),clearTimeout(this._hideTimer),t.touches.length!==1){this._touch=void 0;return}let e=t.touches[0];this._touch={x:e.clientX,y:e.clientY,mode:"?"},this._touch.timer=window.setTimeout(()=>{var a;((a=this._touch)==null?void 0:a.mode)==="?"&&(this._touch.mode="scrub")},250),this.hoverAt(e.clientX)}touchMove(t){let e=this._touch;if(!e||t.touches.length!==1)return;let n=t.touches[0];if(e.mode==="?"){let a=Math.abs(n.clientX-e.x),r=Math.abs(n.clientY-e.y);if(a<8&&r<8)return;if(clearTimeout(e.timer),e.mode=a>r?"scrub":"scroll",e.mode==="scroll"){this._hover=void 0;return}}e.mode==="scrub"&&(t.cancelable&&t.preventDefault(),this.hoverAt(n.clientX))}touchEnd(){let t=this._touch;t&&(clearTimeout(t.timer),this._touch=void 0,t.mode!=="scroll"&&(this._hideTimer=window.setTimeout(()=>this._hover=void 0,3e3)))}hoverAt(t){let e=this.renderRoot.querySelector("svg");if(!e)return;let n=t-e.getBoundingClientRect().left,a=this.start+(n-T.l)/(this._w-T.l-T.r)*(this.end-this.start),r;for(let o of this.series)for(let c of o.points){if(c.v==null)continue;let d=Zt(o,c);(r==null||Math.abs(d-a)<Math.abs(r-a))&&(r=d)}this._hover==null&&r!=null&&Vt(this),this._hover=r}render(){var h;let t=this._w;if(!t||this.end<=this.start)return g`<div style="height:${this.height}px"></div>`;let e=this.scale("left"),a=this.series.some(l=>l.axis==="right")?this.scale("right"):void 0,r=this.height-T.b,o=[];this.now&&this.now>this.start&&this.now<this.end&&o.push(w`<rect x=${T.l} y=${T.t} width=${this.x(this.now)-T.l} height=${r-T.t} class="past"/>`);for(let l of e.ticks){let u=e.y(l);o.push(w`<line x1=${T.l} x2=${t-T.r} y1=${u} y2=${u} class="grid"/>`),o.push(w`<text x=${t-T.r+6} y=${u+4} class="ylab">${vi(l)}${this.yUnit}</text>`)}let c=[];if(a){let l=this.series.find(u=>u.axis==="right").color;for(let u of a.ticks)u!==0&&c.push(w`<text x=${T.l+3} y=${a.y(u)-3} class="rlab" style="fill:${l}">${vi(u)}${this.rightUnit}</text>`)}for(let l of this.ticks){let u=this.x(l.t);if(u<T.l-1||u>t-T.r+1)continue;o.push(w`<line x1=${u} x2=${u} y1=${T.t} y2=${r} class="vgrid"/>`);let p=u+3+l.label.length*6>t-T.r;o.push(w`<text x=${p?u-3:u+3} y=${this.height-6} class="xlab" style=${p?"text-anchor:end":""}>${l.label}</text>`)}this.series.forEach((l,u)=>{var y,$;let p=l.axis==="right"&&a?a:e,b=l.points.filter(x=>x.v!=null).sort((x,_)=>x.t-_.t);if(!b.length)return;if(l.type==="bar"||l.type==="range"){let x=(y=l.barWidth)!=null?y:b.length>1?b[1].t-b[0].t:(this.end-this.start)/24,_=p.y(Math.max(0,p.lo));for(let k of b){let P=k.t2!=null?k.t2-k.t:x,M=Math.max(1.5,Math.min(14,(this.x(this.start+P)-this.x(this.start))*.65)),K=this.x(k.t+P/2),z=p.y(k.v),H=l.type==="range"?p.y(($=k.v2)!=null?$:k.v):_,X=Math.max(l.type==="range"?M:.5,Math.abs(H-z)),ht=Math.min(z,H)-(X-Math.abs(H-z))/2;o.push(w`<rect x=${K-M/2} y=${ht} width=${M} height=${X} rx=${l.type==="range"?M/2:2} style="fill:${l.color}"/>`)}return}if(l.type==="band"){let x=b.filter(k=>k.v2!=null).map(k=>[this.x(k.t),p.y(k.v2)]),_=b.map(k=>[this.x(k.t),p.y(k.v)]).reverse();x.length&&o.push(w`<path d=${ft(x)+" L"+ft(_).slice(1)+"Z"} style="fill:${l.color};fill-opacity:0.28"/>`);return}let f=b.map(x=>[this.x(x.t),p.y(x.v)]);if(l.type==="area"){let x=`g${u}`;o.push(w`
          <defs><linearGradient id=${x} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" style="stop-color:${l.color};stop-opacity:0.45"/>
            <stop offset="1" style="stop-color:${l.color};stop-opacity:0.04"/>
          </linearGradient></defs>
          <path d=${`${ft(f)} L${f[f.length-1][0]},${r} L${f[0][0]},${r}Z`} fill="url(#${x})"/>`)}if(l.dashUntil!=null&&b[0].t<l.dashUntil){let x=b.findIndex(P=>P.t>=l.dashUntil),_=x<0?f:f.slice(0,x+1),k=x<0?[]:f.slice(x);o.push(w`<path d=${ft(_)} class="ln" style="stroke:${l.color}" stroke-dasharray="5 5"/>`),k.length>1&&o.push(w`<path d=${ft(k)} class="ln" style="stroke:${l.color}"/>`)}else o.push(w`<path d=${ft(f)} class="ln" style="stroke:${l.color}" stroke-dasharray=${l.dashed?"4 4":"none"}/>`)});for(let l of this.markers){let u=this.x(l.t),p=e.y(l.v);o.push(w`<circle cx=${u} cy=${p} r="4" class="mk"/>`),o.push(w`<text x=${u} y=${p-9} class="mklab">${l.label}</text>`)}if(this.now&&this.now>this.start&&this.now<this.end){let l=this.x(this.now);o.push(w`<line x1=${l} x2=${l} y1=${T.t} y2=${r} class="nowl"/>`)}let d=v;if(this._hover!=null){let l=this._hover,u=this.x(l);o.push(w`<line x1=${u} x2=${u} y1=${T.t-6} y2=${r} class="hov"/>`);let p=[];for(let f of this.series){let y=kn(f,l);if(!y||y.v==null||f.silent)continue;let $=f.axis==="right"&&a?a:e;(f.type==="line"||f.type==="area")&&o.push(w`<circle cx=${u} cy=${$.y(y.v)} r="4" style="fill:${f.color}" class="hdot"/>`);let x=_=>{var k,P;return`${S(_,(k=f.digits)!=null?k:1)}${(P=f.unit)!=null?P:""}`};(f.type==="band"||f.type==="range")&&y.v2!=null?p.push({color:f.color,label:"Max",value:x(y.v2)},{color:f.color,label:"Min",value:x(y.v)}):p.push({color:f.color,label:(h=f.label)!=null?h:"",value:x(y.v)})}let b=u>t/2?`right:${t-u+8}px`:`left:${u+8}px`;d=g`<div class="tip" style="${b}"><b>${this.timeFormat(l)}</b>
        ${p.map(f=>g`<div class="tr"><i style="background:${f.color}"></i><span>${f.label}</span><b>${f.value}</b></div>`)}</div>`}return g`
      <div class="wrap">
        ${d}
        <svg width=${t} height=${this.height} @pointermove=${this.onPointer} @pointerdown=${this.onPointer}
          @pointerleave=${l=>{l.pointerType!=="touch"&&(this._hover=void 0)}}>${o}${c}</svg>
      </div>
    `}};bt.properties={start:{type:Number},end:{type:Number},series:{attribute:!1},ticks:{attribute:!1},markers:{attribute:!1},now:{type:Number},height:{type:Number},yMin:{type:Number},yMax:{type:Number},yUnit:{type:String},rightMax:{type:Number},rightUnit:{type:String},timeFormat:{attribute:!1},_w:{state:!0},_hover:{state:!0}},bt.styles=B`
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
  `;function kn(s,i){var a;let t;for(let r of s.points)r.v!=null&&(!t||Math.abs(Zt(s,r)-i)<Math.abs(Zt(s,t)-i))&&(t=r);if(!t)return;let e=s.points,n=t.t2!=null?t.t2-t.t:(a=s.barWidth)!=null?a:e.length>1?Math.abs(e[1].t-e[0].t):1/0;return Math.abs(Zt(s,t)-i)<=n/2+1?t:void 0}function Zt(s,i){var n;if(s.type!=="bar"&&s.type!=="range")return i.t;let t=s.points,e=i.t2!=null?i.t2-i.t:(n=s.barWidth)!=null?n:t.length>1?t[1].t-t[0].t:0;return i.t+e/2}function _n(s){let i=Math.pow(10,Math.floor(Math.log10(Math.max(s,1e-9)))),t=s/i;return(t<=1?1:t<=2?2:t<=2.5?2.5:t<=5?5:10)*i}function vi(s){return Number.isInteger(s)?String(s):S(s,1)}function ft(s){let i=s.length;if(i===0)return"";if(i<3)return"M"+s.map(r=>`${r[0]},${r[1]}`).join(" L");let t=[],e=[],n=[];for(let r=0;r<i-1;r++)t[r]=s[r+1][0]-s[r][0],e[r]=t[r]?(s[r+1][1]-s[r][1])/t[r]:0;n[0]=e[0],n[i-1]=e[i-2];for(let r=1;r<i-1;r++)n[r]=e[r-1]*e[r]<=0?0:3*(t[r-1]+t[r])/((2*t[r]+t[r-1])/e[r-1]+(t[r]+2*t[r-1])/e[r]);let a=`M${s[0][0]},${s[0][1]}`;for(let r=0;r<i-1;r++){let o=t[r]/3;a+=` C${s[r][0]+o},${s[r][1]+o*n[r]} ${s[r+1][0]-o},${s[r+1][1]-o*n[r+1]} ${s[r+1][0]},${s[r+1][1]}`}return a}var yi=[{id:"temp",label:"Temperatur",icon:"mdi:thermometer"},{id:"rain",label:"Niederschlag",icon:"mdi:weather-pouring"},{id:"wind",label:"Wind",icon:"mdi:weather-windy"}],j=36e5,Sn=["S","M","D","M","D","F","S"];function wi(s){let i=new Date(s);return new Date(i.getFullYear(),i.getMonth(),i.getDate()).getTime()}var xt=class extends I{constructor(){super(...arguments);this.hourly=[];this.daily=[];this.index=0;this.metric="temp";this.onKey=t=>t.key==="Escape"&&this.close()}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey)}close(){this.dispatchEvent(new CustomEvent("close"))}willUpdate(t){(t.has("index")||t.has("hass"))&&this.loadPast()}loadPast(){var c,d;let t=(d=(c=this.config)==null?void 0:c.sensors)!=null?d:{},e=this.daily[this.index];if(!this.hass||!e)return;let n=wi(e.datetime),a=Date.now();if(n>a)return;let r=Math.min(n+24*j,Math.ceil(a/3e5)*3e5),o=`${n}|${r}`;o!==this._pastKey&&(this._pastKey=o,ut(this.hass,{ids:[t.temperature,t.rain_total,t.wind_speed,t.wind_gust].filter(Boolean),start:new Date(n),end:new Date(r),period:"hour",types:["mean","max","change"]}).then(h=>o===this._pastKey&&(this._past=h),()=>this._pastKey=void 0))}render(){let t=this.daily[this.index];if(!t)return v;let e=wi(t.datetime),n=e+24*j,a=Date.now(),r=a>=e&&a<n,o=this.hourly.filter(d=>{let h=new Date(d.datetime).getTime();return h>=e&&h<=n}),c=new Date(e).toLocaleDateString("de-DE",{weekday:"long",day:"numeric",month:"long"});return g`
      <div class="backdrop" @click=${this.close}></div>
      <div class="sheet" role="dialog" aria-label="Tagesdetail">
        <div class="top">
          <button class="ib" aria-label="Schließen" @click=${this.close}><ha-icon icon="mdi:close"></ha-icon></button>
          <div class="ttl">${yi.find(d=>d.id===this.metric).label}</div>
          <span style="width:40px"></span>
        </div>

        <div class="days">
          ${this.daily.map((d,h)=>{let l=new Date(d.datetime);return g`<button class=${h===this.index?"on":""} @click=${()=>this.select(h)}>
              <span class="l">${Sn[l.getDay()]}</span><span class="n">${l.getDate()}</span></button>`})}
        </div>
        <div class="date">${c}</div>

        <div class="chips">
          ${yi.map(d=>g`<button class=${d.id===this.metric?"on":""}
            @click=${()=>this.setMetric(d.id)}><ha-icon icon=${d.icon}></ha-icon>${d.label}</button>`)}
        </div>

        <section class="card">
          ${this.renderSummary(t,o,r)}
          ${o.length?this.renderChart(e,n,o,r?a:void 0):g`<div class="hint">Für diesen Tag gibt es keine Stundenvorhersage.</div>`}
        </section>
      </div>
    `}select(t){this.dispatchEvent(new CustomEvent("select",{detail:{index:t}}))}setMetric(t){this.dispatchEvent(new CustomEvent("metric",{detail:{metric:t}}))}renderSummary(t,e,n){var l,u,p,b;let a=(l=this.config.sensors)!=null?l:{};if(this.metric==="temp"){let f=n?E(this.hass,a.temperature):void 0;return g`<div class="sum">
        <div class="sum-ic">${Pt(t.condition)}</div>
        <div>
          <div class="big">${f!=null?D(f):Bt(t.condition)}</div>
          <div class="sub">H: ${D(t.temperature)} · T: ${D(t.templow)}${f!=null?` \xB7 ${Bt(t.condition)}`:""}</div>
        </div>
      </div>`}if(this.metric==="rain"){let f=n&&a.rain_total?this.pastRows(a.rain_total).reduce(($,x)=>{var _;return $+((_=x.change)!=null?_:0)},0):void 0,y=Math.max(0,...e.map($=>{var x;return(x=$.precipitation_probability)!=null?x:0}),(u=t.precipitation_probability)!=null?u:0);return g`<div class="sum">
        <div>
          <div class="big">${Z((p=t.precipitation)!=null?p:e.reduce(($,x)=>{var _;return $+((_=x.precipitation)!=null?_:0)},0))}</div>
          <div class="sub">erwartet · Wahrscheinlichkeit bis ${Math.round(y)} %${f!=null?` \xB7 bisher gemessen ${Z(f)}`:""}</div>
        </div>
      </div>`}let r=e.map(f=>f.wind_speed).filter(f=>f!=null),o=r.length?r.reduce((f,y)=>f+y,0)/r.length:t.wind_speed,c=e.map(f=>f.wind_bearing).filter(f=>f!=null),d=(b=t.wind_bearing)!=null?b:c.length?Math.atan2(c.reduce((f,y)=>f+Math.sin(y*Math.PI/180),0),c.reduce((f,y)=>f+Math.cos(y*Math.PI/180),0))*180/Math.PI:void 0,h=a.wind_gust&&n?Math.max(...this.pastRows(a.wind_gust).map(f=>{var y;return(y=f.max)!=null?y:0}),0):void 0;return g`<div class="sum">
      <div>
        <div class="big">${S(o,0)} km/h ${d!=null?g`<span class="dir">${Qt(d)}</span>`:v}</div>
        <div class="sub">Ø Vorhersage · max ${S(r.length?Math.max(...r):void 0,0)} km/h${h?` \xB7 st\xE4rkste B\xF6e heute ${S(h,0)} km/h`:""}</div>
      </div>
    </div>`}pastRows(t){var e,n;return(n=(e=this._past)==null?void 0:e[t])!=null?n:[]}renderChart(t,e,n,a){var y;let r=(y=this.config.sensors)!=null?y:{},o=n.map($=>({t:new Date($.datetime).getTime(),h:$})),c=a?o.filter($=>$.t>=a-j):o,d=[0,6,12,18].map($=>({t:t+$*j,label:`${String($).padStart(2,"0")} Uhr`})),h=[],l=[],u="\xB0",p,b="",f;if(this.metric==="temp"){let $=r.temperature&&a?this.pastRows(r.temperature).map(M=>({t:M.start+j/2,v:M.mean})):[],x=a?E(this.hass,r.temperature):void 0,_=Wt(this.hourly,x),k=[...$,...x!=null?[{t:a,v:x}]:[],...c.filter(M=>!a||M.t>a).map(M=>({t:M.t,v:_(M.t,M.h.temperature)}))];h.push({type:"area",points:k,color:"var(--wa-temp, #4fc3f7)",dashUntil:a,label:"Temperatur",unit:"\xB0",digits:1});let P=k.filter(M=>M.v!=null);if(P.length){let M=P.reduce((z,H)=>H.v>z.v?H:z),K=P.reduce((z,H)=>H.v<z.v?H:z);l.push({t:M.t,v:M.v,label:"H"},{t:K.t,v:K.v,label:"T"})}}else if(this.metric==="rain")u="",f=0,r.rain_total&&a&&h.push({type:"bar",points:this.pastRows(r.rain_total).map($=>({t:$.start,v:$.change})),color:"var(--wa-rain-past, #1e6fb8)",barWidth:j,label:"gemessen",unit:" l/m\xB2",digits:1}),h.push({type:"bar",points:c.map($=>{var x;return{t:$.t,v:(x=$.h.precipitation)!=null?x:0}}),color:"var(--wa-rain)",barWidth:j,label:"Menge",unit:" l/m\xB2",digits:1}),h.push({type:"line",axis:"right",points:c.map($=>({t:$.t+j/2,v:$.h.precipitation_probability})),color:"var(--wa-prob, #90caf9)",label:"Wahrscheinl.",unit:" %",digits:0}),p=100,b=" %";else{u="",f=0;let $=r.wind_speed&&a?this.pastRows(r.wind_speed).map(k=>({t:k.start+j/2,v:k.mean})):[],x=a?E(this.hass,r.wind_speed):void 0,_=[...$,...x!=null?[{t:a,v:x}]:[],...c.filter(k=>!a||k.t>a).map(k=>({t:k.t,v:k.h.wind_speed}))];h.push({type:"area",points:_,color:"var(--wa-wind, #81c784)",dashUntil:a,label:"Wind",unit:" km/h",digits:0}),r.wind_gust&&a&&h.push({type:"line",points:this.pastRows(r.wind_gust).map(k=>({t:k.start+j/2,v:k.max})),color:"var(--wa-gust, #ffb74d)",label:"B\xF6e",unit:" km/h",digits:0})}return g`
      <wetter-app-chart .start=${t} .end=${e} .series=${h} .ticks=${d} .markers=${l}
        .now=${a} .height=${220} .yUnit=${u} .yMin=${f} .rightMax=${p} .rightUnit=${b}
        .timeFormat=${$=>new Date($).toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}>
      </wetter-app-chart>
      ${this.metric==="wind"?this.renderWindDirs(t,c):v}
      ${this.metric==="rain"?ct([{color:"var(--wa-rain)",label:"Menge pro Stunde"},{color:"var(--wa-prob, #90caf9)",label:"Wahrscheinlichkeit",kind:"line"},!!a&&{color:"var(--wa-rain-past, #1e6fb8)",label:"gemessen"}]):v}
    `}renderWindDirs(t,e){let n=e.filter(a=>new Date(a.t).getHours()%3===0);return g`<div class="dirs">
      ${n.map(a=>{var r;return g`<div style="left:calc(6px + (100% - 44px) * ${(a.t-t)/(24*j)})">
        <ha-icon icon="mdi:navigation" style="transform:rotate(${((r=a.h.wind_bearing)!=null?r:0)+180}deg)"></ha-icon>
        <span>${new Date(a.t).getHours()}</span></div>`})}
    </div>`}};xt.properties={hass:{attribute:!1},config:{attribute:!1},hourly:{attribute:!1},daily:{attribute:!1},index:{type:Number},metric:{type:String},_past:{state:!0}},xt.styles=[mt,Kt,B`
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
    `];var $e=[{id:"day",label:"Tag"},{id:"7d",label:"7 Tage"},{id:"30d",label:"30 Tage"},{id:"month",label:"Monat"},{id:"year",label:"Jahr"}];var Mn=["Januar","Februar","M\xE4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];function Tn(s){return new Date(s.getFullYear(),s.getMonth(),s.getDate())}function It(s,i){return new Date(s.getFullYear(),s.getMonth(),s.getDate()+i)}function $i(s,i=!1){return s.toLocaleDateString("de-DE",i?{day:"2-digit",month:"2-digit",year:"numeric"}:{day:"2-digit",month:"2-digit"})}function qt(s){return $e.some(i=>i.id===s)}function Ai(s,i=new Date){let t=Tn(i),e=Math.min(0,Math.round(s.offset)),n,a,r,o;switch(s.preset){case"day":{n=It(t,e),a=It(n,1),r="hour",o=e===0?"Heute":e===-1?"Gestern":n.toLocaleDateString("de-DE",{weekday:"short",day:"2-digit",month:"2-digit"});break}case"7d":case"30d":{let d=s.preset==="7d"?7:30;a=It(t,1+e*d),n=It(a,-d),r=d===7?"hour":"day",o=e===0?`Letzte ${d} Tage`:`${$i(n)} \u2013 ${$i(It(a,-1),!0)}`;break}case"month":{n=new Date(i.getFullYear(),i.getMonth()+e,1),a=new Date(n.getFullYear(),n.getMonth()+1,1),r="day",o=`${Mn[n.getMonth()]} ${n.getFullYear()}`;break}default:{n=new Date(i.getFullYear()+e,0,1),a=new Date(n.getFullYear()+1,0,1),r="month",o=String(n.getFullYear());break}}let c=a.getTime()>i.getTime();return c&&(a=new Date(Math.ceil(i.getTime()/3e5)*3e5)),{preset:s.preset,offset:e,start:n,end:a,period:r,label:o,live:c}}var Xt=new Map,Ae=new EventTarget,ki="wetter-app:range:";function Cn(s,i){let t=i;try{let e=localStorage.getItem(ki+s);qt(e)&&(t=e)}catch{}return{preset:t,offset:0}}function Dn(s,i="7d"){let t=Xt.get(s);return t||(t=Cn(s,i),Xt.set(s,t)),t}function En(s,i){let t=Xt.get(s);if(Xt.set(s,i),(t==null?void 0:t.preset)!==i.preset)try{localStorage.setItem(ki+s,i.preset)}catch{}Ae.dispatchEvent(new CustomEvent(s))}var te=class{constructor(i,t,e=()=>"7d"){this.host=i;this.groupOf=t;this.fallback=e;this.onChange=()=>this.host.requestUpdate();i.addController(this)}get state(){return Dn(this.groupOf(),this.fallback())}get range(){return Ai(this.state)}set(i){En(this.groupOf(),i)}hostConnected(){this.listen()}hostUpdated(){this.group!==this.groupOf()&&this.listen()}hostDisconnected(){this.group&&Ae.removeEventListener(this.group,this.onChange),this.group=void 0}listen(){this.hostDisconnected(),this.group=this.groupOf(),Ae.addEventListener(this.group,this.onChange)}};function _i(s){let i=s.range;return g`
    <div class="range">
      <div class="chips" role="tablist">
        ${$e.map(t=>g`<button role="tab" aria-selected=${t.id===i.preset}
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
  `}var Si=B`
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
`;var G=[{min:0,max:1,label:"0",name:"Windstille",color:"#2a32ff",text:"#fff"},{min:1,max:6,label:"1",name:"leiser Zug",color:"#3a6ff7",text:"#fff"},{min:6,max:12,label:"2",name:"leichte Brise",color:"#3fb4f7",text:"#000"},{min:12,max:20,label:"3",name:"schwache Brise",color:"#44f2f7",text:"#000"},{min:20,max:29,label:"4",name:"m\xE4\xDFige Brise",color:"#a6f78a",text:"#000"},{min:29,max:39,label:"5",name:"frische Brise",color:"#f7d64a",text:"#000"},{min:39,max:50,label:"6",name:"starker Wind",color:"#f77a4a",text:"#000"},{min:50,max:62,label:"7",name:"steifer Wind",color:"#e8443a",text:"#fff"},{min:62,max:1/0,label:"8+",name:"st\xFCrmischer Wind und mehr",color:"#b0207a",text:"#fff"}],ee=["N","NNO","NO","ONO","O","OSO","SO","SSO","S","SSW","SW","WSW","W","WNW","NW","NNW"],Mi=s=>G.findIndex(i=>s<i.max),ie=3;function Rn(s){let i=Mi(s.mean),t=s.min,e=s.max,n=s.mean;if(t==null||e==null||e<G[ie].min||e-t<.01)return[[i,1]];let a=Math.min(e,Math.max(t,3*n-t-e)),r=d=>d<=t?0:d>=e?1:d<=a?(d-t)**2/((e-t)*(a-t||1e-9)):1-(e-d)**2/((e-t)*(e-a||1e-9)),o=G.map(d=>r(d.max)-r(d.min));if(i>=ie)return o.map((d,h)=>[h,d]).filter(([,d])=>d>0);let c=o.slice(ie).reduce((d,h)=>d+h,0);return[[i,1-c],...o.map((d,h)=>[h,d]).filter(([d,h])=>d>=ie&&h>0)]}function Ti(s=[],i=[],t={}){var Be,Pe;let e=(Be=t.now)!=null?Be:{},n=new Map(i.map(m=>[m.start,m])),a=ee.map(()=>G.map(()=>0)),r=G.map(()=>0),o=0;for(let m of s){let A=n.get(m.start);if(m.mean==null||(A==null?void 0:A.mean)==null)continue;o++;let R=Math.round((m.mean%360+360)%360/22.5)%16;for(let[N,Q]of Rn(A))r[N]+=Q,N>0&&(a[R][N]+=Q)}if(!o)return g`<div class="hint">Keine Winddaten im Zeitraum.</div>`;let c=m=>m/o*100,d=a.map(m=>c(m.reduce((A,R)=>A+R,0))),h=Math.max(...d,1),l=(Pe=[2,5,10,20,25,50].find(m=>h/m<=4))!=null?Pe:50,u=Math.ceil(h/l)*l,p=16,b=90,f=m=>p+m/u*(b-p),y=m=>(m-90)*Math.PI/180,$=(m,A)=>`${100+m*Math.cos(y(A))},${100+m*Math.sin(y(A))}`,x=(m,A,R)=>{let N=m*22.5-10.5,Q=m*22.5+10.5;return`M${$(A,N)} L${$(R,N)} A${R} ${R} 0 0 1 ${$(R,Q)} L${$(A,Q)} A${A} ${A} 0 0 0 ${$(A,N)}Z`},_=0,k=1/0;for(let m=0;m<16;m++){let A=Math.max(d[m],d[(m+1)%16]);A<k&&(k=A,_=m)}let P=_*22.5+11.25,M=[],K=[];for(let m=l;m<=u;m+=l)M.push(w`<circle cx="100" cy="100" r=${f(m)} class="ring"/>`),K.push(w`<text x=${100+f(m)*Math.cos(y(P))} y=${102.5+f(m)*Math.sin(y(P))} class="rl">${m} %</text>`);let z=m=>t.selected!=null&&t.selected!==m?"dim":"",H=a.flatMap((m,A)=>{let R=0;return m.map((N,Q)=>{if(!N)return w``;let Yi=f(R);return R+=c(N),w`<path d=${x(A,Yi,f(R))} style="fill:${G[Q].color}" class=${z(Q)}><title>${ee[A]}, Bft ${G[Q].label}: ${S(c(N),1)} %</title></path>`})}),X=ee.map((m,A)=>A%4===0?w``:w`<text x=${100+109*Math.cos(y(A*22.5))} y=${103+109*Math.sin(y(A*22.5))} class=${A%2?"cd2":"cd"}>${ee[A]}</text>`),ht=e.direction!=null?w`<path d="M100 ${100-b-1} l-5 -9 h10z" class="now" transform="rotate(${e.direction} 100 100)"><title>Aktuell: ${Math.round(e.direction)}°</title></path>`:w``,$t=e.speed!=null?Mi(e.speed):-1,U=G.map((m,A)=>({...m,i:A,share:c(r[A]),w:Math.max(c(r[A]),9)})).filter(m=>r[m.i]>0||m.i===$t),tt=U.reduce((m,A)=>m+A.w,0),At=m=>U.slice(0,m).reduce((A,R)=>A+R.w,0)/tt*100,F,et=U.findIndex(m=>m.i===$t);if(et>=0){let m=U[et],A=Number.isFinite(m.max)?m.max:m.min+20;F=At(et)+Math.min(1,(e.speed-m.min)/(A-m.min))*(m.w/tt)*100}let Ki=(m,A)=>m.w/tt*300>=A.length*6+6,Gi=m=>`left:${m}%;transform:translateX(-${m}%)`,ae=m=>m>=1?`${Math.round(m)}%`:m>=.05?`${S(m,1)}%`:"<0,1%",kt=t.selected!=null?G[t.selected]:void 0,Ce=m=>window.innerHeight-m.currentTarget.getBoundingClientRect().bottom<150,De=(m,A)=>{var R;return(R=t.onSelect)==null?void 0:R.call(t,t.selected===A?void 0:A,Ce(m))},Ee=(m,A)=>{var R;m.pointerType==="mouse"&&((R=t.onSelect)==null||R.call(t,A,Ce(m)))},Re=m=>{var A;m.pointerType==="mouse"&&((A=t.onSelect)==null||A.call(t,void 0))},oe=U.findIndex(m=>m.i===t.selected),Qi=m=>m.min===0?"unter 1":Number.isFinite(m.max)?`${m.min}\u2013${m.max-1}`:`ab ${m.min}`;return g`
    <div class="rose">
      <svg viewBox="-22 -22 244 244">
        ${M}
        <line x1="100" y1="8" x2="100" y2="192" class="ring"/><line x1="8" y1="100" x2="192" y2="100" class="ring"/>
        ${H}
        <circle cx="100" cy="100" r=${p-1} style="fill:${G[0].color}" class=${z(0)}/>
        <text x="100" y="103.5" class="cv">${Math.round(c(r[0]))} %</text>
        ${K}
        <text x="100" y="-6" class="cd">N</text><text x="100" y="216" class="cd">S</text>
        <text x="211" y="103" class="cd">O</text><text x="-11" y="103" class="cd">W</text>
        ${X}
        ${ht}
      </svg>
      <div class="bftbar">
        ${F!=null?g`<span class="nowsp" style="left:${F}%" title="Aktuell: ${S(e.speed,1)} km/h"></span>`:""}
        ${kt&&oe>=0?g`<div class="btip ${t.up?"up":""}" style=${Gi(At(oe)+U[oe].w/tt*50)}>
          <div class="tr"><i style="background:${kt.color}"></i><b>Beaufort ${kt.label}</b></div>
          <div class="tr"><span>${kt.name}</span></div>
          <div class="tr"><span>Wind</span><b>${Qi(kt)} km/h</b></div>
          <div class="tr"><span>Anteil</span><b>${ae(c(r[t.selected]))}</b></div>
        </div>`:""}
        <div class="segs">${U.map(m=>g`<button style="flex:${m.w} 1 0;background:${m.color};color:${m.text}" class=${t.selected===m.i?"on":""}
          @click=${A=>De(A,m.i)} @pointerenter=${A=>Ee(A,m.i)} @pointerleave=${Re}>${Ki(m,ae(m.share))?ae(m.share):""}</button>`)}</div>
        <div class="nums">${U.map(m=>g`<span style="flex:${m.w} 1 0" @click=${A=>De(A,m.i)} @pointerenter=${A=>Ee(A,m.i)} @pointerleave=${Re}>${m.label}</span>`)}</div>
        <div class="bl">Beaufort</div>
      </div>
    </div>`}var Ci=B`
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
`;var Bn=[{id:"pressure",label:"Luftdruck",unit:" hPa",digits:1,color:"var(--wa-accent)"},{id:"humidity",label:"Feuchte",unit:" %",digits:0,color:"#4dd0e1"},{id:"solar",label:"Sonne",unit:" W/m\xB2",digits:0,color:"#ffb300"},{id:"uv",label:"UV",unit:"",digits:1,color:"#ab47bc"}],ke=["Jan","Feb","M\xE4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],Pn=["Januar","Februar","M\xE4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],_e=["So","Mo","Di","Mi","Do","Fr","Sa"],Di=864e5,In=.1,vt=class extends I{constructor(){super(...arguments);this.wide=!1;this._compare=!1;this._extra="pressure";this._bftUp=!1;this.range=new te(this,()=>{var t,e;return(e=(t=this.config)==null?void 0:t.sync_group)!=null?e:"default"},()=>{var t;return qt((t=this.config)==null?void 0:t.default_range)?this.config.default_range:"7d"})}periods(t){return{main:t.preset==="day"||t.preset==="7d"?"hour":"day",rain:t.preset==="day"?"hour":"day",rose:t.start.getTime()>Date.now()-9*Di?"5minute":"hour"}}connectedCallback(){super.connectedCallback(),this._offTip=Jt(this,()=>this._bft=void 0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._offTip)==null||t.call(this)}updated(){this.load()}async load(){var c,d;if(!this.hass||!this.config)return;let t=this.range.range,e=(c=this.config.sensors)!=null?c:{},n=this.periods(t),a=`${t.start.getTime()}|${t.end.getTime()}|${this._compare}`;if(a===this._key)return;this._key=a,this._err=void 0;let r=h=>h.filter(Boolean),o=(h,l,u,p=t.start,b=t.end)=>ut(this.hass,{ids:h,start:p,end:b,period:l,types:u});try{let h=new Date(t.start);h.setFullYear(h.getFullYear()-1);let l=new Date(t.end);l.setFullYear(l.getFullYear()-1);let[u,p,b,f,y]=await Promise.all([o(r([e.temperature,e.humidity,e.pressure,e.solar,e.uv,e.wind_speed,e.wind_gust]),n.main,["mean","min","max"]),o(r([e.rain_total]),n.rain,["change"]),o(r([e.wind_direction,n.rose!==n.main?e.wind_speed:void 0]),n.rose,["mean","min","max"]),this._compare?o(r([e.temperature]),n.main,["mean","min","max"],h,l):void 0,this._compare?o(r([e.rain_total]),n.rain,["change"],h,l):void 0]);if(a!==this._key)return;this._dataRange=t,this._data={main:u,rain:p,dir:b,prev:this._compare?{...f,...y}:void 0}}catch(h){if(a!==this._key)return;this._err=(d=h==null?void 0:h.message)!=null?d:String(h),this._key=void 0}}render(){var l,u,p;if(!this.config)return v;let t=this.range.range,e=this._data,n=e&&this._dataRange?this._dataRange:t,a=n!==t&&(n.start.getTime()!==t.start.getTime()||n.end.getTime()!==t.end.getTime()),r=(l=this.config.sensors)!=null?l:{},o=t.preset!=="day",c=r.temperature&&(e==null?void 0:e.main[r.temperature])||[],d=(u=c.find(b=>b.mean!=null))==null?void 0:u.start,h=!a&&d!=null&&d-n.start.getTime()>2*Di?g`<div class="hint-inline"><ha-icon icon="mdi:information-outline"></ha-icon>Daten erst ab ${new Date(d).toLocaleDateString("de-DE")}</div>`:v;return g`
      <section class="card">
        ${_i(this.range)}
        ${o?g`<div class="cmp"><button class=${this._compare?"on":""}
          @click=${()=>this._compare=!this._compare}><ha-icon icon="mdi:compare-horizontal"></ha-icon>Vorjahr vergleichen</button></div>`:v}
      </section>
      ${this._err?g`<div class="warn">Statistik nicht verfügbar: ${this._err}</div>`:v}
      ${e?!c.length&&!(r.rain_total&&((p=e.rain[r.rain_total])!=null&&p.length))?g`<div class="hint">Keine Daten in diesem Zeitraum.</div>`:g`<div class="body ${a?"stale":""}">
            ${h}
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
    `}rows(t,e,n){let a=e&&(t==null?void 0:t[e])||[];return n.preset==="year"?Ei(a):a}ticks(t){let e=[],n=t.start;if(t.preset==="day")for(let a of[0,6,12,18])e.push({t:new Date(n.getFullYear(),n.getMonth(),n.getDate(),a).getTime(),label:`${String(a).padStart(2,"0")} Uhr`});else if(t.preset==="7d")for(let a=0;a<7;a++){let r=new Date(n.getFullYear(),n.getMonth(),n.getDate()+a);e.push({t:r.getTime(),label:_e[r.getDay()]})}else if(t.preset==="30d")for(let a=0;a<30;a+=7){let r=new Date(n.getFullYear(),n.getMonth(),n.getDate()+a);e.push({t:r.getTime(),label:`${r.getDate()}.${r.getMonth()+1}.`})}else if(t.preset==="month")for(let a of[1,8,15,22,29])e.push({t:new Date(n.getFullYear(),n.getMonth(),a).getTime(),label:`${a}.`});else for(let a=0;a<12;a++)e.push({t:new Date(n.getFullYear(),a,1).getTime(),label:ke[a]});return e}fmt(t,e){return n=>{let a=new Date(n);return t.preset==="year"&&e!=="hour"?`${Pn[a.getMonth()]}`:e==="hour"?`${_e[a.getDay()]} ${String(a.getHours()).padStart(2,"0")}:00`:`${_e[a.getDay()]}, ${a.getDate()}.${a.getMonth()+1}.`}}chart(t,e,n){var a,r;return g`<wetter-app-chart .start=${t.start.getTime()} .end=${t.end.getTime()} .series=${e}
      .ticks=${this.ticks(t)} .height=${(a=n.height)!=null?a:200} .yUnit=${(r=n.yUnit)!=null?r:""} .yMin=${n.yMin}
      .rightMax=${n.rightMax} .timeFormat=${this.fmt(t,t.preset==="year"?"month":n.period)}></wetter-app-chart>`}shift(t){return t.map(e=>{let n=new Date(e.start);n.setFullYear(n.getFullYear()+1);let a=new Date(e.end);return a.setFullYear(a.getFullYear()+1),{...e,start:n.getTime(),end:a.getTime()}})}renderSummary(t,e){var $;let n=($=this.config.sensors)!=null?$:{},a=this.periods(t),r=n.temperature&&e.main[n.temperature]||[],o=Me(r,"min",Math.min),c=Me(r,"max",Math.max),d=Se(r.map(x=>x.mean)),h=n.rain_total&&e.rain[n.rain_total]||[],l=h.reduce((x,_)=>{var k;return x+((k=_.change)!=null?k:0)},0),u=h.filter(x=>{var _;return((_=x.change)!=null?_:0)>=In}).length,p=Me(n.wind_gust&&e.main[n.wind_gust]||[],"max",Math.max),b=Se((n.wind_speed&&e.main[n.wind_speed]||[]).map(x=>x.mean)),f=Se((n.humidity&&e.main[n.humidity]||[]).map(x=>x.mean)),y=this.fmt({...t,preset:t.preset==="year"?"30d":t.preset},a.main);return g`<div class="grid">
      <section class="card kv">${C("mdi:thermometer","Temperatur")}
        <div class="big">${D(d,1)}</div><div class="sub">Durchschnitt</div>
        <div class="ext"><span>▲ ${D(c==null?void 0:c.v,1)}</span><small>${c?y(c.t):""}</small></div>
        <div class="ext"><span>▼ ${D(o==null?void 0:o.v,1)}</span><small>${o?y(o.t):""}</small></div>
      </section>
      <section class="card kv">${C("mdi:weather-pouring","Niederschlag")}
        <div class="big">${Z(l)}</div><div class="sub">Summe</div>
        <div class="ext"><span>${u}</span><small>${a.rain==="hour"?"Stunden mit Regen":"Regentage (\u2265 0,1 l/m\xB2)"}</small></div>
      </section>
      <section class="card kv">${C("mdi:weather-windy","Wind")}
        <div class="big">${S(b,1)} km/h</div><div class="sub">Durchschnitt</div>
        <div class="ext"><span>${S(p==null?void 0:p.v,0)} km/h</span><small>stärkste Böe${p?` \xB7 ${y(p.t)}`:""}</small></div>
      </section>
      <section class="card kv">${C("mdi:water-percent","Luftfeuchte")}
        <div class="big">${S(f,0)} %</div><div class="sub">Durchschnitt</div>
      </section>
    </div>`}renderTemp(t,e){var d,h;let n=(d=this.config.sensors)!=null?d:{},a=this.periods(t),r=this.rows(e.main,n.temperature,t),o=[],c=l=>l.start+(l.end-l.start)/2;if(a.main==="hour"?o.push({type:"band",points:r.map(l=>({t:c(l),v:l.min,v2:l.max})),color:"var(--wa-temp, #4fc3f7)",label:"",unit:"\xB0",digits:1}):o.push({type:"range",points:r.map(l=>({t:l.start,t2:l.end,v:l.min,v2:l.max})),color:"rgba(79, 195, 247, 0.55)",label:"",unit:"\xB0",digits:1}),o.push({type:"line",points:r.map(l=>({t:c(l),v:l.mean})),color:"var(--wa-temp-line, #ffb74d)",label:"\xD8",unit:"\xB0",digits:1}),e.prev&&n.temperature){let l=this.rows({x:this.shift((h=e.prev[n.temperature])!=null?h:[])},"x",t);o.push({type:"line",dashed:!0,points:l.map(u=>({t:c(u),v:u.mean})),color:"var(--wa-text2)",label:"Vorjahr \xD8",unit:"\xB0",digits:1})}return g`<section class="card">${C("mdi:thermometer","Temperatur")}
      ${this.chart(t,o,{yUnit:"\xB0",period:a.main})}
      ${ct([{color:"#4fc3f7",label:"Min\u2013Max"},{color:"#ffb74d",label:"Durchschnitt",kind:"line"},!!e.prev&&{label:"Vorjahr",kind:"dash"}])}
    </section>`}renderRain(t,e){var d,h;let n=(d=this.config.sensors)!=null?d:{};if(!n.rain_total)return v;let a=this.periods(t),r=this.rows(e.rain,n.rain_total,t),o=l=>{let u=0;return l.map(p=>{var b;return{t:Math.min(p.end,t.end.getTime()),v:u+=(b=p.change)!=null?b:0}})},c=[{type:"bar",points:r.map(l=>{var u;return{t:l.start,t2:l.end,v:(u=l.change)!=null?u:0}}),color:"var(--wa-rain)",label:"Menge",unit:" l/m\xB2",digits:1},{type:"line",axis:"right",points:[{t:t.start.getTime(),v:0},...o(r)],color:"var(--wa-prob, #90caf9)",label:"Summe",unit:" l/m\xB2",digits:1}];if(e.prev){let l=this.rows({x:this.shift((h=e.prev[n.rain_total])!=null?h:[])},"x",t);l.length&&c.push({type:"line",axis:"right",dashed:!0,points:[{t:t.start.getTime(),v:0},...o(l)],color:"var(--wa-text2)",label:"Vorjahr",unit:" l/m\xB2",digits:1})}return g`<section class="card">${C("mdi:weather-pouring","Niederschlag")}
      ${this.chart(t,c,{yMin:0,period:a.rain})}
      ${ct([{color:"var(--wa-rain)",label:a.rain==="hour"?"pro Stunde":t.preset==="year"?"pro Monat":"pro Tag"},{color:"var(--wa-prob, #90caf9)",label:"Summe (blaue Skala links)",kind:"line"},!!e.prev&&{label:"Vorjahr",kind:"dash"}])}
    </section>`}renderWind(t,e){var u;let n=(u=this.config.sensors)!=null?u:{};if(!n.wind_speed)return v;let a=this.periods(t),r=n.wind_direction&&e.dir[n.wind_direction]||[],o=(a.rose===a.main?e.main[n.wind_speed]:e.dir[n.wind_speed])||[],c=this.rows(e.main,n.wind_speed,t),d=this.rows(e.main,n.wind_gust,t),h=p=>p.start+(p.end-p.start)/2,l=[{type:"line",points:c.map(p=>({t:h(p),v:p.mean})),color:"var(--wa-wind, #81c784)",label:"\xD8",unit:" km/h",digits:1},...d.length?[{type:"line",points:d.map(p=>({t:h(p),v:p.max})),color:"var(--wa-gust, #ffb74d)",label:"B\xF6e",unit:" km/h",digits:0}]:[]];return g`<section class="card">${C("mdi:weather-windy","Wind")}
      ${n.wind_direction?Ti(r,o,{now:t.live?{direction:E(this.hass,n.wind_direction),speed:E(this.hass,n.wind_speed)}:{},selected:this._bft,up:this._bftUp,onSelect:(p,b)=>{p!=null&&this._bft==null&&Vt(this),this._bft=p,this._bftUp=!!b}}):v}
      ${this.chart(t,l,{yMin:0,period:a.main,height:160})}
      ${ct([{color:"#81c784",label:"Durchschnitt",kind:"line"},{color:"#ffb74d",label:"st\xE4rkste B\xF6e",kind:"line"}])}
    </section>`}renderExtra(t,e){var l,u;let n=(l=this.config.sensors)!=null?l:{},a=Bn.filter(p=>n[p.id]);if(!a.length)return v;let r=(u=a.find(p=>p.id===this._extra))!=null?u:a[0],o=this.periods(t),c=this.rows(e.main,n[r.id],t),d=p=>p.start+(p.end-p.start)/2,h=[{type:"band",points:c.map(p=>({t:d(p),v:p.min,v2:p.max})),color:r.color,unit:r.unit,digits:r.digits},{type:"line",points:c.map(p=>({t:d(p),v:p.mean})),color:r.color,label:"\xD8",unit:r.unit,digits:r.digits}];return g`<section class="card">${C("mdi:chart-bell-curve-cumulative","Weitere Werte")}
      <div class="chips small">${a.map(p=>g`<button class=${p===r?"on":""} @click=${()=>this._extra=p.id}>${p.label}</button>`)}</div>
      ${this.chart(t,h,{period:o.main,yMin:r.id==="pressure"?void 0:0})}
      ${ct([{color:r.color,label:"Durchschnitt",kind:"line"},{color:r.color,label:"Min\u2013Max",opacity:.3}])}
    </section>`}renderYearTable(t,e){var l,u;let n=(l=this.config.sensors)!=null?l:{},a=this.rows(e.main,n.temperature,t),r=this.rows(e.rain,n.rain_total,t),o=e.prev&&n.rain_total?Ei(this.shift((u=e.prev[n.rain_total])!=null?u:[])):[],c=[...Array(12)].map((p,b)=>new Date(t.start.getFullYear(),b,1).getTime()),d=(p,b)=>p.find(f=>f.start===b),h=Math.max(1,...r.map(p=>{var b;return(b=p.change)!=null?b:0}),...o.map(p=>{var b;return(b=p.change)!=null?b:0}));return g`<section class="card">${C("mdi:table",`Monate ${t.start.getFullYear()}`)}
      <table class="months">
        <thead><tr><th></th><th>Ø</th><th>Min</th><th>Max</th><th class="rc">Niederschlag</th></tr></thead>
        <tbody>${c.map((p,b)=>{var x,_;let f=d(a,p),y=d(r,p),$=d(o,p);return!f&&!y?g`<tr class="empty"><td>${ke[b]}</td><td colspan="4">–</td></tr>`:g`<tr>
            <td>${ke[b]}</td><td>${D(f==null?void 0:f.mean,1)}</td><td class="cold">${D(f==null?void 0:f.min,1)}</td><td class="warm">${D(f==null?void 0:f.max,1)}</td>
            <td class="rc"><div class="rcell"><div class="rbar"><i style="width:${((x=y==null?void 0:y.change)!=null?x:0)/h*100}%"></i>
              ${$?g`<b style="left:${((_=$.change)!=null?_:0)/h*100}%" title="Vorjahr"></b>`:v}</div>
              <span>${S(y==null?void 0:y.change,0)}</span></div></td></tr>`})}</tbody>
      </table>
    </section>`}};vt.properties={hass:{attribute:!1},config:{attribute:!1},wide:{type:Boolean,reflect:!0},_data:{state:!0},_err:{state:!0},_compare:{state:!0},_extra:{state:!0},_bft:{state:!0}},vt.styles=[mt,Kt,Si,Ci,B`
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
    `];function Se(s){let i=s.filter(t=>t!=null);return i.length?i.reduce((t,e)=>t+e,0)/i.length:void 0}function Me(s,i,t){let e;for(let n of s){let a=n[i];a!=null&&(!e||t(a,e.v)===a&&a!==e.v)&&(e={t:n.start,v:a})}return e}function Ei(s){var t;let i=new Map;for(let e of s){let n=new Date(e.start),a=new Date(n.getFullYear(),n.getMonth(),1).getTime(),r=i.get(a);r||(r={start:a,end:new Date(n.getFullYear(),n.getMonth()+1,1).getTime(),min:null,max:null,mean:null,change:null,_n:0,_sum:0},i.set(a,r)),e.min!=null&&(r.min=r.min==null?e.min:Math.min(r.min,e.min)),e.max!=null&&(r.max=r.max==null?e.max:Math.max(r.max,e.max)),e.mean!=null&&(r._sum+=e.mean,r._n++,r.mean=r._sum/r._n),e.change!=null&&(r.change=((t=r.change)!=null?t:0)+e.change)}return[...i.values()].sort((e,n)=>e.start-n.start)}var Ri={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Bi=s=>(...i)=>({_$litDirective$:s,values:i}),ne=class{constructor(i){}get _$AU(){return this._$AM._$AU}_$AT(i,t,e){this._$Ct=i,this._$AM=t,this._$Ci=e}_$AS(i,t){return this.update(i,t)}update(i,t){return this.render(...t)}};var{I:zn}=ii,Pi=s=>s;var Ii=()=>document.createComment(""),yt=(s,i,t)=>{var a;let e=s._$AA.parentNode,n=i===void 0?s._$AB:i._$AA;if(t===void 0){let r=e.insertBefore(Ii(),n),o=e.insertBefore(Ii(),n);t=new zn(r,o,s,s.options)}else{let r=t._$AB.nextSibling,o=t._$AM,c=o!==s;if(c){let d;(a=t._$AQ)==null||a.call(t,s),t._$AM=s,t._$AP!==void 0&&(d=s._$AU)!==o._$AU&&t._$AP(d)}if(r!==n||c){let d=t._$AA;for(;d!==r;){let h=Pi(d).nextSibling;Pi(e).insertBefore(d,n),d=h}}}return t},q=(s,i,t=s)=>(s._$AI(i,t),s),Hn={},zi=(s,i=Hn)=>s._$AH=i,Hi=s=>s._$AH,se=s=>{s._$AR(),s._$AA.remove()};var Fi=(s,i,t)=>{let e=new Map;for(let n=i;n<=t;n++)e.set(s[n],n);return e},Oi=Bi(class extends ne{constructor(s){if(super(s),s.type!==Ri.CHILD)throw Error("repeat() can only be used in text expressions")}dt(s,i,t){let e;t===void 0?t=i:i!==void 0&&(e=i);let n=[],a=[],r=0;for(let o of s)n[r]=e?e(o,r):r,a[r]=t(o,r),r++;return{values:a,keys:n}}render(s,i,t){return this.dt(s,i,t).values}update(s,[i,t,e]){var f;let n=Hi(s),{values:a,keys:r}=this.dt(i,t,e);if(!Array.isArray(n))return this.ut=r,a;let o=(f=this.ut)!=null?f:this.ut=[],c=[],d,h,l=0,u=n.length-1,p=0,b=a.length-1;for(;l<=u&&p<=b;)if(n[l]===null)l++;else if(n[u]===null)u--;else if(o[l]===r[p])c[p]=q(n[l],a[p]),l++,p++;else if(o[u]===r[b])c[b]=q(n[u],a[b]),u--,b--;else if(o[l]===r[b])c[b]=q(n[l],a[b]),yt(s,c[b+1],n[l]),l++,b--;else if(o[u]===r[p])c[p]=q(n[u],a[p]),yt(s,n[l],n[u]),u--,p++;else if(d===void 0&&(d=Fi(r,p,b),h=Fi(o,l,u)),d.has(o[l]))if(d.has(o[u])){let y=h.get(r[p]),$=y!==void 0?n[y]:null;if($===null){let x=yt(s,n[l]);q(x,a[p]),c[p]=x}else c[p]=q($,a[p]),yt(s,n[l],$),n[y]=null;p++}else se(n[u]),u--;else se(n[l]),l++;for(;p<=b;){let y=yt(s,c[b+1]);q(y,a[p]),c[p++]=y}for(;l<=u;){let y=n[l++];y!==null&&se(y)}return this.ut=r,zi(s,c),V}});var Fn={rainy:["clouds","rain"],pouring:["clouds","pour"],hail:["clouds","rain"],"lightning-rainy":["clouds","rain","flash"],lightning:["clouds","flash"],snowy:["fewclouds","snow"],"snowy-rainy":["fewclouds","sleet"],sunny:["sun"],"clear-night":["stars"],partlycloudy:["sun","fewclouds"],cloudy:["clouds"],fog:["fog"],windy:["wind"],"windy-variant":["fewclouds","wind"]};function On(s){return()=>{s=s+1831565813|0;let i=Math.imul(s^s>>>15,1|s);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}var Un=s=>[{transform:"translate3d(0,-40px,0)",opacity:s},{transform:"translate3d(0,230px,0)",opacity:s,offset:.43},{transform:"translate3d(0,580px,0)",opacity:0}],Nn=s=>[{transform:"translate3d(0,-10px,0)",opacity:s},{transform:"translate3d(14px,280px,0)",opacity:s*.8},{transform:"translate3d(0,570px,0)",opacity:0}],Te=s=>[{transform:`translate3d(-${s}%,0,0)`},{transform:"translate3d(100%,0,0)"}];function Li(s,i){let t=On(i),e=n=>[...Array(n)];switch(s){case"rain":case"pour":case"sleet":return e(s==="pour"?56:s==="sleet"?14:28).map(()=>{let a=700+t()*500;return{cls:"drop",style:`left:${(t()*100).toFixed(1)}%;height:${Math.round(14+t()*14)}px`,anim:Un(.4+t()*.6),dur:a,delay:-t()*a}}).concat(s==="sleet"?Li("snow",i+7).slice(0,18):[]);case"snow":return e(36).map(()=>{let n=9e3+t()*8e3,a=(2+t()*2.5).toFixed(1);return{cls:"flake",style:`left:${(t()*100).toFixed(1)}%;width:${a}px;height:${a}px`,anim:Nn(.35+t()*.5),dur:n,delay:-t()*n}});case"stars":case"fewstars":return e(s==="stars"?46:18).map(()=>{let n=(1+t()*1.6).toFixed(1);return{cls:"star",style:`left:${(t()*100).toFixed(1)}%;top:${(t()*300).toFixed(0)}px;width:${n}px;height:${n}px`,anim:[{opacity:.15},{opacity:.4+t()*.6}],dur:1800+t()*3500,delay:-t()*4e3,easing:"ease-in-out",dir:"alternate"}});case"sun":return[{cls:"glow",style:"",anim:[{transform:"scale(1)",opacity:.75},{transform:"scale(1.08)",opacity:1}],dur:7e3,delay:0,easing:"ease-in-out",dir:"alternate"},{cls:"rays",style:"",anim:[{transform:"rotate(0deg)"},{transform:"rotate(360deg)"}],dur:14e4,delay:0}];case"clouds":case"fewclouds":return e(s==="clouds"?5:3).map((n,a)=>{let r=7e4+t()*5e4;return{cls:"lane",style:`top:${Math.round(10+a*(s==="clouds"?70:90)+t()*30)}px;--cw:${Math.round(28+t()*16)}%;opacity:${(.5+t()*.5).toFixed(2)}`,anim:Te(45),dur:r,delay:-t()*r}});case"fog":return e(4).map((n,a)=>{let r=5e4+t()*4e4;return{cls:"lane fogl",style:`top:${60+a*90}px`,anim:Te(80),dur:r,delay:-t()*r}});case"wind":return e(10).map(()=>{let n=2200+t()*2200;return{cls:"lane windl",style:`top:${Math.round(20+t()*380)}px;--sw:${Math.round(60+t()*90)}px;opacity:${(.3+t()*.6).toFixed(2)}`,anim:Te(20),dur:n,delay:-t()*n*3}});case"flash":return[{cls:"flash",style:"",anim:[{opacity:0,offset:0},{opacity:0,offset:.1},{opacity:.38,offset:.11},{opacity:0,offset:.13},{opacity:.24,offset:.15},{opacity:0,offset:.17},{opacity:0,offset:1}],dur:8e3,delay:0}]}}var Ui=new Map;function Ln(s,i){var n;let t=`${s}|${i}`,e=Ui.get(t);return e||(e=((n=Fn[s])!=null?n:[]).map(r=>i&&r==="sun"?"fewstars":r).flatMap((r,o)=>Li(r,o*31+1)),Ui.set(t,e)),e}var Ni=1500,wt=class extends I{constructor(){super(...arguments);this.night=!1;this._groups=[];this._started=new WeakSet}willUpdate(t){if(!t.has("condition")&&!t.has("night"))return;let e=this.condition?`${this.condition}|${this.night}`:"",n=this._groups.find(a=>!a.leaving);(n==null?void 0:n.key)!==e&&(this._groups=[...this._groups.filter(a=>a!==n&&!a.leaving),...n?[{...n,leaving:!0}]:[],...e?[{key:e,items:Ln(this.condition,this.night)}]:[]])}render(){return g`${Oi(this._groups,t=>t.key,t=>g`<div class="g" data-key=${t.key}>
      ${t.items.map(e=>g`<i class=${e.cls} style=${e.style}>${e.cls.startsWith("lane")?g`<b></b>`:v}</i>`)}
    </div>`)}`}updated(){this.renderRoot.querySelectorAll(".g").forEach(e=>{let n=this._groups.find(a=>a.key===e.dataset.key);if(!(!n||typeof e.animate!="function")){if(n.leaving){this._started.has(e)&&!e.dataset.out?(e.dataset.out="1",e.animate([{opacity:1},{opacity:0}],{duration:Ni,fill:"forwards"}).onfinish=()=>{this._groups=this._groups.filter(a=>a!==n)}):this._started.has(e)||(this._groups=this._groups.filter(a=>a!==n));return}this._started.has(e)||(this._started.add(e),e.animate([{opacity:0},{opacity:1}],{duration:Ni}),e.querySelectorAll("i").forEach((a,r)=>{var c,d;let o=n.items[r];o&&a.animate(o.anim,{duration:o.dur,delay:o.delay,iterations:1/0,easing:(c=o.easing)!=null?c:"linear",direction:(d=o.dir)!=null?d:"normal"})}))}})}};wt.properties={condition:{},night:{type:Boolean},_groups:{state:!0}},wt.styles=B`
    :host {
      position: absolute; left: 0; right: 0; top: 0; height: 560px; overflow: hidden; pointer-events: none; display: block;
    }
    .g { position: absolute; top: 0; right: 0; bottom: 0; left: 0; }
    i { position: absolute; top: 0; left: 0; }
    .drop { width: 1.5px; border-radius: 1px; background: linear-gradient(180deg, transparent, var(--wa-drop)); }
    .flake, .star { border-radius: 50%; background: var(--wa-flake); }
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
  `;var ji=[["wetter-app",gt,"Wetter-App","Komplette Wetter-App mit Vorhersage und Historie"]],jn=[["wetter-app-chart",bt],["wetter-app-day-detail",xt],["wetter-app-history",vt],["wetter-app-sky",wt]];for(let[s,i]of[...jn,...ji])customElements.get(s)||customElements.define(s,i);var re=window;re.customCards=re.customCards||[];for(let[s,,i,t]of ji)re.customCards.some(e=>e.type===s)||re.customCards.push({type:s,name:i,description:t,preview:!1});console.info("%c WETTER-APP %c 0.1.0 ","background:#2f6fc4;color:#fff;border-radius:3px 0 0 3px","background:#555;color:#fff;border-radius:0 3px 3px 0");
