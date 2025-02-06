{
    const btn = document.getElementById('switchMenuBtn')
    const menu = document.getElementById('menu')

    btn.addEventListener('click', () => {
        menu.classList.toggle('none')
    })
}