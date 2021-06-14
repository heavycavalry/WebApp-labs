import { Guid } from "guid-typescript";
import { Board } from "./tictactoe/Board";

export interface Game {   
    id: string;
    name: string;
    getGameElement(): HTMLElement;
    disabled?: boolean;
}