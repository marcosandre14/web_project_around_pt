import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  // Recebe o seletor do popup e a função de callback para o envio dos dados
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupElement.querySelector(".popup__form");
    // Armazena todos os campos de entrada do formulário
    this._inputList = Array.from(this._form.querySelectorAll(".popup__input"));
  }

  // Método privado que coleta os valores de todos os campos de entrada
  _getInputValues() {
    const formValues = {};
    this._inputList.forEach((input) => {
      // Usa o atributo 'name' do HTML como chave para o objeto
      formValues[input.name] = input.value;
    });
    return formValues;
  }

  // Estende o método pai para adicionar o ouvinte de 'submit'
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      // Passa o objeto de dados coletados para a função de callback
      this._handleFormSubmit(this._getInputValues());
    });
  }

  // Estende o método pai para resetar o formulário ao fechar
  close() {
    super.close();
    this._form.reset();
  }
}
