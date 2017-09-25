
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import ReduxPromise from 'redux-promise'
import reducers from './reducer';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Registration from "./component/registration_new";
import Login from "./component/Login";

const createStoreWithMiddleware = compose(applyMiddleware(ReduxPromise)(createStore));

ReactDOM.render(

    <Provider store={createStoreWithMiddleware(reducers)} >
        <BrowserRouter>
            <Switch>
            <Route path="/register" component={Registration} />
            <Route path="/" component={Login} />
            </Switch>
        </BrowserRouter>
    </Provider>

    , document.getElementById('root'));
