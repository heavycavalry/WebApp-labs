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

/***/ "./src/battleships/battleships.ts":
/*!****************************************!*\
  !*** ./src/battleships/battleships.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.BattleShips = void 0;\r\nvar BattleShips = /** @class */ (function () {\r\n    function BattleShips() {\r\n        this.name = \"Battleships\";\r\n    }\r\n    BattleShips.prototype.getGameElement = function () {\r\n        var div = document.createElement('div');\r\n        div.appendChild(document.createTextNode(\"Hello BattleShips\"));\r\n        return div;\r\n    };\r\n    return BattleShips;\r\n}());\r\nexports.BattleShips = BattleShips;\r\n\n\n//# sourceURL=webpack:///./src/battleships/battleships.ts?");

/***/ }),

/***/ "./src/game.factory.ts":
/*!*****************************!*\
  !*** ./src/game.factory.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nexports.GameFactory = void 0;\r\nvar games_enum_1 = __webpack_require__(/*! ./games.enum */ \"./src/games.enum.ts\");\r\nvar tictactoe_1 = __webpack_require__(/*! ./tictactoe/tictactoe */ \"./src/tictactoe/tictactoe.ts\");\r\nvar battleships_1 = __webpack_require__(/*! ./battleships/battleships */ \"./src/battleships/battleships.ts\");\r\nvar GameFactory = /** @class */ (function () {\r\n    function GameFactory() {\r\n    }\r\n    GameFactory.prototype.createGame = function (gameType) {\r\n        switch (gameType) {\r\n            case games_enum_1.Games.BattleShips:\r\n                return new battleships_1.BattleShips();\r\n            case games_enum_1.Games.TicTacToe:\r\n                return new tictactoe_1.TicTacToe();\r\n        }\r\n        ;\r\n    };\r\n    return GameFactory;\r\n}());\r\nexports.GameFactory = GameFactory;\r\n\n\n//# sourceURL=webpack:///./src/game.factory.ts?");

/***/ }),

/***/ "./src/games.enum.ts":
/*!***************************!*\
  !*** ./src/games.enum.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.Games = void 0;\r\nvar Games;\r\n(function (Games) {\r\n    Games[Games[\"TicTacToe\"] = 1] = \"TicTacToe\";\r\n    Games[Games[\"BattleShips\"] = 2] = \"BattleShips\";\r\n})(Games = exports.Games || (exports.Games = {}));\r\n\n\n//# sourceURL=webpack:///./src/games.enum.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nvar game_factory_1 = __webpack_require__(/*! ./game.factory */ \"./src/game.factory.ts\");\r\nvar games_enum_1 = __webpack_require__(/*! ./games.enum */ \"./src/games.enum.ts\");\r\nvar App = /** @class */ (function () {\r\n    function App() {\r\n        this.init();\r\n    }\r\n    App.prototype.init = function () {\r\n        var bodyElement = document.getElementById('body');\r\n        var menuContainer = (document.createElement('div')); // kontener menu dostępnych gier\r\n        menuContainer.className = \"menu-container\";\r\n        var gameContainer = (document.createElement('div')); // kontener główny ekranu z grą\r\n        var list = document.createElement('ul'); // lista pozycji w menu dostępnych gier\r\n        var gameFactory = new game_factory_1.GameFactory();\r\n        var _loop_1 = function (gameEnum) {\r\n            var gameNumber = Number(gameEnum);\r\n            if (!isNaN(gameNumber)) {\r\n                var gameObject_1 = gameFactory.createGame(gameNumber);\r\n                dropdownLink = document.createElement('li');\r\n                dropdownLink.appendChild(document.createTextNode(gameObject_1.name));\r\n                console.log(gameObject_1);\r\n                dropdownLink.addEventListener('click', function (event) {\r\n                    gameContainer.innerHTML = \"\";\r\n                    gameContainer.appendChild(gameObject_1.getGameElement());\r\n                });\r\n                list.appendChild(dropdownLink);\r\n            }\r\n        };\r\n        var dropdownLink;\r\n        for (var gameEnum in games_enum_1.Games) {\r\n            _loop_1(gameEnum);\r\n        }\r\n        var title = document.createElement('h1');\r\n        title.innerHTML = \"AWESOOOOME GAMES\";\r\n        menuContainer.appendChild(title);\r\n        menuContainer.appendChild(list);\r\n        document.body.appendChild(menuContainer);\r\n        document.body.appendChild(gameContainer);\r\n        console.log(bodyElement.className);\r\n        var modeButton = document.getElementById('checkbox');\r\n        modeButton.addEventListener('click', function toggle() {\r\n            if (modeButton.checked) {\r\n                bodyElement.classList.add('dark-mode');\r\n            }\r\n            else {\r\n                bodyElement.classList.remove('dark-mode');\r\n            }\r\n        });\r\n    };\r\n    return App;\r\n}());\r\nnew App();\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/tictactoe/tictactoe.ts":
/*!************************************!*\
  !*** ./src/tictactoe/tictactoe.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.TicTacToe = void 0;\r\nvar boardSizeInputField = document.getElementById('inputBox');\r\n// boardSizeInputField.addEventListener('keypress', function(ev) {\r\n//     if (ev.key === 'Enter') {\r\n//         loadBoard(+(boardSizeInputField.value))\r\n//     }\r\n// }\r\n// )\r\n// // console.log(inputValue === \"\");\r\n// let button = <HTMLButtonElement>document.getElementById('btn');\r\n// button.addEventListener('click', function() {    \r\n//     loadBoard(+(boardSizeInputField.value))\r\n// }\r\n// );\r\n// function loadBoard(size: number) {\r\n//     new Board(size)\r\n// }\r\n// loadBoard(3)\r\nvar TicTacToe = /** @class */ (function () {\r\n    function TicTacToe() {\r\n        this.name = \"Tic Tac Toe\";\r\n    }\r\n    TicTacToe.prototype.getGameElement = function () {\r\n        var game = document.createElement('table');\r\n        game.id = \"gameBoard\";\r\n        return game;\r\n    };\r\n    return TicTacToe;\r\n}());\r\nexports.TicTacToe = TicTacToe;\r\n\n\n//# sourceURL=webpack:///./src/tictactoe/tictactoe.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;