
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
  
    function cerrarDesplegable() {
      opaco.style.zIndex = '-1';
      opaco.style.opacity = '0'
      desplegable.style.height = '3.5em';
      menu.style.display = 'none';
      var scrollPosition = window.scrollY;
      var triggerPosition = 180; 
      const alto = eslogan.offsetHeight;
      const viewportHeight = window.innerHeight * 0.01;
      const alturaEnVh = 10; // Puedes cambiar este valor a cualquier otra altura deseada
      const alturaEnPixels = viewportHeight * alturaEnVh;
  
        if (scrollPosition >= triggerPosition) {
            desplegable.style.backgroundColor = 'white';
            desplegable.style.height = '3.5em';
        } else {
            desplegable.style.backgroundColor = 'white'
            desplegable.style.animation = '.3s';
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
        opaco.style.zIndex = '5';
        opaco.style.bottom = '0';
        opaco.style.opacity = '.7'
        desplegable.style.height = '50vh';
        desplegable.style.backgroundColor = 'white';
        desplegable.style.transition = 'ease .3s';
        menu.style.display = 'grid';
        isDesplegableOpen = true;
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



// zoom de imagen


  const imageContainer = document.querySelector(".div-img");
  const image = document.querySelector(".img");
  let zoomLevel = 1;

  imageContainer.addEventListener("mousemove", (e) => {
    const { left, top, width, height } = imageContainer.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    const maxZoom = 3;
    const minZoom = 1;

    zoomLevel = minZoom + (maxZoom - minZoom) * (1 - (Math.min(1, Math.sqrt(x ** 2 + y ** 2))));

    const translateX = -x * (zoomLevel - 1) * 100;
    const translateY = -y * (zoomLevel - 1) * 100;

    const blurIntensity = (zoomLevel - 1) * 10  ;

    image.style.transform = `scale(${zoomLevel}) translate(${translateX}%, ${translateY}%)`;
    image.style.filter = `blur(${blurIntensity}px)`;
  });

  imageContainer.addEventListener("mouseleave", () => {
    zoomLevel = 1;
    image.style.transform = `scale(${zoomLevel})`;
    image.style.filter = "blur(0)";
  });


// compartir animacion


const element = document.querySelector(".comp");

function ejecutarAnimacion() {
  element.classList.add("compa");
  setTimeout(() => {
    element.classList.remove("compa");
  }, 2000); // 2000 milisegundos = 2 segundos (tiempo de duración de la animación)
}

ejecutarAnimacion(); // Ejecuta la animación al cargar la página
setInterval(ejecutarAnimacion, 5000); // Ejecuta la animación cada 5 segundos

//