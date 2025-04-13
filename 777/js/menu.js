{
    // guarantee
    const guarantee = document.getElementById('guarantee')
    const guaranteeBtn = document.getElementById('guaranteeBtn')
    const guaranteeArrow = document.getElementById('guaranteeArrow')
    const guaranteeCross = document.getElementById('guaranteeCross')

    guaranteeBtn.addEventListener('click', () => {
        guarantee.classList.toggle('none')
        guaranteeArrow.classList.toggle('rotate-180')

        // switch on other elements
        services.classList.add('none')
        servicesArrow.classList.remove('rotate-180')

        services.classList.add('none')
        servicesArrow.classList.remove('rotate-180')
    })

    guaranteeCross.addEventListener('click', () => {
        guarantee.classList.add('none')
        guaranteeArrow.classList.remove('rotate-180')
    })

    // contact
    const contact = document.getElementById('contact')
    const contactBtn = document.getElementById('contactBtn')
    const contactArrow = document.getElementById('contactArrow')
    const contactCross = document.getElementById('contactCross')

    contactBtn.addEventListener('click', () => {
        contact.classList.toggle('none')
        contactArrow.classList.toggle('rotate-180')

            // switch on other elements
            services.classList.add('none')
            servicesArrow.classList.remove('rotate-180')
    
            guarantee.classList.add('none')
            guaranteeArrow.classList.remove('rotate-180')
    })

    contactCross.addEventListener('click', () => {
        contact.classList.add('none')
        contactArrow.classList.remove('rotate-180')
    })

    // services
    const services = document.getElementById('services')
    const servicesBtn = document.getElementById('servicesBtn')
    const servicesArrow = document.getElementById('servicesArrow')
    const servicesCross = document.getElementById('servicesCross')

    servicesBtn.addEventListener('click', () => {
        services.classList.toggle('none')
        servicesArrow.classList.toggle('rotate-180')

        // switch on other elements
        contact.classList.add('none')
        contactArrow.classList.remove('rotate-180')

        guarantee.classList.add('none')
        guaranteeArrow.classList.remove('rotate-180')
    })

    servicesCross.addEventListener('click', () => {
        services.classList.add('none')
        servicesArrow.classList.remove('rotate-180')
    })

    // mobile menu
    const mobileMenuBtn = document.getElementById('menuMobBtn')
    const mobileMenu = document.getElementById('menuMob')


    mobileMenuBtn.addEventListener('click', () => {
        services.classList.add('none')
        contact.classList.add('none')
        guarantee.classList.add('none')

        if (!mobileMenu.classList.toggle('none')) {
            mobileMenuBtn.src = './imgs/cross.svg'
        } else {
            mobileMenuBtn.src = './imgs/menu.svg'
        }
    })

    const servicesMobBtn = document.getElementById('servicesMobBtn')
    const contactMobBtn = document.getElementById('contactMobBtn')
    const guaranteeMobBtn = document.getElementById('guaranteeMobBtn')

    servicesMobBtn.addEventListener('click', () => {
        mobileMenu.classList.add('none')

        services.classList.toggle('none')
    })

    contactMobBtn.addEventListener('click', () => {
        mobileMenu.classList.add('none')

        contact.classList.toggle('none')
    })

    guaranteeMobBtn.addEventListener('click', () => {
        mobileMenu.classList.add('none')

        guarantee.classList.toggle('none')
    })
}