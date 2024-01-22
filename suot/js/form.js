const $inputCount = document.getElementById('count')

if (document.documentElement.clientWidth < 1000) {
    $inputCount.placeholder = "Кол-во объектов / адерсов"
} else {
    $inputCount.placeholder = "Введите кол-во объектов / адерсов"
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


// Hide labels

const input1 = document.getElementById('code')
const input2 = document.getElementById('count')
const input3 = document.getElementById('name')
const input4 = document.getElementById('tel')

const label1 = document.getElementById('label-1')
const label2 = document.getElementById('label-2')
const label3 = document.getElementById('label-3')
const label4 = document.getElementById('label-4')

input1.onfocus = () => {
    label1.style.display = 'none'
}

input1.onblur = () => {
    if (input1.value == '') {
        label1.style.display = 'block'
    }
}
  
input2.onfocus = () => {
    label2.style.display = 'none'
}

input2.onblur = () => {
    if (input2.value == '') {
        label2.style.display = 'block'
    }
}

input3.onfocus = () => {
    label3.style.display = 'none'
}

input3.onblur = () => {
    if (input3.value == '') {
        label3.style.display = 'block'
    }
}

input4.onfocus = () => {
    label4.style.display = 'none'
}

input4.onblur = () => {
    if (input4.value == '') {
        label4.style.display = 'block'
    }
}