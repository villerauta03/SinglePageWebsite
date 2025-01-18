const menu = document.querySelector('.menu');
const navMenu = document.querySelector('nav');
menu.addEventListener('click', () => {
    navMenu.classList.toggle('piilos');
});