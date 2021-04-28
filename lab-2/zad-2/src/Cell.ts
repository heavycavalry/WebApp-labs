export class Cell {
  cellValue: number
  htmlElement: HTMLElement

  constructor(cell: HTMLElement) {
    this.htmlElement = cell
  }

  setCellValue(value: number) {
    this.cellValue = value;
    if ((this.cellValue === -1)) {
      this.htmlElement.innerText = 'o' 
    }
    if ((this.cellValue === 1)) {
      this.htmlElement.innerText = 'x'
    }
    if ((this.cellValue === 0)) {
      this.htmlElement.innerText = ''
    }
    //TODO: napisz samemu metodę, która ustawia w
    // tabeli kółko i krzyżyk. Możesz przyjąć, że kółko
    // to wartość -1, krzyżyk to wartość 1, a 0 (zero)
    // oznacza pole nieustawione.
  }
}
