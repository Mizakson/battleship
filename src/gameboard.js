import Ship from "../src/ship"

export default class Gameboard {
    constructor() {
        this.coords = this.initializeGrid()
        this.fleet = this.initializeFleet()
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

    initializeFleet() {
        let arr = []

        let s1 = new Ship(2)
        let s2 = new Ship(3)
        let s3 = new Ship(4)
        let s4 = new Ship(5)

        arr.push(s1)
        arr.push(s2)
        arr.push(s3)
        arr.push(s4)

        return arr
    }

    place(ship, coord, direction) {
        
        if (direction !== "vertical" && direction !== "horizontal") return "invalid direction"
        
        let x = coord[0]
        let y = coord[1]

        if (x > 9 || y > 9 || (x > 9 && y > 9)) return "out of bounds"

        return ship.placedCoords

    }    

}