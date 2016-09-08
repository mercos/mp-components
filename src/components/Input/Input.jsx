import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import ReactTooltip from 'react-tooltip'
import styles from './Input.scss'

export default class Input extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isValid: this.props.errorMessage === '',
      currentErrorMessage: this.props.errorMessage,
    }

    this.onChangeHandler = (event) => { this.clearInvalidState(); this.props.onChange(event) }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      isValid: nextProps.errorMessage === '',
      currentErrorMessage: nextProps.errorMessage,
    }, () => {
      if (nextProps.errorMessage !== '') {
        ReactTooltip.show(this.input)
      }
    })
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
    const CONTEXT_CLASS_NAME = this.state.isValid ? this.props.context : 'error'
    let classes = cx(
      this.props.className,
      styles.input,
      {
        [styles[this.props.size]]: true,
        [styles[CONTEXT_CLASS_NAME]]: true,
        [`${styles.hasAddonRight}`]: this.props.hasAddonRight,
      }
    )

    return (
      <span>
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
          ref={(input) => (this.input = input)}
        />
        <ReactTooltip id={`${this.props.id}-tip`} />
      </span>
    )
  }
}

Input.defaultProps = {
  type: 'text',
  size: 'medium',
  context: 'default',
  hasAddonRight: false,
  errorMessage: '',
  onChange: () => {},
  className: '',
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'password', 'submit']),
  size: PropTypes.oneOf(['big', 'medium', 'small']),
  context: PropTypes.oneOf(['default', 'error']),
  addonRight: PropTypes.bool,
  errorMessage: PropTypes.string,
  id: PropTypes.string.isRequired,
  hasAddonRight: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
}
