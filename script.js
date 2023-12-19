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


// SINGLE PRODUCT PAGE JS

let mainImg = document.querySelector("#main-img")
let smallImg = document.querySelectorAll(".small-img")

smallImg.forEach(img => img.onclick = () => mainImg.src = img.src)


