<h1 align="center">Valoriza</h1>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=000000">

  <img src="https://img.shields.io/static/v1?label=NLW&message=Together&color=8257E5&labelColor=000000" alt="NLW Together" />
</p>

![preview](https://user-images.githubusercontent.com/83431609/123527877-8bf03080-d6b9-11eb-9fa8-0a51050d957c.png)


## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [JSONWebToken](https://github.com/auth0/node-jsonwebtoken#readme)

## 💻 Projeto

Valoriza é uma plataforma para promover o reconhecimento entre companheiros de equipe.

## Funcionalidades 📌

- Registo de usuários 
    - [x] Não é permitido registar mais do que um usuários com o mesmo endereço de email.
    - [x] Não é permitido registar o usuários sem endereço de email.

- Registo de Etiquetas
    - [x] Não é permitido registar mais do que uma etiqueta com o mesmo nome
    - [x] Não é permitido registar o utilizador sem nome
    - [x] Não é permitido registar uma etiqueta para utilizadores não administradores

- Registo de elogios
    - [x] Não é permitido a um utilizador registar um elogio para si.
    - [x] Não é permitido registar um elogio para utilizadores inválidos.
    - [x] O utilizador deve ser autenticado na aplicação.

## 🚀 Como executar

- Clone o repositório
- Rode `yarn` para baixar as dependências
- Rode `yarn typeorm migration:run` para criar as tabelas do banco de dados.
- Rode o `yarn dev` para iniciar a aplicação.

Por fim, a aplicação estará disponível em `http://localhost:3000`

## 📄 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---
