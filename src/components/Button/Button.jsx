import React, { Component } from 'react'
import styles from './Button.scss'

export default class Button extends Component {
  render() {
    return (
      <button onClick={this.props.click} className={styles.button}>{this.props.children}</button>
    )
  }
}

Button.propTypes = {
  click: React.PropTypes.func,
  children: React.PropTypes.string,
}
