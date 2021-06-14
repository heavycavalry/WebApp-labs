import { TicTacToeStore } from "./tictactoe.store";

export class TicTacToeSessionStorageStore implements TicTacToeStore {
    saveGame(game: TictactoeState): void {
        sessionStorage.setItem("tictactoe", JSON.stringify(game));
        
    }
    getGame(): TictactoeState {
        return JSON.parse(sessionStorage.getItem("tictactoe"));
    }

}