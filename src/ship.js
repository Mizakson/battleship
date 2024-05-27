class Ship {
    constructor(length = null) {
        this.length = length
        this.timesBeenHit = 0
        this.sunkStatus = false
    }

    hit() {
        return this.timesBeenHit + 1
    }

    isSunk() {
        return null
    }

}