import React from 'react'
import {storiesOf, action} from '@kadira/storybook'

import InlineAlert from '../src/components/InlineAlert'

storiesOf('InlineAlert', module)
  .add('default', () => (
    <InlineAlert>InlineAlert</InlineAlert>
  ))
  .add('error', () => (
    <InlineAlert context="error">InlineAlert</InlineAlert>
  ))
