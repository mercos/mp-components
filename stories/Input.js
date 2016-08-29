import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import Input from '../src/components/Input'
import Button from '../src/components/Button'

storiesOf('Input', module)
  .add('small', () => (
    <Input placeholder="Type your text here" size="small" />
  ))

  .add('medium', () => (
    <Input placeholder="Type your text here" />
  ))

  .add('error', () => (
    <Input placeholder="Type your text here" context="error" />
  ))

  .add('big', () => (
    <Input placeholder="Type your text here" size="big" />
  ))

  .add('with Button addon', () => (
    <div>
      <Input placeholder="Username" hasAddonRight={true} onBlur={action('Focus lost')} />
      <Button context="info" isAddonRight={true} onClick={action('Button clicked')}><i className="ion-checkmark-round"/> Submit</Button>
    </div>
  ))

  .add('with error message', () => (
    <Input placeholder="Email address" errorMessage="Invalid email address" />
  ))
