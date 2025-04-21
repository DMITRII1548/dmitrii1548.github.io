{
    const form = document.getElementById('form')
    const formBtn = document.getElementById('formBtn')
    const formCross = document.getElementById('formCross')

    formBtn.addEventListener('click', () => {
        form.classList.remove('none')

        form.scrollIntoView({
            behavior: 'smooth',
            block: 'start'      
        })
    })

    formCross.addEventListener('click', () => {
        form.classList.add('none')
    })
}