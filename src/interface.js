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
        const resetBtn = uiMethods.createEl("button", "reset", "", "Reset")
        const gameStateMessage = uiMethods.createEl("p", "game-status", "", "status message here")
        // confirm ship placement button here?

        footer.appendChild(gameStateMessage)
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
                playerGrid.appendChild(uiMethods.createEl("div", "cell", `${i}, ${j}`, ""))
                cpuGrid.appendChild(uiMethods.createEl("div", "cell", `${i}, ${j}`, ""))
            }
        }

    },


}
    
export default uiMethods