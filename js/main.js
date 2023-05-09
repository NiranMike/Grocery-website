const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle');

/*========== Show Menu =========*/
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
  });
}
