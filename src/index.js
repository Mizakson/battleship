import Ship from "../src/ship"
import Gameboard from "../src/gameboard"
import Player from "../src/player"
import domMethods from "../src/dom-events"
import uiMethods from "../src/interface"
import "../src/css/styles.css" 

// ui excluding grid rendering
const UI_STATE = true

const baseInterface = (function() {
    if (UI_STATE) {
        uiMethods.skeleton()
    }
    if (!UI_STATE) return false
})()
