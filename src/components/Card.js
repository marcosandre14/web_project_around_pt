export default class Card {
  // O construtor recebe os dados, o seletor do template e a função de clique na imagem
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick; // Função externa para abrir o popup de imagem
  }

  // Obtém a marcação do template HTML
  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  // Configura os ouvintes de eventos do cartão (curtir, deletar e clique na imagem)
  _setEventListeners() {
    // Botão Curtir
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", (evt) => {
        evt.target.classList.toggle("card__like-button_is-active");
      });

    // Botão Deletar
    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._element.remove();
        this._element = null; // Remove a referência da memória
      });

    // Clique na Imagem (abre o popup)
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleCardClick(this._name, this._link);
      });
  }

  // Método público que prepara o cartão com dados e ouvintes
  generateCard() {
    this._element = this._getTemplate();
    const cardImage = this._element.querySelector(".card__image");

    this._setEventListeners();

    cardImage.src = this._link;
    cardImage.alt = this._name;
    this._element.querySelector(".card__title").textContent = this._name;

    return this._element;
  }
}
