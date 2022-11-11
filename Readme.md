# Try Lerna

[Tutorial](https://blog.logrocket.com/setting-up-monorepo-with-lerna-typescript/)

## Getting started

    lerna bootstrap

### Building

    lerna run tsc

### Running tests

Currently no tests for integration so specify scope

    lerna run test --scope=@hospital-sdk/doctor

### Run integration

    lerna run start --scope=@hospital-sdk/integration
