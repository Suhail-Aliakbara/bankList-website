'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////

const header = document.querySelector('header');

const cookieMessage = document.createElement('div');
cookieMessage.classList.add('cookie-message');
cookieMessage.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(cookieMessage);
header.append(cookieMessage);

const btnCloseCookie = document.querySelector('.btn--close-cookie');
// console.log(btnCloseCookie);
btnCloseCookie.addEventListener('click', function () {
  cookieMessage.remove();
  cookieMessage.parentElement.removeChild(cookieMessage);
});

cookieMessage.style.backgroundColor = '#37383d';
cookieMessage.style.width = '120%';

//----Scroll LEARN MORE Button----

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1Coords = section1.getBoundingClientRect();
  // console.log(s1Coords);

  // console.log(e.target.getBoundingClientRect());

  // console.log('current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //Scrolling
  // window.scrollTo(
  //   s1Coords.left + window.pageXOffset,
  //   s1Coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1Coords.left + window.pageXOffset,
  //   top: s1Coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  //Modern way of doing
  section1.scrollIntoView({
    behavior: 'smooth',
  });
});

//----------------Navigation-------------------
/*
document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
*/

//Event deligation
// 1. Add event listener to common parent element
// 2. determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  //Matching Strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    // console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  }
});
/////////////////////////
//Operations
const tabsContainer = document.querySelector('.operations__tab-container');
const operationTab = document.querySelectorAll('.operations__tab');
const operationContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);

  //Guard clause
  if (!clicked) return;

  // Removing the active classes
  operationTab.forEach(e => e.classList.remove('operations__tab--active'));
  operationContent.forEach(e =>
    e.classList.remove('operations__content--active')
  );

  //Active tab
  clicked.classList.add('operations__tab--active');

  //Active Content area
  // console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
/////////////////////
// menu fade animation

const handleHover = function (e) {
  // console.log(this);
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = e.target.closest('.nav').querySelectorAll('.nav__link');
    const logo = e.target.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

/*-------------------------------------------------
console.log(cookieMessage.style.height);
console.log(getComputedStyle(cookieMessage).height);
console.log(getComputedStyle(cookieMessage).color);

cookieMessage.style.height =
  Number.parseFloat(getComputedStyle(cookieMessage).height) + 30 + 'px';

console.log(cookieMessage.style.height);

document.documentElement.style.setProperty('--color-primary', 'orangered');

//Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'this is banklist logo';

//Non-Standard
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'MSA');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

//Data Attributes
console.log(logo.dataset.versionName);

//Classes
logo.classList.add('any', 'anyNumberOfClasses');
logo.classList.remove('any');
logo.classList.toggle('any');
logo.classList.contains('any');

-------------------------------------------*/

// Events in JS
/*------------------------------------------
const h1 = document.querySelector('h1');

const alerth1 = function (e) {
  alert('you have clicked the mouse');
};

h1.addEventListener('mouseenter', alerth1);
setTimeout(() => h1.removeEventListener('mouseenter', alerth1), 3000);

// h1.onmouseenter = alerth1;

//1.Capturing phase, 2.target phase, 3.bubbling phase
//rgb(255,255,255)

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + 1);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('nav-link', e.target, e.currentTarget);
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('container', e.target, e.currentTarget);
});
document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('navbar', e.target, e.currentTarget);
  },
  true
);
--------------------------*/
//Dom traversing
/*------------------------------------
const h1 = document.querySelector('h1');

console.log(h1.querySelectorAll('.highlight')); //for all children (childrens children ...)
console.log(h1.childNodes);
console.log(h1.children); // only for direct children

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.backgroundColor = 'orangered';

console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideway
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
---------------------------------*/
