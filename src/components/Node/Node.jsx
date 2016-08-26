import React, { Component } from 'react'
import cx from 'classnames'
import NodeOptions from '../NodeOptions'
import styles from './Node.scss'

export default class Node extends Component {
  render() {
    let classes = cx(
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

Node.propTypes = {
  name: React.PropTypes.string.isRequired,
  level: React.PropTypes.number.isRequired
}
