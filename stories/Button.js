import React from 'react'
import {storiesOf, action} from '@kadira/storybook'

import Button from '../src/components/Button'

storiesOf('Button', module)
  .add('with text', () => (
    <Button click={action('clicked')}>My First Button</Button>
  ))
  .add('with no text', () => (
    <Button />
  ));
