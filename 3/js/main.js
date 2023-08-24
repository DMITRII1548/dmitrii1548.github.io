$menuBtn = document.querySelector('#menu-btn')

$menu  = document.querySelector('#menu')

$logo = document.querySelector('#logo')

$menuBtn.onclick = () => {
    $menuBtn.classList.toggle('nav__menu--active')

    if ($menu.classList.toggle('nav__list--mobile')) {
        $menuBtn.src = './img/header/menu_close.svg'
    } else {
        $menuBtn.src = './img/header/menu_open.svg'
    }

    $logo.classList.toggle('none')
}