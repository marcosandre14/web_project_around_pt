export default class Section {
  // O construtor recebe os dados iniciais, a função de renderização e o seletor do container
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  // Método público para processar e renderizar cada item do array inicial
  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  // Método público para inserir o elemento pronto no container
  addItem(element) {
    this._container.prepend(element);
  }
}
