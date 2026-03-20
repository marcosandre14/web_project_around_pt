import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import { validationConfig } from "../components/utils.js";
import Api from "../components/Api.js";

// Variável para armazenar o ID do usuário logado
let userId;

// Conexão com a API: Configuração de URL e Token de autorização
const api = new Api({
  baseUrl: "https://around-api.pt-br.tripleten-services.com/v1",
  headers: {
    authorization: "d09bc11d-b619-44f4-8d5c-9fa79a245de3",
    "Content-Type": "application/json",
  },
});

// Gerenciador de informações do usuário (Nome, Cargo e Avatar)
const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__description",
  avatarSelector: ".profile__image",
});

// Popup para visualização de imagens expandidas
const imagePopup = new PopupWithImage("#image-popup");
imagePopup.setEventListeners();

// Popup de confirmação para exclusão de cartões
const deletePopup = new PopupWithConfirmation("#delete-popup");
deletePopup.setEventListeners();

//  Popup para alterar a foto do perfil (Avatar)
const avatarPopup = new PopupWithForm("#avatar-popup", (data) => {
  avatarPopup.renderLoading(true);
  api
    .updateAvatar(data.avatar) // Envia o link para a API (input name="avatar")
    .then((res) => {
      userInfo.setAvatar(res.avatar); // Atualiza a imagem na tela após o sucesso
      avatarPopup.close();
    })
    .catch((err) => console.error("Erro ao mudar avatar:", err))
    .finally(() => avatarPopup.renderLoading(false));
});
avatarPopup.setEventListeners();

// Função para criar a instância de cada cartão e definir suas ações
const createCard = (item) => {
  const card = new Card(
    item,
    "#card-template",
    {
      handleCardClick: (name, link) => imagePopup.open(name, link),

      //  Lógica de exclusão com confirmação
      handleDeleteClick: () => {
        deletePopup.open();
        deletePopup.setSubmitAction(() => {
          api
            .deleteCard(item._id)
            .then(() => {
              card.removeCard(); // Remove o elemento do DOM
              deletePopup.close();
            })
            .catch((err) => console.error("Erro ao excluir cartão:", err));
        });
      },

      //  Lógica de curtir/descurtir
      handleLikeClick: (isCurrentlyLiked) => {
        api
          .changeLikeCardStatus(item._id, !isCurrentlyLiked)
          .then((res) => {
            card.setLikeStatus(res.isLiked); // Atualiza a cor do coração
          })
          .catch((err) => console.error("Erro ao processar curtida:", err));
      },
    },
    userId, // Passamos o nosso ID para ocultar lixeiras de outros usuários
  );
  return card.generateCard();
};

// Gerencia a lista de cartões na tela usando a classe Section
const cardList = new Section(
  {
    renderer: (item) => cardList.addItem(createCard(item)),
  },
  ".cards__list",
);

// CARREGAMENTO INICIAL: Sincroniza dados do perfil e cartões do servidor
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userId = userData._id; // Armazena o ID retornado pelo servidor
    userInfo.setUserInfo({ name: userData.name, job: userData.about });
    userInfo.setAvatar(userData.avatar);
    cardList.renderItems(cards);
  })
  .catch((err) => console.error("Erro no carregamento inicial:", err));

// Popup para editar informações textuais do perfil (Nome e Sobre)
const editProfilePopup = new PopupWithForm("#edit-popup", (data) => {
  editProfilePopup.renderLoading(true);
  api
    .editUserInfo(data.name, data.description)
    .then((res) => {
      userInfo.setUserInfo({ name: res.name, job: res.about });
      editProfilePopup.close();
    })
    .catch((err) => console.error("Erro ao editar perfil:", err))
    .finally(() => editProfilePopup.renderLoading(false));
});
editProfilePopup.setEventListeners();

// Popup para adicionar novo cartão de local
const addCardPopup = new PopupWithForm("#new-card-popup", (data) => {
  addCardPopup.renderLoading(true, "Criando...");
  api
    .addNewCard(data["place-name"], data.link)
    .then((res) => {
      cardList.addItem(createCard(res));
      addCardPopup.close();
    })
    .catch((err) => console.error("Erro ao adicionar cartão:", err))
    .finally(() => addCardPopup.renderLoading(false));
});
addCardPopup.setEventListeners();

// CONFIGURAÇÃO DOS VALIDADORES: Ativa a validação em todos os formulários via ID
const formValidators = {};
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute("id");
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};
enableValidation(validationConfig);

// --- EVENTOS DE CLIQUE ---

// Abre popup de edição de perfil
document
  .querySelector(".profile__edit-button")
  .addEventListener("click", () => {
    const { name, job } = userInfo.getUserInfo();
    editProfilePopup.setInputValues({ name, description: job });
    formValidators["edit-profile-form"].resetValidation();
    editProfilePopup.open();
  });

// Abre popup de novo cartão
document.querySelector(".profile__add-button").addEventListener("click", () => {
  formValidators["new-card-form"].resetValidation();
  addCardPopup.open();
});

//  Abre alteração de avatar ao clicar no container da foto
document
  .querySelector(".profile__avatar-container")
  .addEventListener("click", () => {
    formValidators["avatar-form"].resetValidation();
    avatarPopup.open();
  });

// Define o ano atual no rodapé da página
const footerYear = document.querySelector("#footer-year");
if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}
