/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/tabs/home.js":
/*!**************************!*\
  !*** ./src/tabs/home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayHomeTabContents)
/* harmony export */ });
function displayHomeTabContents(mainElem) {
    /* add this attribute in order to enable the property of the
    main[data-has-background-image='yes'] selector in '../styles/mainElem.css' */
    mainElem.setAttribute('data-tab', 'Home');

    return mainElem.dataset.tab;
}

/***/ }),

/***/ "./src/tabs/menu.js":
/*!**************************!*\
  !*** ./src/tabs/menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayMenuTabContents)
/* harmony export */ });
/* harmony import */ var _assets_doughnut_images_chocolate_doughnut_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/doughnut-images/chocolate-doughnut.png */ "./src/assets/doughnut-images/chocolate-doughnut.png");
/* harmony import */ var _assets_doughnut_images_pink_doughnut_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/doughnut-images/pink-doughnut.png */ "./src/assets/doughnut-images/pink-doughnut.png");
/* harmony import */ var _assets_doughnut_images_purple_doughnut_2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/doughnut-images/purple-doughnut-2.png */ "./src/assets/doughnut-images/purple-doughnut-2.png");
/* harmony import */ var _assets_doughnut_images_purple_doughnut_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/doughnut-images/purple-doughnut.png */ "./src/assets/doughnut-images/purple-doughnut.png");
/* harmony import */ var _assets_doughnut_images_white_chocolate_doughnut_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/doughnut-images/white-chocolate-doughnut.png */ "./src/assets/doughnut-images/white-chocolate-doughnut.png");
/* harmony import */ var _assets_doughnut_images_white_doughnut_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/doughnut-images/white-doughnut.png */ "./src/assets/doughnut-images/white-doughnut.png");







function displayMenuTabContents(mainElem) {
    const itemsHeadingElem = document.createElement('h2');
    itemsHeadingElem.textContent = 'Doughnuts';
    mainElem.appendChild(itemsHeadingElem);

    const menuElem = document.createElement('div');
    menuElem.setAttribute('id', 'menu-list');
    mainElem.appendChild(menuElem);

    createMenuCards(menuElem)

    return mainElem.dataset.tab;
}

const doughnuts = {
    'Chocolate Doughnut': _assets_doughnut_images_chocolate_doughnut_png__WEBPACK_IMPORTED_MODULE_0__,
    'Pink Doughnut': _assets_doughnut_images_pink_doughnut_png__WEBPACK_IMPORTED_MODULE_1__,
    'Purple Doughnut II': _assets_doughnut_images_purple_doughnut_2_png__WEBPACK_IMPORTED_MODULE_2__,
    'Purple Doughnut': _assets_doughnut_images_purple_doughnut_png__WEBPACK_IMPORTED_MODULE_3__,
    'White Chocolate Doughnut': _assets_doughnut_images_white_chocolate_doughnut_png__WEBPACK_IMPORTED_MODULE_4__,
    'White Doughnut': _assets_doughnut_images_white_doughnut_png__WEBPACK_IMPORTED_MODULE_5__,
}

function createMenuCards(div) {
    for (let i = 0; i < Object.keys(doughnuts).length; i++) {
        const itemCardElem = document.createElement('section');
        itemCardElem.setAttribute(`data-item`, i);
        div.appendChild(itemCardElem);

        const itemHyperlinkElem = document.createElement('a');
        itemHyperlinkElem.setAttribute('href', '#');
        itemHyperlinkElem.classList.add('item-link');
        itemCardElem.appendChild(itemHyperlinkElem);

        const h3 = document.createElement('h3');
        h3.classList.add('item-name');
        h3.textContent = Object.keys(doughnuts)[i];
        const doughnut = h3.textContent;
        itemHyperlinkElem.appendChild(h3);

        const img = document.createElement('img');
        img.src = `${doughnuts[doughnut]}`;
        img.classList.add('item-img');
        itemHyperlinkElem.insertBefore(img, h3);

        const para = document.createElement('p')
        para.classList.add('item-price');
        para.textContent = 'USD 1.25'
        itemHyperlinkElem.appendChild(para);
    }
}

/***/ }),

/***/ "./src/assets/doughnut-images/chocolate-doughnut.png":
/*!***********************************************************!*\
  !*** ./src/assets/doughnut-images/chocolate-doughnut.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9f67d4a3d7cf577c02bb.png";

/***/ }),

/***/ "./src/assets/doughnut-images/pink-doughnut.png":
/*!******************************************************!*\
  !*** ./src/assets/doughnut-images/pink-doughnut.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "99e8745273cbcd761beb.png";

/***/ }),

/***/ "./src/assets/doughnut-images/purple-doughnut-2.png":
/*!**********************************************************!*\
  !*** ./src/assets/doughnut-images/purple-doughnut-2.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e3071fe114950c90ec5b.png";

/***/ }),

/***/ "./src/assets/doughnut-images/purple-doughnut.png":
/*!********************************************************!*\
  !*** ./src/assets/doughnut-images/purple-doughnut.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "47484dce47eceb78d6ed.png";

/***/ }),

/***/ "./src/assets/doughnut-images/white-chocolate-doughnut.png":
/*!*****************************************************************!*\
  !*** ./src/assets/doughnut-images/white-chocolate-doughnut.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "18850e5f99b8a1519e50.png";

/***/ }),

/***/ "./src/assets/doughnut-images/white-doughnut.png":
/*!*******************************************************!*\
  !*** ./src/assets/doughnut-images/white-doughnut.png ***!
  \*******************************************************/
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabs_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs/home */ "./src/tabs/home.js");
/* harmony import */ var _tabs_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs/menu */ "./src/tabs/menu.js");



const mainElem = document.querySelector('main');

let currentTab = (0,_tabs_home__WEBPACK_IMPORTED_MODULE_0__["default"])(mainElem);

function clearTabContents(newTab) {
    if (currentTab === 'Home') {
        /* Setting the attribute's value into 'no' removes the background
        image of this element and toggles a selector in main.css file that
        adds a padding into this element */
        mainElem.setAttribute('data-tab', newTab);
    } else {
        /* A method that removes the element's children if no parameter is
        specified. It was said to be a faster approach of removing element's
        children hence I go with it. */
        mainElem.replaceChildren()
    }
}

const tablist = document.querySelector('#tablist');
tablist.addEventListener('click', (e) => {
    if (e.target.textContent !== currentTab) {
        clearTabContents(e.target.textContent);

        switch (e.target.textContent) {
            case 'Home':
                console.log(e.target.textContent);
                currentTab = (0,_tabs_home__WEBPACK_IMPORTED_MODULE_0__["default"])(mainElem);
                break;
            case 'Menu':
                console.log(e.target.textContent);
                currentTab = (0,_tabs_menu__WEBPACK_IMPORTED_MODULE_1__["default"])(mainElem);
                break;
            case 'Contact':
                console.log(e.target.textContent);
        }

    }
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTmlGO0FBQ1A7QUFDTztBQUNIO0FBQ2lCO0FBQ25COztBQUU3RDtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQiwyRUFBaUI7QUFDM0MscUJBQXFCLHNFQUFlO0FBQ3BDLDBCQUEwQiwwRUFBa0I7QUFDNUMsdUJBQXVCLHdFQUFpQjtBQUN4QyxnQ0FBZ0MsaUZBQXlCO0FBQ3pELHNCQUFzQix1RUFBZ0I7QUFDdEM7O0FBRUE7QUFDQSxvQkFBb0IsbUNBQW1DO0FBQ3ZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLG9CQUFvQjtBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7O0FDZmlEO0FBQ0E7O0FBRWpEOztBQUVBLGlCQUFpQixzREFBc0I7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHNEQUFzQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsc0RBQXNCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGFydXJhbnQtcGFnZS8uL3NyYy90YWJzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGFydXJhbnQtcGFnZS8uL3NyYy90YWJzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGFydXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXJ1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXJ1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGFydXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhcnVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXJ1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhcnVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheUhvbWVUYWJDb250ZW50cyhtYWluRWxlbSkge1xuICAgIC8qIGFkZCB0aGlzIGF0dHJpYnV0ZSBpbiBvcmRlciB0byBlbmFibGUgdGhlIHByb3BlcnR5IG9mIHRoZVxuICAgIG1haW5bZGF0YS1oYXMtYmFja2dyb3VuZC1pbWFnZT0neWVzJ10gc2VsZWN0b3IgaW4gJy4uL3N0eWxlcy9tYWluRWxlbS5jc3MnICovXG4gICAgbWFpbkVsZW0uc2V0QXR0cmlidXRlKCdkYXRhLXRhYicsICdIb21lJyk7XG5cbiAgICByZXR1cm4gbWFpbkVsZW0uZGF0YXNldC50YWI7XG59IiwiaW1wb3J0IGNob2NvbGF0ZURvbnV0SW1nIGZyb20gXCIuLi9hc3NldHMvZG91Z2hudXQtaW1hZ2VzL2Nob2NvbGF0ZS1kb3VnaG51dC5wbmdcIjtcbmltcG9ydCBwaW5rRG91Z2hudXRJbWcgZnJvbSBcIi4uL2Fzc2V0cy9kb3VnaG51dC1pbWFnZXMvcGluay1kb3VnaG51dC5wbmdcIjtcbmltcG9ydCBwdXJwbGVEb3VnaG51dDJJbWcgZnJvbSBcIi4uL2Fzc2V0cy9kb3VnaG51dC1pbWFnZXMvcHVycGxlLWRvdWdobnV0LTIucG5nXCI7XG5pbXBvcnQgcHVycGxlRG91Z2hudXRJbWcgZnJvbSBcIi4uL2Fzc2V0cy9kb3VnaG51dC1pbWFnZXMvcHVycGxlLWRvdWdobnV0LnBuZ1wiO1xuaW1wb3J0IHdoaXRlQ2hvY29sYXRlRG91Z2hudXRJbWcgZnJvbSBcIi4uL2Fzc2V0cy9kb3VnaG51dC1pbWFnZXMvd2hpdGUtY2hvY29sYXRlLWRvdWdobnV0LnBuZ1wiO1xuaW1wb3J0IHdoaXRlRG91Z2hudXRJbWcgZnJvbSBcIi4uL2Fzc2V0cy9kb3VnaG51dC1pbWFnZXMvd2hpdGUtZG91Z2hudXQucG5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlNZW51VGFiQ29udGVudHMobWFpbkVsZW0pIHtcbiAgICBjb25zdCBpdGVtc0hlYWRpbmdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBpdGVtc0hlYWRpbmdFbGVtLnRleHRDb250ZW50ID0gJ0RvdWdobnV0cyc7XG4gICAgbWFpbkVsZW0uYXBwZW5kQ2hpbGQoaXRlbXNIZWFkaW5nRWxlbSk7XG5cbiAgICBjb25zdCBtZW51RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVFbGVtLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1saXN0Jyk7XG4gICAgbWFpbkVsZW0uYXBwZW5kQ2hpbGQobWVudUVsZW0pO1xuXG4gICAgY3JlYXRlTWVudUNhcmRzKG1lbnVFbGVtKVxuXG4gICAgcmV0dXJuIG1haW5FbGVtLmRhdGFzZXQudGFiO1xufVxuXG5jb25zdCBkb3VnaG51dHMgPSB7XG4gICAgJ0Nob2NvbGF0ZSBEb3VnaG51dCc6IGNob2NvbGF0ZURvbnV0SW1nLFxuICAgICdQaW5rIERvdWdobnV0JzogcGlua0RvdWdobnV0SW1nLFxuICAgICdQdXJwbGUgRG91Z2hudXQgSUknOiBwdXJwbGVEb3VnaG51dDJJbWcsXG4gICAgJ1B1cnBsZSBEb3VnaG51dCc6IHB1cnBsZURvdWdobnV0SW1nLFxuICAgICdXaGl0ZSBDaG9jb2xhdGUgRG91Z2hudXQnOiB3aGl0ZUNob2NvbGF0ZURvdWdobnV0SW1nLFxuICAgICdXaGl0ZSBEb3VnaG51dCc6IHdoaXRlRG91Z2hudXRJbWcsXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVDYXJkcyhkaXYpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE9iamVjdC5rZXlzKGRvdWdobnV0cykubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgaXRlbUNhcmRFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgICAgICBpdGVtQ2FyZEVsZW0uc2V0QXR0cmlidXRlKGBkYXRhLWl0ZW1gLCBpKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGl0ZW1DYXJkRWxlbSk7XG5cbiAgICAgICAgY29uc3QgaXRlbUh5cGVybGlua0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGl0ZW1IeXBlcmxpbmtFbGVtLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyk7XG4gICAgICAgIGl0ZW1IeXBlcmxpbmtFbGVtLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tbGluaycpO1xuICAgICAgICBpdGVtQ2FyZEVsZW0uYXBwZW5kQ2hpbGQoaXRlbUh5cGVybGlua0VsZW0pO1xuXG4gICAgICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgaDMuY2xhc3NMaXN0LmFkZCgnaXRlbS1uYW1lJyk7XG4gICAgICAgIGgzLnRleHRDb250ZW50ID0gT2JqZWN0LmtleXMoZG91Z2hudXRzKVtpXTtcbiAgICAgICAgY29uc3QgZG91Z2hudXQgPSBoMy50ZXh0Q29udGVudDtcbiAgICAgICAgaXRlbUh5cGVybGlua0VsZW0uYXBwZW5kQ2hpbGQoaDMpO1xuXG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpbWcuc3JjID0gYCR7ZG91Z2hudXRzW2RvdWdobnV0XX1gO1xuICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZCgnaXRlbS1pbWcnKTtcbiAgICAgICAgaXRlbUh5cGVybGlua0VsZW0uaW5zZXJ0QmVmb3JlKGltZywgaDMpO1xuXG4gICAgICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgcGFyYS5jbGFzc0xpc3QuYWRkKCdpdGVtLXByaWNlJyk7XG4gICAgICAgIHBhcmEudGV4dENvbnRlbnQgPSAnVVNEIDEuMjUnXG4gICAgICAgIGl0ZW1IeXBlcmxpbmtFbGVtLmFwcGVuZENoaWxkKHBhcmEpO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgZGlzcGxheUhvbWVUYWJDb250ZW50cyBmcm9tIFwiLi90YWJzL2hvbWVcIjtcbmltcG9ydCBkaXNwbGF5TWVudVRhYkNvbnRlbnRzIGZyb20gXCIuL3RhYnMvbWVudVwiO1xuXG5jb25zdCBtYWluRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxubGV0IGN1cnJlbnRUYWIgPSBkaXNwbGF5SG9tZVRhYkNvbnRlbnRzKG1haW5FbGVtKTtcblxuZnVuY3Rpb24gY2xlYXJUYWJDb250ZW50cyhuZXdUYWIpIHtcbiAgICBpZiAoY3VycmVudFRhYiA9PT0gJ0hvbWUnKSB7XG4gICAgICAgIC8qIFNldHRpbmcgdGhlIGF0dHJpYnV0ZSdzIHZhbHVlIGludG8gJ25vJyByZW1vdmVzIHRoZSBiYWNrZ3JvdW5kXG4gICAgICAgIGltYWdlIG9mIHRoaXMgZWxlbWVudCBhbmQgdG9nZ2xlcyBhIHNlbGVjdG9yIGluIG1haW4uY3NzIGZpbGUgdGhhdFxuICAgICAgICBhZGRzIGEgcGFkZGluZyBpbnRvIHRoaXMgZWxlbWVudCAqL1xuICAgICAgICBtYWluRWxlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFiJywgbmV3VGFiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvKiBBIG1ldGhvZCB0aGF0IHJlbW92ZXMgdGhlIGVsZW1lbnQncyBjaGlsZHJlbiBpZiBubyBwYXJhbWV0ZXIgaXNcbiAgICAgICAgc3BlY2lmaWVkLiBJdCB3YXMgc2FpZCB0byBiZSBhIGZhc3RlciBhcHByb2FjaCBvZiByZW1vdmluZyBlbGVtZW50J3NcbiAgICAgICAgY2hpbGRyZW4gaGVuY2UgSSBnbyB3aXRoIGl0LiAqL1xuICAgICAgICBtYWluRWxlbS5yZXBsYWNlQ2hpbGRyZW4oKVxuICAgIH1cbn1cblxuY29uc3QgdGFibGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsaXN0Jyk7XG50YWJsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgIT09IGN1cnJlbnRUYWIpIHtcbiAgICAgICAgY2xlYXJUYWJDb250ZW50cyhlLnRhcmdldC50ZXh0Q29udGVudCk7XG5cbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgY2FzZSAnSG9tZSc6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUYWIgPSBkaXNwbGF5SG9tZVRhYkNvbnRlbnRzKG1haW5FbGVtKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ01lbnUnOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnRleHRDb250ZW50KTtcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFiID0gZGlzcGxheU1lbnVUYWJDb250ZW50cyhtYWluRWxlbSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdDb250YWN0JzpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC50ZXh0Q29udGVudCk7XG4gICAgICAgIH1cblxuICAgIH1cbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9