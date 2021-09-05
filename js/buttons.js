import {addBtnTxt} from "./elements.js";
import {addBtn} from "./constructors.js";
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

const btm_left_txt = ["btn-txt", "bottom", "left"]
const btm_right_txt = ["btn-txt", "bottom", "right"]
const btm_left_btn = ["btn", "btn-left", "btn-bottom"]
const btm_right_btn = ["btn", "btn-right", "btn-bottom"]

const getUserBtn = () => {
    addBtnTxt("Continuar", btm_right_txt)
    addBtn(btm_right_btn, "getUser", getUser)
}

const returnUserBtn = () => {
    addBtnTxt("Salir", btm_left_txt)
    addBtn(btm_left_btn, "returnUser", returnUser)
}

const getPasswordBtn = () => {
    addBtnTxt("Continuar", btm_right_txt)
    addBtn(btm_right_btn, "getPassword", getPassword)
}

const retryPassBtn = () => {
    addBtnTxt("Reintentar", btm_right_txt)
    addBtn(btm_right_btn, "retry", retry)
}

const balanceBtn = () => {
    addBtnTxt("Consultar Saldo", ["btn-txt", "top", "left"])
    addBtn(["btn", "btn-left", "btn-top"], "getBalance", getBalance)
}

const cashBtn = () => {
    addBtnTxt("Retiro", ["btn-txt", "top", "right"])
    addBtn(["btn", "btn-right", "btn-top"], "setCash", setCash)
}

const depositBtn = () => {
    addBtnTxt("Deposito", ["btn-txt", "mid-top", "left"])
    addBtn(["btn", "btn-left", "btn-mid-top"], "setDeposit", setDeposit)
}

const backMenuBtn = () => {
    addBtnTxt("Regresar", btm_right_txt)
    addBtn(btm_right_btn, "backMenu", backMenu)
}

const secBackMenuBtn = () => {
    addBtnTxt("Regresar", btm_left_txt)
    addBtn(btm_left_btn, "backMenu", backMenu)
}

const getCashBtn = () => {
    addBtnTxt("Continuar", btm_right_txt)
    addBtn(btm_right_btn, "getCash", getCash)
}

const getDepositBtn = () => {
    addBtnTxt("Continuar", btm_right_txt)
    addBtn(btm_right_btn, "getDeposit", getDeposit)
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