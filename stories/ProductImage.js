import React from 'react'
import { storiesOf } from '@kadira/storybook'

import ProductImage from '../src/components/ProductImage/ProductImage.jsx'

storiesOf('ProductImage', module)

  .add('image', () => (
    <ProductImage imageURL="http://placehold.it/273x176" />
  ))

  .add('height parameter 400', () => (
    <ProductImage height={400} imageURL="http://placehold.it/250x400" />
  ))

  .add('width parameter 400', () => (
    <ProductImage width={400} imageURL="http://placehold.it/400x150" />
  ))

  .add('height and width parameter 400', () => (
    <ProductImage width={400} height={400} imageURL="http://placehold.it/500x500" />
  ))

  .add('big image without size parameters', () => (
    <ProductImage imageURL="http://placehold.it/500x500" />
  ))

  .add('without image', () => (
    <ProductImage imageURL="" />
  ))
