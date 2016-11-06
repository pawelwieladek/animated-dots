import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { App } from './components/app';

require('../node_modules/material-design-lite/material.js');
require('../node_modules/material-design-lite/material.css');
require('../styles/main.scss');

injectTapEventPlugin();
render(
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <App />
    </MuiThemeProvider>,
    document.querySelector('#main')
);