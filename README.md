# clean-architecture-example

Example Repo for the clean architecture blog post

## Foldder Structure

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
