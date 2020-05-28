// Клик по телефону в хэдере
function headerPhoneClicked() {
  gtag('event', 'tel', {
    event_category: 'calls',
    event_label: 'tel-header',
  })
  ym(64389454, 'reachGoal', 'van-tel-header')
}

// Форма в первом экране
function firstFormSubmit() {
  gtag('event', 'submit', {
    event_category: 'form',
    event_label: 'first',
  })

  ym(64389454, 'reachGoal', 'van-first-form')
}

// Форма в калькуляторе
function calcFormSubmit(event) {
  // Парсим json объект параметров калькулятора
  const params = JSON.parse(
    event.target.querySelector('.calc-params').value
  ) || { price: 'Цена не указана' }

  gtag('event', 'submit', {
    event_category: 'form',
    event_label: 'van-calc',
  })

  ym(64389454, 'reachGoal', 'van-calc')
}

// Форма после FAQ
function faqFormSubmit() {
  gtag('event', 'submit', {
    event_category: 'form',
    event_label: 'faq',
  })

  ym(64389454, 'reachGoal', 'van-form-consult')
}

function invoiceFormSubmit() {
  gtag('event', 'submit', {
    event_category: 'form',
    event_label: 'invioce',
  })

  ym(64389454, 'reachGoal', 'van-form-invioce')
}

//Переход к калькулятору
function toCalcGoal() {
  gtag('event', 'click', {
    event_category: 'retargeting',
    event_label: 'to-calc',
  })

  ym(64389454, 'reachGoal', 'van-to-calc')
}

// Форма с замером
function zamerFormSubmit() {
  gtag('event', 'submit', {
    event_category: 'form',
    event_label: 'form-zamer',
  })

  ym(64389454, 'reachGoal', 'van-form-zamer')
}

// Клик по телефону в футере
function footerPhoneClicked() {
  gtag('event', 'tel', {
    event_category: 'calls',
    event_label: 'tel-footer',
  })

  ym(64389454, 'reachGoal', 'van-tel-footer')
}
