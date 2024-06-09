let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

let solutions = document.querySelector('.menu-solutions');
let service = document.querySelector('.menu-service');
let industry = document.querySelector('.menu-industry');
let options = document.querySelector('.menu-options');
let news = document.querySelector('.menu-news');
let sotrudnik = document.querySelector('.menu-sotrudnik');
let vacation = document.querySelector('.menu-vacation');
let faq = document.querySelector('.menu-faq');

let shipping = document.querySelector('.shipping_menu');
let ground = document.querySelector('.ground_transportation');
let air = document.querySelector('.air_transportation');



let menu1 = document.querySelector('.menu1');
let menu3 = document.querySelector('.menu3');
let menu5 = document.querySelector('.menu5');
let menu7 = document.querySelector('.menu7');
let menu8 = document.querySelector('.menu8');



let menu2 = document.querySelector('.menu2');
let menu4 = document.querySelector('.menu4');
let menu6 = document.querySelector('.menu6');


menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});

solutions.addEventListener('click', function(){
	menu1.classList.toggle('menu_vision');
});

service.addEventListener('click', function(){
	menu3.classList.toggle('menu_vision2');
});

industry.addEventListener('click', function(){
	menu5.classList.toggle('menu_vision3');
});

options.addEventListener('click', function(){
	menu7.classList.toggle('menu_vision4');
});





shipping.addEventListener('click', function(){
	menu2.classList.toggle('menu_vision_shiping');
});

ground.addEventListener('click', function(){
	menu4.classList.toggle('menu_vision_ground');
});

air.addEventListener('click', function(){
	menu6.classList.toggle('menu_vision_air');
});


