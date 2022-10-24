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
function displayHomeTabContents() {
    const main = document.querySelector('main');
    
    /* add this attribute in order to enable the property of the
    main[data-has-background-image='yes'] selector in '../styles/main.css' */
    main.setAttribute('data-has-background-image', 'yes');

    return 'Home';
}

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabs_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs/home */ "./src/tabs/home.js");


let currentTab = (0,_tabs_home__WEBPACK_IMPORTED_MODULE_0__["default"])();

function clearTabContents(mainTag) {
    if (currentTab === 'Home') {
        /* Setting the attribute's value into 'no' removes the background
        image of this element and toggles a selector in main.css file that
        adds a padding into this element */
        mainTag.setAttribute('data-has-background-image', 'no');
    } else {
        /* A method that removes the element's children if no parameter is
        specified. It was said to be a faster approach of removing element's
        children hence I go with it. */
        mainTag.replaceChildren()
    }
}

const tablist = document.querySelector('#tablist');
tablist.addEventListener('click', (e) => {
    const main = document.querySelector('main');

    if (e.target.textContent !== currentTab) {
        clearTabContents(main);

        switch (e.target.textContent) {
            case 'Home':
                console.log(e.target.textContent);
                break;
            case 'Menu':
                console.log(e.target.textContent);
                break;
            case 'Contact':
                console.log(e.target.textContent);
        }
    }
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7VUNSQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmlEOztBQUVqRCxpQkFBaUIsc0RBQXNCOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXJ1cmFudC1wYWdlLy4vc3JjL3RhYnMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXJ1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhcnVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhcnVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXJ1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGFydXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5SG9tZVRhYkNvbnRlbnRzKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgXG4gICAgLyogYWRkIHRoaXMgYXR0cmlidXRlIGluIG9yZGVyIHRvIGVuYWJsZSB0aGUgcHJvcGVydHkgb2YgdGhlXG4gICAgbWFpbltkYXRhLWhhcy1iYWNrZ3JvdW5kLWltYWdlPSd5ZXMnXSBzZWxlY3RvciBpbiAnLi4vc3R5bGVzL21haW4uY3NzJyAqL1xuICAgIG1haW4uc2V0QXR0cmlidXRlKCdkYXRhLWhhcy1iYWNrZ3JvdW5kLWltYWdlJywgJ3llcycpO1xuXG4gICAgcmV0dXJuICdIb21lJztcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBkaXNwbGF5SG9tZVRhYkNvbnRlbnRzIGZyb20gXCIuL3RhYnMvaG9tZVwiO1xuXG5sZXQgY3VycmVudFRhYiA9IGRpc3BsYXlIb21lVGFiQ29udGVudHMoKTtcblxuZnVuY3Rpb24gY2xlYXJUYWJDb250ZW50cyhtYWluVGFnKSB7XG4gICAgaWYgKGN1cnJlbnRUYWIgPT09ICdIb21lJykge1xuICAgICAgICAvKiBTZXR0aW5nIHRoZSBhdHRyaWJ1dGUncyB2YWx1ZSBpbnRvICdubycgcmVtb3ZlcyB0aGUgYmFja2dyb3VuZFxuICAgICAgICBpbWFnZSBvZiB0aGlzIGVsZW1lbnQgYW5kIHRvZ2dsZXMgYSBzZWxlY3RvciBpbiBtYWluLmNzcyBmaWxlIHRoYXRcbiAgICAgICAgYWRkcyBhIHBhZGRpbmcgaW50byB0aGlzIGVsZW1lbnQgKi9cbiAgICAgICAgbWFpblRhZy5zZXRBdHRyaWJ1dGUoJ2RhdGEtaGFzLWJhY2tncm91bmQtaW1hZ2UnLCAnbm8nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvKiBBIG1ldGhvZCB0aGF0IHJlbW92ZXMgdGhlIGVsZW1lbnQncyBjaGlsZHJlbiBpZiBubyBwYXJhbWV0ZXIgaXNcbiAgICAgICAgc3BlY2lmaWVkLiBJdCB3YXMgc2FpZCB0byBiZSBhIGZhc3RlciBhcHByb2FjaCBvZiByZW1vdmluZyBlbGVtZW50J3NcbiAgICAgICAgY2hpbGRyZW4gaGVuY2UgSSBnbyB3aXRoIGl0LiAqL1xuICAgICAgICBtYWluVGFnLnJlcGxhY2VDaGlsZHJlbigpXG4gICAgfVxufVxuXG5jb25zdCB0YWJsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxpc3QnKTtcbnRhYmxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cbiAgICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgIT09IGN1cnJlbnRUYWIpIHtcbiAgICAgICAgY2xlYXJUYWJDb250ZW50cyhtYWluKTtcblxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0LnRleHRDb250ZW50KSB7XG4gICAgICAgICAgICBjYXNlICdIb21lJzpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdNZW51JzpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdDb250YWN0JzpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC50ZXh0Q29udGVudCk7XG4gICAgICAgIH1cbiAgICB9XG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==