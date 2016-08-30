import React from 'react'
import classNames from 'classnames'
import styles from './InlineAlert.scss'

export default class InlineAlert extends React.Component {
  render() {
    let classes = classNames({
      [`${styles.inlineAlert}`]: true,
      [styles[this.props.context]]: true
    })

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    )
  }
}

InlineAlert.defaultProps = {
  context: 'info'
}

InlineAlert.propTypes = {
  context: React.PropTypes.oneOf(['error', 'default'])
}
