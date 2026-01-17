# Tripleten web_project_around_pt

Um projeto interativo que permite aos usuários explorar e compartilhar fotos de lugares marcantes nos Estados Unidos. O foco deste estágio do projeto foi a transição de um layout estático para uma galeria dinâmica e funcional alimentada por JavaScript.

## 🚀 Funcionalidades desta etapa

- **Renderização Dinâmica**: Os cartões são gerados automaticamente a partir de um array de objetos no JavaScript, eliminando a necessidade de código estático repetitivo.
- **Edição de Perfil**: Implementação de um modal interativo que permite atualizar o nome e a descrição do perfil na página em tempo real.
- **Sincronização de Dados**: Ao abrir o modal de edição, os campos do formulário são preenchidos automaticamente com os valores atuais exibidos na página, melhorando a experiência do usuário.
- **Interatividade nos Cartões**: Adição de botões funcionais de **"curtir"** (alternância de estado visual) e **"excluir"** (remoção do elemento do DOM) para cada item da galeria.
- **Visualização de Imagens (Lightbox)**: Pop-up dinâmico que exibe a imagem do cartão ampliada e com sua respectiva legenda ao ser clicada.
- **Manipulação Avançada do DOM**: Uso de funções reutilizáveis `openModal()` e `closeModal()` para gerenciar múltiplos modais de forma modular, seguindo o princípio **DRY** (Don't Repeat Yourself).
- **Arquitetura BEM**: Manutenção rigorosa da metodologia **BEM** (Block Element Modifier) para garantir a independência de componentes e estilos, mesmo em elementos injetados via JavaScript.

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e utilização da tag `<template>` para criação de componentes clonáveis.
- **CSS3**: Estilização avançada com foco em estados modificadores (ex: `_is-opened`, `_is-active`) seguindo o padrão BEM.
- **JavaScript**: Manipulação de eventos, lógica de formulários com `preventDefault()`, e gestão dinâmica de elementos da interface.

## 📁 Estrutura do Projeto

- `index.html`: Contém a estrutura base, os containers dos modais e o template para os cartões.
- `pages/index.css`: Arquivo central de estilos, organizando a identidade visual e o layout responsivo.
- `scripts/index.js`: Lógica principal do sistema, contendo o array `initialCards`, funções de criação de elementos e os manipuladores de eventos (handlers).
