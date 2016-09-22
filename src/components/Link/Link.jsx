import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import styles from './Link.scss'

export default class Link extends Component {
  render() {
    const classes = cx(
      this.props.className,
      styles.link,
      styles[this.props.context],
      { [`${styles.decorated}`]: this.props.decorated }
    )

    return (
      <a href="" {...this.props} className={classes}>{this.props.children}</a>
    )
  }
}

Link.defaultProps = {
  context: 'default',
  decorated: false,
  onClick: (event) => { event.preventDefault() },
  className: '',
}

Link.propTypes = {
  context: PropTypes.oneOf(['default', 'error']),
  decorated: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.any,
  className: PropTypes.string,
}
