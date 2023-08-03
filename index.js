// hassar.js


function onScroll() {
  var scrollPosition = window.scrollY;

  var triggerPosition = 180; 
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

//*funciones para disp moviles
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function executeMobileActions() {
  const menu = document.getElementById('menu active');
  const titulo = document.getElementById('titulo')
  menu.classList.toggle('active');
  titulo.classList.toggle('active');
}

function closeMobileMenu() {
  
  const titulo = document.getElementById('titulo')
  const menu = document.getElementById('menu active');
  
  menu.classList.remove('active');
  titulo.classList.remove('active');
  
}

const menuButton = document.getElementById('btnmenu');

menuButton.addEventListener('click', (event) => {
  event.preventDefault(); // Evitar que el enlace redireccione
  if (isMobileDevice(true)) {
    executeMobileActions();
  }

});
const mobileLinks = document.querySelectorAll('#menuli a');
mobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (isMobileDevice(false)) {
      closeMobileMenu();
    }
  });
});
document.body.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && event.target !== menuButton) {
    menu.classList.remove('active');
  }
});






