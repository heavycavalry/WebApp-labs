import { Games } from "./games.enum";
import { Game } from "./game.model";
import { TicTacToe } from "./tictactoe/tictactoe";
import { BallInAHole } from "./ball/ball";
import { Battleships } from "./battleships/BattleShips";

export class GameFactory {
    createGame(gameType: Games): Game {
        switch (gameType) {
            case Games.BallInAHole:
                return new BallInAHole();
            case Games.TicTacToe:
                return new TicTacToe();
            case Games.BattleShips:
                return new Battleships();
        };
    }
}
