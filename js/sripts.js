// (() => {
//   const refs = {
//     // Додати атрибут data-modal-open на кнопку відкриття
//     openModalBtn: document.querySelector('[data-menu-open]'),
//     // Додати атрибут data-modal-close на кнопку закриття
//     closeModalBtn: document.querySelector('[data-menu-close]'),
//     // Додати атрибут data-modal на бекдроп модалки
//     modal: document.querySelector('[data-menu]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
//     refs.modal.classList.toggle('is-open');
//   }
// })();

const modal = document.querySelector('.backdrop');
const modalForm = document.querySelector('.modal-form');
const reviewBtn = document.querySelector('.reviews-button');
const closeModalBtn = document.querySelector('.modal-close-btn-icon');

reviewBtn.addEventListener('click', () => {
  modal.classList.add('is-open');
});
closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('is-open');
});
window.addEventListener('click', event => {
  if (event.target === modal) {
    modal.classList.remove('is-open');
  }
});
modalForm.addEventListener('submit', event => {
  event.preventDefault();
  modalForm.reset();
});

const footerForm = document.querySelector('.footer-form');
const footerBtn = document.querySelector('.subs-button');

footerForm.addEventListener('submit', event => {
  event.preventDefault();
  footerForm.reset();
  footerBtn.blur();
});

const mobileMenu = document.querySelector('.mobile-menu');
const openMenuBtn = document.querySelector('.open-mob-menu');
const closeMenuBtn = document.querySelector('.mob-menu-close-icon');
const menuLinks = document.querySelectorAll('.mob-menu-nav-link');

openMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
});
closeMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
});
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
  });
});
