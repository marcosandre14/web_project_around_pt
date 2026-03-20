export default class UserInfo {
  constructor({ nameSelector, jobSelector, avatarSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
    this._avatarElement = document.querySelector(avatarSelector);
  }

  // Retorna um objeto com os dados que estão visíveis na página no momento
  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      job: this._jobElement.textContent,
    };
  }

  // Atualiza o Nome e o Cargo (Sobre mim) na interface
  setUserInfo({ name, job }) {
    if (name) this._nameElement.textContent = name;
    if (job) this._jobElement.textContent = job;
  }

  // Atualiza a imagem do perfil (Avatar)
  // Recebe o link da imagem e aplica ao atributo src do elemento
  setAvatar(avatarUrl) {
    if (avatarUrl && this._avatarElement) {
      this._avatarElement.src = avatarUrl;
    }
  }
}
