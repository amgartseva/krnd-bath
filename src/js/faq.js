let faqs = document.querySelectorAll('.faq__list-item');
let faqsQuantity = faqs.length;
let buttonMore = document.querySelector('.faq__more');

faqs.forEach(element => {
  element.addEventListener('click', () => {
    element.classList.toggle('faq__list-item_active');
  });
});

for (let i = 3; i < faqsQuantity; i++) {
  faqs[i].classList.add('faq__list-item_disabled');
}

buttonMore.addEventListener('click', () => {
  for (let i = 3; i < faqsQuantity; i++) {
    faqs[i].classList.remove('faq__list-item_disabled');
    buttonMore.classList.add('faq__more_disabled');
  }
});
