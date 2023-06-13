(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.2"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.2"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.2"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.2"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"f59546c50aa835b29a627c11018ca02f","url":"404.html"},{"revision":"da1ed38b5fe9f13657bf190116f4bdbe","url":"A-Tutorials/tutorial1.html"},{"revision":"12027b1e08eced55cbe0f91ce5c33844","url":"A-Tutorials/tutorial10.html"},{"revision":"6e2187ed05e76e04405909dc8075be0e","url":"A-Tutorials/tutorial11.html"},{"revision":"f0bb8d1f81f41d123a5ec5e7fba0bfcc","url":"A-Tutorials/tutorial12.html"},{"revision":"8144c88d214efd34659168c55f636368","url":"A-Tutorials/tutorial2.html"},{"revision":"c46519db67c7627dcbaa6d2885479d38","url":"A-Tutorials/tutorial3.html"},{"revision":"edcd61efc09df83ab3dcc833accadeaa","url":"A-Tutorials/tutorial4.html"},{"revision":"f7a7d9d321674d5833f00652c8edc80f","url":"A-Tutorials/tutorial5.html"},{"revision":"d46f882149c99cc24703d1c056036b1c","url":"A-Tutorials/tutorial6.html"},{"revision":"7120c4635e92333dd5b20919e68f9129","url":"A-Tutorials/tutorial7.html"},{"revision":"51c1e04e9b5f8b04b593419ff361d772","url":"A-Tutorials/tutorial8.html"},{"revision":"d8ef678edfa551de869b7863ea8bbc74","url":"A-Tutorials/tutorial9.html"},{"revision":"4a30e0992a6a9401f7f666bf4fc5df74","url":"assets/css/styles.099fe1a9.css"},{"revision":"3705b9299e2138cf37a230cebcaac60e","url":"assets/js/01aca82b.13320d0f.js"},{"revision":"f5aa6e2379cc0b7364dce9e33e98362f","url":"assets/js/0222b3eb.eb74fe13.js"},{"revision":"5f50c911cf792f8fdbc6d2fff072239b","url":"assets/js/023a7f67.ec6681d6.js"},{"revision":"85f05bc1add2be7b975de940afdfa5f6","url":"assets/js/131.68b94d19.js"},{"revision":"ca4bfb49526282539969f0fe0a9a9bc1","url":"assets/js/17896441.0b391b47.js"},{"revision":"61d5957e2130ce564647562c934fa0fa","url":"assets/js/1be78505.3d798734.js"},{"revision":"3974aa0ddebc2c5b97ccac49194708c6","url":"assets/js/283.1c546bd7.js"},{"revision":"491e3883e04d8e357cbcfda8a24763c8","url":"assets/js/2b09c372.7460cb63.js"},{"revision":"82e5208c9e4ab7ff41f40decb7527d3b","url":"assets/js/48bb1fb2.199fbb1a.js"},{"revision":"fb3816c1204e698ff27d27bae9a0ce61","url":"assets/js/492d2758.cde75188.js"},{"revision":"7503603d4a86032d75b6d410938f8d0c","url":"assets/js/4afc17fe.a36ff1fa.js"},{"revision":"375b3dcff7bee27b9d94c15594004cd8","url":"assets/js/4fbb6ac7.02f0c717.js"},{"revision":"6b284f1fb27ce813fbd572f58c28a048","url":"assets/js/539.4d62b107.js"},{"revision":"e7402ad8f3ef185e88aaf5deb74f1c1e","url":"assets/js/70c5683e.16d09509.js"},{"revision":"86631a4b2b99a0e640a526e684f904d5","url":"assets/js/75d2d661.35b6a3a1.js"},{"revision":"b15156fdadbe6a700da1d787d8b2d56b","url":"assets/js/89dfd53f.8f114887.js"},{"revision":"f8876bf9ace0d2ab0dd9e90e89c922f6","url":"assets/js/8ddd19c0.348d594e.js"},{"revision":"acc007b61c12d03c18812ff679afd02a","url":"assets/js/935f2afb.42c57ace.js"},{"revision":"93065337fc63463752af384ccd085bd7","url":"assets/js/972.197d6867.js"},{"revision":"822d12e35ae19cf9f0634f3870f980e2","url":"assets/js/a887ccc3.fa37f311.js"},{"revision":"ee482dc8023a3549025e36675b31721e","url":"assets/js/c0e20c00.b7480895.js"},{"revision":"75e7a2bf248c8c39ab66b979cde76317","url":"assets/js/c459304f.064af6e0.js"},{"revision":"fd2f349f893f7781a4ea62e2ff31bcf0","url":"assets/js/d980e49e.cb1c35ef.js"},{"revision":"c73926cca20c755d1f0d2032242489fc","url":"assets/js/da9a1f25.a5ffb052.js"},{"revision":"d64e22ba679315355d5dd6b9ed9327cf","url":"assets/js/e1fb445c.65b7ef8a.js"},{"revision":"3dacb582c347446f2dc3658ac1a7fd46","url":"assets/js/eb6a5da1.dc0b9081.js"},{"revision":"6c0f69edaeaf6a1843a7cd80f5b8703b","url":"assets/js/f3d62012.9bc14266.js"},{"revision":"e0e18b48f2ca6f3faa582268e380cfde","url":"assets/js/f53cc515.ac1675cc.js"},{"revision":"42bf167f77a32483cea956c554ad64c3","url":"assets/js/main.0e31e436.js"},{"revision":"81552d609596bc2b29cdd79e5737bee8","url":"assets/js/runtime~main.7833cae5.js"},{"revision":"8e5b4aa1fe41c6598ece89af6cacc7e1","url":"B-Project/project.html"},{"revision":"d3c36e74178be1dbf60300caae639d91","url":"B-Project/topic-file-2.html"},{"revision":"4b153450b72bab0884109a897a4e88d0","url":"B-Project/topic-file-3.html"},{"revision":"b1a1ef26eab3a15672c359fa312bfe19","url":"C-ExtraResources/course-policies.html"},{"revision":"3223ac23cc4b2ef770ea00ed2276e4d1","url":"C-ExtraResources/topic-file-2.html"},{"revision":"7feea3d506d483aa27780ade3875bfd0","url":"C-ExtraResources/topic-file-3.html"},{"revision":"3ba88d389b8c19610f20f498ea369957","url":"index.html"},{"revision":"2524df02c6e551be5aef857403777080","url":"manifest.json"},{"revision":"4a5c7fb2ea757c12789a9ab582903499","url":"weekly-schedule.html"},{"revision":"102288088c043a8428a249ad13507f79","url":"assets/images/1_-_700px-Directory-structure-3-9035bde84bcd6bb32c626320fb9624b4.png"},{"revision":"6d63fbb5b3a6ae0eaee722d78489f054","url":"assets/images/2_-_create-confirm-39a4326ecec36caaa9ef19f4ae35c5fc.png"},{"revision":"3b3fc156c89037357d3330108096c634","url":"assets/images/3_-_tree-d28d73ba568f851f764509d93a33b6a4.png"},{"revision":"757538dc412cd68946769e680c2e87cc","url":"assets/images/4_-_lsr-f650246655f0cdd345a77015b98c19cf.png"},{"revision":"f1f941ecf1264c67190c91bbcfebf442","url":"assets/images/Absolute-path-1-663462821ad209fa24fd458c2a92f7c8.png"},{"revision":"ba3e5a4ff1137208c190d3aacb7b7500","url":"assets/images/Absolute-path-2-ce2b1538b19dd50c657355e9b8f11c4a.png"},{"revision":"da9893f3f6594772fd3498456681f251","url":"assets/images/Bin-to-hex-df997c069ba5cd8404b6866c2703ca1e.png"},{"revision":"4b5b4ab35a3957e19ac5bd069fcd88b4","url":"assets/images/Bin-to-octal-a2944b3c49db824e0f7f2f07bef85fdf.png"},{"revision":"fe6dc7ccb15bc5d5bfbf18e7ce39b50b","url":"assets/images/Binary-number1-dc4655d76dd6c2c0b379799f0cf3fcd3.png"},{"revision":"f10fe7077b99b72381eb1d30406392f5","url":"assets/images/Calc-check-b0989401edf1e8ac22e419a64bf6e380.png"},{"revision":"640ea00aad53239df79c5ae70fe3a5b7","url":"assets/images/Convert-bin-decimal-a0373004727e10c1eaa4e88296d4d9e7.png"},{"revision":"34e8917e0be6b125b128c4323d9fc1f2","url":"assets/images/Ctrl-b-c4e4b2cf19d4fc6f562ccfb70ae154a7.png"},{"revision":"c5cae7b4dd0e5bfdd6b2c1ca6b5177c8","url":"assets/images/Ctrl-w-83dd35ccaf8d6bd054544d2bcf8d471f.png"},{"revision":"2bc68e8740575c32c76baabcbd379770","url":"assets/images/Decimal-to-bin-6f99e94d27ef58524aad51570bf47cd6.png"},{"revision":"7d50beb599e379e62c5e4b866eaaa412","url":"assets/images/Dir12-aeb87b61b6ce60f6d63ae94205e1798c.png"},{"revision":"13a40550a3325df78a82896c1bcf9283","url":"assets/images/Dir13-d2f1a99eb7aa7b95f46fe018a19cfeac.png"},{"revision":"19c5689056b24b7060bf050efc9bb1e4","url":"assets/images/Directory-permissions-77f54e54e940840852fcb70801ce7b32.png"},{"revision":"cf98aa8208b23387e9bfa5e5d21b244b","url":"assets/images/Directory-structure-1-fa337dd97d1302f88eb6a63d2dba8f03.png"},{"revision":"b51002205d6c6988d1a039d1d03d4b38","url":"assets/images/Directory-structure-10-1f9bc8cb7b233d7ded8e88c9f85d1a45.png"},{"revision":"7f9dc8925664c8d8d6273f198debe7d9","url":"assets/images/Directory-structure-2-070fa12eb09e7f4a6d2c9c41946a3e46.png"},{"revision":"a37e79d9a9837f83a427a36b9dde911e","url":"assets/images/End-of-line-d5c1edce4d4856de8a5332b2f37e2c0e.png"},{"revision":"b0ecdbf90750170af8bb0f397015e7a5","url":"assets/images/File-permission-practice-1-6ec35860a8bbd90ab24f3c5cecbe2ce0.png"},{"revision":"25e464a9e346f1e4e5518c47ba9cf2e7","url":"assets/images/File-permission-practice-2-43e170fdc14816d71ebd1412725b6894.png"},{"revision":"5d69d7b88cbc9b867ae0cf1ccb54bd4f","url":"assets/images/File-permissions-fad4b2ce220dd6958a8037c037b5c58f.png"},{"revision":"fa104bd8b397560a680340a912ceeaf6","url":"assets/images/Gp1-2f85ad14b74447b051971be4121399be.png"},{"revision":"adc295f4f7ec2c528a6384ffc4d302e5","url":"assets/images/Hex-to-bin-892439e2114cb2d5f6f7fc640e7ecb5a.png"},{"revision":"6d6efbe053adb4d1243ff1c93e4a90d7","url":"assets/images/Listing-file-directory-fd791650c01e56894e36d7e45a0a8dd4.png"},{"revision":"f8f28b54f1e3f7f459e7838b87fd3fc6","url":"assets/images/Matrix-layout-66ca772ceeafcaea28505f4e97ba1350.png"},{"revision":"1ffa579064766692c00627c676398753","url":"assets/images/Meta-key-ae52a45733a36b4b4b1a65cfbead7944.png"},{"revision":"82302bd9195a8a1d37317acd42f43600","url":"assets/images/Nano-text-editor-1-61ceb0f3abb037c6f3eb599d93e52088.png"},{"revision":"82a130833c09ff9ddf1097bc794ae631","url":"assets/images/Nano-text-editor-2-7bea238795efc081b37f5531f0192808.png"},{"revision":"9232f3833b39c2f3189b6b05499dfc0d","url":"assets/images/New-ls-c7d0b6528a34d584011b566a4af349f4.png"},{"revision":"57248996cfaf3cb6b01b2c01c9d41678","url":"assets/images/Number-conversion-chart-b4fa6d0cdf4f08e4508c88eac4e09e95.png"},{"revision":"473f96dc44b1d8647e8c2d99eb682208","url":"assets/images/Octal-hex-be734383624e441f519203fadfd2eeaf.png"},{"revision":"ba5e33461236da8e33b4d2c45ba1157f","url":"assets/images/Octal-permissions-7dbf96f4b503930688da3e6319c13c08.png"},{"revision":"898ed825030a2e4d4f769f2e9d0060f3","url":"assets/images/Octal-to-bin-ec38179ff19bd5a679208e7209fd57b3.png"},{"revision":"e987da00d4c6cf9402c9ddd50a493e01","url":"assets/images/Path-name-151303df3e375d3dbdc0ade3a170159a.png"},{"revision":"017c71b1e85d2e6572626d8d4515c4a1","url":"assets/images/Quick-connect-window-00d4b4524019e53223e0e35ce45ba28d.png"},{"revision":"33c2be8f62a50d326eeef6c6911c9233","url":"assets/images/Quotation-e0ee904c183f4598aa267d5a6fc12550.png"},{"revision":"7f0f73ee7b8e6d8794dba8e86c0fb884","url":"assets/images/Relative-pathname-1-e933b13e2dca033f7b2fe2d5c74dfa66.png"},{"revision":"4ac0a2321da38223657b653980c08444","url":"assets/images/Relative-pathname-2-ac0cdaed3f41b6f9ecb4ec0a70faa217.png"},{"revision":"bcd95057a23fdded6b7f729872c24788","url":"assets/images/Relative-to-home-1-61e72f8e81636800a10c4efcaf12e4d3.png"},{"revision":"29979b72a7fdb4d201f8dcde2c11509a","url":"assets/images/Relative-to-home-2-d017afafbe9cba657e958e840caf65d2.png"},{"revision":"c29afd649fd2331c8835acdcdd3b94bd","url":"assets/images/Script-check-1-f42b2324683996d54a151fc9c546e329.png"},{"revision":"2bbedba705abae1ef2ce0e0c5a89bd36","url":"assets/images/Script-check-2-240ef60da9014fbf78fbbb723eb13c7a.png"},{"revision":"894e283a64581300e2f5cbb3456b1039","url":"assets/images/Share-public-key-e43d930d91f8abaf87769b35b6678bce.png"},{"revision":"74828646af1b41a3373f1d83d13140f6","url":"assets/images/Ssh-application-icon-5c31271eb34c51814b1ac4649653d3e7.png"},{"revision":"d708daaf75cd6503b70de3e3f0448f87","url":"assets/images/Ssh-authentication-response-1b08b1274d847cde20d851f1f5834577.png"},{"revision":"33638702737d85e4624c8adbee0852a1","url":"assets/images/Ssh-login-error-d5dd3a9267ee02b49010e5ebef5faa1e.png"},{"revision":"4baa863111ccde9f57a6cfb5194b6fe8","url":"assets/images/Ssh-main-window-8d99257b8a7e83bd9de8f74a76d4a7a8.png"},{"revision":"cb8a0d84527546d1e477e2a9cd834df8","url":"assets/images/Ssh-password-prompt-5c2ba9e8cd73143e12b01f9b35973d44.png"},{"revision":"15b822e449efbdf80903ace4b6a15e7e","url":"assets/images/Ssh-settings-window-567521ff3a8b6b0cf62d9817b9d0bc00.png"},{"revision":"72fa66579263057a2622fbdcc6c02a67","url":"assets/images/Ssh-shell-window-bb597197f216317836f16c8d73af8f43.png"},{"revision":"cb687183c80b7d258c9a5b41cba63610","url":"assets/images/Tree-diagram-5637e2b8aaddcd03886dfe20a06b6490.png"},{"revision":"648d66bbceda117b3ae196b048fef6e1","url":"assets/images/Umask-directory-1a6c6ce1e9cbb2b6eac2c7772b36cbb0.png"},{"revision":"dc430acf0eb6aaa6a65b72405b6714a1","url":"assets/images/Umask-file-37c32c069bfda88d6108a2217fa74b91.png"},{"revision":"75e537240eebe1aaa7b270f56877fa27","url":"assets/images/Vi-screen-40-06dbe4ad0233a12000ea59cfff34a666.png"},{"revision":"edc410e9df35ea391c70aafdfc225ffb","url":"assets/images/Vi-screen-e08be2f836364cfd562368b321cb4899.png"},{"revision":"0a38f643bf95e4ee40b37c7e9b170f1d","url":"assets/images/Vi-text-editor-1-b0ea0917914e009890a6a70965667e86.png"},{"revision":"1d533c271cd84c699f7070ccaa2b16a5","url":"assets/images/Vi-text-editor-2-0984dad27194abb1c877a1d5128578ec.png"},{"revision":"3ca63dde57c15ac4dd9a435c1e3e3cb8","url":"assets/images/Vi-text-editor-a-262850fff98cd5f41ff94d050e8ac958.png"},{"revision":"eb735fa9658ac87ece542a7583711976","url":"assets/images/Vi-text-editor-b-0384506dfa3355cd1609d95963c875f2.png"},{"revision":"4b7e4929d2f22c7fa24dc67be3bce59f","url":"assets/images/Week3-practice-question-33b9a3485a6ecf96db457f12f67ecb66.png"},{"revision":"102288088c043a8428a249ad13507f79","url":"img/1_-_700px-Directory-structure-3.png"},{"revision":"6d63fbb5b3a6ae0eaee722d78489f054","url":"img/2_-_create-confirm.png"},{"revision":"3b3fc156c89037357d3330108096c634","url":"img/3_-_tree.png"},{"revision":"757538dc412cd68946769e680c2e87cc","url":"img/4_-_lsr.png"},{"revision":"f1f941ecf1264c67190c91bbcfebf442","url":"img/Absolute-path-1.png"},{"revision":"ba3e5a4ff1137208c190d3aacb7b7500","url":"img/Absolute-path-2.png"},{"revision":"da9893f3f6594772fd3498456681f251","url":"img/Bin-to-hex.png"},{"revision":"4b5b4ab35a3957e19ac5bd069fcd88b4","url":"img/Bin-to-octal.png"},{"revision":"fe6dc7ccb15bc5d5bfbf18e7ce39b50b","url":"img/Binary-number1.png"},{"revision":"f10fe7077b99b72381eb1d30406392f5","url":"img/Calc-check.png"},{"revision":"640ea00aad53239df79c5ae70fe3a5b7","url":"img/Convert-bin-decimal.png"},{"revision":"34e8917e0be6b125b128c4323d9fc1f2","url":"img/Ctrl-b.png"},{"revision":"c5cae7b4dd0e5bfdd6b2c1ca6b5177c8","url":"img/Ctrl-w.png"},{"revision":"2bc68e8740575c32c76baabcbd379770","url":"img/Decimal-to-bin.png"},{"revision":"7d50beb599e379e62c5e4b866eaaa412","url":"img/Dir12.png"},{"revision":"13a40550a3325df78a82896c1bcf9283","url":"img/Dir13.png"},{"revision":"19c5689056b24b7060bf050efc9bb1e4","url":"img/Directory-permissions.png"},{"revision":"cf98aa8208b23387e9bfa5e5d21b244b","url":"img/Directory-structure-1.png"},{"revision":"b51002205d6c6988d1a039d1d03d4b38","url":"img/Directory-structure-10.png"},{"revision":"7f9dc8925664c8d8d6273f198debe7d9","url":"img/Directory-structure-2.png"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"a37e79d9a9837f83a427a36b9dde911e","url":"img/End-of-line.png"},{"revision":"ef2266bfb84465c731756b58cde0afb8","url":"img/favicon.ico"},{"revision":"b0ecdbf90750170af8bb0f397015e7a5","url":"img/File-permission-practice-1.png"},{"revision":"25e464a9e346f1e4e5518c47ba9cf2e7","url":"img/File-permission-practice-2.png"},{"revision":"5d69d7b88cbc9b867ae0cf1ccb54bd4f","url":"img/File-permissions.png"},{"revision":"fa104bd8b397560a680340a912ceeaf6","url":"img/Gp1.png"},{"revision":"bf005443bc170a09d170497771156327","url":"img/Here_Document.png"},{"revision":"adc295f4f7ec2c528a6384ffc4d302e5","url":"img/Hex-to-bin.png"},{"revision":"6d6efbe053adb4d1243ff1c93e4a90d7","url":"img/Listing-file-directory.png"},{"revision":"22c6eb8088b86099d5a78b5a13f7b24d","url":"img/logo-dark.svg"},{"revision":"8817e00103e8837d17c2758b0ce25c41","url":"img/logo.svg"},{"revision":"f8f28b54f1e3f7f459e7838b87fd3fc6","url":"img/Matrix-layout.png"},{"revision":"1ffa579064766692c00627c676398753","url":"img/Meta-key.png"},{"revision":"82302bd9195a8a1d37317acd42f43600","url":"img/Nano-text-editor-1.png"},{"revision":"82a130833c09ff9ddf1097bc794ae631","url":"img/Nano-text-editor-2.png"},{"revision":"9232f3833b39c2f3189b6b05499dfc0d","url":"img/New-ls.png"},{"revision":"57248996cfaf3cb6b01b2c01c9d41678","url":"img/Number-conversion-chart.png"},{"revision":"473f96dc44b1d8647e8c2d99eb682208","url":"img/Octal-hex.png"},{"revision":"ba5e33461236da8e33b4d2c45ba1157f","url":"img/Octal-permissions.png"},{"revision":"898ed825030a2e4d4f769f2e9d0060f3","url":"img/Octal-to-bin.png"},{"revision":"e987da00d4c6cf9402c9ddd50a493e01","url":"img/Path-name.png"},{"revision":"1f746e93392ce5699a90135a0c19670b","url":"img/Pipe-diagram-1.png"},{"revision":"2e1cb1ba37fc5ae886ea57248bdb60bd","url":"img/pwa/icon-192x192.png"},{"revision":"a0f8ed72d3d3489353a57a03aeac9b0d","url":"img/pwa/icon-256x256.png"},{"revision":"ab9ed19e2716b5c233d6132d66204d53","url":"img/pwa/icon-384x384.png"},{"revision":"b71acc5b894ccfac0c22eb39a590f2a0","url":"img/pwa/icon-512x512.png"},{"revision":"017c71b1e85d2e6572626d8d4515c4a1","url":"img/Quick-connect-window.png"},{"revision":"33c2be8f62a50d326eeef6c6911c9233","url":"img/Quotation.png"},{"revision":"7f0f73ee7b8e6d8794dba8e86c0fb884","url":"img/Relative-pathname-1.png"},{"revision":"4ac0a2321da38223657b653980c08444","url":"img/Relative-pathname-2.png"},{"revision":"bcd95057a23fdded6b7f729872c24788","url":"img/Relative-to-home-1.png"},{"revision":"29979b72a7fdb4d201f8dcde2c11509a","url":"img/Relative-to-home-2.png"},{"revision":"c29afd649fd2331c8835acdcdd3b94bd","url":"img/Script-check-1.png"},{"revision":"2bbedba705abae1ef2ce0e0c5a89bd36","url":"img/Script-check-2.png"},{"revision":"894e283a64581300e2f5cbb3456b1039","url":"img/Share-public-key.png"},{"revision":"74828646af1b41a3373f1d83d13140f6","url":"img/Ssh-application-icon.png"},{"revision":"d708daaf75cd6503b70de3e3f0448f87","url":"img/Ssh-authentication-response.png"},{"revision":"33638702737d85e4624c8adbee0852a1","url":"img/Ssh-login-error.png"},{"revision":"4baa863111ccde9f57a6cfb5194b6fe8","url":"img/Ssh-main-window.png"},{"revision":"cb8a0d84527546d1e477e2a9cd834df8","url":"img/Ssh-password-prompt.png"},{"revision":"15b822e449efbdf80903ace4b6a15e7e","url":"img/Ssh-settings-window.png"},{"revision":"72fa66579263057a2622fbdcc6c02a67","url":"img/Ssh-shell-window.png"},{"revision":"90d6fd36fa80614403adb569cb50a8b3","url":"img/Stderr-symbol-1.png"},{"revision":"7ba8249cbf44fad6b69286778383f06a","url":"img/Stderr-symbol-2.png"},{"revision":"f2be358019b4af3b95f49436caed19de","url":"img/Stdin-symbol.png"},{"revision":"7263a6170f28a6d7e7a27c46fc22f417","url":"img/Stdout-symbol-1.png"},{"revision":"19f417829ae6fc74ba21023f79b3d835","url":"img/Stdout-symbol-2.png"},{"revision":"62988dedccdb9e22e1dcd568c64ea690","url":"img/Tee-diagram-1.png"},{"revision":"cb687183c80b7d258c9a5b41cba63610","url":"img/Tree-diagram.png"},{"revision":"b9d9189ed8f8dd58e70d9f8b3f693b3e","url":"img/tutorial/docsVersionDropdown.png"},{"revision":"c14bff79aafafca0957ccc34ee026e2c","url":"img/tutorial/localeDropdown.png"},{"revision":"648d66bbceda117b3ae196b048fef6e1","url":"img/Umask-directory.png"},{"revision":"dc430acf0eb6aaa6a65b72405b6714a1","url":"img/Umask-file.png"},{"revision":"8d04d316f4d1777793ee773fcbf16cea","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"3d3d63efa464a74e2befd1569465ed21","url":"img/undraw_docusaurus_react.svg"},{"revision":"932b535fc71feb29877bc4b9d708b1d0","url":"img/undraw_docusaurus_tree.svg"},{"revision":"75e537240eebe1aaa7b270f56877fa27","url":"img/Vi-screen-40.png"},{"revision":"edc410e9df35ea391c70aafdfc225ffb","url":"img/Vi-screen.png"},{"revision":"0a38f643bf95e4ee40b37c7e9b170f1d","url":"img/Vi-text-editor-1.png"},{"revision":"1d533c271cd84c699f7070ccaa2b16a5","url":"img/Vi-text-editor-2.png"},{"revision":"3ca63dde57c15ac4dd9a435c1e3e3cb8","url":"img/Vi-text-editor-a.png"},{"revision":"eb735fa9658ac87ece542a7583711976","url":"img/Vi-text-editor-b.png"},{"revision":"4b7e4929d2f22c7fa24dc67be3bce59f","url":"img/Week3-practice-question.png"},{"revision":"d2954fb3a75fb3b8ed931433058fe0fc","url":"img/Week5-dir.png"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();