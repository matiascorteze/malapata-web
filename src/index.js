import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import SobreNosotros from './pages/SobreNosotros';
import ScrollToTop from './components/ScrollToTop';

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <Route exact path="/" component={Home} />
      <Route exact path="/product/:id" component={ProductPage} />
      <Route exact path="/sobre-nosotros" component={SobreNosotros} />
    </ScrollToTop>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
