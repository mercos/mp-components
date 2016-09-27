import React from 'react'
import {storiesOf, action} from '@kadira/storybook'

import ExpansionIndicator from '../src/components/ExpansionIndicator'

storiesOf('ExpansionIndicator', module)
  .add('default', () => (
    <ExpansionIndicator />
  ))

  .add('expanded', () => (
    <ExpansionIndicator expanded />
  ))

  .add('active', () => (
    <div style={{backgroundColor: '#0192F6', padding: 10, width: 200}}>
      <ExpansionIndicator active />
    </div>
  ))

  .add('active and expanded', () => (
    <div style={{backgroundColor: '#0192F6', padding: 10, width: 200}}>
      <ExpansionIndicator expanded active />
    </div>
  ))

  .add('with text', () => (
    <div style={{backgroundColor: '#0192F6', width: 280, color: '#fff', display: 'flex', padding: '10px 15px', alignItems: 'center', cursor: 'pointer'}}>
      <span style={{fontSize: 14}}>Lorem ipsum dolor sit amet</span>
      <span style={{marginLeft: 'auto'}}>
        <ExpansionIndicator active />
      </span>
    </div>
  ))
