import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import styles from './Button.scss'

export default class Button extends Component {
  render() {
    const classes = cx(
      this.props.className,
      styles.button,
      {
        [styles[this.props.size]]: true,
        [styles[this.props['data-context']]]: true,
        [`${styles.isAddonRight}`]: this.props['data-isAddonRight'],
      }
    )

    return (
      <button {...this.props} className={classes}>{this.props.children}</button>
    )
  }
}

Button.defaultProps = {
  size: 'medium',
  'data-context': 'default',
  'data-isAddonRight': false,
  className: '',
}

Button.propTypes = {
  click: PropTypes.func,
  size: PropTypes.oneOf(['big', 'medium', 'small']),
  'data-context': PropTypes.oneOf(['success', 'error', 'default', 'info']),
  'data-isAddonRight': PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
}
