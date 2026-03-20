import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popupElement.querySelector(".popup__form");
    this._submitButton = this._popupElement.querySelector(".popup__button");
  }

  // Este método permite que o index.js "diga" o que deve acontecer ao clicar em Sim
  setSubmitAction(action) {
    this._handleFormSubmit = action;
  }

  setEventListeners() {
    super.setEventListeners();
    // Submit funcione tanto com o clique quanto com o Enter
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit();
    });
  }
}
