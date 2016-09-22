import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import styles from './Node.scss'

export default class Node extends Component {
  render() {
    const classes = cx(
      this.props.className,
      styles[`nodeLevel${this.props.level}`],
      styles.node
    )

    return (
      <div className={classes}>
        <span className={styles.nodeLabel}>{this.props.name}</span>
        {this.props.children}
      </div>
    )
  }
}

Node.defaultProps = {
  className: '',
}

Node.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  children: PropTypes.any,
  className: PropTypes.string,
}
