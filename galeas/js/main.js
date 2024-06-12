let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

/* desktop*/
let menuSolutions = document.querySelector('.menu-solutions');
let menuService = document.querySelector('.menu-service');
let menuIndustry = document.querySelector('.menu-industry');
let menuOptions = document.querySelector('.menu-options');




//solutions
let menuSolutions1 = document.querySelector('.menu-solutions1');

let Shipping = document.querySelector('.shipping_menu');
let Ground = document.querySelector('.ground_transportation');
let air = document.querySelector('.air_transportation');

let menuSolutions2 = document.querySelector('.menu-solutions2');
let menuSolutions2_1 = document.querySelector('.menu-solutions2-1');
let menuSolutions2_3 = document.querySelector('.menu-solutions2-3');

//service
let menuService1 = document.querySelector('.menu-service1');

//industry
let menuIndustry1 = document.querySelector('.menu-industry1');

//options
let menuOptions1 = document.querySelector('.menu-options1');



//mobile
let mobileSolution = document.querySelector('.menu-solutions_mobile');

let infoShipping = document.querySelector('.button_mobile_shipping');

let infoCar = document.querySelector('.car-mobile');

let infoTrain = document.querySelector('.button_mobile_train');

let infoInfo = document.querySelector('.button_mobile_info');

//info mobile
let button = document.querySelector('.menu_moba');

let shippingNav = document.querySelector('.active_shipping');

let carNav = document.querySelector('.active_car');

let trainNav = document.querySelector('.active_train');

let infoNav = document.querySelector('.active_info');

mobileSolution.addEventListener('click', function(){
	button.classList.toggle('hide_mobile_menu');
});

infoShipping.addEventListener('click', function(){
	shippingNav.classList.toggle('hide1');
});

infoCar.addEventListener('click', function(){
	carNav.classList.toggle('hide2');
});

infoTrain.addEventListener('click', function(){
	trainNav.classList.toggle('hide5');
});

infoInfo.addEventListener('click', function(){
	infoNav.classList.toggle('hide4');
});






menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');

	if (!menuSolutions2.classList.toggle('menu_vision_shiping')) {
		menuSolutions2.classList.toggle('menu_vision_shiping');
	}
	if (!menuSolutions2_1.classList.toggle('menu_vision_ground')) {
		menuSolutions2_1.classList.toggle('menu_vision_ground');
	}
	if (!menuSolutions2_3.classList.toggle('menu_vision_air')) {
		menuSolutions2_3.classList.toggle('menu_vision_air');
	}

	if (!menuSolutions1.classList.toggle('menu_vision2')) {
		menuSolutions1.classList.toggle('menu_vision2');
	}
	if (!menuService1.classList.toggle('menu_vision3')) {
		menuService1.classList.toggle('menu_vision3');
	}
	if (!menuIndustry1.classList.toggle('menu_vision4')) {
		menuIndustry1.classList.toggle('menu_vision4');
	}
	if (!menuOptions1.classList.toggle('menu_vision5')) {
		menuOptions1.classList.toggle('menu_vision5');
	}
});

menuSolutions.addEventListener('click', function(){
	menuSolutions1.classList.toggle('menu_vision2');
});


Shipping.addEventListener('click', function(){
	menuSolutions2.classList.toggle('menu_vision_shiping');
});

Ground.addEventListener('click', function(){
	menuSolutions2_1.classList.toggle('menu_vision_ground');
});

air.addEventListener('click', function(){
	menuSolutions2_3.classList.toggle('menu_vision_air');
});




menuService.addEventListener('click', function(){
	menuService1.classList.toggle('menu_vision3');
});

menuIndustry.addEventListener('click', function(){
	menuIndustry1.classList.toggle('menu_vision4');
});

menuOptions.addEventListener('click', function(){
	menuOptions1.classList.toggle('menu_vision5');
});

document.querySelector('.menu-service').onclick = () => {
	closeSolution()
}

document.querySelector('.menu-industry').onclick = () => {
	closeSolution
}

function closeSolution() {
	document.querySelector('.menu-solutions2').classList.add('menu_vision_shiping');
	document.querySelector('.menu-solutions2-1').classList.add('menu_vision_shiping');
	document.querySelector('.menu-solutions2-3').classList.add('menu_vision_air');
}