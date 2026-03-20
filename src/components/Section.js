export default class Section {
  // renderer é a função que cria o card, containerSelector é onde o card será inserido
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  // Renderiza todos os itens da lista
  renderItems(items) {
    // Limpamos o container antes para não duplicar itens caso a função seja chamada de novo
    this._container.innerHTML = "";
    items.forEach((item) => {
      this._renderer(item);
    });
  }

  // Adiciona um único item ao container (usamos prepend para novos cards ficarem no topo)
  addItem(element) {
    this._container.prepend(element);
  }
}
