import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import styles from './InlineAlert.scss'

export default class InlineAlert extends Component {
  render() {
    const classes = cx(
      this.props.className,
      {
        [`${styles.inlineAlert}`]: true,
        [styles[this.props.context]]: true,
      }
    )

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    )
  }
}

InlineAlert.defaultProps = {
  context: 'info',
  className: '',
}

InlineAlert.propTypes = {
  context: PropTypes.oneOf(['error', 'info']),
  children: PropTypes.any,
  className: PropTypes.string,
}
