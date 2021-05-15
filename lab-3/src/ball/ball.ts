
import { DisabledGame, watched } from "../game.decorator.disabled";
import { Game } from "../game.model";
import { CanvasBoard } from "./canvasBoard";

export class BallInAHole implements Game {
    name: string;

    constructor() {
        this.name = "Ball in a hole"
    }
    disabled?: boolean;

    @watched
    getGameElement(): HTMLCanvasElement {
        var board= new CanvasBoard();
        return board.canvas;
    }

}