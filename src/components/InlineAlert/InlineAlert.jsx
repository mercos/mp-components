import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import styles from './InlineAlert.scss'

export default class InlineAlert extends Component {
  render() {
    let classes = classNames({
      [`${styles.inlineAlert}`]: true,
      [styles[this.props.context]]: true,
    })

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    )
  }
}

InlineAlert.defaultProps = {
  context: 'info',
}

InlineAlert.propTypes = {
  context: PropTypes.oneOf(['error', 'info']),
  children: PropTypes.any,
}
