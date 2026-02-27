import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  // O construtor recebe o seletor do popup e a função de callback do envio
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popupElement.querySelector(".popup__form");
    this._inputList = Array.from(
      this._formElement.querySelectorAll(".popup__input"),
    );
  }

  // Coleta os dados de todos os campos do formulário
  _getInputValues() {
    const formValues = {};
    this._inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }

  // Insere dados nos campos do formulário
  setInputValues(data) {
    this._inputList.forEach((input) => {
      if (data[input.name]) {
        input.value = data[input.name];
      }
    });
  }

  // Adiciona ouvintes de clique (pai) e o evento de submit
  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  // Fecha o popup e limpa o formulário
  close() {
    super.close();
    this._formElement.reset();
  }
}
