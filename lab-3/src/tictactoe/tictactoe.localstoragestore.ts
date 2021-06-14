import { TicTacToeStore } from "./tictactoe.store";

export class TicTacToeLocalStorageStore implements TicTacToeStore {
    saveGame(game: TictactoeState): void {
        localStorage.setItem("tictactoe", JSON.stringify(game));
        
    }
    getGame(): TictactoeState {
        return JSON.parse(localStorage.getItem("tictactoe"));
    }

}