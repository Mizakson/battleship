const uiMethods = ( function () {
    
    const body = document.querySelector("body")

    const createContainer = (cls, idName) => {
        let el = document.createElement("div")

        if (cls != "") el.classList.toggle(cls)
        if (idName != "") el.id = idName

        return el
    }

    const createEl = (tag, cls, idName, text) => {
        
        let el = document.createElement(tag)

        if (cls != "") el.classList.toggle(cls)
        if (idName != "") el.id = idName
        if (text != "") el.innerText = text

        return el

    }

    const createMainHeader = () => {
        const container = createContainer("header-container", "")
        const titleText = createEl("h1", "title-text", "", "Battleship")

        container.appendChild(titleText)
        body.appendChild(container)

    }

    return { createContainer, createEl, createMainHeader }

})()

export default uiMethods