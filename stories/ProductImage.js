import React from 'react'
import { storiesOf } from '@kadira/storybook'

import ProductImage from '../src/components/ProductImage/ProductImage.jsx'

storiesOf('ProductImage', module)

  .add('with image', () => (
    <ProductImage imageURL="http://placehold.it/273x176" />
  ))

  .add('with big image', () => (
    <ProductImage imageURL="http://placehold.it/500x500" />
  ))

  .add('without image', () => (
    <ProductImage imageURL="" />
  ))
