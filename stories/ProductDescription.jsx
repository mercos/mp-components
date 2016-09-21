import React from 'react'
import { storiesOf } from '@kadira/storybook'

import ProductDescription from '../src/components/ProductDescription/ProductDescription.jsx'

storiesOf('ProductDescription', module)

  .add('default', () => (
    <ProductDescription name="Bateria Externa 2100 MAh - Olimpíadas" code="ASD53348" unitOfMeasure="Unidade" />
  ))
