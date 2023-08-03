// hassar.js


function onScroll() {
  var scrollPosition = window.scrollY;

  var triggerPosition = 180; 
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
window.addEventListener('scroll', onScroll);
function scrollToSection() {

  var destinationElement = document.querySelector('#contacto1');

  destinationElement.scrollIntoView({
      behavior: 'smooth' 
  });
}
document.getElementById('contacto').addEventListener('click', scrollToSection);
// desplegable
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
  const checkbox = document.getElementById('checkmenu');
  const desplegable = document.getElementById('titulo');
  const imagen = document.getElementById('barramenu');
  const menu = document.getElementById('menu')
  let isDesplegableOpen = false;
  
  

  function cerrarDesplegable() {
    desplegable.style.height = '5em';
    menu.style.display = 'none'
    var scrollPosition = window.scrollY;

    var triggerPosition = 180; 
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
  function detectarDispositivoMovil() {
    isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  
  // Llamamos a la función de detección al cargar la página
  detectarDispositivoMovil();
  







