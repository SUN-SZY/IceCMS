
  !function(){try{var a=Function("return this")();a&&!a.Math&&(Object.assign(a,{isFinite:isFinite,Array:Array,Date:Date,Error:Error,Function:Function,Math:Math,Object:Object,RegExp:RegExp,String:String,TypeError:TypeError,setTimeout:setTimeout,clearTimeout:clearTimeout,setInterval:setInterval,clearInterval:clearInterval}),"undefined"!=typeof Reflect&&(a.Reflect=Reflect))}catch(a){}}();
  /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		"common/runtime": 0
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"common/runtime": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"pages/circle/circle":1,"pages/home/home":1,"pages/mine/mine":1,"pages/preferred/preferred":1,"tuniao-ui/components/tn-tabbar/tn-tabbar":1,"pages/activity/activity":1,"tuniao-ui/components/tn-nav-bar/tn-nav-bar":1,"tuniao-ui/components/tn-button/tn-button":1,"libs/components/nav-index-button":1,"tuniao-ui/components/tn-avatar/tn-avatar":1,"tuniao-ui/components/tn-grid-item/tn-grid-item":1,"tuniao-ui/components/tn-avatar-group/tn-avatar-group":1,"tuniao-ui/components/tn-grid/tn-grid":1,"tuniao-ui/components/tn-stack-swiper/tn-stack-swiper":1,"tuniao-ui/components/tn-image-upload-drag/tn-image-upload-drag":1,"tuniao-ui/components/tn-modal/tn-modal":1,"tuniao-ui/components/tn-landscape/tn-landscape":1,"tuniao-ui/components/tn-read-more/tn-read-more":1,"tuniao-ui/components/tn-circle-progress/tn-circle-progress":1,"tuniao-ui/components/tn-notice-bar/tn-notice-bar":1,"tuniao-ui/components/tn-list-cell/tn-list-cell":1,"tuniao-ui/components/tn-tabs/tn-tabs":1,"tuniao-ui/components/tn-goods-nav/tn-goods-nav":1,"tuniao-ui/components/tn-tabs-swiper/tn-tabs-swiper":1,"tuniao-ui/components/tn-swiper/tn-swiper":1,"tuniao-ui/components/tn-lazy-load/tn-lazy-load":1,"tuniao-ui/components/tn-verification-code/tn-verification-code":1,"tuniao-ui/components/tn-badge/tn-badge":1,"tuniao-ui/components/tn-swipe-action-item/tn-swipe-action-item":1,"tuniao-ui/components/tn-cropper/tn-cropper":1,"tuniao-ui/components/tn-popup/tn-popup":1,"libs/components/multiple-options-demo":1,"tuniao-ui/components/tn-load-more/tn-load-more":1,"tuniao-ui/components/tn-waterfall/tn-waterfall":1,"tuniao-ui/components/tn-scroll-list/tn-scroll-list":1,"tuniao-ui/components/tn-line-progress/tn-line-progress":1,"tuniao-ui/components/tn-column-notice/tn-column-notice":1,"tuniao-ui/components/tn-row-notice/tn-row-notice":1,"tuniao-ui/components/tn-loading/tn-loading":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "" + ({"pages/circle/circle":"pages/circle/circle","pages/home/home":"pages/home/home","pages/mine/mine":"pages/mine/mine","pages/preferred/preferred":"pages/preferred/preferred","tuniao-ui/components/tn-tabbar/tn-tabbar":"tuniao-ui/components/tn-tabbar/tn-tabbar","pages/activity/activity":"pages/activity/activity","tuniao-ui/components/tn-nav-bar/tn-nav-bar":"tuniao-ui/components/tn-nav-bar/tn-nav-bar","tuniao-ui/components/tn-button/tn-button":"tuniao-ui/components/tn-button/tn-button","libs/components/nav-index-button":"libs/components/nav-index-button","tuniao-ui/components/tn-avatar/tn-avatar":"tuniao-ui/components/tn-avatar/tn-avatar","tuniao-ui/components/tn-grid-item/tn-grid-item":"tuniao-ui/components/tn-grid-item/tn-grid-item","tuniao-ui/components/tn-avatar-group/tn-avatar-group":"tuniao-ui/components/tn-avatar-group/tn-avatar-group","tuniao-ui/components/tn-grid/tn-grid":"tuniao-ui/components/tn-grid/tn-grid","tuniao-ui/components/tn-stack-swiper/tn-stack-swiper":"tuniao-ui/components/tn-stack-swiper/tn-stack-swiper","tuniao-ui/components/tn-image-upload-drag/tn-image-upload-drag":"tuniao-ui/components/tn-image-upload-drag/tn-image-upload-drag","tuniao-ui/components/tn-modal/tn-modal":"tuniao-ui/components/tn-modal/tn-modal","tuniao-ui/components/tn-landscape/tn-landscape":"tuniao-ui/components/tn-landscape/tn-landscape","tuniao-ui/components/tn-read-more/tn-read-more":"tuniao-ui/components/tn-read-more/tn-read-more","tuniao-ui/components/tn-circle-progress/tn-circle-progress":"tuniao-ui/components/tn-circle-progress/tn-circle-progress","tuniao-ui/components/tn-notice-bar/tn-notice-bar":"tuniao-ui/components/tn-notice-bar/tn-notice-bar","tuniao-ui/components/tn-list-cell/tn-list-cell":"tuniao-ui/components/tn-list-cell/tn-list-cell","tuniao-ui/components/tn-tabs/tn-tabs":"tuniao-ui/components/tn-tabs/tn-tabs","tuniao-ui/components/tn-goods-nav/tn-goods-nav":"tuniao-ui/components/tn-goods-nav/tn-goods-nav","tuniao-ui/components/tn-sticky/tn-sticky":"tuniao-ui/components/tn-sticky/tn-sticky","tuniao-ui/components/tn-tabs-swiper/tn-tabs-swiper":"tuniao-ui/components/tn-tabs-swiper/tn-tabs-swiper","tuniao-ui/components/tn-swiper/tn-swiper":"tuniao-ui/components/tn-swiper/tn-swiper","tuniao-ui/components/tn-lazy-load/tn-lazy-load":"tuniao-ui/components/tn-lazy-load/tn-lazy-load","tuniao-ui/components/tn-verification-code/tn-verification-code":"tuniao-ui/components/tn-verification-code/tn-verification-code","tuniao-ui/components/tn-badge/tn-badge":"tuniao-ui/components/tn-badge/tn-badge","tuniao-ui/components/tn-swipe-action-item/tn-swipe-action-item":"tuniao-ui/components/tn-swipe-action-item/tn-swipe-action-item","tuniao-ui/components/tn-swipe-action/tn-swipe-action":"tuniao-ui/components/tn-swipe-action/tn-swipe-action","tuniao-ui/components/tn-cropper/tn-cropper":"tuniao-ui/components/tn-cropper/tn-cropper","tuniao-ui/components/tn-popup/tn-popup":"tuniao-ui/components/tn-popup/tn-popup","libs/components/multiple-options-demo":"libs/components/multiple-options-demo","tuniao-ui/components/tn-load-more/tn-load-more":"tuniao-ui/components/tn-load-more/tn-load-more","tuniao-ui/components/tn-waterfall/tn-waterfall":"tuniao-ui/components/tn-waterfall/tn-waterfall","tuniao-ui/components/tn-scroll-list/tn-scroll-list":"tuniao-ui/components/tn-scroll-list/tn-scroll-list","tuniao-ui/components/tn-line-progress/tn-line-progress":"tuniao-ui/components/tn-line-progress/tn-line-progress","tuniao-ui/components/tn-column-notice/tn-column-notice":"tuniao-ui/components/tn-column-notice/tn-column-notice","tuniao-ui/components/tn-row-notice/tn-row-notice":"tuniao-ui/components/tn-row-notice/tn-row-notice","tuniao-ui/components/tn-loading/tn-loading":"tuniao-ui/components/tn-loading/tn-loading"}[chunkId]||chunkId) + ".wxss";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = global["webpackJsonp"] = global["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// run deferred modules from other chunks
/******/ 	checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/runtime.js.map
  