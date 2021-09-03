import {addBtnTxt} from "./elements.js";
import {addBtn} from "./constructors.js";
import {buttons} from "./screens.js";
import {
    backMenu,
    getCash, getDeposit,
    getPassword,
    getUser,
    retry,
    returnUser,
    getBalance,
    setCash,
    setDeposit
} from "./functions.js";

const getUserBtn = () => {
    addBtnTxt("Continuar", ["btn-txt", "bottom", "right"])
    addBtn(buttons, ["btn", "btn-right", "btn-bottom"], "getUser", getUser)
}

const returnUserBtn = () => {
    addBtnTxt("Salir", ["btn-txt", "bottom", "left"])
    addBtn(buttons, ["btn", "btn-left", "btn-bottom"], "returnUser", returnUser)
}

const getPasswordBtn = () => {
    addBtnTxt("Continuar", ["btn-txt", "bottom", "right"])
    addBtn(buttons, ["btn", "btn-right", "btn-bottom"], "getPassword", getPassword)
}

const retryPassBtn = () => {
    addBtnTxt("Reintentar", ["btn-txt", "bottom", "right"])
    addBtn(buttons, ["btn", "btn-right", "btn-bottom"], "retry", retry)
}

const balanceBtn = () => {
    addBtnTxt("Consultar Saldo", ["btn-txt", "top", "left"])
    addBtn(buttons, ["btn", "btn-left", "btn-top"], "getBalance", getBalance)
}

const cashBtn = () => {
    addBtnTxt("Retiro", ["btn-txt", "top", "right"])
    addBtn(buttons, ["btn", "btn-right", "btn-top"], "setCash", setCash)
}

const depositBtn = () => {
    addBtnTxt("Deposito", ["btn-txt", "mid-top", "left"])
    addBtn(buttons, ["btn", "btn-left", "btn-mid-top"], "setDeposit", setDeposit)
}

const backMenuBtn = () => {
    addBtnTxt("Regresar", ["btn-txt", "bottom", "right"])
    addBtn(buttons, ["btn", "btn-right", "btn-bottom"], "backMenu", backMenu)
}

const secBackMenuBtn = () => {
    addBtnTxt("Regresar", ["btn-txt", "bottom", "left"])
    addBtn(buttons, ["btn", "btn-left", "btn-bottom"], "backMenu", backMenu)
}

const getCashBtn = () => {
    addBtnTxt("Continuar", ["btn-txt", "bottom", "right"])
    addBtn(buttons, ["btn", "btn-right", "btn-bottom"], "getCash", getCash)
}

const getDepositBtn = () => {
    addBtnTxt("Continuar", ["btn-txt", "bottom", "right"])
    addBtn(buttons, ["btn", "btn-right", "btn-bottom"], "getDeposit", getDeposit)
}

export {
    getUserBtn,
    returnUserBtn,
    getPasswordBtn,
    retryPassBtn,
    balanceBtn,
    cashBtn,
    depositBtn,
    backMenuBtn,
    secBackMenuBtn,
    getCashBtn,
    getDepositBtn
}