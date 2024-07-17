import Ship from "../src/ship"
import Gameboard from "../src/gameboard"
import Player from "../src/player"
import TEST_MATCH from "../src/index"

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
            cell.onclick = function() {
                // console.log(cell.id)
                let xCoord = checkedArr[0]
                let yCoord = checkedArr[1]
                let clicked = TEST_MATCH.cpu.board.recieveAttack([xCoord, yCoord])

                if (clicked) {
                    document.querySelector(".game-status").innerText = `Player hit: ${[xCoord, yCoord]}`
                    cell.classList.add("hit")
                } if (!clicked) {
                    cell.classList.add("miss")
                }

                
                
                // ship tests
                console.log(TEST_MATCH.cpu.board.fleet)
                console.log(TEST_MATCH.cpu.board.missedShots)
                console.log(TEST_MATCH.cpu.board.allSunk())
                domMethods.checkGameOver()
                
                // turn mechanism
                // domMethods.isHumanTurn = !domMethods.isHumanTurn

                // console.log(domMethods.isHumanTurn)

            }

            
        })
    },

    "checkGameOver": function() {
        if (TEST_MATCH.cpu.board.allSunk()) {
            document.querySelector(".game-status").innerText = "GAME OVER..."
            alert("You win! :)")
        }
        if (TEST_MATCH.human.board.allSunk()) {
            document.querySelector(".game-status").innerText = "GAME OVER..."
            alert("You lose! :(")
        }
    },

    "onClickWrapper": function() {
        domMethods.playerTurnOnClick()
        domMethods.gridRenderWrapper()
        
    }

        
}

export default domMethods