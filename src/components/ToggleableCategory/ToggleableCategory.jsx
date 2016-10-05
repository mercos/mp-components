import React, { PropTypes, Component } from 'react'
import cx from 'classnames'
import styles from './ToggleableCategory.scss'

class ToggleableCategory extends Component {
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
      <li {...this.props} className={componentClasses}>
        <div className={contentClasses}>
          <span className={styles.label}>
            {this.props.label}
          </span>
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
  level: 1,
}

ToggleableCategory.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  active: PropTypes.bool,
  level: PropTypes.number,
  children: PropTypes.any,
}

export default ToggleableCategory
