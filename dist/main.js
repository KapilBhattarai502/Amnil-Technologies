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

/***/ "./src/deleteTasks.js":
/*!****************************!*\
  !*** ./src/deleteTasks.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ deleteTask)\n/* harmony export */ });\nfunction deleteTask(deleteId){\n    fetch(`http://localhost:6800/todo/deletetodos/${deleteId}`,{\n        method:'DELETE',\n    })\n\n}\n\n//# sourceURL=webpack://amnilitechnologiesinternassignment---1/./src/deleteTasks.js?");

/***/ }),

/***/ "./src/fetchTasks.js":
/*!***************************!*\
  !*** ./src/fetchTasks.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchTasks)\n/* harmony export */ });\n/* harmony import */ var _renderTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderTask.js */ \"./src/renderTask.js\");\n\n\nfunction fetchTasks(){\n    fetch('http://localhost:6800/todo/gettodos').then((response)=>{\n        response.json().then((data)=>{\n            const taskList=document.getElementById(\"tasklist\")\n            taskList.innerHTML='';\n            data.map((item)=>{\n               (0,_renderTask_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item)\n            })\n        })\n    })\n}\n\n//# sourceURL=webpack://amnilitechnologiesinternassignment---1/./src/fetchTasks.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetchTasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchTasks.js */ \"./src/fetchTasks.js\");\n/* harmony import */ var _renderTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTask.js */ \"./src/renderTask.js\");\n\n\n\n\nconst form=document.getElementById(\"form\");\n\n\ndocument.addEventListener('DOMContentLoaded',()=>{\n    (0,_fetchTasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n})\nconsole.log(\"Hello babe\")\n\n\n\nform.addEventListener('submit',function(event){\n\n    event.preventDefault()\n\n    const formData=new FormData(event.target)\n\n \n\n    const formDataobj={};\n\n    formData.forEach((value,key)=>{\n        formDataobj[key]=value;\n    })\n    fetch(\"http://localhost:6800/todo/add\",{\n        method:'POST',\n        body:JSON.stringify(formDataobj),\n        headers:{\n            'Content-Type':'application/json'\n        }\n    }).then((response)=>{\n        if(response.status===200){\n            alert('Task Entered Successfully')\n        }\n        response.json().then((newTask)=>{\n            (0,_renderTask_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(newTask)\n            form.reset()\n        })\n    })\n\n\n\n\n})\n\n//# sourceURL=webpack://amnilitechnologiesinternassignment---1/./src/index.js?");

/***/ }),

/***/ "./src/renderTask.js":
/*!***************************!*\
  !*** ./src/renderTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderTask)\n/* harmony export */ });\n/* harmony import */ var _deleteTasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteTasks.js */ \"./src/deleteTasks.js\");\n/* harmony import */ var _updateTodos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateTodos.js */ \"./src/updateTodos.js\");\n\n\n\nfunction renderTask(task) {\n  const taskList = document.getElementById(\"tasklist\");\n  const div = document.createElement(\"div\");\n  div.style.padding = \"10px\";\n  div.style.display = \"flex\";\n  div.style.justifyContent = \"space-between\";\n  const div1 = document.createElement(\"div\");\n  const label = document.createElement(\"label\");\n  const input = document.createElement(\"input\");\n  input.type = \"checkbox\";\n  label.textContent = `${task.task}`;\n  label.style.padding = \"4px\";\n  div1.appendChild(input);\n\n  div1.appendChild(label);\n\n  const deleteMark = document.createElement(\"span\");\n  deleteMark.textContent = \"✖\";\n  deleteMark.style.cursor = \"pointer\";\n  deleteMark.style.color = \"red\";\n\n  div.appendChild(div1);\n  div.appendChild(deleteMark);\n  taskList.appendChild(div);\n  if(task.completed){\n    input.checked=true;\n    label.style.textDecoration = \"line-through\";\n\n\n  }\n  else{\n    label.style.textDecoration = \"none\";\n  }\n\n  input.addEventListener(\"change\", function (event) {\n    if (input.checked) {\n      \n      label.style.textDecoration = \"line-through\";\n      (0,_updateTodos_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(true,task._id);\n    } else {\n      label.style.textDecoration = \"none\";\n      (0,_updateTodos_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(false,task._id);\n    }\n  });\n  deleteMark.addEventListener(\"click\", function (event) {\n    (0,_deleteTasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(task._id);\n    div.removeChild(div1);\n    div.removeChild(deleteMark);\n  });\n}\n\n\n//# sourceURL=webpack://amnilitechnologiesinternassignment---1/./src/renderTask.js?");

/***/ }),

/***/ "./src/updateTodos.js":
/*!****************************!*\
  !*** ./src/updateTodos.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ updateTodos)\n/* harmony export */ });\nfunction updateTodos(value,editId){\n    \n\n    fetch(`http://localhost:6800/todo/edittodos/${editId}`,{\n        method:'PUT',\n        body:JSON.stringify({value}),\n        headers:{\n            'Content-Type':'application/json'\n        }\n\n\n    })\n\n\n    \n\n}\n\n//# sourceURL=webpack://amnilitechnologiesinternassignment---1/./src/updateTodos.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;