var navMain = document.querySelector('.page-header');
var navToggle = document.querySelector('.page-header__nav-toggle');

navMain.classList.remove('page-header__nav--nojs');

navToggle.addEventListener('click', function() {
  console.log('click');
  if (navMain.classList.contains('page-header__nav--closed')) {
    navMain.classList.remove('page-header__nav--closed');
    navMain.classList.add('page-header__nav--opened');
  } else {
    navMain.classList.add('page-header__nav--closed');
    navMain.classList.remove('page-header__nav--opened');
  }
});
