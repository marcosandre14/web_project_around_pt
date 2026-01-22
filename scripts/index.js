/* DADOS INICIAIS                              */

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

/* SELEÇÃO DE ELEMENTOS                            */

// Galeria e Template
const cardsContainer = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card-template").content;

// Perfil
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");

// Modal de Edição
const editPopup = document.querySelector("#edit-popup");
const editForm = editPopup.querySelector("#edit-profile-form");
const nameInput = editPopup.querySelector(".popup__input_type_name");
const descriptionInput = editPopup.querySelector(
  ".popup__input_type_description"
);
const closeEditButton = editPopup.querySelector(".popup__close");

// Modal de Novo Cartão
const newCardPopup = document.querySelector("#new-card-popup");
const newCardForm = newCardPopup.querySelector("#new-card-form");
const placeNameInput = newCardPopup.querySelector(
  ".popup__input_type_card-name"
);
const linkInput = newCardPopup.querySelector(".popup__input_type_url");
const closeNewCardButton = newCardPopup.querySelector(".popup__close");

// Modal de Imagem
const imagePopup = document.querySelector("#image-popup");
const popupImage = imagePopup.querySelector(".popup__image");
const popupCaption = imagePopup.querySelector(".popup__caption");
const closeImageButton = imagePopup.querySelector(".popup__close");

/* FUNÇÕES DE MODAL (REUTILIZÁVEIS)                      */

function openModal(modal) {
  modal.classList.add("popup_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
}

/* LÓGICA DOS CARTÕES                             */

function handleLikeButton(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}

function handleDeleteButton(evt) {
  const cardElement = evt.target.closest(".card");
  cardElement.remove();
}

function handleImageClick(name, link) {
  popupImage.src = link;
  popupImage.alt = name;
  popupCaption.textContent = name;
  openModal(imagePopup);
}

// Cria o elemento do cartão com parâmetros padrão (Requisito Checklist)
function getCardElement(
  name = "Lugar sem nome",
  link = "./images/placeholder.jpg"
) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;

  likeButton.addEventListener("click", handleLikeButton);
  deleteButton.addEventListener("click", handleDeleteButton);
  cardImage.addEventListener("click", () => handleImageClick(name, link));

  return cardElement;
}

function renderCard(name, link, container) {
  const cardElement = getCardElement(name, link);
  container.prepend(cardElement);
}

// Renderização inicial
initialCards.forEach((item) => {
  renderCard(item.name, item.link, cardsContainer);
});

/* MANIPULADORES DE FORMULÁRIO                        */

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closeModal(editPopup);
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  renderCard(placeNameInput.value, linkInput.value, cardsContainer);
  newCardForm.reset();
  closeModal(newCardPopup);
}

/* OUVINTES DE EVENTOS                            */

// Perfil: Preenche os inputs com dados atuais antes de abrir
editButton.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
  openModal(editPopup);
});

closeEditButton.addEventListener("click", () => closeModal(editPopup));
editForm.addEventListener("submit", handleProfileFormSubmit);

// Novo Cartão
addButton.addEventListener("click", () => openModal(newCardPopup));
closeNewCardButton.addEventListener("click", () => closeModal(newCardPopup));
newCardForm.addEventListener("submit", handleCardFormSubmit);

// Modal de Imagem
closeImageButton.addEventListener("click", () => closeModal(imagePopup));
