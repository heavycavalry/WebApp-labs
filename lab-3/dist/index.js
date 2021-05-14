/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/battleships/battleships.ts":
/*!****************************************!*\
  !*** ./src/battleships/battleships.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.BattleShips = void 0;
var BattleShips = /** @class */ (function () {
    function BattleShips() {
        this.name = "Battleships";
    }
    BattleShips.prototype.getGameElement = function () {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode("Hello BattleShips"));
        return div;
    };
    return BattleShips;
}());
exports.BattleShips = BattleShips;


/***/ }),

/***/ "./src/game.factory.ts":
/*!*****************************!*\
  !*** ./src/game.factory.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.__esModule = true;
exports.GameFactory = void 0;
var games_enum_1 = __webpack_require__(/*! ./games.enum */ "./src/games.enum.ts");
var tictactoe_1 = __webpack_require__(/*! ./tictactoe/tictactoe */ "./src/tictactoe/tictactoe.ts");
var battleships_1 = __webpack_require__(/*! ./battleships/battleships */ "./src/battleships/battleships.ts");
var GameFactory = /** @class */ (function () {
    function GameFactory() {
    }
    GameFactory.prototype.createGame = function (gameType) {
        switch (gameType) {
            case games_enum_1.Games.BattleShips:
                return new battleships_1.BattleShips();
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


exports.__esModule = true;
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


exports.__esModule = true;
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


exports.__esModule = true;
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


exports.__esModule = true;
exports.TicTacToe = void 0;
var Board_1 = __webpack_require__(/*! ./Board */ "./src/tictactoe/Board.ts");
var TicTacToe = /** @class */ (function () {
    function TicTacToe() {
        this.name = "Tic Tac Toe";
    }
    TicTacToe.prototype.getGameElement = function () {
        var board = new Board_1.Board(3);
        console.log("dupa dupa");
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

exports.__esModule = true;
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
        var modeButton = document.getElementById('checkbox');
        modeButton.addEventListener('click', function toggle() {
            if (modeButton.checked) {
                console.log("srALA");
                bodyElement.classList.add('dark-mode');
            }
            else {
                bodyElement.classList.remove('dark-mode');
            }
        });
    };
    return App;
}());
new App();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmF0dGxlc2hpcHMvYmF0dGxlc2hpcHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuZmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMuZW51bS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGljdGFjdG9lL0JvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy90aWN0YWN0b2UvQ2VsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGljdGFjdG9lL3RpY3RhY3RvZS50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiLGtCQUFrQjtBQUNsQixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsbUJBQW1COzs7Ozs7Ozs7OztBQ2ROO0FBQ2Isa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQixtQkFBbUIsbUJBQU8sQ0FBQyx5Q0FBYztBQUN6QyxrQkFBa0IsbUJBQU8sQ0FBQywyREFBdUI7QUFDakQsb0JBQW9CLG1CQUFPLENBQUMsbUVBQTJCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELG1CQUFtQjs7Ozs7Ozs7Ozs7QUNwQk47QUFDYixrQkFBa0I7QUFDbEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw0QkFBNEIsYUFBYSxLQUFLOzs7Ozs7Ozs7OztBQ1BsQztBQUNiLGtCQUFrQjtBQUNsQixhQUFhO0FBQ2IsYUFBYSxtQkFBTyxDQUFDLHVDQUFRO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsVUFBVTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELGdDQUFnQyxFQUFFO0FBQzlGO0FBQ0E7QUFDQSwyQkFBMkIsVUFBVTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHVCQUF1QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHVCQUF1QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHVCQUF1QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHVCQUF1QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHVCQUF1QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHVCQUF1QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix1QkFBdUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxhQUFhOzs7Ozs7Ozs7OztBQ3JJQTtBQUNiLGtCQUFrQjtBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxZQUFZOzs7Ozs7Ozs7OztBQ3JCQztBQUNiLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakIsY0FBYyxtQkFBTyxDQUFDLHlDQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGlCQUFpQjs7Ozs7OztVQ2ZqQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDdEJhO0FBQ2Isa0JBQWtCO0FBQ2xCLHFCQUFxQixtQkFBTyxDQUFDLDZDQUFnQjtBQUM3QyxtQkFBbUIsbUJBQU8sQ0FBQyx5Q0FBYztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQSw0REFBNEQ7QUFDNUQsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFDRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLkJhdHRsZVNoaXBzID0gdm9pZCAwO1xyXG52YXIgQmF0dGxlU2hpcHMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBCYXR0bGVTaGlwcygpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBcIkJhdHRsZXNoaXBzXCI7XHJcbiAgICB9XHJcbiAgICBCYXR0bGVTaGlwcy5wcm90b3R5cGUuZ2V0R2FtZUVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkhlbGxvIEJhdHRsZVNoaXBzXCIpKTtcclxuICAgICAgICByZXR1cm4gZGl2O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBCYXR0bGVTaGlwcztcclxufSgpKTtcclxuZXhwb3J0cy5CYXR0bGVTaGlwcyA9IEJhdHRsZVNoaXBzO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5HYW1lRmFjdG9yeSA9IHZvaWQgMDtcclxudmFyIGdhbWVzX2VudW1fMSA9IHJlcXVpcmUoXCIuL2dhbWVzLmVudW1cIik7XHJcbnZhciB0aWN0YWN0b2VfMSA9IHJlcXVpcmUoXCIuL3RpY3RhY3RvZS90aWN0YWN0b2VcIik7XHJcbnZhciBiYXR0bGVzaGlwc18xID0gcmVxdWlyZShcIi4vYmF0dGxlc2hpcHMvYmF0dGxlc2hpcHNcIik7XHJcbnZhciBHYW1lRmFjdG9yeSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEdhbWVGYWN0b3J5KCkge1xyXG4gICAgfVxyXG4gICAgR2FtZUZhY3RvcnkucHJvdG90eXBlLmNyZWF0ZUdhbWUgPSBmdW5jdGlvbiAoZ2FtZVR5cGUpIHtcclxuICAgICAgICBzd2l0Y2ggKGdhbWVUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgZ2FtZXNfZW51bV8xLkdhbWVzLkJhdHRsZVNoaXBzOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBiYXR0bGVzaGlwc18xLkJhdHRsZVNoaXBzKCk7XHJcbiAgICAgICAgICAgIGNhc2UgZ2FtZXNfZW51bV8xLkdhbWVzLlRpY1RhY1RvZTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgdGljdGFjdG9lXzEuVGljVGFjVG9lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gR2FtZUZhY3Rvcnk7XHJcbn0oKSk7XHJcbmV4cG9ydHMuR2FtZUZhY3RvcnkgPSBHYW1lRmFjdG9yeTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuR2FtZXMgPSB2b2lkIDA7XHJcbnZhciBHYW1lcztcclxuKGZ1bmN0aW9uIChHYW1lcykge1xyXG4gICAgR2FtZXNbR2FtZXNbXCJUaWNUYWNUb2VcIl0gPSAxXSA9IFwiVGljVGFjVG9lXCI7XHJcbiAgICBHYW1lc1tHYW1lc1tcIkJhdHRsZVNoaXBzXCJdID0gMl0gPSBcIkJhdHRsZVNoaXBzXCI7XHJcbn0pKEdhbWVzID0gZXhwb3J0cy5HYW1lcyB8fCAoZXhwb3J0cy5HYW1lcyA9IHt9KSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLkJvYXJkID0gdm9pZCAwO1xyXG52YXIgQ2VsbF8xID0gcmVxdWlyZShcIi4vQ2VsbFwiKTtcclxudmFyIEJvYXJkID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQm9hcmQoc2l6ZSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3ltYm9sID0gLTE7XHJcbiAgICAgICAgdGhpcy50YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgICAgICB0aGlzLnRhYmxlLmlkID0gXCJnYW1lQm9hcmRcIjtcclxuICAgICAgICB0aGlzLmNlbGxzID0gbmV3IEFycmF5KHNpemUpO1xyXG4gICAgICAgIHRoaXMudGFibGUuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IHNpemU7IHIrKykge1xyXG4gICAgICAgICAgICB2YXIgcm93ID0gdGhpcy50YWJsZS5pbnNlcnRSb3cocik7XHJcbiAgICAgICAgICAgIHJvdy5jbGFzc05hbWUgPSBcInJvd1wiO1xyXG4gICAgICAgICAgICB0aGlzLmNlbGxzW3JdID0gbmV3IEFycmF5KHNpemUpO1xyXG4gICAgICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKGMpO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSBcImNlbGxcIjtcclxuICAgICAgICAgICAgICAgIHZhciBuZXdDZWxsID0gbmV3IENlbGxfMS5DZWxsKGNlbGwpO1xyXG4gICAgICAgICAgICAgICAgdGhpc18xLmNlbGxzW3JdW2NdID0gbmV3Q2VsbDtcclxuICAgICAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLm1ha2VNb3ZlKG5ld0NlbGwpOyB9LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHZhciB0aGlzXzEgPSB0aGlzO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IHNpemU7IGMrKykge1xyXG4gICAgICAgICAgICAgICAgX2xvb3BfMShjKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEJvYXJkLnByb3RvdHlwZS5tYWtlTW92ZSA9IGZ1bmN0aW9uIChjZWxsKSB7XHJcbiAgICAgICAgaWYgKGNlbGwuY2VsbFZhbHVlICE9PSAxICYmIGNlbGwuY2VsbFZhbHVlICE9PSAtMSkge1xyXG4gICAgICAgICAgICBjZWxsLnNldENlbGxWYWx1ZSh0aGlzLmN1cnJlbnRTeW1ib2wpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTeW1ib2wgKj0gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2hlY2tXaW4oKTtcclxuICAgIH07XHJcbiAgICBCb2FyZC5wcm90b3R5cGUuY2hlY2tSb3cgPSBmdW5jdGlvbiAocm93KSB7XHJcbiAgICAgICAgdmFyIHJvd0FycmF5ID0gdGhpcy5jZWxsc1tyb3ddO1xyXG4gICAgICAgIHZhciBvbmVXaW5zID0gdHJ1ZTtcclxuICAgICAgICByb3dBcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChjZWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChjZWxsLmNlbGxWYWx1ZSAhPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgb25lV2lucyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKG9uZVdpbnMpXHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIHZhciBtaW51c09uZVdpbnMgPSB0cnVlO1xyXG4gICAgICAgIHJvd0FycmF5LmZvckVhY2goZnVuY3Rpb24gKGNlbGwpIHtcclxuICAgICAgICAgICAgaWYgKGNlbGwuY2VsbFZhbHVlICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgbWludXNPbmVXaW5zID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAobWludXNPbmVXaW5zKVxyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9O1xyXG4gICAgQm9hcmQucHJvdG90eXBlLmNoZWNrQ29sdW1uID0gZnVuY3Rpb24gKGNvbHVtbikge1xyXG4gICAgICAgIHZhciBvbmVXaW5zID0gdHJ1ZTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2VsbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGNlbGxWYWx1ZSA9IHRoaXMuY2VsbHNbaV1bY29sdW1uXS5jZWxsVmFsdWU7XHJcbiAgICAgICAgICAgIGlmIChjZWxsVmFsdWUgIT09IDEpIHtcclxuICAgICAgICAgICAgICAgIG9uZVdpbnMgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob25lV2lucylcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgdmFyIG1pbnVzT25lV2lucyA9IHRydWU7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNlbGxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBjZWxsVmFsdWUgPSB0aGlzLmNlbGxzW2ldW2NvbHVtbl0uY2VsbFZhbHVlO1xyXG4gICAgICAgICAgICBpZiAoY2VsbFZhbHVlICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgbWludXNPbmVXaW5zID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1pbnVzT25lV2lucylcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfTtcclxuICAgIEJvYXJkLnByb3RvdHlwZS5jcm9zc0NoZWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvbmVXaW5zID0gdHJ1ZTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2VsbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGNlbGxWYWx1ZSA9IHRoaXMuY2VsbHNbaV1baV0uY2VsbFZhbHVlO1xyXG4gICAgICAgICAgICBpZiAoY2VsbFZhbHVlICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBvbmVXaW5zID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9uZVdpbnMpXHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIHZhciBtaW51c09uZVdpbnMgPSB0cnVlO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jZWxscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgY2VsbFZhbHVlID0gdGhpcy5jZWxsc1tpXVtpXS5jZWxsVmFsdWU7XHJcbiAgICAgICAgICAgIGlmIChjZWxsVmFsdWUgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBtaW51c09uZVdpbnMgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWludXNPbmVXaW5zKVxyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9O1xyXG4gICAgQm9hcmQucHJvdG90eXBlLnJldmVyc2VDcm9zc0NoZWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvbmVXaW5zID0gdHJ1ZTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2VsbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGNlbGxWYWx1ZSA9IHRoaXMuY2VsbHNbaV1bdGhpcy5jZWxscy5sZW5ndGggLSAxIC0gaV0uY2VsbFZhbHVlO1xyXG4gICAgICAgICAgICBpZiAoY2VsbFZhbHVlICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBvbmVXaW5zID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9uZVdpbnMpXHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIHZhciBtaW51c09uZVdpbnMgPSB0cnVlO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jZWxscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgY2VsbFZhbHVlID0gdGhpcy5jZWxsc1tpXVt0aGlzLmNlbGxzLmxlbmd0aCAtIDEgLSBpXS5jZWxsVmFsdWU7XHJcbiAgICAgICAgICAgIGlmIChjZWxsVmFsdWUgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBtaW51c09uZVdpbnMgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWludXNPbmVXaW5zKVxyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9O1xyXG4gICAgQm9hcmQucHJvdG90eXBlLmNoZWNrV2luID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jZWxscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja1JvdyhpKSA9PT0gMSB8fCB0aGlzLmNoZWNrQ29sdW1uKGkpID09PSAxKVxyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJHcmF0dWxhY2plLCB3eWdyYcWCIHXFvHl0a293bmlrIFhcIik7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuY2hlY2tSb3coaSkgPT09IC0xIHx8IHRoaXMuY2hlY2tDb2x1bW4oaSkgPT09IC0xKVxyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJHcmF0dWxhY2plLCB3eWdyYcWCIHXFvHl0a293bmlrIE9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNyb3NzQ2hlY2soKSA9PT0gMSB8fCB0aGlzLnJldmVyc2VDcm9zc0NoZWNrKCkgPT09IDEpXHJcbiAgICAgICAgICAgIGFsZXJ0KFwiR3JhdHVsYWNqZSwgd3lncmHFgiB1xbx5dGtvd25payBYXCIpO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY3Jvc3NDaGVjaygpID09PSAtMSB8fCB0aGlzLnJldmVyc2VDcm9zc0NoZWNrKCkgPT09IC0xKVxyXG4gICAgICAgICAgICBhbGVydChcIkdyYXR1bGFjamUsIHd5Z3JhxYIgdcW8eXRrb3duaWsgT1wiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQm9hcmQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQm9hcmQgPSBCb2FyZDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuQ2VsbCA9IHZvaWQgMDtcclxudmFyIENlbGwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDZWxsKGNlbGwpIHtcclxuICAgICAgICB0aGlzLmh0bWxFbGVtZW50ID0gY2VsbDtcclxuICAgIH1cclxuICAgIENlbGwucHJvdG90eXBlLnNldENlbGxWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuY2VsbFZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKCh0aGlzLmNlbGxWYWx1ZSA9PT0gLTEpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuaW5uZXJUZXh0ID0gJ28nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKHRoaXMuY2VsbFZhbHVlID09PSAxKSkge1xyXG4gICAgICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmlubmVyVGV4dCA9ICd4JztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCh0aGlzLmNlbGxWYWx1ZSA9PT0gMCkpIHtcclxuICAgICAgICAgICAgdGhpcy5odG1sRWxlbWVudC5pbm5lclRleHQgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENlbGw7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQ2VsbCA9IENlbGw7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLlRpY1RhY1RvZSA9IHZvaWQgMDtcclxudmFyIEJvYXJkXzEgPSByZXF1aXJlKFwiLi9Cb2FyZFwiKTtcclxudmFyIFRpY1RhY1RvZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFRpY1RhY1RvZSgpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBcIlRpYyBUYWMgVG9lXCI7XHJcbiAgICB9XHJcbiAgICBUaWNUYWNUb2UucHJvdG90eXBlLmdldEdhbWVFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBib2FyZCA9IG5ldyBCb2FyZF8xLkJvYXJkKDMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZHVwYSBkdXBhXCIpO1xyXG4gICAgICAgIHJldHVybiBib2FyZC50YWJsZTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVGljVGFjVG9lO1xyXG59KCkpO1xyXG5leHBvcnRzLlRpY1RhY1RvZSA9IFRpY1RhY1RvZTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG52YXIgZ2FtZV9mYWN0b3J5XzEgPSByZXF1aXJlKFwiLi9nYW1lLmZhY3RvcnlcIik7XHJcbnZhciBnYW1lc19lbnVtXzEgPSByZXF1aXJlKFwiLi9nYW1lcy5lbnVtXCIpO1xyXG52YXIgQXBwID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQXBwKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG4gICAgQXBwLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBib2R5RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2R5Jyk7XHJcbiAgICAgICAgdmFyIG1lbnVDb250YWluZXIgPSAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpOyAvLyBrb250ZW5lciBtZW51IGRvc3TEmXBueWNoIGdpZXJcclxuICAgICAgICBtZW51Q29udGFpbmVyLmNsYXNzTmFtZSA9IFwibWVudS1jb250YWluZXJcIjtcclxuICAgICAgICB2YXIgZ2FtZUNvbnRhaW5lciA9IChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7IC8vIGtvbnRlbmVyIGfFgsOzd255IGVrcmFudSB6IGdyxIVcclxuICAgICAgICB2YXIgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7IC8vIGxpc3RhIHBvenljamkgdyBtZW51IGRvc3TEmXBueWNoIGdpZXJcclxuICAgICAgICB2YXIgZ2FtZUZhY3RvcnkgPSBuZXcgZ2FtZV9mYWN0b3J5XzEuR2FtZUZhY3RvcnkoKTtcclxuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChnYW1lRW51bSkge1xyXG4gICAgICAgICAgICB2YXIgZ2FtZU51bWJlciA9IE51bWJlcihnYW1lRW51bSk7XHJcbiAgICAgICAgICAgIGlmICghaXNOYU4oZ2FtZU51bWJlcikpIHtcclxuICAgICAgICAgICAgICAgIHZhciBnYW1lT2JqZWN0XzEgPSBnYW1lRmFjdG9yeS5jcmVhdGVHYW1lKGdhbWVOdW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgZHJvcGRvd25MaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgICAgIGRyb3Bkb3duTGluay5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShnYW1lT2JqZWN0XzEubmFtZSkpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZ2FtZU9iamVjdF8xKTtcclxuICAgICAgICAgICAgICAgIGRyb3Bkb3duTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGdhbWVPYmplY3RfMS5nZXRHYW1lRWxlbWVudCgpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChkcm9wZG93bkxpbmspO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgZHJvcGRvd25MaW5rO1xyXG4gICAgICAgIGZvciAodmFyIGdhbWVFbnVtIGluIGdhbWVzX2VudW1fMS5HYW1lcykge1xyXG4gICAgICAgICAgICBfbG9vcF8xKGdhbWVFbnVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSBcIkFXRVNPT09PTUUgR0FNRVNcIjtcclxuICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3QpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChnYW1lQ29udGFpbmVyKTtcclxuICAgICAgICB2YXIgbW9kZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGVja2JveCcpO1xyXG4gICAgICAgIG1vZGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiB0b2dnbGUoKSB7XHJcbiAgICAgICAgICAgIGlmIChtb2RlQnV0dG9uLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3JBTEFcIik7XHJcbiAgICAgICAgICAgICAgICBib2R5RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkYXJrLW1vZGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJvZHlFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmstbW9kZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEFwcDtcclxufSgpKTtcclxubmV3IEFwcCgpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9