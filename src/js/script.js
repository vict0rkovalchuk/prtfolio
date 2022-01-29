const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.menu__close');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});

close.addEventListener('click', () => {
  menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter');
const lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
  lines[i].setAttribute('style', `width:${counters[i].innerHTML}`);
});
