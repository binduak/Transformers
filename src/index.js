
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import ReduxPromise from 'redux-promise'

import reducers from './reducer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Registration from "./component/registration";
import Login from "./component/login";
import BuyerHome from "./component/buyer_index";

import './index.css';

const createStoreWithMiddleware = compose(applyMiddleware(ReduxPromise)(createStore));

ReactDOM.render(
   <Provider store={createStoreWithMiddleware(reducers)} >

      <div className="login-page">
        <div className="form">
          <BrowserRouter>
               <Switch>
                 <Route path="/buyer" component = {BuyerHome}/>
                 <Route path="/register" component={Registration} />
                 <Route path="/" component={Login} />
              </Switch>
          </BrowserRouter>
        </div>
      </div>
  </Provider> , document.getElementById('root'));
