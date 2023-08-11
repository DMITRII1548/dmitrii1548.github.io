// Nav icon
const navBtn = document.querySelector('.nav-icon-btn')
const navIcon = document.querySelector('.nav-icon')
const nav = document.querySelector('.header__top-row')

navBtn.onclick = () => {
    navIcon.classList.toggle('nav-icon--active')
    nav.classList.toggle('header__top-row--mobile')
    document.body.classList.toggle('no-scroll');
}

// Phone Mask
mask('[data-tel-input]')

const phoneInputs = document.querySelectorAll('[data-tel-input]')
phoneInputs.forEach((input)=>{
	input.addEventListener('input', () => {
		if (input.value == '+') input.value = ''
	})
	input.addEventListener('blur', () => {
		if (input.value == '+') input.value = ''
	})
});

// Yandex Map
let map;

main();
async function main() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты API
    await ymaps3.ready;

    // Создание карты
    map = new ymaps3.YMap(document.getElementById('map'), {
        location: {
            // Координаты центра карты
            // Порядок по умолчанию: «долгота, широта»
            center: [59.943543, 30.338928],

            // Уровень масштабирования
            // Допустимые значения: от 0 (весь мир) до 21.
            zoom: 7
        }
    });

    // Добавляем слой для отображения схематической карты
    map.addChild(new ymaps3.YMapDefaultSchemeLayer());
}