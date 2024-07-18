import domMethods from "../src/dom-events"
import MainGame from "./model"

const uiMethods = {
    "body": document.querySelector("body"),

    "createContainer": function (cls, idName) {
        let el = document.createElement("div")

        if (cls != "") el.classList.toggle(cls)
        if (idName != "") el.id = idName

        return el
    },

    "createEl": function (tag, cls, idName, text) {
        
        let el = document.createElement(tag)

        if (cls != "") el.classList.toggle(cls)
        if (idName != "") el.id = idName
        if (text != "") el.innerText = text

        return el

    },

    "mainTitle": function() {
        const titleContainer = uiMethods.createContainer("main-title", "")
        const titleText = uiMethods.createEl("h2", "title-text", "", "Battleship")
        titleContainer.appendChild(titleText)

        uiMethods.body.appendChild(titleContainer)
    },

    "projectDesc": function() {
        const descContainer = uiMethods.createContainer("project-desc", "")
        descContainer.innerHTML = `<p class="desc-text"> 
        <a href="https://www.theodinproject.com" id="odin-project-url" title="https://www.theodinproject.com">Odin Project</a> JavaScript Course Final Project
        </p>`
        
        document.querySelector(".main-title").appendChild(descContainer)
    },

    "projectCredit": function() {
        const credContainer = uiMethods.createContainer("project-cred", "")
        credContainer.innerHTML = `<p class="cred-text"> A program by
        <a href="https://github.com/mizakson" id="github-url" title="https://github.com/mizakson">Mizakson</a>
        </p>`
        
        document.querySelector(".main-title").appendChild(credContainer)
    },

    "contentContainer": function() {
        const content = uiMethods.createContainer("content", "")
        uiMethods.body.appendChild(content)
    },

    "footer": function() {
        const footer = uiMethods.createContainer("footer", "")
        const placeShipContainer = uiMethods.createContainer("place-ships", "")
        const resetBtn = uiMethods.createEl("button", "reset", "", "Reset")
        // confirm ship placement button here?

        footer.appendChild(placeShipContainer)
        footer.appendChild(resetBtn)
        
        uiMethods.body.appendChild(footer)
    },

    // wrapper function for title, proj description, footer
    "skeleton": function() {
        uiMethods.mainTitle()
        uiMethods.projectDesc()
        uiMethods.projectCredit()
        uiMethods.contentContainer()
        uiMethods.footer()
    },

    "boardContainers": function() {
        const humanPlayer = uiMethods.createContainer("human", "")
        const cpuPlayer = uiMethods.createContainer("cpu", "")

        document.querySelector(".content").appendChild(humanPlayer)
        document.querySelector(".content").appendChild(cpuPlayer)
    },

    "boardTitles": function() {
        const playerTitle = uiMethods.createEl("h3", "player-text", "", "You")
        document.querySelector(".human").appendChild(playerTitle)

        const cpuTitle = uiMethods.createEl("h3", "cpu-text", "", "CPU")
        document.querySelector(".cpu").appendChild(cpuTitle)
    },

    // TODO: create empty grids
    "gridsContainerCreation": function() {
        const playerGrid = uiMethods.createEl("div", "grid", "player-grid", "")
        document.querySelector(".human").appendChild(playerGrid)

        const cpuGrid = uiMethods.createEl("div", "grid", "cpu-grid", "")
        document.querySelector(".cpu").appendChild(cpuGrid)
    },

    "tenByTenGrids": function() {
        const playerGrid = document.querySelector("#player-grid")
        const cpuGrid = document.querySelector("#cpu-grid")

        const width = 10
        const height = 10

        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                playerGrid.appendChild(uiMethods.createEl("div", "cell", `${i},${j}`, ""))
                cpuGrid.appendChild(uiMethods.createEl("div", "cell", `${i},${j}`, ""))
            }
        }

    },

    "firstShipForm": function(callback) {
        const form = uiMethods.createEl("form", "ship-place", "ship-1-form", "")
        form.innerHTML = `
        <p id='ship-1-input'>Place you first ship (length of 2 cells): </p>
            <label for='ship-1-x'>X Coord:</label>
            <input type='number' min=0 max=9 name='ship-1-x' id='ship-1-x'></input>
            <label for='ship-1-y'>  Y Coord:</label>
            <input type='number' min=0 max=9 name='ship-1-y' id='ship-1-y'></input>
            <label for='ship-1-direction'>  Direction:</label>
            <select name='ship-1-direction' id='ship-1-direction'>
                <option value='horizontal'>Horizontal</option>
                <option value='vertical'>Vertical</option>
            </select>
        <button type='submit' id='ship-1-submit'>Confirm Ship 1</button>
        `
        document.querySelector(".place-ships").appendChild(form)

        console.log("first ship promise")
        // when form is created then call get form data function
        return new Promise((resolve) => {
            resolve(domMethods.formSubmit.getFirstShip())
            console.log("first form submit added...")
        })

    },

    "secondShipForm": function() {

        uiMethods.clearForm()

        document.querySelector("form").id = "ship-form-2"

        document.querySelector("form").innerHTML = `
        <p id='ship-2-input'>Place you first ship (length of 3 cells): </p>
            <label for='ship-2-x'>X Coord:</label>
            <input type='number' min=0 max=9 name='ship-2-x' id='ship-2-x'></input>
            <label for='ship-2-y'>  Y Coord:</label>
            <input type='number' min=0 max=9 name='ship-2-y' id='ship-2-y'></input>
            <label for='ship-2-direction'>  Direction:</label>
            <select name='ship-2-direction' id='ship-2-direction'>
                <option value='horizontal'>Horizontal</option>
                <option value='vertical'>Vertical</option>
            </select>
        <button type='submit' id='ship-2-submit'>Confirm Ship 2</button>
        `
        console.log("second ship promise")
        // when form is created then call get form data function
        return new Promise((resolve) => {
            resolve(domMethods.formSubmit.getSecondShip())
            console.log("second form submit added...")
        })
    },

    "thirdShipForm": function() {


        uiMethods.clearForm()
        document.querySelector("form").id = "ship-form-3"
        
        document.querySelector("form").innerHTML = `
        <p id='ship-3-input'>Place you first ship (length of 4 cells): </p>
            <label for='ship-3-x'>X Coord:</label>
            <input type='number' min=0 max=9 name='ship-3-x' id='ship-3-x'></input>
            <label for='ship-3-y'>  Y Coord:</label>
            <input type='number' min=0 max=9 name='ship-3-y' id='ship-3-y'></input>
            <label for='ship-3-direction'>  Direction:</label>
            <select name='ship-3-direction' id='ship-3-direction'>
                <option value='horizontal'>Horizontal</option>
                <option value='vertical'>Vertical</option>
            </select>
        <button type='submit' id='ship-3-submit'>Confirm Ship 3</button>
        `
    },

    "fourthShipForm": function() {

        uiMethods.clearForm()
        document.querySelector("form").id = "ship-form-4"

        document.querySelector("form").innerHTML = `
        <p id='ship-4-input'>Place you first ship (length of 5 cells): </p>
            <label for='ship-4-x'>X Coord:</label>
            <input type='number' min=0 max=9 name='ship-4-x' id='ship-4-x'></input>
            <label for='ship-4-y'>  Y Coord:</label>
            <input type='number' min=0 max=9 name='ship-4-y' id='ship-4-y'></input>
            <label for='ship-4-direction'>  Direction:</label>
            <select name='ship-4-direction' id='ship-4-direction'>
                <option value='horizontal'>Horizontal</option>
                <option value='vertical'>Vertical</option>
            </select>
        <button type='submit' id='ship-4-submit'>Confirm Ship 4</button>
        `
    },

    "clearForm": function(){
        document.querySelector("form").innerHTML = ""
    },
       
}
    
export default uiMethods