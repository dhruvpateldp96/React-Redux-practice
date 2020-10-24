import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from '../../actions/searchActions';
import PokeCards from './PokeCards';

const Landing = () => {

    const dispatch = useDispatch()

    const pokemonList = useSelector(state => state.pokemons.cartPokemons)
    // const content = 
    return (
        <div className="row">
            {pokemonList && pokemonList.map((pokemon) => <PokeCards key={pokemon.name} tag={"remove"} pokemon={pokemon}/>)}
        </div>
    )
}

export default Landing
