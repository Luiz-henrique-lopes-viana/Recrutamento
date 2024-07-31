# Índice

- Índice
- Pré-requisitos
- Instalação
- Configuração
- Executando Testes
- Escrevendo Testes
- Recursos Adicionais

# Instalação

bash
npm install cypress --save-dev
npx cypress open

Configuração
Estrutura de Diretórios
cypress.json – Arquivo de configuração do Cypress
fixtures/ – Arquivos de dados para seus testes.
plugins/ – Plugins do Cypress.

Executando Testes

npx cypress open

npx cypress run



O projeto está estruturado da seguinte forma:
nome-do-repositorio/

├── cypress/
│   ├── e2e/
│   │   └── api atuomatizada (get)/
│   │   └──Testes automatizados
│   ├── plugins/
│   │   └── index.js
│   ├── support/
│   │   ├── commands.js
│   │   ├──criarconta.js
│   │   └── index.js
├── cypress.json
├── package.json
└── README.md
