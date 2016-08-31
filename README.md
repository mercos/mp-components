# About
`mp-components` is a pack of React components originally created for [Meus Pedidos](https://meuspedidos.com.br), an online sales force solution.  

# Internal development
- Setup Meus Pedidos' NPM credentials using [this step-by-step](https://gist.github.com/coolaj86/1318304)
- `$ git clone git@github.com:meuspedidos/mp-components.git`
- `$ cd mp-components`
- Fire up `react-storybook` using `$ npm run storybook` then navigate to http://0.0.0.0:9001
- Hack away then commit your changes
- Add your changes to `CHANGELOG.md`, but **DO NOT COMMIT**
- Run the following command using **ONE** of the options (*patch, minor, major*) according to the kind of changes you just made: `$ npm run version:[patch, minor, major]`. This command will bump the package version, create a new commit, a new tag, generate a new build, publish the new files to `npmjs.com`, build the `storybook` app and publish it to `GH Pages`

## Helpful NPM commands
- `build`: builds the distributable Node package inside the `lib` directory
- `storybook`: starts [React Storybook](https://github.com/kadirahq/react-storybook/) @ http://localhost:9001
- `lint`: lints both `js` and `scss` files
- `lint:js`: lints `js` files only
- `lint:sass`: lints `scss` files only
- `gh-pages`: builds a static version of storybook to be used in Github Pages inside the `_gh-pages` dir
- `version:[patch, minor, major]`: ships everything (Github, NPM and Github Pages)

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
