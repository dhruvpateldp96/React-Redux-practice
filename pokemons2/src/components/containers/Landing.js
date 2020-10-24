import React, { useEffect,useState  } from 'react'
import Footer from "../layouts/Footer"  
import Navbar from "../layouts/Navbar"  
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemons } from '../../actions/searchActions';
import PokeCards from './PokeCards';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import SearchBar from '../layouts/SearchBar';

const Landing = () => {

    const dispatch = useDispatch()

    const [page, setPage] = useState(0)
    // let searchTerm = useSelector(state => state.pokemon.text)

    useEffect(() => {
        dispatch(fetchPokemons())
    }, [])

    
    let pokemonList = useSelector(state => state.pokemons.pokemons)
    let filterPokemonList = useSelector(state => state.pokemons.filterPokemons)

    if (filterPokemonList == null){
        filterPokemonList = pokemonList
    }


    const handleChange= () => {
        setPage(prevState => prevState+1)
        dispatch(fetchPokemons(page))
    }

    return (
        <div className="container">
            <SearchBar/>
            <div className="row">
                {filterPokemonList 
                ? filterPokemonList.map((pokemon) => <PokeCards key={pokemon.name} tag={"add"} pokemon={pokemon}/>) : <h1>Loading</h1>
                }
            </div>
            <Typography>Page: {page}</Typography>
            <Pagination count={10} page={page} onChange={handleChange} />
        </div>
        
    )
}

export default Landing
