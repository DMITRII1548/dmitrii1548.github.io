$nav = document.querySelector('.header-nav')
$menu = document.querySelector('#menu')
$search = document.querySelector('#search')
$logIn = document.querySelector('#log-in')

$menu.onclick = () => {
  $menu.classList.toggle('opened')
  $search.classList.toggle('d-none')
  $logIn.classList.toggle('d-none')
  $nav.classList.toggle('opened')

  if ($menu.classList == 'menu-btn opened') {
    $menu.src = './imgs/header/close-menu.svg'
  } else {
    $menu.src = './imgs/header/open-menu.svg'
  }
  
}