{
    new Swiper(".mySwiper", {
        spaceBetween: document.documentElement.clientWidth < 721 ? 6 : 30,
        slidesPerView: document.documentElement.clientWidth < 721 ? 2 : 3,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
        loop: true
    })
}