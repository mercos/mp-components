import React from 'react'
import { storiesOf } from '@kadira/storybook'

import VerticalCard from '../src/components/VerticalCard'

storiesOf('VerticalCard', module)
  .add('no image', () => (
    <div style={{width: 270}}>
      <VerticalCard
        topContent={
          <div style={{padding: 12, color: '#757e8b'}}>No image available</div>
        }
        bottomContent={
          <div>
            <div>Gear IconX</div>
            <div style={{color: '#a0a0a0', marginTop: 4}}>ASD54874</div>
            <div style={{marginTop: 10}}>$99</div>
          </div>
        }
      />
    </div>
  ))

  .add('image and text', () => (
    <div style={{width: 270}}>
      <VerticalCard
        className="lmao"
        topContent={
          <img src="Gear-Fit-IconX-.png" width={270} style={{display: 'block'}} />
        }
        bottomContent={
          <div>
            <div>Gear IconX</div>
            <div style={{color: '#a0a0a0', marginTop: 4}}>ASD54874</div>
            <div style={{marginTop: 10}}>$99</div>
          </div>
        }
      />
    </div>
  ))
