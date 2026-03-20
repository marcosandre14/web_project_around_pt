import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    // Buscamos os elementos internos apenas uma vez no construtor
    this._image = this._popupElement.querySelector(".popup__image");
    this._caption = this._popupElement.querySelector(".popup__caption");
  }

  // Sobrescreve o método open da classe pai (Popup)
  open(name, link) {
    this._image.src = link;
    this._image.alt = name;
    this._caption.textContent = name;
    super.open();
  }
}
