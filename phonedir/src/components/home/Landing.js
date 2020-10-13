import React from 'react';
import {useSelector, useDispatch} from 'react-redux'

// import { connect } from 'react-redux';

import SearchForm from './SearchForm';
import MoviesContainer from './MoviesContainer';
import Spinner from '../layout/Spinner';

const Landing = (props) => {
    console.log(props)
    // const { loading } = this.props;
    const loading = useSelector(state => state.movies.loading)
    return (
      <div className="container">
        <SearchForm />
        {loading ? <Spinner /> : <MoviesContainer />}
      </div>
    );
}


export default Landing;
