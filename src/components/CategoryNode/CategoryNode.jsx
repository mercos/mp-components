import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import InlineAlert from '../InlineAlert'
import Node from '../Node'
import NodeOptions from '../NodeOptions'
import Link from '../Link'
import Input from '../Input'
import Button from '../Button'
import styles from './CategoryNode.scss'

export default class CategoryNode extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showNodeOptions: false,
      showInlineAlert: false,
      showNewCategoryInput: false,
      newSubcategoryInputValue: '',
    }

    this.onMouseOverHandler = () => this.toggleNodeOptions()
    this.onMouseOutHandler = () => this.toggleNodeOptions()
    this.onClickDeleteCategoryHandler = (event) => this.toggleInlineAlert(event)
    this.onClickNoInlineAlert = (event) => this.toggleInlineAlert(event)
    this.deleteCategoryHandler = (event) => this.deleteCategory(event)
    this.onClickLinkAddHandler = (event) => this.toggleNewCategoryInput(event)
    this.onClickCancelNewCategoryHandler = (event) => this.toggleNewCategoryInput(event)
    this.onSubmitNewSubcategoryHandler = (event) => this.onSubmitNewSubcategory(event)
    this.onChangeNewSubcatInputHandler = (event) => this.updateNewSubcatInputValue(event)
  }

  onSubmitNewSubcategory(event) {
    event.preventDefault()
    const inputValue = this.state.newSubcategoryInputValue.trim()
    this.setState({
      showNewCategoryInput: false,
    })
    this.onSubmitNewSubcatForm(inputValue, this.props.categoryId)

    return false
  }

  getInlineAlertComponent() {
    return (
      <InlineAlert context="error">
        {this.props.confirmDeleteLabel} '{this.props.name}'?
        <span style={{ marginLeft: 10 }}>
          <a
            href=""
            onClick={(event) => this.deleteCategoryHandler(event)}
          >{this.props.approveDeleteLabel}</a>
          <span style={{ marginLeft: 5, marginRight: 5 }}>|</span>
          <a href="" onClick={this.onClickNoInlineAlert}>{this.props.rejectDeleteLabel}</a>
        </span>
      </InlineAlert>
    )
  }

  getNewSubcategoryForm() {
    const displayInput = this.state.showNewCategoryInput ? 'block' : 'none'

    return (
      <form
        style={{ display: displayInput }}
        className={styles.newSubcategoryLine}
        onSubmit={this.onSubmitNewSubcategoryHandler}
        ref={(form) => (this.subCatForm = form)}
      >
        <Input
          id={`edit-category-${this.props.categoryId}`}
          hasAddonRight
          autoComplete="off"
          onChange={this.onChangeNewSubcatInputHandler}
        />
        <Button isAddonRight context="info" type="submit">{this.props.addSubcatButtonLabel}</Button>
        <Link onClick={this.onClickCancelNewCategoryHandler}>{this.props.cancelAddSubcatLinkLabel}</Link>
      </form>
    )
  }

  getNodeComponent() {
    let addLinkClass = cx({
      [`${styles.hidden}`]: this.props.level === 3,
    })

    return (
      <Node level={this.props.level} name={this.props.name}>
        <NodeOptions show={this.state.showNodeOptions}>
          <Link className={addLinkClass} onClick={this.onClickLinkAddHandler}>{this.props.addLinkContent}</Link>
          <Link>{this.props.editLinkContent}</Link>
          <Link context="error" onClick={this.onClickDeleteCategoryHandler}>{this.props.deleteLinkContent}</Link>
        </NodeOptions>
      </Node>
    )
  }

  updateNewSubcatInputValue(event) {
    this.setState({
      newSubcategoryInputValue: event.target.value,
    })
  }

  toggleNewCategoryInput(event) {
    event.preventDefault()

    this.subCatForm.reset()
    this.setState({
      showNewCategoryInput: !this.state.showNewCategoryInput,
    })
  }

  deleteCategory(event) {
    this.setState({
      showInlineAlert: false,
    })
    this.props.onClickConfirmDeleteHandler(event, this.props.categoryId)
  }

  toggleNodeOptions() {
    this.setState({
      showNodeOptions: !this.state.showNodeOptions,
    })
  }

  toggleInlineAlert(event) {
    event.preventDefault()
    this.setState({
      showInlineAlert: !this.state.showInlineAlert,
    })
  }

  render() {
    let content = this.state.showInlineAlert ? this.getInlineAlertComponent() : this.getNodeComponent()

    return (
      <div>
        <span onMouseOver={this.onMouseOverHandler} onMouseOut={this.onMouseOutHandler}>
          {content}
        </span>
        {this.getNewSubcategoryForm()}
      </div>
    )
  }
}

CategoryNode.defaultProps = {
  name: 'Foo',
  level: 1,
  confirmDeleteLabel: 'Are you sure you want to delete',
  approveDeleteLabel: 'YES',
  rejectDeleteLabel: 'NO',
  addLinkContent: 'Add Child',
  editLinkContent: 'Edit',
  deleteLinkContent: 'Delete',
  onClickConfirmDeleteHandler: (event) => { event.preventDefault(); },
  addSubcatButtonLabel: 'OK',
  cancelAddSubcatLinkLabel: 'Cancel',
  onSubmitNewSubcatForm: () => {},
}

CategoryNode.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  confirmDeleteLabel: PropTypes.string,
  approveDeleteLabel: PropTypes.string,
  rejectDeleteLabel: PropTypes.string,
  addLinkContent: PropTypes.any,
  editLinkContent: PropTypes.any,
  deleteLinkContent: PropTypes.any,
  onClickConfirmDeleteHandler: PropTypes.func,
  deleteCategoryClickHandler: PropTypes.func,
  categoryId: PropTypes.number.isRequired,
  addSubcatButtonLabel: PropTypes.string,
  cancelAddSubcatLinkLabel: PropTypes.string,
  onSubmitNewSubcatForm: PropTypes.func,
}
