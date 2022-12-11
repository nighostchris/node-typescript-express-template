# node-typescript-express-template

Immediately clonable web server template with Node.js + Typescript + Express

## Pre-requisite

```bash
❯ npm --version
9.2.0
❯ node --version
v16.18.0
```

## How to use

Add normal logic code with file extension `.ts` inside `/src` directory.

Add test cases for the whole project inside `/tests` directory with file extension `.test.ts`

Copy `.env.example` to `.env` and modify

### Commands

```bash
# Start web server and restart it when detected code changes under /src
npm run dev
# Linting
npm run lint
# Compile and build the service
npm run build
# Try to serve the compiled server
npm run start
# Run test cases
npm run test
# Compile and build the service for production usage
npm run build:prod
```

### Database Connection

We will be using [Knex.js](https://knexjs.org/) for database management

We are using PostgreSQL by default, thus `pg` driver is installed as dependencies already

```bash
npm install sqlite3
npm install better-sqlite3
npm install mysql
npm install mysql2
npm install oracledb
npm install tedious
```

If you want to use CockroachDB or Redshift instance, you can use the pg driver.

If you want to use a MariaDB instance, you can use the mysql driver.

Modify client name in `db.config.ts` to match with your desired database driver.
