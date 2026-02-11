// IMPORTAÇÕES
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { openModal, closeModal } from "./utils.js";

// CONFIGURAÇÕES
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
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

// SELEÇÃO DE ELEMENTOS
const cardsContainer = document.querySelector(".cards__list");

// Perfil
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const editButton = document.querySelector(".profile__edit-button");

// Popup Edição de Perfil
const editPopup = document.querySelector("#edit-popup");
const editForm = editPopup.querySelector("#edit-profile-form");
const nameInput = editPopup.querySelector(".popup__input_type_name");
const descriptionInput = editPopup.querySelector(
  ".popup__input_type_description",
);

// Popup Adicionar Card
const addButton = document.querySelector(".profile__add-button");
const newCardPopup = document.querySelector("#new-card-popup");
const newCardForm = newCardPopup.querySelector("#new-card-form");
const placeNameInput = newCardPopup.querySelector(
  ".popup__input_type_card-name",
);
const linkInput = newCardPopup.querySelector(".popup__input_type_url");

// VALIDAÇÃO DE FORMULÁRIOS
const editFormValidator = new FormValidator(validationConfig, editForm);
const addCardValidator = new FormValidator(validationConfig, newCardForm);

// Ativa a validação para ambos os formulários (Usando o método público do checklist)
editFormValidator.setEventListeners();
addCardValidator.setEventListeners();

// FUNÇÕES

// Cria a instância do card e retorna o elemento HTML pronto
function createCard(data) {
  const card = new Card(data, "#card-template");
  return card.generateCard();
}

// Renderiza o card no container
function renderCard(data) {
  const cardElement = createCard(data);
  cardsContainer.prepend(cardElement);
}

// Renderização Inicial dos cartões padrão
initialCards.forEach((item) => renderCard(item));

//HANDLERS DE EVENTOS

// Envio do formulário de Perfil
editForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closeModal(editPopup);
});

// Envio do formulário de Novo Card
newCardForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const newCardData = {
    name: placeNameInput.value,
    link: linkInput.value,
  };
  renderCard(newCardData);
  newCardForm.reset();
  addCardValidator.resetValidation();
  closeModal(newCardPopup);
});

// Abrir popup de edição
editButton.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
  editFormValidator.resetValidation();
  openModal(editPopup);
});

// Abrir popup de adição
addButton.addEventListener("click", () => {
  newCardForm.reset();
  addCardValidator.resetValidation();
  openModal(newCardPopup);
});

// Fechamento Universal (Overlay e Botão de Fechar)
const popups = Array.from(document.querySelectorAll(".popup"));
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
