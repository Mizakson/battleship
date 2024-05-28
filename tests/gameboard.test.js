import Ship from "../src/ship"
import Gameboard from "../src/gameboard"

const DUMMY = new Gameboard()

test("grid creation", () => {
    expect(DUMMY.coords.length).toBe(10)
    expect(DUMMY.coords[0].length).toBe(10)
})