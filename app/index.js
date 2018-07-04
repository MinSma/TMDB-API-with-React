import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store, {history} from './store';
import MainPage from './MainPage';
import AboutMoviePage from './AboutMoviePage';
import { HashRouter, Route, Switch } from 'react-router-dom';

render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route name="movie" path="/movie" component={AboutMoviePage} />
            </Switch>
        </HashRouter>
    </Provider>, document.querySelector('.app'));
