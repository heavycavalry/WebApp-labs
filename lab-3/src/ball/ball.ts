import { DisabledGame, watched } from "../game.decorator.disabled";
import { Game } from "../game.model";
import { CanvasBoard } from "./canvasBoard";
import { Guid } from "../guid";

export class BallInAHole implements Game {
    name: string;
    id: string;
    constructor() {
        this.name = "Ball in a hole"
        this.id = Guid.newGuid();
        }
    disabled?: boolean;

    @watched
    getGameElement(): HTMLCanvasElement {
        var board= new CanvasBoard();
        return board.canvas;
    }

}