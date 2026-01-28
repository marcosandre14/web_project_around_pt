# Around The U.S. (Ao redor dos EUA)

Um projeto interativo de galeria de fotos onde os usuários podem explorar locais, adicionar novos cartões, curtir suas fotos favoritas e gerenciar seu perfil. Este projeto foca em manipulação dinâmica do DOM, validação robusta de formulários e uma experiência de usuário (UX) fluida e acessível.

## 🚀 Funcionalidades

- **Edição de Perfil**: Alteração dinâmica do nome e da descrição do usuário com persistência visual.
- **Galeria Dinâmica**: Renderização de cartões a partir de um array inicial e funcionalidade para adicionar novos locais instantaneamente.
- **Validação de Formulários (Universal)**:
  - Verificação de campos obrigatórios, comprimento de texto e formatos de URL.
  - Mensagens de erro em tempo real integradas ao design.
  - Botão de envio inteligente: permanece desabilitado enquanto os dados não cumprem os requisitos.
- **Interatividade e UX**:
  - Fechamento de modais de forma intuitiva através da tecla `Esc`.
  - Fechamento ao clicar na sobreposição (overlay), fora da área de conteúdo.
- **Sistema de Likes**: Feedback visual interativo (coração ativo/inativo).
- **Gerenciamento de Conteúdo**: Opção de excluir cartões individuais da galeria.
- **Visualização de Imagens**: Lightbox integrado para expandir fotos com legendas automáticas.

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e utilização de `<template>` para otimização de renderização.
- **CSS3**: Layouts flexíveis e metodologia **BEM** (Block Element Modifier) para um código escalável e organizado.
- **JavaScript**:
  - Manipulação modular de eventos e DOM.
  - Validação via API nativa `ValidityState`.
  - Organização de código em arquivos separados por responsabilidade (`index.js` e `validate.js`).
  - Gerenciamento de acessibilidade via escutadores de teclado.

## 📁 Estrutura do Projeto

/
├── blocks/ # Estilos CSS individuais organizados por componentes BEM
├── images/ # Ativos de imagem, ícones e vetores de interface
├── scripts/
│ ├── index.js # Lógica de negócio, controle de modais e cartões
│ └── validate.js # Motor universal de validação de formulários
├── vendor/ # Bibliotecas de terceiros (ex: normalize.css)
├── index.html # Estrutura principal da aplicação
├── pages/
│ └── index.css # Arquivo mestre que importa todos os estilos
└── README.md # Documentação do projeto

🔗 Link do Projeto
https://marcosandre14.github.io/web_project_around_pt/
