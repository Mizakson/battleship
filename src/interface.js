import domMethods from "../src/dom-events"

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

    "createTitle": function() {
        const container = uiMethods.createContainer("header-container", "")
        const titleContainer = uiMethods.createContainer("title-container", "")
        const titleText = uiMethods.createEl("h2", "title-text", "", "Battleship")

        titleContainer.appendChild(titleText)
        container.appendChild(titleContainer)
        uiMethods.body.appendChild(container)
    },

    "createDescription": async function() {
        
        const descriptionContainer = uiMethods.createContainer("description-container", "")
        const projectNumberContainer = uiMethods.createContainer("project-number-container", "")
        const projectCreditsContainer = uiMethods.createContainer("project-credits-container", "")

        projectNumberContainer.innerHTML += 
        "<h4 class='project-description-text' id='project-number-text'> <a href='https://www.theodinproject.com' id='odin-project-url'>Odin Project</a> JavaScript Course Final Project</h3>"

        projectCreditsContainer.innerHTML += 
        "<h4 class='project-description-text' id='project-credits-text'>A program by <a href='https://github.com/Mizakson' id='github-url' title='https://github.com/Mizakson'>Mizakson</a></h4>"

        descriptionContainer.appendChild(projectNumberContainer)
        descriptionContainer.appendChild(projectCreditsContainer)

        document.querySelector(".header-container").appendChild(descriptionContainer)

    },

    "mainHeader": function() {
        uiMethods.createTitle()
        uiMethods.createDescription()
    },

    "createContent": function() {
        const contentContainer = uiMethods.createContainer("content-container", "")
        uiMethods.body.appendChild(contentContainer)
    },

    "createBoards": function() {
        const boardsContainer = uiMethods.createContainer("boards-container", "")
        const playerBoard = uiMethods.createEl("div", "player-board-container", "", "PLAYER BOARD HERE")
        const cpuBoard = uiMethods.createEl("div", "cpu-board-container", "", "CPU BOARD HERE")

        boardsContainer.appendChild(playerBoard)
        boardsContainer.appendChild(cpuBoard)

        document.querySelector(".content-container").appendChild(boardsContainer) 
    },
        

    "contentDescription": function() {
        const boardNames = uiMethods.createContainer("board-names-container", "")
        const playerName = uiMethods.createEl("h3", "board-description", "player-board-title-text", "You")
        const cpuName = uiMethods.createEl("h3", "board-description", "cpu-board-title-text", "CPU")
        boardNames.appendChild(playerName)
        boardNames.appendChild(cpuName)
        document.querySelector(".content-container").appendChild(boardNames)

    },

    "mainContent": function() {
        uiMethods.createContent()
        uiMethods.contentDescription()
        uiMethods.createBoards()
    },

}
    
export default uiMethods