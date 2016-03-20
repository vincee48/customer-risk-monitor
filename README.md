## Customer Risk Monitor

Working example can be found at: http://vincee48.github.io/customer-risk-monitor/

Customer Risk Monitor is a React.js application which accepts data as a CSV and provides the components to display tabular data to highlight risks and unusual activity.

- [Technologies](#technologies)
- [Approach](#approach)
- [Installation](#installation)
- [Scripts](#scripts)
- [Packages](#packages)

### Technologies
Technologies used for development:

- [React.js](https://facebook.github.io/react/)
- [Babel.js (ES2015 + JSX)](https://babeljs.io/)
- [Redux.js](http://redux.js.org/)
- [LESS preprocessor](http://lesscss.org/)
- [Webpack bundler](https://webpack.github.io/)
- [Mocha test framework](https://mochajs.org/)
- [Airbnb Enzyme testing utilities](https://github.com/airbnb/enzyme)
- [Chai BDD/TDD assertion library](http://chaijs.com/)
- [React-Router with History](https://github.com/reactjs/react-router)

### Approach
Approach taken for development were:

1. ES2015 / ES6+ only
2. Stateless React components where possible
3. Handle business logic on Redux store where not indicative only
4. High test coverage on components and stores
5. Completely independent components to be used for other datasets

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

### Packages
Packages used for development:

```
// React
npm install --save react react-dom

// Webpack / Loaders
npm install --save-dev webpack webpack-dev-server less less-loader style-loader css-loader react-hot-loader dsv-loader

// ES2015 / ES7 / JSX compiler
npm install --save-dev babel-core babe-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0

// Linting
npm install --save-dev babel-eslint@4.1.3 eslint@1.10.3 eslint-plugin-react@3.6.2

// Testing
npm install --save-dev react-addons-test-utils mocha chai enzyme jsdom ignore-styles

// Components
npm install --save react-router history
```
