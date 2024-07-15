import Ship from "../src/ship"
import Gameboard from "../src/gameboard"
import Player from "../src/player"
import domMethods from "../src/dom-events"
import uiMethods from "../src/interface"

// human player vs cpu
export default class MainGame {
    constructor() {
        this.hasWinner = false
        this.human = new Player("human")
        this.cpu = new Player("cpu")
        this.testingConfig = {
            "human-default-coords": this.humanDefaultCoords(),
            "cpu-default-coords": "empty",
        }
    }

    humanDefaultCoords() {
        const h = this.human

        // human player
        h.board.place(h.board.fleet[0],[1, 1], "vertical")
        h.board.place(h.board.fleet[1],[3, 3], "horizontal")
        h.board.place(h.board.fleet[2],[5, 5], "horizontal")
        h.board.place(h.board.fleet[3],[9, 4], "horizontal")

        console.log(h.board)
    }

}

