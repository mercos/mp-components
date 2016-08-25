import {configure} from '@kadira/storybook'

function loadStories() {
  require('../stories/Button')
  require('../stories/StoryListagemComSubcategorias')
  require('../stories/Input')
}

configure(loadStories, module)
