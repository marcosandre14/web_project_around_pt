export default class Popup {
  // O construtor recebe o seletor CSS do popup e localiza o elemento no DOM
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);

    this._handleEscClose = this._handleEscClose.bind(this);
  }

  // Método público para abrir a janela modal
  open() {
    this._popupElement.classList.add("popup_is-opened");
    // Adiciona o ouvinte de tecla Esc no documento apenas enquanto o popup está aberto
    document.addEventListener("keydown", this._handleEscClose);
  }

  // Método público para fechar a janela modal
  close() {
    this._popupElement.classList.remove("popup_is-opened");
    // Remove o ouvinte de tecla Esc para evitar processamento desnecessário
    document.removeEventListener("keydown", this._handleEscClose);
  }

  // Método privado que detecta a tecla Esc para disparar o fechamento
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  // Método, configura o fechamento pelo ícone 'X' ou clicando no overlay
  setEventListeners() {
    this._popupElement.addEventListener("mousedown", (evt) => {
      if (
        evt.target.classList.contains("popup_is-opened") ||
        evt.target.classList.contains("popup__close")
      ) {
        this.close();
      }
    });
  }
}
