const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const hideMenu = document.querySelector('.hide-menu');
// const menuMob2 = document.querySelector('.open-mobile-menu-2');
// const link = document.querySelector('.header-main__item')


if (burger){
    burger.addEventListener("click", function(e){
        document.body.classList.toggle('lock');
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        hideMenu.classList.toggle('show');
        // menuMob2.classList.toggle('active');
        // menuMob3.classList.toggle('active');
    });

    // menu.querySelectorAll('.header-main__item').forEach(link => {
    //     link.addEventListener('click', function(e) {
    //         document.body.classList.remove('lock');
    //         menu.classList.remove('active');
    //         burger.classList.remove('active');
    //     })
    // })
    
}

let body = document.querySelector('body');
body.classList.add('touch');
let arrow = document.querySelectorAll('.arrow');
for(i=0;i<arrow.length; i++){
let thisLink = arrow[i].previousElementSibling;
let subMenu = arrow[i].nextElementSibling;
let thisArrow = arrow[i];

thisLink.classList.add('parent');
arrow[i].addEventListener('click', function(){
subMenu.classList.toggle('open');
thisArrow.classList.toggle('active');
});
};