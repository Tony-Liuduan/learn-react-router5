import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

// import HashRouter from './react-router/HashRouter';

import App from './components/App.js';
import Bpp from './components/Bpp.js';

ReactDOM.render(
    <HashRouter basename="/test">
        <Switch>
            <Route path="/a" component={App} />
            <Route path="/b" component={Bpp} />
            <Route path="/c/:type(view|edit)/:id(\d+)?" component={App} strict sensitive></Route>
            <Redirect to={{ pathname: "/a" }} />
        </Switch>
    </HashRouter>,
    document.getElementById("root"),
);
