import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, Switch, HashRouter } from 'react-router-dom'
// COMPONENT
import App from './App';
import Favorites from './Favorites/Favorites';
import NotFound from './NotFound/NotFound';

const routing = (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/Favorites" component={Favorites} />
            <Route component={NotFound} />
        </Switch>
    </HashRouter>
  )
ReactDOM.render(routing, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
