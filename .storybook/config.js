import {configure} from '@kadira/storybook'

function loadStories() {
  require('../stories/Button')
  require('../stories/Input')
  require('../stories/InlineAlert')
  require('../stories/Link')
  require('../stories/Node')
  require('../stories/CategoryNode')
}

configure(loadStories, module)
