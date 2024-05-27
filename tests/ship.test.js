import Ship from "../src/ship"

const DUMMY_SHIP = new Ship()

test("initial ship creation", () => {
    expect(DUMMY_SHIP).toBe(DUMMY_SHIP)
})

test("hit", () => {
    expect(DUMMY_SHIP.hit()).toBe(1)
})