import {setLetters} from "./keyboard.js";

const addElement = (father, tag, text, className = null, idName = null) => {
    let element = document.createElement(tag)
    element.innerHTML = text
    father.appendChild(element)

    if (className != null) {
        for (let elem in className) {
            element.classList.add(className[elem])
        }
    }

    if (idName != null) {
        element.id = idName
    }
}

const addKeyboard = (father) => {
    addElement(father, "input", "", null, "text")
    addElement(father, "div", "", null, "keyboard")
    const keyboard = document.getElementById("keyboard")
    addElement(keyboard, "div", null, null, "letters")
    setLetters()
}

const addBtn = (father, className, idName, func) => {
    addElement(father, "div", "", className, idName)
    let btn = document.getElementById(idName)
    btn.addEventListener("click", func)
}

const destructor = (father) => {
    while (father.firstChild) {
        father.removeChild(father.firstChild)
    }
}

export {addElement, addKeyboard, addBtn, destructor};