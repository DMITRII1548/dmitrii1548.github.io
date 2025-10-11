{
    const menu = document.getElementById('nav-menu')
    const btnToggle = document.getElementById('nav-toggle')

    btnToggle.addEventListener('click', () => {
        menu.classList.toggle('d-none')
    })
}