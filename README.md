# About
`mp-components` is a pack of React components originally created for [Meus Pedidos](https://meuspedidos.com.br), an online sales force solution.  

# Development
- `$ git clone git@github.com:meuspedidos/mp-components.git`
- `$ cd mp-components`
- Fire up `react-storybook` using `$ npm run storybook` then navigate to http://0.0.0.0:9001
- Hack away then commit your changes
- TODO

## Available NPM commands
- `build`: builds the distributable Node package inside the `lib` directory AFTER linting both `js` and `scss` files
- `storybook`: starts [React Storybook](https://github.com/kadirahq/react-storybook/) @ http://localhost:9001
- `lint`: lints both `js` and `scss` files
- `lint:js`: lints `js` files only
- `lint:sass`: lints `scss` files only
- `gh-pages`: builds a static version of storybook to be used in Github Pages inside the `_gh-pages` dir

# How to use
- `$ npm i react react-dom mp-components -D`
- `$ npm i mp-components -D`
- In your React component
```javascript
import React, { Component } from 'react'
import { Button } from 'react-components'
import 'node_modules/mp-components/lib/css/Button.css'

export default class App extends Component {
  render() {
    return (
      <Button>Press me!</Button>
    )
  }
}
```

# License
MIT
