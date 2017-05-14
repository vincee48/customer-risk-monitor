## Customer Risk Monitor

Working example can be found at: http://vincentsylo.github.io/customer-risk-monitor/

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

#### Task 1:
A customer that wins on more than 60% of their settled bets will be flagged as a high risk customer. This appears in the customer listing on the left side of the application in a condensed view, as well as on their statistics listing in a badge format. Furthermore, they will also be flagged on their unsettled bets view.

#### Task 2:
* Unsettled bets from customers that win at an unusual rate will be highlighted as High Risk (as above) in their unsettled bets view.
* Bets where the stake is more than 10 times higher than the customer's average will be highlighted in orange, as well as flagging the customer as having an Unusual activity in their Unsettled bets.
* Bets where the stake is more than 30 times higher than the customer's average will be highlighted in red, as well as flagging the customer as having a Highly Unusual activity in their Unsettled bets.
* Bets where the amount to be won is $1000 or more will be highlighted as teal, as well as flagging the customer as having a potential winning amount > $1000.

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
