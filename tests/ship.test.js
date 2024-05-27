import Ship from "../src/ship"

test("initial ship creation", () => {
    const ship = new Ship()
    expect(ship).toBe(ship)
    return ship
})