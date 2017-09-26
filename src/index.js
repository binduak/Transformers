
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import ReduxPromise from 'redux-promise'

import reducers from './reducer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Registration from "./component/registration_new";
import Login from "./component/Login";

import './index.css';

const createStoreWithMiddleware = compose(applyMiddleware(ReduxPromise)(createStore));

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)} >
      <div className="login-page">
        <div className="form">
          <BrowserRouter>
               <Switch>
                 <Route path="/register" component={Registration} />
                 <Route path="/" component={Login} />
              </Switch>
          </BrowserRouter>
        </div>
      </div>
    </Provider>

    , document.getElementById('root'));
