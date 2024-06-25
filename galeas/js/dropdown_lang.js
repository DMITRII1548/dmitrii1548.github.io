document.querySelector('.dropdown__button__lang').addEventListener('click', function(){
    document.querySelector('.dropdown__list__lang').classList.toggle('dropdown__list__lang--visible');
    
});

document.querySelectorAll('.dropdown__list-item__lang').forEach(function(listItem){
    listItem.addEventListener('click', function(e){
        e.stopPropagation();
        document.querySelector('.dropdown__button__lang').innerText = this.innerText;
        document.querySelector('.dropdown__button__lang').focus();
        document.querySelector('.dropdown__input-hidden').value = this.dataset.value;
        document.querySelector('.dropdown__list__lang').classList.remove('dropdown__list__lang--visible');
    })
});

document.addEventListener('click', function(e){
    if (e.target !== document.querySelector('.dropdown__button__lang')){
        document.querySelector('.dropdown__list__lang').classList.remove('dropdown__list__lang--visible');
    }
});


document.querySelector('.dropdown__button__lang_mobile').addEventListener('click', function(){
    document.querySelector('.dropdown__list__lang_mobile').classList.toggle('dropdown__list__lang_mobile--visible');
    
});

document.querySelectorAll('.dropdown__list-item__lang').forEach(function(listItem){
    listItem.addEventListener('click', function(e){
        e.stopPropagation();
        document.querySelector('.dropdown__button__lang_mobile').innerText = this.innerText;
        document.querySelector('.dropdown__button__lang_mobile').focus();
        document.querySelector('.dropdown__input-hidden').value = this.dataset.value;
        document.querySelector('.dropdown__list__lang_mobile').classList.remove('dropdown__list__lang_mobile--visible');
    });
});

document.addEventListener('click', function(e){
    if (e.target !== document.querySelector('.dropdown__button__lang_mobile')){
        document.querySelector('.dropdown__list__lang_mobile').classList.remove('dropdown__list__lang_mobile--visible');
    }
});


