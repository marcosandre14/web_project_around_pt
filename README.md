# Around The U.S. (Ao redor dos EUA)

Um projeto interativo de galeria de fotos onde os usuários podem explorar locais, adicionar novos cartões, curtir suas fotos favoritas e gerenciar seu perfil. Este projeto foca em manipulação dinâmica do DOM, validação robusta de formulários e uma arquitetura de código moderna e escalável baseada em **POO (Programação Orientada a Objetos)**.

## 🚀 Funcionalidades

- **Edição de Perfil**: Alteração dinâmica do nome e da descrição do usuário via classe `UserInfo`.
- **Galeria Dinâmica**: Renderização automatizada de cartões gerenciada pela classe `Section`.
- **Validação de Formulários**:
  - Validação em tempo real com a classe `FormValidator` utilizando a API `ValidityState`.
  - Feedback visual de erro e gerenciamento inteligente do estado do botão de envio.
- **Interatividade e UX**:
  - Sistema de popups modularizado herdando de uma classe base `Popup`.
  - Fechamento intuitivo via tecla `Esc` e clique no overlay (área escura).
- **Visualização de Imagens**: Popup especializado `PopupWithImage` para expansão de fotos com legendas automáticas.
- **Gerenciamento de Cards**: Funcionalidade de "like" interativa e exclusão de cartões.

## 🛠️ Tecnologias e Técnicas

- **HTML5**: Estrutura semântica, utilização de `<template>` e atributos de acessibilidade.
- **CSS3**: Layouts responsivos (Flexbox/Grid) e metodologia **BEM** (Block Element Modifier).
- **JavaScript (ES6+)**:
  - **POO Avançada**: Organização em classes, uso de herança (`extends`) e polimorfismo (`super`).
  - **Arquitetura de Componentes**: Divisão de responsabilidades entre as classes `Card`, `Section`, `Popup`, `PopupWithForm`, `PopupWithImage` e `UserInfo`.
  - **Módulos JS**: Separação de arquivos com `import` e `export`.
- **Acessibilidade**: Foco em estados interativos, atributos `alt` descritivos e controle total via teclado.

## 📁 Estrutura do Projeto

```text
/
├── src/
│   ├── blocks/         # Estilos CSS individuais organizados por blocos BEM
│   ├── components/     # Classes de componentes e lógica de negócio
│   │   ├── Card.js
│   │   ├── FormValidator.js
│   │   ├── Popup.js
│   │   ├── PopupWithForm.js
│   │   ├── PopupWithImage.js
│   │   ├── Section.js
│   │   ├── UserInfo.js
│   │   └── utils.js    # Dados constantes e configurações globais
│   ├── images/         # Ativos de imagem, ícones e vetores
│   ├── pages/          # Arquivos de inicialização da página
│   │   ├── index.css   # Importação principal dos estilos
│   │   └── index.js    # Orquestrador que instancia as classes e inicia o app
│   └── vendor/         # Bibliotecas externas e resets (normalize.css)
├── index.html          # Estrutura principal da aplicação
└── README.md           # Documentação do projeto
```
🔗 Link do Projeto
https://marcosandre14.github.io/web_project_around_pt/



