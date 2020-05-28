let burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
  let menu = document.querySelector('.mobile-nav');

  menu.classList.toggle('mobile-nav_active');
  burger.classList.toggle('burger_active');

  let navLink = document.querySelectorAll('.mobile-nav__link');

  navLink.forEach(element => {
    element.addEventListener('click', () => {
      menu.classList.remove('mobile-nav_active');
    });
  });
});
