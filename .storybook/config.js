import {configure} from '@kadira/storybook'

function loadStories() {
  require('../stories/Button')
  require('../stories/ListagemComSubcategorias')
  require('../stories/Input')
  require('../stories/InlineAlert')
  require('../stories/Link')
  require('../stories/Node')
}

configure(loadStories, module)
