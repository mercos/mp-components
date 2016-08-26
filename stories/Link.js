import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import Link from '../src/components/Link'

storiesOf('Link', module)
  .add('default', () => (
    <Link>Default</Link>
  ))

  .add('decorated', () => (
    <Link decorated={true}>Decorated</Link>
  ))

  .add('error', () => (
    <Link context="error">Error</Link>
  ))

  .add('with font icon', () => (
    <Link fontIconClass="ion-ios-plus">Font icon</Link>
  ))

  .add('decorated with font icon', () => (
    <Link decorated={true} fontIconClass="ion-ios-plus">Decorated font icon</Link>
  ))

  .add('with onClick action', () => (
    <Link fontIconClass="ion-ios-plus" onClick={action('clicked')}>Add Item</Link>
  ))
