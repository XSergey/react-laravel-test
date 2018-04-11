import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import thunk from 'redux-thunk';

import App from './components/app';
import Welcome from './components/welcome';
import AddText from './components/texts_add';
import TextsShow from './components/texts_show';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Router history ={browserHistory}>
            <Route path="/" component={App}>
            <Route path="text/add" component ={AddText} />
            <Route path="texts/:id" component = {TextsShow} />     
            </Route>
        </Router>
    </Provider>
, document.querySelector('#root'));