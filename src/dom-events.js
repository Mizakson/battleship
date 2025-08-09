import Ship from "../src/ship"
import Gameboard from "../src/gameboard"
import Player from "../src/player"
import MATCH from "../src/index"
import MainGame from "./model"
import uiMethods from "./interface"

const domMethods = {

    "renderPlayerCells": function() {

        const otherArr = []

        const playerGrid = document.querySelector("#player-grid")
        const width = 10
        const height = 10

        const uiCellArray = Array.from(playerGrid.childNodes)
        

        for (let i = 0; i < MATCH.human.board.fleet.length; i++) {
            let markedCells = MATCH.human.board.fleet[i].placedCoords
            
            for (let j = 0; j < markedCells.length; j++) {
                const markedPairs = markedCells[j];
               
                const idComparison = `${markedPairs[0]},${markedPairs[1]}`
                otherArr.push(idComparison)
                

                for (let k = 0; k < uiCellArray.length; k++) {
                    if (uiCellArray[k].id === idComparison) {
                        uiCellArray[k].classList.toggle("placed")
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

        for (let i = 0; i < MATCH.cpu.board.fleet.length; i++) {
            let markedCells = MATCH.cpu.board.fleet[i].placedCoords
            
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
                        // uiCellArray[k].classList.toggle("placed")
                        
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
                let clicked = MATCH.cpu.board.recieveAttack([xCoord, yCoord])
    
                if (clicked) {
                    cell.classList.add("hit")
                } if (!clicked) {
                    cell.classList.add("miss")
                }
    
                
                // ship tests
                // console.log(MATCH.cpu.board.fleet)
                // console.log(MATCH.cpu.board.missedShots)
                // console.log(MATCH.cpu.board.allSunk())
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
        if (MATCH.cpu.board.allSunk()) {
            setTimeout(alert("You win! :)"), 1 * 500)
            setTimeout(location.reload(), 1 * 500)
        }
        if (MATCH.human.board.allSunk()) {
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

        for (let i = 0; i < MATCH.human.board.fleet.length; i++) {
            let markedCells = MATCH.cpu.board.fleet[i].placedCoords
            
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
                if (MATCH.human.board.missedShots.includes(coord)) {
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
                        if (MATCH.human.board.recieveAttack(coord)) {
                            cell.classList.add("hit")
                            return [true, coord]
                        }
                        else {
                            cell.classList.add("miss")
                            return [false, MATCH.human.board.missedShots]
                        }
                    }
                }


            },


    },

    "btnEvents": function(){
        document.querySelector(".random").onclick = () => {
            location.reload()
        }
        document.querySelector(".confirm").onclick = () => {
            domMethods.playerTurnOnClick()
        }
    },
 
}

export default domMethods
