<h1 align="center">Valoriza</h1>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=000000">

  <img src="https://img.shields.io/static/v1?label=NLW&message=Together&color=8257E5&labelColor=000000" alt="NLW Together" />
</p>

![preview](https://user-images.githubusercontent.com/83431609/123527877-8bf03080-d6b9-11eb-9fa8-0a51050d957c.png)


## ✨ Technologies

This project was developed with the following technologies:

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [JSONWebToken](https://github.com/auth0/node-jsonwebtoken#readme)

## 💻 Project

Valoriza is a platform to promote recognition among teammates.

## Features 📌

- Registering users 
    - [x] It is not allowed to register more than one user with the same email address.
    - [x] It is not allowed to register the users without email address.

- Label Registration
    - [x] Not allowed to register more than one tag with the same name
    - [x] It is not allowed to register the user without name
    - [x] It is not allowed to register a tag for non-admin users

- Registering Praises
    - [x] A user is not allowed to register a praise for you
    - [x] It is not allowed to register a praise for invalid users.
    - [x] The user must be authenticated in the application.

## 🚀 How to run

- Clone the repository
- Run `yarn` to download the dependencies
- Run `yarn typeorm migration:run` to create the database tables.
- Run `yarn dev` to start the application.

Finally, the application will be available at `http://localhost:3000`

## 📄 License

This project is under the MIT license. See the file [LICENSE](LICENSE.md) for more details.

---
