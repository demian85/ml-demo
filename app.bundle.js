/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	function init() {
	    history.replaceState(null, null, '#product-description');
	    initCarousel();
	}

	function initCarousel() {
	    const slider = document.querySelector('#carousel-bar');
	    document.querySelector('#carousel .left-arrow').addEventListener('click', function(e) {
	        const current = slider.offsetLeft;
	        if (current < 0) {
	            slider.style.left = current + 100 + 'px';
	        }
	    });
	    document.querySelector('#carousel .right-arrow').addEventListener('click', function(e) {
	        const current = slider.offsetLeft;
	        slider.style.left = current - 100 + 'px';
	    });
	}

	window.addEventListener('DOMContentLoaded', init);


/***/ }
/******/ ]);