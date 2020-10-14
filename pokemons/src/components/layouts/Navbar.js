import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../containers/SearchBar';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark mb-5">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand text-white text-lg brand-text" to="/">
              Pokemons
            </Link>
            <form className="form-inline">
              {/* Make it a component */}
              <SearchBar/>
              {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> */}
              {/* end */}
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
          <ul className="navbar-nav ml-auto text-light d-inline-block">
            <li className="nav-item d-inline-block mr-4">
            <Link className="navbar-brand text-white text-lg brand-text" to="/cart">
              <i className="fas fa-shopping-cart fa-5x" id="react-logo" />
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
