import React, { PropTypes, Component } from 'react'
import cx from 'classnames'
import styles from './ToggleableCategory.scss'
import ExpansionIndicator from '../ExpansionIndicator'

class ToggleableCategory extends Component {
  getIndicator(level) {
    if (level < 3) {
      return (
        <span className={styles.indicator}>
          <ExpansionIndicator active={this.props.active} expanded={this.props.open} />
        </span>
      )
    }

    return null
  }

  render() {
    const componentClasses = cx(
      styles.component,
      this.props.className
    )
    const contentClasses = cx(
      styles[`level${this.props.level}`],
      styles.content,
      { [styles.active]: this.props.active }
    )

    return (
      <li className={componentClasses}>
        <div className={contentClasses}>
          <span className={styles.label}>
            {this.props.label}
          </span>
          {this.getIndicator(this.props.level)}
        </div>

        {this.props.children}
      </li>
    )
  }
}

ToggleableCategory.defaultProps = {
  label: '<<null>>',
  className: '',
  active: false,
  open: false,
  level: 1,
}

ToggleableCategory.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  active: PropTypes.bool,
  open: PropTypes.bool,
  level: PropTypes.number,
  children: PropTypes.any,
}

export default ToggleableCategory
