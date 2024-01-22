// Services section
const servicesBtn = document.getElementById('show-more-services')
const serviceCard1 = document.getElementById('service-card1')
const serviceCard2 = document.getElementById('service-card2')
const serviceCard3 = document.getElementById('service-card3')
const serviceCard4 = document.getElementById('service-card4')
const serviceCard5 = document.getElementById('service-card5')
const serviceCard6 = document.getElementById('service-card6')

servicesBtn.onclick = () => {
    servicesBtn.style.display = 'none'
    serviceCard1.style.display = 'grid'
    serviceCard2.style.display = 'grid'
    serviceCard3.style.display = 'grid'
    serviceCard4.style.display = 'grid'
    serviceCard5.style.display = 'grid'
    serviceCard6.style.display = 'grid'
}


// About section

const aboutBtn = document.getElementById("show-more-about")
const aboutCard1 = document.getElementById('about-card1')
const aboutCard2 = document.getElementById('about-card2')
const aboutCard3 = document.getElementById('about-card3')
const aboutCard4 = document.getElementById('about-card4')
const aboutCard5 = document.getElementById('about-card5')
const aboutCard6 = document.getElementById('about-card6')
const aboutCard7 = document.getElementById('about-card7')
const aboutCard8 = document.getElementById('about-card8')
const aboutCard9 = document.getElementById('about-card9')
const aboutCard10 = document.getElementById('about-card10')


aboutBtn.onclick = () => {
    aboutBtn.style.display = 'none'
    aboutCard1.style.display = 'flex'
    aboutCard2.style.display = 'flex'
    aboutCard3.style.display = 'flex'
    aboutCard4.style.display = 'flex'
    aboutCard5.style.display = 'flex'
    aboutCard6.style.display = 'flex'
    aboutCard7.style.display = 'flex'
    aboutCard8.style.display = 'flex'
    aboutCard9.style.display = 'flex'
    aboutCard10.style.display = 'flex'
}