# Trivia Game

This is a simple trivia game built using a modular architecure.

The diagram bellow give an overview of the project:

![Application Diagram](diagram.png?raw=true 'Application Diagram')

The idea is to have independent modules, that contains everything to work, inside one folder.

Each module exports a registration object through `index.tsx` file, and the application load those modules on `modules.ts`.

When needed a module can export APIs to be used by other modules through the `shared.tsx`, this makes dependency between modules explicit and the teams are aware of the risks of an API change.

## Usage

The application was bootstraped using [Create React App](https://create-react-app.dev/docs/getting-started/), so every CRA command is still valid.

### Start

`yarn start`

### Test

`yarn test`

### Build

`yarn build`
