import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import styles from './Input.scss'

export default class Input extends Component {
  render() {
    let classes = classNames({
      [`${styles.input}`]: true,
      [styles[this.props.size]]: true,
      [styles[this.props.context]]: true,
      [`${styles.addonRight}`]: this.props.addonRight
    })

    return (
      <input {...this.props} className={classes} />
    )
  }
}

Input.defaultProps = {
  type: 'text',
  size: 'medium',
  context: 'default',
  addonRight: false
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'password', 'submit']),
  size: PropTypes.oneOf(['big', 'medium', 'small']),
  context: PropTypes.oneOf(['default', 'error']),
  addonRight: PropTypes.bool
}
