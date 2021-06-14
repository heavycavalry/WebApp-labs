import { Guid } from "guid-typescript";
import { Game } from "./game.model";

export interface GameStore {
    addGame(game: Game): void;
    deleteGame(id: Guid): void;
    getGame(): Game[];
}