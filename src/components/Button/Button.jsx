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
        [`${styles.isAddonRight}`]: this.props.isAddonRight,
      }
    )

    return (
      <button {...this.props} className={classes}>{this.props.children}</button>
    )
  }
}

Button.defaultProps = {
  size: 'medium',
  context: 'default',
  isAddonRight: false,
}

Button.propTypes = {
  click: PropTypes.func,
  size: PropTypes.oneOf(['big', 'medium', 'small']),
  context: PropTypes.oneOf(['success', 'error', 'default', 'info']),
  isAddonRight: PropTypes.bool,
  children: PropTypes.any,
}
