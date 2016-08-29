import React from 'react'
import {storiesOf, action} from '@kadira/storybook'

import Button from '../src/components/Button'

storiesOf('Button', module)

  .add('default', () => (
    <Button click={action('clicked')}>Default</Button>
  ))

  .add('success', () => (
    <Button context="success"><i className="ion-checkmark-round" /> Submit</Button>
  ))

  .add('error', () => (
    <Button context="error"><i className="ion-close-round" /> Delete</Button>
  ))

  .add('info', () => (
    <Button context="info"><i className="ion-information-circled" /> See more</Button>
  ))

  .add('big', () => (
    <Button context="info" size="big"><i className="ion-information-circled" /> See more</Button>
  ))
