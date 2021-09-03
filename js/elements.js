import {buttons, screen} from "./screens.js";
import {addElement, destructor} from "./constructors.js";


const addInstruction = (text,) => {
    addElement(screen, "p", text, ["instruction-txt"])
}

const addBtnTxt = (text, className) => {
    addElement(screen, "p", text, className)
}

const addMainTxt = (text) => {
    addElement(screen, "p", text, ["main-txt"])
}

const addError = (text) => {
    addElement(screen, "p", text, ["main-txt", "error"])
}

const cleanAll = () => {
    destructor(screen)
    destructor(buttons)
}


export {addInstruction, addBtnTxt, addError, addMainTxt, cleanAll}