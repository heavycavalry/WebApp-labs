import { Cell } from "./Cell";

export class Board {
  cells: Cell[][];
  currentSymbol: number = -1;

  constructor(size: number) {
    this.cells = new Array(size);

    let table = <HTMLTableElement>document.getElementById("gameBoard");
    table.innerHTML = "";

    for (let r = 0; r < size; r++) {
      let row = table.insertRow(r);
      row.className = "row";
      this.cells[r] = new Array(size);
      for (let c = 0; c < size; c++) {
        let cell = <HTMLTableDataCellElement>row.insertCell(c);
        cell.className = "cell";
        const newCell = new Cell(cell);
        this.cells[r][c] = newCell;
        cell.addEventListener("click", () => this.makeMove(newCell));
      }
    }
  }

  makeMove(cell: Cell): void {
    if (cell.cellValue !== 1 && cell.cellValue !== -1) {
      cell.setCellValue(this.currentSymbol);
      this.currentSymbol *= -1;
    }
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
    for (let i = 0; i < this.cells.length; i++) {
      if (this.checkRow(i) === 1 || this.checkColumn(i) === 1)
        alert("Gratulacje, wygrał użytkownik X");
      else if (this.checkRow(i) === -1 || this.checkColumn(i) === -1)
        alert("Gratulacje, wygrał użytkownik O");
    }
    if (this.crossCheck() === 1 || this.reverseCrossCheck() === 1)
      alert("Gratulacje, wygrał użytkownik X");
    else if (this.crossCheck() === -1 || this.reverseCrossCheck() === -1)
      alert("Gratulacje, wygrał użytkownik O");
  }
}
