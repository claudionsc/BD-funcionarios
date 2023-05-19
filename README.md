# BD-FUNCIONÁRIOS

Banco de dados relacional para armazenar dados de funcionários e as suas funções

## COMO RODAR A APLICAÇÃO

Esta aplicação contém um banco de dados Postgres com Docker. Siga o passo a passo para o seu funcionamento completo

### Clone e Dependências

Clone o repositório do server (este mesmo) e instale todas as dependências com npm i

### Docker

Caso não tenha, faça o download do Docker Desktop. A seguir, abra o terminal na pasta raiz do projeto e dê o comando `docker-compose up`.
Certifique-se de que o Docker Desktop está rodando antes de dar o comando. O docker irá baixar a imagem do postgres e criar um banco de dados chamado 'funcionarios'.

### Conectando e criando tabelas

Para se conectar com o banco de dados criado pelo docker, dê os seguintes comandos:

1. `node .\src\sequelize\1_create.js`

Este comando cria as tabelas definidas nos models e sicroniza a aplicação com o banco de dados, porém exclui todas as tabelas já existentes, caso existam. Caso não queira excluir as tabelas existentes, comente a linha
`await models.sequelize.sync({force: true})` e descomente a linha `// await models.sequelize.sync()`

2. `node .\src\sequelize\2_insert.js`

Este comando insere os dados nas tabelas.


### Select

Para ver os dados inseridos, use o comando `node .\src\sequelize\3_select.js`

## Neste projeto

* Sequelize
* Express
* Postgres
* Docker compose
