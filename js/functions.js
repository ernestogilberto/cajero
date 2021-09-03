import {
    cashScreen,
    depositScreen,
    getBalanceScreen,
    getCashScreen,
    getDepositScreen,
    menuScreen,
    passwordScreen,
    userScreen
} from "./screens.js"
import {users} from "./db.js"
import {balance, index, setBalance, setIndex, setUser, user} from "./main.js"

const returnUser = () => {
    setUser(null)
    setIndex(null)
    setBalance(null)
    userScreen()
}

const getUser = () => {
    let data = document.getElementById("text").value
    for (let dataKey in users) {
        if (data === users[dataKey].user) {
            setUser(data)
            setIndex(dataKey)
            setBalance (users[dataKey].balance)
            break
        }
    }
    passwordScreen(user)
}

const retry = () => {
    passwordScreen(user)
}

const getPassword = () => {
    let data = document.getElementById("text").value

    if (data === users[index].password) {
        menuScreen(true)
    } else {
        menuScreen(false)
    }
}

const backMenu = () => {
    menuScreen(true)
}

const getBalance = () => {
    getBalanceScreen(balance)
}
const setCash = () => {
    getCashScreen()
}
const setDeposit = () => {
    getDepositScreen()
}

const getCash = () => {
    let cash = document.getElementById("text").value
    cash = parseInt(cash)
    if (balance - cash >= 10) {
        setBalance(balance - cash)
        cashScreen(true)
    } else {
        cashScreen(false)
    }
}

const getDeposit = () => {
    let deposit = document.getElementById("text").value
    deposit = parseInt(deposit)
    if (balance + deposit <= 990) {
        setBalance(balance + deposit)
        depositScreen(true)
    } else {
        depositScreen(false)
    }
}

export {returnUser, getUser, getPassword, retry, getBalance, setCash, setDeposit, backMenu, getCash, getDeposit}