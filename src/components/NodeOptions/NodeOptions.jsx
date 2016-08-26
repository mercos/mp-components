import React, { Component } from 'react'
import styles from './NodeOptions.scss'

export default class NodeOptions extends Component {
  render() {
    const visibility = this.props.show ? 'visible' : 'hidden'

    return (
      <span className={styles.wrapper} style={{ visibility: visibility }}>
        {this.props.children}
      </span>
    )
  }
}

NodeOptions.defaultProps = {
  show: false
}

NodeOptions.propTypes = {
  show: React.PropTypes.bool,
}
