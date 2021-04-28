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

/***/ "./src/Board.ts":
/*!**********************!*\
  !*** ./src/Board.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nexports.Board = void 0;\r\nvar Cell_1 = __webpack_require__(/*! ./Cell */ \"./src/Cell.ts\");\r\nvar Board = /** @class */ (function () {\r\n    function Board(size) {\r\n        var _this = this;\r\n        this.currentSymbol = -1;\r\n        this.cells = new Array(size);\r\n        var table = document.getElementById('gameBoard');\r\n        table.innerHTML = \"\";\r\n        for (var r = 0; r < size; r++) {\r\n            var row = table.insertRow(r);\r\n            row.className = \"row\";\r\n            this.cells[r] = new Array(size);\r\n            var _loop_1 = function (c) {\r\n                var cell = row.insertCell(c);\r\n                cell.className = 'cell';\r\n                var newCell = new Cell_1.Cell(cell);\r\n                this_1.cells[r][c] = newCell;\r\n                cell.addEventListener('click', function () { return _this.makeMove(newCell); }, false);\r\n            };\r\n            var this_1 = this;\r\n            for (var c = 0; c < size; c++) {\r\n                _loop_1(c);\r\n            }\r\n        }\r\n    }\r\n    Board.prototype.makeMove = function (cell) {\r\n        if (cell.cellValue !== 1 && cell.cellValue !== -1) {\r\n            cell.setCellValue(this.currentSymbol);\r\n            this.currentSymbol *= -1;\r\n        }\r\n        this.checkWin();\r\n    };\r\n    Board.prototype.checkRow = function (row) {\r\n        var rowArray = this.cells[row];\r\n        var oneWins = true;\r\n        rowArray.forEach(function (cell) {\r\n            if (cell.cellValue !== 1) {\r\n                oneWins = false;\r\n            }\r\n        });\r\n        if (oneWins)\r\n            return 1;\r\n        var minusOneWins = true;\r\n        rowArray.forEach(function (cell) {\r\n            if (cell.cellValue !== -1) {\r\n                minusOneWins = false;\r\n            }\r\n        });\r\n        if (minusOneWins)\r\n            return -1;\r\n        return 0;\r\n    };\r\n    Board.prototype.checkColumn = function (column) {\r\n        var oneWins = true;\r\n        for (var i = 0; i < this.cells.length; i++) {\r\n            var cellValue = this.cells[i][column].cellValue;\r\n            if (cellValue !== 1) {\r\n                oneWins = false;\r\n            }\r\n        }\r\n        if (oneWins)\r\n            return 1;\r\n        var minusOneWins = true;\r\n        for (var i = 0; i < this.cells.length; i++) {\r\n            var cellValue = this.cells[i][column].cellValue;\r\n            if (cellValue !== -1) {\r\n                minusOneWins = false;\r\n            }\r\n        }\r\n        if (minusOneWins)\r\n            return -1;\r\n        return 0;\r\n    };\r\n    Board.prototype.crossCheck = function () {\r\n        var oneWins = true;\r\n        for (var i = 0; i < this.cells.length; i++) {\r\n            var cellValue = this.cells[i][i].cellValue;\r\n            if (cellValue !== 1) {\r\n                oneWins = false;\r\n            }\r\n        }\r\n        if (oneWins)\r\n            return 1;\r\n        var minusOneWins = true;\r\n        for (var i = 0; i < this.cells.length; i++) {\r\n            var cellValue = this.cells[i][i].cellValue;\r\n            if (cellValue !== 1) {\r\n                minusOneWins = false;\r\n            }\r\n        }\r\n        if (minusOneWins)\r\n            return -1;\r\n        return 0;\r\n    };\r\n    Board.prototype.reverseCrossCheck = function () {\r\n        var oneWins = true;\r\n        for (var i = 0; i < this.cells.length; i++) {\r\n            var cellValue = this.cells[i][this.cells.length - 1 - i].cellValue;\r\n            if (cellValue !== 1) {\r\n                oneWins = false;\r\n            }\r\n        }\r\n        if (oneWins)\r\n            return 1;\r\n        var minusOneWins = true;\r\n        for (var i = 0; i < this.cells.length; i++) {\r\n            var cellValue = this.cells[i][i].cellValue;\r\n            if (cellValue !== 1) {\r\n                minusOneWins = false;\r\n            }\r\n        }\r\n        if (minusOneWins)\r\n            return -1;\r\n        return 0;\r\n    };\r\n    Board.prototype.checkWin = function () {\r\n        for (var i = 0; i < this.cells.length; i++) {\r\n            this.checkRow(i);\r\n            this.checkColumn(i);\r\n        }\r\n        this.crossCheck();\r\n        this.reverseCrossCheck();\r\n    };\r\n    return Board;\r\n}());\r\nexports.Board = Board;\r\n\n\n//# sourceURL=webpack:///./src/Board.ts?");

/***/ }),

/***/ "./src/Cell.ts":
/*!*********************!*\
  !*** ./src/Cell.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.Cell = void 0;\r\nvar Cell = /** @class */ (function () {\r\n    function Cell(cell) {\r\n        this.htmlElement = cell;\r\n    }\r\n    Cell.prototype.setCellValue = function (value) {\r\n        this.cellValue = value;\r\n        if ((this.cellValue === -1)) {\r\n            this.htmlElement.innerText = 'o';\r\n        }\r\n        if ((this.cellValue === 1)) {\r\n            this.htmlElement.innerText = 'x';\r\n        }\r\n        if ((this.cellValue === 0)) {\r\n            this.htmlElement.innerText = '';\r\n        }\r\n        //TODO: napisz samemu metodę, która ustawia w\r\n        // tabeli kółko i krzyżyk. Możesz przyjąć, że kółko\r\n        // to wartość -1, krzyżyk to wartość 1, a 0 (zero)\r\n        // oznacza pole nieustawione.\r\n    };\r\n    return Cell;\r\n}());\r\nexports.Cell = Cell;\r\n\n\n//# sourceURL=webpack:///./src/Cell.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nvar Board_1 = __webpack_require__(/*! ./Board */ \"./src/Board.ts\");\r\nvar boardSizeInputField = document.getElementById('inputBox');\r\nboardSizeInputField.addEventListener('keypress', function (ev) {\r\n    if (ev.key === 'Enter') {\r\n        loadBoard(+(boardSizeInputField.value));\r\n    }\r\n});\r\n// console.log(inputValue === \"\");\r\nvar button = document.getElementById('btn');\r\nbutton.addEventListener('click', function () {\r\n    loadBoard(+(boardSizeInputField.value));\r\n});\r\nfunction loadBoard(size) {\r\n    new Board_1.Board(size);\r\n}\r\nloadBoard(3);\r\n\n\n//# sourceURL=webpack:///./src/main.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;