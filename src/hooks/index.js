import React from 'react';
import {
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

import MyUseReducer from './useReducer.js';
import MyUseContext from './useContext.js';


const Hooks = (props) => {
    const prefix = props.match.url;
    return <Switch>
        <Route path={`${prefix}/reducer`} component={MyUseReducer} />
        <Route path={`${prefix}/context`} component={MyUseContext} />
        <Redirect to={{ pathname: `${prefix}/reducer` }} />
    </Switch>
}


export default Hooks;
