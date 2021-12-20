const body = document.querySelector('body');
const navMenu = document.querySelector('.toggle');

// --------------------MOBILE-MENU--------------------------

navMenu.addEventListener('click', () => {
  body.classList.toggle('open-menu');
});

const menuLink = document.querySelectorAll('.menu-link');

menuLink.forEach((e) => e.addEventListener('click', () => {
  body.classList.remove('open-menu');
}));