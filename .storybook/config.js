import {configure} from '@kadira/storybook'

function loadStories() {
  require('../stories/Button')
}

configure(loadStories, module)
