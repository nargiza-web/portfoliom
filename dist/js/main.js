const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.manu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
  if(!showMenu){
    hamburger.classList.add('open');
    nav.classList.add('open');
    manuNav.classList.add('open');
    navItems.forEach(item => item.classList.add('open'));
    
    showMenu = true;
  } else {
    hamburger.classList.remove('open')
    nav.classList.remove('open');
    manuNav.classList.remove('open');
    navItems.forEach(item => item.classList.remove('open'));
    
    showMenu = false;
  }
}