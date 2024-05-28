import Ship from "../src/ship"

export default class Gameboard {
    constructor() {
        this.coords = this.initializeGrid()
    }

    initializeGrid() {
        let grid = []
        
        let x = 10
        let y = 10

        for (let i = 0; i < x; i++) {
            grid[i] = []
            for (let j = 0; j < y; j++) {
                grid[i][j] = 0
            }
        }

        return grid
    }
    
}