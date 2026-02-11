# Around The U.S. (Ao redor dos EUA)

Um projeto interativo de galeria de fotos onde os usuários podem explorar locais, adicionar novos cartões, curtir suas fotos favoritas e gerenciar seu perfil. Este projeto foca em manipulação dinâmica do DOM, validação robusta de formulários e uma arquitetura de código moderna e escalável.

## 🚀 Funcionalidades

- **Edição de Perfil**: Alteração dinâmica do nome e da descrição do usuário com persistência visual.
- **Galeria Dinâmica**: Renderização de cartões a partir de um array inicial e funcionalidade para adicionar novos locais instantaneamente.
- **Validação de Formulários (POO)**:
  - Verificação de campos obrigatórios, comprimento de texto e formatos de URL via API `ValidityState`.
  - Mensagens de erro em tempo real integradas ao design.
  - Botão de envio inteligente: permanece desabilitado enquanto os dados não cumprem os requisitos.
- **Interatividade e UX**:
  - Fechamento de modais de forma intuitiva através da tecla `Esc`.
  - Fechamento ao clicar na sobreposição (overlay).
- **Sistema de Likes**: Feedback visual interativo (coração ativo/inativo).
- **Gerenciamento de Conteúdo**: Opção de excluir cartões individuais da galeria.
- **Visualização de Imagens**: Lightbox integrado para expandir fotos com legendas automáticas.

## 🛠️ Tecnologias e Técnicas

- **HTML5**: Estrutura semântica e utilização de `<template>`.
- **CSS3**: Layouts flexíveis (Flexbox/Grid) e metodologia **BEM** (Block Element Modifier).
- **JavaScript (ES6+)**:
  - **Programação Orientada a Objetos (POO)**: Organização da lógica em classes reutilizáveis (`Card` e `FormValidator`).
  - **Módulos JS**: Separação de responsabilidades e utilização de `import/export`.
  - **Manipulação de DOM**: Criação e inserção dinâmica de elementos.
- **Acessibilidade**: Foco em estados :hover, atributos `alt` descritivos e controle via teclado (Esc).

## 📁 Estrutura do Projeto

/
├── blocks/ # Estilos CSS individuais organizados por componentes BEM
├── images/ # Ativos de imagem, ícones e vetores de interface
├── scripts/
│ ├── Card.js # Classe responsável pela lógica e criação dos cartões
│ ├── FormValidator.js # Classe universal para validação de formulários
│ ├── utils.js # Funções utilitárias compartilhadas (modais)
│ └── index.js # Orquestrador principal da aplicação
├── vendor/ # Bibliotecas e resets (ex: normalize.css)
├── index.html # Estrutura principal da aplicação
└── README.md # Documentação do projeto

🔗 Link do Projeto
https://marcosandre14.github.io/web_project_around_pt/
