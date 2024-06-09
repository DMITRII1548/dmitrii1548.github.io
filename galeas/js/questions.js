{
    const openCloseBtn1 = document.getElementById('arrow-btn-1')
    const openCloseBtn2 = document.getElementById('arrow-btn-2')
    const openCloseBtn3 = document.getElementById('arrow-btn-3')
    const openCloseBtn4 = document.getElementById('arrow-btn-4')
    const openCloseBtn5 = document.getElementById('arrow-btn-5')

    const txt1 = document.getElementById('question-txt-1')
    const txt2 = document.getElementById('question-txt-2')
    const txt3 = document.getElementById('question-txt-3')
    const txt4 = document.getElementById('question-txt-4')
    const txt5 = document.getElementById('question-txt-5')

    openCloseBtn1.onclick = () => {
        openCloseBtn1.classList.toggle('question__arrow--opened')
        txt1.classList.toggle('none')
    }

    openCloseBtn2.onclick = () => {
        openCloseBtn2.classList.toggle('question__arrow--opened')
        txt2.classList.toggle('none')
    }

    openCloseBtn3.onclick = () => {
        openCloseBtn3.classList.toggle('question__arrow--opened')
        txt3.classList.toggle('none')
    }


    openCloseBtn4.onclick = () => {
        openCloseBtn4.classList.toggle('question__arrow--opened')
        txt4.classList.toggle('none')
    }

    openCloseBtn5.onclick = () => {
        openCloseBtn5.classList.toggle('question__arrow--opened')
        txt5.classList.toggle('none')
    }
}