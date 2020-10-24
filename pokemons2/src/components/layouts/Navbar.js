import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import {Cart} from "../containers/Cart"

function Navbar() {
  
  return (
    <div>
      <nav className="navbar navbar-light bg-dark mb-5">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand text-white text-lg brand-text" to="/">
              Pokemons
            </Link>
            

          </div>
          <ul className="navbar-nav ml-auto text-light d-inline-block">
            <li className="nav-item d-inline-block mr-4">
              <Link to="/cart" >
                <i className="fa fa-shopping-cart fa-5x" id="cart" />
              </Link>
            </li>
            <li className="nav-item d-inline-block mr-4">
              <i className="fab fa-react fa-5x" id="react-logo" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
