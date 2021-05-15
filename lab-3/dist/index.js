/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ball/ball.ts":
/*!**************************!*\
  !*** ./src/ball/ball.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BallInAHole = void 0;
var game_decorator_disabled_1 = __webpack_require__(/*! ../game.decorator.disabled */ "./src/game.decorator.disabled.ts");
var canvasBoard_1 = __webpack_require__(/*! ./canvasBoard */ "./src/ball/canvasBoard.ts");
var BallInAHole = /** @class */ (function () {
    function BallInAHole() {
        this.name = "Ball in a hole";
    }
    BallInAHole.prototype.getGameElement = function () {
        var board = new canvasBoard_1.CanvasBoard();
        return board.canvas;
    };
    __decorate([
        game_decorator_disabled_1.watched
    ], BallInAHole.prototype, "getGameElement", null);
    return BallInAHole;
}());
exports.BallInAHole = BallInAHole;


/***/ }),

/***/ "./src/ball/canvasBoard.ts":
/*!*********************************!*\
  !*** ./src/ball/canvasBoard.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CanvasBoard = void 0;
var popup_1 = __webpack_require__(/*! ../popup/popup */ "./src/popup/popup.ts");
var CanvasBoard = /** @class */ (function () {
    function CanvasBoard() {
        this.canvas = document.createElement("canvas");
        this.canvas.id = "canvas";
        this.canvas.width = 500;
        this.canvas.height = 500;
        var div = document.getElementById('root');
        div.appendChild(this.canvas);
        this.start();
    }
    CanvasBoard.prototype.start = function () {
        var context = this.canvas.getContext("2d");
        window.addEventListener('deviceorientation', onDeviceMove);
        var startTime = Date.now();
        var time;
        var circle = {
            x: 50,
            y: 50,
            size: 30,
            dx: 1,
            dy: 1
        };
        var hole = {
            x: getRandomInt(50, 450),
            y: getRandomInt(50, 450),
            size: 40,
            dx: 0,
            dy: 0
        };
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        function onDeviceMove(ev) {
            console.log(ev.alpha, ev.beta, ev.gamma);
            stupidMove(ev.gamma, ev.beta);
        }
        function countSpeed(y) {
            y = ((y % 360) + 360) % 360;
            var dy = 0.1;
            if (y > 0 && y < 180) {
                dy = 2;
            }
            if (y > 180 && y < 360) {
                dy = -2;
            }
            return dy;
        }
        function stupidMove(x, y) {
            var dx = countSpeed(x);
            var dy = countSpeed(y);
            circle.dx = dx;
            circle.dy = dy;
        }
        function drawCircle() {
            context.beginPath();
            context.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
            context.fillStyle = '#DA5CD3';
            context.fill();
        }
        function drawHole() {
            context.beginPath();
            context.arc(hole.x, hole.y, hole.size, 0, Math.PI * 2);
            context.fillStyle = '#000000';
            context.fill();
        }
        var shouldRun = true;
        function animate() {
            if (shouldRun) {
                context.clearRect(0, 0, 500, 500);
                circle.x += circle.dx;
                circle.y += circle.dy;
                if (circle.x + circle.size >= 500) {
                    circle.x = 500 - circle.size;
                }
                if (circle.x - circle.size <= 0) {
                    circle.x = circle.size;
                }
                if (circle.y + circle.size >= 500) {
                    circle.y = 500 - circle.size;
                }
                if (circle.y - circle.size <= 0) {
                    circle.y = circle.size;
                }
            }
            function ballInAHole() {
                if (Math.pow((hole.x - circle.x), 2) + Math.pow((hole.y - circle.y), 2) <= 450) {
                    time = Math.round((Date.now() - startTime) / 1000);
                    shouldRun = false;
                    var youWin = new popup_1.PopUp("Congratulations!", "Your time: " + time + " seconds.", '');
                    youWin.createPopUp();
                    return;
                }
            }
            drawHole();
            drawCircle();
            requestAnimationFrame(animate);
            ballInAHole();
        }
        animate();
    };
    return CanvasBoard;
}());
exports.CanvasBoard = CanvasBoard;


/***/ }),

/***/ "./src/battleships/BattleShips.ts":
/*!****************************************!*\
  !*** ./src/battleships/BattleShips.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Battleships = void 0;
var game_decorator_disabled_1 = __webpack_require__(/*! ../game.decorator.disabled */ "./src/game.decorator.disabled.ts");
var Battleships = /** @class */ (function () {
    function Battleships() {
        this.name = "Battleships";
    }
    Battleships.prototype.getGameElement = function () {
        return document.createElement("battleships");
    };
    __decorate([
        game_decorator_disabled_1.watched
    ], Battleships.prototype, "getGameElement", null);
    Battleships = __decorate([
        game_decorator_disabled_1.DisabledGame
    ], Battleships);
    return Battleships;
}());
exports.Battleships = Battleships;


/***/ }),

/***/ "./src/game.decorator.disabled.ts":
/*!****************************************!*\
  !*** ./src/game.decorator.disabled.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.watched = exports.DisabledGame = void 0;
function DisabledGame(constructorFn) {
    constructorFn.prototype.disabled = true;
}
exports.DisabledGame = DisabledGame;
function watched(target, propKey, descriptor) {
    var originalFn = target[propKey];
    descriptor.value = function () {
        console.log("Game: " + this.name + " has been started.");
        return originalFn.call(this);
    };
}
exports.watched = watched;


/***/ }),

/***/ "./src/game.factory.ts":
/*!*****************************!*\
  !*** ./src/game.factory.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameFactory = void 0;
var games_enum_1 = __webpack_require__(/*! ./games.enum */ "./src/games.enum.ts");
var tictactoe_1 = __webpack_require__(/*! ./tictactoe/tictactoe */ "./src/tictactoe/tictactoe.ts");
var ball_1 = __webpack_require__(/*! ./ball/ball */ "./src/ball/ball.ts");
var BattleShips_1 = __webpack_require__(/*! ./battleships/BattleShips */ "./src/battleships/BattleShips.ts");
var GameFactory = /** @class */ (function () {
    function GameFactory() {
    }
    GameFactory.prototype.createGame = function (gameType) {
        switch (gameType) {
            case games_enum_1.Games.BallInAHole:
                return new ball_1.BallInAHole();
            case games_enum_1.Games.TicTacToe:
                return new tictactoe_1.TicTacToe();
            case games_enum_1.Games.BattleShips:
                return new BattleShips_1.Battleships();
        }
        ;
    };
    return GameFactory;
}());
exports.GameFactory = GameFactory;


/***/ }),

/***/ "./src/games.enum.ts":
/*!***************************!*\
  !*** ./src/games.enum.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Games = void 0;
var Games;
(function (Games) {
    Games[Games["TicTacToe"] = 1] = "TicTacToe";
    Games[Games["BallInAHole"] = 2] = "BallInAHole";
    Games[Games["BattleShips"] = 3] = "BattleShips";
})(Games = exports.Games || (exports.Games = {}));


/***/ }),

/***/ "./src/popup/popup.ts":
/*!****************************!*\
  !*** ./src/popup/popup.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PopUp = void 0;
var PopUp = /** @class */ (function () {
    function PopUp(wonText, infoText, userText) {
        this.mainText = wonText;
        this.infoText = infoText;
        this.userText = userText;
    }
    PopUp.prototype.createPopUp = function () {
        //CREATE
        var popUpBox = document.createElement("div");
        var wonText = document.createElement("p");
        var infoText = document.createElement("p");
        var userText = document.createElement("p");
        var closeBtn = document.createElement("button");
        //ADD TO HTML
        document.body.appendChild(popUpBox);
        popUpBox.appendChild(wonText);
        popUpBox.appendChild(userText);
        popUpBox.appendChild(infoText);
        popUpBox.appendChild(closeBtn);
        //ADD TEXT
        wonText.innerText = this.mainText;
        userText.innerText = this.userText;
        infoText.innerText = this.infoText;
        closeBtn.innerText = "✖";
        //ADD ID / CLASS
        closeBtn.classList.add("close-btn");
        popUpBox.classList.add("popup-box");
        infoText.classList.add("info-text");
        wonText.classList.add("main-text");
        userText.classList.add("user-text");
    };
    return PopUp;
}());
exports.PopUp = PopUp;


/***/ }),

/***/ "./src/tictactoe/Board.ts":
/*!********************************!*\
  !*** ./src/tictactoe/Board.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Board = void 0;
var popup_1 = __webpack_require__(/*! ../popup/popup */ "./src/popup/popup.ts");
var Cell_1 = __webpack_require__(/*! ./Cell */ "./src/tictactoe/Cell.ts");
var Board = /** @class */ (function () {
    function Board(size) {
        var _this = this;
        this.currentSymbol = -1;
        this.table = document.createElement("table");
        this.table.id = "gameBoard";
        this.cells = new Array(size);
        this.table.innerHTML = "";
        for (var r = 0; r < size; r++) {
            var row = this.table.insertRow(r);
            row.className = "row";
            this.cells[r] = new Array(size);
            var _loop_1 = function (c) {
                var cell = row.insertCell(c);
                cell.className = "cell";
                var newCell = new Cell_1.Cell(cell);
                this_1.cells[r][c] = newCell;
                cell.addEventListener("click", function () { return _this.makeMove(newCell); }, false);
            };
            var this_1 = this;
            for (var c = 0; c < size; c++) {
                _loop_1(c);
            }
        }
    }
    Board.prototype.makeMove = function (cell) {
        if (cell.cellValue !== 1 && cell.cellValue !== -1) {
            cell.setCellValue(this.currentSymbol);
            this.currentSymbol *= -1;
        }
        this.checkWin();
    };
    Board.prototype.checkRow = function (row) {
        var rowArray = this.cells[row];
        var oneWins = true;
        rowArray.forEach(function (cell) {
            if (cell.cellValue !== 1) {
                oneWins = false;
            }
        });
        if (oneWins)
            return 1;
        var minusOneWins = true;
        rowArray.forEach(function (cell) {
            if (cell.cellValue !== -1) {
                minusOneWins = false;
            }
        });
        if (minusOneWins)
            return -1;
        return 0;
    };
    Board.prototype.checkColumn = function (column) {
        var oneWins = true;
        for (var i = 0; i < this.cells.length; i++) {
            var cellValue = this.cells[i][column].cellValue;
            if (cellValue !== 1) {
                oneWins = false;
            }
        }
        if (oneWins)
            return 1;
        var minusOneWins = true;
        for (var i = 0; i < this.cells.length; i++) {
            var cellValue = this.cells[i][column].cellValue;
            if (cellValue !== -1) {
                minusOneWins = false;
            }
        }
        if (minusOneWins)
            return -1;
        return 0;
    };
    Board.prototype.crossCheck = function () {
        var oneWins = true;
        for (var i = 0; i < this.cells.length; i++) {
            var cellValue = this.cells[i][i].cellValue;
            if (cellValue !== 1) {
                oneWins = false;
            }
        }
        if (oneWins)
            return 1;
        var minusOneWins = true;
        for (var i = 0; i < this.cells.length; i++) {
            var cellValue = this.cells[i][i].cellValue;
            if (cellValue !== -1) {
                minusOneWins = false;
            }
        }
        if (minusOneWins)
            return -1;
        return 0;
    };
    Board.prototype.reverseCrossCheck = function () {
        var oneWins = true;
        for (var i = 0; i < this.cells.length; i++) {
            var cellValue = this.cells[i][this.cells.length - 1 - i].cellValue;
            if (cellValue !== 1) {
                oneWins = false;
            }
        }
        if (oneWins)
            return 1;
        var minusOneWins = true;
        for (var i = 0; i < this.cells.length; i++) {
            var cellValue = this.cells[i][this.cells.length - 1 - i].cellValue;
            if (cellValue !== -1) {
                minusOneWins = false;
            }
        }
        if (minusOneWins)
            return -1;
        return 0;
    };
    Board.prototype.checkWin = function () {
        var userx = new popup_1.PopUp("Congratulations!", "", "User x has won!");
        var userO = new popup_1.PopUp("Congratulations!", "", "User o has won!");
        for (var i = 0; i < this.cells.length; i++) {
            if (this.checkRow(i) === 1 ||
                this.checkColumn(i) === 1 ||
                this.crossCheck() === 1 ||
                this.reverseCrossCheck() === 1) {
                userx.createPopUp();
            }
            else if (this.checkRow(i) === -1 ||
                this.checkColumn(i) === -1 ||
                this.crossCheck() === -1 ||
                this.reverseCrossCheck() === -1) {
                userO.createPopUp();
            }
        }
    };
    return Board;
}());
exports.Board = Board;


/***/ }),

/***/ "./src/tictactoe/Cell.ts":
/*!*******************************!*\
  !*** ./src/tictactoe/Cell.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Cell = void 0;
var Cell = /** @class */ (function () {
    function Cell(cell) {
        this.htmlElement = cell;
    }
    Cell.prototype.setCellValue = function (value) {
        this.cellValue = value;
        if ((this.cellValue === -1)) {
            this.htmlElement.innerText = 'o';
        }
        if ((this.cellValue === 1)) {
            this.htmlElement.innerText = 'x';
        }
        if ((this.cellValue === 0)) {
            this.htmlElement.innerText = '';
        }
    };
    return Cell;
}());
exports.Cell = Cell;


/***/ }),

/***/ "./src/tictactoe/tictactoe.ts":
/*!************************************!*\
  !*** ./src/tictactoe/tictactoe.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TicTacToe = void 0;
var Board_1 = __webpack_require__(/*! ./Board */ "./src/tictactoe/Board.ts");
var game_decorator_disabled_1 = __webpack_require__(/*! ../game.decorator.disabled */ "./src/game.decorator.disabled.ts");
var TicTacToe = /** @class */ (function () {
    function TicTacToe() {
        this.name = "Tic Tac Toe";
    }
    TicTacToe.prototype.getGameElement = function () {
        var board = new Board_1.Board(3);
        return board.table;
    };
    __decorate([
        game_decorator_disabled_1.watched
    ], TicTacToe.prototype, "getGameElement", null);
    return TicTacToe;
}());
exports.TicTacToe = TicTacToe;


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var game_factory_1 = __webpack_require__(/*! ./game.factory */ "./src/game.factory.ts");
var games_enum_1 = __webpack_require__(/*! ./games.enum */ "./src/games.enum.ts");
var App = /** @class */ (function () {
    function App() {
        this.init();
    }
    App.prototype.init = function () {
        var bodyElement = document.getElementById("body");
        var menuContainer = document.createElement("div"); // kontener menu dostępnych gier
        menuContainer.className = "menu-container";
        var gameContainer = document.createElement("div"); // kontener główny ekranu z grą
        var list = document.createElement("ul"); // lista pozycji w menu dostępnych gier
        var gameFactory = new game_factory_1.GameFactory();
        var _loop_1 = function (gameEnum) {
            var gameNumber = Number(gameEnum);
            if (!isNaN(gameNumber)) {
                var gameObject_1 = gameFactory.createGame(gameNumber);
                if (gameObject_1.disabled) {
                    return "continue";
                }
                console.log(gameObject_1.name);
                console.log(gameObject_1.disabled);
                dropdownLink = document.createElement("li");
                dropdownLink.appendChild(document.createTextNode(gameObject_1.name));
                console.log(gameObject_1);
                dropdownLink.addEventListener("click", function (event) {
                    gameContainer.innerHTML = "";
                    gameContainer.appendChild(gameObject_1.getGameElement());
                });
                list.appendChild(dropdownLink);
            }
        };
        var dropdownLink;
        for (var gameEnum in games_enum_1.Games) {
            _loop_1(gameEnum);
        }
        var title = document.createElement("h1");
        title.innerHTML = "AWESOOOOME GAMES";
        menuContainer.appendChild(title);
        menuContainer.appendChild(list);
        document.body.appendChild(menuContainer);
        document.body.appendChild(gameContainer);
        var modeButton = document.getElementById("checkbox");
        modeButton.addEventListener("click", function () { return bodyElement.classList.toggle("dark-mode"); });
        var popUp = document.querySelector(".popup-box");
        var closeBtn = document.querySelector(".close-btn");
        closeBtn.addEventListener("click", function () { return popUp.classList.add("display-none"); });
    };
    return App;
}());
new App();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFsbC9iYWxsLnRzIiwid2VicGFjazovLy8uL3NyYy9iYWxsL2NhbnZhc0JvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9iYXR0bGVzaGlwcy9CYXR0bGVTaGlwcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5kZWNvcmF0b3IuZGlzYWJsZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuZmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMuZW51bS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wdXAvcG9wdXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpY3RhY3RvZS9Cb2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGljdGFjdG9lL0NlbGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpY3RhY3RvZS90aWN0YWN0b2UudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0EsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELG1CQUFtQjtBQUNuQixnQ0FBZ0MsbUJBQU8sQ0FBQyxvRUFBNEI7QUFDcEUsb0JBQW9CLG1CQUFPLENBQUMsZ0RBQWU7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELG1CQUFtQjs7Ozs7Ozs7Ozs7QUN4Qk47QUFDYiw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0QsbUJBQW1CO0FBQ25CLGNBQWMsbUJBQU8sQ0FBQyw0Q0FBZ0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QyxvRUFBNEI7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGlCQUFpQjs7Ozs7OztVQ3hCakI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7OztBQ3RCYTtBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxxQkFBcUIsbUJBQU8sQ0FBQyw2Q0FBZ0I7QUFDN0MsbUJBQW1CLG1CQUFPLENBQUMseUNBQWM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0EsMERBQTBEO0FBQzFELGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELGtEQUFrRCxFQUFFO0FBQzlHO0FBQ0E7QUFDQSx3REFBd0QsNENBQTRDLEVBQUU7QUFDdEc7QUFDQTtBQUNBLENBQUM7QUFDRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQmFsbEluQUhvbGUgPSB2b2lkIDA7XHJcbnZhciBnYW1lX2RlY29yYXRvcl9kaXNhYmxlZF8xID0gcmVxdWlyZShcIi4uL2dhbWUuZGVjb3JhdG9yLmRpc2FibGVkXCIpO1xyXG52YXIgY2FudmFzQm9hcmRfMSA9IHJlcXVpcmUoXCIuL2NhbnZhc0JvYXJkXCIpO1xyXG52YXIgQmFsbEluQUhvbGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBCYWxsSW5BSG9sZSgpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBcIkJhbGwgaW4gYSBob2xlXCI7XHJcbiAgICB9XHJcbiAgICBCYWxsSW5BSG9sZS5wcm90b3R5cGUuZ2V0R2FtZUVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGJvYXJkID0gbmV3IGNhbnZhc0JvYXJkXzEuQ2FudmFzQm9hcmQoKTtcclxuICAgICAgICByZXR1cm4gYm9hcmQuY2FudmFzO1xyXG4gICAgfTtcclxuICAgIF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGdhbWVfZGVjb3JhdG9yX2Rpc2FibGVkXzEud2F0Y2hlZFxyXG4gICAgXSwgQmFsbEluQUhvbGUucHJvdG90eXBlLCBcImdldEdhbWVFbGVtZW50XCIsIG51bGwpO1xyXG4gICAgcmV0dXJuIEJhbGxJbkFIb2xlO1xyXG59KCkpO1xyXG5leHBvcnRzLkJhbGxJbkFIb2xlID0gQmFsbEluQUhvbGU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQ2FudmFzQm9hcmQgPSB2b2lkIDA7XHJcbnZhciBwb3B1cF8xID0gcmVxdWlyZShcIi4uL3BvcHVwL3BvcHVwXCIpO1xyXG52YXIgQ2FudmFzQm9hcmQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDYW52YXNCb2FyZCgpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuaWQgPSBcImNhbnZhc1wiO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gNTAwO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IDUwMDtcclxuICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xyXG4gICAgICAgIHRoaXMuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIENhbnZhc0JvYXJkLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlb3JpZW50YXRpb24nLCBvbkRldmljZU1vdmUpO1xyXG4gICAgICAgIHZhciBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIHZhciB0aW1lO1xyXG4gICAgICAgIHZhciBjaXJjbGUgPSB7XHJcbiAgICAgICAgICAgIHg6IDUwLFxyXG4gICAgICAgICAgICB5OiA1MCxcclxuICAgICAgICAgICAgc2l6ZTogMzAsXHJcbiAgICAgICAgICAgIGR4OiAxLFxyXG4gICAgICAgICAgICBkeTogMVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGhvbGUgPSB7XHJcbiAgICAgICAgICAgIHg6IGdldFJhbmRvbUludCg1MCwgNDUwKSxcclxuICAgICAgICAgICAgeTogZ2V0UmFuZG9tSW50KDUwLCA0NTApLFxyXG4gICAgICAgICAgICBzaXplOiA0MCxcclxuICAgICAgICAgICAgZHg6IDAsXHJcbiAgICAgICAgICAgIGR5OiAwXHJcbiAgICAgICAgfTtcclxuICAgICAgICBmdW5jdGlvbiBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcclxuICAgICAgICAgICAgbWluID0gTWF0aC5jZWlsKG1pbik7XHJcbiAgICAgICAgICAgIG1heCA9IE1hdGguZmxvb3IobWF4KTtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gb25EZXZpY2VNb3ZlKGV2KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2LmFscGhhLCBldi5iZXRhLCBldi5nYW1tYSk7XHJcbiAgICAgICAgICAgIHN0dXBpZE1vdmUoZXYuZ2FtbWEsIGV2LmJldGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBjb3VudFNwZWVkKHkpIHtcclxuICAgICAgICAgICAgeSA9ICgoeSAlIDM2MCkgKyAzNjApICUgMzYwO1xyXG4gICAgICAgICAgICB2YXIgZHkgPSAwLjE7XHJcbiAgICAgICAgICAgIGlmICh5ID4gMCAmJiB5IDwgMTgwKSB7XHJcbiAgICAgICAgICAgICAgICBkeSA9IDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHkgPiAxODAgJiYgeSA8IDM2MCkge1xyXG4gICAgICAgICAgICAgICAgZHkgPSAtMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0dXBpZE1vdmUoeCwgeSkge1xyXG4gICAgICAgICAgICB2YXIgZHggPSBjb3VudFNwZWVkKHgpO1xyXG4gICAgICAgICAgICB2YXIgZHkgPSBjb3VudFNwZWVkKHkpO1xyXG4gICAgICAgICAgICBjaXJjbGUuZHggPSBkeDtcclxuICAgICAgICAgICAgY2lyY2xlLmR5ID0gZHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGRyYXdDaXJjbGUoKSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuYXJjKGNpcmNsZS54LCBjaXJjbGUueSwgY2lyY2xlLnNpemUsIDAsIE1hdGguUEkgKiAyKTtcclxuICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAnI0RBNUNEMyc7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBkcmF3SG9sZSgpIHtcclxuICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgY29udGV4dC5hcmMoaG9sZS54LCBob2xlLnksIGhvbGUuc2l6ZSwgMCwgTWF0aC5QSSAqIDIpO1xyXG4gICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjMDAwMDAwJztcclxuICAgICAgICAgICAgY29udGV4dC5maWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzaG91bGRSdW4gPSB0cnVlO1xyXG4gICAgICAgIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XHJcbiAgICAgICAgICAgIGlmIChzaG91bGRSdW4pIHtcclxuICAgICAgICAgICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIDUwMCwgNTAwKTtcclxuICAgICAgICAgICAgICAgIGNpcmNsZS54ICs9IGNpcmNsZS5keDtcclxuICAgICAgICAgICAgICAgIGNpcmNsZS55ICs9IGNpcmNsZS5keTtcclxuICAgICAgICAgICAgICAgIGlmIChjaXJjbGUueCArIGNpcmNsZS5zaXplID49IDUwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNpcmNsZS54ID0gNTAwIC0gY2lyY2xlLnNpemU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY2lyY2xlLnggLSBjaXJjbGUuc2l6ZSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2lyY2xlLnggPSBjaXJjbGUuc2l6ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjaXJjbGUueSArIGNpcmNsZS5zaXplID49IDUwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNpcmNsZS55ID0gNTAwIC0gY2lyY2xlLnNpemU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY2lyY2xlLnkgLSBjaXJjbGUuc2l6ZSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2lyY2xlLnkgPSBjaXJjbGUuc2l6ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBiYWxsSW5BSG9sZSgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLnBvdygoaG9sZS54IC0gY2lyY2xlLngpLCAyKSArIE1hdGgucG93KChob2xlLnkgLSBjaXJjbGUueSksIDIpIDw9IDQ1MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWUgPSBNYXRoLnJvdW5kKChEYXRlLm5vdygpIC0gc3RhcnRUaW1lKSAvIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3VsZFJ1biA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB5b3VXaW4gPSBuZXcgcG9wdXBfMS5Qb3BVcChcIkNvbmdyYXR1bGF0aW9ucyFcIiwgXCJZb3VyIHRpbWU6IFwiICsgdGltZSArIFwiIHNlY29uZHMuXCIsICcnKTtcclxuICAgICAgICAgICAgICAgICAgICB5b3VXaW4uY3JlYXRlUG9wVXAoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZHJhd0hvbGUoKTtcclxuICAgICAgICAgICAgZHJhd0NpcmNsZSgpO1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcbiAgICAgICAgICAgIGJhbGxJbkFIb2xlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFuaW1hdGUoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ2FudmFzQm9hcmQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQ2FudmFzQm9hcmQgPSBDYW52YXNCb2FyZDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5CYXR0bGVzaGlwcyA9IHZvaWQgMDtcclxudmFyIGdhbWVfZGVjb3JhdG9yX2Rpc2FibGVkXzEgPSByZXF1aXJlKFwiLi4vZ2FtZS5kZWNvcmF0b3IuZGlzYWJsZWRcIik7XHJcbnZhciBCYXR0bGVzaGlwcyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEJhdHRsZXNoaXBzKCkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiQmF0dGxlc2hpcHNcIjtcclxuICAgIH1cclxuICAgIEJhdHRsZXNoaXBzLnByb3RvdHlwZS5nZXRHYW1lRWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJhdHRsZXNoaXBzXCIpO1xyXG4gICAgfTtcclxuICAgIF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGdhbWVfZGVjb3JhdG9yX2Rpc2FibGVkXzEud2F0Y2hlZFxyXG4gICAgXSwgQmF0dGxlc2hpcHMucHJvdG90eXBlLCBcImdldEdhbWVFbGVtZW50XCIsIG51bGwpO1xyXG4gICAgQmF0dGxlc2hpcHMgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBnYW1lX2RlY29yYXRvcl9kaXNhYmxlZF8xLkRpc2FibGVkR2FtZVxyXG4gICAgXSwgQmF0dGxlc2hpcHMpO1xyXG4gICAgcmV0dXJuIEJhdHRsZXNoaXBzO1xyXG59KCkpO1xyXG5leHBvcnRzLkJhdHRsZXNoaXBzID0gQmF0dGxlc2hpcHM7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMud2F0Y2hlZCA9IGV4cG9ydHMuRGlzYWJsZWRHYW1lID0gdm9pZCAwO1xyXG5mdW5jdGlvbiBEaXNhYmxlZEdhbWUoY29uc3RydWN0b3JGbikge1xyXG4gICAgY29uc3RydWN0b3JGbi5wcm90b3R5cGUuZGlzYWJsZWQgPSB0cnVlO1xyXG59XHJcbmV4cG9ydHMuRGlzYWJsZWRHYW1lID0gRGlzYWJsZWRHYW1lO1xyXG5mdW5jdGlvbiB3YXRjaGVkKHRhcmdldCwgcHJvcEtleSwgZGVzY3JpcHRvcikge1xyXG4gICAgdmFyIG9yaWdpbmFsRm4gPSB0YXJnZXRbcHJvcEtleV07XHJcbiAgICBkZXNjcmlwdG9yLnZhbHVlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2FtZTogXCIgKyB0aGlzLm5hbWUgKyBcIiBoYXMgYmVlbiBzdGFydGVkLlwiKTtcclxuICAgICAgICByZXR1cm4gb3JpZ2luYWxGbi5jYWxsKHRoaXMpO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLndhdGNoZWQgPSB3YXRjaGVkO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkdhbWVGYWN0b3J5ID0gdm9pZCAwO1xyXG52YXIgZ2FtZXNfZW51bV8xID0gcmVxdWlyZShcIi4vZ2FtZXMuZW51bVwiKTtcclxudmFyIHRpY3RhY3RvZV8xID0gcmVxdWlyZShcIi4vdGljdGFjdG9lL3RpY3RhY3RvZVwiKTtcclxudmFyIGJhbGxfMSA9IHJlcXVpcmUoXCIuL2JhbGwvYmFsbFwiKTtcclxudmFyIEJhdHRsZVNoaXBzXzEgPSByZXF1aXJlKFwiLi9iYXR0bGVzaGlwcy9CYXR0bGVTaGlwc1wiKTtcclxudmFyIEdhbWVGYWN0b3J5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gR2FtZUZhY3RvcnkoKSB7XHJcbiAgICB9XHJcbiAgICBHYW1lRmFjdG9yeS5wcm90b3R5cGUuY3JlYXRlR2FtZSA9IGZ1bmN0aW9uIChnYW1lVHlwZSkge1xyXG4gICAgICAgIHN3aXRjaCAoZ2FtZVR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBnYW1lc19lbnVtXzEuR2FtZXMuQmFsbEluQUhvbGU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IGJhbGxfMS5CYWxsSW5BSG9sZSgpO1xyXG4gICAgICAgICAgICBjYXNlIGdhbWVzX2VudW1fMS5HYW1lcy5UaWNUYWNUb2U6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHRpY3RhY3RvZV8xLlRpY1RhY1RvZSgpO1xyXG4gICAgICAgICAgICBjYXNlIGdhbWVzX2VudW1fMS5HYW1lcy5CYXR0bGVTaGlwczpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQmF0dGxlU2hpcHNfMS5CYXR0bGVzaGlwcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEdhbWVGYWN0b3J5O1xyXG59KCkpO1xyXG5leHBvcnRzLkdhbWVGYWN0b3J5ID0gR2FtZUZhY3Rvcnk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuR2FtZXMgPSB2b2lkIDA7XHJcbnZhciBHYW1lcztcclxuKGZ1bmN0aW9uIChHYW1lcykge1xyXG4gICAgR2FtZXNbR2FtZXNbXCJUaWNUYWNUb2VcIl0gPSAxXSA9IFwiVGljVGFjVG9lXCI7XHJcbiAgICBHYW1lc1tHYW1lc1tcIkJhbGxJbkFIb2xlXCJdID0gMl0gPSBcIkJhbGxJbkFIb2xlXCI7XHJcbiAgICBHYW1lc1tHYW1lc1tcIkJhdHRsZVNoaXBzXCJdID0gM10gPSBcIkJhdHRsZVNoaXBzXCI7XHJcbn0pKEdhbWVzID0gZXhwb3J0cy5HYW1lcyB8fCAoZXhwb3J0cy5HYW1lcyA9IHt9KSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUG9wVXAgPSB2b2lkIDA7XHJcbnZhciBQb3BVcCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFBvcFVwKHdvblRleHQsIGluZm9UZXh0LCB1c2VyVGV4dCkge1xyXG4gICAgICAgIHRoaXMubWFpblRleHQgPSB3b25UZXh0O1xyXG4gICAgICAgIHRoaXMuaW5mb1RleHQgPSBpbmZvVGV4dDtcclxuICAgICAgICB0aGlzLnVzZXJUZXh0ID0gdXNlclRleHQ7XHJcbiAgICB9XHJcbiAgICBQb3BVcC5wcm90b3R5cGUuY3JlYXRlUG9wVXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy9DUkVBVEVcclxuICAgICAgICB2YXIgcG9wVXBCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHZhciB3b25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgdmFyIGluZm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgdmFyIHVzZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgdmFyIGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAvL0FERCBUTyBIVE1MXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwb3BVcEJveCk7XHJcbiAgICAgICAgcG9wVXBCb3guYXBwZW5kQ2hpbGQod29uVGV4dCk7XHJcbiAgICAgICAgcG9wVXBCb3guYXBwZW5kQ2hpbGQodXNlclRleHQpO1xyXG4gICAgICAgIHBvcFVwQm94LmFwcGVuZENoaWxkKGluZm9UZXh0KTtcclxuICAgICAgICBwb3BVcEJveC5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XHJcbiAgICAgICAgLy9BREQgVEVYVFxyXG4gICAgICAgIHdvblRleHQuaW5uZXJUZXh0ID0gdGhpcy5tYWluVGV4dDtcclxuICAgICAgICB1c2VyVGV4dC5pbm5lclRleHQgPSB0aGlzLnVzZXJUZXh0O1xyXG4gICAgICAgIGluZm9UZXh0LmlubmVyVGV4dCA9IHRoaXMuaW5mb1RleHQ7XHJcbiAgICAgICAgY2xvc2VCdG4uaW5uZXJUZXh0ID0gXCLinJZcIjtcclxuICAgICAgICAvL0FERCBJRCAvIENMQVNTXHJcbiAgICAgICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZChcImNsb3NlLWJ0blwiKTtcclxuICAgICAgICBwb3BVcEJveC5jbGFzc0xpc3QuYWRkKFwicG9wdXAtYm94XCIpO1xyXG4gICAgICAgIGluZm9UZXh0LmNsYXNzTGlzdC5hZGQoXCJpbmZvLXRleHRcIik7XHJcbiAgICAgICAgd29uVGV4dC5jbGFzc0xpc3QuYWRkKFwibWFpbi10ZXh0XCIpO1xyXG4gICAgICAgIHVzZXJUZXh0LmNsYXNzTGlzdC5hZGQoXCJ1c2VyLXRleHRcIik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFBvcFVwO1xyXG59KCkpO1xyXG5leHBvcnRzLlBvcFVwID0gUG9wVXA7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQm9hcmQgPSB2b2lkIDA7XHJcbnZhciBwb3B1cF8xID0gcmVxdWlyZShcIi4uL3BvcHVwL3BvcHVwXCIpO1xyXG52YXIgQ2VsbF8xID0gcmVxdWlyZShcIi4vQ2VsbFwiKTtcclxudmFyIEJvYXJkID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQm9hcmQoc2l6ZSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3ltYm9sID0gLTE7XHJcbiAgICAgICAgdGhpcy50YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgICAgICB0aGlzLnRhYmxlLmlkID0gXCJnYW1lQm9hcmRcIjtcclxuICAgICAgICB0aGlzLmNlbGxzID0gbmV3IEFycmF5KHNpemUpO1xyXG4gICAgICAgIHRoaXMudGFibGUuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IHNpemU7IHIrKykge1xyXG4gICAgICAgICAgICB2YXIgcm93ID0gdGhpcy50YWJsZS5pbnNlcnRSb3cocik7XHJcbiAgICAgICAgICAgIHJvdy5jbGFzc05hbWUgPSBcInJvd1wiO1xyXG4gICAgICAgICAgICB0aGlzLmNlbGxzW3JdID0gbmV3IEFycmF5KHNpemUpO1xyXG4gICAgICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKGMpO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSBcImNlbGxcIjtcclxuICAgICAgICAgICAgICAgIHZhciBuZXdDZWxsID0gbmV3IENlbGxfMS5DZWxsKGNlbGwpO1xyXG4gICAgICAgICAgICAgICAgdGhpc18xLmNlbGxzW3JdW2NdID0gbmV3Q2VsbDtcclxuICAgICAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLm1ha2VNb3ZlKG5ld0NlbGwpOyB9LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHZhciB0aGlzXzEgPSB0aGlzO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IHNpemU7IGMrKykge1xyXG4gICAgICAgICAgICAgICAgX2xvb3BfMShjKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEJvYXJkLnByb3RvdHlwZS5tYWtlTW92ZSA9IGZ1bmN0aW9uIChjZWxsKSB7XHJcbiAgICAgICAgaWYgKGNlbGwuY2VsbFZhbHVlICE9PSAxICYmIGNlbGwuY2VsbFZhbHVlICE9PSAtMSkge1xyXG4gICAgICAgICAgICBjZWxsLnNldENlbGxWYWx1ZSh0aGlzLmN1cnJlbnRTeW1ib2wpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTeW1ib2wgKj0gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2hlY2tXaW4oKTtcclxuICAgIH07XHJcbiAgICBCb2FyZC5wcm90b3R5cGUuY2hlY2tSb3cgPSBmdW5jdGlvbiAocm93KSB7XHJcbiAgICAgICAgdmFyIHJvd0FycmF5ID0gdGhpcy5jZWxsc1tyb3ddO1xyXG4gICAgICAgIHZhciBvbmVXaW5zID0gdHJ1ZTtcclxuICAgICAgICByb3dBcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChjZWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChjZWxsLmNlbGxWYWx1ZSAhPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgb25lV2lucyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKG9uZVdpbnMpXHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIHZhciBtaW51c09uZVdpbnMgPSB0cnVlO1xyXG4gICAgICAgIHJvd0FycmF5LmZvckVhY2goZnVuY3Rpb24gKGNlbGwpIHtcclxuICAgICAgICAgICAgaWYgKGNlbGwuY2VsbFZhbHVlICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgbWludXNPbmVXaW5zID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAobWludXNPbmVXaW5zKVxyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9O1xyXG4gICAgQm9hcmQucHJvdG90eXBlLmNoZWNrQ29sdW1uID0gZnVuY3Rpb24gKGNvbHVtbikge1xyXG4gICAgICAgIHZhciBvbmVXaW5zID0gdHJ1ZTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2VsbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGNlbGxWYWx1ZSA9IHRoaXMuY2VsbHNbaV1bY29sdW1uXS5jZWxsVmFsdWU7XHJcbiAgICAgICAgICAgIGlmIChjZWxsVmFsdWUgIT09IDEpIHtcclxuICAgICAgICAgICAgICAgIG9uZVdpbnMgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob25lV2lucylcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgdmFyIG1pbnVzT25lV2lucyA9IHRydWU7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNlbGxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBjZWxsVmFsdWUgPSB0aGlzLmNlbGxzW2ldW2NvbHVtbl0uY2VsbFZhbHVlO1xyXG4gICAgICAgICAgICBpZiAoY2VsbFZhbHVlICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgbWludXNPbmVXaW5zID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1pbnVzT25lV2lucylcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfTtcclxuICAgIEJvYXJkLnByb3RvdHlwZS5jcm9zc0NoZWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvbmVXaW5zID0gdHJ1ZTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2VsbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGNlbGxWYWx1ZSA9IHRoaXMuY2VsbHNbaV1baV0uY2VsbFZhbHVlO1xyXG4gICAgICAgICAgICBpZiAoY2VsbFZhbHVlICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBvbmVXaW5zID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9uZVdpbnMpXHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIHZhciBtaW51c09uZVdpbnMgPSB0cnVlO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jZWxscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgY2VsbFZhbHVlID0gdGhpcy5jZWxsc1tpXVtpXS5jZWxsVmFsdWU7XHJcbiAgICAgICAgICAgIGlmIChjZWxsVmFsdWUgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBtaW51c09uZVdpbnMgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWludXNPbmVXaW5zKVxyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9O1xyXG4gICAgQm9hcmQucHJvdG90eXBlLnJldmVyc2VDcm9zc0NoZWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvbmVXaW5zID0gdHJ1ZTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2VsbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGNlbGxWYWx1ZSA9IHRoaXMuY2VsbHNbaV1bdGhpcy5jZWxscy5sZW5ndGggLSAxIC0gaV0uY2VsbFZhbHVlO1xyXG4gICAgICAgICAgICBpZiAoY2VsbFZhbHVlICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBvbmVXaW5zID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9uZVdpbnMpXHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIHZhciBtaW51c09uZVdpbnMgPSB0cnVlO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jZWxscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgY2VsbFZhbHVlID0gdGhpcy5jZWxsc1tpXVt0aGlzLmNlbGxzLmxlbmd0aCAtIDEgLSBpXS5jZWxsVmFsdWU7XHJcbiAgICAgICAgICAgIGlmIChjZWxsVmFsdWUgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBtaW51c09uZVdpbnMgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWludXNPbmVXaW5zKVxyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9O1xyXG4gICAgQm9hcmQucHJvdG90eXBlLmNoZWNrV2luID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB1c2VyeCA9IG5ldyBwb3B1cF8xLlBvcFVwKFwiQ29uZ3JhdHVsYXRpb25zIVwiLCBcIlwiLCBcIlVzZXIgeCBoYXMgd29uIVwiKTtcclxuICAgICAgICB2YXIgdXNlck8gPSBuZXcgcG9wdXBfMS5Qb3BVcChcIkNvbmdyYXR1bGF0aW9ucyFcIiwgXCJcIiwgXCJVc2VyIG8gaGFzIHdvbiFcIik7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNlbGxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrUm93KGkpID09PSAxIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQ29sdW1uKGkpID09PSAxIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyb3NzQ2hlY2soKSA9PT0gMSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXZlcnNlQ3Jvc3NDaGVjaygpID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB1c2VyeC5jcmVhdGVQb3BVcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuY2hlY2tSb3coaSkgPT09IC0xIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQ29sdW1uKGkpID09PSAtMSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jcm9zc0NoZWNrKCkgPT09IC0xIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJldmVyc2VDcm9zc0NoZWNrKCkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB1c2VyTy5jcmVhdGVQb3BVcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBCb2FyZDtcclxufSgpKTtcclxuZXhwb3J0cy5Cb2FyZCA9IEJvYXJkO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkNlbGwgPSB2b2lkIDA7XHJcbnZhciBDZWxsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ2VsbChjZWxsKSB7XHJcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudCA9IGNlbGw7XHJcbiAgICB9XHJcbiAgICBDZWxsLnByb3RvdHlwZS5zZXRDZWxsVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmNlbGxWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIGlmICgodGhpcy5jZWxsVmFsdWUgPT09IC0xKSkge1xyXG4gICAgICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmlubmVyVGV4dCA9ICdvJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCh0aGlzLmNlbGxWYWx1ZSA9PT0gMSkpIHtcclxuICAgICAgICAgICAgdGhpcy5odG1sRWxlbWVudC5pbm5lclRleHQgPSAneCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgodGhpcy5jZWxsVmFsdWUgPT09IDApKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuaW5uZXJUZXh0ID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBDZWxsO1xyXG59KCkpO1xyXG5leHBvcnRzLkNlbGwgPSBDZWxsO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlRpY1RhY1RvZSA9IHZvaWQgMDtcclxudmFyIEJvYXJkXzEgPSByZXF1aXJlKFwiLi9Cb2FyZFwiKTtcclxudmFyIGdhbWVfZGVjb3JhdG9yX2Rpc2FibGVkXzEgPSByZXF1aXJlKFwiLi4vZ2FtZS5kZWNvcmF0b3IuZGlzYWJsZWRcIik7XHJcbnZhciBUaWNUYWNUb2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUaWNUYWNUb2UoKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJUaWMgVGFjIFRvZVwiO1xyXG4gICAgfVxyXG4gICAgVGljVGFjVG9lLnByb3RvdHlwZS5nZXRHYW1lRWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYm9hcmQgPSBuZXcgQm9hcmRfMS5Cb2FyZCgzKTtcclxuICAgICAgICByZXR1cm4gYm9hcmQudGFibGU7XHJcbiAgICB9O1xyXG4gICAgX19kZWNvcmF0ZShbXHJcbiAgICAgICAgZ2FtZV9kZWNvcmF0b3JfZGlzYWJsZWRfMS53YXRjaGVkXHJcbiAgICBdLCBUaWNUYWNUb2UucHJvdG90eXBlLCBcImdldEdhbWVFbGVtZW50XCIsIG51bGwpO1xyXG4gICAgcmV0dXJuIFRpY1RhY1RvZTtcclxufSgpKTtcclxuZXhwb3J0cy5UaWNUYWNUb2UgPSBUaWNUYWNUb2U7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZ2FtZV9mYWN0b3J5XzEgPSByZXF1aXJlKFwiLi9nYW1lLmZhY3RvcnlcIik7XHJcbnZhciBnYW1lc19lbnVtXzEgPSByZXF1aXJlKFwiLi9nYW1lcy5lbnVtXCIpO1xyXG52YXIgQXBwID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQXBwKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG4gICAgQXBwLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBib2R5RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keVwiKTtcclxuICAgICAgICB2YXIgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vIGtvbnRlbmVyIG1lbnUgZG9zdMSZcG55Y2ggZ2llclxyXG4gICAgICAgIG1lbnVDb250YWluZXIuY2xhc3NOYW1lID0gXCJtZW51LWNvbnRhaW5lclwiO1xyXG4gICAgICAgIHZhciBnYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy8ga29udGVuZXIgZ8WCw7N3bnkgZWtyYW51IHogZ3LEhVxyXG4gICAgICAgIHZhciBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpOyAvLyBsaXN0YSBwb3p5Y2ppIHcgbWVudSBkb3N0xJlwbnljaCBnaWVyXHJcbiAgICAgICAgdmFyIGdhbWVGYWN0b3J5ID0gbmV3IGdhbWVfZmFjdG9yeV8xLkdhbWVGYWN0b3J5KCk7XHJcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoZ2FtZUVudW0pIHtcclxuICAgICAgICAgICAgdmFyIGdhbWVOdW1iZXIgPSBOdW1iZXIoZ2FtZUVudW0pO1xyXG4gICAgICAgICAgICBpZiAoIWlzTmFOKGdhbWVOdW1iZXIpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZ2FtZU9iamVjdF8xID0gZ2FtZUZhY3RvcnkuY3JlYXRlR2FtZShnYW1lTnVtYmVyKTtcclxuICAgICAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0XzEuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZ2FtZU9iamVjdF8xLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZ2FtZU9iamVjdF8xLmRpc2FibGVkKTtcclxuICAgICAgICAgICAgICAgIGRyb3Bkb3duTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICAgICAgICAgIGRyb3Bkb3duTGluay5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShnYW1lT2JqZWN0XzEubmFtZSkpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZ2FtZU9iamVjdF8xKTtcclxuICAgICAgICAgICAgICAgIGRyb3Bkb3duTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2FtZU9iamVjdF8xLmdldEdhbWVFbGVtZW50KCkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGRyb3Bkb3duTGluayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBkcm9wZG93bkxpbms7XHJcbiAgICAgICAgZm9yICh2YXIgZ2FtZUVudW0gaW4gZ2FtZXNfZW51bV8xLkdhbWVzKSB7XHJcbiAgICAgICAgICAgIF9sb29wXzEoZ2FtZUVudW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gXCJBV0VTT09PT01FIEdBTUVTXCI7XHJcbiAgICAgICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICAgICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0KTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZ2FtZUNvbnRhaW5lcik7XHJcbiAgICAgICAgdmFyIG1vZGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoZWNrYm94XCIpO1xyXG4gICAgICAgIG1vZGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGJvZHlFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrLW1vZGVcIik7IH0pO1xyXG4gICAgICAgIHZhciBwb3BVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAtYm94XCIpO1xyXG4gICAgICAgIHZhciBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtYnRuXCIpO1xyXG4gICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7IHJldHVybiBwb3BVcC5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheS1ub25lXCIpOyB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQXBwO1xyXG59KCkpO1xyXG5uZXcgQXBwKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=