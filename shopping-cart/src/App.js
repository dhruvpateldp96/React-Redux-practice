import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import MainContainer from './components/home/MainContainer'
// import Landing from './components/home/Landing';
// import Movie from './components/home/Movie';

import store from './store';

const App = () => {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            
            <Route exact path="/" component={MainContainer} />
            {/* <Route exact path="/movie/:id" component={Movie} /> */}
            <Footer />
          </div>
        </Router>
      </Provider>
    );
}

export default App;
