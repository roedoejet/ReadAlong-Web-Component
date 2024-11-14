"use strict";(self.webpackChunkstudio_web=self.webpackChunkstudio_web||[]).push([[429],{5044:(ge,Se,Ie)=>{let le,We=window.AudioContext||window.webkitAudioContext,Te=i=>{let s=new Event("error");return s.data=new Error("Wrong state for "+i),s};class ae{constructor(s,e=null){this.stream=s,this.config=e,this.state="inactive",this.em=document.createDocumentFragment(),this.encoder=(i=>{let s=i.toString().replace(/^(\(\)\s*=>|function\s*\(\))\s*{/,"").replace(/}$/,""),e=new Blob([s]);return new Worker(URL.createObjectURL(e))})(ae.encoder);let t=this;this.encoder.addEventListener("message",r=>{let o=new Event("dataavailable");o.data=new Blob([r.data],{type:t.mimeType}),t.em.dispatchEvent(o),"inactive"===t.state&&t.em.dispatchEvent(new Event("stop"))})}start(s){if("inactive"!==this.state)return this.em.dispatchEvent(Te("start"));this.state="recording",le||(le=new We(this.config)),this.clone=this.stream.clone(),this.input=le.createMediaStreamSource(this.clone),this.processor=le.createScriptProcessor(2048,1,1),this.encoder.postMessage(["init",le.sampleRate]),this.processor.onaudioprocess=e=>{"recording"===this.state&&this.encoder.postMessage(["encode",e.inputBuffer.getChannelData(0)])},this.input.connect(this.processor),this.processor.connect(le.destination),this.em.dispatchEvent(new Event("start")),s&&(this.slicing=setInterval(()=>{"recording"===this.state&&this.requestData()},s))}stop(){return"inactive"===this.state?this.em.dispatchEvent(Te("stop")):(this.requestData(),this.state="inactive",this.clone.getTracks().forEach(s=>{s.stop()}),this.processor.disconnect(),this.input.disconnect(),clearInterval(this.slicing))}pause(){return"recording"!==this.state?this.em.dispatchEvent(Te("pause")):(this.state="paused",this.em.dispatchEvent(new Event("pause")))}resume(){return"paused"!==this.state?this.em.dispatchEvent(Te("resume")):(this.state="recording",this.em.dispatchEvent(new Event("resume")))}requestData(){return"inactive"===this.state?this.em.dispatchEvent(Te("requestData")):this.encoder.postMessage(["dump",le.sampleRate])}addEventListener(...s){this.em.addEventListener(...s)}removeEventListener(...s){this.em.removeEventListener(...s)}dispatchEvent(...s){this.em.dispatchEvent(...s)}}ae.prototype.mimeType="audio/wav",ae.isTypeSupported=i=>ae.prototype.mimeType===i,ae.notSupported=!navigator.mediaDevices||!We,ae.encoder=()=>{let s=[];onmessage=r=>{"encode"===r.data[0]?function e(r){let o=r.length,a=new Uint8Array(2*o);for(let u=0;u<o;u++){let h=2*u,f=r[u];f>1?f=1:f<-1&&(f=-1),f*=32768,a[h]=f,a[h+1]=f>>8}s.push(a)}(r.data[1]):"dump"===r.data[0]&&function t(r){let o=s.length?s[0].length:0,a=s.length*o,u=new Uint8Array(44+a),h=new DataView(u.buffer);h.setUint32(0,1380533830,!1),h.setUint32(4,36+a,!0),h.setUint32(8,1463899717,!1),h.setUint32(12,1718449184,!1),h.setUint32(16,16,!0),h.setUint16(20,1,!0),h.setUint16(22,1,!0),h.setUint32(24,r,!0),h.setUint32(28,2*r,!0),h.setUint16(32,2,!0),h.setUint16(34,16,!0),h.setUint32(36,1684108385,!1),h.setUint32(40,a,!0);for(let f=0;f<s.length;f++)u.set(s[f],f*o+44);s=[],postMessage(u.buffer,[u.buffer])}(r.data[1])}};const ie=ae;Ie(6551);const Pe=":";const ve=function(i,...s){if(ve.translate){const t=ve.translate(i,s);i=t[0],s=t[1]}let e=ot(i[0],i.raw[0]);for(let t=1;t<i.length;t++)e+=s[t-1]+ot(i[t],i.raw[t]);return e},be=":";function ot(i,s){return s.charAt(0)===be?i.substring(function Be(i,s){for(let e=1,t=1;e<i.length;e++,t++)if("\\"===s[t])t++;else if(i[e]===Pe)return e;throw new Error(`Unterminated $localize metadata block in "${s}".`)}(i,s)+1):i}globalThis.$localize=ve,ie.encoder=()=>{importScripts("https://cdnjs.cloudflare.com/ajax/libs/lamejs/1.2.0/lame.min.js");let t,r=new Int8Array;function o(f,T){if(0===T.length)return f;let g=new Int8Array(f.length+T.length);return g.set(f),g.set(T,f.length),g}onmessage=f=>{"init"===f.data[0]?function a(f){t=new lamejs.Mp3Encoder(1,f||44100,128)}(f.data[1]):"encode"===f.data[0]?function u(f){for(let g=0;g<f.length;g++)f[g]=32767.5*f[g];let T=t.encodeBuffer(f);r=o(r,T)}(f.data[1]):function h(){let f=t.flush();r=o(r,f);let T=r.buffer;r=new Int8Array,postMessage(T,[T])}()}},ie.prototype.mimeType="audio/mpeg",window.MediaRecorder=ie},6551:()=>{!function(e){const t=e.performance;function r(U){t&&t.mark&&t.mark(U)}function o(U,v){t&&t.measure&&t.measure(U,v)}r("Zone");const a=e.__Zone_symbol_prefix||"__zone_symbol__";function u(U){return a+U}const h=!0===e[u("forceDuplicateZoneCheck")];if(e.Zone){if(h||"function"!=typeof e.Zone.__symbol__)throw new Error("Zone already loaded.");return e.Zone}let f=(()=>{class U{static{this.__symbol__=u}static assertZonePatched(){if(e.Promise!==pe.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let n=U.current;for(;n.parent;)n=n.parent;return n}static get current(){return W.zone}static get currentTask(){return de}static __load_patch(n,c,R=!1){if(pe.hasOwnProperty(n)){if(!R&&h)throw Error("Already loaded patch: "+n)}else if(!e["__Zone_disable_"+n]){const D="Zone:"+n;r(D),pe[n]=c(e,U,Y),o(D,D)}}get parent(){return this._parent}get name(){return this._name}constructor(n,c){this._parent=n,this._name=c?c.name||"unnamed":"<root>",this._properties=c&&c.properties||{},this._zoneDelegate=new g(this,this._parent&&this._parent._zoneDelegate,c)}get(n){const c=this.getZoneWith(n);if(c)return c._properties[n]}getZoneWith(n){let c=this;for(;c;){if(c._properties.hasOwnProperty(n))return c;c=c._parent}return null}fork(n){if(!n)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,n)}wrap(n,c){if("function"!=typeof n)throw new Error("Expecting function got: "+n);const R=this._zoneDelegate.intercept(this,n,c),D=this;return function(){return D.runGuarded(R,this,arguments,c)}}run(n,c,R,D){W={parent:W,zone:this};try{return this._zoneDelegate.invoke(this,n,c,R,D)}finally{W=W.parent}}runGuarded(n,c=null,R,D){W={parent:W,zone:this};try{try{return this._zoneDelegate.invoke(this,n,c,R,D)}catch(Q){if(this._zoneDelegate.handleError(this,Q))throw Q}}finally{W=W.parent}}runTask(n,c,R){if(n.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(n.zone||ee).name+"; Execution: "+this.name+")");if(n.state===B&&(n.type===te||n.type===S))return;const D=n.state!=k;D&&n._transitionTo(k,H),n.runCount++;const Q=de;de=n,W={parent:W,zone:this};try{n.type==S&&n.data&&!n.data.isPeriodic&&(n.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,n,c,R)}catch(_){if(this._zoneDelegate.handleError(this,_))throw _}}finally{n.state!==B&&n.state!==E&&(n.type==te||n.data&&n.data.isPeriodic?D&&n._transitionTo(H,k):(n.runCount=0,this._updateTaskCount(n,-1),D&&n._transitionTo(B,k,B))),W=W.parent,de=Q}}scheduleTask(n){if(n.zone&&n.zone!==this){let R=this;for(;R;){if(R===n.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${n.zone.name}`);R=R.parent}}n._transitionTo(X,B);const c=[];n._zoneDelegates=c,n._zone=this;try{n=this._zoneDelegate.scheduleTask(this,n)}catch(R){throw n._transitionTo(E,X,B),this._zoneDelegate.handleError(this,R),R}return n._zoneDelegates===c&&this._updateTaskCount(n,1),n.state==X&&n._transitionTo(H,X),n}scheduleMicroTask(n,c,R,D){return this.scheduleTask(new m(x,n,c,R,D,void 0))}scheduleMacroTask(n,c,R,D,Q){return this.scheduleTask(new m(S,n,c,R,D,Q))}scheduleEventTask(n,c,R,D,Q){return this.scheduleTask(new m(te,n,c,R,D,Q))}cancelTask(n){if(n.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(n.zone||ee).name+"; Execution: "+this.name+")");if(n.state===H||n.state===k){n._transitionTo(V,H,k);try{this._zoneDelegate.cancelTask(this,n)}catch(c){throw n._transitionTo(E,V),this._zoneDelegate.handleError(this,c),c}return this._updateTaskCount(n,-1),n._transitionTo(B,V),n.runCount=0,n}}_updateTaskCount(n,c){const R=n._zoneDelegates;-1==c&&(n._zoneDelegates=null);for(let D=0;D<R.length;D++)R[D]._updateTaskCount(n.type,c)}}return U})();const T={name:"",onHasTask:(U,v,n,c)=>U.hasTask(n,c),onScheduleTask:(U,v,n,c)=>U.scheduleTask(n,c),onInvokeTask:(U,v,n,c,R,D)=>U.invokeTask(n,c,R,D),onCancelTask:(U,v,n,c)=>U.cancelTask(n,c)};class g{constructor(v,n,c){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=v,this._parentDelegate=n,this._forkZS=c&&(c&&c.onFork?c:n._forkZS),this._forkDlgt=c&&(c.onFork?n:n._forkDlgt),this._forkCurrZone=c&&(c.onFork?this.zone:n._forkCurrZone),this._interceptZS=c&&(c.onIntercept?c:n._interceptZS),this._interceptDlgt=c&&(c.onIntercept?n:n._interceptDlgt),this._interceptCurrZone=c&&(c.onIntercept?this.zone:n._interceptCurrZone),this._invokeZS=c&&(c.onInvoke?c:n._invokeZS),this._invokeDlgt=c&&(c.onInvoke?n:n._invokeDlgt),this._invokeCurrZone=c&&(c.onInvoke?this.zone:n._invokeCurrZone),this._handleErrorZS=c&&(c.onHandleError?c:n._handleErrorZS),this._handleErrorDlgt=c&&(c.onHandleError?n:n._handleErrorDlgt),this._handleErrorCurrZone=c&&(c.onHandleError?this.zone:n._handleErrorCurrZone),this._scheduleTaskZS=c&&(c.onScheduleTask?c:n._scheduleTaskZS),this._scheduleTaskDlgt=c&&(c.onScheduleTask?n:n._scheduleTaskDlgt),this._scheduleTaskCurrZone=c&&(c.onScheduleTask?this.zone:n._scheduleTaskCurrZone),this._invokeTaskZS=c&&(c.onInvokeTask?c:n._invokeTaskZS),this._invokeTaskDlgt=c&&(c.onInvokeTask?n:n._invokeTaskDlgt),this._invokeTaskCurrZone=c&&(c.onInvokeTask?this.zone:n._invokeTaskCurrZone),this._cancelTaskZS=c&&(c.onCancelTask?c:n._cancelTaskZS),this._cancelTaskDlgt=c&&(c.onCancelTask?n:n._cancelTaskDlgt),this._cancelTaskCurrZone=c&&(c.onCancelTask?this.zone:n._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const R=c&&c.onHasTask;(R||n&&n._hasTaskZS)&&(this._hasTaskZS=R?c:T,this._hasTaskDlgt=n,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=v,c.onScheduleTask||(this._scheduleTaskZS=T,this._scheduleTaskDlgt=n,this._scheduleTaskCurrZone=this.zone),c.onInvokeTask||(this._invokeTaskZS=T,this._invokeTaskDlgt=n,this._invokeTaskCurrZone=this.zone),c.onCancelTask||(this._cancelTaskZS=T,this._cancelTaskDlgt=n,this._cancelTaskCurrZone=this.zone))}fork(v,n){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,v,n):new f(v,n)}intercept(v,n,c){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,v,n,c):n}invoke(v,n,c,R,D){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,v,n,c,R,D):n.apply(c,R)}handleError(v,n){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,v,n)}scheduleTask(v,n){let c=n;if(this._scheduleTaskZS)this._hasTaskZS&&c._zoneDelegates.push(this._hasTaskDlgtOwner),c=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,v,n),c||(c=n);else if(n.scheduleFn)n.scheduleFn(n);else{if(n.type!=x)throw new Error("Task is missing scheduleFn.");I(n)}return c}invokeTask(v,n,c,R){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,v,n,c,R):n.callback.apply(c,R)}cancelTask(v,n){let c;if(this._cancelTaskZS)c=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,v,n);else{if(!n.cancelFn)throw Error("Task is not cancelable");c=n.cancelFn(n)}return c}hasTask(v,n){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,v,n)}catch(c){this.handleError(v,c)}}_updateTaskCount(v,n){const c=this._taskCounts,R=c[v],D=c[v]=R+n;if(D<0)throw new Error("More tasks executed then were scheduled.");0!=R&&0!=D||this.hasTask(this.zone,{microTask:c.microTask>0,macroTask:c.macroTask>0,eventTask:c.eventTask>0,change:v})}}class m{constructor(v,n,c,R,D,Q){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=v,this.source=n,this.data=R,this.scheduleFn=D,this.cancelFn=Q,!c)throw new Error("callback is not defined");this.callback=c;const _=this;this.invoke=v===te&&R&&R.useG?m.invokeTask:function(){return m.invokeTask.call(e,_,this,arguments)}}static invokeTask(v,n,c){v||(v=this),se++;try{return v.runCount++,v.zone.runTask(v,n,c)}finally{1==se&&y(),se--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(B,X)}_transitionTo(v,n,c){if(this._state!==n&&this._state!==c)throw new Error(`${this.type} '${this.source}': can not transition to '${v}', expecting state '${n}'${c?" or '"+c+"'":""}, was '${this._state}'.`);this._state=v,v==B&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const A=u("setTimeout"),P=u("Promise"),O=u("then");let J,N=[],j=!1;function F(U){if(J||e[P]&&(J=e[P].resolve(0)),J){let v=J[O];v||(v=J.then),v.call(J,U)}else e[A](U,0)}function I(U){0===se&&0===N.length&&F(y),U&&N.push(U)}function y(){if(!j){for(j=!0;N.length;){const U=N;N=[];for(let v=0;v<U.length;v++){const n=U[v];try{n.zone.runTask(n,null,null)}catch(c){Y.onUnhandledError(c)}}}Y.microtaskDrainDone(),j=!1}}const ee={name:"NO ZONE"},B="notScheduled",X="scheduling",H="scheduled",k="running",V="canceling",E="unknown",x="microTask",S="macroTask",te="eventTask",pe={},Y={symbol:u,currentZoneFrame:()=>W,onUnhandledError:q,microtaskDrainDone:q,scheduleMicroTask:I,showUncaughtError:()=>!f[u("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:q,patchMethod:()=>q,bindArguments:()=>[],patchThen:()=>q,patchMacroTask:()=>q,patchEventPrototype:()=>q,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>q,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>q,wrapWithCurrentZone:()=>q,filterProperties:()=>[],attachOriginToPatched:()=>q,_redefineProperty:()=>q,patchCallbacks:()=>q,nativeScheduleMicroTask:F};let W={parent:null,zone:new f(null,null)},de=null,se=0;function q(){}o("Zone","Zone"),e.Zone=f}(globalThis);const ge=Object.getOwnPropertyDescriptor,Se=Object.defineProperty,Ie=Object.getPrototypeOf,Me=Object.create,We=Array.prototype.slice,Le="addEventListener",Te="removeEventListener",le=Zone.__symbol__(Le),ae=Zone.__symbol__(Te),ie="true",ue="false",Ce=Zone.__symbol__("");function Pe(e,t){return Zone.current.wrap(e,t)}function Ae(e,t,r,o,a){return Zone.current.scheduleMacroTask(e,t,r,o,a)}const $=Zone.__symbol__,Ne=typeof window<"u",fe=Ne?window:void 0,K=Ne&&fe||globalThis,it="removeAttribute";function qe(e,t){for(let r=e.length-1;r>=0;r--)"function"==typeof e[r]&&(e[r]=Pe(e[r],t+"_"+r));return e}function Xe(e){return!e||!1!==e.writable&&!("function"==typeof e.get&&typeof e.set>"u")}const Ye=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,De=!("nw"in K)&&typeof K.process<"u"&&"[object process]"==={}.toString.call(K.process),je=!De&&!Ye&&!(!Ne||!fe.HTMLElement),Ke=typeof K.process<"u"&&"[object process]"==={}.toString.call(K.process)&&!Ye&&!(!Ne||!fe.HTMLElement),_e={},Je=function(e){if(!(e=e||K.event))return;let t=_e[e.type];t||(t=_e[e.type]=$("ON_PROPERTY"+e.type));const r=this||e.target||K,o=r[t];let a;return je&&r===fe&&"error"===e.type?(a=o&&o.call(this,e.message,e.filename,e.lineno,e.colno,e.error),!0===a&&e.preventDefault()):(a=o&&o.apply(this,arguments),null!=a&&!a&&e.preventDefault()),a};function xe(e,t,r){let o=ge(e,t);if(!o&&r&&ge(r,t)&&(o={enumerable:!0,configurable:!0}),!o||!o.configurable)return;const a=$("on"+t+"patched");if(e.hasOwnProperty(a)&&e[a])return;delete o.writable,delete o.value;const u=o.get,h=o.set,f=t.slice(2);let T=_e[f];T||(T=_e[f]=$("ON_PROPERTY"+f)),o.set=function(g){let m=this;!m&&e===K&&(m=K),m&&("function"==typeof m[T]&&m.removeEventListener(f,Je),h&&h.call(m,null),m[T]=g,"function"==typeof g&&m.addEventListener(f,Je,!1))},o.get=function(){let g=this;if(!g&&e===K&&(g=K),!g)return null;const m=g[T];if(m)return m;if(u){let A=u.call(this);if(A)return o.set.call(this,A),"function"==typeof g[it]&&g.removeAttribute(t),A}return null},Se(e,t,o),e[a]=!0}function Ue(e,t,r){if(t)for(let o=0;o<t.length;o++)xe(e,"on"+t[o],r);else{const o=[];for(const a in e)"on"==a.slice(0,2)&&o.push(a);for(let a=0;a<o.length;a++)xe(e,o[a],r)}}const re=$("originalInstance");function me(e){const t=K[e];if(!t)return;K[$(e)]=t,K[e]=function(){const a=qe(arguments,e);switch(a.length){case 0:this[re]=new t;break;case 1:this[re]=new t(a[0]);break;case 2:this[re]=new t(a[0],a[1]);break;case 3:this[re]=new t(a[0],a[1],a[2]);break;case 4:this[re]=new t(a[0],a[1],a[2],a[3]);break;default:throw new Error("Arg list too long.")}},he(K[e],t);const r=new t(function(){});let o;for(o in r)"XMLHttpRequest"===e&&"responseBlob"===o||function(a){"function"==typeof r[a]?K[e].prototype[a]=function(){return this[re][a].apply(this[re],arguments)}:Se(K[e].prototype,a,{set:function(u){"function"==typeof u?(this[re][a]=Pe(u,e+"."+a),he(this[re][a],u)):this[re][a]=u},get:function(){return this[re][a]}})}(o);for(o in t)"prototype"!==o&&t.hasOwnProperty(o)&&(K[e][o]=t[o])}function ce(e,t,r){let o=e;for(;o&&!o.hasOwnProperty(t);)o=Ie(o);!o&&e[t]&&(o=e);const a=$(t);let u=null;if(o&&(!(u=o[a])||!o.hasOwnProperty(a))&&(u=o[a]=o[t],Xe(o&&ge(o,t)))){const f=r(u,a,t);o[t]=function(){return f(this,arguments)},he(o[t],u)}return u}function ye(e,t,r){let o=null;function a(u){const h=u.data;return h.args[h.cbIdx]=function(){u.invoke.apply(this,arguments)},o.apply(h.target,h.args),u}o=ce(e,t,u=>function(h,f){const T=r(h,f);return T.cbIdx>=0&&"function"==typeof f[T.cbIdx]?Ae(T.name,f[T.cbIdx],T,a):u.apply(h,f)})}function he(e,t){e[$("OriginalDelegate")]=t}let Oe=!1,$e=!1;function at(){if(Oe)return $e;Oe=!0;try{const e=fe.navigator.userAgent;(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/")||-1!==e.indexOf("Edge/"))&&($e=!0)}catch{}return $e}Zone.__load_patch("ZoneAwarePromise",(e,t,r)=>{const o=Object.getOwnPropertyDescriptor,a=Object.defineProperty,h=r.symbol,f=[],T=!1!==e[h("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],g=h("Promise"),m=h("then"),A="__creationTrace__";r.onUnhandledError=_=>{if(r.showUncaughtError()){const d=_&&_.rejection;d?console.error("Unhandled Promise rejection:",d instanceof Error?d.message:d,"; Zone:",_.zone.name,"; Task:",_.task&&_.task.source,"; Value:",d,d instanceof Error?d.stack:void 0):console.error(_)}},r.microtaskDrainDone=()=>{for(;f.length;){const _=f.shift();try{_.zone.runGuarded(()=>{throw _.throwOriginal?_.rejection:_})}catch(d){O(d)}}};const P=h("unhandledPromiseRejectionHandler");function O(_){r.onUnhandledError(_);try{const d=t[P];"function"==typeof d&&d.call(this,_)}catch{}}function N(_){return _&&_.then}function j(_){return _}function J(_){return n.reject(_)}const F=h("state"),I=h("value"),y=h("finally"),ee=h("parentPromiseValue"),B=h("parentPromiseState"),X="Promise.then",H=null,k=!0,V=!1,E=0;function x(_,d){return l=>{try{Y(_,d,l)}catch(p){Y(_,!1,p)}}}const S=function(){let _=!1;return function(l){return function(){_||(_=!0,l.apply(null,arguments))}}},te="Promise resolved with itself",pe=h("currentTaskTrace");function Y(_,d,l){const p=S();if(_===l)throw new TypeError(te);if(_[F]===H){let w=null;try{("object"==typeof l||"function"==typeof l)&&(w=l&&l.then)}catch(C){return p(()=>{Y(_,!1,C)})(),_}if(d!==V&&l instanceof n&&l.hasOwnProperty(F)&&l.hasOwnProperty(I)&&l[F]!==H)de(l),Y(_,l[F],l[I]);else if(d!==V&&"function"==typeof w)try{w.call(l,p(x(_,d)),p(x(_,!1)))}catch(C){p(()=>{Y(_,!1,C)})()}else{_[F]=d;const C=_[I];if(_[I]=l,_[y]===y&&d===k&&(_[F]=_[B],_[I]=_[ee]),d===V&&l instanceof Error){const b=t.currentTask&&t.currentTask.data&&t.currentTask.data[A];b&&a(l,pe,{configurable:!0,enumerable:!1,writable:!0,value:b})}for(let b=0;b<C.length;)se(_,C[b++],C[b++],C[b++],C[b++]);if(0==C.length&&d==V){_[F]=E;let b=l;try{throw new Error("Uncaught (in promise): "+function u(_){return _&&_.toString===Object.prototype.toString?(_.constructor&&_.constructor.name||"")+": "+JSON.stringify(_):_?_.toString():Object.prototype.toString.call(_)}(l)+(l&&l.stack?"\n"+l.stack:""))}catch(Z){b=Z}T&&(b.throwOriginal=!0),b.rejection=l,b.promise=_,b.zone=t.current,b.task=t.currentTask,f.push(b),r.scheduleMicroTask()}}}return _}const W=h("rejectionHandledHandler");function de(_){if(_[F]===E){try{const d=t[W];d&&"function"==typeof d&&d.call(this,{rejection:_[I],promise:_})}catch{}_[F]=V;for(let d=0;d<f.length;d++)_===f[d].promise&&f.splice(d,1)}}function se(_,d,l,p,w){de(_);const C=_[F],b=C?"function"==typeof p?p:j:"function"==typeof w?w:J;d.scheduleMicroTask(X,()=>{try{const Z=_[I],M=!!l&&y===l[y];M&&(l[ee]=Z,l[B]=C);const L=d.run(b,void 0,M&&b!==J&&b!==j?[]:[Z]);Y(l,!0,L)}catch(Z){Y(l,!1,Z)}},l)}const U=function(){},v=e.AggregateError;class n{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(d){return d instanceof n?d:Y(new this(null),k,d)}static reject(d){return Y(new this(null),V,d)}static withResolvers(){const d={};return d.promise=new n((l,p)=>{d.resolve=l,d.reject=p}),d}static any(d){if(!d||"function"!=typeof d[Symbol.iterator])return Promise.reject(new v([],"All promises were rejected"));const l=[];let p=0;try{for(let b of d)p++,l.push(n.resolve(b))}catch{return Promise.reject(new v([],"All promises were rejected"))}if(0===p)return Promise.reject(new v([],"All promises were rejected"));let w=!1;const C=[];return new n((b,Z)=>{for(let M=0;M<l.length;M++)l[M].then(L=>{w||(w=!0,b(L))},L=>{C.push(L),p--,0===p&&(w=!0,Z(new v(C,"All promises were rejected")))})})}static race(d){let l,p,w=new this((Z,M)=>{l=Z,p=M});function C(Z){l(Z)}function b(Z){p(Z)}for(let Z of d)N(Z)||(Z=this.resolve(Z)),Z.then(C,b);return w}static all(d){return n.allWithCallback(d)}static allSettled(d){return(this&&this.prototype instanceof n?this:n).allWithCallback(d,{thenCallback:p=>({status:"fulfilled",value:p}),errorCallback:p=>({status:"rejected",reason:p})})}static allWithCallback(d,l){let p,w,C=new this((L,z)=>{p=L,w=z}),b=2,Z=0;const M=[];for(let L of d){N(L)||(L=this.resolve(L));const z=Z;try{L.then(G=>{M[z]=l?l.thenCallback(G):G,b--,0===b&&p(M)},G=>{l?(M[z]=l.errorCallback(G),b--,0===b&&p(M)):w(G)})}catch(G){w(G)}b++,Z++}return b-=2,0===b&&p(M),C}constructor(d){const l=this;if(!(l instanceof n))throw new Error("Must be an instanceof Promise.");l[F]=H,l[I]=[];try{const p=S();d&&d(p(x(l,k)),p(x(l,V)))}catch(p){Y(l,!1,p)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return n}then(d,l){let p=this.constructor?.[Symbol.species];(!p||"function"!=typeof p)&&(p=this.constructor||n);const w=new p(U),C=t.current;return this[F]==H?this[I].push(C,w,d,l):se(this,C,w,d,l),w}catch(d){return this.then(null,d)}finally(d){let l=this.constructor?.[Symbol.species];(!l||"function"!=typeof l)&&(l=n);const p=new l(U);p[y]=y;const w=t.current;return this[F]==H?this[I].push(w,p,d,d):se(this,w,p,d,d),p}}n.resolve=n.resolve,n.reject=n.reject,n.race=n.race,n.all=n.all;const c=e[g]=e.Promise;e.Promise=n;const R=h("thenPatched");function D(_){const d=_.prototype,l=o(d,"then");if(l&&(!1===l.writable||!l.configurable))return;const p=d.then;d[m]=p,_.prototype.then=function(w,C){return new n((Z,M)=>{p.call(this,Z,M)}).then(w,C)},_[R]=!0}return r.patchThen=D,c&&(D(c),ce(e,"fetch",_=>function Q(_){return function(d,l){let p=_.apply(d,l);if(p instanceof n)return p;let w=p.constructor;return w[R]||D(w),p}}(_))),Promise[t.__symbol__("uncaughtPromiseErrors")]=f,n}),Zone.__load_patch("toString",e=>{const t=Function.prototype.toString,r=$("OriginalDelegate"),o=$("Promise"),a=$("Error"),u=function(){if("function"==typeof this){const g=this[r];if(g)return"function"==typeof g?t.call(g):Object.prototype.toString.call(g);if(this===Promise){const m=e[o];if(m)return t.call(m)}if(this===Error){const m=e[a];if(m)return t.call(m)}}return t.call(this)};u[r]=t,Function.prototype.toString=u;const h=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":h.call(this)}});let ke=!1;if(typeof window<"u")try{const e=Object.defineProperty({},"passive",{get:function(){ke=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{ke=!1}const lt={useG:!0},oe={},He={},et=new RegExp("^"+Ce+"(\\w+)(true|false)$"),Be=$("propagationStopped");function tt(e,t){const r=(t?t(e):e)+ue,o=(t?t(e):e)+ie,a=Ce+r,u=Ce+o;oe[e]={},oe[e][ue]=a,oe[e][ie]=u}function _t(e,t,r,o){const a=o&&o.add||Le,u=o&&o.rm||Te,h=o&&o.listeners||"eventListeners",f=o&&o.rmAll||"removeAllListeners",T=$(a),g="."+a+":",m="prependListener",A="."+m+":",P=function(I,y,ee){if(I.isRemoved)return;const B=I.callback;let X;"object"==typeof B&&B.handleEvent&&(I.callback=k=>B.handleEvent(k),I.originalDelegate=B);try{I.invoke(I,y,[ee])}catch(k){X=k}const H=I.options;return H&&"object"==typeof H&&H.once&&y[u].call(y,ee.type,I.originalDelegate?I.originalDelegate:I.callback,H),X};function O(I,y,ee){if(!(y=y||e.event))return;const B=I||y.target||e,X=B[oe[y.type][ee?ie:ue]];if(X){const H=[];if(1===X.length){const k=P(X[0],B,y);k&&H.push(k)}else{const k=X.slice();for(let V=0;V<k.length&&(!y||!0!==y[Be]);V++){const E=P(k[V],B,y);E&&H.push(E)}}if(1===H.length)throw H[0];for(let k=0;k<H.length;k++){const V=H[k];t.nativeScheduleMicroTask(()=>{throw V})}}}const N=function(I){return O(this,I,!1)},j=function(I){return O(this,I,!0)};function J(I,y){if(!I)return!1;let ee=!0;y&&void 0!==y.useG&&(ee=y.useG);const B=y&&y.vh;let X=!0;y&&void 0!==y.chkDup&&(X=y.chkDup);let H=!1;y&&void 0!==y.rt&&(H=y.rt);let k=I;for(;k&&!k.hasOwnProperty(a);)k=Ie(k);if(!k&&I[a]&&(k=I),!k||k[T])return!1;const V=y&&y.eventNameToString,E={},x=k[T]=k[a],S=k[$(u)]=k[u],te=k[$(h)]=k[h],pe=k[$(f)]=k[f];let Y;y&&y.prepend&&(Y=k[$(y.prepend)]=k[y.prepend]);const n=ee?function(l){if(!E.isExisting)return x.call(E.target,E.eventName,E.capture?j:N,E.options)}:function(l){return x.call(E.target,E.eventName,l.invoke,E.options)},c=ee?function(l){if(!l.isRemoved){const p=oe[l.eventName];let w;p&&(w=p[l.capture?ie:ue]);const C=w&&l.target[w];if(C)for(let b=0;b<C.length;b++)if(C[b]===l){C.splice(b,1),l.isRemoved=!0,0===C.length&&(l.allRemoved=!0,l.target[w]=null);break}}if(l.allRemoved)return S.call(l.target,l.eventName,l.capture?j:N,l.options)}:function(l){return S.call(l.target,l.eventName,l.invoke,l.options)},D=y&&y.diff?y.diff:function(l,p){const w=typeof p;return"function"===w&&l.callback===p||"object"===w&&l.originalDelegate===p},Q=Zone[$("UNPATCHED_EVENTS")],_=e[$("PASSIVE_EVENTS")],d=function(l,p,w,C,b=!1,Z=!1){return function(){const M=this||e;let L=arguments[0];y&&y.transferEventName&&(L=y.transferEventName(L));let z=arguments[1];if(!z)return l.apply(this,arguments);if(De&&"uncaughtException"===L)return l.apply(this,arguments);let G=!1;if("function"!=typeof z){if(!z.handleEvent)return l.apply(this,arguments);G=!0}if(B&&!B(l,z,M,arguments))return;const we=ke&&!!_&&-1!==_.indexOf(L),ne=function W(l,p){return!ke&&"object"==typeof l&&l?!!l.capture:ke&&p?"boolean"==typeof l?{capture:l,passive:!0}:l?"object"==typeof l&&!1!==l.passive?{...l,passive:!0}:l:{passive:!0}:l}(arguments[2],we),Ge=ne&&"object"==typeof ne&&ne.signal&&"object"==typeof ne.signal?ne.signal:void 0;if(Ge?.aborted)return;if(Q)for(let Re=0;Re<Q.length;Re++)if(L===Q[Re])return we?l.call(M,L,z,ne):l.apply(this,arguments);const ht=!!ne&&("boolean"==typeof ne||ne.capture),gt=!(!ne||"object"!=typeof ne)&&ne.once,vt=Zone.current;let dt=oe[L];dt||(tt(L,V),dt=oe[L]);const Tt=dt[ht?ie:ue];let st,Ze=M[Tt],mt=!1;if(Ze){if(mt=!0,X)for(let Re=0;Re<Ze.length;Re++)if(D(Ze[Re],z))return}else Ze=M[Tt]=[];const yt=M.constructor.name,kt=He[yt];kt&&(st=kt[L]),st||(st=yt+p+(V?V(L):L)),E.options=ne,gt&&(E.options.once=!1),E.target=M,E.capture=ht,E.eventName=L,E.isExisting=mt;const Fe=ee?lt:void 0;Fe&&(Fe.taskData=E),Ge&&(E.options.signal=void 0);const Ee=vt.scheduleEventTask(st,z,Fe,w,C);return Ge&&(E.options.signal=Ge,l.call(Ge,"abort",()=>{Ee.zone.cancelTask(Ee)},{once:!0})),E.target=null,Fe&&(Fe.taskData=null),gt&&(ne.once=!0),!ke&&"boolean"==typeof Ee.options||(Ee.options=ne),Ee.target=M,Ee.capture=ht,Ee.eventName=L,G&&(Ee.originalDelegate=z),Z?Ze.unshift(Ee):Ze.push(Ee),b?M:void 0}};return k[a]=d(x,g,n,c,H),Y&&(k[m]=d(Y,A,function(l){return Y.call(E.target,E.eventName,l.invoke,E.options)},c,H,!0)),k[u]=function(){const l=this||e;let p=arguments[0];y&&y.transferEventName&&(p=y.transferEventName(p));const w=arguments[2],C=!!w&&("boolean"==typeof w||w.capture),b=arguments[1];if(!b)return S.apply(this,arguments);if(B&&!B(S,b,l,arguments))return;const Z=oe[p];let M;Z&&(M=Z[C?ie:ue]);const L=M&&l[M];if(L)for(let z=0;z<L.length;z++){const G=L[z];if(D(G,b))return L.splice(z,1),G.isRemoved=!0,0===L.length&&(G.allRemoved=!0,l[M]=null,"string"==typeof p)&&(l[Ce+"ON_PROPERTY"+p]=null),G.zone.cancelTask(G),H?l:void 0}return S.apply(this,arguments)},k[h]=function(){const l=this||e;let p=arguments[0];y&&y.transferEventName&&(p=y.transferEventName(p));const w=[],C=nt(l,V?V(p):p);for(let b=0;b<C.length;b++){const Z=C[b];w.push(Z.originalDelegate?Z.originalDelegate:Z.callback)}return w},k[f]=function(){const l=this||e;let p=arguments[0];if(p){y&&y.transferEventName&&(p=y.transferEventName(p));const w=oe[p];if(w){const Z=l[w[ue]],M=l[w[ie]];if(Z){const L=Z.slice();for(let z=0;z<L.length;z++){const G=L[z];this[u].call(this,p,G.originalDelegate?G.originalDelegate:G.callback,G.options)}}if(M){const L=M.slice();for(let z=0;z<L.length;z++){const G=L[z];this[u].call(this,p,G.originalDelegate?G.originalDelegate:G.callback,G.options)}}}}else{const w=Object.keys(l);for(let C=0;C<w.length;C++){const Z=et.exec(w[C]);let M=Z&&Z[1];M&&"removeListener"!==M&&this[f].call(this,M)}this[f].call(this,"removeListener")}if(H)return this},he(k[a],x),he(k[u],S),pe&&he(k[f],pe),te&&he(k[h],te),!0}let F=[];for(let I=0;I<r.length;I++)F[I]=J(r[I],o);return F}function nt(e,t){if(!t){const u=[];for(let h in e){const f=et.exec(h);let T=f&&f[1];if(T&&(!t||T===t)){const g=e[h];if(g)for(let m=0;m<g.length;m++)u.push(g[m])}}return u}let r=oe[t];r||(tt(t),r=oe[t]);const o=e[r[ue]],a=e[r[ie]];return o?a?o.concat(a):o.slice():a?a.slice():[]}function ut(e,t){const r=e.Event;r&&r.prototype&&t.patchMethod(r.prototype,"stopImmediatePropagation",o=>function(a,u){a[Be]=!0,o&&o.apply(a,u)})}function pt(e,t,r,o,a){const u=Zone.__symbol__(o);if(t[u])return;const h=t[u]=t[o];t[o]=function(f,T,g){return T&&T.prototype&&a.forEach(function(m){const A=`${r}.${o}::`+m,P=T.prototype;try{if(P.hasOwnProperty(m)){const O=e.ObjectGetOwnPropertyDescriptor(P,m);O&&O.value?(O.value=e.wrapWithCurrentZone(O.value,A),e._redefineProperty(T.prototype,m,O)):P[m]&&(P[m]=e.wrapWithCurrentZone(P[m],A))}else P[m]&&(P[m]=e.wrapWithCurrentZone(P[m],A))}catch{}}),h.call(t,f,T,g)},e.attachOriginToPatched(t[o],h)}function Ve(e,t,r){if(!r||0===r.length)return t;const o=r.filter(u=>u.target===e);if(!o||0===o.length)return t;const a=o[0].ignoreProperties;return t.filter(u=>-1===a.indexOf(u))}function ze(e,t,r,o){e&&Ue(e,Ve(e,t,r),o)}function rt(e){return Object.getOwnPropertyNames(e).filter(t=>t.startsWith("on")&&t.length>2).map(t=>t.substring(2))}Zone.__load_patch("util",(e,t,r)=>{const o=rt(e);r.patchOnProperties=Ue,r.patchMethod=ce,r.bindArguments=qe,r.patchMacroTask=ye;const a=t.__symbol__("BLACK_LISTED_EVENTS"),u=t.__symbol__("UNPATCHED_EVENTS");e[u]&&(e[a]=e[u]),e[a]&&(t[a]=t[u]=e[a]),r.patchEventPrototype=ut,r.patchEventTarget=_t,r.isIEOrEdge=at,r.ObjectDefineProperty=Se,r.ObjectGetOwnPropertyDescriptor=ge,r.ObjectCreate=Me,r.ArraySlice=We,r.patchClass=me,r.wrapWithCurrentZone=Pe,r.filterProperties=Ve,r.attachOriginToPatched=he,r._redefineProperty=Object.defineProperty,r.patchCallbacks=pt,r.getGlobalObjects=()=>({globalSources:He,zoneSymbolEventNames:oe,eventNames:o,isBrowser:je,isMix:Ke,isNode:De,TRUE_STR:ie,FALSE_STR:ue,ZONE_SYMBOL_PREFIX:Ce,ADD_EVENT_LISTENER_STR:Le,REMOVE_EVENT_LISTENER_STR:Te})});const ve=$("zoneTask");function be(e,t,r,o){let a=null,u=null;r+=o;const h={};function f(g){const m=g.data;return m.args[0]=function(){return g.invoke.apply(this,arguments)},m.handleId=a.apply(e,m.args),g}function T(g){return u.call(e,g.data.handleId)}a=ce(e,t+=o,g=>function(m,A){if("function"==typeof A[0]){const P={isPeriodic:"Interval"===o,delay:"Timeout"===o||"Interval"===o?A[1]||0:void 0,args:A},O=A[0];A[0]=function(){try{return O.apply(this,arguments)}finally{P.isPeriodic||("number"==typeof P.handleId?delete h[P.handleId]:P.handleId&&(P.handleId[ve]=null))}};const N=Ae(t,A[0],P,f,T);if(!N)return N;const j=N.data.handleId;return"number"==typeof j?h[j]=N:j&&(j[ve]=N),j&&j.ref&&j.unref&&"function"==typeof j.ref&&"function"==typeof j.unref&&(N.ref=j.ref.bind(j),N.unref=j.unref.bind(j)),"number"==typeof j||j?j:N}return g.apply(e,A)}),u=ce(e,r,g=>function(m,A){const P=A[0];let O;"number"==typeof P?O=h[P]:(O=P&&P[ve],O||(O=P)),O&&"string"==typeof O.type?"notScheduled"!==O.state&&(O.cancelFn&&O.data.isPeriodic||0===O.runCount)&&("number"==typeof P?delete h[P]:P&&(P[ve]=null),O.zone.cancelTask(O)):g.apply(e,A)})}Zone.__load_patch("legacy",e=>{const t=e[Zone.__symbol__("legacyPatch")];t&&t()}),Zone.__load_patch("timers",e=>{const t="set",r="clear";be(e,t,r,"Timeout"),be(e,t,r,"Interval"),be(e,t,r,"Immediate")}),Zone.__load_patch("requestAnimationFrame",e=>{be(e,"request","cancel","AnimationFrame"),be(e,"mozRequest","mozCancel","AnimationFrame"),be(e,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",(e,t)=>{const r=["alert","prompt","confirm"];for(let o=0;o<r.length;o++)ce(e,r[o],(u,h,f)=>function(T,g){return t.current.run(u,e,g,f)})}),Zone.__load_patch("EventTarget",(e,t,r)=>{(function s(e,t){t.patchEventPrototype(e,t)})(e,r),function i(e,t){if(Zone[t.symbol("patchEventTarget")])return;const{eventNames:r,zoneSymbolEventNames:o,TRUE_STR:a,FALSE_STR:u,ZONE_SYMBOL_PREFIX:h}=t.getGlobalObjects();for(let T=0;T<r.length;T++){const g=r[T],P=h+(g+u),O=h+(g+a);o[g]={},o[g][u]=P,o[g][a]=O}const f=e.EventTarget;f&&f.prototype&&t.patchEventTarget(e,t,[f&&f.prototype])}(e,r);const o=e.XMLHttpRequestEventTarget;o&&o.prototype&&r.patchEventTarget(e,r,[o.prototype])}),Zone.__load_patch("MutationObserver",(e,t,r)=>{me("MutationObserver"),me("WebKitMutationObserver")}),Zone.__load_patch("IntersectionObserver",(e,t,r)=>{me("IntersectionObserver")}),Zone.__load_patch("FileReader",(e,t,r)=>{me("FileReader")}),Zone.__load_patch("on_property",(e,t,r)=>{!function Et(e,t){if(De&&!Ke||Zone[e.symbol("patchEvents")])return;const r=t.__Zone_ignore_on_properties;let o=[];if(je){const a=window;o=o.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const u=function Qe(){try{const e=fe.navigator.userAgent;if(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:a,ignoreProperties:["error"]}]:[];ze(a,rt(a),r&&r.concat(u),Ie(a))}o=o.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let a=0;a<o.length;a++){const u=t[o[a]];u&&u.prototype&&ze(u.prototype,rt(u.prototype),r)}}(r,e)}),Zone.__load_patch("customElements",(e,t,r)=>{!function ot(e,t){const{isBrowser:r,isMix:o}=t.getGlobalObjects();(r||o)&&e.customElements&&"customElements"in e&&t.patchCallbacks(t,e.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"])}(e,r)}),Zone.__load_patch("XHR",(e,t)=>{!function T(g){const m=g.XMLHttpRequest;if(!m)return;const A=m.prototype;let O=A[le],N=A[ae];if(!O){const E=g.XMLHttpRequestEventTarget;if(E){const x=E.prototype;O=x[le],N=x[ae]}}const j="readystatechange",J="scheduled";function F(E){const x=E.data,S=x.target;S[u]=!1,S[f]=!1;const te=S[a];O||(O=S[le],N=S[ae]),te&&N.call(S,j,te);const pe=S[a]=()=>{if(S.readyState===S.DONE)if(!x.aborted&&S[u]&&E.state===J){const W=S[t.__symbol__("loadfalse")];if(0!==S.status&&W&&W.length>0){const de=E.invoke;E.invoke=function(){const se=S[t.__symbol__("loadfalse")];for(let q=0;q<se.length;q++)se[q]===E&&se.splice(q,1);!x.aborted&&E.state===J&&de.call(E)},W.push(E)}else E.invoke()}else!x.aborted&&!1===S[u]&&(S[f]=!0)};return O.call(S,j,pe),S[r]||(S[r]=E),k.apply(S,x.args),S[u]=!0,E}function I(){}function y(E){const x=E.data;return x.aborted=!0,V.apply(x.target,x.args)}const ee=ce(A,"open",()=>function(E,x){return E[o]=0==x[2],E[h]=x[1],ee.apply(E,x)}),X=$("fetchTaskAborting"),H=$("fetchTaskScheduling"),k=ce(A,"send",()=>function(E,x){if(!0===t.current[H]||E[o])return k.apply(E,x);{const S={target:E,url:E[h],isPeriodic:!1,args:x,aborted:!1},te=Ae("XMLHttpRequest.send",I,S,F,y);E&&!0===E[f]&&!S.aborted&&te.state===J&&te.invoke()}}),V=ce(A,"abort",()=>function(E,x){const S=function P(E){return E[r]}(E);if(S&&"string"==typeof S.type){if(null==S.cancelFn||S.data&&S.data.aborted)return;S.zone.cancelTask(S)}else if(!0===t.current[X])return V.apply(E,x)})}(e);const r=$("xhrTask"),o=$("xhrSync"),a=$("xhrListener"),u=$("xhrScheduled"),h=$("xhrURL"),f=$("xhrErrorBeforeScheduled")}),Zone.__load_patch("geolocation",e=>{e.navigator&&e.navigator.geolocation&&function ct(e,t){const r=e.constructor.name;for(let o=0;o<t.length;o++){const a=t[o],u=e[a];if(u){if(!Xe(ge(e,a)))continue;e[a]=(f=>{const T=function(){return f.apply(this,qe(arguments,r+"."+a))};return he(T,f),T})(u)}}}(e.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",(e,t)=>{function r(o){return function(a){nt(e,o).forEach(h=>{const f=e.PromiseRejectionEvent;if(f){const T=new f(o,{promise:a.promise,reason:a.rejection});h.invoke(T)}})}}e.PromiseRejectionEvent&&(t[$("unhandledPromiseRejectionHandler")]=r("unhandledrejection"),t[$("rejectionHandledHandler")]=r("rejectionhandled"))}),Zone.__load_patch("queueMicrotask",(e,t,r)=>{!function ft(e,t){t.patchMethod(e,"queueMicrotask",r=>function(o,a){Zone.current.scheduleMicroTask("queueMicrotask",a[0])})}(e,r)})}},ge=>{ge(ge.s=5044)}]);