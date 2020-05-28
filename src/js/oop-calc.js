/*class Calc {
  constructor(params) {
    this.dismantlingValue = params.values.dismantling;
    this.dismantlingCoeff = params.coeffs.dismantling;
    this.dismantlingInput = params.input.dismantling;
    this.redevelopmentValue = params.values.redevelopment;
    this.redevelopmentCoeff = params.coeffs.redevelopment;
    this.redevelopmentInput = params.input.redevelopment;
    this.repairInput = params.input.repair;
    this.apartment = params.input.apartment;
    this.area = params.input.area.value;
  }

  calcPrice() {}

  getPrice() {
    if (this.dismantlingInput.checked) {
      this.dismantlingCoeff = 1.1;
      this.dismantlingValue = 'Нужен';
    } else {
      this.dismantlingCoeff = 1;
      this.dismantlingValue = 'Не нужен';
    }

    if (this.redevelopmentInput.checked) {
      this.redevelopmentCoeff = 1.1;
      redevelopmentValue = 'Нужна';
    } else {
      this.redevelopmentCoeff = 1;
      redevelopmentValue = 'Не требуется';
    }

    return (
      15000 *
      this.area *
      this.redevelopmentCoeff *
      this.dismantlingCoeff *
      this.repairInput.dataset.coeff *
      this.apartment.dataset.coeff
    );
  }
}

let parameters = {
  output: {
    price: document.querySelector('.calculator__price'),
    hidden: document.querySelector('.calc-params')
  },
  input: {
    dismantling: document.querySelector('input[name=dismantling]'),
    repair: document.querySelector('input[name=type]:checked'),
    apartment: document.querySelector('input[name=apt-type]:checked'),
    redevelopment: document.querySelector('input[name=pereplan]'),
    area: document.querySelector('.calculator__input_area')
  },
  coeffs: {
    dismantling: 1,
    redevelopment: 1
  },
  values: {
    dismantling: 'Не требуется',
    redevelopment: 'Не требуется'
  }
};

const bathCalc = new Calc(parameters);

let update = document.querySelectorAll('.update-price');
let changeButton = document.querySelectorAll('.calculator__button');

// Слушатель событий на input
update.forEach(element => {
  element.addEventListener('input', bathCalc.getPrice());
});

// Слушатель событий на кнопки + и -
changeButton.forEach(item => {
  item.addEventListener('click', bathCalc.getPrice());
});
*/
