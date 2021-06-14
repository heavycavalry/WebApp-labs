
export interface TicTacToeStore {
    saveGame(game: TictactoeState): void;
    getGame(): TictactoeState;
}