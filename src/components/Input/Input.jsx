import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import ReactTooltip from 'react-tooltip'
import styles from './Input.scss'

export default class Input extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isValid: this.props['data-errorMessage'] === '',
      currentErrorMessage: this.props['data-errorMessage'],
    }

    this.onChangeHandler = event => {
      this.clearInvalidState()
      this.props.onChange(event)
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      isValid: nextProps['data-errorMessage'] === '',
      currentErrorMessage: nextProps['data-errorMessage'],
    }, () => {
      if (nextProps['data-errorMessage'] !== '') {
        ReactTooltip.show(this.input)
      }
    })
  }

  getInlineAddon() {
    const classes = cx(styles.addon, {
      [styles[this.props.size]]: true,
    })
    if (this.props['data-hasInnerLeftAddon']) {
      return (
        <span className={classes}>
          {this.props['data-inlineAddon']}
        </span>
      )
    }
    return ''
  }

  clearInvalidState() {
    if (!this.state.isValid) {
      this.setState({
        isValid: true,
        currentErrorMessage: '',
      }, () => ReactTooltip.hide())
    }
  }

  render() {
    const CONTEXT_CLASS_NAME = this.state.isValid ? this.props['data-context'] : 'error'
    const classes = cx(
      this.props.className,
      styles.input,
      {
        [styles[this.props.size]]: true,
        [styles[CONTEXT_CLASS_NAME]]: true,
        [`${styles.hasAddonRight}`]: this.props['data-hasAddonRight'],
        [`${styles.hasInnerLeftAddon}`]: this.props['data-hasInnerLeftAddon'],
      }
    )

    const innerAddonClasses = cx({
      [styles.innerAddon]: this.props['data-hasInnerLeftAddon'],
    })

    return (
      <span className={innerAddonClasses}>
        {this.getInlineAddon()}
        <input
          {...this.props}
          onChange={this.onChangeHandler}
          className={classes}
          data-tip={this.state.currentErrorMessage}
          data-type="error"
          data-effect="solid"
          data-event="focus"
          data-event-off="blur"
          data-for={`${this.props.id}-tip`}
          data-class={styles.tooltip}
          ref={input => (this.input = input)}
        />
        <ReactTooltip id={`${this.props.id}-tip`} />
      </span>
    )
  }
}

Input.defaultProps = {
  type: 'text',
  size: 'medium',
  'data-context': 'default',
  'data-hasAddonRight': false,
  'data-hasInnerLeftAddon': false,
  'data-errorMessage': '',
  onChange: () => {
  },
  className: '',
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'password', 'submit']),
  size: PropTypes.oneOf(['big', 'medium', 'small']),
  'data-context': PropTypes.oneOf(['default', 'error']),
  addonRight: PropTypes.bool,
  'data-errorMessage': PropTypes.string,
  id: PropTypes.string.isRequired,
  'data-hasAddonRight': PropTypes.bool,
  'data-hasInnerLeftAddon': PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
  'data-inlineAddon': PropTypes.node,
}
