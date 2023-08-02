// hassar.js

document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu__ind--ul2');
  
    menuBtn.addEventListener('click', function () {
      menu.classList.toggle('show');
    });
  });

function onScroll() {
  var scrollPosition = window.scrollY;

  var triggerPosition = 500; 
  var header = document.getElementById('titulo');

  if (scrollPosition >= triggerPosition) {
      header.style.backgroundColor = 'white';
  } else {
      header.style.backgroundColor = 'transparent';
      header.style.animation = '.3s'
  }
}
window.addEventListener('scroll', onScroll);
function scrollToSection() {
  var image = document.getElementById('flecha');

  var destinationElement = document.querySelector('#flecha');

  destinationElement.scrollIntoView({
      behavior: 'smooth' 
  });
}

document.getElementById('flecha').addEventListener('click', scrollToSection);
window.addEventListener('scroll', onScroll);
function scrollToSection() {
  var image = document.getElementById('contacto');

  var destinationElement = document.querySelector('#contacto1');

  destinationElement.scrollIntoView({
      behavior: 'smooth' 
  });
}
document.getElementById('contacto').addEventListener('click', scrollToSection);


