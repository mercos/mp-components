import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import Button from '../src/components/Button'

storiesOf('Button', module)

  .add('default', () => (
    <Button onClick={action('clicked')}>Default</Button>
  ))

  .add('success', () => (
    <Button data-context="success"><i className="ion-checkmark-round" /> Submit</Button>
  ))

  .add('error', () => (
    <Button data-context="error"><i className="ion-close-round" /> Delete</Button>
  ))

  .add('info', () => (
    <Button data-context="info"><i className="ion-information-circled" /> See more</Button>
  ))

  .add('big', () => (
    <Button
      data-context="info"
      size="big"
      className="foo bar"
    >
      <i className="ion-information-circled" /> See more
    </Button>
  ))
