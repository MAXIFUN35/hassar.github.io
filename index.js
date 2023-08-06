
function onScroll() {
  var scrollPosition = window.scrollY;
  const viewportHeight = window.innerHeight * 0.01;
  const alturaEnVh = 20; // Puedes cambiar este valor a cualquier otra altura deseada
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
      desplegable.style.height = '50vh';
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
 detectarDispositivoMovil();
  

// observer img12


const img12 = document.getElementById('img12');
const lorem = document.getElementById('Lorem')
const cargarimg12 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      img12.style.animation = 'blur-in 0.6s linear both';
      console.log('hola');
      lorem.style.animation = 'blur-in 0.6s linear both';
    }
  })};
    const observador1 = new IntersectionObserver(cargarimg12, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    });
observador1.observe(img12);


