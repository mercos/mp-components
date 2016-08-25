import React, { Component } from 'react'
import classNames from 'classnames'
import styles from './Input.scss'

export default class Input extends Component {
  render() {
    let classes = classNames({
      [`${styles.input}`]: true,
      [styles[this.props.size]]: true,
      [styles[this.props.context]]: true
    })

    return (
      <input {...this.props} className={classes} />
    )
  }
}

Input.defaultProps = {
  type: 'text',
  size: 'medium',
  context: 'default'
}

Input.propTypes = {
  type: React.PropTypes.oneOf(['text', 'number', 'password', 'submit']),
  size: React.PropTypes.oneOf(['large', 'medium', 'small']),
  context: React.PropTypes.oneOf(['default', 'error'])
}
