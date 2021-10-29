import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import Newproduct from "layouts/Newproduct.js";
import Allproduct from "layouts/Allproduct.js";
import SignIn from "layouts/SignIn.js";
import SignUp from "layouts/SignUp.js";

import Basestore from './redux/base_store.js';

import "assets/css/material-dashboard-react.css?v=1.9.0";

const store = createStore(Basestore, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
        <React.Suspense>
          <Switch>
            <Route path="/Signin" component={SignIn} />
            <Route path="/Signup" component={SignUp} />
            <Route path="/newproduct" component={Newproduct} />
            <Route path="/allproduct" component={Allproduct} />
            <Route path="/" component={Allproduct} />
          </Switch>
        </React.Suspense>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);  