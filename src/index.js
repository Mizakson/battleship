import Ship from "../src/ship"
import Gameboard from "../src/gameboard"
import Player from "../src/player"
import domMethods from "../src/dom-events"
import uiMethods from "../src/interface"
import MainGame from "./model"
import "../src/css/styles.css" 

// ui excluding grid rendering
const UI_STATE = true

function baseInterface() {
    if (UI_STATE) {
        uiMethods.skeleton() 
    }
    if (!UI_STATE) return false
}
baseInterface()


function baseDescription() {
    if (baseInterface) {
        uiMethods.boardContainers()
        uiMethods.boardTitles()
        uiMethods.gridsContainerCreation()
        uiMethods.tenByTenGrids()
        document.querySelector(".reset").onclick = function() {
            setTimeout(location.reload(), 1 * 500)
        }
    }
}
baseDescription()

const TEST_MATCH = new MainGame()
export default TEST_MATCH

 function init() {
    return 0
}

init()