import React, { Component } from 'react'
import { storiesOf } from '@kadira/storybook'
import NodeOptions from '../src/components/NodeOptions'
import Link from '../src/components/Link'
import Node from '../src/components/Node'

class NodeController extends Component {
  render() {
    return (
      <div>ola</div>
    )
  }
}

storiesOf('Node', module)
  .add('level 1 with options', () => (
    <Node level={1} name="Root Node">
      <NodeOptions show={true}>
        <Link>Add Child</Link>
        <Link>Edit</Link>
        <Link context="error">Delete</Link>
      </NodeOptions>
    </Node>
  ))
