import { Game } from "../game.model";
import { Board } from "./Board";
let boardSizeInputField = (<HTMLInputElement>document.getElementById('inputBox'));


// boardSizeInputField.addEventListener('keypress', function(ev) {
//     if (ev.key === 'Enter') {
//         loadBoard(+(boardSizeInputField.value))
//     }

// }
// )
// // console.log(inputValue === "");
// let button = <HTMLButtonElement>document.getElementById('btn');


// button.addEventListener('click', function() {    
//     loadBoard(+(boardSizeInputField.value))
// }
// );

// function loadBoard(size: number) {
//     new Board(size)
// }

// loadBoard(3)




export class TicTacToe implements Game {
    name: string;

    constructor() {
        this.name = "Tic Tac Toe";
    }
    getGameElement(): HTMLElement {
        const gameBoard = document.createElement('div');
        gameBoard.id = "gameBoard";
      return;
    }
}
