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

Create your environment variable file `.env`

### Development

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
