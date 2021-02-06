/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/app.ts":
/*!********************!*\
  !*** ./app/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var angular_angular_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular/angular.min */ \"./node_modules/angular/angular.min.js\");\n/* harmony import */ var angular_angular_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular_angular_min__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nvar modules = ['ngRoute', 'myApp.view1', 'myApp.view2', 'myApp.version', 'myApp.appService'];\r\nmodules.forEach(function (module) { return angular_angular_min__WEBPACK_IMPORTED_MODULE_0__.module(module, []); });\r\nangular_angular_min__WEBPACK_IMPORTED_MODULE_0__.module('myApp', modules)\r\n    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {\r\n        $locationProvider.hashPrefix('!');\r\n        $routeProvider.otherwise({ redirectTo: '/view1' });\r\n    }]);\r\n\n\n//# sourceURL=webpack://my-webpack-project/./app/app.ts?");

/***/ }),

/***/ "./app/main.ts":
/*!*********************!*\
  !*** ./app/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./app/app.ts\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ \"./app/services/index.ts\");\n/* harmony import */ var _view1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view1 */ \"./app/view1/index.ts\");\n// *** The following are modules of the app.\r\n\r\n\r\n// import './directives';\r\n// import './filters';\r\n\r\n// import './view2';\r\n// *** The following should automatically be included as modules import them.\r\n// import '../node_modules/angular/angular.min';\r\n// import '../node_modules/angular-loader/angular-loader.min';\r\n// import '../node_modules/angular-mocks/angular-mocks';\r\n// import '../node_modules/angular-route/angular-route.min';\r\n\n\n//# sourceURL=webpack://my-webpack-project/./app/main.ts?");

/***/ }),

/***/ "./app/models/program.ts":
/*!*******************************!*\
  !*** ./app/models/program.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Program\": () => (/* binding */ Program)\n/* harmony export */ });\n\r\nvar Program = /** @class */ (function () {\r\n    function Program() {\r\n    }\r\n    return Program;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./app/models/program.ts?");

/***/ }),

/***/ "./app/models/user.ts":
/*!****************************!*\
  !*** ./app/models/user.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"User\": () => (/* binding */ User)\n/* harmony export */ });\n\r\n/**\r\n * Represents a user.\r\n */\r\nvar User = /** @class */ (function () {\r\n    function User() {\r\n    }\r\n    return User;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./app/models/user.ts?");

/***/ }),

/***/ "./app/services/appStoreService.ts":
/*!*****************************************!*\
  !*** ./app/services/appStoreService.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user */ \"./app/models/user.ts\");\n/* harmony import */ var angular_angular_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular/angular.min */ \"./node_modules/angular/angular.min.js\");\n/* harmony import */ var angular_angular_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular_angular_min__WEBPACK_IMPORTED_MODULE_1__);\n\r\nvar __assign = (undefined && undefined.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\n\r\n\r\n/**\r\n * Service collection.\r\n */\r\nvar appServices = angular_angular_min__WEBPACK_IMPORTED_MODULE_1__.module(\"myApp.appServices\", [])\r\n    .config([\"$httpProvider\", function ($httpProvider) { }]);\r\n/**\r\n * Creates the appStoreService and adds it to the service collection.\r\n */\r\nappServices.factory(\"appStoreService\", [\r\n    /**\r\n     * AppStoreService initializer.\r\n     *\r\n     * @returns {Object} AppStoreService instance.\r\n     */\r\n    function () {\r\n        // Create the service object.\r\n        var service = {\r\n            //#region *** Variables ***\r\n            /**\r\n             * Returns the initialization value for the app state object.\r\n             */\r\n            get initialState() {\r\n                return {\r\n                    /**\r\n                     * Returns the entity representing the current user.\r\n                     */\r\n                    currentUser: null,\r\n                    /**\r\n                     * Returns information pertaining to users known by the system.\r\n                     */\r\n                    users: {\r\n                        /**\r\n                         * Returns the list of users known by the system.\r\n                         */\r\n                        items: [\r\n                            {\r\n                                FirstName: \"Eric\",\r\n                                LastName: \"Bewley\",\r\n                                UserID: 1,\r\n                            },\r\n                            { FirstName: \"Jane\", LastName: \"Doe\", UserID: 2 },\r\n                            { FirstName: \"John\", LastName: \"Smith\", UserID: 4 },\r\n                        ],\r\n                        /**\r\n                         * Returns the last date/time the data service refreshed the list.\r\n                         */\r\n                        lastRefresh: new Date(0),\r\n                    },\r\n                };\r\n            },\r\n            //#endregion\r\n            //#region *** Properties ***\r\n            /**\r\n             * Returns the current user entity or null if not set.\r\n             *\r\n             * @returns {User} User entity of current user if set, else null.\r\n             */\r\n            get currentUser() {\r\n                return __assign({}, service.state.currentUser);\r\n            },\r\n            /**\r\n             * Sets/clears the current user assignment.\r\n             *\r\n             * @param {User | number} userOrID Either a reference to a User entity or the ID of the entity to reference.\r\n             */\r\n            set currentUser(userOrID) {\r\n                // If userOrID is not defined, null, false or zero, clear the currentUser reference.\r\n                if (!userOrID) {\r\n                    service.state.currentUser = null;\r\n                    return;\r\n                }\r\n                // Else if userOrID is defined but not a number, then assume it to be a reference to a User entity.\r\n                if (userOrID && isNaN(userOrID)) {\r\n                    service.state.currentUser = userOrID;\r\n                    return;\r\n                }\r\n                // Else if userOrID is a number locate the specified entity.\r\n                if (userOrID && !isNaN(userOrID)) {\r\n                    service.state.currentUser = service.state.users.find(function (user) { return user.UserID === userOrID; });\r\n                    return;\r\n                }\r\n                // Else throw an exception.\r\n                throw \"The value supplied to currentUser is not a User entity or number.\";\r\n            },\r\n            get state() { return service.state; },\r\n            //#endregion\r\n            //#region *** Methods ***\r\n            /**\r\n             * Returns a collection of matching User entities.\r\n             *\r\n             * @param {User} filters Filter parameters to apply to the result set.\r\n             * @returns {User[]} Collection of matching User entities.\r\n             */\r\n            getUsers: function (filters) {\r\n                if (filters === void 0) { filters = new _models_user__WEBPACK_IMPORTED_MODULE_0__.User(); }\r\n                // If a UserID filter was provided, return the first matching entity.\r\n                if (filters.UserID)\r\n                    return matchingUsers.find(function (user) { return user.UserID === filters.UserID; });\r\n                // Otherwise get a copy of the complete users list which will keep the app state immutable.\r\n                var matchingUsers = service.state.users.items.slice();\r\n                // If FirstName and/or LastName filters were supplied, filter the list, else leave it intact.\r\n                if (filters.FirstName)\r\n                    matchingUsers = matchingUsers.filter(function (user) {\r\n                        return user.FirstName.contains(filters.FirstName);\r\n                    });\r\n                if (filters.LastName)\r\n                    matchingUsers = matchingUsers.filter(function (user) {\r\n                        return user.LastName.contains(filters.LastName);\r\n                    });\r\n                // Return the collection.\r\n                return service.state.users.items.slice();\r\n            },\r\n        };\r\n        // Return service object.\r\n        return service;\r\n    },\r\n]);\r\n\n\n//# sourceURL=webpack://my-webpack-project/./app/services/appStoreService.ts?");

/***/ }),

/***/ "./app/services/index.ts":
/*!*******************************!*\
  !*** ./app/services/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _appStoreService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appStoreService */ \"./app/services/appStoreService.ts\");\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./app/services/index.ts?");

/***/ }),

/***/ "./app/view1/index.ts":
/*!****************************!*\
  !*** ./app/view1/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view1 */ \"./app/view1/view1.ts\");\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./app/view1/index.ts?");

/***/ }),

/***/ "./app/view1/view1.ts":
/*!****************************!*\
  !*** ./app/view1/view1.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_program__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/program */ \"./app/models/program.ts\");\n/* harmony import */ var angular_angular_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular/angular.min */ \"./node_modules/angular/angular.min.js\");\n/* harmony import */ var angular_angular_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular_angular_min__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nangular_angular_min__WEBPACK_IMPORTED_MODULE_1__.module('myApp.view1', ['ngRoute'])\r\n    .config(['$routeProvider', function ($routeProvider) {\r\n        $routeProvider.when('/view1', {\r\n            templateUrl: 'view1/view1.html',\r\n            controller: 'View1Ctrl'\r\n        });\r\n    }])\r\n    .controller('View1Ctrl', ['$scope', 'appStoreService', function ($scope, appStoreService) {\r\n        appStoreService.currentUser = appStoreService.getUsers(1);\r\n        $scope.currentUser = appStoreService.currentUser;\r\n        $scope.currentProgram = new _models_program__WEBPACK_IMPORTED_MODULE_0__.Program();\r\n    }]);\r\n\n\n//# sourceURL=webpack://my-webpack-project/./app/view1/view1.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {};
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./app/main.ts","vendors-node_modules_angular_angular_min_js"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmy_webpack_project"] = self["webpackChunkmy_webpack_project"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	__webpack_require__.x();
/******/ })()
;