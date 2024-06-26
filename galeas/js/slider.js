{
    new Swiper(".swiper", {
        spaceBetween: 20,
        slidesPerView: document.documentElement.clientWidth > 1535 
            ? 4 
            : document.documentElement.clientWidth > 900 
                ? 3
                : document.documentElement.clientWidth > 650
                    ? 2
                    : 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
    })
}


