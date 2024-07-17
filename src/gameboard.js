import Ship from "../src/ship"

export default class Gameboard {
    constructor() {
        this.coords = this.initializeGrid()
        this.fleet = this.initializeFleet()
        this.missedShots = []
    }

    initializeGrid() {
        let grid = []
        
        let x = 10
        let y = 10

        for (let i = 0; i < x; i++) {
            grid[i] = []
            for (let j = 0; j < y; j++) {
                grid[i][j] = "empty"
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

        if (x > 9 || y > 9 || (x > 9 && y > 9) || x < 0 || y < 0 || (x < 0 && y < 0)) {
            ship.placedCoords = []
            return "out of bounds"
        }

        this.coords[x][y] = "placed"

        for (let i = 0; i < (ship.length); i++) {
            
            if (direction === "vertical") {
                let newCoord = [x++, y]
                if (newCoord[0] > 9) {
                    ship.placedCoords = []
                    return "out of bounds"
                } else if (newCoord[0] < 9) {
                    this.coords[newCoord[0]][newCoord[1]] = "placed"
                    ship.placedCoords.push(newCoord)
                }
            }

            if (direction === "horizontal") {
                let newCoord = [x, y++]
                if (newCoord[1] > 9) {
                    ship.placedCoords = []
                    return "out of bounds"
                } else if (newCoord[1] < 9) {
                    this.coords[newCoord[0]][newCoord[1]] = "placed"
                    ship.placedCoords.push(newCoord)
                }
            }
        }

        return ship.placedCoords

    }    

    recieveAttack(coord) {
        
        let x = coord[0]
        let y = coord[1]

        if (x < 0 || y < 0 || (x < 0 && y < 0) || x > 9 || y > 9 || (x > 9 && y > 9)) return "out of bounds"
        
        for (let i = 0; i < this.fleet.length; i++) {
            for (let j = 0; j < this.fleet[i].placedCoords.length; j++) {
                if (this.fleet[i].placedCoords[j][0] == x && 
                    this.fleet[i].placedCoords[j][1] == y) {
                    this.fleet[i].hit()
                    this.fleet[i].isSunk()
                    return true
                    
                }
                
                
            }

        }

        this.missedShots.push(coord)
        return false

    }

    allSunk() {

        let statusArr = []

        for (let i = 0; i < this.fleet.length; i++) {
            let condition = this.fleet[i].sunkStatus
            statusArr.push(condition)
        }

        if (statusArr.includes(false)) return false
        if (!statusArr.includes(false)) return true
        
    }

}