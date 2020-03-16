import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    BrowserRouter,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

import App from './components/App.js';
import Bpp from './components/Bpp.js';
import Cpp from './components/Cpp.js';

ReactDOM.render(
    <BrowserRouter basename="/test">
        <Switch>
            <Route path="/a" component={App} />
            <Route path="/b" component={Bpp} exact strict sensitive />
            <Route path="/c/:type(view|edit)/:id(\d+)?" component={Cpp} exact strict sensitive></Route>
            <Redirect to={{ pathname: "/a" }} />
        </Switch>
    </BrowserRouter>,
    document.getElementById("root"),
);
