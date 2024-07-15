import Ship from "../src/ship"
import Gameboard from "../src/gameboard"
import Player from "../src/player"
import TEST_MATCH from "../src/index"

const domMethods = {

    // TODO: make cells from default coords turn light blue
    "renderPlayerCells": function() {
        const playerGrid = document.querySelector("#player-grid")
        const width = 10
        const height = 10

        const uiCellArray = Array.from(playerGrid.childNodes)
        console.log(uiCellArray)

        let allPlacedCoords = []

        for (let i = 0; i < TEST_MATCH.human.board.fleet.length; i++) {
            let markedCells = TEST_MATCH.human.board.fleet[i].placedCoords
            
            for (let j = 0; j < markedCells.length; j++) {
                const markedPairs = markedCells[j];
                // console.log(markedPairs)
                const idComparison = `${markedPairs[0]}, ${markedPairs[1]}`
                allPlacedCoords.push(idComparison)
                
                // for (let k = 0; k < markedPairs.length; k++) {
                //     console.log(markedPairs[k])
                // }

                for (let k = 0; k < uiCellArray.length; k++) {
                    if (uiCellArray[k].id === idComparison) {
                        uiCellArray[k].classList.toggle("placed")
                    }
                }
            }
        }

        // TODO: compare with model to check if id's match
        // if they do, toggle class 'placed'





    },

        
}

export default domMethods