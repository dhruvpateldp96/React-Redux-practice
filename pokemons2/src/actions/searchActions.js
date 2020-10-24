import { ADD_TO_CART, FETCH_POKEMONS, REMOVE_FROM_CART, FILTER_POKEMONS, LOADING,SEARCH_TEXT } from './types';
import axios from 'axios';

// import { APIKey } from '../../../movies-series-info/src/APIKey';

// const dispatch = useDispatch()
export const searchText = (term) => {
  return {
    type: SEARCH_TEXT,
    payload: term
  };
};

export const addToCart = (pokemon) => {
  return {
    type: ADD_TO_CART,
    payload: pokemon
  };
};

export const removeFromCart = (pokemon) => {
  return {
    type: REMOVE_FROM_CART,
    payload: pokemon
  };
};

export const filterPokemons = (searchTerm) => {
  return {
    type: FILTER_POKEMONS,
    payload: searchTerm
  };
};

export const fetchPokemons = (page) => {
  return (dispatch) => {
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${page}`)
    .then(response =>{
      console.log(response.data);
      dispatch({
        type: FETCH_POKEMONS,
        count: response.data.count,
        next: response.data.next,
        previous: response.data.previous,
        pokemons: response.data.results
      })
    }
    ) 
    .catch(err => console.log(err));
  };
};

// export const fetchMovie = (id) => {
//   return (dispatch) => {
//     return axios
//     .get(`https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
//     .then(response =>
//       dispatch({
//         type: FETCH_MOVIE,
//         payload: response.data
//       })
//     )
//     .catch(err => console.log(err));
//     };
// };

export const setLoading = () => {
  return {
    type: LOADING
  };
};
