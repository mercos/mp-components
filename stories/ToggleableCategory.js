import React from 'react'
import {storiesOf, action} from '@kadira/storybook'

import ToggleableCategory from '../src/components/ToggleableCategory'

const ulStyle = {
  width: '100%',
  padding: 0,
  margin: 0,
  listStyleType: 'none'
}

storiesOf('ToggleableCategory', module)

  .add('default', () => (
    <ul style={{width: 300, padding: 0}}>
      <ToggleableCategory label="Smartphones" />
    </ul>
  ))

  .add('active', () => (
    <ul style={{width: 300, padding: 0}}>
      <ToggleableCategory label="Smartphones" active />
    </ul>
  ))

  .add('level 2', () => (
    <ul style={{width: 300, padding: 0}}>
      <ToggleableCategory label="Apple" level={2} />
    </ul>
  ))

  .add('level 3', () => (
    <ul style={{width: 300, padding: 0}}>
      <ToggleableCategory label="iPhone 7" level={3} />
    </ul>
  ))

  .add('onClick', () => (
    <ul style={{width: 300, padding: 0}}>
      <ToggleableCategory
        label="Smartphones"
        onClick={action('onClick')}
      />
    </ul>
  ))

  .add('nested', () => (
    <div style={{width: 300}}>
      <ul style={ulStyle}>
        <ToggleableCategory label="Smartphones" open>
          <ul style={ulStyle}>
            <ToggleableCategory label="Samsung" level={2} />
            <ToggleableCategory label="Apple" level={2} open>
              <ul style={ulStyle}>
                <ToggleableCategory label="iPhone 7" level={3} active />
                <ToggleableCategory label="iPhone 7 Plus" level={3} />
                <ToggleableCategory label="iPod" level={3} />
              </ul>
            </ToggleableCategory>
            <ToggleableCategory label="LG" level={2} open>
              <ul style={ulStyle}>
                <ToggleableCategory label="K10" level={3} />
                <ToggleableCategory label="G4" level={3} />
                <ToggleableCategory label="G5" level={3} />
              </ul>
            </ToggleableCategory>
          </ul>
        </ToggleableCategory>
      </ul>
    </div>
  ))
