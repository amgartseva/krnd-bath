var mySwiper = new Swiper('.swiper-container', {
  simulateTouch: false,
  observer: true,
  observeSlideChildren: true,
  observeParents: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  preloadImages: false,
  lazy: {
    loadPrevNext: true
  }
});

let toggler = document.querySelectorAll('.portfolio__nav-item');
let categories = document.querySelectorAll('.portfolio__category');

toggler.forEach(element => {
  element.addEventListener('click', event => {
    for (let i = 0; i < toggler.length; i++) {
      toggler[i].classList.remove('portfolio__nav-item_active');
      element.classList.add('portfolio__nav-item_active');

      let dataNav = element.dataset.category,
        currentCategory = document.querySelector(
          '.portfolio__category[data-category="' + dataNav + '"]'
        );

      categories[i].classList.remove('portfolio__category_active');
      currentCategory.classList.add('portfolio__category_active');
    }
  });
});

document.querySelector('.portfolio').addEventListener('mousemove', () => {
  var activeCategory = document.querySelector('.portfolio__category_active'),
    activeProjects = activeCategory.querySelectorAll('.portfolio__project'),
    activeNav = activeCategory.querySelectorAll('.portfolio__subnav-item');

  activeNav.forEach(el => {
    el.addEventListener('click', event => {
      for (let k = 0; k < activeNav.length; k++) {
        activeNav[k].classList.remove('item-active');
        el.classList.add('item-active');

        let dataProject = el.dataset.project,
          currentProject = activeCategory.querySelector(
            '.portfolio__project[data-project="' + dataProject + '"]'
          );

        activeProjects[k].classList.remove('portfolio__project_active');
        currentProject.classList.add('portfolio__project_active');
      }
    });
  });
});
