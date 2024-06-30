{
  let slidesCount = window.innerWidth > 1000 ? 3 : 1;

  const swiper = new Swiper('.swiper-products', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: slidesCount,
      loop: true,
      spaceBetween: 20,

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });  
}
