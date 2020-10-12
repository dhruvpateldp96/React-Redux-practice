import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {
  searchMovie,
  fetchMovies,
  setLoading
} from '../../actions/searchActions';
import  useDebounce  from "./useDebounce";

const SearchForm = () => {

  const text = useSelector(state => state.movies.text)
  const dispatch = useDispatch()
  const debouncedSearchTerm = useDebounce(text, 500);

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        dispatch(fetchMovies(text))
        setLoading();
      } 
    },

    [debouncedSearchTerm]
  );
  const onChange = e => {
    dispatch(searchMovie(e.target.value))
  };


    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
          <h1 className="display-4 mb-3">
            <i className="fa fa-search" /> Search for a movie ,TV series ..
          </h1>
          <form id="searchForm">
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Search Movies, TV Series ..."
              onChange={onChange}
            />
          </form>
        </div>
      </div>
    );
}

export default SearchForm
