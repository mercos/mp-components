import React from 'react'
import { storiesOf } from '@kadira/storybook'
import ResponsiveComponentExample from '../src/components/ResponsiveComponentExample'

storiesOf('ResponsiveComponentExample', module)
  .add('test xs', () => (
    <ResponsiveComponentExample />
  ))

  .add('test sm', () => (
    <ResponsiveComponentExample width={350} />
  ))

  .add('test md', () => (
    <ResponsiveComponentExample width={650} />
  ))

  .add('test lg', () => (
    <ResponsiveComponentExample width={1050} />
  ))
