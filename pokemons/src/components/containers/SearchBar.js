import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import  useDebounce  from "./useDebounce";
import {filterPokemons} from "../../actions/searchActions"
const SearchBar = () => {

//   const text = useSelector(state => state.movies.text)
  const dispatch = useDispatch()
//   const debouncedSearchTerm = useDebounce(text, 500);

//   useEffect(
//     () => {
//       if (debouncedSearchTerm) {
//         // Set isSearching state
//         // dispatch(fetchMovies(text))
//         // setLoading();
//       } 
//     },
    
//     [debouncedSearchTerm]
//   );

  const onChange = e => {
    console.log(e.target.value)
    dispatch(filterPokemons(e.target.value))
  };

  // const onSubmit = e => {
  //   e.preventDefault();
  //   dispatch(fetchMovies(text))
  //   setLoading();
    
  // };

    return (
        <div className="container">
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
    );
}

export default SearchBar
