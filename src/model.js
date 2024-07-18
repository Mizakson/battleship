import Ship from "../src/ship"
import Gameboard from "../src/gameboard"
import Player from "../src/player"
import domMethods from "../src/dom-events"
import uiMethods from "../src/interface"

// human player vs cpu
export default class MainGame {
    constructor(hCoords = 2) {
        this.hCoords = hCoords
        this.cCoords = hCoords
        this.hasWinner = false
        this.turn = "human"
        this.human = new Player("human")
        this.cpu = new Player("cpu")
        this.Config = {
             "human-coords": null,
             "cpu-coords": null,
        }
        this.go = this.checkConfig()

    }

    checkConfig() {
        if (this.hCoords == 0 && this.cCoords == 0) {
            this.Config["human-coords"] = this.humanDefaultCoords()
            this.Config["cpu-coords"] = this.cpuDefaultCoords()
        }
        if (this.hCoords == 1 && this.cCoords == 1) {
            this.Config["human-coords"] = this.humanCoords2()
            this.Config["cpu-coords"] = this.cpuDefaultCoords2()
        }
        if (this.hCoords == 2 && this.cCoords == 2) {
            this.Config["human-coords"] = this.humanCoords1()
            this.Config["cpu-coords"] = this.cpuCoords1()
        }
    }

    humanDefaultCoords() {
        const h = this.human

        // human player
        h.board.place(h.board.fleet[0],[1, 1], "vertical")
        h.board.place(h.board.fleet[1],[3, 3], "horizontal")
        h.board.place(h.board.fleet[2],[5, 5], "horizontal")
        h.board.place(h.board.fleet[3],[9, 4], "horizontal")

        return h.board
    }

    humanCoords1() {
        const h = this.human

        // human player
        h.board.place(h.board.fleet[0],[4, 0], "vertical")
        h.board.place(h.board.fleet[1],[7, 2], "horizontal")
        h.board.place(h.board.fleet[2],[1, 1], "horizontal")
        h.board.place(h.board.fleet[3],[4, 4], "horizontal")

        return h.board
    }

    humanCoords2() {
        const h = this.human

        // human player
        h.board.place(h.board.fleet[0],[7, 7], "vertical")
        h.board.place(h.board.fleet[1],[2, 4], "horizontal")
        h.board.place(h.board.fleet[2],[1, 2], "vertical")
        h.board.place(h.board.fleet[3],[6, 0], "horizontal")

        return h.board
    }

    clearBoards() {
        this.Config["human-coords"] = null
        this.Config["cpu-coords"] = null
    }

    cpuDefaultCoords() {
        const c = this.cpu

        // human player
        c.board.place(c.board.fleet[0],[4, 8], "vertical")
        c.board.place(c.board.fleet[1],[2, 1], "vertical")
        c.board.place(c.board.fleet[2],[7, 5], "horizontal")
        c.board.place(c.board.fleet[3],[9, 2], "horizontal")

        return (c.board)
    }

    cpuCoords1() {
        const c = this.cpu

        // human player
        c.board.place(c.board.fleet[0],[2, 2], "vertical")
        c.board.place(c.board.fleet[1],[4, 4], "horizontal")
        c.board.place(c.board.fleet[2],[5, 5], "horizontal")
        c.board.place(c.board.fleet[3],[9, 2], "horizontal")

        return (c.board)
    }

    cpuDefaultCoords2() {
        const c = this.cpu

        // human player
        c.board.place(c.board.fleet[0],[2, 6], "vertical")
        c.board.place(c.board.fleet[1],[1, 1], "horizontal")
        c.board.place(c.board.fleet[2],[3, 8], "vertical")
        c.board.place(c.board.fleet[3],[5, 2], "horizontal")

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

