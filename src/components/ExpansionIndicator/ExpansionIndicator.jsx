import React, { PropTypes, Component } from 'react'
import cx from 'classnames'
import styles from './ExpansionIndicator.scss'

class ExpansionIndicator extends Component {
  render() {
    const classes = cx(
      styles.ExpansionIndicator,
      this.props.className,
      {
        [styles.expanded]: this.props.expanded,
        [styles.active]: this.props.active,
      }
    )

    return (
      <div className={classes} style={{ width: this.props.width, height: this.props.height }} />
    )
  }
}

ExpansionIndicator.defaultProps = {
  height: 24,
  width: 24,
  expanded: false,
  active: false,
}

ExpansionIndicator.propTypes = {
  expanded: PropTypes.bool,
  active: PropTypes.bool,
  height: PropTypes.number,
  width: PropTypes.number,
  className: PropTypes.string,
}

export default ExpansionIndicator
