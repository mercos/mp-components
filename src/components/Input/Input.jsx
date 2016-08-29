import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import styles from './Input.scss'

export default class Input extends Component {
  render() {
    let contextClassName = this.props.errorMessage !== '' ? 'error' : this.props.context
    let classes = cx(
      styles.input,
      {
        [styles[this.props.size]]: true,
        [styles[contextClassName]]: true,
        [`${styles.hasAddonRight}`]: this.props.hasAddonRight
      }
    )

    return (
      <input {...this.props} className={classes} />
    )
  }
}

Input.defaultProps = {
  type: 'text',
  size: 'medium',
  context: 'default',
  addonRight: false,
  errorMessage: ''
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'password', 'submit']),
  size: PropTypes.oneOf(['big', 'medium', 'small']),
  context: PropTypes.oneOf(['default', 'error']),
  addonRight: PropTypes.bool,
  errorMessage: PropTypes.string,
}
