import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;

    // Busca o formulário dentro do popup já instanciado pela classe pai
    this._form = this._popupElement.querySelector(".popup__form");

    // só busca inputs e botões se o formulário existir
    if (this._form) {
      this._inputList = this._form.querySelectorAll(".popup__input");
      this._submitButton = this._form.querySelector(".popup__button");
      this._submitButtonText = this._submitButton
        ? this._submitButton.textContent
        : "";
    }
  }

  // Altera o texto do botão durante o carregamento (UX)
  renderLoading(isLoading, loadingText = "Salvando...") {
    if (this._submitButton) {
      this._submitButton.textContent = isLoading
        ? loadingText
        : this._submitButtonText;
    }
  }

  // Coleta os dados de todos os campos de entrada do formulário
  _getInputValues() {
    this._formValues = {};
    if (this._inputList) {
      this._inputList.forEach((input) => {
        this._formValues[input.name] = input.value;
      });
    }
    return this._formValues;
  }

  // Preenche os inputs do formulário
  setInputValues(data) {
    if (this._inputList) {
      this._inputList.forEach((input) => {
        if (data[input.name]) {
          input.value = data[input.name];
        }
      });
    }
  }

  // Adiciona o ouvinte de clique e o de envio do formulário
  setEventListeners() {
    super.setEventListeners();
    if (this._form) {
      this._form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        this._handleFormSubmit(this._getInputValues());
      });
    }
  }

  // Fecha o popup e limpa os campos
  close() {
    super.close();
    if (this._form) {
      this._form.reset();
    }
  }
}
