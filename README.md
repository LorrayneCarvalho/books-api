# API de livros

## Pré requisitos

- Node.js v14
- Npm v6
- Docker
- docker-compose

## Como rodar o projeto usando docker-compose

Rode o seguinte comando no terminal

```bash
$ docker-compose up
```

> OBS: Durante o desenvolvimento da aplicação, eu notei que ao rodar a aplicação com o docker-compose, ele demorava a conectar com o banco, a forma como consegui fazer funcionar foi rodando o comando docker-compose up e esperando ele conectar, mesmo dandos vários erros na primeira tentativa, depois disso, é possível rodar a aplicação usando o comando docker-compose up -d.

## Como rodar o projeto manual

> OBS: precisa ter uma instancia do Mysql em execução, seja nativa ou via Docker.

```bash
$ npm run dev
```

## Como rodar os teste

Rode o seguinte comando no terminal

```bash
$ npm run test
```

E se estiver rodando no docker-compose, execute o seguinte comando

```bash
$ docker-compose up -d back npm run test
```

## Endpoits

- A rota para execução da API é http://localhost:3000

- GET /
    - Lista os livros
- GET /:id
    - Lista um livro
- POST /
    - Cria um novo livro
    - Body:
        - sbn
        - name
        - description
        - author
        - stock
- PUT /:id
    - Atualiza um livro
    - Body:
        - name
        - description
        - author
        - stock
- DELETE /:id
    - Remove um livro