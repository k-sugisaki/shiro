document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.main-menu__button');
  const mask = document.querySelector('.main-menu__mask');
  const menu = document.querySelector('.main-menu');

  btn.addEventListener('click', ()=>{
    menu.classList.toggle('inview');
  });
});