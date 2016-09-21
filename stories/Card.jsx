import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Card from '../src/components/Card/Card.jsx'

storiesOf('Card', module)

  .add('default', () => (
    <Card />
  ))

  .add('with text content', () => (
    <Card>
      <h1>Título</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu ligula quis elit porttitor interdum. Duis
      blandit, est facilisis euismod ultricies, antevelit fringilla justo, ac aliquam urna risus in lectus. Ut
      mauris neque, varius ac lobortis et, tristique consectetur mi. Quisque eget dapibus nunc, id imperdiet ex.
      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent
      ultricies consequat leo vel vestibulum. Morbi in imperdiet dui, sed varius elit. Mauris consequat enim
      viverra rhoncus dapibus. Fusce pulvinar ultricies sapien, at porttitor ipsum condimentum eu. Ut sed vehicula
      risus. Aenean ac elementum turpis. Vivamus laoreet mi ut diam molestie, quis lobortis lorem luctus. Aenean
      libero mi, egestas nec feugiat id, egestas ac dolor. Etiam nec interdum erat. Sed lacinia eget turpis at
      molestie.</p>
    </Card>
  ))

  .add('with image content', () => (
    <Card>
      <img src="http://placehold.it/200x200" alt="200x200" />
    </Card>
  ))
