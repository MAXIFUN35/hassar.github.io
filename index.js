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

//*let currentPosition = 0;
//*const carouselTrack = document.querySelector('.div__div1');

//*function slideToNext() {
 //* const containerWidth = document.querySelector('.div').offsetWidth;
 //* currentPosition = (currentPosition - containerWidth) % (carouselTrack.offsetWidth);
 //* carouselTrack.style.transform = `translateX(${currentPosition}px)`;
//*}

//*setInterval(slideToNext, 4000); // Cambia la imagen cada 3 segundos (ajusta el valor según tus necesidades)
// Función para verificar si el usuario está en un dispositivo móvil

  // Obtenemos los elementos necesarios del DOM
  const checkbox = document.getElementById('checkmenu');
  const desplegable = document.getElementById('titulo');

  // Añadimos un evento de cambio al checkbox
  checkbox.addEventListener('change', function() {
    // Si el checkbox está marcado, mostramos el desplegable
    if (checkbox.checked) {
      desplegable.style.height = '100vh';
      desplegable.style.backgroundColor = 'white';
    } else {
      desplegable.style.height = '100vh';
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
    }
  });







