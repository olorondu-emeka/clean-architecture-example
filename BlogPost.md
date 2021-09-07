### Outline

1. Scope of the article
2. Introduction
3. Prerequisites
4. Project setup
5. Principles of a good software architecture
6. Use cases
   a. Case 1: Tightly coupled architecture
   b. Case 2: Scalable architecture
7. Conclusion
8. Helpful links

### Scope of the article

This article teaches about how to implement a flexible architecture at the granular level with a practical example demonstrated using NodeJs (Express), MongoDB & Postgres.

**Non-scope:** This article does **not** teach about building REST APIs with NodeJs. Prior knowledge of this is expected.

**Disclaimer:** Software architecture is a broad concept composed of several components and involves a lot of technical decisions to achieve. Owing to this, the concepts taught in this article is by no means an all-encompassing standard that guides building a scalable architecture, but rather seeks to demonstrate its fundamental principles at the most basic level. Feel free to adopt the concepts that best suits your project or organization.

### Introduction

A common experience among private individuals building software and tech companies of varying sizes (startups, mid and large) is the need to build products fast.

In most cases, market research is carried out to validate the viability of a product idea, after which a Minimum Viable Product (MVP) is built. An MVP is the initial executed version of the product idea with minimum features required to establish a market presence, attract early customers and gain as much user feedback as possible, after which several iterations are done to improve the product based on the user feedback.

Usually, some of the long-term goals for any software product is **scalability** and **maintainability**. A product that scales would be able to accommodate an increasing number of users. A critical factor that affects the scalability of such software products is the architecture. A good architecture is easy to maintain, thereby ensuring that engineers can iterate quickly and build efficiently. Conversely, a poorly implemented architecture would inhibit software engineers from iterating quickly and accumulate a great deal of technical debt which would eventually incur losses (technical & financial resources) on the business.

Owing to this, how can software engineers structure their architecture in a way that is scalable and flexible to changes?

In this article, we would learn about what a good software architecture looks like and how to implement it by comparing two use cases.

### Prerequisites

The following prerequisites is required for this article:

**Knowledge**

- Basic knowledge of NodeJs (Express), MongoDB & Postgres
- Basic knowledge of KnexJs and Mongoose.
- Basic knowledge of REST APIs & Postman.

**Technical stack**

- NodeJs (v8 or higher) & npm
- MongoDB
- Postgres
- Postman

### Project setup

In order to follow along with the example project, clone this repo and follow the instructions detailed in its ReadMe file for the local development environment setup.

The project is a simple CRUD application with the following functionalities

- creating a user
- retrieving a single user
- retrieving all users
- updating a user
- deleting a user.

### What is a good software architecture?

The architecture of a system is the shape or structure of the system created by the developers of such system. A good software architecture is one in which components of the system can be changed without compromising the core functionality (business logic). in order words, options such as the database management system (SQL, NoSQL, Graph etc) API strategy (REST, GraphQL etc), delivery platform (web, desktop etc) should be flexible to changes without necessarily affecting the overall performance of the system.

### Practical use cases

In order to gain a practical understanding of what a flexible architecture looks like, let's analyze the project example.

The major use cases we would look at are:

- regular architecture
- clean architecture

#### Regular Architecture

The folder labeled **regular** is an architecture that is commonly used in small and medium-scale projects. Below is its structure:

```bash
clean-architecture-example
└─ regular
   ├─ controllers
   │  └─ users.js
   ├─ database
   │  ├─ index.js
   │  └─ users.js
   └─ routes
      └─ users.js

```

**Folder Structure**

The **regular** folder follows a typical Express.js project structure. It is composed of the following sub-folders:

- **controllers:** This folder comprises of files that contains the core business logic responsible for the functionality of different modules of the application. In this case, it consist of a single file named `users.js`, which we would examine later.

- database: The database folder usually houses the `models` and `migration` files for the database. In this project, it consists of:
- the index.js file which is an improvised in-memory database. Below is its content:

```js
let database = {};

module.exports = {
  getDB: () => {
    if (!database) {
      database = {};
    }
    return database;
  }
};
```

- the `users.js` file, which contains the methods for accessible basic CRUD functionalities of the database, as shown below

```js
const database = require('./index');

class User {
  constructor() {
    this.db = database.getDB();
    this.index = 0;
  }

  create(inputFields) {
    this.index += 1;
    this.db[this.index] = inputFields;
  }

  findAll() {
    return Object.values(this.db);
  }

  findByEmail(email) {
    let found = false;
    let possibleUser = null;

    Object.values(this.db).forEach((user) => {
      if (user.email === email) {
        found = true;
        possibleUser = user;
        return;
      }
    });

    return possibleUser;
  }

  findById(id) {
    return this.db[id];
  }

  update(id, inputFields) {
    this.db[id] = { ...this.db[id], ...inputFields };
  }

  delete(id) {
    delete this.db[id];
  }
}

module.exports = User;
```

This architecture is easy to get started with but is fundamentally not scalable as a result of its tightly coupled structure.

To demonstrate, let's examine the file named `users.js` contained in the `controllers` folder:

```js
const userModel = require('../database/users');
const UserModel = new userModel();

class Users {
  /**
   * @async
   * @param {object} req express request object
   * @param {object} res express response object
   */
  static create(req, res) {
    try {
      const { lastName, firstName, email, password } = req.body;
      if (!lastName || !firstName || !email || !password) {
        return res.status(400).json({ message: 'incomplete input fields' });
      }

      const possibleUser = UserModel.findByEmail(email);
      if (possibleUser) {
        return res.status(409).json({ message: 'user already exists' });
      }

      UserModel.create({ lastName, firstName, email, password });
      return res.status(201).json({ message: 'user created successfully' });
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * @async
   * @param {object} req express request object
   * @param {object} res express response object
   */
  static findAllOrOne(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        const allUsers = UserModel.findAll();
        return res.status(200).json({ users: allUsers });
      }

      const possibleUser = UserModel.findById(id);

      if (!possibleUser) {
        return res.status(404).json({ message: 'user does not exist' });
      }

      return res.status(200).json({ user: possibleUser });
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * @async
   * @param {object} req express request object
   * @param {object} res express response object
   */
  static update(req, res) {
    try {
      const { id } = req.params;

      const possibleUser = UserModel.findById(id);

      if (!possibleUser) {
        return res.status(404).json({ message: 'user does not exist' });
      }

      UserModel.update(id, req.body);
      return res.status(200).json({ message: 'user updated successfully' });
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * @async
   * @param {object} req express request object
   * @param {object} res express response object
   */
  static delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ message: 'id param is required' });
      }

      const possibleUser = UserModel.findById(id);
      if (!possibleUser) {
        return res.status(404).json({ message: 'user not found' });
      }

      UserModel.delete(id);
      return res.status(200).json({ message: 'user deleted successfully' });
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = Users;
```

From the above file, the following observations could be made as examples of tight coupling:

- database query functions are called directly in this file, as reflected by the import on line 1. A disadvantage of this is that changes made to the `userModel` would directly affect the business logic of the application.

- the business logic contained in the `controllers/users.js` file has been directly bound to a single type of database (in this case, the in-memory database). A change in the type of database used (e.g MongoDB) would mean that several parts of this file containing database query methods would be changed as well. Once again, the business logic has been affected by a non-business factor.

Ideally, the business logic should only be modified if there is a change in the business requirements. Therefore, we need to structure our application in such a way that the critical component of the application (business logic) should not be affected by the less-critical component of the application (database, API strategy, delivery platform etc.

An alternative architecture which effectively handles the above concerns is discussed below.

#### Clean Architecture
