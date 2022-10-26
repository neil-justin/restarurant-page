/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/assets/doughnut-images/chocolate-doughnut.png":
/*!************************************************************!*\
  !*** ./dist/assets/doughnut-images/chocolate-doughnut.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9f67d4a3d7cf577c02bb.png";

/***/ }),

/***/ "./dist/assets/doughnut-images/pink-doughnut.png":
/*!*******************************************************!*\
  !*** ./dist/assets/doughnut-images/pink-doughnut.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "99e8745273cbcd761beb.png";

/***/ }),

/***/ "./dist/assets/doughnut-images/purple-doughnut-2.png":
/*!***********************************************************!*\
  !*** ./dist/assets/doughnut-images/purple-doughnut-2.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e3071fe114950c90ec5b.png";

/***/ }),

/***/ "./dist/assets/doughnut-images/purple-doughnut.png":
/*!*********************************************************!*\
  !*** ./dist/assets/doughnut-images/purple-doughnut.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "47484dce47eceb78d6ed.png";

/***/ }),

/***/ "./dist/assets/doughnut-images/white-chocolate-doughnut.png":
/*!******************************************************************!*\
  !*** ./dist/assets/doughnut-images/white-chocolate-doughnut.png ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "18850e5f99b8a1519e50.png";

/***/ }),

/***/ "./dist/assets/doughnut-images/white-doughnut.png":
/*!********************************************************!*\
  !*** ./dist/assets/doughnut-images/white-doughnut.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c79056fa99c7ccb928a5.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/************************************************************************/
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/tabs/menu.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayMenuTabContents)
/* harmony export */ });
/* harmony import */ var _dist_assets_doughnut_images_chocolate_doughnut_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dist/assets/doughnut-images/chocolate-doughnut.png */ "./dist/assets/doughnut-images/chocolate-doughnut.png");
/* harmony import */ var _dist_assets_doughnut_images_pink_doughnut_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dist/assets/doughnut-images/pink-doughnut.png */ "./dist/assets/doughnut-images/pink-doughnut.png");
/* harmony import */ var _dist_assets_doughnut_images_purple_doughnut_2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dist/assets/doughnut-images/purple-doughnut-2.png */ "./dist/assets/doughnut-images/purple-doughnut-2.png");
/* harmony import */ var _dist_assets_doughnut_images_purple_doughnut_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dist/assets/doughnut-images/purple-doughnut.png */ "./dist/assets/doughnut-images/purple-doughnut.png");
/* harmony import */ var _dist_assets_doughnut_images_white_chocolate_doughnut_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dist/assets/doughnut-images/white-chocolate-doughnut.png */ "./dist/assets/doughnut-images/white-chocolate-doughnut.png");
/* harmony import */ var _dist_assets_doughnut_images_white_doughnut_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dist/assets/doughnut-images/white-doughnut.png */ "./dist/assets/doughnut-images/white-doughnut.png");







function displayMenuTabContents(mainElem) {
    const itemsHeadingElem = document.createElement('h2');
    itemsHeadingElem.textContent = 'Doughnuts';
    mainElem.appendChild(itemsHeadingElem);

    const menuElem = document.createElement('div');
    menuElem.setAttribute('id', 'menu-list');
    mainElem.appendChild(menuElem);

    createItemCards(menuElem)

    return mainElem.dataset.tab;
}

const doughnuts = {
    'Chocolate Doughnut': _dist_assets_doughnut_images_chocolate_doughnut_png__WEBPACK_IMPORTED_MODULE_0__,
    'Pink Doughnut': _dist_assets_doughnut_images_pink_doughnut_png__WEBPACK_IMPORTED_MODULE_1__,
    'Purple Doughnut II': _dist_assets_doughnut_images_purple_doughnut_2_png__WEBPACK_IMPORTED_MODULE_2__,
    'Purple Doughnut': _dist_assets_doughnut_images_purple_doughnut_png__WEBPACK_IMPORTED_MODULE_3__,
    'White Chocolate Doughnut': _dist_assets_doughnut_images_white_chocolate_doughnut_png__WEBPACK_IMPORTED_MODULE_4__,
    'White Doughnut': _dist_assets_doughnut_images_white_doughnut_png__WEBPACK_IMPORTED_MODULE_5__,
}

function createItemCards(div) {
    for (let i = 0; i < Object.keys(doughnuts).length; i++) {
        const itemCardElem = document.createElement('section');
        itemCardElem.setAttribute(`data-item`, i);
        div.appendChild(itemCardElem);

        const itemHyperlinkElem = document.createElement('a');
        itemHyperlinkElem.setAttribute('href', '#');
        itemHyperlinkElem.classList.add('item-link');
        itemCardElem.appendChild(itemHyperlinkElem);

        const itemNameElem = document.createElement('h3');
        itemNameElem.classList.add('item-name');
        itemNameElem.textContent = Object.keys(doughnuts)[i];
        const doughnut = itemNameElem.textContent;
        itemHyperlinkElem.appendChild(itemNameElem);

        const itemImgElem = document.createElement('img');
        itemImgElem.src = `${doughnuts[doughnut]}`;
        itemImgElem.classList.add('item-img');
        itemHyperlinkElem.insertBefore(itemImgElem, itemNameElem);

        const itemPriceElem = document.createElement('p')
        itemPriceElem.classList.add('item-price');
        itemPriceElem.textContent = 'USD 1.25'
        itemHyperlinkElem.appendChild(itemPriceElem);
    }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZndGO0FBQ1A7QUFDUTtBQUNIO0FBQ2lCO0FBQ25COztBQUVyRTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixnRkFBaUI7QUFDM0MscUJBQXFCLDJFQUFlO0FBQ3BDLDBCQUEwQiwrRUFBa0I7QUFDNUMsdUJBQXVCLDZFQUFpQjtBQUN4QyxnQ0FBZ0Msc0ZBQXlCO0FBQ3pELHNCQUFzQiw0RUFBZ0I7QUFDdEM7O0FBRUE7QUFDQSxvQkFBb0IsbUNBQW1DO0FBQ3ZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLG9CQUFvQjtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGFydXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXJ1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXJ1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGFydXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhcnVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXJ1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhcnVyYW50LXBhZ2UvLi9zcmMvdGFicy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBjaG9jb2xhdGVEb251dEltZyBmcm9tIFwiLi4vLi4vZGlzdC9hc3NldHMvZG91Z2hudXQtaW1hZ2VzL2Nob2NvbGF0ZS1kb3VnaG51dC5wbmdcIlxuaW1wb3J0IHBpbmtEb3VnaG51dEltZyBmcm9tIFwiLi4vLi4vZGlzdC9hc3NldHMvZG91Z2hudXQtaW1hZ2VzL3BpbmstZG91Z2hudXQucG5nXCJcbmltcG9ydCBwdXJwbGVEb3VnaG51dDJJbWcgZnJvbSBcIi4uLy4uL2Rpc3QvYXNzZXRzL2RvdWdobnV0LWltYWdlcy9wdXJwbGUtZG91Z2hudXQtMi5wbmdcIjtcbmltcG9ydCBwdXJwbGVEb3VnaG51dEltZyBmcm9tIFwiLi4vLi4vZGlzdC9hc3NldHMvZG91Z2hudXQtaW1hZ2VzL3B1cnBsZS1kb3VnaG51dC5wbmdcIjtcbmltcG9ydCB3aGl0ZUNob2NvbGF0ZURvdWdobnV0SW1nIGZyb20gXCIuLi8uLi9kaXN0L2Fzc2V0cy9kb3VnaG51dC1pbWFnZXMvd2hpdGUtY2hvY29sYXRlLWRvdWdobnV0LnBuZ1wiO1xuaW1wb3J0IHdoaXRlRG91Z2hudXRJbWcgZnJvbSBcIi4uLy4uL2Rpc3QvYXNzZXRzL2RvdWdobnV0LWltYWdlcy93aGl0ZS1kb3VnaG51dC5wbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheU1lbnVUYWJDb250ZW50cyhtYWluRWxlbSkge1xuICAgIGNvbnN0IGl0ZW1zSGVhZGluZ0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGl0ZW1zSGVhZGluZ0VsZW0udGV4dENvbnRlbnQgPSAnRG91Z2hudXRzJztcbiAgICBtYWluRWxlbS5hcHBlbmRDaGlsZChpdGVtc0hlYWRpbmdFbGVtKTtcblxuICAgIGNvbnN0IG1lbnVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUVsZW0uc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LWxpc3QnKTtcbiAgICBtYWluRWxlbS5hcHBlbmRDaGlsZChtZW51RWxlbSk7XG5cbiAgICBjcmVhdGVJdGVtQ2FyZHMobWVudUVsZW0pXG5cbiAgICByZXR1cm4gbWFpbkVsZW0uZGF0YXNldC50YWI7XG59XG5cbmNvbnN0IGRvdWdobnV0cyA9IHtcbiAgICAnQ2hvY29sYXRlIERvdWdobnV0JzogY2hvY29sYXRlRG9udXRJbWcsXG4gICAgJ1BpbmsgRG91Z2hudXQnOiBwaW5rRG91Z2hudXRJbWcsXG4gICAgJ1B1cnBsZSBEb3VnaG51dCBJSSc6IHB1cnBsZURvdWdobnV0MkltZyxcbiAgICAnUHVycGxlIERvdWdobnV0JzogcHVycGxlRG91Z2hudXRJbWcsXG4gICAgJ1doaXRlIENob2NvbGF0ZSBEb3VnaG51dCc6IHdoaXRlQ2hvY29sYXRlRG91Z2hudXRJbWcsXG4gICAgJ1doaXRlIERvdWdobnV0Jzogd2hpdGVEb3VnaG51dEltZyxcbn1cblxuZnVuY3Rpb24gY3JlYXRlSXRlbUNhcmRzKGRpdikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgT2JqZWN0LmtleXMoZG91Z2hudXRzKS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBpdGVtQ2FyZEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICAgIGl0ZW1DYXJkRWxlbS5zZXRBdHRyaWJ1dGUoYGRhdGEtaXRlbWAsIGkpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaXRlbUNhcmRFbGVtKTtcblxuICAgICAgICBjb25zdCBpdGVtSHlwZXJsaW5rRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgaXRlbUh5cGVybGlua0VsZW0uc2V0QXR0cmlidXRlKCdocmVmJywgJyMnKTtcbiAgICAgICAgaXRlbUh5cGVybGlua0VsZW0uY2xhc3NMaXN0LmFkZCgnaXRlbS1saW5rJyk7XG4gICAgICAgIGl0ZW1DYXJkRWxlbS5hcHBlbmRDaGlsZChpdGVtSHlwZXJsaW5rRWxlbSk7XG5cbiAgICAgICAgY29uc3QgaXRlbU5hbWVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgaXRlbU5hbWVFbGVtLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tbmFtZScpO1xuICAgICAgICBpdGVtTmFtZUVsZW0udGV4dENvbnRlbnQgPSBPYmplY3Qua2V5cyhkb3VnaG51dHMpW2ldO1xuICAgICAgICBjb25zdCBkb3VnaG51dCA9IGl0ZW1OYW1lRWxlbS50ZXh0Q29udGVudDtcbiAgICAgICAgaXRlbUh5cGVybGlua0VsZW0uYXBwZW5kQ2hpbGQoaXRlbU5hbWVFbGVtKTtcblxuICAgICAgICBjb25zdCBpdGVtSW1nRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpdGVtSW1nRWxlbS5zcmMgPSBgJHtkb3VnaG51dHNbZG91Z2hudXRdfWA7XG4gICAgICAgIGl0ZW1JbWdFbGVtLmNsYXNzTGlzdC5hZGQoJ2l0ZW0taW1nJyk7XG4gICAgICAgIGl0ZW1IeXBlcmxpbmtFbGVtLmluc2VydEJlZm9yZShpdGVtSW1nRWxlbSwgaXRlbU5hbWVFbGVtKTtcblxuICAgICAgICBjb25zdCBpdGVtUHJpY2VFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIGl0ZW1QcmljZUVsZW0uY2xhc3NMaXN0LmFkZCgnaXRlbS1wcmljZScpO1xuICAgICAgICBpdGVtUHJpY2VFbGVtLnRleHRDb250ZW50ID0gJ1VTRCAxLjI1J1xuICAgICAgICBpdGVtSHlwZXJsaW5rRWxlbS5hcHBlbmRDaGlsZChpdGVtUHJpY2VFbGVtKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9