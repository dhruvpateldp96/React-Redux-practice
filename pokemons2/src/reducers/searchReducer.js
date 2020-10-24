import {
  // SEARCH_MOVIE,
  // FETCH_MOVIE,
  FETCH_POKEMONS,
  REMOVE_FROM_CART,
  FILTER_POKEMONS,
  ADD_TO_CART,
  SEARCH_TEXT,
  LOADING
} from '../actions/types';

const initialState = {
  text: '',
  count: 0,
  next: "",
  previous: "",
  pokemons: [],
  cartPokemons: [],
  filterPokemons: [],
  loading: false,
  // movie: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_TEXT:
      return {
        ...state,
        text: action.payload,
        loading: false
      };
    case FILTER_POKEMONS:
      // console.log(action.payload)
      let newState 
      console.log("thisafasfafsafsfsaf"+"     "+action.payload) 
      if (action.payload !== null){
        newState = state.pokemons.filter((_pokemon) => _pokemon.name.includes(action.payload))
      }else{
        newState = state.pokemons
      }
      return {
        ...state,
        filterPokemons: newState,
        loading: false
      };

    case FETCH_POKEMONS:
      return {
        ...state,
        count: action.count,
        next: action.next,
        previous: action.previous,
        pokemons: action.pokemons,
        filterPokemons: action.pokemons,
        loading: false
      };
    case ADD_TO_CART:
      return {
        ...state,
        cartPokemons: [...state.cartPokemons, action.payload],
        loading: false
      };
    case REMOVE_FROM_CART:
      // const newState = state.cartPokemons
      console.log(action.payload)
      return {
        ...state,
        cartPokemons: state.cartPokemons.filter((_pokemon) => _pokemon.name !== action.payload.name),
        loading: false
    };
    case LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
