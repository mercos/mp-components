import {configure} from '@kadira/storybook'

function loadStories() {
  require('../stories/Button')
  require('../stories/Input')
  require('../stories/InlineAlert')
  require('../stories/Link')
  require('../stories/Node')
  require('../stories/CategoryNode')
  require('../stories/CategoryForm')
  require('../stories/Card.jsx')
  require('../stories/ProductImage.jsx')
  require('../stories/ProductDescription.jsx')
  require('../stories/ProductCard.jsx')
}

configure(loadStories, module)
