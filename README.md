## Customer Risk Monitor

Customer Risk Monitor is a React.js + Redux.js application which accepts data as a CSV and provides the components to display tabular data to highlight risks and unusual activity.

- [Packages](#packages)
- [Installation](#installation)
- [Scripts](#scripts)

### Packages
Packages used for development:

```
// React
npm install --save react react-dom

// Webpack / Loaders
npm install --save-dev webpack webpack-dev-server less less-loader style-loader css-loader react-hot-loader
npm install --save dsv-loader

// ES2015 / ES7 / JSX compiler
npm install --save-dev babel-core babe-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0

// Linting
npm install --save-dev babel-eslint@4.1.3 eslint@1.10.3 eslint-plugin-react@3.6.2

// Testing
npm install --save-dev react-addons-test-utils mocha chai enzyme jsdom ignore-styles

// Components
npm install --save react-router history
```

### Installation
```
// Clone the repository and run
npm install
```

### Scripts
```
// Start the local webpack server
npm start

// Run tests with Mocha, Chai and Enzyme
npm test

// Run a test watcher to listen to changes in the code and automatically run tests
npm run test:watch

// Lint your code
npm run lint

// Run a production build with tests and linting
npm run dist
```
