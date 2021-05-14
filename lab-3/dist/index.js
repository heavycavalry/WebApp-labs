/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ball/ball.ts":
/*!**************************!*\
  !*** ./src/ball/ball.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BallInAHole = void 0;
var canvasBoard_1 = __webpack_require__(/*! ./canvasBoard */ "./src/ball/canvasBoard.ts");
var BallInAHole = /** @class */ (function () {
    function BallInAHole() {
        this.name = "Ball in a hole";
    }
    BallInAHole.prototype.getGameElement = function () {
        var board = new canvasBoard_1.CanvasBoard();
        return board.canvas;
    };
    return BallInAHole;
}());
exports.BallInAHole = BallInAHole;


/***/ }),

/***/ "./src/ball/canvasBoard.ts":
/*!*********************************!*\
  !*** ./src/ball/canvasBoard.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CanvasBoard = void 0;
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
                    alert("You win !!! Your time: " + time + " seconds");
                    this.start();
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
var GameFactory = /** @class */ (function () {
    function GameFactory() {
    }
    GameFactory.prototype.createGame = function (gameType) {
        switch (gameType) {
            case games_enum_1.Games.BattleShips:
                return new ball_1.BallInAHole();
            case games_enum_1.Games.TicTacToe:
                return new tictactoe_1.TicTacToe();
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
    Games[Games["BattleShips"] = 2] = "BattleShips";
})(Games = exports.Games || (exports.Games = {}));


/***/ }),

/***/ "./src/tictactoe/Board.ts":
/*!********************************!*\
  !*** ./src/tictactoe/Board.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Board = void 0;
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
        for (var i = 0; i < this.cells.length; i++) {
            if (this.checkRow(i) === 1 || this.checkColumn(i) === 1)
                alert("Gratulacje, wygrał użytkownik X");
            else if (this.checkRow(i) === -1 || this.checkColumn(i) === -1)
                alert("Gratulacje, wygrał użytkownik O");
        }
        if (this.crossCheck() === 1 || this.reverseCrossCheck() === 1)
            alert("Gratulacje, wygrał użytkownik X");
        else if (this.crossCheck() === -1 || this.reverseCrossCheck() === -1)
            alert("Gratulacje, wygrał użytkownik O");
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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TicTacToe = void 0;
var Board_1 = __webpack_require__(/*! ./Board */ "./src/tictactoe/Board.ts");
var TicTacToe = /** @class */ (function () {
    function TicTacToe() {
        this.name = "Tic Tac Toe";
    }
    TicTacToe.prototype.getGameElement = function () {
        var board = new Board_1.Board(3);
        return board.table;
    };
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
        var bodyElement = document.getElementById('body');
        var menuContainer = (document.createElement('div')); // kontener menu dostępnych gier
        menuContainer.className = "menu-container";
        var gameContainer = (document.createElement('div')); // kontener główny ekranu z grą
        var list = document.createElement('ul'); // lista pozycji w menu dostępnych gier
        var gameFactory = new game_factory_1.GameFactory();
        var _loop_1 = function (gameEnum) {
            var gameNumber = Number(gameEnum);
            if (!isNaN(gameNumber)) {
                var gameObject_1 = gameFactory.createGame(gameNumber);
                dropdownLink = document.createElement('li');
                dropdownLink.appendChild(document.createTextNode(gameObject_1.name));
                console.log(gameObject_1);
                dropdownLink.addEventListener('click', function (event) {
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
        var title = document.createElement('h1');
        title.innerHTML = "AWESOOOOME GAMES";
        menuContainer.appendChild(title);
        menuContainer.appendChild(list);
        document.body.appendChild(menuContainer);
        document.body.appendChild(gameContainer);
        // const popUpBox = document.createElement('div');
        // const popUp = document.getElementById('popup');
        // popUp.appendChild(popUpBox);
        // popUpBox.classList.add("popup-box");
        var modeButton = document.getElementById('checkbox');
        modeButton.addEventListener('click', function () { return (bodyElement.classList.toggle('dark-mode')); });
    };
    return App;
}());
new App();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFsbC9iYWxsLnRzIiwid2VicGFjazovLy8uL3NyYy9iYWxsL2NhbnZhc0JvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzLmVudW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpY3RhY3RvZS9Cb2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGljdGFjdG9lL0NlbGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpY3RhY3RvZS90aWN0YWN0b2UudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0QsbUJBQW1CO0FBQ25CLG9CQUFvQixtQkFBTyxDQUFDLGdEQUFlO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxtQkFBbUI7Ozs7Ozs7Ozs7O0FDZE47QUFDYiw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0QsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7OztBQ3RCYTtBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxxQkFBcUIsbUJBQU8sQ0FBQyw2Q0FBZ0I7QUFDN0MsbUJBQW1CLG1CQUFPLENBQUMseUNBQWM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0EsNERBQTREO0FBQzVELGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxvREFBb0QsRUFBRTtBQUNoSDtBQUNBO0FBQ0EsQ0FBQztBQUNEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5CYWxsSW5BSG9sZSA9IHZvaWQgMDtcclxudmFyIGNhbnZhc0JvYXJkXzEgPSByZXF1aXJlKFwiLi9jYW52YXNCb2FyZFwiKTtcclxudmFyIEJhbGxJbkFIb2xlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQmFsbEluQUhvbGUoKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJCYWxsIGluIGEgaG9sZVwiO1xyXG4gICAgfVxyXG4gICAgQmFsbEluQUhvbGUucHJvdG90eXBlLmdldEdhbWVFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBib2FyZCA9IG5ldyBjYW52YXNCb2FyZF8xLkNhbnZhc0JvYXJkKCk7XHJcbiAgICAgICAgcmV0dXJuIGJvYXJkLmNhbnZhcztcclxuICAgIH07XHJcbiAgICByZXR1cm4gQmFsbEluQUhvbGU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQmFsbEluQUhvbGUgPSBCYWxsSW5BSG9sZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5DYW52YXNCb2FyZCA9IHZvaWQgMDtcclxudmFyIENhbnZhc0JvYXJkID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ2FudmFzQm9hcmQoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmlkID0gXCJjYW52YXNcIjtcclxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IDUwMDtcclxuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSA1MDA7XHJcbiAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcclxuICAgICAgICB0aGlzLnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICBDYW52YXNCb2FyZC5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZW9yaWVudGF0aW9uJywgb25EZXZpY2VNb3ZlKTtcclxuICAgICAgICB2YXIgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICB2YXIgdGltZTtcclxuICAgICAgICB2YXIgY2lyY2xlID0ge1xyXG4gICAgICAgICAgICB4OiA1MCxcclxuICAgICAgICAgICAgeTogNTAsXHJcbiAgICAgICAgICAgIHNpemU6IDMwLFxyXG4gICAgICAgICAgICBkeDogMSxcclxuICAgICAgICAgICAgZHk6IDFcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBob2xlID0ge1xyXG4gICAgICAgICAgICB4OiBnZXRSYW5kb21JbnQoNTAsIDQ1MCksXHJcbiAgICAgICAgICAgIHk6IGdldFJhbmRvbUludCg1MCwgNDUwKSxcclxuICAgICAgICAgICAgc2l6ZTogNDAsXHJcbiAgICAgICAgICAgIGR4OiAwLFxyXG4gICAgICAgICAgICBkeTogMFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XHJcbiAgICAgICAgICAgIG1pbiA9IE1hdGguY2VpbChtaW4pO1xyXG4gICAgICAgICAgICBtYXggPSBNYXRoLmZsb29yKG1heCk7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIG9uRGV2aWNlTW92ZShldikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldi5hbHBoYSwgZXYuYmV0YSwgZXYuZ2FtbWEpO1xyXG4gICAgICAgICAgICBzdHVwaWRNb3ZlKGV2LmdhbW1hLCBldi5iZXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gY291bnRTcGVlZCh5KSB7XHJcbiAgICAgICAgICAgIHkgPSAoKHkgJSAzNjApICsgMzYwKSAlIDM2MDtcclxuICAgICAgICAgICAgdmFyIGR5ID0gMC4xO1xyXG4gICAgICAgICAgICBpZiAoeSA+IDAgJiYgeSA8IDE4MCkge1xyXG4gICAgICAgICAgICAgICAgZHkgPSAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh5ID4gMTgwICYmIHkgPCAzNjApIHtcclxuICAgICAgICAgICAgICAgIGR5ID0gLTI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGR5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBzdHVwaWRNb3ZlKHgsIHkpIHtcclxuICAgICAgICAgICAgdmFyIGR4ID0gY291bnRTcGVlZCh4KTtcclxuICAgICAgICAgICAgdmFyIGR5ID0gY291bnRTcGVlZCh5KTtcclxuICAgICAgICAgICAgY2lyY2xlLmR4ID0gZHg7XHJcbiAgICAgICAgICAgIGNpcmNsZS5keSA9IGR5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBkcmF3Q2lyY2xlKCkge1xyXG4gICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICBjb250ZXh0LmFyYyhjaXJjbGUueCwgY2lyY2xlLnksIGNpcmNsZS5zaXplLCAwLCBNYXRoLlBJICogMik7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyNEQTVDRDMnO1xyXG4gICAgICAgICAgICBjb250ZXh0LmZpbGwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gZHJhd0hvbGUoKSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuYXJjKGhvbGUueCwgaG9sZS55LCBob2xlLnNpemUsIDAsIE1hdGguUEkgKiAyKTtcclxuICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAnIzAwMDAwMCc7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc2hvdWxkUnVuID0gdHJ1ZTtcclxuICAgICAgICBmdW5jdGlvbiBhbmltYXRlKCkge1xyXG4gICAgICAgICAgICBpZiAoc2hvdWxkUnVuKSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCA1MDAsIDUwMCk7XHJcbiAgICAgICAgICAgICAgICBjaXJjbGUueCArPSBjaXJjbGUuZHg7XHJcbiAgICAgICAgICAgICAgICBjaXJjbGUueSArPSBjaXJjbGUuZHk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2lyY2xlLnggKyBjaXJjbGUuc2l6ZSA+PSA1MDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjaXJjbGUueCA9IDUwMCAtIGNpcmNsZS5zaXplO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNpcmNsZS54IC0gY2lyY2xlLnNpemUgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNpcmNsZS54ID0gY2lyY2xlLnNpemU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY2lyY2xlLnkgKyBjaXJjbGUuc2l6ZSA+PSA1MDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjaXJjbGUueSA9IDUwMCAtIGNpcmNsZS5zaXplO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNpcmNsZS55IC0gY2lyY2xlLnNpemUgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNpcmNsZS55ID0gY2lyY2xlLnNpemU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gYmFsbEluQUhvbGUoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5wb3coKGhvbGUueCAtIGNpcmNsZS54KSwgMikgKyBNYXRoLnBvdygoaG9sZS55IC0gY2lyY2xlLnkpLCAyKSA8PSA0NTApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lID0gTWF0aC5yb3VuZCgoRGF0ZS5ub3coKSAtIHN0YXJ0VGltZSkgLyAxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICBzaG91bGRSdW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChcIllvdSB3aW4gISEhIFlvdXIgdGltZTogXCIgKyB0aW1lICsgXCIgc2Vjb25kc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZHJhd0hvbGUoKTtcclxuICAgICAgICAgICAgZHJhd0NpcmNsZSgpO1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcbiAgICAgICAgICAgIGJhbGxJbkFIb2xlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFuaW1hdGUoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ2FudmFzQm9hcmQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQ2FudmFzQm9hcmQgPSBDYW52YXNCb2FyZDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5HYW1lRmFjdG9yeSA9IHZvaWQgMDtcclxudmFyIGdhbWVzX2VudW1fMSA9IHJlcXVpcmUoXCIuL2dhbWVzLmVudW1cIik7XHJcbnZhciB0aWN0YWN0b2VfMSA9IHJlcXVpcmUoXCIuL3RpY3RhY3RvZS90aWN0YWN0b2VcIik7XHJcbnZhciBiYWxsXzEgPSByZXF1aXJlKFwiLi9iYWxsL2JhbGxcIik7XHJcbnZhciBHYW1lRmFjdG9yeSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEdhbWVGYWN0b3J5KCkge1xyXG4gICAgfVxyXG4gICAgR2FtZUZhY3RvcnkucHJvdG90eXBlLmNyZWF0ZUdhbWUgPSBmdW5jdGlvbiAoZ2FtZVR5cGUpIHtcclxuICAgICAgICBzd2l0Y2ggKGdhbWVUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgZ2FtZXNfZW51bV8xLkdhbWVzLkJhdHRsZVNoaXBzOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBiYWxsXzEuQmFsbEluQUhvbGUoKTtcclxuICAgICAgICAgICAgY2FzZSBnYW1lc19lbnVtXzEuR2FtZXMuVGljVGFjVG9lOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyB0aWN0YWN0b2VfMS5UaWNUYWNUb2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBHYW1lRmFjdG9yeTtcclxufSgpKTtcclxuZXhwb3J0cy5HYW1lRmFjdG9yeSA9IEdhbWVGYWN0b3J5O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkdhbWVzID0gdm9pZCAwO1xyXG52YXIgR2FtZXM7XHJcbihmdW5jdGlvbiAoR2FtZXMpIHtcclxuICAgIEdhbWVzW0dhbWVzW1wiVGljVGFjVG9lXCJdID0gMV0gPSBcIlRpY1RhY1RvZVwiO1xyXG4gICAgR2FtZXNbR2FtZXNbXCJCYXR0bGVTaGlwc1wiXSA9IDJdID0gXCJCYXR0bGVTaGlwc1wiO1xyXG59KShHYW1lcyA9IGV4cG9ydHMuR2FtZXMgfHwgKGV4cG9ydHMuR2FtZXMgPSB7fSkpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkJvYXJkID0gdm9pZCAwO1xyXG52YXIgQ2VsbF8xID0gcmVxdWlyZShcIi4vQ2VsbFwiKTtcclxudmFyIEJvYXJkID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQm9hcmQoc2l6ZSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3ltYm9sID0gLTE7XHJcbiAgICAgICAgdGhpcy50YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgICAgICB0aGlzLnRhYmxlLmlkID0gXCJnYW1lQm9hcmRcIjtcclxuICAgICAgICB0aGlzLmNlbGxzID0gbmV3IEFycmF5KHNpemUpO1xyXG4gICAgICAgIHRoaXMudGFibGUuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IHNpemU7IHIrKykge1xyXG4gICAgICAgICAgICB2YXIgcm93ID0gdGhpcy50YWJsZS5pbnNlcnRSb3cocik7XHJcbiAgICAgICAgICAgIHJvdy5jbGFzc05hbWUgPSBcInJvd1wiO1xyXG4gICAgICAgICAgICB0aGlzLmNlbGxzW3JdID0gbmV3IEFycmF5KHNpemUpO1xyXG4gICAgICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKGMpO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSBcImNlbGxcIjtcclxuICAgICAgICAgICAgICAgIHZhciBuZXdDZWxsID0gbmV3IENlbGxfMS5DZWxsKGNlbGwpO1xyXG4gICAgICAgICAgICAgICAgdGhpc18xLmNlbGxzW3JdW2NdID0gbmV3Q2VsbDtcclxuICAgICAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLm1ha2VNb3ZlKG5ld0NlbGwpOyB9LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHZhciB0aGlzXzEgPSB0aGlzO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IHNpemU7IGMrKykge1xyXG4gICAgICAgICAgICAgICAgX2xvb3BfMShjKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEJvYXJkLnByb3RvdHlwZS5tYWtlTW92ZSA9IGZ1bmN0aW9uIChjZWxsKSB7XHJcbiAgICAgICAgaWYgKGNlbGwuY2VsbFZhbHVlICE9PSAxICYmIGNlbGwuY2VsbFZhbHVlICE9PSAtMSkge1xyXG4gICAgICAgICAgICBjZWxsLnNldENlbGxWYWx1ZSh0aGlzLmN1cnJlbnRTeW1ib2wpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTeW1ib2wgKj0gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2hlY2tXaW4oKTtcclxuICAgIH07XHJcbiAgICBCb2FyZC5wcm90b3R5cGUuY2hlY2tSb3cgPSBmdW5jdGlvbiAocm93KSB7XHJcbiAgICAgICAgdmFyIHJvd0FycmF5ID0gdGhpcy5jZWxsc1tyb3ddO1xyXG4gICAgICAgIHZhciBvbmVXaW5zID0gdHJ1ZTtcclxuICAgICAgICByb3dBcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChjZWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChjZWxsLmNlbGxWYWx1ZSAhPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgb25lV2lucyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKG9uZVdpbnMpXHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIHZhciBtaW51c09uZVdpbnMgPSB0cnVlO1xyXG4gICAgICAgIHJvd0FycmF5LmZvckVhY2goZnVuY3Rpb24gKGNlbGwpIHtcclxuICAgICAgICAgICAgaWYgKGNlbGwuY2VsbFZhbHVlICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgbWludXNPbmVXaW5zID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAobWludXNPbmVXaW5zKVxyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9O1xyXG4gICAgQm9hcmQucHJvdG90eXBlLmNoZWNrQ29sdW1uID0gZnVuY3Rpb24gKGNvbHVtbikge1xyXG4gICAgICAgIHZhciBvbmVXaW5zID0gdHJ1ZTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2VsbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGNlbGxWYWx1ZSA9IHRoaXMuY2VsbHNbaV1bY29sdW1uXS5jZWxsVmFsdWU7XHJcbiAgICAgICAgICAgIGlmIChjZWxsVmFsdWUgIT09IDEpIHtcclxuICAgICAgICAgICAgICAgIG9uZVdpbnMgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob25lV2lucylcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgdmFyIG1pbnVzT25lV2lucyA9IHRydWU7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNlbGxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBjZWxsVmFsdWUgPSB0aGlzLmNlbGxzW2ldW2NvbHVtbl0uY2VsbFZhbHVlO1xyXG4gICAgICAgICAgICBpZiAoY2VsbFZhbHVlICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgbWludXNPbmVXaW5zID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1pbnVzT25lV2lucylcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfTtcclxuICAgIEJvYXJkLnByb3RvdHlwZS5jcm9zc0NoZWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvbmVXaW5zID0gdHJ1ZTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2VsbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGNlbGxWYWx1ZSA9IHRoaXMuY2VsbHNbaV1baV0uY2VsbFZhbHVlO1xyXG4gICAgICAgICAgICBpZiAoY2VsbFZhbHVlICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBvbmVXaW5zID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9uZVdpbnMpXHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIHZhciBtaW51c09uZVdpbnMgPSB0cnVlO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jZWxscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgY2VsbFZhbHVlID0gdGhpcy5jZWxsc1tpXVtpXS5jZWxsVmFsdWU7XHJcbiAgICAgICAgICAgIGlmIChjZWxsVmFsdWUgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBtaW51c09uZVdpbnMgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWludXNPbmVXaW5zKVxyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9O1xyXG4gICAgQm9hcmQucHJvdG90eXBlLnJldmVyc2VDcm9zc0NoZWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvbmVXaW5zID0gdHJ1ZTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2VsbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGNlbGxWYWx1ZSA9IHRoaXMuY2VsbHNbaV1bdGhpcy5jZWxscy5sZW5ndGggLSAxIC0gaV0uY2VsbFZhbHVlO1xyXG4gICAgICAgICAgICBpZiAoY2VsbFZhbHVlICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBvbmVXaW5zID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9uZVdpbnMpXHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIHZhciBtaW51c09uZVdpbnMgPSB0cnVlO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jZWxscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgY2VsbFZhbHVlID0gdGhpcy5jZWxsc1tpXVt0aGlzLmNlbGxzLmxlbmd0aCAtIDEgLSBpXS5jZWxsVmFsdWU7XHJcbiAgICAgICAgICAgIGlmIChjZWxsVmFsdWUgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBtaW51c09uZVdpbnMgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWludXNPbmVXaW5zKVxyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9O1xyXG4gICAgQm9hcmQucHJvdG90eXBlLmNoZWNrV2luID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jZWxscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja1JvdyhpKSA9PT0gMSB8fCB0aGlzLmNoZWNrQ29sdW1uKGkpID09PSAxKVxyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJHcmF0dWxhY2plLCB3eWdyYcWCIHXFvHl0a293bmlrIFhcIik7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuY2hlY2tSb3coaSkgPT09IC0xIHx8IHRoaXMuY2hlY2tDb2x1bW4oaSkgPT09IC0xKVxyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJHcmF0dWxhY2plLCB3eWdyYcWCIHXFvHl0a293bmlrIE9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNyb3NzQ2hlY2soKSA9PT0gMSB8fCB0aGlzLnJldmVyc2VDcm9zc0NoZWNrKCkgPT09IDEpXHJcbiAgICAgICAgICAgIGFsZXJ0KFwiR3JhdHVsYWNqZSwgd3lncmHFgiB1xbx5dGtvd25payBYXCIpO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY3Jvc3NDaGVjaygpID09PSAtMSB8fCB0aGlzLnJldmVyc2VDcm9zc0NoZWNrKCkgPT09IC0xKVxyXG4gICAgICAgICAgICBhbGVydChcIkdyYXR1bGFjamUsIHd5Z3JhxYIgdcW8eXRrb3duaWsgT1wiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQm9hcmQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQm9hcmQgPSBCb2FyZDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5DZWxsID0gdm9pZCAwO1xyXG52YXIgQ2VsbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENlbGwoY2VsbCkge1xyXG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQgPSBjZWxsO1xyXG4gICAgfVxyXG4gICAgQ2VsbC5wcm90b3R5cGUuc2V0Q2VsbFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5jZWxsVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICBpZiAoKHRoaXMuY2VsbFZhbHVlID09PSAtMSkpIHtcclxuICAgICAgICAgICAgdGhpcy5odG1sRWxlbWVudC5pbm5lclRleHQgPSAnbyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgodGhpcy5jZWxsVmFsdWUgPT09IDEpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuaW5uZXJUZXh0ID0gJ3gnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKHRoaXMuY2VsbFZhbHVlID09PSAwKSkge1xyXG4gICAgICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmlubmVyVGV4dCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gQ2VsbDtcclxufSgpKTtcclxuZXhwb3J0cy5DZWxsID0gQ2VsbDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5UaWNUYWNUb2UgPSB2b2lkIDA7XHJcbnZhciBCb2FyZF8xID0gcmVxdWlyZShcIi4vQm9hcmRcIik7XHJcbnZhciBUaWNUYWNUb2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUaWNUYWNUb2UoKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJUaWMgVGFjIFRvZVwiO1xyXG4gICAgfVxyXG4gICAgVGljVGFjVG9lLnByb3RvdHlwZS5nZXRHYW1lRWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYm9hcmQgPSBuZXcgQm9hcmRfMS5Cb2FyZCgzKTtcclxuICAgICAgICByZXR1cm4gYm9hcmQudGFibGU7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRpY1RhY1RvZTtcclxufSgpKTtcclxuZXhwb3J0cy5UaWNUYWNUb2UgPSBUaWNUYWNUb2U7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZ2FtZV9mYWN0b3J5XzEgPSByZXF1aXJlKFwiLi9nYW1lLmZhY3RvcnlcIik7XHJcbnZhciBnYW1lc19lbnVtXzEgPSByZXF1aXJlKFwiLi9nYW1lcy5lbnVtXCIpO1xyXG52YXIgQXBwID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQXBwKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG4gICAgQXBwLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBib2R5RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2R5Jyk7XHJcbiAgICAgICAgdmFyIG1lbnVDb250YWluZXIgPSAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpOyAvLyBrb250ZW5lciBtZW51IGRvc3TEmXBueWNoIGdpZXJcclxuICAgICAgICBtZW51Q29udGFpbmVyLmNsYXNzTmFtZSA9IFwibWVudS1jb250YWluZXJcIjtcclxuICAgICAgICB2YXIgZ2FtZUNvbnRhaW5lciA9IChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7IC8vIGtvbnRlbmVyIGfFgsOzd255IGVrcmFudSB6IGdyxIVcclxuICAgICAgICB2YXIgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7IC8vIGxpc3RhIHBvenljamkgdyBtZW51IGRvc3TEmXBueWNoIGdpZXJcclxuICAgICAgICB2YXIgZ2FtZUZhY3RvcnkgPSBuZXcgZ2FtZV9mYWN0b3J5XzEuR2FtZUZhY3RvcnkoKTtcclxuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChnYW1lRW51bSkge1xyXG4gICAgICAgICAgICB2YXIgZ2FtZU51bWJlciA9IE51bWJlcihnYW1lRW51bSk7XHJcbiAgICAgICAgICAgIGlmICghaXNOYU4oZ2FtZU51bWJlcikpIHtcclxuICAgICAgICAgICAgICAgIHZhciBnYW1lT2JqZWN0XzEgPSBnYW1lRmFjdG9yeS5jcmVhdGVHYW1lKGdhbWVOdW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgZHJvcGRvd25MaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgICAgIGRyb3Bkb3duTGluay5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShnYW1lT2JqZWN0XzEubmFtZSkpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZ2FtZU9iamVjdF8xKTtcclxuICAgICAgICAgICAgICAgIGRyb3Bkb3duTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGdhbWVPYmplY3RfMS5nZXRHYW1lRWxlbWVudCgpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChkcm9wZG93bkxpbmspO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgZHJvcGRvd25MaW5rO1xyXG4gICAgICAgIGZvciAodmFyIGdhbWVFbnVtIGluIGdhbWVzX2VudW1fMS5HYW1lcykge1xyXG4gICAgICAgICAgICBfbG9vcF8xKGdhbWVFbnVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSBcIkFXRVNPT09PTUUgR0FNRVNcIjtcclxuICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3QpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChnYW1lQ29udGFpbmVyKTtcclxuICAgICAgICAvLyBjb25zdCBwb3BVcEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIC8vIGNvbnN0IHBvcFVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwJyk7XHJcbiAgICAgICAgLy8gcG9wVXAuYXBwZW5kQ2hpbGQocG9wVXBCb3gpO1xyXG4gICAgICAgIC8vIHBvcFVwQm94LmNsYXNzTGlzdC5hZGQoXCJwb3B1cC1ib3hcIik7XHJcbiAgICAgICAgdmFyIG1vZGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2tib3gnKTtcclxuICAgICAgICBtb2RlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gKGJvZHlFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2RhcmstbW9kZScpKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEFwcDtcclxufSgpKTtcclxubmV3IEFwcCgpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9