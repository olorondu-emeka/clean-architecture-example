# clean-architecture-example

Project Repo for the flexible architecture blog post

## Folder Structure

```
clean-architecture-example
├─ .gitignore
├─ clean_architecture
│  ├─ config
│  │  ├─ dbConnection.js
│  │  └─ useCases.js
│  ├─ core
│  │  ├─ definitions
│  │  │  ├─ ErrorResponse.js
│  │  │  └─ SuccessResponse.js
│  │  ├─ entities
│  │  │  └─ User.js
│  │  └─ use_cases
│  │     └─ user
│  │        ├─ CreateUser.js
│  │        ├─ DeleteUser.js
│  │        ├─ GetSingleUser.js
│  │        └─ UpdateUser.js
│  ├─ data
│  │  ├─ database
│  │  │  ├─ nosql
│  │  │  │  ├─ index.js
│  │  │  │  └─ models
│  │  │  │     └─ user.js
│  │  │  └─ sql
│  │  │     ├─ config
│  │  │     │  ├─ knex.js
│  │  │     │  ├─ knexfile.js
│  │  │     │  └─ tableNames.js
│  │  │     └─ migrations
│  │  │        └─ 20210822143115_users.js
│  │  └─ implementations
│  │     ├─ index.js
│  │     ├─ nosql
│  │     │  └─ user.js
│  │     └─ sql
│  │        └─ user.js
│  └─ entry_point
│     └─ web
│        ├─ controllers
│        │  └─ user.js
│        ├─ helpers
│        │  └─ generateResponse.js
│        └─ routes
│           └─ users.js
├─ env.sample
├─ index.js
├─ package-lock.json
├─ package.json
├─ README.md
└─ regular
   ├─ controllers
   │  └─ users.js
   ├─ database
   │  ├─ index.js
   │  └─ users.js
   └─ routes
      └─ users.js

```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Prerequisites

System requirements for this project to work includes:

- Git
- NodeJs(v8 or higher)
- NPM
- Docker (optional)
- Postgres
- MongoDB
- Any IDE of your choice (VS Code is recommended)

Ensure that your MongoDB & Postgres server are running on your local machine.

### Running the project

To run the project on your local machine, follow the steps below:

#### Manual Setup

- Clone this repo and navigate to the project folder
- Create a **.env** file in the root directory of the project
- Copy the contents of the **env.sample** file into your newly created **.env** file
- Create a database called **clean_archi**
- Update the following variables in your **.env** file with your database credentials:
  - DEV_USER
  - DEV_PASSWORD
- Install [knex](http://knexjs.org/) globally by running the following command:

```bash
npm install knex -g
```

- Run the following commands sequentially:

```bash
npm install
npm run db:migrate
```

- To start the server, run:

```bash
npm run start:dev
```

You should see the server up and running on the link: `http://localhost:5000`
