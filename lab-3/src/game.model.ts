import { Board } from "./tictactoe/Board";

export interface Game {
    name: string;
    getGameElement(): HTMLElement;
}