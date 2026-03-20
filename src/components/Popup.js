export default class Popup {
  constructor(popupSelector) {
    // Busca o elemento do popup pelo seletor (ex: #edit-popup)
    this._popupElement = document.querySelector(popupSelector);

    // Bind obrigatório para que o 'this' dentro do método se refira à classe Popup
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  // Abre a janela modal e adiciona o ouvinte de teclado global
  open() {
    if (this._popupElement) {
      this._popupElement.classList.add("popup_is-opened");
      document.addEventListener("keydown", this._handleEscClose);
    }
  }

  // Fecha a janela modal e remove o ouvinte de teclado
  close() {
    if (this._popupElement) {
      this._popupElement.classList.remove("popup_is-opened");
      document.removeEventListener("keydown", this._handleEscClose);
    }
  }

  // Lógica para fechar ao pressionar a tecla Esc
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  // Configura fechamento ao clicar no botão 'X' ou no fundo escuro (overlay)
  setEventListeners() {
    if (this._popupElement) {
      this._popupElement.addEventListener("mousedown", (evt) => {
        // Verifica se o clique foi no overlay (fundo) ou no botão de fechar
        if (
          evt.target.classList.contains("popup_is-opened") ||
          evt.target.classList.contains("popup__close")
        ) {
          this.close();
        }
      });
    }
  }
}
