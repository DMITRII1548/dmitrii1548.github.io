{
    const openCloseBtn1 = document.getElementById('arrow-btn-1')
    const openCloseBtn2 = document.getElementById('arrow-btn-2')
    const openCloseBtn3 = document.getElementById('arrow-btn-3')
    const openCloseBtn4 = document.getElementById('arrow-btn-4')
    const openCloseBtn5 = document.getElementById('arrow-btn-5')
    const openCloseBtn6 = document.getElementById('arrow-btn-6')
    const openCloseBtn7 = document.getElementById('arrow-btn-7')
    const openCloseBtn8 = document.getElementById('arrow-btn-8')

    const txt1 = document.getElementById('question-txt-1')
    const txt2 = document.getElementById('question-txt-2')
    const txt3 = document.getElementById('question-txt-3')
    const txt4 = document.getElementById('question-txt-4')
    const txt5 = document.getElementById('question-txt-5')
    const txt6 = document.getElementById('question-txt-6')
    const txt7 = document.getElementById('question-txt-7')
    const txt8 = document.getElementById('question-txt-8')

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

    openCloseBtn6.onclick = () => {
        openCloseBtn6.classList.toggle('question__arrow--opened')
        txt6.classList.toggle('none')
    }

    openCloseBtn7.onclick = () => {
        openCloseBtn7.classList.toggle('question__arrow--opened')
        txt7.classList.toggle('none')
    }

    openCloseBtn8.onclick = () => {
        openCloseBtn8.classList.toggle('question__arrow--opened')
        txt8.classList.toggle('none')
    }
}