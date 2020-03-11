import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Switch,
    Route,
} from 'react-router-dom';

import App from './components/App.js';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route component={App} />
        </Switch>
    </HashRouter>,
    document.getElementById("root"),
);