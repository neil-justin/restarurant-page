/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/tabs/contact.js":
/*!*****************************!*\
  !*** ./src/tabs/contact.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayContactTabContents)
/* harmony export */ });
function displayContactTabContents(mainElem) {
    const contactTabMainHeadingElem = document.createElement('h2');
    contactTabMainHeadingElem.textContent = 'Contact us';
    mainElem.appendChild(contactTabMainHeadingElem);

    const contactInfoContainerElem = document.createElement('div');
    contactInfoContainerElem.setAttribute('id', 'contact-info-container');
    mainElem.appendChild(contactInfoContainerElem);

    const contactNumberContainer = document.createElement('div');
    contactInfoContainerElem.appendChild(contactNumberContainer);

    const contactNumberHeadingElem = document.createElement('h3');
    contactNumberHeadingElem.textContent = 'Dial Number';
    contactNumberHeadingElem.classList.add('contact-info-headings');
    contactNumberContainer.appendChild(contactNumberHeadingElem);

    const contactNumberElem = document.createElement('p');
    contactNumberElem.textContent = '(074) 342-9259';
    contactNumberContainer.appendChild(contactNumberElem);

    const contactAddressContainer = document.createElement('div');
    contactInfoContainerElem.appendChild(contactAddressContainer);

    const addressHeadingElem = document.createElement('h3');
    addressHeadingElem.textContent = 'Address';
    addressHeadingElem.classList.add('contact-info-headings');
    contactAddressContainer.appendChild(addressHeadingElem);

    const addressElem = document.createElement('p');
    addressElem.textContent = 'Pedro Gil St, Ermita, Manila, 1000 Metro Manila';
    contactAddressContainer.appendChild(addressElem);

    return mainElem.dataset.tab;
}

/***/ }),

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

/***/ }),

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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabs_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs/home */ "./src/tabs/home.js");
/* harmony import */ var _tabs_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs/menu */ "./src/tabs/menu.js");
/* harmony import */ var _tabs_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/contact */ "./src/tabs/contact.js");




const mainElem = document.querySelector('main');

let currentTab = (0,_tabs_home__WEBPACK_IMPORTED_MODULE_0__["default"])(mainElem);

function clearTabContents(openTab) {
        /* Setting the attribute's value removes the background
        image of <main> element when the opened tab is the Home tab. */
        mainElem.setAttribute('data-tab', openTab);
        
    if (currentTab !== 'Home') {
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
                currentTab = (0,_tabs_home__WEBPACK_IMPORTED_MODULE_0__["default"])(mainElem);
                break;
            case 'Menu':
                currentTab = (0,_tabs_menu__WEBPACK_IMPORTED_MODULE_1__["default"])(mainElem);
                break;
            case 'Contact':
                currentTab = (0,_tabs_contact__WEBPACK_IMPORTED_MODULE_2__["default"])(mainElem);
        }

        console.log(currentTab);
    }
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbENlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTndGO0FBQ1A7QUFDUTtBQUNIO0FBQ2lCO0FBQ25COztBQUVyRTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixnRkFBaUI7QUFDM0MscUJBQXFCLDJFQUFlO0FBQ3BDLDBCQUEwQiwrRUFBa0I7QUFDNUMsdUJBQXVCLDZFQUFpQjtBQUN4QyxnQ0FBZ0Msc0ZBQXlCO0FBQ3pELHNCQUFzQiw0RUFBZ0I7QUFDdEM7O0FBRUE7QUFDQSxvQkFBb0IsbUNBQW1DO0FBQ3ZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLG9CQUFvQjtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7OztBQ2ZpRDtBQUNBO0FBQ007O0FBRXZEOztBQUVBLGlCQUFpQixzREFBc0I7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCLHNEQUFzQjtBQUNuRDtBQUNBO0FBQ0EsNkJBQTZCLHNEQUFzQjtBQUNuRDtBQUNBO0FBQ0EsNkJBQTZCLHlEQUF5QjtBQUN0RDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGFydXJhbnQtcGFnZS8uL3NyYy90YWJzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGFydXJhbnQtcGFnZS8uL3NyYy90YWJzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGFydXJhbnQtcGFnZS8uL3NyYy90YWJzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGFydXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXJ1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXJ1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGFydXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhcnVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXJ1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhcnVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheUNvbnRhY3RUYWJDb250ZW50cyhtYWluRWxlbSkge1xuICAgIGNvbnN0IGNvbnRhY3RUYWJNYWluSGVhZGluZ0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnRhY3RUYWJNYWluSGVhZGluZ0VsZW0udGV4dENvbnRlbnQgPSAnQ29udGFjdCB1cyc7XG4gICAgbWFpbkVsZW0uYXBwZW5kQ2hpbGQoY29udGFjdFRhYk1haW5IZWFkaW5nRWxlbSk7XG5cbiAgICBjb25zdCBjb250YWN0SW5mb0NvbnRhaW5lckVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0SW5mb0NvbnRhaW5lckVsZW0uc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LWluZm8tY29udGFpbmVyJyk7XG4gICAgbWFpbkVsZW0uYXBwZW5kQ2hpbGQoY29udGFjdEluZm9Db250YWluZXJFbGVtKTtcblxuICAgIGNvbnN0IGNvbnRhY3ROdW1iZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0SW5mb0NvbnRhaW5lckVsZW0uYXBwZW5kQ2hpbGQoY29udGFjdE51bWJlckNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBjb250YWN0TnVtYmVySGVhZGluZ0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnRhY3ROdW1iZXJIZWFkaW5nRWxlbS50ZXh0Q29udGVudCA9ICdEaWFsIE51bWJlcic7XG4gICAgY29udGFjdE51bWJlckhlYWRpbmdFbGVtLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtaW5mby1oZWFkaW5ncycpO1xuICAgIGNvbnRhY3ROdW1iZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdE51bWJlckhlYWRpbmdFbGVtKTtcblxuICAgIGNvbnN0IGNvbnRhY3ROdW1iZXJFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRhY3ROdW1iZXJFbGVtLnRleHRDb250ZW50ID0gJygwNzQpIDM0Mi05MjU5JztcbiAgICBjb250YWN0TnVtYmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3ROdW1iZXJFbGVtKTtcblxuICAgIGNvbnN0IGNvbnRhY3RBZGRyZXNzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdEluZm9Db250YWluZXJFbGVtLmFwcGVuZENoaWxkKGNvbnRhY3RBZGRyZXNzQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGFkZHJlc3NIZWFkaW5nRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgYWRkcmVzc0hlYWRpbmdFbGVtLnRleHRDb250ZW50ID0gJ0FkZHJlc3MnO1xuICAgIGFkZHJlc3NIZWFkaW5nRWxlbS5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWluZm8taGVhZGluZ3MnKTtcbiAgICBjb250YWN0QWRkcmVzc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRyZXNzSGVhZGluZ0VsZW0pO1xuXG4gICAgY29uc3QgYWRkcmVzc0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWRkcmVzc0VsZW0udGV4dENvbnRlbnQgPSAnUGVkcm8gR2lsIFN0LCBFcm1pdGEsIE1hbmlsYSwgMTAwMCBNZXRybyBNYW5pbGEnO1xuICAgIGNvbnRhY3RBZGRyZXNzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZHJlc3NFbGVtKTtcblxuICAgIHJldHVybiBtYWluRWxlbS5kYXRhc2V0LnRhYjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5SG9tZVRhYkNvbnRlbnRzKG1haW5FbGVtKSB7XG4gICAgLyogYWRkIHRoaXMgYXR0cmlidXRlIGluIG9yZGVyIHRvIGVuYWJsZSB0aGUgcHJvcGVydHkgb2YgdGhlXG4gICAgbWFpbltkYXRhLWhhcy1iYWNrZ3JvdW5kLWltYWdlPSd5ZXMnXSBzZWxlY3RvciBpbiAnLi4vc3R5bGVzL21haW5FbGVtLmNzcycgKi9cbiAgICBtYWluRWxlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFiJywgJ0hvbWUnKTtcblxuICAgIHJldHVybiBtYWluRWxlbS5kYXRhc2V0LnRhYjtcbn0iLCJpbXBvcnQgY2hvY29sYXRlRG9udXRJbWcgZnJvbSBcIi4uLy4uL2Rpc3QvYXNzZXRzL2RvdWdobnV0LWltYWdlcy9jaG9jb2xhdGUtZG91Z2hudXQucG5nXCJcbmltcG9ydCBwaW5rRG91Z2hudXRJbWcgZnJvbSBcIi4uLy4uL2Rpc3QvYXNzZXRzL2RvdWdobnV0LWltYWdlcy9waW5rLWRvdWdobnV0LnBuZ1wiXG5pbXBvcnQgcHVycGxlRG91Z2hudXQySW1nIGZyb20gXCIuLi8uLi9kaXN0L2Fzc2V0cy9kb3VnaG51dC1pbWFnZXMvcHVycGxlLWRvdWdobnV0LTIucG5nXCI7XG5pbXBvcnQgcHVycGxlRG91Z2hudXRJbWcgZnJvbSBcIi4uLy4uL2Rpc3QvYXNzZXRzL2RvdWdobnV0LWltYWdlcy9wdXJwbGUtZG91Z2hudXQucG5nXCI7XG5pbXBvcnQgd2hpdGVDaG9jb2xhdGVEb3VnaG51dEltZyBmcm9tIFwiLi4vLi4vZGlzdC9hc3NldHMvZG91Z2hudXQtaW1hZ2VzL3doaXRlLWNob2NvbGF0ZS1kb3VnaG51dC5wbmdcIjtcbmltcG9ydCB3aGl0ZURvdWdobnV0SW1nIGZyb20gXCIuLi8uLi9kaXN0L2Fzc2V0cy9kb3VnaG51dC1pbWFnZXMvd2hpdGUtZG91Z2hudXQucG5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlNZW51VGFiQ29udGVudHMobWFpbkVsZW0pIHtcbiAgICBjb25zdCBpdGVtc0hlYWRpbmdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBpdGVtc0hlYWRpbmdFbGVtLnRleHRDb250ZW50ID0gJ0RvdWdobnV0cyc7XG4gICAgbWFpbkVsZW0uYXBwZW5kQ2hpbGQoaXRlbXNIZWFkaW5nRWxlbSk7XG5cbiAgICBjb25zdCBtZW51RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVFbGVtLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1saXN0Jyk7XG4gICAgbWFpbkVsZW0uYXBwZW5kQ2hpbGQobWVudUVsZW0pO1xuXG4gICAgY3JlYXRlSXRlbUNhcmRzKG1lbnVFbGVtKVxuXG4gICAgcmV0dXJuIG1haW5FbGVtLmRhdGFzZXQudGFiO1xufVxuXG5jb25zdCBkb3VnaG51dHMgPSB7XG4gICAgJ0Nob2NvbGF0ZSBEb3VnaG51dCc6IGNob2NvbGF0ZURvbnV0SW1nLFxuICAgICdQaW5rIERvdWdobnV0JzogcGlua0RvdWdobnV0SW1nLFxuICAgICdQdXJwbGUgRG91Z2hudXQgSUknOiBwdXJwbGVEb3VnaG51dDJJbWcsXG4gICAgJ1B1cnBsZSBEb3VnaG51dCc6IHB1cnBsZURvdWdobnV0SW1nLFxuICAgICdXaGl0ZSBDaG9jb2xhdGUgRG91Z2hudXQnOiB3aGl0ZUNob2NvbGF0ZURvdWdobnV0SW1nLFxuICAgICdXaGl0ZSBEb3VnaG51dCc6IHdoaXRlRG91Z2hudXRJbWcsXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUl0ZW1DYXJkcyhkaXYpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE9iamVjdC5rZXlzKGRvdWdobnV0cykubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgaXRlbUNhcmRFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgICAgICBpdGVtQ2FyZEVsZW0uc2V0QXR0cmlidXRlKGBkYXRhLWl0ZW1gLCBpKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGl0ZW1DYXJkRWxlbSk7XG5cbiAgICAgICAgY29uc3QgaXRlbUh5cGVybGlua0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGl0ZW1IeXBlcmxpbmtFbGVtLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyk7XG4gICAgICAgIGl0ZW1IeXBlcmxpbmtFbGVtLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tbGluaycpO1xuICAgICAgICBpdGVtQ2FyZEVsZW0uYXBwZW5kQ2hpbGQoaXRlbUh5cGVybGlua0VsZW0pO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1OYW1lRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGl0ZW1OYW1lRWxlbS5jbGFzc0xpc3QuYWRkKCdpdGVtLW5hbWUnKTtcbiAgICAgICAgaXRlbU5hbWVFbGVtLnRleHRDb250ZW50ID0gT2JqZWN0LmtleXMoZG91Z2hudXRzKVtpXTtcbiAgICAgICAgY29uc3QgZG91Z2hudXQgPSBpdGVtTmFtZUVsZW0udGV4dENvbnRlbnQ7XG4gICAgICAgIGl0ZW1IeXBlcmxpbmtFbGVtLmFwcGVuZENoaWxkKGl0ZW1OYW1lRWxlbSk7XG5cbiAgICAgICAgY29uc3QgaXRlbUltZ0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaXRlbUltZ0VsZW0uc3JjID0gYCR7ZG91Z2hudXRzW2RvdWdobnV0XX1gO1xuICAgICAgICBpdGVtSW1nRWxlbS5jbGFzc0xpc3QuYWRkKCdpdGVtLWltZycpO1xuICAgICAgICBpdGVtSHlwZXJsaW5rRWxlbS5pbnNlcnRCZWZvcmUoaXRlbUltZ0VsZW0sIGl0ZW1OYW1lRWxlbSk7XG5cbiAgICAgICAgY29uc3QgaXRlbVByaWNlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBpdGVtUHJpY2VFbGVtLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tcHJpY2UnKTtcbiAgICAgICAgaXRlbVByaWNlRWxlbS50ZXh0Q29udGVudCA9ICdVU0QgMS4yNSdcbiAgICAgICAgaXRlbUh5cGVybGlua0VsZW0uYXBwZW5kQ2hpbGQoaXRlbVByaWNlRWxlbSk7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBkaXNwbGF5SG9tZVRhYkNvbnRlbnRzIGZyb20gXCIuL3RhYnMvaG9tZVwiO1xuaW1wb3J0IGRpc3BsYXlNZW51VGFiQ29udGVudHMgZnJvbSBcIi4vdGFicy9tZW51XCI7XG5pbXBvcnQgZGlzcGxheUNvbnRhY3RUYWJDb250ZW50cyBmcm9tIFwiLi90YWJzL2NvbnRhY3RcIjtcblxuY29uc3QgbWFpbkVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cbmxldCBjdXJyZW50VGFiID0gZGlzcGxheUhvbWVUYWJDb250ZW50cyhtYWluRWxlbSk7XG5cbmZ1bmN0aW9uIGNsZWFyVGFiQ29udGVudHMob3BlblRhYikge1xuICAgICAgICAvKiBTZXR0aW5nIHRoZSBhdHRyaWJ1dGUncyB2YWx1ZSByZW1vdmVzIHRoZSBiYWNrZ3JvdW5kXG4gICAgICAgIGltYWdlIG9mIDxtYWluPiBlbGVtZW50IHdoZW4gdGhlIG9wZW5lZCB0YWIgaXMgdGhlIEhvbWUgdGFiLiAqL1xuICAgICAgICBtYWluRWxlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFiJywgb3BlblRhYik7XG4gICAgICAgIFxuICAgIGlmIChjdXJyZW50VGFiICE9PSAnSG9tZScpIHtcbiAgICAgICAgLyogQSBtZXRob2QgdGhhdCByZW1vdmVzIHRoZSBlbGVtZW50J3MgY2hpbGRyZW4gaWYgbm8gcGFyYW1ldGVyIGlzXG4gICAgICAgIHNwZWNpZmllZC4gSXQgd2FzIHNhaWQgdG8gYmUgYSBmYXN0ZXIgYXBwcm9hY2ggb2YgcmVtb3ZpbmcgZWxlbWVudCdzXG4gICAgICAgIGNoaWxkcmVuIGhlbmNlIEkgZ28gd2l0aCBpdC4gKi9cbiAgICAgICAgbWFpbkVsZW0ucmVwbGFjZUNoaWxkcmVuKClcbiAgICB9XG59XG5cbmNvbnN0IHRhYmxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGlzdCcpO1xudGFibGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50ICE9PSBjdXJyZW50VGFiKSB7XG4gICAgICAgIGNsZWFyVGFiQ29udGVudHMoZS50YXJnZXQudGV4dENvbnRlbnQpO1xuXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQudGV4dENvbnRlbnQpIHtcbiAgICAgICAgICAgIGNhc2UgJ0hvbWUnOlxuICAgICAgICAgICAgICAgIGN1cnJlbnRUYWIgPSBkaXNwbGF5SG9tZVRhYkNvbnRlbnRzKG1haW5FbGVtKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ01lbnUnOlxuICAgICAgICAgICAgICAgIGN1cnJlbnRUYWIgPSBkaXNwbGF5TWVudVRhYkNvbnRlbnRzKG1haW5FbGVtKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0NvbnRhY3QnOlxuICAgICAgICAgICAgICAgIGN1cnJlbnRUYWIgPSBkaXNwbGF5Q29udGFjdFRhYkNvbnRlbnRzKG1haW5FbGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRUYWIpO1xuICAgIH1cbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9