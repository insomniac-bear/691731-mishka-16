var navMain = document.querySelector('.header__nav');
var navList = navMain.querySelector('.header__nav-list');
var navToggle = document.querySelector('.header__nav-toggle');
var popUp = document.querySelector('.pop-up');
var btnOrder = document.querySelector('.button__order');

var form = document.querySelector('ordering-form');
var inputName = document.querySelector('[name=username]');
var inputSurname = document.querySelector('[name=surname]');
var inputEmail = document.querySelector('[name=e-mail]');
var inputPhoneNumber = document.querySelector('[name=phone-number]');
var buttonForm = document.querySelector('.button--form');

navMain.classList.remove('header__nav--opened');
navList.classList.remove('header__nav-list--opened');

if (popUp) {
  var popUpBox = popUp.querySelector('.pop-up__box');
  popUp.classList.remove('pop-up__nojs');
}

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('header__nav--opened')) {
    navMain.classList.remove('header__nav--opened');
    navList.classList.remove('header__nav-list--opened');
  } else {
    navMain.classList.add('header__nav--opened');
    navList.classList.add('header__nav-list--opened');
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
        return;
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
      return;
    };

    target = target.parentNode;
  };
});

window.addEventListener('keydown', function(e) {
  if (e.keyCode === 27) {
    e.preventDefault();
    if (popUp) {
      if (popUp.classList.contains('pop-up__open')) {
        popUp.classList.remove('pop-up__open');
      };
    };
  }
});
