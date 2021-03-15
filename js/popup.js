const btnContacts = document.querySelector(".button--contacts");
const popupForm = document.querySelector(".modal--form");
const btnClose = document.querySelector(".button--close");
const nameUser = document.querySelector(".name__input");
const addressUser = document.querySelector(".address__input");
const textLetter = document.querySelector(".letter__text");
const formData = document.querySelector(".form__letter");

let isStorageSupport = true;
let storageName = "";
let storageAddress = "";

try {
  storageName = localStorage.getItem("name");
  storageAddress = localStorage.getItem("address");
} catch (err) {
  isStorageSupport = false;
}

btnContacts.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupForm.classList.add("modal--form--show");
  if (storageName && storageAddress) {
    nameUser.value = storageName;
    addressUser.value = storageAddress;
    textLetter.focus();
  } else {
    nameUser.focus();
  }
});

btnClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupForm.classList.remove("modal--form--show");
  popupForm.classList.remove("modal--error");
});

formData.addEventListener("submit", function (evt) {
  if (!nameUser.value || !addressUser.value || !textLetter.value) {
    evt.preventDefault();
    popupForm.classList.remove("modal--error");
    popupForm.offsetWidth = popupForm.offsetWidth;
    popupForm.classList.add("modal--error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", nameUser.value);
      localStorage.setItem("address", addressUser.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupForm.classList.contains("modal--form--show")) {
      evt.preventDefault();
      popupForm.classList.remove("modal--form--show");
      popupForm.classList.remove("modal--error");
    }
  }
});
