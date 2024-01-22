menuBtn = document.getElementById('menuBtn')
headerBottom = document.getElementById('header__bottom')
nav = document.getElementById('nav')

menuBtn.onclick = () => {
    if (headerBottom.classList.toggle('header__bottom--opened')) {
        menuBtn.src = './imgs/header/close_menu.svg'
    } else {
        menuBtn.src = './imgs/header/open_menu.svg'
    }

    nav.classList.toggle('nav--opened')
}