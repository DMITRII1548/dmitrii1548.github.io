$searchContainer = document.querySelector('#search-container')
$searchBtn = document.querySelector('#search-btn')
$navItem = document.querySelector('#nav-item:last-child')

$searchBtn.onclick = () => {
  $searchContainer.classList.toggle('d-none')
  $navItem.classList.toggle('d-none')
}

$escape.onclick = () => {
  $searchContainer.classList.toggle('d-none')
  $navItem.classList.toggle('d-none')
}

