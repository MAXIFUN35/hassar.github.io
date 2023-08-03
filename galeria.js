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
  const alto = header.offsetHeight;
  const alturaViewport = window.innerHeight;

  if (alto < alturaViewport ){
    if (scrollPosition >= triggerPosition) {
        header.style.backgroundColor = 'white';
    } else {
        header.style.backgroundColor = 'transparent';
        header.style.animation = '.3s'
    }
  }

}
// flecha abajo
window.addEventListener('scroll', onScroll);
function scrollToSection() {
  var image = document.getElementById('flecha');

  var destinationElement = document.querySelector('#flecha');

  destinationElement.scrollIntoView({
      behavior: 'smooth' 
  });
}
// contacto
document.getElementById('flecha').addEventListener('click', scrollToSection);
window.addEventListener('scroll', onScroll);
function scrollToSection() {
  var image = document.getElementById('contacto');

  var destinationElement = document.querySelector('#contacto1');

  destinationElement.scrollIntoView({
      behavior: 'smooth' 
  });
}
// menu
  const checkbox = document.getElementById('checkmenu');
  const desplegable = document.getElementById('titulo');
  const imagen = document.getElementById('barramenu');
  const menu = document.getElementById('menu')
  let isDesplegableOpen = false;

  function cerrarDesplegable() {
    desplegable.style.height = '5em';
    menu.style.display = 'none'
    var scrollPosition = window.scrollY;

    var triggerPosition = 500; 
    var header = document.getElementById('titulo');

      if (scrollPosition >= triggerPosition) {
          header.style.backgroundColor = 'white';
          desplegable.style.height = '5em';

      } else {
          header.style.backgroundColor = 'transparent';
          header.style.animation = '.3s';
          desplegable.style.height = '5em';
      }
    isDesplegableOpen = false;
  }

  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      desplegable.style.height = '100vh';
      desplegable.style.backgroundColor = 'white';
      menu.style.display = 'block'
      isDesplegableOpen = true;
    } else {
      cerrarDesplegable();
    }

desplegable.addEventListener('click', function() {
  if (isDesplegableOpen) {
    cerrarDesplegable();
  }
});

document.addEventListener('click', function(event) {
  if (isDesplegableOpen && !desplegable.contains(event.target)) {
    cerrarDesplegable();
  }
});
  });

