(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Platform"] = factory();
	else
		root["Platform"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ua = window.navigator.userAgent.toLowerCase();
var html = document.getElementsByTagName('html')[0];

var Component = function Component() {
    _classCallCheck(this, Component);
};

Component.hasTouch = 'ontouchstart' in window;
Component.isiPad = ua.match(/ipad/i) !== null;
Component.isNexus7 = ua.match(/Nexus 7/gi) !== null;
Component.isMobile = ua.match(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile/i) !== null && ua.match(/Mobile/i) !== null;
Component.isiPhone = ua.match(/iphone/i) !== null;
Component.isAndroid = ua.match(/android/i) !== null;
Component.isS4 = ua.match(/(gt-i95)|(sph-l720)/i) !== null;
Component.isS5 = ua.match(/sm-g900/i) !== null;
Component.isS6 = ua.match(/sm-g9250/i) !== null;
Component.isS7 = ua.match(/sm-g930(0|p|v)/i) !== null;
Component.isIE = ua.match(/(msie|trident)/i) !== null;
Component.isIE11 = ua.match(/Trident\/7\.0/i) !== null;
Component.isEdge = ua.match(/edge/i) !== null;
Component.isChrome = ua.match(/chrome/gi) !== null && ua.match(/edge/gi) === null;
Component.isSafari = ua.match(/safari/gi) !== null && ua.match(/chrome/gi) === null;
Component.isFirefox = ua.match(/firefox/gi) !== null;
Component.isMac = ua.match(/mac/gi) !== null;
Component.isWindows = ua.match(/windows/gi) !== null;
Component.isSamsungNative = ua.match(/samsung/gi) !== null;
Component.isAndroidPad = Component.isAndroid && !Component.isMobile;
Component.isTablet = Component.isiPad || Component.isAndroidPad;
Component.isDesktop = !(Component.isMobile || Component.isTablet);
Component.isIOS = Component.isiPad || Component.isiPhone;
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {

    for (var _iterator = Object.keys(Component)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var key = _step.value;

        var className = key.toLowerCase().replace('is', '');

        if (className.includes('has')) {
            className = className.replace('has', 'has-');
        }

        if (!Component[key]) {
            if (className.includes('has')) {
                className = className.replace('has', 'no');
            } else {
                className = 'not-' + className;
            }
        }

        html.classList.add(className);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

module.exports = Component;

/***/ })
/******/ ]);
});