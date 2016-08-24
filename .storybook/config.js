import {configure} from '@kadira/storybook'

function loadStories() {
  require('../stories/Button')
  require('../stories/StoryListagemComSubcategorias')
}

configure(loadStories, module)
