var K=globalThis,Y=K.ShadowRoot&&(K.ShadyCSS===void 0||K.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,et=Symbol(),wt=new WeakMap,z=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==et)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Y&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=wt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&wt.set(e,t))}return t}toString(){return this.cssText}},St=r=>new z(typeof r=="string"?r:r+"",void 0,et),A=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((s,i,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new z(e,r,et)},At=(r,t)=>{if(Y)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),i=K.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},st=Y?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return St(e)})(r):r;var{is:le,defineProperty:de,getOwnPropertyDescriptor:he,getOwnPropertyNames:pe,getOwnPropertySymbols:ue,getPrototypeOf:ge}=Object,_=globalThis,Et=_.trustedTypes,fe=Et?Et.emptyScript:"",it=_.reactiveElementPolyfillSupport,U=(r,t)=>r,rt={toAttribute(r,t){switch(t){case Boolean:r=r?fe:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},Dt=(r,t)=>!le(r,t),kt={attribute:!0,type:String,converter:rt,reflect:!1,useDefault:!1,hasChanged:Dt},Ct,Rt;(Ct=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(Rt=_.litPropertyMetadata)!=null||(_.litPropertyMetadata=new WeakMap);var b=class extends HTMLElement{static addInitializer(t){var e;this._$Ei(),((e=this.l)!=null?e:this.l=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=kt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&de(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){var o;let{get:i,set:n}=(o=he(this.prototype,t))!=null?o:{get(){return this[e]},set(c){this[e]=c}};return{get:i,set(c){let a=i==null?void 0:i.call(this);n==null||n.call(this,c),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){var e;return(e=this.elementProperties.get(t))!=null?e:kt}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;let t=ge(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){let e=this.properties,s=[...pe(e),...ue(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(st(i))}else t!==void 0&&e.push(st(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$EO)!=null?e:this._$EO=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)==null||s.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){var e;let t=(e=this.shadowRoot)!=null?e:this.attachShadow(this.constructor.shadowRootOptions);return At(t,this.constructor.elementStyles),t}connectedCallback(){var t,e;(t=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostConnected)==null?void 0:i.call(s)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){var n;let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let o=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:rt).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){var n,o,c;let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let a=s.getPropertyOptions(i),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:rt;this._$Em=i;let d=l.fromAttribute(e,a.type);this[i]=(c=d!=null?d:(o=this._$Ej)==null?void 0:o.get(i))!=null?c:d,this._$Em=null}}requestUpdate(t,e,s,i=!1,n){var o,c;if(t!==void 0){let a=this.constructor;if(i===!1&&(n=this[t]),s!=null||(s=a.getPropertyOptions(t)),!(((o=s.hasChanged)!=null?o:Dt)(n,e)||s.useDefault&&s.reflect&&n===((c=this._$Ej)==null?void 0:c.get(t))&&!this.hasAttribute(a._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:n},o){var c,a,l;s&&!((c=this._$Ej)!=null?c:this._$Ej=new Map).has(t)&&(this._$Ej.set(t,(a=o!=null?o:e)!=null?a:this[t]),n!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&((l=this._$Eq)!=null?l:this._$Eq=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s,i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((s=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[o,c]of this._$Ep)this[o]=c;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[o,c]of n){let{wrapped:a}=c,l=this[o];a!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,c,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(n=>{var o;return(o=n.hostUpdate)==null?void 0:o.call(n)}),this.update(e)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}},Tt;b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[U("elementProperties")]=new Map,b[U("finalized")]=new Map,it==null||it({ReactiveElement:b}),((Tt=_.reactiveElementVersions)!=null?Tt:_.reactiveElementVersions=[]).push("2.1.2");var L=globalThis,Pt=r=>r,J=L.trustedTypes,Mt=J?J.createPolicy("lit-html",{createHTML:r=>r}):void 0,Ft="$lit$",x=`lit$${Math.random().toFixed(9).slice(2)}$`,It="?"+x,me=`<${It}>`,C=document,F=()=>C.createComment(""),I=r=>r===null||typeof r!="object"&&typeof r!="function",pt=Array.isArray,ve=r=>pt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",nt=`[ 	
\f\r]`,N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ht=/-->/g,Ot=/>/g,E=RegExp(`>|${nt}(?:([^\\s"'>=/]+)(${nt}*=${nt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),zt=/'/g,Ut=/"/g,Vt=/^(?:script|style|textarea|title)$/i,ut=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),u=ut(1),g=ut(2),Me=ut(3),R=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),Nt=new WeakMap,k=C.createTreeWalker(C,129);function jt(r,t){if(!pt(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Mt!==void 0?Mt.createHTML(t):t}var $e=(r,t)=>{let e=r.length-1,s=[],i,n=t===2?"<svg>":t===3?"<math>":"",o=N;for(let c=0;c<e;c++){let a=r[c],l,d,h=-1,f=0;for(;f<a.length&&(o.lastIndex=f,d=o.exec(a),d!==null);)f=o.lastIndex,o===N?d[1]==="!--"?o=Ht:d[1]!==void 0?o=Ot:d[2]!==void 0?(Vt.test(d[2])&&(i=RegExp("</"+d[2],"g")),o=E):d[3]!==void 0&&(o=E):o===E?d[0]===">"?(o=i!=null?i:N,h=-1):d[1]===void 0?h=-2:(h=o.lastIndex-d[2].length,l=d[1],o=d[3]===void 0?E:d[3]==='"'?Ut:zt):o===Ut||o===zt?o=E:o===Ht||o===Ot?o=N:(o=E,i=void 0);let m=o===E&&r[c+1].startsWith("/>")?" ":"";n+=o===N?a+me:h>=0?(s.push(l),a.slice(0,h)+Ft+a.slice(h)+x+m):a+x+(h===-2?c:m)}return[jt(r,n+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},V=class r{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0,c=t.length-1,a=this.parts,[l,d]=$e(t,e);if(this.el=r.createElement(l,s),k.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=k.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(let h of i.getAttributeNames())if(h.endsWith(Ft)){let f=d[o++],m=i.getAttribute(h).split(x),y=/([.?@])?(.*)/.exec(f);a.push({type:1,index:n,name:y[2],strings:m,ctor:y[1]==="."?ct:y[1]==="?"?lt:y[1]==="@"?dt:H}),i.removeAttribute(h)}else h.startsWith(x)&&(a.push({type:6,index:n}),i.removeAttribute(h));if(Vt.test(i.tagName)){let h=i.textContent.split(x),f=h.length-1;if(f>0){i.textContent=J?J.emptyScript:"";for(let m=0;m<f;m++)i.append(h[m],F()),k.nextNode(),a.push({type:2,index:++n});i.append(h[f],F())}}}else if(i.nodeType===8)if(i.data===It)a.push({type:2,index:n});else{let h=-1;for(;(h=i.data.indexOf(x,h+1))!==-1;)a.push({type:7,index:n}),h+=x.length-1}n++}}static createElement(t,e){let s=C.createElement("template");return s.innerHTML=t,s}};function M(r,t,e=r,s){var o,c,a;if(t===R)return t;let i=s!==void 0?(o=e._$Co)==null?void 0:o[s]:e._$Cl,n=I(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((c=i==null?void 0:i._$AO)==null||c.call(i,!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,e,s)),s!==void 0?((a=e._$Co)!=null?a:e._$Co=[])[s]=i:e._$Cl=i),i!==void 0&&(t=M(r,i._$AS(r,t.values),i,s)),t}var at=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var l;let{el:{content:e},parts:s}=this._$AD,i=((l=t==null?void 0:t.creationScope)!=null?l:C).importNode(e,!0);k.currentNode=i;let n=k.nextNode(),o=0,c=0,a=s[0];for(;a!==void 0;){if(o===a.index){let d;a.type===2?d=new j(n,n.nextSibling,this,t):a.type===1?d=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(d=new ht(n,this,t)),this._$AV.push(d),a=s[++c]}o!==(a==null?void 0:a.index)&&(n=k.nextNode(),o++)}return k.currentNode=C,i}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},j=class r{get _$AU(){var t,e;return(e=(t=this._$AM)==null?void 0:t._$AU)!=null?e:this._$Cv}constructor(t,e,s,i){var n;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(n=i==null?void 0:i.isConnected)!=null?n:!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=M(this,t,e),I(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==R&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ve(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&I(this._$AH)?this._$AA.nextSibling.data=t:this.T(C.createTextNode(t)),this._$AH=t}$(t){var n;let{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=V.createElement(jt(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(e);else{let o=new at(i,this),c=o.u(this.options);o.p(e),this.T(c),this._$AH=o}}_$AC(t){let e=Nt.get(t.strings);return e===void 0&&Nt.set(t.strings,e=new V(t)),e}k(t){pt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let n of t)i===e.length?e.push(s=new r(this.O(F()),this.O(F()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t!==this._$AB;){let i=Pt(t).nextSibling;Pt(t).remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}},H=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(t,e=this,s,i){let n=this.strings,o=!1;if(n===void 0)t=M(this,t,e,0),o=!I(t)||t!==this._$AH&&t!==R,o&&(this._$AH=t);else{let c=t,a,l;for(t=n[0],a=0;a<n.length-1;a++)l=M(this,c[s+a],e,a),l===R&&(l=this._$AH[a]),o||(o=!I(l)||l!==this._$AH[a]),l===p?t=p:t!==p&&(t+=(l!=null?l:"")+n[a+1]),this._$AH[a]=l}o&&!i&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}},ct=class extends H{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}},lt=class extends H{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}},dt=class extends H{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){var o;if((t=(o=M(this,t,e,0))!=null?o:p)===R)return;let s=this._$AH,i=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==p&&(s===p||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)==null?void 0:e.host)!=null?s:this.element,t):this._$AH.handleEvent(t)}},ht=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t)}};var ot=L.litHtmlPolyfillSupport,Lt;ot==null||ot(V,j),((Lt=L.litHtmlVersions)!=null?Lt:L.litHtmlVersions=[]).push("3.3.3");var Wt=(r,t,e)=>{var n,o;let s=(n=e==null?void 0:e.renderBefore)!=null?n:t,i=s._$litPart$;if(i===void 0){let c=(o=e==null?void 0:e.renderBefore)!=null?o:null;s._$litPart$=i=new j(t.insertBefore(F(),c),c,void 0,e!=null?e:{})}return i._$AI(r),i};var T=globalThis,w=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,s;let t=super.createRenderRoot();return(s=(e=this.renderOptions).renderBefore)!=null||(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Wt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return R}},Bt;w._$litElement$=!0,w.finalized=!0,(Bt=T.litElementHydrateSupport)==null||Bt.call(T,{LitElement:w});var gt=T.litElementPolyfillSupport;gt==null||gt({LitElement:w});var Kt;((Kt=T.litElementVersions)!=null?Kt:T.litElementVersions=[]).push("4.2.2");var W=class{constructor(t,e,s){this.host=t;this.type=e;this.entity=s;this.connected=!1;t.addController(this)}hostConnected(){this.connected=!0,this.sync()}hostDisconnected(){this.connected=!1,this.stop()}hostUpdated(){this.sync()}sync(){let t=this.host.hass,e=this.entity();if(!this.connected||!t||!e)return;let s=`${e}|${this.type}`;s!==this.subscribedKey&&(this.stop(),this.subscribedKey=s,this.error=void 0,this.unsub=t.connection.subscribeMessage(i=>{var n;this.forecast=(n=i.forecast)!=null?n:[],this.host.requestUpdate()},{type:"weather/subscribe_forecast",forecast_type:this.type,entity_id:e}),this.unsub.catch(i=>{var n;this.error=(n=i==null?void 0:i.message)!=null?n:String(i),this.subscribedKey=void 0,this.host.requestUpdate()}))}stop(){let t=this.unsub;this.unsub=void 0,this.subscribedKey=void 0,t==null||t.then(e=>e()).catch(()=>{})}};var ft=[{id:"day",label:"Tag"},{id:"7d",label:"7 Tage"},{id:"30d",label:"30 Tage"},{id:"month",label:"Monat"},{id:"year",label:"Jahr"}];var be=["Januar","Februar","M\xE4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];function ye(r){return new Date(r.getFullYear(),r.getMonth(),r.getDate())}function B(r,t){return new Date(r.getFullYear(),r.getMonth(),r.getDate()+t)}function Yt(r,t=!1){return r.toLocaleDateString("de-DE",t?{day:"2-digit",month:"2-digit",year:"numeric"}:{day:"2-digit",month:"2-digit"})}function G(r){return ft.some(t=>t.id===r)}function Jt(r,t=new Date){let e=ye(t),s=Math.min(0,Math.round(r.offset)),i,n,o,c;switch(r.preset){case"day":{i=B(e,s),n=B(i,1),o="hour",c=s===0?"Heute":s===-1?"Gestern":i.toLocaleDateString("de-DE",{weekday:"short",day:"2-digit",month:"2-digit"});break}case"7d":case"30d":{let l=r.preset==="7d"?7:30;n=B(e,1+s*l),i=B(n,-l),o=l===7?"hour":"day",c=s===0?`Letzte ${l} Tage`:`${Yt(i)} \u2013 ${Yt(B(n,-1),!0)}`;break}case"month":{i=new Date(t.getFullYear(),t.getMonth()+s,1),n=new Date(i.getFullYear(),i.getMonth()+1,1),o="day",c=`${be[i.getMonth()]} ${i.getFullYear()}`;break}default:{i=new Date(t.getFullYear()+s,0,1),n=new Date(i.getFullYear()+1,0,1),o="month",c=String(i.getFullYear());break}}let a=n.getTime()>t.getTime();return a&&(n=new Date(Math.ceil(t.getTime()/3e5)*3e5)),{preset:r.preset,offset:s,start:i,end:n,period:o,label:c,live:a}}var Z=new Map,mt=new EventTarget,Gt="wetter-app:range:";function _e(r,t){let e=t;try{let s=localStorage.getItem(Gt+r);G(s)&&(e=s)}catch{}return{preset:e,offset:0}}function xe(r,t="7d"){let e=Z.get(r);return e||(e=_e(r,t),Z.set(r,e)),e}function we(r,t){let e=Z.get(r);if(Z.set(r,t),(e==null?void 0:e.preset)!==t.preset)try{localStorage.setItem(Gt+r,t.preset)}catch{}mt.dispatchEvent(new CustomEvent(r))}var q=class{constructor(t,e,s=()=>"7d"){this.host=t;this.groupOf=e;this.fallback=s;this.onChange=()=>this.host.requestUpdate();t.addController(this)}get state(){return xe(this.groupOf(),this.fallback())}get range(){return Jt(this.state)}set(t){we(this.groupOf(),t)}hostConnected(){this.listen()}hostUpdated(){this.group!==this.groupOf()&&this.listen()}hostDisconnected(){this.group&&mt.removeEventListener(this.group,this.onChange),this.group=void 0}listen(){this.hostDisconnected(),this.group=this.groupOf(),mt.addEventListener(this.group,this.onChange)}};var D=new Map;function vt(r,t){let e=t.ids.filter(Boolean);if(!e.length)return Promise.resolve({});let s=JSON.stringify([e,t.start.getTime(),t.end.getTime(),t.period,t.types]),i=Date.now(),n=D.get(s);if(n&&n.expires>i)return n.promise;let o=r.callWS({type:"recorder/statistics_during_period",start_time:t.start.toISOString(),end_time:t.end.toISOString(),statistic_ids:e,period:t.period,types:t.types}).then(Se),c={promise:o,expires:t.end.getTime()<i?1/0:i+3e5};return D.set(s,c),o.catch(()=>D.get(s)===c&&D.delete(s)),D.size>60&&D.delete(D.keys().next().value),o}function Se(r){for(let t of Object.values(r))for(let e of t)typeof e.start!="number"&&(e.start=new Date(e.start).getTime()),typeof e.end!="number"&&(e.end=new Date(e.end).getTime());return r}function Zt(r){let t=r.range;return u`
    <div class="range">
      <div class="chips" role="tablist">
        ${ft.map(e=>u`<button role="tab" aria-selected=${e.id===t.preset}
            class=${e.id===t.preset?"on":""}
            @click=${()=>r.set({preset:e.id,offset:0})}>${e.label}</button>`)}
      </div>
      <div class="nav">
        <button class="ib" aria-label="Zurück" @click=${()=>r.set({preset:t.preset,offset:t.offset-1})}>
          <ha-icon icon="mdi:chevron-left"></ha-icon>
        </button>
        <span>${t.label}</span>
        <button class="ib" aria-label="Vor" ?disabled=${t.offset>=0}
          @click=${()=>r.set({preset:t.preset,offset:t.offset+1})}>
          <ha-icon icon="mdi:chevron-right"></ha-icon>
        </button>
      </div>
    </div>
  `}var qt=A`
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
`;var P=(r,t)=>u`<div class="head"><ha-icon icon=${r}></ha-icon><span>${t}</span></div>`,Qt=A`
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
    padding: 12px 16px;
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
`;var Ae={"clear-night":"Klar",cloudy:"Bew\xF6lkt",exceptional:"Unwetter",fog:"Nebel",hail:"Hagel",lightning:"Gewitter","lightning-rainy":"Gewitter mit Regen",partlycloudy:"Teilweise bew\xF6lkt",pouring:"Starkregen",rainy:"Regnerisch",snowy:"Schnee","snowy-rainy":"Schneeregen",sunny:"Sonnig",windy:"Windig","windy-variant":"Windig und bew\xF6lkt"};function Xt(r){return r&&Ae[r]||"\u2013"}var te=new Map;function S(r,t=1){if(r==null||!isFinite(r))return"\u2013";let e=te.get(t);return e||(e=new Intl.NumberFormat("de-DE",{minimumFractionDigits:t,maximumFractionDigits:t}),te.set(t,e)),e.format(r)}var $=(r,t=0)=>r==null?"\u2013":`${S(r,t)}\xB0`,ee=(r,t=1)=>`${S(r,t)} l/m\xB2`;function se(r,t){let e=t?r==null?void 0:r.states[t]:void 0;if(!e)return;let s=parseFloat(e.state);return isFinite(s)?s:void 0}var Ee=["So","Mo","Di","Mi","Do","Fr","Sa"];function ie(r,t=new Date){return r.toDateString()===t.toDateString()?"Heute":Ee[r.getDay()]}function re(r){return`${String(r.getHours()).padStart(2,"0")} Uhr`}var ke="M18 46a10 10 0 0 1 0-20a14 14 0 0 1 27-3a11.5 11.5 0 0 1 1 23z",ne=(r=32,t=32,e=11)=>g`
  <g class="sun">
    <circle cx=${r} cy=${t} r=${e} fill="#FFD84D"/>
    ${[0,45,90,135,180,225,270,315].map(s=>{let i=s*Math.PI/180,n=r+Math.cos(i)*(e+4),o=t+Math.sin(i)*(e+4),c=r+Math.cos(i)*(e+9),a=t+Math.sin(i)*(e+9);return g`<line x1=${n} y1=${o} x2=${c} y2=${a} stroke="#FFD84D" stroke-width="3.5" stroke-linecap="round"/>`})}
  </g>`,$t=(r=0,t=0,e=1)=>g`
  <path class="mo" transform="translate(${r} ${t}) scale(${e})"
    d="M40 10a20 20 0 1 0 14 34A17 17 0 0 1 40 10z"/>`,v=(r=0,t=0,e=1,s="c1")=>g`
  <path transform="translate(${r} ${t}) scale(${e})" d=${ke} class=${s}/>`,Q=r=>g`
  ${[...Array(r)].map((t,e)=>{let s=22+e*(20/Math.max(1,r-1));return g`<line x1=${s} y1="50" x2=${s-3} y2="58" stroke="#4FB3FF" stroke-width="3" stroke-linecap="round"/>`})}`,oe=g`${[22,32,42].map((r,t)=>g`<circle cx=${r} cy=${t%2?57:53} r="2.6" class="fl"/>`)}`,ae=g`<path d="M34 44l-7 10h6l-3 9l10-13h-6l3-6z" fill="#FFD84D"/>`,Ce=g`${[40,47,54].map((r,t)=>g`<line x1=${12+t*3} y1=${r} x2=${52-t*2} y2=${r} class="ln" stroke-width="3.5" stroke-linecap="round"/>`)}`;function X(r,t=!1){let e;switch(r){case"sunny":e=t?$t(2,6,.95):ne();break;case"clear-night":e=$t(2,6,.95);break;case"partlycloudy":e=g`${t?$t(10,-2,.7):ne(42,22,9)}${v(-4,6,1)}`;break;case"cloudy":case"windy-variant":e=g`${v(10,-4,.75,"c2")}${v(-4,6)}`;break;case"fog":e=g`${v(0,-8,.95,"c2")}${Ce}`;break;case"rainy":e=g`${v(0,-6)}${Q(3)}`;break;case"pouring":e=g`${v(0,-6,1,"c2")}${Q(5)}`;break;case"hail":e=g`${v(0,-6,1,"c2")}${oe}`;break;case"snowy":e=g`${v(0,-6)}${oe}`;break;case"snowy-rainy":e=g`${v(0,-6)}${Q(2)}<circle cx="32" cy="55" r="2.6" class="fl"/>`;break;case"lightning":e=g`${v(0,-8,1,"c2")}${ae}`;break;case"lightning-rainy":case"exceptional":e=g`${v(0,-8,1,"c2")}${ae}${Q(2)}`;break;case"windy":e=g`${[24,32,40].map((s,i)=>g`<path d="M10 ${s}h${30-i*6}a6 6 0 1 0-6-6" fill="none" class="ln" stroke-width="3.5" stroke-linecap="round"/>`)}`;break;default:e=v(0,0,1,"c2")}return g`<svg class="wicon" viewBox="0 0 64 64" aria-hidden="true">${e}</svg>`}var O=class extends w{constructor(){super(...arguments);this._tab="forecast";this._wide=!1;this.hourly=new W(this,"hourly",()=>{var e;return(e=this._config)==null?void 0:e.weather});this.daily=new W(this,"daily",()=>{var e;return(e=this._config)==null?void 0:e.weather});this.range=new q(this,()=>{var e,s;return(s=(e=this._config)==null?void 0:e.sync_group)!=null?s:"default"},()=>{var e;return G((e=this._config)==null?void 0:e.default_range)?this._config.default_range:"7d"})}setConfig(e){if(!(e!=null&&e.weather))throw new Error("`weather:` fehlt (z. B. weather.weather_fusion_ai_kresslingweg)");this._config={...e,sensors:{...e.sensors}}}static getStubConfig(e){var s;return{weather:(s=Object.keys(e.states).find(i=>i.startsWith("weather.")))!=null?s:""}}getCardSize(){return 12}getGridOptions(){return{columns:"full",rows:"auto"}}connectedCallback(){var e;super.connectedCallback(),(e=this._ro)!=null||(this._ro=new ResizeObserver(s=>{let i=s[0].contentRect.width>=820;i!==this._wide&&(this._wide=i)})),this._ro.observe(this)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._ro)==null||e.disconnect()}shouldUpdate(e){if(e.size>1||!e.has("hass"))return!0;let s=e.get("hass");return!s||!this.hass||!this._config?!0:this.watchedIds().some(i=>s.states[i]!==this.hass.states[i])}watchedIds(){var s;let e=this._config;return[e.weather,e.sun,e.moon,...Object.values((s=e.sensors)!=null?s:{})].filter(Boolean)}updated(){this._tab==="history"&&this.loadStats(this.range.range)}async loadStats(e){var n,o;let s=(n=this._config.sensors)!=null?n:{},i=`${e.start.getTime()}|${e.end.getTime()}|${e.period}`;if(!(!this.hass||i===this._statsKey)){this._statsKey=i,this._statsError=void 0;try{let[c,a]=await Promise.all([vt(this.hass,{ids:[s.temperature,s.wind_speed,s.wind_gust,s.humidity,s.pressure].filter(Boolean),start:e.start,end:e.end,period:e.period,types:["mean","min","max"]}),vt(this.hass,{ids:s.rain_total?[s.rain_total]:[],start:e.start,end:e.end,period:e.period,types:["change"]})]);i===this._statsKey&&(this._stats={...c,...a})}catch(c){i===this._statsKey&&(this._statsError=(o=c==null?void 0:c.message)!=null?o:String(c),this._statsKey=void 0)}}}render(){var c,a,l,d,h;if(!this._config||!this.hass)return p;let e=this.hass.states[this._config.weather];if(!e)return u`<div class="warn">Entität ${this._config.weather} nicht gefunden.</div>`;let s=this._config.sun?((c=this.hass.states[this._config.sun])==null?void 0:c.state)==="below_horizon":!1,i=(a=this._config.sensors)!=null?a:{},n=(l=se(this.hass,i.temperature))!=null?l:e.attributes.temperature,o=(d=this.daily.forecast)==null?void 0:d[0];return u`
      <div class="app ${this._wide?"wide":""} ${(h=this.hass.themes)!=null&&h.darkMode?"dark":""}">
        <section class="card hero">
          <div class="hero-main">
            <div class="hero-icon">${X(e.state,s)}</div>
            <div class="hero-temp">${$(n)}</div>
          </div>
          <div class="hero-info">
            ${this._config.name?u`<div class="place">${this._config.name}</div>`:p}
            <div class="cond">${Xt(e.state)}</div>
            ${o?u`<div class="hl">H: ${$(o.temperature)} · T: ${$(o.templow)}</div>`:p}
          </div>
        </section>

        <nav class="tabs" role="tablist">
          ${["forecast","history"].map(f=>u`
            <button role="tab" aria-selected=${this._tab===f} class=${this._tab===f?"on":""}
              @click=${()=>this._tab=f}>
              <ha-icon icon=${f==="forecast"?"mdi:calendar-arrow-right":"mdi:chart-line"}></ha-icon>
              ${f==="forecast"?"Vorhersage":"Historie"}
            </button>`)}
        </nav>

        <main>${this._tab==="forecast"?this.renderForecast(n,s):this.renderHistory()}</main>
      </div>
    `}renderForecast(e,s){var n;let i=(n=this.hourly.error)!=null?n:this.daily.error;return u`
      ${i?u`<div class="warn">Vorhersage nicht verfügbar: ${i}</div>`:p}
      <div class="cols">
        <section class="card">${this.renderHourly(e,s)}</section>
        <section class="card">${this.renderDaily(e)}</section>
      </div>
    `}renderHourly(e,s){let i=this.hourly.forecast;if(!i)return u`<div class="loading">Lade Stundenvorhersage …</div>`;let n=Date.now()-36e5,o=i.filter(c=>new Date(c.datetime).getTime()>n).slice(0,25);return u`
      ${P("mdi:clock-outline","St\xFCndlich")}
      <div class="hours">
        ${o.map((c,a)=>{var l;return u`
          <div class="hr">
            <div class="t">${a===0?"Jetzt":re(new Date(c.datetime))}</div>
            ${X(c.condition,a===0?s:c.is_daytime===!1)}
            <div class="p">${((l=c.precipitation_probability)!=null?l:0)>=20?`${Math.round(c.precipitation_probability)} %`:""}</div>
            <div class="v">${$(a===0&&e!=null?e:c.temperature)}</div>
          </div>`})}
      </div>
    `}renderDaily(e){let s=this.daily.forecast;if(!s)return u`<div class="loading">Lade Tagesvorhersage …</div>`;let i=s.slice(0,10),n=Math.min(...i.map(l=>{var d,h;return(h=(d=l.templow)!=null?d:l.temperature)!=null?h:99})),o=Math.max(...i.map(l=>{var d;return(d=l.temperature)!=null?d:-99})),c=Math.max(1,o-n),a=l=>(l-n)/c*100;return u`
      ${P("mdi:calendar-week",`${i.length}-Tage-Vorhersage`)}
      ${i.map((l,d)=>{var bt,yt,_t,xt;let h=(yt=(bt=l.templow)!=null?bt:l.temperature)!=null?yt:n,f=(_t=l.temperature)!=null?_t:h,m=Math.max(.5,a(f)-a(h)),y=`background-size:${100/m*100}% 100%;background-position:${m>=100?0:a(h)/(100-m)*100}% 0`;return u`
          <div class="day">
            <div class="wd">${ie(new Date(l.datetime))}</div>
            <div class="ic">
              ${X(l.condition)}
              ${((xt=l.precipitation_probability)!=null?xt:0)>=20?u`<span class="p">${Math.round(l.precipitation_probability)} %</span>`:p}
            </div>
            <div class="lo">${$(h)}</div>
            <div class="bar">
              <div class="fill" style="left:${a(h)}%;right:${100-a(f)}%;${y}"></div>
              ${d===0&&e!=null?u`<div class="dot" style="left:${Math.min(100,Math.max(0,a(e)))}%"></div>`:p}
            </div>
            <div class="hi">${$(f)}</div>
          </div>`})}
    `}renderHistory(){var o,c;let e=(o=this._config.sensors)!=null?o:{},s=this._stats,i=(a,l)=>{var f;let d=a?s==null?void 0:s[a]:void 0,h=(f=d==null?void 0:d.map(m=>m[l]).filter(m=>m!=null))!=null?f:[];if(h.length)return l==="min"?Math.min(...h):l==="max"?Math.max(...h):h.reduce((m,y)=>m+y,0)/h.length},n=e.rain_total?(c=s==null?void 0:s[e.rain_total])==null?void 0:c.reduce((a,l)=>{var d;return a+((d=l.change)!=null?d:0)},0):void 0;return u`
      <section class="card">${Zt(this.range)}</section>
      ${this._statsError?u`<div class="warn">Statistik nicht verfügbar: ${this._statsError}</div>`:p}
      ${s?u`
        <div class="grid">
          <section class="card kv">
            ${P("mdi:thermometer","Temperatur")}
            <div class="big">${$(i(e.temperature,"mean"),1)}</div>
            <div class="sub">Ø · min ${$(i(e.temperature,"min"),1)} · max ${$(i(e.temperature,"max"),1)}</div>
          </section>
          <section class="card kv">
            ${P("mdi:weather-pouring","Regen")}
            <div class="big">${ee(n)}</div>
            <div class="sub">Summe im Zeitraum</div>
          </section>
          <section class="card kv">
            ${P("mdi:weather-windy","Wind")}
            <div class="big">${S(i(e.wind_speed,"mean"))} km/h</div>
            <div class="sub">Ø · stärkste Böe ${S(i(e.wind_gust,"max"))} km/h</div>
          </section>
          <section class="card kv">
            ${P("mdi:water-percent","Luftfeuchte")}
            <div class="big">${S(i(e.humidity,"mean"),0)} %</div>
            <div class="sub">Ø · min ${S(i(e.humidity,"min"),0)} % · max ${S(i(e.humidity,"max"),0)} %</div>
          </section>
        </div>
        <div class="hint">Diagramme folgen in Schritt 3.</div>
      `:u`<div class="loading">Lade Historie …</div>`}
    `}};O.properties={hass:{attribute:!1},_config:{state:!0},_tab:{state:!0},_stats:{state:!0},_statsError:{state:!0},_wide:{state:!0}},O.styles=[Qt,qt,A`
      :host { display: block; }
      .app {
        padding: 8px; box-sizing: border-box; max-width: 1100px; margin: 0 auto;
        display: flex; flex-direction: column; gap: 12px;
      }

      .hero { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 16px; }
      .hero-main { display: flex; align-items: center; gap: 12px; }
      .hero-icon .wicon { width: 72px; height: 72px; }
      .hero-temp { font-size: 56px; font-weight: 300; line-height: 1; }
      .hero-info { text-align: right; min-width: 0; }
      .place { font-size: 20px; font-weight: 500; }
      .cond { font-size: 16px; color: var(--wa-text2); }
      .hl { font-size: 14px; color: var(--wa-text2); margin-top: 2px; }

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
      .hr { flex: 0 0 52px; display: flex; flex-direction: column; align-items: center; gap: 4px; padding: 4px 0; }
      .hr .t { font-size: 12px; color: var(--wa-text2); white-space: nowrap; }
      .hr .wicon { width: 30px; height: 30px; }
      .hr .p { font-size: 11px; color: var(--wa-rain); font-weight: 500; min-height: 13px; }
      .hr .v { font-size: 16px; font-weight: 500; }

      .day {
        display: grid; grid-template-columns: 48px 40px 34px 1fr 34px; align-items: center; gap: 8px;
        padding: 6px 0; border-bottom: 1px solid var(--wa-divider);
      }
      .day:last-child { border-bottom: 0; }
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
    `];var ce=[["wetter-app",O,"Wetter-App","Komplette Wetter-App mit Vorhersage und Historie"]];for(let[r,t]of ce)customElements.get(r)||customElements.define(r,t);var tt=window;tt.customCards=tt.customCards||[];for(let[r,,t,e]of ce)tt.customCards.some(s=>s.type===r)||tt.customCards.push({type:r,name:t,description:e,preview:!1});console.info("%c WETTER-APP %c 0.1.0 ","background:#2f6fc4;color:#fff;border-radius:3px 0 0 3px","background:#555;color:#fff;border-radius:0 3px 3px 0");
