import React from 'react'
import { storiesOf } from '@kadira/storybook'

import ProductCard from '../src/components/ProductCard/ProductCard.jsx'

storiesOf('ProductCard', module)

  .add('default', () => (
    <ProductCard name="Nome do Produto" code="0101" unitOfMeasure="Unidade" imageURL="http://placehold.it/273x176" />
  ))

  .add('without image', () => (
    <ProductCard name="Nome do Produto" code="0101" unitOfMeasure="Unidade" imageURL="" />
  ))
