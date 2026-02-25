import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import { initialCards, validationConfig } from "../components/utils.js";

// Gerenciamento das informações do perfil do usuário
const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__description",
});

// Instância do popup para ampliação de imagens
const imagePopup = new PopupWithImage("#image-popup");
imagePopup.setEventListeners();

// Função para criar uma nova instância de cartão
const createCard = (item) => {
  const card = new Card(item, "#card-template", (name, link) => {
    imagePopup.open(name, link);
  });
  return card.generateCard();
};

// Gerenciamento da renderização da lista inicial de cartões
const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      cardList.addItem(createCard(item));
    },
  },
  ".cards__list",
);

// Executa a renderização dos itens iniciais no DOM
cardList.renderItems();

// Configuração do popup para edição dos dados do perfil
const editProfilePopup = new PopupWithForm("#edit-popup", (data) => {
  userInfo.setUserInfo({
    name: data.name,
    job: data.description,
  });
  editProfilePopup.close();
});
editProfilePopup.setEventListeners();

// Configuração do popup para adição de novos cartões pelo usuário
const addCardPopup = new PopupWithForm("#new-card-popup", (data) => {
  const newCard = createCard({
    name: data["place-name"],
    link: data.link,
  });
  cardList.addItem(newCard);
  addCardPopup.close();
});
addCardPopup.setEventListeners();

// Objeto para armazenamento das instâncias de validação de cada formulário
const formValidators = {};

// Função universal para ativar a validação em todos os formulários do projeto
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute("id");

    formValidators[formName] = validator;
    validator.setEventListeners();
  });
};

// Inicia o processo de validação global
enableValidation(validationConfig);

// Ouvintes de evento para os botões de abertura dos popups
const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");

// Configura a abertura do perfil com preenchimento prévio e reset de erros
editButton.addEventListener("click", () => {
  const { name, job } = userInfo.getUserInfo();

  document.querySelector(".popup__input_type_name").value = name;
  document.querySelector(".popup__input_type_description").value = job;

  formValidators["edit-profile-form"].resetValidation();
  editProfilePopup.open();
});

// Configura a abertura do formulário de novos locais com reset de validação
addButton.addEventListener("click", () => {
  formValidators["new-card-form"].resetValidation();
  addCardPopup.open();
});

// Atualização dinâmica do ano de copyright no rodapé
document.querySelector("#footer-year").textContent = new Date().getFullYear();
