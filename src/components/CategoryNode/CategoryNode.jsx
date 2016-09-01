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
        Are you sure you want to delete '{this.props.name}'?
        <span style={{ marginLeft: 10 }}>
          <a href="">YES</a> | <a href="" onClick={this.onClickNoInlineAlert}>NO</a>
        </span>
      </InlineAlert>
    )
  }

  getNodeComponent() {
    return (
      <Node level={this.props.level} name={this.props.name}>
        <NodeOptions show={this.state.showNodeOptions}>
          <Link>Add Child</Link>
          <Link>Edit</Link>
          <Link context="error" onClick={this.onClickDeleteCategoryHandler}>Delete</Link>
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

CategoryNode.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
}
