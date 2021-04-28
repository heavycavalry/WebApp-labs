
import { GameFactory } from "./game.factory";
import { Games } from "./games.enum";
import '../styles/styles.scss';
import { Game } from "./game.model";


class App {


    constructor() {
        this.init();
    }

    init(): void {
        const menuContainer = <HTMLDivElement>(document.createElement('div')); // kontener menu dostępnych gier
        const gameContainer = <HTMLDivElement>(document.createElement('div')); // kontener główny ekranu z grą
        const list = document.createElement('ul'); // lista pozycji w menu dostępnych gier
        const gameFactory: GameFactory = new GameFactory();
        // TODO: Zaimplementuj wzorzec fabryki/metody fabrykującej, tak aby na podstawie konkretnej wartości z enum
        // zwrócić obiekt gry. Z tego obiektu można następnie pobrać nazwę gry i dodać do menu oraz metodę zwracającą
        // samą grę i po kliknięciu w wybrany element listy wywoływać ją, aby doklejać zawartość do gameContainer.
        // Aby wyświetlić menu należy napisać pętlę, któta przeiteruje po wszystkich wartościach enum'a


        for (const gameEnum in Games) {
            let gameNumber: number = Number(gameEnum);
            if (!isNaN(gameNumber)) {
                let gameObject: Game = gameFactory.createGame(gameNumber);
                var dropdownLink = document.createElement('li');
                dropdownLink.appendChild(document.createTextNode(gameObject.name));
                console.log(gameObject.name);
                dropdownLink.addEventListener('click', (event) =>  {
                    gameContainer.innerHTML = "";
                    gameContainer.appendChild(gameObject.getGameElement());
                })
                list.appendChild(dropdownLink);
            }

        }

        menuContainer.appendChild(list);
        document.body.appendChild(menuContainer);
        document.body.appendChild(gameContainer);
    }
}

new App();