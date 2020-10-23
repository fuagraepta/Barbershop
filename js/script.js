`use strict`;

//modal-login
const loginLink = document.querySelector(`.login-link`);
const popup = document.querySelector(`.modal-login`);
const login = popup.querySelector(`#user-login`);
const password = popup.querySelector(`#user-password`);
const loginForm = popup.querySelector(`.login-form`);
let isStorageSupport = true;
const storage = ``;

try {
  storage = localStorage.getItem(`login`);
} catch (err) {
  isStorageSupport = false;
};

const openPopup = (evt) => {
  evt.preventDefault();
  popup.classList.add(`modal-show`);

  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  };
};

loginLink.addEventListener(`click`, openPopup);

const modalClose = popup.querySelector(`.modal-close`);

const closePopup = (evt) => {
  evt.preventDefault();
  popup.classList.remove(`modal-show`);
  popup.classList.remove(`modal-error`);
};

modalClose.addEventListener(`click`, closePopup);

loginForm.addEventListener(`submit`, (evt) => {
  if(!login.value || !password.value) {
    evt.preventDefault();
    popup.classList.remove(`modal-error`);
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add(`modal-error`);
  } else {
    if (isStorageSupport) {
      localStorage.setItem(`login`, login.value);
    }
  };
});

//modal-map
const mapLink = document.querySelector(`.contacts-button-map`);
const map = document.querySelector(`.modal-map`);
const mapCloseButton = map.querySelector(`.modal-close`);

const openMap = (evt) => {
  evt.preventDefault();
  map.classList.add(`modal-show`);
}

mapLink.addEventListener(`click`, openMap);

const closeMap = (evt) => {
  evt.preventDefault();
  map.classList.remove(`modal-show`);
}

mapCloseButton.addEventListener(`click`, closeMap);

//When pressing ESC close modal window
window.addEventListener(`keydown`, (evt) => {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    closePopup(evt)
    closeMap(evt);
  };
});
