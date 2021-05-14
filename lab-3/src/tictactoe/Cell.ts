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

  }
}
