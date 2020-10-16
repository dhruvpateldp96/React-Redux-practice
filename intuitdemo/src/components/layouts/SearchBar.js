import React,{ useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import useDebounce from './useDebounce';
// import { filterPokemons } from '../../actions/searchActions';

const SearchBar = () => {

    const dispatch = useDispatch()
    const [searchTerm, setSearchTerm] = useState("")
    const debouncedSearchTerm = useDebounce(searchTerm, 200)

    useEffect(
        () => {
        // Make sure we have a value (user has entered something in input)
        if (debouncedSearchTerm !== null) {
            // Set isSearching state
            
            //----------- dispatch(filterPokemons(searchTerm))
        } 
        },
        // This is the useEffect input array
        // Our useEffect function will only execute if this value changes ...
        // ... and thanks to our hook it will only change if the original ...
        // value (searchTerm) hasn't changed for more than 500ms.
        [debouncedSearchTerm]
    );
    return (
        <div>
            <input 
              class="form-control" 
              type="text" 
              placeholder="Search" 
              aria-label="Search"
              onChange={(e)=>{setSearchTerm(e.target.value)}}
              />
        </div>
    )
}

export default SearchBar
