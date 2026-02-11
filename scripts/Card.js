import { openModal } from "./utils.js";

export default class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  // Método privado para clonar o template do HTML
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  // Método público que constrói e devolve o cartão pronto
  generateCard() {
    this._element = this._getTemplate();

    this._cardImage = this._element.querySelector(".card__image");
    this._cardTitle = this._element.querySelector(".card__title");

    this._setEventListeners();

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;

    return this._element;
  }

  // Método privado para configurar os ouvintes de eventos
  _setEventListeners() {
    // Evento de Like
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeIcon();
      });

    // Evento de Deletar
    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });

    // Evento de Abrir o Popup de Imagem
    this._cardImage.addEventListener("click", () => {
      this._handleOpenCardPreview();
    });
  }

  // Lógica para alternar o estado do Like
  _handleLikeIcon() {
    this._element
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_is-active");
  }

  // Lógica para remover o cartão do DOM
  _handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }

  // Lógica para preencher e abrir o preview da imagem
  _handleOpenCardPreview() {
    const imagePopup = document.querySelector("#image-popup");
    const popupImage = imagePopup.querySelector(".popup__image");
    const popupCaption = imagePopup.querySelector(".popup__caption");

    popupImage.src = this._link;
    popupImage.alt = this._name;
    popupCaption.textContent = this._name;

    openModal(imagePopup);
  }
}
