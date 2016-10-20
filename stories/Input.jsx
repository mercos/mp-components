import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import Input from '../src/components/Input'
import Button from '../src/components/Button'

storiesOf('Input', module)
  .add('small', () => (
    <Input placeholder="Type your text here" size="small" id="small" />
  ))

  .add('medium', () => (
    <Input placeholder="Type your text here" id="medium" />
  ))

  .add('error', () => (
    <Input placeholder="Type your text here" data-context="error" id="error" />
  ))

  .add('big', () => (
    <Input placeholder="Type your text here" size="big" id="big" />
  ))

  .add('with Button addon', () => (
    <div>
      <Input
        placeholder="Username"
        data-hasAddonRight
        onBlur={action('Focus lost')}
        onChange={action('Value changed')}
        id="addon"
      />
      <Button
        context="info"
        data-isAddonRight
        onClick={action('Button clicked')}
      >
        <i className="ion-checkmark-round" /> Submit
      </Button>
    </div>
  ))

  .add('with inline Icon addon', () => (
    <Input
      placeholder="Input with inline icon addon"
      data-hasInnerLeftAddon
      data-inlineAddon={<i className="ion-search" />}
      size="big"
    />
  ))

  .add('with error message', () => (
    <div style={{ marginTop: 70, width: 200 }}>
      <Input
        placeholder="Email address"
        data-errorMessage="Invalid email address"
        id="message"
        autoComplete="off"
        onChange={action('Value changed')}
        onFocus={action('Input received focus')}
      />
    </div>
  ))
