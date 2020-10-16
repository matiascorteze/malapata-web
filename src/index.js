import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import Product from './pages/Product';
import Contact from './pages/Contact';

ReactDOM.render(
  <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/product/:id" component={Product} />
    <Route exact path="/contact" component={Contact} />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
