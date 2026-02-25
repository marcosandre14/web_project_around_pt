export default class FormValidator {
  // O construtor recebe as configurações de classes e o formulário a ser validado
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;

    // Seleção dos inputs e do botão de envio do formulário
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._settings.inputSelector),
    );
    this._buttonElement = this._formElement.querySelector(
      this._settings.submitButtonSelector,
    );
  }

  // Método privado para mostrar a mensagem de erro e aplicar estilo ao input
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`,
    );

    if (!errorElement) return;

    inputElement.classList.add(this._settings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._settings.errorClass);
  }

  // Método privado para esconder a mensagem de erro e remover estilo do input
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`,
    );

    if (!errorElement) return;

    inputElement.classList.remove(this._settings.inputErrorClass);
    errorElement.classList.remove(this._settings.errorClass);
    errorElement.textContent = "";
  }

  // Método privado para verificar a validade de um campo específico
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  // Método privado que verifica se existe algum campo inválido na lista
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  // Método privado para alternar o estado visual e funcional do botão de envio
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._settings.inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._settings.inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  }

  // Método público que ativa a validação e configura os ouvintes de evento
  setEventListeners() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  // Método público para limpar erros e resetar o estado do botão
  resetValidation() {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }
}
