import Ship from "../src/ship"
import Gameboard from "../src/gameboard"
import Player from "../src/player"
import domMethods from "../src/dom-events"
import uiMethods from "../src/interface"
import MainGame from "./model"
import "../src/css/styles.css" 

const APP_STATE = false
const GAME_START = false

const MATCH = new MainGame()
export default MATCH

function INTERFACE() {uiMethods.skeleton()
uiMethods.boardContainers()
uiMethods.boardTitles()
uiMethods.gridsContainerCreation()
uiMethods.tenByTenGrids()}

INTERFACE()