const burger = document.getElementById('burgerBar')
const dots = document.getElementById('dotsBar')
const header = document.getElementById('header')
const body = document.querySelector('body')
let i = 0
dots.addEventListener('click', () => {
    i++
    if(i%2 != 0) {
        burger.classList.add('hidden')
    } else if(i%2 == 0) {
        burger.classList.remove('hidden')
    }
})

burger.addEventListener('click', () => {
    i++
    if(i%2 != 0) {
        dots.classList.add('hidden')
    } else if(i%2 == 0) {
        dots.classList.remove('hidden')
    }
})



