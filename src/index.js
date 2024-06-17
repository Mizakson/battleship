import Ship from "../src/ship"
import Gameboard from "../src/gameboard"
import Player from "../src/player"
import domMethods from "../src/dom-events"
import uiMethods from "../src/interface"
import "../src/css/styles.css" 

// Keep header and main containers constantly on the page
const headerAndContentSections = (function() {
    uiMethods.mainHeader()
    uiMethods.mainContent()
})()

uiMethods.createGrids()