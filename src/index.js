
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import ReduxPromise from 'redux-promise'

import reducers from './reducer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Registration from "./container/registration";
import Login from "./container/login";
import BuyerHome from "./container/buyer_home";
import SellerHome from "./container/seller/seller_home";
import AddItem from "./container/seller/seller_add_item";

import './index.css';

const createStoreWithMiddleware = compose(applyMiddleware(ReduxPromise)(createStore));

ReactDOM.render(
   <Provider store={createStoreWithMiddleware(reducers)} >

      <div className="login-page">
        <div className="form">
          <BrowserRouter>
               <Switch>
                 <Route path="/buyer" component = {BuyerHome}/>
                 <Route path="/seller/addItem" component = {AddItem}/>
                 <Route path="/seller" component = {SellerHome}/>
                 <Route path="/register" component={Registration} />
                 <Route path="/" component={Login} />
              </Switch>
          </BrowserRouter>
        </div>
      </div>
  </Provider> , document.getElementById('root'));
