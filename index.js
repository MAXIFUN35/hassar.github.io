// hassar.js


function onScroll() {
  var scrollPosition = window.scrollY;
  const viewportHeight = window.innerHeight * 0.01;
  const alturaEnVh = 10; // Puedes cambiar este valor a cualquier otra altura deseada
  const alturaEnPixels = viewportHeight * alturaEnVh;
  var triggerPosition = 280; 
  var header = document.getElementById('titulo');
  const alto = header.offsetHeight;
  const alturaViewport = window.innerHeight;
  var degrade = document.getElementById('titulo__nav'); 

  if (alto < alturaEnPixels ){
    if (scrollPosition >= triggerPosition) {
        header.style.backgroundColor = 'white';
        header.style.background = 'white';
        degrade.style.background = 'linear-gradient(to bottom, rgba(0, 0, 0, 0),rgba(0, 0, 0, 0))';

    } else {
        header.style.backgroundColor = 'transparent';
        header.style.animation = '.3s';
        degrade.style.backgroundImage = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.1),  rgba(0, 0, 0, 0.0))';
    }
  }

}
window.addEventListener('scroll', onScroll);
// contacto
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
  const menu = document.getElementById('menu');
  let isDesplegableOpen = false;
  var degrade = document.getElementById('titulo__nav');
  

  function cerrarDesplegable() {
    desplegable.style.height = '3em';
    menu.style.display = 'block';
    var scrollPosition = window.scrollY;
    var triggerPosition = 180; 
    var header = document.getElementById('titulo');
    const alto = header.offsetHeight;
    const viewportHeight = window.innerHeight * 0.01;
    const alturaEnVh = 10; // Puedes cambiar este valor a cualquier otra altura deseada
    const alturaEnPixels = viewportHeight * alturaEnVh;

      if (scrollPosition >= triggerPosition) {
          header.style.backgroundColor = 'white';
          desplegable.style.height = '3em';
          degrade.style.background = 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))';
      } else {
          header.style.backgroundColor = 'transparent';
          header.style.animation = '.3s';
          desplegable.style.height = '3em';
          degrade.style.backgroundImage = 'linear-gradient(to bottom, rgba(0, 0, 0, .1), rgba(0, 0, 0, .01))';
      }
    isDesplegableOpen = false;
        
    if(alto < alturaEnPixels){
      menu.style.display = 'none';
    }
  }
  var header = document.getElementById('titulo');
  checkbox.addEventListener('change', function() {
    if(isMobileDevice){
     if (checkbox.checked) {
      desplegable.style.height = '40vh';
      desplegable.style.backgroundColor = 'white';
      desplegable.style.transition = 'ease .3s';
      menu.style.display = 'block';
      isDesplegableOpen = true;
      degrade.style.background = 'linear-gradient(to bottom, rgba(255, 255, 255, 0),rgba(255, 255, 255, 0))';
     } else {
      cerrarDesplegable();
     }
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
  

// observer

const div1 = document.getElementById('');

const cargardiv1 = () => {
  div1.style.backgroundColor = 'rgb(240, 158, 158)';
  console.log('hola')
  div1.style.transition = 'ease 10s'
};

const observador1 = new IntersectionObserver(cargardiv1, {
  roo: null,
  rootMargin: '-50%',
  threshold: 0.1,

});
observador1.observe(div1);


