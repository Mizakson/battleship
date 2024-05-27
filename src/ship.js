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
        if (this.length === this.timesBeenHit) this.sunkStatus = true
        return this.sunkStatus
    }

}