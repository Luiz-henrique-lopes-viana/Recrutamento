# Índice

Índice
Pré-requisitos
Instalação
Configuração
Executando Testes
Escrevendo Testes
Recursos Adicionais


#Instalação

npm install cypress --save-dev
npx cypress open


#Configuração
#Estrutura de Diretórios


cypress.json – Arquivo de configuração do Cypress
fixtures/ – Arquivos de dados para seus testes.
plugins/ – Plugins do Cypress.
integration/ – Contém os testes e cenários.


#Executando Testes


npx cypress open

//Para executar os testes em modo headless (sem interface gráfica)://
npx cypress run

