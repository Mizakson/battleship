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

    // wrapper function for title, proj description
    "skeleton": function() {
        uiMethods.mainTitle()
        uiMethods.projectDesc()
        uiMethods.projectCredit()
        uiMethods.contentContainer()
    },

    "boardContainers": function() {
        const humanPlayer = uiMethods.createContainer("human")
        const cpuPlayer = uiMethods.createContainer("cpu")

        document.querySelector(".content").appendChild(humanPlayer)
        document.querySelector(".content").appendChild(cpuPlayer)
    },
    
}
    
export default uiMethods