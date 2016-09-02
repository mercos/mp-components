import React, { Component, PropTypes } from 'react'
import InlineAlert from '../InlineAlert'
import Node from '../Node'
import NodeOptions from '../NodeOptions'
import Link from '../Link'

export default class CategoryNode extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showNodeOptions: false,
      showInlineAlert: false,
    }

    this.onMouseOverHandler = () => this.toggleNodeOptions()
    this.onMouseOutHandler = () => this.toggleNodeOptions()
    this.onClickDeleteCategoryHandler = (event) => this.toggleInlineAlert(event)
    this.onClickNoInlineAlert = (event) => this.toggleInlineAlert(event)
  }

  getInlineAlertComponent() {
    return (
      <InlineAlert context="error">
        {this.props.confirmDeleteLabel} '{this.props.name}'?
        <span style={{ marginLeft: 10 }}>
          <a
            href=""
            onClick={(event) => this.props.onClickConfirmDeleteHandler(event, this.props.categoryId)}
          >{this.props.approveDeleteLabel}</a>
          <span style={{ marginLeft: 5, marginRight: 5 }}>|</span>
          <a href="" onClick={this.onClickNoInlineAlert}>{this.props.rejectDeleteLabel}</a>
        </span>
      </InlineAlert>
    )
  }

  getNodeComponent() {
    return (
      <Node level={this.props.level} name={this.props.name}>
        <NodeOptions show={this.state.showNodeOptions}>
          <Link>{this.props.addLinkContent}</Link>
          <Link>{this.props.editLinkContent}</Link>
          <Link context="error" onClick={this.onClickDeleteCategoryHandler}>{this.props.deleteLinkContent}</Link>
        </NodeOptions>
      </Node>
    )
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
      <span onMouseOver={this.onMouseOverHandler} onMouseOut={this.onMouseOutHandler}>
        {content}
      </span>
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
}
