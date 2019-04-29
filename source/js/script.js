var navMain = document.querySelector('.page-header');
var navToggle = document.querySelector('.page-header__nav-toggle');
var popUp = document.querySelector('.pop-up');
var btnOrder = document.querySelector('.button__order');

var form = document.querySelector('ordering-form');
var inputName = document.querySelector('[name=username]');
var inputSurname = document.querySelector('[name=surname]');
var inputEmail = document.querySelector('[name=e-mail]');
var inputPhoneNumber = document.querySelector('[name=phone-number]');
var buttonForm = document.querySelector('.button--form');

navMain.classList.remove('page-header__nav--nojs');
if (popUp) {
  popUp.classList.remove('pop-up__nojs');
}

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('page-header__nav--closed')) {
    navMain.classList.remove('page-header__nav--closed');
    navMain.classList.add('page-header__nav--opened');
  } else {
    navMain.classList.add('page-header__nav--closed');
    navMain.classList.remove('page-header__nav--opened');
  }
});

document.addEventListener("click", function (e) {
  var target = e.target;

  while (target !== document) {
    if (target.classList.contains("button__order") || target.classList.contains("catalog__link")) {
      e.preventDefault;
      popUp.classList.add('pop-up__open');
      return;
    };

    if (popUp) {
      if (popUp.classList.contains('pop-up__open')) {
        if (target == popUp) {
          popUp.classList.remove('pop-up__open');
        };
      };
    };

    if (target == buttonForm) {
      if (!inputName.value ) {
        e.preventDefault();
        inputName.classList.add("ordering-form__error");
      };
      if (!inputSurname.value ) {
        e.preventDefault();
        inputSurname.classList.add("ordering-form__error");
      };
      if (!inputPhoneNumber.value ) {
        e.preventDefault();
        inputPhoneNumber.classList.add("ordering-form__error");
      };
      if (!inputEmail.value ) {
        e.preventDefault();
        inputEmail.classList.add("ordering-form__error");
      };
    };

    target = target.parentNode;
  };
});
