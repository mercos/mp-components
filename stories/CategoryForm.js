import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import CategoryForm from '../src/components/CategoryForm'

storiesOf('CategoryForm', module)

  .add('default', () => (
    <CategoryForm
      onSubmit={action('called onSubmit')}
      onClickCancelLink={action('called onClickCancelLink')}
      parentId={1}
      inputPlaceholder="Category form"
    />
  ))
