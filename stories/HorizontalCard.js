import React from 'react'
import { storiesOf } from '@kadira/storybook'

import HorizontalCard from '../src/components/HorizontalCard'

storiesOf('HorizontalCard', module)
  .add('no image', () => (
    <div style={{width: 270}}>
      <HorizontalCard
        leftContent={
          <div style={{padding: 12, color: '#757e8b'}}>No image available</div>
        }
        rightContent={
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
      <HorizontalCard
        leftContent={
          <img src="Gear-Fit-IconX-.png" width={80} style={{display: 'block'}} />
        }
        rightContent={
          <div>
            <div>Gear IconX</div>
            <div style={{color: '#a0a0a0', marginTop: 4}}>ASD54874</div>
            <div style={{marginTop: 10}}>$99</div>
          </div>
        }
      />
    </div>
  ))
