# Welcome to the users-api repository!

This is a simple repository that I made using Node.js as the core tecnology. The goal of this little project was to create a simple users RESTFUL API using Node.js.

Here is a list of all the technologies that I used:

| Tecnology | Purpose |
|-----------|----------------------|
| Node.js   | Core                 |
| Express   | Server and Routing   |
| Database  | Postgres             |
| Sequelize | ORM                  |
| Celebrate | Validation           |
| JWT       | Authentication       |

If you wish to try this repositoy, please note that you will need to configure your database authentication in the `.env` for that I included a `.env.example` of what you will need to connect with your database. Also note that you can only use the following databases:

- Postgres

- MariaDB

- MySQL

- SqLite

- SQL Server

Remember that you will to install the database drivers, except if you are using postgres, as they are already in the `package.json` file.

You will also need to generate a key for the application use in JWT authentication, set your app key in the `.env` file