// --- DADOS INICIAIS ---
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

// --- SELEÇÃO DE ELEMENTOS ---

// Perfil (Informações na página)
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const editButton = document.querySelector(".profile__edit-button");

// Modal de Edição de Perfil
const editPopup = document.querySelector("#edit-popup");
const editForm = editPopup.querySelector("#edit-profile-form");
const nameInput = editPopup.querySelector(".popup__input_type_name");
const descriptionInput = editPopup.querySelector(
  ".popup__input_type_description"
);
const closeEditButton = editPopup.querySelector(".popup__close");

// Modal de Novo Cartão
const addButton = document.querySelector(".profile__add-button");
const newCardPopup = document.querySelector("#new-card-popup");
const newCardForm = newCardPopup.querySelector("#new-card-form");
const placeNameInput = newCardPopup.querySelector(
  ".popup__input_type_card-name"
);
const linkInput = newCardPopup.querySelector(".popup__input_type_url");
const closeNewCardButton = newCardPopup.querySelector(".popup__close");

// Modal de Imagem (Lightbox)
const imagePopup = document.querySelector("#image-popup");
const popupImage = imagePopup.querySelector(".popup__image");
const popupCaption = imagePopup.querySelector(".popup__caption");
const closeImageButton = imagePopup.querySelector(".popup__close");

// Galeria e Template
const cardsContainer = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card-template").content;

// --- FUNÇÕES REUTILIZÁVEIS PARA MODAIS ---

function openModal(modal) {
  modal.classList.add("popup_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
}

// --- LÓGICA DO PERFIL ---

function fillProfileForm() {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
}

function handleOpenEditModal() {
  fillProfileForm();
  openModal(editPopup);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closeModal(editPopup);
}

// --- LÓGICA DE CARTÕES ---

function handleLikeButton(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}

function handleDeleteButton(evt) {
  evt.target.closest(".card").remove();
}

function handleImageClick(evt) {
  popupImage.src = evt.target.src;
  popupImage.alt = evt.target.alt;
  popupCaption.textContent = evt.target.alt;
  openModal(imagePopup);
}

function createCard(data) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;

  likeButton.addEventListener("click", handleLikeButton);
  deleteButton.addEventListener("click", handleDeleteButton);
  cardImage.addEventListener("click", handleImageClick);

  return cardElement;
}

// Renderização inicial e log no console (conforme checklist)
initialCards.forEach((item) => {
  console.log(item.name);
  const card = createCard(item);
  cardsContainer.append(card);
});

// --- LÓGICA DE NOVO CARTÃO ---

function handleOpenNewCardModal() {
  openModal(newCardPopup);
}

function handleNewCardFormSubmit(evt) {
  evt.preventDefault();
  const newCardData = {
    name: placeNameInput.value,
    link: linkInput.value,
  };
  const newCard = createCard(newCardData);
  cardsContainer.prepend(newCard);
  newCardForm.reset();
  closeModal(newCardPopup);
}

// --- OUVINTES DE EVENTOS (LISTENERS) ---

// Edição de Perfil
editButton.addEventListener("click", handleOpenEditModal);
closeEditButton.addEventListener("click", () => closeModal(editPopup));
editForm.addEventListener("submit", handleProfileFormSubmit);

// Novo Cartão
addButton.addEventListener("click", handleOpenNewCardModal);
closeNewCardButton.addEventListener("click", () => closeModal(newCardPopup));
newCardForm.addEventListener("submit", handleNewCardFormSubmit);

// Visualização de Imagem
closeImageButton.addEventListener("click", () => closeModal(imagePopup));
