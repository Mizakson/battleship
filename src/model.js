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
            "cpu-default-coords": this.cpuDefaultCoords(),
        }
    }

    humanDefaultCoords() {
        const h = this.human

        // human player
        h.board.place(h.board.fleet[0],[1, 1], "vertical")
        h.board.place(h.board.fleet[1],[3, 3], "horizontal")
        h.board.place(h.board.fleet[2],[5, 5], "horizontal")
        h.board.place(h.board.fleet[3],[9, 4], "horizontal")

        // console.log(h.board)
    }

    cpuDefaultCoords() {
        const c = this.cpu

        // human player
        c.board.place(c.board.fleet[0],[2, 2], "vertical")
        c.board.place(c.board.fleet[1],[4, 4], "horizontal")
        c.board.place(c.board.fleet[2],[5, 5], "horizontal")
        c.board.place(c.board.fleet[3],[7, 4], "horizontal")

        // console.log([c, c.board])
    }

}

