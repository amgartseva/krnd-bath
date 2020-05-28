document.addEventListener('DOMContentLoaded', function() {
  const modalButtons = document.querySelectorAll('.open-modal'),
    overlay = document.querySelector('.dialog__bg'),
    closeButtons = document.querySelectorAll('.dialog__сlose');

  modalButtons.forEach(function(item) {
    item.addEventListener('click', function(e) {
      e.preventDefault();

      var modalId = this.getAttribute('data-modal'),
        modalElem = document.querySelector(
          '.dialog[data-modal="' + modalId + '"]'
        );

      modalElem.classList.add('dialog_active');
      overlay.classList.add('dialog__bg_active');
    }); // end click
  }); // end foreach

  closeButtons.forEach(function(item) {
    item.addEventListener('click', function(e) {
      var parentModal = this.closest('.dialog');

      parentModal.classList.remove('dialog_active');
      overlay.classList.remove('dialog__bg_active');
    });
  }); // end foreach

  document.body.addEventListener(
    'keyup',
    function(e) {
      var key = e.keyCode;

      if (key == 27) {
        document
          .querySelector('.dialog.dialog_active')
          .classList.remove('dialog_active');
        document
          .querySelector('.dialog__bg_active')
          .classList.remove('dialog__bg_active');
      }
    },
    false
  );

  overlay.addEventListener('click', function() {
    document
      .querySelector('.dialog.dialog_active')
      .classList.remove('dialog_active');
    this.classList.remove('dialog__bg_active');
  });
}); // end ready

// Modal submit

let form = document.querySelectorAll('.form-dialog');
form.forEach(element => {
  element.addEventListener('submit', e => {
    e.preventDefault();
    fetch('build/php/form-handler.php', {
      method: 'POST',
      body: new FormData(element)
    })
      .then(response => response)
      .then(function(json) {
        if (json.status === 200) {
          const close = document.querySelector('#close-success'),
            overlay = document.querySelector('.dialog__bg'),
            success = document.querySelector('.success');

          document
            .querySelector('.dialog.dialog_active')
            .classList.remove('dialog_active');

          success.classList.add('success_active');

          close.addEventListener('click', () => {
            success.classList.remove('success_active');
            overlay.classList.remove('dialog__bg_active');
          });

          overlay.addEventListener('click', function() {
            success.classList.remove('success_active');
            overlay.classList.remove('dialog__bg_active');
          });
        } else {
          console.log('Error');
        }
      })
      .catch(error => {
        console.error(error);
      });
  });
});

// Simple form submit

let formblockForm = document.querySelectorAll('.form-primary');
formblockForm.forEach(element => {
  element.addEventListener('submit', event => {
    event.preventDefault();
    fetch('build/php/form-handler.php', {
      method: 'POST',
      body: new FormData(element)
    })
      .then(response => response)
      .then(function(json) {
        if (json.status === 200) {
          const close = document.querySelector('#close-success'),
            overlay = document.querySelector('.dialog__bg'),
            success = document.querySelector('.success');

          success.classList.add('success_active');
          overlay.classList.add('dialog__bg_active');

          close.addEventListener('click', () => {
            success.classList.remove('success_active');
            overlay.classList.remove('dialog__bg_active');
          });

          overlay.addEventListener('click', function() {
            success.classList.remove('success_active');
            overlay.classList.remove('dialog__bg_active');
          });
        } else {
          console.log('Error');
        }
      })
      .catch(error => {
        console.error(error);
      });
  });
});
