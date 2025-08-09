export default class Ship {

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
