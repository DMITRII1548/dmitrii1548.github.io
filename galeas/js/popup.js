{
    const openPopupBtn = document.getElementById('popupBtn')
    const popup = document.getElementById('popup')
    const bg = document.getElementById('popup-bg')

    openPopupBtn.onclick = () => {
        popup.classList.toggle('none')
    }

    bg.onclick = () => {
        popup.classList.add('none')
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
            formBtn.classList.toggle('switch__card__btn--active')
            contactBtn.classList.toggle('switch__card__btn--active')

            form.classList.toggle('none')
            info.classList.toggle('none')

            window = !window
        }  
    }

    contactBtn.onclick = () => {
        if (!window) {
            formBtn.classList.toggle('switch__card__btn--active')
            contactBtn.classList.toggle('switch__card__btn--active')
            
            form.classList.toggle('none')
            info.classList.toggle('none')

            window = !window 
        }
    }
}