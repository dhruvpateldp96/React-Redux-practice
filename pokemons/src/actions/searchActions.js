import { FILTER_POKEMONS, FETCH_POKEMONS, FETCH_MOVIE, LOADING } from './types';
import axios from 'axios';

// import { APIKey } from '../../../movies-series-info/src/APIKey';

// const dispatch = useDispatch()

export const filterPokemons = (pokemonName) => {
  return {
    type: FILTER_POKEMONS,
    payload: pokemonName
  };
};

export const fetchPokemons = (pageNum) => {
  return (dispatch) => {
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon/?offset=${pageNum}&limit=20`)
    // .get(`https://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
    .then(response =>
      dispatch({
        type: FETCH_POKEMONS,
        payload: response.data,
      })
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
