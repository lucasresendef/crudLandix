# CRUD de Vendedores e Clientes

Feito utilizando:

  - Backend: Node.js
  - Frontend: React.js
  - MySQL

### Instalação

- Requerimentos:
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [MySQL](https://dev.mysql.com/downloads/)

### MySQL
Para criação do banco de dados utilize o [MySQL](https://dev.mysql.com/downloads/)

Por padrão as configurações para login serão:
- Host: localhost
- Port: 3306
- username: root
- password: Resende@123

- Crie um banco de dados com o nome de crud

- Crie duas tabelas: 
 - Tabela seller: cdvend = Integer;  dsnome = Varchar(50);  cdtab = Integer ;  dtnasc = Date;
 - Tabela clients: cdcl = Integer;  dsnome= Varchar(50);  idtipo = Integer;  cdvendedor = Varchar(36);  dslim = Integer;
 

### Rodando a aplicação

Clone o repositório utilizando:

```sh
$ git clone git@github.com:lucasresendef/crudLandix.git
```

Vá para o diretório da api:
```sh
$ cd crudLandix/client/server
$ npm install
```

Em um novo terminal no diretório do frontend:
```sh
$ cd crudLandix/client
$ yarn install
```



Para rodar o servidor basta executar este comando dentro da pasta client/server:
```sh
$ node index.js
```

E para visualizar a aplicação React rode este comando dentro da pasta client:
```sh
$ yarn start
```

## To-dos

### Front-end

- [x] Criar projeto com ReactJS
- [x] Instalar o Axios
- [x] Configurar o projeto
- [x] Configurar as Rotas da Aplicação
- [x] Adicionar a biblioteca Cors na API (Back-end)
- [x] Criar Página de Vendedores
- [x] Criar componente de Listagem de Vendedores
- [x] Criar componente de Listagem de Clientes
- [x] Criar componente de Cadastro
- [x] Criar componente de Edição
- [x] Criar componente de Remoção
- [x] Criar componente de Visualização

#### Back-end

- [x] Criar projeto Nodejs
- [x] Ajustar estrutura do projeto
- [x] Desenvolver CRUD de Vendedores e clientes




# APP

![React APP](https://media.giphy.com/media/Q0xMwa2zs2NsvD7Nki/giphy.gif)


