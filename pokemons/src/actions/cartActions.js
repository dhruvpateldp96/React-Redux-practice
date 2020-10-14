import { ADD_TO_CART, FETCH_POKEMONS, FETCH_MOVIE, LOADING } from './types';
import axios from 'axios';

// import { APIKey } from '../../../movies-series-info/src/APIKey';

// const dispatch = useDispatch()

export const addToCart = (pokemon) => {
  return {
    type: ADD_TO_CART,
    payload: pokemon
  };
};

// export const fetchPokemons = (text) => {
//   return (dispatch) => {
//   return axios
//     .get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`)
//     // .get(`https://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
//     .then(response =>
//       dispatch({
//         type: FETCH_POKEMONS,
//         payload: response.data
//       })
//     )
//     .catch(err => console.log(err));
//   };
// };

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
