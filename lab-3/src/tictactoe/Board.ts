import { PopUp } from "../popup/popup";
import { Cell } from "./Cell";
import { TicTacToe } from "./tictactoe";
import { TicTacToeLocalStorageStore } from "./tictactoe.localstoragestore";
import { TicTacToeStore } from "./tictactoe.store";

export class Board {
  size = 3;
  state: TictactoeState = {
    moves: [],
  };
  cells: Cell[][];
  currentSymbol: number = -1;
  table: HTMLTableElement;
  storage: TicTacToeStore;
  socket: WebSocket;

  constructor(storage: TicTacToeStore = new TicTacToeLocalStorageStore()) {
    this.storage = storage;
    let storedGame = this.storage.getGame();
    if (storedGame) {
      this.state.moves = storedGame.moves;
    }

    /////////////BACK BUTTON////////////////////////////////////////////
    let buttonBox = <HTMLDivElement>document.querySelector(".buttonBox");
    let backBtn = <HTMLButtonElement>document.createElement("button");
    backBtn.classList.add("backBtn");
    backBtn.innerText = "BACK";
    buttonBox.appendChild(backBtn);
    backBtn.addEventListener("click", (e) => this.undoMove());
    //////////////////////////////////////////////////////

    this.setupTable();
    this.setupSocket();
    this.hardReload();
  }

  setupTable() {
    this.table = <HTMLTableElement>document.createElement("table");
    this.table.id = "gameBoard";
    this.table.innerHTML = "";
    this.cells = new Array(this.size);
    for (let r = 0; r < this.size; r++) {
      let row = this.table.insertRow(r);
      row.className = "row";
      this.cells[r] = new Array(this.size);
      for (let c = 0; c < this.size; c++) {
        let cell = <HTMLTableDataCellElement>row.insertCell(c);
        cell.className = "cell";
        const newCell = new Cell(cell);
        this.cells[r][c] = newCell;
        cell.addEventListener(
          "click",
          () => this.makeMove({ x: r, y: c }),
          false
        );
      }
    }
  }

  setupSocket(): void {
    this.socket = new WebSocket("ws://localhost:8080");
    this.socket.onopen = function (e) {
      console.log('opening connection')
      // this.send('xd');
      //ta funkcja będzie zawołana kiedy otworzymy połączenie
      //co tutaj?
    };

    this.socket.onmessage = event => {
      // ta funkcja będzie zawołana gdy dostaniemy wiadomość z serwera (czyli rozgłośniony stan gry)
      // tak wyciaga sie dane z wiadomości: event.data
      // co tutaj ???
      
      let newState: TictactoeState = JSON.parse(event.data);
      this.state = newState;
      this.hardReload();
    };
  }

  hardReload(): void {
    this.currentSymbol = -1;
    for (let r = 0; r < this.size; r++) {
      for (let c = 0; c < this.size; c++) {
        this.cells[r][c].setCellValue(0);
      }
    }
    this.state.moves.forEach((move) => this.loadMove(move));
    this.storage.saveGame(this.state);
  }

  undoMove(): void {
    if (this.state.moves.length > 0) {
      let lastMove = this.state.moves.pop();
      let cell: Cell = this.cells[lastMove.x][lastMove.y];
      cell.setCellValue(0);
      this.currentSymbol *= -1;
      this.storage.saveGame(this.state);
      this.socket.send(JSON.stringify(this.state));
    }
  }

  isMoveValid(move: Move): boolean {
    let cell: Cell = this.cells[move.x][move.y];
    return cell.cellValue !== 1 && cell.cellValue !== -1;
  }

  //całość akcji związana z wykonaniem ruchu (kliknięciem na kratkę)
  makeMove(move: Move): void {
    if (this.isMoveValid(move)) {
      this.state.moves.push(move);
      
      this.storage.saveGame(this.state);

      this.socket.send(JSON.stringify(this.state));
      
      this.loadMove(move)

    }
  }

  //realizuje ruch w grze jako html (poza stanem, zapisem, wysyłaniem itd)
  loadMove(move: Move): void {
    let cell: Cell = this.cells[move.x][move.y];
    cell.setCellValue(this.currentSymbol);
    this.currentSymbol *= -1;
    this.checkWin();
  }

  checkRow(row: number): number {
    let rowArray = this.cells[row];

    let oneWins = true;
    rowArray.forEach((cell) => {
      if (cell.cellValue !== 1) {
        oneWins = false;
      }
    });
    if (oneWins) return 1;

    let minusOneWins = true;
    rowArray.forEach((cell) => {
      if (cell.cellValue !== -1) {
        minusOneWins = false;
      }
    });
    if (minusOneWins) return -1;

    return 0;
  }

  checkColumn(column: number): number {
    let oneWins = true;
    for (let i = 0; i < this.cells.length; i++) {
      let cellValue = this.cells[i][column].cellValue;
      if (cellValue !== 1) {
        oneWins = false;
      }
    }
    if (oneWins) return 1;
    let minusOneWins = true;
    for (let i = 0; i < this.cells.length; i++) {
      let cellValue = this.cells[i][column].cellValue;
      if (cellValue !== -1) {
        minusOneWins = false;
      }
    }
    if (minusOneWins) return -1;

    return 0;
  }

  crossCheck(): number {
    let oneWins = true;
    for (let i = 0; i < this.cells.length; i++) {
      let cellValue = this.cells[i][i].cellValue;
      if (cellValue !== 1) {
        oneWins = false;
      }
    }
    if (oneWins) return 1;
    let minusOneWins = true;
    for (let i = 0; i < this.cells.length; i++) {
      let cellValue = this.cells[i][i].cellValue;
      if (cellValue !== -1) {
        minusOneWins = false;
      }
    }
    if (minusOneWins) return -1;

    return 0;
  }

  reverseCrossCheck(): number {
    let oneWins = true;
    for (let i = 0; i < this.cells.length; i++) {
      let cellValue = this.cells[i][this.cells.length - 1 - i].cellValue;
      if (cellValue !== 1) {
        oneWins = false;
      }
    }
    if (oneWins) return 1;
    let minusOneWins = true;
    for (let i = 0; i < this.cells.length; i++) {
      let cellValue = this.cells[i][this.cells.length - 1 - i].cellValue;
      if (cellValue !== -1) {
        minusOneWins = false;
      }
    }
    if (minusOneWins) return -1;

    return 0;
  }

  checkWin(): void {
    let userx = new PopUp("Congratulations!", "", "User X has won!");
    let userO = new PopUp("Congratulations!", "", "User O has won!");
    for (let i = 0; i < this.cells.length; i++) {
      if (
        this.checkRow(i) === 1 ||
        this.checkColumn(i) === 1 ||
        this.crossCheck() === 1 ||
        this.reverseCrossCheck() === 1
      ) {
        userx.createPopUp();
        return;
      } else if (
        this.checkRow(i) === -1 ||
        this.checkColumn(i) === -1 ||
        this.crossCheck() === -1 ||
        this.reverseCrossCheck() === -1
      ) {
        userO.createPopUp();
        return;
      }
    }
  }
}
