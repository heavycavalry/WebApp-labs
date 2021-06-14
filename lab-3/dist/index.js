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

/***/ "./src/ball/ball.ts":
/*!**************************!*\
  !*** ./src/ball/ball.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.BallInAHole = void 0;\r\nvar game_decorator_disabled_1 = __webpack_require__(/*! ../game.decorator.disabled */ \"./src/game.decorator.disabled.ts\");\r\nvar canvasBoard_1 = __webpack_require__(/*! ./canvasBoard */ \"./src/ball/canvasBoard.ts\");\r\nvar guid_1 = __webpack_require__(/*! ../guid */ \"./src/guid.ts\");\r\nvar BallInAHole = /** @class */ (function () {\r\n    function BallInAHole() {\r\n        this.name = \"Ball in a hole\";\r\n        this.id = guid_1.Guid.newGuid();\r\n    }\r\n    BallInAHole.prototype.getGameElement = function () {\r\n        var board = new canvasBoard_1.CanvasBoard();\r\n        return board.canvas;\r\n    };\r\n    __decorate([\r\n        game_decorator_disabled_1.watched\r\n    ], BallInAHole.prototype, \"getGameElement\", null);\r\n    return BallInAHole;\r\n}());\r\nexports.BallInAHole = BallInAHole;\r\n\n\n//# sourceURL=webpack:///./src/ball/ball.ts?");

/***/ }),

/***/ "./src/ball/canvasBoard.ts":
/*!*********************************!*\
  !*** ./src/ball/canvasBoard.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.CanvasBoard = void 0;\r\nvar popup_1 = __webpack_require__(/*! ../popup/popup */ \"./src/popup/popup.ts\");\r\nvar CanvasBoard = /** @class */ (function () {\r\n    function CanvasBoard() {\r\n        this.canvas = document.createElement(\"canvas\");\r\n        this.canvas.id = \"canvas\";\r\n        this.canvas.width = 500;\r\n        this.canvas.height = 500;\r\n        var div = document.getElementById('root');\r\n        div.appendChild(this.canvas);\r\n        this.start();\r\n    }\r\n    CanvasBoard.prototype.start = function () {\r\n        var context = this.canvas.getContext(\"2d\");\r\n        window.addEventListener('deviceorientation', onDeviceMove);\r\n        var startTime = Date.now();\r\n        var time;\r\n        var circle = {\r\n            x: 50,\r\n            y: 50,\r\n            size: 30,\r\n            dx: 1,\r\n            dy: 1\r\n        };\r\n        var hole = {\r\n            x: getRandomInt(50, 450),\r\n            y: getRandomInt(50, 450),\r\n            size: 40,\r\n            dx: 0,\r\n            dy: 0\r\n        };\r\n        function getRandomInt(min, max) {\r\n            min = Math.ceil(min);\r\n            max = Math.floor(max);\r\n            return Math.floor(Math.random() * (max - min)) + min;\r\n        }\r\n        function onDeviceMove(ev) {\r\n            console.log(ev.alpha, ev.beta, ev.gamma);\r\n            stupidMove(ev.gamma, ev.beta);\r\n        }\r\n        function countSpeed(y) {\r\n            y = ((y % 360) + 360) % 360;\r\n            var dy = 0.1;\r\n            if (y > 0 && y < 180) {\r\n                dy = 2;\r\n            }\r\n            if (y > 180 && y < 360) {\r\n                dy = -2;\r\n            }\r\n            return dy;\r\n        }\r\n        function stupidMove(x, y) {\r\n            var dx = countSpeed(x);\r\n            var dy = countSpeed(y);\r\n            circle.dx = dx;\r\n            circle.dy = dy;\r\n        }\r\n        function drawCircle() {\r\n            context.beginPath();\r\n            context.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);\r\n            context.fillStyle = '#DA5CD3';\r\n            context.fill();\r\n        }\r\n        function drawHole() {\r\n            context.beginPath();\r\n            context.arc(hole.x, hole.y, hole.size, 0, Math.PI * 2);\r\n            context.fillStyle = '#000000';\r\n            context.fill();\r\n        }\r\n        var shouldRun = true;\r\n        function animate() {\r\n            if (shouldRun) {\r\n                context.clearRect(0, 0, 500, 500);\r\n                circle.x += circle.dx;\r\n                circle.y += circle.dy;\r\n                if (circle.x + circle.size >= 500) {\r\n                    circle.x = 500 - circle.size;\r\n                }\r\n                if (circle.x - circle.size <= 0) {\r\n                    circle.x = circle.size;\r\n                }\r\n                if (circle.y + circle.size >= 500) {\r\n                    circle.y = 500 - circle.size;\r\n                }\r\n                if (circle.y - circle.size <= 0) {\r\n                    circle.y = circle.size;\r\n                }\r\n            }\r\n            function ballInAHole() {\r\n                if (Math.pow((hole.x - circle.x), 2) + Math.pow((hole.y - circle.y), 2) <= 450) {\r\n                    time = Math.round((Date.now() - startTime) / 1000);\r\n                    shouldRun = false;\r\n                    var youWin = new popup_1.PopUp(\"Congratulations!\", \"Your time: \" + time + \" seconds.\", '');\r\n                    youWin.createPopUp();\r\n                    return;\r\n                }\r\n            }\r\n            drawHole();\r\n            drawCircle();\r\n            requestAnimationFrame(animate);\r\n            ballInAHole();\r\n        }\r\n        animate();\r\n    };\r\n    return CanvasBoard;\r\n}());\r\nexports.CanvasBoard = CanvasBoard;\r\n\n\n//# sourceURL=webpack:///./src/ball/canvasBoard.ts?");

/***/ }),

/***/ "./src/battleships/BattleShips.ts":
/*!****************************************!*\
  !*** ./src/battleships/BattleShips.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Battleships = void 0;\r\nvar game_decorator_disabled_1 = __webpack_require__(/*! ../game.decorator.disabled */ \"./src/game.decorator.disabled.ts\");\r\nvar Battleships = /** @class */ (function () {\r\n    function Battleships() {\r\n        this.name = \"Battleships\";\r\n    }\r\n    Battleships.prototype.getGameElement = function () {\r\n        return document.createElement(\"battleships\");\r\n    };\r\n    __decorate([\r\n        game_decorator_disabled_1.watched\r\n    ], Battleships.prototype, \"getGameElement\", null);\r\n    Battleships = __decorate([\r\n        game_decorator_disabled_1.DisabledGame\r\n    ], Battleships);\r\n    return Battleships;\r\n}());\r\nexports.Battleships = Battleships;\r\n\n\n//# sourceURL=webpack:///./src/battleships/BattleShips.ts?");

/***/ }),

/***/ "./src/game.decorator.disabled.ts":
/*!****************************************!*\
  !*** ./src/game.decorator.disabled.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.watched = exports.DisabledGame = void 0;\r\nfunction DisabledGame(constructorFn) {\r\n    constructorFn.prototype.disabled = true;\r\n}\r\nexports.DisabledGame = DisabledGame;\r\nfunction watched(target, propKey, descriptor) {\r\n    var originalFn = target[propKey];\r\n    descriptor.value = function () {\r\n        console.log(\"Game: \" + this.name + \" has been started.\");\r\n        return originalFn.call(this);\r\n    };\r\n}\r\nexports.watched = watched;\r\n\n\n//# sourceURL=webpack:///./src/game.decorator.disabled.ts?");

/***/ }),

/***/ "./src/game.factory.ts":
/*!*****************************!*\
  !*** ./src/game.factory.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.GameFactory = void 0;\r\nvar games_enum_1 = __webpack_require__(/*! ./games.enum */ \"./src/games.enum.ts\");\r\nvar tictactoe_1 = __webpack_require__(/*! ./tictactoe/tictactoe */ \"./src/tictactoe/tictactoe.ts\");\r\nvar ball_1 = __webpack_require__(/*! ./ball/ball */ \"./src/ball/ball.ts\");\r\nvar BattleShips_1 = __webpack_require__(/*! ./battleships/BattleShips */ \"./src/battleships/BattleShips.ts\");\r\nvar GameFactory = /** @class */ (function () {\r\n    function GameFactory() {\r\n    }\r\n    GameFactory.prototype.createGame = function (gameType) {\r\n        switch (gameType) {\r\n            case games_enum_1.Games.BallInAHole:\r\n                return new ball_1.BallInAHole();\r\n            case games_enum_1.Games.TicTacToe:\r\n                return new tictactoe_1.TicTacToe();\r\n            case games_enum_1.Games.BattleShips:\r\n                return new BattleShips_1.Battleships();\r\n        }\r\n        ;\r\n    };\r\n    return GameFactory;\r\n}());\r\nexports.GameFactory = GameFactory;\r\n\n\n//# sourceURL=webpack:///./src/game.factory.ts?");

/***/ }),

/***/ "./src/games.enum.ts":
/*!***************************!*\
  !*** ./src/games.enum.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Games = void 0;\r\nvar Games;\r\n(function (Games) {\r\n    Games[Games[\"TicTacToe\"] = 1] = \"TicTacToe\";\r\n    Games[Games[\"BallInAHole\"] = 2] = \"BallInAHole\";\r\n    Games[Games[\"BattleShips\"] = 3] = \"BattleShips\";\r\n})(Games = exports.Games || (exports.Games = {}));\r\n\n\n//# sourceURL=webpack:///./src/games.enum.ts?");

/***/ }),

/***/ "./src/guid.ts":
/*!*********************!*\
  !*** ./src/guid.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Guid = void 0;\r\nvar Guid = /** @class */ (function () {\r\n    function Guid() {\r\n    }\r\n    Guid.newGuid = function () {\r\n        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {\r\n            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);\r\n            return v.toString(16);\r\n        });\r\n    };\r\n    return Guid;\r\n}());\r\nexports.Guid = Guid;\r\n\n\n//# sourceURL=webpack:///./src/guid.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar game_factory_1 = __webpack_require__(/*! ./game.factory */ \"./src/game.factory.ts\");\r\nvar games_enum_1 = __webpack_require__(/*! ./games.enum */ \"./src/games.enum.ts\");\r\nvar App = /** @class */ (function () {\r\n    function App() {\r\n        this.init();\r\n    }\r\n    App.prototype.init = function () {\r\n        var bodyElement = document.getElementById(\"body\");\r\n        var menuContainer = document.createElement(\"div\"); // kontener menu dostępnych gier\r\n        menuContainer.className = \"menu-container\";\r\n        var gameContainer = document.createElement(\"div\"); // kontener główny ekranu z grą\r\n        var list = document.createElement(\"ul\"); // lista pozycji w menu dostępnych gier\r\n        var gameFactory = new game_factory_1.GameFactory();\r\n        var _loop_1 = function (gameEnum) {\r\n            var gameNumber = Number(gameEnum);\r\n            if (!isNaN(gameNumber)) {\r\n                var gameObject_1 = gameFactory.createGame(gameNumber);\r\n                if (gameObject_1.disabled) {\r\n                    return \"continue\";\r\n                }\r\n                console.log(gameObject_1.name);\r\n                console.log(gameObject_1.disabled);\r\n                dropdownLink = document.createElement(\"li\");\r\n                dropdownLink.appendChild(document.createTextNode(gameObject_1.name));\r\n                console.log(gameObject_1);\r\n                dropdownLink.addEventListener(\"click\", function (event) {\r\n                    gameContainer.innerHTML = \"\";\r\n                    gameContainer.appendChild(gameObject_1.getGameElement());\r\n                });\r\n                list.appendChild(dropdownLink);\r\n            }\r\n        };\r\n        var dropdownLink;\r\n        for (var gameEnum in games_enum_1.Games) {\r\n            _loop_1(gameEnum);\r\n        }\r\n        var title = document.createElement(\"h1\");\r\n        title.innerHTML = \"AWESOOOOME GAMES\";\r\n        menuContainer.appendChild(title);\r\n        menuContainer.appendChild(list);\r\n        document.body.appendChild(menuContainer);\r\n        document.body.appendChild(gameContainer);\r\n        var modeButton = document.getElementById(\"checkbox\");\r\n        modeButton.addEventListener(\"click\", function () {\r\n            return bodyElement.classList.toggle(\"dark-mode\");\r\n        });\r\n    };\r\n    return App;\r\n}());\r\nnew App();\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/popup/popup.ts":
/*!****************************!*\
  !*** ./src/popup/popup.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.PopUp = void 0;\r\nvar PopUp = /** @class */ (function () {\r\n    function PopUp(wonText, infoText, userText) {\r\n        this.mainText = wonText;\r\n        this.infoText = infoText;\r\n        this.userText = userText;\r\n    }\r\n    PopUp.prototype.createPopUp = function () {\r\n        //CREATE\r\n        var popUpBox = document.createElement(\"div\");\r\n        var wonText = document.createElement(\"p\");\r\n        var infoText = document.createElement(\"p\");\r\n        var userText = document.createElement(\"p\");\r\n        var closeBtn = document.createElement(\"button\");\r\n        //ADD TO HTML\r\n        document.body.appendChild(popUpBox);\r\n        popUpBox.appendChild(wonText);\r\n        popUpBox.appendChild(userText);\r\n        popUpBox.appendChild(infoText);\r\n        popUpBox.appendChild(closeBtn);\r\n        //ADD TEXT\r\n        wonText.innerText = this.mainText;\r\n        userText.innerText = this.userText;\r\n        infoText.innerText = this.infoText;\r\n        closeBtn.innerText = \"✖\";\r\n        //ADD ID / CLASS\r\n        closeBtn.classList.add(\"close-btn\");\r\n        popUpBox.classList.add(\"popup-box\");\r\n        infoText.classList.add(\"info-text\");\r\n        wonText.classList.add(\"main-text\");\r\n        userText.classList.add(\"user-text\");\r\n        closeBtn.addEventListener('click', function () { return popUpBox.classList.add(\"hide\"); });\r\n    };\r\n    return PopUp;\r\n}());\r\nexports.PopUp = PopUp;\r\n\n\n//# sourceURL=webpack:///./src/popup/popup.ts?");

/***/ }),

/***/ "./src/tictactoe/Board.ts":
/*!********************************!*\
  !*** ./src/tictactoe/Board.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Board = void 0;\r\nvar popup_1 = __webpack_require__(/*! ../popup/popup */ \"./src/popup/popup.ts\");\r\nvar Cell_1 = __webpack_require__(/*! ./Cell */ \"./src/tictactoe/Cell.ts\");\r\nvar tictactoe_localstoragestore_1 = __webpack_require__(/*! ./tictactoe.localstoragestore */ \"./src/tictactoe/tictactoe.localstoragestore.ts\");\r\nvar Board = /** @class */ (function () {\r\n    function Board(storage) {\r\n        var _this = this;\r\n        if (storage === void 0) { storage = new tictactoe_localstoragestore_1.TicTacToeLocalStorageStore(); }\r\n        this.size = 3;\r\n        this.state = {\r\n            moves: [],\r\n        };\r\n        this.currentSymbol = -1;\r\n        this.storage = storage;\r\n        var storedGame = this.storage.getGame();\r\n        if (storedGame) {\r\n            this.state.moves = storedGame.moves;\r\n        }\r\n        /////////////BACK BUTTON////////////////////////////////////////////\r\n        var buttonBox = document.querySelector(\".buttonBox\");\r\n        var backBtn = document.createElement(\"button\");\r\n        backBtn.classList.add(\"backBtn\");\r\n        backBtn.innerText = \"BACK\";\r\n        buttonBox.appendChild(backBtn);\r\n        backBtn.addEventListener(\"click\", function (e) { return _this.undoMove(); });\r\n        //////////////////////////////////////////////////////\r\n        this.setupTable();\r\n        this.setupSocket();\r\n        this.hardReload();\r\n    }\r\n    Board.prototype.setupTable = function () {\r\n        var _this = this;\r\n        this.table = document.createElement(\"table\");\r\n        this.table.id = \"gameBoard\";\r\n        this.table.innerHTML = \"\";\r\n        this.cells = new Array(this.size);\r\n        var _loop_1 = function (r) {\r\n            var row = this_1.table.insertRow(r);\r\n            row.className = \"row\";\r\n            this_1.cells[r] = new Array(this_1.size);\r\n            var _loop_2 = function (c) {\r\n                var cell = row.insertCell(c);\r\n                cell.className = \"cell\";\r\n                var newCell = new Cell_1.Cell(cell);\r\n                this_1.cells[r][c] = newCell;\r\n                cell.addEventListener(\"click\", function () { return _this.makeMove({ x: r, y: c }); }, false);\r\n            };\r\n            for (var c = 0; c < this_1.size; c++) {\r\n                _loop_2(c);\r\n            }\r\n        };\r\n        var this_1 = this;\r\n        for (var r = 0; r < this.size; r++) {\r\n            _loop_1(r);\r\n        }\r\n    };\r\n    Board.prototype.setupSocket = function () {\r\n        var _this = this;\r\n        this.socket = new WebSocket(\"ws://localhost:8080\");\r\n        this.socket.onopen = function (e) {\r\n            console.log('opening connection');\r\n            // this.send('xd');\r\n            //ta funkcja będzie zawołana kiedy otworzymy połączenie\r\n            //co tutaj?\r\n        };\r\n        this.socket.onmessage = function (event) {\r\n            // ta funkcja będzie zawołana gdy dostaniemy wiadomość z serwera (czyli rozgłośniony stan gry)\r\n            // tak wyciaga sie dane z wiadomości: event.data\r\n            // co tutaj ???\r\n            var newState = JSON.parse(event.data);\r\n            _this.state = newState;\r\n            _this.hardReload();\r\n        };\r\n    };\r\n    Board.prototype.hardReload = function () {\r\n        var _this = this;\r\n        this.currentSymbol = -1;\r\n        for (var r = 0; r < this.size; r++) {\r\n            for (var c = 0; c < this.size; c++) {\r\n                this.cells[r][c].setCellValue(0);\r\n            }\r\n        }\r\n        this.state.moves.forEach(function (move) { return _this.loadMove(move); });\r\n        this.storage.saveGame(this.state);\r\n    };\r\n    Board.prototype.undoMove = function () {\r\n        if (this.state.moves.length > 0) {\r\n            var lastMove = this.state.moves.pop();\r\n            var cell = this.cells[lastMove.x][lastMove.y];\r\n            cell.setCellValue(0);\r\n            this.currentSymbol *= -1;\r\n            this.storage.saveGame(this.state);\r\n            this.socket.send(JSON.stringify(this.state));\r\n        }\r\n    };\r\n    Board.prototype.isMoveValid = function (move) {\r\n        var cell = this.cells[move.x][move.y];\r\n        return cell.cellValue !== 1 && cell.cellValue !== -1;\r\n    };\r\n    //całość akcji związana z wykonaniem ruchu (kliknięciem na kratkę)\r\n    Board.prototype.makeMove = function (move) {\r\n        if (this.isMoveValid(move)) {\r\n            this.state.moves.push(move);\r\n            this.storage.saveGame(this.state);\r\n            this.socket.send(JSON.stringify(this.state));\r\n            this.loadMove(move);\r\n        }\r\n    };\r\n    //realizuje ruch w grze jako html (poza stanem, zapisem, wysyłaniem itd)\r\n    Board.prototype.loadMove = function (move) {\r\n        var cell = this.cells[move.x][move.y];\r\n        cell.setCellValue(this.currentSymbol);\r\n        this.currentSymbol *= -1;\r\n        this.checkWin();\r\n    };\r\n    Board.prototype.checkRow = function (row) {\r\n        var rowArray = this.cells[row];\r\n        var oneWins = true;\r\n        rowArray.forEach(function (cell) {\r\n            if (cell.cellValue !== 1) {\r\n                oneWins = false;\r\n            }\r\n        });\r\n        if (oneWins)\r\n            return 1;\r\n        var minusOneWins = true;\r\n        rowArray.forEach(function (cell) {\r\n            if (cell.cellValue !== -1) {\r\n                minusOneWins = false;\r\n            }\r\n        });\r\n        if (minusOneWins)\r\n            return -1;\r\n        return 0;\r\n    };\r\n    Board.prototype.checkColumn = function (column) {\r\n        var oneWins = true;\r\n        for (var i = 0; i < this.cells.length; i++) {\r\n            var cellValue = this.cells[i][column].cellValue;\r\n            if (cellValue !== 1) {\r\n                oneWins = false;\r\n            }\r\n        }\r\n        if (oneWins)\r\n            return 1;\r\n        var minusOneWins = true;\r\n        for (var i = 0; i < this.cells.length; i++) {\r\n            var cellValue = this.cells[i][column].cellValue;\r\n            if (cellValue !== -1) {\r\n                minusOneWins = false;\r\n            }\r\n        }\r\n        if (minusOneWins)\r\n            return -1;\r\n        return 0;\r\n    };\r\n    Board.prototype.crossCheck = function () {\r\n        var oneWins = true;\r\n        for (var i = 0; i < this.cells.length; i++) {\r\n            var cellValue = this.cells[i][i].cellValue;\r\n            if (cellValue !== 1) {\r\n                oneWins = false;\r\n            }\r\n        }\r\n        if (oneWins)\r\n            return 1;\r\n        var minusOneWins = true;\r\n        for (var i = 0; i < this.cells.length; i++) {\r\n            var cellValue = this.cells[i][i].cellValue;\r\n            if (cellValue !== -1) {\r\n                minusOneWins = false;\r\n            }\r\n        }\r\n        if (minusOneWins)\r\n            return -1;\r\n        return 0;\r\n    };\r\n    Board.prototype.reverseCrossCheck = function () {\r\n        var oneWins = true;\r\n        for (var i = 0; i < this.cells.length; i++) {\r\n            var cellValue = this.cells[i][this.cells.length - 1 - i].cellValue;\r\n            if (cellValue !== 1) {\r\n                oneWins = false;\r\n            }\r\n        }\r\n        if (oneWins)\r\n            return 1;\r\n        var minusOneWins = true;\r\n        for (var i = 0; i < this.cells.length; i++) {\r\n            var cellValue = this.cells[i][this.cells.length - 1 - i].cellValue;\r\n            if (cellValue !== -1) {\r\n                minusOneWins = false;\r\n            }\r\n        }\r\n        if (minusOneWins)\r\n            return -1;\r\n        return 0;\r\n    };\r\n    Board.prototype.checkWin = function () {\r\n        var userx = new popup_1.PopUp(\"Congratulations!\", \"\", \"User X has won!\");\r\n        var userO = new popup_1.PopUp(\"Congratulations!\", \"\", \"User O has won!\");\r\n        for (var i = 0; i < this.cells.length; i++) {\r\n            if (this.checkRow(i) === 1 ||\r\n                this.checkColumn(i) === 1 ||\r\n                this.crossCheck() === 1 ||\r\n                this.reverseCrossCheck() === 1) {\r\n                userx.createPopUp();\r\n                return;\r\n            }\r\n            else if (this.checkRow(i) === -1 ||\r\n                this.checkColumn(i) === -1 ||\r\n                this.crossCheck() === -1 ||\r\n                this.reverseCrossCheck() === -1) {\r\n                userO.createPopUp();\r\n                return;\r\n            }\r\n        }\r\n    };\r\n    return Board;\r\n}());\r\nexports.Board = Board;\r\n\n\n//# sourceURL=webpack:///./src/tictactoe/Board.ts?");

/***/ }),

/***/ "./src/tictactoe/Cell.ts":
/*!*******************************!*\
  !*** ./src/tictactoe/Cell.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Cell = void 0;\r\nvar Cell = /** @class */ (function () {\r\n    function Cell(cell) {\r\n        this.htmlElement = cell;\r\n    }\r\n    Cell.prototype.setCellValue = function (value) {\r\n        this.cellValue = value;\r\n        if ((this.cellValue === -1)) {\r\n            this.htmlElement.innerText = 'o';\r\n        }\r\n        if ((this.cellValue === 1)) {\r\n            this.htmlElement.innerText = 'x';\r\n        }\r\n        if ((this.cellValue === 0)) {\r\n            this.htmlElement.innerText = '';\r\n        }\r\n    };\r\n    return Cell;\r\n}());\r\nexports.Cell = Cell;\r\n\n\n//# sourceURL=webpack:///./src/tictactoe/Cell.ts?");

/***/ }),

/***/ "./src/tictactoe/tictactoe.localstoragestore.ts":
/*!******************************************************!*\
  !*** ./src/tictactoe/tictactoe.localstoragestore.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.TicTacToeLocalStorageStore = void 0;\r\nvar TicTacToeLocalStorageStore = /** @class */ (function () {\r\n    function TicTacToeLocalStorageStore() {\r\n    }\r\n    TicTacToeLocalStorageStore.prototype.saveGame = function (game) {\r\n        localStorage.setItem(\"tictactoe\", JSON.stringify(game));\r\n    };\r\n    TicTacToeLocalStorageStore.prototype.getGame = function () {\r\n        return JSON.parse(localStorage.getItem(\"tictactoe\"));\r\n    };\r\n    return TicTacToeLocalStorageStore;\r\n}());\r\nexports.TicTacToeLocalStorageStore = TicTacToeLocalStorageStore;\r\n\n\n//# sourceURL=webpack:///./src/tictactoe/tictactoe.localstoragestore.ts?");

/***/ }),

/***/ "./src/tictactoe/tictactoe.ts":
/*!************************************!*\
  !*** ./src/tictactoe/tictactoe.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.TicTacToe = void 0;\r\nvar Board_1 = __webpack_require__(/*! ./Board */ \"./src/tictactoe/Board.ts\");\r\nvar game_decorator_disabled_1 = __webpack_require__(/*! ../game.decorator.disabled */ \"./src/game.decorator.disabled.ts\");\r\nvar guid_1 = __webpack_require__(/*! ../guid */ \"./src/guid.ts\");\r\nvar TicTacToe = /** @class */ (function () {\r\n    function TicTacToe() {\r\n        this.name = \"Tic Tac Toe\";\r\n        this.id = guid_1.Guid.newGuid();\r\n    }\r\n    TicTacToe.prototype.getGameElement = function () {\r\n        var board = new Board_1.Board();\r\n        return board.table;\r\n    };\r\n    __decorate([\r\n        game_decorator_disabled_1.watched\r\n    ], TicTacToe.prototype, \"getGameElement\", null);\r\n    return TicTacToe;\r\n}());\r\nexports.TicTacToe = TicTacToe;\r\n\n\n//# sourceURL=webpack:///./src/tictactoe/tictactoe.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;