import Ship from "../src/ship"
import Gameboard from "../src/gameboard"
import Player from "../src/player"
import domMethods from "../src/dom-events"
import uiMethods from "../src/interface"
import MainGame from "./model"
import "../src/css/styles.css" 

// ui excluding grid rendering
// const UI_STATE = true

function INIT() {
    uiMethods.skeleton()

    return new Promise((resolve, reject) => {
        resolve("FIRST")
    })
}

function SECOND_LAYER() {
    uiMethods.boardContainers()
    uiMethods.boardTitles()
    uiMethods.gridsContainerCreation()
    uiMethods.tenByTenGrids()
    document.querySelector(".reset").onclick = () => {
        location.reload()
    }
    return new Promise((resolve, reject) => {
        resolve("SECOND")
        })
}

function FORM_LAYER_ONE() {
    uiMethods.firstShipForm()
    domMethods.formSubmit.getFirstShip()
    return new Promise((resolve, reject) => {
        resolve("THIRD")
    })
}

function SECOND_FORM_WRAPPER() {
    uiMethods.secondShipForm()
    domMethods.formSubmit.getSecondShip()
}

function FORM_LAYER_TWO() {
    return new Promise((resolve, reject) => {
        resolve("OK>>>")
    })
}

INIT().then(value => {console.log(value); return SECOND_LAYER()})
.then(value => {console.log(value); return FORM_LAYER_ONE()})
.then(value => {console.log(value); return FORM_LAYER_TWO()})
 

const TEST_MATCH = new MainGame()
export default TEST_MATCH

