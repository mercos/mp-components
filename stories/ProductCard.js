import React from 'react'
import { storiesOf } from '@kadira/storybook'

import ProductCard from '../src/components/ProductCard/ProductCard.jsx'

storiesOf('ProductCard', module)

  .add('without image', () => (
    <ProductCard
      name="Nome do Produto"
      code="0101"
      unitOfMeasure="Unidade"
      imageURL=""
      width={273}
    />
  ))

  .add('with image', () => (
    <ProductCard
      name="Nome do Produto"
      code="0101"
      unitOfMeasure="Unidade"
      imageURL="http://placehold.it/273x176"
      width={273}
    />
  ))

  .add('responsive card 320px', () => (
    <ProductCard
      name="Produto 1"
      code="0101"
      unitOfMeasure="Unidade"
      imageURL="http://placehold.it/273x176"
      width={320}
    />
  ))