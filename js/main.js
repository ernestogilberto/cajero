import {userScreen} from "./screens.js"

let user = ""
let index = 0
let balance = 0
let buttons = document.getElementById("buttons")

// buttons.addEventListener("click", (e)=>{
//
// })

userScreen()

const setUser = (currentUser) => {
    user = currentUser
}

const setIndex = (currentIndex) => {
    index = currentIndex
}

const setBalance = (currentBalance) => {
    balance = currentBalance
}

export {setUser, user, setIndex, index, balance, setBalance, buttons}