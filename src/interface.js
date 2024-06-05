export const uiMethods = ( function () {
    
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

    return { createContainer, createEl }

})()