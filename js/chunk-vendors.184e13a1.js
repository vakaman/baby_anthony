"use strict";(self["webpackChunkbaby_anthony"]=self["webpackChunkbaby_anthony"]||[]).push([[504],{5524:function(){},4046:function(e,t,n){n.d(t,{Am:function(){return W},FA:function(){return D},Fy:function(){return w},I9:function(){return B},Im:function(){return L},Ku:function(){return H},T9:function(){return g},Tj:function(){return v},Uj:function(){return l},XA:function(){return y},ZQ:function(){return S},bD:function(){return N},c1:function(){return C},cY:function(){return b},eX:function(){return F},g:function(){return V},hp:function(){return j},jZ:function(){return E},lT:function(){return x},lV:function(){return I},nr:function(){return T},sr:function(){return k},tD:function(){return $},u:function(){return u},yU:function(){return m},zW:function(){return A}});n(4114),n(8992),n(3949),n(4979);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):55296===(64512&o)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++r)),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},o=function(e){const t=[];let n=0,r=0;while(n<e.length){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const i=e[n++];t[r++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){const i=e[n++],a=e[n++],s=e[n++],l=((7&o)<<18|(63&i)<<12|(63&a)<<6|63&s)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(1023&l))}else{const i=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&a)}}return t.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<e.length;o+=3){const t=e[o],i=o+1<e.length,a=i?e[o+1]:0,s=o+2<e.length,l=s?e[o+2]:0,u=t>>2,c=(3&t)<<4|a>>4;let d=(15&a)<<2|l>>6,h=63&l;s||(h=64,i||(d=64)),r.push(n[u],n[c],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):o(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<e.length;){const t=n[e.charAt(o++)],i=o<e.length,s=i?n[e.charAt(o)]:0;++o;const l=o<e.length,u=l?n[e.charAt(o)]:64;++o;const c=o<e.length,d=c?n[e.charAt(o)]:64;if(++o,null==t||null==s||null==u||null==d)throw new a;const h=t<<2|s>>4;if(r.push(h),64!==u){const e=s<<4&240|u>>2;if(r.push(e),64!==d){const e=u<<6&192|d;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const s=function(e){const t=r(e);return i.encodeByteArray(t,!0)},l=function(e){return s(e).replace(/\./g,"")},u=function(e){try{return i.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function c(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d=()=>c().__FIREBASE_DEFAULTS__,h=()=>{if("undefined"===typeof process)return;const e={VUE_APP_FIREBASE_PROJECT_ID:"babyanthony-36536",VUE_APP_FIREBASE_APP_ID:"1:13282213072:web:1c7bd3ae98f90769b632d5",VUE_APP_FIREBASE_API_KEY:"AIzaSyAASkIK6WN3FdeVvjQpxiOlWFuruQESMjo",VUE_APP_FIREBASE_MESSAGING_SENDER_ID:"13282213072",VUE_APP_FIREBASE_STORAGE_BUCKET:"babyanthony-36536.firebasestorage.app",VUE_APP_FIREBASE_AUTH_DOMAIN:"babyanthony-36536.firebaseapp.com",NODE_ENV:"production",BASE_URL:"/baby_anthony/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},f=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&u(e[1]);return t&&JSON.parse(t)},p=()=>{try{return d()||h()||f()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},v=e=>{var t,n;return null===(n=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},m=e=>{const t=v(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},g=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config},y=e=>{var t;return null===(t=p())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class b{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",o=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),s="";return[l(JSON.stringify(n)),l(JSON.stringify(a)),s].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function E(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(S())}function _(){var e;const t=null===(e=p())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function C(){return"undefined"!==typeof navigator&&"Cloudflare-Workers"===navigator.userAgent}function k(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function I(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function x(){const e=S();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function T(){return!_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function A(){try{return"object"===typeof indexedDB}catch(e){return!1}}function F(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var e;t((null===(e=o.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const R="FirebaseError";class V extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=R,Object.setPrototypeOf(this,V.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,D.prototype.create)}}class D{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],i=o?P(o,n):"Error",a=`${this.serviceName}: ${i} (${r}).`,s=new V(r,a,n);return s}}function P(e,t){return e.replace(O,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const O=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function N(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const o of n){if(!r.includes(o))return!1;const n=e[o],i=t[o];if(M(n)&&M(i)){if(!N(n,i))return!1}else if(n!==i)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function M(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function W(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function B(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function j(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e,t){const n=new U(e,t);return n.subscribe.bind(n)}class U{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=z(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=K),void 0===r.error&&(r.error=K),void 0===r.complete&&(r.complete=K);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),o}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function z(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function K(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function H(e){return e&&e._delegate?e._delegate:e}},144:function(e,t,n){n.d(t,{C4:function(){return I},EW:function(){return Ke},Gc:function(){return we},IG:function(){return Te},IJ:function(){return De},KR:function(){return Ve},Kh:function(){return be},Pr:function(){return Me},QW:function(){return We},R1:function(){return Le},X2:function(){return d},bl:function(){return x},fE:function(){return ke},g8:function(){return _e},hV:function(){return Je},hZ:function(){return M},i9:function(){return Re},jr:function(){return u},ju:function(){return Ie},lJ:function(){return Ae},lW:function(){return $e},qA:function(){return j},tB:function(){return Se},u4:function(){return N},uY:function(){return s},ux:function(){return xe},wB:function(){return Xe},yC:function(){return a}});n(4114),n(9678),n(7145),n(1658),n(9479),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8992),n(4520),n(3949),n(1454),n(7550);var r=n(4232);let o,i;class a{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=o,!e&&o&&(this.index=(o.scopes||(o.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){let e,t;if(this._isPaused=!0,this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){let e,t;if(this._isPaused=!1,this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=o;try{return o=this,e()}finally{o=t}}else 0}on(){o=this}off(){o=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function s(e){return new a(e)}function l(){return o}function u(e,t=!1){o&&o.cleanups.push(e)}const c=new WeakSet;class d{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,o&&o.active&&o.effects.push(this)}pause(){this.flags|=64}resume(){64&this.flags&&(this.flags&=-65,c.has(this)&&(c.delete(this),this.trigger()))}notify(){2&this.flags&&!(32&this.flags)||8&this.flags||v(this)}run(){if(!(1&this.flags))return this.fn();this.flags|=2,T(this),y(this);const e=i,t=C;i=this,C=!0;try{return this.fn()}finally{0,b(this),i=e,C=t,this.flags&=-3}}stop(){if(1&this.flags){for(let e=this.deps;e;e=e.nextDep)E(e);this.deps=this.depsTail=void 0,T(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){64&this.flags?c.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){w(this)&&this.run()}get dirty(){return w(this)}}let h,f,p=0;function v(e,t=!1){if(e.flags|=8,t)return e.next=f,void(f=e);e.next=h,h=e}function m(){p++}function g(){if(--p>0)return;if(f){let e=f;f=void 0;while(e){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;while(h){let n=h;h=void 0;while(n){const r=n.next;if(n.next=void 0,n.flags&=-9,1&n.flags)try{n.trigger()}catch(t){e||(e=t)}n=r}}if(e)throw e}function y(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function b(e){let t,n=e.depsTail,r=n;while(r){const e=r.prevDep;-1===r.version?(r===n&&(n=e),E(r),_(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function w(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(S(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function S(e){if(4&e.flags&&!(16&e.flags))return;if(e.flags&=-17,e.globalVersion===A)return;e.globalVersion=A;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!w(e))return void(e.flags&=-3);const n=i,o=C;i=e,C=!0;try{y(e);const n=e.fn(e._value);(0===t.version||(0,r.$H)(n,e._value))&&(e._value=n,t.version++)}catch(a){throw t.version++,a}finally{i=n,C=o,b(e),e.flags&=-3}}function E(e,t=!1){const{dep:n,prevSub:r,nextSub:o}=e;if(r&&(r.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)E(e,!0)}t||--n.sc||!n.map||n.map.delete(n.key)}function _(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let C=!0;const k=[];function I(){k.push(C),C=!1}function x(){const e=k.pop();C=void 0===e||e}function T(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const e=i;i=void 0;try{t()}finally{i=e}}}let A=0;class F{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class R{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!i||!C||i===this.computed)return;let t=this.activeLink;if(void 0===t||t.sub!==i)t=this.activeLink=new F(i,this),i.deps?(t.prevDep=i.depsTail,i.depsTail.nextDep=t,i.depsTail=t):i.deps=i.depsTail=t,V(t);else if(-1===t.version&&(t.version=this.version,t.nextDep)){const e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=i.depsTail,t.nextDep=void 0,i.depsTail.nextDep=t,i.depsTail=t,i.deps===t&&(i.deps=e)}return t}trigger(e){this.version++,A++,this.notify(e)}notify(e){m();try{0;for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{g()}}}function V(e){if(e.dep.sc++,4&e.sub.flags){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)V(e)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const D=new WeakMap,P=Symbol(""),O=Symbol(""),L=Symbol("");function N(e,t,n){if(C&&i){let t=D.get(e);t||D.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new R),r.map=t,r.key=n),r.track()}}function M(e,t,n,o,i,a){const s=D.get(e);if(!s)return void A++;const l=e=>{e&&e.trigger()};if(m(),"clear"===t)s.forEach(l);else{const i=(0,r.cy)(e),a=i&&(0,r.yI)(n);if(i&&"length"===n){const e=Number(o);s.forEach(((t,n)=>{("length"===n||n===L||!(0,r.Bm)(n)&&n>=e)&&l(t)}))}else switch((void 0!==n||s.has(void 0))&&l(s.get(n)),a&&l(s.get(L)),t){case"add":i?a&&l(s.get("length")):(l(s.get(P)),(0,r.CE)(e)&&l(s.get(O)));break;case"delete":i||(l(s.get(P)),(0,r.CE)(e)&&l(s.get(O)));break;case"set":(0,r.CE)(e)&&l(s.get(P));break}}g()}function W(e,t){const n=D.get(e);return n&&n.get(t)}function B(e){const t=xe(e);return t===e?t:(N(t,"iterate",L),ke(e)?t:t.map(Ae))}function j(e){return N(e=xe(e),"iterate",L),e}const $={__proto__:null,[Symbol.iterator](){return U(this,Symbol.iterator,Ae)},concat(...e){return B(this).concat(...e.map((e=>(0,r.cy)(e)?B(e):e)))},entries(){return U(this,"entries",(e=>(e[1]=Ae(e[1]),e)))},every(e,t){return K(this,"every",e,t,void 0,arguments)},filter(e,t){return K(this,"filter",e,t,(e=>e.map(Ae)),arguments)},find(e,t){return K(this,"find",e,t,Ae,arguments)},findIndex(e,t){return K(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return K(this,"findLast",e,t,Ae,arguments)},findLastIndex(e,t){return K(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return K(this,"forEach",e,t,void 0,arguments)},includes(...e){return q(this,"includes",e)},indexOf(...e){return q(this,"indexOf",e)},join(e){return B(this).join(e)},lastIndexOf(...e){return q(this,"lastIndexOf",e)},map(e,t){return K(this,"map",e,t,void 0,arguments)},pop(){return G(this,"pop")},push(...e){return G(this,"push",e)},reduce(e,...t){return H(this,"reduce",e,t)},reduceRight(e,...t){return H(this,"reduceRight",e,t)},shift(){return G(this,"shift")},some(e,t){return K(this,"some",e,t,void 0,arguments)},splice(...e){return G(this,"splice",e)},toReversed(){return B(this).toReversed()},toSorted(e){return B(this).toSorted(e)},toSpliced(...e){return B(this).toSpliced(...e)},unshift(...e){return G(this,"unshift",e)},values(){return U(this,"values",Ae)}};function U(e,t,n){const r=j(e),o=r[t]();return r===e||ke(e)||(o._next=o.next,o.next=()=>{const e=o._next();return e.value&&(e.value=n(e.value)),e}),o}const z=Array.prototype;function K(e,t,n,r,o,i){const a=j(e),s=a!==e&&!ke(e),l=a[t];if(l!==z[t]){const t=l.apply(e,i);return s?Ae(t):t}let u=n;a!==e&&(s?u=function(t,r){return n.call(this,Ae(t),r,e)}:n.length>2&&(u=function(t,r){return n.call(this,t,r,e)}));const c=l.call(a,u,r);return s&&o?o(c):c}function H(e,t,n,r){const o=j(e);let i=n;return o!==e&&(ke(e)?n.length>3&&(i=function(t,r,o){return n.call(this,t,r,o,e)}):i=function(t,r,o){return n.call(this,t,Ae(r),o,e)}),o[t](i,...r)}function q(e,t,n){const r=xe(e);N(r,"iterate",L);const o=r[t](...n);return-1!==o&&!1!==o||!Ie(n[0])?o:(n[0]=xe(n[0]),r[t](...n))}function G(e,t,n=[]){I(),m();const r=xe(e)[t].apply(e,n);return g(),x(),r}const Y=(0,r.pD)("__proto__,__v_isRef,__isVue"),X=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.Bm));function J(e){(0,r.Bm)(e)||(e=String(e));const t=xe(this);return N(t,"has",e),t.hasOwnProperty(e)}class Q{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){const o=this._isReadonly,i=this._isShallow;if("__v_isReactive"===t)return!o;if("__v_isReadonly"===t)return o;if("__v_isShallow"===t)return i;if("__v_raw"===t)return n===(o?i?me:ve:i?pe:fe).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const a=(0,r.cy)(e);if(!o){let e;if(a&&(e=$[t]))return e;if("hasOwnProperty"===t)return J}const s=Reflect.get(e,t,Re(e)?e:n);return((0,r.Bm)(t)?X.has(t):Y(t))?s:(o||N(e,"get",t),i?s:Re(s)?a&&(0,r.yI)(t)?s:s.value:(0,r.Gv)(s)?o?Se(s):be(s):s)}}class Z extends Q{constructor(e=!1){super(!1,e)}set(e,t,n,o){let i=e[t];if(!this._isShallow){const t=Ce(i);if(ke(n)||Ce(n)||(i=xe(i),n=xe(n)),!(0,r.cy)(e)&&Re(i)&&!Re(n))return!t&&(i.value=n,!0)}const a=(0,r.cy)(e)&&(0,r.yI)(t)?Number(t)<e.length:(0,r.$3)(e,t),s=Reflect.set(e,t,n,Re(e)?e:o);return e===xe(o)&&(a?(0,r.$H)(n,i)&&M(e,"set",t,n,i):M(e,"add",t,n)),s}deleteProperty(e,t){const n=(0,r.$3)(e,t),o=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&M(e,"delete",t,void 0,o),i}has(e,t){const n=Reflect.has(e,t);return(0,r.Bm)(t)&&X.has(t)||N(e,"has",t),n}ownKeys(e){return N(e,"iterate",(0,r.cy)(e)?"length":P),Reflect.ownKeys(e)}}class ee extends Q{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const te=new Z,ne=new ee,re=new Z(!0),oe=e=>e,ie=e=>Reflect.getPrototypeOf(e);function ae(e,t,n){return function(...o){const i=this["__v_raw"],a=xe(i),s=(0,r.CE)(a),l="entries"===e||e===Symbol.iterator&&s,u="keys"===e&&s,c=i[e](...o),d=n?oe:t?Fe:Ae;return!t&&N(a,"iterate",u?O:P),{next(){const{value:e,done:t}=c.next();return t?{value:e,done:t}:{value:l?[d(e[0]),d(e[1])]:d(e),done:t}},[Symbol.iterator](){return this}}}}function se(e){return function(...t){return"delete"!==e&&("clear"===e?void 0:this)}}function le(e,t){const n={get(n){const o=this["__v_raw"],i=xe(o),a=xe(n);e||((0,r.$H)(n,a)&&N(i,"get",n),N(i,"get",a));const{has:s}=ie(i),l=t?oe:e?Fe:Ae;return s.call(i,n)?l(o.get(n)):s.call(i,a)?l(o.get(a)):void(o!==i&&o.get(n))},get size(){const t=this["__v_raw"];return!e&&N(xe(t),"iterate",P),Reflect.get(t,"size",t)},has(t){const n=this["__v_raw"],o=xe(n),i=xe(t);return e||((0,r.$H)(t,i)&&N(o,"has",t),N(o,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){const o=this,i=o["__v_raw"],a=xe(i),s=t?oe:e?Fe:Ae;return!e&&N(a,"iterate",P),i.forEach(((e,t)=>n.call(r,s(e),s(t),o)))}};(0,r.X$)(n,e?{add:se("add"),set:se("set"),delete:se("delete"),clear:se("clear")}:{add(e){t||ke(e)||Ce(e)||(e=xe(e));const n=xe(this),r=ie(n),o=r.has.call(n,e);return o||(n.add(e),M(n,"add",e,e)),this},set(e,n){t||ke(n)||Ce(n)||(n=xe(n));const o=xe(this),{has:i,get:a}=ie(o);let s=i.call(o,e);s||(e=xe(e),s=i.call(o,e));const l=a.call(o,e);return o.set(e,n),s?(0,r.$H)(n,l)&&M(o,"set",e,n,l):M(o,"add",e,n),this},delete(e){const t=xe(this),{has:n,get:r}=ie(t);let o=n.call(t,e);o||(e=xe(e),o=n.call(t,e));const i=r?r.call(t,e):void 0,a=t.delete(e);return o&&M(t,"delete",e,void 0,i),a},clear(){const e=xe(this),t=0!==e.size,n=void 0,r=e.clear();return t&&M(e,"clear",void 0,void 0,n),r}});const o=["keys","values","entries",Symbol.iterator];return o.forEach((r=>{n[r]=ae(r,e,t)})),n}function ue(e,t){const n=le(e,t);return(t,o,i)=>"__v_isReactive"===o?!e:"__v_isReadonly"===o?e:"__v_raw"===o?t:Reflect.get((0,r.$3)(n,o)&&o in t?n:t,o,i)}const ce={get:ue(!1,!1)},de={get:ue(!1,!0)},he={get:ue(!0,!1)};const fe=new WeakMap,pe=new WeakMap,ve=new WeakMap,me=new WeakMap;function ge(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ye(e){return e["__v_skip"]||!Object.isExtensible(e)?0:ge((0,r.Zf)(e))}function be(e){return Ce(e)?e:Ee(e,!1,te,ce,fe)}function we(e){return Ee(e,!1,re,de,pe)}function Se(e){return Ee(e,!0,ne,he,ve)}function Ee(e,t,n,o,i){if(!(0,r.Gv)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const a=i.get(e);if(a)return a;const s=ye(e);if(0===s)return e;const l=new Proxy(e,2===s?o:n);return i.set(e,l),l}function _e(e){return Ce(e)?_e(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Ce(e){return!(!e||!e["__v_isReadonly"])}function ke(e){return!(!e||!e["__v_isShallow"])}function Ie(e){return!!e&&!!e["__v_raw"]}function xe(e){const t=e&&e["__v_raw"];return t?xe(t):e}function Te(e){return!(0,r.$3)(e,"__v_skip")&&Object.isExtensible(e)&&(0,r.yQ)(e,"__v_skip",!0),e}const Ae=e=>(0,r.Gv)(e)?be(e):e,Fe=e=>(0,r.Gv)(e)?Se(e):e;function Re(e){return!!e&&!0===e["__v_isRef"]}function Ve(e){return Pe(e,!1)}function De(e){return Pe(e,!0)}function Pe(e,t){return Re(e)?e:new Oe(e,t)}class Oe{constructor(e,t){this.dep=new R,this["__v_isRef"]=!0,this["__v_isShallow"]=!1,this._rawValue=t?e:xe(e),this._value=t?e:Ae(e),this["__v_isShallow"]=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,n=this["__v_isShallow"]||ke(e)||Ce(e);e=n?e:xe(e),(0,r.$H)(e,t)&&(this._rawValue=e,this._value=n?e:Ae(e),this.dep.trigger())}}function Le(e){return Re(e)?e.value:e}const Ne={get:(e,t,n)=>"__v_raw"===t?e:Le(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return Re(o)&&!Re(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function Me(e){return _e(e)?e:new Proxy(e,Ne)}function We(e){const t=(0,r.cy)(e)?new Array(e.length):{};for(const n in e)t[n]=Ue(e,n);return t}class Be{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this["__v_isRef"]=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=void 0===e?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return W(xe(this._object),this._key)}}class je{constructor(e){this._getter=e,this["__v_isRef"]=!0,this["__v_isReadonly"]=!0,this._value=void 0}get value(){return this._value=this._getter()}}function $e(e,t,n){return Re(e)?e:(0,r.Tn)(e)?new je(e):(0,r.Gv)(e)&&arguments.length>1?Ue(e,t,n):Ve(e)}function Ue(e,t,n){const r=e[t];return Re(r)?r:new Be(e,t,n)}class ze{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new R(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=A-1,this.next=void 0,this.effect=this,this["__v_isReadonly"]=!t,this.isSSR=n}notify(){if(this.flags|=16,!(8&this.flags||i===this))return v(this,!0),!0}get value(){const e=this.dep.track();return S(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ke(e,t,n=!1){let o,i;(0,r.Tn)(e)?o=e:(o=e.get,i=e.set);const a=new ze(o,i,n);return a}const He={},qe=new WeakMap;let Ge;function Ye(e,t=!1,n=Ge){if(n){let t=qe.get(n);t||qe.set(n,t=[]),t.push(e)}else 0}function Xe(e,t,n=r.MZ){const{immediate:o,deep:i,once:a,scheduler:s,augmentJob:u,call:c}=n,h=e=>i?e:ke(e)||!1===i||0===i?Je(e,1):Je(e);let f,p,v,m,g=!1,y=!1;if(Re(e)?(p=()=>e.value,g=ke(e)):_e(e)?(p=()=>h(e),g=!0):(0,r.cy)(e)?(y=!0,g=e.some((e=>_e(e)||ke(e))),p=()=>e.map((e=>Re(e)?e.value:_e(e)?h(e):(0,r.Tn)(e)?c?c(e,2):e():void 0))):p=(0,r.Tn)(e)?t?c?()=>c(e,2):e:()=>{if(v){I();try{v()}finally{x()}}const t=Ge;Ge=f;try{return c?c(e,3,[m]):e(m)}finally{Ge=t}}:r.tE,t&&i){const e=p,t=!0===i?1/0:i;p=()=>Je(e(),t)}const b=l(),w=()=>{f.stop(),b&&(0,r.TF)(b.effects,f)};if(a&&t){const e=t;t=(...t)=>{e(...t),w()}}let S=y?new Array(e.length).fill(He):He;const E=e=>{if(1&f.flags&&(f.dirty||e))if(t){const e=f.run();if(i||g||(y?e.some(((e,t)=>(0,r.$H)(e,S[t]))):(0,r.$H)(e,S))){v&&v();const n=Ge;Ge=f;try{const n=[e,S===He?void 0:y&&S[0]===He?[]:S,m];c?c(t,3,n):t(...n),S=e}finally{Ge=n}}}else f.run()};return u&&u(E),f=new d(p),f.scheduler=s?()=>s(E,!1):E,m=e=>Ye(e,!1,f),v=f.onStop=()=>{const e=qe.get(f);if(e){if(c)c(e,4);else for(const t of e)t();qe.delete(f)}},t?o?E(!0):S=f.run():s?s(E.bind(null,!0),!0):f.run(),w.pause=f.pause.bind(f),w.resume=f.resume.bind(f),w.stop=w,w}function Je(e,t=1/0,n){if(t<=0||!(0,r.Gv)(e)||e["__v_skip"])return e;if(n=n||new Set,n.has(e))return e;if(n.add(e),t--,Re(e))Je(e.value,t,n);else if((0,r.cy)(e))for(let r=0;r<e.length;r++)Je(e[r],t,n);else if((0,r.vM)(e)||(0,r.CE)(e))e.forEach((e=>{Je(e,t,n)}));else if((0,r.Qd)(e)){for(const r in e)Je(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Je(e[r],t,n)}return e}},6768:function(e,t,n){n.d(t,{$u:function(){return Ee},$y:function(){return De},CE:function(){return mn},Df:function(){return oe},E3:function(){return In},EW:function(){return nr},EY:function(){return an},FK:function(){return on},Gt:function(){return lt},Gy:function(){return H},Ic:function(){return Se},Im:function(){return j},K9:function(){return Ft},KC:function(){return be},Lk:function(){return En},MZ:function(){return re},Mw:function(){return sn},OW:function(){return ee},Q3:function(){return Tn},QP:function(){return G},R8:function(){return ir},WQ:function(){return ut},Wv:function(){return gn},Y4:function(){return he},bF:function(){return _n},bo:function(){return A},dY:function(){return m},eW:function(){return xn},g2:function(){return Re},gN:function(){return Pe},h:function(){return rr},hi:function(){return Ce},n:function(){return de},nI:function(){return Mn},nT:function(){return jt},pI:function(){return Ne},pM:function(){return ie},pR:function(){return Q},qL:function(){return a},sV:function(){return we},uX:function(){return dn},v6:function(){return Vn},vv:function(){return yn},wB:function(){return $t},xo:function(){return _e}});n(4114),n(9479),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8992),n(3215),n(4520),n(3949),n(1454),n(8872),n(7550);var r=n(144),o=n(4232);function i(e,t,n,r){try{return r?e(...r):e()}catch(o){s(o,t,n)}}function a(e,t,n,r){if((0,o.Tn)(e)){const a=i(e,t,n,r);return a&&(0,o.yL)(a)&&a.catch((e=>{s(e,t,n)})),a}if((0,o.cy)(e)){const o=[];for(let i=0;i<e.length;i++)o.push(a(e[i],t,n,r));return o}}function s(e,t,n,a=!0){const s=t?t.vnode:null,{errorHandler:u,throwUnhandledErrorInProduction:c}=t&&t.appContext.config||o.MZ;if(t){let o=t.parent;const a=t.proxy,s=`https://vuejs.org/error-reference/#runtime-${n}`;while(o){const t=o.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,a,s))return;o=o.parent}if(u)return(0,r.C4)(),i(u,null,10,[e,a,s]),void(0,r.bl)()}l(e,n,s,a,c)}function l(e,t,n,r=!0,o=!1){if(o)throw e;console.error(e)}const u=[];let c=-1;const d=[];let h=null,f=0;const p=Promise.resolve();let v=null;function m(e){const t=v||p;return e?t.then(this?e.bind(this):e):t}function g(e){let t=c+1,n=u.length;while(t<n){const r=t+n>>>1,o=u[r],i=_(o);i<e||i===e&&2&o.flags?t=r+1:n=r}return t}function y(e){if(!(1&e.flags)){const t=_(e),n=u[u.length-1];!n||!(2&e.flags)&&t>=_(n)?u.push(e):u.splice(g(t),0,e),e.flags|=1,b()}}function b(){v||(v=p.then(C))}function w(e){(0,o.cy)(e)?d.push(...e):h&&-1===e.id?h.splice(f+1,0,e):1&e.flags||(d.push(e),e.flags|=1),b()}function S(e,t,n=c+1){for(0;n<u.length;n++){const t=u[n];if(t&&2&t.flags){if(e&&t.id!==e.uid)continue;0,u.splice(n,1),n--,4&t.flags&&(t.flags&=-2),t(),4&t.flags||(t.flags&=-2)}}}function E(e){if(d.length){const e=[...new Set(d)].sort(((e,t)=>_(e)-_(t)));if(d.length=0,h)return void h.push(...e);for(h=e,f=0;f<h.length;f++){const e=h[f];0,4&e.flags&&(e.flags&=-2),8&e.flags||e(),e.flags&=-2}h=null,f=0}}const _=e=>null==e.id?2&e.flags?-1:1/0:e.id;function C(e){o.tE;try{for(c=0;c<u.length;c++){const e=u[c];!e||8&e.flags||(4&e.flags&&(e.flags&=-2),i(e,e.i,e.i?15:14),4&e.flags||(e.flags&=-2))}}finally{for(;c<u.length;c++){const e=u[c];e&&(e.flags&=-2)}c=-1,u.length=0,E(e),v=null,(u.length||d.length)&&C(e)}}let k=null,I=null;function x(e){const t=k;return k=e,I=e&&e.type.__scopeId||null,t}function T(e,t=k,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&pn(-1);const o=x(t);let i;try{i=e(...n)}finally{x(o),r._d&&pn(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function A(e,t){if(null===k)return e;const n=Zn(k),i=e.dirs||(e.dirs=[]);for(let a=0;a<t.length;a++){let[e,s,l,u=o.MZ]=t[a];e&&((0,o.Tn)(e)&&(e={mounted:e,updated:e}),e.deep&&(0,r.hV)(s),i.push({dir:e,instance:n,value:s,oldValue:void 0,arg:l,modifiers:u}))}return e}function F(e,t,n,o){const i=e.dirs,s=t&&t.dirs;for(let l=0;l<i.length;l++){const u=i[l];s&&(u.oldValue=s[l].value);let c=u.dir[o];c&&((0,r.C4)(),a(c,n,8,[e.el,u,e,t]),(0,r.bl)())}}const R=Symbol("_vte"),V=e=>e.__isTeleport,D=e=>e&&(e.disabled||""===e.disabled),P=e=>e&&(e.defer||""===e.defer),O=e=>"undefined"!==typeof SVGElement&&e instanceof SVGElement,L=e=>"function"===typeof MathMLElement&&e instanceof MathMLElement,N=(e,t)=>{const n=e&&e.to;if((0,o.Kg)(n)){if(t){const e=t(n);return e}return null}return n},M={name:"Teleport",__isTeleport:!0,process(e,t,n,r,o,i,a,s,l,u){const{mc:c,pc:d,pbc:h,o:{insert:f,querySelector:p,createText:v,createComment:m}}=u,g=D(t.props);let{shapeFlag:y,children:b,dynamicChildren:w}=t;if(null==e){const e=t.el=v(""),u=t.anchor=v("");f(e,n,r),f(u,n,r);const d=(e,t)=>{16&y&&(o&&o.isCE&&(o.ce._teleportTarget=e),c(b,e,t,o,i,a,s,l))},h=()=>{const e=t.target=N(t.props,p),n=U(e,t,v,f);e&&("svg"!==a&&O(e)?a="svg":"mathml"!==a&&L(e)&&(a="mathml"),g||(d(e,n),$(t,!1)))};g&&(d(n,u),$(t,!0)),P(t.props)?At(h,i):h()}else{t.el=e.el,t.targetStart=e.targetStart;const r=t.anchor=e.anchor,c=t.target=e.target,f=t.targetAnchor=e.targetAnchor,v=D(e.props),m=v?n:c,y=v?r:f;if("svg"===a||O(c)?a="svg":("mathml"===a||L(c))&&(a="mathml"),w?(h(e.dynamicChildren,w,m,o,i,a,s),Ot(e,t,!0)):l||d(e,t,m,y,o,i,a,s,!1),g)v?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):W(t,n,r,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const e=t.target=N(t.props,p);e&&W(t,e,null,u,0)}else v&&W(t,c,f,u,1);$(t,g)}},remove(e,t,n,{um:r,o:{remove:o}},i){const{shapeFlag:a,children:s,anchor:l,targetStart:u,targetAnchor:c,target:d,props:h}=e;if(d&&(o(u),o(c)),i&&o(l),16&a){const e=i||!D(h);for(let o=0;o<s.length;o++){const i=s[o];r(i,t,n,e,!!i.dynamicChildren)}}},move:W,hydrate:B};function W(e,t,n,{o:{insert:r},m:o},i=2){0===i&&r(e.targetAnchor,t,n);const{el:a,anchor:s,shapeFlag:l,children:u,props:c}=e,d=2===i;if(d&&r(a,t,n),(!d||D(c))&&16&l)for(let h=0;h<u.length;h++)o(u[h],t,n,2);d&&r(s,t,n)}function B(e,t,n,r,o,i,{o:{nextSibling:a,parentNode:s,querySelector:l,insert:u,createText:c}},d){const h=t.target=N(t.props,l);if(h){const l=D(t.props),f=h._lpa||h.firstChild;if(16&t.shapeFlag)if(l)t.anchor=d(a(e),t,s(e),n,r,o,i),t.targetStart=f,t.targetAnchor=f&&a(f);else{t.anchor=a(e);let s=f;while(s){if(s&&8===s.nodeType)if("teleport start anchor"===s.data)t.targetStart=s;else if("teleport anchor"===s.data){t.targetAnchor=s,h._lpa=t.targetAnchor&&a(t.targetAnchor);break}s=a(s)}t.targetAnchor||U(h,t,c,u),d(f&&a(f),t,h,n,r,o,i)}$(t,l)}return t.anchor&&a(t.anchor)}const j=M;function $(e,t){const n=e.ctx;if(n&&n.ut){let r,o;t?(r=e.el,o=e.anchor):(r=e.targetStart,o=e.targetAnchor);while(r&&r!==o)1===r.nodeType&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function U(e,t,n,r){const o=t.targetStart=n(""),i=t.targetAnchor=n("");return o[R]=i,e&&(r(o,e),r(i,e)),i}const z=Symbol("_leaveCb"),K=Symbol("_enterCb");function H(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return we((()=>{e.isMounted=!0})),_e((()=>{e.isUnmounting=!0})),e}const q=[Function,Array],G={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:q,onEnter:q,onAfterEnter:q,onEnterCancelled:q,onBeforeLeave:q,onLeave:q,onAfterLeave:q,onLeaveCancelled:q,onBeforeAppear:q,onAppear:q,onAfterAppear:q,onAppearCancelled:q},Y=e=>{const t=e.subTree;return t.component?Y(t.component):t},X={name:"BaseTransition",props:G,setup(e,{slots:t}){const n=Mn(),o=H();return()=>{const i=t.default&&oe(t.default(),!0);if(!i||!i.length)return;const a=J(i),s=(0,r.ux)(e),{mode:l}=s;if(o.isLeaving)return te(a);const u=ne(a);if(!u)return te(a);let c=ee(u,s,o,n,(e=>c=e));u.type!==sn&&re(u,c);const d=n.subTree,h=d&&ne(d);if(h&&h.type!==sn&&!bn(u,h)&&Y(n).type!==sn){const e=ee(h,s,o,n);if(re(h,e),"out-in"===l&&u.type!==sn)return o.isLeaving=!0,e.afterLeave=()=>{o.isLeaving=!1,8&n.job.flags||n.update(),delete e.afterLeave},te(a);"in-out"===l&&u.type!==sn&&(e.delayLeave=(e,t,n)=>{const r=Z(o,h);r[String(h.key)]=h,e[z]=()=>{t(),e[z]=void 0,delete c.delayedLeave},c.delayedLeave=n})}return a}}};function J(e){let t=e[0];if(e.length>1){let n=!1;for(const r of e)if(r.type!==sn){0,t=r,n=!0;break}}return t}const Q=X;function Z(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function ee(e,t,n,r,i){const{appear:s,mode:l,persisted:u=!1,onBeforeEnter:c,onEnter:d,onAfterEnter:h,onEnterCancelled:f,onBeforeLeave:p,onLeave:v,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:y,onAppear:b,onAfterAppear:w,onAppearCancelled:S}=t,E=String(e.key),_=Z(n,e),C=(e,t)=>{e&&a(e,r,9,t)},k=(e,t)=>{const n=t[1];C(e,t),(0,o.cy)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},I={mode:l,persisted:u,beforeEnter(t){let r=c;if(!n.isMounted){if(!s)return;r=y||c}t[z]&&t[z](!0);const o=_[E];o&&bn(e,o)&&o.el[z]&&o.el[z](),C(r,[t])},enter(e){let t=d,r=h,o=f;if(!n.isMounted){if(!s)return;t=b||d,r=w||h,o=S||f}let i=!1;const a=e[K]=t=>{i||(i=!0,C(t?o:r,[e]),I.delayedLeave&&I.delayedLeave(),e[K]=void 0)};t?k(t,[e,a]):a()},leave(t,r){const o=String(e.key);if(t[K]&&t[K](!0),n.isUnmounting)return r();C(p,[t]);let i=!1;const a=t[z]=n=>{i||(i=!0,r(),C(n?g:m,[t]),t[z]=void 0,_[o]===e&&delete _[o])};_[o]=e,v?k(v,[t,a]):a()},clone(e){const o=ee(e,t,n,r,i);return i&&i(o),o}};return I}function te(e){if(ue(e))return e=In(e),e.children=null,e}function ne(e){if(!ue(e))return V(e.type)&&e.children?J(e.children):e;const{shapeFlag:t,children:n}=e;if(n){if(16&t)return n[0];if(32&t&&(0,o.Tn)(n.default))return n.default()}}function re(e,t){6&e.shapeFlag&&e.component?(e.transition=t,re(e.component.subTree,t)):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function oe(e,t=!1,n){let r=[],o=0;for(let i=0;i<e.length;i++){let a=e[i];const s=null==n?a.key:String(n)+String(null!=a.key?a.key:i);a.type===on?(128&a.patchFlag&&o++,r=r.concat(oe(a.children,t,s))):(t||a.type!==sn)&&r.push(null!=s?In(a,{key:s}):a)}if(o>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}
/*! #__NO_SIDE_EFFECTS__ */function ie(e,t){return(0,o.Tn)(e)?(()=>(0,o.X$)({name:e.name},t,{setup:e}))():e}function ae(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function se(e,t,n,a,s=!1){if((0,o.cy)(e))return void e.forEach(((e,r)=>se(e,t&&((0,o.cy)(t)?t[r]:t),n,a,s)));if(le(a)&&!s)return;const l=4&a.shapeFlag?Zn(a.component):a.el,u=s?null:l,{i:c,r:d}=e;const h=t&&t.r,f=c.refs===o.MZ?c.refs={}:c.refs,p=c.setupState,v=(0,r.ux)(p),m=p===o.MZ?()=>!1:e=>(0,o.$3)(v,e);if(null!=h&&h!==d&&((0,o.Kg)(h)?(f[h]=null,m(h)&&(p[h]=null)):(0,r.i9)(h)&&(h.value=null)),(0,o.Tn)(d))i(d,c,12,[u,f]);else{const t=(0,o.Kg)(d),i=(0,r.i9)(d);if(t||i){const r=()=>{if(e.f){const n=t?m(d)?p[d]:f[d]:d.value;s?(0,o.cy)(n)&&(0,o.TF)(n,l):(0,o.cy)(n)?n.includes(l)||n.push(l):t?(f[d]=[l],m(d)&&(p[d]=f[d])):(d.value=[l],e.k&&(f[e.k]=d.value))}else t?(f[d]=u,m(d)&&(p[d]=u)):i&&(d.value=u,e.k&&(f[e.k]=u))};u?(r.id=-1,At(r,n)):r()}else 0}}(0,o.We)().requestIdleCallback,(0,o.We)().cancelIdleCallback;const le=e=>!!e.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const ue=e=>e.type.__isKeepAlive;RegExp,RegExp;function ce(e,t){return(0,o.cy)(e)?e.some((e=>ce(e,t))):(0,o.Kg)(e)?e.split(",").includes(t):!!(0,o.gd)(e)&&(e.lastIndex=0,e.test(t))}function de(e,t){fe(e,"a",t)}function he(e,t){fe(e,"da",t)}function fe(e,t,n=Nn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(ge(t,r,n),n){let e=n.parent;while(e&&e.parent)ue(e.parent.vnode)&&pe(r,t,n,e),e=e.parent}}function pe(e,t,n,r){const i=ge(t,e,r,!0);Ce((()=>{(0,o.TF)(r[t],i)}),n)}function ve(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function me(e){return 128&e.shapeFlag?e.ssContent:e}function ge(e,t,n=Nn,o=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{(0,r.C4)();const i=jn(n),s=a(t,n,e,o);return i(),(0,r.bl)(),s});return o?i.unshift(s):i.push(s),s}}const ye=e=>(t,n=Nn)=>{Hn&&"sp"!==e||ge(e,((...e)=>t(...e)),n)},be=ye("bm"),we=ye("m"),Se=ye("bu"),Ee=ye("u"),_e=ye("bum"),Ce=ye("um"),ke=ye("sp"),Ie=ye("rtg"),xe=ye("rtc");function Te(e,t=Nn){ge("ec",e,t)}const Ae="components",Fe="directives";function Re(e,t){return Oe(Ae,e,!0,t)||e}const Ve=Symbol.for("v-ndc");function De(e){return(0,o.Kg)(e)?Oe(Ae,e,!1)||e:e||Ve}function Pe(e){return Oe(Fe,e)}function Oe(e,t,n=!0,r=!1){const i=k||Nn;if(i){const n=i.type;if(e===Ae){const e=er(n,!1);if(e&&(e===t||e===(0,o.PT)(t)||e===(0,o.ZH)((0,o.PT)(t))))return n}const a=Le(i[e]||n[e],t)||Le(i.appContext[e],t);return!a&&r?n:a}}function Le(e,t){return e&&(e[t]||e[(0,o.PT)(t)]||e[(0,o.ZH)((0,o.PT)(t))])}function Ne(e,t,n,i){let a;const s=n&&n[i],l=(0,o.cy)(e);if(l||(0,o.Kg)(e)){const n=l&&(0,r.g8)(e);let o=!1;n&&(o=!(0,r.fE)(e),e=(0,r.qA)(e)),a=new Array(e.length);for(let i=0,l=e.length;i<l;i++)a[i]=t(o?(0,r.lJ)(e[i]):e[i],i,void 0,s&&s[i])}else if("number"===typeof e){0,a=new Array(e);for(let n=0;n<e;n++)a[n]=t(n+1,n,void 0,s&&s[n])}else if((0,o.Gv)(e))if(e[Symbol.iterator])a=Array.from(e,((e,n)=>t(e,n,void 0,s&&s[n])));else{const n=Object.keys(e);a=new Array(n.length);for(let r=0,o=n.length;r<o;r++){const o=n[r];a[r]=t(e[o],o,r,s&&s[r])}}else a=[];return n&&(n[i]=a),a}const Me=e=>e?Un(e)?Zn(e):Me(e.parent):null,We=(0,o.X$)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Me(e.parent),$root:e=>Me(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ge(e),$forceUpdate:e=>e.f||(e.f=()=>{y(e.update)}),$nextTick:e=>e.n||(e.n=m.bind(e.proxy)),$watch:e=>zt.bind(e)}),Be=(e,t)=>e!==o.MZ&&!e.__isScriptSetup&&(0,o.$3)(e,t),je={get({_:e},t){if("__v_skip"===t)return!0;const{ctx:n,setupState:i,data:a,props:s,accessCache:l,type:u,appContext:c}=e;let d;if("$"!==t[0]){const r=l[t];if(void 0!==r)switch(r){case 1:return i[t];case 2:return a[t];case 4:return n[t];case 3:return s[t]}else{if(Be(i,t))return l[t]=1,i[t];if(a!==o.MZ&&(0,o.$3)(a,t))return l[t]=2,a[t];if((d=e.propsOptions[0])&&(0,o.$3)(d,t))return l[t]=3,s[t];if(n!==o.MZ&&(0,o.$3)(n,t))return l[t]=4,n[t];Ue&&(l[t]=0)}}const h=We[t];let f,p;return h?("$attrs"===t&&(0,r.u4)(e.attrs,"get",""),h(e)):(f=u.__cssModules)&&(f=f[t])?f:n!==o.MZ&&(0,o.$3)(n,t)?(l[t]=4,n[t]):(p=c.config.globalProperties,(0,o.$3)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:i,ctx:a}=e;return Be(i,t)?(i[t]=n,!0):r!==o.MZ&&(0,o.$3)(r,t)?(r[t]=n,!0):!(0,o.$3)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(a[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:a}},s){let l;return!!n[s]||e!==o.MZ&&(0,o.$3)(e,s)||Be(t,s)||(l=a[0])&&(0,o.$3)(l,s)||(0,o.$3)(r,s)||(0,o.$3)(We,s)||(0,o.$3)(i.config.globalProperties,s)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,o.$3)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function $e(e){return(0,o.cy)(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let Ue=!0;function ze(e){const t=Ge(e),n=e.proxy,i=e.ctx;Ue=!1,t.beforeCreate&&He(t.beforeCreate,e,"bc");const{data:a,computed:s,methods:l,watch:u,provide:c,inject:d,created:h,beforeMount:f,mounted:p,beforeUpdate:v,updated:m,activated:g,deactivated:y,beforeDestroy:b,beforeUnmount:w,destroyed:S,unmounted:E,render:_,renderTracked:C,renderTriggered:k,errorCaptured:I,serverPrefetch:x,expose:T,inheritAttrs:A,components:F,directives:R,filters:V}=t,D=null;if(d&&Ke(d,i,D),l)for(const r in l){const e=l[r];(0,o.Tn)(e)&&(i[r]=e.bind(n))}if(a){0;const t=a.call(n,n);0,(0,o.Gv)(t)&&(e.data=(0,r.Kh)(t))}if(Ue=!0,s)for(const r in s){const e=s[r],t=(0,o.Tn)(e)?e.bind(n,n):(0,o.Tn)(e.get)?e.get.bind(n,n):o.tE;0;const a=!(0,o.Tn)(e)&&(0,o.Tn)(e.set)?e.set.bind(n):o.tE,l=nr({get:t,set:a});Object.defineProperty(i,r,{enumerable:!0,configurable:!0,get:()=>l.value,set:e=>l.value=e})}if(u)for(const r in u)qe(u[r],i,n,r);if(c){const e=(0,o.Tn)(c)?c.call(n):c;Reflect.ownKeys(e).forEach((t=>{lt(t,e[t])}))}function P(e,t){(0,o.cy)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(h&&He(h,e,"c"),P(be,f),P(we,p),P(Se,v),P(Ee,m),P(de,g),P(he,y),P(Te,I),P(xe,C),P(Ie,k),P(_e,w),P(Ce,E),P(ke,x),(0,o.cy)(T))if(T.length){const t=e.exposed||(e.exposed={});T.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});_&&e.render===o.tE&&(e.render=_),null!=A&&(e.inheritAttrs=A),F&&(e.components=F),R&&(e.directives=R),x&&ae(e)}function Ke(e,t,n=o.tE){(0,o.cy)(e)&&(e=Ze(e));for(const i in e){const n=e[i];let a;a=(0,o.Gv)(n)?"default"in n?ut(n.from||i,n.default,!0):ut(n.from||i):ut(n),(0,r.i9)(a)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[i]=a}}function He(e,t,n){a((0,o.cy)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function qe(e,t,n,r){let i=r.includes(".")?Kt(n,r):()=>n[r];if((0,o.Kg)(e)){const n=t[e];(0,o.Tn)(n)&&$t(i,n)}else if((0,o.Tn)(e))$t(i,e.bind(n));else if((0,o.Gv)(e))if((0,o.cy)(e))e.forEach((e=>qe(e,t,n,r)));else{const r=(0,o.Tn)(e.handler)?e.handler.bind(n):t[e.handler];(0,o.Tn)(r)&&$t(i,r,e)}else 0}function Ge(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:s}}=e.appContext,l=a.get(t);let u;return l?u=l:i.length||n||r?(u={},i.length&&i.forEach((e=>Ye(u,e,s,!0))),Ye(u,t,s)):u=t,(0,o.Gv)(t)&&a.set(t,u),u}function Ye(e,t,n,r=!1){const{mixins:o,extends:i}=t;i&&Ye(e,i,n,!0),o&&o.forEach((t=>Ye(e,t,n,!0)));for(const a in t)if(r&&"expose"===a);else{const r=Xe[a]||n&&n[a];e[a]=r?r(e[a],t[a]):t[a]}return e}const Xe={data:Je,props:nt,emits:nt,methods:tt,computed:tt,beforeCreate:et,created:et,beforeMount:et,mounted:et,beforeUpdate:et,updated:et,beforeDestroy:et,beforeUnmount:et,destroyed:et,unmounted:et,activated:et,deactivated:et,errorCaptured:et,serverPrefetch:et,components:tt,directives:tt,watch:rt,provide:Je,inject:Qe};function Je(e,t){return t?e?function(){return(0,o.X$)((0,o.Tn)(e)?e.call(this,this):e,(0,o.Tn)(t)?t.call(this,this):t)}:t:e}function Qe(e,t){return tt(Ze(e),Ze(t))}function Ze(e){if((0,o.cy)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function et(e,t){return e?[...new Set([].concat(e,t))]:t}function tt(e,t){return e?(0,o.X$)(Object.create(null),e,t):t}function nt(e,t){return e?(0,o.cy)(e)&&(0,o.cy)(t)?[...new Set([...e,...t])]:(0,o.X$)(Object.create(null),$e(e),$e(null!=t?t:{})):t}function rt(e,t){if(!e)return t;if(!t)return e;const n=(0,o.X$)(Object.create(null),e);for(const r in t)n[r]=et(e[r],t[r]);return n}function ot(){return{app:null,config:{isNativeTag:o.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let it=0;function at(e,t){return function(n,r=null){(0,o.Tn)(n)||(n=(0,o.X$)({},n)),null==r||(0,o.Gv)(r)||(r=null);const i=ot(),s=new WeakSet,l=[];let u=!1;const c=i.app={_uid:it++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:or,get config(){return i.config},set config(e){0},use(e,...t){return s.has(e)||(e&&(0,o.Tn)(e.install)?(s.add(e),e.install(c,...t)):(0,o.Tn)(e)&&(s.add(e),e(c,...t))),c},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),c},component(e,t){return t?(i.components[e]=t,c):i.components[e]},directive(e,t){return t?(i.directives[e]=t,c):i.directives[e]},mount(o,a,s){if(!u){0;const l=c._ceVNode||_n(n,r);return l.appContext=i,!0===s?s="svg":!1===s&&(s=void 0),a&&t?t(l,o):e(l,o,s),u=!0,c._container=o,o.__vue_app__=c,Zn(l.component)}},onUnmount(e){l.push(e)},unmount(){u&&(a(l,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return i.provides[e]=t,c},runWithContext(e){const t=st;st=c;try{return e()}finally{st=t}}};return c}}let st=null;function lt(e,t){if(Nn){let n=Nn.provides;const r=Nn.parent&&Nn.parent.provides;r===n&&(n=Nn.provides=Object.create(r)),n[e]=t}else 0}function ut(e,t,n=!1){const r=Nn||k;if(r||st){const i=st?st._context.provides:r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&(0,o.Tn)(t)?t.call(r&&r.proxy):t}else 0}const ct={},dt=()=>Object.create(ct),ht=e=>Object.getPrototypeOf(e)===ct;function ft(e,t,n,o=!1){const i={},a=dt();e.propsDefaults=Object.create(null),vt(e,t,i,a);for(const r in e.propsOptions[0])r in i||(i[r]=void 0);n?e.props=o?i:(0,r.Gc)(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function pt(e,t,n,i){const{props:a,attrs:s,vnode:{patchFlag:l}}=e,u=(0,r.ux)(a),[c]=e.propsOptions;let d=!1;if(!(i||l>0)||16&l){let r;vt(e,t,a,s)&&(d=!0);for(const i in u)t&&((0,o.$3)(t,i)||(r=(0,o.Tg)(i))!==i&&(0,o.$3)(t,r))||(c?!n||void 0===n[i]&&void 0===n[r]||(a[i]=mt(c,u,i,void 0,e,!0)):delete a[i]);if(s!==u)for(const e in s)t&&(0,o.$3)(t,e)||(delete s[e],d=!0)}else if(8&l){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let i=n[r];if(Yt(e.emitsOptions,i))continue;const l=t[i];if(c)if((0,o.$3)(s,i))l!==s[i]&&(s[i]=l,d=!0);else{const t=(0,o.PT)(i);a[t]=mt(c,u,t,l,e,!1)}else l!==s[i]&&(s[i]=l,d=!0)}}d&&(0,r.hZ)(e.attrs,"set","")}function vt(e,t,n,i){const[a,s]=e.propsOptions;let l,u=!1;if(t)for(let r in t){if((0,o.SU)(r))continue;const c=t[r];let d;a&&(0,o.$3)(a,d=(0,o.PT)(r))?s&&s.includes(d)?(l||(l={}))[d]=c:n[d]=c:Yt(e.emitsOptions,r)||r in i&&c===i[r]||(i[r]=c,u=!0)}if(s){const t=(0,r.ux)(n),i=l||o.MZ;for(let r=0;r<s.length;r++){const l=s[r];n[l]=mt(a,t,l,i[l],e,!(0,o.$3)(i,l))}}return u}function mt(e,t,n,r,i,a){const s=e[n];if(null!=s){const e=(0,o.$3)(s,"default");if(e&&void 0===r){const e=s.default;if(s.type!==Function&&!s.skipFactory&&(0,o.Tn)(e)){const{propsDefaults:o}=i;if(n in o)r=o[n];else{const a=jn(i);r=o[n]=e.call(null,t),a()}}else r=e;i.ce&&i.ce._setProp(n,r)}s[0]&&(a&&!e?r=!1:!s[1]||""!==r&&r!==(0,o.Tg)(n)||(r=!0))}return r}const gt=new WeakMap;function yt(e,t,n=!1){const r=n?gt:t.propsCache,i=r.get(e);if(i)return i;const a=e.props,s={},l=[];let u=!1;if(!(0,o.Tn)(e)){const r=e=>{u=!0;const[n,r]=yt(e,t,!0);(0,o.X$)(s,n),r&&l.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!a&&!u)return(0,o.Gv)(e)&&r.set(e,o.Oj),o.Oj;if((0,o.cy)(a))for(let d=0;d<a.length;d++){0;const e=(0,o.PT)(a[d]);bt(e)&&(s[e]=o.MZ)}else if(a){0;for(const e in a){const t=(0,o.PT)(e);if(bt(t)){const n=a[e],r=s[t]=(0,o.cy)(n)||(0,o.Tn)(n)?{type:n}:(0,o.X$)({},n),i=r.type;let u=!1,c=!0;if((0,o.cy)(i))for(let e=0;e<i.length;++e){const t=i[e],n=(0,o.Tn)(t)&&t.name;if("Boolean"===n){u=!0;break}"String"===n&&(c=!1)}else u=(0,o.Tn)(i)&&"Boolean"===i.name;r[0]=u,r[1]=c,(u||(0,o.$3)(r,"default"))&&l.push(t)}}}const c=[s,l];return(0,o.Gv)(e)&&r.set(e,c),c}function bt(e){return"$"!==e[0]&&!(0,o.SU)(e)}const wt=e=>"_"===e[0]||"$stable"===e,St=e=>(0,o.cy)(e)?e.map(An):[An(e)],Et=(e,t,n)=>{if(t._n)return t;const r=T(((...e)=>St(t(...e))),n);return r._c=!1,r},_t=(e,t,n)=>{const r=e._ctx;for(const i in e){if(wt(i))continue;const n=e[i];if((0,o.Tn)(n))t[i]=Et(i,n,r);else if(null!=n){0;const e=St(n);t[i]=()=>e}}},Ct=(e,t)=>{const n=St(t);e.slots.default=()=>n},kt=(e,t,n)=>{for(const r in t)(n||"_"!==r)&&(e[r]=t[r])},It=(e,t,n)=>{const r=e.slots=dt();if(32&e.vnode.shapeFlag){const e=t._;e?(kt(r,t,n),n&&(0,o.yQ)(r,"_",e,!0)):_t(t,r)}else t&&Ct(e,t)},xt=(e,t,n)=>{const{vnode:r,slots:i}=e;let a=!0,s=o.MZ;if(32&r.shapeFlag){const e=t._;e?n&&1===e?a=!1:kt(i,t,n):(a=!t.$stable,_t(t,i)),s=t}else t&&(Ct(e,t),s={default:1});if(a)for(const o in i)wt(o)||null!=s[o]||delete i[o]};function Tt(){}const At=rn;function Ft(e){return Rt(e)}function Rt(e,t){Tt();const n=(0,o.We)();n.__VUE__=!0;const{insert:i,remove:a,patchProp:s,createElement:l,createText:u,createComment:c,setText:d,setElementText:h,parentNode:f,nextSibling:p,setScopeId:v=o.tE,insertStaticContent:m}=e,g=(e,t,n,r=null,o=null,i=null,a=void 0,s=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!bn(e,t)&&(r=X(e),K(e,o,i,!0),e=null),-2===t.patchFlag&&(l=!1,t.dynamicChildren=null);const{type:u,ref:c,shapeFlag:d}=t;switch(u){case an:b(e,t,n,r);break;case sn:w(e,t,n,r);break;case ln:null==e&&_(t,n,r,a);break;case on:O(e,t,n,r,o,i,a,s,l);break;default:1&d?I(e,t,n,r,o,i,a,s,l):6&d?L(e,t,n,r,o,i,a,s,l):(64&d||128&d)&&u.process(e,t,n,r,o,i,a,s,l,Z)}null!=c&&o&&se(c,e&&e.ref,i,t||e,!t)},b=(e,t,n,r)=>{if(null==e)i(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&d(n,t.children)}},w=(e,t,n,r)=>{null==e?i(t.el=c(t.children||""),n,r):t.el=e.el},_=(e,t,n,r)=>{[e.el,e.anchor]=m(e.children,t,n,r,e.el,e.anchor)},C=({el:e,anchor:t},n,r)=>{let o;while(e&&e!==t)o=p(e),i(e,n,r),e=o;i(t,n,r)},k=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),a(e),e=n;a(t)},I=(e,t,n,r,o,i,a,s,l)=>{"svg"===t.type?a="svg":"math"===t.type&&(a="mathml"),null==e?x(t,n,r,o,i,a,s,l):V(e,t,o,i,a,s,l)},x=(e,t,n,r,a,u,c,d)=>{let f,p;const{props:v,shapeFlag:m,transition:g,dirs:y}=e;if(f=e.el=l(e.type,u,v&&v.is,v),8&m?h(f,e.children):16&m&&A(e.children,f,null,r,a,Vt(e,u),c,d),y&&F(e,null,r,"created"),T(f,e,e.scopeId,c,r),v){for(const e in v)"value"===e||(0,o.SU)(e)||s(f,e,null,v[e],u,r);"value"in v&&s(f,"value",null,v.value,u),(p=v.onVnodeBeforeMount)&&Dn(p,r,e)}y&&F(e,null,r,"beforeMount");const b=Pt(a,g);b&&g.beforeEnter(f),i(f,t,n),((p=v&&v.onVnodeMounted)||b||y)&&At((()=>{p&&Dn(p,r,e),b&&g.enter(f),y&&F(e,null,r,"mounted")}),a)},T=(e,t,n,r,o)=>{if(n&&v(e,n),r)for(let i=0;i<r.length;i++)v(e,r[i]);if(o){let n=o.subTree;if(t===n||nn(n.type)&&(n.ssContent===t||n.ssFallback===t)){const t=o.vnode;T(e,t,t.scopeId,t.slotScopeIds,o.parent)}}},A=(e,t,n,r,o,i,a,s,l=0)=>{for(let u=l;u<e.length;u++){const l=e[u]=s?Fn(e[u]):An(e[u]);g(null,l,t,n,r,o,i,a,s)}},V=(e,t,n,r,i,a,l)=>{const u=t.el=e.el;let{patchFlag:c,dynamicChildren:d,dirs:f}=t;c|=16&e.patchFlag;const p=e.props||o.MZ,v=t.props||o.MZ;let m;if(n&&Dt(n,!1),(m=v.onVnodeBeforeUpdate)&&Dn(m,n,t,e),f&&F(t,e,n,"beforeUpdate"),n&&Dt(n,!0),(p.innerHTML&&null==v.innerHTML||p.textContent&&null==v.textContent)&&h(u,""),d?D(e.dynamicChildren,d,u,n,r,Vt(t,i),a):l||j(e,t,u,null,n,r,Vt(t,i),a,!1),c>0){if(16&c)P(u,p,v,n,i);else if(2&c&&p.class!==v.class&&s(u,"class",null,v.class,i),4&c&&s(u,"style",p.style,v.style,i),8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const r=e[t],o=p[r],a=v[r];a===o&&"value"!==r||s(u,r,o,a,i,n)}}1&c&&e.children!==t.children&&h(u,t.children)}else l||null!=d||P(u,p,v,n,i);((m=v.onVnodeUpdated)||f)&&At((()=>{m&&Dn(m,n,t,e),f&&F(t,e,n,"updated")}),r)},D=(e,t,n,r,o,i,a)=>{for(let s=0;s<t.length;s++){const l=e[s],u=t[s],c=l.el&&(l.type===on||!bn(l,u)||70&l.shapeFlag)?f(l.el):n;g(l,u,c,null,r,o,i,a,!0)}},P=(e,t,n,r,i)=>{if(t!==n){if(t!==o.MZ)for(const a in t)(0,o.SU)(a)||a in n||s(e,a,t[a],null,i,r);for(const a in n){if((0,o.SU)(a))continue;const l=n[a],u=t[a];l!==u&&"value"!==a&&s(e,a,u,l,i,r)}"value"in n&&s(e,"value",t.value,n.value,i)}},O=(e,t,n,r,o,a,s,l,c)=>{const d=t.el=e?e.el:u(""),h=t.anchor=e?e.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:v}=t;v&&(l=l?l.concat(v):v),null==e?(i(d,n,r),i(h,n,r),A(t.children||[],n,h,o,a,s,l,c)):f>0&&64&f&&p&&e.dynamicChildren?(D(e.dynamicChildren,p,n,o,a,s,l),(null!=t.key||o&&t===o.subTree)&&Ot(e,t,!0)):j(e,t,n,h,o,a,s,l,c)},L=(e,t,n,r,o,i,a,s,l)=>{t.slotScopeIds=s,null==e?512&t.shapeFlag?o.ctx.activate(t,n,r,a,l):N(t,n,r,o,i,a,l):M(e,t,l)},N=(e,t,n,r,o,i,a)=>{const s=e.component=Ln(e,r,o);if(ue(e)&&(s.ctx.renderer=Z),qn(s,!1,a),s.asyncDep){if(o&&o.registerDep(s,W,a),!e.el){const e=s.subTree=_n(sn);w(null,e,t,n)}}else W(s,e,t,n,o,i,a)},M=(e,t,n)=>{const r=t.component=e.component;if(Zt(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void B(r,t,n);r.next=t,r.update()}else t.el=e.el,r.vnode=t},W=(e,t,n,i,a,s,l)=>{const u=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:i,vnode:c}=e;{const n=Nt(e);if(n)return t&&(t.el=c.el,B(e,t,l)),void n.asyncDep.then((()=>{e.isUnmounted||u()}))}let d,h=t;0,Dt(e,!1),t?(t.el=c.el,B(e,t,l)):t=c,n&&(0,o.DY)(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&Dn(d,i,t,c),Dt(e,!0);const p=Xt(e);0;const v=e.subTree;e.subTree=p,g(v,p,f(v.el),X(v),e,a,s),t.el=p.el,null===h&&tn(e,p.el),r&&At(r,a),(d=t.props&&t.props.onVnodeUpdated)&&At((()=>Dn(d,i,t,c)),a)}else{let r;const{el:l,props:u}=t,{bm:c,m:d,parent:h,root:f,type:p}=e,v=le(t);if(Dt(e,!1),c&&(0,o.DY)(c),!v&&(r=u&&u.onVnodeBeforeMount)&&Dn(r,h,t),Dt(e,!0),l&&te){const t=()=>{e.subTree=Xt(e),te(l,e.subTree,e,a,null)};v&&p.__asyncHydrate?p.__asyncHydrate(l,e,t):t()}else{f.ce&&f.ce._injectChildStyle(p);const r=e.subTree=Xt(e);0,g(null,r,n,i,e,a,s),t.el=r.el}if(d&&At(d,a),!v&&(r=u&&u.onVnodeMounted)){const e=t;At((()=>Dn(r,h,e)),a)}(256&t.shapeFlag||h&&le(h.vnode)&&256&h.vnode.shapeFlag)&&e.a&&At(e.a,a),e.isMounted=!0,t=n=i=null}};e.scope.on();const c=e.effect=new r.X2(u);e.scope.off();const d=e.update=c.run.bind(c),h=e.job=c.runIfDirty.bind(c);h.i=e,h.id=e.uid,c.scheduler=()=>y(h),Dt(e,!0),d()},B=(e,t,n)=>{t.component=e;const o=e.vnode.props;e.vnode=t,e.next=null,pt(e,t.props,o,n),xt(e,t.children,n),(0,r.C4)(),S(e),(0,r.bl)()},j=(e,t,n,r,o,i,a,s,l=!1)=>{const u=e&&e.children,c=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void U(u,d,n,r,o,i,a,s,l);if(256&f)return void $(u,d,n,r,o,i,a,s,l)}8&p?(16&c&&Y(u,o,i),d!==u&&h(n,d)):16&c?16&p?U(u,d,n,r,o,i,a,s,l):Y(u,o,i,!0):(8&c&&h(n,""),16&p&&A(d,n,r,o,i,a,s,l))},$=(e,t,n,r,i,a,s,l,u)=>{e=e||o.Oj,t=t||o.Oj;const c=e.length,d=t.length,h=Math.min(c,d);let f;for(f=0;f<h;f++){const r=t[f]=u?Fn(t[f]):An(t[f]);g(e[f],r,n,null,i,a,s,l,u)}c>d?Y(e,i,a,!0,!1,h):A(t,n,r,i,a,s,l,u,h)},U=(e,t,n,r,i,a,s,l,u)=>{let c=0;const d=t.length;let h=e.length-1,f=d-1;while(c<=h&&c<=f){const r=e[c],o=t[c]=u?Fn(t[c]):An(t[c]);if(!bn(r,o))break;g(r,o,n,null,i,a,s,l,u),c++}while(c<=h&&c<=f){const r=e[h],o=t[f]=u?Fn(t[f]):An(t[f]);if(!bn(r,o))break;g(r,o,n,null,i,a,s,l,u),h--,f--}if(c>h){if(c<=f){const e=f+1,o=e<d?t[e].el:r;while(c<=f)g(null,t[c]=u?Fn(t[c]):An(t[c]),n,o,i,a,s,l,u),c++}}else if(c>f)while(c<=h)K(e[c],i,a,!0),c++;else{const p=c,v=c,m=new Map;for(c=v;c<=f;c++){const e=t[c]=u?Fn(t[c]):An(t[c]);null!=e.key&&m.set(e.key,c)}let y,b=0;const w=f-v+1;let S=!1,E=0;const _=new Array(w);for(c=0;c<w;c++)_[c]=0;for(c=p;c<=h;c++){const r=e[c];if(b>=w){K(r,i,a,!0);continue}let o;if(null!=r.key)o=m.get(r.key);else for(y=v;y<=f;y++)if(0===_[y-v]&&bn(r,t[y])){o=y;break}void 0===o?K(r,i,a,!0):(_[o-v]=c+1,o>=E?E=o:S=!0,g(r,t[o],n,null,i,a,s,l,u),b++)}const C=S?Lt(_):o.Oj;for(y=C.length-1,c=w-1;c>=0;c--){const e=v+c,o=t[e],h=e+1<d?t[e+1].el:r;0===_[c]?g(null,o,n,h,i,a,s,l,u):S&&(y<0||c!==C[y]?z(o,n,h,2):y--)}}},z=(e,t,n,r,o=null)=>{const{el:a,type:s,transition:l,children:u,shapeFlag:c}=e;if(6&c)return void z(e.component.subTree,t,n,r);if(128&c)return void e.suspense.move(t,n,r);if(64&c)return void s.move(e,t,n,Z);if(s===on){i(a,t,n);for(let e=0;e<u.length;e++)z(u[e],t,n,r);return void i(e.anchor,t,n)}if(s===ln)return void C(e,t,n);const d=2!==r&&1&c&&l;if(d)if(0===r)l.beforeEnter(a),i(a,t,n),At((()=>l.enter(a)),o);else{const{leave:e,delayLeave:r,afterLeave:o}=l,s=()=>i(a,t,n),u=()=>{e(a,(()=>{s(),o&&o()}))};r?r(a,s,u):u()}else i(a,t,n)},K=(e,t,n,r=!1,o=!1)=>{const{type:i,props:a,ref:s,children:l,dynamicChildren:u,shapeFlag:c,patchFlag:d,dirs:h,cacheIndex:f}=e;if(-2===d&&(o=!1),null!=s&&se(s,null,n,e,!0),null!=f&&(t.renderCache[f]=void 0),256&c)return void t.ctx.deactivate(e);const p=1&c&&h,v=!le(e);let m;if(v&&(m=a&&a.onVnodeBeforeUnmount)&&Dn(m,t,e),6&c)G(e.component,n,r);else{if(128&c)return void e.suspense.unmount(n,r);p&&F(e,null,t,"beforeUnmount"),64&c?e.type.remove(e,t,n,Z,r):u&&!u.hasOnce&&(i!==on||d>0&&64&d)?Y(u,t,n,!1,!0):(i===on&&384&d||!o&&16&c)&&Y(l,t,n),r&&H(e)}(v&&(m=a&&a.onVnodeUnmounted)||p)&&At((()=>{m&&Dn(m,t,e),p&&F(e,null,t,"unmounted")}),n)},H=e=>{const{type:t,el:n,anchor:r,transition:o}=e;if(t===on)return void q(n,r);if(t===ln)return void k(e);const i=()=>{a(n),o&&!o.persisted&&o.afterLeave&&o.afterLeave()};if(1&e.shapeFlag&&o&&!o.persisted){const{leave:t,delayLeave:r}=o,a=()=>t(n,i);r?r(e.el,i,a):a()}else i()},q=(e,t)=>{let n;while(e!==t)n=p(e),a(e),e=n;a(t)},G=(e,t,n)=>{const{bum:r,scope:i,job:a,subTree:s,um:l,m:u,a:c}=e;Mt(u),Mt(c),r&&(0,o.DY)(r),i.stop(),a&&(a.flags|=8,K(s,e,t,n)),l&&At(l,t),At((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Y=(e,t,n,r=!1,o=!1,i=0)=>{for(let a=i;a<e.length;a++)K(e[a],t,n,r,o)},X=e=>{if(6&e.shapeFlag)return X(e.component.subTree);if(128&e.shapeFlag)return e.suspense.next();const t=p(e.anchor||e.el),n=t&&t[R];return n?p(n):t};let J=!1;const Q=(e,t,n)=>{null==e?t._vnode&&K(t._vnode,null,null,!0):g(t._vnode||null,e,t,null,null,null,n),t._vnode=e,J||(J=!0,S(),E(),J=!1)},Z={p:g,um:K,m:z,r:H,mt:N,mc:A,pc:j,pbc:D,n:X,o:e};let ee,te;return t&&([ee,te]=t(Z)),{render:Q,hydrate:ee,createApp:at(Q,ee)}}function Vt({type:e,props:t},n){return"svg"===n&&"foreignObject"===e||"mathml"===n&&"annotation-xml"===e&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Dt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Pt(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ot(e,t,n=!1){const r=e.children,i=t.children;if((0,o.cy)(r)&&(0,o.cy)(i))for(let o=0;o<r.length;o++){const e=r[o];let t=i[o];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=i[o]=Fn(i[o]),t.el=e.el),n||-2===t.patchFlag||Ot(e,t)),t.type===an&&(t.el=e.el)}}function Lt(e){const t=e.slice(),n=[0];let r,o,i,a,s;const l=e.length;for(r=0;r<l;r++){const l=e[r];if(0!==l){if(o=n[n.length-1],e[o]<l){t[r]=o,n.push(r);continue}i=0,a=n.length-1;while(i<a)s=i+a>>1,e[n[s]]<l?i=s+1:a=s;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}i=n.length,a=n[i-1];while(i-- >0)n[i]=a,a=t[a];return n}function Nt(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Nt(t)}function Mt(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Wt=Symbol.for("v-scx"),Bt=()=>{{const e=ut(Wt);return e}};function jt(e,t){return Ut(e,null,t)}function $t(e,t,n){return Ut(e,t,n)}function Ut(e,t,n=o.MZ){const{immediate:i,deep:s,flush:l,once:u}=n;const c=(0,o.X$)({},n);const d=t&&i||!t&&"post"!==l;let h;if(Hn)if("sync"===l){const e=Bt();h=e.__watcherHandles||(e.__watcherHandles=[])}else if(!d){const e=()=>{};return e.stop=o.tE,e.resume=o.tE,e.pause=o.tE,e}const f=Nn;c.call=(e,t,n)=>a(e,f,t,n);let p=!1;"post"===l?c.scheduler=e=>{At(e,f&&f.suspense)}:"sync"!==l&&(p=!0,c.scheduler=(e,t)=>{t?e():y(e)}),c.augmentJob=e=>{t&&(e.flags|=4),p&&(e.flags|=2,f&&(e.id=f.uid,e.i=f))};const v=(0,r.wB)(e,t,c);return Hn&&(h?h.push(v):d&&v()),v}function zt(e,t,n){const r=this.proxy,i=(0,o.Kg)(e)?e.includes(".")?Kt(r,e):()=>r[e]:e.bind(r,r);let a;(0,o.Tn)(t)?a=t:(a=t.handler,n=t);const s=jn(this),l=Ut(i,a.bind(r),n);return s(),l}function Kt(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}const Ht=(e,t)=>"modelValue"===t||"model-value"===t?e.modelModifiers:e[`${t}Modifiers`]||e[`${(0,o.PT)(t)}Modifiers`]||e[`${(0,o.Tg)(t)}Modifiers`];function qt(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||o.MZ;let i=n;const s=t.startsWith("update:"),l=s&&Ht(r,t.slice(7));let u;l&&(l.trim&&(i=n.map((e=>(0,o.Kg)(e)?e.trim():e))),l.number&&(i=n.map(o.bB)));let c=r[u=(0,o.rU)(t)]||r[u=(0,o.rU)((0,o.PT)(t))];!c&&s&&(c=r[u=(0,o.rU)((0,o.Tg)(t))]),c&&a(c,e,6,i);const d=r[u+"Once"];if(d){if(e.emitted){if(e.emitted[u])return}else e.emitted={};e.emitted[u]=!0,a(d,e,6,i)}}function Gt(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(void 0!==i)return i;const a=e.emits;let s={},l=!1;if(!(0,o.Tn)(e)){const r=e=>{const n=Gt(e,t,!0);n&&(l=!0,(0,o.X$)(s,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return a||l?((0,o.cy)(a)?a.forEach((e=>s[e]=null)):(0,o.X$)(s,a),(0,o.Gv)(e)&&r.set(e,s),s):((0,o.Gv)(e)&&r.set(e,null),null)}function Yt(e,t){return!(!e||!(0,o.Mp)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,o.$3)(e,t[0].toLowerCase()+t.slice(1))||(0,o.$3)(e,(0,o.Tg)(t))||(0,o.$3)(e,t))}function Xt(e){const{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:l,attrs:u,emit:c,render:d,renderCache:h,props:f,data:p,setupState:v,ctx:m,inheritAttrs:g}=e,y=x(e);let b,w;try{if(4&n.shapeFlag){const e=i||r,t=e;b=An(d.call(t,e,h,f,v,p,m)),w=u}else{const e=t;0,b=An(e.length>1?e(f,{attrs:u,slots:l,emit:c}):e(f,null)),w=t.props?u:Jt(u)}}catch(E){un.length=0,s(E,e,1),b=_n(sn)}let S=b;if(w&&!1!==g){const e=Object.keys(w),{shapeFlag:t}=S;e.length&&7&t&&(a&&e.some(o.CP)&&(w=Qt(w,a)),S=In(S,w,!1,!0))}return n.dirs&&(S=In(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&re(S,n.transition),b=S,x(y),b}const Jt=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,o.Mp)(n))&&((t||(t={}))[n]=e[n]);return t},Qt=(e,t)=>{const n={};for(const r in e)(0,o.CP)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function Zt(e,t,n){const{props:r,children:o,component:i}=e,{props:a,children:s,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&l>=0))return!(!o&&!s||s&&s.$stable)||r!==a&&(r?!a||en(r,a,u):!!a);if(1024&l)return!0;if(16&l)return r?en(r,a,u):!!a;if(8&l){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(a[n]!==r[n]&&!Yt(u,n))return!0}}return!1}function en(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(t[i]!==e[i]&&!Yt(n,i))return!0}return!1}function tn({vnode:e,parent:t},n){while(t){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r!==e)break;(e=t.vnode).el=n,t=t.parent}}const nn=e=>e.__isSuspense;function rn(e,t){t&&t.pendingBranch?(0,o.cy)(e)?t.effects.push(...e):t.effects.push(e):w(e)}const on=Symbol.for("v-fgt"),an=Symbol.for("v-txt"),sn=Symbol.for("v-cmt"),ln=Symbol.for("v-stc"),un=[];let cn=null;function dn(e=!1){un.push(cn=e?null:[])}function hn(){un.pop(),cn=un[un.length-1]||null}let fn=1;function pn(e){fn+=e,e<0&&cn&&(cn.hasOnce=!0)}function vn(e){return e.dynamicChildren=fn>0?cn||o.Oj:null,hn(),fn>0&&cn&&cn.push(e),e}function mn(e,t,n,r,o,i){return vn(En(e,t,n,r,o,i,!0))}function gn(e,t,n,r,o){return vn(_n(e,t,n,r,o,!0))}function yn(e){return!!e&&!0===e.__v_isVNode}function bn(e,t){return e.type===t.type&&e.key===t.key}const wn=({key:e})=>null!=e?e:null,Sn=({ref:e,ref_key:t,ref_for:n})=>("number"===typeof e&&(e=""+e),null!=e?(0,o.Kg)(e)||(0,r.i9)(e)||(0,o.Tn)(e)?{i:k,r:e,k:t,f:!!n}:e:null);function En(e,t=null,n=null,r=0,i=null,a=(e===on?0:1),s=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&wn(t),ref:t&&Sn(t),scopeId:I,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:k};return l?(Rn(u,n),128&a&&e.normalize(u)):n&&(u.shapeFlag|=(0,o.Kg)(n)?8:16),fn>0&&!s&&cn&&(u.patchFlag>0||6&a)&&32!==u.patchFlag&&cn.push(u),u}const _n=Cn;function Cn(e,t=null,n=null,i=0,a=null,s=!1){if(e&&e!==Ve||(e=sn),yn(e)){const r=In(e,t,!0);return n&&Rn(r,n),fn>0&&!s&&cn&&(6&r.shapeFlag?cn[cn.indexOf(e)]=r:cn.push(r)),r.patchFlag=-2,r}if(tr(e)&&(e=e.__vccOpts),t){t=kn(t);let{class:e,style:n}=t;e&&!(0,o.Kg)(e)&&(t.class=(0,o.C4)(e)),(0,o.Gv)(n)&&((0,r.ju)(n)&&!(0,o.cy)(n)&&(n=(0,o.X$)({},n)),t.style=(0,o.Tr)(n))}const l=(0,o.Kg)(e)?1:nn(e)?128:V(e)?64:(0,o.Gv)(e)?4:(0,o.Tn)(e)?2:0;return En(e,t,n,i,a,l,s,!0)}function kn(e){return e?(0,r.ju)(e)||ht(e)?(0,o.X$)({},e):e:null}function In(e,t,n=!1,r=!1){const{props:i,ref:a,patchFlag:s,children:l,transition:u}=e,c=t?Vn(i||{},t):i,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&wn(c),ref:t&&t.ref?n&&a?(0,o.cy)(a)?a.concat(Sn(t)):[a,Sn(t)]:Sn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==on?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&In(e.ssContent),ssFallback:e.ssFallback&&In(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&r&&re(d,u.clone(d)),d}function xn(e=" ",t=0){return _n(an,null,e,t)}function Tn(e="",t=!1){return t?(dn(),gn(sn,null,e)):_n(sn,null,e)}function An(e){return null==e||"boolean"===typeof e?_n(sn):(0,o.cy)(e)?_n(on,null,e.slice()):yn(e)?Fn(e):_n(an,null,String(e))}function Fn(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:In(e)}function Rn(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,o.cy)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),Rn(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||ht(t)?3===r&&k&&(1===k.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=k}}else(0,o.Tn)(t)?(t={default:t,_ctx:k},n=32):(t=String(t),64&r?(n=16,t=[xn(t)]):n=8);e.children=t,e.shapeFlag|=n}function Vn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,o.C4)([t.class,r.class]));else if("style"===e)t.style=(0,o.Tr)([t.style,r.style]);else if((0,o.Mp)(e)){const n=t[e],i=r[e];!i||n===i||(0,o.cy)(n)&&n.includes(i)||(t[e]=n?[].concat(n,i):i)}else""!==e&&(t[e]=r[e])}return t}function Dn(e,t,n,r=null){a(e,t,7,[n,r])}const Pn=ot();let On=0;function Ln(e,t,n){const i=e.type,a=(t?t.appContext:e.appContext)||Pn,s={uid:On++,vnode:e,type:i,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new r.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yt(i,a),emitsOptions:Gt(i,a),emit:null,emitted:null,propsDefaults:o.MZ,inheritAttrs:i.inheritAttrs,ctx:o.MZ,data:o.MZ,props:o.MZ,attrs:o.MZ,slots:o.MZ,refs:o.MZ,setupState:o.MZ,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=qt.bind(null,s),e.ce&&e.ce(s),s}let Nn=null;const Mn=()=>Nn||k;let Wn,Bn;{const e=(0,o.We)(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach((t=>t(e))):r[0](e)}};Wn=t("__VUE_INSTANCE_SETTERS__",(e=>Nn=e)),Bn=t("__VUE_SSR_SETTERS__",(e=>Hn=e))}const jn=e=>{const t=Nn;return Wn(e),e.scope.on(),()=>{e.scope.off(),Wn(t)}},$n=()=>{Nn&&Nn.scope.off(),Wn(null)};function Un(e){return 4&e.vnode.shapeFlag}let zn,Kn,Hn=!1;function qn(e,t=!1,n=!1){t&&Bn(t);const{props:r,children:o}=e.vnode,i=Un(e);ft(e,r,i,t),It(e,o,n);const a=i?Gn(e,t):void 0;return t&&Bn(!1),a}function Gn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,je);const{setup:a}=n;if(a){(0,r.C4)();const n=e.setupContext=a.length>1?Qn(e):null,l=jn(e),u=i(a,e,0,[e.props,n]),c=(0,o.yL)(u);if((0,r.bl)(),l(),!c&&!e.sp||le(e)||ae(e),c){if(u.then($n,$n),t)return u.then((n=>{Yn(e,n,t)})).catch((t=>{s(t,e,0)}));e.asyncDep=u}else Yn(e,u,t)}else Xn(e,t)}function Yn(e,t,n){(0,o.Tn)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,o.Gv)(t)&&(e.setupState=(0,r.Pr)(t)),Xn(e,n)}function Xn(e,t,n){const i=e.type;if(!e.render){if(!t&&zn&&!i.render){const t=i.template||Ge(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:a,compilerOptions:s}=i,l=(0,o.X$)((0,o.X$)({isCustomElement:n,delimiters:a},r),s);i.render=zn(t,l)}}e.render=i.render||o.tE,Kn&&Kn(e)}{const t=jn(e);(0,r.C4)();try{ze(e)}finally{(0,r.bl)(),t()}}}const Jn={get(e,t){return(0,r.u4)(e,"get",""),e[t]}};function Qn(e){const t=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,Jn),slots:e.slots,emit:e.emit,expose:t}}function Zn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy((0,r.Pr)((0,r.IG)(e.exposed)),{get(t,n){return n in t?t[n]:n in We?We[n](e):void 0},has(e,t){return t in e||t in We}})):e.proxy}function er(e,t=!0){return(0,o.Tn)(e)?e.displayName||e.name:e.name||t&&e.__name}function tr(e){return(0,o.Tn)(e)&&"__vccOpts"in e}const nr=(e,t)=>{const n=(0,r.EW)(e,t,Hn);return n};function rr(e,t,n){const r=arguments.length;return 2===r?(0,o.Gv)(t)&&!(0,o.cy)(t)?yn(t)?_n(e,null,[t]):_n(e,t):_n(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&yn(n)&&(n=[n]),_n(e,t,n))}const or="3.5.12",ir=o.tE},5130:function(e,t,n){n.d(t,{D$:function(){return Ae},Ef:function(){return Pe},F:function(){return ge},Jo:function(){return Ie},XX:function(){return De},aG:function(){return M},eB:function(){return w}});n(4114),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8992),n(4520),n(3949),n(1454),n(7550);var r=n(6768),o=n(4232),i=n(144);
/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let a;const s="undefined"!==typeof window&&window.trustedTypes;if(s)try{a=s.createPolicy("vue",{createHTML:e=>e})}catch(Ne){}const l=a?e=>a.createHTML(e):e=>e,u="http://www.w3.org/2000/svg",c="http://www.w3.org/1998/Math/MathML",d="undefined"!==typeof document?document:null,h=d&&d.createElement("template"),f={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o="svg"===t?d.createElementNS(u,e):"mathml"===t?d.createElementNS(c,e):n?d.createElement(e,{is:n}):d.createElement(e);return"select"===e&&r&&null!=r.multiple&&o.setAttribute("multiple",r.multiple),o},createText:e=>d.createTextNode(e),createComment:e=>d.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>d.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,o,i){const a=n?n.previousSibling:t.lastChild;if(o&&(o===i||o.nextSibling)){while(1)if(t.insertBefore(o.cloneNode(!0),n),o===i||!(o=o.nextSibling))break}else{h.innerHTML=l("svg"===r?`<svg>${e}</svg>`:"mathml"===r?`<math>${e}</math>`:e);const o=h.content;if("svg"===r||"mathml"===r){const e=o.firstChild;while(e.firstChild)o.appendChild(e.firstChild);o.removeChild(e)}t.insertBefore(o,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},p="transition",v="animation",m=Symbol("_vtc"),g={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},y=(0,o.X$)({},r.QP,g),b=e=>(e.displayName="Transition",e.props=y,e),w=b(((e,{slots:t})=>(0,r.h)(r.pR,_(e),t))),S=(e,t=[])=>{(0,o.cy)(e)?e.forEach((e=>e(...t))):e&&e(...t)},E=e=>!!e&&((0,o.cy)(e)?e.some((e=>e.length>1)):e.length>1);function _(e){const t={};for(const o in e)o in g||(t[o]=e[o]);if(!1===e.css)return t;const{name:n="v",type:r,duration:i,enterFromClass:a=`${n}-enter-from`,enterActiveClass:s=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:u=a,appearActiveClass:c=s,appearToClass:d=l,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,v=C(i),m=v&&v[0],y=v&&v[1],{onBeforeEnter:b,onEnter:w,onEnterCancelled:_,onLeave:k,onLeaveCancelled:A,onBeforeAppear:R=b,onAppear:V=w,onAppearCancelled:D=_}=t,O=(e,t,n)=>{x(e,t?d:l),x(e,t?c:s),n&&n()},L=(e,t)=>{e._isLeaving=!1,x(e,h),x(e,p),x(e,f),t&&t()},N=e=>(t,n)=>{const o=e?V:w,i=()=>O(t,e,n);S(o,[t,i]),T((()=>{x(t,e?u:a),I(t,e?d:l),E(o)||F(t,r,m,i)}))};return(0,o.X$)(t,{onBeforeEnter(e){S(b,[e]),I(e,a),I(e,s)},onBeforeAppear(e){S(R,[e]),I(e,u),I(e,c)},onEnter:N(!1),onAppear:N(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>L(e,t);I(e,h),I(e,f),P(),T((()=>{e._isLeaving&&(x(e,h),I(e,p),E(k)||F(e,r,y,n))})),S(k,[e,n])},onEnterCancelled(e){O(e,!1),S(_,[e])},onAppearCancelled(e){O(e,!0),S(D,[e])},onLeaveCancelled(e){L(e),S(A,[e])}})}function C(e){if(null==e)return null;if((0,o.Gv)(e))return[k(e.enter),k(e.leave)];{const t=k(e);return[t,t]}}function k(e){const t=(0,o.Ro)(e);return t}function I(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e[m]||(e[m]=new Set)).add(t)}function x(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const n=e[m];n&&(n.delete(t),n.size||(e[m]=void 0))}function T(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let A=0;function F(e,t,n,r){const o=e._endId=++A,i=()=>{o===e._endId&&r()};if(null!=n)return setTimeout(i,n);const{type:a,timeout:s,propCount:l}=R(e,t);if(!a)return r();const u=a+"end";let c=0;const d=()=>{e.removeEventListener(u,h),i()},h=t=>{t.target===e&&++c>=l&&d()};setTimeout((()=>{c<l&&d()}),s+1),e.addEventListener(u,h)}function R(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),o=r(`${p}Delay`),i=r(`${p}Duration`),a=V(o,i),s=r(`${v}Delay`),l=r(`${v}Duration`),u=V(s,l);let c=null,d=0,h=0;t===p?a>0&&(c=p,d=a,h=i.length):t===v?u>0&&(c=v,d=u,h=l.length):(d=Math.max(a,u),c=d>0?a>u?p:v:null,h=c?c===p?i.length:l.length:0);const f=c===p&&/\b(transform|all)(,|$)/.test(r(`${p}Property`).toString());return{type:c,timeout:d,propCount:h,hasTransform:f}}function V(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>D(t)+D(e[n]))))}function D(e){return"auto"===e?0:1e3*Number(e.slice(0,-1).replace(",","."))}function P(){return document.body.offsetHeight}function O(e,t,n){const r=e[m];r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const L=Symbol("_vod"),N=Symbol("_vsh"),M={beforeMount(e,{value:t},{transition:n}){e[L]="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):W(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!==!n&&(r?t?(r.beforeEnter(e),W(e,!0),r.enter(e)):r.leave(e,(()=>{W(e,!1)})):W(e,t))},beforeUnmount(e,{value:t}){W(e,t)}};function W(e,t){e.style.display=t?e[L]:"none",e[N]=!t}const B=Symbol("");const j=/(^|;)\s*display\s*:/;function $(e,t,n){const r=e.style,i=(0,o.Kg)(n);let a=!1;if(n&&!i){if(t)if((0,o.Kg)(t))for(const e of t.split(";")){const t=e.slice(0,e.indexOf(":")).trim();null==n[t]&&z(r,t,"")}else for(const e in t)null==n[e]&&z(r,e,"");for(const e in n)"display"===e&&(a=!0),z(r,e,n[e])}else if(i){if(t!==n){const e=r[B];e&&(n+=";"+e),r.cssText=n,a=j.test(n)}}else t&&e.removeAttribute("style");L in e&&(e[L]=a?r.display:"",e[N]&&(r.display="none"))}const U=/\s*!important$/;function z(e,t,n){if((0,o.cy)(n))n.forEach((n=>z(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=q(e,t);U.test(n)?e.setProperty((0,o.Tg)(r),n.replace(U,""),"important"):e[r]=n}}const K=["Webkit","Moz","ms"],H={};function q(e,t){const n=H[t];if(n)return n;let r=(0,o.PT)(t);if("filter"!==r&&r in e)return H[t]=r;r=(0,o.ZH)(r);for(let o=0;o<K.length;o++){const n=K[o]+r;if(n in e)return H[t]=n}return t}const G="http://www.w3.org/1999/xlink";function Y(e,t,n,r,i,a=(0,o.J$)(t)){r&&t.startsWith("xlink:")?null==n?e.removeAttributeNS(G,t.slice(6,t.length)):e.setAttributeNS(G,t,n):null==n||a&&!(0,o.Y2)(n)?e.removeAttribute(t):e.setAttribute(t,a?"":(0,o.Bm)(n)?String(n):n)}function X(e,t,n,r,i){if("innerHTML"===t||"textContent"===t)return void(null!=n&&(e[t]="innerHTML"===t?l(n):n));const a=e.tagName;if("value"===t&&"PROGRESS"!==a&&!a.includes("-")){const r="OPTION"===a?e.getAttribute("value")||"":e.value,o=null==n?"checkbox"===e.type?"on":"":String(n);return r===o&&"_value"in e||(e.value=o),null==n&&e.removeAttribute(t),void(e._value=n)}let s=!1;if(""===n||null==n){const r=typeof e[t];"boolean"===r?n=(0,o.Y2)(n):null==n&&"string"===r?(n="",s=!0):"number"===r&&(n=0,s=!0)}try{e[t]=n}catch(Ne){0}s&&e.removeAttribute(i||t)}function J(e,t,n,r){e.addEventListener(t,n,r)}function Q(e,t,n,r){e.removeEventListener(t,n,r)}const Z=Symbol("_vei");function ee(e,t,n,r,o=null){const i=e[Z]||(e[Z]={}),a=i[t];if(r&&a)a.value=r;else{const[n,s]=ne(t);if(r){const a=i[t]=ae(r,o);J(e,n,a,s)}else a&&(Q(e,n,a,s),i[t]=void 0)}}const te=/(?:Once|Passive|Capture)$/;function ne(e){let t;if(te.test(e)){let n;t={};while(n=e.match(te))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,o.Tg)(e.slice(2));return[n,t]}let re=0;const oe=Promise.resolve(),ie=()=>re||(oe.then((()=>re=0)),re=Date.now());function ae(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,r.qL)(se(e,n.value),t,5,[e])};return n.value=e,n.attached=ie(),n}function se(e,t){if((0,o.cy)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const le=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,ue=(e,t,n,r,i,a)=>{const s="svg"===i;"class"===t?O(e,r,s):"style"===t?$(e,n,r):(0,o.Mp)(t)?(0,o.CP)(t)||ee(e,t,n,r,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):ce(e,t,r,s))?(X(e,t,r),e.tagName.includes("-")||"value"!==t&&"checked"!==t&&"selected"!==t||Y(e,t,r,s,a,"value"!==t)):!e._isVueCE||!/[A-Z]/.test(t)&&(0,o.Kg)(r)?("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),Y(e,t,r,s)):X(e,(0,o.PT)(t),r,a,t)};function ce(e,t,n,r){if(r)return"innerHTML"===t||"textContent"===t||!!(t in e&&le(t)&&(0,o.Tn)(n));if("spellcheck"===t||"draggable"===t||"translate"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}return(!le(t)||!(0,o.Kg)(n))&&t in e}
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;const de=new WeakMap,he=new WeakMap,fe=Symbol("_moveCb"),pe=Symbol("_enterCb"),ve=e=>(delete e.props.mode,e),me=ve({name:"TransitionGroup",props:(0,o.X$)({},y,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,r.nI)(),o=(0,r.Gy)();let a,s;return(0,r.$u)((()=>{if(!a.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!Se(a[0].el,n.vnode.el,t))return;a.forEach(ye),a.forEach(be);const r=a.filter(we);P(),r.forEach((e=>{const n=e.el,r=n.style;I(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const o=n[fe]=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",o),n[fe]=null,x(n,t))};n.addEventListener("transitionend",o)}))})),()=>{const l=(0,i.ux)(e),u=_(l);let c=l.tag||r.FK;if(a=[],s)for(let e=0;e<s.length;e++){const t=s[e];t.el&&t.el instanceof Element&&(a.push(t),(0,r.MZ)(t,(0,r.OW)(t,u,o,n)),de.set(t,t.el.getBoundingClientRect()))}s=t.default?(0,r.Df)(t.default()):[];for(let e=0;e<s.length;e++){const t=s[e];null!=t.key&&(0,r.MZ)(t,(0,r.OW)(t,u,o,n))}return(0,r.bF)(c,null,s)}}}),ge=me;function ye(e){const t=e.el;t[fe]&&t[fe](),t[pe]&&t[pe]()}function be(e){he.set(e,e.el.getBoundingClientRect())}function we(e){const t=de.get(e),n=he.get(e),r=t.left-n.left,o=t.top-n.top;if(r||o){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${o}px)`,t.transitionDuration="0s",e}}function Se(e,t,n){const r=e.cloneNode(),o=e[m];o&&o.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const i=1===t.nodeType?t:t.parentNode;i.appendChild(r);const{hasTransform:a}=R(r);return i.removeChild(r),a}const Ee=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,o.cy)(t)?e=>(0,o.DY)(t,e):t};function _e(e){e.target.composing=!0}function Ce(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ke=Symbol("_assign"),Ie={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[ke]=Ee(i);const a=r||i.props&&"number"===i.props.type;J(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;n&&(r=r.trim()),a&&(r=(0,o.bB)(r)),e[ke](r)})),n&&J(e,"change",(()=>{e.value=e.value.trim()})),t||(J(e,"compositionstart",_e),J(e,"compositionend",Ce),J(e,"change",Ce))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:a}},s){if(e[ke]=Ee(s),e.composing)return;const l=!a&&"number"!==e.type||/^0\d/.test(e.value)?e.value:(0,o.bB)(e.value),u=null==t?"":t;if(l!==u){if(document.activeElement===e&&"range"!==e.type){if(r&&t===n)return;if(i&&e.value.trim()===u)return}e.value=u}}};const xe=["ctrl","shift","alt","meta"],Te={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>xe.some((n=>e[`${n}Key`]&&!t.includes(n)))},Ae=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(n,...r)=>{for(let e=0;e<t.length;e++){const r=Te[t[e]];if(r&&r(n,t))return}return e(n,...r)})},Fe=(0,o.X$)({patchProp:ue},f);let Re;function Ve(){return Re||(Re=(0,r.K9)(Fe))}const De=(...e)=>{Ve().render(...e)},Pe=(...e)=>{const t=Ve().createApp(...e);const{mount:n}=t;return t.mount=e=>{const r=Le(e);if(!r)return;const i=t._component;(0,o.Tn)(i)||i.render||i.template||(i.template=r.innerHTML),1===r.nodeType&&(r.textContent="");const a=n(r,!1,Oe(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},t};function Oe(e){return e instanceof SVGElement?"svg":"function"===typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function Le(e){if((0,o.Kg)(e)){const t=document.querySelector(e);return t}return e}},4232:function(e,t,n){n.d(t,{$3:function(){return f},$H:function(){return N},BH:function(){return K},BX:function(){return ne},Bm:function(){return S},C4:function(){return J},CE:function(){return v},CP:function(){return u},DY:function(){return M},Gv:function(){return E},J$:function(){return Z},Kg:function(){return w},MZ:function(){return o},Mp:function(){return l},NO:function(){return s},Oj:function(){return i},PT:function(){return V},Qd:function(){return x},Ro:function(){return j},SU:function(){return A},TF:function(){return d},Tg:function(){return P},Tn:function(){return b},Tr:function(){return H},We:function(){return U},X$:function(){return c},Y2:function(){return ee},ZH:function(){return O},Zf:function(){return I},bB:function(){return B},cy:function(){return p},gd:function(){return y},pD:function(){return r},rU:function(){return L},tE:function(){return a},u3:function(){return re},vM:function(){return m},v_:function(){return ie},yI:function(){return T},yL:function(){return _},yQ:function(){return W}});n(4114),n(8992),n(4520),n(3949),n(1454),n(8872);
/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function r(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return e=>e in t}const o={},i=[],a=()=>{},s=()=>!1,l=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),u=e=>e.startsWith("onUpdate:"),c=Object.assign,d=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},h=Object.prototype.hasOwnProperty,f=(e,t)=>h.call(e,t),p=Array.isArray,v=e=>"[object Map]"===k(e),m=e=>"[object Set]"===k(e),g=e=>"[object Date]"===k(e),y=e=>"[object RegExp]"===k(e),b=e=>"function"===typeof e,w=e=>"string"===typeof e,S=e=>"symbol"===typeof e,E=e=>null!==e&&"object"===typeof e,_=e=>(E(e)||b(e))&&b(e.then)&&b(e.catch),C=Object.prototype.toString,k=e=>C.call(e),I=e=>k(e).slice(8,-1),x=e=>"[object Object]"===k(e),T=e=>w(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,A=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),F=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},R=/-(\w)/g,V=F((e=>e.replace(R,((e,t)=>t?t.toUpperCase():"")))),D=/\B([A-Z])/g,P=F((e=>e.replace(D,"-$1").toLowerCase())),O=F((e=>e.charAt(0).toUpperCase()+e.slice(1))),L=F((e=>{const t=e?`on${O(e)}`:"";return t})),N=(e,t)=>!Object.is(e,t),M=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},W=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},B=e=>{const t=parseFloat(e);return isNaN(t)?e:t},j=e=>{const t=w(e)?Number(e):NaN;return isNaN(t)?e:t};let $;const U=()=>$||($="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const z="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",K=r(z);function H(e){if(p(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=w(r)?X(r):H(r);if(o)for(const e in o)t[e]=o[e]}return t}if(w(e)||E(e))return e}const q=/;(?![^(]*\))/g,G=/:([^]+)/,Y=/\/\*[^]*?\*\//g;function X(e){const t={};return e.replace(Y,"").split(q).forEach((e=>{if(e){const n=e.split(G);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function J(e){let t="";if(w(e))t=e;else if(p(e))for(let n=0;n<e.length;n++){const r=J(e[n]);r&&(t+=r+" ")}else if(E(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Q="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Z=r(Q);function ee(e){return!!e||""===e}function te(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=ne(e[r],t[r]);return n}function ne(e,t){if(e===t)return!0;let n=g(e),r=g(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=S(e),r=S(t),n||r)return e===t;if(n=p(e),r=p(t),n||r)return!(!n||!r)&&te(e,t);if(n=E(e),r=E(t),n||r){if(!n||!r)return!1;const o=Object.keys(e).length,i=Object.keys(t).length;if(o!==i)return!1;for(const n in e){const r=e.hasOwnProperty(n),o=t.hasOwnProperty(n);if(r&&!o||!r&&o||!ne(e[n],t[n]))return!1}}return String(e)===String(t)}function re(e,t){return e.findIndex((e=>ne(e,t)))}const oe=e=>!(!e||!0!==e["__v_isRef"]),ie=e=>w(e)?e:null==e?"":p(e)||E(e)&&(e.toString===C||!b(e.toString))?oe(e)?ie(e.value):JSON.stringify(e,ae,2):String(e),ae=(e,t)=>oe(t)?ae(e,t.value):v(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n],r)=>(e[se(t,r)+" =>"]=n,e)),{})}:m(t)?{[`Set(${t.size})`]:[...t.values()].map((e=>se(e)))}:S(t)?se(t):!E(t)||p(t)||x(t)?t:String(t),se=(e,t="")=>{var n;return S(e)?`Symbol(${null!=(n=e.description)?n:t})`:e}},1241:function(e,t){t.A=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n}},973:function(e,t,n){n.d(t,{LA:function(){return K},aE:function(){return tt}});n(4114),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8992),n(3215),n(4520),n(2577),n(3949),n(1454),n(8872),n(7550);var r=n(6768),o=n(144);
/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const i="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,a=e=>i?Symbol(e):"_vr_"+e,s=a("rvlm"),l=a("rvd"),u=a("r"),c=a("rl"),d=a("rvl"),h="undefined"!==typeof window;function f(e){return e.__esModule||i&&"Module"===e[Symbol.toStringTag]}const p=Object.assign;function v(e,t){const n={};for(const r in t){const o=t[r];n[r]=Array.isArray(o)?o.map(e):e(o)}return n}const m=()=>{};const g=/\/$/,y=e=>e.replace(g,"");function b(e,t,n="/"){let r,o={},i="",a="";const s=t.indexOf("?"),l=t.indexOf("#",s>-1?s:0);return s>-1&&(r=t.slice(0,s),i=t.slice(s+1,l>-1?l:t.length),o=e(i)),l>-1&&(r=r||t.slice(0,l),a=t.slice(l,t.length)),r=x(null!=r?r:t,n),{fullPath:r+(i&&"?")+i+a,path:r,query:o,hash:a}}function w(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function S(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function E(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&_(t.matched[r],n.matched[o])&&C(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function _(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function C(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!k(e[n],t[n]))return!1;return!0}function k(e,t){return Array.isArray(e)?I(e,t):Array.isArray(t)?I(t,e):e===t}function I(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function x(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o,i,a=n.length-1;for(o=0;o<r.length;o++)if(i=r[o],1!==a&&"."!==i){if(".."!==i)break;a--}return n.slice(0,a).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var T,A;(function(e){e["pop"]="pop",e["push"]="push"})(T||(T={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(A||(A={}));function F(e){if(!e)if(h){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),y(e)}const R=/^[^#]+#/;function V(e,t){return e.replace(R,"#")+t}function D(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const P=()=>({left:window.pageXOffset,top:window.pageYOffset});function O(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const o="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=D(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function L(e,t){const n=history.state?history.state.position-t:-1;return n+e}const N=new Map;function M(e,t){N.set(e,t)}function W(e){const t=N.get(e);return N.delete(e),t}let B=()=>location.protocol+"//"+location.host;function j(e,t){const{pathname:n,search:r,hash:o}=t,i=e.indexOf("#");if(i>-1){let t=o.includes(e.slice(i))?e.slice(i).length:1,n=o.slice(t);return"/"!==n[0]&&(n="/"+n),S(n,"")}const a=S(n,e);return a+r+o}function $(e,t,n,r){let o=[],i=[],a=null;const s=({state:i})=>{const s=j(e,location),l=n.value,u=t.value;let c=0;if(i){if(n.value=s,t.value=i,a&&a===l)return void(a=null);c=u?i.position-u.position:0}else r(s);o.forEach((e=>{e(n.value,l,{delta:c,type:T.pop,direction:c?c>0?A.forward:A.back:A.unknown})}))};function l(){a=n.value}function u(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return i.push(t),t}function c(){const{history:e}=window;e.state&&e.replaceState(p({},e.state,{scroll:P()}),"")}function d(){for(const e of i)e();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",c),{pauseListeners:l,listen:u,destroy:d}}function U(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?P():null}}function z(e){const{history:t,location:n}=window,r={value:j(e,n)},o={value:t.state};function i(r,i,a){const s=e.indexOf("#"),l=s>-1?(n.host&&document.querySelector("base")?e:e.slice(s))+r:B()+e+r;try{t[a?"replaceState":"pushState"](i,"",l),o.value=i}catch(u){console.error(u),n[a?"replace":"assign"](l)}}function a(e,n){const a=p({},t.state,U(o.value.back,e,o.value.forward,!0),n,{position:o.value.position});i(e,a,!0),r.value=e}function s(e,n){const a=p({},o.value,t.state,{forward:e,scroll:P()});i(a.current,a,!0);const s=p({},U(r.value,e,null),{position:a.position+1},n);i(e,s,!1),r.value=e}return o.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:s,replace:a}}function K(e){e=F(e);const t=z(e),n=$(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const o=p({location:"",base:e,go:r,createHref:V.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function H(e){return"string"===typeof e||e&&"object"===typeof e}function q(e){return"string"===typeof e||"symbol"===typeof e}const G={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Y=a("nf");var X;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(X||(X={}));function J(e,t){return p(new Error,{type:e,[Y]:!0},t)}function Q(e,t){return e instanceof Error&&Y in e&&(null==t||!!(e.type&t))}const Z="[^/]+?",ee={sensitive:!1,strict:!1,start:!0,end:!0},te=/[.+*?^${}()[\]/\\]/g;function ne(e,t){const n=p({},ee,t),r=[];let o=n.start?"^":"";const i=[];for(const c of e){const e=c.length?[]:[90];n.strict&&!c.length&&(o+="/");for(let t=0;t<c.length;t++){const r=c[t];let a=40+(n.sensitive?.25:0);if(0===r.type)t||(o+="/"),o+=r.value.replace(te,"\\$&"),a+=40;else if(1===r.type){const{value:e,repeatable:n,optional:s,regexp:l}=r;i.push({name:e,repeatable:n,optional:s});const d=l||Z;if(d!==Z){a+=10;try{new RegExp(`(${d})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${e}" (${d}): `+u.message)}}let h=n?`((?:${d})(?:/(?:${d}))*)`:`(${d})`;t||(h=s&&c.length<2?`(?:/${h})`:"/"+h),s&&(h+="?"),o+=h,a+=20,s&&(a+=-8),n&&(a+=-20),".*"===d&&(a+=-50)}e.push(a)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const a=new RegExp(o,n.sensitive?"":"i");function s(e){const t=e.match(a),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",o=i[r-1];n[o.name]=e&&o.repeatable?e.split("/"):e}return n}function l(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of o)if(0===e.type)n+=e.value;else if(1===e.type){const{value:i,repeatable:a,optional:s}=e,l=i in t?t[i]:"";if(Array.isArray(l)&&!a)throw new Error(`Provided param "${i}" is an array but it is not repeatable (* or + modifiers)`);const u=Array.isArray(l)?l.join("/"):l;if(!u){if(!s)throw new Error(`Missing required param "${i}"`);o.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n}return{re:a,score:r,keys:i,parse:s,stringify:l}}function re(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function oe(e,t){let n=0;const r=e.score,o=t.score;while(n<r.length&&n<o.length){const e=re(r[n],o[n]);if(e)return e;n++}return o.length-r.length}const ie={type:0,value:""},ae=/[a-zA-Z0-9_]/;function se(e){if(!e)return[[]];if("/"===e)return[[ie]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const o=[];let i;function a(){i&&o.push(i),i=[]}let s,l=0,u="",c="";function d(){u&&(0===n?i.push({type:0,value:u}):1===n||2===n||3===n?(i.length>1&&("*"===s||"+"===s)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:c,repeatable:"*"===s||"+"===s,optional:"*"===s||"?"===s})):t("Invalid state to consume buffer"),u="")}function h(){u+=s}while(l<e.length)if(s=e[l++],"\\"!==s||2===n)switch(n){case 0:"/"===s?(u&&d(),a()):":"===s?(d(),n=1):h();break;case 4:h(),n=r;break;case 1:"("===s?n=2:ae.test(s)?h():(d(),n=0,"*"!==s&&"?"!==s&&"+"!==s&&l--);break;case 2:")"===s?"\\"==c[c.length-1]?c=c.slice(0,-1)+s:n=3:c+=s;break;case 3:d(),n=0,"*"!==s&&"?"!==s&&"+"!==s&&l--,c="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),d(),a(),o}function le(e,t,n){const r=ne(se(e.path),n);const o=p(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf===!t.record.aliasOf&&t.children.push(o),o}function ue(e,t){const n=[],r=new Map;function o(e){return r.get(e)}function i(e,n,r){const o=!r,s=de(e);s.aliasOf=r&&r.record;const u=ve(t,e),c=[s];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)c.push(p({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s}))}let d,h;for(const t of c){const{path:c}=t;if(n&&"/"!==c[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(c&&r+c)}if(d=le(t,n,u),r?r.alias.push(d):(h=h||d,h!==d&&h.alias.push(d),o&&e.name&&!fe(d)&&a(e.name)),"children"in s){const e=s.children;for(let t=0;t<e.length;t++)i(e[t],d,r&&r.children[t])}r=r||d,l(d)}return h?()=>{a(h)}:m}function a(e){if(q(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(a),t.alias.forEach(a))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(a),e.alias.forEach(a))}}function s(){return n}function l(e){let t=0;while(t<n.length&&oe(e,n[t])>=0&&(e.record.path!==n[t].record.path||!me(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!fe(e)&&r.set(e.record.name,e)}function u(e,t){let o,i,a,s={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw J(1,{location:e});a=o.record.name,s=p(ce(t.params,o.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),i=o.stringify(s)}else if("path"in e)i=e.path,o=n.find((e=>e.re.test(i))),o&&(s=o.parse(i),a=o.record.name);else{if(o=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!o)throw J(1,{location:e,currentLocation:t});a=o.record.name,s=p({},t.params,e.params),i=o.stringify(s)}const l=[];let u=o;while(u)l.unshift(u.record),u=u.parent;return{name:a,path:i,params:s,matched:l,meta:pe(l)}}return t=ve({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>i(e))),{addRoute:i,resolve:u,removeRoute:a,getRoutes:s,getRecordMatcher:o}}function ce(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function de(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:he(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function he(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function fe(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function pe(e){return e.reduce(((e,t)=>p(e,t.meta)),{})}function ve(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function me(e,t){return t.children.some((t=>t===e||me(e,t)))}const ge=/#/g,ye=/&/g,be=/\//g,we=/=/g,Se=/\?/g,Ee=/\+/g,_e=/%5B/g,Ce=/%5D/g,ke=/%5E/g,Ie=/%60/g,xe=/%7B/g,Te=/%7C/g,Ae=/%7D/g,Fe=/%20/g;function Re(e){return encodeURI(""+e).replace(Te,"|").replace(_e,"[").replace(Ce,"]")}function Ve(e){return Re(e).replace(xe,"{").replace(Ae,"}").replace(ke,"^")}function De(e){return Re(e).replace(Ee,"%2B").replace(Fe,"+").replace(ge,"%23").replace(ye,"%26").replace(Ie,"`").replace(xe,"{").replace(Ae,"}").replace(ke,"^")}function Pe(e){return De(e).replace(we,"%3D")}function Oe(e){return Re(e).replace(ge,"%23").replace(Se,"%3F")}function Le(e){return null==e?"":Oe(e).replace(be,"%2F")}function Ne(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Me(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const e=r[o].replace(Ee," "),n=e.indexOf("="),i=Ne(n<0?e:e.slice(0,n)),a=n<0?null:Ne(e.slice(n+1));if(i in t){let e=t[i];Array.isArray(e)||(e=t[i]=[e]),e.push(a)}else t[i]=a}return t}function We(e){let t="";for(let n in e){const r=e[n];if(n=Pe(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const o=Array.isArray(r)?r.map((e=>e&&De(e))):[r&&De(r)];o.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Be(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}function je(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function $e(e,t,n,r,o){const i=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise(((a,s)=>{const l=e=>{!1===e?s(J(4,{from:n,to:t})):e instanceof Error?s(e):H(e)?s(J(2,{from:t,to:e})):(i&&r.enterCallbacks[o]===i&&"function"===typeof e&&i.push(e),a())},u=e.call(r&&r.instances[o],t,n,l);let c=Promise.resolve(u);e.length<3&&(c=c.then(l)),c.catch((e=>s(e)))}))}function Ue(e,t,n,r){const o=[];for(const i of e)for(const e in i.components){let a=i.components[e];if("beforeRouteEnter"===t||i.instances[e])if(ze(a)){const s=a.__vccOpts||a,l=s[t];l&&o.push($e(l,n,r,i,e))}else{let s=a();0,o.push((()=>s.then((o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${i.path}"`));const a=f(o)?o.default:o;i.components[e]=a;const s=a.__vccOpts||a,l=s[t];return l&&$e(l,n,r,i,e)()}))))}}return o}function ze(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function Ke(e){const t=(0,r.WQ)(u),n=(0,r.WQ)(c),i=(0,r.EW)((()=>t.resolve((0,o.R1)(e.to)))),a=(0,r.EW)((()=>{const{matched:e}=i.value,{length:t}=e,r=e[t-1],o=n.matched;if(!r||!o.length)return-1;const a=o.findIndex(_.bind(null,r));if(a>-1)return a;const s=Xe(e[t-2]);return t>1&&Xe(r)===s&&o[o.length-1].path!==s?o.findIndex(_.bind(null,e[t-2])):a})),s=(0,r.EW)((()=>a.value>-1&&Ye(n.params,i.value.params))),l=(0,r.EW)((()=>a.value>-1&&a.value===n.matched.length-1&&C(n.params,i.value.params)));function d(n={}){return Ge(n)?t[(0,o.R1)(e.replace)?"replace":"push"]((0,o.R1)(e.to)).catch(m):Promise.resolve()}return{route:i,href:(0,r.EW)((()=>i.value.href)),isActive:s,isExactActive:l,navigate:d}}const He=(0,r.pM)({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ke,setup(e,{slots:t}){const n=(0,o.Kh)(Ke(e)),{options:i}=(0,r.WQ)(u),a=(0,r.EW)((()=>({[Je(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Je(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const o=t.default&&t.default(n);return e.custom?o:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},o)}}}),qe=He;function Ge(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ye(e,t){for(const n in t){const r=t[n],o=e[n];if("string"===typeof r){if(r!==o)return!1}else if(!Array.isArray(o)||o.length!==r.length||r.some(((e,t)=>e!==o[t])))return!1}return!0}function Xe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Je=(e,t,n)=>null!=e?e:null!=t?t:n,Qe=(0,r.pM)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const i=(0,r.WQ)(d),a=(0,r.EW)((()=>e.route||i.value)),u=(0,r.WQ)(l,0),c=(0,r.EW)((()=>a.value.matched[u]));(0,r.Gt)(l,u+1),(0,r.Gt)(s,c),(0,r.Gt)(d,a);const h=(0,o.KR)();return(0,r.wB)((()=>[h.value,c.value,e.name]),(([e,t,n],[r,o,i])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&_(t,o)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const o=a.value,i=c.value,s=i&&i.components[e.name],l=e.name;if(!s)return Ze(n.default,{Component:s,route:o});const u=i.props[e.name],d=u?!0===u?o.params:"function"===typeof u?u(o):u:null,f=e=>{e.component.isUnmounted&&(i.instances[l]=null)},v=(0,r.h)(s,p({},d,t,{onVnodeUnmounted:f,ref:h}));return Ze(n.default,{Component:v,route:o})||v}}});function Ze(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const et=Qe;function tt(e){const t=ue(e.routes,e),n=e.parseQuery||Me,i=e.stringifyQuery||We,a=e.history;const s=je(),l=je(),f=je(),g=(0,o.IJ)(G);let y=G;h&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const S=v.bind(null,(e=>""+e)),_=v.bind(null,Le),C=v.bind(null,Ne);function k(e,n){let r,o;return q(e)?(r=t.getRecordMatcher(e),o=n):o=e,t.addRoute(o,r)}function I(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function x(){return t.getRoutes().map((e=>e.record))}function A(e){return!!t.getRecordMatcher(e)}function F(e,r){if(r=p({},r||g.value),"string"===typeof e){const o=b(n,e,r.path),i=t.resolve({path:o.path},r),s=a.createHref(o.fullPath);return p(o,i,{params:C(i.params),hash:Ne(o.hash),redirectedFrom:void 0,href:s})}let o;if("path"in e)o=p({},e,{path:b(n,e.path,r.path).path});else{const t=p({},e.params);for(const e in t)null==t[e]&&delete t[e];o=p({},e,{params:_(e.params)}),r.params=_(r.params)}const s=t.resolve(o,r),l=e.hash||"";s.params=S(C(s.params));const u=w(i,p({},e,{hash:Ve(l),path:s.path})),c=a.createHref(u);return p({fullPath:u,hash:l,query:i===We?Be(e.query):e.query||{}},s,{redirectedFrom:void 0,href:c})}function R(e){return"string"===typeof e?b(n,e,g.value.path):p({},e)}function V(e,t){if(y!==e)return J(8,{from:t,to:e})}function D(e){return j(e)}function N(e){return D(p(R(e),{replace:!0}))}function B(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=R(r):{path:r},r.params={}),p({query:e.query,hash:e.hash,params:e.params},r)}}function j(e,t){const n=y=F(e),r=g.value,o=e.state,a=e.force,s=!0===e.replace,l=B(n);if(l)return j(p(R(l),{state:o,force:a,replace:s}),t||n);const u=n;let c;return u.redirectedFrom=t,!a&&E(i,r,n)&&(c=J(16,{to:u,from:r}),oe(r,r,!0,!1)),(c?Promise.resolve(c):U(u,r)).catch((e=>Q(e)?Q(e,2)?e:re(e):te(e,u,r))).then((e=>{if(e){if(Q(e,2))return j(p(R(e.to),{state:o,force:a,replace:s}),t||u)}else e=K(u,r,!0,s,o);return z(u,r,e),e}))}function $(e,t){const n=V(e,t);return n?Promise.reject(n):Promise.resolve()}function U(e,t){let n;const[r,o,i]=rt(e,t);n=Ue(r.reverse(),"beforeRouteLeave",e,t);for(const s of r)s.leaveGuards.forEach((r=>{n.push($e(r,e,t))}));const a=$.bind(null,e,t);return n.push(a),nt(n).then((()=>{n=[];for(const r of s.list())n.push($e(r,e,t));return n.push(a),nt(n)})).then((()=>{n=Ue(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach((r=>{n.push($e(r,e,t))}));return n.push(a),nt(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const o of r.beforeEnter)n.push($e(o,e,t));else n.push($e(r.beforeEnter,e,t));return n.push(a),nt(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=Ue(i,"beforeRouteEnter",e,t),n.push(a),nt(n)))).then((()=>{n=[];for(const r of l.list())n.push($e(r,e,t));return n.push(a),nt(n)})).catch((e=>Q(e,8)?e:Promise.reject(e)))}function z(e,t,n){for(const r of f.list())r(e,t,n)}function K(e,t,n,r,o){const i=V(e,t);if(i)return i;const s=t===G,l=h?history.state:{};n&&(r||s?a.replace(e.fullPath,p({scroll:s&&l&&l.scroll},o)):a.push(e.fullPath,o)),g.value=e,oe(e,t,n,s),re()}let H;function Y(){H=a.listen(((e,t,n)=>{const r=F(e),o=B(r);if(o)return void j(p(o,{replace:!0}),r).catch(m);y=r;const i=g.value;h&&M(L(i.fullPath,n.delta),P()),U(r,i).catch((e=>Q(e,12)?e:Q(e,2)?(j(e.to,r).then((e=>{Q(e,20)&&!n.delta&&n.type===T.pop&&a.go(-1,!1)})).catch(m),Promise.reject()):(n.delta&&a.go(-n.delta,!1),te(e,r,i)))).then((e=>{e=e||K(r,i,!1),e&&(n.delta?a.go(-n.delta,!1):n.type===T.pop&&Q(e,20)&&a.go(-1,!1)),z(r,i,e)})).catch(m)}))}let X,Z=je(),ee=je();function te(e,t,n){re(e);const r=ee.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function ne(){return X&&g.value!==G?Promise.resolve():new Promise(((e,t)=>{Z.add([e,t])}))}function re(e){return X||(X=!e,Y(),Z.list().forEach((([t,n])=>e?n(e):t())),Z.reset()),e}function oe(t,n,o,i){const{scrollBehavior:a}=e;if(!h||!a)return Promise.resolve();const s=!o&&W(L(t.fullPath,0))||(i||!o)&&history.state&&history.state.scroll||null;return(0,r.dY)().then((()=>a(t,n,s))).then((e=>e&&O(e))).catch((e=>te(e,t,n)))}const ie=e=>a.go(e);let ae;const se=new Set,le={currentRoute:g,addRoute:k,removeRoute:I,hasRoute:A,getRoutes:x,resolve:F,options:e,push:D,replace:N,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:s.add,beforeResolve:l.add,afterEach:f.add,onError:ee.add,isReady:ne,install(e){const t=this;e.component("RouterLink",qe),e.component("RouterView",et),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,o.R1)(g)}),h&&!ae&&g.value===G&&(ae=!0,D(a.location).catch((e=>{0})));const n={};for(const o in G)n[o]=(0,r.EW)((()=>g.value[o]));e.provide(u,t),e.provide(c,(0,o.Kh)(n)),e.provide(d,g);const i=e.unmount;se.add(e),e.unmount=function(){se.delete(e),se.size<1&&(y=G,H&&H(),g.value=G,ae=!1,X=!1),i()}}};return le}function nt(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function rt(e,t){const n=[],r=[],o=[],i=Math.max(t.matched.length,e.matched.length);for(let a=0;a<i;a++){const i=t.matched[a];i&&(e.matched.find((e=>_(e,i)))?r.push(i):n.push(i));const s=e.matched[a];s&&(t.matched.find((e=>_(e,s)))||o.push(s))}return[n,r,o]}},9306:function(e,t,n){var r=n(4901),o=n(6823),i=TypeError;e.exports=function(e){if(r(e))return e;throw new i(o(e)+" is not a function")}},3506:function(e,t,n){var r=n(3925),o=String,i=TypeError;e.exports=function(e){if(r(e))return e;throw new i("Can't set "+o(e)+" as a prototype")}},7080:function(e,t,n){var r=n(4402).has;e.exports=function(e){return r(e),e}},6469:function(e,t,n){var r=n(8227),o=n(2360),i=n(4913).f,a=r("unscopables"),s=Array.prototype;void 0===s[a]&&i(s,a,{configurable:!0,value:o(null)}),e.exports=function(e){s[a][e]=!0}},679:function(e,t,n){var r=n(1625),o=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw new o("Incorrect invocation")}},8551:function(e,t,n){var r=n(34),o=String,i=TypeError;e.exports=function(e){if(r(e))return e;throw new i(o(e)+" is not an object")}},7811:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},7394:function(e,t,n){var r=n(4576),o=n(6706),i=n(2195),a=r.ArrayBuffer,s=r.TypeError;e.exports=a&&o(a.prototype,"byteLength","get")||function(e){if("ArrayBuffer"!==i(e))throw new s("ArrayBuffer expected");return e.byteLength}},3238:function(e,t,n){var r=n(4576),o=n(7476),i=n(7394),a=r.ArrayBuffer,s=a&&a.prototype,l=s&&o(s.slice);e.exports=function(e){if(0!==i(e))return!1;if(!l)return!1;try{return l(e,0,0),!1}catch(t){return!0}}},5169:function(e,t,n){var r=n(3238),o=TypeError;e.exports=function(e){if(r(e))throw new o("ArrayBuffer is detached");return e}},5636:function(e,t,n){var r=n(4576),o=n(9504),i=n(6706),a=n(7696),s=n(5169),l=n(7394),u=n(4483),c=n(1548),d=r.structuredClone,h=r.ArrayBuffer,f=r.DataView,p=Math.min,v=h.prototype,m=f.prototype,g=o(v.slice),y=i(v,"resizable","get"),b=i(v,"maxByteLength","get"),w=o(m.getInt8),S=o(m.setInt8);e.exports=(c||u)&&function(e,t,n){var r,o=l(e),i=void 0===t?o:a(t),v=!y||!y(e);if(s(e),c&&(e=d(e,{transfer:[e]}),o===i&&(n||v)))return e;if(o>=i&&(!n||v))r=g(e,0,i);else{var m=n&&!v&&b?{maxByteLength:b(e)}:void 0;r=new h(i,m);for(var E=new f(e),_=new f(r),C=p(i,o),k=0;k<C;k++)S(_,k,w(E,k))}return c||u(e),r}},4644:function(e,t,n){var r,o,i,a=n(7811),s=n(3724),l=n(4576),u=n(4901),c=n(34),d=n(9297),h=n(6955),f=n(6823),p=n(6699),v=n(6840),m=n(2106),g=n(1625),y=n(2787),b=n(2967),w=n(8227),S=n(3392),E=n(1181),_=E.enforce,C=E.get,k=l.Int8Array,I=k&&k.prototype,x=l.Uint8ClampedArray,T=x&&x.prototype,A=k&&y(k),F=I&&y(I),R=Object.prototype,V=l.TypeError,D=w("toStringTag"),P=S("TYPED_ARRAY_TAG"),O="TypedArrayConstructor",L=a&&!!b&&"Opera"!==h(l.opera),N=!1,M={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},W={BigInt64Array:8,BigUint64Array:8},B=function(e){if(!c(e))return!1;var t=h(e);return"DataView"===t||d(M,t)||d(W,t)},j=function(e){var t=y(e);if(c(t)){var n=C(t);return n&&d(n,O)?n[O]:j(t)}},$=function(e){if(!c(e))return!1;var t=h(e);return d(M,t)||d(W,t)},U=function(e){if($(e))return e;throw new V("Target is not a typed array")},z=function(e){if(u(e)&&(!b||g(A,e)))return e;throw new V(f(e)+" is not a typed array constructor")},K=function(e,t,n,r){if(s){if(n)for(var o in M){var i=l[o];if(i&&d(i.prototype,e))try{delete i.prototype[e]}catch(a){try{i.prototype[e]=t}catch(u){}}}F[e]&&!n||v(F,e,n?t:L&&I[e]||t,r)}},H=function(e,t,n){var r,o;if(s){if(b){if(n)for(r in M)if(o=l[r],o&&d(o,e))try{delete o[e]}catch(i){}if(A[e]&&!n)return;try{return v(A,e,n?t:L&&A[e]||t)}catch(i){}}for(r in M)o=l[r],!o||o[e]&&!n||v(o,e,t)}};for(r in M)o=l[r],i=o&&o.prototype,i?_(i)[O]=o:L=!1;for(r in W)o=l[r],i=o&&o.prototype,i&&(_(i)[O]=o);if((!L||!u(A)||A===Function.prototype)&&(A=function(){throw new V("Incorrect invocation")},L))for(r in M)l[r]&&b(l[r],A);if((!L||!F||F===R)&&(F=A.prototype,L))for(r in M)l[r]&&b(l[r].prototype,F);if(L&&y(T)!==F&&b(T,F),s&&!d(F,D))for(r in N=!0,m(F,D,{configurable:!0,get:function(){return c(this)?this[P]:void 0}}),M)l[r]&&p(l[r],P,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:L,TYPED_ARRAY_TAG:N&&P,aTypedArray:U,aTypedArrayConstructor:z,exportTypedArrayMethod:K,exportTypedArrayStaticMethod:H,getTypedArrayConstructor:j,isView:B,isTypedArray:$,TypedArray:A,TypedArrayPrototype:F}},5370:function(e,t,n){var r=n(6198);e.exports=function(e,t,n){var o=0,i=arguments.length>2?n:r(t),a=new e(i);while(i>o)a[o]=t[o++];return a}},9617:function(e,t,n){var r=n(5397),o=n(5610),i=n(6198),a=function(e){return function(t,n,a){var s=r(t),l=i(s);if(0===l)return!e&&-1;var u,c=o(a,l);if(e&&n!==n){while(l>c)if(u=s[c++],u!==u)return!0}else for(;l>c;c++)if((e||c in s)&&s[c]===n)return e||c||0;return!e&&-1}};e.exports={includes:a(!0),indexOf:a(!1)}},4527:function(e,t,n){var r=n(3724),o=n(4376),i=TypeError,a=Object.getOwnPropertyDescriptor,s=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=s?function(e,t){if(o(e)&&!a(e,"length").writable)throw new i("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},7628:function(e,t,n){var r=n(6198);e.exports=function(e,t){for(var n=r(e),o=new t(n),i=0;i<n;i++)o[i]=e[n-i-1];return o}},9928:function(e,t,n){var r=n(6198),o=n(1291),i=RangeError;e.exports=function(e,t,n,a){var s=r(e),l=o(n),u=l<0?s+l:l;if(u>=s||u<0)throw new i("Incorrect index");for(var c=new t(s),d=0;d<s;d++)c[d]=d===u?a:e[d];return c}},6319:function(e,t,n){var r=n(8551),o=n(9539);e.exports=function(e,t,n,i){try{return i?t(r(n)[0],n[1]):t(n)}catch(a){o(e,"throw",a)}}},2195:function(e,t,n){var r=n(9504),o=r({}.toString),i=r("".slice);e.exports=function(e){return i(o(e),8,-1)}},6955:function(e,t,n){var r=n(2140),o=n(4901),i=n(2195),a=n(8227),s=a("toStringTag"),l=Object,u="Arguments"===i(function(){return arguments}()),c=function(e,t){try{return e[t]}catch(n){}};e.exports=r?i:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=c(t=l(e),s))?n:u?i(t):"Object"===(r=i(t))&&o(t.callee)?"Arguments":r}},7740:function(e,t,n){var r=n(9297),o=n(5031),i=n(7347),a=n(4913);e.exports=function(e,t,n){for(var s=o(t),l=a.f,u=i.f,c=0;c<s.length;c++){var d=s[c];r(e,d)||n&&r(n,d)||l(e,d,u(t,d))}}},2211:function(e,t,n){var r=n(9039);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},2529:function(e){e.exports=function(e,t){return{value:e,done:t}}},6699:function(e,t,n){var r=n(3724),o=n(4913),i=n(6980);e.exports=r?function(e,t,n){return o.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},6980:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},4659:function(e,t,n){var r=n(3724),o=n(4913),i=n(6980);e.exports=function(e,t,n){r?o.f(e,t,i(0,n)):e[t]=n}},2106:function(e,t,n){var r=n(283),o=n(4913);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),o.f(e,t,n)}},6840:function(e,t,n){var r=n(4901),o=n(4913),i=n(283),a=n(9433);e.exports=function(e,t,n,s){s||(s={});var l=s.enumerable,u=void 0!==s.name?s.name:t;if(r(n)&&i(n,u,s),s.global)l?e[t]=n:a(t,n);else{try{s.unsafe?e[t]&&(l=!0):delete e[t]}catch(c){}l?e[t]=n:o.f(e,t,{value:n,enumerable:!1,configurable:!s.nonConfigurable,writable:!s.nonWritable})}return e}},6279:function(e,t,n){var r=n(6840);e.exports=function(e,t,n){for(var o in t)r(e,o,t[o],n);return e}},9433:function(e,t,n){var r=n(4576),o=Object.defineProperty;e.exports=function(e,t){try{o(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},3724:function(e,t,n){var r=n(9039);e.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4483:function(e,t,n){var r,o,i,a,s=n(4576),l=n(9429),u=n(1548),c=s.structuredClone,d=s.ArrayBuffer,h=s.MessageChannel,f=!1;if(u)f=function(e){c(e,{transfer:[e]})};else if(d)try{h||(r=l("worker_threads"),r&&(h=r.MessageChannel)),h&&(o=new h,i=new d(2),a=function(e){o.port1.postMessage(null,[e])},2===i.byteLength&&(a(i),0===i.byteLength&&(f=a)))}catch(p){}e.exports=f},4055:function(e,t,n){var r=n(4576),o=n(34),i=r.document,a=o(i)&&o(i.createElement);e.exports=function(e){return a?i.createElement(e):{}}},6837:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},5002:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8727:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},8574:function(e,t,n){var r=n(4215);e.exports="NODE"===r},2839:function(e,t,n){var r=n(4576),o=r.navigator,i=o&&o.userAgent;e.exports=i?String(i):""},9519:function(e,t,n){var r,o,i=n(4576),a=n(2839),s=i.process,l=i.Deno,u=s&&s.versions||l&&l.version,c=u&&u.v8;c&&(r=c.split("."),o=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&a&&(r=a.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/),r&&(o=+r[1]))),e.exports=o},4215:function(e,t,n){var r=n(4576),o=n(2839),i=n(2195),a=function(e){return o.slice(0,e.length)===e};e.exports=function(){return a("Bun/")?"BUN":a("Cloudflare-Workers")?"CLOUDFLARE":a("Deno/")?"DENO":a("Node.js/")?"NODE":r.Bun&&"string"==typeof Bun.version?"BUN":r.Deno&&"object"==typeof Deno.version?"DENO":"process"===i(r.process)?"NODE":r.window&&r.document?"BROWSER":"REST"}()},6193:function(e,t,n){var r=n(9504),o=Error,i=r("".replace),a=function(e){return String(new o(e).stack)}("zxcasd"),s=/\n\s*at [^:]*:[^\n]*/,l=s.test(a);e.exports=function(e,t){if(l&&"string"==typeof e&&!o.prepareStackTrace)while(t--)e=i(e,s,"");return e}},6249:function(e,t,n){var r=n(9039),o=n(6980);e.exports=!r((function(){var e=new Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",o(1,7)),7!==e.stack)}))},6518:function(e,t,n){var r=n(4576),o=n(7347).f,i=n(6699),a=n(6840),s=n(9433),l=n(7740),u=n(2796);e.exports=function(e,t){var n,c,d,h,f,p,v=e.target,m=e.global,g=e.stat;if(c=m?r:g?r[v]||s(v,{}):r[v]&&r[v].prototype,c)for(d in t){if(f=t[d],e.dontCallGetSet?(p=o(c,d),h=p&&p.value):h=c[d],n=u(m?d:v+(g?".":"#")+d,e.forced),!n&&void 0!==h){if(typeof f==typeof h)continue;l(f,h)}(e.sham||h&&h.sham)&&i(f,"sham",!0),a(c,d,f,e)}}},9039:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},6080:function(e,t,n){var r=n(7476),o=n(9306),i=n(616),a=r(r.bind);e.exports=function(e,t){return o(e),void 0===t?e:i?a(e,t):function(){return e.apply(t,arguments)}}},616:function(e,t,n){var r=n(9039);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},9565:function(e,t,n){var r=n(616),o=Function.prototype.call;e.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},350:function(e,t,n){var r=n(3724),o=n(9297),i=Function.prototype,a=r&&Object.getOwnPropertyDescriptor,s=o(i,"name"),l=s&&"something"===function(){}.name,u=s&&(!r||r&&a(i,"name").configurable);e.exports={EXISTS:s,PROPER:l,CONFIGURABLE:u}},6706:function(e,t,n){var r=n(9504),o=n(9306);e.exports=function(e,t,n){try{return r(o(Object.getOwnPropertyDescriptor(e,t)[n]))}catch(i){}}},7476:function(e,t,n){var r=n(2195),o=n(9504);e.exports=function(e){if("Function"===r(e))return o(e)}},9504:function(e,t,n){var r=n(616),o=Function.prototype,i=o.call,a=r&&o.bind.bind(i,i);e.exports=r?a:function(e){return function(){return i.apply(e,arguments)}}},9429:function(e,t,n){var r=n(4576),o=n(8574);e.exports=function(e){if(o){try{return r.process.getBuiltinModule(e)}catch(t){}try{return Function('return require("'+e+'")')()}catch(t){}}}},4124:function(e,t,n){var r=n(4576);e.exports=function(e,t){var n=r[e],o=n&&n.prototype;return o&&o[t]}},7751:function(e,t,n){var r=n(4576),o=n(4901),i=function(e){return o(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?i(r[e]):r[e]&&r[e][t]}},1767:function(e){e.exports=function(e){return{iterator:e,next:e.next,done:!1}}},8646:function(e,t,n){var r=n(9565),o=n(8551),i=n(1767),a=n(851);e.exports=function(e,t){t&&"string"===typeof e||o(e);var n=a(e);return i(o(void 0!==n?r(n,e):e))}},851:function(e,t,n){var r=n(6955),o=n(5966),i=n(4117),a=n(6269),s=n(8227),l=s("iterator");e.exports=function(e){if(!i(e))return o(e,l)||o(e,"@@iterator")||a[r(e)]}},81:function(e,t,n){var r=n(9565),o=n(9306),i=n(8551),a=n(6823),s=n(851),l=TypeError;e.exports=function(e,t){var n=arguments.length<2?s(e):t;if(o(n))return i(r(n,e));throw new l(a(e)+" is not iterable")}},5966:function(e,t,n){var r=n(9306),o=n(4117);e.exports=function(e,t){var n=e[t];return o(n)?void 0:r(n)}},3789:function(e,t,n){var r=n(9306),o=n(8551),i=n(9565),a=n(1291),s=n(1767),l="Invalid size",u=RangeError,c=TypeError,d=Math.max,h=function(e,t){this.set=e,this.size=d(t,0),this.has=r(e.has),this.keys=r(e.keys)};h.prototype={getIterator:function(){return s(o(i(this.keys,this.set)))},includes:function(e){return i(this.has,this.set,e)}},e.exports=function(e){o(e);var t=+e.size;if(t!==t)throw new c(l);var n=a(t);if(n<0)throw new u(l);return new h(e,n)}},4576:function(e,t,n){var r=function(e){return e&&e.Math===Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},9297:function(e,t,n){var r=n(9504),o=n(8981),i=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return i(o(e),t)}},421:function(e){e.exports={}},397:function(e,t,n){var r=n(7751);e.exports=r("document","documentElement")},5917:function(e,t,n){var r=n(3724),o=n(9039),i=n(4055);e.exports=!r&&!o((function(){return 7!==Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},7055:function(e,t,n){var r=n(9504),o=n(9039),i=n(2195),a=Object,s=r("".split);e.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"===i(e)?s(e,""):a(e)}:a},3167:function(e,t,n){var r=n(4901),o=n(34),i=n(2967);e.exports=function(e,t,n){var a,s;return i&&r(a=t.constructor)&&a!==n&&o(s=a.prototype)&&s!==n.prototype&&i(e,s),e}},3706:function(e,t,n){var r=n(9504),o=n(4901),i=n(7629),a=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(e){return a(e)}),e.exports=i.inspectSource},1181:function(e,t,n){var r,o,i,a=n(8622),s=n(4576),l=n(34),u=n(6699),c=n(9297),d=n(7629),h=n(6119),f=n(421),p="Object already initialized",v=s.TypeError,m=s.WeakMap,g=function(e){return i(e)?o(e):r(e,{})},y=function(e){return function(t){var n;if(!l(t)||(n=o(t)).type!==e)throw new v("Incompatible receiver, "+e+" required");return n}};if(a||d.state){var b=d.state||(d.state=new m);b.get=b.get,b.has=b.has,b.set=b.set,r=function(e,t){if(b.has(e))throw new v(p);return t.facade=e,b.set(e,t),t},o=function(e){return b.get(e)||{}},i=function(e){return b.has(e)}}else{var w=h("state");f[w]=!0,r=function(e,t){if(c(e,w))throw new v(p);return t.facade=e,u(e,w,t),t},o=function(e){return c(e,w)?e[w]:{}},i=function(e){return c(e,w)}}e.exports={set:r,get:o,has:i,enforce:g,getterFor:y}},4209:function(e,t,n){var r=n(8227),o=n(6269),i=r("iterator"),a=Array.prototype;e.exports=function(e){return void 0!==e&&(o.Array===e||a[i]===e)}},4376:function(e,t,n){var r=n(2195);e.exports=Array.isArray||function(e){return"Array"===r(e)}},1108:function(e,t,n){var r=n(6955);e.exports=function(e){var t=r(e);return"BigInt64Array"===t||"BigUint64Array"===t}},4901:function(e){var t="object"==typeof document&&document.all;e.exports="undefined"==typeof t&&void 0!==t?function(e){return"function"==typeof e||e===t}:function(e){return"function"==typeof e}},3517:function(e,t,n){var r=n(9504),o=n(9039),i=n(4901),a=n(6955),s=n(7751),l=n(3706),u=function(){},c=s("Reflect","construct"),d=/^\s*(?:class|function)\b/,h=r(d.exec),f=!d.test(u),p=function(e){if(!i(e))return!1;try{return c(u,[],e),!0}catch(t){return!1}},v=function(e){if(!i(e))return!1;switch(a(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return f||!!h(d,l(e))}catch(t){return!0}};v.sham=!0,e.exports=!c||o((function(){var e;return p(p.call)||!p(Object)||!p((function(){e=!0}))||e}))?v:p},2796:function(e,t,n){var r=n(9039),o=n(4901),i=/#|\.prototype\./,a=function(e,t){var n=l[s(e)];return n===c||n!==u&&(o(t)?r(t):!!t)},s=a.normalize=function(e){return String(e).replace(i,".").toLowerCase()},l=a.data={},u=a.NATIVE="N",c=a.POLYFILL="P";e.exports=a},4117:function(e){e.exports=function(e){return null===e||void 0===e}},34:function(e,t,n){var r=n(4901);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},3925:function(e,t,n){var r=n(34);e.exports=function(e){return r(e)||null===e}},6395:function(e){e.exports=!1},757:function(e,t,n){var r=n(7751),o=n(4901),i=n(1625),a=n(7040),s=Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return o(t)&&i(t.prototype,s(e))}},507:function(e,t,n){var r=n(9565);e.exports=function(e,t,n){var o,i,a=n?e:e.iterator,s=e.next;while(!(o=r(s,a)).done)if(i=t(o.value),void 0!==i)return i}},2652:function(e,t,n){var r=n(6080),o=n(9565),i=n(8551),a=n(6823),s=n(4209),l=n(6198),u=n(1625),c=n(81),d=n(851),h=n(9539),f=TypeError,p=function(e,t){this.stopped=e,this.result=t},v=p.prototype;e.exports=function(e,t,n){var m,g,y,b,w,S,E,_=n&&n.that,C=!(!n||!n.AS_ENTRIES),k=!(!n||!n.IS_RECORD),I=!(!n||!n.IS_ITERATOR),x=!(!n||!n.INTERRUPTED),T=r(t,_),A=function(e){return m&&h(m,"normal",e),new p(!0,e)},F=function(e){return C?(i(e),x?T(e[0],e[1],A):T(e[0],e[1])):x?T(e,A):T(e)};if(k)m=e.iterator;else if(I)m=e;else{if(g=d(e),!g)throw new f(a(e)+" is not iterable");if(s(g)){for(y=0,b=l(e);b>y;y++)if(w=F(e[y]),w&&u(v,w))return w;return new p(!1)}m=c(e,g)}S=k?e.next:m.next;while(!(E=o(S,m)).done){try{w=F(E.value)}catch(R){h(m,"throw",R)}if("object"==typeof w&&w&&u(v,w))return w}return new p(!1)}},9539:function(e,t,n){var r=n(9565),o=n(8551),i=n(5966);e.exports=function(e,t,n){var a,s;o(e);try{if(a=i(e,"return"),!a){if("throw"===t)throw n;return n}a=r(a,e)}catch(l){s=!0,a=l}if("throw"===t)throw n;if(s)throw a;return o(a),n}},9462:function(e,t,n){var r=n(9565),o=n(2360),i=n(6699),a=n(6279),s=n(8227),l=n(1181),u=n(5966),c=n(7657).IteratorPrototype,d=n(2529),h=n(9539),f=s("toStringTag"),p="IteratorHelper",v="WrapForValidIterator",m=l.set,g=function(e){var t=l.getterFor(e?v:p);return a(o(c),{next:function(){var n=t(this);if(e)return n.nextHandler();try{var r=n.done?void 0:n.nextHandler();return d(r,n.done)}catch(o){throw n.done=!0,o}},return:function(){var n=t(this),o=n.iterator;if(n.done=!0,e){var i=u(o,"return");return i?r(i,o):d(void 0,!0)}if(n.inner)try{h(n.inner.iterator,"normal")}catch(a){return h(o,"throw",a)}return o&&h(o,"normal"),d(void 0,!0)}})},y=g(!0),b=g(!1);i(b,f,"Iterator Helper"),e.exports=function(e,t){var n=function(n,r){r?(r.iterator=n.iterator,r.next=n.next):r=n,r.type=t?v:p,r.nextHandler=e,r.counter=0,r.done=!1,m(this,r)};return n.prototype=t?y:b,n}},713:function(e,t,n){var r=n(9565),o=n(9306),i=n(8551),a=n(1767),s=n(9462),l=n(6319),u=s((function(){var e=this.iterator,t=i(r(this.next,e)),n=this.done=!!t.done;if(!n)return l(e,this.mapper,[t.value,this.counter++],!0)}));e.exports=function(e){return i(this),o(e),new u(a(this),{mapper:e})}},7657:function(e,t,n){var r,o,i,a=n(9039),s=n(4901),l=n(34),u=n(2360),c=n(2787),d=n(6840),h=n(8227),f=n(6395),p=h("iterator"),v=!1;[].keys&&(i=[].keys(),"next"in i?(o=c(c(i)),o!==Object.prototype&&(r=o)):v=!0);var m=!l(r)||a((function(){var e={};return r[p].call(e)!==e}));m?r={}:f&&(r=u(r)),s(r[p])||d(r,p,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:v}},6269:function(e){e.exports={}},6198:function(e,t,n){var r=n(8014);e.exports=function(e){return r(e.length)}},283:function(e,t,n){var r=n(9504),o=n(9039),i=n(4901),a=n(9297),s=n(3724),l=n(350).CONFIGURABLE,u=n(3706),c=n(1181),d=c.enforce,h=c.get,f=String,p=Object.defineProperty,v=r("".slice),m=r("".replace),g=r([].join),y=s&&!o((function(){return 8!==p((function(){}),"length",{value:8}).length})),b=String(String).split("String"),w=e.exports=function(e,t,n){"Symbol("===v(f(t),0,7)&&(t="["+m(f(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!a(e,"name")||l&&e.name!==t)&&(s?p(e,"name",{value:t,configurable:!0}):e.name=t),y&&n&&a(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&a(n,"constructor")&&n.constructor?s&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(o){}var r=d(e);return a(r,"source")||(r.source=g(b,"string"==typeof t?t:"")),e};Function.prototype.toString=w((function(){return i(this)&&h(this).source||u(this)}),"toString")},2248:function(e,t,n){var r=n(9504),o=Map.prototype;e.exports={Map:Map,set:r(o.set),get:r(o.get),has:r(o.has),remove:r(o["delete"]),proto:o}},741:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},2603:function(e,t,n){var r=n(655);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},2360:function(e,t,n){var r,o=n(8551),i=n(6801),a=n(8727),s=n(421),l=n(397),u=n(4055),c=n(6119),d=">",h="<",f="prototype",p="script",v=c("IE_PROTO"),m=function(){},g=function(e){return h+p+d+e+h+"/"+p+d},y=function(e){e.write(g("")),e.close();var t=e.parentWindow.Object;return e=null,t},b=function(){var e,t=u("iframe"),n="java"+p+":";return t.style.display="none",l.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(g("document.F=Object")),e.close(),e.F},w=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}w="undefined"!=typeof document?document.domain&&r?y(r):b():y(r);var e=a.length;while(e--)delete w[f][a[e]];return w()};s[v]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(m[f]=o(e),n=new m,m[f]=null,n[v]=e):n=w(),void 0===t?n:i.f(n,t)}},6801:function(e,t,n){var r=n(3724),o=n(8686),i=n(4913),a=n(8551),s=n(5397),l=n(1072);t.f=r&&!o?Object.defineProperties:function(e,t){a(e);var n,r=s(t),o=l(t),u=o.length,c=0;while(u>c)i.f(e,n=o[c++],r[n]);return e}},4913:function(e,t,n){var r=n(3724),o=n(5917),i=n(8686),a=n(8551),s=n(6969),l=TypeError,u=Object.defineProperty,c=Object.getOwnPropertyDescriptor,d="enumerable",h="configurable",f="writable";t.f=r?i?function(e,t,n){if(a(e),t=s(t),a(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=c(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:h in n?n[h]:r[h],enumerable:d in n?n[d]:r[d],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(a(e),t=s(t),a(n),o)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw new l("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},7347:function(e,t,n){var r=n(3724),o=n(9565),i=n(8773),a=n(6980),s=n(5397),l=n(6969),u=n(9297),c=n(5917),d=Object.getOwnPropertyDescriptor;t.f=r?d:function(e,t){if(e=s(e),t=l(t),c)try{return d(e,t)}catch(n){}if(u(e,t))return a(!o(i.f,e,t),e[t])}},8480:function(e,t,n){var r=n(1828),o=n(8727),i=o.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,i)}},3717:function(e,t){t.f=Object.getOwnPropertySymbols},2787:function(e,t,n){var r=n(9297),o=n(4901),i=n(8981),a=n(6119),s=n(2211),l=a("IE_PROTO"),u=Object,c=u.prototype;e.exports=s?u.getPrototypeOf:function(e){var t=i(e);if(r(t,l))return t[l];var n=t.constructor;return o(n)&&t instanceof n?n.prototype:t instanceof u?c:null}},1625:function(e,t,n){var r=n(9504);e.exports=r({}.isPrototypeOf)},1828:function(e,t,n){var r=n(9504),o=n(9297),i=n(5397),a=n(9617).indexOf,s=n(421),l=r([].push);e.exports=function(e,t){var n,r=i(e),u=0,c=[];for(n in r)!o(s,n)&&o(r,n)&&l(c,n);while(t.length>u)o(r,n=t[u++])&&(~a(c,n)||l(c,n));return c}},1072:function(e,t,n){var r=n(1828),o=n(8727);e.exports=Object.keys||function(e){return r(e,o)}},8773:function(e,t){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);t.f=o?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},2967:function(e,t,n){var r=n(6706),o=n(34),i=n(7750),a=n(3506);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.prototype,"__proto__","set"),e(n,[]),t=n instanceof Array}catch(s){}return function(n,r){return i(n),a(r),o(n)?(t?e(n,r):n.__proto__=r,n):n}}():void 0)},4270:function(e,t,n){var r=n(9565),o=n(4901),i=n(34),a=TypeError;e.exports=function(e,t){var n,s;if("string"===t&&o(n=e.toString)&&!i(s=r(n,e)))return s;if(o(n=e.valueOf)&&!i(s=r(n,e)))return s;if("string"!==t&&o(n=e.toString)&&!i(s=r(n,e)))return s;throw new a("Can't convert object to primitive value")}},5031:function(e,t,n){var r=n(7751),o=n(9504),i=n(8480),a=n(3717),s=n(8551),l=o([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=i.f(s(e)),n=a.f;return n?l(t,n(e)):t}},7979:function(e,t,n){var r=n(8551);e.exports=function(){var e=r(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},1034:function(e,t,n){var r=n(9565),o=n(9297),i=n(1625),a=n(7979),s=RegExp.prototype;e.exports=function(e){var t=e.flags;return void 0!==t||"flags"in s||o(e,"flags")||!i(s,e)?t:r(a,e)}},7750:function(e,t,n){var r=n(4117),o=TypeError;e.exports=function(e){if(r(e))throw new o("Can't call method on "+e);return e}},9286:function(e,t,n){var r=n(4402),o=n(8469),i=r.Set,a=r.add;e.exports=function(e){var t=new i;return o(e,(function(e){a(t,e)})),t}},3440:function(e,t,n){var r=n(7080),o=n(4402),i=n(9286),a=n(5170),s=n(3789),l=n(8469),u=n(507),c=o.has,d=o.remove;e.exports=function(e){var t=r(this),n=s(e),o=i(t);return a(t)<=n.size?l(t,(function(e){n.includes(e)&&d(o,e)})):u(n.getIterator(),(function(e){c(t,e)&&d(o,e)})),o}},4402:function(e,t,n){var r=n(9504),o=Set.prototype;e.exports={Set:Set,add:r(o.add),has:r(o.has),remove:r(o["delete"]),proto:o}},8750:function(e,t,n){var r=n(7080),o=n(4402),i=n(5170),a=n(3789),s=n(8469),l=n(507),u=o.Set,c=o.add,d=o.has;e.exports=function(e){var t=r(this),n=a(e),o=new u;return i(t)>n.size?l(n.getIterator(),(function(e){d(t,e)&&c(o,e)})):s(t,(function(e){n.includes(e)&&c(o,e)})),o}},4449:function(e,t,n){var r=n(7080),o=n(4402).has,i=n(5170),a=n(3789),s=n(8469),l=n(507),u=n(9539);e.exports=function(e){var t=r(this),n=a(e);if(i(t)<=n.size)return!1!==s(t,(function(e){if(n.includes(e))return!1}),!0);var c=n.getIterator();return!1!==l(c,(function(e){if(o(t,e))return u(c,"normal",!1)}))}},3838:function(e,t,n){var r=n(7080),o=n(5170),i=n(8469),a=n(3789);e.exports=function(e){var t=r(this),n=a(e);return!(o(t)>n.size)&&!1!==i(t,(function(e){if(!n.includes(e))return!1}),!0)}},8527:function(e,t,n){var r=n(7080),o=n(4402).has,i=n(5170),a=n(3789),s=n(507),l=n(9539);e.exports=function(e){var t=r(this),n=a(e);if(i(t)<n.size)return!1;var u=n.getIterator();return!1!==s(u,(function(e){if(!o(t,e))return l(u,"normal",!1)}))}},8469:function(e,t,n){var r=n(9504),o=n(507),i=n(4402),a=i.Set,s=i.proto,l=r(s.forEach),u=r(s.keys),c=u(new a).next;e.exports=function(e,t,n){return n?o({iterator:u(e),next:c},t):l(e,t)}},4916:function(e,t,n){var r=n(7751),o=function(e){return{size:e,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}};e.exports=function(e){var t=r("Set");try{(new t)[e](o(0));try{return(new t)[e](o(-1)),!1}catch(n){return!0}}catch(i){return!1}}},5170:function(e,t,n){var r=n(6706),o=n(4402);e.exports=r(o.proto,"size","get")||function(e){return e.size}},3650:function(e,t,n){var r=n(7080),o=n(4402),i=n(9286),a=n(3789),s=n(507),l=o.add,u=o.has,c=o.remove;e.exports=function(e){var t=r(this),n=a(e).getIterator(),o=i(t);return s(n,(function(e){u(t,e)?c(o,e):l(o,e)})),o}},4204:function(e,t,n){var r=n(7080),o=n(4402).add,i=n(9286),a=n(3789),s=n(507);e.exports=function(e){var t=r(this),n=a(e).getIterator(),l=i(t);return s(n,(function(e){o(l,e)})),l}},6119:function(e,t,n){var r=n(5745),o=n(3392),i=r("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},7629:function(e,t,n){var r=n(6395),o=n(4576),i=n(9433),a="__core-js_shared__",s=e.exports=o[a]||i(a,{});(s.versions||(s.versions=[])).push({version:"3.39.0",mode:r?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.39.0/LICENSE",source:"https://github.com/zloirock/core-js"})},5745:function(e,t,n){var r=n(7629);e.exports=function(e,t){return r[e]||(r[e]=t||{})}},1548:function(e,t,n){var r=n(4576),o=n(9039),i=n(9519),a=n(4215),s=r.structuredClone;e.exports=!!s&&!o((function(){if("DENO"===a&&i>92||"NODE"===a&&i>94||"BROWSER"===a&&i>97)return!1;var e=new ArrayBuffer(8),t=s(e,{transfer:[e]});return 0!==e.byteLength||8!==t.byteLength}))},4495:function(e,t,n){var r=n(9519),o=n(9039),i=n(4576),a=i.String;e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol("symbol detection");return!a(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},5610:function(e,t,n){var r=n(1291),o=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):i(n,t)}},5854:function(e,t,n){var r=n(2777),o=TypeError;e.exports=function(e){var t=r(e,"number");if("number"==typeof t)throw new o("Can't convert number to bigint");return BigInt(t)}},7696:function(e,t,n){var r=n(1291),o=n(8014),i=RangeError;e.exports=function(e){if(void 0===e)return 0;var t=r(e),n=o(t);if(t!==n)throw new i("Wrong length or index");return n}},5397:function(e,t,n){var r=n(7055),o=n(7750);e.exports=function(e){return r(o(e))}},1291:function(e,t,n){var r=n(741);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},8014:function(e,t,n){var r=n(1291),o=Math.min;e.exports=function(e){var t=r(e);return t>0?o(t,9007199254740991):0}},8981:function(e,t,n){var r=n(7750),o=Object;e.exports=function(e){return o(r(e))}},2777:function(e,t,n){var r=n(9565),o=n(34),i=n(757),a=n(5966),s=n(4270),l=n(8227),u=TypeError,c=l("toPrimitive");e.exports=function(e,t){if(!o(e)||i(e))return e;var n,l=a(e,c);if(l){if(void 0===t&&(t="default"),n=r(l,e,t),!o(n)||i(n))return n;throw new u("Can't convert object to primitive value")}return void 0===t&&(t="number"),s(e,t)}},6969:function(e,t,n){var r=n(2777),o=n(757);e.exports=function(e){var t=r(e,"string");return o(t)?t:t+""}},2140:function(e,t,n){var r=n(8227),o=r("toStringTag"),i={};i[o]="z",e.exports="[object z]"===String(i)},655:function(e,t,n){var r=n(6955),o=String;e.exports=function(e){if("Symbol"===r(e))throw new TypeError("Cannot convert a Symbol value to a string");return o(e)}},6823:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},3392:function(e,t,n){var r=n(9504),o=0,i=Math.random(),a=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+a(++o+i,36)}},7040:function(e,t,n){var r=n(4495);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8686:function(e,t,n){var r=n(3724),o=n(9039);e.exports=r&&o((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},2812:function(e){var t=TypeError;e.exports=function(e,n){if(e<n)throw new t("Not enough arguments");return e}},8622:function(e,t,n){var r=n(4576),o=n(4901),i=r.WeakMap;e.exports=o(i)&&/native code/.test(String(i))},8227:function(e,t,n){var r=n(4576),o=n(5745),i=n(9297),a=n(3392),s=n(4495),l=n(7040),u=r.Symbol,c=o("wks"),d=l?u["for"]||u:u&&u.withoutSetter||a;e.exports=function(e){return i(c,e)||(c[e]=s&&i(u,e)?u[e]:d("Symbol."+e)),c[e]}},6573:function(e,t,n){var r=n(3724),o=n(2106),i=n(3238),a=ArrayBuffer.prototype;r&&!("detached"in a)&&o(a,"detached",{configurable:!0,get:function(){return i(this)}})},7936:function(e,t,n){var r=n(6518),o=n(5636);o&&r({target:"ArrayBuffer",proto:!0},{transferToFixedLength:function(){return o(this,arguments.length?arguments[0]:void 0,!1)}})},8100:function(e,t,n){var r=n(6518),o=n(5636);o&&r({target:"ArrayBuffer",proto:!0},{transfer:function(){return o(this,arguments.length?arguments[0]:void 0,!0)}})},4114:function(e,t,n){var r=n(6518),o=n(8981),i=n(6198),a=n(4527),s=n(6837),l=n(9039),u=l((function(){return 4294967297!==[].push.call({length:4294967296},1)})),c=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},d=u||!c();r({target:"Array",proto:!0,arity:1,forced:d},{push:function(e){var t=o(this),n=i(t),r=arguments.length;s(n+r);for(var l=0;l<r;l++)t[n]=arguments[l],n++;return a(t,n),n}})},9678:function(e,t,n){var r=n(6518),o=n(7628),i=n(5397),a=n(6469),s=Array;r({target:"Array",proto:!0},{toReversed:function(){return o(i(this),s)}}),a("toReversed")},7145:function(e,t,n){var r=n(6518),o=n(9504),i=n(9306),a=n(5397),s=n(5370),l=n(4124),u=n(6469),c=Array,d=o(l("Array","sort"));r({target:"Array",proto:!0},{toSorted:function(e){void 0!==e&&i(e);var t=a(this),n=s(c,t);return d(n,e)}}),u("toSorted")},1658:function(e,t,n){var r=n(6518),o=n(6469),i=n(6837),a=n(6198),s=n(5610),l=n(5397),u=n(1291),c=Array,d=Math.max,h=Math.min;r({target:"Array",proto:!0},{toSpliced:function(e,t){var n,r,o,f,p=l(this),v=a(p),m=s(e,v),g=arguments.length,y=0;for(0===g?n=r=0:1===g?(n=0,r=v-m):(n=g-2,r=h(d(u(t),0),v-m)),o=i(v+n-r),f=c(o);y<m;y++)f[y]=p[y];for(;y<m+n;y++)f[y]=arguments[y-m+2];for(;y<o;y++)f[y]=p[y+r-n];return f}}),o("toSpliced")},8111:function(e,t,n){var r=n(6518),o=n(4576),i=n(679),a=n(8551),s=n(4901),l=n(2787),u=n(2106),c=n(4659),d=n(9039),h=n(9297),f=n(8227),p=n(7657).IteratorPrototype,v=n(3724),m=n(6395),g="constructor",y="Iterator",b=f("toStringTag"),w=TypeError,S=o[y],E=m||!s(S)||S.prototype!==p||!d((function(){S({})})),_=function(){if(i(this,p),l(this)===p)throw new w("Abstract class Iterator not directly constructable")},C=function(e,t){v?u(p,e,{configurable:!0,get:function(){return t},set:function(t){if(a(this),this===p)throw new w("You can't redefine this property");h(this,e)?this[e]=t:c(this,e,t)}}):p[e]=t};h(p,b)||C(b,y),!E&&h(p,g)&&p[g]!==Object||C(g,_),_.prototype=p,r({global:!0,constructor:!0,forced:E},{Iterator:_})},1148:function(e,t,n){var r=n(6518),o=n(2652),i=n(9306),a=n(8551),s=n(1767);r({target:"Iterator",proto:!0,real:!0},{every:function(e){a(this),i(e);var t=s(this),n=0;return!o(t,(function(t,r){if(!e(t,n++))return r()}),{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},2489:function(e,t,n){var r=n(6518),o=n(9565),i=n(9306),a=n(8551),s=n(1767),l=n(9462),u=n(6319),c=n(6395),d=l((function(){var e,t,n,r=this.iterator,i=this.predicate,s=this.next;while(1){if(e=a(o(s,r)),t=this.done=!!e.done,t)return;if(n=e.value,u(r,i,[n,this.counter++],!0))return n}}));r({target:"Iterator",proto:!0,real:!0,forced:c},{filter:function(e){return a(this),i(e),new d(s(this),{predicate:e})}})},116:function(e,t,n){var r=n(6518),o=n(2652),i=n(9306),a=n(8551),s=n(1767);r({target:"Iterator",proto:!0,real:!0},{find:function(e){a(this),i(e);var t=s(this),n=0;return o(t,(function(t,r){if(e(t,n++))return r(t)}),{IS_RECORD:!0,INTERRUPTED:!0}).result}})},531:function(e,t,n){var r=n(6518),o=n(9565),i=n(9306),a=n(8551),s=n(1767),l=n(8646),u=n(9462),c=n(9539),d=n(6395),h=u((function(){var e,t,n=this.iterator,r=this.mapper;while(1){if(t=this.inner)try{if(e=a(o(t.next,t.iterator)),!e.done)return e.value;this.inner=null}catch(i){c(n,"throw",i)}if(e=a(o(this.next,n)),this.done=!!e.done)return;try{this.inner=l(r(e.value,this.counter++),!1)}catch(i){c(n,"throw",i)}}}));r({target:"Iterator",proto:!0,real:!0,forced:d},{flatMap:function(e){return a(this),i(e),new h(s(this),{mapper:e,inner:null})}})},7588:function(e,t,n){var r=n(6518),o=n(2652),i=n(9306),a=n(8551),s=n(1767);r({target:"Iterator",proto:!0,real:!0},{forEach:function(e){a(this),i(e);var t=s(this),n=0;o(t,(function(t){e(t,n++)}),{IS_RECORD:!0})}})},1701:function(e,t,n){var r=n(6518),o=n(713),i=n(6395);r({target:"Iterator",proto:!0,real:!0,forced:i},{map:o})},8237:function(e,t,n){var r=n(6518),o=n(2652),i=n(9306),a=n(8551),s=n(1767),l=TypeError;r({target:"Iterator",proto:!0,real:!0},{reduce:function(e){a(this),i(e);var t=s(this),n=arguments.length<2,r=n?void 0:arguments[1],u=0;if(o(t,(function(t){n?(n=!1,r=t):r=e(r,t,u),u++}),{IS_RECORD:!0}),n)throw new l("Reduce of empty iterator with no initial value");return r}})},3579:function(e,t,n){var r=n(6518),o=n(2652),i=n(9306),a=n(8551),s=n(1767);r({target:"Iterator",proto:!0,real:!0},{some:function(e){a(this),i(e);var t=s(this),n=0;return o(t,(function(t,r){if(e(t,n++))return r()}),{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},1806:function(e,t,n){var r=n(6518),o=n(8551),i=n(2652),a=n(1767),s=[].push;r({target:"Iterator",proto:!0,real:!0},{toArray:function(){var e=[];return i(a(o(this)),s,{that:e,IS_RECORD:!0}),e}})},9479:function(e,t,n){var r=n(4576),o=n(3724),i=n(2106),a=n(7979),s=n(9039),l=r.RegExp,u=l.prototype,c=o&&s((function(){var e=!0;try{l(".","d")}catch(c){e=!1}var t={},n="",r=e?"dgimsy":"gimsy",o=function(e,r){Object.defineProperty(t,e,{get:function(){return n+=r,!0}})},i={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var a in e&&(i.hasIndices="d"),i)o(a,i[a]);var s=Object.getOwnPropertyDescriptor(u,"flags").get.call(t);return s!==r||n!==r}));c&&i(u,"flags",{configurable:!0,get:a})},7642:function(e,t,n){var r=n(6518),o=n(3440),i=n(4916);r({target:"Set",proto:!0,real:!0,forced:!i("difference")},{difference:o})},8004:function(e,t,n){var r=n(6518),o=n(9039),i=n(8750),a=n(4916),s=!a("intersection")||o((function(){return"3,2"!==String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))}));r({target:"Set",proto:!0,real:!0,forced:s},{intersection:i})},3853:function(e,t,n){var r=n(6518),o=n(4449),i=n(4916);r({target:"Set",proto:!0,real:!0,forced:!i("isDisjointFrom")},{isDisjointFrom:o})},5876:function(e,t,n){var r=n(6518),o=n(3838),i=n(4916);r({target:"Set",proto:!0,real:!0,forced:!i("isSubsetOf")},{isSubsetOf:o})},2475:function(e,t,n){var r=n(6518),o=n(8527),i=n(4916);r({target:"Set",proto:!0,real:!0,forced:!i("isSupersetOf")},{isSupersetOf:o})},5024:function(e,t,n){var r=n(6518),o=n(3650),i=n(4916);r({target:"Set",proto:!0,real:!0,forced:!i("symmetricDifference")},{symmetricDifference:o})},1698:function(e,t,n){var r=n(6518),o=n(4204),i=n(4916);r({target:"Set",proto:!0,real:!0,forced:!i("union")},{union:o})},7467:function(e,t,n){var r=n(7628),o=n(4644),i=o.aTypedArray,a=o.exportTypedArrayMethod,s=o.getTypedArrayConstructor;a("toReversed",(function(){return r(i(this),s(this))}))},4732:function(e,t,n){var r=n(4644),o=n(9504),i=n(9306),a=n(5370),s=r.aTypedArray,l=r.getTypedArrayConstructor,u=r.exportTypedArrayMethod,c=o(r.TypedArrayPrototype.sort);u("toSorted",(function(e){void 0!==e&&i(e);var t=s(this),n=a(l(t),t);return c(n,e)}))},9577:function(e,t,n){var r=n(9928),o=n(4644),i=n(1108),a=n(1291),s=n(5854),l=o.aTypedArray,u=o.getTypedArrayConstructor,c=o.exportTypedArrayMethod,d=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(e){return 8===e}}();c("with",{with:function(e,t){var n=l(this),o=a(e),c=i(n)?s(t):+t;return r(n,u(n),o,c)}}["with"],!d)},8992:function(e,t,n){n(8111)},3215:function(e,t,n){n(1148)},4520:function(e,t,n){n(2489)},2577:function(e,t,n){n(116)},670:function(e,t,n){n(531)},3949:function(e,t,n){n(7588)},1454:function(e,t,n){n(1701)},8872:function(e,t,n){n(8237)},7550:function(e,t,n){n(3579)},1795:function(e,t,n){n(1806)},4979:function(e,t,n){var r=n(6518),o=n(4576),i=n(7751),a=n(6980),s=n(4913).f,l=n(9297),u=n(679),c=n(3167),d=n(2603),h=n(5002),f=n(6193),p=n(3724),v=n(6395),m="DOMException",g=i("Error"),y=i(m),b=function(){u(this,w);var e=arguments.length,t=d(e<1?void 0:arguments[0]),n=d(e<2?void 0:arguments[1],"Error"),r=new y(t,n),o=new g(t);return o.name=m,s(r,"stack",a(1,f(o.stack,1))),c(r,this,b),r},w=b.prototype=y.prototype,S="stack"in new g(m),E="stack"in new y(1,2),_=y&&p&&Object.getOwnPropertyDescriptor(o,m),C=!!_&&!(_.writable&&_.configurable),k=S&&!C&&!E;r({global:!0,constructor:!0,forced:v||k},{DOMException:k?b:y});var I=i(m),x=I.prototype;if(x.constructor!==I)for(var T in v||s(x,"constructor",a(1,I)),h)if(l(h,T)){var A=h[T],F=A.s;l(I,F)||s(I,F,a(6,A.c))}},1678:function(e,t,n){var r=n(6395),o=n(6518),i=n(4576),a=n(7751),s=n(9504),l=n(9039),u=n(3392),c=n(4901),d=n(3517),h=n(4117),f=n(34),p=n(757),v=n(2652),m=n(8551),g=n(6955),y=n(9297),b=n(4659),w=n(6699),S=n(6198),E=n(2812),_=n(1034),C=n(2248),k=n(4402),I=n(8469),x=n(4483),T=n(6249),A=n(1548),F=i.Object,R=i.Array,V=i.Date,D=i.Error,P=i.TypeError,O=i.PerformanceMark,L=a("DOMException"),N=C.Map,M=C.has,W=C.get,B=C.set,j=k.Set,$=k.add,U=k.has,z=a("Object","keys"),K=s([].push),H=s((!0).valueOf),q=s(1..valueOf),G=s("".valueOf),Y=s(V.prototype.getTime),X=u("structuredClone"),J="DataCloneError",Q="Transferring",Z=function(e){return!l((function(){var t=new i.Set([7]),n=e(t),r=e(F(7));return n===t||!n.has(7)||!f(r)||7!==+r}))&&e},ee=function(e,t){return!l((function(){var n=new t,r=e({a:n,b:n});return!(r&&r.a===r.b&&r.a instanceof t&&r.a.stack===n.stack)}))},te=function(e){return!l((function(){var t=e(new i.AggregateError([1],X,{cause:3}));return"AggregateError"!==t.name||1!==t.errors[0]||t.message!==X||3!==t.cause}))},ne=i.structuredClone,re=r||!ee(ne,D)||!ee(ne,L)||!te(ne),oe=!ne&&Z((function(e){return new O(X,{detail:e}).detail})),ie=Z(ne)||oe,ae=function(e){throw new L("Uncloneable type: "+e,J)},se=function(e,t){throw new L((t||"Cloning")+" of "+e+" cannot be properly polyfilled in this engine",J)},le=function(e,t){return ie||se(t),ie(e)},ue=function(){var e;try{e=new i.DataTransfer}catch(t){try{e=new i.ClipboardEvent("").clipboardData}catch(n){}}return e&&e.items&&e.files?e:null},ce=function(e,t,n){if(M(t,e))return W(t,e);var r,o,a,s,l,u,d=n||g(e);if("SharedArrayBuffer"===d)r=ie?ie(e):e;else{var h=i.DataView;h||c(e.slice)||se("ArrayBuffer");try{if(c(e.slice)&&!e.resizable)r=e.slice(0);else{o=e.byteLength,a="maxByteLength"in e?{maxByteLength:e.maxByteLength}:void 0,r=new ArrayBuffer(o,a),s=new h(e),l=new h(r);for(u=0;u<o;u++)l.setUint8(u,s.getUint8(u))}}catch(f){throw new L("ArrayBuffer is detached",J)}}return B(t,e,r),r},de=function(e,t,n,r,o){var a=i[t];return f(a)||se(t),new a(ce(e.buffer,o),n,r)},he=function(e,t){if(p(e)&&ae("Symbol"),!f(e))return e;if(t){if(M(t,e))return W(t,e)}else t=new N;var n,r,o,s,l,u,d,h,v=g(e);switch(v){case"Array":o=R(S(e));break;case"Object":o={};break;case"Map":o=new N;break;case"Set":o=new j;break;case"RegExp":o=new RegExp(e.source,_(e));break;case"Error":switch(r=e.name,r){case"AggregateError":o=new(a(r))([]);break;case"EvalError":case"RangeError":case"ReferenceError":case"SuppressedError":case"SyntaxError":case"TypeError":case"URIError":o=new(a(r));break;case"CompileError":case"LinkError":case"RuntimeError":o=new(a("WebAssembly",r));break;default:o=new D}break;case"DOMException":o=new L(e.message,e.name);break;case"ArrayBuffer":case"SharedArrayBuffer":o=ce(e,t,v);break;case"DataView":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float16Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":u="DataView"===v?e.byteLength:e.length,o=de(e,v,e.byteOffset,u,t);break;case"DOMQuad":try{o=new DOMQuad(he(e.p1,t),he(e.p2,t),he(e.p3,t),he(e.p4,t))}catch(m){o=le(e,v)}break;case"File":if(ie)try{o=ie(e),g(o)!==v&&(o=void 0)}catch(m){}if(!o)try{o=new File([e],e.name,e)}catch(m){}o||se(v);break;case"FileList":if(s=ue(),s){for(l=0,u=S(e);l<u;l++)s.items.add(he(e[l],t));o=s.files}else o=le(e,v);break;case"ImageData":try{o=new ImageData(he(e.data,t),e.width,e.height,{colorSpace:e.colorSpace})}catch(m){o=le(e,v)}break;default:if(ie)o=ie(e);else switch(v){case"BigInt":o=F(e.valueOf());break;case"Boolean":o=F(H(e));break;case"Number":o=F(q(e));break;case"String":o=F(G(e));break;case"Date":o=new V(Y(e));break;case"Blob":try{o=e.slice(0,e.size,e.type)}catch(m){se(v)}break;case"DOMPoint":case"DOMPointReadOnly":n=i[v];try{o=n.fromPoint?n.fromPoint(e):new n(e.x,e.y,e.z,e.w)}catch(m){se(v)}break;case"DOMRect":case"DOMRectReadOnly":n=i[v];try{o=n.fromRect?n.fromRect(e):new n(e.x,e.y,e.width,e.height)}catch(m){se(v)}break;case"DOMMatrix":case"DOMMatrixReadOnly":n=i[v];try{o=n.fromMatrix?n.fromMatrix(e):new n(e)}catch(m){se(v)}break;case"AudioData":case"VideoFrame":c(e.clone)||se(v);try{o=e.clone()}catch(m){ae(v)}break;case"CropTarget":case"CryptoKey":case"FileSystemDirectoryHandle":case"FileSystemFileHandle":case"FileSystemHandle":case"GPUCompilationInfo":case"GPUCompilationMessage":case"ImageBitmap":case"RTCCertificate":case"WebAssembly.Module":se(v);default:ae(v)}}switch(B(t,e,o),v){case"Array":case"Object":for(d=z(e),l=0,u=S(d);l<u;l++)h=d[l],b(o,h,he(e[h],t));break;case"Map":e.forEach((function(e,n){B(o,he(n,t),he(e,t))}));break;case"Set":e.forEach((function(e){$(o,he(e,t))}));break;case"Error":w(o,"message",he(e.message,t)),y(e,"cause")&&w(o,"cause",he(e.cause,t)),"AggregateError"===r?o.errors=he(e.errors,t):"SuppressedError"===r&&(o.error=he(e.error,t),o.suppressed=he(e.suppressed,t));case"DOMException":T&&w(o,"stack",he(e.stack,t))}return o},fe=function(e,t){if(!f(e))throw new P("Transfer option cannot be converted to a sequence");var n=[];v(e,(function(e){K(n,m(e))}));var r,o,a,s,l,u,h=0,p=S(n),y=new j;while(h<p){if(r=n[h++],o=g(r),"ArrayBuffer"===o?U(y,r):M(t,r))throw new L("Duplicate transferable",J);if("ArrayBuffer"!==o){if(A)s=ne(r,{transfer:[r]});else switch(o){case"ImageBitmap":a=i.OffscreenCanvas,d(a)||se(o,Q);try{l=new a(r.width,r.height),u=l.getContext("bitmaprenderer"),u.transferFromImageBitmap(r),s=l.transferToImageBitmap()}catch(b){}break;case"AudioData":case"VideoFrame":c(r.clone)&&c(r.close)||se(o,Q);try{s=r.clone(),r.close()}catch(b){}break;case"MediaSourceHandle":case"MessagePort":case"MIDIAccess":case"OffscreenCanvas":case"ReadableStream":case"RTCDataChannel":case"TransformStream":case"WebTransportReceiveStream":case"WebTransportSendStream":case"WritableStream":se(o,Q)}if(void 0===s)throw new L("This object cannot be transferred: "+o,J);B(t,r,s)}else $(y,r)}return y},pe=function(e){I(e,(function(e){A?ie(e,{transfer:[e]}):c(e.transfer)?e.transfer():x?x(e):se("ArrayBuffer",Q)}))};o({global:!0,enumerable:!0,sham:!A,forced:re},{structuredClone:function(e){var t,n,r=E(arguments.length,1)>1&&!h(arguments[1])?m(arguments[1]):void 0,o=r?r.transfer:void 0;void 0!==o&&(t=new N,n=fe(o,t));var i=he(e,t);return n&&pe(n),i}})},4603:function(e,t,n){var r=n(6840),o=n(9504),i=n(655),a=n(2812),s=URLSearchParams,l=s.prototype,u=o(l.append),c=o(l["delete"]),d=o(l.forEach),h=o([].push),f=new s("a=1&a=2&b=3");f["delete"]("a",1),f["delete"]("b",void 0),f+""!=="a=2"&&r(l,"delete",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return c(this,e);var r=[];d(this,(function(e,t){h(r,{key:t,value:e})})),a(t,1);var o,s=i(e),l=i(n),f=0,p=0,v=!1,m=r.length;while(f<m)o=r[f++],v||o.key===s?(v=!0,c(this,o.key)):p++;while(p<m)o=r[p++],o.key===s&&o.value===l||u(this,o.key,o.value)}),{enumerable:!0,unsafe:!0})},7566:function(e,t,n){var r=n(6840),o=n(9504),i=n(655),a=n(2812),s=URLSearchParams,l=s.prototype,u=o(l.getAll),c=o(l.has),d=new s("a=1");!d.has("a",2)&&d.has("a",void 0)||r(l,"has",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return c(this,e);var r=u(this,e);a(t,1);var o=i(n),s=0;while(s<r.length)if(r[s++]===o)return!0;return!1}),{enumerable:!0,unsafe:!0})},8721:function(e,t,n){var r=n(3724),o=n(9504),i=n(2106),a=URLSearchParams.prototype,s=o(a.forEach);r&&!("size"in a)&&i(a,"size",{get:function(){var e=0;return s(this,(function(){e++})),e},configurable:!0,enumerable:!0})},3405:function(e,t,n){n.d(t,{MF:function(){return be},j6:function(){return pe},xZ:function(){return ve},om:function(){return fe},Sx:function(){return Se},Wp:function(){return we},KO:function(){return Ee}});n(4114),n(8992),n(4520),n(1454),n(8872),n(7550);var r=n(852),o=n(1363),i=n(4046);n(4979);const a=(e,t)=>t.some((t=>e instanceof t));let s,l;function u(){return s||(s=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function c(){return l||(l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const d=new WeakMap,h=new WeakMap,f=new WeakMap,p=new WeakMap,v=new WeakMap;function m(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{t(E(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",o),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&d.set(t,e)})).catch((()=>{})),v.set(t,e),t}function g(e){if(h.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)}));h.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return h.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function b(e){y=e(y)}function w(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?c().includes(e)?function(...t){return e.apply(_(this),t),E(d.get(this))}:function(...t){return E(e.apply(_(this),t))}:function(t,...n){const r=e.call(_(this),t,...n);return f.set(r,t.sort?t.sort():[t]),E(r)}}function S(e){return"function"===typeof e?w(e):(e instanceof IDBTransaction&&g(e),a(e,u())?new Proxy(e,y):e)}function E(e){if(e instanceof IDBRequest)return m(e);if(p.has(e))return p.get(e);const t=S(e);return t!==e&&(p.set(e,t),v.set(t,e)),t}const _=e=>v.get(e);function C(e,t,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const a=indexedDB.open(e,t),s=E(a);return r&&a.addEventListener("upgradeneeded",(e=>{r(E(a.result),e.oldVersion,e.newVersion,E(a.transaction),e)})),n&&a.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),s.then((e=>{i&&e.addEventListener("close",(()=>i())),o&&e.addEventListener("versionchange",(e=>o(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),s}const k=["get","getKey","getAll","getAllKeys","count"],I=["put","add","delete","clear"],x=new Map;function T(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(x.get(t))return x.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=I.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!k.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,o?"readwrite":"readonly");let a=i.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),o&&i.done]))[0]};return x.set(t,i),i}b((e=>({...e,get:(t,n,r)=>T(t,n)||e.get(t,n,r),has:(t,n)=>!!T(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(F(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function F(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const R="@firebase/app",V="0.10.15",D=new o.Vy("@firebase/app"),P="@firebase/app-compat",O="@firebase/analytics-compat",L="@firebase/analytics",N="@firebase/app-check-compat",M="@firebase/app-check",W="@firebase/auth",B="@firebase/auth-compat",j="@firebase/database",$="@firebase/data-connect",U="@firebase/database-compat",z="@firebase/functions",K="@firebase/functions-compat",H="@firebase/installations",q="@firebase/installations-compat",G="@firebase/messaging",Y="@firebase/messaging-compat",X="@firebase/performance",J="@firebase/performance-compat",Q="@firebase/remote-config",Z="@firebase/remote-config-compat",ee="@firebase/storage",te="@firebase/storage-compat",ne="@firebase/firestore",re="@firebase/vertexai",oe="@firebase/firestore-compat",ie="firebase",ae="11.0.1",se="[DEFAULT]",le={[R]:"fire-core",[P]:"fire-core-compat",[L]:"fire-analytics",[O]:"fire-analytics-compat",[M]:"fire-app-check",[N]:"fire-app-check-compat",[W]:"fire-auth",[B]:"fire-auth-compat",[j]:"fire-rtdb",[$]:"fire-data-connect",[U]:"fire-rtdb-compat",[z]:"fire-fn",[K]:"fire-fn-compat",[H]:"fire-iid",[q]:"fire-iid-compat",[G]:"fire-fcm",[Y]:"fire-fcm-compat",[X]:"fire-perf",[J]:"fire-perf-compat",[Q]:"fire-rc",[Z]:"fire-rc-compat",[ee]:"fire-gcs",[te]:"fire-gcs-compat",[ne]:"fire-fst",[oe]:"fire-fst-compat",[re]:"fire-vertex","fire-js":"fire-js",[ie]:"fire-js-all"},ue=new Map,ce=new Map,de=new Map;function he(e,t){try{e.container.addComponent(t)}catch(n){D.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function fe(e){const t=e.name;if(de.has(t))return D.debug(`There were multiple attempts to register component ${t}.`),!1;de.set(t,e);for(const n of ue.values())he(n,e);for(const n of ce.values())he(n,e);return!0}function pe(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function ve(e){return void 0!==e.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const me={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},ge=new i.FA("app","Firebase",me);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ye{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ge.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const be=ae;function we(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const o=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),a=o.name;if("string"!==typeof a||!a)throw ge.create("bad-app-name",{appName:String(a)});if(n||(n=(0,i.T9)()),!n)throw ge.create("no-options");const s=ue.get(a);if(s){if((0,i.bD)(n,s.options)&&(0,i.bD)(o,s.config))return s;throw ge.create("duplicate-app",{appName:a})}const l=new r.h1(a);for(const r of de.values())l.addComponent(r);const u=new ye(n,o,l);return ue.set(a,u),u}function Se(e=se){const t=ue.get(e);if(!t&&e===se&&(0,i.T9)())return we();if(!t)throw ge.create("no-app",{appName:e});return t}function Ee(e,t,n){var o;let i=null!==(o=le[e])&&void 0!==o?o:e;n&&(i+=`-${n}`);const a=i.match(/\s|\//),s=t.match(/\s|\//);if(a||s){const e=[`Unable to register library "${i}" with version "${t}":`];return a&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void D.warn(e.join(" "))}fe(new r.uA(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _e="firebase-heartbeat-database",Ce=1,ke="firebase-heartbeat-store";let Ie=null;function xe(){return Ie||(Ie=C(_e,Ce,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(ke)}catch(n){console.warn(n)}}}}).catch((e=>{throw ge.create("idb-open",{originalErrorMessage:e.message})}))),Ie}async function Te(e){try{const t=await xe(),n=t.transaction(ke),r=await n.objectStore(ke).get(Fe(e));return await n.done,r}catch(t){if(t instanceof i.g)D.warn(t.message);else{const e=ge.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});D.warn(e.message)}}}async function Ae(e,t){try{const n=await xe(),r=n.transaction(ke,"readwrite"),o=r.objectStore(ke);await o.put(t,Fe(e)),await r.done}catch(n){if(n instanceof i.g)D.warn(n.message);else{const e=ge.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});D.warn(e.message)}}}function Fe(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re=1024,Ve=2592e6;class De{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Le(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate(),r=n.getPlatformInfoString(),o=Pe();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some((e=>e.date===o)))return;return this._heartbeatsCache.heartbeats.push({date:o,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Ve})),this._storage.overwrite(this._heartbeatsCache)}catch(n){D.warn(n)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Pe(),{heartbeatsToSend:n,unsentEntries:r}=Oe(this._heartbeatsCache.heartbeats),o=(0,i.Uj)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return D.warn(t),""}}}function Pe(){const e=new Date;return e.toISOString().substring(0,10)}function Oe(e,t=Re){const n=[];let r=e.slice();for(const o of e){const e=n.find((e=>e.agent===o.agent));if(e){if(e.dates.push(o.date),Ne(n)>t){e.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Ne(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Le{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.zW)()&&(0,i.eX)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Te(this.app);return(null===e||void 0===e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ae(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ae(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Ne(e){return(0,i.Uj)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(e){fe(new r.uA("platform-logger",(e=>new A(e)),"PRIVATE")),fe(new r.uA("heartbeat",(e=>new De(e)),"PRIVATE")),Ee(R,V,e),Ee(R,V,"esm2017"),Ee("fire-js","")}Me("")},852:function(e,t,n){n.d(t,{h1:function(){return u},uA:function(){return o}});n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8992),n(4520),n(1454);var r=n(4046);class o{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.cY;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(r)return null;throw o}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(l(e))try{this.getOrInitializeService({instanceIdentifier:i})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=i){return this.instances.has(e)}getOptions(e=i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[o,i]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(o);n===e&&i.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),o=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;o.add(e),this.onInitCallbacks.set(r,o);const i=this.instances.get(r);return i&&e(i,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const o of n)try{o(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:s(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=i){return this.component?this.component.multipleInstances?e:i:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function s(e){return e===i?void 0:e}function l(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},1363:function(e,t,n){n.d(t,{$b:function(){return o},Vy:function(){return u}});n(4114),n(8992),n(4520),n(1454);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var o;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(o||(o={}));const i={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},a=o.INFO,s={[o.DEBUG]:"log",[o.VERBOSE]:"log",[o.INFO]:"info",[o.WARN]:"warn",[o.ERROR]:"error"},l=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),o=s[t];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[o](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=a,this._logHandler=l,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in o))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?i[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,o.DEBUG,...e),this._logHandler(this,o.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,o.VERBOSE,...e),this._logHandler(this,o.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,o.INFO,...e),this._logHandler(this,o.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,o.WARN,...e),this._logHandler(this,o.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,o.ERROR,...e),this._logHandler(this,o.ERROR,...e)}}},6400:function(e,t,n){n.d(t,{Wp:function(){return r.Wp}});var r=n(3405),o="firebase",i="11.0.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KO)(o,i,"app")},7307:function(e,t,n){n.d(t,{sk:function(){return Ct},HF:function(){return kt},xI:function(){return Jr},Q4:function(){return Yn},hg:function(){return Nt},df:function(){return Nn},$2:function(){return qn},CI:function(){return Mt}});n(4114),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8992),n(4520),n(2577),n(3949),n(1454),n(8872),n(7550),n(4603),n(7566),n(8721);var r=n(3405),o=n(4046),i=n(1363);function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var s=n(852);function l(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=l,c=new o.FA("auth","Firebase",l()),d=new i.Vy("@firebase/auth");function h(e,...t){d.logLevel<=i.$b.WARN&&d.warn(`Auth (${r.MF}): ${e}`,...t)}function f(e,...t){d.logLevel<=i.$b.ERROR&&d.error(`Auth (${r.MF}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e,...t){throw b(e,...t)}function v(e,...t){return b(e,...t)}function m(e,t,n){const r=Object.assign(Object.assign({},u()),{[t]:n}),i=new o.FA("auth","Firebase",r);return i.create(t,{appName:e.name})}function g(e){return m(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function y(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&p(e,"argument-error"),m(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function b(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return c.create(e,...t)}function w(e,t,...n){if(!e)throw b(t,...n)}function S(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function E(e,t){e||S(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function C(){return"http:"===k()||"https:"===k()}function k(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(C()||(0,o.sr)()||"connection"in navigator))||navigator.onLine}function x(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e,t){this.shortDelay=e,this.longDelay=t,E(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,o.jZ)()||(0,o.lV)()}get(){return I()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e,t){E(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void S("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void S("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void S("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["INVALID_LOGIN_CREDENTIALS"]:"invalid-credential",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},V=new T(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function P(e,t,n,r,i={}){return O(e,i,(async()=>{let i={},a={};r&&("GET"===t?a=r:i={body:JSON.stringify(r)});const s=(0,o.Am)(Object.assign({key:e.config.apiKey},a)).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);const u=Object.assign({method:t,headers:l},i);return(0,o.c1)()||(u.referrerPolicy="no-referrer"),F.fetch()(N(e,e.config.apiHost,n,s),u)}))}async function O(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},R),t);try{const t=new W(e),o=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await o.json();if("needConfirmation"in i)throw B(e,"account-exists-with-different-credential",i);if(o.ok&&!("errorMessage"in i))return i;{const t=o.ok?i.errorMessage:i.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw B(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw B(e,"email-already-in-use",i);if("USER_DISABLED"===n)throw B(e,"user-disabled",i);const s=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw m(e,s,a);p(e,s)}}catch(i){if(i instanceof o.g)throw i;p(e,"network-request-failed",{message:String(i)})}}async function L(e,t,n,r,o={}){const i=await P(e,t,n,r,o);return"mfaPendingCredential"in i&&p(e,"multi-factor-auth-required",{_serverResponse:i}),i}function N(e,t,n,r){const o=`${t}${n}?${r}`;return e.config.emulator?A(e.config,o):`${e.config.apiScheme}://${o}`}function M(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class W{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(v(this.auth,"network-request-failed"))),V.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function B(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const o=v(e,t,r);return o.customData._tokenResponse=n,o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e){return void 0!==e&&void 0!==e.enterprise}class ${constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return M(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(e,t){return P(e,"GET","/v2/recaptchaConfig",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(e,t){return P(e,"POST","/v1/accounts:delete",t)}async function K(e,t){return P(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(e,t=!1){const n=(0,o.Ku)(e),r=await n.getIdToken(t),i=Y(r);w(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const a="object"===typeof i.firebase?i.firebase:void 0,s=null===a||void 0===a?void 0:a["sign_in_provider"];return{claims:i,token:r,authTime:H(G(i.auth_time)),issuedAtTime:H(G(i.iat)),expirationTime:H(G(i.exp)),signInProvider:s||null,signInSecondFactor:(null===a||void 0===a?void 0:a["sign_in_second_factor"])||null}}function G(e){return 1e3*Number(e)}function Y(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,o.u)(n);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(i){return f("Caught error parsing JWT payload as JSON",null===i||void 0===i?void 0:i.toString()),null}}function X(e){const t=Y(e);return w(t,"internal-error"),w("undefined"!==typeof t.exp,"internal-error"),w("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof o.g&&Q(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Q({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=H(this.lastLoginAt),this.creationTime=H(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function te(e){var t;const n=e.auth,r=await e.getIdToken(),o=await J(e,K(n,{idToken:r}));w(null===o||void 0===o?void 0:o.users.length,n,"internal-error");const i=o.users[0];e._notifyReloadListener(i);const a=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?oe(i.providerUserInfo):[],s=re(e.providerData,a),l=e.isAnonymous,u=!(e.email&&i.passwordHash)&&!(null===s||void 0===s?void 0:s.length),c=!!l&&u,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ee(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(e,d)}async function ne(e){const t=(0,o.Ku)(e);await te(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function re(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function oe(e){return e.map((e=>{var{providerId:t}=e,n=a(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie(e,t){const n=await O(e,{},(async()=>{const n=(0,o.Am)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,a=N(e,r,"/v1/token",`key=${i}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",F.fetch()(a,{method:"POST",headers:s,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ae(e,t){return P(e,"POST","/v2/accounts:revokeToken",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){w(e.idToken,"internal-error"),w("undefined"!==typeof e.idToken,"internal-error"),w("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):X(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){w(0!==e.length,"internal-error");const t=X(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(w(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:o}=await ie(e,t);this.updateTokensAndExpiration(n,r,Number(o))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:o}=t,i=new se;return n&&(w("string"===typeof n,"internal-error",{appName:e}),i.refreshToken=n),r&&(w("string"===typeof r,"internal-error",{appName:e}),i.accessToken=r),o&&(w("number"===typeof o,"internal-error",{appName:e}),i.expirationTime=o),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new se,this.toJSON())}_performRefresh(){return S("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e,t){w("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ue{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,o=a(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Z(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new ee(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await J(this,this.stsTokenManager.getToken(this.auth,e));return w(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return q(this,e)}reload(){return ne(this)}_assign(e){this!==e&&(w(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ue(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await te(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,r.xZ)(this.auth.app))return Promise.reject(g(this.auth));const e=await this.getIdToken();return await J(this,z(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,o,i,a,s,l,u;const c=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,h=null!==(o=t.phoneNumber)&&void 0!==o?o:void 0,f=null!==(i=t.photoURL)&&void 0!==i?i:void 0,p=null!==(a=t.tenantId)&&void 0!==a?a:void 0,v=null!==(s=t._redirectEventId)&&void 0!==s?s:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,g=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:b,isAnonymous:S,providerData:E,stsTokenManager:_}=t;w(y&&_,e,"internal-error");const C=se.fromJSON(this.name,_);w("string"===typeof y,e,"internal-error"),le(c,e.name),le(d,e.name),w("boolean"===typeof b,e,"internal-error"),w("boolean"===typeof S,e,"internal-error"),le(h,e.name),le(f,e.name),le(p,e.name),le(v,e.name),le(m,e.name),le(g,e.name);const k=new ue({uid:y,auth:e,email:d,emailVerified:b,displayName:c,isAnonymous:S,photoURL:f,phoneNumber:h,tenantId:p,stsTokenManager:C,createdAt:m,lastLoginAt:g});return E&&Array.isArray(E)&&(k.providerData=E.map((e=>Object.assign({},e)))),v&&(k._redirectEventId=v),k}static async _fromIdTokenResponse(e,t,n=!1){const r=new se;r.updateFromServerResponse(t);const o=new ue({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await te(o),o}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];w(void 0!==r.localId,"internal-error");const o=void 0!==r.providerUserInfo?oe(r.providerUserInfo):[],i=!(r.email&&r.passwordHash)&&!(null===o||void 0===o?void 0:o.length),a=new se;a.updateFromIdToken(n);const s=new ue({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:i}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new ee(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(null===o||void 0===o?void 0:o.length)};return Object.assign(s,l),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce=new Map;function de(e){E(e instanceof Function,"Expected a class definition");let t=ce.get(e);return t?(E(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ce.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}he.type="NONE";const fe=he;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(e,t,n){return`firebase:${e}:${t}:${n}`}class ve{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:o}=this.auth;this.fullUserKey=pe(this.userKey,r.apiKey,o),this.fullPersistenceKey=pe("persistence",r.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ue._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ve(de(fe),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let o=r[0]||de(fe);const i=pe(n,e.config.apiKey,e.name);let a=null;for(const u of t)try{const t=await u._get(i);if(t){const n=ue._fromJSON(e,t);u!==o&&(a=n),o=u;break}}catch(l){}const s=r.filter((e=>e._shouldAllowMigration));return o._shouldAllowMigration&&s.length?(o=s[0],a&&await o._set(i,a.toJSON()),await Promise.all(t.map((async e=>{if(e!==o)try{await e._remove(i)}catch(l){}}))),new ve(o,e,n)):new ve(o,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(we(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ge(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ee(t))return"Blackberry";if(_e(t))return"Webos";if(ye(t))return"Safari";if((t.includes("chrome/")||be(t))&&!t.includes("edge/"))return"Chrome";if(Se(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ge(e=(0,o.ZQ)()){return/firefox\//i.test(e)}function ye(e=(0,o.ZQ)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function be(e=(0,o.ZQ)()){return/crios\//i.test(e)}function we(e=(0,o.ZQ)()){return/iemobile/i.test(e)}function Se(e=(0,o.ZQ)()){return/android/i.test(e)}function Ee(e=(0,o.ZQ)()){return/blackberry/i.test(e)}function _e(e=(0,o.ZQ)()){return/webos/i.test(e)}function Ce(e=(0,o.ZQ)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ke(e=(0,o.ZQ)()){var t;return Ce(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Ie(){return(0,o.lT)()&&10===document.documentMode}function xe(e=(0,o.ZQ)()){return Ce(e)||Se(e)||_e(e)||Ee(e)||/windows phone/i.test(e)||we(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(e,t=[]){let n;switch(e){case"Browser":n=me((0,o.ZQ)());break;case"Worker":n=`${me((0,o.ZQ)())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.MF}/${i}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(o){r(o)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fe(e,t={}){return P(e,"GET","/v2/passwordPolicy",D(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re=6;class Ve{constructor(e){var t,n,r,o;const i=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=i.minPasswordLength)&&void 0!==t?t:Re,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),void 0!==i.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),void 0!==i.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),void 0!==i.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),void 0!==i.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(o=e.forceUpgradeOnSignin)&&void 0!==o&&o,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,o,i,a;const s={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,s),this.validatePasswordCharacterOptions(e,s),s.isValid&&(s.isValid=null===(t=s.meetsMinPasswordLength)||void 0===t||t),s.isValid&&(s.isValid=null===(n=s.meetsMaxPasswordLength)||void 0===n||n),s.isValid&&(s.isValid=null===(r=s.containsLowercaseLetter)||void 0===r||r),s.isValid&&(s.isValid=null===(o=s.containsUppercaseLetter)||void 0===o||o),s.isValid&&(s.isValid=null===(i=s.containsNumericCharacter)||void 0===i||i),s.isValid&&(s.isValid=null===(a=s.containsNonAlphanumericCharacter)||void 0===a||a),s}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Oe(this),this.idTokenSubscription=new Oe(this),this.beforeStateQueue=new Ae(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=de(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ve.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(o){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await K(this,{idToken:e}),n=await ue._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if((0,r.xZ)(this.app)){const e=this.app.settings.authIdToken;return e?new Promise((t=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(e).then(t,t)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let o=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null===o||void 0===o?void 0:o._redirectEventId,a=await this.tryRedirectSignIn(e);n&&n!==r||!(null===a||void 0===a?void 0:a.user)||(o=a.user,i=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(o)}catch(a){o=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(a)))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await te(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=x()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if((0,r.xZ)(this.app))return Promise.reject(g(this));const t=e?(0,o.Ku)(e):null;return t&&w(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&w(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(0,r.xZ)(this.app)?Promise.reject(g(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return(0,r.xZ)(this.app)?Promise.reject(g(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(de(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Fe(this),t=new Ve(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new o.FA("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};null!=this.tenantId&&(n.tenantId=this.tenantId),await ae(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&de(e)||this._popupRedirectResolver;w(t,this,"argument-error"),this.redirectPersistenceManager=await ve.create(this,[de(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const o="function"===typeof t?t:t.next.bind(t);let i=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(w(a,this,"internal-error"),a.then((()=>{i||o(this.currentUser)})),"function"===typeof t){const o=e.addObserver(t,n,r);return()=>{i=!0,o()}}{const n=e.addObserver(t);return()=>{i=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Te(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&h(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function Pe(e){return(0,o.Ku)(e)}class Oe{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,o.tD)((e=>this.observer=e))}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Le={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ne(e){Le=e}function Me(e){return Le.loadJS(e)}function We(){return Le.recaptchaEnterpriseScript}function Be(){return Le.gapiScript}function je(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(){this.enterprise=new Ue}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Ue{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const ze="recaptcha-enterprise",Ke="NO_RECAPTCHA";class He{constructor(e){this.type=ze,this.auth=Pe(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{U(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new $(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const o=window.grecaptcha;j(o)?o.enterprise.ready((()=>{o.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(Ke)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}if(this.auth.settings.appVerificationDisabledForTesting){const e=new $e;return e.execute("siteKey",{action:"verify"})}return new Promise(((e,o)=>{n(this.auth).then((n=>{if(!t&&j(window.grecaptcha))r(n,e,o);else{if("undefined"===typeof window)return void o(new Error("RecaptchaVerifier is only supported in browser"));let t=We();0!==t.length&&(t+=n),Me(t).then((()=>{r(n,e,o)})).catch((e=>{o(e)}))}})).catch((e=>{o(e)}))}))}}async function qe(e,t,n,r=!1,o=!1){const i=new He(e);let a;if(o)a=Ke;else try{a=await i.verify(n)}catch(l){a=await i.verify(n,!0)}const s=Object.assign({},t);if("mfaSmsEnrollment"===n||"mfaSmsSignIn"===n){if("phoneEnrollmentInfo"in s){const e=s.phoneEnrollmentInfo.phoneNumber,t=s.phoneEnrollmentInfo.recaptchaToken;Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in s){const e=s.phoneSignInInfo.recaptchaToken;Object.assign(s,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return s}return r?Object.assign(s,{captchaResp:a}):Object.assign(s,{captchaResponse:a}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function Ge(e,t,n,r,o){var i,a;if("EMAIL_PASSWORD_PROVIDER"===o){if(null===(i=e._getRecaptchaConfig())||void 0===i?void 0:i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await qe(e,t,n,"getOobCode"===n);return r(e,o)}return r(e,t).catch((async o=>{if("auth/missing-recaptcha-token"===o.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await qe(e,t,n,"getOobCode"===n);return r(e,o)}return Promise.reject(o)}))}if("PHONE_PROVIDER"===o){if(null===(a=e._getRecaptchaConfig())||void 0===a?void 0:a.isProviderEnabled("PHONE_PROVIDER")){const o=await qe(e,t,n);return r(e,o).catch((async o=>{var i;if("AUDIT"===(null===(i=e._getRecaptchaConfig())||void 0===i?void 0:i.getProviderEnforcementState("PHONE_PROVIDER"))&&("auth/missing-recaptcha-token"===o.code||"auth/invalid-app-credential"===o.code)){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const o=await qe(e,t,n,!1,!0);return r(e,o)}return Promise.reject(o)}))}{const o=await qe(e,t,n,!1,!0);return r(e,o)}}return Promise.reject(o+" provider is not supported.")}async function Ye(e){const t=Pe(e),n=await U(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new $(n);if(null==t.tenantId?t._agentRecaptchaConfig=r:t._tenantRecaptchaConfigs[t.tenantId]=r,r.isAnyProviderEnabled()){const e=new He(t);e.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(e,t){const n=(0,r.j6)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if((0,o.bD)(r,null!==t&&void 0!==t?t:{}))return e;p(e,"already-initialized")}const i=n.initialize({options:t});return i}function Je(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(de);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}function Qe(e,t,n){const r=Pe(e);w(r._canInitEmulator,r,"emulator-config-failed"),w(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const o=!!(null===n||void 0===n?void 0:n.disableWarnings),i=Ze(t),{host:a,port:s}=et(t),l=null===s?"":`:${s}`;r.config.emulator={url:`${i}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:s,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:o})}),o||nt()}function Ze(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function et(e){const t=Ze(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const e=o[1];return{host:e,port:tt(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:tt(t)}}}function tt(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function nt(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return S("not implemented")}_getIdTokenResponse(e){return S("not implemented")}_linkToIdToken(e,t){return S("not implemented")}_getReauthenticationResolver(e){return S("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ot(e,t){return P(e,"POST","/v1/accounts:signUp",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function it(e,t){return L(e,"POST","/v1/accounts:signInWithPassword",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function at(e,t){return L(e,"POST","/v1/accounts:signInWithEmailLink",D(e,t))}async function st(e,t){return L(e,"POST","/v1/accounts:signInWithEmailLink",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends rt{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new lt(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new lt(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ge(e,t,"signInWithPassword",it,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return at(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ge(e,n,"signUpPassword",ot,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return st(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ut(e,t){return L(e,"POST","/v1/accounts:signInWithIdp",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct="http://localhost";class dt extends rt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new dt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,o=a(t,["providerId","signInMethod"]);if(!n||!r)return null;const i=new dt(n,r);return i.idToken=o.idToken||void 0,i.accessToken=o.accessToken||void 0,i.secret=o.secret,i.nonce=o.nonce,i.pendingToken=o.pendingToken||null,i}_getIdTokenResponse(e){const t=this.buildRequest();return ut(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ut(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ut(e,t)}buildRequest(){const e={requestUri:ct,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,o.Am)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ht(e,t){return P(e,"POST","/v1/accounts:sendVerificationCode",D(e,t))}async function ft(e,t){return L(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,t))}async function pt(e,t){const n=await L(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,t));if(n.temporaryProof)throw B(e,"account-exists-with-different-credential",n);return n}const vt={["USER_NOT_FOUND"]:"user-not-found"};async function mt(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return L(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,n),vt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt extends rt{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new gt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new gt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return ft(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return pt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return mt(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:o}=e;return n||t||r||o?new gt({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:o}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bt(e){const t=(0,o.I9)((0,o.hp)(e))["link"],n=t?(0,o.I9)((0,o.hp)(t))["deep_link_id"]:null,r=(0,o.I9)((0,o.hp)(e))["deep_link_id"],i=r?(0,o.I9)((0,o.hp)(r))["link"]:null;return i||r||n||t||e}class wt{constructor(e){var t,n,r,i,a,s;const l=(0,o.I9)((0,o.hp)(e)),u=null!==(t=l["apiKey"])&&void 0!==t?t:null,c=null!==(n=l["oobCode"])&&void 0!==n?n:null,d=yt(null!==(r=l["mode"])&&void 0!==r?r:null);w(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=null!==(i=l["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(a=l["languageCode"])&&void 0!==a?a:null,this.tenantId=null!==(s=l["tenantId"])&&void 0!==s?s:null}static parseLink(e){const t=bt(e);try{return new wt(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class St{constructor(){this.providerId=St.PROVIDER_ID}static credential(e,t){return lt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=wt.parseLink(t);return w(n,"argument-error"),lt._fromEmailAndCode(e,n.code,n.tenantId)}}St.PROVIDER_ID="password",St.EMAIL_PASSWORD_SIGN_IN_METHOD="password",St.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Et{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends Et{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ct extends _t{constructor(){super("facebook.com")}static credential(e){return dt._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ct.credential(e.oauthAccessToken)}catch(t){return null}}}Ct.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ct.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kt extends _t{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return dt._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return kt.credential(t,n)}catch(r){return null}}}kt.GOOGLE_SIGN_IN_METHOD="google.com",kt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class It extends _t{constructor(){super("github.com")}static credential(e){return dt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return It.credential(e.oauthAccessToken)}catch(t){return null}}}It.GITHUB_SIGN_IN_METHOD="github.com",It.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xt extends _t{constructor(){super("twitter.com")}static credential(e,t){return dt._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return xt.credential(t,n)}catch(r){return null}}}xt.TWITTER_SIGN_IN_METHOD="twitter.com",xt.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const o=await ue._fromIdTokenResponse(e,n,r),i=At(n),a=new Tt({user:o,providerId:i,_tokenResponse:n,operationType:t});return a}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=At(n);return new Tt({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function At(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ft extends o.g{constructor(e,t,n,r){var o;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Ft.prototype),this.customData={appName:e.name,tenantId:null!==(o=e.tenantId)&&void 0!==o?o:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Ft(e,t,n,r)}}function Rt(e,t,n,r){const o="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return o.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ft._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vt(e,t,n=!1){const r=await J(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Tt._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Dt(e,t,n=!1){const{auth:o}=e;if((0,r.xZ)(o.app))return Promise.reject(g(o));const i="reauthenticate";try{const r=await J(e,Rt(o,i,t,e),n);w(r.idToken,o,"internal-error");const a=Y(r.idToken);w(a,o,"internal-error");const{sub:s}=a;return w(e.uid===s,o,"user-mismatch"),Tt._forOperation(e,i,r)}catch(a){throw"auth/user-not-found"===(null===a||void 0===a?void 0:a.code)&&p(o,"user-mismatch"),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pt(e,t,n=!1){if((0,r.xZ)(e.app))return Promise.reject(g(e));const o="signIn",i=await Rt(e,o,t),a=await Tt._fromIdTokenResponse(e,o,i);return n||await e._updateCurrentUser(a.user),a}function Ot(e,t,n,r){return(0,o.Ku)(e).onIdTokenChanged(t,n,r)}function Lt(e,t,n){return(0,o.Ku)(e).beforeAuthStateChanged(t,n)}function Nt(e,t,n,r){return(0,o.Ku)(e).onAuthStateChanged(t,n,r)}function Mt(e){return(0,o.Ku)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wt(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:start",D(e,t))}function Bt(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:finalize",D(e,t))}function jt(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:start",D(e,t))}function $t(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:finalize",D(e,t))}new WeakMap;const Ut="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ut,"1"),this.storage.removeItem(Ut),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt=1e3,Ht=10;class qt extends zt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xe(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},o=this.storage.getItem(n);Ie()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Ht):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Kt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}qt.type="LOCAL";const Gt=qt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends zt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Yt.type="SESSION";const Xt=Yt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Qt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:o}=t.data,i=this.handlersMap[r];if(!(null===i||void 0===i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const a=Array.from(i).map((async e=>e(t.origin,o))),s=await Jt(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:s})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zt(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qt.receivers=[];class en{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let o,i;return new Promise(((a,s)=>{const l=Zt("",20);r.port1.start();const u=setTimeout((()=>{s(new Error("unsupported_event"))}),n);i={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(u),o=setTimeout((()=>{s(new Error("timeout"))}),3e3);break;case"done":clearTimeout(o),a(t.data.response);break;default:clearTimeout(u),clearTimeout(o),s(new Error("invalid_response"));break}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(){return window}function nn(e){tn().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(){return"undefined"!==typeof tn()["WorkerGlobalScope"]&&"function"===typeof tn()["importScripts"]}async function on(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function an(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function sn(){return rn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln="firebaseLocalStorageDb",un=1,cn="firebaseLocalStorage",dn="fbase_key";class hn{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function fn(e,t){return e.transaction([cn],t?"readwrite":"readonly").objectStore(cn)}function pn(){const e=indexedDB.deleteDatabase(ln);return new hn(e).toPromise()}function vn(){const e=indexedDB.open(ln,un);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(cn,{keyPath:dn})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(cn)?t(n):(n.close(),await pn(),t(await vn()))}))}))}async function mn(e,t,n){const r=fn(e,!0).put({[dn]:t,value:n});return new hn(r).toPromise()}async function gn(e,t){const n=fn(e,!1).get(t),r=await new hn(n).toPromise();return void 0===r?null:r.value}function yn(e,t){const n=fn(e,!0).delete(t);return new hn(n).toPromise()}const bn=800,wn=3;class Sn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await vn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>wn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qt._getInstance(sn()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await on(),!this.activeServiceWorker)return;this.sender=new en(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&an()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vn();return await mn(e,Ut,"1"),await yn(e,Ut),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>mn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>gn(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>yn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=fn(e,!1).getAll();return new hn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:o}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(o)&&(this.notifyListeners(r,o),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),bn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Sn.type="LOCAL";const En=Sn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:start",D(e,t))}function Cn(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:finalize",D(e,t))}function kn(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:finalize",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */je("rcb"),new T(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const In="recaptcha";async function xn(e,t,n){var r;if(!e._getRecaptchaConfig())try{await Ye(e)}catch(o){console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let o;if(o="string"===typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){w("enroll"===t.type,e,"internal-error");const r={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,clientType:"CLIENT_TYPE_WEB"}},i=async(e,t)=>{if(t.phoneEnrollmentInfo.captchaResponse===Ke){w((null===n||void 0===n?void 0:n.type)===In,e,"argument-error");const r=await Tn(e,t,n);return Wt(e,r)}return Wt(e,t)},a=Ge(e,r,"mfaSmsEnrollment",i,"PHONE_PROVIDER"),s=await a.catch((e=>Promise.reject(e)));return s.phoneSessionInfo.sessionInfo}{w("signin"===t.type,e,"internal-error");const i=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;w(i,e,"missing-multi-factor-info");const a={mfaPendingCredential:t.credential,mfaEnrollmentId:i,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}},s=async(e,t)=>{if(t.phoneSignInInfo.captchaResponse===Ke){w((null===n||void 0===n?void 0:n.type)===In,e,"argument-error");const r=await Tn(e,t,n);return _n(e,r)}return _n(e,t)},l=Ge(e,a,"mfaSmsSignIn",s,"PHONE_PROVIDER"),u=await l.catch((e=>Promise.reject(e)));return u.phoneResponseInfo.sessionInfo}}{const t={phoneNumber:o.phoneNumber,clientType:"CLIENT_TYPE_WEB"},r=async(e,t)=>{if(t.captchaResponse===Ke){w((null===n||void 0===n?void 0:n.type)===In,e,"argument-error");const r=await Tn(e,t,n);return ht(e,r)}return ht(e,t)},i=Ge(e,t,"sendVerificationCode",r,"PHONE_PROVIDER"),a=await i.catch((e=>Promise.reject(e)));return a.sessionInfo}}finally{null===n||void 0===n||n._reset()}}async function Tn(e,t,n){w(n.type===In,e,"argument-error");const r=await n.verify();w("string"===typeof r,e,"argument-error");const o=Object.assign({},t);if("phoneEnrollmentInfo"in o){const e=o.phoneEnrollmentInfo.phoneNumber,t=o.phoneEnrollmentInfo.captchaResponse,n=o.phoneEnrollmentInfo.clientType,i=o.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(o,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:r,captchaResponse:t,clientType:n,recaptchaVersion:i}}),o}if("phoneSignInInfo"in o){const e=o.phoneSignInInfo.captchaResponse,t=o.phoneSignInInfo.clientType,n=o.phoneSignInInfo.recaptchaVersion;return Object.assign(o,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:e,clientType:t,recaptchaVersion:n}}),o}return Object.assign(o,{recaptchaToken:r}),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.providerId=An.PROVIDER_ID,this.auth=Pe(e)}verifyPhoneNumber(e,t){return xn(this.auth,e,(0,o.Ku)(t))}static credential(e,t){return gt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return An.credentialFromTaggedObject(t)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?gt._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fn(e,t){return t?de(t):(w(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */An.PROVIDER_ID="phone",An.PHONE_SIGN_IN_METHOD="phone";class Rn extends rt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ut(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ut(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ut(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Vn(e){return Pt(e.auth,new Rn(e),e.bypassAuthState)}function Dn(e){const{auth:t,user:n}=e;return w(n,t,"internal-error"),Dt(n,new Rn(e),e.bypassAuthState)}async function Pn(e){const{auth:t,user:n}=e;return w(n,t,"internal-error"),Vt(n,new Rn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,t,n,r,o=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:o,error:i,type:a}=e;if(i)return void this.reject(i);const s={auth:this.auth,requestUri:t,sessionId:n,tenantId:o||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(s))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Vn;case"linkViaPopup":case"linkViaRedirect":return Pn;case"reauthViaPopup":case"reauthViaRedirect":return Dn;default:p(this.auth,"internal-error")}}resolve(e){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=new T(2e3,1e4);async function Nn(e,t,n){if((0,r.xZ)(e.app))return Promise.reject(v(e,"operation-not-supported-in-this-environment"));const o=Pe(e);y(e,t,Et);const i=Fn(o,n),a=new Mn(o,"signInViaPopup",t,i);return a.executeNotNull()}class Mn extends On{constructor(e,t,n,r,o){super(e,t,r,o),this.provider=n,this.authWindow=null,this.pollId=null,Mn.currentPopupAction&&Mn.currentPopupAction.cancel(),Mn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return w(e,this.auth,"internal-error"),e}async onExecution(){E(1===this.filter.length,"Popup operations only handle one event");const e=Zt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(v(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(v(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(v(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Ln.get())};e()}}Mn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Wn="pendingRedirect",Bn=new Map;class jn extends On{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Bn.get(this.auth._key());if(!e){try{const t=await $n(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Bn.set(this.auth._key(),e)}return this.bypassAuthState||Bn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function $n(e,t){const n=Hn(t),r=Kn(e);if(!await r._isAvailable())return!1;const o="true"===await r._get(n);return await r._remove(n),o}async function Un(e,t){return Kn(e)._set(Hn(t),"true")}function zn(e,t){Bn.set(e._key(),t)}function Kn(e){return de(e._redirectPersistence)}function Hn(e){return pe(Wn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(e,t,n){return Gn(e,t,n)}async function Gn(e,t,n){if((0,r.xZ)(e.app))return Promise.reject(g(e));const o=Pe(e);y(e,t,Et),await o._initializationPromise;const i=Fn(o,n);return await Un(i,o),i._openRedirect(o,t,"signInViaRedirect")}async function Yn(e,t){return await Pe(e)._initializationPromise,Xn(e,t,!1)}async function Xn(e,t,n=!1){if((0,r.xZ)(e.app))return Promise.reject(g(e));const o=Pe(e),i=Fn(o,t),a=new jn(o,i,n),s=await a.execute();return s&&!n&&(delete s.user._redirectEventId,await o._persistUserIfCurrent(s.user),await o._setRedirectUser(null,t)),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Jn=6e5;class Qn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!tr(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!er(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(v(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Jn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zn(e))}saveEventToCache(e){this.cachedEventUids.add(Zn(e)),this.lastProcessedEventTime=Date.now()}}function Zn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function er({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function tr(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return er(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nr(e,t={}){return P(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,or=/^https?/;async function ir(e){if(e.config.emulator)return;const{authorizedDomains:t}=await nr(e);for(const r of t)try{if(ar(r))return}catch(n){}p(e,"unauthorized-domain")}function ar(e){const t=_(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return""===o.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&o.hostname===r}if(!or.test(n))return!1;if(rr.test(e))return r===e;const o=e.replace(/\./g,"\\."),i=new RegExp("^(.+\\."+o+"|"+o+")$","i");return i.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=new T(3e4,6e4);function lr(){const e=tn().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function ur(e){return new Promise(((t,n)=>{var r,o,i;function a(){lr(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{lr(),n(v(e,"network-request-failed"))},timeout:sr.get()})}if(null===(o=null===(r=tn().gapi)||void 0===r?void 0:r.iframes)||void 0===o?void 0:o.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=tn().gapi)||void 0===i?void 0:i.load)){const t=je("iframefcb");return tn()[t]=()=>{gapi.load?a():n(v(e,"network-request-failed"))},Me(`${Be()}?onload=${t}`).catch((e=>n(e)))}a()}})).catch((e=>{throw cr=null,e}))}let cr=null;function dr(e){return cr=cr||ur(e),cr}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=new T(5e3,15e3),fr="__/auth/iframe",pr="emulator/auth/iframe",vr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gr(e){const t=e.config;w(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?A(t,pr):`https://${e.config.authDomain}/${fr}`,i={apiKey:t.apiKey,appName:e.name,v:r.MF},a=mr.get(e.config.apiHost);a&&(i.eid=a);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${(0,o.Am)(i).slice(1)}`}async function yr(e){const t=await dr(e),n=tn().gapi;return w(n,e,"internal-error"),t.open({where:document.body,url:gr(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vr,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const o=v(e,"network-request-failed"),i=tn().setTimeout((()=>{r(o)}),hr.get());function a(){tn().clearTimeout(i),n(t)}t.ping(a).then(a,(()=>{r(o)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wr=500,Sr=600,Er="_blank",_r="http://localhost";class Cr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function kr(e,t,n,r=wr,i=Sr){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},br),{width:r.toString(),height:i.toString(),top:a,left:s}),c=(0,o.ZQ)().toLowerCase();n&&(l=be(c)?Er:n),ge(c)&&(t=t||_r,u.scrollbars="yes");const d=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(ke(c)&&"_self"!==l)return Ir(t||"",l),new Cr(null);const h=window.open(t||"",l,d);w(h,e,"popup-blocked");try{h.focus()}catch(f){}return new Cr(h)}function Ir(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr="__/auth/handler",Tr="emulator/auth/handler",Ar=encodeURIComponent("fac");async function Fr(e,t,n,i,a,s){w(e.config.authDomain,e,"auth-domain-config-required"),w(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:r.MF,eventId:a};if(t instanceof Et){t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,o.Im)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))l[e]=t}if(t instanceof _t){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(l.scopes=e.join(","))}e.tenantId&&(l.tid=e.tenantId);const u=l;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];const c=await e._getAppCheckToken(),d=c?`#${Ar}=${encodeURIComponent(c)}`:"";return`${Rr(e)}?${(0,o.Am)(u).slice(1)}${d}`}function Rr({config:e}){return e.emulator?A(e,Tr):`https://${e.authDomain}/${xr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr="webStorageSupport";class Dr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xt,this._completeRedirectFn=Xn,this._overrideRedirectResult=zn}async _openPopup(e,t,n,r){var o;E(null===(o=this.eventManagers[e._key()])||void 0===o?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Fr(e,t,n,_(),r);return kr(e,i,Zt())}async _openRedirect(e,t,n,r){await this._originValidation(e);const o=await Fr(e,t,n,_(),r);return nn(o),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(E(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await yr(e),n=new Qn(e);return t.register("authEvent",(t=>{w(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Vr,{type:Vr},(n=>{var r;const o=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Vr];void 0!==o&&t(!!o),p(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ir(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return xe()||ye()||Ce()}}const Pr=Dr;class Or{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return S("unexpected MultiFactorSessionType")}}}class Lr extends Or{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Lr(e)}_finalizeEnroll(e,t,n){return Bt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Cn(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Nr{constructor(){}static assertion(e){return Lr._fromCredential(e)}}Nr.FACTOR_ID="phone";class Mr{static assertionForEnrollment(e,t){return Wr._fromSecret(e,t)}static assertionForSignIn(e,t){return Wr._fromEnrollmentId(e,t)}static async generateSecret(e){var t;const n=e;w("undefined"!==typeof(null===(t=n.user)||void 0===t?void 0:t.auth),"internal-error");const r=await jt(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return Br._fromStartTotpMfaEnrollmentResponse(r,n.user.auth)}}Mr.FACTOR_ID="totp";class Wr extends Or{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new Wr(t,void 0,e)}static _fromEnrollmentId(e,t){return new Wr(t,e)}async _finalizeEnroll(e,t,n){return w("undefined"!==typeof this.secret,e,"argument-error"),$t(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){w(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return kn(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Br{constructor(e,t,n,r,o,i,a){this.sessionInfo=i,this.auth=a,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=o}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Br(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(jr(e)||jr(t))&&(r=!0),r&&(jr(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),jr(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function jr(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var $r="@firebase/auth",Ur="1.8.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Hr(e){(0,r.om)(new s.uA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:a,authDomain:s}=r.options;w(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Te(e)},u=new De(r,o,i,l);return Je(u,n),u}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,r.om)(new s.uA("auth-internal",(e=>{const t=Pe(e.getProvider("auth").getImmediate());return(e=>new zr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.KO)($r,Ur,Kr(e)),(0,r.KO)($r,Ur,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=300,Gr=(0,o.XA)("authIdTokenMaxAge")||qr;let Yr=null;const Xr=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Gr)return;const o=null===n||void 0===n?void 0:n.token;Yr!==o&&(Yr=o,await fetch(e,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Jr(e=(0,r.Sx)()){const t=(0,r.j6)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Xe(e,{popupRedirectResolver:Pr,persistence:[En,Gt,Xt]}),i=(0,o.XA)("authTokenSyncURL");if(i&&"boolean"===typeof isSecureContext&&isSecureContext){const e=new URL(i,location.origin);if(location.origin===e.origin){const t=Xr(e.toString());Lt(n,t,(()=>t(n.currentUser))),Ot(n,(e=>t(e)))}}const a=(0,o.Tj)("auth");return a&&Qe(n,`http://${a}`),n}function Qr(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}Ne({loadJS(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=v("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Qr().appendChild(r)}))},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Hr("Browser")},7617:function(e,t,n){n.d(t,{rJ:function(){return ns},H9:function(){return rs},x7:function(){return $s},GG:function(){return zs},aU:function(){return as},mZ:function(){return Ks}});n(4114),n(6573),n(8100),n(7936),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(7467),n(4732),n(9577),n(8992),n(3215),n(4520),n(2577),n(3949),n(1454),n(8872),n(7550),n(1795),n(4979);var r,o,i=n(3405),a=n(852),s=n(1363),l=n(4046),u="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},c={};(function(){var e;
/** @license
         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
         */function t(e,t){function n(){}n.prototype=t.prototype,e.D=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.C=function(e,n,r){for(var o=Array(arguments.length-2),i=2;i<arguments.length;i++)o[i-2]=arguments[i];return t.prototype[n].apply(e,o)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function a(e,t,n){n||(n=0);var r=Array(16);if("string"===typeof t)for(var o=0;16>o;++o)r[o]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(o=0;16>o;++o)r[o]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],o=e.g[2];var i=e.g[3],a=t+(i^n&(o^i))+r[0]+3614090360&4294967295;t=n+(a<<7&4294967295|a>>>25),a=i+(o^t&(n^o))+r[1]+3905402710&4294967295,i=t+(a<<12&4294967295|a>>>20),a=o+(n^i&(t^n))+r[2]+606105819&4294967295,o=i+(a<<17&4294967295|a>>>15),a=n+(t^o&(i^t))+r[3]+3250441966&4294967295,n=o+(a<<22&4294967295|a>>>10),a=t+(i^n&(o^i))+r[4]+4118548399&4294967295,t=n+(a<<7&4294967295|a>>>25),a=i+(o^t&(n^o))+r[5]+1200080426&4294967295,i=t+(a<<12&4294967295|a>>>20),a=o+(n^i&(t^n))+r[6]+2821735955&4294967295,o=i+(a<<17&4294967295|a>>>15),a=n+(t^o&(i^t))+r[7]+4249261313&4294967295,n=o+(a<<22&4294967295|a>>>10),a=t+(i^n&(o^i))+r[8]+1770035416&4294967295,t=n+(a<<7&4294967295|a>>>25),a=i+(o^t&(n^o))+r[9]+2336552879&4294967295,i=t+(a<<12&4294967295|a>>>20),a=o+(n^i&(t^n))+r[10]+4294925233&4294967295,o=i+(a<<17&4294967295|a>>>15),a=n+(t^o&(i^t))+r[11]+2304563134&4294967295,n=o+(a<<22&4294967295|a>>>10),a=t+(i^n&(o^i))+r[12]+1804603682&4294967295,t=n+(a<<7&4294967295|a>>>25),a=i+(o^t&(n^o))+r[13]+4254626195&4294967295,i=t+(a<<12&4294967295|a>>>20),a=o+(n^i&(t^n))+r[14]+2792965006&4294967295,o=i+(a<<17&4294967295|a>>>15),a=n+(t^o&(i^t))+r[15]+1236535329&4294967295,n=o+(a<<22&4294967295|a>>>10),a=t+(o^i&(n^o))+r[1]+4129170786&4294967295,t=n+(a<<5&4294967295|a>>>27),a=i+(n^o&(t^n))+r[6]+3225465664&4294967295,i=t+(a<<9&4294967295|a>>>23),a=o+(t^n&(i^t))+r[11]+643717713&4294967295,o=i+(a<<14&4294967295|a>>>18),a=n+(i^t&(o^i))+r[0]+3921069994&4294967295,n=o+(a<<20&4294967295|a>>>12),a=t+(o^i&(n^o))+r[5]+3593408605&4294967295,t=n+(a<<5&4294967295|a>>>27),a=i+(n^o&(t^n))+r[10]+38016083&4294967295,i=t+(a<<9&4294967295|a>>>23),a=o+(t^n&(i^t))+r[15]+3634488961&4294967295,o=i+(a<<14&4294967295|a>>>18),a=n+(i^t&(o^i))+r[4]+3889429448&4294967295,n=o+(a<<20&4294967295|a>>>12),a=t+(o^i&(n^o))+r[9]+568446438&4294967295,t=n+(a<<5&4294967295|a>>>27),a=i+(n^o&(t^n))+r[14]+3275163606&4294967295,i=t+(a<<9&4294967295|a>>>23),a=o+(t^n&(i^t))+r[3]+4107603335&4294967295,o=i+(a<<14&4294967295|a>>>18),a=n+(i^t&(o^i))+r[8]+1163531501&4294967295,n=o+(a<<20&4294967295|a>>>12),a=t+(o^i&(n^o))+r[13]+2850285829&4294967295,t=n+(a<<5&4294967295|a>>>27),a=i+(n^o&(t^n))+r[2]+4243563512&4294967295,i=t+(a<<9&4294967295|a>>>23),a=o+(t^n&(i^t))+r[7]+1735328473&4294967295,o=i+(a<<14&4294967295|a>>>18),a=n+(i^t&(o^i))+r[12]+2368359562&4294967295,n=o+(a<<20&4294967295|a>>>12),a=t+(n^o^i)+r[5]+4294588738&4294967295,t=n+(a<<4&4294967295|a>>>28),a=i+(t^n^o)+r[8]+2272392833&4294967295,i=t+(a<<11&4294967295|a>>>21),a=o+(i^t^n)+r[11]+1839030562&4294967295,o=i+(a<<16&4294967295|a>>>16),a=n+(o^i^t)+r[14]+4259657740&4294967295,n=o+(a<<23&4294967295|a>>>9),a=t+(n^o^i)+r[1]+2763975236&4294967295,t=n+(a<<4&4294967295|a>>>28),a=i+(t^n^o)+r[4]+1272893353&4294967295,i=t+(a<<11&4294967295|a>>>21),a=o+(i^t^n)+r[7]+4139469664&4294967295,o=i+(a<<16&4294967295|a>>>16),a=n+(o^i^t)+r[10]+3200236656&4294967295,n=o+(a<<23&4294967295|a>>>9),a=t+(n^o^i)+r[13]+681279174&4294967295,t=n+(a<<4&4294967295|a>>>28),a=i+(t^n^o)+r[0]+3936430074&4294967295,i=t+(a<<11&4294967295|a>>>21),a=o+(i^t^n)+r[3]+3572445317&4294967295,o=i+(a<<16&4294967295|a>>>16),a=n+(o^i^t)+r[6]+76029189&4294967295,n=o+(a<<23&4294967295|a>>>9),a=t+(n^o^i)+r[9]+3654602809&4294967295,t=n+(a<<4&4294967295|a>>>28),a=i+(t^n^o)+r[12]+3873151461&4294967295,i=t+(a<<11&4294967295|a>>>21),a=o+(i^t^n)+r[15]+530742520&4294967295,o=i+(a<<16&4294967295|a>>>16),a=n+(o^i^t)+r[2]+3299628645&4294967295,n=o+(a<<23&4294967295|a>>>9),a=t+(o^(n|~i))+r[0]+4096336452&4294967295,t=n+(a<<6&4294967295|a>>>26),a=i+(n^(t|~o))+r[7]+1126891415&4294967295,i=t+(a<<10&4294967295|a>>>22),a=o+(t^(i|~n))+r[14]+2878612391&4294967295,o=i+(a<<15&4294967295|a>>>17),a=n+(i^(o|~t))+r[5]+4237533241&4294967295,n=o+(a<<21&4294967295|a>>>11),a=t+(o^(n|~i))+r[12]+1700485571&4294967295,t=n+(a<<6&4294967295|a>>>26),a=i+(n^(t|~o))+r[3]+2399980690&4294967295,i=t+(a<<10&4294967295|a>>>22),a=o+(t^(i|~n))+r[10]+4293915773&4294967295,o=i+(a<<15&4294967295|a>>>17),a=n+(i^(o|~t))+r[1]+2240044497&4294967295,n=o+(a<<21&4294967295|a>>>11),a=t+(o^(n|~i))+r[8]+1873313359&4294967295,t=n+(a<<6&4294967295|a>>>26),a=i+(n^(t|~o))+r[15]+4264355552&4294967295,i=t+(a<<10&4294967295|a>>>22),a=o+(t^(i|~n))+r[6]+2734768916&4294967295,o=i+(a<<15&4294967295|a>>>17),a=n+(i^(o|~t))+r[13]+1309151649&4294967295,n=o+(a<<21&4294967295|a>>>11),a=t+(o^(n|~i))+r[4]+4149444226&4294967295,t=n+(a<<6&4294967295|a>>>26),a=i+(n^(t|~o))+r[11]+3174756917&4294967295,i=t+(a<<10&4294967295|a>>>22),a=o+(t^(i|~n))+r[2]+718787259&4294967295,o=i+(a<<15&4294967295|a>>>17),a=n+(i^(o|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(o+(a<<21&4294967295|a>>>11))&4294967295,e.g[2]=e.g[2]+o&4294967295,e.g[3]=e.g[3]+i&4294967295}function s(e,t){var n=u;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}function l(e,t){this.h=t;for(var n=[],r=!0,o=e.length-1;0<=o;o--){var i=0|e[o];r&&i==t||(n[o]=i,r=!1)}this.g=n}t(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},i.prototype.u=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.B,o=this.h,i=0;i<t;){if(0==o)for(;i<=n;)a(this,e,i),i+=this.blockSize;if("string"===typeof e){for(;i<t;)if(r[o++]=e.charCodeAt(i++),o==this.blockSize){a(this,r),o=0;break}}else for(;i<t;)if(r[o++]=e[i++],o==this.blockSize){a(this,r),o=0;break}}this.h=o,this.o+=t},i.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.u(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var u={};function d(e){return-128<=e&&128>e?s(e,(function(e){return new l([0|e],0>e?-1:0)})):new l([0|e],0>e?-1:0)}function h(e){if(isNaN(e)||!isFinite(e))return p;if(0>e)return b(h(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=4294967296;return new l(t,0)}function f(e,t){if(0==e.length)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if("-"==e.charAt(0))return b(f(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=h(Math.pow(t,8)),r=p,o=0;o<e.length;o+=8){var i=Math.min(8,e.length-o),a=parseInt(e.substring(o,o+i),t);8>i?(i=h(Math.pow(t,i)),r=r.j(i).add(h(a))):(r=r.j(n),r=r.add(h(a)))}return r}var p=d(0),v=d(1),m=d(16777216);function g(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function y(e){return-1==e.h}function b(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new l(n,~e.h).add(v)}function w(e,t){return e.add(b(t))}function S(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function E(e,t){this.g=e,this.h=t}function _(e,t){if(g(t))throw Error("division by zero");if(g(e))return new E(p,p);if(y(e))return t=_(b(e),t),new E(b(t.g),b(t.h));if(y(t))return t=_(e,b(t)),new E(b(t.g),t.h);if(30<e.g.length){if(y(e)||y(t))throw Error("slowDivide_ only works with positive integers.");for(var n=v,r=t;0>=r.l(e);)n=C(n),r=C(r);var o=k(n,1),i=k(r,1);for(r=k(r,2),n=k(n,2);!g(r);){var a=i.add(r);0>=a.l(e)&&(o=o.add(n),i=a),r=k(r,1),n=k(n,1)}return t=w(e,o.j(t)),new E(o,t)}for(o=p;0<=e.l(t);){for(n=Math.max(1,Math.floor(e.m()/t.m())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=h(n),a=i.j(t);y(a)||0<a.l(e);)n-=r,i=h(n),a=i.j(t);g(i)&&(i=v),o=o.add(i),e=w(e,a)}return new E(o,e)}function C(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.i(r)<<1|e.i(r-1)>>>31;return new l(n,e.h)}function k(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,o=[],i=0;i<r;i++)o[i]=0<t?e.i(i+n)>>>t|e.i(i+n+1)<<32-t:e.i(i+n);return new l(o,e.h)}e=l.prototype,e.m=function(){if(y(this))return-b(this).m();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.i(n);e+=(0<=r?r:4294967296+r)*t,t*=4294967296}return e},e.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(g(this))return"0";if(y(this))return"-"+b(this).toString(e);for(var t=h(Math.pow(e,6)),n=this,r="";;){var o=_(n,t).g;n=w(n,o.j(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=o,g(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}},e.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return e=w(this,e),y(e)?-1:g(e)?0:1},e.abs=function(){return y(this)?b(this):this},e.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,o=0;o<=t;o++){var i=r+(65535&this.i(o))+(65535&e.i(o)),a=(i>>>16)+(this.i(o)>>>16)+(e.i(o)>>>16);r=a>>>16,i&=65535,a&=65535,n[o]=a<<16|i}return new l(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(g(this)||g(e))return p;if(y(this))return y(e)?b(this).j(b(e)):b(b(this).j(e));if(y(e))return b(this.j(b(e)));if(0>this.l(m)&&0>e.l(m))return h(this.m()*e.m());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var o=0;o<e.g.length;o++){var i=this.i(r)>>>16,a=65535&this.i(r),s=e.i(o)>>>16,u=65535&e.i(o);n[2*r+2*o]+=a*u,S(n,2*r+2*o),n[2*r+2*o+1]+=i*u,S(n,2*r+2*o+1),n[2*r+2*o+1]+=a*s,S(n,2*r+2*o+1),n[2*r+2*o+2]+=i*s,S(n,2*r+2*o+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new l(n,0)},e.A=function(e){return _(this,e).h},e.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.i(r)&e.i(r);return new l(n,this.h&e.h)},e.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.i(r)|e.i(r);return new l(n,this.h|e.h)},e.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.i(r)^e.i(r);return new l(n,this.h^e.h)},i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,o=c.Md5=i,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=h,l.fromString=f,r=c.Integer=l}).apply("undefined"!==typeof u?u:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});var d,h,f,p,v,m,g,y,b="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},w={};(function(){var e,t="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e};function n(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof b&&b];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}var r=n(this);function o(e,n){if(n)e:{var o=r;e=e.split(".");for(var i=0;i<e.length-1;i++){var a=e[i];if(!(a in o))break e;o=o[a]}e=e[e.length-1],i=o[e],n=n(i),n!=i&&null!=n&&t(o,e,{configurable:!0,writable:!0,value:n})}}function i(e,t){e instanceof String&&(e+="");var n=0,r=!1,o={next:function(){if(!r&&n<e.length){var o=n++;return{value:t(o,e[o]),done:!1}}return r=!0,{done:!0,value:void 0}}};return o[Symbol.iterator]=function(){return o},o}o("Array.prototype.values",(function(e){return e||function(){return i(this,(function(e,t){return t}))}}));
/** @license
      Copyright The Closure Library Authors.
      SPDX-License-Identifier: Apache-2.0
      */
var a=a||{},s=this||self;function l(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function u(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function c(e,t,n){return e.call.apply(e.bind,arguments)}function E(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function _(e,t,n){return _=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?c:E,_.apply(null,arguments)}function k(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function I(e,t){function n(){}n.prototype=t.prototype,e.aa=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Qb=function(e,n,r){for(var o=Array(arguments.length-2),i=2;i<arguments.length;i++)o[i-2]=arguments[i];return t.prototype[n].apply(e,o)}}function x(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function T(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(l(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let o=0;o<r;o++)e[n+o]=t[o]}else e.push(t)}}class A{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function F(e){return/^[\s\xa0]*$/.test(e)}function R(){var e=s.navigator;return e&&(e=e.userAgent)?e:""}function V(e){return V[" "](e),e}V[" "]=function(){};var D=-1!=R().indexOf("Gecko")&&!(-1!=R().toLowerCase().indexOf("webkit")&&-1==R().indexOf("Edge"))&&!(-1!=R().indexOf("Trident")||-1!=R().indexOf("MSIE"))&&-1==R().indexOf("Edge");function P(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function O(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function L(e){const t={};for(const n in e)t[n]=e[n];return t}const N="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(e,t){let n,r;for(let o=1;o<arguments.length;o++){for(n in r=arguments[o],r)e[n]=r[n];for(let t=0;t<N.length;t++)n=N[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function W(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function B(e){s.setTimeout((()=>{throw e}),0)}function j(){var e=q;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class ${constructor(){this.h=this.g=null}add(e,t){const n=U.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var U=new A((()=>new z),(e=>e.reset()));class z{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let K,H=!1,q=new $,G=()=>{const e=s.Promise.resolve(void 0);K=()=>{e.then(Y)}};var Y=()=>{for(var e;e=j();){try{e.h.call(e.g)}catch(n){B(n)}var t=U;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}H=!1};function X(){this.s=this.s,this.C=this.C}function J(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}X.prototype.s=!1,X.prototype.ma=function(){this.s||(this.s=!0,this.N())},X.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},J.prototype.h=function(){this.defaultPrevented=!0};var Q=function(){if(!s.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};s.addEventListener("test",e,t),s.removeEventListener("test",e,t)}catch(n){}return e}();function Z(e,t){if(J.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(D){e:{try{V(t.nodeName);var o=!0;break e}catch(i){}o=!1}o||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:ee[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Z.aa.h.call(this)}}I(Z,J);var ee={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var te="closure_listenable_"+(1e6*Math.random()|0),ne=0;function re(e,t,n,r,o){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=o,this.key=++ne,this.da=this.fa=!1}function oe(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function ie(e){this.src=e,this.g={},this.h=0}function ae(e,t){var n=t.type;if(n in e.g){var r,o=e.g[n],i=Array.prototype.indexOf.call(o,t,void 0);(r=0<=i)&&Array.prototype.splice.call(o,i,1),r&&(oe(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function se(e,t,n,r){for(var o=0;o<e.length;++o){var i=e[o];if(!i.da&&i.listener==t&&i.capture==!!n&&i.ha==r)return o}return-1}ie.prototype.add=function(e,t,n,r,o){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var a=se(e,t,r,o);return-1<a?(t=e[a],n||(t.fa=!1)):(t=new re(t,this.src,i,!!r,o),t.fa=n,e.push(t)),t};var le="closure_lm_"+(1e6*Math.random()|0),ue={};function ce(e,t,n,r,o){if(r&&r.once)return fe(e,t,n,r,o);if(Array.isArray(t)){for(var i=0;i<t.length;i++)ce(e,t[i],n,r,o);return null}return n=we(n),e&&e[te]?e.K(t,n,u(r)?!!r.capture:!!r,o):de(e,t,n,!1,r,o)}function de(e,t,n,r,o,i){if(!t)throw Error("Invalid event type");var a=u(o)?!!o.capture:!!o,s=ye(e);if(s||(e[le]=s=new ie(e)),n=s.add(t,n,r,a,i),n.proxy)return n;if(r=he(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Q||(o=a),void 0===o&&(o=!1),e.addEventListener(t.toString(),r,o);else if(e.attachEvent)e.attachEvent(me(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function he(){function e(n){return t.call(e.src,e.listener,n)}const t=ge;return e}function fe(e,t,n,r,o){if(Array.isArray(t)){for(var i=0;i<t.length;i++)fe(e,t[i],n,r,o);return null}return n=we(n),e&&e[te]?e.L(t,n,u(r)?!!r.capture:!!r,o):de(e,t,n,!0,r,o)}function pe(e,t,n,r,o){if(Array.isArray(t))for(var i=0;i<t.length;i++)pe(e,t[i],n,r,o);else r=u(r)?!!r.capture:!!r,n=we(n),e&&e[te]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=se(i,n,r,o),-1<n&&(oe(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete e.g[t],e.h--)))):e&&(e=ye(e))&&(t=e.g[t.toString()],e=-1,t&&(e=se(t,n,r,o)),(n=-1<e?t[e]:null)&&ve(n))}function ve(e){if("number"!==typeof e&&e&&!e.da){var t=e.src;if(t&&t[te])ae(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(me(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ye(t))?(ae(n,e),0==n.h&&(n.src=null,t[le]=null)):oe(e)}}}function me(e){return e in ue?ue[e]:ue[e]="on"+e}function ge(e,t){if(e.da)e=!0;else{t=new Z(t,this);var n=e.listener,r=e.ha||e.src;e.fa&&ve(e),e=n.call(r,t)}return e}function ye(e){return e=e[le],e instanceof ie?e:null}var be="__closure_events_fn_"+(1e9*Math.random()>>>0);function we(e){return"function"===typeof e?e:(e[be]||(e[be]=function(t){return e.handleEvent(t)}),e[be])}function Se(){X.call(this),this.i=new ie(this),this.M=this,this.F=null}function Ee(e,t){var n,r=e.F;if(r)for(n=[];r;r=r.F)n.push(r);if(e=e.M,r=t.type||t,"string"===typeof t)t=new J(t,e);else if(t instanceof J)t.target=t.target||e;else{var o=t;t=new J(r,e),M(t,o)}if(o=!0,n)for(var i=n.length-1;0<=i;i--){var a=t.g=n[i];o=_e(a,r,!0,t)&&o}if(a=t.g=e,o=_e(a,r,!0,t)&&o,o=_e(a,r,!1,t)&&o,n)for(i=0;i<n.length;i++)a=t.g=n[i],o=_e(a,r,!1,t)&&o}function _e(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var o=!0,i=0;i<t.length;++i){var a=t[i];if(a&&!a.da&&a.capture==n){var s=a.listener,l=a.ha||a.src;a.fa&&ae(e.i,a),o=!1!==s.call(l,r)&&o}}return o&&!r.defaultPrevented}function Ce(e,t,n){if("function"===typeof e)n&&(e=_(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=_(e.handleEvent,e)}return 2147483647<Number(t)?-1:s.setTimeout(e,t||0)}function ke(e){e.g=Ce((()=>{e.g=null,e.i&&(e.i=!1,ke(e))}),e.l);const t=e.h;e.h=null,e.m.apply(null,t)}I(Se,X),Se.prototype[te]=!0,Se.prototype.removeEventListener=function(e,t,n,r){pe(this,e,t,n,r)},Se.prototype.N=function(){if(Se.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)oe(n[r]);delete t.g[e],t.h--}}this.F=null},Se.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Se.prototype.L=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class Ie extends X{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:ke(this)}N(){super.N(),this.g&&(s.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xe(e){X.call(this),this.h=e,this.g={}}I(xe,X);var Te=[];function Ae(e){P(e.g,(function(e,t){this.g.hasOwnProperty(t)&&ve(e)}),e),e.g={}}xe.prototype.N=function(){xe.aa.N.call(this),Ae(this)},xe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fe=s.JSON.stringify,Re=s.JSON.parse,Ve=class{stringify(e){return s.JSON.stringify(e,void 0)}parse(e){return s.JSON.parse(e,void 0)}};function De(){}function Pe(e){return e.h||(e.h=e.i())}function Oe(){}De.prototype.h=null;var Le={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ne(){J.call(this,"d")}function Me(){J.call(this,"c")}I(Ne,J),I(Me,J);var We={},Be=null;function je(){return Be=Be||new Se}function $e(e){J.call(this,We.La,e)}function Ue(e){const t=je();Ee(t,new $e(t))}function ze(e,t){J.call(this,We.STAT_EVENT,e),this.stat=t}function Ke(e){const t=je();Ee(t,new ze(t,e))}function He(e,t){J.call(this,We.Ma,e),this.size=t}function qe(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return s.setTimeout((function(){e()}),t)}function Ge(){this.g=!0}function Ye(e,t,n,r,o,i){e.info((function(){if(e.g)if(i)for(var a="",s=i.split("&"),l=0;l<s.length;l++){var u=s[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");a=2<=d.length&&"type"==d[1]?a+(c+"=")+u+"&":a+(c+"=redacted&")}}else a=null;else a=i;return"XMLHTTP REQ ("+r+") [attempt "+o+"]: "+t+"\n"+n+"\n"+a}))}function Xe(e,t,n,r,o,i,a){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+o+"]: "+t+"\n"+n+"\n"+i+" "+a}))}function Je(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+Ze(e,n)+(r?" "+r:"")}))}function Qe(e,t){e.info((function(){return"TIMEOUT: "+t}))}function Ze(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var o=r[1];if(Array.isArray(o)&&!(1>o.length)){var i=o[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var a=1;a<o.length;a++)o[a]=""}}}return Fe(n)}catch(s){return t}}We.La="serverreachability",I($e,J),We.STAT_EVENT="statevent",I(ze,J),We.Ma="timingevent",I(He,J),Ge.prototype.xa=function(){this.g=!1},Ge.prototype.info=function(){};var et,tt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},nt={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function rt(){}function ot(e,t,n,r){this.j=e,this.i=t,this.l=n,this.R=r||1,this.U=new xe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new it}function it(){this.i=null,this.g="",this.h=!1}I(rt,De),rt.prototype.g=function(){return new XMLHttpRequest},rt.prototype.i=function(){return{}},et=new rt;var at={},st={};function lt(e,t,n){e.L=1,e.v=Nt(Vt(t)),e.m=n,e.P=!0,ut(e,null)}function ut(e,t){e.F=Date.now(),ht(e),e.A=Vt(e.v);var n=e.A,r=e.R;Array.isArray(r)||(r=[String(r)]),Xt(n.i,"t",r),e.C=0,n=e.j.J,e.h=new it,e.g=Un(e.j,n?t:null,!e.m),0<e.O&&(e.M=new Ie(_(e.Y,e,e.g),e.O)),t=e.U,n=e.g,r=e.ca;var o="readystatechange";Array.isArray(o)||(o&&(Te[0]=o.toString()),o=Te);for(var i=0;i<o.length;i++){var a=ce(n,o[i],r||t.handleEvent,!1,t.h||t);if(!a)break;t.g[a.key]=a}t=e.H?L(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Ue(),Ye(e.i,e.u,e.A,e.l,e.R,e.m)}function ct(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.j.Ca)}function dt(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?st:(n=Number(t.substring(n,r)),isNaN(n)?at:(r+=1,r+n>t.length?st:(t=t.slice(r,r+n),e.C=r+n,t)))}function ht(e){e.S=Date.now()+e.I,ft(e,e.I)}function ft(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=qe(_(e.ba,e),t)}function pt(e){e.B&&(s.clearTimeout(e.B),e.B=null)}function vt(e){0==e.j.G||e.J||Mn(e.j,e)}function mt(e){pt(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,Ae(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function gt(e,t){try{var n=e.j;if(0!=n.G&&(n.g==e||Et(n.h,e)))if(!e.K&&Et(n.h,e)&&3==n.G){try{var r=n.Da.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var o=r;if(0==o[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Nn(n),In(n)}Pn(n),Ke(18)}}else n.za=o[1],0<n.za-n.T&&37500>o[2]&&n.F&&0==n.v&&!n.C&&(n.C=qe(_(n.Za,n),6e3));if(1>=St(n.h)&&n.ca){try{n.ca()}catch(u){}n.ca=void 0}}else Bn(n,11)}else if((e.K||n.g==e)&&Nn(n),!F(t))for(o=n.Da.g.parse(t),t=0;t<o.length;t++){let u=o[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.K=u[1],n.ia=u[2];const t=u[3];null!=t&&(n.la=t,n.j.info("VER="+n.la));const o=u[4];null!=o&&(n.Aa=o,n.j.info("SVER="+n.Aa));const c=u[5];null!=c&&"number"===typeof c&&0<c&&(r=1.5*c,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=e.g;if(d){const e=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var i=r.h;i.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(_t(i,i.h),i.h=null))}if(r.D){const e=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.ya=e,Lt(r.I,r.D,e))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-e.F,n.j.info("Handshake RTT: "+n.R+"ms")),r=n;var a=e;if(r.qa=$n(r,r.J?r.ia:null,r.W),a.K){Ct(r.h,a);var s=a,l=r.L;l&&(s.I=l),s.B&&(pt(s),ht(s)),r.g=a}else Dn(r);0<n.i.length&&Tn(n)}else"stop"!=u[0]&&"close"!=u[0]||Bn(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Bn(n,7):kn(n):"noop"!=u[0]&&n.l&&n.l.ta(u),n.v=0)}Ue(4)}catch(u){}}ot.prototype.ca=function(e){e=e.target;const t=this.M;t&&3==wn(e)?t.j():this.Y(e)},ot.prototype.Y=function(e){try{if(e==this.g)e:{const h=wn(this.g);var t=this.g.Ba();const f=this.g.Z();if(!(3>h)&&(3!=h||this.g&&(this.h.h||this.g.oa()||Sn(this.g)))){this.J||4!=h||7==t||Ue(8==t||0>=f?3:2),pt(this);var n=this.g.Z();this.X=n;t:if(ct(this)){var r=Sn(this.g);e="";var o=r.length,i=4==wn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){mt(this),vt(this);var a="";break t}this.h.i=new s.TextDecoder}for(t=0;t<o;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:!(i&&t==o-1)});r.length=0,this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.oa();if(this.o=200==n,Xe(this.i,this.u,this.A,this.l,this.R,h,n),this.o){if(this.T&&!this.K){t:{if(this.g){var l,u=this.g;if((l=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(l)){var c=l;break t}}c=null}if(!(n=c)){this.o=!1,this.s=3,Ke(12),mt(this),vt(this);break e}Je(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gt(this,n)}if(this.P){let e;for(n=!0;!this.J&&this.C<a.length;){if(e=dt(this,a),e==st){4==h&&(this.s=4,Ke(14),n=!1),Je(this.i,this.l,null,"[Incomplete Response]");break}if(e==at){this.s=4,Ke(15),Je(this.i,this.l,a,"[Invalid Chunk]"),n=!1;break}Je(this.i,this.l,e,null),gt(this,e)}if(ct(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=h||0!=a.length||this.h.h||(this.s=1,Ke(16),n=!1),this.o=this.o&&n,n){if(0<a.length&&!this.W){this.W=!0;var d=this.j;d.g==this&&d.ba&&!d.M&&(d.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),On(d),d.M=!0,Ke(11))}}else Je(this.i,this.l,a,"[Invalid Chunked Response]"),mt(this),vt(this)}else Je(this.i,this.l,a,null),gt(this,a);4==h&&mt(this),this.o&&!this.J&&(4==h?Mn(this.j,this):(this.o=!1,ht(this)))}else En(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.s=3,Ke(12)):(this.s=0,Ke(13)),mt(this),vt(this)}}}catch(S){}},ot.prototype.cancel=function(){this.J=!0,mt(this)},ot.prototype.ba=function(){this.B=null;const e=Date.now();0<=e-this.S?(Qe(this.i,this.A),2!=this.L&&(Ue(),Ke(17)),mt(this),this.s=2,vt(this)):ft(this,this.S-e)};var yt=class{constructor(e,t){this.g=e,this.map=t}};function bt(e){this.l=e||10,s.PerformanceNavigationTiming?(e=s.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(s.chrome&&s.chrome.loadTimes&&s.chrome.loadTimes()&&s.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function wt(e){return!!e.h||!!e.g&&e.g.size>=e.j}function St(e){return e.h?1:e.g?e.g.size:0}function Et(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function _t(e,t){e.g?e.g.add(t):e.h=t}function Ct(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function kt(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return x(e.i)}function It(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(l(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function xt(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(l(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Tt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(l(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=xt(e),r=It(e),o=r.length,i=0;i<o;i++)t.call(void 0,r[i],n&&n[i],e)}bt.prototype.cancel=function(){if(this.i=kt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var At=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ft(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),o=null;if(0<=r){var i=e[n].substring(0,r);o=e[n].substring(r+1)}else i=e[n];t(i,o?decodeURIComponent(o.replace(/\+/g," ")):"")}}}function Rt(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof Rt){this.h=e.h,Dt(this,e.j),this.o=e.o,this.g=e.g,Pt(this,e.s),this.l=e.l;var t=e.i,n=new Ht;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Ot(this,n),this.m=e.m}else e&&(t=String(e).match(At))?(this.h=!1,Dt(this,t[1]||"",!0),this.o=Mt(t[2]||""),this.g=Mt(t[3]||"",!0),Pt(this,t[4]),this.l=Mt(t[5]||"",!0),Ot(this,t[6]||"",!0),this.m=Mt(t[7]||"")):(this.h=!1,this.i=new Ht(null,this.h))}function Vt(e){return new Rt(e)}function Dt(e,t,n){e.j=n?Mt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Pt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function Ot(e,t,n){t instanceof Ht?(e.i=t,Qt(e.i,e.h)):(n||(t=Wt(t,zt)),e.i=new Ht(t,e.h))}function Lt(e,t,n){e.i.set(t,n)}function Nt(e){return Lt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Mt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Wt(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Bt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Bt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Rt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Wt(t,jt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(Wt(t,jt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.s,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Wt(n,"/"==n.charAt(0)?Ut:$t,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",Wt(n,Kt)),e.join("")};var jt=/[#\/\?@]/g,$t=/[#\?:]/g,Ut=/[#\?]/g,zt=/[#\?@]/g,Kt=/#/g;function Ht(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function qt(e){e.g||(e.g=new Map,e.h=0,e.i&&Ft(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Gt(e,t){qt(e),t=Jt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Yt(e,t){return qt(e),t=Jt(e,t),e.g.has(t)}function Xt(e,t,n){Gt(e,t),0<n.length&&(e.i=null,e.g.set(Jt(e,t),x(n)),e.h+=n.length)}function Jt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Qt(e,t){t&&!e.j&&(qt(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Gt(this,t),Xt(this,n,e))}),e)),e.j=t}function Zt(e,t){const n=new Ge;if(s.Image){const r=new Image;r.onload=k(tn,n,"TestLoadImage: loaded",!0,t,r),r.onerror=k(tn,n,"TestLoadImage: error",!1,t,r),r.onabort=k(tn,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=k(tn,n,"TestLoadImage: timeout",!1,t,r),s.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function en(e,t){const n=new Ge,r=new AbortController,o=setTimeout((()=>{r.abort(),tn(n,"TestPingServer: timeout",!1,t)}),1e4);fetch(e,{signal:r.signal}).then((e=>{clearTimeout(o),e.ok?tn(n,"TestPingServer: ok",!0,t):tn(n,"TestPingServer: server error",!1,t)})).catch((()=>{clearTimeout(o),tn(n,"TestPingServer: error",!1,t)}))}function tn(e,t,n,r,o){try{o&&(o.onload=null,o.onerror=null,o.onabort=null,o.ontimeout=null),r(n)}catch(i){}}function nn(){this.g=new Ve}function rn(e,t,n){const r=n||"";try{Tt(e,(function(e,n){let o=e;u(e)&&(o=Fe(e)),t.push(r+n+"="+encodeURIComponent(o))}))}catch(o){throw t.push(r+"type="+encodeURIComponent("_badmap")),o}}function on(e){this.l=e.Ub||null,this.j=e.eb||!1}function an(e,t){Se.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function sn(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function ln(e){e.readyState=4,e.l=null,e.j=null,e.v=null,un(e)}function un(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function cn(e){let t="";return P(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function dn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=cn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Lt(e,t,n))}function hn(e){Se.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}e=Ht.prototype,e.add=function(e,t){qt(this),this.i=null,e=Jt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){qt(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},e.na=function(){qt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const o=e[r];for(let e=0;e<o.length;e++)n.push(t[r])}return n},e.V=function(e){qt(this);let t=[];if("string"===typeof e)Yt(this,e)&&(t=t.concat(this.g.get(Jt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},e.set=function(e,t){return qt(this),this.i=null,e=Jt(this,e),Yt(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e?(e=this.V(e),0<e.length?String(e[0]):t):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),a=this.V(r);for(r=0;r<a.length;r++){var o=i;""!==a[r]&&(o+="="+encodeURIComponent(String(a[r]))),e.push(o)}}return this.i=e.join("&")},I(on,De),on.prototype.g=function(){return new an(this.l,this.j)},on.prototype.i=function(e){return function(){return e}}({}),I(an,Se),e=an.prototype,e.open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,un(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||s).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ln(this)),this.readyState=0},e.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,un(this)),this.g&&(this.readyState=3,un(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if("undefined"!==typeof s.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;sn(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))},e.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ln(this):un(this),3==this.readyState&&sn(this)}},e.Ra=function(e){this.g&&(this.response=this.responseText=e,ln(this))},e.Qa=function(e){this.g&&(this.response=e,ln(this))},e.ga=function(){this.g&&ln(this)},e.setRequestHeader=function(e,t){this.u.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(an.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),I(hn,Se);var fn=/^https?$/i,pn=["POST","PUT"];function vn(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,mn(e),yn(e)}function mn(e){e.A||(e.A=!0,Ee(e,"complete"),Ee(e,"error"))}function gn(e){if(e.h&&"undefined"!=typeof a&&(!e.v[1]||4!=wn(e)||2!=e.Z()))if(e.u&&4==wn(e))Ce(e.Ea,0,e);else if(Ee(e,"readystatechange"),4==wn(e)){e.h=!1;try{const a=e.Z();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var o=String(e.D).match(At)[1]||null;!o&&s.self&&s.self.location&&(o=s.self.location.protocol.slice(0,-1)),r=!fn.test(o?o.toLowerCase():"")}n=r}if(n)Ee(e,"complete"),Ee(e,"success");else{e.m=6;try{var i=2<wn(e)?e.g.statusText:""}catch(l){i=""}e.l=i+" ["+e.Z()+"]",mn(e)}}finally{yn(e)}}}function yn(e,t){if(e.g){bn(e);const r=e.g,o=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||Ee(e,"ready");try{r.onreadystatechange=o}catch(n){}}}function bn(e){e.I&&(s.clearTimeout(e.I),e.I=null)}function wn(e){return e.g?e.g.readyState:0}function Sn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(C){return null}}function En(e){const t={};e=(e.g&&2<=wn(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(F(e[r]))continue;var n=W(e[r]);const o=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const i=t[o]||[];t[o]=i,i.push(n)}O(t,(function(e){return e.join(", ")}))}function _n(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Cn(e){this.Aa=0,this.i=[],this.j=new Ge,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=_n("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=_n("baseRetryDelayMs",5e3,e),this.cb=_n("retryDelaySeedMs",1e4,e),this.Wa=_n("forwardChannelMaxRetries",2,e),this.wa=_n("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new bt(e&&e.concurrentRequestLimit),this.Da=new nn,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function kn(e){if(xn(e),3==e.G){var t=e.U++,n=Vt(e.I);if(Lt(n,"SID",e.K),Lt(n,"RID",t),Lt(n,"TYPE","terminate"),Rn(e,n),t=new ot(e,e.j,t),t.L=2,t.v=Nt(Vt(n)),n=!1,s.navigator&&s.navigator.sendBeacon)try{n=s.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&s.Image&&((new Image).src=t.v,n=!0),n||(t.g=Un(t.j,null),t.g.ea(t.v)),t.F=Date.now(),ht(t)}jn(e)}function In(e){e.g&&(On(e),e.g.cancel(),e.g=null)}function xn(e){In(e),e.u&&(s.clearTimeout(e.u),e.u=null),Nn(e),e.h.cancel(),e.s&&("number"===typeof e.s&&s.clearTimeout(e.s),e.s=null)}function Tn(e){if(!wt(e.h)&&!e.s){e.s=!0;var t=e.Ga;K||G(),H||(K(),H=!0),q.add(t,e),e.B=0}}function An(e,t){return!(St(e.h)>=e.h.j-(e.s?1:0))&&(e.s?(e.i=t.D.concat(e.i),!0):!(1==e.G||2==e.G||e.B>=(e.Va?0:e.Wa))&&(e.s=qe(_(e.Ga,e,t),Wn(e,e.B)),e.B++,!0))}function Fn(e,t){var n;n=t?t.l:e.U++;const r=Vt(e.I);Lt(r,"SID",e.K),Lt(r,"RID",n),Lt(r,"AID",e.T),Rn(e,r),e.m&&e.o&&dn(r,e.m,e.o),n=new ot(e,e.j,n,e.B+1),null===e.m&&(n.H=e.o),t&&(e.i=t.D.concat(e.i)),t=Vn(e,n,1e3),n.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),_t(e.h,n),lt(n,r,t)}function Rn(e,t){e.H&&P(e.H,(function(e,n){Lt(t,n,e)})),e.l&&Tt({},(function(e,n){Lt(t,n,e)}))}function Vn(e,t,n){n=Math.min(e.i.length,n);var r=e.l?_(e.l.Na,e.l,e):null;e:{var o=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=o[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let i=!0;for(let a=0;a<n;a++){let n=o[a].g;const s=o[a].map;if(n-=t,0>n)t=Math.max(0,o[a].g-100),i=!1;else try{rn(s,e,"req"+n+"_")}catch(S){r&&r(s)}}if(i){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function Dn(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;K||G(),H||(K(),H=!0),q.add(t,e),e.v=0}}function Pn(e){return!(e.g||e.u||3<=e.v)&&(e.Y++,e.u=qe(_(e.Fa,e),Wn(e,e.v)),e.v++,!0)}function On(e){null!=e.A&&(s.clearTimeout(e.A),e.A=null)}function Ln(e){e.g=new ot(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=Vt(e.qa);Lt(t,"RID","rpc"),Lt(t,"SID",e.K),Lt(t,"AID",e.T),Lt(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&Lt(t,"TO",e.ja),Lt(t,"TYPE","xmlhttp"),Rn(e,t),e.m&&e.o&&dn(t,e.m,e.o),e.L&&(e.g.I=e.L);var n=e.g;e=e.ia,n.L=1,n.v=Nt(Vt(t)),n.m=null,n.P=!0,ut(n,e)}function Nn(e){null!=e.C&&(s.clearTimeout(e.C),e.C=null)}function Mn(e,t){var n=null;if(e.g==t){Nn(e),On(e),e.g=null;var r=2}else{if(!Et(e.h,t))return;n=t.D,Ct(e.h,t),r=1}if(0!=e.G)if(t.o)if(1==r){n=t.m?t.m.length:0,t=Date.now()-t.F;var o=e.B;r=je(),Ee(r,new He(r,n)),Tn(e)}else Dn(e);else if(o=t.s,3==o||0==o&&0<t.X||!(1==r&&An(e,t)||2==r&&Pn(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),o){case 1:Bn(e,5);break;case 4:Bn(e,10);break;case 3:Bn(e,6);break;default:Bn(e,2)}}function Wn(e,t){let n=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(n*=2),n*t}function Bn(e,t){if(e.j.info("Error code "+t),2==t){var n=_(e.fb,e),r=e.Xa;const t=!r;r=new Rt(r||"//www.google.com/images/cleardot.gif"),s.location&&"http"==s.location.protocol||Dt(r,"https"),Nt(r),t?Zt(r.toString(),n):en(r.toString(),n)}else Ke(2);e.G=0,e.l&&e.l.sa(t),jn(e),xn(e)}function jn(e){if(e.G=0,e.ka=[],e.l){const t=kt(e.h);0==t.length&&0==e.i.length||(T(e.ka,t),T(e.ka,e.i),e.h.i.length=0,x(e.i),e.i.length=0),e.l.ra()}}function $n(e,t,n){var r=n instanceof Rt?Vt(n):new Rt(n);if(""!=r.g)t&&(r.g=t+"."+r.g),Pt(r,r.s);else{var o=s.location;r=o.protocol,t=t?t+"."+o.hostname:o.hostname,o=+o.port;var i=new Rt(null);r&&Dt(i,r),t&&(i.g=t),o&&Pt(i,o),n&&(i.l=n),r=i}return n=e.D,t=e.ya,n&&t&&Lt(r,n,t),Lt(r,"VER",e.la),Rn(e,r),r}function Un(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ca&&!e.pa?new hn(new on({eb:n})):new hn(e.pa),t.Ha(e.J),t}function zn(){}function Kn(){}function Hn(e,t){Se.call(this),this.g=new Cn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!F(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!F(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Yn(this)}function qn(e){Ne.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Gn(){Me.call(this),this.status=1}function Yn(e){this.g=e}e=hn.prototype,e.Ha=function(e){this.J=e},e.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():et.g(),this.v=this.o?Pe(this.o):Pe(et),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(i){return void vn(this,i)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var o in r)n.set(o,r[o]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),o=s.FormData&&e instanceof s.FormData,!(0<=Array.prototype.indexOf.call(pn,t,void 0))||r||o||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[a,s]of n)this.g.setRequestHeader(a,s);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{bn(this),this.u=!0,this.g.send(e),this.u=!1}catch(i){vn(this,i)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,Ee(this,"complete"),Ee(this,"abort"),yn(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yn(this,!0)),hn.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?gn(this):this.bb())},e.bb=function(){gn(this)},e.isActive=function(){return!!this.g},e.Z=function(){try{return 2<wn(this)?this.g.status:-1}catch(e){return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},e.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Re(t)}},e.Ba=function(){return this.m},e.Ka=function(){return"string"===typeof this.l?this.l:String(this.l)},e=Cn.prototype,e.la=8,e.G=1,e.connect=function(e,t,n,r){Ke(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=$n(this,null,this.W),Tn(this)},e.Ga=function(e){if(this.s)if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const o=new ot(this,this.j,e);let i=this.o;if(this.S&&(i?(i=L(i),M(i,this.S)):i=this.S),null!==this.m||this.O||(o.H=i,i=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Vn(this,o,t),n=Vt(this.I),Lt(n,"RID",e),Lt(n,"CVER",22),this.D&&Lt(n,"X-HTTP-Session-Id",this.D),Rn(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(cn(i)))+"&"+t:this.m&&dn(n,this.m,i)),_t(this.h,o),this.Ua&&Lt(n,"TYPE","init"),this.P?(Lt(n,"$req",t),Lt(n,"SID","null"),o.T=!0,lt(o,n,null)):lt(o,n,t),this.G=2}}else 3==this.G&&(e?Fn(this,e):0==this.i.length||wt(this.h)||Fn(this))},e.Fa=function(){if(this.u=null,Ln(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=qe(_(this.ab,this),e)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ke(10),In(this),Ln(this))},e.Za=function(){null!=this.C&&(this.C=null,In(this),Pn(this),Ke(19))},e.fb=function(e){e?(this.j.info("Successfully pinged google.com"),Ke(2)):(this.j.info("Failed to ping google.com"),Ke(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},e=zn.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){},Kn.prototype.g=function(e,t){return new Hn(e,t)},I(Hn,Se),Hn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Hn.prototype.close=function(){kn(this.g)},Hn.prototype.o=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.u&&(n={},n.__data__=Fe(e),e=n);t.i.push(new yt(t.Ya++,e)),3==t.G&&Tn(t)},Hn.prototype.N=function(){this.g.l=null,delete this.j,kn(this.g),delete this.g,Hn.aa.N.call(this)},I(qn,Ne),I(Gn,Me),I(Yn,zn),Yn.prototype.ua=function(){Ee(this.g,"a")},Yn.prototype.ta=function(e){Ee(this.g,new qn(e))},Yn.prototype.sa=function(e){Ee(this.g,new Gn)},Yn.prototype.ra=function(){Ee(this.g,"b")},Kn.prototype.createWebChannel=Kn.prototype.g,Hn.prototype.send=Hn.prototype.o,Hn.prototype.open=Hn.prototype.m,Hn.prototype.close=Hn.prototype.close,y=w.createWebChannelTransport=function(){return new Kn},g=w.getStatEventTarget=function(){return je()},m=w.Event=We,v=w.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},tt.NO_ERROR=0,tt.TIMEOUT=8,tt.HTTP_ERROR=6,p=w.ErrorCode=tt,nt.COMPLETE="complete",f=w.EventType=nt,Oe.EventType=Le,Le.OPEN="a",Le.CLOSE="b",Le.ERROR="c",Le.MESSAGE="d",Se.prototype.listen=Se.prototype.K,h=w.WebChannel=Oe,w.FetchXmlHttpFactory=on,hn.prototype.listenOnce=hn.prototype.L,hn.prototype.getLastError=hn.prototype.Ka,hn.prototype.getLastErrorCode=hn.prototype.Ba,hn.prototype.getStatus=hn.prototype.Z,hn.prototype.getResponseJson=hn.prototype.Oa,hn.prototype.getResponseText=hn.prototype.oa,hn.prototype.send=hn.prototype.ea,hn.prototype.setWithCredentials=hn.prototype.Ha,d=w.XhrIo=hn}).apply("undefined"!==typeof b?b:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});const S="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}E.UNAUTHENTICATED=new E(null),E.GOOGLE_CREDENTIALS=new E("google-credentials-uid"),E.FIRST_PARTY=new E("first-party-uid"),E.MOCK_USER=new E("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let _="11.0.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=new s.Vy("@firebase/firestore");function k(){return C.logLevel}function I(e,...t){if(C.logLevel<=s.$b.DEBUG){const n=t.map(A);C.debug(`Firestore (${_}): ${e}`,...n)}}function x(e,...t){if(C.logLevel<=s.$b.ERROR){const n=t.map(A);C.error(`Firestore (${_}): ${e}`,...n)}}function T(e,...t){if(C.logLevel<=s.$b.WARN){const n=t.map(A);C.warn(`Firestore (${_}): ${e}`,...n)}}function A(e){if("string"==typeof e)return e;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return function(e){return JSON.stringify(e)}(e)}catch(t){return e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e="Unexpected state"){const t=`FIRESTORE (${_}) INTERNAL ASSERTION FAILED: `+e;throw x(t),new Error(t)}function R(e,t){e||F()}function V(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class P extends l.g{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class N{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(E.UNAUTHENTICATED)))}shutdown(){}}class M{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class W{constructor(e){this.t=e,this.currentUser=E.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){R(void 0===this.o);let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let o=new O;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new O,e.enqueueRetryable((()=>r(this.currentUser)))};const i=()=>{const t=o;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},a=e=>{I("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),i())};this.t.onInit((e=>a(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?a(e):(I("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new O)}}),0),i()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(I("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(R("string"==typeof t.accessToken),new L(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return R(null===e||"string"==typeof e),new E(e)}}class B{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=E.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class j{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new B(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(E.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ${constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class U{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){R(void 0===this.o);const n=e=>{null!=e.error&&I("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.R;return this.R=e.token,I("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{I("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?r(e):I("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(R("string"==typeof e.token),this.R=e.token,new $(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function z(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=z(40);for(let o=0;o<r.length;++o)n.length<20&&r[o]<t&&(n+=e.charAt(r[o]%e.length))}return n}}function H(e,t){return e<t?-1:e>t?1:0}function q(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class G{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new P(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new P(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new P(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new P(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return G.fromMillis(Date.now())}static fromDate(e){return G.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new G(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new G(0,0))}static max(){return new Y(new G(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t,n){void 0===t?t=0:t>e.length&&F(),void 0===n?n=e.length-t:n>e.length-t&&F(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===X.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof X?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),o=t.get(r);if(n<o)return-1;if(n>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class J extends X{construct(e,t,n){return new J(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new P(D.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new J(t)}static emptyPath(){return new J([])}}const Q=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Z extends X{construct(e,t,n){return new Z(e,t,n)}static isValidIdentifier(e){return Q.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Z.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Z(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const o=()=>{if(0===n.length)throw new P(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let i=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new P(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new P(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(i=!i,r++):"."!==t||i?(n+=t,r++):(o(),r++)}if(o(),i)throw new P(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Z(t)}static emptyPath(){return new Z([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(J.fromString(e))}static fromName(e){return new ee(J.fromString(e).popFirst(5))}static empty(){return new ee(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===J.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return J.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new J(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}te.UNKNOWN_ID=-1;function ne(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,o=Y.fromTimestamp(1e9===r?new G(n+1,0):new G(n,r));return new oe(o,ee.empty(),t)}function re(e){return new oe(e.readTime,e.key,-1)}class oe{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new oe(Y.min(),ee.empty(),-1)}static max(){return new oe(Y.max(),ee.empty(),-1)}}function ie(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=ee.comparator(e.documentKey,t.documentKey),0!==n?n:H(e.largestBatchId,t.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}const ae="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class se{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function le(e){if(e.code!==D.FAILED_PRECONDITION||e.message!==ae)throw e;I("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ue(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof ue?t:ue.resolve(t)}catch(e){return ue.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):ue.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):ue.reject(t)}static resolve(e){return new ue(((t,n)=>{t(e)}))}static reject(e){return new ue(((t,n)=>{n(e)}))}static waitFor(e){return new ue(((t,n)=>{let r=0,o=0,i=!1;e.forEach((e=>{++r,e.next((()=>{++o,i&&o===r&&t()}),(e=>n(e)))})),i=!0,o===r&&t()}))}static or(e){let t=ue.resolve(!1);for(const n of e)t=t.next((e=>e?ue.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new ue(((n,r)=>{const o=e.length,i=new Array(o);let a=0;for(let s=0;s<o;s++){const l=s;t(e[l]).next((e=>{i[l]=e,++a,a===o&&n(i)}),(e=>r(e)))}}))}static doWhile(e,t){return new ue(((n,r)=>{const o=()=>{!0===e()?t().next((()=>{o()}),r):n()};o()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function de(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class he{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ie(e),this.se=e=>t.writeSequenceNumber(e))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}function fe(e){return null==e}function pe(e){return 0===e&&1/e==-1/0}function ve(e){return"number"==typeof e&&Number.isInteger(e)&&!pe(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=ye(t)),t=ge(e.get(n),t);return ye(t)}function ge(e,t){let n=t;const r=e.length;for(let o=0;o<r;o++){const t=e.charAt(o);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function ye(e){return e+""}he.oe=-1;const be=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],we=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Se=we,Ee=[...Se,"indexConfiguration","indexState","indexEntries"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _e(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Ce(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ke(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,t){this.comparator=e,this.root=t||Te.EMPTY}insert(e,t){return new Ie(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Te.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Te.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xe(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xe(this.root,e,this.comparator,!1)}getReverseIterator(){return new xe(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xe(this.root,e,this.comparator,!0)}}class xe{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?n(e.key,t):1,t&&r&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(0===o){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Te{constructor(e,t,n,r,o){this.key=e,this.value=t,this.color=null!=n?n:Te.RED,this.left=null!=r?r:Te.EMPTY,this.right=null!=o?o:Te.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,o){return new Te(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=o?o:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const o=n(e,r.key);return r=o<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===o?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Te.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Te.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw F();if(this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}}Te.EMPTY=null,Te.RED=!0,Te.BLACK=!1,Te.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(e,t,n,r,o){return this}insert(e,t,n){return new Te(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ae{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Fe(this.data.getIterator())}getIteratorFrom(e){return new Fe(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Ae))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ae(this.comparator);return t.data=e,t}}class Fe{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Re{constructor(e){this.fields=e,e.sort(Z.comparator)}static empty(){return new Re([])}unionWith(e){let t=new Ae(Z.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Re(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return q(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class De{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Ve("Invalid base64 string: "+e):e}}(e);return new De(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new De(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}De.EMPTY_BYTE_STRING=new De("");const Pe=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Oe(e){if(R(!!e),"string"==typeof e){let t=0;const n=Pe.exec(e);if(R(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Le(e.seconds),nanos:Le(e.nanos)}}function Le(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Ne(e){return"string"==typeof e?De.fromBase64String(e):De.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function We(e){const t=e.mapValue.fields.__previous_value__;return Me(t)?We(t):t}function Be(e){const t=Oe(e.mapValue.fields.__local_write_time__.timestampValue);return new G(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,t,n,r,o,i,a,s,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=o,this.forceLongPolling=i,this.autoDetectLongPolling=a,this.longPollingOptions=s,this.useFetchStreams=l}}class $e{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new $e("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof $e&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ze(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Me(e)?4:at(e)?9007199254740991:ot(e)?10:11:F()}function Ke(e,t){if(e===t)return!0;const n=ze(e);if(n!==ze(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Be(e).isEqual(Be(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Oe(e.timestampValue),r=Oe(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Ne(e.bytesValue).isEqual(Ne(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Le(e.geoPointValue.latitude)===Le(t.geoPointValue.latitude)&&Le(e.geoPointValue.longitude)===Le(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Le(e.integerValue)===Le(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Le(e.doubleValue),r=Le(t.doubleValue);return n===r?pe(n)===pe(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return q(e.arrayValue.values||[],t.arrayValue.values||[],Ke);case 10:case 11:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(_e(n)!==_e(r))return!1;for(const o in n)if(n.hasOwnProperty(o)&&(void 0===r[o]||!Ke(n[o],r[o])))return!1;return!0}(e,t);default:return F()}}function He(e,t){return void 0!==(e.values||[]).find((e=>Ke(e,t)))}function qe(e,t){if(e===t)return 0;const n=ze(e),r=ze(t);if(n!==r)return H(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return H(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Le(e.integerValue||e.doubleValue),r=Le(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Ge(e.timestampValue,t.timestampValue);case 4:return Ge(Be(e),Be(t));case 5:return H(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Ne(e),r=Ne(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let o=0;o<n.length&&o<r.length;o++){const e=H(n[o],r[o]);if(0!==e)return e}return H(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=H(Le(e.latitude),Le(t.latitude));return 0!==n?n:H(Le(e.longitude),Le(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return Ye(e.arrayValue,t.arrayValue);case 10:return function(e,t){var n,r,o,i;const a=e.fields||{},s=t.fields||{},l=null===(n=a.value)||void 0===n?void 0:n.arrayValue,u=null===(r=s.value)||void 0===r?void 0:r.arrayValue,c=H((null===(o=null==l?void 0:l.values)||void 0===o?void 0:o.length)||0,(null===(i=null==u?void 0:u.values)||void 0===i?void 0:i.length)||0);return 0!==c?c:Ye(l,u)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===Ue.mapValue&&t===Ue.mapValue)return 0;if(e===Ue.mapValue)return 1;if(t===Ue.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),o=t.fields||{},i=Object.keys(o);r.sort(),i.sort();for(let a=0;a<r.length&&a<i.length;++a){const e=H(r[a],i[a]);if(0!==e)return e;const t=qe(n[r[a]],o[i[a]]);if(0!==t)return t}return H(r.length,i.length)}(e.mapValue,t.mapValue);default:throw F()}}function Ge(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return H(e,t);const n=Oe(e),r=Oe(t),o=H(n.seconds,r.seconds);return 0!==o?o:H(n.nanos,r.nanos)}function Ye(e,t){const n=e.values||[],r=t.values||[];for(let o=0;o<n.length&&o<r.length;++o){const e=qe(n[o],r[o]);if(e)return e}return H(n.length,r.length)}function Xe(e){return Je(e)}function Je(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Oe(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return Ne(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return ee.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Je(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const o of t)r?r=!1:n+=",",n+=`${o}:${Je(e.fields[o])}`;return n+"}"}(e.mapValue):F()}function Qe(e){switch(ze(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=We(e);return t?16+Qe(t):16;case 5:return 2*e.stringValue.length;case 6:return Ne(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return function(e){return(e.values||[]).reduce(((e,t)=>e+Qe(t)),0)}(e.arrayValue);case 10:case 11:return function(e){let t=0;return Ce(e.fields,((e,n)=>{t+=e.length+Qe(n)})),t}(e.mapValue);default:throw F()}}function Ze(e){return!!e&&"integerValue"in e}function et(e){return!!e&&"arrayValue"in e}function tt(e){return!!e&&"nullValue"in e}function nt(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function rt(e){return!!e&&"mapValue"in e}function ot(e){var t,n;return"__vector__"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function it(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Ce(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=it(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=it(e.arrayValue.values[n]);return t}return Object.assign({},e)}function at(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class st{constructor(e){this.value=e}static empty(){return new st({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!rt(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=it(t)}setAll(e){let t=Z.emptyPath(),n={},r=[];e.forEach(((e,o)=>{if(!t.isImmediateParentOf(o)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=o.popLast()}e?n[o.lastSegment()]=it(e):r.push(o.lastSegment())}));const o=this.getFieldsMap(t);this.applyChanges(o,n,r)}delete(e){const t=this.field(e.popLast());rt(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ke(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];rt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Ce(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new st(it(this.value))}}function lt(e){const t=[];return Ce(e.fields,((e,n)=>{const r=new Z([e]);if(rt(n)){const e=lt(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Re(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ut{constructor(e,t,n,r,o,i,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=o,this.data=i,this.documentState=a}static newInvalidDocument(e){return new ut(e,0,Y.min(),Y.min(),Y.min(),st.empty(),0)}static newFoundDocument(e,t,n,r){return new ut(e,1,t,Y.min(),n,r,0)}static newNoDocument(e,t){return new ut(e,2,t,Y.min(),Y.min(),st.empty(),0)}static newUnknownDocument(e,t){return new ut(e,3,t,Y.min(),Y.min(),st.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Y.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=st.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=st.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,t){this.position=e,this.inclusive=t}}function dt(e,t,n){let r=0;for(let o=0;o<e.position.length;o++){const i=t[o],a=e.position[o];if(r=i.field.isKeyField()?ee.comparator(ee.fromName(a.referenceValue),n.key):qe(a,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function ht(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Ke(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t="asc"){this.field=e,this.dir=t}}function pt(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{}class mt extends vt{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Ct(e,t,n):"array-contains"===t?new Tt(e,n):"in"===t?new At(e,n):"not-in"===t?new Ft(e,n):"array-contains-any"===t?new Rt(e,n):new mt(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new kt(e,n):new It(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(qe(t,this.value)):null!==t&&ze(this.value)===ze(t)&&this.matchesComparison(qe(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class gt extends vt{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new gt(e,t)}matches(e){return yt(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function yt(e){return"and"===e.op}function bt(e){return wt(e)&&yt(e)}function wt(e){for(const t of e.filters)if(t instanceof gt)return!1;return!0}function St(e){if(e instanceof mt)return e.field.canonicalString()+e.op.toString()+Xe(e.value);if(bt(e))return e.filters.map((e=>St(e))).join(",");{const t=e.filters.map((e=>St(e))).join(",");return`${e.op}(${t})`}}function Et(e,t){return e instanceof mt?function(e,t){return t instanceof mt&&e.op===t.op&&e.field.isEqual(t.field)&&Ke(e.value,t.value)}(e,t):e instanceof gt?function(e,t){return t instanceof gt&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&Et(n,t.filters[r])),!0)}(e,t):void F()}function _t(e){return e instanceof mt?function(e){return`${e.field.canonicalString()} ${e.op} ${Xe(e.value)}`}(e):e instanceof gt?function(e){return e.op.toString()+" {"+e.getFilters().map(_t).join(" ,")+"}"}(e):"Filter"}class Ct extends mt{constructor(e,t,n){super(e,t,n),this.key=ee.fromName(n.referenceValue)}matches(e){const t=ee.comparator(e.key,this.key);return this.matchesComparison(t)}}class kt extends mt{constructor(e,t){super(e,"in",t),this.keys=xt("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class It extends mt{constructor(e,t){super(e,"not-in",t),this.keys=xt("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function xt(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>ee.fromName(e.referenceValue)))}class Tt extends mt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return et(t)&&He(t.arrayValue,this.value)}}class At extends mt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&He(this.value.arrayValue,t)}}class Ft extends mt{constructor(e,t){super(e,"not-in",t)}matches(e){if(He(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!He(this.value.arrayValue,t)}}class Rt extends mt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!et(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>He(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,t=null,n=[],r=[],o=null,i=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=o,this.startAt=i,this.endAt=a,this.ue=null}}function Dt(e,t=null,n=[],r=[],o=null,i=null,a=null){return new Vt(e,t,n,r,o,i,a)}function Pt(e){const t=V(e);if(null===t.ue){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>St(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),fe(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Xe(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Xe(e))).join(",")),t.ue=e}return t.ue}function Ot(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!pt(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Et(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ht(e.startAt,t.startAt)&&ht(e.endAt,t.endAt)}function Lt(e){return ee.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nt{constructor(e,t=null,n=[],r=[],o=null,i="F",a=null,s=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=o,this.limitType=i,this.startAt=a,this.endAt=s,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Mt(e,t,n,r,o,i,a,s){return new Nt(e,t,n,r,o,i,a,s)}function Wt(e){return new Nt(e)}function Bt(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function jt(e){return null!==e.collectionGroup}function $t(e){const t=V(e);if(null===t.ce){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc",r=function(e){let t=new Ae(Z.comparator);return e.filters.forEach((e=>{e.getFlattenedFilters().forEach((e=>{e.isInequality()&&(t=t.add(e.field))}))})),t}(t);r.forEach((r=>{e.has(r.canonicalString())||r.isKeyField()||t.ce.push(new ft(r,n))})),e.has(Z.keyField().canonicalString())||t.ce.push(new ft(Z.keyField(),n))}return t.ce}function Ut(e){const t=V(e);return t.le||(t.le=zt(t,$t(e))),t.le}function zt(e,t){if("F"===e.limitType)return Dt(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((e=>{const t="desc"===e.dir?"asc":"desc";return new ft(e.field,t)}));const n=e.endAt?new ct(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new ct(e.startAt.position,e.startAt.inclusive):null;return Dt(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Kt(e,t,n){return new Nt(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Ht(e,t){return Ot(Ut(e),Ut(t))&&e.limitType===t.limitType}function qt(e){return`${Pt(Ut(e))}|lt:${e.limitType}`}function Gt(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>_t(e))).join(", ")}]`),fe(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Xe(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Xe(e))).join(",")),`Target(${t})`}(Ut(e))}; limitType=${e.limitType})`}function Yt(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):ee.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of $t(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=dt(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,$t(e),t))&&!(e.endAt&&!function(e,t,n){const r=dt(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,$t(e),t))}(e,t)}function Xt(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Jt(e){return(t,n)=>{let r=!1;for(const o of $t(e)){const e=Qt(o,t,n);if(0!==e)return e;r=r||o.field.isKeyField()}return 0}}function Qt(e,t,n){const r=e.field.isKeyField()?ee.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),o=n.data.field(e);return null!==r&&null!==o?qe(r,o):F()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return F()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,o]of n)if(this.equalsFn(r,e))return o}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return void(r[o]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Ce(this.inner,((t,n)=>{for(const[r,o]of n)e(r,o)}))}isEmpty(){return ke(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=new Ie(ee.comparator);function tn(){return en}const nn=new Ie(ee.comparator);function rn(...e){let t=nn;for(const n of e)t=t.insert(n.key,n);return t}function on(e){let t=nn;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function an(){return ln()}function sn(){return ln()}function ln(){return new Zt((e=>e.toString()),((e,t)=>e.isEqual(t)))}const un=new Ie(ee.comparator),cn=new Ae(ee.comparator);function dn(...e){let t=cn;for(const n of e)t=t.add(n);return t}const hn=new Ae(H);function fn(){return hn}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pe(t)?"-0":t}}function vn(e){return{integerValue:""+e}}function mn(e,t){return ve(t)?vn(t):pn(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(){this._=void 0}}function yn(e,t,n){return e instanceof Sn?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Me(t)&&(t=We(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof En?_n(e,t):e instanceof Cn?kn(e,t):function(e,t){const n=wn(e,t),r=xn(n)+xn(e.Pe);return Ze(n)&&Ze(e.Pe)?vn(r):pn(e.serializer,r)}(e,t)}function bn(e,t,n){return e instanceof En?_n(e,t):e instanceof Cn?kn(e,t):n}function wn(e,t){return e instanceof In?function(e){return Ze(e)||function(e){return!!e&&"doubleValue"in e}(e)}(t)?t:{integerValue:0}:null}class Sn extends gn{}class En extends gn{constructor(e){super(),this.elements=e}}function _n(e,t){const n=Tn(t);for(const r of e.elements)n.some((e=>Ke(e,r)))||n.push(r);return{arrayValue:{values:n}}}class Cn extends gn{constructor(e){super(),this.elements=e}}function kn(e,t){let n=Tn(t);for(const r of e.elements)n=n.filter((e=>!Ke(e,r)));return{arrayValue:{values:n}}}class In extends gn{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function xn(e){return Le(e.integerValue||e.doubleValue)}function Tn(e){return et(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof En&&t instanceof En||e instanceof Cn&&t instanceof Cn?q(e.elements,t.elements,Ke):e instanceof In&&t instanceof In?Ke(e.Pe,t.Pe):e instanceof Sn&&t instanceof Sn}(e.transform,t.transform)}class Fn{constructor(e,t){this.version=e,this.transformResults=t}}class Rn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Rn}static exists(e){return new Rn(void 0,e)}static updateTime(e){return new Rn(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vn(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Dn{}function Pn(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new zn(e.key,Rn.none()):new Wn(e.key,e.data,Rn.none());{const n=e.data,r=st.empty();let o=new Ae(Z.comparator);for(let e of t.fields)if(!o.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),o=o.add(e)}return new Bn(e.key,r,new Re(o.toArray()),Rn.none())}}function On(e,t,n){e instanceof Wn?function(e,t,n){const r=e.value.clone(),o=$n(e.fieldTransforms,t,n.transformResults);r.setAll(o),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Bn?function(e,t,n){if(!Vn(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=$n(e.fieldTransforms,t,n.transformResults),o=t.data;o.setAll(jn(e)),o.setAll(r),t.convertToFoundDocument(n.version,o).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Ln(e,t,n,r){return e instanceof Wn?function(e,t,n,r){if(!Vn(e.precondition,t))return n;const o=e.value.clone(),i=Un(e.fieldTransforms,r,t);return o.setAll(i),t.convertToFoundDocument(t.version,o).setHasLocalMutations(),null}(e,t,n,r):e instanceof Bn?function(e,t,n,r){if(!Vn(e.precondition,t))return n;const o=Un(e.fieldTransforms,r,t),i=t.data;return i.setAll(jn(e)),i.setAll(o),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return Vn(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function Nn(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),o=wn(r.transform,e||null);null!=o&&(null===n&&(n=st.empty()),n.set(r.field,o))}return n||null}function Mn(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&q(e,t,((e,t)=>An(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Wn extends Dn{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Bn extends Dn{constructor(e,t,n,r,o=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function jn(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function $n(e,t,n){const r=new Map;R(e.length===n.length);for(let o=0;o<n.length;o++){const i=e[o],a=i.transform,s=t.data.field(i.field);r.set(i.field,bn(a,s,n[o]))}return r}function Un(e,t,n){const r=new Map;for(const o of e){const e=o.transform,i=n.data.field(o.field);r.set(o.field,yn(e,i,t))}return r}class zn extends Dn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Kn extends Dn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&On(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Ln(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Ln(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=sn();return this.mutations.forEach((r=>{const o=e.get(r.key),i=o.overlayedDocument;let a=this.applyToLocalView(i,o.mutatedFields);a=t.has(r.key)?null:a;const s=Pn(i,a);null!==s&&n.set(r.key,s),i.isValidDocument()||i.convertToNoDocument(Y.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),dn())}isEqual(e){return this.batchId===e.batchId&&q(this.mutations,e.mutations,((e,t)=>Mn(e,t)))&&q(this.baseMutations,e.baseMutations,((e,t)=>Mn(e,t)))}}class qn{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){R(e.mutations.length===n.length);let r=function(){return un}();const o=e.mutations;for(let i=0;i<o.length;i++)r=r.insert(o[i].key,n[i].version);return new qn(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yn{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xn,Jn;function Qn(e){switch(e){default:return F();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function Zn(e){if(void 0===e)return x("GRPC error has no .code"),D.UNKNOWN;switch(e){case Xn.OK:return D.OK;case Xn.CANCELLED:return D.CANCELLED;case Xn.UNKNOWN:return D.UNKNOWN;case Xn.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Xn.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Xn.INTERNAL:return D.INTERNAL;case Xn.UNAVAILABLE:return D.UNAVAILABLE;case Xn.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Xn.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Xn.NOT_FOUND:return D.NOT_FOUND;case Xn.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Xn.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Xn.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Xn.ABORTED:return D.ABORTED;case Xn.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Xn.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Xn.DATA_LOSS:return D.DATA_LOSS;default:return F()}}(Jn=Xn||(Xn={}))[Jn.OK=0]="OK",Jn[Jn.CANCELLED=1]="CANCELLED",Jn[Jn.UNKNOWN=2]="UNKNOWN",Jn[Jn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Jn[Jn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Jn[Jn.NOT_FOUND=5]="NOT_FOUND",Jn[Jn.ALREADY_EXISTS=6]="ALREADY_EXISTS",Jn[Jn.PERMISSION_DENIED=7]="PERMISSION_DENIED",Jn[Jn.UNAUTHENTICATED=16]="UNAUTHENTICATED",Jn[Jn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Jn[Jn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Jn[Jn.ABORTED=10]="ABORTED",Jn[Jn.OUT_OF_RANGE=11]="OUT_OF_RANGE",Jn[Jn.UNIMPLEMENTED=12]="UNIMPLEMENTED",Jn[Jn.INTERNAL=13]="INTERNAL",Jn[Jn.UNAVAILABLE=14]="UNAVAILABLE",Jn[Jn.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let er=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=new r([4294967295,4294967295],0);function rr(e){const t=tr().encode(e),n=new o;return n.update(t),new Uint8Array(n.digest())}function or(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),o=t.getUint32(4,!0),i=t.getUint32(8,!0),a=t.getUint32(12,!0);return[new r([n,o],0),new r([i,a],0)]}class ir{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new ar(`Invalid padding: ${t}`);if(n<0)throw new ar(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new ar(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new ar(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=r.fromNumber(this.Ie)}Ee(e,t,n){let o=e.add(t.multiply(r.fromNumber(n)));return 1===o.compare(nr)&&(o=new r([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Te).toNumber()}de(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ie)return!1;const t=rr(e),[n,r]=or(t);for(let o=0;o<this.hashCount;o++){const e=this.Ee(n,r,o);if(!this.de(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),i=new ir(o,r,t);return n.forEach((e=>i.insert(e))),i}insert(e){if(0===this.Ie)return;const t=rr(e),[n,r]=or(t);for(let o=0;o<this.hashCount;o++){const e=this.Ee(n,r,o);this.Ae(e)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class ar extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,t,n,r,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,lr.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new sr(Y.min(),r,new Ie(H),tn(),dn())}}class lr{constructor(e,t,n,r,o){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new lr(n,t,dn(),dn(),dn())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,t,n,r){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=r}}class cr{constructor(e,t){this.targetId=e,this.me=t}}class dr{constructor(e,t,n=De.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class hr{constructor(){this.fe=0,this.ge=vr(),this.pe=De.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=dn(),t=dn(),n=dn();return this.ge.forEach(((r,o)=>{switch(o){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:F()}})),new lr(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=vr()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,R(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class fr{constructor(e){this.Le=e,this.Be=new Map,this.ke=tn(),this.qe=pr(),this.Qe=new Ie(H)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,(t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:F()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach(((e,n)=>{this.ze(n)&&t(n)}))}He(e){const t=e.targetId,n=e.me.count,r=this.Je(t);if(r){const o=r.target;if(Lt(o))if(0===n){const e=new ee(o.path);this.Ue(t,e,ut.newNoDocument(e,Y.min()))}else R(1===n);else{const r=this.Ye(t);if(r!==n){const n=this.Ze(e),o=n?this.Xe(n,e,r):1;if(0!==o){this.je(t);const e=2===o?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,e)}null==er||er.et(function(e,t,n,r,o){var i,a,s,l,u,c;const d={localCacheCount:e,existenceFilterCount:t.count,databaseId:n.database,projectId:n.projectId},h=t.unchangedNames;return h&&(d.bloomFilter={applied:0===o,hashCount:null!==(i=null==h?void 0:h.hashCount)&&void 0!==i?i:0,bitmapLength:null!==(l=null===(s=null===(a=null==h?void 0:h.bits)||void 0===a?void 0:a.bitmap)||void 0===s?void 0:s.length)&&void 0!==l?l:0,padding:null!==(c=null===(u=null==h?void 0:h.bits)||void 0===u?void 0:u.padding)&&void 0!==c?c:0,mightContain:e=>{var t;return null!==(t=null==r?void 0:r.mightContain(e))&&void 0!==t&&t}}),d}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,e.me,this.Le.tt(),n,o))}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:o=0}=t;let i,a;try{i=Ne(n).toUint8Array()}catch(e){if(e instanceof Ve)return T("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{a=new ir(i,r,o)}catch(e){return T(e instanceof ar?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===a.Ie?null:a}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let r=0;return n.forEach((n=>{const o=this.Le.tt(),i=`projects/${o.projectId}/databases/${o.database}/documents/${n.path.canonicalString()}`;e.mightContain(i)||(this.Ue(t,n,null),r++)})),r}rt(e){const t=new Map;this.Be.forEach(((n,r)=>{const o=this.Je(r);if(o){if(n.current&&Lt(o.target)){const t=new ee(o.target.path);null!==this.ke.get(t)||this.it(r,t)||this.Ue(r,t,ut.newNoDocument(t,e))}n.be&&(t.set(r,n.ve()),n.Ce())}}));let n=dn();this.qe.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Je(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.ke.forEach(((t,n)=>n.setReadTime(e)));const r=new sr(e,t,this.Qe,this.ke,n);return this.ke=tn(),this.qe=pr(),this.Qe=new Ie(H),r}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const r=this.Ge(e);this.it(e,t)?r.Fe(t,1):r.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new hr,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ae(H),this.qe=this.qe.insert(e,t)),t}ze(e){const t=null!==this.Je(e);return t||I("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new hr),this.Le.getRemoteKeysForTarget(e).forEach((t=>{this.Ue(e,t,null)}))}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function pr(){return new Ie(ee.comparator)}function vr(){return new Ie(ee.comparator)}const mr=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),gr=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),yr=(()=>{const e={and:"AND",or:"OR"};return e})();class br{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function wr(e,t){return e.useProto3Json||fe(t)?t:{value:t}}function Sr(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Er(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function _r(e,t){return Sr(e,t.toTimestamp())}function Cr(e){return R(!!e),Y.fromTimestamp(function(e){const t=Oe(e);return new G(t.seconds,t.nanos)}(e))}function kr(e,t){return Ir(e,t).canonicalString()}function Ir(e,t){const n=function(e){return new J(["projects",e.projectId,"databases",e.database])}(e).child("documents");return void 0===t?n:n.child(t)}function xr(e){const t=J.fromString(e);return R(Xr(t)),t}function Tr(e,t){return kr(e.databaseId,t.path)}function Ar(e,t){const n=xr(t);if(n.get(1)!==e.databaseId.projectId)throw new P(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new P(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ee(Dr(n))}function Fr(e,t){return kr(e.databaseId,t)}function Rr(e){const t=xr(e);return 4===t.length?J.emptyPath():Dr(t)}function Vr(e){return new J(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Dr(e){return R(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Pr(e,t,n){return{name:Tr(e,t),fields:n.value.mapValue.fields}}function Or(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:F()}(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],i=function(e,t){return e.useProto3Json?(R(void 0===t||"string"==typeof t),De.fromBase64String(t||"")):(R(void 0===t||t instanceof Buffer||t instanceof Uint8Array),De.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,s=a&&function(e){const t=void 0===e.code?D.UNKNOWN:Zn(e.code);return new P(t,e.message||"")}(a);n=new dr(r,o,i,s||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const o=Ar(e,r.document.name),i=Cr(r.document.updateTime),a=r.document.createTime?Cr(r.document.createTime):Y.min(),s=new st({mapValue:{fields:r.document.fields}}),l=ut.newFoundDocument(o,i,a,s),u=r.targetIds||[],c=r.removedTargetIds||[];n=new ur(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const o=Ar(e,r.document),i=r.readTime?Cr(r.readTime):Y.min(),a=ut.newNoDocument(o,i),s=r.removedTargetIds||[];n=new ur([],s,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const o=Ar(e,r.document),i=r.removedTargetIds||[];n=new ur([],i,o,null)}else{if(!("filter"in t))return F();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:o}=e,i=new Yn(r,o),a=e.targetId;n=new cr(a,i)}}return n}function Lr(e,t){let n;if(t instanceof Wn)n={update:Pr(e,t.key,t.value)};else if(t instanceof zn)n={delete:Tr(e,t.key)};else if(t instanceof Bn)n={update:Pr(e,t.key,t.data),updateMask:Yr(t.fieldMask)};else{if(!(t instanceof Kn))return F();n={verify:Tr(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Sn)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof En)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Cn)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof In)return{fieldPath:t.field.canonicalString(),increment:n.Pe};throw F()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:_r(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:F()}(e,t.precondition)),n}function Nr(e,t){return e&&e.length>0?(R(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Cr(e.updateTime):Cr(t);return n.isEqual(Y.min())&&(n=Cr(t)),new Fn(n,e.transformResults||[])}(e,t)))):[]}function Mr(e,t){return{documents:[Fr(e,t.path)]}}function Wr(e,t){const n={structuredQuery:{}},r=t.path;let o;null!==t.collectionGroup?(o=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Fr(e,o);const i=function(e){if(0!==e.length)return Gr(gt.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const a=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Hr(e.field),direction:Ur(e.dir)}}(e)))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);const s=wr(e,t.limit);return null!==s&&(n.structuredQuery.limit=s),t.startAt&&(n.structuredQuery.startAt=function(e){return{before:e.inclusive,values:e.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{_t:n,parent:o}}function Br(e){let t=Rr(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let o=null;if(r>0){R(1===r);const e=n.from[0];e.allDescendants?o=e.collectionId:t=t.child(e.collectionId)}let i=[];n.where&&(i=function(e){const t=$r(e);return t instanceof gt&&bt(t)?t.getFilters():[t]}(n.where));let a=[];n.orderBy&&(a=function(e){return e.map((e=>function(e){return new ft(qr(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)))}(n.orderBy));let s=null;n.limit&&(s=function(e){let t;return t="object"==typeof e?e.value:e,fe(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new ct(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new ct(n,t)}(n.endAt)),Mt(t,o,a,i,s,"F",l,u)}function jr(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}function $r(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=qr(e.unaryFilter.field);return mt.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=qr(e.unaryFilter.field);return mt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=qr(e.unaryFilter.field);return mt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=qr(e.unaryFilter.field);return mt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(e):void 0!==e.fieldFilter?function(e){return mt.create(qr(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return gt.create(e.compositeFilter.filters.map((e=>$r(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return F()}}(e.compositeFilter.op))}(e):F()}function Ur(e){return mr[e]}function zr(e){return gr[e]}function Kr(e){return yr[e]}function Hr(e){return{fieldPath:e.canonicalString()}}function qr(e){return Z.fromServerFormat(e.fieldPath)}function Gr(e){return e instanceof mt?function(e){if("=="===e.op){if(nt(e.value))return{unaryFilter:{field:Hr(e.field),op:"IS_NAN"}};if(tt(e.value))return{unaryFilter:{field:Hr(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(nt(e.value))return{unaryFilter:{field:Hr(e.field),op:"IS_NOT_NAN"}};if(tt(e.value))return{unaryFilter:{field:Hr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hr(e.field),op:zr(e.op),value:e.value}}}(e):e instanceof gt?function(e){const t=e.getFilters().map((e=>Gr(e)));return 1===t.length?t[0]:{compositeFilter:{op:Kr(e.op),filters:t}}}(e):F()}function Yr(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Xr(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,t,n,r,o=Y.min(),i=Y.min(),a=De.EMPTY_BYTE_STRING,s=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=a,this.expectedCount=s}withSequenceNumber(e){return new Jr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e){this.ct=e}}function Zr(e){const t=Br({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Kt(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(Le(e.integerValue));else if("doubleValue"in e){const n=Le(e.doubleValue);isNaN(n)?this.dt(t,13):(this.dt(t,15),pe(n)?t.At(0):t.At(n))}else if("timestampValue"in e){let n=e.timestampValue;this.dt(t,20),"string"==typeof n&&(n=Oe(n)),t.Rt(`${n.seconds||""}`),t.At(n.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(Ne(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.dt(t,45),t.At(n.latitude||0),t.At(n.longitude||0)}else"mapValue"in e?at(e)?this.dt(t,Number.MAX_SAFE_INTEGER):ot(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):F()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const n=e.fields||{};this.dt(t,55);for(const r of Object.keys(n))this.Vt(r,t),this.Tt(n[r],t)}wt(e,t){var n,r;const o=e.fields||{};this.dt(t,53);const i="value",a=(null===(r=null===(n=o[i].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.length)||0;this.dt(t,15),t.At(Le(a)),this.Vt(i,t),this.Tt(o[i],t)}bt(e,t){const n=e.values||[];this.dt(t,50);for(const r of n)this.Tt(r,t)}yt(e,t){this.dt(t,37),ee.fromName(e).path.forEach((e=>{this.dt(t,60),this.Dt(e,t)}))}dt(e,t){e.At(t)}ft(e){e.At(2)}}eo.vt=new eo;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class to{constructor(){this.un=new no}addToCollectionParentIndex(e,t){return this.un.add(t),ue.resolve()}getCollectionParents(e,t){return ue.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return ue.resolve()}deleteFieldIndex(e,t){return ue.resolve()}deleteAllFieldIndexes(e){return ue.resolve()}createTargetIndexes(e,t){return ue.resolve()}getDocumentsMatchingTarget(e,t){return ue.resolve(null)}getIndexType(e,t){return ue.resolve(0)}getFieldIndexes(e,t){return ue.resolve([])}getNextCollectionGroupToUpdate(e){return ue.resolve(null)}getMinOffset(e,t){return ue.resolve(oe.min())}getMinOffsetFromCollectionGroup(e,t){return ue.resolve(oe.min())}updateCollectionGroup(e,t,n){return ue.resolve()}updateIndexEntries(e,t){return ue.resolve()}}class no{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Ae(J.comparator),o=!r.has(n);return this.index[t]=r.add(n),o}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Ae(J.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ro={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class oo{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new oo(e,oo.DEFAULT_COLLECTION_PERCENTILE,oo.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */oo.DEFAULT_COLLECTION_PERCENTILE=10,oo.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,oo.DEFAULT=new oo(41943040,oo.DEFAULT_COLLECTION_PERCENTILE,oo.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),oo.DISABLED=new oo(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class io{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new io(0)}static kn(){return new io(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ao([e,t],[n,r]){const o=H(e,n);return 0===o?H(t,r):o}class so{constructor(e){this.Un=e,this.buffer=new Ae(ao),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();ao(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class lo{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.jn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return null!==this.jn}Hn(e){I("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){de(e)?I("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await le(e)}await this.Hn(3e5)}))}}class uo{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return ue.resolve(he.oe);const n=new so(t);return this.Jn.forEachTarget(e,(e=>n.zn(e.sequenceNumber))).next((()=>this.Jn.Zn(e,(e=>n.zn(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.Jn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(I("LruGarbageCollector","Garbage collection skipped; disabled"),ue.resolve(ro)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(I("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ro):this.Xn(e,t)))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let n,r,o,i,a,l,u;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(I("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,i=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,a=Date.now(),this.removeTargets(e,n,t)))).next((t=>(o=t,l=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(u=Date.now(),k()<=s.$b.DEBUG&&I("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${i-c}ms\n\tDetermined least recently used ${r} in `+(a-i)+"ms\n"+`\tRemoved ${o} targets in `+(l-a)+"ms\n"+`\tRemoved ${e} documents in `+(u-l)+"ms\n"+`Total Duration: ${u-c}ms`),ue.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:o,documentsRemoved:e}))))}}function co(e,t){return new uo(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ho{constructor(){this.changes=new Zt((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ut.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?ue.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fo{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&Ln(n.mutation,e,Re.empty(),G.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,dn()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=dn()){const r=an();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=rn();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=an();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,dn())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let o=tn();const i=ln(),a=function(){return ln()}();return t.forEach(((e,t)=>{const a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof Bn)?o=o.insert(t.key,t):void 0!==a?(i.set(t.key,a.mutation.getFieldMask()),Ln(a.mutation,t,a.mutation.getFieldMask(),G.now())):i.set(t.key,Re.empty())})),this.recalculateAndSaveOverlays(e,o).next((e=>(e.forEach(((e,t)=>i.set(e,t))),t.forEach(((e,t)=>{var n;return a.set(e,new fo(t,null!==(n=i.get(e))&&void 0!==n?n:null))})),a)))}recalculateAndSaveOverlays(e,t){const n=ln();let r=new Ie(((e,t)=>e-t)),o=dn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const o of e)o.keys().forEach((e=>{const i=t.get(e);if(null===i)return;let a=n.get(e)||Re.empty();a=o.applyToLocalView(i,a),n.set(e,a);const s=(r.get(o.batchId)||dn()).add(e);r=r.insert(o.batchId,s)}))})).next((()=>{const i=[],a=r.getReverseIterator();for(;a.hasNext();){const r=a.getNext(),s=r.key,l=r.value,u=sn();l.forEach((e=>{if(!o.has(e)){const r=Pn(t.get(e),n.get(e));null!==r&&u.set(e,r),o=o.add(e)}})),i.push(this.documentOverlayCache.saveOverlays(e,s,u))}return ue.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n,r){return function(e){return ee.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):jt(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((o=>{const i=r-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-o.size):ue.resolve(an());let a=-1,s=o;return i.next((t=>ue.forEach(t,((t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),o.get(t)?ue.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{s=s.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,o))).next((()=>this.computeViews(e,s,t,dn()))).next((e=>({batchId:a,changes:on(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ee(t)).next((e=>{let t=rn();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const o=t.collectionGroup;let i=rn();return this.indexManager.getCollectionParents(e,o).next((a=>ue.forEach(a,(a=>{const s=function(e,t){return new Nt(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,a.child(o));return this.getDocumentsMatchingCollectionQuery(e,s,n,r).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n,r){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((i=>(o=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,o,r)))).next((e=>{o.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,ut.newInvalidDocument(r)))}));let n=rn();return e.forEach(((e,r)=>{const i=o.get(e);void 0!==i&&Ln(i.mutation,r,Re.empty(),G.now()),Yt(t,r)&&(n=n.insert(e,r))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return ue.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(e){return{id:e.id,version:e.version,createTime:Cr(e.createTime)}}(t)),ue.resolve()}getNamedQuery(e,t){return ue.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(e){return{name:e.name,query:Zr(e.bundledQuery),readTime:Cr(e.readTime)}}(t)),ue.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(){this.overlays=new Ie(ee.comparator),this.Ir=new Map}getOverlay(e,t){return ue.resolve(this.overlays.get(t))}getOverlays(e,t){const n=an();return ue.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.ht(e,t,r)})),ue.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Ir.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.Ir.delete(n)),ue.resolve()}getOverlaysForCollection(e,t,n){const r=an(),o=t.length+1,i=new ee(t.child("")),a=this.overlays.getIteratorFrom(i);for(;a.hasNext();){const e=a.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===o&&e.largestBatchId>n&&r.set(e.getKey(),e)}return ue.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let o=new Ie(((e,t)=>e-t));const i=this.overlays.getIterator();for(;i.hasNext();){const e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=o.get(e.largestBatchId);null===t&&(t=an(),o=o.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const a=an(),s=o.getIterator();for(;s.hasNext();)if(s.getNext().value.forEach(((e,t)=>a.set(e,t))),a.size()>=r)break;return ue.resolve(a)}ht(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.Ir.get(r.largestBatchId).delete(n.key);this.Ir.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Gn(t,n));let o=this.Ir.get(t);void 0===o&&(o=dn(),this.Ir.set(t,o)),this.Ir.set(t,o.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(){this.sessionToken=De.EMPTY_BYTE_STRING}getSessionToken(e){return ue.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ue.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(){this.Tr=new Ae(bo.Er),this.dr=new Ae(bo.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const n=new bo(e,t);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Vr(new bo(e,t))}mr(e,t){e.forEach((e=>this.removeReference(e,t)))}gr(e){const t=new ee(new J([])),n=new bo(t,e),r=new bo(t,e+1),o=[];return this.dr.forEachInRange([n,r],(e=>{this.Vr(e),o.push(e.key)})),o}pr(){this.Tr.forEach((e=>this.Vr(e)))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new ee(new J([])),n=new bo(t,e),r=new bo(t,e+1);let o=dn();return this.dr.forEachInRange([n,r],(e=>{o=o.add(e.key)})),o}containsKey(e){const t=new bo(e,0),n=this.Tr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class bo{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return ee.comparator(e.key,t.key)||H(e.wr,t.wr)}static Ar(e,t){return H(e.wr,t.wr)||ee.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Ae(bo.Er)}checkEmpty(e){return ue.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new Hn(o,t,n,r);this.mutationQueue.push(i);for(const a of r)this.br=this.br.add(new bo(a.key,o)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return ue.resolve(i)}lookupMutationBatch(e,t){return ue.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.vr(n),o=r<0?0:r;return ue.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return ue.resolve(0===this.mutationQueue.length?-1:this.Sr-1)}getAllMutationBatches(e){return ue.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new bo(t,0),r=new bo(t,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([n,r],(e=>{const t=this.Dr(e.wr);o.push(t)})),ue.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Ae(H);return t.forEach((e=>{const t=new bo(e,0),r=new bo(e,Number.POSITIVE_INFINITY);this.br.forEachInRange([t,r],(e=>{n=n.add(e.wr)}))})),ue.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let o=n;ee.isDocumentKey(o)||(o=o.child(""));const i=new bo(new ee(o),0);let a=new Ae(H);return this.br.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.wr)),!0)}),i),ue.resolve(this.Cr(a))}Cr(e){const t=[];return e.forEach((e=>{const n=this.Dr(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){R(0===this.Fr(t.batchId,"removed")),this.mutationQueue.shift();let n=this.br;return ue.forEach(t.mutations,(r=>{const o=new bo(r.key,t.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.br=n}))}On(e){}containsKey(e,t){const n=new bo(t,0),r=this.br.firstAfterOrEqual(n);return ue.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,ue.resolve()}Fr(e,t){return this.vr(e)}vr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e){this.Mr=e,this.docs=function(){return new Ie(ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),o=r?r.size:0,i=this.Mr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:i}),this.size+=i-o,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return ue.resolve(n?n.document.mutableCopy():ut.newInvalidDocument(t))}getEntries(e,t){let n=tn();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():ut.newInvalidDocument(e))})),ue.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let o=tn();const i=t.path,a=new ee(i.child("")),s=this.docs.getIteratorFrom(a);for(;s.hasNext();){const{key:e,value:{document:a}}=s.getNext();if(!i.isPrefixOf(e.path))break;e.path.length>i.length+1||ie(re(a),n)<=0||(r.has(a.key)||Yt(t,a))&&(o=o.insert(a.key,a.mutableCopy()))}return ue.resolve(o)}getAllFromCollectionGroup(e,t,n,r){F()}Or(e,t){return ue.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Eo(this)}getSize(e){return ue.resolve(this.size)}}class Eo extends ho{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.cr.addEntry(e,r)):this.cr.removeEntry(n)})),ue.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e){this.persistence=e,this.Nr=new Zt((e=>Pt(e)),Ot),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Lr=0,this.Br=new yo,this.targetCount=0,this.kr=io.Bn()}forEachTarget(e,t){return this.Nr.forEach(((e,n)=>t(n))),ue.resolve()}getLastRemoteSnapshotVersion(e){return ue.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ue.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),ue.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Lr&&(this.Lr=t),ue.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new io(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,ue.resolve()}updateTargetData(e,t){return this.Kn(t),ue.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,ue.resolve()}removeTargets(e,t,n){let r=0;const o=[];return this.Nr.forEach(((i,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Nr.delete(i),o.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)})),ue.waitFor(o).next((()=>r))}getTargetCount(e){return ue.resolve(this.targetCount)}getTargetData(e,t){const n=this.Nr.get(t)||null;return ue.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Rr(t,n),ue.resolve()}removeMatchingKeys(e,t,n){this.Br.mr(t,n);const r=this.persistence.referenceDelegate,o=[];return r&&t.forEach((t=>{o.push(r.markPotentiallyOrphaned(e,t))})),ue.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),ue.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Br.yr(t);return ue.resolve(n)}containsKey(e,t){return ue.resolve(this.Br.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,t){this.qr={},this.overlays={},this.Qr=new he(0),this.Kr=!1,this.Kr=!0,this.$r=new go,this.referenceDelegate=e(this),this.Ur=new _o(this),this.indexManager=new to,this.remoteDocumentCache=function(e){return new So(e)}((e=>this.referenceDelegate.Wr(e))),this.serializer=new Qr(t),this.Gr=new vo(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new mo,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.qr[e.toKey()];return n||(n=new wo(t,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,n){I("MemoryPersistence","Starting transaction:",e);const r=new ko(this.Qr.next());return this.referenceDelegate.zr(),n(r).next((e=>this.referenceDelegate.jr(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Hr(e,t){return ue.or(Object.values(this.qr).map((n=>()=>n.containsKey(e,t))))}}class ko extends se{constructor(e){super(),this.currentSequenceNumber=e}}class Io{constructor(e){this.persistence=e,this.Jr=new yo,this.Yr=null}static Zr(e){return new Io(e)}get Xr(){if(this.Yr)return this.Yr;throw F()}addReference(e,t,n){return this.Jr.addReference(n,t),this.Xr.delete(n.toString()),ue.resolve()}removeReference(e,t,n){return this.Jr.removeReference(n,t),this.Xr.add(n.toString()),ue.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),ue.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach((e=>this.Xr.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Xr.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ue.forEach(this.Xr,(n=>{const r=ee.fromPath(n);return this.ei(e,r).next((e=>{e||t.removeEntry(r,Y.min())}))})).next((()=>(this.Yr=null,t.apply(e))))}updateLimboDocument(e,t){return this.ei(e,t).next((e=>{e?this.Xr.delete(t.toString()):this.Xr.add(t.toString())}))}Wr(e){return 0}ei(e,t){return ue.or([()=>ue.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}class xo{constructor(e,t){this.persistence=e,this.ti=new Zt((e=>me(e.path)),((e,t)=>e.isEqual(t))),this.garbageCollector=co(this,t)}static Zr(e,t){return new xo(e,t)}zr(){}jr(e){return ue.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Yn(e){const t=this.er(e);return this.persistence.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}er(e){let t=0;return this.Zn(e,(e=>{t++})).next((()=>t))}Zn(e,t){return ue.forEach(this.ti,((n,r)=>this.nr(e,n,r).next((e=>e?ue.resolve():t(r)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),o=r.newChangeBuffer();return r.Or(e,(r=>this.nr(e,r,t).next((e=>{e||(n++,o.removeEntry(r,Y.min()))})))).next((()=>o.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.ti.set(t,e.currentSequenceNumber),ue.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.ti.set(n,e.currentSequenceNumber),ue.resolve()}removeReference(e,t,n){return this.ti.set(n,e.currentSequenceNumber),ue.resolve()}updateLimboDocument(e,t){return this.ti.set(t,e.currentSequenceNumber),ue.resolve()}Wr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Qe(e.data.value)),t}nr(e,t,n){return ue.or([()=>this.persistence.Hr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const e=this.ti.get(t);return ue.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class To{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.$i=n,this.Ui=r}static Wi(e,t){let n=dn(),r=dn();for(const o of t.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:r=r.add(o.doc.key)}return new To(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return(0,l.nr)()?8:ce((0,l.ZQ)())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,n,r){const o={result:null};return this.Yi(e,t).next((e=>{o.result=e})).next((()=>{if(!o.result)return this.Zi(e,t,r,n).next((e=>{o.result=e}))})).next((()=>{if(o.result)return;const n=new Ao;return this.Xi(e,t,n).next((r=>{if(o.result=r,this.zi)return this.es(e,t,n,r.size)}))})).next((()=>o.result))}es(e,t,n,r){return n.documentReadCount<this.ji?(k()<=s.$b.DEBUG&&I("QueryEngine","SDK will not create cache indexes for query:",Gt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),ue.resolve()):(k()<=s.$b.DEBUG&&I("QueryEngine","Query:",Gt(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Hi*r?(k()<=s.$b.DEBUG&&I("QueryEngine","The SDK decides to create cache indexes for query:",Gt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ut(t))):ue.resolve())}Yi(e,t){if(Bt(t))return ue.resolve(null);let n=Ut(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=Kt(t,null,"F"),n=Ut(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const o=dn(...r);return this.Ji.getDocuments(e,o).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const i=this.ts(t,r);return this.ns(t,i,o,n.readTime)?this.Yi(e,Kt(t,null,"F")):this.rs(e,i,t,n)}))))})))))}Zi(e,t,n,r){return Bt(t)||r.isEqual(Y.min())?ue.resolve(null):this.Ji.getDocuments(e,n).next((o=>{const i=this.ts(t,o);return this.ns(t,i,n,r)?ue.resolve(null):(k()<=s.$b.DEBUG&&I("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Gt(t)),this.rs(e,i,t,ne(r,-1)).next((e=>e)))}))}ts(e,t){let n=new Ae(Jt(e));return t.forEach(((t,r)=>{Yt(e,r)&&(n=n.add(r))})),n}ns(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const o="F"===e.limitType?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(r)>0)}Xi(e,t,n){return k()<=s.$b.DEBUG&&I("QueryEngine","Using full collection scan to execute query:",Gt(t)),this.Ji.getDocumentsMatchingQuery(e,t,oe.min(),n)}rs(e,t,n,r){return this.Ji.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,t,n,r){this.persistence=e,this.ss=t,this.serializer=r,this.os=new Ie(H),this._s=new Zt((e=>Pt(e)),Ot),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new po(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.os)))}}function Vo(e,t,n,r){return new Ro(e,t,n,r)}async function Do(e,t){const n=V(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((o=>(r=o,n.ls(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const o=[],i=[];let a=dn();for(const e of r){o.push(e.batchId);for(const t of e.mutations)a=a.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)a=a.add(t.key)}return n.localDocuments.getDocuments(e,a).next((e=>({hs:e,removedBatchIds:o,addedBatchIds:i})))}))}))}function Po(e,t){const n=V(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),o=n.cs.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const o=n.batch,i=o.keys();let a=ue.resolve();return i.forEach((e=>{a=a.next((()=>r.getEntry(t,e))).next((t=>{const i=n.docVersions.get(e);R(null!==i),t.version.compareTo(i)<0&&(o.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),a.next((()=>e.mutationQueue.removeMutationBatch(t,o)))}(n,e,t,o).next((()=>o.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=dn();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function Oo(e){const t=V(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Ur.getLastRemoteSnapshotVersion(e)))}function Lo(e,t){const n=V(e),r=t.snapshotVersion;let o=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const i=n.cs.newChangeBuffer({trackRemovals:!0});o=n.os;const a=[];t.targetChanges.forEach(((i,s)=>{const l=o.get(s);if(!l)return;a.push(n.Ur.removeMatchingKeys(e,i.removedDocuments,s).next((()=>n.Ur.addMatchingKeys(e,i.addedDocuments,s))));let u=l.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(s)?u=u.withResumeToken(De.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,r)),o=o.insert(s,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(l,u,i)&&a.push(n.Ur.updateTargetData(e,u))}));let s=tn(),l=dn();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),a.push(No(e,i,t.documentUpdates).next((e=>{s=e.Ps,l=e.Is}))),!r.isEqual(Y.min())){const t=n.Ur.getLastRemoteSnapshotVersion(e).next((t=>n.Ur.setTargetsMetadata(e,e.currentSequenceNumber,r)));a.push(t)}return ue.waitFor(a).next((()=>i.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,s,l))).next((()=>s))})).then((e=>(n.os=o,e)))}function No(e,t,n){let r=dn(),o=dn();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=tn();return n.forEach(((n,i)=>{const a=e.get(n);i.isFoundDocument()!==a.isFoundDocument()&&(o=o.add(n)),i.isNoDocument()&&i.version.isEqual(Y.min())?(t.removeEntry(n,i.readTime),r=r.insert(n,i)):!a.isValidDocument()||i.version.compareTo(a.version)>0||0===i.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(i),r=r.insert(n,i)):I("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",i.version)})),{Ps:r,Is:o}}))}function Mo(e,t){const n=V(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function Wo(e,t){const n=V(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Ur.getTargetData(e,t).next((o=>o?(r=o,ue.resolve(r)):n.Ur.allocateTargetId(e).next((o=>(r=new Jr(t,o,"TargetPurposeListen",e.currentSequenceNumber),n.Ur.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.os.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.os=n.os.insert(e.targetId,e),n._s.set(t,e.targetId)),e}))}async function Bo(e,t,n){const r=V(e),o=r.os.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(e=>r.persistence.referenceDelegate.removeTarget(e,o)))}catch(e){if(!de(e))throw e;I("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.os=r.os.remove(t),r._s.delete(o.target)}function jo(e,t,n){const r=V(e);let o=Y.min(),i=dn();return r.persistence.runTransaction("Execute query","readwrite",(e=>function(e,t,n){const r=V(e),o=r._s.get(n);return void 0!==o?ue.resolve(r.os.get(o)):r.Ur.getTargetData(t,n)}(r,e,Ut(t)).next((t=>{if(t)return o=t.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(e,t.targetId).next((e=>{i=e}))})).next((()=>r.ss.getDocumentsMatchingQuery(e,t,n?o:Y.min(),n?i:dn()))).next((e=>($o(r,Xt(t),e),{documents:e,Ts:i})))))}function $o(e,t,n){let r=e.us.get(t)||Y.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.us.set(t,r)}class Uo{constructor(){this.activeTargetIds=fn()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zo{constructor(){this.so=new Uo,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,n){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Uo,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{_o(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){I("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){I("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qo=null;function Go(){return null===qo?qo=function(){return 268435456+Math.round(2147483648*Math.random())}():qo++,"0x"+qo.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Yo={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo="WebChannelConnection";class Qo extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Do=t+"://"+e.host,this.vo=`projects/${n}/databases/${r}`,this.Co="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get Fo(){return!1}Mo(e,t,n,r,o){const i=Go(),a=this.xo(e,t.toUriEncodedString());I("RestConnection",`Sending RPC '${e}' ${i}:`,a,n);const s={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(s,r,o),this.No(e,a,s,n).then((t=>(I("RestConnection",`Received RPC '${e}' ${i}: `,t),t)),(t=>{throw T("RestConnection",`RPC '${e}' ${i} failed with error: `,t,"url: ",a,"request:",n),t}))}Lo(e,t,n,r,o,i){return this.Mo(e,t,n,r,o)}Oo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+_}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}xo(e,t){const n=Yo[e];return`${this.Do}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,n,r){const o=Go();return new Promise(((i,a)=>{const s=new d;s.setWithCredentials(!0),s.listenOnce(f.COMPLETE,(()=>{try{switch(s.getLastErrorCode()){case p.NO_ERROR:const t=s.getResponseJson();I(Jo,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(t)),i(t);break;case p.TIMEOUT:I(Jo,`RPC '${e}' ${o} timed out`),a(new P(D.DEADLINE_EXCEEDED,"Request time out"));break;case p.HTTP_ERROR:const n=s.getStatus();if(I(Jo,`RPC '${e}' ${o} failed with status:`,n,"response text:",s.getResponseText()),n>0){let e=s.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(t)>=0?t:D.UNKNOWN}(t.status);a(new P(e,t.message))}else a(new P(D.UNKNOWN,"Server responded with status "+s.getStatus()))}else a(new P(D.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{I(Jo,`RPC '${e}' ${o} completed.`)}}));const l=JSON.stringify(r);I(Jo,`RPC '${e}' ${o} sending request:`,r),s.send(t,"POST",l,n,15)}))}Bo(e,t,n){const r=Go(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=y(),a=g(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(s.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(s.useFetchStreams=!0),this.Oo(s.initMessageHeaders,t,n),s.encodeInitMessageHeaders=!0;const u=o.join("");I(Jo,`Creating RPC '${e}' stream ${r}: ${u}`,s);const c=i.createWebChannel(u,s);let d=!1,f=!1;const p=new Xo({Io:t=>{f?I(Jo,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(d||(I(Jo,`Opening RPC '${e}' stream ${r} transport.`),c.open(),d=!0),I(Jo,`RPC '${e}' stream ${r} sending:`,t),c.send(t))},To:()=>c.close()}),b=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return b(c,h.EventType.OPEN,(()=>{f||(I(Jo,`RPC '${e}' stream ${r} transport opened.`),p.yo())})),b(c,h.EventType.CLOSE,(()=>{f||(f=!0,I(Jo,`RPC '${e}' stream ${r} transport closed`),p.So())})),b(c,h.EventType.ERROR,(t=>{f||(f=!0,T(Jo,`RPC '${e}' stream ${r} transport errored:`,t),p.So(new P(D.UNAVAILABLE,"The operation could not be completed")))})),b(c,h.EventType.MESSAGE,(t=>{var n;if(!f){const o=t.data[0];R(!!o);const i=o,a=i.error||(null===(n=i[0])||void 0===n?void 0:n.error);if(a){I(Jo,`RPC '${e}' stream ${r} received error:`,a);const t=a.status;let n=function(e){const t=Xn[e];if(void 0!==t)return Zn(t)}(t),o=a.message;void 0===n&&(n=D.INTERNAL,o="Unknown error status: "+t+" with message "+a.message),f=!0,p.So(new P(n,o)),c.close()}else I(Jo,`RPC '${e}' stream ${r} received:`,o),p.bo(o)}})),b(a,m.STAT_EVENT,(t=>{t.stat===v.PROXY?I(Jo,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===v.NOPROXY&&I(Jo,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{p.wo()}),0),p}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(e){return new br(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,t,n=1e3,r=1.5,o=6e4){this.ui=e,this.timerId=t,this.ko=n,this.qo=r,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),r=Math.max(0,t-n);r>0&&I("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,(()=>(this.Uo=Date.now(),e()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){null!==this.$o&&(this.$o.skipDelay(),this.$o=null)}cancel(){null!==this.$o&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t,n,r,o,i,a,s){this.ui=e,this.Ho=n,this.Jo=r,this.connection=o,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=a,this.listener=s,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new ti(e,t)}n_(){return 1===this.state||5===this.state||this.r_()}r_(){return 2===this.state||3===this.state}start(){this.e_=0,4!==this.state?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&null===this.Zo&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,(()=>this.__())))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,4!==e?this.t_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(x(t.toString()),x("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===D.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Yo===t&&this.P_(e,n)}),(t=>{e((()=>{const e=new P(D.UNKNOWN,"Fetching auth token failed: "+t.message);return this.I_(e)}))}))}P_(e,t){const n=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo((()=>{n((()=>this.listener.Eo()))})),this.stream.Ro((()=>{n((()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,(()=>(this.r_()&&(this.state=3),Promise.resolve()))),this.listener.Ro())))})),this.stream.mo((e=>{n((()=>this.I_(e)))})),this.stream.onMessage((e=>{n((()=>1==++this.e_?this.E_(e):this.onNext(e)))}))}i_(){this.state=5,this.t_.Go((async()=>{this.state=0,this.start()}))}I_(e){return I("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget((()=>this.Yo===e?t():(I("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class ri extends ni{constructor(e,t,n,r,o,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,i),this.serializer=o}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=Or(this.serializer,e),n=function(e){if(!("targetChange"in e))return Y.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Y.min():t.readTime?Cr(t.readTime):Y.min()}(e);return this.listener.d_(t,n)}A_(e){const t={};t.database=Vr(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=Lt(r)?{documents:Mr(e,r)}:{query:Wr(e,r)._t},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Er(e,t.resumeToken);const r=wr(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(Y.min())>0){n.readTime=Sr(e,t.snapshotVersion.toTimestamp());const r=wr(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=jr(this.serializer,e);n&&(t.labels=n),this.a_(t)}R_(e){const t={};t.database=Vr(this.serializer),t.removeTarget=e,this.a_(t)}}class oi extends ni{constructor(e,t,n,r,o,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,i),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return R(!!e.streamToken),this.lastStreamToken=e.streamToken,R(!e.writeResults||0===e.writeResults.length),this.listener.f_()}onNext(e){R(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=Nr(e.writeResults,e.commitTime),n=Cr(e.commitTime);return this.listener.g_(n,t)}p_(){const e={};e.database=Vr(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>Lr(this.serializer,e)))};this.a_(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new P(D.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,n,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,i])=>this.connection.Mo(e,Ir(t,n),r,o,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new P(D.UNKNOWN,e.toString())}))}Lo(e,t,n,r,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Lo(e,Ir(t,n),r,i,a,o))).catch((e=>{throw"FirebaseError"===e.name?(e.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new P(D.UNKNOWN,e.toString())}))}terminate(){this.y_=!0,this.connection.terminate()}}class ai{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){0===this.S_&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve()))))}M_(e){"Online"===this.state?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,"Online"===e&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(x(t),this.D_=!1):I("OnlineStateTracker",t)}x_(){null!==this.b_&&(this.b_.cancel(),this.b_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,t,n,r,o){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o((e=>{n.enqueueAndForget((async()=>{mi(this)&&(I("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=V(e);t.L_.add(4),await ui(t),t.q_.set("Unknown"),t.L_.delete(4),await li(t)}(this))}))})),this.q_=new ai(n,r)}}async function li(e){if(mi(e))for(const t of e.B_)await t(!0)}async function ui(e){for(const t of e.B_)await t(!1)}function ci(e,t){const n=V(e);n.N_.has(t.targetId)||(n.N_.set(t.targetId,t),vi(n)?pi(n):Oi(n).r_()&&hi(n,t))}function di(e,t){const n=V(e),r=Oi(n);n.N_.delete(t),r.r_()&&fi(n,t),0===n.N_.size&&(r.r_()?r.o_():mi(n)&&n.q_.set("Unknown"))}function hi(e,t){if(e.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Y.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Oi(e).A_(t)}function fi(e,t){e.Q_.xe(t),Oi(e).R_(t)}function pi(e){e.Q_=new fr({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>e.N_.get(t)||null,tt:()=>e.datastore.serializer.databaseId}),Oi(e).start(),e.q_.v_()}function vi(e){return mi(e)&&!Oi(e).n_()&&e.N_.size>0}function mi(e){return 0===V(e).L_.size}function gi(e){e.Q_=void 0}async function yi(e){e.q_.set("Online")}async function bi(e){e.N_.forEach(((t,n)=>{hi(e,t)}))}async function wi(e,t){gi(e),vi(e)?(e.q_.M_(t),pi(e)):e.q_.set("Unknown")}async function Si(e,t,n){if(e.q_.set("Online"),t instanceof dr&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.N_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.N_.delete(r),e.Q_.removeTarget(r))}(e,t)}catch(n){I("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Ei(e,n)}else if(t instanceof ur?e.Q_.Ke(t):t instanceof cr?e.Q_.He(t):e.Q_.We(t),!n.isEqual(Y.min()))try{const t=await Oo(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Q_.rt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const o=e.N_.get(r);o&&e.N_.set(r,o.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.N_.get(t);if(!r)return;e.N_.set(t,r.withResumeToken(De.EMPTY_BYTE_STRING,r.snapshotVersion)),fi(e,t);const o=new Jr(r.target,t,n,r.sequenceNumber);hi(e,o)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){I("RemoteStore","Failed to raise snapshot:",t),await Ei(e,t)}}async function Ei(e,t,n){if(!de(t))throw t;e.L_.add(1),await ui(e),e.q_.set("Offline"),n||(n=()=>Oo(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{I("RemoteStore","Retrying IndexedDB access"),await n(),e.L_.delete(1),await li(e)}))}function _i(e,t){return t().catch((n=>Ei(e,n,t)))}async function Ci(e){const t=V(e),n=Li(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;ki(t);)try{const e=await Mo(t.localStore,r);if(null===e){0===t.O_.length&&n.o_();break}r=e.batchId,Ii(t,e)}catch(e){await Ei(t,e)}xi(t)&&Ti(t)}function ki(e){return mi(e)&&e.O_.length<10}function Ii(e,t){e.O_.push(t);const n=Li(e);n.r_()&&n.V_&&n.m_(t.mutations)}function xi(e){return mi(e)&&!Li(e).n_()&&e.O_.length>0}function Ti(e){Li(e).start()}async function Ai(e){Li(e).p_()}async function Fi(e){const t=Li(e);for(const n of e.O_)t.m_(n.mutations)}async function Ri(e,t,n){const r=e.O_.shift(),o=qn.from(r,t,n);await _i(e,(()=>e.remoteSyncer.applySuccessfulWrite(o))),await Ci(e)}async function Vi(e,t){t&&Li(e).V_&&await async function(e,t){if(function(e){return Qn(e)&&e!==D.ABORTED}(t.code)){const n=e.O_.shift();Li(e).s_(),await _i(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Ci(e)}}(e,t),xi(e)&&Ti(e)}async function Di(e,t){const n=V(e);n.asyncQueue.verifyOperationInProgress(),I("RemoteStore","RemoteStore received new credentials");const r=mi(n);n.L_.add(3),await ui(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.L_.delete(3),await li(n)}async function Pi(e,t){const n=V(e);t?(n.L_.delete(2),await li(n)):t||(n.L_.add(2),await ui(n),n.q_.set("Unknown"))}function Oi(e){return e.K_||(e.K_=function(e,t,n){const r=V(e);return r.w_(),new ri(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Eo:yi.bind(null,e),Ro:bi.bind(null,e),mo:wi.bind(null,e),d_:Si.bind(null,e)}),e.B_.push((async t=>{t?(e.K_.s_(),vi(e)?pi(e):e.q_.set("Unknown")):(await e.K_.stop(),gi(e))}))),e.K_}function Li(e){return e.U_||(e.U_=function(e,t,n){const r=V(e);return r.w_(),new oi(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Ai.bind(null,e),mo:Vi.bind(null,e),f_:Fi.bind(null,e),g_:Ri.bind(null,e)}),e.B_.push((async t=>{t?(e.U_.s_(),await Ci(e)):(await e.U_.stop(),e.O_.length>0&&(I("RemoteStore",`Stopping write stream with ${e.O_.length} pending writes`),e.O_=[]))}))),e.U_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ni{constructor(e,t,n,r,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=o,this.deferred=new O,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,o){const i=Date.now()+n,a=new Ni(e,t,i,r,o);return a.start(n),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new P(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Mi(e,t){if(x("AsyncQueue",`${t}: ${e}`),de(e))return new P(D.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e){this.comparator=e?(t,n)=>e(t,n)||ee.comparator(t.key,n.key):(e,t)=>ee.comparator(e.key,t.key),this.keyedMap=rn(),this.sortedSet=new Ie(this.comparator)}static emptySet(e){return new Wi(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Wi))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Wi;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(){this.W_=new Ie(ee.comparator)}track(e){const t=e.doc.key,n=this.W_.get(t);n?0!==e.type&&3===n.type?this.W_=this.W_.insert(t,e):3===e.type&&1!==n.type?this.W_=this.W_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.W_=this.W_.remove(t):1===e.type&&2===n.type?this.W_=this.W_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):F():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal(((t,n)=>{e.push(n)})),e}}class ji{constructor(e,t,n,r,o,i,a,s,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=o,this.fromCache=i,this.syncStateChanged=a,this.excludesMetadataChanges=s,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,o){const i=[];return t.forEach((e=>{i.push({type:0,doc:e})})),new ji(e,t,Wi.emptySet(t),i,n,r,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ht(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some((e=>e.J_()))}}class Ui{constructor(){this.queries=zi(),this.onlineState="Unknown",this.Y_=new Set}terminate(){!function(e,t){const n=V(e),r=n.queries;n.queries=zi(),r.forEach(((e,n)=>{for(const r of n.j_)r.onError(t)}))}(this,new P(D.ABORTED,"Firestore shutting down"))}}function zi(){return new Zt((e=>qt(e)),Ht)}async function Ki(e,t){const n=V(e);let r=3;const o=t.query;let i=n.queries.get(o);i?!i.H_()&&t.J_()&&(r=2):(i=new $i,r=t.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(o,!0);break;case 1:i.z_=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(e){const n=Mi(e,`Initialization of query '${Gt(t.query)}' failed`);return void t.onError(n)}n.queries.set(o,i),i.j_.push(t),t.Z_(n.onlineState),i.z_&&t.X_(i.z_)&&Yi(n)}async function Hi(e,t){const n=V(e),r=t.query;let o=3;const i=n.queries.get(r);if(i){const e=i.j_.indexOf(t);e>=0&&(i.j_.splice(e,1),0===i.j_.length?o=t.J_()?0:1:!i.H_()&&t.J_()&&(o=2))}switch(o){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function qi(e,t){const n=V(e);let r=!1;for(const o of t){const e=o.query,t=n.queries.get(e);if(t){for(const e of t.j_)e.X_(o)&&(r=!0);t.z_=o}}r&&Yi(n)}function Gi(e,t,n){const r=V(e),o=r.queries.get(t);if(o)for(const i of o.j_)i.onError(n);r.queries.delete(t)}function Yi(e){e.Y_.forEach((e=>{e.next()}))}var Xi,Ji;(Ji=Xi||(Xi={})).ea="default",Ji.Cache="cache";class Qi{constructor(e,t,n){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new ji(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache)return!0;if(!this.J_())return!0;const n="Offline"!==t;return(!this.options._a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}oa(e){e=ji.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Xi.Cache}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zi{constructor(e){this.key=e}}class ea{constructor(e){this.key=e}}class ta{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=dn(),this.mutatedKeys=dn(),this.Aa=Jt(e),this.Ra=new Wi(this.Aa)}get Va(){return this.Ta}ma(e,t){const n=t?t.fa:new Bi,r=t?t.Ra:this.Ra;let o=t?t.mutatedKeys:this.mutatedKeys,i=r,a=!1;const s="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),c=Yt(this.query,t)?t:null,d=!!u&&this.mutatedKeys.has(u.key),h=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations);let f=!1;u&&c?u.data.isEqual(c.data)?d!==h&&(n.track({type:3,doc:c}),f=!0):this.ga(u,c)||(n.track({type:2,doc:c}),f=!0,(s&&this.Aa(c,s)>0||l&&this.Aa(c,l)<0)&&(a=!0)):!u&&c?(n.track({type:0,doc:c}),f=!0):u&&!c&&(n.track({type:1,doc:u}),f=!0,(s||l)&&(a=!0)),f&&(c?(i=i.add(c),o=h?o.add(e):o.delete(e)):(i=i.delete(e),o=o.delete(e)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const e="F"===this.query.limitType?i.last():i.first();i=i.delete(e.key),o=o.delete(e.key),n.track({type:1,doc:e})}return{Ra:i,fa:n,ns:a,mutatedKeys:o}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const i=e.fa.G_();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Aa(e.doc,t.doc))),this.pa(n),r=null!=r&&r;const a=t&&!r?this.ya():[],s=0===this.da.size&&this.current&&!r?1:0,l=s!==this.Ea;return this.Ea=s,0!==i.length||l?{snapshot:new ji(this.query,e.Ra,o,i,e.mutatedKeys,0===s,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Bi,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach((e=>this.Ta=this.Ta.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Ta=this.Ta.delete(e))),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=dn(),this.Ra.forEach((e=>{this.Sa(e.key)&&(this.da=this.da.add(e.key))}));const t=[];return e.forEach((e=>{this.da.has(e)||t.push(new ea(e))})),this.da.forEach((n=>{e.has(n)||t.push(new Zi(n))})),t}ba(e){this.Ta=e.Ts,this.da=dn();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return ji.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,0===this.Ea,this.hasCachedResults)}}class na{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class ra{constructor(e){this.key=e,this.va=!1}}class oa{constructor(e,t,n,r,o,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=o,this.maxConcurrentLimboResolutions=i,this.Ca={},this.Fa=new Zt((e=>qt(e)),Ht),this.Ma=new Map,this.xa=new Set,this.Oa=new Ie(ee.comparator),this.Na=new Map,this.La=new yo,this.Ba={},this.ka=new Map,this.qa=io.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return!0===this.Qa}}async function ia(e,t,n=!0){const r=xa(e);let o;const i=r.Fa.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),o=i.view.Da()):o=await sa(r,t,n,!0),o}async function aa(e,t){const n=xa(e);await sa(n,t,!0,!1)}async function sa(e,t,n,r){const o=await Wo(e.localStore,Ut(t)),i=o.targetId,a=e.sharedClientState.addLocalQueryTarget(i,n);let s;return r&&(s=await la(e,t,i,"current"===a,o.resumeToken)),e.isPrimaryClient&&n&&ci(e.remoteStore,o),s}async function la(e,t,n,r,o){e.Ka=(t,n,r)=>async function(e,t,n,r){let o=t.view.ma(n);o.ns&&(o=await jo(e.localStore,t.query,!1).then((({documents:e})=>t.view.ma(e,o))));const i=r&&r.targetChanges.get(t.targetId),a=r&&null!=r.targetMismatches.get(t.targetId),s=t.view.applyChanges(o,e.isPrimaryClient,i,a);return Sa(e,t.targetId,s.wa),s.snapshot}(e,t,n,r);const i=await jo(e.localStore,t,!0),a=new ta(t,i.Ts),s=a.ma(i.documents),l=lr.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,o),u=a.applyChanges(s,e.isPrimaryClient,l);Sa(e,n,u.wa);const c=new na(t,n,a);return e.Fa.set(t,c),e.Ma.has(n)?e.Ma.get(n).push(t):e.Ma.set(n,[t]),u.snapshot}async function ua(e,t,n){const r=V(e),o=r.Fa.get(t),i=r.Ma.get(o.targetId);if(i.length>1)return r.Ma.set(o.targetId,i.filter((e=>!Ht(e,t)))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(o.targetId),r.sharedClientState.isActiveQueryTarget(o.targetId)||await Bo(r.localStore,o.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(o.targetId),n&&di(r.remoteStore,o.targetId),ba(r,o.targetId)})).catch(le)):(ba(r,o.targetId),await Bo(r.localStore,o.targetId,!0))}async function ca(e,t){const n=V(e),r=n.Fa.get(t),o=n.Ma.get(r.targetId);n.isPrimaryClient&&1===o.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),di(n.remoteStore,r.targetId))}async function da(e,t,n){const r=Ta(e);try{const e=await function(e,t){const n=V(e),r=G.now(),o=t.reduce(((e,t)=>e.add(t.key)),dn());let i,a;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let s=tn(),l=dn();return n.cs.getEntries(e,o).next((e=>{s=e,s.forEach(((e,t)=>{t.isValidDocument()||(l=l.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,s))).next((o=>{i=o;const a=[];for(const e of t){const t=Nn(e,i.get(e.key).overlayedDocument);null!=t&&a.push(new Bn(e.key,t,lt(t.value.mapValue),Rn.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,a,t)})).next((t=>{a=t;const r=t.applyToLocalDocumentSet(i,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:a.batchId,changes:on(i)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Ba[e.currentUser.toKey()];r||(r=new Ie(H)),r=r.insert(t,n),e.Ba[e.currentUser.toKey()]=r}(r,e.batchId,n),await Ca(r,e.changes),await Ci(r.remoteStore)}catch(e){const t=Mi(e,"Failed to persist write");n.reject(t)}}async function ha(e,t){const n=V(e);try{const e=await Lo(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Na.get(t);r&&(R(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.va=!0:e.modifiedDocuments.size>0?R(r.va):e.removedDocuments.size>0&&(R(r.va),r.va=!1))})),await Ca(n,e,t)}catch(e){await le(e)}}function fa(e,t,n){const r=V(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Fa.forEach(((n,r)=>{const o=r.view.Z_(t);o.snapshot&&e.push(o.snapshot)})),function(e,t){const n=V(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const o of n.j_)o.Z_(t)&&(r=!0)})),r&&Yi(n)}(r.eventManager,t),e.length&&r.Ca.d_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function pa(e,t,n){const r=V(e);r.sharedClientState.updateQueryState(t,"rejected",n);const o=r.Na.get(t),i=o&&o.key;if(i){let e=new Ie(ee.comparator);e=e.insert(i,ut.newNoDocument(i,Y.min()));const n=dn().add(i),o=new sr(Y.min(),new Map,new Ie(H),e,n);await ha(r,o),r.Oa=r.Oa.remove(i),r.Na.delete(t),_a(r)}else await Bo(r.localStore,t,!1).then((()=>ba(r,t,n))).catch(le)}async function va(e,t){const n=V(e),r=t.batch.batchId;try{const e=await Po(n.localStore,t);ya(n,r,null),ga(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ca(n,e)}catch(e){await le(e)}}async function ma(e,t,n){const r=V(e);try{const e=await function(e,t){const n=V(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(R(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);ya(r,t,n),ga(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Ca(r,e)}catch(n){await le(n)}}function ga(e,t){(e.ka.get(t)||[]).forEach((e=>{e.resolve()})),e.ka.delete(t)}function ya(e,t,n){const r=V(e);let o=r.Ba[r.currentUser.toKey()];if(o){const e=o.get(t);e&&(n?e.reject(n):e.resolve(),o=o.remove(t)),r.Ba[r.currentUser.toKey()]=o}}function ba(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Ma.get(t))e.Fa.delete(r),n&&e.Ca.$a(r,n);e.Ma.delete(t),e.isPrimaryClient&&e.La.gr(t).forEach((t=>{e.La.containsKey(t)||wa(e,t)}))}function wa(e,t){e.xa.delete(t.path.canonicalString());const n=e.Oa.get(t);null!==n&&(di(e.remoteStore,n),e.Oa=e.Oa.remove(t),e.Na.delete(n),_a(e))}function Sa(e,t,n){for(const r of n)r instanceof Zi?(e.La.addReference(r.key,t),Ea(e,r)):r instanceof ea?(I("SyncEngine","Document no longer in limbo: "+r.key),e.La.removeReference(r.key,t),e.La.containsKey(r.key)||wa(e,r.key)):F()}function Ea(e,t){const n=t.key,r=n.path.canonicalString();e.Oa.get(n)||e.xa.has(r)||(I("SyncEngine","New document in limbo: "+n),e.xa.add(r),_a(e))}function _a(e){for(;e.xa.size>0&&e.Oa.size<e.maxConcurrentLimboResolutions;){const t=e.xa.values().next().value;e.xa.delete(t);const n=new ee(J.fromString(t)),r=e.qa.next();e.Na.set(r,new ra(n)),e.Oa=e.Oa.insert(n,r),ci(e.remoteStore,new Jr(Ut(Wt(n.path)),r,"TargetPurposeLimboResolution",he.oe))}}async function Ca(e,t,n){const r=V(e),o=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach(((e,s)=>{a.push(r.Ka(s,t,n).then((e=>{var t;if((e||n)&&r.isPrimaryClient){const o=e?!e.fromCache:null===(t=null==n?void 0:n.targetChanges.get(s.targetId))||void 0===t?void 0:t.current;r.sharedClientState.updateQueryState(s.targetId,o?"current":"not-current")}if(e){o.push(e);const t=To.Wi(s.targetId,e);i.push(t)}})))})),await Promise.all(a),r.Ca.d_(o),await async function(e,t){const n=V(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>ue.forEach(t,(t=>ue.forEach(t.$i,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>ue.forEach(t.Ui,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!de(e))throw e;I("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.os.get(e),r=t.snapshotVersion,o=t.withLastLimboFreeSnapshotVersion(r);n.os=n.os.insert(e,o)}}}(r.localStore,i))}async function ka(e,t){const n=V(e);if(!n.currentUser.isEqual(t)){I("SyncEngine","User change. New user:",t.toKey());const e=await Do(n.localStore,t);n.currentUser=t,function(e,t){e.ka.forEach((e=>{e.forEach((e=>{e.reject(new P(D.CANCELLED,t))}))})),e.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Ca(n,e.hs)}}function Ia(e,t){const n=V(e),r=n.Na.get(t);if(r&&r.va)return dn().add(r.key);{let e=dn();const r=n.Ma.get(t);if(!r)return e;for(const t of r){const r=n.Fa.get(t);e=e.unionWith(r.view.Va)}return e}}function xa(e){const t=V(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=ha.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ia.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=pa.bind(null,t),t.Ca.d_=qi.bind(null,t.eventManager),t.Ca.$a=Gi.bind(null,t.eventManager),t}function Ta(e){const t=V(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=va.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ma.bind(null,t),t}class Aa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ei(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return Vo(this.persistence,new Fo,e.initialUser,this.serializer)}Ga(e){return new Co(Io.Zr,this.serializer)}Wa(e){return new zo}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Aa.provider={build:()=>new Aa};class Fa extends Aa{constructor(e){super(),this.cacheSizeBytes=e}ja(e,t){R(this.persistence.referenceDelegate instanceof xo);const n=this.persistence.referenceDelegate.garbageCollector;return new lo(n,e.asyncQueue,t)}Ga(e){const t=void 0!==this.cacheSizeBytes?oo.withCacheSize(this.cacheSizeBytes):oo.DEFAULT;return new Co((e=>xo.Zr(e,t)),this.serializer)}}class Ra{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>fa(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=ka.bind(null,this.syncEngine),await Pi(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Ui}()}createDatastore(e){const t=ei(e.databaseInfo.databaseId),n=function(e){return new Qo(e)}(e.databaseInfo);return function(e,t,n,r){return new ii(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,r,o){return new si(e,t,n,r,o)}(this.localStore,this.datastore,e.asyncQueue,(e=>fa(this.syncEngine,e,0)),function(){return Ho.D()?new Ho:new Ko}())}createSyncEngine(e,t){return function(e,t,n,r,o,i,a){const s=new oa(e,t,n,r,o,i);return a&&(s.Qa=!0),s}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){const t=V(e);I("RemoteStore","RemoteStore shutting down."),t.L_.add(5),await ui(t),t.k_.shutdown(),t.q_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}Ra.provider={build:()=>new Ra};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Va{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):x("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Da{constructor(e,t,n,r,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=E.UNAUTHENTICATED,this.clientId=K.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,(async e=>{I("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(I("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new O;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Mi(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Pa(e,t){e.asyncQueue.verifyOperationInProgress(),I("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await Do(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Oa(e,t){e.asyncQueue.verifyOperationInProgress();const n=await La(e);I("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener((e=>Di(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Di(t.remoteStore,n))),e._onlineComponents=t}async function La(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){I("FirestoreClient","Using user provided OfflineComponentProvider");try{await Pa(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(e){return"FirebaseError"===e.name?e.code===D.FAILED_PRECONDITION||e.code===D.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}(n))throw n;T("Error using user provided cache. Falling back to memory cache: "+n),await Pa(e,new Aa)}}else I("FirestoreClient","Using default OfflineComponentProvider"),await Pa(e,new Fa(void 0));return e._offlineComponents}async function Na(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(I("FirestoreClient","Using user provided OnlineComponentProvider"),await Oa(e,e._uninitializedComponentsProvider._online)):(I("FirestoreClient","Using default OnlineComponentProvider"),await Oa(e,new Ra))),e._onlineComponents}function Ma(e){return Na(e).then((e=>e.syncEngine))}async function Wa(e){const t=await Na(e),n=t.eventManager;return n.onListen=ia.bind(null,t.syncEngine),n.onUnlisten=ua.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=aa.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=ca.bind(null,t.syncEngine),n}function Ba(e,t,n={}){const r=new O;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,o){const i=new Va({next:s=>{i.Za(),t.enqueueAndForget((()=>Hi(e,a)));const l=s.docs.has(n);!l&&s.fromCache?o.reject(new P(D.UNAVAILABLE,"Failed to get document because the client is offline.")):l&&s.fromCache&&r&&"server"===r.source?o.reject(new P(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):o.resolve(s)},error:e=>o.reject(e)}),a=new Qi(Wt(n.path),i,{includeMetadataChanges:!0,_a:!0});return Ki(e,a)}(await Wa(e),e.asyncQueue,t,n,r))),r.promise}function ja(e,t,n={}){const r=new O;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,o){const i=new Va({next:n=>{i.Za(),t.enqueueAndForget((()=>Hi(e,a))),n.fromCache&&"server"===r.source?o.reject(new P(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):o.resolve(n)},error:e=>o.reject(e)}),a=new Qi(n,i,{includeMetadataChanges:!0,_a:!0});return Ki(e,a)}(await Wa(e),e.asyncQueue,t,n,r))),r.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $a(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Ua=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(e,t,n){if(!n)throw new P(D.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Ka(e,t,n,r){if(!0===t&&!0===r)throw new P(D.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Ha(e){if(!ee.isDocumentKey(e))throw new P(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function qa(e){if(ee.isDocumentKey(e))throw new P(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Ga(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":F()}function Ya(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new P(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ga(e);throw new P(D.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xa{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new P(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new P(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ka("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$a(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new P(D.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new P(D.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new P(D.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ja{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xa({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new P(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new P(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xa(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new N;switch(e.type){case"firstParty":return new j(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new P(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Ua.get(e);t&&(I("ComponentProvider","Removing Datastore"),Ua.delete(e),t.terminate())}(this),Promise.resolve()}}function Qa(e,t,n,r={}){var o;const i=(e=Ya(e,Ja))._getSettings(),a=`${t}:${n}`;if("firestore.googleapis.com"!==i.host&&i.host!==a&&T("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=E.MOCK_USER;else{t=(0,l.Fy)(r.mockUserToken,null===(o=e._app)||void 0===o?void 0:o.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new P(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new E(i)}e._authCredentials=new M(new L(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Za(this.firestore,e,this._query)}}class es{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ts(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new es(this.firestore,e,this._key)}}class ts extends Za{constructor(e,t,n){super(e,t,Wt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new es(this.firestore,null,new ee(e))}withConverter(e){return new ts(this.firestore,e,this._path)}}function ns(e,t,...n){if(e=(0,l.Ku)(e),za("collection","path",t),e instanceof Ja){const r=J.fromString(t,...n);return qa(r),new ts(e,null,r)}{if(!(e instanceof es||e instanceof ts))throw new P(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(J.fromString(t,...n));return qa(r),new ts(e.firestore,null,r)}}function rs(e,t,...n){if(e=(0,l.Ku)(e),1===arguments.length&&(t=K.newId()),za("doc","path",t),e instanceof Ja){const r=J.fromString(t,...n);return Ha(r),new es(e,null,new ee(r))}{if(!(e instanceof es||e instanceof ts))throw new P(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(J.fromString(t,...n));return Ha(r),new es(e.firestore,e instanceof ts?e.converter:null,new ee(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class os{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new ti(this,"async_queue_retry"),this.Vu=()=>{const e=Zo();e&&I("AsyncQueue","Visibility state changed to "+e.visibilityState),this.t_.jo()},this.mu=e;const t=Zo();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Zo();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise((()=>{}));const t=new O;return this.gu((()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Pu.push(e),this.pu())))}async pu(){if(0!==this.Pu.length){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!de(e))throw e;I("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go((()=>this.pu()))}}gu(e){const t=this.mu.then((()=>(this.du=!0,e().catch((e=>{this.Eu=e,this.du=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw x("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.du=!1,e))))));return this.mu=t,t}enqueueAfterDelay(e,t,n){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const r=Ni.createAndSchedule(this,e,t,n,(e=>this.yu(e)));return this.Tu.push(r),r}fu(){this.Eu&&F()}verifyOperationInProgress(){}async wu(){let e;do{e=this.mu,await e}while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then((()=>{this.Tu.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.Tu)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.wu()}))}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class is extends Ja{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new os,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new os(e),this._firestoreClient=void 0,await e}}}function as(e,t){const n="object"==typeof e?e:(0,i.Sx)(),r="string"==typeof e?e:t||"(default)",o=(0,i.j6)(n,"firestore").getImmediate({identifier:r});if(!o._initialized){const e=(0,l.yU)("firestore");e&&Qa(o,...e)}return o}function ss(e){if(e._terminated)throw new P(D.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||ls(e),e._firestoreClient}function ls(e){var t,n,r;const o=e._freezeSettings(),i=function(e,t,n,r){return new je(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,$a(r.experimentalLongPollingOptions),r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,o);e._componentsProvider||(null===(n=o.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=o.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),e._firestoreClient=new Da(e._authCredentials,e._appCheckCredentials,e._queue,i,e._componentsProvider&&function(e){const t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class us{constructor(e){this._byteString=e}static fromBase64String(e){try{return new us(De.fromBase64String(e))}catch(e){throw new P(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new us(De.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new P(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Z(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ds{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new P(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new P(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this._values=(e||[]).map((e=>e))}toArray(){return this._values.map((e=>e))}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=/^__.*__$/;class vs{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Bn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function ms(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class gs{constructor(e,t,n,r,o,i){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===o&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new gs(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Fu({path:n,xu:!1});return r.Ou(e),r}Nu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Fu({path:n,xu:!1});return r.vu(),r}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Fs(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(0===e.length)throw this.Bu("Document fields must not be empty");if(ms(this.Cu)&&ps.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class ys{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||ei(e)}Qu(e,t,n,r=!1){return new gs({Cu:e,methodName:t,qu:n,path:Z.emptyPath(),xu:!1,ku:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function bs(e){const t=e._freezeSettings(),n=ei(e._databaseId);return new ys(e._databaseId,!!t.ignoreUndefinedProperties,n)}class ws extends ds{_toFieldTransform(e){if(2!==e.Cu)throw 1===e.Cu?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ws}}function Ss(e,t,n,r){const o=e.Qu(1,t,n);Is("Data must be an object, but it was:",o,r);const i=[],a=st.empty();Ce(r,((e,r)=>{const s=As(t,e,n);r=(0,l.Ku)(r);const u=o.Nu(s);if(r instanceof ws)i.push(s);else{const e=_s(r,u);null!=e&&(i.push(s),a.set(s,e))}}));const s=new Re(i);return new vs(a,s,o.fieldTransforms)}function Es(e,t,n,r,o,i){const a=e.Qu(1,t,n),s=[xs(t,r,n)],u=[o];if(i.length%2!=0)throw new P(D.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let l=0;l<i.length;l+=2)s.push(xs(t,i[l])),u.push(i[l+1]);const c=[],d=st.empty();for(let f=s.length-1;f>=0;--f)if(!Rs(c,s[f])){const e=s[f];let t=u[f];t=(0,l.Ku)(t);const n=a.Nu(e);if(t instanceof ws)c.push(e);else{const r=_s(t,n);null!=r&&(c.push(e),d.set(e,r))}}const h=new Re(c);return new vs(d,h,a.fieldTransforms)}function _s(e,t){if(ks(e=(0,l.Ku)(e)))return Is("Unsupported field value:",t,e),Cs(e,t);if(e instanceof ds)return function(e,t){if(!ms(t.Cu))throw t.Bu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Bu(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.xu&&4!==t.Cu)throw t.Bu("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const o of e){let e=_s(o,t.Lu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,l.Ku)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return mn(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=G.fromDate(e);return{timestampValue:Sr(t.serializer,n)}}if(e instanceof G){const n=new G(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Sr(t.serializer,n)}}if(e instanceof hs)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof us)return{bytesValue:Er(t.serializer,e._byteString)};if(e instanceof es){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Bu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:kr(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof fs)return function(e,t){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:e.toArray().map((e=>{if("number"!=typeof e)throw t.Bu("VectorValues must only contain numeric values.");return pn(t.serializer,e)}))}}}}}}(e,t);throw t.Bu(`Unsupported field value: ${Ga(e)}`)}(e,t)}function Cs(e,t){const n={};return ke(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ce(e,((e,r)=>{const o=_s(r,t.Mu(e));null!=o&&(n[e]=o)})),{mapValue:{fields:n}}}function ks(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof G||e instanceof hs||e instanceof us||e instanceof es||e instanceof ds||e instanceof fs)}function Is(e,t,n){if(!ks(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Ga(n);throw"an object"===r?t.Bu(e+" a custom object"):t.Bu(e+" "+r)}}function xs(e,t,n){if((t=(0,l.Ku)(t))instanceof cs)return t._internalPath;if("string"==typeof t)return As(e,t);throw Fs("Field path arguments must be of type string or ",e,!1,void 0,n)}const Ts=new RegExp("[~\\*/\\[\\]]");function As(e,t,n){if(t.search(Ts)>=0)throw Fs(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new cs(...t.split("."))._internalPath}catch(r){throw Fs(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Fs(e,t,n,r,o){const i=r&&!r.isEmpty(),a=void 0!==o;let s=`Function ${t}() called with invalid data`;n&&(s+=" (via `toFirestore()`)"),s+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${o}`),l+=")"),new P(D.INVALID_ARGUMENT,s+e+l)}function Rs(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,t,n,r,o){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new es(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Ds(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ps("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Ds extends Vs{data(){return super.data()}}function Ps(e,t){return"string"==typeof t?As(e,t):t instanceof cs?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new P(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ls{convertValue(e,t="none"){switch(ze(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ne(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw F()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Ce(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertVectorValue(e){var t,n,r;const o=null===(r=null===(n=null===(t=e.fields)||void 0===t?void 0:t.value.arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map((e=>Le(e.doubleValue)));return new fs(o)}convertGeoPoint(e){return new hs(Le(e.latitude),Le(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=We(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Be(e));default:return null}}convertTimestamp(e){const t=Oe(e);return new G(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=J.fromString(e);R(Xr(n));const r=new $e(n.get(1),n.get(3)),o=new ee(n.popFirst(5));return r.isEqual(t)||x(`Document ${o} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ns{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ms extends Vs{constructor(e,t,n,r,o,i){super(e,t,n,r,i),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ws(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Ps("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Ws extends Ms{data(e={}){return super.data(e)}}class Bs{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Ns(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Ws(this._firestore,this._userDataWriter,n.key,n,new Ns(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new P(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new Ws(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Ns(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new Ws(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Ns(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let o=-1,i=-1;return 0!==t.type&&(o=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),i=n.indexOf(t.doc.key)),{type:js(t.type),doc:r,oldIndex:o,newIndex:i}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function js(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $s(e){e=Ya(e,es);const t=Ya(e.firestore,is);return Ba(ss(t),e._key).then((n=>qs(t,e,n)))}class Us extends Ls{constructor(e){super(),this.firestore=e}convertBytes(e){return new us(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new es(this.firestore,null,t)}}function zs(e){e=Ya(e,Za);const t=Ya(e.firestore,is),n=ss(t),r=new Us(t);return Os(e._query),ja(n,e._query).then((n=>new Bs(t,r,e,n)))}function Ks(e,t,n,...r){e=Ya(e,es);const o=Ya(e.firestore,is),i=bs(o);let a;return a="string"==typeof(t=(0,l.Ku)(t))||t instanceof cs?Es(i,"updateDoc",e._key,t,n,r):Ss(i,"updateDoc",e._key,t),Hs(o,[a.toMutation(e._key,Rn.exists(!0))])}function Hs(e,t){return function(e,t){const n=new O;return e.asyncQueue.enqueueAndForget((async()=>da(await Ma(e),t,n))),n.promise}(ss(e),t)}function qs(e,t,n){const r=n.docs.get(t._key),o=new Us(e);return new Ms(e,o,t._key,r,new Ns(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new WeakMap;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
/**
 * WCAG 3.0 APCA perceptual contrast algorithm from https://github.com/Myndex/SAPC-APCA
 * @licence https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @see https://www.w3.org/WAI/GL/task-forces/silver/wiki/Visual_Contrast_of_Text_Subgroup
 */
const r=2.4,o=.2126729,i=.7151522,a=.072175,s=.55,l=.58,u=.57,c=.62,d=.03,h=1.45,f=5e-4,p=1.25,v=1.25,m=.078,g=12.82051282051282,y=.06,b=.001;function w(e,t){const n=(e.r/255)**r,w=(e.g/255)**r,S=(e.b/255)**r,E=(t.r/255)**r,_=(t.g/255)**r,C=(t.b/255)**r;let k,I=n*o+w*i+S*a,x=E*o+_*i+C*a;if(I<=d&&(I+=(d-I)**h),x<=d&&(x+=(d-x)**h),Math.abs(x-I)<f)return 0;if(x>I){const e=(x**s-I**l)*p;k=e<b?0:e<m?e-e*g*y:e-y}else{const e=(x**c-I**u)*v;k=e>-b?0:e>-m?e-e*g*y:e+y}return 100*k}var S=n(7354),E=n(9094);const _=.20689655172413793,C=e=>e>_**3?Math.cbrt(e):e/(3*_**2)+4/29,k=e=>e>_?e**3:3*_**2*(e-4/29);function I(e){const t=C,n=t(e[1]);return[116*n-16,500*(t(e[0]/.95047)-n),200*(n-t(e[2]/1.08883))]}function x(e){const t=k,n=(e[0]+16)/116;return[.95047*t(n+e[1]/500),t(n),1.08883*t(n-e[2]/200)]}const T=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],A=e=>e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055,F=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],R=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function V(e){const t=Array(3),n=A,r=T;for(let o=0;o<3;++o)t[o]=Math.round(255*(0,E.qE)(n(r[o][0]*e[0]+r[o][1]*e[1]+r[o][2]*e[2])));return{r:t[0],g:t[1],b:t[2]}}function D(e){let{r:t,g:n,b:r}=e;const o=[0,0,0],i=R,a=F;t=i(t/255),n=i(n/255),r=i(r/255);for(let s=0;s<3;++s)o[s]=a[s][0]*t+a[s][1]*n+a[s][2]*r;return o}function P(e){return!!e&&/^(#|var\(--|(rgb|hsl)a?\()/.test(e)}function O(e){return P(e)&&!/^((rgb|hsl)a?\()?var\(--/.test(e)}const L=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,N={rgb:(e,t,n,r)=>({r:e,g:t,b:n,a:r}),rgba:(e,t,n,r)=>({r:e,g:t,b:n,a:r}),hsl:(e,t,n,r)=>B({h:e,s:t,l:n,a:r}),hsla:(e,t,n,r)=>B({h:e,s:t,l:n,a:r}),hsv:(e,t,n,r)=>W({h:e,s:t,v:n,a:r}),hsva:(e,t,n,r)=>W({h:e,s:t,v:n,a:r})};function M(e){if("number"===typeof e)return(isNaN(e)||e<0||e>16777215)&&(0,S.OP)(`'${e}' is not a valid hex color`),{r:(16711680&e)>>16,g:(65280&e)>>8,b:255&e};if("string"===typeof e&&L.test(e)){const{groups:t}=e.match(L),{fn:n,values:r}=t,o=r.split(/,\s*/).map((e=>e.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(e)/100:parseFloat(e)));return N[n](...o)}if("string"===typeof e){let t=e.startsWith("#")?e.slice(1):e;[3,4].includes(t.length)?t=t.split("").map((e=>e+e)).join(""):[6,8].includes(t.length)||(0,S.OP)(`'${e}' is not a valid hex(a) color`);const n=parseInt(t,16);return(isNaN(n)||n<0||n>4294967295)&&(0,S.OP)(`'${e}' is not a valid hex(a) color`),G(t)}if("object"===typeof e){if((0,E.zy)(e,["r","g","b"]))return e;if((0,E.zy)(e,["h","s","l"]))return W(U(e));if((0,E.zy)(e,["h","s","v"]))return W(e)}throw new TypeError(`Invalid color: ${null==e?e:String(e)||e.constructor.name}\nExpected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function W(e){const{h:t,s:n,v:r,a:o}=e,i=e=>{const o=(e+t/60)%6;return r-r*n*Math.max(Math.min(o,4-o,1),0)},a=[i(5),i(3),i(1)].map((e=>Math.round(255*e)));return{r:a[0],g:a[1],b:a[2],a:o}}function B(e){return W(U(e))}function j(e){if(!e)return{h:0,s:1,v:1,a:1};const t=e.r/255,n=e.g/255,r=e.b/255,o=Math.max(t,n,r),i=Math.min(t,n,r);let a=0;o!==i&&(o===t?a=60*(0+(n-r)/(o-i)):o===n?a=60*(2+(r-t)/(o-i)):o===r&&(a=60*(4+(t-n)/(o-i)))),a<0&&(a+=360);const s=0===o?0:(o-i)/o,l=[a,s,o];return{h:l[0],s:l[1],v:l[2],a:e.a}}function $(e){const{h:t,s:n,v:r,a:o}=e,i=r-r*n/2,a=1===i||0===i?0:(r-i)/Math.min(i,1-i);return{h:t,s:a,l:i,a:o}}function U(e){const{h:t,s:n,l:r,a:o}=e,i=r+n*Math.min(r,1-r),a=0===i?0:2-2*r/i;return{h:t,s:a,v:i,a:o}}function z(e){let{r:t,g:n,b:r,a:o}=e;return void 0===o?`rgb(${t}, ${n}, ${r})`:`rgba(${t}, ${n}, ${r}, ${o})`}function K(e){return z(W(e))}function H(e){const t=Math.round(e).toString(16);return("00".substr(0,2-t.length)+t).toUpperCase()}function q(e){let{r:t,g:n,b:r,a:o}=e;return`#${[H(t),H(n),H(r),void 0!==o?H(Math.round(255*o)):""].join("")}`}function G(e){e=J(e);let[t,n,r,o]=(0,E.iv)(e,2).map((e=>parseInt(e,16)));return o=void 0===o?o:o/255,{r:t,g:n,b:r,a:o}}function Y(e){const t=G(e);return j(t)}function X(e){return q(W(e))}function J(e){return e.startsWith("#")&&(e=e.slice(1)),e=e.replace(/([^0-9a-f])/gi,"F"),3!==e.length&&4!==e.length||(e=e.split("").map((e=>e+e)).join("")),6!==e.length&&(e=(0,E.f)((0,E.f)(e,6),8,"F")),e}function Q(e,t){const n=I(D(e));return n[0]=n[0]+10*t,V(x(n))}function Z(e,t){const n=I(D(e));return n[0]=n[0]-10*t,V(x(n))}function ee(e){const t=M(e);return D(t)[1]}function te(e,t){const n=ee(e),r=ee(t),o=Math.max(n,r),i=Math.min(n,r);return(o+.05)/(i+.05)}function ne(e){const t=Math.abs(w(M(0),M(e))),n=Math.abs(w(M(16777215),M(e)));return n>Math.min(t,50)?"#fff":"#000"}},7354:function(e,t,n){n.d(t,{CI:function(){return a},OP:function(){return o},yA:function(){return i}});n(1454);var r=n(6768);function o(e){(0,r.R8)(`Vuetify: ${e}`)}function i(e){(0,r.R8)(`Vuetify error: ${e}`)}function a(e,t){t=Array.isArray(t)?t.slice(0,-1).map((e=>`'${e}'`)).join(", ")+` or '${t.at(-1)}'`:`'${t}'`,(0,r.R8)(`[Vuetify UPGRADE] '${e}' is deprecated, use ${t} instead.`)}},1247:function(e,t,n){n.d(t,{RW:function(){return u},cq:function(){return c},pM:function(){return l}});n(8992),n(4520);var r=n(2858),o=n(6768),i=n(7354),a=n(9094),s=n(4587);function l(e){if(e._setup=e._setup??e.setup,!e.name)return(0,i.OP)("The component is missing an explicit name, unable to generate default prop value"),e;if(e._setup){e.props=(0,s.j)(e.props??{},e.name)();const t=Object.keys(e.props).filter((e=>"class"!==e&&"style"!==e));e.filterProps=function(e){return(0,a.Up)(e,t)},e.props._as=String,e.setup=function(t,n){const o=(0,r.Y8)();if(!o.value)return e._setup(t,n);const{props:i,provideSubDefaults:a}=(0,r.bL)(t,t._as??e.name,o),s=e._setup(i,n);return a(),s}}return e}function u(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return t=>(e?l:o.pM)(t)}function c(e,t){return t.props=e,t}},1884:function(e,t,n){n.d(t,{B2:function(){return r},S8:function(){return o},z3:function(){return i}});const r="cubic-bezier(0.4, 0, 0.2, 1)",o="cubic-bezier(0.0, 0, 0.2, 1)",i="cubic-bezier(0.4, 0, 1, 1)"},7861:function(e,t,n){n.d(t,{MR:function(){return a},nI:function(){return i},v6:function(){return u}});var r=n(6768),o=n(9094);function i(e,t){const n=(0,r.nI)();if(!n)throw new Error(`[Vuetify] ${e} ${t||"must be called from inside a setup function"}`);return n}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"composables";const t=i(e).type;return(0,o.fX)(t?.aliasName||t?.name)}let s=0,l=new WeakMap;function u(){const e=i("getUid");if(l.has(e))return l.get(e);{const t=s++;return l.set(e,t),t}}u.reset=()=>{s=0,l=new WeakMap}},5318:function(e,t,n){n.d(t,{D_:function(){return i},Rd:function(){return o},mH:function(){return r}});n(4114);function r(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];while(e){if(t?a(e):i(e))return e;e=e.parentElement}return document.scrollingElement}function o(e,t){const n=[];if(t&&e&&!t.contains(e))return n;while(e){if(i(e)&&n.push(e),e===t)break;e=e.parentElement}return n}function i(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return"scroll"===t.overflowY||"auto"===t.overflowY&&e.scrollHeight>e.clientHeight}function a(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return["scroll","auto"].includes(t.overflowY)}},6993:function(e,t,n){n.d(t,{ZK:function(){return r},o$:function(){return a},tB:function(){return o},vd:function(){return i}});const r="undefined"!==typeof window,o=r&&"IntersectionObserver"in window,i=r&&("ontouchstart"in window||window.navigator.maxTouchPoints>0),a=r&&"EyeDropper"in window},9094:function(e,t,n){n.d(t,{$m:function(){return M},Ai:function(){return I},B5:function(){return le},BN:function(){return O},CF:function(){return B},CZ:function(){return Y},D9:function(){return U},Dg:function(){return g},Gv:function(){return y},HP:function(){return _},Im:function(){return ae},K7:function(){return E},Mp:function(){return F},OW:function(){return re},P:function(){return ne},Pv:function(){return D},Sd:function(){return m},T4:function(){return ue},TD:function(){return v},Up:function(){return k},_p:function(){return w},bD:function(){return f},bq:function(){return ie},cJ:function(){return x},e9:function(){return z},eX:function(){return oe},e_:function(){return X},eq:function(){return Z},f:function(){return W},fX:function(){return K},hA:function(){return $},if:function(){return H},iv:function(){return j},j6:function(){return T},jF:function(){return de},lQ:function(){return se},lm:function(){return te},m:function(){return he},mK:function(){return Q},no:function(){return p},ph:function(){return P},qE:function(){return N},qr:function(){return fe},sg:function(){return L},uP:function(){return S},uR:function(){return ee},v6:function(){return ce},yc:function(){return J},zy:function(){return C}});n(4114),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8992),n(3215),n(3949),n(1454),n(7550);var r=n(144),o=n(6768),i=n(4232),a=n(6993);function s(e,t,n){l(e,t),t.set(e,n)}function l(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function u(e,t,n){return e.set(d(e,t),n),n}function c(e,t){return e.get(d(e,t))}function d(e,t,n){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError("Private element is not present on this object")}function h(e,t,n){const r=t.length-1;if(r<0)return void 0===e?n:e;for(let o=0;o<r;o++){if(null==e)return n;e=e[t[o]]}return null==e||void 0===e[t[r]]?n:e[t[r]]}function f(e,t){if(e===t)return!0;if(e instanceof Date&&t instanceof Date&&e.getTime()!==t.getTime())return!1;if(e!==Object(e)||t!==Object(t))return!1;const n=Object.keys(e);return n.length===Object.keys(t).length&&n.every((n=>f(e[n],t[n])))}function p(e,t,n){return null!=e&&t&&"string"===typeof t?void 0!==e[t]?e[t]:(t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,""),h(e,t.split("."),n)):n}function v(e,t,n){if(!0===t)return void 0===e?n:e;if(null==t||"boolean"===typeof t)return n;if(e!==Object(e)){if("function"!==typeof t)return n;const r=t(e,n);return"undefined"===typeof r?n:r}if("string"===typeof t)return p(e,t,n);if(Array.isArray(t))return h(e,t,n);if("function"!==typeof t)return n;const r=t(e,n);return"undefined"===typeof r?n:r}function m(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Array.from({length:e},((e,n)=>t+n))}function g(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"px";return null==e||""===e?void 0:isNaN(+e)?String(e):isFinite(+e)?`${Number(e)}${t}`:void 0}function y(e){return null!==e&&"object"===typeof e&&!Array.isArray(e)}function b(e){let t;return null!==e&&"object"===typeof e&&((t=Object.getPrototypeOf(e))===Object.prototype||null===t)}function w(e){if(e&&"$el"in e){const t=e.$el;return t?.nodeType===Node.TEXT_NODE?t.nextElementSibling:t}return e}const S=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16}),E=Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function _(e){return Object.keys(e)}function C(e,t){return t.every((t=>e.hasOwnProperty(t)))}function k(e,t){const n={},r=new Set(Object.keys(e));for(const o of t)r.has(o)&&(n[o]=e[o]);return n}function I(e,t,n){const r=Object.create(null),o=Object.create(null);for(const i in e)t.some((e=>e instanceof RegExp?e.test(i):e===i))&&!n?.some((e=>e===i))?r[i]=e[i]:o[i]=e[i];return[r,o]}function x(e,t){const n={...e};return t.forEach((e=>delete n[e])),n}function T(e,t){const n={};return t.forEach((t=>n[t]=e[t])),n}const A=/^on[^a-z]/,F=e=>A.test(e),R=["onAfterscriptexecute","onAnimationcancel","onAnimationend","onAnimationiteration","onAnimationstart","onAuxclick","onBeforeinput","onBeforescriptexecute","onChange","onClick","onCompositionend","onCompositionstart","onCompositionupdate","onContextmenu","onCopy","onCut","onDblclick","onFocusin","onFocusout","onFullscreenchange","onFullscreenerror","onGesturechange","onGestureend","onGesturestart","onGotpointercapture","onInput","onKeydown","onKeypress","onKeyup","onLostpointercapture","onMousedown","onMousemove","onMouseout","onMouseover","onMouseup","onMousewheel","onPaste","onPointercancel","onPointerdown","onPointerenter","onPointerleave","onPointermove","onPointerout","onPointerover","onPointerup","onReset","onSelect","onSubmit","onTouchcancel","onTouchend","onTouchmove","onTouchstart","onTransitioncancel","onTransitionend","onTransitionrun","onTransitionstart","onWheel"],V=["ArrowUp","ArrowDown","ArrowRight","ArrowLeft","Enter","Escape","Tab"," "];function D(e){return e.isComposing&&V.includes(e.key)}function P(e){const[t,n]=I(e,[A]),r=x(t,R),[o,i]=I(n,["class","style","id",/^data-/]);return Object.assign(o,t),Object.assign(i,r),[o,i]}function O(e){return null==e?[]:Array.isArray(e)?e:[e]}function L(e,t){let n=0;const o=function(){for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];clearTimeout(n),n=setTimeout((()=>e(...i)),(0,r.R1)(t))};return o.clear=()=>{clearTimeout(n)},o.immediate=e,o}function N(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Math.max(t,Math.min(n,e))}function M(e){const t=e.toString().trim();return t.includes(".")?t.length-t.indexOf(".")-1:0}function W(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0";return e+n.repeat(Math.max(0,t-e.length))}function B(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0";return n.repeat(Math.max(0,t-e.length))+e}function j(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const n=[];let r=0;while(r<e.length)n.push(e.substr(r,t)),r+=t;return n}function $(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;if(e<t)return`${e} B`;const n=1024===t?["Ki","Mi","Gi"]:["k","M","G"];let r=-1;while(Math.abs(e)>=t&&r<n.length-1)e/=t,++r;return`${e.toFixed(1)} ${n[r]}B`}function U(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const r={};for(const o in e)r[o]=e[o];for(const o in t){const i=e[o],a=t[o];b(i)&&b(a)?r[o]=U(i,a,n):n&&Array.isArray(i)&&Array.isArray(a)?r[o]=n(i,a):r[o]=a}return r}function z(e){return e.map((e=>e.type===o.FK?z(e.children):e)).flat()}function K(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(K.cache.has(e))return K.cache.get(e);const t=e.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return K.cache.set(e,t),t}function H(e,t){if(!t||"object"!==typeof t)return[];if(Array.isArray(t))return t.map((t=>H(e,t))).flat(1);if(t.suspense)return H(e,t.ssContent);if(Array.isArray(t.children))return t.children.map((t=>H(e,t))).flat(1);if(t.component){if(Object.getOwnPropertySymbols(t.component.provides).includes(e))return[t.component];if(t.component.subTree)return H(e,t.component.subTree).flat(1)}return[]}K.cache=new Map;var q=new WeakMap,G=new WeakMap;class Y{constructor(e){s(this,q,[]),s(this,G,0),this.size=e}push(e){c(q,this)[c(G,this)]=e,u(G,this,(c(G,this)+1)%this.size)}values(){return c(q,this).slice(c(G,this)).concat(c(q,this).slice(0,c(G,this)))}}function X(e){return"touches"in e?{clientX:e.touches[0].clientX,clientY:e.touches[0].clientY}:{clientX:e.clientX,clientY:e.clientY}}function J(e){const t=(0,r.Kh)({}),n=(0,o.EW)(e);return(0,o.nT)((()=>{for(const e in n.value)t[e]=n.value[e]}),{flush:"sync"}),(0,r.QW)(t)}function Q(e,t){return e.includes(t)}function Z(e){return e[2].toLowerCase()+e.slice(3)}const ee=()=>[Function,Array];function te(e,t){return t="on"+(0,i.ZH)(t),!!(e[t]||e[`${t}Once`]||e[`${t}Capture`]||e[`${t}OnceCapture`]||e[`${t}CaptureOnce`])}function ne(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(Array.isArray(e))for(const o of e)o(...n);else"function"===typeof e&&e(...n)}function re(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const n=["button","[href]",'input:not([type="hidden"])',"select","textarea","[tabindex]"].map((e=>`${e}${t?':not([tabindex="-1"])':""}:not([disabled])`)).join(", ");return[...e.querySelectorAll(n)]}function oe(e,t,n){let r,o=e.indexOf(document.activeElement);const i="next"===t?1:-1;do{o+=i,r=e[o]}while((!r||null==r.offsetParent||!(n?.(r)??1))&&o<e.length&&o>=0);return r}function ie(e,t){const n=re(e);if(t)if("first"===t)n[0]?.focus();else if("last"===t)n.at(-1)?.focus();else if("number"===typeof t)n[t]?.focus();else{const r=oe(n,t);r?r.focus():ie(e,"next"===t?"first":"last")}else e!==document.activeElement&&e.contains(document.activeElement)||n[0]?.focus()}function ae(e){return null===e||void 0===e||"string"===typeof e&&""===e.trim()}function se(){}function le(e,t){const n=a.ZK&&"undefined"!==typeof CSS&&"undefined"!==typeof CSS.supports&&CSS.supports(`selector(${t})`);if(!n)return null;try{return!!e&&e.matches(t)}catch(r){return null}}function ue(e){return e.some((e=>!(0,o.vv)(e)||e.type!==o.Mw&&(e.type!==o.FK||ue(e.children))))?e:null}function ce(e,t){if(!a.ZK||0===e)return t(),()=>{};const n=window.setTimeout(t,e);return()=>window.clearTimeout(n)}function de(e,t){const n=e.clientX,r=e.clientY,o=t.getBoundingClientRect(),i=o.left,a=o.top,s=o.right,l=o.bottom;return n>=i&&n<=s&&r>=a&&r<=l}function he(){const e=(0,r.IJ)(),t=t=>{e.value=t};return Object.defineProperty(t,"value",{enumerable:!0,get:()=>e.value,set:t=>e.value=t}),Object.defineProperty(t,"el",{enumerable:!0,get:()=>w(e.value)}),t}function fe(e){const t=1===e.key.length,n=!e.ctrlKey&&!e.metaKey&&!e.altKey;return t&&n}},4587:function(e,t,n){n.d(t,{j:function(){return r}});n(8992),n(8872);function r(e,t){return n=>Object.keys(e).reduce(((r,o)=>{const i="object"===typeof e[o]&&null!=e[o]&&!Array.isArray(e[o]),a=i?e[o]:{type:e[o]};return r[o]=n&&o in n?{...a,default:n[o]}:a,t&&!r[o].source&&(r[o].source=t),r}),{})}},4600:function(e,t,n){n.d(t,{C:function(){return o}});var r=n(7861);function o(e){const t=(0,r.nI)("useRender");t.render=e}}}]);
//# sourceMappingURL=chunk-vendors.184e13a1.js.map