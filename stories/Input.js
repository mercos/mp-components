import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import Input from '../src/components/Input'

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
