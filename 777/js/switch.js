{
    const switchBtn = document.getElementById('switch')
    const openMapBtn = document.getElementById('openMapBtn')
    const openMobileMapBtn = document.getElementById('openMobileMapBtn')

    switchBtn.addEventListener('click', () => {
        switchBtn.classList.toggle('map__switch--left')
        openMapBtn.classList.toggle('none')
        openMobileMapBtn.classList.toggle('none')
    })
}