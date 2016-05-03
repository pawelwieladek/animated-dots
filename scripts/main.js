import React from 'react'
import { render } from 'react-dom'

import { App } from './components/app'

require('../node_modules/material-design-lite/material.js');
require('../node_modules/material-design-lite/material.css');
require('../styles/main.less');

render(<App />, document.querySelector('#main'));