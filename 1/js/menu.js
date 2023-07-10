const $menu = document.querySelector('.menu')
const $container = document.querySelector('.header-container')
const $closeBtn = document.querySelector('.close')

$menu.onclick = () => {
  $container.classList.toggle('show')
}

$closeBtn.onclick = () => {
  $container.classList.toggle('show')
}