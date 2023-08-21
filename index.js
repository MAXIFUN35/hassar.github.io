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
  const whaticon = document.querySelector('.whatimg')
  const whaticon2 = document.getElementById('whaticon2')
  const alto = header.offsetHeight;
  const alturaViewport = window.innerHeight;
  var degrade = document.getElementById('titulo__nav'); 

  if (alto < alturaEnPixels ){
    if (scrollPosition >= triggerPosition) {
        whaticon.style.transition = 'none';
        whaticon.style.visibility = 'visible'
        whaticon.style.animation = 'slide-left 0.2s linear both';
        whaticon2.style.visibility = 'visible';
        whaticon2.style.transition = 'none';
        whaticon2.style.animation = 'slide-left 0.1s linear both';
        header.style.backgroundColor = 'white';
        header.style.background = 'white';
        header.style.color = 'rgb(240, 158, 158)'
        barramenu1.style.color = 'rgb(240, 158, 158)';
        barramenu2.style.color = 'rgb(240, 158, 158)';
        barramenu3.style.color = 'rgb(240, 158, 158)';
        barramenu4.style.color = 'rgb(240, 158, 158)';
        imgcarrito1.src = 'media/carrito.png';
    } else {
        whaticon.style.visibility = 'hidden'
        whaticon.style.transition = 'all ease 1s';
        whaticon.style.animation = 'slide-left2 0.3s linear both';
        whaticon2.style.visibility = 'visible';
        whaticon2.style.transition = 'all ease 3s';
        whaticon2.style.animation = 'slide-left2 0.1s linear both';
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
    whaticon.style.visibility = 'visible';
    whaticon.style.transition = 'none';
    whaticon.style.animation = 'slide-left 0.3s linear both';
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
      whaticon.style.visibility = 'hidden';
      whaticon.style.transition = 'all ease 3s';
      whaticon.style.animation = 'slide-left2 0.3s linear both';
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
const cargarimg12 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      img12.style.animation = 'blur-in 0.6s linear both';
      console.log('hola');
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


// observer img12


const li1 = document.getElementById('art2_div0-li1');
const li5 = document.getElementById('art2_div0-li5');
const li2 = document.getElementById('art2_div0-li2');
const li6 = document.getElementById('art2_div0-li6');
const li3 = document.getElementById('art2_div0-li3');
const li7 = document.getElementById('art2_div0-li7');
const li4 = document.getElementById('art2_div0-li4');
const li8 = document.getElementById('art2_div0-li8');
const divulti = document.getElementById('article2__div1')

// list1
const cargarlist1 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      li1.style.animation = 'slide-top2 1s linear both';
      li5.style.animation = 'slide-top2 1s linear both';
      console.log('hola');
    }
  })};
    const obserlist1 = new IntersectionObserver(cargarlist1, {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    });
obserlist1.observe(li2);


// list2


const cargarlist2 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      li2.style.animation = 'slide-top2 1s linear both';
      li6.style.animation = 'slide-top2 1s linear both';
      console.log('hola');
    }
  })};
    const obserlist2 = new IntersectionObserver(cargarlist2, {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    });
obserlist2.observe(li7);


// list3


const cargarlist3 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      li3.style.animation = 'slide-top2 1s linear both';
      li7.style.animation = 'slide-top2 1s linear both';
      console.log('hola');
    }
  })};
    const obserlist3= new IntersectionObserver(cargarlist3, {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    });
obserlist3.observe(li8);


// list4


const cargarlist4 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      li4.style.animation = 'slide-top2 1s linear both';
      li8.style.animation = 'slide-top2 1s linear both';
      console.log('hola');
    }
  })};
    const obserlist4= new IntersectionObserver(cargarlist4, {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    });
obserlist4.observe(divulti);