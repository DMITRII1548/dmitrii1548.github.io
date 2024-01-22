
if (document.documentElement.clientWidth < 600) {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        slidesPerView: 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
    });
} else if (document.documentElement.clientWidth < 800) {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        slidesPerView: 2,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
    });
} else if (document.documentElement.clientWidth < 1000) {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        slidesPerView: 3,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
    });
} else {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        slidesPerView: 3,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
    });
}