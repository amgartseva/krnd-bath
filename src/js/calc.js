'use strict'

const decrement = document.querySelector('.calculator__button_decrement'),
  increment = document.querySelector('.calculator__button_increment'),
  area = document.querySelector('.calculator__input_area')

increment.addEventListener('click', () => {
  if (area.value < 200) {
    area.innerText = area.value++
  }
})

decrement.addEventListener('click', () => {
  if (area.value > 1) {
    area.innerText = area.value--
  }
})

area.addEventListener('input', () => {
  if (area.value < 1) {
    area.value = null
  } else if (area.value > 200) {
    area.value = 200
  }
})

area.addEventListener('focus', () => {
  area.select()
})

let showmodal = document.querySelector('.calculator__showform')

showmodal.addEventListener('click', () => {
  let hiddenForm = document.querySelector('.calc-form')

  document.getElementById('focus-input').focus()
  hiddenForm.classList.remove('calc-form-hidden')
  showmodal.classList.add('calc-form-hidden')
})

// Функция рассчета
function calculate() {
  let output = {
    price: document.querySelector('.calculator__price'),
    hidden: document.querySelector('.calc-params'),
    hiddenPrice: document.querySelector('.calc-price'),
  }

  let repair = document.querySelector('input[name=type]:checked'), // Тип ремонта
    rooms = document.querySelector('input[name=rooms]:checked'), // Количество комнат
    apartment = document.querySelector('input[name=apt-type]:checked') // Тип жилья

  // Демонтаж
  let dismantling = {
    input: document.querySelector('input[name=dismantling]'),
    coeff: 0,
    value: 'Не нужен',
  }

  if (dismantling.input.checked) {
    dismantling.coeff = 1.1
    dismantling.value = 'Нужен'
  } else {
    dismantling.coeff = 1
    dismantling.value = 'Не нужен'
  }

  // Перепланировка
  let redevelopment = {
    input: document.querySelector('input[name=pereplan]'),
    coeff: 0,
    value: 'Не требуется',
  }

  if (redevelopment.input.checked) {
    redevelopment.coeff = 1.1
    redevelopment.value = 'Нужна'
  } else {
    redevelopment.coeff = 1
    redevelopment.value = 'Не требуется'
  }

  var totalPrice =
    9000 *
    area.value *
    redevelopment.coeff *
    dismantling.coeff *
    repair.dataset.coeff *
    apartment.dataset.coeff

  let newPrice = new Intl.NumberFormat().format(Math.trunc(totalPrice))

  output.price.innerText = newPrice

  var parameters = {
    price: newPrice,
    type: repair.dataset.value,
    apartment: apartment.dataset.value,
    redevelopment: redevelopment.value,
    dismantling: dismantling.value,
    area: area.value,
  }

  output.hidden.value = JSON.stringify(parameters)
}

let update = document.querySelectorAll('.update-price')
let changeButton = document.querySelectorAll('.calculator__button')

// Слушатель событий на input
update.forEach((element) => {
  element.addEventListener('input', calculate)
})

// Слушатель событий на кнопки + и -
changeButton.forEach((item) => {
  item.addEventListener('click', calculate)
})
