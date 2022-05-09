/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const keyRow1 = [\r\n  \"Backquote\",\r\n  \"Digit1\",\r\n  \"Digit2\",\r\n  \"Digit3\",\r\n  \"Digit4\",\r\n  \"Digit5\",\r\n  \"Digit6\",\r\n  \"Digit7\",\r\n  \"Digit8\",\r\n  \"Digit9\",\r\n  \"Digit0\",\r\n  \"Minus\",\r\n  \"Equal\",\r\n  \"Backspace\",\r\n  \"Tab\",\r\n  \"KeyQ\",\r\n  \"KeyW\",\r\n  \"KeyE\",\r\n  \"KeyR\",\r\n  \"KeyT\",\r\n  \"KeyY\",\r\n  \"KeyU\",\r\n  \"KeyI\",\r\n  \"KeyO\",\r\n  \"KeyP\",\r\n  \"BracketLeft\",\r\n  \"BracketRight\",\r\n  \"Backslash\",\r\n  \"CapsLock\",\r\n  \"KeyA\",\r\n  \"KeyS\",\r\n  \"KeyD\",\r\n  \"KeyF\",\r\n  \"KeyG\",\r\n  \"KeyH\",\r\n  \"KeyJ\",\r\n  \"KeyK\",\r\n  \"KeyL\",\r\n  \"Semicolon\",\r\n  \"Quote\",\r\n  \"Enter\",\r\n  \"ShiftLeft\",\r\n  \"KeyZ\",\r\n  \"KeyX\",\r\n  \"KeyC\",\r\n  \"KeyV\",\r\n  \"KeyB\",\r\n  \"KeyN\",\r\n  \"KeyM\",\r\n  \"Comma\",\r\n  \"Period\",\r\n  \"Slash\",\r\n  \"ShiftRight\",\r\n  \"ArrowUp\",\r\n  \"ControlLeft\",\r\n  \"MetaLeft\",\r\n  \"AltLeft\",\r\n  \"Space\",\r\n  \"AltRight\",\r\n  \"ArrowLeft\",\r\n  \"ArrowDown\",\r\n  \"ArrowRight\",\r\n  \"ControlRight\",\r\n];\r\n\r\nconst keyRowKey = [\r\n  \"`\",\r\n  \"1\",\r\n  \"2\",\r\n  \"3\",\r\n  \"4\",\r\n  \"5\",\r\n  \"6\",\r\n  \"7\",\r\n  \"8\",\r\n  \"9\",\r\n  \"0\",\r\n  \"-\",\r\n  \"=\",\r\n  \"Backspace\",\r\n  \"Tab\",\r\n  \"q\",\r\n  \"w\",\r\n  \"e\",\r\n  \"r\",\r\n  \"t\",\r\n  \"y\",\r\n  \"u\",\r\n  \"i\",\r\n  \"o\",\r\n  \"p\",\r\n  \"[\",\r\n  \"]\",\r\n  \"\\\\\",\r\n  \"CapsLock\",\r\n  \"a\",\r\n  \"s\",\r\n  \"d\",\r\n  \"f\",\r\n  \"g\",\r\n  \"h\",\r\n  \"j\",\r\n  \"k\",\r\n  \"l\",\r\n  \";\",\r\n  \"'\",\r\n  \"Enter\",\r\n  \"Shift\",\r\n  \"z\",\r\n  \"x\",\r\n  \"c\",\r\n  \"v\",\r\n  \"b\",\r\n  \"n\",\r\n  \"m\",\r\n  \",\",\r\n  \".\",\r\n  \"/\",\r\n  \"Shift\",\r\n  \"ArrowUp\",\r\n  \"Control\",\r\n  \"Meta\",\r\n  \"Alt\",\r\n  \" \",\r\n  \"Alt\",\r\n  \"ArrowLeft\",\r\n  \"ArrowDown\",\r\n  \"ArrowRight\",\r\n  \"Control\",\r\n];\r\n\r\nconst elBody = document.querySelector(\".body\");\r\nconst newElement = document.createElement(\"div\");\r\nnewElement.classList.add(\"center\");\r\nnewElement.innerHTML = `\r\n    <p class=\"title\">RSS Виртуальная клавиатура</p>\r\n    <textarea class=\"body-textarea textarea\" id=\"textarea\"></textarea>\r\n    <div class=\"body-keyboard keyboard\" id=\"keyboard\"></div>\r\n    <p class=\"description\">Клавиатура создана в операционной системе Windows</p>\r\n    <p class=\"language\">Для переключения языка комбинация: левыe ctrl + alt</p>\r\n`;\r\nconsole.log(newElement);\r\nelBody.prepend(newElement);\r\n\r\nlet divKey = document.querySelector(\"#keyboard\");\r\n\r\nfunction createDiv() {\r\n  for (let j = 1; j < 6; j++) {\r\n    let newDiv = document.createElement(\"div\");\r\n    newDiv.classList.add(\"row\"+`${j}`);\r\n    divKey.append(newDiv);\r\n  };\r\n};\r\n  createDiv();\r\n\r\n  function createKeyInRow1(){\r\n    let newDiv1 = document.querySelector('.row1')\r\n    console.log(newDiv1)\r\n    for (let i = 0; i < 14; i++) {\r\n          newDiv1.insertAdjacentHTML(\r\n            \"beforeend\",\r\n            `\"<div class=\"key ${keyRow1[i]}\">${keyRowKey[i]}</div>\"`\r\n          );\r\n    }\r\n  }\r\n  createKeyInRow1()\r\n// function createKey() {\r\n//   for (let i = 0; i < keyRow1.length; i++) {\r\n//     divKey.insertAdjacentHTML(\r\n//       \"beforeend\",\r\n//       <div class=\"key ${keyRow1[i]}\">${keyRowKey[i]}</div>\r\n//     );\r\n//   };\r\n// };\r\n\r\n// createKey()\r\n\r\ndocument.onkeydown = function (event) {\r\n  // console.log(event);\r\n  keyRow1.push(event.code);\r\n  console.log(keyRow1);\r\n}\n\n//# sourceURL=webpack://virtual-keyboard/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;