import Ship from "../src/ship"
import Gameboard from "../src/gameboard"
import Player from "../src/player"
import TEST_MATCH from "../src/index"
import MainGame from "./model"
import uiMethods from "./interface"

const domMethods = {

    "turnCounter": 0,

    "isHumanTurn": true,

    // TODO: make cells from default coords turn light blue
    "renderPlayerCells": function() {
        const playerGrid = document.querySelector("#player-grid")
        const width = 10
        const height = 10

        const uiCellArray = Array.from(playerGrid.childNodes)
        // console.log(uiCellArray)

        let allPlacedCoords = []

        for (let i = 0; i < TEST_MATCH.human.board.fleet.length; i++) {
            let markedCells = TEST_MATCH.human.board.fleet[i].placedCoords
            
            for (let j = 0; j < markedCells.length; j++) {
                const markedPairs = markedCells[j];
                // console.log(markedPairs)
                const idComparison = `${markedPairs[0]},${markedPairs[1]}`
                allPlacedCoords.push(idComparison)
                
                // for (let k = 0; k < markedPairs.length; k++) {
                //     console.log(markedPairs[k])
                // }

                for (let k = 0; k < uiCellArray.length; k++) {
                    if (uiCellArray[k].id === idComparison) {
                        uiCellArray[k].classList.add("placed")
                    }
                }
            }
        }

    },

    "renderCpuCells": function() {
        const cpuGrid = document.querySelector("#cpu-grid")
        const width = 10
        const height = 10

        const uiCellArray = Array.from(cpuGrid.childNodes)
        // console.log(uiCellArray)

        let allPlacedCoords = []

        for (let i = 0; i < TEST_MATCH.cpu.board.fleet.length; i++) {
            let markedCells = TEST_MATCH.cpu.board.fleet[i].placedCoords
            
            for (let j = 0; j < markedCells.length; j++) {
                const markedPairs = markedCells[j];
                // console.log(markedPairs)
                const idComparison = `${markedPairs[0]},${markedPairs[1]}`
                allPlacedCoords.push(idComparison)
                
                // for (let k = 0; k < markedPairs.length; k++) {
                //     console.log(markedPairs[k])
                // }

                for (let k = 0; k < uiCellArray.length; k++) {
                    if (uiCellArray[k].id === idComparison) {
                        // show cpu ships in render for now
                        // uiCellArray[k].classList.add("placed")
                    }
                }
            }
        }
    },

    "gridRenderWrapper": function() {
        domMethods.renderPlayerCells()
        domMethods.renderCpuCells()
    },

    // TODO: return cell id, check if ship is hit
    "playerTurnOnClick": function() {
        const cpuGrid = document.querySelector("#cpu-grid")
        const uiCellArray = Array.from(cpuGrid.childNodes)
        

        uiCellArray.forEach((cell) => {
            // console.log(cell.id)
            
            let idCheckedStr = cell.id
            let checkedArr = idCheckedStr.split(",")
            
            const callbackFn = function() {
                // console.log(cell.id)
                let xCoord = checkedArr[0]
                let yCoord = checkedArr[1]
                let clicked = TEST_MATCH.cpu.board.recieveAttack([xCoord, yCoord])
    
                if (clicked) {
                    cell.classList.add("hit")
                } if (!clicked) {
                    cell.classList.add("miss")
                }
    
                
                // ship tests
                // console.log(TEST_MATCH.cpu.board.fleet)
                // console.log(TEST_MATCH.cpu.board.missedShots)
                // console.log(TEST_MATCH.cpu.board.allSunk())
                domMethods.checkGameOver()
                
                // turn mechanism
                domMethods.isHumanTurn = !domMethods.isHumanTurn
                domMethods.turnCounter += 1

                domMethods.computer.renderCpuAttack()
            }
        
            cell.onclick = callbackFn
        })

            

    },

    "checkGameOver": function() {
        if (TEST_MATCH.cpu.board.allSunk()) {
            setTimeout(alert("You win! :)"), 1 * 500)
            setTimeout(location.reload(), 1 * 500)
        }
        if (TEST_MATCH.human.board.allSunk()) {
            setTimeout(alert("You lose! :("), 1 * 500)
            setTimeout(location.reload(), 1 * 500)
        }
    },

    "onClickWrapper": function() {
        domMethods.playerTurnOnClick()
        domMethods.gridRenderWrapper()  
    },

    "getAllHumanCoords": function() {
        let arr = []

        for (let i = 0; i < TEST_MATCH.human.board.fleet.length; i++) {
            let markedCells = TEST_MATCH.cpu.board.fleet[i].placedCoords
            
            for (let j = 0; j < markedCells.length; j++) {
                const markedPairs = markedCells[j];
                // console.log(markedPairs)
                const idComparison = `${markedPairs[0]},${markedPairs[1]}`
                arr.push(idComparison)
            }
        }

        return arr
    },

    "computer": {

            "getRandInt": function(min, max) {
                const minCeiled = Math.ceil(min)
                const maxFloored = Math.floor(max)
                return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
            },

            "guess": function() {
                let humanPlacedCoords = domMethods.getAllHumanCoords()

                let x = this.getRandInt(0, 10)
                let y = this.getRandInt(0, 10)

                return [x, y]
            },

            "renderCpuAttack": function(coord = this.guess()) {

                // prevent duplicates
                if (TEST_MATCH.human.board.missedShots.includes(coord)) {
                    this.renderCpuAttack()
                }

                let humanPlacedCoords = domMethods.getAllHumanCoords()
                let x = coord[0]
                let y = coord[1]
                let sameId = `${x},${y}`

                let playerGrid = Array.from(document.querySelector("#player-grid").childNodes)

                for (let i = 0; i < playerGrid.length; i++) {
                    let cell = document.getElementById(sameId)
                    for (let j = 0; j < humanPlacedCoords.length; j++) {
                        if (TEST_MATCH.human.board.recieveAttack(coord)) {
                            cell.classList.add("hit")
                            return [true, coord]
                        }
                        else {
                            cell.classList.add("miss")
                            return [false, TEST_MATCH.human.board.missedShots]
                        }
                    }
                }

                domMethods.isHumanTurn = true

            },


    },    
        
    "formSubmit": {

            "getFirstShip": function(){
                document.querySelector("form").addEventListener("submit", (e) => {
                    e.preventDefault()
                    const x = document.querySelector("#ship-1-x").value
                    const y = document.querySelector("#ship-1-y").value
                    const direction = document.querySelector("#ship-1-direction").value

                    TEST_MATCH.human.board.place(TEST_MATCH.human.board.fleet[0],[x, y], direction)
                    const ship = [x, y, direction]
                    console.log(ship)
                    domMethods.renderPlayerCells()
                    document.querySelector("form").remove()
                    uiMethods.secondShipForm()

                })

            },

            "getSecondShip": function(){
                document.querySelector("form").addEventListener("submit", (e) => {
                    e.preventDefault()
                    const x = document.querySelector("#ship-2-x").value
                    const y = document.querySelector("#ship-2-y").value
                    const direction = document.querySelector("#ship-2-direction").value

                    TEST_MATCH.human.board.place(TEST_MATCH.human.board.fleet[1],[x, y], direction)
                    const ship = [x, y, direction]

                    // validate coordinates, check for duplicates

                    console.log(ship)
                    domMethods.renderPlayerCells()
                    document.querySelector("form").remove()
                    uiMethods.thirdShipForm()
                })
            },

            "getThirdShip": function(){
                document.querySelector("form").addEventListener("submit", (e) => {
                    e.preventDefault()
                    const x = document.querySelector("#ship-3-x").value
                    const y = document.querySelector("#ship-3-y").value
                    const direction = document.querySelector("#ship-3-direction").value

                    TEST_MATCH.human.board.place(TEST_MATCH.human.board.fleet[2],[x, y], direction)
                    const ship = [x, y, direction]

                    // validate coordinates, check for duplicates

                    console.log(ship)
                    domMethods.renderPlayerCells()
                    document.querySelector("form").remove()
                    uiMethods.fourthShipForm()
                })
            },

            "getFourthShip": function(){
                document.querySelector("form").addEventListener("submit", (e) => {
                    e.preventDefault()
                    const x = document.querySelector("#ship-4-x").value
                    const y = document.querySelector("#ship-4-y").value
                    const direction = document.querySelector("#ship-4-direction").value

                    TEST_MATCH.human.board.place(TEST_MATCH.human.board.fleet[3],[x, y], direction)
                    const ship = [x, y, direction]

                    // validate coordinates, check for duplicates

                    console.log(ship)
                    domMethods.renderPlayerCells()
                    document.querySelector("form").remove()
                    domMethods.playerTurnOnClick()
                })
            },
    },
 
}

export default domMethods