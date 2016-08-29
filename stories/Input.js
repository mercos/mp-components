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
      <Input placeholder="Username" addonRight={true} />
      <Button context="info" isAddonRight={true}><i className="ion-checkmark-round"/> Submit</Button>
    </div>
  ))
