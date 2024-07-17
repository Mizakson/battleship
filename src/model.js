import Ship from "../src/ship"
import Gameboard from "../src/gameboard"
import Player from "../src/player"
import domMethods from "../src/dom-events"
import uiMethods from "../src/interface"

// human player vs cpu
export default class MainGame {
    constructor() {
        this.hasWinner = false
        this.turn = "human"
        this.human = new Player("human")
        this.cpu = new Player("cpu")
        this.Config = {
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
        c.board.place(c.board.fleet[3],[9, 2], "horizontal")

        // console.log([c, c.board])
    }

    checkWinner() {
        let playerCounter = 0
        let cpuCounter = 0

        for (let i = 0; i < this.human.board.fleet.length; i++) {
            console.log(this.human.board.fleet[i])
        }
    }

    swapTurn() {
        if (this.turn === "human") {
            setInterval(domMethods.computer.renderCpuAttack(), 1000)
        }
    }

}

