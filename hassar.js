// hassar.js

document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu__ind--ul2');
  
    menuBtn.addEventListener('click', function () {
      menu.classList.toggle('show');
    });
  });
    