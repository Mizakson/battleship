import Ship from "../src/ship"
import Gameboard from "../src/gameboard"
import Player from "../src/player"
import domMethods from "../src/dom-events"
import uiMethods from "../src/interface"
import MainGame from "../src/model"
import "../src/css/styles.css" 

// bool -- if true app loads
const APP_STATE = true

// Keep header and main containers constantly on the page
function skeleton() {
    if (APP_STATE === true) {
        uiMethods.mainHeader()
        uiMethods.mainContent()
        console.log("MAIN PAGE LOADED...")
    }
    if (APP_STATE === false) console.log(APP_STATE)
}
skeleton()

// load grids only if skelelton called
function basicGridRender() {
    uiMethods.createGrids()
    console.log("BASIC GRIDS LOADED...")
}

function init() {
    if (skeleton) {
        basicGridRender()
        const game = new MainGame()
        // console.log(game.human)
        // console.log(game.cpu)
    }
}

// main program init func
init()