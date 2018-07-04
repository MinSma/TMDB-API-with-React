import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import MainPage from './MainPage';
import AboutMoviePage from './AboutMoviePage';
import { HashRouter, Route, Switch } from 'react-router-dom';
import BestMoviesPage from './BestMoviesPage';

render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route name="movie" path="/movie" component={AboutMoviePage} />
                <Route path="/bestMovies" component={BestMoviesPage} />
            </Switch>
        </HashRouter>
    </Provider>, document.querySelector('.app'));
