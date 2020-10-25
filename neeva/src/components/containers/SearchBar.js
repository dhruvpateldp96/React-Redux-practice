import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { searchTerm } from '../../actions/searchActions';
// import { fetchMovies } from '../../actions/searchActions'
// import useDebounce from './useDebounce';
const SearchBar = () => {

    const [text, setText] = useState("")
    const dispatch = useDispatch()
    // const debouncedSearchTerm = useDebounce(text, 500);

    // useEffect(
    //     () => {
    //     if (debouncedSearchTerm) {
    //         // Set isSearching state
    //         // dispatch(fetchMovies(text))
    //         // setLoading();
    //     } 
    //     },
        
    //     [debouncedSearchTerm]
    // );

    // const onChange = e => {
    //     setText(e.target.value)
    //     console.log(text)

    // };

    return (
        <div className="container">
          <div className="row">
          <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Search Term"
              onChange={(e) => setText(e.target.value)}
            />
            <button className="btn btn-primary" onClick={()=>{dispatch(searchTerm(text))}}> Search</button>
          </div>
        </div>
    );
}

export default SearchBar
