import { configure } from '@storybook/react'

import '../styles/normalize.css'
import '../styles/app.css'

const req = require.context('../components', true, /.stories.tsx$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
