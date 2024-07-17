export default class Ship {
    // default length of 1
    constructor(length = 1) {
        this.length = length
        this.timesBeenHit = 0
        this.sunkStatus = false
        this.placedCoords = []
    }

    hit() {
        return this.timesBeenHit += 1
    }

    isSunk() {
        if (this.timesBeenHit === this.length ) this.sunkStatus = true
    }

}