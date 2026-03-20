# Around The U.S. (Ao redor dos EUA) - Integração com API

Um projeto interativo de galeria de fotos onde os usuários podem explorar locais, adicionar novos cartões, curtir fotos e gerenciar seu perfil. Esta etapa final do projeto foca na **comunicação assíncrona com servidores (API)**, manipulação avançada de Promises e o fechamento do ciclo de **Programação Orientada a Objetos (POO)**.

## 🚀 Funcionalidades Implementadas

- **Integração com Servidor (API)**:
  - Carregamento inicial de cartões e dados do usuário via servidor.
  - Sincronização em tempo real: todas as alterações (curtir, deletar, editar) são persistidas no banco de dados.
- **Gerenciamento de Perfil Completo**:
  - Alteração de nome e ocupação.
  - **Troca de Avatar**: Interface interativa com efeito de hover e ícone de edição para atualizar a foto de perfil.
- **Controle de Cartões (Cards)**:
  - **Exclusão com Confirmação**: Popup especializado para confirmar a remoção de um cartão antes de efetivar a ação na API.
  - **Proteção de Propriedade**: Somente o criador do cartão pode visualizá-lo e removê-lo (lixeira dinâmica).
  - **Sistema de Likes**: Contador de curtidas e estado visual persistente.
- **UX Avançada**:
  - **Feedback de Carregamento**: Botões exibem "Salvando..." ou "Criando..." durante o processamento das requisições.
  - Validação de formulários em tempo real e fechamento intuitivo de modais (Esc/Overlay).

## 🛠️ Tecnologias e Técnicas

- **JavaScript (ES6+)**:
  - **Fetch API**: Uso intensivo de requisições assíncronas (GET, POST, PATCH, PUT, DELETE).
  - **Promises & Async Management**: Uso de `Promise.all` para sincronizar o carregamento de dados do usuário e cartões.
  - **POO Avançada**: Estrutura modular com herança entre classes de Popups e encapsulamento total da lógica de rede na classe `Api`.
- **CSS3 & Metodologia BEM**:
  - Layouts responsivos adaptados para Mobile, Tablet e Desktop.
  - Transições suaves e estados de `:hover` para todos os elementos interativos.
- **Acessibilidade**: Atributos `alt` dinâmicos, semântica HTML5 e controle total via teclado.

## 📁 Estrutura do Projeto

```text
/
├── src/
│   ├── blocks/         # Arquivos CSS organizados por componentes BEM
│   ├── components/     # Lógica de negócio (Classes JS)
│   │   ├── Api.js                  # Comunicação com o servidor
│   │   ├── Card.js                 # Lógica do cartão e elementos visuais
│   │   ├── FormValidator.js        # Validação de formulários
│   │   ├── Popup.js                # Classe base de janelas modais
│   │   ├── PopupWithConfirmation.js# Popup para confirmação de ações
│   │   ├── PopupWithForm.js        # Lógica de formulários em popups
│   │   ├── PopupWithImage.js       # Visualização de imagem expandida
│   │   ├── Section.js              # Renderização de listas no DOM
│   │   ├── UserInfo.js             # Gerenciamento de dados do perfil
│   │   └── utils.js                # Configurações e constantes
│   ├── images/         # Ativos de imagem, ícones e logotipos
│   ├── pages/          # Arquivos de inicialização
│   │   ├── index.css   # Arquivo mestre de estilos (imports)
│   │   └── index.js    # Ponto de entrada (instanciação das classes)
│   └── vendor/         # Bibliotecas externas e resets (normalize.css)
├── index.html          # Estrutura principal da aplicação
└── README.md           # Documentação do projeto
```
