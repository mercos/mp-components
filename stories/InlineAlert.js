import React from 'react'
import {storiesOf, action} from '@kadira/storybook'

import InlineAlert from '../src/components/InlineAlert'

storiesOf('InlineAlert', module)
  .add('default', () => (
    <InlineAlert>Everything looking good here, carry on.</InlineAlert>
  ))
  .add('error', () => (
    <InlineAlert context="error">Oh no! The Demogorgon in on the loose again.</InlineAlert>
  ))
