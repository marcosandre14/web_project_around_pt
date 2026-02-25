export default class UserInfo {
  // O construtor recebe um objeto com os seletores para o nome e o trabalho/profissão
  constructor({ nameSelector, jobSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
  }

  // Método público que retorna um objeto com os dados atuais do usuário exibidos na página
  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      job: this._jobElement.textContent,
    };
  }

  // recebe novos dados e atualiza a interface visualmente
  setUserInfo({ name, job }) {
    this._nameElement.textContent = name;
    this._jobElement.textContent = job;
  }
}
