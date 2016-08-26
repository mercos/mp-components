import React, { Component } from 'react'
import cx from 'classnames'
import styles from './Link.scss'

export default class Link extends Component {
  constructor(props) {
    super(props)

    this.onClickHandler = (event) => this.props.onClick(event)
  }

  render() {
    let classes = cx(
      styles.link,
      styles[this.props.context],
      {[`${styles.decorated}`]: this.props.decorated}
    )

    let link
    if(this.props.fontIconClass) {
      link = <a href="" className={classes} onClick={this.onClickHandler}><i className={this.props.fontIconClass}/> {this.props.children}</a>
    } else {
      link = <a href="" className={classes} onClick={this.onClickHandler}>{this.props.children}</a>
    }

    return link
  }
}

Link.defaultProps = {
  context: 'default',
  decorated: false,
  onClick: (event) => {event.preventDefault()}
}

Link.propTypes = {
  context: React.PropTypes.oneOf(['default', 'error']),
  decorated: React.PropTypes.bool,
  fontIconClass: React.PropTypes.string,
  onClick: React.PropTypes.func,
}
