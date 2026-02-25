import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  // O construtor localiza os elementos de imagem e legenda dentro do popup
  constructor(popupSelector) {
    super(popupSelector);
    this._imageElement = this._popupElement.querySelector(".popup__image");
    this._captionElement = this._popupElement.querySelector(".popup__caption");
  }

  // Sobrescreve o método open para configurar a imagem antes de mostrar o popup
  open(name, link) {
    this._imageElement.src = link;
    this._imageElement.alt = name;
    this._captionElement.textContent = name;

    // Chama o método open da classe pai (Popup.js) para exibir o modal
    super.open();
  }
}
