import Ship from "../src/ship"
import Gameboard from "../src/gameboard"

const DUMMY = new Gameboard()

test("grid creation", () => {
    expect(DUMMY.coords.length).toBe(10)
    expect(DUMMY.coords[0].length).toBe(10)
})

test("fleet creation", () => {
    expect(DUMMY.fleet.length).toBe(4)
    expect(DUMMY.fleet[3].length).toBe(5)
})

describe("place method", () => {
    
    let s1 = DUMMY.fleet[0]

    test("horizontal place coords", () => {
        DUMMY.place(s1, [1, 2], "horizontal")
        expect(DUMMY.coords[1][2]).toBe("placed")
        expect(DUMMY.coords[2][2]).toBe("placed")
    })

    test("vertical place coords", () => {
        DUMMY.place(s1, [1, 2], "vertical")
        expect(DUMMY.coords[1][2]).toBe("placed")
        expect(DUMMY.coords[1][3]).toBe("placed")
    })
    
})

describe("recieve attack", () => {

    let chosenShip = DUMMY.fleet[1]

    test("placed coords", () => {
        DUMMY.place(chosenShip, [4, 4], "horizontal")
        expect(chosenShip.placedCoords).toStrictEqual([
            [4, 4], [5, 4], [6, 4]
        ])
    })
    
    test("intial boundary check", () => {
        let otherShip = DUMMY.fleet[2]
        expect(DUMMY.place(otherShip, [10, 9], "horizontal")).toBe("out of bounds")
        expect(DUMMY.place(otherShip, [9, 10], "horizontal")).toBe("out of bounds")
        expect(DUMMY.place(otherShip, [10, 10], "horizontal")).toBe("out of bounds")
        expect(DUMMY.place(otherShip, [9, 9], "horizontal")).toBe("out of bounds")

        expect(DUMMY.place(otherShip, [10, 9], "vertical")).toBe("out of bounds")
        expect(DUMMY.place(otherShip, [9, 10], "vertical")).toBe("out of bounds")
        expect(DUMMY.place(otherShip, [10, 10], "vertical")).toBe("out of bounds")
        expect(DUMMY.place(otherShip, [9, 9], "vertical")).toBe("out of bounds")
    })

    test("hit check", () => {
        DUMMY.place(DUMMY.fleet[0], [1, 2], "vertical")
        expect(DUMMY.recieveAttack([1, 2])).toBe("hit") 
        expect(DUMMY.recieveAttack([4, 8])).toBe("miss")
        expect(DUMMY.fleet[0].timesBeenHit).toBe(1)
        expect(DUMMY.missedShots[0]).toStrictEqual([4, 8])
    }) 

})

test("all sunk", () => {
    // set sunkStatus -> true for all ships
    for (let i = 0; i < DUMMY.fleet.length; i++) {
        DUMMY.fleet[i].sunkStatus = true
    }

    expect(DUMMY.allSunk()).toBeTruthy()

})