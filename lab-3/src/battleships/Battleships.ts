import { Game } from "../game.model";
import { DisabledGame, watched} from "../game.decorator.disabled";
import { Guid } from "guid-typescript";

@DisabledGame
export class Battleships implements Game {
  name: string;

  constructor() {
    this.name = "Battleships";
  }
  id: string;
  disabled?: boolean;

  @watched
  getGameElement(): HTMLElement {
    return document.createElement("battleships")
  }
}
