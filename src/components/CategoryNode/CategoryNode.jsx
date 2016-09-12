import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import InlineAlert from '../InlineAlert'
import Node from '../Node'
import NodeOptions from '../NodeOptions'
import Link from '../Link'
import CategoryForm from '../CategoryForm'
import styles from './CategoryNode.scss'

export default class CategoryNode extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showNodeOptions: false,
      showInlineAlert: false,
      showNewCategoryInput: false,
      newSubcategoryInputErrorMsg: '',
      showEditForm: false,
      editInputErrorMsg: '',
    }

    this.onMouseOverHandler = () => this.toggleNodeOptions(true)
    this.onMouseOutHandler = () => this.toggleNodeOptions(false)
    this.onClickDeleteCategoryHandler = (event) => this.toggleInlineAlert(event)
    this.onClickNoInlineAlert = (event) => this.toggleInlineAlert(event)
    this.deleteCategoryHandler = (event) => this.deleteCategory(event)
    this.onClickLinkAddHandler = (event) => this.toggleNewCategoryInput(event)
    this.onClickCancelNewCategoryHandler = (event) => this.toggleNewCategoryInput(event)
    this.onSubmitNewSubcategoryHandler = (event) => this.onSubmitNewSubcategory(event)
    this.onChangeNewSubcatInputHandler = () => this.clearNewSubcatInput()
    this.onChangeEditInputHandler = () => this.clearEditInput()
    this.onClickEditHandler = (event) => this.toggleEditForm(event)
    this.onClickCancelEditHandler = (event) => this.onClickCancelEdit(event)
    this.onSubmitEditHandler = (event) => this.onSubmitEdit(event)
  }

  getNewSubcategoryForm() { // eslint-disable-line react/sort-comp
    if (this.props.level === 3) {
      return ''
    }

    const formDisplay = this.state.showNewCategoryInput ? 'block' : 'none'

    return (
      <CategoryForm
        style={{ display: formDisplay }}
        onSubmit={this.onSubmitNewSubcategoryHandler}
        onClickCancelLink={this.onClickCancelNewCategoryHandler}
        parentId={this.props.categoryId}
        ref={(form) => (this.subCatFormRef = form)}
        cancelLinkLabel={this.props.cancelAddSubcatLinkLabel}
        inputErrorMessage={this.state.newSubcategoryInputErrorMsg}
        onChangeInputValue={this.onChangeNewSubcatInputHandler}
      />
    )
  }

  getEditForm() {
    return (
      <CategoryForm
        onSubmit={this.onSubmitEditHandler}
        onClickCancelLink={this.onClickCancelEditHandler}
        parentId={this.props.categoryId}
        ref={(form) => (this.editFormRef = form)}
        cancelLinkLabel={this.props.cancelAddSubcatLinkLabel}
        inputErrorMessage={this.state.editInputErrorMsg}
        onChangeInputValue={this.onChangeEditInputHandler}
      />
    )
  }

  saveNewSubcategoryErrorCallback(errorMessage) {
    this.setState({
      newSubcategoryInputErrorMsg: errorMessage,
    })
  }

  editErrorCallback(errorMessage) {
    this.setState({
      editInputErrorMsg: errorMessage,
    })
  }

  getNodeComponent() {
    let addLinkClass = cx({
      [`${styles.hidden}`]: this.props.level === 3,
    })

    return (
      <Node level={this.props.level} name={this.props.name}>
        <NodeOptions show={this.state.showNodeOptions}>
          <Link className={addLinkClass} onClick={this.onClickLinkAddHandler}>{this.props.addLinkContent}</Link>
          <Link onClick={this.onClickEditHandler}>{this.props.editLinkContent}</Link>
          <Link context="error" onClick={this.onClickDeleteCategoryHandler}>{this.props.deleteLinkContent}</Link>
        </NodeOptions>
      </Node>
    )
  }

  onSubmitNewSubcategory(event) {
    event.preventDefault()
    const inputValue = this.subCatFormRef.inputRef.input.value.trim()

    this.props.onSubmitNewSubcatForm(
      inputValue,
      this.props.categoryId,
      this.saveNewSubcategorySuccessCallback.bind(this),
      this.saveNewSubcategoryErrorCallback.bind(this)
    )
  }

  clearNewSubcatInput() {
    this.setState({
      newSubcategoryInputErrorMsg: '',
    })
  }

  clearEditInput() {
    this.setState({
      editInputErrorMsg: '',
    })
  }

  onSubmitEdit(event) {
    event.preventDefault()
    const inputValue = this.editFormRef.inputRef.input.value.trim()

    this.props.onSubmitEditForm(
      inputValue,
      this.props.categoryId,
      this.editSuccessCallback.bind(this),
      this.editErrorCallback.bind(this)
    )
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

  saveNewSubcategorySuccessCallback() {
    this.setState({
      showNewCategoryInput: false,
    })
  }

  editSuccessCallback() {
    this.setState({
      showEditForm: false,
    })
  }

  toggleNewCategoryInput(event) {
    event.preventDefault()

    this.subCatFormRef.formRef.reset()
    this.setState({
      showNewCategoryInput: !this.state.showNewCategoryInput,
    }, () => {
      if (this.state.showNewCategoryInput) {
        this.subCatFormRef.inputRef.input.focus()
      }
    })
  }

  toggleEditForm(event) {
    event.preventDefault()

    this.setState({
      showEditForm: !this.state.showEditForm,
    }, () => {
      if (this.state.showEditForm) {
        this.editFormRef.inputRef.input.value = this.props.name
        this.editFormRef.inputRef.input.focus()
      }
    })
  }

  onClickCancelEdit(event) {
    event.preventDefault()

    this.editFormRef.formRef.reset()
    this.setState({
      showEditForm: false,
      editInputErrorMsg: '',
    })
  }

  deleteCategory(event) {
    this.setState({
      showInlineAlert: false,
    })
    this.props.onClickConfirmDeleteHandler(event, this.props.categoryId)
  }

  toggleNodeOptions(show) {
    this.setState({
      showNodeOptions: show,
    })
  }

  toggleInlineAlert(event) {
    event.preventDefault()
    this.setState({
      showInlineAlert: !this.state.showInlineAlert,
    })
  }

  render() {
    let content
    if (this.state.showInlineAlert) {
      content = this.getInlineAlertComponent()
    } else if (this.state.showEditForm) {
      content = this.getEditForm()
    } else {
      content = this.getNodeComponent()
    }

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
  onSubmitEditForm: () => {},
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
  onSubmitEditForm: PropTypes.func,
}
