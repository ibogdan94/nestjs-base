## Installation

```bash
# copy env file and file with prod/test data
$ cp .env.dist .env
$ npm i
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Migrations

```bash
# create a user model migration
$ typeorm migration:create -n UserModel

# run migration
$ ts-node ./node_modules/typeorm/cli.js migration:run

```


