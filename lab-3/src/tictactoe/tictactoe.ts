import { Game } from "../game.model";
import { Board } from "./Board";

export class TicTacToe implements Game {
  name: string;

  constructor() {
    this.name = "Tic Tac Toe";
  }

  getGameElement(): HTMLElement {
    var board= new Board(3);
    console.log("dupa dupa");
    return board.table;
  }
}
