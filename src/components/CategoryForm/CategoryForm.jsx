import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import Link from '../Link'
import Input from '../Input'
import Button from '../Button'
import styles from './CategoryForm.scss'

export default class CategoryForm extends Component {
  render() {
    return (
      <form
        {...this.props}
        className={cx(this.props.className, styles.categoryForm)}
        ref={(form) => (this.formRef = form)}
      >
        <Input
          id={`category-for-${this.props.parentId}`}
          hasAddonRight
          autoComplete="off"
          onChange={this.props.onChangeInputValue}
          errorMessage={this.props.inputErrorMessage}
          ref={(input) => (this.inputRef = input)}
          placeholder={this.props.inputPlaceholder}
        />
        <Button isAddonRight context="info" type="submit">{this.props.submitButtonLabel}</Button>
        <Link onClick={this.props.onClickCancelLink}>{this.props.cancelLinkLabel}</Link>
      </form>
    )
  }
}

CategoryForm.defaultProps = {
  submitButtonLabel: 'OK',
  cancelLinkLabel: 'Cancel',
}

CategoryForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
  submitButtonLabel: PropTypes.string,
  cancelLinkLabel: PropTypes.string,
  onClickCancelLink: PropTypes.func.isRequired,
  inputErrorMessage: PropTypes.string,
  parentId: PropTypes.number.isRequired,
  inputPlaceholder: PropTypes.string,
  onChangeInputValue: PropTypes.func,
}
