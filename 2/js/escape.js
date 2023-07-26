$escape = document.querySelector('#escape')

$escape.onmouseover = () => {
  $escape.src = '../imgs/ui_kits/escape/hover.svg'
}

$escape.onmousedown = () => {
  $escape.src = '../imgs/ui_kits/escape/active.svg'
}

$escape.onmouseup = () => {
  $escape.src = '../imgs/ui_kits/escape/focus.svg'
}

$escape.onmouseout = () => {
  $escape.src = '../imgs/ui_kits/escape/default.svg'
}