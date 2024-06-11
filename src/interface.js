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

    const createTitle = async function() {
        const container = createContainer("header-container", "")
        const titleContainer = createContainer("title-container", "")
        const titleText = createEl("h1", "title-text", "", "Battleship")

        titleContainer.appendChild(titleText)
        container.appendChild(titleContainer)
        body.appendChild(container)
    }

    const createDescription = () => {
        
        const descriptionContainer = createContainer("description-container", "")
        const projectNumberContainer = createContainer("project-number-container", "")
        const projectCreditsContainer = createContainer("project-credits-container", "")

        projectNumberContainer.innerHTML += 
        "<h3 class='project-description-text' id='project-number-text'> <a href='https://www.theodinproject.com/' title='https://www.theodinproject.com/'>Odin Project</a> JavaScript Course Final Project</h3>"

        projectCreditsContainer.innerHTML += 
        "<h4 class='project-description-text' id='project-credits-text'>A program by <a href='https://github.com/Mizakson' title='https://github.com/Mizakson'>Mizakson</a></h4>"

        descriptionContainer.appendChild(projectNumberContainer)
        descriptionContainer.appendChild(projectCreditsContainer)

        document.querySelector(".header-container").appendChild(descriptionContainer)

    }

    const mainHeader = () => {
        createTitle().then(createDescription())
    }

    return { 
        createContainer, createEl, mainHeader,
    }

})()

export default uiMethods