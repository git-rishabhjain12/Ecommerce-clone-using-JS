const bar = document.querySelector("#bar");
const nav = document.querySelector("#navbar")
const close = document.querySelector("#close")


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}


// NAV BAR ACTIVE CLASS ADD AND REMOVE


// SINGLE PRODUCT PAGE JS

let mainImg = document.querySelector("#main-img")
let smallImg = document.querySelectorAll(".small-img")

smallImg.forEach(img => img.onclick = () => mainImg.src = img.src)



for (let i = 1; i <= 20; i++) {
    console.log(String.fromCharCode(i))
}