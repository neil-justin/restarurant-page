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

    createItemCards(menuElem)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbENlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTmlGO0FBQ1A7QUFDTztBQUNIO0FBQ2lCO0FBQ25COztBQUU3RDtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQiwyRUFBaUI7QUFDM0MscUJBQXFCLHNFQUFlO0FBQ3BDLDBCQUEwQiwwRUFBa0I7QUFDNUMsdUJBQXVCLHdFQUFpQjtBQUN4QyxnQ0FBZ0MsaUZBQXlCO0FBQ3pELHNCQUFzQix1RUFBZ0I7QUFDdEM7O0FBRUE7QUFDQSxvQkFBb0IsbUNBQW1DO0FBQ3ZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLG9CQUFvQjtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7OztBQ2ZpRDtBQUNBO0FBQ007O0FBRXZEOztBQUVBLGlCQUFpQixzREFBc0I7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCLHNEQUFzQjtBQUNuRDtBQUNBO0FBQ0EsNkJBQTZCLHNEQUFzQjtBQUNuRDtBQUNBO0FBQ0EsNkJBQTZCLHlEQUF5QjtBQUN0RDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGFydXJhbnQtcGFnZS8uL3NyYy90YWJzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGFydXJhbnQtcGFnZS8uL3NyYy90YWJzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGFydXJhbnQtcGFnZS8uL3NyYy90YWJzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGFydXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXJ1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXJ1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGFydXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhcnVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXJ1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhcnVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheUNvbnRhY3RUYWJDb250ZW50cyhtYWluRWxlbSkge1xuICAgIGNvbnN0IGNvbnRhY3RUYWJNYWluSGVhZGluZ0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnRhY3RUYWJNYWluSGVhZGluZ0VsZW0udGV4dENvbnRlbnQgPSAnQ29udGFjdCB1cyc7XG4gICAgbWFpbkVsZW0uYXBwZW5kQ2hpbGQoY29udGFjdFRhYk1haW5IZWFkaW5nRWxlbSk7XG5cbiAgICBjb25zdCBjb250YWN0SW5mb0NvbnRhaW5lckVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0SW5mb0NvbnRhaW5lckVsZW0uc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LWluZm8tY29udGFpbmVyJyk7XG4gICAgbWFpbkVsZW0uYXBwZW5kQ2hpbGQoY29udGFjdEluZm9Db250YWluZXJFbGVtKTtcblxuICAgIGNvbnN0IGNvbnRhY3ROdW1iZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0SW5mb0NvbnRhaW5lckVsZW0uYXBwZW5kQ2hpbGQoY29udGFjdE51bWJlckNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBjb250YWN0TnVtYmVySGVhZGluZ0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnRhY3ROdW1iZXJIZWFkaW5nRWxlbS50ZXh0Q29udGVudCA9ICdEaWFsIE51bWJlcic7XG4gICAgY29udGFjdE51bWJlckhlYWRpbmdFbGVtLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtaW5mby1oZWFkaW5ncycpO1xuICAgIGNvbnRhY3ROdW1iZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdE51bWJlckhlYWRpbmdFbGVtKTtcblxuICAgIGNvbnN0IGNvbnRhY3ROdW1iZXJFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRhY3ROdW1iZXJFbGVtLnRleHRDb250ZW50ID0gJygwNzQpIDM0Mi05MjU5JztcbiAgICBjb250YWN0TnVtYmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3ROdW1iZXJFbGVtKTtcblxuICAgIGNvbnN0IGNvbnRhY3RBZGRyZXNzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdEluZm9Db250YWluZXJFbGVtLmFwcGVuZENoaWxkKGNvbnRhY3RBZGRyZXNzQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGFkZHJlc3NIZWFkaW5nRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgYWRkcmVzc0hlYWRpbmdFbGVtLnRleHRDb250ZW50ID0gJ0FkZHJlc3MnO1xuICAgIGFkZHJlc3NIZWFkaW5nRWxlbS5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWluZm8taGVhZGluZ3MnKTtcbiAgICBjb250YWN0QWRkcmVzc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRyZXNzSGVhZGluZ0VsZW0pO1xuXG4gICAgY29uc3QgYWRkcmVzc0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWRkcmVzc0VsZW0udGV4dENvbnRlbnQgPSAnUGVkcm8gR2lsIFN0LCBFcm1pdGEsIE1hbmlsYSwgMTAwMCBNZXRybyBNYW5pbGEnO1xuICAgIGNvbnRhY3RBZGRyZXNzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZHJlc3NFbGVtKTtcblxuICAgIHJldHVybiBtYWluRWxlbS5kYXRhc2V0LnRhYjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5SG9tZVRhYkNvbnRlbnRzKG1haW5FbGVtKSB7XG4gICAgLyogYWRkIHRoaXMgYXR0cmlidXRlIGluIG9yZGVyIHRvIGVuYWJsZSB0aGUgcHJvcGVydHkgb2YgdGhlXG4gICAgbWFpbltkYXRhLWhhcy1iYWNrZ3JvdW5kLWltYWdlPSd5ZXMnXSBzZWxlY3RvciBpbiAnLi4vc3R5bGVzL21haW5FbGVtLmNzcycgKi9cbiAgICBtYWluRWxlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFiJywgJ0hvbWUnKTtcblxuICAgIHJldHVybiBtYWluRWxlbS5kYXRhc2V0LnRhYjtcbn0iLCJpbXBvcnQgY2hvY29sYXRlRG9udXRJbWcgZnJvbSBcIi4uL2Fzc2V0cy9kb3VnaG51dC1pbWFnZXMvY2hvY29sYXRlLWRvdWdobnV0LnBuZ1wiO1xuaW1wb3J0IHBpbmtEb3VnaG51dEltZyBmcm9tIFwiLi4vYXNzZXRzL2RvdWdobnV0LWltYWdlcy9waW5rLWRvdWdobnV0LnBuZ1wiO1xuaW1wb3J0IHB1cnBsZURvdWdobnV0MkltZyBmcm9tIFwiLi4vYXNzZXRzL2RvdWdobnV0LWltYWdlcy9wdXJwbGUtZG91Z2hudXQtMi5wbmdcIjtcbmltcG9ydCBwdXJwbGVEb3VnaG51dEltZyBmcm9tIFwiLi4vYXNzZXRzL2RvdWdobnV0LWltYWdlcy9wdXJwbGUtZG91Z2hudXQucG5nXCI7XG5pbXBvcnQgd2hpdGVDaG9jb2xhdGVEb3VnaG51dEltZyBmcm9tIFwiLi4vYXNzZXRzL2RvdWdobnV0LWltYWdlcy93aGl0ZS1jaG9jb2xhdGUtZG91Z2hudXQucG5nXCI7XG5pbXBvcnQgd2hpdGVEb3VnaG51dEltZyBmcm9tIFwiLi4vYXNzZXRzL2RvdWdobnV0LWltYWdlcy93aGl0ZS1kb3VnaG51dC5wbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheU1lbnVUYWJDb250ZW50cyhtYWluRWxlbSkge1xuICAgIGNvbnN0IGl0ZW1zSGVhZGluZ0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGl0ZW1zSGVhZGluZ0VsZW0udGV4dENvbnRlbnQgPSAnRG91Z2hudXRzJztcbiAgICBtYWluRWxlbS5hcHBlbmRDaGlsZChpdGVtc0hlYWRpbmdFbGVtKTtcblxuICAgIGNvbnN0IG1lbnVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUVsZW0uc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LWxpc3QnKTtcbiAgICBtYWluRWxlbS5hcHBlbmRDaGlsZChtZW51RWxlbSk7XG5cbiAgICBjcmVhdGVJdGVtQ2FyZHMobWVudUVsZW0pXG5cbiAgICByZXR1cm4gbWFpbkVsZW0uZGF0YXNldC50YWI7XG59XG5cbmNvbnN0IGRvdWdobnV0cyA9IHtcbiAgICAnQ2hvY29sYXRlIERvdWdobnV0JzogY2hvY29sYXRlRG9udXRJbWcsXG4gICAgJ1BpbmsgRG91Z2hudXQnOiBwaW5rRG91Z2hudXRJbWcsXG4gICAgJ1B1cnBsZSBEb3VnaG51dCBJSSc6IHB1cnBsZURvdWdobnV0MkltZyxcbiAgICAnUHVycGxlIERvdWdobnV0JzogcHVycGxlRG91Z2hudXRJbWcsXG4gICAgJ1doaXRlIENob2NvbGF0ZSBEb3VnaG51dCc6IHdoaXRlQ2hvY29sYXRlRG91Z2hudXRJbWcsXG4gICAgJ1doaXRlIERvdWdobnV0Jzogd2hpdGVEb3VnaG51dEltZyxcbn1cblxuZnVuY3Rpb24gY3JlYXRlSXRlbUNhcmRzKGRpdikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgT2JqZWN0LmtleXMoZG91Z2hudXRzKS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBpdGVtQ2FyZEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICAgIGl0ZW1DYXJkRWxlbS5zZXRBdHRyaWJ1dGUoYGRhdGEtaXRlbWAsIGkpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaXRlbUNhcmRFbGVtKTtcblxuICAgICAgICBjb25zdCBpdGVtSHlwZXJsaW5rRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgaXRlbUh5cGVybGlua0VsZW0uc2V0QXR0cmlidXRlKCdocmVmJywgJyMnKTtcbiAgICAgICAgaXRlbUh5cGVybGlua0VsZW0uY2xhc3NMaXN0LmFkZCgnaXRlbS1saW5rJyk7XG4gICAgICAgIGl0ZW1DYXJkRWxlbS5hcHBlbmRDaGlsZChpdGVtSHlwZXJsaW5rRWxlbSk7XG5cbiAgICAgICAgY29uc3QgaXRlbU5hbWVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgaXRlbU5hbWVFbGVtLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tbmFtZScpO1xuICAgICAgICBpdGVtTmFtZUVsZW0udGV4dENvbnRlbnQgPSBPYmplY3Qua2V5cyhkb3VnaG51dHMpW2ldO1xuICAgICAgICBjb25zdCBkb3VnaG51dCA9IGl0ZW1OYW1lRWxlbS50ZXh0Q29udGVudDtcbiAgICAgICAgaXRlbUh5cGVybGlua0VsZW0uYXBwZW5kQ2hpbGQoaXRlbU5hbWVFbGVtKTtcblxuICAgICAgICBjb25zdCBpdGVtSW1nRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpdGVtSW1nRWxlbS5zcmMgPSBgJHtkb3VnaG51dHNbZG91Z2hudXRdfWA7XG4gICAgICAgIGl0ZW1JbWdFbGVtLmNsYXNzTGlzdC5hZGQoJ2l0ZW0taW1nJyk7XG4gICAgICAgIGl0ZW1IeXBlcmxpbmtFbGVtLmluc2VydEJlZm9yZShpdGVtSW1nRWxlbSwgaXRlbU5hbWVFbGVtKTtcblxuICAgICAgICBjb25zdCBpdGVtUHJpY2VFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIGl0ZW1QcmljZUVsZW0uY2xhc3NMaXN0LmFkZCgnaXRlbS1wcmljZScpO1xuICAgICAgICBpdGVtUHJpY2VFbGVtLnRleHRDb250ZW50ID0gJ1VTRCAxLjI1J1xuICAgICAgICBpdGVtSHlwZXJsaW5rRWxlbS5hcHBlbmRDaGlsZChpdGVtUHJpY2VFbGVtKTtcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGRpc3BsYXlIb21lVGFiQ29udGVudHMgZnJvbSBcIi4vdGFicy9ob21lXCI7XG5pbXBvcnQgZGlzcGxheU1lbnVUYWJDb250ZW50cyBmcm9tIFwiLi90YWJzL21lbnVcIjtcbmltcG9ydCBkaXNwbGF5Q29udGFjdFRhYkNvbnRlbnRzIGZyb20gXCIuL3RhYnMvY29udGFjdFwiO1xuXG5jb25zdCBtYWluRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxubGV0IGN1cnJlbnRUYWIgPSBkaXNwbGF5SG9tZVRhYkNvbnRlbnRzKG1haW5FbGVtKTtcblxuZnVuY3Rpb24gY2xlYXJUYWJDb250ZW50cyhvcGVuVGFiKSB7XG4gICAgICAgIC8qIFNldHRpbmcgdGhlIGF0dHJpYnV0ZSdzIHZhbHVlIHJlbW92ZXMgdGhlIGJhY2tncm91bmRcbiAgICAgICAgaW1hZ2Ugb2YgPG1haW4+IGVsZW1lbnQgd2hlbiB0aGUgb3BlbmVkIHRhYiBpcyB0aGUgSG9tZSB0YWIuICovXG4gICAgICAgIG1haW5FbGVtLnNldEF0dHJpYnV0ZSgnZGF0YS10YWInLCBvcGVuVGFiKTtcbiAgICAgICAgXG4gICAgaWYgKGN1cnJlbnRUYWIgIT09ICdIb21lJykge1xuICAgICAgICAvKiBBIG1ldGhvZCB0aGF0IHJlbW92ZXMgdGhlIGVsZW1lbnQncyBjaGlsZHJlbiBpZiBubyBwYXJhbWV0ZXIgaXNcbiAgICAgICAgc3BlY2lmaWVkLiBJdCB3YXMgc2FpZCB0byBiZSBhIGZhc3RlciBhcHByb2FjaCBvZiByZW1vdmluZyBlbGVtZW50J3NcbiAgICAgICAgY2hpbGRyZW4gaGVuY2UgSSBnbyB3aXRoIGl0LiAqL1xuICAgICAgICBtYWluRWxlbS5yZXBsYWNlQ2hpbGRyZW4oKVxuICAgIH1cbn1cblxuY29uc3QgdGFibGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsaXN0Jyk7XG50YWJsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgIT09IGN1cnJlbnRUYWIpIHtcbiAgICAgICAgY2xlYXJUYWJDb250ZW50cyhlLnRhcmdldC50ZXh0Q29udGVudCk7XG5cbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgY2FzZSAnSG9tZSc6XG4gICAgICAgICAgICAgICAgY3VycmVudFRhYiA9IGRpc3BsYXlIb21lVGFiQ29udGVudHMobWFpbkVsZW0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnTWVudSc6XG4gICAgICAgICAgICAgICAgY3VycmVudFRhYiA9IGRpc3BsYXlNZW51VGFiQ29udGVudHMobWFpbkVsZW0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQ29udGFjdCc6XG4gICAgICAgICAgICAgICAgY3VycmVudFRhYiA9IGRpc3BsYXlDb250YWN0VGFiQ29udGVudHMobWFpbkVsZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFRhYik7XG4gICAgfVxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=