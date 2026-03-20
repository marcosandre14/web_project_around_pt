export default class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  // Função interna para verificar se a resposta do servidor está OK
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Erro: ${res.status}`);
  }

  // Pega seus dados (nome, sobre, avatar)
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  // Pega os cartões que estão no servidor
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  // Atualiza seu nome e profissão
  editUserInfo(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ name, about }),
    }).then(this._checkResponse);
  }

  //  Atualiza a foto do perfil (Avatar)
  updateAvatar(avatarUrl) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ avatar: avatarUrl }),
    }).then(this._checkResponse);
  }

  // Cria um novo cartão
  addNewCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, link }),
    }).then(this._checkResponse);
  }

  // Remove um cartão do servidor
  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  // Curte ou descurte um cartão
  changeLikeCardStatus(cardId, shouldLike) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: shouldLike ? "PUT" : "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }
}
