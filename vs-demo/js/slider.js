{
    const calculateCountOfSlides = () => {
        windowWidth = window.innerWidth

        if (windowWidth < 700) {
            return 1
        } else {
            return 2
        }
    }
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: calculateCountOfSlides(), 
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}