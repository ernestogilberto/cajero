const setLetters = () => {
    const qwerty = "1,2,3,4,5,6,7,8,9,0,q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,ñ,z,x,c,v,b,n,m,\u007f, "

    const idLetters = document.getElementById("letters")
    idLetters.innerHTML = ""
    qwerty.split(',').map(element => {
        let letter = document.createElement("span")
        letter.addEventListener("click", currentKey)
        letter.innerText = element;

        if (element === '\u007f') {
            letter.innerText = ""
            letter.classList.add("back")
        }

        if (element === " ") {
            letter.classList.add("space")
        }
        idLetters.appendChild(letter)
    })
}

function currentKey() {
    const key = this.classList.contains("space") ? " " : this.innerText
    document.getElementById("text").value += key
}

export {setLetters}