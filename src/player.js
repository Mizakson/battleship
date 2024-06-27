import Gameboard from "../src/gameboard"

export default class Player {
    constructor(type) {
        // only types are human, computer
        this.type = type
        this.board = new Gameboard()
    }
}