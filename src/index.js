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
    }
}
baseDescription()

const TEST_MATCH = new MainGame()
export default TEST_MATCH

function init() {
    if (baseDescription) {
        uiMethods.tenByTenGrids()
    }

    domMethods.gridRenderWrapper()
    domMethods.playerTurnOnClick()
}

init()