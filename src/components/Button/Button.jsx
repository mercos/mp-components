import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import styles from './Button.scss'

export default class Button extends Component {
  render() {
    let classes = cx(
      styles.button,
      {
        [styles[this.props.size]]: true,
        [styles[this.props.context]]: true,
      }
    )

    return (
      <button onClick={this.props.click} className={classes}>{this.props.children}</button>
    )
  }
}

Button.defaultProps = {
  size: 'medium',
  context: 'default'
}

Button.propTypes = {
  click: PropTypes.func,
  size: PropTypes.oneOf(['big', 'medium', 'small']),
  context: PropTypes.oneOf(['success', 'error', 'default', 'info']),
}
