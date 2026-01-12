# Tripleten web_project_around_pt

Um projeto interativo que permite aos usuários explorar e compartilhar fotos de lugares marcantes nos Estados Unidos. O foco deste estágio do projeto foi a transição de um layout estático para uma galeria dinâmica alimentada por JavaScript.

## Funcionalidades desta etapa

- **Renderização Dinâmica:** Os cartões não são mais fixos no HTML. Eles são gerados automaticamente a partir de um array de objetos no JavaScript.
- **Uso de Templates HTML:** Utilização da tag `<template>` para manter a estrutura do cartão organizada e reutilizável.
- **Manipulação do DOM:** Uso de métodos como `querySelector`, `cloneNode` e `append` para inserir elementos na página em tempo real.
- **Arquitetura BEM:** Manutenção da nomenclatura _Block Element Modifier_ (BEM) para garantir que os estilos CSS sejam aplicados corretamente mesmo em elementos criados dinamicamente.
- **Programação Funcional:** Uso do método `forEach` para percorrer os dados e construir a interface de forma eficiente.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica e uso de templates.
- **CSS3:** Estilização seguindo a metodologia BEM.
- **JavaScript:** Lógica para criação dinâmica de componentes e manipulação de objetos.

## 📁 Estrutura do Projeto

- `index.html`: Estrutura principal com a lista de cartões vazia e o template de cartões.
- `pages/index.css`: Estilos globais e dos componentes.
- `scripts/index.js`: Lógica principal, contendo os dados e as funções de criação de elementos.
