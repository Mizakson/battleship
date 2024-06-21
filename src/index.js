import Ship from "../src/ship"
import Gameboard from "../src/gameboard"
import Player from "../src/player"
import domMethods from "../src/dom-events"
import uiMethods from "../src/interface"
import "../src/css/styles.css" 

// Keep header and main containers constantly on the page
function skeleton() {
    uiMethods.mainHeader()
    uiMethods.mainContent()
    console.log("MAIN PAGE LOADED...")
}
skeleton()

// load grids only if skelelton called
function basicGridRender() {
    if (skeleton) {
        uiMethods.createGrids()
        console.log("BASIC GRIDS LOADED...")
    }   
}
basicGridRender()