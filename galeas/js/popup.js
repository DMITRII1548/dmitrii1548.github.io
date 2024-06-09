{
    const openPopupBtn = document.getElementById('popupBtn')
    const popup = document.getElementById('popup')

    openPopupBtn.onclick = () => {
        popup.classList.toggle('none')
    }
}
{
    const formBtn = document.getElementById('submit')
    const contactBtn = document.getElementById('contact')

    const form = document.getElementById('back__card__form')
    const info = document.getElementById('back__card__info')

    let window = false

    formBtn.onclick = () => {
        if (window) {
            form.classList.toggle('none')
            info.classList.toggle('none')

            window = !window
        }  
    }

    contactBtn.onclick = () => {
        if (!window) {
            form.classList.toggle('none')
            info.classList.toggle('none')

            window = !window 
        }
    }
}