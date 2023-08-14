

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
      opaco.style.display = 'none'
      desplegable.style.height = '3.5em';      
      var scrollPosition = window.scrollY;
      var triggerPosition = 180; 
      var eslogan = document.getElementById('titulo');
      const alto = eslogan.offsetHeight;
      const viewportHeight = window.innerHeight * 0.01;
      const alturaEnVh = 10; // Puedes cambiar este valor a cualquier otra altura deseada
      const alturaEnPixels = viewportHeight * alturaEnVh;
  
      isDesplegableOpen = false;
          
      if(alto < alturaEnPixels){
        menu.style.display = 'none';
      }
    };
    var eslogan = document.getElementById('titulo');
    checkbox.addEventListener('change', function() {
      if(isMobileDevice){
       if (checkbox.checked) {
        opaco.style.display = 'block';
        opaco.style.transition = '1s';
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