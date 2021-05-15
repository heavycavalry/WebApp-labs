import { Game } from "../game.model";
import { DisabledGame, watched} from "../game.decorator.disabled";

@DisabledGame
export class Battleships implements Game {
  name: string;

  constructor() {
    this.name = "Battleships";
  }
  disabled?: boolean;

  @watched
  getGameElement(): HTMLElement {
    return document.createElement("battleships")
  }
}
