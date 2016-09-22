import React from 'react'
import { storiesOf } from '@kadira/storybook'

import ProductCard from '../src/components/ProductCard/ProductCard.jsx'

storiesOf('ProductCard', module)

  .add('with image', () => (
    <ProductCard name="Nome do Produto" code="0101" unitOfMeasure="Unidade" imageURL="http://placehold.it/273x176" />
  ))

  .add('two cards with image', () => (
    <div>
      <ProductCard name="Produto 1" code="0101" unitOfMeasure="Unidade" imageURL="http://placehold.it/273x176" />
      <ProductCard name="Produto 2" code="0202" unitOfMeasure="Unidade" imageURL="http://placehold.it/273x176" />
    </div>
  ))

  .add('without image', () => (
    <ProductCard name="Nome do Produto" code="0101" unitOfMeasure="Unidade" imageURL="" />
  ))

  .add('two cards without image', () => (
    <div>
      <ProductCard name="Produto 1" code="0101" unitOfMeasure="Unidade" imageURL="" />
      <ProductCard name="Produto 2" code="0202" unitOfMeasure="Unidade" imageURL="" />
    </div>
  ))
