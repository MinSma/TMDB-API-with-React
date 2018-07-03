import React from 'react';
import { render } from 'react-dom';
import { Router, Route} from 'react-router'
import { Provider } from 'react-redux';
import store, {history} from './store';
import MainPage from './MainPage';

render(
    <Provider store={store}>
        <Router history={history}>
            
        </Router>
    </Provider>, document.querySelector('.app'));
