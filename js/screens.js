import {addKeyboard} from "./constructors.js";
import {addError, addInstruction, addMainTxt, cleanAll} from "./elements.js"
import {
    backMenuBtn,
    balanceBtn,
    cashBtn,
    depositBtn,
    getCashBtn,
    getDepositBtn,
    getPasswordBtn,
    getUserBtn,
    retryPassBtn,
    returnUserBtn,
    secBackMenuBtn
} from "./buttons.js";
import {balance} from "./main.js";

let screen = document.getElementById("screen")

const userScreen = () => {
    cleanAll()
    addInstruction("Ingrese su usuario: ")
    addKeyboard(screen)
    getUserBtn()
}

const passwordScreen = (user) => {
    cleanAll()
    user ? addInstruction(`Bienvenido ${user} ingrese su contraseña: `) : addError("Usuario no encontrado")

    if (user) {
        addKeyboard(screen)
        getPasswordBtn()
    }
    returnUserBtn()
}

const menuScreen = (bool) => {
    cleanAll()
    bool ? addInstruction("Que desea hacer: ") : addError("Contraseña incorrecta ")

    if (bool) {
        balanceBtn()
        cashBtn()
        depositBtn()
    } else {
        retryPassBtn()
    }
    returnUserBtn()
}

const getBalanceScreen = (balance) => {
    cleanAll()
    addMainTxt(`Su saldo es de: ${balance}`)
    returnUserBtn()
    backMenuBtn()
}
const getCashScreen = () => {
    cleanAll()
    addInstruction("¿Cuánto desea retirar? ")
    addKeyboard(screen)
    getCashBtn()
    secBackMenuBtn()
}
const getDepositScreen = () => {
    cleanAll()
    addInstruction("¿Cuánto desea depositar? ")
    addKeyboard(screen)
    getDepositBtn()
    secBackMenuBtn()
}

const cashScreen = (bool) => {
    cleanAll()
    bool ? addMainTxt(`Retiro aprobado, nuevo saldo: ${balance}`) : addError("Saldo insuficiente")
    returnUserBtn()
    backMenuBtn()
}

const depositScreen = (bool) => {
    cleanAll()
    bool ? addMainTxt(`Deposito aprobado, nuevo saldo: ${balance}`) : addError("Limite rebasado, no se pudo completar deposito")
    returnUserBtn()
    backMenuBtn()
}

export {
    userScreen,
    screen,
    passwordScreen,
    menuScreen,
    getBalanceScreen,
    getCashScreen,
    getDepositScreen,
    cashScreen,
    depositScreen
};