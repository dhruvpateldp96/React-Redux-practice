import {
  // SEARCH_MOVIE,
  // FETCH_MOVIES,
  // FETCH_MOVIE,
  FILTER_POKEMONS,
  FETCH_POKEMONS,
  LOADING
} from '../actions/types';

const initialState = {
  // text: '',
  pokemons: [],
  loading: false,
  // movie: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FILTER_POKEMONS:
      if (Object.getOwnPropertyNames(state).length > 0) {
        const pokemonName = action.payload;

        console.log(state.pokemons.results)
        const pokemons = state && state.pokemons.results.map(pokemon => {
          return Object.assign({}, pokemon);
        });
        console.log(pokemons)
        let filteredPokemons;
        filteredPokemons = pokemons.filter(
          (pokemon) => pokemon.name == pokemonName
        );
       
        let ogPokemons = state.pokemons
        return {
          ...state,
          pokemons: {...ogPokemons, results: filteredPokemons}
        }
      };
      // return {
      //   ...state,
      //   pokemons: [],
      //   loading: false
      // };
    case FETCH_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        loading: false
      };
    // case FETCH_MOVIE:
    //   return {
    //     ...state,
    //     movie: action.payload,
    //     loading: false
    //   };
    case LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
