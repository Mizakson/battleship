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
        expect(DUMMY.coords[1][2]).toBe(1)
        expect(DUMMY.coords[2][2]).toBe(1)
    })

    test("vertical place coords", () => {
        DUMMY.place(s1, [1, 2], "vertical")
        expect(DUMMY.coords[1][2]).toBe(1)
        expect(DUMMY.coords[1][3]).toBe(1)
    })
    
})