import { Games } from "./games.enum";
import { Game } from "./game.model";
import { TicTacToe } from "./tictactoe/tictactoe";
import { BattleShips } from "./battleships/battleships";

export class GameFactory {
    createGame(gameType: Games): Game {
        switch (gameType) {
            case Games.BattleShips:
                return new BattleShips();
            case Games.TicTacToe:
                return new TicTacToe();
        };
    }
}
