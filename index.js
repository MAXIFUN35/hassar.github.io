// scroll para la barra superior
function onScroll() {
  var scrollPosition = window.scrollY;
  const viewportHeight = window.innerHeight * 0.01;
  const alturaEnVh = 20;
  const alturaEnPixels = viewportHeight * alturaEnVh;
  var triggerPosition = 280; 
  var header = document.getElementById('titulo');
  var barramenu1 = document.getElementById('barramenu__a');
  var barramenu2 = document.getElementById('barramenu__a2');
  var barramenu3 = document.getElementById('barramenu__a3');
  var barramenu4 = document.getElementById('barramenu__a4');
  var imgcarrito1 = document.getElementById('imgcarrito1')
  const whaticon = document.getElementById('whaticon')
  const whaticon2 = document.getElementById('whaticon2')
  const alto = header.offsetHeight;
  const alturaViewport = window.innerHeight;
  var degrade = document.getElementById('titulo__nav'); 

  if (alto < alturaEnPixels ){
    if (scrollPosition >= triggerPosition) {
        whaticon.style.opacity = '1';
        whaticon.style.transition = 'none';
        whaticon.style.animation = 'slide-left 0.3s linear both';
        whaticon2.style.opacity = '1';
        whaticon2.style.transition = 'none';
        whaticon2.style.animation = 'slide-left 0.5s linear both';
        header.style.backgroundColor = 'white';
        header.style.background = 'white';
        header.style.color = 'rgb(240, 158, 158)'
        barramenu1.style.color = 'rgb(240, 158, 158)';
        barramenu2.style.color = 'rgb(240, 158, 158)';
        barramenu3.style.color = 'rgb(240, 158, 158)';
        barramenu4.style.color = 'rgb(240, 158, 158)';
        imgcarrito1.src = 'media/carrito.png';
    } else {
        whaticon.style.opacity = '0';
        whaticon.style.transition = 'all ease 3s';
        whaticon.style.animation = 'slide-left2 0.3s linear both';
        whaticon2.style.opacity = '0';
        whaticon2.style.transition = 'all ease 3s';
        whaticon2.style.animation = 'slide-left2 0.5s linear both';
        header.style.backgroundColor = 'transparent';
        header.style.color = 'rgb(255, 255, 255)';
        header.style.animation = '.1s';
        barramenu1.style.color = 'rgb(255, 255, 255)';
        barramenu2.style.color = 'rgb(255, 255, 255)';
        barramenu3.style.color = 'rgb(255, 255, 255)';
        barramenu4.style.color = 'rgb(255, 255, 255)';
        imgcarrito1.src = 'media/carrito1.png';
    }
  }


}
window.addEventListener('scroll', onScroll);


// eslogan scroll


function onScroll1() {
  var scrollPosition = window.scrollY;
  const viewportHeight = window.innerHeight * 0.01;
  const alturaEnVh = 20;
  const alturaEnPixels = viewportHeight * alturaEnVh;
  var triggerPosition = 150; 
  var eslogan = document.getElementById('eslogan');
  var eslogan1 = document.getElementById('eslogan1');
  const alto = eslogan.offsetHeight;
  const alturaViewport = window.innerHeight;

  if (alto < alturaEnPixels ){
    if (scrollPosition >= triggerPosition) {
        eslogan.style.color = 'transparent';
        eslogan1.style.color = 'transparent';
    } else {
        eslogan.style.color = 'white';
        eslogan1.style.color = 'white';
    }
  }


}
window.addEventListener('scroll', onScroll1);


// contacto

function scrollToSection() {

  var destinationElement = document.getElementById('contacto1');

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
  const opaco = document.getElementById('opaco');
  const whaticon = document.getElementById('whaticon')
  const whaticon2 = document.getElementById('whaticon2')

  function cerrarDesplegable() {
    whaticon.style.opacity = '1';
    whaticon.style.transition = 'none';
    whaticon.style.animation = 'slide-left 0.3s linear both';
    whaticon2.style.opacity = '1';
    whaticon2.style.transition = 'none';
    whaticon2.style.animation = 'slide-left 0.3s linear both';
    opaco.style.zIndex = '-1';
    opaco.style.opacity = '0'
    desplegable.style.height = '3.5em';
    menu.style.display = 'none';
    var scrollPosition = window.scrollY;
    var triggerPosition = 180; 
    var eslogan = document.getElementById('titulo');
    const alto = eslogan.offsetHeight;
    const viewportHeight = window.innerHeight * 0.01;
    const alturaEnVh = 10; // Puedes cambiar este valor a cualquier otra altura deseada
    const alturaEnPixels = viewportHeight * alturaEnVh;

      if (scrollPosition >= triggerPosition) {
          eslogan.style.backgroundColor = 'white';
          desplegable.style.height = '3.5em';
      } else {
          eslogan.style.backgroundColor = 'transparent';
          eslogan.style.animation = '.3s';
          desplegable.style.height = '3.5em';
      }
    isDesplegableOpen = false;
        
    if(alto < alturaEnPixels){
      menu.style.display = 'none';
    }
  }
  var eslogan = document.getElementById('titulo');
  checkbox.addEventListener('change', function() {
    if(isMobileDevice){
     if (checkbox.checked) {
      whaticon.style.opacity = '0';
      whaticon.style.transition = 'all ease 3s';
      whaticon.style.animation = 'slide-left2 0.3s linear both';
      whaticon2.style.opacity = '0';
      whaticon2.style.transition = 'all ease 3s';
      whaticon2.style.animation = 'slide-left2 0.5s linear both';
      opaco.style.zIndex = '5';
      opaco.style.bottom = '0';
      opaco.style.opacity = '.7'
      desplegable.style.height = '50vh';
      desplegable.style.backgroundColor = 'white';
      desplegable.style.transition = 'ease .3s';
      menu.style.display = 'grid';
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
      threshold: 0.9,
    });
observador1.observe(img12);


// rotacion automatica


const imageUrls = [
  'media/torta2.jpg',
  'media/torta3.jpg',
  'media/torta4.jpg'
]; // Agrega aquí las URL de las imágenes

const imageContainer = document.getElementById('img11');
let currentIndex = 0;

function changeBackgroundImage() {
  imageContainer.style.backgroundImage = `url(${imageUrls[currentIndex]})`;
  imageContainer.style.transition = 'slide-top 0.5s linear both'
  currentIndex = (currentIndex + 1) % imageUrls.length;
}

changeBackgroundImage(); // Cambia la imagen al cargar la página

setInterval(changeBackgroundImage, 5000);


// parrallax


// const parallaxBg = document.querySelector('.article2__div0--p-2');

// window.addEventListener('scroll', () => {
  // const yOffset = window.pageYOffset;
  // parallaxBg.style.transform = `translateY(-${pageYOffset * 0.1}px)`; /* Ajusta el factor de velocidad */
// });



const parallaxItems = document.querySelectorAll('.article2__div0--ul-2');

document.addEventListener('scroll', function() {
  const yOffset = window.pageYOffset;
  parallaxItems.forEach(item => {
    const parallaxOffset = yOffset * 0.1; /* Ajusta el factor de velocidad */
    item.style.transform = `translateY(${parallaxOffset}px)`;
  });
});



