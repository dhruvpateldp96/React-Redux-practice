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
      // Make sure we have a value (user has entered something in input)
      if (debouncedSearchTerm) {
        // Set isSearching state
        dispatch(fetchMovies(text))
        setLoading();
      } 
    },
    // This is the useEffect input array
    // Our useEffect function will only execute if this value changes ...
    // ... and thanks to our hook it will only change if the original ...
    // value (searchTerm) hasn't changed for more than 500ms.
    [debouncedSearchTerm]
  );
  const onChange = e => {
    dispatch(searchMovie(e.target.value))
  };

  // const onSubmit = e => {
  //   e.preventDefault();
  //   dispatch(fetchMovies(text))
  //   setLoading();
    
  // };

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
            {/* <button type="submit" className="btn btn-primary btn-bg mt-3">
              Search
            </button> */}
          </form>
        </div>
      </div>
    );
}

export default SearchForm
