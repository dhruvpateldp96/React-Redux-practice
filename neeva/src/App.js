import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

import Landing from './components/containers/Landing';

import store from './store';

const App = () => {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Landing} />
            {/* <Route exact path="/cal" component={Calendar} /> */}
            <Footer />
          </div>
        </Router>
      </Provider>
    );
}

export default App;
