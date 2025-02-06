{
    const redAgreeBtn = document.getElementById('agreeRedBtn')
    const blueAgreeBtn = document.getElementById('agreeBlueBtn')

    redAgreeBtn.addEventListener('click', () => {
        redAgreeBtn.classList.toggle('pay__ok-red-clicked')
    })

    blueAgreeBtn.addEventListener('click', () => {
        blueAgreeBtn.classList.toggle('pay__ok-blue-clicked')
    })
}