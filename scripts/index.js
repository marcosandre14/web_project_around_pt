/* --- CONFIGURAÇÃO E DADOS --- */
const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

/* --- SELEÇÃO DE ELEMENTOS --- */
const cardsContainer = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card-template").content;

const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");

const editPopup = document.querySelector("#edit-popup");
const editForm = editPopup.querySelector("#edit-profile-form");
const nameInput = editPopup.querySelector(".popup__input_type_name");
const descriptionInput = editPopup.querySelector(
  ".popup__input_type_description",
);

const newCardPopup = document.querySelector("#new-card-popup");
const newCardForm = newCardPopup.querySelector("#new-card-form");
const placeNameInput = newCardPopup.querySelector(
  ".popup__input_type_card-name",
);
const linkInput = newCardPopup.querySelector(".popup__input_type_url");

const imagePopup = document.querySelector("#image-popup");
const popupImage = imagePopup.querySelector(".popup__image");
const popupCaption = imagePopup.querySelector(".popup__caption");

/* --- FUNÇÕES DE MODAL --- */

function openModal(modal) {
  modal.classList.add("popup_is-opened");
  document.addEventListener("keydown", closeByEscape);
}

function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closeByEscape);
}

function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");
    if (openedPopup) closeModal(openedPopup);
  }
}

// Fechamento por Overlay
const popups = document.querySelectorAll(".popup");
popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (
      evt.target.classList.contains("popup_is-opened") ||
      evt.target.classList.contains("popup__close")
    ) {
      closeModal(popup);
    }
  });
});

/* --- LÓGICA DE REDEFINIÇÃO --- */

function resetFormValidation(formElement, config) {
  const inputList = Array.from(
    formElement.querySelectorAll(config.inputSelector),
  );
  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, config); // Chama do validate.js
  });

  toggleButtonState(inputList, buttonElement); // Chama do validate.js
}

/* --- LÓGICA DOS CARTÕES --- */

function getCardElement(name, link) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");

  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;

  cardElement
    .querySelector(".card__like-button")
    .addEventListener("click", (evt) => {
      evt.target.classList.toggle("card__like-button_is-active");
    });

  cardElement
    .querySelector(".card__delete-button")
    .addEventListener("click", (evt) => {
      evt.target.closest(".card").remove();
    });

  cardImage.addEventListener("click", () => {
    popupImage.src = link;
    popupImage.alt = name;
    popupCaption.textContent = name;
    openModal(imagePopup);
  });

  return cardElement;
}

function renderCard(name, link) {
  cardsContainer.prepend(getCardElement(name, link));
}

initialCards.forEach((item) => renderCard(item.name, item.link));

/* --- HANDLERS E OUVINTES --- */

editForm.addEventListener("submit", (evt) => {
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closeModal(editPopup);
});

newCardForm.addEventListener("submit", (evt) => {
  renderCard(placeNameInput.value, linkInput.value);
  newCardForm.reset();
  closeModal(newCardPopup);
});

editButton.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
  resetFormValidation(editForm, validationConfig);
  openModal(editPopup);
});

addButton.addEventListener("click", () => {
  newCardForm.reset();
  resetFormValidation(newCardForm, validationConfig);
  openModal(newCardPopup);
});

/* --- INICIALIZAÇÃO --- */
enableValidation(validationConfig);
