const mobileBtn = document.querySelector('#mobile-btn');
const mobileMenu = document.querySelector('#mobile-menu');
const burgerMenu = document.querySelector('#burger-menu');

mobileBtn.addEventListener('click',()=>{
    mobileMenu.classList.toggle('hidden');
    
    burgerMenu.classList.toggle('ri-xrp-line');
});