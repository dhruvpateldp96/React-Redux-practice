import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

import Seller from './components/containers/Seller';
import Buyer from './components/containers/Buyer';
import ProjectDetail from './components/containers/ProjectDetail';

import store from './store';

const App = () => {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Seller} />
            <Route exact path="/buyer" component={Buyer} />
            <Route exact path="/project/:id" component={ProjectDetail} />

            <Footer />
          </div>
        </Router>
      </Provider>
    );
}

export default App;
