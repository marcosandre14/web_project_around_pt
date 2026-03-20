export default class Card {
  constructor(
    data,
    cardSelector,
    { handleCardClick, handleDeleteClick, handleLikeClick },
    userId,
  ) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._isLiked = data.isLiked; // Status inicial de curtida
    this._ownerId = data.owner._id || data.owner; // ID do dono do cartão
    this._userId = userId; // Seu ID de usuário logado
    this._cardSelector = cardSelector;

    // Funções de retorno (callbacks)
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

  // Clona o template HTML para criar a estrutura do card
  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  // Atualiza o estado visual
  //  Define se o botão deve exibir o ícone ativo ou inativo
  setLikeStatus(isLiked) {
    this._isLiked = isLiked;
    this._renderLikes();
  }

  // Adiciona ou remove a classe CSS baseada no status de curtida
  _renderLikes() {
    if (this._likeButton) {
      if (this._isLiked) {
        this._likeButton.classList.add("card__like-button_is-active");
      } else {
        this._likeButton.classList.remove("card__like-button_is-active");
      }
    }
  }

  // Remove o cartão da tela
  removeCard() {
    this._element.remove();
    this._element = null;
  }

  // Configura os ouvintes de evento para interações
  _setEventListeners() {
    this._cardImage.addEventListener("click", () =>
      this._handleCardClick(this._name, this._link),
    );

    this._likeButton.addEventListener("click", () => {
      // Avisa o index.js se deve curtir ou descurtir na API
      this._handleLikeClick(this._isLiked);
    });

    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteClick();
    });
  }

  // Gera o card completo e pronto para ser inserido na página
  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".card__image");
    this._likeButton = this._element.querySelector(".card__like-button");
    this._deleteButton = this._element.querySelector(".card__delete-button");

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector(".card__title").textContent = this._name;

    //    Controle da lixeira
    //   Remove o botão de exclusão se o cartão não pertencer ao usuário logado
    if (this._ownerId !== this._userId) {
      this._deleteButton.remove();
    }

    this._renderLikes();
    this._setEventListeners();

    return this._element;
  }
}
