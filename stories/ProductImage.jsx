import React from 'react'
import { storiesOf } from '@kadira/storybook'

import ProductImage from '../src/components/ProductImage/ProductImage.jsx'

storiesOf('ProductImage', module)

  .add('default', () => (
    <ProductImage imageURL="http://placehold.it/273x176" />
  ))

  .add('without image', () => (
    <ProductImage imageURL="" />
  ))
