import { Game } from "../game.model";
import { Board } from "./Board";
import { DisabledGame, watched} from "../game.decorator.disabled";
import { Guid } from "../guid";


export class TicTacToe implements Game {
  name: string;
  id: string;
  constructor() {
    this.name = "Tic Tac Toe";
    this.id = Guid.newGuid();
  }

  disabled?: boolean;

  @watched
  getGameElement(): HTMLElement {
    var board= new Board();
    return board.table;
  }


}


